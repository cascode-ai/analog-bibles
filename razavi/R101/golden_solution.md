# Golden Solution - R101

## Reference answer

$I_X = I_{D1} - (V_{DD} - V_X)/R_D$: it starts at $-V_{DD}/R_D$, rises (steeply while $M_1$ is in triode), and above $V_X = V_b - 0.7$ V becomes a straight line of slope $1/R_D$ reaching $I_1 = \tfrac12\beta(V_b - 0.7)^2$ at $V_X = V_{DD}$.

- KCL at the drain: $I_X + (V_{DD} - V_X)/R_D = I_{D1}$.
- $V_X = 0$: $I_{D1} = 0$ ($V_{DS} = 0$), $I_X = -3\ \mathrm{V}/R_D$.
- $0 < V_X < V_b - 0.7$ V: triode, $I_{D1} = \beta[(V_b - 0.7)V_X - V_X^2/2]$; slope $\beta(V_b - 0.7 - V_X) + 1/R_D$, decreasing to $1/R_D$ at the edge.
- $V_X \ge V_b - 0.7$ V: saturation, $I_{D1} = I_1$; $I_X = I_1 - (3 - V_X)/R_D$ (slope $1/R_D$, plus $\lambda I_1$ if channel-length modulation is included).
- Zero crossing where $I_{D1} = (3 - V_X)/R_D$. If $V_b \le 0.7$ V, $M_1$ is off and $I_X = (V_X - 3)/R_D$.

## Grading notes

+2: correct KCL ($I_X = I_{D1} - (V_{DD} - V_X)/R_D$), $I_X(0) = -V_{DD}/R_D$, triode region up to $V_X = V_b - V_{TH}$ with decreasing slope, then a line of slope $1/R_D$ ending at $I_1$ at $V_X = V_{DD}$. +1: correct shape with one feature missing (e.g., the initial value or the slope after saturation). 0: only the transistor current or only the resistor current considered. -2 (asserted as fact): $I_X$ decreasing with $V_X$, sign convention reversed without statement so that the curve is mirrored, or $M_1$ claimed saturated at $V_X = 0$ with nonzero current.
