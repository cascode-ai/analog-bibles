# Golden Solution - R104

## Reference answer

$I_X = I_{D2} - I_{D1}$: negative at $V_X = 0$, rising as $M_2$'s current grows and $M_1$'s current shrinks, and flat at $I_2 = \tfrac12\beta_2(V_{b2} - 0.7)^2$ once $M_1$ is off and $M_2$ saturated.

- KCL at $X$: $I_X + I_{D1} = I_{D2}$.
- $M_1$ (drain at $V_{DD}$, source at $X$) is a follower-type device, saturated while on provided $V_{b1} \le V_{DD} + 0.7$ V (for larger $V_{b1}$ it starts in triode at low $V_X$): $I_{D1} = \tfrac12\beta_1(V_{b1} - V_X - V_{TH1})^2$ with $V_{TH1} = 0.7 + 0.45(\sqrt{0.9+V_X} - \sqrt{0.9})$ (body effect, $V_{SB} = V_X$), decreasing to zero at $V_X = V_{b1} - V_{TH1}(V_X)$ (slightly below $V_{b1} - 0.7$ V).
- $M_2$: triode for $V_X < V_{b2} - 0.7$ V, $I_{D2} = \beta_2[(V_{b2} - 0.7)V_X - V_X^2/2]$, rising from 0; saturated beyond, $I_{D2} = I_2$. (If $V_{b2} > 3.7$ V, $M_2$ stays in triode over the whole sweep.)
- So $I_X(0) = -\tfrac12\beta_1(V_{b1} - 0.7)^2$; $I_X$ rises through zero; for $V_X$ above both $V_{b2} - 0.7$ V and $M_1$'s cutoff, $I_X = I_2$ (flat; slope $\lambda I_2$ if λ is included).
- Transition points: $V_X = V_{b2} - 0.7$ V ($M_2$ saturates), $V_X = V_{b1} - V_{TH1}$ ($M_1$ off).

## Grading notes

+2: $I_X = I_{D2} - I_{D1}$, negative start $-\tfrac12\beta_1(V_{b1}-V_{TH})^2$, $M_2$ triode up to $V_{b2} - V_{TH}$ then constant, $M_1$ decreasing quadratically to cutoff at $V_X \approx V_{b1} - V_{TH}$ (body effect noted), final plateau $I_2$. +1: correct shape with one transition point missing or body effect ignored. 0: only one of the two device currents handled correctly. -2 (asserted as fact): $M_1$'s current increasing with $V_X$, $X$ treated as $M_1$'s drain, or $I_X$ decreasing overall.
