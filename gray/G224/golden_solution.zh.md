$v_o/v_i \approx -1.3\times10^3$；$T_0 \approx 12.4\ \mu$s → $f_{-3\text{dB}} \approx 13$ kHz。

- 偏置：$Q_6$ 中 $I_{\text{REF}} = (10 - 0.7)/20\ \mathrm{k\Omega} = 0.465$ mA；$Q_5$ 构成 Widlar 电流源（Widlar current source）：$V_T\ln(I_{\text{REF}}/I_{C5}) = I_{C5}R_{B1}$ → $I_{C5} \approx 10\ \mu$A，因此 $I_{C1} = I_{C2} = 5\ \mu$A。
- $g_{m1} = 0.192$ mA/V，$r_{\pi1} = 521\ \mathrm{k\Omega}$，$r_{o1} = 120/5\ \mu = 24$ MΩ，$r_{o3} = 50/5\ \mu = 10$ MΩ，负载 $R_L = r_{o1}\|r_{o3} = 7.07$ MΩ。
- 差模增益（对于差分输出，加在一侧的输入 $v_i$ 等效为纯差模输入）：$v_o/v_i = -g_{m1}R_L\,r_{\pi1}/(r_{\pi1} + 20\ \mathrm{k\Omega}) = -1359\times0.963 = -1307$。
- 电容：$C_{\pi1} = \tau_Fg_m + C_{je} = 222\ \mathrm{ps}\times0.192\ \mathrm{mA/V} + 3\ \mathrm{pF} = 3.04$ pF；$C_{\mu1}$（$V_{CB} = 5$ V）= 0.220 pF；$C_{cs1}$（15 V）= 0.376 pF；$C_{\mu3}$（$Q_3$ 基极位于 $V_B \approx 9.3$ V，集电极为 5 V）= 0.337 pF，接在输出与交流地之间。（$C_{\pi3}$ 和 $C_{bs3}$ 被短路，因此不需要横向 pnp 的 $f_T$；按所给数据，它会导致 $\tau_F$ 为负值。）
- 半边电路时间常数：$C_{\pi1}$：$20\ \mathrm{k}\|r_{\pi1} = 19.3\ \mathrm{k\Omega}$ → 58.6 ns；$C_{\mu1}$：$R_{\pi0} + R_L + g_mR_LR_{\pi0} = 33.2$ MΩ → 7.32 µs；$C_{cs1}$ 和 $C_{\mu3}$：$R_L = 7.07$ MΩ → 2.66 µs 和 2.38 µs。
- $T_0 = 12.42\ \mu$s → 12.8 kHz（精确的半边电路分析：12.8 kHz）。
