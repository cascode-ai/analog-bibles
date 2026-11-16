# Golden Solution - R100

## Reference answer

$V_{out}$ is flat (independent of $V_{in}$) at the level set by the follower $M_2$, then falls once $M_3$ can no longer keep $M_2$'s drain high enough or supply $I_1$, reaching 0 V at $V_{in} = V_{DD} - |V_{THP}| = 2.2$ V and staying at 0 V beyond. Let $I_1 = \tfrac12\beta_1(V_{b2} - 0.7)^2$.

- Small $V_{in}$: $M_3$ is strongly on (triode), its drain $D$ is near $V_{DD}$; $M_2$ is a saturated source follower carrying $I_1$: $V_{out} = V_0 = V_{b1} - V_{TH2}(V_0) - \sqrt{2I_1/\beta_2}$, independent of $V_{in}$ (assuming $V_0 > V_{b2} - 0.7$ V so $M_1$ is saturated).
- As $V_{in}$ rises, $M_3$ needs a larger $V_{SD}$ to pass $I_1$ and $V_D$ falls. The plateau holds while $V_D \ge V_{b1} - V_{TH2}$ ($M_2$ saturated) and $M_3$ can still deliver $I_1$ (its saturation current $\tfrac12\beta_3(2.2 - V_{in})^2 \ge I_1$).
- Beyond that, $M_2$ enters triode and $V_{out}$ follows $V_D$ down, and/or the current drops below $I_1$ ($M_3$ saturated, limiting); $M_1$ enters triode when $V_{out} < V_{b2} - 0.7$ V; $V_{out}$ decreases to 0.
- With λ = 0, if the plateau ends because $M_3$'s saturation current falls to $I_1$ (at $V_{in}^* = 2.2 - (V_{b2} - 0.7)\sqrt{\beta_1/\beta_3}$) while $M_1$ is still saturated, the gain there is unbounded and $V_{out}$ drops vertically at $V_{in}^*$ to $V_{b2} - 0.7$ V ($M_2$ entering triode on the way); beyond it $M_3$ is a current source, $M_1$ and $M_2$ are in triode, and $\tfrac12\beta_3(2.2 - V_{in})^2 = \beta_1[(V_{b2} - 0.7)V_{out} - V_{out}^2/2]$ until $V_{out} = 0$ at 2.2 V. There is no jump only if $M_2$'s loss of headroom has already brought $V_{out}$ down to $V_{b2} - 0.7$ V before $V_{in}^*$.
- $V_{in} \ge 2.2$ V: $M_3$ off, no current, $V_{out} = 0$.
- Transition points: end of the plateau ($V_D = V_{b1} - V_{TH2}$ or $V_{in} = 2.2 - \sqrt{2I_1/\beta_3}$, whichever comes first), $V_{out} = V_{b2} - 0.7$ V, $V_{in} = 2.2$ V.

## Grading notes

+2: flat output $V_{b1} - V_{GS2}(I_1)$ independent of $V_{in}$ at low $V_{in}$ ($M_2$ a follower of the fixed $V_{b1}$), a decline once $M_3$ starves $M_2$ (drain falling below $V_{b1} - V_{TH2}$ or current falling below $I_1$), and $V_{out} = 0$ for $V_{in} \ge 2.2$ V. +1: plateau and cutoff right, intermediate mechanism vague. 0: decreasing curve without the plateau. -2 (asserted as fact): $V_{out}$ following $V_{in}$ with positive gain, $M_2$ treated as a cascode with output at its drain, or a nonzero output above 2.2 V.
