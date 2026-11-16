# Golden Solution - R302

## Reference answer

$Z_{in} = \infty$ and $\dfrac{V_{out}}{V_{in}} = +\dfrac{g_{m1}}{g_{m2}}$.
- Both transistors connect only the input node X and the output node: $M_1$ (NMOS, gate $V_{b2}$, source X, drain output) carries $-g_{m1}v_X$ from the output to X, and $M_2$ (PMOS, source at the output, gate $V_{b1}$, drain X) carries $g_{m2}v_{out}$ from the output to X.
- KCL at the output ($I_1$ ideal): $g_{m2}v_{out} - g_{m1}v_X = 0 \Rightarrow v_{out} = (g_{m1}/g_{m2})v_X$.
- KCL at X ($I_2$ ideal): $i_{in} + (g_{m2}v_{out} - g_{m1}v_X) = 0 \Rightarrow i_{in} = 0$ for any $v_X$: no small-signal current can enter, $Z_{in} = \infty$ (whatever enters X must leave through the output node, which has only an ideal current source).
- No current in $R_S$ gives $v_X = V_{in}$ and $V_{out} = (g_{m1}/g_{m2})V_{in}$.

## Grading notes

+2: $Z_{in} = \infty$ and $V_{out}/V_{in} = g_{m1}/g_{m2}$ (positive) with the KCL argument. +1: both right with a weak justification, or the gain sign slipped. 0: one of the two right. -2 (asserted as fact): a finite $Z_{in}$ such as $1/(g_{m1} + g_{m2})$ or $1/g_{m1}$, a gain depending on $R_S$, or a negative gain from misreading $M_2$ as a common-source device.
