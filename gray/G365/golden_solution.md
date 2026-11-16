# Golden Solution - G365

## Reference answer

$R_{S(\text{opt})} \approx 36.7$ kΩ and $F_{\text{opt}} \approx 1.14$, i.e. ≈ 0.58 dB (the exact correlated analysis gives ≈ 36.7 kΩ and 0.64 dB).

- $g_m = 0.385$ mS ($1/2g_m = 1.3$ kΩ), $I_B = 0.1\ \mu$A.
- $\overline{v_i^2} = 4kT(r_b + 1/2g_m + R_E) + 2qI_BR_E^2 = 4kT(300 + 1300 + 1000) + 3.2\times10^{-20} \approx 4kT(2602\ \Omega) = 4.32\times10^{-17}$ V²/Hz; $\overline{i_i^2} = 2qI_B = 3.2\times10^{-26}$ A²/Hz.
- $R_{S(\text{opt})} = \sqrt{4.32\times10^{-17}/3.2\times10^{-26}} = 36.7$ kΩ; $F_{\text{opt}} = 1 + 2\sqrt{4.32\times10^{-17}\times3.2\times10^{-26}}/1.66\times10^{-20} = 1.142$ → 0.58 dB (vs 0.46 dB without $R_E$).

## Grading notes

+2: $R_{S,opt}$ 35–38 kΩ and $F_{opt}$ 0.55–0.66 dB. The $2qI_BR_E^2$ term (≈ 0.07% of $\overline{v_i^2}$) is negligible and may be omitted without comment. +1: right method with a slip or no dB value. 0: $R_E$ noise omitted (giving the no-emitter-resistor values 28.8 kΩ, 0.46 dB) with otherwise sound work. −2 (asserted as fact): $R_E$ said to lower the noise figure, $\overline{i_i^2} = 2qI_C$, or values from a wrong model off by more than 2×.
