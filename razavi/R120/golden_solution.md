# Golden Solution - R120

## Reference answer

$A_v = -\dfrac{g_{m1}r_{O1}r_{O3}[1 + (g_{m2} - g_{m3})r_{O2}]}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}}$; for $g_mr_O \gg 1$, $A_v \approx -\dfrac{g_{m1}(g_{m2} - g_{m3})r_{O2}r_{O3}}{g_{m2}r_{O2} + g_{m3}r_{O3}}$.

- Node $X$: drain of $M_1$, source of the cascode $M_2$, and gate of the PMOS $M_3$; the output is the drain of $M_2$/$M_3$.
- $M_2$ current (output → $X$): $i_2 = -g_{m2}v_X + (v_{out} - v_X)/r_{O2}$; $M_3$ current ($V_{DD}$ → output): $i_3 = -g_{m3}v_X - v_{out}/r_{O3}$.
- KCL: $i_3 = i_2$ (output) and $i_2 = g_{m1}v_{in} + v_X/r_{O1}$ (node $X$); solving gives the result. The PMOS driven from $X$ partly cancels the cascode's current ($g_{m2} - g_{m3}$ term).

## Grading notes

+2: the exact expression or an equivalent form, or the large-$g_mr_O$ approximation clearly labelled. +1: correct node equations with one algebra slip. 0: correct node equations with an unfinished or wrongly simplified solution. -2 (asserted as fact): $M_3$ treated as an ordinary current source (gate at ac ground), giving the plain cascode-with-$r_{O3}$ result; gate of $M_3$ read as connected to the output or to $V_{DD}$, output read at $X$, or positive gain asserted for $g_{m2} > g_{m3}$.
