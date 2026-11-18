取 $R = 100$ kΩ：$\overline{v_i^2}/\Delta f \approx 4kT\left(R + r_b + \frac{1}{2g_m}\right) + 2qI_B(R+r_b)^2 \approx 1.66\times10^{-15} + 1.60\times10^{-14} \approx 1.8\times10^{-14}$ V²/Hz（≈ 0.13 µV/√Hz）；$\overline{i_i^2}/\Delta f = 2q(I_B + I_C/\beta^2) \approx 1.6\times10^{-24}$ A²/Hz（≈ 1.3 pA/√Hz）。

- $g_m = 19.2$ mS（$1/2g_m = 26\ \Omega$），$r_\pi = 5.2$ kΩ，$I_B = 5\ \mu$A。
- 晶体管在其基极处的噪声源为 $4kT(r_b + 1/2g_m)$ 和 $2qI_B$。把它们移过串联的 100 kΩ 电阻后：电压源增加了 100-kΩ 电阻的热噪声（thermal noise）$4kTR$ 以及电流源乘以 $R$ 的项（两者含有相同的基极电流噪声，因此强相关）；电流源不变。
- 流过 100 kΩ 的基极电流散粒噪声（shot noise）占主导（约占 $\overline{v_i^2}$ 的 90%），其次是 100-kΩ 电阻的热噪声（约 9%）。
- 较小的附加项：经大基极电阻折算的集电极散粒噪声 $2qI_C(1/g_m + R/\beta)^2$，≈ $4kT\cdot10.7$ kΩ；以及经增益 $|A_v| = g_mR_L r_\pi/(r_\pi+R+r_b) \approx 9.5$ 折算的 10-kΩ 负载噪声，≈ $4kT\cdot110\ \Omega$；精确计算得 $\overline{v_i^2} \approx 1.79\times10^{-14}$ V²/Hz。
