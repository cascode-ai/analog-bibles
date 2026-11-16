# Golden Solution - G114

## Reference answer

Let the load line have intercepts $V_0$ on the $V_{ce}$ axis and $I_0$ on the $I_c$ axis: $I_c = I_0(1 - V_{ce}/V_0)$, slope $-I_0/V_0$.
- Along the hyperbola $I_c = P/V_{ce}$ the slope is $dI_c/dV_{ce} = -P/V_{ce}^2 = -I_c/V_{ce}$.
- Tangency requires a common point with equal slopes: $I_c/V_{ce} = I_0/V_0$. Substituting into the load line, $I_0V_{ce}/V_0 = I_0(1 - V_{ce}/V_0)$, so $V_{ce} = V_0/2$ and $I_c = I_0/2$ — the midpoint.
- Equivalent view: on the load line, $P = I_cV_{ce} = I_0V_{ce}(1 - V_{ce}/V_0)$ is a parabola in $V_{ce}$ with its maximum $I_0V_0/4$ at $V_{ce} = V_0/2$; the hyperbola through that point is the highest one the line touches, and it touches it there. Hence the midpoint is also the point of maximum instantaneous device dissipation on any load line.

## Grading notes

+2: a correct general proof (equal slopes $-I_c/V_{ce} = -I_0/V_0$ at the contact point, or maximizing $I_cV_{ce}$ along the line) leading to $V_{ce} = V_0/2$, $I_c = I_0/2$. +1: correct idea with a gap (e.g. shown only for a specific numerical line, or the tangency/maximum equivalence asserted without justification). 0: restates the claim with an incomplete argument. −2 (asserted as fact): a "proof" with a wrong slope of the hyperbola (e.g. $-P/V_{ce}$) or concluding a contact point other than the midpoint.
