# Golden Solution - R093

## Reference answer

An inverting characteristic: $V_{DD}$ until $M_1$ turns on, a gentle fall while $M_2$ is in triode (load $R_D\|R_{on2}$), a steeper fall once $M_2$ saturates (it then acts as a constant current source and the load is $R_D$), and a flattening when $M_1$ enters triode. Let $I_2 = \tfrac12\beta_2(V_{DD} - V_b - 0.8)^2$ ($M_2$'s saturation current; $M_2$ is on only if $V_b < 2.2$ V).

- $V_{in} \le 0.7$ V: $M_1$ off, no current anywhere, $V_{out} = V_{DD}$ ($M_2$ in triode with $V_{SD} = 0$).
- $M_1$ on, $V_{out} > V_b + 0.8$ V: $M_2$ in triode (resistance ≈ $1/[\beta_2(V_{DD} - V_b - 0.8)]$ for small $V_{SD}$) in parallel with $R_D$; $I_{D1} = \tfrac12\beta_1(V_{in} - 0.7)^2$ flows through this low-resistance combination; slope ≈ $-g_{m1}(R_D\|R_{on2})$, small.
- $V_{out} < V_b + 0.8$ V: $M_2$ saturated, supplying the constant $I_2$; $V_{out} = V_{DD} - R_D(I_{D1} - I_2)$, slope $-g_{m1}R_D$: the steep, high-gain part.
- $V_{out} < V_{in} - 0.7$ V: $M_1$ enters triode; the slope decreases and $V_{out}$ approaches a low value at $V_{in} = 3$ V.
- Transition points: $V_{in} = 0.7$ V; $V_{out} = V_b + |V_{THP}| = V_b + 0.8$ V; $V_{out} = V_{in} - 0.7$ V.
- In terms of the parameters (KCL at the output: $I_{D1} = (V_{DD} - V_{out})/R_D + I_{D2}$, both $R_D$ and $M_2$ pulling up): $M_2$ saturates at $V_{in} = 0.7 + \sqrt{(2/\beta_1)[(2.2 - V_b)/R_D + I_2]}$ (if $M_1$ is still saturated there); $M_1$ enters triode where $\tfrac12\beta_1(V_{in} - 0.7)^2 = (3.7 - V_{in})/R_D + I_2$. If $V_b$ is low enough that $M_1$ reaches $V_{out} = V_{in} - 0.7$ V before $V_{out}$ falls to $V_b + 0.8$ V, the two kinks occur in the opposite order; either order is acceptable when justified. (If $V_b \ge 2.2$ V, $M_2$ is off and the circuit is an ordinary resistively loaded CS stage.)

## Grading notes

+2: $V_{out} = V_{DD}$ up to 0.7 V, a gentle initial fall while $M_2$ is in triode, a steeper fall (gain ≈ $g_{m1}R_D$) once $V_{out} < V_b + |V_{THP}|$, triode entry of $M_1$ at $V_{out} = V_{in} - V_{TH}$ and a low final value. +1: the $M_2$ triode-to-saturation transition missing (load treated as $R_D$ in parallel with a current source throughout) but otherwise right. 0: correct inverting shape but transition points wrong or missing. -2 (asserted as fact): non-inverting characteristic, $V_{out}$ below $V_{DD}$ while $M_1$ is off, or $M_2$ treated as an NMOS / as the input device.
