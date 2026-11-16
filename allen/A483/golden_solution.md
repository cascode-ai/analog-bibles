# Golden Solution - A483

## Reference answer

$v_{C1} = v_{C2} = \frac{5}{8}V_{REF} = 0.625V_{REF}$.

Step by step ($v_{C1}$, $v_{C2}$ in units of $V_{REF}$; with $C_1 = C_2$, $S_1$ sets both to the average):
- $S_4$: $v_{C2} = 0$. $S_3$: $v_{C1} = 0$. $S_1$: 0, 0.
- $S_2$: $v_{C1} = 1$. $S_1$: 0.5, 0.5.
- $S_3$: $v_{C1} = 0$. $S_1$: 0.25, 0.25.
- $S_2$: $v_{C1} = 1$. $S_1$: $(1 + 0.25)/2 = 0.625$.
This is the conversion, LSB first, of the bits 0, 1, 0, 1, i.e. the word 1010 → 10/16 $V_{REF}$.

## Grading notes

+2: $0.625V_{REF}$ (5/8) with a correct step sequence. +1: correct sequence with a final arithmetic slip, or the correct value without showing steps. 0: correct averaging rule but one step mishandled (e.g. treating $S_3$ as discharging $C_2$). −2 (asserted as fact): $0.634V_{REF}$ (the value for $C_1 = 1.05C_2$), or charge sharing treated as addition of voltages.
