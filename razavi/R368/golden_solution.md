# Golden Solution - R368

## Reference answer

$\overline{V_{n,in}^2} \approx 4.63\times10^{-18}\ \mathrm{V^2/Hz}$ (≈ 2.15 nV/√Hz); $\overline{I_{n,in}^2} \approx 6.2\times10^{-23}\ \mathrm{A^2/Hz}$ (≈ 7.9 pA/√Hz).

- $g_{m1} = g_{m2} = \sqrt{2(134\ \mu)(100)(0.5\ \mathrm{m})} = 3.66$ mS; $g_{m3} = \sqrt{2(38.4\ \mu)(100)(0.5\ \mathrm{m})} = 1.96$ mS.
- Voltage (input shorted): $M_1$ and $M_3$ noise currents reach the output; $M_2$'s goes into the shorted input. $\overline{V_{n,in}^2} = 4kT\gamma\dfrac{g_{m1} + g_{m3}}{g_{m1}^2} = 1.104\times10^{-20}(273.2 + 146.2)$.
- Current (input open): $M_2$'s noise current flows through $M_1$ to the output; $M_3$'s noise refers to the input almost one-to-one (for $g_mr_O \gg 1$); $M_1$'s noise is negligible. $\overline{I_{n,in}^2} = 4kT\gamma(g_{m2} + g_{m3}) = 1.104\times10^{-20}\times5.62\times10^{-3}$.
- (With body effect the voltage is divided by $(g_{m1}+g_{mb1})^2$, slightly lower.)

## Grading notes

+2: both values within ±5%, with the correct sets of contributors ($M_1$, $M_3$ for the voltage; $M_2$, $M_3$ for the current). +1: one value with a small numerical slip, or body effect included with a stated bias assumption, or both expressions with the correct contributors but $M_2$'s term left as the symbol $\overline{I_{n2}^2}$ (not evaluated as $4kT\gamma g_{m2}$) in the final current value. 0: one quantity right and the other wrong. An error confined to one quantity caps the score here, e.g. $M_2$'s noise put in the voltage with the current right, or $M_1$'s noise made a significant part of the current with the voltage right. -2 (asserted as fact): both quantities wrong, e.g. $M_2$ in the voltage together with $M_1$ in the current, PMOS mobility used for the NMOS devices (or vice versa), or the bypassed mirror diodes' noise counted, so that both values are off.
