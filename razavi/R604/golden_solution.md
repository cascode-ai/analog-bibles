# Golden Solution - R604

## Reference answer

As W/L rises at fixed I: THD (third harmonic only) rises linearly with W/L, the input-referred noise falls (PSD ∝ $(W/L)^{-1/2}$ for the transistor term), power is unchanged.
- THD ≈ HD3 $= \dfrac{V_m^2}{32V_{ov}^2} = \dfrac{V_m^2\,\mu_nC_{ox}(W/L)}{64\,I} \propto W/L$ (no even harmonics), with $V_{ov} = \sqrt{2I/(\mu_nC_{ox}W/L)}$: a straight line through the origin.
- Noise PSD (two transistors and two resistors): $\overline{V_{n,in}^2} = 8kT\left(\dfrac{2}{3g_m} + \dfrac{1}{g_m^2R_D}\right)$, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$: falls as $(W/L)^{-1/2}$ (transistor term) to $(W/L)^{-1}$ (resistor term).
- Trade-off: at fixed power ($2V_{DD}I$), lowering noise by widening the devices (smaller overdrive) raises distortion; $(\overline{V_{n,in}^2})^2\cdot\mathrm{HD3} \propto 1/I^2$ is independent of W/L, so only more current improves both. Compared with a common-source stage with the same device and current, the pair has much lower distortion but twice the power and twice the input noise power.

## Grading notes

+2: THD (HD3 $= V_m^2/32V_{ov}^2$) increasing linearly with W/L, noise decreasing (PSD ∝ $(W/L)^{-1/2}$ for the transistors, or correct with the $R_D$ term), no even harmonics, and the trade-off at fixed power with more current improving both. +1: correct directions and trade-off but exponents missing or one wrong (e.g., THD said ∝ $\sqrt{W/L}$). 0: one curve right and the other missing, or no trade-off discussion. -2 (asserted as fact): THD decreasing with W/L at fixed current, a dominant second harmonic, or noise increasing with W/L.
