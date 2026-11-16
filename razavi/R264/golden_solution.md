# Golden Solution - R264

## Reference answer

If $V_0 > V_{TH}$: $V_X$ starts at $V_0$ and decays toward $V_{TH} = 0.7$ V as the diode-connected $M_2$ discharges $C_1$, fast at first and then slowly: $V_X(t) = V_{TH} + \dfrac{V_0 - V_{TH}}{1 + t/\tau}$, $\tau = \dfrac{2C_1}{\beta(V_0 - V_{TH})}$ (never quite reaching $V_{TH}$ in the square-law model). $V_Y$ starts low, at $V_{DD} - R_1\tfrac{\beta}{2}(V_0-V_{TH})^2$ (or lower, with $M_1$ in triode, if that would be below $V_0 - V_{TH}$), and rises toward $V_{DD}$ as $M_1$'s current $\tfrac{\beta}{2}(V_X - V_{TH})^2$ dies out. If $V_0 \le V_{TH}$, nothing happens: $V_X = V_0$, $V_Y = V_{DD}$.

- $C_1$ is the only element at X besides the diode-connected $M_2$ and the gate of $M_1$: $C_1 dV_X/dt = -\tfrac{\beta}{2}(V_X - V_{TH})^2$, which integrates to the hyperbolic decay above.
- $M_1$ has the same $V_{GS}$ as $M_2$ and mirrors its current into $R_1$.

## Grading notes

+2: $V_X$ decaying from $V_0$ toward $V_{TH}$ (not toward 0), with a non-exponential slowing tail; $V_Y$ starting at $V_{DD} - R_1\tfrac{\beta}{2}(V_0-V_{TH})^2$ (or a triode-limited low value) and rising to $V_{DD}$; the $V_0 \le V_{TH}$ case mentioned or $V_0 > V_{TH}$ assumed explicitly. +1: correct shapes but the decay called exponential or the final value of $V_X$ placed slightly off, or the initial $V_Y$ not given. 0: $V_X$ right, $V_Y$ wrong in trend. -2 (asserted as fact): $V_X$ decaying to 0 V, $V_X$ constant, or $V_Y$ falling with time.
