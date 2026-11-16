# Golden Solution - R363

## Reference answer

The noise decreases monotonically as $R_S$ increases, so $R_S$ should take as much of the voltage budget as possible: $R_S \to V_H/I_D$, with $M_2$'s overdrive made as small as practical (a wide $M_2$). In that limit the load noise current tends to $4kT/R_S = 4kTI_D/V_H$, versus $4kT\gamma\cdot 2I_D/V_H$ for $R_S = 0$: a reduction by $2\gamma$ (= 4/3 for γ = 2/3).

- Load noise current (from $M_2$ and $R_S$): $\overline{I_{n,L}^2} = \dfrac{4kT(\gamma g_{m2} + g_{m2}^2R_S)}{(1+g_{m2}R_S)^2}$; $M_1$'s term $4kT\gamma/g_{m1}$ is fixed by $I_D$ and $(W/L)_1$.
- Let $x = I_DR_S$, so $|V_{ov2}| = V_H - x$, $g_{m2} = 2I_D/(V_H - x)$, $g_{m2}R_S = 2x/(V_H - x)$, $1 + g_{m2}R_S = (V_H + x)/(V_H - x)$. Then $\overline{I_{n,L}^2} = 8kTI_D\,\dfrac{\gamma(V_H - x) + 2x}{(V_H + x)^2}$.
- $\dfrac{d}{dx}\left[\dfrac{\gamma V_H + (2-\gamma)x}{(V_H+x)^2}\right] \propto (2 - 3\gamma)V_H - (2-\gamma)x$, which is ≤ 0 for all $x \ge 0$ when $\gamma \ge 2/3$: no interior minimum; the noise falls steadily as $x$ (i.e., $R_S$) grows.
- Physical reason: for the same dc drop and current, a resistor's noise current $4kTI/V$ is lower than a saturated transistor's $4kT\gamma\cdot2I/V_{ov}$ when $2\gamma > 1$. (For γ < 2/3 the stationary point $x = (2-3\gamma)V_H/(2-\gamma)$ is a noise maximum, not a minimum; the optimum is still at an endpoint: $R_S \to V_H/I_D$ when γ > 1/2, $R_S = 0$ when γ < 1/2.)

## Grading notes

+2: the load-noise expression under the fixed-headroom constraint and the conclusion that $R_S$ should be made as large as the headroom allows (all of $V_H$ across $R_S$, minimal $M_2$ overdrive), justified by the monotonic decrease (derivative or comparison $4kTI_D/V_H$ vs $8kT\gamma I_D/V_H$). +1: correct conclusion with only the endpoint comparison and no proof that intermediate values are not better, or a minor algebra slip. 0: correct setup but the optimization left unfinished. -2 (asserted as fact): $R_S = 0$ claimed optimal, an interior optimum asserted for γ = 2/3 (e.g., $R_S = 1/g_{m2}$), or the conclusion that $R_S$ does not affect the noise.
