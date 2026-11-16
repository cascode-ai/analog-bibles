# Golden Solution - A356

## Reference answer

Modified design: $e_{eq}^2(1/f) \approx 1.63\times10^{-12}/f$ V²/Hz; $e_{eq}^2(\text{thermal}) \approx 1.09\times10^{-17}$ V²/Hz (3.3 nV/√Hz); $f_c \approx 149$ kHz; rms noise (1 Hz–100 kHz) ≈ 4.45 µV (4.33 µV from 1/f alone); dynamic range ≈ 7.9×10⁴ ≈ 98 dB. The noise falls only by ≈ 1.6× in rms (≈ 2.5× in mean-square power) relative to the original 100/1 design (≈ 7 µV), not by 10.

- $B_N = KF_N/(2C_{ox}K'_N) = 7.36\times10^{-22}$ V²·m², $B_P = KF_P/(2C_{ox}K'_P) = 2.02\times10^{-22}$ V²·m²; $e_{ni}^2 = B/(fW_iL_i)$.
- Input-referred density: $e_{eq}^2 = 2e_{n1}^2\left[1 + (g_{m3}/g_{m1})^2(e_{n3}^2/e_{n1}^2)\right]$.
- 1/f: $e_{n1}^2 = 2.02\times10^{-22}/(500\ \mu\mathrm{m}\cdot0.5\ \mu\mathrm{m}\cdot f) = 8.10\times10^{-13}/f$; bracket $1 + (K'_NB_N/K'_PB_P)(L_1/L_3)^2 = 1 + 8.02\times(0.025)^2 = 1.005$ → $1.63\times10^{-12}/f$.
- Thermal: $g_{m1} = \sqrt{2\cdot50\ \mu\cdot1000\cdot50\ \mu} = 2.24$ mS, $e_{n1}^2 = 4.94\times10^{-18}$; bracket $1 + g_{m3}/g_{m1} = 1 + \sqrt{K'_NW_3L_1/(K'_PW_1L_3)} = 1.105$ → $1.09\times10^{-17}$ V²/Hz.
- Corner: $1.63\times10^{-12}/1.09\times10^{-17} \approx 149$ kHz.
- rms: $1.63\times10^{-12}\ln(10^5) = 1.87\times10^{-11}$ V² plus $1.09\times10^{-17}\times10^5 = 1.1\times10^{-12}$ V² → 4.45 µV.
- Dynamic range: $0.354\ \mathrm{V}/4.45\ \mu\mathrm{V} = 7.9\times10^4$ → 98 dB (about 16 bits).
- Original design for comparison: $e_{eq}^2(1/f) = 2(2.02\times10^{-12})(1 + 8.02/400)/f = 4.13\times10^{-12}/f$, thermal $4.16\times10^{-17}$, $f_c$ ≈ 99 kHz, rms ≈ 6.9 µV (1/f) or 7.2 µV with thermal, ≈ 94 dB.
- The 1/f density is set by the product $W_1L_1$, which grows only from 100 to 250 µm² (2.5×): mean-square 1/f noise drops 2.5×, rms 1.6×. A 10× lower rms noise would need about 100× larger $W_1L_1$ (10× for a 10× lower noise power).

## Grading notes

+2: the modified-design values within about ±5 % (1/f ≈ 1.6×10⁻¹²/f, thermal ≈ 1.1×10⁻¹⁷ V²/Hz, $f_c$ 140–160 kHz, rms 4.3–4.5 µV, DR ≈ 98 dB) and an explicit recognition that the change reduces the noise only by ≈ 1.6× in rms (≈ 2.5× in power), so the factor-of-10 goal is not reached, with the reason ($W_1L_1$ only 2.5× larger). +1: correct numbers but no comparison with the original, or the comparison right with one value off. 0: correct method with errors in several values. −2 (asserted as fact): the new design presented as reducing the noise by 10, n-channel noise constants used for the p-channel input, the integral taken as density × bandwidth for the 1/f part, or the noise claimed to depend on W/L rather than W·L. Referring the M3/M4 noise to the input with unity gain (omitting the factor $(g_{m3}/g_{m1})^2$) is a model error, not a slip: the M1–M4 values it gives are wrong (−2 if asserted, −1 if the answer itself marks that model as doubtful), and a separate input-pair-only result does not replace the requested M1–M4 result. A remark that the M1/M2 thermal-noise power term $8kT/(3g_{m1})$ falls by √10 for the 10× larger W/L (amplitude by $10^{1/4}$) is correct, not an error.
