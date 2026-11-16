# Golden Solution - R361

## Reference answer

About 2.15 nV/√Hz ($\overline{V_{n,in}^2} \approx 4.63\times10^{-18}\ \mathrm{V^2/Hz}$).

- $g_{m1} = \sqrt{2(134\ \mu)(100)(0.5\ \mathrm{m})} = 3.66$ mS; $g_{m2} = \sqrt{2(38.4\ \mu)(100)(0.5\ \mathrm{m})} = 1.96$ mS.
- $\overline{V_{n,in}^2} = 4kT\gamma\left(\dfrac{1}{g_{m1}} + \dfrac{g_{m2}}{g_{m1}^2}\right) = 1.104\times10^{-20}\,(273.2 + 146.3) = 4.63\times10^{-18}\ \mathrm{V^2/Hz}$.
- $M_2$ adds about 54% to $M_1$'s noise power; $r_{O1}\|r_{O2}$ cancels when referring to the input. (γ = 1 gives 2.64 nV/√Hz.)

## Grading notes

+2: ≈ 2.15 nV/√Hz or 4.63×10⁻¹⁸ V²/Hz (±5%), with both transistor terms. +1: correct expression with a small numerical slip (< 15%). 0: only $M_1$'s term (≈ 1.74 nV/√Hz) with the method otherwise right. -2 (asserted as fact): $M_2$'s noise referred as $4kT\gamma/g_{m2}$, $\mu_nC_{ox}$ used for $M_2$, or a result off by more than ~20% from a formula error.
