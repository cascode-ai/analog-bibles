(a) $\overline{v_i^2}/\Delta f = 2\left[4kT\left(r_b + \frac{1}{2g_m} + R_E\right) + 2qI_BR_E^2\right] + \frac{2\cdot4kT R_C}{A_v^2} \approx 4kT(2.1\text{ k}\Omega) = 3.5\times10^{-17}$ V²/Hz（≈ 5.9 nV/√Hz）；$\overline{i_i^2}/\Delta f = 2q(I_B + I_C/\beta^2) \approx 1.47\times10^{-25}$ A²/Hz（≈ 0.38 pA/√Hz）。

(b) 总等效输入噪声 ≈ 41 µV rms；总输出噪声 ≈ 0.77 mV rms。

- 偏置：$I_{tail} \approx 9.3\text{ V}/100.25\text{ k} = 93\ \mu$A，$I_C \approx 46\ \mu$A，$g_m = 1.77$ mS，$1/2g_m = 283\ \Omega$，$I_B = 0.46\ \mu$A。
- 差分对：电压噪声为单边的两倍：$2(200 + 283 + 500) = 1966\ \Omega$；基极电流噪声流经 $R_E$ 增加 ≈ 9 Ω；负载 $2\cdot20\text{ k}/A_v^2$，其中 $A_v \approx R_C/(1/g_m + R_E) \approx 18.7$：≈ 114 Ω。尾电阻噪声为共模噪声（不产生差分输出）。只有 $Q_1$ 的电流噪声源起作用（$Q_2$ 的基极接地）。
- (b) $R_S = 50\ \Omega$ 时的点频输入噪声：$4kT(50 + 2100) + \overline{i_i^2}\cdot50^2 \approx 3.58\times10^{-17}$ V²/Hz；单极点的噪声带宽（noise bandwidth）为 $\frac{\pi}{2}\cdot30\text{ MHz} = 47.1$ MHz → $1.69\times10^{-9}$ V² → 41 µV rms。从 $v_s$ 起的增益 ≈ 18.6 → 输出 $5.9\times10^{-7}$ V² → 0.77 mV rms。
