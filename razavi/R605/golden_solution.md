# Golden Solution - R605

## Reference answer

As I rises at fixed W/L: $V_{ov} \propto \sqrt I$ and $g_m \propto \sqrt I$, so THD falls as $I^{-1/2}$, the noise PSD falls as $I^{-1/2}$ (transistor term), and the power rises linearly with I.
- THD ≈ HD2 $= \dfrac{V_m}{4V_{ov}} = \dfrac{V_m}{4}\sqrt{\dfrac{\mu_nC_{ox}W/L}{2I}} \propto I^{-1/2}$.
- $\overline{V_{n,in}^2} = 4kT\left(\dfrac{2}{3g_m} + \dfrac{1}{g_m^2R_D}\right)$ with $g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$: transistor term ∝ $I^{-1/2}$, resistor term ∝ $I^{-1}$.
- Power $P = V_{DD}I$ rises linearly.
- Trade-off: both linearity and noise improve with current, but slowly: halving HD2 (or halving the transistor noise PSD) costs 4× the power. At fixed power, noise and linearity trade against each other through W/L. (With $R_D$ fixed, a larger I also lowers the drain bias $V_{DD} - IR_D$, eventually limiting the swing before the transistor leaves saturation.)

## Grading notes

+2: THD ∝ $I^{-1/2}$ (decreasing), input-referred noise decreasing (transistor term: PSD ∝ $I^{-1/2}$, equivalently noise-voltage density or rms ∝ $I^{-1/4}$; either form is full credit), power ∝ I, and the trade-off that better noise and linearity cost power (4× power to halve HD2). +1: correct directions and trade-off with an exponent missing or one exponent wrong. 0: one curve right and the other missing, or no trade-off discussion. -2 (asserted as fact): THD increasing with I at fixed W/L, noise increasing with current, or power independent of I.
