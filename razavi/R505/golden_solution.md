# Golden Solution - R505

## Reference answer

For $as^2 + bs + c$ with widely spaced real roots, the small root is ≈ $-c/b$ and the large one ≈ $-b/a$. With $a = 1/(\omega_{p1}\omega_{p2})$, $b = 1/\omega_{p1} + 1/\omega_{p2} + A_0/\omega_z$, $c = 1 + A_0$:
- $|\omega_{pA}| \approx \dfrac{1 + A_0}{\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}}$
- $|\omega_{pB}| \approx \omega_{p1}\omega_{p2}\left(\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}\right) = \omega_{p1} + \omega_{p2} + \dfrac{A_0\omega_{p1}\omega_{p2}}{\omega_z}$
Both poles are in the left half plane ($s = -\omega_{pA}, -\omega_{pB}$). Consistency requires $b^2 \gg ac$.

## Grading notes

+2: both approximate poles in the forms above or equivalent. Further simplifications that use the usual $A_0 \gg 1$ (e.g., the low pole → $\omega_z$ when $\omega_z \ll A_0\omega_{p1}$) are fine even if that condition is left implicit. +1: one pole right, the other with a minor algebra slip. 0: exact quadratic formula given without the requested simplification, or one pole only. -2 (asserted as fact): roots taken as $c/a$ and $b/a$ or other wrong combinations, or poles placed in the right half plane.
