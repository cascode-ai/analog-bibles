# Golden Solution - grsim-03-18

## Reference answer

Hand analysis ($r_b = 0$, $V_A = \infty$): $I_C \approx 10.2\ \mu$A, $A_{dm} \approx -39.1$, $A_{cm} \approx -4.97\times10^{-3}$, CMRR ≈ 7.9×10³ (≈ 78 dB), $R_{id} \approx 1.02$ MΩ, $R_{ic} \approx 4.0$ GΩ. With $r_b = 200\ \Omega$ and $V_A = 130$ V: $A_{dm} \approx -38.8$, $A_{cm} \approx -4.93\times10^{-3}$, CMRR ≈ 7.9×10³ (essentially unchanged), $R_{id} \approx 1.02$ MΩ (+0.4 kΩ), $R_{ic} \approx 1.6$ GΩ.

- Bias: $V_{BE} \approx 0.56$ V; $R_{\text{TAIL}}$ adds ≈ 0.44 µA to the 20-µA source; $I_E = 10.2\ \mu$A, $I_C = 10.17\ \mu$A; $g_m = 0.391$ mA/V, $r_\pi = 511$ kΩ. (With $I_C = 10\ \mu$A: $A_{dm} = -38.5$, CMRR ≈ 7700, $R_{id} = 1.04$ MΩ.)
- $A_{dm} = -g_m R_C = -39.1$; $A_{cm} = -g_m R_C/[1 + 2g_m R_{\text{TAIL}}(1 + 1/\beta_0)] \approx -R_C/(2R_{\text{TAIL}}) = -0.0050$; CMRR $\approx 1 + 2g_m R_{\text{TAIL}} \approx 7860$.
- $R_{id} = 2r_\pi = 1.02$ MΩ; $R_{ic} = r_\pi + (\beta_0+1)2R_{\text{TAIL}} = 4.02$ GΩ.
- Effects: $r_b$ adds 2$r_b$ to $R_{id}$ and $r_b$ to $R_{ic}$ (negligible at this low current, since $r_\pi \gg r_b$) and scales the gains by $r_\pi/(r_\pi + r_b)$; finite $V_A$ gives $r_o = V_A/I_C \approx 12.8$ MΩ, which lowers $A_{dm}$ to $-g_m(R_C\|r_o) \approx -38.8$, hardly changes $A_{cm}$, but shunts the common-mode input: in the common-mode half circuit $r_o$ (via $R_C$) appears in parallel with $2R_{\text{TAIL}}$ at the emitter, so $R_{ic}$ drops to ≈ 1.6 GΩ.

## Grading notes

Hand part: +2 requires all five results within ±5% ($A_{dm} \approx -39$, $A_{cm} \approx -0.005$, CMRR ≈ 7700–7900, $R_{id} \approx 1.0$ MΩ, $R_{ic} \approx 4$ GΩ). A correct simulation reproduces these within a few percent for the ideal model and shows that $r_b = 200\ \Omega$ has a negligible effect while $V_A = 130$ V reduces $|A_{dm}|$ by ≈ 1% and $R_{ic}$ by a factor of about 2.5, with the CMRR essentially unchanged. −2 (asserted as fact): $A_{cm} = 0$ with finite $R_{\text{TAIL}}$, $R_{id} = r_\pi$, CMRR $= g_m R_{\text{TAIL}}$, or $R_{ic}$ computed with $R_{\text{TAIL}}$ instead of $2R_{\text{TAIL}}$ presented as the result of the half-circuit analysis.
