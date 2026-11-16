# Golden Solution - R592

## Reference answer

τ ≈ 0.47 ns, about 4% longer than the 0.453 ns obtained without $C_{GS}$.

- $C_{GS} = \tfrac23WLC_{ox} + WC_{ov} = \tfrac23(50)(0.5)(3.84\ \mathrm{fF}) + 50(0.4\ \mathrm{fF}) = 64 + 20 = 84$ fF (64 fF without the overlap).
- For differential signals the common source node is an ac ground, so $C_{GS}$ adds to $C_1$ at each gate: the feedback factor becomes $C_3/(C_1 + C_{GS} + C_3) = 0.1935$.
- $\tau = \dfrac{C_3(C_1 + C_{GS})/(C_1 + C_{GS} + C_3)}{1/R_0 + G_mC_3/(C_1 + C_{GS} + C_3)} = \dfrac{0.403\ \mathrm{pF}}{0.15\ \mathrm{mS} + 0.708\ \mathrm{mS}} = 0.470$ ns (0.466 ns without the overlap term), with $G_m$ = 3.66 mS and $R_0$ = 6.67 kΩ.
- The large-loop-gain approximation $(C_1 + C_{GS})/G_m$ gives 0.569 ns (vs 0.546 ns without $C_{GS}$).

## Grading notes

+2: $C_{GS}$ ≈ 64–84 fF placed from gate to the ac-grounded source node (in parallel with $C_1$), τ ≈ 0.46–0.48 ns, and a small (few %) increase over the case without $C_{GS}$. +1: ≈ 0.56–0.57 ns from $(C_1 + C_{GS})/G_m$, or a correct τ with $C_{GS}$ computed with a minor error (e.g., overlap counted twice). 0: $C_{GS}$ right with a slip in τ. -2 (asserted as fact): $C_{GS}$ placed from gate to output (Miller) or across $C_3$, a claim that τ decreases, or $C_{GS}$ off by an order of magnitude.
