令 $R = (R_S + r_b)\|r_\pi$：
$Z_o(s) = \dfrac{1 + sR(C_\pi + C_\mu)}{sC_\mu\,(1 + g_mR + sRC_\pi)}$。

数值：$g_m = 19.2$ mA/V，$r_\pi = 10.4\ \mathrm{k\Omega}$，$C_\pi = g_m/\omega_T - C_\mu = 5.82$ pF，$R = 5.3\ \mathrm{k\Omega}\|10.4\ \mathrm{k\Omega} = 3.51\ \mathrm{k\Omega}$，$g_mR = 67.5$。

等效电路（对该模型是精确的）：电容 $C_\infty = C_\mu C_\pi/(C_\pi + C_\mu) = 0.285$ pF 与一个 $R_x$–$C_x$ 串联支路并联，其中 $C_x = C_\mu[1 + g_mR - C_\pi/(C_\pi+C_\mu)] = 20.3$ pF，$R_x = R(C_\pi + C_\mu)/C_x \approx (C_\pi + C_\mu)/(g_mC_\mu) = 1.06\ \mathrm{k\Omega}$。等价地说：在低频时 $Z_o$ 是一个电容 $C_\mu(1 + g_mR) = 20.6$ pF（经密勒倍增的 $C_\mu$）；位于 $1/[R(C_\pi + C_\mu)] = 4.65\times10^7$ rad/s（7.4 MHz）的零点使其变为电阻性（≈ 1.06 kΩ）；位于 $(1 + g_mR)/(RC_\pi) = 3.35\times10^9$ rad/s（534 MHz）的极点又使其变回电容性（$C_\infty$），该极点超出了所画范围。

曲线（双对数坐标）：$|Z_o|$ 以 −20 dB/decade 下降，从 1 kHz 处的 ≈ 7.7 MΩ（100 kHz 处 77 kΩ，1 MHz 处 7.8 kΩ）开始，在 7.4 MHz 附近弯折（10 MHz 处 1.3 kΩ），然后在 ≈ 1.03–1.06 kΩ 处变平，一直到 100 MHz。

推导：在集电极加 $v_x$；流过 $C_\mu$ 的电流在 $Z_1 = R\|(1/sC_\pi)$ 上产生 $v_1 = v_x\,sC_\mu Z_1/(1 + sC_\mu Z_1)$，且 $i_x = v_1(g_m + 1/Z_1)$，因此 $Y_o = sC_\mu(1 + g_mZ_1)/(1 + sC_\mu Z_1)$，整理后即得上式。
