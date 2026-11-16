# Golden Solution - R591

## Reference answer

τ ≈ 0.45 ns (0.453 ns). If $1/R_0$ is neglected (large-loop-gain approximation, τ ≈ $C_1/G_m$), the result is 0.55 ns.

- Half circuit in amplification: the gate node has $C_1$ (2 pF) to ac ground (its left plate is at $V_{CM}$) and $C_3$ (0.5 pF) to the output. The output node has $G_m = g_{m1} = 3.66$ mS and $R_0 = r_{O1} \parallel r_{O3} = 6.67$ kΩ, and no other capacitance.
- Single pole: $\tau = \dfrac{C_1C_3/(C_1 + C_3)}{1/R_0 + G_mC_3/(C_1 + C_3)} = \dfrac{0.4\ \mathrm{pF}}{0.15\ \mathrm{mS} + 0.732\ \mathrm{mS}} = 0.453$ ns.
- For $G_mR_0 \gg (C_1 + C_3)/C_3$ this reduces to $C_1/G_m$ = 0.546 ns. Here $G_mR_0$ = 24.4 against 5, so the $R_0$ term changes τ by ≈ 20%.

## Grading notes

+2: 0.43–0.48 ns from the first-order expression that includes $R_0$. +1: ≈ 0.55 ns from τ ≈ $C_1/G_m$ (the large-loop-gain approximation, ignoring the finite $G_mR_0$ = 24). 0: the right expression with an arithmetic slip. -2 (asserted as fact): τ = $R_0C_3$, $R_0(C_1 + C_3)$, $C_3/G_m$ (≈ 0.14 ns), or another wrong topology (e.g., $C_1$ placed at the output).
