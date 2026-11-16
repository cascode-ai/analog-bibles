# Golden Solution - R301

## Reference answer

$Z_{in} = 0$ and $\dfrac{V_{out}}{V_{in}} = +\dfrac{1}{g_{m2}R_S}$.
- $M_1$ is a common-gate NMOS (source at the input node X, gate at $V_b$, drain at the output); $M_2$ is a PMOS with source at $V_{DD}$, gate at $V_{out}$, drain at X.
- KCL at the output: $I_1$ is ideal and the gate of $M_2$ draws no current, so $M_1$'s small-signal current $-g_{m1}v_X$ must be zero: $v_X = 0$, i.e. $Z_{in} = 0$ (negative feedback with infinite loop gain).
- KCL at X: the input current is absorbed by $M_2$, whose drain current into X is $-g_{m2}v_{out}$: $i_{in} - g_{m2}v_{out} = 0 \Rightarrow v_{out} = i_{in}/g_{m2} = V_{in}/(g_{m2}R_S)$.

## Grading notes

+2: $Z_{in} = 0$ and $V_{out}/V_{in} = +1/(g_{m2}R_S)$ with the correct KCL argument. +1: correct magnitude with the sign wrong through a slip, or correct results with a vague argument. 0: one of the two right. -2 (asserted as fact): $Z_{in} = 1/g_{m1}$ (as for an isolated CG stage), a finite gain such as $g_{m1}/g_{m2}$, or $M_2$ misread as an NMOS follower.
