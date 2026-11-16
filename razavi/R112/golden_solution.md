# Golden Solution - R112

## Reference answer

$A_v = -(g_{m1} - g_{m2})\left(\dfrac{1}{g_{m2}} \,\Big\|\, r_{O1} \,\Big\|\, r_{O2}\right) = -\dfrac{(g_{m1} - g_{m2})r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}$.

- Both gates are driven by $v_{in}$; $M_2$ (drain at $V_{DD}$) has its source at the output, so its current into the output is $g_{m2}(v_{in} - v_{out}) - v_{out}/r_{O2}$.
- KCL: $g_{m2}(v_{in} - v_{out}) - v_{out}/r_{O2} = g_{m1}v_{in} + v_{out}/r_{O1}$ → the result. For large $r_O$: $A_v \approx -(g_{m1} - g_{m2})/g_{m2} = 1 - g_{m1}/g_{m2}$.

## Grading notes

+2: the expression above or an equivalent form (including the $-g_{m2}$ feedforward in the numerator). +1: large-$r_O$ form $-(g_{m1} - g_{m2})/g_{m2}$ given as an approximation, or one slip. 0: correct KCL with an unfinished or wrongly simplified solution. -2 (asserted as fact): $M_2$ treated as a plain diode-connected load ($-g_{m1}/g_{m2}$, ignoring that its gate is driven by $V_{in}$), $M_2$'s gate treated as fixed (ac ground), gain $-g_{m1}(r_{O1}\|r_{O2})$, or $M_2$ read as a PMOS.
