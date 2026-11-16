# Golden Solution - G326

## Reference answer

Slew rate ≈ 333 V/μs (with $C_L = 1.5$ pF); ≈ 470 V/μs if the exact-crossover value $C_L = 1.06$ pF is used.

- 45° design: $C_L = g_{m1}/|p_2| = 1.5$ pF (or 1.06 pF exactly).
- When slewing, one side of the input pair is cut off and the whole tail current reaches the output (directly through $M_2$–$M_{2A}$, or mirrored through $M_3$–$M_4$), in either direction: $|dV_o/dt| = I_{\text{TAIL}}/C_L = 0.5\text{ mA}/1.5\text{ pF} = 333$ V/μs.

## Grading notes

+2: SR = $I_{\text{TAIL}}/C_L$ ≈ 333 V/μs (or ≈ 470 V/μs consistent with $C_L$ ≈ 1.06 pF), accept ±5%. +1: correct formula with a slip in $C_L$. 0: correct $C_L$ but SR computed with half the tail current (≈ 167 V/μs). −2 (asserted as fact): slew rate set by $g_{m1}$ or by the nondominant pole, or $I_{\text{TAIL}}$ divided by an internal capacitance.
