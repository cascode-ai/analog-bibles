# Golden Solution - R124

## Reference answer

$V_X = 0$ for all $t$; $V_Y$ starts at $V_{DD}$ and decays to 0: $C_1$ discharges completely through $M_1$, and $M_2$ carries no current.

- Node $Y$ connects only to the top plate of $C_1$ and the drain of $M_1$; node $X$ connects to the bottom plate, the source of $M_1$ and the drain of $M_2$. The current of $M_1$ ($Y \to X$) returns through $C_1$ to $Y$, so KCL at $X$ forces $M_2$'s current to zero. With $V_{b2} > V_{TH}$, $M_2$ is on with zero current, i.e. $V_{DS2} = 0$: $V_X = 0$ throughout.
- Hence $V_Y(0) = V_{DD}$, and $M_1$ discharges $C_1$ with a constant $V_{GS1} = V_{b1}$ (source at 0, no body effect): $C_1\,dV_Y/dt = -I_{D1}$.
- If $V_{b1} - 0.7 < V_{DD}$: $M_1$ starts saturated, $V_Y$ falls linearly with slope $-\tfrac12\beta_1(V_{b1} - 0.7)^2/C_1$ until $V_Y = V_{b1} - 0.7$ V; then $M_1$ is in triode and $V_Y$ decays toward 0, ending as an exponential with time constant $C_1/[\beta_1(V_{b1} - 0.7)]$. (If $V_{b1} - 0.7 \ge V_{DD}$, triode from the start.)
- Final state: $V_X = V_Y = 0$, $C_1$ fully discharged.

## Grading notes

+2: $V_X$ stays at 0 (with the reason that $M_2$ can carry no current because the discharge loop closes through $C_1$), $V_Y$ from $V_{DD}$ to 0 — linear ramp while $M_1$ is saturated, then a slower triode decay. An answer that explicitly restricts itself to $V_{b1} - 0.7 < V_{DD}$ is complete; the triode-from-the-start case is optional. +1: correct waveforms with the $M_2$ argument missing or the ramp/decay distinction missing. 0: $V_Y$ correct but $V_X$ claimed to move (e.g., to drop below 0 or to rise) with hedging. -2 (asserted as fact): $C_1$ claimed to discharge through $M_2$ to ground with $V_X$ falling from $V_{DD}$, $V_Y$ settling at a nonzero value such as $V_{b1} - V_{TH}$, or $V_Y$ increasing.
