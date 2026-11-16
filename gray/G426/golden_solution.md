# Golden Solution - G426

## Reference answer

$R_{dm0} \approx 484$.

- Break the loop at the op-amp output (DM half-circuit, sources set to zero). The output voltage feeds back to the op-amp input through the capacitive divider $C_2$ versus $C_1 + C_{ia}$: $v_{in}/v_{out} = C_2/(C_2 + C_1 + C_{ia})$.
- $R_{dm0} = g_{m1}R_{odh}\cdot\dfrac{C_2}{C_2 + C_1 + C_{ia}} = 1280 \times \dfrac{4}{4 + 4 + 2.58} = 1280 \times 0.378 \approx 484$.

## Grading notes

+2: ≈ 484 (±3%), i.e. $a_{dm0}$ times the feedback factor $C_2/(C_1 + C_2 + C_{ia})$. +1: correct method with a small slip. 0: feedback factor taken as $C_2/(C_1 + C_2)$ = 0.5 (ignoring $C_{ia}$), giving 640. −2 (asserted as fact): return ratio equal to $a_{dm0}$ (1280), feedback factor $C_1/C_2$ = 1, or a result involving $C_L$ at dc.
