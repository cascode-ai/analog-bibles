$\overline{v_i^2}/\Delta f = 4kT\frac{2}{3g_m}\left(1 + \frac{10^5\ \text{Hz}}{f}\right) + \frac{4kT}{g_m^2R_L} \approx 1.11\times10^{-17}\left(1+\frac{10^5}{f}\right) + 1.7\times10^{-18}$ V²/Hz；$\overline{i_i^2} = 0$。1 Hz–20 kHz 内的总噪声 ≈ $1.12\times10^{-11}$ V² → ≈ 3.35 µV rms。

- 漏极闪烁噪声 $\propto 1/f$，在 100 kHz 处与热噪声相等，因此折算到输入端的谱密度为热噪声 × $(1 + 10^5/f)$。
- $\int_1^{2\times10^4}\left(1+\frac{10^5}{f}\right)df = 2\times10^4 + 10^5\ln(2\times10^4) = 2\times10^4 + 9.90\times10^5 = 1.01\times10^6$ Hz。
- $1.107\times10^{-17}\times1.01\times10^6 = 1.12\times10^{-11}$ V²；负载贡献 $1.7\times10^{-18}\times2\times10^4 = 3\times10^{-14}$ V²（可忽略）→ 3.35 µV rms。闪烁噪声约占 98%（仅热噪声时为 0.47 µV）。
