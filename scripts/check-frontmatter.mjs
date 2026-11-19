// Validates every SKILL.md frontmatter, paired agents/openai.yaml metadata,
// and .claude-plugin/plugin.json skill list using `yaml` (the parser `skills` uses).
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { basename, dirname, join, relative } from "node:path";
import { parseDocument } from "yaml";

const root = new URL("..", import.meta.url).pathname;

function* skillFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* skillFiles(path);
    else if (entry.name === "SKILL.md") yield path;
  }
}

const failures = [];
const discoveredRelDirs = new Set();

for (const file of skillFiles(join(root, "skills"))) {
  const where = relative(root, file);
  const skillDir = dirname(file);
  const folderName = basename(skillDir);
  const relDir = "./" + relative(root, skillDir).split("\\").join("/");
  discoveredRelDirs.add(relDir);

  const match = readFileSync(file, "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    failures.push(`${where}: no frontmatter block`);
    continue;
  }
  const doc = parseDocument(match[1], { strict: true, uniqueKeys: true });
  if (doc.errors.length > 0) {
    failures.push(`${where}: ${doc.errors[0].message.split("\n")[0]}`);
    continue;
  }
  const data = doc.toJS();
  for (const key of ["name", "description"]) {
    if (typeof data?.[key] !== "string" || data[key].trim() === "") {
      failures.push(`${where}: missing \`${key}\``);
    }
  }
  if (typeof data?.name === "string" && data.name !== folderName) {
    failures.push(
      `${where}: frontmatter \`name\` ("${data.name}") does not match folder name ("${folderName}")`,
    );
  }

  const openaiPath = join(skillDir, "agents", "openai.yaml");
  const openaiWhere = relative(root, openaiPath);
  if (!existsSync(openaiPath)) {
    failures.push(`${openaiWhere}: missing agents/openai.yaml`);
    continue;
  }
  const openaiDoc = parseDocument(readFileSync(openaiPath, "utf8"), {
    strict: true,
    uniqueKeys: true,
  });
  if (openaiDoc.errors.length > 0) {
    failures.push(`${openaiWhere}: ${openaiDoc.errors[0].message.split("\n")[0]}`);
    continue;
  }
  const openaiData = openaiDoc.toJS();
  for (const field of ["display_name", "short_description"]) {
    if (
      typeof openaiData?.interface?.[field] !== "string" ||
      openaiData.interface[field].trim() === ""
    ) {
      failures.push(`${openaiWhere}: missing \`interface.${field}\``);
    }
  }

  const isUserInvokedSkill = data?.["disable-model-invocation"] === true;
  const isUserInvokedOpenai =
    openaiData?.policy?.allow_implicit_invocation === false;
  if (isUserInvokedSkill !== isUserInvokedOpenai) {
    failures.push(
      `${where} & ${openaiWhere}: invocation mismatch (disable-model-invocation=${String(
        isUserInvokedSkill,
      )} vs allow_implicit_invocation=${String(openaiData?.policy?.allow_implicit_invocation)})`,
    );
  }
}

const pluginPath = join(root, ".claude-plugin", "plugin.json");
const plugin = JSON.parse(readFileSync(pluginPath, "utf8"));
const declaredSkills = new Set(plugin.skills ?? []);

for (const relDir of discoveredRelDirs) {
  if (!declaredSkills.has(relDir)) {
    failures.push(`.claude-plugin/plugin.json: missing skill "${relDir}"`);
  }
}
for (const relDir of declaredSkills) {
  if (!discoveredRelDirs.has(relDir)) {
    failures.push(
      `.claude-plugin/plugin.json: declares "${relDir}" which has no SKILL.md`,
    );
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  console.error(
    `\n${failures.length} validation error(s). Quote any YAML value containing ": " or starting with a YAML indicator character.`,
  );
  process.exit(1);
}
console.log(`All ${discoveredRelDirs.size} skills, openai.yaml files, and plugin manifest entries are valid.`);
