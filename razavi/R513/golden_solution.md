# Golden Solution - R513

## Reference answer

$\mathrm{PM}(\beta_1) = 90° - \tan^{-1}x$, where $x = \omega_u/\omega_{p2}$ solves $x\sqrt{1 + x^2} = \dfrac{2\beta_1}{3}$, i.e. $x = \sqrt{\dfrac{\sqrt{1 + 16\beta_1^2/9} - 1}{2}}$. The PM rises toward 90° as $\beta_1$ falls: ≈ 72° for $\beta_1$ = 0.5 and ≈ 81° for $\beta_1$ = 0.25.
- Two-pole loop, dominant pole far below crossover (90° of phase): $|\beta H| \approx \beta A_0\omega_{p1}/[\omega\sqrt{1 + (\omega/\omega_{p2})^2}]$, PM = 90° − $\tan^{-1}(\omega_u/\omega_{p2})$.
- β = 1, PM = 60°: $\omega_{u1} = \omega_{p2}\tan30° = \omega_{p2}/\sqrt3$, hence $A_0\omega_{p1} = \omega_{u1}\sqrt{1 + 1/3} = \tfrac23\omega_{p2}$.
- With $\beta_1$: $\beta_1\tfrac23\omega_{p2} = \omega_u\sqrt{1 + (\omega_u/\omega_{p2})^2}$, which gives the equation for x above. Check: $\beta_1 = 1$ gives $x = 1/\sqrt3$, PM = 60°.
- Simpler approximation (ignoring the second pole's effect on the magnitude): $\omega_u \approx \beta_1\omega_{u1}$, so PM ≈ 90° − $\tan^{-1}(\beta_1/\sqrt3)$: ≈ 74° at 0.5, ≈ 82° at 0.25.
- (Valid while $\beta_1A_0 \gg 1$ so that the dominant pole still contributes ≈ 90°.)

## Grading notes

+2: either the exact two-pole expression or the approximation PM ≈ 90° − $\tan^{-1}(\beta_1/\sqrt3)$ (stated as such), with PM increasing toward 90° as $\beta_1$ decreases. +1: correct trend and a nearly right formula with a minor slip. 0: only "PM increases" with no expression. -2 (asserted as fact): PM decreasing with smaller β, PM unchanged, or a formula such as PM = 60°/$\beta_1$.
