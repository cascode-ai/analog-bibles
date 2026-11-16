# Golden Solution - A140

## Reference answer

$A_v \approx 104$ V/V, $R_{out} \approx 2.22$ MΩ, $V_{IC}(\min) \approx 1.215$ V, $V_{IC}(\max) = V_{DD} - 0.316$ V ≈ 4.68 V for $V_{DD} = 5$ V.

- $g_{m1} = \sqrt{K'_N I_{SS}(W_1/L_1)} = \sqrt{110\ \mu \cdot 10\ \mu \cdot 2} = 46.9\ \mu$S. $g_{ds2} + g_{ds4} = 0.09 \cdot 5\ \mu = 0.45\ \mu$S, so $R_{out} = 2.22$ MΩ and $A_v = 46.9/0.45 = 104$.
- $V_{IC}(\max) = V_{DD} - V_{SG3} + V_{TN1}$ with $V_{SG3} = 0.7 + \sqrt{2 \cdot 5\ \mu/(50\ \mu \cdot 2)} = 1.016$ V, giving $V_{DD} - 0.316$ V.
- $V_{IC}(\min) = V_{DS5}(\mathrm{sat}) + V_{GS1} = \sqrt{2 \cdot 10\ \mu/(110\ \mu \cdot 2)} + 0.7 + \sqrt{2 \cdot 5\ \mu/(110\ \mu \cdot 2)} = 0.302 + 0.913 = 1.215$ V.

## Grading notes

Gain and $R_{out}$ count about one half, the two limits the other half. +2: $A_v$ = 100–108, $R_{out}$ ≈ 2.2 MΩ, $V_{IC}(\min)$ = 1.20–1.23 V, $V_{IC}(\max) = V_{DD} - 0.32$ V (≈ 4.68 V). +1: one of the four off by a slip, including a unit slip in $R_{out}$ (correct $g_{ds2} + g_{ds4}$ = 0.45 µS, or a gain computed correctly from the conductances, but $R_{out}$ written as 2.22 kΩ, the book's own typo). 0: gain/$R_{out}$ right but the limits wrong (or the reverse); this includes a model error confined to one half: $g_{ds}$ evaluated at $I_{SS}$ ($R_{out}$ ≈ 1.11 MΩ, $A_v$ ≈ 52), $R_{out} = r_{ds2}$ alone, $V_{IC}(\max) = V_{DD} - V_{SG3}$ (missing $+V_{TN}$), or a numerical $V_{IC}(\max)$ based on an unstated, different $V_{DD}$. −2 (asserted as fact): such model errors in both halves (e.g. $g_{ds}$ at $I_{SS}$ together with $V_{IC}(\max) = V_{DD} - V_{SG3}$), or a misread circuit that makes most of the four results wrong.
