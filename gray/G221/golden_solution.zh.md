低频跨阻为 $v_o/i_i = +\beta_1(r_{o1}\|r_{o2}) = 50\times113.9\ \mathrm{k\Omega} \approx +5.7$ MΩ（20-pF 电容在低频下不起作用）；$T_0 \approx 120\ \mu$s → $f_{-3\text{dB}} \approx 1.3$ kHz。

- 偏置与不加电容时相同：$I_C = 0.31$ mA，$g_m = 11.9$ mA/V，$r_{\pi1} = 4.19\ \mathrm{k\Omega}$，$R_{\text{out}} = r_{o1}\|r_{o2} = 114\ \mathrm{k\Omega}$；$C_{\pi1} = 475$ pF，$C_{\mu1} = 0.236$ pF。
- 新加的 20 pF 与 $C_{\mu1}$ 并联：总计 20.24 pF，看到的电阻为 $r_{\pi1} + R_{\text{out}} + g_mR_{\text{out}}r_{\pi1} = 5.81$ MΩ → 117.6 µs。
- 其余时间常数不变：$C_{\pi1}$ 1.99 µs，$C_{cs2}$ 52 ns，$C_{\mu2}$ 37 ns，其余合计 ≈ 2 ns。
- $T_0 = 119.7\ \mu$s → 1.33 kHz（精确值：1.33 kHz）：经密勒倍增（Miller multiplication）的 20-pF 电容（等效值 ≈ 1.4 nF）形成主极点（dominant pole），比不加电容时低约 35 倍。
