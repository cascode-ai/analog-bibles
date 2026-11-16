# Golden Solution - R158

## Reference answer

10% drop at $|V_{in1} - V_{in2}| \approx 0.139$ V; 90% drop at ≈ 0.372 V (for reference, $G_m$ reaches zero at $\sqrt{2}\,V_{ov} = 0.386$ V).
- $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2}$ with $x = \Delta V_{in}/V_{ov}$ and $V_{ov} = \sqrt{I_{SS}/\beta} = 0.273$ V.
- 0.9: $(2-u)^2 = 0.81(4 - u)$ with $u = x^2$ gives $u = 0.259$, $x = 0.509$, $\Delta V_{in} = 0.139$ V.
- 0.1: $(2-u)^2 = 0.01(4-u)$ gives $u = 1.854$, $x = 1.361$, $\Delta V_{in} = 0.372$ V.

## Grading notes

Two values, equal weight. +2: ≈ 0.139 V and ≈ 0.372 V (±3%, sign ± accepted). +1: one value right and the other off by a slip, or both within ±8%. 0: one value right, the other wrong; or correct equation unsolved. -2 (asserted as fact): values beyond the cut-off 0.386 V, values from a linearized or wrong $G_m$ expression (e.g., 10% drop at 0.027 V), or a monotonically increasing $G_m$.
