# Golden Solution - A011

## Reference answer

Both methods give the same result:

$R_{out} = \dfrac{v_o}{i_o} = \dfrac{R_4(R_1R_2 + R_1R_3 + R_2R_3)}{R_1R_2 + R_1R_3 + R_1R_4 + R_2R_3 + R_3R_4 + g_mR_1R_3R_4} = R_4 \,\Big\|\, \dfrac{R_2 + R_1\parallel R_3}{1 + g_m(R_1\parallel R_3)}$.

Miller: with $v_{in} = 0$, node $v_1$ sees $R_1 \parallel R_3 \equiv R_{13}$ to ground and is driven only through the bridging $R_2$ from the output, so $v_1 = v_oR_{13}/(R_2 + R_{13})$ and $K = v_o/v_1 = 1 + R_2/R_{13}$. Reflected to the output: $R_2K/(K - 1) = R_2 + R_{13}$. The controlled source draws $g_mv_1 = g_mv_oR_{13}/(R_2 + R_{13})$, i.e. a resistance $(R_2 + R_{13})/(g_mR_{13})$. So $R_{out} = R_4 \parallel (R_2 + R_{13}) \parallel \dfrac{R_2 + R_{13}}{g_mR_{13}} = R_4 \parallel \dfrac{R_2 + R_{13}}{1 + g_mR_{13}}$. (The input-side element $R_2/(1 - K) = -R_{13}$ cancels $R_{13}$, consistent with node $v_1$ being fed only through $R_2$.)

Direct: apply $v_o$; $v_1(G_1 + G_2 + G_3) = G_2v_o$; $i_o = G_4v_o + g_mv_1 + G_2(v_o - v_1)$, so $\dfrac{i_o}{v_o} = G_4 + \dfrac{G_2(G_1 + G_3 + g_m)}{G_1 + G_2 + G_3}$, which gives the expression above after multiplying through by $R_1R_2R_3R_4$.

Comparison: identical. The Miller simplification is exact whenever $K$ is the true ratio of the two node voltages under the same excitation; here $K$ follows exactly from the divider, so no approximation is made. For $g_mR_{13} \gg 1$ and large $R_4$, $R_{out} \approx (1 + R_2/R_{13})/g_m$.

## Grading notes

The Miller calculation and the direct calculation with the comparison share the credit. +2: the expression above (any equivalent form) from both methods, a Miller step with $K = 1 + R_2/(R_1\parallel R_3)$ (or its inverse used consistently) that includes both the reflected $R_2$ and the $g_mv_1$ source, and the conclusion that the two agree (exact $K$). +1: both results correct but the comparison missing, or a Miller result based on an explicitly approximate $K$ with a correct exact result and a sensible comparison of the two. 0: only one of the two calculations correct. −2 (asserted as fact): the $g_mv_1$ contribution omitted (giving $R_4 \parallel (R_2 + R_1\parallel R_3)$), $v_{in}$ not set to zero or $R_1$ dropped, a forward-gain $K$ such as $-g_mR_4$ used and the result asserted as the output resistance, or the two methods claimed to give different exact results.
