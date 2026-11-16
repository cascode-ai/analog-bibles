# Golden Solution - R026

## Reference answer

$M_1$ passes the current $I_1$, so $I_X = I_1$ and $V_X$ falls linearly at $I_1/C_1$. The ramp continues while the current source can still sink $I_1$; with a real current source $V_X$ then levels off near 0 V (where the source node reaches the bottom of its range) and $I_X$ drops to zero.
- Phase 1, $V_X > V_b - V_{TH}$: $M_1$ saturated, $V_S = V_b - V_{TH} - \sqrt{2I_1/\beta}$ constant (assumed ≥ 0), $I_X = I_1$, $dV_X/dt = -I_1/C_1$.
- Phase 2, $V_X < V_b - V_{TH}$: $M_1$ in triode; it still carries $I_1$ because $V_S$ drops along with $V_X$ ($V_{GS}$ grows, $V_{DS}$ shrinks), so the linear ramp continues.
- End: an ideal current source would keep pulling both nodes down indefinitely; physically $I_1$ stops when its own voltage $V_S$ hits its minimum (≈ 0 V, or ≈ −0.7 V where the source–substrate junction starts supplying the current), after which $I_X \to 0$ and $V_X$ settles at about the same level as $V_S$ (≈ 0 V).

## Grading notes

+2: $I_X = I_1$ constant and $V_X$ falling linearly with slope $-I_1/C_1$ across the saturation-to-triode transition, with a sensible statement of how it ends (ideal source: ramp continues; real source: $V_X$ settles near 0 V, $I_X \to 0$). +1: correct ramp with the end behaviour missing or only asserted. 0: linear ramp right, but $I_X$ claimed to start decaying as soon as $M_1$ leaves saturation although the current source still has headroom. -2 (asserted as fact): exponential RC discharge from the start, $I_X$ determined by $V_b$ through the square law instead of $I_1$, or $V_X$ settling at $V_b - V_{TH}$.
