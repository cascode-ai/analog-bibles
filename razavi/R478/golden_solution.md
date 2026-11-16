# Golden Solution - R478

## Reference answer

PM ≈ 39°.
- At the gain crossover $\omega_1$ (β = 1): $|H(j\omega_1)| = 1$ and $\angle H(j\omega_1) = -(180° - \mathrm{PM})$. The closed-loop magnitude there is $\left|\dfrac{H}{1 + H}\right| = \dfrac{1}{|1 + e^{-j(180° - \mathrm{PM})}|} = \dfrac{1}{2\sin(\mathrm{PM}/2)}$.
- A 50% peak means this equals 1.5: $\sin(\mathrm{PM}/2) = 1/3$, so PM = 2 sin⁻¹(1/3) ≈ 38.9°. (Check: PM = 45° gives 1.31, the familiar 30% peak; PM = 60° gives 1.)
- Cross-check with a second-order closed loop: a peak $M_p = 1/(2\zeta\sqrt{1-\zeta^2}) = 1.5$ gives ζ ≈ 0.357, and the corresponding PM is also ≈ 39°.

## Grading notes

+2: PM 38–40°, from $|1/(1 + e^{-j(180° - PM)})| = 1.5$ or from the second-order ζ–PM relation. +1: method right with a numerical result of 36–42°. 0: correct method stated, result missing or wrong through a slip. -2 (asserted as fact): PM = 45° or 60°, PM read directly as 50°, or peaking computed as $1/\cos(PM)$-type expressions giving PM far from 39°.
