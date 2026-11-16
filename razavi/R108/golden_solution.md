# Golden Solution - R108

## Reference answer

$I_X = I_{D1} - |I_{D2}|$: it starts at $-I_2$, rises while $M_1$ is in triode, is flat at $I_1 - I_2$ while both are saturated, and rises again to $I_1$ at $V_X = V_{DD}$ as $M_2$ goes into triode. $I_1 = \tfrac12\beta_n(V_{b2} - 0.7)^2$, $I_2 = \tfrac12\beta_p(V_{DD} - V_{b1} - 0.8)^2$.

- $M_1$: triode for $V_X < V_{b2} - 0.7$ V, $I_{D1} = \beta_n[(V_{b2} - 0.7)V_X - V_X^2/2]$; saturated beyond, $I_1$.
- $M_2$: saturated for $V_X \le V_{b1} + 0.8$ V ($I_2$); triode above, its current falling to 0 at $V_X = 3$ V.
- With $V_{b2} - 0.7 < V_{b1} + 0.8$: $I_X = -I_2$ at 0, rising to $I_1 - I_2$ at $V_X = V_{b2} - 0.7$ V, flat (slope $\lambda_nI_1 + \lambda_pI_2$ if channel-length modulation is included) up to $V_X = V_{b1} + 0.8$ V, then rising to $I_1$ at 3 V. (If the two breakpoints are in the opposite order, the middle segment has both devices in triode and rises steadily.)
- Transition points: $V_X = V_{b2} - 0.7$ V and $V_X = V_{b1} + 0.8$ V.

## Grading notes

+2: $I_X = I_{D1} - |I_{D2}|$, start $-I_2$, end $+I_1$, breakpoints at $V_{b2} - V_{THN}$ and $V_{b1} + |V_{THP}|$, flat middle $I_1 - I_2$ (or small slope with λ). +1: shape right with one breakpoint misplaced by a slip. 0: only one device's characteristic handled. -2 (asserted as fact): breakpoint of $M_2$ at $V_{b1} - |V_{THP}|$ or similar sign error that changes the shape, end value other than $I_1$, or $I_X$ decreasing.
