# Golden Solution - R024

## Reference answer

The diode-connected $M_1$ is always saturated and discharges $C_1$ ever more slowly: $V_X$ decays hyperbolically from 3 V toward $V_{TH} = 0.7$ V without reaching it (square law), and $I_X$ decays from $\tfrac12\beta(2.3)^2 = 2.65\beta$ toward zero.
- $C_1\,dV_X/dt = -\tfrac12\beta(V_X - 0.7)^2$. With $u = V_X - 0.7$: $1/u = 1/u_0 + \beta t/(2C_1)$, so $V_X(t) = 0.7 + \dfrac{2.3}{1 + 2.3\beta t/(2C_1)}$ V and $I_X(t) = \tfrac12\beta(V_X - 0.7)^2 = \dfrac{2.65\beta}{[1 + 2.3\beta t/(2C_1)]^2}$.
- The approach is slower than exponential ($\propto 1/t$); in reality subthreshold conduction continues to lower $V_X$ slowly below 0.7 V.

## Grading notes

+2: saturation throughout, $V_X$ decaying toward $V_{TH}$ (0.7 V), not to 0, with a slowing (hyperbolic, not exponential) approach; $I_X$ starting at $\tfrac12\beta(2.3\ \mathrm{V})^2$ and decaying to 0. The closed-form solution is a plus, not required. +1: correct final value and shapes but the approach called exponential; or a slip confined to the optional closed form (e.g. the time constant written as $2C_1\Delta V_0/\beta$ instead of $2C_1/(\beta\Delta V_0)$) while the shapes, the initial current $\tfrac12\beta(2.3\ \mathrm{V})^2$, the final values (0.7 V, 0) and the slower-than-exponential approach are right. 0: correct mechanism with a wrong initial current. -2 (asserted as fact): $V_X$ decaying to 0 V, $M_1$ in triode, or a final value other than ≈ $V_{TH}$.
