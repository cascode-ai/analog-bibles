# Golden Solution - grsim-10-03

## Reference answer

(a) About 17.7 mV peak ($0.683\,V_T$); about 18.0 mV with the simpler approximation $\delta \approx a^2/12$.
- $I_{\text{out}} = I_{EE}\tanh x \approx I_{EE}(x - x^3/3)$ with $x = a\sin\omega_ot$, $a = V_p/2V_T$.
- $\sin^3 = \tfrac34\sin - \tfrac14\sin 3$ gives $I_{\text{out}} \approx I_{EE}[(a - a^3/4)\sin\omega_ot + (a^3/12)\sin 3\omega_ot]$, so $\delta = \dfrac{a^2/12}{1 - a^2/4}$.
- $\delta = 0.01$ → $a^2 = 0.12/1.03$ → $a = 0.341$ → $V_p = 2aV_T = 0.683V_T = 17.7$ mV.

(b) Expected simulation result: at 17.7 mV peak the exact tanh characteristic gives third-harmonic distortion ≈ 0.94% (≈ 0.97% at 18.0 mV). The two-term series slightly overestimates it, so the hand result is confirmed and slightly conservative. The second harmonic is ≈ 0 for matched devices. Finite β only scales the collector currents by α and does not change the ratios.

(c) Expected: third-harmonic distortion ≈ 0.0085% (≈ 8.5 × 10⁻⁵), about 114 times lower.
- With $R_E$ in each emitter, $V_{id} = 2V_T\,\tanh^{-1}y + I_{EE}R_E\,y$ with $y = I_{\text{out}}/I_{EE}$ and $I_{EE}R_E = 2 \times 100$ mV $= 0.2$ V.
- Series inversion: $y \approx V_{id}/g - (2V_T/3)V_{id}^3/g^4$ with $g = 2V_T + I_{EE}R_E = 0.252$ V.
- So $HD_3 \approx \dfrac{V_TV_p^2}{6g^3} = 8.5\times10^{-5}$ at $V_p = 17.7$ mV; an exact numerical solution gives $8.55\times10^{-5}$. This equals the undegenerated value reduced by $(2V_T/g)^3 = 1/(1 + g_mR_E)^3 = 1/4.85^3 \approx 1/114$, with $g_mR_E = 100/26$.
- The fundamental output falls to ≈ $0.070\,I_{EE}$ (from ≈ $0.33\,I_{EE}$), i.e. the gain drops by ≈ 4.7×.

## Grading notes

Credit split about equally between (a), (b) and (c). (a) +2 level: 17.4–18.2 mV peak (or $\approx 0.68$–$0.69\,V_T$) from the two-term tanh series. (b) A correct simulation (transient plus Fourier analysis at a low frequency) shows HD3 ≈ 0.9–1.0% at that amplitude, negligible HD2, and the conclusion that the hand estimate is confirmed (slightly pessimistic). (c) A correct simulation shows HD3 ≈ 0.008–0.010% (about two orders of magnitude below (b)); a hand cross-check via $(1 + g_mR_E)^3$ or the degenerated series is a plus. Errors that make a part wrong: a missing factor 2 in the tanh argument (amplitude ≈ 8.9 mV), distortion quoted in dB or percent inconsistently with the stated value, or in (c) $R_E$ chosen so that $I_{EE}R_E = 100$ mV (half the specified degeneration, giving ≈ 0.04%). A simulation with an input much larger than the result of (a), or with the transistors saturating, is wrong.
