# Golden Solution - R094

## Reference answer

An inverting characteristic driven by the PMOS $M_2$: $V_{out}$ near $V_{DD}$ for small $V_{in}$, a falling region while $M_2$ is saturated (slope $-g_{m2}R_D$), and a flat floor for $V_{in} \ge V_{DD} - |V_{THP}| = 2.2$ V where $M_2$ is off. Let $I_1 = \tfrac12\beta_1(V_b - 0.7)^2$ ($M_1$'s saturation current).

- Small $V_{in}$: $M_2$ has a large $V_{SG} = 3 - V_{in}$ and can supply more than $I_1$, so it sits in triode with a small $V_{SD}$; $V_{out}$ is just below $V_{DD}$ and decreases slowly as $V_{in}$ rises. $M_1$ (current source) is saturated.
- $M_2$ saturates when $V_{out} < V_{in} + 0.8$ V. Then $\tfrac12\beta_2(2.2 - V_{in})^2 + (V_{DD} - V_{out})/R_D = I_1$, i.e. $V_{out} = V_{DD} - R_D[I_1 - \tfrac12\beta_2(2.2 - V_{in})^2]$, slope $-g_{m2}R_D$ with $g_{m2} = \beta_2(2.2 - V_{in})$: steepest where the region begins and flattening as $V_{in} \to 2.2$ V.
- If $V_{out}$ falls below $V_b - 0.7$ V, $M_1$ enters triode and the drop is softened.
- $V_{in} \ge 2.2$ V: $M_2$ off; $V_{out} = V_{DD} - I_1R_D$ (if this is above $V_b - 0.7$ V; otherwise the lower value set by $R_D$ and $M_1$ in triode), constant up to $V_{in} = 3$ V.
- Transition points: $M_2$ triode/saturation at $V_{out} = V_{in} + 0.8$ V; possible $M_1$ triode entry at $V_{out} = V_b - 0.7$ V; $M_2$ cutoff at $V_{in} = 2.2$ V.

## Grading notes

+2: inverting curve with $M_2$ as the input device: high $V_{out}$ (M2 triode) at small $V_{in}$, a falling region with gain ≈ $g_{m2}R_D$ when $M_2$ is saturated, cutoff of $M_2$ at $V_{in} = V_{DD} - |V_{THP}| = 2.2$ V with a flat floor ≈ $V_{DD} - I_1R_D$ beyond. +1: one of these features missing (e.g., the floor level or the $M_1$ triode caveat). 0: correct trend but the cutoff at 2.2 V missing or misplaced. -2 (asserted as fact): non-inverting, $V_{out}$ falling to 0 V when $M_2$ is off (ignoring $R_D$), or $M_1$ treated as the input device.
