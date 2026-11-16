# Golden Solution - R433

## Reference answer

$\overline{V^2_{n,in}} \approx 8kT\cdot\tfrac23\left(\dfrac{1}{g_{m1}} + \dfrac{g_{m7}}{g_{m1}^2}\right) \approx 6.5\times10^{-18}\ \mathrm{V^2/Hz}$, i.e. ≈ 2.56 nV/√Hz.

- Contributors: input pair $M_1$, $M_2$ and the PMOS current-source devices $M_7$, $M_8$; the cascodes $M_3$–$M_6$ are negligible at low frequency.
- $g_{m1} = \sqrt{2(134\ \mu)(200)(0.5\ \mathrm{m})} = 5.18$ mS → $1/g_{m1} = 193\ \Omega$; $g_{m7} = \sqrt{2(38.4\ \mu)(200)(0.5\ \mathrm{m})} = 2.77$ mS → $g_{m7}/g_{m1}^2 = 103\ \Omega$.
- $2.21\times10^{-20} \times 296\ \Omega = 6.5\times10^{-18}\ \mathrm{V^2/Hz}$ → 2.56 nV/√Hz.

## Grading notes

+2: expression $8kT\gamma(1/g_{m1} + g_{m7}/g_{m1}^2)$ with cascodes neglected and a value of 2.4–2.7 nV/√Hz (5.8–7.3 × 10⁻¹⁸ V²/Hz). 0: right expression with a numerical slip in the final value (e.g., W/L taken as 100 instead of 200, giving ≈ 3.0 nV/√Hz), a factor-of-2 error, or one pair of contributors missing. -2 (asserted as fact): cascode devices $M_5$/$M_6$ or $M_3$/$M_4$ claimed to be dominant contributors, the PMOS term weighted by $1/g_{m7}$, or an order-of-magnitude error.
