$e_{eq}^2(1/f) \approx 1.47\times10^{-11}/f$ V²/Hz；$e_{eq}^2(\text{thermal}) \approx 2.42\times10^{-17}$ V²/Hz（4.9 nV/√Hz）；$f_c \approx 608$ kHz；均方根噪声（1 Hz–100 kHz）≈ 13.1 µV。

- $B_N = 7.36\times10^{-22}$，$B_P = 2.02\times10^{-22}$ V²·m²；$e_{n1}^2 = B_N/(fW_1L_1) = 7.36\times10^{-12}/f$。
- 1/f 噪声：$e_{eq}^2 = 2e_{n1}^2\left[1 + \dfrac{K'_PB_P}{K'_NB_N}\left(\dfrac{L_1}{L_3}\right)^2\right] = 2(7.36\times10^{-12})(1 + 0.125/400)/f = 1.47\times10^{-11}/f$。
- 热噪声：$g_{m1} = \sqrt{2\cdot110\ \mu\cdot100\cdot50\ \mu} = 1.05$ mS，$e_{n1}^2 = 8kT/(3g_{m1}) = 1.05\times10^{-17}$；$g_{m3} = \sqrt{2\cdot50\ \mu\cdot5\cdot50\ \mu} = 158$ µS；$e_{eq}^2 = 2e_{n1}^2(1 + g_{m3}/g_{m1}) = 2.42\times10^{-17}$ V²/Hz。
- $f_c = 1.47\times10^{-11}/2.42\times10^{-17} \approx 608$ kHz。
- 均方根值：$1.47\times10^{-11}\ln(10^5) = 1.70\times10^{-10}$ V² 加上 $2.42\times10^{-12}$ V² → $\sqrt{1.72\times10^{-10}} = 13.1$ µV（仅 1/f 噪声为 13.0 µV）。
- 与 p 沟道输入的版本（≈ 4.1×10⁻¹²/f，≈ 7 µV）相比，n 沟道输入的 1/f 噪声功率约为其 3.6 倍（$B_N/B_P$）。
