$v_o/i_i \approx +5.7$ MΩ（从基极抽出的 $i_i$ 使 $v_o$ 升高）；$T_0 \approx 3.46\ \mu$s → $f_{-3\text{dB}} \approx 46$ kHz。

偏置：三只晶体管中均有 $I_C = (10 - 0.7)\ \mathrm{V}/30\ \mathrm{k\Omega} = 0.31$ mA；$g_m = 11.9$ mA/V；$r_{\pi1} = 4.19\ \mathrm{k\Omega}$（$pnp$），$r_{\pi2} = r_{\pi3} = 8.39\ \mathrm{k\Omega}$；$r_{o1} = 50/0.31\ \mathrm{mA} = 161\ \mathrm{k\Omega}$，$r_{o2} = 387\ \mathrm{k\Omega}$；$R_{\text{out}} = r_{o1}\|r_{o2} = 114\ \mathrm{k\Omega}$。

电容：$npn$ 的 $\tau_F = (12.24 - 0.7 - 3)\ \mathrm{pF}/38.5\ \mathrm{mA/V} = 222$ ps → $C_{\pi2} = C_{\pi3} = 5.65$ pF；$pnp$ 的 $\tau_F = (765.2 - 1 - 3)\ \mathrm{pF}/19.2\ \mathrm{mA/V} = 39.6$ ns → $C_{\pi1} = 475$ pF。各反偏电压下：$C_{\mu1}$（9.3 V）= 0.236 pF，$C_{bs1}$（19.3 V）= 0.333 pF，$C_{\mu2}$（9.3 V）= 0.165 pF，$C_{cs2}$（10 V）= 0.457 pF，$C_{cs3}$（0.7 V）= 1.33 pF；$C_{\mu3}$ 被短路。

跨阻：$i_i$ 全部流过 $r_{\pi1}$，因此流入输出端的 $i_{c1} = \beta_1 i_i$：$v_o/i_i = \beta_1R_{\text{out}} = 50\times113.9\ \mathrm{k\Omega} = 5.69$ MΩ。

零值时间常数：
- $C_{\pi1}$：$r_{\pi1} = 4.19\ \mathrm{k\Omega}$ → 1.99 µs；$C_{bs1}$：4.19 kΩ → 1.4 ns。
- $C_{\mu1}$：$r_{\pi1} + R_{\text{out}} + g_mR_{\text{out}}r_{\pi1} = 5.81$ MΩ → 1.37 µs。
- $C_{cs2}$：$R_{\text{out}}$ → 52 ns。
- $C_{\mu2}$：$Q_2$/$Q_3$ 基极节点看到的电阻为 $1/g_{m3}\|r_{\pi2}\|r_{\pi3}\|30\ \mathrm{k\Omega} \approx 82\ \Omega$，因此 $R = 82 + R_{\text{out}} + g_mR_{\text{out}}(82) = 225\ \mathrm{k\Omega}$ → 37 ns。
- 该节点上的 $C_{\pi2}$、$C_{\pi3}$、$C_{cs3}$：82 Ω → 合计 ≈ 1 ns。
- $T_0 = 3.46\ \mu$s → $f_{-3\text{dB}} = 46$ kHz（精确分析：47 kHz）。起主导作用的是速度较慢的横向 $pnp$（$C_{\pi1}$）以及 $C_{\mu1}$ 上的密勒效应（Miller effect）。
