# Golden Solution - R470

## Reference answer

$\overline{V^2_{n,in}} = \dfrac{8kT\gamma\left[(g_{m1} + g_{m3})(g_{m5}R_1)^2 + g_{m1'} + g_{m5} + g_{m7}\right]}{(g_{m1}g_{m5}R_1 + g_{m1'})^2}$, with $R_1 = r_{O1}\|r_{O3}$.

- Total transconductance from the differential input to the output current of each half: $G_m = g_{m1}g_{m5}R_1 + g_{m1'}$ (both paths in phase).
- Noise currents per half at the output node: $M_5$, $M_7$ and the fast-path device ($M_1'$ or $M_2'$) inject $4kT\gamma(g_{m5} + g_{m7} + g_{m1'})$ directly; $M_1$ and $M_3$ inject $4kT\gamma(g_{m1}+g_{m3})$ at X, which reaches the output multiplied by $(g_{m5}R_1)^2$.
- Two halves → factor 2 (8kT); the tail sources contribute only common-mode noise.
- When $g_{m1}g_{m5}R_1 \gg g_{m1'}$ this reduces to ≈ $8kT\gamma[(g_{m1}+g_{m3})/g_{m1}^2]$ plus small output-stage terms divided by $(g_{m1}g_{m5}R_1)^2$.

## Grading notes

+2: the full expression (or an equivalent form) with all contributors ($M_1$, $M_3$ through the slow path; $M_5$, $M_7$, $M_1'$ at the output) referred through $G_m = g_{m1}g_{m5}R_1 + g_{m1'}$, factor 2 for the two halves. +1: correct structure with one minor contributor omitted (e.g., $M_7$) or the factor 2 missing. 0: only the first-stage terms with $G_m$ taken as $g_{m1}g_{m5}R_1$ and no fast-path consideration. -2 (asserted as fact): the fast-path transconductance subtracted, the tail current sources counted as differential contributors, or noise referred with a wrong gain (e.g., dividing all output noise by $g_{m1'}^2$ only).
