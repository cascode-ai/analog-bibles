# Golden Solution - R117

## Reference answer

A source follower $M_2$ with a diode-connected load $M_1$ at its source and a diode-connected $M_3$ in its drain:
$A_v = \dfrac{g_{m2}r_{O2}R_S}{r_{O2} + R_D + R_S + g_{m2}r_{O2}R_S}$ with $R_S = \dfrac{1}{g_{m1}} \| r_{O1}$, $R_D = \dfrac{1}{g_{m3}} \| r_{O3}$.
For large $r_O$: $A_v \approx \dfrac{g_{m2}}{g_{m1} + g_{m2}}$.

- Current through $M_2$: $i = g_{m2}(v_{in} - v_{out}) + (v_D - v_{out})/r_{O2}$, $v_D = -iR_D$, $v_{out} = iR_S$.
- Fully expanded: $A_v = g_{m2}r_{O1}r_{O2}(1 + g_{m3}r_{O3})/D$ with the same $D$ as for the output taken at the drain.

## Grading notes

+2: the expression above or an equivalent form (positive, less than 1). +1: large-$r_O$ result $g_{m2}/(g_{m1}+g_{m2})$ stated as an approximation, or one slip. 0: effect of $M_3$ on the drain ignored without stating it while the rest is right. -2 (asserted as fact): inverting gain, gain above 1, or the output read at the drain of $M_2$.
