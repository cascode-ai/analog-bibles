# Golden Solution - G375

## Reference answer

≈ $1.3\times10^{-18}$ A², i.e. ≈ 1.14 nA rms; about 87% comes from the flicker noise of $M_1$ (via $\overline{v_{ia}^2}/R_F^2$), the rest mainly from the 10-kΩ feedback resistor.

- $g_m = \sqrt{2k'(W/L)I_D} = \sqrt{2\cdot194\ \mu\cdot100\cdot100\ \mu} = 1.97$ mS.
- Shunt feedback at the input (current-source drive, so only the current generator matters): $\overline{i_i^2} = \overline{i_{ia}^2} + \overline{v_{ia}^2}/R_F^2 + 4kT/R_F$ with $\overline{i_{ia}^2} = 0$ (no gate current, capacitance neglected).
- $\overline{v_{ia}^2}$ (basic amplifier, referred to $M_1$'s gate): thermal $4kT\left[\frac{2}{3g_m} + \frac{1}{g_m^2\cdot5\text{ k}} + \dots\right] \approx 4kT(394\ \Omega)$; flicker $\frac{K_f}{WLC_{ox}f} = \frac{3\times10^{-24}}{100\ \mu\text{m}^2\cdot4.31\text{ fF}/\mu\text{m}^2\cdot f} = \frac{6.96\times10^{-12}}{f}$ V²/Hz (plus ≈ 1% from $M_2$, referred through the first-stage gain $g_m\cdot5\text{ k} = 9.85$).
- $\overline{i_i^2}/\Delta f = 1.66\times10^{-24} + 6.5\times10^{-26} + \frac{7.0\times10^{-20}}{f}$ A²/Hz.
- Integral: white $1.73\times10^{-24}\times10^5 = 1.7\times10^{-19}$ A²; flicker $7.0\times10^{-20}\ln(10^5/0.01) = 7.0\times10^{-20}\times16.1 = 1.13\times10^{-18}$ A². Total $1.31\times10^{-18}$ A² → 1.14 nA rms.

## Grading notes

+2: 1.05–1.25 nA rms, with the $\overline{v_{ia}^2}/R_F^2$ referral of $M_1$'s flicker noise, the $\ln(10^7)$ integral and the feedback-resistor noise $4kT/R_F$. +1: a result within 20% (e.g., small terms handled differently) or a minor slip. The feedback-resistor noise omitted with everything else right (≈ 1.07 nA) is +1. Because the question's noise model lists only the MOS sources, an answer that gives the noiseless-resistor value ≈ 1.07 nA and also the value with the resistor thermal noise included (≈ 1.14 nA), each clearly labelled, is +2 whichever of the two it boxes; this is not hedging. 0: flicker noise omitted (≈ 0.41 nA), or the right structure with a significant arithmetic slip. −2 (asserted as fact): input noise current claimed to be zero for a MOS input, the voltage noise multiplied rather than divided by $R_F^2$, flicker noise integrated as white, or an answer off by more than 3×.
