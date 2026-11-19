# Ad Skills

Small, composable agent skills for taking a short-form commercial from a raw creative direction to a shootable, continuity-locked storyboard before spending time or budget on production.

Built around the authoring discipline from [`mattpocock/skills`](https://github.com/mattpocock/skills): small single-purpose stages split by sequence (to prevent premature completion), shared craft vocabulary ([`GLOSSARY.md`](./GLOSSARY.md)), positive prompting, and checkable completion criteria.

## The pipeline

| Stage | Skill | What it owns | What it delivers |
| --- | --- | --- | --- |
| 1. Reference | [`ad-references`](./skills/ad-references/SKILL.md) | Hunts real commercials and dissects delivery, pacing, humor/tension engine, product proof, and brand entry | Verified links, timecoded beats, and concrete transferable mechanisms |
| 2. Concept | [`ad-concepts`](./skills/ad-concepts/SKILL.md) | Pins down audience tension and one product property, then generates genuinely distinct premises | 4 to 5 orthogonal concept cards that pass the swap test, each with a one-sentence pitch |
| 3. Script | [`ad-script`](./skills/ad-script/SKILL.md) | Turns a premise into timed action, dialogue, voiceover, earned pauses, and a closing button | Three-column script (`Time \| Video \| Audio`) verified by a read-aloud budget and the mute test |
| 4. Storyboard | [`ad-storyboard`](./skills/ad-storyboard/SKILL.md) | Decides focal entry, shot sizes, static holds vs motivated moves, cut triggers, and cross-shot continuity | Numbered shot list (`S01`, `S02`, ...) with start/end frames, Continuity Lock, and test-take checks |

All four skills are **model-invoked**: you can invoke any skill directly by name (for example `/ad-script`), or simply ask your agent in plain language ("write a 20-second ad for...", "break this script into shots") and let it pick up the matching skill automatically.

## Installation

Pick **one** install method per agent so you do not end up with duplicate skills.

<details>
<summary><strong>Claude Code</strong> (plugin marketplace)</summary>

```bash
claude plugin marketplace add Dankosik/ad-skills
claude plugin install ad-skills@dankosik
```

</details>

<details>
<summary><strong>Codex</strong> (plugin marketplace)</summary>

```bash
codex plugin marketplace add Dankosik/ad-skills
codex plugin add ad-skills@dankosik
```

Updates automatically at startup when the plugin version bumps.

</details>

<details>
<summary><strong>GitHub Copilot</strong> (CLI and VS Code)</summary>

```bash
copilot plugin marketplace add Dankosik/ad-skills
copilot plugin install ad-skills@dankosik
```

To enable automatic updates, add to `~/.copilot/settings.json`:

```json
{
  "extraKnownMarketplaces": {
    "dankosik": {
      "source": { "source": "github", "repo": "Dankosik/ad-skills" },
      "autoUpdate": true
    }
  }
}
```

In VS Code, run **Chat: Install Plugin From Source** and enter `https://github.com/Dankosik/ad-skills`.

</details>

<details>
<summary><strong>Gemini CLI</strong></summary>

```bash
gemini skills install https://github.com/Dankosik/ad-skills.git --path skills
```

Re-run the command to update.

</details>

<details>
<summary><strong>Any other agent, or editable local copies</strong> (skills.sh)</summary>

```bash
npx skills@latest add Dankosik/ad-skills -a <agent>  # cursor, opencode, windsurf, amp, antigravity; omit -a to choose
```

To update later, run `npx skills@latest update`, and re-run `add` when new skills are added.

</details>

## Quick smoke test

A fast way to verify `ad-script` on any real product:

> Write a 20-second commercial for [your product]. Then remove all voiceover and explain what a viewer still understands about the product from action alone.

What good output looks like:

- **Visual proof first**: the Video column shows observable physical behavior rather than inner feelings or slogans, and the core product claim survives the **mute test**.
- **Honest timing**: spoken words plus explicit `[PAUSE Ns]` beats fit cleanly inside 20 seconds at real read-aloud cadence.
- **Clean handoff**: feeding that script into `ad-storyboard` yields numbered shots (`S01`, `S02`, ...) with exact start/end frames, a top-level **Continuity Lock**, and **test-take checks** on the hard shots.

Pair `ad-script` with `ad-references` first when you want real craft mechanisms from a specific era or genre instead of generic mood words.

## Why four separate skills

Putting reference research, concepting, scripting, and storyboarding into one mega-prompt causes **premature completion**: the agent rushes past real research and distinct premises straight into generic dialogue and vague shot labels. Splitting by stage gives each step its own completion gates:

- `ad-references` refuses mood adjectives and demands real links, **brand entry** timing, and **transferable mechanisms**.
- `ad-concepts` kills generic brand-swappable ideas via the **swap test** before a single line of dialogue gets written.
- `ad-script` forces the **mute test** and **read-aloud budget** before anyone draws a frame.
- `ad-storyboard` locks product, lighting, and axis invariants up front and marks complex shots with **test-take checks**.

## Roadmap

These four skills cover creative development up to a production-ready storyboard. Future production skills planned as separate stages once the core pipeline is battle-tested:

- **Camera / generation operator**: translates individual storyboard shots (`S01`, `S02`, ...) into concrete studio/model parameters and surgical reshoot adjustments while logging winning takes.
- **Assembly and sound editor**: builds rough animatics from still frames to test rhythm early, then assembles final takes with cut points, voiceover timing, SFX, and music.

## Local development

```bash
npm install
npm run check
./scripts/link-skills.sh
```

See [`AGENTS.md`](./AGENTS.md) for skill-authoring rules and validation checks, and [`GLOSSARY.md`](./GLOSSARY.md) for the shared vocabulary.

## License

[MIT](./LICENSE)
