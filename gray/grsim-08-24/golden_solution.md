# Golden Solution - grsim-08-24

## Reference answer

- Bias: $M_4$, $M_5$ carry $I_1 = 100$ μA; $M_3$ mirrors 100 μA into $M_2$; $M_6$ and $M_7$ (40/1 vs 20/1) carry 200 μA; so $M_1$ and $M_2$ carry 100 μA each and $M_8$ 200 μA. The output sits near 0 V (feedback forces the gate of $M_2$ to the input level).
- Small signal ($r_o = 1/(\lambda I_D)$): $g_{m1} = g_{m2} = \sqrt{2\cdot60\mu\cdot40\cdot100\mu} = 0.69$ mS, $r_{o2} = r_{o3} = 333$ kΩ; $g_{m8} = 0.98$ mS, $r_{o7} = r_{o8} = 167$ kΩ.
- Series-shunt two-port: $f = R_2/(R_1+R_2) = 1/21$ (ideal gain 21). Basic amplifier: the pair, with the output taken single-ended at the drain of $M_2$ (resistance $r_{o3}\|\approx2r_{o2} \approx 222$ kΩ), gives ≈ $(g_m/2)\times222\text{k} \approx 77$; the follower $M_8$ into $21\text{k}\|r_{o7}\|r_{o8}$ gives ≈ 0.94; $a \approx 72$, $T = af \approx 3.4$.
- $v_o/v_i = a/(1+T) \approx 16.3$ (exact small-signal ≈ 16.2), well below 21 because the loop gain is low.
- $R_{out} = z_{oa}/(1+T)$ with $z_{oa} \approx 1/g_{m8}\|21\text{k}\|\ldots \approx 0.96$ kΩ: $R_{out} \approx 0.22$ kΩ (exact ≈ 215 Ω).

## Grading notes

A correct result shows: gain ≈ 16–16.5 (simulation may differ by a few percent through λ-dependent bias currents), output resistance ≈ 200–230 Ω (≈ 170 Ω from a simulation with the stated λ, which raises the mirror output currents and $g_{m8}$, is also correct), loop gain ≈ 3–4 if reported, dc output near zero (≈ 0.2 V in a simulation with λ = 0.03 V⁻¹, from the $V_{DS}$ mismatch of $M_1$ and $M_2$ amplified by the feedback divider, is acceptable). A gain claimed equal to 21 (infinite loop gain) or an output resistance near $1/g_{m8}$ ≈ 1 kΩ indicates a missing step.
