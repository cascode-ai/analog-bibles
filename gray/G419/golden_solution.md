# Golden Solution - G419

## Reference answer

$C \approx 2.2$ pF (set by the CMFB loop; the DM loop then has more than 45°).

- DM loop: feedback factor $f_{dm} = C_F/(C_F + C_S + C_{idh}) = 5/10.9 = 0.459$; load $C_{2d} = C_L + C_F(C_S + C_{idh})/(C_F + C_S + C_{idh}) = 2 + 5(5.9)/10.9 = 4.7$ pF. Unity loop gain at $|p_2|$: $g_{m2}f_{dm}/C = g_{m6}/C_{2d}$ → $C = (1.0/1.55)(4.7)(0.459) = 1.39$ pF.
- CMFB loop: CM load $C_{2c} = C_L + C_FC_S/(C_F + C_S) = 2 + 10/7 = 3.43$ pF. The first-stage CM transconductance from $v_{cmc}$ is $g_{m5h}$, so $g_{m5h}|a_{cms0}|/C = g_{m6}/C_{2c}$ → $C = (0.4/1.55)(2.5)(3.43) = 2.21$ pF.
- Use the larger value, $C \approx 2.2$ pF. The CMFB loop then has 45° and the DM loop is overcompensated (PM > 45°, lower bandwidth). Alternatively, keep $C$ = 1.39 pF and reduce $g_{m5h}$ by splitting $M_5$.
- The criterion above is the usual dominant-pole one (crossover estimate = low-frequency loop gain × $|p_1|$ set equal to $|p_2|$); the actual crossover is then ≈ 0.79$|p_2|$ and the CMFB loop has PM ≈ 52°. If the exact two-pole magnitude at $|p_2|$ is used instead (an extra factor $1/\sqrt2$), unity loop gain exactly at $|p_2|$ gives exactly 45° with $C \approx 2.21/\sqrt2 \approx 1.56$ pF (CMFB-limited; DM ≈ 0.98 pF); this reading of the stated criterion is also accepted.

## Grading notes

+2: C ≈ 2.1–2.3 pF chosen as the larger of the DM (≈ 1.39 pF) and CMFB (≈ 2.2 pF) requirements, with both computed. If the answer instead evaluates the exact two-pole loop-gain magnitude at $|p_2|$ (extra factor $1/\sqrt2$) and states this, C ≈ 1.5–1.6 pF (CMFB-limited; DM ≈ 0.98 pF) is also +2. +1: correct CMFB value and choice, DM value missing or slipped. 0: both requirements computed right but the final choice left open or hedged, or the DM requirement computed with a wrong load model while the CMFB value and the final choice are right. −2 (asserted as fact): C = 1.39 pF (the smaller value) asserted as sufficient for both loops, $g_{m5}$ used instead of $g_{m5h}$ giving ≈ 4.4 pF without justification, the CM-sense gain ignored, or a wrong load model in the CMFB loop (e.g. $C_2 = C_L + C_F = 7$ pF, ignoring the $C_S$ divider, or $C$ added to $C_2$) that makes the final C wrong (≈ 4.5 pF or ≈ 6.2 pF) and is asserted as the required value.
