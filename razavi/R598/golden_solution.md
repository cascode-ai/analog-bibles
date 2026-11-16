# Golden Solution - R598

## Reference answer

Main amplifier alone: $\varepsilon_0 = \dfrac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2} \approx \dfrac{1 + C_1/C_2}{G_mR_{out}}$, i.e., 1/(loop gain).

Complete circuit: $\varepsilon = \varepsilon_0^2$. The auxiliary and error amplifiers reduce the gain error by the factor $1/\varepsilon_0 \approx G_mR_{out}C_2/(C_1 + C_2)$, the loop gain. Example: $C_1/C_2 = 4$, $G_mR_{out} = 1000$ gives $\varepsilon_0$ ≈ 0.5% and ε ≈ 25 ppm.

- Alone: $V_Y = -G_mR_{out}V_M$ and $C_1(V_{in} - V_M) = C_2(V_M - V_Y)$, so $V_Y/V_{in} = -C_1G_mR_{out}/(C_1 + C_2 + G_mR_{out}C_2) = -(C_1/C_2)(1 - \varepsilon_0)$.
- With the correction: $V_X = \varepsilon_0V_{in}C_1/(C_1 + C_2)$ is exactly the main amplifier's uncorrected input error. The injected current $-G_mV_X$ supplies the output change that error would have produced, leaving only a second-order residue.

## Grading notes

+2: $\varepsilon_0$ correct, and the complete circuit's error identified as $\varepsilon_0^2$, with an improvement factor of ≈ the loop gain. +1: $\varepsilon_0$ correct, with only a qualitative comparison (much smaller error with the correction) and no square law. 0: only $\varepsilon_0$, with no comparison. -2 (asserted as fact): $\varepsilon_0 = 1/(G_mR_{out})$ without the feedback factor, or a claim that the auxiliary and error amplifiers make no difference or increase the error.
