# Golden Solution - A185

## Reference answer

$\dfrac{v_{out}}{v_{in}} = \dfrac{-g_{m1}(g_{m2}+g_{mbs2}+g_{ds2})(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})}{g_{ds1}g_{ds2}(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4}) + g_{ds3}g_{ds4}(g_{m2}+g_{mbs2}+g_{ds1}+g_{ds2})}$

$\approx \dfrac{-g_{m1}}{\dfrac{g_{ds1}g_{ds2}}{g_{m2}+g_{mbs2}} + \dfrac{g_{ds3}g_{ds4}}{g_{m3}+g_{mbs3}}} \approx -g_{m1}\{[g_{m2}r_{ds1}r_{ds2}]\|[g_{m3}r_{ds3}r_{ds4}]\}$ when $g_m \gg g_{ds}$ and the body effect is neglected.

Nodal equations (node $v_1$ = drain of M1/source of M2, node $v_4$ = drain of M4/source of M3; currents leaving each node):
- $v_1$: $(g_{ds1}+g_{ds2}+g_{m2}+g_{mbs2})v_1 - g_{ds2}v_{out} = -g_{m1}v_{in}$
- $v_{out}$: $-(g_{m2}+g_{mbs2}+g_{ds2})v_1 + (g_{ds2}+g_{ds3})v_{out} - (g_{m3}+g_{mbs3}+g_{ds3})v_4 = 0$
- $v_4$: $-g_{ds3}v_{out} + (g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})v_4 = 0$

Eliminating $v_1$ and $v_4$ gives the exact ratio above. Dividing numerator and denominator by $(g_{m2}+g_{mbs2}+g_{ds2})(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})$ and dropping $g_{ds}$ against $g_m$ yields $A_v \approx -g_{m1}/(1/R_A + 1/R_B)$ with $R_A = (g_{m2}+g_{mbs2})r_{ds1}r_{ds2}$ and $R_B = (g_{m3}+g_{mbs3})r_{ds3}r_{ds4}$, i.e. $-g_{m1}R_{out}$ with the two cascode output resistances in parallel, which is the given expression (with $g_{mbs}$ neglected). The body effect slightly raises both cascode resistances.

## Grading notes

+2: correct nodal equations and an exact result equivalent to the reference (any algebraically equal form), reduced to $-g_{m1}/(g_{ds1}g_{ds2}/g_{m2} + g_{ds3}g_{ds4}/g_{m3})$ and identified with the given expression. +1: exact result correct but the reduction incomplete, or the body-effect terms dropped from the start (stated) with everything else right. 0: correct equations with an algebra error in the solution while the approximate form is still recognized. −2 (asserted as fact): sign errors in the dependent sources leading to a positive gain or to $(g_m - g_{mbs})$ terms, the cascode transconductance of the p-channel side taken from M4, or a final gain of order $g_mr_{ds}$ instead of $(g_mr_{ds})^2$.
