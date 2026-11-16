# Golden Solution - R165

## Reference answer

$G_m \approx 5.14$ mS (equilibrium $\sqrt{\beta I_{SS}} = 5.18$ mS, a 0.6% drop), versus 3.61 mS (equilibrium 3.66 mS) at 1 mA: √2 higher, and less degraded by the 50-mV imbalance, at the cost of twice the power.
- $G_m = \tfrac12\beta\,(4I_{SS}/\beta - 2\Delta V^2)/\sqrt{4I_{SS}/\beta - \Delta V^2} = 6.7\ \mathrm{mS}\times(0.597 - 0.005)/\sqrt{0.5945} = 5.14$ mS.

## Grading notes

+2: ≈ 5.14 mS (±0.4%, i.e. 5.12–5.16 mS) with the comparison (≈ √2 × 3.61 mS), the values coming from the finite-ΔV expression. +1: equilibrium (small-signal) values 5.18 / 3.66 mS with the comparison, even though they lie within 1.3% of the exact ones, or comparison missing. 0: one case right. -2 (asserted as fact): $G_m$ doubling (7.3 mS) with current, or decreasing with current.
