---
name: ad-script
description: Write a timed three-column commercial script verified by the mute test and read-aloud budget. Use when turning an ad premise into a timed spot, writing a short-form video ad script, or auditing whether a script fits its runtime and works without voiceover.
---

Turn a chosen commercial premise into a timed **three-column script** whose picture proves the product without narration and whose words fit the exact runtime when read aloud.

## Process

1. **Confirm the inputs.** Verify target runtime in exact seconds, the product and **single-minded proposition**, the chosen **dramatic situation**, and any tone or reference mechanisms. If the user wants concept options before committing to a script, call the Skill tool with `"ad-concepts"`. If the user gives a direct scripting request ("Write a 20-second ad for X"), commit to one sharp **product-locked** situation and proceed.

2. **Build the visual spine first.** Lay out the beats from opening hook to **button** (the closing visual/audio landing that locks product and brand into memory) using only observable camera reality: physical actions, objects, expressions, and environment. Translate every internal feeling or product claim into visible physical evidence.

3. **Layer the Audio track.** Add dialogue, voiceover, sound effects (`SFX`), music cues, and explicit **earned pauses** (`[PAUSE 2s]`) where picture or sound carries the beat. Let audio add contrast, rhythm, or a twist around the picture rather than narrating what the **Video** column already shows.

4. **Audit the read-aloud budget.** Count every spoken word per beat and across the full spot against real speaking cadence:
   - Baseline read speed: ~2.3 words/sec in English, ~2.0 words/sec in longer-word languages such as Russian or German (roughly 4.5 syllables/sec across languages). Slow down for dry, deadpan, or dramatic delivery; speed up only when rapid patter is a deliberate stylistic choice, and state the assumed pace.
   - Subtract every `[PAUSE Ns]`, reaction hold, and SFX-only beat from available speaking time before checking word count.
   - Cut words until every beat and the total spot read aloud comfortably inside the exact target runtime with zero rushing.

5. **Run the mute test.** Strip every line of voiceover and explanatory on-screen copy. Write a **Mute Test** verdict directly beneath the script stating:
   - What a viewer with sound muted still understands about the product from the **Video** column alone.
   - Which details live only in Audio.
   If the core product claim disappears on mute, rewrite the **Video** column until physical action carries the proof, then re-verify the **read-aloud budget**.

## Output format

1. **Header**: Product, single-minded proposition, exact target runtime, and assumed voice cadence.
2. **Three-column script** as a Markdown table:

| Time | Video | Audio |
| --- | --- | --- |
| `0:00-0:03` | Observable screen action only | `VO:`, `CHARACTER:`, `SFX:`, `MUSIC:`, `[PAUSE Ns]` |

3. **Read-aloud budget**: spoken words, pause/visual-only seconds, implied words/sec on speaking time, and pass/fail verdict.
4. **Mute test**: step 5 verdict stating what survives visually without narration and confirming the core claim passes.

When the user supplies an existing draft script to audit, run steps 4 and 5 against it first, report the exact overflows and mute-test gaps, and offer a tightened rewrite.

## Done when

- Cumulative timestamps in the **three-column script** match the target runtime to the exact second with no gaps or overflow.
- Every **Video** cell describes observable camera reality.
- The **read-aloud budget** math is explicit and fits comfortably with **earned pauses** preserved.
- The **mute test** is included and passes: the core product claim survives from action alone.
