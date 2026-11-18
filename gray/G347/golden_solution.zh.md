取 $R_E = 1$ kΩ：$\overline{v_i^2}/\Delta f \approx 4kT\left(r_b + \frac{1}{2g_m} + R_E\right) + 2qI_BR_E^2 = 4kT(1126\ \Omega) + 1.6\times10^{-18} \approx 2.0\times10^{-17}$ V²/Hz（≈ 4.5 nV/√Hz），若计入 10-kΩ 负载噪声和相关性，则升至 ≈ $2.2$–$2.3\times10^{-17}$ V²/Hz；$\overline{i_i^2}/\Delta f \approx 2qI_B = 1.6\times10^{-24}$ A²/Hz。

- $g_m = 19.2$ mS，$I_B = 5\ \mu$A；输入电阻 $r_\pi + (\beta+1)R_E \approx 106$ kΩ。
- 串联（发射极）反馈：晶体管的噪声源原样移到输入端，再加上 $R_E$ 的热噪声（thermal noise）以及电流源乘以 $R_E$ 的项：$\overline{v_i^2} = \overline{v_{ia}^2} + \overline{i_{ia}^2}R_E^2 + 4kTR_E$，$\overline{i_i^2} = \overline{i_{ia}^2}$。
- 负载：增益 $\approx R_L/(R_E + 1/g_m) = 9.5$，因此 $R_L$ 贡献 $4kT R_L/A_v^2 \approx 4kT\cdot110\ \Omega$（≈ 9%）。
- $R_E$ 的热噪声是最大的单项（≈ 80%）。
