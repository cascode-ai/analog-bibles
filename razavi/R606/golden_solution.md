# Golden Solution - R606

## Reference answer

As I rises at fixed W/L: THD (third harmonic) falls as $1/I$, the noise PSD falls as $I^{-1/2}$ (transistor term), and the power ($2V_{DD}I$) rises linearly.
- THD ≈ HD3 $= \dfrac{V_m^2}{32V_{ov}^2} = \dfrac{V_m^2\,\mu_nC_{ox}(W/L)}{64\,I} \propto 1/I$ (no even harmonics).
- $\overline{V_{n,in}^2} = 8kT\left(\dfrac{2}{3g_m} + \dfrac{1}{g_m^2R_D}\right)$, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$: transistor term ∝ $I^{-1/2}$, resistor term ∝ $I^{-1}$.
- Trade-off: doubling the power halves HD3 but lowers the transistor noise PSD only by √2; at fixed power, noise and linearity trade through W/L (overdrive). Versus a common-source stage: much lower distortion and a faster improvement with current, at twice the power and twice the noise power for the same $g_m$.

## Grading notes

+2: THD ∝ 1/I (decreasing), input-referred noise decreasing (transistor term: PSD ∝ $I^{-1/2}$, equivalently noise-voltage density or rms ∝ $I^{-1/4}$; either form is full credit), power ∝ I (or $2V_{DD}I$), no even harmonics, and the trade-off that linearity and noise improve only with more power. +1: correct directions and trade-off with an exponent missing or wrong (e.g., THD ∝ $I^{-1/2}$). 0: one curve right and the other missing, or no trade-off discussion. -2 (asserted as fact): THD increasing with I, noise increasing with I, or a second harmonic claimed for the symmetric pair. A typo in an intermediate series expansion that does not carry into the stated harmonic amplitudes is ignored.
