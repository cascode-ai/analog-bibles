# Golden Solution - R217

## Reference answer

$V_{OS} \le 0.36\sqrt{\dfrac{I_{SS}}{\mu_nC_{ox}W/L}}$, i.e. about 36% of the equilibrium overdrive, or ≈ $0.26\sqrt{2I_{SS}/(\mu_nC_{ox}W/L)}$ (26% of the input range $\Delta V_{in1}$).
- The small-signal gain is $R_DG_m$, with $G_m$ the slope of $I_{D1} - I_{D2}$ at the dc imbalance: $G_m = \tfrac12\mu_nC_{ox}\frac{W}{L}\dfrac{4I_{SS}/(\mu_nC_{ox}W/L) - 2V_{OS}^2}{\sqrt{4I_{SS}/(\mu_nC_{ox}W/L) - V_{OS}^2}}$.
- Normalized with $x = V_{OS}/\sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$: $G_m/G_m(0) = (2 - x^2)/\sqrt{4 - x^2}$.
- Setting this to 0.95: $(2 - u)^2 = 0.9025(4 - u)$, $u = x^2 = 0.1315$, $x = 0.363$.
- Check: for $V_{OS} = \Delta V_{in1}/2$ ($x = 0.707$) the formula gives 0.80, i.e. a 20% drop.

## Grading notes

+2: $V_{OS}$ ≈ 0.36$\sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$ (±5%, or the equivalent 0.26$\sqrt{2I_{SS}/(\mu_nC_{ox}W/L)}$), from the large-signal $G_m$ expression. +1: correct setup with a slip in solving (within ±15%). 0: correct $G_m$ expression and condition, not solved. -2 (asserted as fact): a value from a linear or otherwise wrong $G_m$ dependence (e.g., 5% of the overdrive), a value beyond the input range, or the claim that the gain does not depend on $V_{OS}$.
