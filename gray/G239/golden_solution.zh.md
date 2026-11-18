$i_o/i_i \approx 3.90$；$T_0 \approx 1.15$ ns → $f_{-3\text{dB}} \approx 139$ MHz；$t_r \approx 2.5$ ns。

- $g_{m1} = 38.5$ mA/V，$g_{m2} = 154$ mA/V；$r_{\pi1} = 5.2\ \mathrm{k\Omega}$，$r_{\pi2} = 1.3\ \mathrm{k\Omega}$。
- 增益：$i_o/i_i = g_{m2}/(g_{m1} + 1/r_{\pi1} + 1/r_{\pi2}) = 153.8/(38.46 + 0.19 + 0.77) = 3.90$（基极电流使其从 4 略有下降）。
- $C_{\pi1} = \tau_Fg_{m1} + C_{je1} = 7.69 + 1 = 8.69$ pF；$C_{\pi2} = 30.8 + 4 = 34.8$ pF。
- 节点电阻 $1/g_{m1}\|r_{\pi1}\|r_{\pi2} = 25.4\ \Omega$；节点电容 $C_{\pi1} + C_{cs1} + C_{\pi2} + C_{\mu2} = 8.69 + 1 + 34.8 + 0.8 = 45.3$ pF（$C_{\mu1}$ 被二极管连接短路；$C_{cs2}$ 位于接地的输出端）。
- $T_0 = 1.15$ ns → 139 MHz；$t_r = 2.2T_0 = 2.53$ ns。由于扩散电容（diffusion capacitance）$\tau_Fg_m$ 很大，双极型电路比 MOS 电路慢约 6 倍。
