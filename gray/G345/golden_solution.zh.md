$\overline{v_i^2}/\Delta f \approx 4kT(13.1\ \Omega) = 2.17\times10^{-19}$ V²/Hz；$\overline{i_i^2}/\Delta f \approx 6.53\times10^{-24}$ A²/Hz。$R_S = 1$ kΩ 时：总等效输入噪声 ≈ $2.33\times10^{-23}$ A²/Hz → 2 MHz 内 ≈ 6.8 nA rms。直接计算得 ≈ $2.37\times10^{-23}$ A²/Hz → 6.9 nA rms；两者相差约 1% 以内（这一小差别来自被忽略的相关性）。

- $g_m = 38.5$ mS，$r_\pi = 1.3$ kΩ，$I_B = 20\ \mu$A。
- $\overline{v_i^2} = 4kT\left(r_b + \frac{1}{2g_m} + \frac{1}{g_m^2R_L}\right) = 4kT(0 + 13 + 0.068)\ \Omega$（最后一项是折算到输入端的 $R_L$ 噪声）。
- $\overline{i_i^2} = 2q\left(I_B + \frac{I_C}{\beta^2}\right) + \frac{4kT}{\beta^2R_L} = 6.4\times10^{-24} + 1.28\times10^{-25} + 6.6\times10^{-28} = 6.53\times10^{-24}$ A²/Hz。
- 计入信号源后的总噪声：$\frac{4kT}{R_S} + \overline{i_i^2} + \frac{\overline{v_i^2}}{R_S^2} = 1.66\times10^{-23} + 6.53\times10^{-24} + 2.2\times10^{-25} = 2.335\times10^{-23}$ A²/Hz；× 2 MHz = $4.67\times10^{-17}$ A² → 6.83 nA rms。
- 直接计算：输出谱密度 $g_m^2R_L^2(R_S\parallel r_\pi)^2(4kT/R_S + 2qI_B) + R_L^2(2qI_C + 4kT/R_L) = 1.087\times10^{-12} + 3.2\times10^{-14} + 1.7\times10^{-16} = 1.119\times10^{-12}$ V²/Hz；跨阻 $g_mR_L(R_S\parallel r_\pi) = 217$ kΩ；折算到输入端为 $2.368\times10^{-23}$ A²/Hz → 6.88 nA rms。差别来自集电极散粒噪声同时出现在 $v_i$ 和 $i_i$ 中（交叉项 $2\cdot 2qI_C/(g_mR_S\beta)$）。
