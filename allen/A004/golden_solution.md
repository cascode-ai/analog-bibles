# Golden Solution - A004

## Reference answer

$\dfrac{v_{out}}{v_{in}} = \dfrac{G_1(G_2 - g_m)}{G_1G_2 + G_1G_4 + G_2G_3 + G_2G_4 + G_3G_4 + g_mG_2} = \dfrac{R_3R_4(1 - g_mR_2)}{R_1R_2 + R_1R_3 + R_1R_4 + R_2R_3 + R_3R_4 + g_mR_1R_3R_4}$, with $G_k = 1/R_k$.

Derivation: unknowns $v_1$ (top of $R_3$) and $v_{out}$.
- Node $v_1$: $G_1(v_1 - v_{in}) + G_3v_1 + G_2(v_1 - v_{out}) = 0 \Rightarrow (G_1+G_2+G_3)v_1 - G_2v_{out} = G_1v_{in}$.
- Node $v_{out}$ ($g_mv_1$ flows from this node to ground): $G_2(v_{out} - v_1) + g_mv_1 + G_4v_{out} = 0 \Rightarrow (g_m - G_2)v_1 + (G_2+G_4)v_{out} = 0$.
- Cramer: determinant $\Delta = (G_1+G_2+G_3)(G_2+G_4) + G_2(g_m - G_2) = G_1G_2 + G_1G_4 + G_2G_3 + G_2G_4 + G_3G_4 + g_mG_2$; $v_{out} = G_1(G_2 - g_m)v_{in}/\Delta$.
- Multiplying numerator and denominator by $R_1R_2R_3R_4$ gives the resistance form. The numerator $1 - g_mR_2$ shows the feedforward through $R_2$ (a zero of transmission at $g_m = G_2$).

## Grading notes

+2: the expression above in any equivalent form (conductances or resistances), with the sign structure $(G_2 - g_m)$ in the numerator and the $g_mG_2$ term in the denominator. +1: correct result with a minor flaw that does not change it (e.g. left unsimplified, or a slip in an intermediate line corrected later), or a correct result obtained without nodal equations. 0: correct nodal equations with an algebra slip in the final expression (a missing or extra term). −2 (asserted as fact): the dependent-source direction or the $v_1$ reference misread (numerator $G_2 + g_m$ or $1 + g_mR_2$), $R_3$ or $R_4$ placed in the wrong position, the feedforward term dropped (numerator $-g_mR_2$ only) while the result is presented as exact, or a dimensionally inconsistent expression.
