# Golden Solution - G072

## Reference answer

$$A_{dm} = -\frac{g_m\,(R_C \| \tfrac{R_L}{2})}{1 + g_m \tfrac{R_E}{2}\left(1 + \tfrac{1}{\beta_0}\right)} \approx -\frac{R_C \| (R_L/2)}{1/g_m + R_E/2},\qquad A_{cm} = 0,$$
$$R_{id} = 2\left[r_\pi + (\beta_0+1)\frac{R_E}{2}\right] = 2r_\pi + (\beta_0+1)R_E,\qquad R_{ic} \to \infty .$$

- Differential mode: the circuit is symmetric and driven antisymmetrically, so the midpoints of $R_L$ and $R_E$ stay at ac ground. The half circuit is a CE stage with load $R_C \| (R_L/2)$ and emitter degeneration $R_E/2$; $v_{od}/2 = A\,(v_{id}/2)$, so $A_{dm}$ equals the half-circuit gain above. Its input resistance is $r_\pi + (\beta_0+1)R_E/2$, and $R_{id}$ is twice that.
- Common mode: both sides move together, so no current flows in $R_L$ or $R_E$ (they can be opened). Each emitter then sees only the ideal current source $I_{EE}$ (infinite impedance), so the emitter current, and hence the collector current, cannot change: $A_{cm} = 0$ (CMRR → ∞), and no small-signal base current flows: $R_{ic} \to \infty$ (finite only through $r_o$, $r_\mu$ and the current sources' output resistances, all neglected).

## Grading notes

Four results. +2: $A_{dm}$ with load $R_C \| (R_L/2)$ and degeneration $R_E/2$ (the $(1+1/\beta_0)$ factor optional), $A_{cm} = 0$, $R_{id} = 2r_\pi + (\beta_0+1)R_E$, $R_{ic} = \infty$, with half-circuit reasoning. +1: one minor slip (e.g. $\beta_0$ for $\beta_0+1$ is fine; a missing factor in one place). 0: about half right (e.g. $A_{dm}$ and $R_{id}$ right but $A_{cm}$ given as $-R_C/R_E$-type finite value with no reasoning). −2 (asserted as fact): $R_L$ or $R_E$ used at full value instead of halves in the differential half circuit, $R_L$ or $R_E$ included in the common-mode half circuit, or $A_{dm}$ independent of $R_E$.
