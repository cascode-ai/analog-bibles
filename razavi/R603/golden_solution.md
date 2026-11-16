# Golden Solution - R603

## Reference answer

As W/L rises at fixed I: the overdrive $V_{ov} = \sqrt{2I/(\mu_nC_{ox}W/L)}$ falls and $g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$ rises, so THD rises as $\sqrt{W/L}$ while the input noise falls (PSD ∝ $(W/L)^{-1/2}$ for the transistor term); power is unchanged.
- THD ≈ HD2 $= \dfrac{V_m}{4V_{ov}} = \dfrac{V_m}{4}\sqrt{\dfrac{\mu_nC_{ox}W/L}{2I}} \propto \sqrt{W/L}$: a square-root curve rising from the origin.
- Input-referred thermal noise PSD: $\overline{V_{n,in}^2} = 4kT\left(\dfrac{2}{3g_m} + \dfrac{1}{g_m^2R_D}\right)$: transistor term ∝ $(W/L)^{-1/2}$, resistor term ∝ $(W/L)^{-1}$; a curve falling with W/L (rms ∝ $(W/L)^{-1/4}$ when the transistor dominates).
- Trade-off: at a given current (power $V_{DD}I$), lower noise via a larger W/L (smaller overdrive) costs linearity, and vice versa; the product $\overline{V_{n,in}^2}\cdot\mathrm{HD2}$ (transistor term) $= kTV_m/(3I)$ is independent of W/L, so improving both requires more current, i.e., more power. (Very large W/L drives the device toward subthreshold, where both curves flatten: HD2 → $V_m/(4\zeta V_T)$, $g_m \to I/(\zeta V_T)$.)

## Grading notes

+2: THD increasing as $\sqrt{W/L}$ (HD2 $= V_m/4V_{ov}$), noise decreasing with W/L (PSD ∝ $(W/L)^{-1/2}$ for the transistor, or a correct statement including the $R_D$ term), and the trade-off: at fixed power, noise and linearity trade via W/L (overdrive), and only more power improves both. Using a general γ instead of 2/3 is fine. +1: correct directions and trade-off but the exponents missing or one exponent wrong; or the power side of the trade-off missing (power only said to be unchanged with W/L, without saying that improving noise and linearity together requires more current, i.e., more power). 0: one of the two curves right and the other missing, or curves right with no trade-off discussion. -2 (asserted as fact): THD decreasing with W/L at fixed current, noise increasing with W/L, or power said to change with W/L at fixed current.
