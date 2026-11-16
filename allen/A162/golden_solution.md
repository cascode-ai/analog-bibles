# Golden Solution - A162

## Reference answer

$\dfrac{v_{out}}{v_{in}} = -\dfrac{g_{m1}}{g_{ds1} + g_{ds3}} = -\sqrt{\dfrac{2K'_N(W/L)_1}{I_{BIAS}(\lambda_1 + \lambda_3)^2}}$ and $R_{out} = \dfrac{2}{g_{ds1} + g_{ds3}} = \dfrac{2}{I_{BIAS}(\lambda_1 + \lambda_3)}$.

- For a differential input the common source node is an ac ground. $v_3 = -g_{m1}(v_{in}/2)(r_{ds1}\,\|\,r_{ds3})$ and $v_4 = +g_{m2}(v_{in}/2)(r_{ds2}\,\|\,r_{ds4})$, so $v_3 - v_4 = -g_{m1}v_{in}/(g_{ds1} + g_{ds3})$.
- Between the outputs the two half-circuit resistances are in series: $R_{out} = 2/(g_{ds1} + g_{ds3})$.
- $g_{m1} = \sqrt{2K'_N(W/L)_1I_{BIAS}}$ and $g_{ds} = \lambda I_{BIAS}$ give the expressions; the gain falls as $1/\sqrt{I_{BIAS}}$. The same differential gain as a mirror-load stage, but twice its single-ended value.

## Grading notes

Credit is split between the gain and $R_{out}$. +2: both expressions (any equivalent form; the sign may be positive if $v_{out}$ or $v_{in}$ is defined the other way round and this is stated). +1: one expression right and the other with a factor-of-2 slip. 0: only one of the two. −2 (asserted as fact): $R_{out} = 1/(g_{ds1}+g_{ds3})$ or $(r_{ds1}\|r_{ds3})/2$ for the differential resistance, a gain with an extra factor 1/2 claimed for the differential output, or the M5 current used for $g_{m1}$.
