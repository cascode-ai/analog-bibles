# Golden Solution - R229

## Reference answer

Worst case: $I_{out}$ falls to ≈ 0.078 mA, a change of about −0.42 mA (−85%), for $V_{DD} = 2.7$ V, $V_{TH} = 0.75$ V and $T = 370$ K. (The opposite corner, $V_{DD} = 3.3$ V and $V_{TH} = 0.65$ V at 370 K, gives ≈ 0.865 mA, +73%.)

- Divider ratio from the nominal design: $V_{GS} = 0.973$ V at 3 V → $R_2/(R_1+R_2) = 0.324$.
- Low corner: $V_{GS} = 0.324 \times 2.7 = 0.876$ V, overdrive $0.876 - 0.75 = 0.126$ V, mobility factor 0.730: $I_{out} = 0.730 \times \tfrac12(13.4\ \mathrm{mA/V^2})(0.126)^2 = 0.078$ mA.
- High corner: $V_{GS} = 1.070$ V, overdrive 0.420 V: $I_{out} = 0.730 \times \tfrac12(13.4\ \mathrm{mA/V^2})(0.420)^2 = 0.865$ mA.
- The changes must be combined in the square law; adding the individual linear sensitivities gives more than −100%, which is meaningless.

## Grading notes

+2: the corner $V_{DD}$ −10%, $V_{TH}$ +50 mV, $T$ = 370 K identified, with $I_{out} \approx 0.078$ mA (−84% to −86%; values 0.07–0.09 mA accepted); giving the other corner too is fine. +1: correct corners and method with a slip, or the largest-magnitude change reported as +137% (1.18 mA) by leaving the temperature at 300 K in the high corner while the −85% corner is also computed correctly. 0: correct method but only one effect combined correctly, or a linearized estimate presented with a warning that it is inaccurate. -2 (asserted as fact): linear superposition of sensitivities giving a change beyond −100% (negative current), a worst case of only a few tens of percent, or the temperature effect taken in the wrong direction.
