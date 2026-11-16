# Golden Solution - R098

## Reference answer

An inverting characteristic with a very sharp transition (cascode gain): $V_{out} \approx V_{DD}$ until $M_1$'s current reaches the load current $I_3 = \tfrac12\beta_3(V_{DD} - V_{b2} - 0.8)^2$, then a nearly vertical drop, then a slow decline with $M_2$ and $M_1$ in triode.

- $V_{in} \le 0.7$ V: no current, $V_{out} = V_{DD}$.
- $0.7\ \mathrm{V} < V_{in} < V_{in}^*$: $M_1$ (saturated) sinks less than $I_3$, so $M_3$ is in triode and $V_{out}$ stays just below $V_{DD}$, falling slowly.
- $V_{in} \approx V_{in}^* = 0.7 + \sqrt{2I_3/\beta_1}$: all three devices saturated; gain ≈ $g_{m1}[(g_{m2}r_{O2}r_{O1}) \| r_{O3}]$, very high, so $V_{out}$ drops almost vertically from ≈ $V_{DD} - |V_{ov3}| = V_{b2} + 0.8$ V ($M_3$ edge) down to ≈ $V_{b1} - V_{TH2}$ ($M_2$ edge). With λ = 0 the drop would be exactly vertical.
- Below $V_{out} \approx V_{b1} - V_{TH2}$, $M_2$ is in triode, the gain falls to roughly $g_{m1}(r_{O1}\|r_{O3})$; as $V_{out}$ falls further node $X$ (drain of $M_1$) falls too, and $M_1$ enters triode when $V_X < V_{in} - 0.7$ V; thereafter the gain is small and $V_{out}$ declines slowly toward a low value ($M_1$ and $M_2$ in triode carrying $I_3$) at $V_{in} = 3$ V.
- Transition points: $V_{in} = 0.7$ V; $V_{in}^*$; $V_{out} = V_{b2} + 0.8$ V, $V_{out} = V_{b1} - V_{TH2}$, and $V_X = V_{in} - 0.7$ V.
- This ordering assumes $V_{b1}$ is chosen so that all three devices are saturated at $V_{in}^*$: $V_{b1} \ge V_{TH2} + V_{ov2} + V_{ov1}$ and $V_{b1} - V_{TH2} < V_{b2} + 0.8$ V ($V_{TH2}$ with body effect, $V_{SB2} = V_X$). For a lower $V_{b1}$, $M_1$ is already in triode in the transition region (lower peak gain); for a higher $V_{b1}$, $M_2$ enters triode before $M_3$ saturates.

## Grading notes

+2: inverting; $V_{out} \approx V_{DD}$ until $M_1$'s current matches $I_3$ (at $V_{in}^* \approx V_{TH} + \sqrt{2I_3/\beta_1}$); a very steep (cascode-gain) transition between the $M_3$ edge ($V_{b2} + |V_{THP}|$) and the $M_2$ edge ($V_{b1} - V_{TH2}$); then $M_2$ and later $M_1$ in triode with a slow decline. Stating that the order of devices leaving saturation depends on $V_{b1}$, $V_{b2}$ is correct. +1: correct overall shape and high-gain transition but the order of devices leaving saturation missing, or wrong for the normal bias. 0: inverting curve without the sharp transition or without any transition points; an answer that gives the correct boundary conditions (and especially $V_{in}^* \approx 0.7 + (2.2 - V_{b2})\sqrt{\beta_3/\beta_1}$) but draws the drop gradually scores 0. A region label written in the wrong direction (e.g., "saturation → triode" for $M_3$) with the correct boundary value is a minor slip. -2 (asserted as fact): non-inverting; $M_3$ treated as the input device; or a curve that falls with a moderate constant slope from 0.7 V while also asserting that there is no current-match point or high-gain region.
