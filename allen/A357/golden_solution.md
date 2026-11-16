# Golden Solution - A357

## Reference answer

$e_{eq}^2(1/f) \approx 1.47\times10^{-11}/f$ V²/Hz; $e_{eq}^2(\text{thermal}) \approx 2.42\times10^{-17}$ V²/Hz (4.9 nV/√Hz); $f_c \approx 608$ kHz; rms noise (1 Hz–100 kHz) ≈ 13.1 µV.

- $B_N = 7.36\times10^{-22}$, $B_P = 2.02\times10^{-22}$ V²·m²; $e_{n1}^2 = B_N/(fW_1L_1) = 7.36\times10^{-12}/f$.
- 1/f: $e_{eq}^2 = 2e_{n1}^2\left[1 + \dfrac{K'_PB_P}{K'_NB_N}\left(\dfrac{L_1}{L_3}\right)^2\right] = 2(7.36\times10^{-12})(1 + 0.125/400)/f = 1.47\times10^{-11}/f$.
- Thermal: $g_{m1} = \sqrt{2\cdot110\ \mu\cdot100\cdot50\ \mu} = 1.05$ mS, $e_{n1}^2 = 8kT/(3g_{m1}) = 1.05\times10^{-17}$; $g_{m3} = \sqrt{2\cdot50\ \mu\cdot5\cdot50\ \mu} = 158$ µS; $e_{eq}^2 = 2e_{n1}^2(1 + g_{m3}/g_{m1}) = 2.42\times10^{-17}$ V²/Hz.
- $f_c = 1.47\times10^{-11}/2.42\times10^{-17} \approx 608$ kHz.
- rms: $1.47\times10^{-11}\ln(10^5) = 1.70\times10^{-10}$ V² plus $2.42\times10^{-12}$ V² → $\sqrt{1.72\times10^{-10}} = 13.1$ µV (13.0 µV from 1/f alone).
- Compared with the p-channel-input version (≈ 4.1×10⁻¹²/f, ≈ 7 µV), the n-channel input has about 3.6× the 1/f noise power ($B_N/B_P$).

## Grading notes

+2: all four results within ±5 % (1/f ≈ 1.47×10⁻¹¹/f, thermal ≈ 2.4×10⁻¹⁷ V²/Hz, $f_c$ ≈ 600 kHz, rms ≈ 13 µV), with the loads' contribution recognized as negligible for 1/f and ≈ 15 % for thermal. +1: one quantity wrong by a slip, or rms computed from 1/f only (13.0 µV) without comment — fine either way; thermal bracket omitted (2.1×10⁻¹⁷) counts as minor. 0: correct method but two or more values wrong. −2 (asserted as fact): p-channel noise constants kept for the n-channel input (giving the original ≈ 4×10⁻¹²/f), rms expressed as a density or the 1/f integral taken as density × bandwidth, or a claim that the n-channel input is quieter.
