# Golden Solution - G354

## Reference answer

$\overline{v_i^2}/\Delta f = 4kT\frac{2}{3g_m}\left(1 + \frac{10^5\ \text{Hz}}{f}\right) + \frac{4kT}{g_m^2R_L} \approx 1.11\times10^{-17}\left(1+\frac{10^5}{f}\right) + 1.7\times10^{-18}$ V²/Hz; $\overline{i_i^2} = 0$. Total in 1 Hz–20 kHz ≈ $1.12\times10^{-11}$ V² → ≈ 3.35 µV rms.

- Flicker drain noise $\propto 1/f$, equal to thermal at 100 kHz, so the referred density is thermal × $(1 + 10^5/f)$.
- $\int_1^{2\times10^4}\left(1+\frac{10^5}{f}\right)df = 2\times10^4 + 10^5\ln(2\times10^4) = 2\times10^4 + 9.90\times10^5 = 1.01\times10^6$ Hz.
- $1.107\times10^{-17}\times1.01\times10^6 = 1.12\times10^{-11}$ V²; the load adds $1.7\times10^{-18}\times2\times10^4 = 3\times10^{-14}$ V² (negligible) → 3.35 µV rms. Flicker noise contributes ≈ 98% (thermal alone would give 0.47 µV).

## Grading notes

+2: the $(1 + 10^5/f)$ form, the logarithmic integral, and a total of 3.2–3.5 µV rms, with $\overline{i_i^2} = 0$. +1: correct total with the generators not stated explicitly, or a slip below 10%. 0: right method with an arithmetic error in the log integral giving a wrong total. −2 (asserted as fact): flicker noise integrated as if white (or as $1/f^2$), the flicker term ignored (≈ 0.5 µV) as if negligible, or a nonzero gate shot-noise current invented.
