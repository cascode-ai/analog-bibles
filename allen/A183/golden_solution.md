# Golden Solution - A183

## Reference answer

$p_1 = \dfrac{-1}{R_1[C_1 + (1+g_{m1}R_3)C_2]} = \dfrac{-1}{R_1(C_1 + A C_2)} \cong \dfrac{-1}{g_{m1}R_1R_3C_2}$, with $A = 1 + g_{m1}R_3 \approx g_{m1}R_3$ the magnitude of the gain from $V_1$ to $V_{out}$ plus one.

- Because $C_2$'s reactance exceeds $R_3$ at the frequencies of interest, $C_2$ hardly loads the output node, so the gain from $V_1$ to $V_{out}$ is $K = -g_{m1}R_3$.
- Miller simplification: $C_2$ between $V_1$ and $V_{out}$ is replaced by $C_2(1-K) = C_2(1+g_{m1}R_3)$ from $V_1$ to ground and $C_2(1-1/K) \approx C_2$ from $V_{out}$ to ground.
- The input node then has resistance $R_1$ and capacitance $C_1 + C_2(1+g_{m1}R_3)$, giving the pole above.
- Comparison: the Miller result $R_1(C_1+C_2) + g_{m1}R_1R_3C_2$ reproduces the nodal expression except for the term $R_3(C_2+C_3)$ (the output-node time constant), which the Miller approximation drops; that term is negligible when $g_{m1}R_1 \gg 1$ and $R_1$ is comparable to or larger than $R_3$ (here $R_s \sim r_{ds}$). Both reduce to $-1/(g_{m1}R_1R_3C_2)$: the Miller-multiplied $C_2$ across the high source resistance creates the dominant pole.

## Grading notes

+2: Miller capacitance $C_2(1+g_{m1}R_3)$ at the input, $p_1 = -1/\{R_1[C_1 + C_2(1+g_{m1}R_3)]\} \approx -1/(g_{m1}R_1R_3C_2)$, and the comparison noting that only the $R_3(C_2+C_3)$ term is missing and that both agree when the Miller term dominates. +1: correct pole but the comparison missing or vague. 0: Miller idea stated with a wrong multiplication factor but otherwise sound. −2 (asserted as fact): Miller capacitance $C_2/(1+g_{m1}R_3)$ or $C_2(1-g_{m1}R_3)$, the pole placed at the output node, or the claim that the Miller result differs from the nodal one in its dominant term.
