# Golden Solution - R157

## Reference answer

$G_m \approx 3.61$ mS, about 1.3% below the equilibrium value $\sqrt{\mu_nC_{ox}(W/L)I_{SS}} = 3.66$ mS.
- $G_m = \tfrac12\beta\dfrac{4I_{SS}/\beta - 2\Delta V_{in}^2}{\sqrt{4I_{SS}/\beta - \Delta V_{in}^2}} = 6.7\ \mathrm{mA/V^2}\times\dfrac{0.2985 - 0.005}{\sqrt{0.2960}} = 3.61$ mS.
- Normalized: $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2}$ with $x = \Delta V_{in}/V_{ov} = 0.05/0.273 = 0.183$, giving 0.987.

## Grading notes

+2: 3.61 mS (±2%), from the derivative of the large-signal characteristic. +1: equilibrium value 3.66 mS given with a statement that the 50-mV imbalance reduces it only slightly, or a slip within ±5%. 0: correct formula with wrong numbers. -2 (asserted as fact): $G_m$ from a single device's $g_m$ at the full tail current (5.18 mS), a large drop (e.g., below 3 mS), or $G_m$ increasing with the imbalance.
