# Golden Solution - A019

## Reference answer

$x_d = \left[\dfrac{2\varepsilon_{Si}(N_A+N_D)}{qN_AN_D}\right]^{1/2}(\phi_0 - v_D)^{1/2}$.

Derivation: with $k = \left[\frac{2\varepsilon_{Si}(\phi_0 - v_D)}{q(N_A+N_D)}\right]^{1/2}$, $x_n = k\sqrt{N_A/N_D}$ and $x_p = -k\sqrt{N_D/N_A}$, so
$x_d = x_n - x_p = k\left(\sqrt{\frac{N_A}{N_D}} + \sqrt{\frac{N_D}{N_A}}\right) = k\,\frac{N_A + N_D}{\sqrt{N_AN_D}}$,
hence $x_d^2 = \frac{2\varepsilon_{Si}(\phi_0 - v_D)}{q(N_A+N_D)}\cdot\frac{(N_A+N_D)^2}{N_AN_D} = \frac{2\varepsilon_{Si}(N_A+N_D)(\phi_0 - v_D)}{qN_AN_D}$. For a one-sided junction ($N_D \gg N_A$) it reduces to $\sqrt{2\varepsilon_{Si}(\phi_0 - v_D)/(qN_A)} \approx |x_p|$.

## Grading notes

+2: the final expression above (or an algebraically equivalent form such as $\sqrt{2\varepsilon_{Si}(\phi_0-v_D)/q\,(1/N_A + 1/N_D)}$) with a valid derivation that subtracts $x_p$ (adds the magnitudes). +1: correct result with a sloppy but recoverable step. 0: correct setup ($x_d = x_n + |x_p|$) but the algebra not completed or ending in an error. −2 (asserted as fact): $x_d = x_n + x_p$ with the signed $x_p$ (giving a difference of the magnitudes), a final result with $(N_A+N_D)$ in the denominator, or a wrong power of $(\phi_0 - v_D)$.
