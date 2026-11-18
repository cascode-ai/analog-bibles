器件参数：$g_m = 11.5$ mA/V，$r_\pi = 4.33\ \mathrm{k\Omega}$，$C_\pi = g_m/\omega_T = 459$ pF；$R_S' = R_S + r_b = 450\ \Omega$。

输入阻抗 $z_i = r_b + R_E + R\|(1/sC)$，其中 $R = (1 + g_mR_E)r_\pi = 204\ \mathrm{k\Omega}$，$C = C_\pi/(1 + g_mR_E) = 9.74$ pF：$|z_i| = 208.5\ \mathrm{k\Omega}$，平坦至约 80 kHz（极点 $1/2\pi RC = 80$ kHz），然后以 −20 dB/十倍频程下降，在约 4 MHz 以上趋于 $r_b + R_E = 4.2\ \mathrm{k\Omega}$（100 kHz 时 130 kΩ，1 MHz 时 17 kΩ，20 MHz 时 4.3 kΩ）。

输出阻抗（不含 $R_E$）：$R_1 = 1/g_m + R_S'/\beta = 95.7\ \Omega$，$R_2 = R_S' = 450\ \Omega$，$L = C_\pi r_\pi R_S'/\beta = 17.9\ \mu$H（精确拟合：$R_1 = 118\ \Omega$，$L = 22.2\ \mu$H，且 $z_o(0) = (r_\pi + R_S')/(\beta + 1) = 94\ \Omega$）。$|z_o|$ 在约 0.5 MHz 以下约为 94 Ω，从 0.85 MHz 的零点开始呈感性（inductive）上升，在约 4–5 MHz 的极点以上趋于 450 Ω（1 MHz 时 141 Ω，3 MHz 时 277 Ω，20 MHz 时 441 Ω）。

阶跃响应（1 mV 输入阶跃）：
- 1 kΩ 负载：$v_o/v_i = 0.914\,(1 + s/2.56\times10^7)/(1 + s/1.93\times10^7)$：输出立即跳变到 $0.69$ mV（$R_L/(R_L + R_S')$，信号经 $C_\pi$ 前馈），然后以 τ ≈ 52 ns 指数上升到 0.914 mV；没有过冲。
- 400 pF 负载（理想电流源偏置，因此没有电阻负载）：感性的输出阻抗与负载电容发生谐振；极点为 $-5.45\times10^6 \pm j1.06\times10^7$ rad/s（$\omega_n = 1.19\times10^7$ rad/s，ζ ≈ 0.46），零点位于 $-2.56\times10^7$ rad/s；输出上升（10%–90% 约 0.11 µs），过冲（overshoot）约 23%（约 0.25 µs 时达到峰值约 1.23 mV），并以约 0.6 µs 的周期振铃（ringing），最后稳定在 1.0 mV。
