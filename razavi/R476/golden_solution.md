# Golden Solution - R476

## Reference answer

PM ≈ 3.8° (gain crossover at ≈ 44.7 $\omega_{p1}$), so the loop is barely stable.
- With $x = \omega/\omega_{p1}$: $|H| = 1000/\sqrt{(1 + x^2)(1 + x^2/4)} = 1$ gives $x \approx 44.7$ (≈ $\sqrt{2000}$, since both poles are far below the crossover).
- Phase = $-[\tan^{-1}44.7 + \tan^{-1}22.35] = -(88.72° + 87.44°) = -176.2°$, so PM = 180° − 176.2° ≈ 3.8°.
- Only the frequency ratio matters, not the absolute value of $\omega_{p1}$.

## Grading notes

+2: PM 3.5–4.1° with a crossover near 45 $\omega_{p1}$. +1: correct method, small numerical inaccuracy (PM 3–5°). 0: crossover placed at $A_0\omega_{p1}$ (ignoring the second pole's effect on the magnitude), giving PM ≈ 0.2°, with otherwise correct reasoning. -2 (asserted as fact): PM of tens of degrees (e.g., crossover placed at or below the second pole), or a sign error giving a negative PM for this two-pole system.
