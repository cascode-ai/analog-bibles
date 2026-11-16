# Golden Solution - R121

## Reference answer

$A_v = -\dfrac{g_{m1}r_{O1}(r_{O2} + r_{O3})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}}$; for $g_mr_O \gg 1$, $A_v \approx -\dfrac{g_{m1}(r_{O2} + r_{O3})}{g_{m2}r_{O2} + g_{m3}r_{O3}}$ (of order $g_{m1}/g_m$, i.e. a low gain).

- The output is node $X$ (drain of $M_1$, source of $M_2$, gate of $M_3$); node $D$ joins the drains of $M_2$ and $M_3$.
- $M_2$ current ($D$ → $X$): $i_2 = -g_{m2}v_X + (v_D - v_X)/r_{O2}$; $M_3$ current ($V_{DD}$ → $D$): $i_3 = -g_{m3}v_X - v_D/r_{O3}$.
- KCL: $i_3 = i_2$ at $D$, $i_2 = g_{m1}v_{in} + v_X/r_{O1}$ at $X$; eliminating $v_D$ gives the result. The loop $X \to M_3 \to D \to M_2 \to X$ makes $X$ a low-impedance node.

## Grading notes

+2: the exact expression or an equivalent form, or the large-$g_mr_O$ approximation clearly labelled. +1: correct node equations with one algebra slip. 0: correct node equations with an unfinished or wrongly simplified solution. -2 (asserted as fact): $M_3$ treated as an ideal current source (gate at ac ground); output read at the drain of $M_2$, gate of $M_3$ read as connected elsewhere, or a high gain of order $g_mr_O$ asserted.
