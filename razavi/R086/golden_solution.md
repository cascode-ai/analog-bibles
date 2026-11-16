# Golden Solution - R086

## Reference answer

$|A_v| = \dfrac{g_{m1}}{g_{m2}} = \sqrt{\dfrac{\mu_n(W/L)_1I_1}{\mu_p(W/L)_2(I_1 - I_S)}} = \dfrac{A_0}{\sqrt{1 - I_S/I_1}}$, with $A_0 = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$ (gain negative, inverting).

- $g_{m1} = \sqrt{2\mu_nC_{ox}(W/L)_1I_1}$ is fixed; $M_2$ carries only $I_1 - I_S$, so $g_{m2} = \sqrt{2\mu_pC_{ox}(W/L)_2(I_1 - I_S)}$ falls.
- The gain magnitude rises monotonically and ever faster (convex): $A_0$, 1.15$A_0$, 1.41$A_0$, 2$A_0$ at $I_S/I_1$ = 0, 0.25, 0.5, 0.75.

## Grading notes

+2: the $1/\sqrt{1 - I_S/I_1}$ dependence (or equivalent) with the gain doubling at $I_S = 0.75I_1$, and the reason ($g_{m2}$ falls with $M_2$'s current while $g_{m1}$ is fixed). +1: increasing trend with the correct end value but the shape described loosely. 0: increasing trend with the right reason but no quantitative law. -2 (asserted as fact): gain decreasing or constant, or a wrong law such as $1/(1 - I_S/I_1)$ (fourfold at the end).
