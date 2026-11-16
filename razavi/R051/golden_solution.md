# Golden Solution - R051

## Reference answer

What the ohmmeter sees: the gate is insulated (open to every other pin in both polarities). The p-type bulk forms a pn diode with each n+ source/drain region, so low resistance appears only with the ohmmeter's + lead on the bulk and − lead on S or D. Between S and D there are back-to-back diodes, open both ways (no channel without gate bias). S and D are physically symmetric and cannot be told apart, and need not be.

Identification: the bulk is the pin that shows forward conduction (as anode) to two other pins; those two are source/drain; the remaining pin is the gate.

Minimum number of steps (adaptive): worst case 4 two-terminal checks (each pair checked in both polarities), equivalently 7 single-polarity readings; best case 2. A strategy that achieves 4 checks:
1–3. Check pin 1 against pins 2, 3, 4. If pin 1 is the bulk, two checks show a diode with pin 1 as anode and the job is done (the silent pin is the gate). If exactly one check shows a diode, the other pin of that pair is the bulk (as anode) and pin 1 is S/D; one more check between the bulk and either remaining pin settles which is the gate (4 checks). If none conducts, pin 1 is the gate.
4. Then check two of the remaining pins: a diode identifies the bulk (anode) and one S/D, the third pin being the other S/D; no conduction means those two are S and D and the last pin is the bulk.

If pins may be tied together, fewer steps suffice: testing one pin against the other three tied together, in both polarities, classifies that pin (open both ways: gate; conducts with the single pin positive: bulk; conducts with the group positive: S/D), so 3 such tests determine all pins; with single-polarity readings and tying allowed, 4 readings suffice (worst case, again by exhaustive search). A grouping that puts the gate on the + side together with one S/D while the other S/D is on the − side is not reliable: the meter voltage can exceed $V_{TH}$ and turn on the channel.

## Grading notes

+2: correct physics (gate open to all; bulk–S/D forward diode with + on bulk for NMOS; S–D open; S and D indistinguishable) and a valid procedure whose step count is stated and justified. The exact count depends on how a "step" is counted; any correctly argued worst case (4 pair checks, 7 single-polarity readings, or a slightly larger but explicit non-adaptive count such as checking all 6 pairs) earns credit, with the minimal adaptive count preferred for +2. +1: correct physics and procedure but a non-minimal or unjustified count. 0: procedure partly right with one physical error that does not break it. -2 (asserted as fact): claims S and D can be distinguished by dc ohmmeter readings, that the gate conducts to the channel, that S–D conducts, or the diode polarity reversed for an NMOS. Answers that tie several pins together and measure one group against another are acceptable if the scheme is valid: 3 two-polarity tests of one pin against the other three, or 4 single-polarity readings, are correct minimal counts in that setting. A scheme that ties the gate to an S/D on the + side while the other S/D is on the − side is invalid (the meter voltage can turn on the channel and give a false "conducts"); treat this as a physical error that breaks the procedure (0), not as -2, when the stated count is otherwise achievable.
