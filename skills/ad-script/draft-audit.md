# Draft Script Audit

Use when the user supplies an existing draft script to audit or tighten. Diagnose the original draft verbatim before making any rewrites.

## Process

1. **Lock audit baseline.**
   - Identify the draft's target runtime in seconds, product, **single-minded proposition**, and assumed delivery tier from `SKILL.md` (`## Cadence`). Ask once only if target runtime is unstated and cannot be read from the draft's timestamps.
   - **Exit gate**: target runtime, **single-minded proposition**, and cadence ceiling are fixed before scoring the draft.

2. **Run four diagnostic checks on the original draft.**
   - **Timestamp continuity**: verify contiguous `MM:SS-MM:SS` beats summing strictly to target runtime; flag every missing timestamp, gap, overlap, or runtime mismatch.
   - **Camera reality and counterpoint**: flag `Video` lines containing internal states, off-screen backstory, or abstract summaries, and `Audio` lines that caption visible `Video` action.
   - **Read-aloud budget**: apply `SKILL.md` step 4 and `## Cadence` to the draft as written; compute per-beat and total `spoken words / net speaking sec = wps` and flag every over-ceiling beat, over-ceiling total, and missing **earned pause**.
   - **Mute test**: apply `SKILL.md` step 5 to the draft as written, stripping all spoken audio (`VO:` and `CHARACTER:`) and explanatory supers or cards; record `PASS` or `FAIL` with the exact beat timecode(s) where the **single-minded proposition** disappears on mute.
   - **Exit gate**: every failing beat is named by timecode with exact numbers or verbatim quotes (zero generic praise or hand-waved summaries).

3. **Deliver diagnosis and rewrite path.**
   - Present the audit verdict and flagged beats first so the user sees exact failure points in the original draft.
   - If the user asked only for an audit, stop after the diagnosis and offer a tightened rewrite addressing the flagged failures.
   - If the user asked to tighten or fix the draft, deliver a rewritten **three-column script** following `SKILL.md` steps 2 to 5 and `## Format`, passing both the **read-aloud budget** and **mute test** (`Verdict: PASS`).

## Audit output format

1. **Audit summary**: target runtime, **single-minded proposition**, assumed cadence ceiling, and overall verdicts (`Timestamps`, `Camera reality / counterpoint`, `Read-aloud budget`, `Mute test`: each `PASS` or `FAIL`).
2. **Per-beat read-aloud table**: original `Time | Spoken words | Pauses/holds | Net speaking sec | wps | Status`.
3. **Mute test on original draft**: `Visual-only read`, `Audio-only layer`, exact beat-level gaps, and `Verdict: PASS` or `FAIL`.
4. **Flagged Video/Audio fixes**: concise timecoded list of unfilmable `Video` cells, captioning `Audio` lines, and missing **earned pauses**.
5. **Tightened rewrite** *(only when requested)*: full `SKILL.md` `## Format` output passing all gates.
