# Golden Solution - A144

## Reference answer

$v_{o2}/v_{id} = +\dfrac{g_{m2}}{2g_{m4}} = \dfrac{1}{2}\sqrt{\dfrac{K'_N(W/L)_1}{K'_P(W/L)_3}} = 0.742\sqrt{(W/L)_1/(W/L)_3}$, i.e. ≈ 0.74 V/V for equal W/L ($v_{o1}/v_{id} = -0.74$).

- Each input transistor gets $\pm v_{id}/2$ (the source node is an ac ground for differential signals). Its drain current $g_{m}v_{id}/2$ flows into the diode load $1/g_{m3}$ (‖ $r_{ds}$), so $v_{o1} = -g_{m1}v_{id}/(2g_{m3})$ and $v_{o2} = +g_{m2}v_{id}/(2g_{m4})$.
- $g_m \propto \sqrt{K'(W/L)I}$ and both devices carry $I_{SS}/2$, so the ratio is independent of $I_{SS}$: $0.5\sqrt{110/50} = 0.742$.
- Including $g_{ds2} + g_{ds4}$ for W/L = 1 (25 µA: $g_{m2} = 74.2\ \mu$S, $g_{m4} = 50\ \mu$S, $g_{ds2} + g_{ds4} = 2.25\ \mu$S) gives $74.2/[2(52.25)] = 0.71$.

## Grading notes

+2: magnitude ≈ 0.74 for equal W/L (0.70–0.75 accepted when $g_{ds}$ is included) with the expression $\tfrac12\sqrt{K'_N(W/L)_1/(K'_P(W/L)_3)}$; either output, with consistent sign. +1: right expression with a numerical slip, or the right value without the general expression. 0: the factor 1/2 missing (1.48), with the rest right. −2 (asserted as fact): load resistance taken as $r_{ds}$ (gain in the tens), the inverse ratio $\sqrt{K'_P/K'_N}$, or a gain claimed to depend strongly on $I_{SS}$.
