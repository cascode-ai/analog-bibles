# Golden Solution - G429

## Reference answer

$C_L \approx 8.85$ pF.

- $\omega_r \approx \dfrac{g_{m1}}{C_{L\text{eff}}}\cdot\dfrac{C_2}{C_2 + C_1 + C_{ia}}$, with feedback factor $4/10.58 = 0.378$.
- Required $C_{L\text{eff}} = 0.030 \times 0.378/10^9 = 11.34$ pF.
- $C_{L\text{eff}} = C_L + C_2(C_1 + C_{ia})/(C_2 + C_1 + C_{ia}) = C_L + 2.49$ pF → $C_L = 11.34 - 2.49 \approx 8.85$ pF.
- (The return ratio at dc, ≈ 484, is far above 1, so the single-pole approximation for $\omega_r$ is valid.)

## Grading notes

+2: $C_L$ ≈ 8.7–9.0 pF. +1: correct method with a small slip (8.5–9.2 pF). 0: $C_{ia}$ ignored consistently (giving $C_L$ = 13 pF) or the series feedback capacitance omitted (11.3 pF). −2 (asserted as fact): $C_L = g_{m1}/\omega_r$ = 30 pF, or a result from setting the dominant pole equal to 1 Grad/s.
