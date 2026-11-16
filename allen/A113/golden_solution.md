# Golden Solution - A113

## Reference answer

$v_{OUT}(\max) = 4.3$ V and $v_{OUT}(\min) \approx 0.183$ V.

- $v_{OUT}(\max) = 5 - 0.7 = 4.3$ V.
- $\beta_1 = 110 \times 5 = 550\ \mu\mathrm{A/V^2}$, $\beta_2 = 50 \times 1 = 50\ \mu\mathrm{A/V^2}$, $\beta_2/\beta_1 = 0.0909$, $\sqrt{1.0909} = 1.0445$.
- $v_{OUT}(\min) = 4.3 - 4.3/1.0445 = 4.3 - 4.117 = 0.183$ V.

## Grading notes

+2: both values, 4.3 V and 0.18 V (0.178–0.188 V). +1: one value right and the other off by an arithmetic slip. 0: only $v_{OUT}(\max)$ right, or $v_{OUT}(\min)$ right with $v_{OUT}(\max)$ missing. −2 (asserted as fact): the β ratio inverted ($\beta_1/\beta_2$ under the root, giving ≈ 3.06 V), β taken without $K'$ (W/L ratio only, giving ≈ 0.38 V), or $v_{OUT}(\max) = 5$ V.
