# Golden Solution - R477

## Reference answer

PM ≈ 4.5° (gain crossover at ≈ 63.2 $\omega_{p1}$).
- $|H| = 1000/\sqrt{(1 + x^2)(1 + x^2/16)} = 1$ gives $x \approx 63.2$ (≈ $\sqrt{4000}$).
- Phase = $-[\tan^{-1}63.2 + \tan^{-1}15.8] = -(89.09° + 86.38°) = -175.5°$, so PM ≈ 4.5°.
- Moving the second pole out by 2× improves the PM only slightly, because with $A_0 = 1000$ the crossover still lies far above both poles.

## Grading notes

+2: PM 4.2–4.8° with a crossover near 63 $\omega_{p1}$. +1: correct method, small numerical inaccuracy (PM 3.5–5.5°). 0: crossover placed at $A_0\omega_{p1}$ with otherwise correct reasoning (PM ≈ 0.3°). -2 (asserted as fact): PM of tens of degrees, or the crossover placed below the second pole.
