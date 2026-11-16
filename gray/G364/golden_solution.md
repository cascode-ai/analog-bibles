# Golden Solution - G364

## Reference answer

Exact (correlated) low-frequency analysis: $R_{S(\text{opt})} \approx 1.63$ kΩ, $F_{\text{opt}} \approx 5.3$ (≈ 7.2 dB). Standard equivalent-generator analysis neglecting correlation: $R_{S(\text{opt})} \approx 1.56$ kΩ, $F_{\text{opt}} \approx 3.4$ (≈ 5.3 dB). Either way the 1-kΩ emitter resistor raises the minimum noise figure from about 2 dB to about 5–7 dB.

- Standard method (series feedback): $\overline{v_i^2} = 4kT(r_b + 1/2g_m + R_E) + 2qI_BR_E^2 = 4kT(1106.5) + 1.28\times10^{-17} = 3.12\times10^{-17}$ V²/Hz; $\overline{i_i^2} = 2qI_B = 1.28\times10^{-23}$ A²/Hz ($I_B = 40\ \mu$A). $R_{S(\text{opt})} = \sqrt{\overline{v_i^2}/\overline{i_i^2}} = 1.56$ kΩ, $F_{\text{opt}} = 1 + 2\sqrt{\overline{v_i^2}\,\overline{i_i^2}}/4kT = 3.41$.
- Exact: the same base-current noise flows through $R_S + r_b + R_E$, so with $R_t = R_S + r_b + R_E$: total input noise $= 4kT(R_S + r_b + R_E) + 2qI_BR_t^2 + 2qI_C(1/g_m + R_t/\beta)^2$, $F = 1 + [4kT(r_b+R_E) + 2qI_BR_t^2 + 2qI_C(1/g_m+R_t/\beta)^2]/(4kTR_S)$; numerically minimized at $R_S \approx 1.63$ kΩ with $F = 5.31$ (7.25 dB). The neglected cross term $2\cdot2qI_BR_SR_E$ is what makes the difference.

## Grading notes

+2: either the exact result (≈ 1.6 kΩ, ≈ 7.2 dB) or the standard uncorrelated result (≈ 1.55 kΩ, ≈ 5.3 dB) with a coherent derivation that includes $R_E$'s thermal noise and the base-current noise in $R_E$. +1: a correct approach with a slip of <10% or no dB conversion. 0: the answer's own chosen final result is the one with the $2qI_BR_E^2$ term dropped (≈ 1.2 kΩ, ≈ 4.5–4.9 dB), with otherwise sound work; an alternative mentioned after a different, wrong main result does not earn it. −2 (asserted as fact): $R_E$ claimed to improve or not affect the noise figure, $R_E$ treated as noiseless, base-current shot noise $2qI_B$ omitted altogether (e.g. $R_{S(\text{opt})}$ ≈ 8.6 kΩ, NF ≈ 1.2 dB, which is below the ≈ 2 dB of the stage without $R_E$), or $\overline{i_i^2} = 2qI_C$.
