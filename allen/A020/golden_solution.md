# Golden Solution - A020

## Reference answer

$x_n = -x_p = \left[\dfrac{3\varepsilon_{Si}(\phi_0 - v_D)}{2qa}\right]^{1/3}$, so $x_d = x_n - x_p = \left[\dfrac{12\varepsilon_{Si}(\phi_0 - v_D)}{qa}\right]^{1/3}$: the widths now vary as the cube root of $(\phi_0 - v_D)$ (and the junction capacitance as $(\phi_0 - v_D)^{-1/3}$, grading coefficient $m = 1/3$).

- Charge density in the depletion region $\rho(x) = qax$, which is odd in $x$; charge neutrality $\int_{x_p}^{x_n} qax\,dx = 0$ gives $x_n^2 = x_p^2$, i.e. $x_p = -x_n$ (symmetric).
- Gauss's law $dE/dx = qax/\varepsilon_{Si}$ with $E(\pm x_n) = 0$: $E(x) = \frac{qa}{2\varepsilon_{Si}}(x^2 - x_n^2)$, maximum magnitude $E_0 = \frac{qa x_n^2}{2\varepsilon_{Si}}$ at $x = 0$.
- Potential across the region: $\phi_0 - v_D = -\int_{-x_n}^{x_n}E\,dx = \frac{qa}{2\varepsilon_{Si}}\cdot\frac{4}{3}x_n^3 = \frac{2qa\,x_n^3}{3\varepsilon_{Si}}$, which gives the result.

## Grading notes

+2: $x_n = -x_p = [3\varepsilon_{Si}(\phi_0 - v_D)/(2qa)]^{1/3}$ (or the equivalent total width $[12\varepsilon_{Si}(\phi_0 - v_D)/(qa)]^{1/3}$ with the symmetric split stated) from a correct Poisson integration. +1: correct result with the symmetry not stated explicitly, or a slip in an intermediate step that does not reach the final expressions. 0: correct setup (linear charge density, Gauss's law) with the integration left unfinished, or the correct cube-root form with a wrong numerical factor from an algebra slip. −2 (asserted as fact): square-root dependence obtained by reusing the step-junction result or a step-junction charge model, an asymmetric split of the form $\sqrt{N_A/N_D}$, or the potential integrated so that the width grows linearly with voltage. If the answer derives $\phi_0 - v_D = 2qa\,x_n^3/(3\varepsilon_{Si})$ correctly and only the final inversion is wrong (a square root taken instead of the cube root, or a factor lost), that is an algebra slip: 0.
