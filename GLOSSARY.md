# Ad Skills Glossary

Shared craft vocabulary across the commercial development pipeline (`ad-references` -> `ad-concepts` -> `ad-script` -> `ad-storyboard`).

## Language

**Primary spot**:
An actual aired or published commercial reachable at a verifiable URL (video page, ad archive, or primary transcript/script).
_Avoid_: "inspiration", "vibe reference", unverified examples from listicles.

**Timecoded beat**:
A concrete window (`MM:SS-MM:SS`) inside a **primary spot** pairing what appears on screen with what happens on the audio track.

**Transferable mechanism**:
A reusable craft move extracted from a **primary spot** and stated in observable screen/audio terms (for example, holding three seconds of silence after a question so action delivers the answer).
_Avoid_: mood adjectives ("cinematic", "punchy", "nostalgic", "witty") without the physical mechanism behind them.

**Brand entry**:
The exact timestamp and narrative setup that brings the product and brand into a commercial for the first time.

**Single-minded proposition**:
The one product property a commercial commits to proving. A second property belongs in a second spot.

**Dramatic situation**:
A concrete, filmable human moment where the product's property proves itself through action rather than explanation.

**Product-locked**:
A premise whose **dramatic situation** breaks if you substitute a competitor or an adjacent product.

**Swap test**:
The check for whether a concept is **product-locked**: swap the product out and inspect whether the situation still works.

**One-sentence pitch**:
A complete commercial premise stated in one concrete, visual sentence anyone can retell.

**Three-column script**:
The canonical script layout (`Time | Video | Audio`) separating observable camera reality from dialogue, voiceover, `SFX`, music, and pauses.

**Read-aloud budget**:
Spoken word count verified against real delivery speed (~2.3 words/sec in English, ~2.0 words/sec in longer-word languages, ~4.5 syllables/sec across languages) after subtracting explicit pause and visual-only seconds.

**Earned pause**:
An explicit silence beat (`[PAUSE Ns]`) in the Audio column where picture or sound carries the story turn.

**Button**:
The closing visual/audio beat that locks the payoff, product, and brand into memory.

**Mute test**:
Stripping every voiceover line and explanatory card from a script to verify that the core product claim survives in the Video column alone.

**Focal entry**:
The single visual element the viewer's eye lands on in the first half-second of a shot.

**Continuity lock**:
Top-level cross-shot invariants (product appearance/scale, lighting direction/palette, location geography/wardrobe/180-degree axis) inherited by every shot in a storyboard.

**Cut-on-action**:
A cut motivated by a physical movement, eyeline shift, or audio beat rather than an arbitrary timer.

**Test-take check**:
The specific failure mode flagged on a complex shot (grip, physics, legible text, reflection, comic timing) to verify in a short trial take before committing.

## Relationships

- `ad-references` dissects **primary spots** into **timecoded beats**, **brand entry** notes, and **transferable mechanisms**.
- `ad-concepts` turns a brief (and optional mechanisms) into orthogonal **dramatic situations** verified by the **swap test**.
- `ad-script` turns a chosen premise into a **three-column script** verified by the **read-aloud budget** and **mute test**.
- `ad-storyboard` turns a **three-column script** into numbered shots (`S01`, `S02`, ...) bound by a **Continuity lock** and flagged with **test-take checks** where risk lives.
