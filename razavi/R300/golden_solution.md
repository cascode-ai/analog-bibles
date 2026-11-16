# Golden Solution - R300

## Reference answer

$Z_{in} = \dfrac{1}{g_{m1}}$ and $\dfrac{V_{out}}{V_{in}} = -\dfrac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)}$.
- $M_2$ is a common-gate PMOS (source at the output node, gate at $V_b$, drain at the input node X): it carries $g_{m2}v_{out}$ from the output to X.
- KCL at the output ($I_1$ ideal): $g_{m1}v_X + g_{m2}v_{out} = 0 \Rightarrow v_{out} = -(g_{m1}/g_{m2})v_X$.
- KCL at X ($I_2$ ideal, gate of $M_1$ open): $i_{in} + g_{m2}v_{out} = 0 \Rightarrow i_{in} = g_{m1}v_X$, so $Z_{in} = 1/g_{m1}$ (all of $M_1$'s signal current returns to X through $M_2$).
- $v_X = V_{in}/(1 + g_{m1}R_S)$, hence the transfer function.

## Grading notes

+2: $Z_{in} = 1/g_{m1}$ and $V_{out}/V_{in} = -g_{m1}/[g_{m2}(1 + g_{m1}R_S)]$. +1: both right with an unexplained step. 0: one of the two right, including a correct $Z_{in}$ with a gain of the wrong sign (e.g. $+g_{m1}/[g_{m2}(1+g_{m1}R_S)]$ from a reversed $M_2$ current direction). -2 (asserted as fact): $Z_{in} = 1/g_{m2}$ or $0$ or $\infty$, $M_2$ misread as a diode or as an NMOS follower, or a gain of $-g_{m1}/g_{m2}$ claimed independent of $R_S$.
