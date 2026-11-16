# Golden Solution - R114

## Reference answer

$A_v = -\dfrac{g_{m1}r_{O1}r_{O2}(1 + g_{m2}R_S)}{r_{O1} + r_{O2} + R_S(1 + g_{m1}r_{O1} + g_{m2}r_{O2})}$.

- Node $S$ = source of $M_1$ = top of $R_S$ = gate of $M_2$ (PMOS, source at $V_{DD}$, drain at the output).
- $M_1$ current (output → $S$): $i_1 = g_{m1}(v_{in} - v_S) + (v_{out} - v_S)/r_{O1} = v_S/R_S$.
- Output node: $-g_{m2}v_S - v_{out}/r_{O2} = i_1$ → $v_S = -v_{out}R_S/[r_{O2}(1 + g_{m2}R_S)]$; substituting gives the result.
- Equivalently $A_v = -G_mR_{out}$ with a large output resistance; for large $r_O$ the gain is of order $g_{m1}(1 + g_{m2}R_S)r_{O2}r_{O1}/[R_S(g_{m1}r_{O1} + g_{m2}r_{O2})]$, i.e. high.

## Grading notes

+2: the expression above or an equivalent form. +1: correct node equations and structure with one algebra slip. 0: correct node equations with an unfinished or wrongly simplified solution. -2 (asserted as fact): $M_2$ treated as an ideal current source (its gate drive from node $S$ ignored), $M_2$'s gate read as connected to the output or to ground, gain $-R_D/R_S$-type result, or positive gain.
