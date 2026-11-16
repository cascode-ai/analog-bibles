# Golden Solution - R480

## Reference answer

PM ≈ 29° (loop gain 20, gain crossover ≈ 9.3×10⁹ rad/s).
- Breaking the loop at the gate of $M_2$: $T(s) = \dfrac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]}$, now with $T_0 = 20$.
- Poles: 0.99×10⁹ rad/s ($R_F$–$C_A$), 5×10⁹ rad/s ($1/R_DC_X$, halved), 1.01×10¹¹ rad/s (output).
- $|T| = 1$ at $\omega_u \approx 9.29\times10^9$ rad/s. Phase = −(83.9° + 61.7° + 5.3°) = −150.9°, so PM ≈ 29°.
- Doubling $R_D$ doubles the loop gain and halves the pole at X, so the PM drops from about 55° (with 1 kΩ) to about 29°.

## Grading notes

+2: loop gain 20, X pole at 5×10⁹ rad/s, PM 27–31°. +1: third pole ignored (PM ≈ 34°) or a small numerical inaccuracy. 0: right setup with a slip giving a PM outside 25–35°. -2 (asserted as fact): PM improving relative to $R_D$ = 1 kΩ, PM above 40°, or a wrong loop-gain expression.
