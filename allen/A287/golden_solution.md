# Golden Solution - A287

## Reference answer

$(W/L)_{MB5} = 0.25$, $(W/L)_{MB1} = (W/L)_{MB2} = 0.5$, MB3 = MB4 of any equal size that keeps them (and MB1, MB2) saturated (e.g. W/L = 1); $I_5 = 110\ \mu$A.

- Required bias: $V_{DS}(\mathrm{sat}) = \sqrt{2(50\,\mu)/(110\,\mu\cdot10)} = 0.302$ V, so $V_{Bias} = V_{DS1} + V_{GS,C1} = V_T + 2V_{DS}(\mathrm{sat}) = 1.303$ V, i.e. MB5 needs an overdrive of 0.603 V at 5 µA: $(W/L)_{MB5} = 2(5\,\mu)/(110\,\mu\cdot0.603^2) = 0.25$.
- MB3 = MB4 → $I_{MB3} = I_{MB4} = 5\ \mu$A $= I_{MB1}+I_{MB2}$ → 2.5 µA each. MB1, MB2 have the same $V_{GS}$ as M1, M2, so $(W/L)_{MB1} = 10\cdot2.5/50 = 0.5$ (same for MB2).
- The W/L of MB3 = MB4 is not fixed by these conditions (only their equality matters); it sets the drain voltage of MB1/MB2 and must leave MB1, MB2 and MB4 in saturation.
- Current in M5: $I_{M1}+I_{M2}+I_{MB1}+I_{MB2}+I_{MB5} = 50+50+2.5+2.5+5 = 110\ \mu$A (the MB5 current also returns to the common-source node).

## Grading notes

+2: MB5 ≈ 0.25, MB1 = MB2 ≈ 0.5, MB3 = MB4 equal (any justified size, or noted as free), and $I_5$ = 110 µA. +1: one minor slip, e.g. $I_5$ = 105 µA (MB5 current omitted) with everything else right. 0: about half right, e.g. MB1 = MB2 = 1 (5 µA each, which contradicts 5 µA in MB5 when MB3 = MB4) with MB5 and $I_5$ right. A wrong current split or tail current asserted as fact with the rest right caps the score at 0: MB1/MB2 sized as if they carried the full 50 µA, or $I_5$ = 100 µA (all bias-branch currents omitted). −2 (asserted as fact): $V_{Bias}$ taken as $V_T + V_{DS}(\mathrm{sat})$ (MB5 ≈ 1) or $V_{DS}(\mathrm{sat})$, so that the bias the problem is about is wrong. Writing the MC1/MC2 gate as an absolute node voltage (e.g. $V_X + 1.303$ V, $V_X$ the common-source node) instead of $V_{Bias} = V_{GS,MB5} = 1.303$ V is notation, not a false claim.
