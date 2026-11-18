$\overline{v_o^2}/\Delta f \approx 1.12\times10^{-12}$ V²/Hz（≈ 1.06 µV/√Hz）；2 MHz 带宽内的输出噪声 ≈ 1.5 mV rms；MDS ≈ 6.9 nA rms。

- $g_m = 38.5$ mS，$r_\pi = 1.3$ kΩ，$I_B = 20\ \mu$A；基极节点阻抗 $R_S\parallel r_\pi = 565\ \Omega$。
- 基极节点噪声电流：$4kT/R_S = 1.66\times10^{-23}$ 和 $2qI_B = 6.4\times10^{-24}$ A²/Hz → $v_{be}^2 = 2.30\times10^{-23}\times565^2 = 7.35\times10^{-18}$ V²/Hz，经 $(g_mR_L)^2 = 384.6^2$ 放大后为 $1.087\times10^{-12}$ V²/Hz。
- 输出节点噪声：$(2qI_C + 4kT/R_L)R_L^2 = 3.2\times10^{-14} + 1.7\times10^{-16}$ V²/Hz。
- 总计 $1.119\times10^{-12}$ V²/Hz；× 2 MHz → $2.24\times10^{-6}$ V² → 1.50 mV rms。
- 跨阻 $v_o/i_S = g_mR_L(R_S\parallel r_\pi) = 217$ kΩ → 等效输入噪声 $2.37\times10^{-23}$ A²/Hz → MDS = 1.50 mV/217 kΩ ≈ 6.9 nA rms。源电阻的贡献占主导（≈ 70%），其次是基极电流散粒噪声（≈ 27%）。
