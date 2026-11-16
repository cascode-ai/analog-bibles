# Golden Solution - R352

## Reference answer

$$\overline{V_{n,in}^2}\Big|_{1/f} = \frac{1}{C_{ox}f}\left[\frac{K_N}{(WL)_1} + \frac{g_{m3}^2}{g_{m1}^2}K_P\left(\frac{1}{(WL)_3} + \frac{1}{(WL)_4}\right)\right]$$
$$\overline{I_{n,in}^2}\Big|_{1/f} = \frac{1}{C_{ox}f}\left[g_{m2}^2K_N\left(\frac{1}{(WL)_2} + \frac{1}{(WL)_0}\right) + g_{m3}^2K_P\left(\frac{1}{(WL)_3} + \frac{1}{(WL)_4}\right)\right]$$

- Without the capacitors, the diode-connected devices pass their noise to the mirror gates: $M_4$ carries the fixed current $I_2$, so its gate-referred noise $V_{n4}$ appears unchanged at the gate of $M_3$; $M_3$'s current noise becomes $g_{m3}(V_{n3} + V_{n4})$. Likewise $M_2$'s becomes $g_{m2}(V_{n2} + V_{n0})$.
- Voltage (input shorted, output short-circuit currents): $M_1$ gives $g_{m1}V_{n1}$, $M_3$/$M_4$ give $g_{m3}(V_{n3} + V_{n4})$; $M_2$'s noise goes into the input source. Transconductance $g_{m1}$.
- Current (input open): with λ = 0 $M_1$ carries exactly $M_2$'s current, so $M_2$/$M_0$ noise $g_{m2}(V_{n2}+V_{n0})$ flows to the output; $M_3$/$M_4$ noise adds at the output; $M_1$'s own noise has no effect. Current gain 1.
- (If $g_{mb1}$ is kept, the voltage result is divided by $(g_{m1}+g_{mb1})^2$ instead of $g_{m1}^2$.)
- Compared with the capacitor-bypassed case, the diode devices double the mirror contributions for equal sizes; the input-referred current now contains $M_0$'s noise.

## Grading notes

+2: both expressions equivalent to the reference, with the $M_4$ noise added to $M_3$'s and the $M_0$ noise added to $M_2$'s. +1: one mirror's contribution missing from one of the two results (e.g., $M_0$ omitted from the current, or the $M_3$/$M_4$ load noise omitted from the current) with everything else right, or $(g_{m1}+g_{mb1})$ used consistently. 0: the capacitor-bypassed result ($M_0$ and $M_4$ ignored) given with otherwise correct analysis; or one quantity fully right and the other wrong. An error confined to one quantity caps the score here, e.g. $M_2$'s noise put in the voltage with the current right, or $M_1$'s noise put in the current with the voltage right. -2 (asserted as fact): both quantities wrong (e.g., $M_2$'s noise in the voltage and $M_1$'s noise in the current), the diode-device noise attenuated by a large factor, or flicker noise treated as white.
