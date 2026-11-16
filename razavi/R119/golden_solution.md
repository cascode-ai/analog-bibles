# Golden Solution - R119

## Reference answer

A source follower $M_2$ with current-source load $M_1$ ($R_S = r_{O1}$) and a current source $M_3$ in its drain ($R_D = r_{O3}$):
$A_v = \dfrac{g_{m2}r_{O1}r_{O2}}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}}$ (slightly below 1).

- Current through $M_2$: $i = g_{m2}(v_{in} - v_{out}) + (v_D - v_{out})/r_{O2}$, $v_D = -ir_{O3}$, $v_{out} = ir_{O1}$.
- Note the drain of $M_2$ is not at ac ground ($r_{O3}$), which adds $r_{O3}$ to the denominator.

## Grading notes

+2: the expression above or an equivalent form. +1: drain impedance $r_{O3}$ neglected (giving $g_{m2}r_{O1}r_{O2}/(r_{O1}+r_{O2}+g_{m2}r_{O1}r_{O2})$) stated as an approximation, or one slip. 0: right approach with an incorrect simplification. -2 (asserted as fact): inverting gain, gain above 1, or the output read at the drain of $M_2$.
