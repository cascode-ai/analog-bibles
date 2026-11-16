# Golden Solution - A153

## Reference answer

$R_{out} \approx \dfrac{1}{g_{ds2}g_{ds4}/g_{m4} + g_{ds6}g_{ds8}/g_{m6}} = \dfrac{g_{m4}g_{m6}}{g_{m6}g_{ds2}g_{ds4} + g_{m4}g_{ds6}g_{ds8}}$ and $\dfrac{v_{out}}{v_{in}} \approx \dfrac{(g_{m1}+g_{m2})\,g_{m4}g_{m6}}{2(g_{m6}g_{ds2}g_{ds4} + g_{m4}g_{ds6}g_{ds8})}$ (noninverting; matched input pair and 1:1 mirror, so $(g_{m1}+g_{m2})/2 = g_{m1}$).

- M3 and M4 are n-channel cascode transistors (gates at $V_{BN}$) above the input pair, and M5–M8 form a p-channel cascode current mirror: a telescopic cascode amplifier.
- Looking down: $g_{m4}r_{ds4}r_{ds2}$. Looking up: $g_{m6}r_{ds6}r_{ds8}$. $R_{out}$ is their parallel combination.
- The cascodes pass the signal currents unchanged, so the full $g_{m1}v_{in}$ flows into $R_{out}$ and $A_v = g_{m1}R_{out}$, of order $(g_mr_{ds})^2/2$.

## Grading notes

Credit is split between $R_{out}$ and the gain. +2: $R_{out} = (g_{m4}r_{ds4}r_{ds2})\,\|\,(g_{m6}r_{ds6}r_{ds8})$ in any equivalent form and gain $= g_{m1}R_{out}$. +1: one slip in an index (e.g. $g_{m6}$ where $g_{m4}$ belongs) with the right structure. 0: only one side cascoded, or one of the two right. −2 (asserted as fact): $R_{out} \approx r_{ds2}\,\|\,r_{ds8}$ (cascodes ignored), the gain halved, or M3/M4 read as input or load devices.
