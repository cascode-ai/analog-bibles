# Golden Solution - R099

## Reference answer

Inverting, with the PMOS $M_3$ as the input device and the cascoded current source $M_2$–$M_1$ as the load: $V_{out}$ near $V_{DD}$ at low $V_{in}$, a sharp high-gain drop where $M_3$'s current equals $I_1 = \tfrac12\beta_1(V_{b2} - 0.7)^2$, then a decline to 0 V at $V_{in} = V_{DD} - |V_{THP}| = 2.2$ V, and 0 V beyond.

- Small $V_{in}$: $M_3$ (large $V_{SG}$) could supply more than $I_1$, so it is in triode and $V_{out}$ is just below $V_{DD}$; $M_2$, $M_1$ saturated, current $I_1$.
- $M_3$ saturates when $V_{out} < V_{in} + 0.8$ V; at $V_{in}^* = 2.2 - \sqrt{2I_1/\beta_3}$ its saturation current equals $I_1$: all saturated, gain ≈ $g_{m3}[r_{O3} \| (g_{m2}r_{O2}r_{O1})]$, very large, and $V_{out}$ drops steeply from ≈ $V_{in}^* + 0.8$ V to ≈ $V_{b1} - V_{TH2}$ ($M_2$ enters triode).
- Further: node $X$ falls with $V_{out}$, $M_1$ enters triode when $V_X < V_{b2} - 0.7$ V; the current is then set by $M_3$, $\tfrac12\beta_3(2.2 - V_{in})^2 < I_1$, and $V_{out}$ (= drop across $M_2$, $M_1$ in triode) falls toward 0.
- $V_{in} \ge 2.2$ V: $M_3$ off, $V_{out} = 0$ (pulled down by $M_2$, $M_1$ with zero current).
- Transition points: $V_{out} = V_{in} + 0.8$ V ($M_3$ triode/saturation), $V_{in}^*$, $V_{out} = V_{b1} - V_{TH2}$, $V_X = V_{b2} - 0.7$ V, $V_{in} = 2.2$ V.

## Grading notes

+2: $M_3$ recognized as the input device; output high at low $V_{in}$ ($M_3$ triode), a steep high-gain drop around $V_{in}^* \approx V_{DD} - |V_{THP}| - \sqrt{2I_1/\beta_3}$, then $M_2$ and $M_1$ leaving saturation, and $V_{out} = 0$ for $V_{in} \ge 2.2$ V. +1: inverting characteristic with $M_3$ as the input device and the 2.2-V cutoff, but one feature missing: either the steep high-gain drop around $V_{in}^*$ is not identified (e.g., the curve is drawn as a gradual decline although the region boundaries are given), or the device-by-device transitions are incomplete. 0: inverting trend with the cutoff of $M_3$ at 2.2 V missing, or with both the steep drop and the device-by-device transitions missing. -2 (asserted as fact): non-inverting, $M_1$ treated as the input device, or a nonzero output claimed above 2.2 V.
