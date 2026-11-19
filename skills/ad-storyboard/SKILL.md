---
name: ad-storyboard
description: Break a commercial script into a shot-by-shot storyboard with start/end frames, cut triggers, continuity locks, and test-take checks. Use when planning how to shoot or generate a script, turning a script into a shot list, or auditing visual continuity across cuts.
---

Turn a timed commercial script into a shootable shot list where every framing choice directs viewer attention, every cut is motivated, adjacent shots stay visually locked, and risky shots carry an explicit **test-take check**.

## Process

1. **Audit the script.** Read the timed **three-column script** and map exact runtime, story turns, product proof beats, and audio anchors. If the user brings only an untimed idea, offer to lock a timed script first (call the Skill tool with `"ad-script"` if they agree).

2. **Establish the Continuity Lock.** Before numbering shots, fix the cross-shot invariants once at the top so every shot inherits a single source of truth:
   - **Product lock**: exact physical appearance, finish/label orientation, scale relative to hands or props, and hero angle.
   - **Lighting and palette lock**: key light direction (screen left, right, overhead, back), light quality, color temperature, and palette anchors.
   - **Space and axis lock**: location layout, character wardrobe, starting positions, screen direction, and 180-degree eyeline axis.

3. **Break the script into numbered shots (`S01`, `S02`, ...).** Divide the exact script runtime into shots governed by three directorial rules:
   - **Lead the eye**: name the single **focal entry** the viewer notices in the first half-second; save close-ups and inserts for moments where physical detail carries the proof or turn.
   - **Earn every camera move**: default to a static hold whenever action inside the frame carries the beat; state the explicit reveal or pacing reason for any pan, push, or tracking move.
   - **Cut on motivation**: place each cut on a physical movement (**cut-on-action**), an eyeline shift, or an audio cue, shifting shot size or angle cleanly across adjacent cuts.

4. **Mark complex shots with a test-take check.** On any shot carrying execution risk (hand-to-product grip, liquid or physics motion, legible packaging or screen text, reflections, tight comic timing, multi-subject blocking), add a **Test-take check** naming the exact failure mode to verify in a short trial take before committing. Omit this field on straightforward static holds so flags stay high-signal.

5. **Run a cut-by-cut continuity pass.** Walk every adjacent seam (`S01 -> S02`, `S02 -> S03`, ...) before finalizing: verify shot durations sum strictly to the target runtime, check that product appearance, light side, wardrobe, active hand, and screen direction hold across every cut, and confirm that product proof and the closing **button** hold long enough to read cleanly.

## Output format

1. **Continuity Lock**: the three cross-shot locks established in step 2.
2. **Shot list**: numbered entries (`S01`, `S02`, ...), each containing:
   - **Shot header**: `S01 | 0:00-0:03 (3.0s) | Shot size, angle, camera (static hold or motivated move)`
   - **Focal entry**: the first element the viewer's eye hits
   - **Start frame**: exact visual composition when the shot opens
   - **Action**: observable movement and performance across the shot
   - **End frame**: exact visual state on the outgoing cut
   - **Cut trigger**: physical motion, eyeline, or audio cue launching the next shot
   - **Audio sync**: exact VO, dialogue, SFX, or `[PAUSE]` aligned to this shot
   - **Continuity carry**: specific props, hand, light side, or eyeline carried across neighbors
   - **Test-take check** *(complex shots only)*: exact failure mode to inspect in a trial take
3. **Cut-by-cut continuity audit**: short check confirming total duration matches the script runtime and flagging the highest-risk seams.

## Done when

- Shot durations cover every second of the script and sum strictly to the target runtime.
- A top-level **Continuity Lock** fixes product, lighting/palette, and space/axis invariants.
- Every shot defines **focal entry**, **start frame**, **end frame**, **cut trigger**, and **audio sync**, with every camera move explicitly motivated.
- Every risky shot carries a concrete **test-take check**, and the cut-by-cut audit clears every adjacent seam.
