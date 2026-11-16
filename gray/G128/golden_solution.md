# Golden Solution - G128

## Reference answer

$HD_2 \approx 0.0041$ (0.41%) and $HD_3 \approx -1.9\times10^{-4}$ (−0.019%), in close agreement (within about 3–5%) with the power-series values 0.0040 and $-1.8\times10^{-4}$.
- Transfer characteristic with $V_{ov1} = 0.1$ V: $V_i = V_o + 0.8 + 0.5\left(\sqrt{V_o + 3.1} - \sqrt{0.6}\right)$; slope $1/\left(1 + 0.25/\sqrt{V_o + 3.1}\right)$.
- $V_i = +0.5$ V: $V_o = -0.689$ V, $A_v^+ = 0.8613$. $V_i = 0$: $V_o = -1.117$ V, $A_{vQ} = 0.8492$. $V_i = -0.5$ V: $V_o = -1.538$ V, $A_v^- = 0.8333$.
- $E^+ = +0.01423$, $E^- = -0.01874$; $E^+ - E^- = 0.0330$ → $HD_2 = 0.00412$; $E^+ + E^- = -0.00451$ → $HD_3 = -1.88\times10^{-4}$.
- The small differences come from the higher-order terms that the exact slopes at the extremes include but the cubic series omits; second-harmonic distortion dominates, as expected for distortion caused by the body effect.

## Grading notes

+2: $HD_2$ in 0.0039–0.0043 and $HD_3$ magnitude in $(1.6$–$2.1)\times10^{-4}$ with the negative sign under the stated definition (magnitude only accepted if the sign convention is explained), plus the comparison (close agreement). +1: both values right but the comparison missing, or one value slightly outside the range due to rounding of the slopes. 0: correct slopes but distortion relations misapplied in one of the two. −2 (asserted as fact): slopes computed without the body effect (giving zero distortion), $HD_2$ off by a factor of 2 or more, or a claim that the two methods disagree substantially.
