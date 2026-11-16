# Golden Solution - G420

## Reference answer

Cross-couple them: one $C_n$ from the gate of $M_1$ ($V_{i1}$) to the drain of $M_2$, and one from the gate of $M_2$ ($V_{i2}$) to the drain of $M_1$. Use $C_n = C_{gd1} = C_{ol}W_1 = 0.35 \times 77 \approx 27$ fF.

- In DM operation $v_{d2} = -v_{d1} = -a_{dm1}v_{i1}$. The voltage across $C_{gd1}$ is $v_{i1}(1 - a_{dm1})$ and across $C_n$ is $v_{i1}(1 + a_{dm1})$, so the DM input capacitance per side becomes $C_{idh} = C_{gs1} + C_{gd1}(1 - a_{dm1}) + C_n(1 + a_{dm1})$.
- With $C_n = C_{gd1}$: $C_{idh} = C_{gs1} + 2C_{gd1}$, removing the Miller multiplication (here 27 fF × 138 ≈ 3.7 pF reduced to 54 fF).

## Grading notes

+2: cross-coupled connection (input gate to the opposite side's drain) and $C_n \approx 27$ fF (= $C_{gd1}$), with the explanation that the opposite-phase voltage cancels the Miller current. +1: correct connection and value, explanation thin; or correct connection with $C_n$ given symbolically as $C_{gd1}$ only. 0: correct value but connection unclear. −2 (asserted as fact): $C_n$ from gate to its own drain (doubles the Miller effect), from gate to ground, or a value like 3.7 pF.
