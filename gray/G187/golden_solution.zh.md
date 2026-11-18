令 $R = (R_S + r_b)\|r_\pi$，一般结果为：$Z_o(s) = \dfrac{1 + sR(C_\pi + C_\mu)}{sC_\mu(1 + g_mR + sRC_\pi)}$；等效电路：$C_\infty = C_\mu C_\pi/(C_\pi + C_\mu) = 0.285$ pF 与一个 $R_x$–$C_x$ 串联支路并联，$C_x = C_\mu[1 + g_mR - C_\pi/(C_\pi + C_\mu)]$，$R_x = R(C_\pi + C_\mu)/C_x$。器件参数：$g_m = 19.2$ mA/V，$r_\pi = 10.4\ \mathrm{k\Omega}$，$C_\pi = 5.82$ pF。

(1) $R_S = 0$：$R = r_b\|r_\pi = 292\ \Omega$，$g_mR = 5.61$。低频电容 $C_\mu(1 + g_mR) = 1.98$ pF；零点位于 $5.6\times10^8$ rad/s（89 MHz）；极点位于 $3.9\times10^9$ rad/s（620 MHz）。$C_x = 1.70$ pF，$R_x = 1.05\ \mathrm{k\Omega}$。曲线：1 kHz 处 $|Z_o| \approx 80$ MΩ，以 −20 dB/decade 下降（1 MHz 处 ≈ 80 kΩ，10 MHz 处 8.1 kΩ）；在 89 MHz 附近开始变平，100 MHz 处 ≈ 1.2 kΩ。

(2) $R_S = \infty$：$R = r_\pi = 10.4\ \mathrm{k\Omega}$，$g_mR = \beta = 200$。低频电容 $C_\mu(1 + \beta) = 60.3$ pF；零点位于 $1/[r_\pi(C_\pi + C_\mu)] = 1.57\times10^7$ rad/s（2.5 MHz）；极点位于 $(1+\beta)/(r_\pi C_\pi) = 3.3\times10^9$ rad/s（528 MHz）。$C_x = 60.0$ pF，$R_x = 1.06\ \mathrm{k\Omega}$。曲线：1 kHz 处 $|Z_o| \approx 2.6$ MΩ，以 −20 dB/decade 下降（100 kHz 处 26 kΩ，1 MHz 处 2.8 kΩ），在 2.5 MHz 附近变平，直到 100 MHz 都约为 1.04–1.09 kΩ。

两种情况下，中频电阻都约为 $(C_\pi + C_\mu)/(g_mC_\mu) \approx 1.06\ \mathrm{k\Omega}$，与 $R_S$ 无关；$R_S$ 决定低频（密勒）电容 $C_\mu(1 + g_mR)$，从而决定转折频率。（由于 $r_o = \infty$，低频下没有电阻性的上限。）
