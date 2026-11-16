# Golden Solution - A009

## Reference answer

$\dfrac{v_{out}}{v_{in}} = -\dfrac{r_mR_3}{R_1R_2 + R_1R_3 + R_1r_m + R_2R_3}$.

- Let $v_1$ be the voltage of the node joining $R_1$, $R_2$ and $R_3$. Since $i_a = v_1/R_2$ and $v_{out} = -r_mi_a$ (ideal source), $K = v_{out}/v_1 = -r_m/R_2$ exactly.
- Miller: the bridging resistor $R_3$ is replaced by $R_3/(1 - K) = R_2R_3/(R_2 + r_m)$ from $v_1$ to ground; the output-side element $R_3K/(K - 1) = r_mR_3/(R_2 + r_m)$ is across the ideal voltage source and has no effect.
- Divider: $R_2 \parallel \dfrac{R_2R_3}{R_2 + r_m} = \dfrac{R_2R_3}{R_2 + R_3 + r_m}$, so $\dfrac{v_1}{v_{in}} = \dfrac{R_2R_3}{R_1(R_2 + R_3 + r_m) + R_2R_3}$.
- $v_{out}/v_{in} = K\,v_1/v_{in} = -r_mR_3/(R_1R_2 + R_1R_3 + R_1r_m + R_2R_3)$. Because $K$ is exact (the output is set by an ideal source), the Miller result is exact; mesh or nodal analysis gives the same expression.

## Grading notes

+2: the expression above (any equivalent form) via the Miller step with $K = -r_m/R_2$ and $R_3$ reflected as $R_3/(1 - K)$. +1: the correct result by direct mesh or nodal analysis without the Miller step, or correct with a minor flaw. 0: correct Miller setup with an algebra slip in the final expression. −2 (asserted as fact): positive gain or $-R_1r_m$ in the denominator (source polarity or $K$ sign misread), $i_a$ taken as the current in $R_1$ or $R_3$, $R_3$ reflected as $R_3(1 - K)$ or $R_3(1+K)$, or the output-side Miller element claimed to change $v_{out}$.
