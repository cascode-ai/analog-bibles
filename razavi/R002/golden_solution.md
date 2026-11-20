# Golden Solution - R002

## Reference answer

For saturated devices, use the leading square-law bias current and first-order CLM output conductance:
$$g_m\approx\sqrt{2\mu C_{ox}(W/L)|I_D|},\qquad r_O\approx\frac1{\lambda|I_D|}.$$
With $W/L=100$ and $|I_D|=0.5$ mA:

| Device | $g_m$ | $r_O$ | $g_mr_O$ |
|---|---|---|---|
| NMOS | 3.66 mS | 20 kΩ | 73.2 |
| PMOS | 1.96 mS | 10 kΩ | 19.6 |

The NMOS intrinsic gain is about 3.74 times the PMOS value. The finite-$V_{DS}$ correction cannot be evaluated because $V_{DS}$ is unspecified; these are the usual $\lambda|V_{DS}|\ll1$ estimates.

## Grading notes

+2: all six values are within ±3%: NMOS $g_m\approx3.66$ mS, $r_O\approx20$ kΩ, $g_mr_O\approx73.2$; PMOS $g_m\approx1.96$ mS, $r_O\approx10$ kΩ, $g_mr_O\approx19.6$. Small deviations from consistently including $(1+\lambda|V_{DS}|)$ with an explicitly assumed $|V_{DS}|$ are acceptable; the drain voltage is not specified in the question.

+1: one quantity wrong through an arithmetic slip, with the others correct.

0: one device fully correct and the other wrong, or the right method with slips in several values.

-2 (asserted as fact): wrong formulas such as $r_O=\lambda/I_D$ or $g_m=\mu C_{ox}(W/L)I_D$, swapped $\lambda$ values, or intrinsic gains wrong by an order of magnitude.
