# Ad Skills Repo Conventions

Skills live in a flat layout under `skills/<skill-name>/` so every harness (Claude Code, Codex, Copilot, Gemini CLI, and `skills.sh`) loads the exact same set with no bucket drift.

## Authoring principles

Every `SKILL.md` in this repo follows these rules (inspired by Matt Pocock's `writing-for-agents` discipline):

- **Process, not lectures.** Write ordered steps and checkable, demanding completion criteria. Delete any sentence that states what the model already obeys by default (the no-op test).
- **Leading words.** Use the shared vocabulary in [`GLOSSARY.md`](./GLOSSARY.md) consistently so every skill speaks one craft language.
- **Single source of truth.** Define each concept or format rule once; repeat only the leading word elsewhere.
- **Positive prompting.** State the target behavior directly instead of steering by prohibition. Keep a negation only as a hard guardrail paired with the positive target.
- **Crisp context pointers.** Every model-invoked skill's `description` loads on every turn: front-load the leading word, keep one trigger per distinct branch, and prevent overlap with sibling skills.
- **Progressive disclosure.** Keep `SKILL.md` lean for every run; push branch-only reference material into a sibling `.md` file behind an explicit pointer.
- **Fresh context for subagents.** Any skill that delegates discovery to a subagent must state to start it with a fresh context window.
- **No em-dashes.** Use commas, colons, periods, parentheses, or conjunctions in prose.

## Manifest and validation invariants

- Every skill folder `skills/<name>/` must contain `SKILL.md` (with `name` matching `<name>`) and `agents/openai.yaml`.
- Invocation mode must match across both files: either model-invoked (omit `disable-model-invocation` and omit `policy` in `agents/openai.yaml`) or user-invoked (`disable-model-invocation: true` plus `policy.allow_implicit_invocation: false`).
- Every skill under `skills/` must appear in `.claude-plugin/plugin.json`'s `skills` array and in `README.md` with a link to its `SKILL.md`.
- Keep `package.json` and `.claude-plugin/plugin.json` versions in sync via `npm run sync-plugin-version`.

Run these checks after editing any skill or manifest:

```bash
npm run check
claude plugin validate . --strict
```

Run `scripts/link-skills.sh` to symlink all skills into `~/.claude/skills` and `~/.agents/skills` for local testing.
