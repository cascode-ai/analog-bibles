# Golden Solution - A484

## Reference answer

$v_{C1} = v_{C2} \approx 0.634V_{REF}$ (0.6341).

Each $S_1$ closure gives $v = \frac{C_1v_{C1} + C_2v_{C2}}{C_1 + C_2} = \frac{1.05v_{C1} + v_{C2}}{2.05}$:
- $S_4$, $S_3$, $S_1$: 0, 0.
- $S_2$: $v_{C1} = 1$; $S_1$: $1.05/2.05 = 0.5122$.
- $S_3$: $v_{C1} = 0$; $S_1$: $0.5122/2.05 = 0.2499$.
- $S_2$: $v_{C1} = 1$; $S_1$: $(1.05 + 0.2499)/2.05 = 0.6341$.
(Ideal value $0.625V_{REF}$; the mismatch adds about +0.009$V_{REF}$, ≈ 0.15 LSB of a 4-bit converter.)

## Grading notes

+2: $0.634V_{REF}$ (±0.001) with the weighted-average rule. +1: correct rule with a small arithmetic slip (within ±0.005). 0: correct rule but a step mishandled. −2 (asserted as fact): 0.625 (mismatch ignored), the weighting inverted ($v = (v_{C1} + 1.05v_{C2})/2.05$, giving ≈ 0.616), or voltages added instead of averaged.
