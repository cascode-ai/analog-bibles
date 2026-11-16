# Golden Solution - R162

## Reference answer

10% drop at ≈ 0.197 V, 90% drop at ≈ 0.526 V (cut-off at 0.546 V), versus 0.139 V and 0.372 V for $W/L = 50/0.5$: the input range scales with the overdrive, i.e. it is $\sqrt2$ wider for the narrower devices (more linear, lower gain).
- $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2}$ with $x = \Delta V/V_{ov}$; the 10% and 90% points are at $x = 0.509$ and $x = 1.361$; $V_{ov} = 0.386$ V here (0.273 V for 50/0.5).

## Grading notes

+2: ≈ 0.197 V and ≈ 0.526 V (±3%) with the √2 comparison to 0.139/0.372 V. +1: values right, comparison missing or one value slightly off. 0: one value right. -2 (asserted as fact): a narrower input range for smaller W/L, or values from a wrong $G_m$ expression.
