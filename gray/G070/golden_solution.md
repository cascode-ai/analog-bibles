# Golden Solution - G070

## Reference answer

$I_C \approx 10.2\ \mu$A per transistor; $A_{dm} \approx -15.2$; $A_{cm} \approx -5.0\times10^{-3}$; $R_{id} \approx 2.63$ MΩ; $R_{ic} \approx 4.0$ GΩ; CMRR ≈ 3.06×10³ (≈ 69.7 dB).

- Bias: $V_{BE} \approx V_T\ln(I_C/I_S) \approx 0.56$ V; the tail node is near −0.6 V, so $R_{\text{TAIL}}$ adds ≈ 0.44 µA: total ≈ 20.4 µA, $I_E = 10.2\ \mu$A, $I_C = 10.17\ \mu$A. $g_m = 0.391$ mA/V, $r_\pi = 511$ kΩ. (Taking $I_C = 10\ \mu$A changes results by ≤ 2%.)
- Differential half circuit (tail node at ac ground): CE stage with emitter resistor $R_E$: $A_{dm} = -\dfrac{g_m R_C}{1 + g_m R_E (1 + 1/\beta_0)} = -\dfrac{39.1}{1 + 1.57} = -15.2$ ($\approx -R_C/(R_E + 1/g_m)$).
- Common-mode half circuit: emitter resistance $R_E + 2R_{\text{TAIL}}$: $A_{cm} = -\dfrac{g_m R_C}{1 + g_m (R_E + 2R_{\text{TAIL}})(1 + 1/\beta_0)} \approx -\dfrac{R_C}{R_E + 2R_{\text{TAIL}}} = -4.97\times10^{-3}$.
- CMRR $= \dfrac{1 + g_m(R_E + 2R_{\text{TAIL}})(1+1/\beta_0)}{1 + g_m R_E(1+1/\beta_0)} \approx 7860/2.57 \approx 3060$.
- $R_{id} = 2\left[r_\pi + (\beta_0+1)R_E\right] = 2(511\ \mathrm{k} + 804\ \mathrm{k}) = 2.63$ MΩ.
- $R_{ic} = r_\pi + (\beta_0+1)(R_E + 2R_{\text{TAIL}}) = 0.51\ \mathrm{M} + 201 \times 20.004\ \mathrm{M} \approx 4.02$ GΩ.
- Compared with the undegenerated pair ($A_{dm} \approx -39$, CMRR ≈ 7900, $R_{id} \approx 1.02$ MΩ): $R_E$ trades differential gain and CMRR for higher differential input resistance (and a wider linear input range); $A_{cm}$ and $R_{ic}$ hardly change.

## Grading notes

Five results, equal weight. +2: all within ±5%: $A_{dm} \approx -15.2$ (−14.5 to −15.9), $A_{cm} \approx -0.0050$, $R_{id} \approx 2.6$ MΩ, $R_{ic} \approx 4.0$ GΩ, CMRR ≈ 3000 (2900–3200; 69–70 dB). Signs of the gains may be omitted if magnitudes are clearly meant. +1: one result off by a slip, or CMRR computed with the undegenerated formula $1 + 2g_m R_{\text{TAIL}}$ (≈ 7900) while the gains are right. 0: about half the results right. −2 (asserted as fact): degeneration ignored in $A_{dm}$ ($-39$), $R_{id} = 2r_\pi$ with $R_E$ omitted, $R_E$ placed in the tail so that it affects only the common mode, or $R_{ic}$ off by orders of magnitude.
