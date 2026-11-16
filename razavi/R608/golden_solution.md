# Golden Solution - R608

## Reference answer

THD ≈ HD2 ≈ 0.069% (≈ −63 dB), versus ≈ 0.65% for the open-loop stage driven by the same 10-mV input.
- Bias: $V_{ov} = \sqrt{2(1\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2}\times100)} = 0.386$ V, $g_m = 2I/V_{ov} = 5.18$ mS.
- Forward amplifier (inversion absorbed in the loop): $y = \alpha_1x + \alpha_2x^2$ with $\alpha_1 = g_mR_D = 10.35$ and $\alpha_2 = \tfrac12\mu_nC_{ox}\tfrac WL R_D = 13.4\ \mathrm{V^{-1}}$.
- For $x = V_m\cos\omega t$, setting $y \approx a\cos\omega t + b\cos2\omega t$ and matching coefficients (small nonlinearity): $a = \dfrac{\alpha_1V_m}{1+\beta\alpha_1}$, $b = \dfrac{\alpha_2V_m^2}{2(1+\beta\alpha_1)^3}$, so $\dfrac ba = \dfrac{\alpha_2V_m}{2\alpha_1}\cdot\dfrac{1}{(1+\beta\alpha_1)^2}$.
- Numbers: $\beta\alpha_1 = 2.07$, $(1+\beta\alpha_1)^2 = 9.43$; $\alpha_2V_m/(2\alpha_1) = 6.47\times10^{-3}$; $b/a = 6.9\times10^{-4} = 0.069\%$. Output fundamental $a$ ≈ 33.7 mV. A direct numerical solution of the loop equation gives the same value; higher harmonics are negligible.
- (If $r_O = 1/(\lambda I) = 10\ \mathrm{k\Omega}$ with $\lambda = 0.1\ \mathrm{V^{-1}}$ were included, $\alpha_1$ = 8.6 and THD ≈ 0.087%.)

## Grading notes

+2: THD ≈ 0.069% (±10%), or the same as −63 dB or as a power ratio ≈ 4.7×10⁻⁷ when labelled, obtained from $\alpha_1$ ≈ 10.4, $\alpha_2$ ≈ 13.4 V⁻¹ and the $(1+\beta\alpha_1)^2$ ≈ 9.4 suppression. +1: ≈ 0.087% because $r_O$ = 10 kΩ was included, otherwise correct; or correct value with the derivation only sketched. 0: right method with an arithmetic slip that moves the result by more than 10%. -2 (asserted as fact): the open-loop distortion (≈ 0.65%) given as the closed-loop THD, suppression by $(1+\beta\alpha_1)$ only (≈ 0.21%) or by $(1+\beta\alpha_1)^3$ (≈ 0.022%), a dominant third harmonic, or $\alpha_2$ taken as $\mu_nC_{ox}(W/L)R_D$ (factor 2 error) presented as the answer.
