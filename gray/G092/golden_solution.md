# Golden Solution - G092

## Reference answer

One design: $(W/L)_1 \approx 25.8$, $R_1 = 22$ kΩ, $V_{ov2} \approx 0.036$ V, $R_2 \approx 16.4$ kΩ, $(W/L)_2 \approx 78$.

- $M_1$: $(W/L)_1 = 2I_{IN}/(k'V_{ov1}^2) = 200\ \mu/(194\ \mu\times0.04) = 25.8$; $V_{GS1} = 0.8$ V, so $R_1 = (3 - 0.8)/100\ \mu\mathrm{A} = 22$ kΩ.
- KVL: $V_{GS1} = V_{GS2} + I_{OUT}R_2$ → $V_{ov2} = V_{ov1} - I_{OUT}R_2$.
- (iii): the minimum drain voltage of $M_2$ is $I_{OUT}R_2 + V_{ov2} = V_{ov1} = 0.2$ V, so (iii) is satisfied automatically by (ii).
- (iv): $R_o = r_{o2}(1 + g_{m2}R_2) + R_2$, with $r_{o2} = 1/(\lambda I_{OUT}) = 5$ MΩ and $g_{m2}R_2 = \dfrac{2I_{OUT}}{V_{ov2}}\cdot\dfrac{V_{ov1}-V_{ov2}}{I_{OUT}} = \dfrac{2(V_{ov1}-V_{ov2})}{V_{ov2}}$. $R_o = 50$ MΩ requires $g_{m2}R_2 \approx 9$, so $V_{ov2} = 0.4/11 = 0.036$ V.
- $R_2 = (0.2 - 0.036)/10\ \mu\mathrm{A} = 16.4$ kΩ; $(W/L)_2 = 2I_{OUT}/(k'V_{ov2}^2) = 20\ \mu/(194\ \mu\times0.00132) \approx 78$.
- Remark: an overdrive of 36 mV is below about $2nV_T$, so $M_2$ would really be in weak/moderate inversion and the square-law sizing is only approximate.

## Grading notes

Design problem: accept any design satisfying all four constraints with correct calculations. +2: $(W/L)_1$ ≈ 25–26.5, $R_1$ ≈ 21.5–22.5 kΩ, $R_2$ ≈ 16–16.8 kΩ, and $(W/L)_2$ consistent with the chosen output-resistance formula (≈ 78 with $r_o(1+g_mR_2)+R_2$; values 65–95 from $g_mr_oR_2$-type approximations are acceptable), with the observation (or check) that (iii) is met. +1: correct approach with one slip, or constraint (iii) not checked. 0: only $M_1$/$R_1$ designed correctly, or $R_2$ found without satisfying the output-resistance spec. -2 (asserted as fact): $R_2$ chosen from $I_{OUT}R_2 = V_{ov1}$ (ignoring $V_{ov2}$), the output resistance taken as $r_{o2}$ alone, $W/L$ computed with $V_{GS}$ instead of the overdrive, or a $V_{ov2}$ larger than $V_{ov1}$.
