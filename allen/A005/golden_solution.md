# Golden Solution - A005

## Reference answer

$\dfrac{v_{out}}{v_{in}} = \dfrac{R_3R_4(1 - g_mR_2)}{R_1R_2 + R_1R_3 + R_1R_4 + R_2R_3 + R_3R_4 + g_mR_1R_3R_4}$.

Derivation: convert $g_mv_1 \parallel R_4$ to its Thevenin form ($R_4$ in series with a source that makes the open-circuit output $-g_mR_4v_1$). Mesh currents: $i_a$ clockwise through $v_{in}$, $R_1$, $R_3$; $i_b$ clockwise through $R_3$, $R_2$ and the $R_4$ branch. Then $v_1 = R_3(i_a - i_b)$ and $v_{out} = R_4(i_b - g_mv_1)$.
- Mesh a: $v_{in} = (R_1 + R_3)i_a - R_3i_b$.
- Mesh b: $0 = -R_3i_a + (R_2 + R_3 + R_4)i_b - g_mR_4v_1 \Rightarrow 0 = -R_3(1 + g_mR_4)i_a + (R_2 + R_3 + R_4 + g_mR_3R_4)i_b$.
- Solving: $\Delta = R_1R_2 + R_1R_3 + R_1R_4 + R_2R_3 + R_3R_4 + g_mR_1R_3R_4$, $i_a = (R_2 + R_3 + R_4 + g_mR_3R_4)v_{in}/\Delta$, $i_b = R_3(1 + g_mR_4)v_{in}/\Delta$.
- $v_{out} = R_4[i_b - g_mR_3(i_a - i_b)] = R_4[(1 + g_mR_3)i_b - g_mR_3i_a]$, which simplifies to $R_3R_4(1 - g_mR_2)v_{in}/\Delta$.
(Equivalently $G_1(G_2 - g_m)/(G_1G_2 + G_1G_4 + G_2G_3 + G_2G_4 + G_3G_4 + g_mG_2)$.)

## Grading notes

+2: the expression above in any equivalent form, obtained by mesh analysis (source transformation of $g_mv_1 \parallel R_4$, or a supermesh/constraint equation for the current source, are both fine). A correct result by another method with no mesh analysis: +1. +1 also: correct result with a minor flaw that does not change it. 0: correct mesh equations with an algebra slip in the final expression. −2 (asserted as fact): numerator $(1 + g_mR_2)$ or other sign error from misreading the dependent source, the voltage across the current source taken as zero in the mesh equations, wrong element placement, or the feedforward "1" dropped while claiming the result is exact.
