# Golden Solution - R103

## Reference answer

$I_X = V_X/R_S - I_{D1}$: negative at $V_X = 0$ (equal to $-I_{D1}$), rising as $M_1$'s current falls, and, after $M_1$ cuts off, the line $V_X/R_S$ through the origin, reaching $3\ \mathrm{V}/R_S$ at $V_X = V_{DD}$.

- $V_X$ fixes the source of $M_1$: $V_{GS} = V_b - V_X$, $V_{SB} = V_X$. KCL at the source node: $I_X + I_{D1} = V_X/R_S$.
- $M_1$ is on for $V_X < V_{X,off}$, where $V_b - V_{X,off} = V_{TH}(V_{X,off})$ (slightly below $V_b - 0.7$ V because of the body effect).
- While on, $M_1$ is saturated if its drain $V_{DD} - I_{D1}R_D \ge V_b - V_{TH}$; at small $V_X$ with a large current (large $R_D$) it may start in triode and go into saturation as $V_X$ rises and the current falls. In saturation $I_{D1} = \tfrac12\beta(V_b - V_X - V_{TH}(V_X))^2$ and the slope of $I_X$ is $1/R_S + g_m + g_{mb}$.
- $I_X$ crosses zero where $I_{D1} = V_X/R_S$; for $V_X \ge V_{X,off}$: $I_X = V_X/R_S$.
- Transition points: possible triode/saturation boundary, $V_{X,off}$, end value $3/R_S$.

## Grading notes

+2: KCL $I_X = V_X/R_S - I_{D1}$, negative start ($-I_{D1}(0)$), $M_1$ current decreasing as $V_X$ (its source) rises, cutoff at $V_X \approx V_b - V_{TH}$ (body effect noted), then the line $V_X/R_S$. +1: correct shape with the triode possibility or body effect omitted. 0: only the resistor or only the transistor current. -2 (asserted as fact): $I_{D1}$ increasing with $V_X$, $V_X$ treated as the drain voltage, or $I_X$ decreasing overall.
