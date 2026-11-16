# Golden Solution - R111

## Reference answer

$A_v = \left(g_{m1} + \dfrac{1}{r_{O1}} + \dfrac{1}{R_1}\right)(R_1 \| R_2 \| r_{O1}) = \dfrac{R_2(g_{m1}R_1r_{O1} + R_1 + r_{O1})}{R_1R_2 + R_1r_{O1} + R_2r_{O1}}$ (non-inverting, common gate).

- $M_1$: gate at ac ground, source driven by $v_{in}$, drain at the output; $R_1$ in parallel with drain–source; $R_2$ from the output to $V_{DD}$ (ac ground).
- KCL at the output: $v_{out}/R_2 + (v_{out} - v_{in})/R_1 + (v_{out} - v_{in})/r_{O1} - g_{m1}v_{in} = 0$.
- For $r_{O1} \to \infty$: $(g_{m1} + 1/R_1)(R_1\|R_2)$.

## Grading notes

+2: the expression above or an equivalent form (positive gain). +1: $r_{O1}$ or the $R_1$ feedforward omitted but stated as an approximation, or one algebra slip. 0: correct KCL with an unfinished or wrongly simplified solution. -2 (asserted as fact): $R_1$ treated as a load to ground, inverting gain, $M_1$ treated as a common-source stage driven at the gate, or $R_1$ read as connected to the gate.
