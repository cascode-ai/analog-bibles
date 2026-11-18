(a) $f_{-3\text{dB}} \approx 1.93$ MHz；低频增益为 $-38.2$（31.6 dB）。
- $g_m = 19.2$ mA/V，$r_\pi = 10.4\ \mathrm{k\Omega}$，$C_\pi = g_m/\omega_T - C_\mu = 6.12 - 0.3 = 5.82$ pF。
- $R = (R_S + r_b)\|r_\pi = 5.3\ \mathrm{k}\|10.4\ \mathrm{k} = 3.51\ \mathrm{k\Omega}$；$C_M = C_\mu(1 + g_mR_L) = 17.6$ pF；$C_t = 23.4$ pF；$\omega_{-3\text{dB}} = 1/(RC_t) = 1.22\times10^7$ rad/s → 1.93 MHz。
- 增益 $-g_mR_L\,r_\pi/(R_S + r_b + r_\pi) = -38.2$。
(b) $|p_2| = \dfrac{1}{R_LC_\mu} + \dfrac{1}{RC_\pi} + \dfrac{1}{R_LC_\pi} + \dfrac{g_m}{C_\pi} = (1.11 + 0.049 + 0.057 + 3.30)\times10^9 = 4.52\times10^9$ rad/s（720 MHz）。

预期的仿真结果（采用相同的线性模型）：极点位于 1.92 MHz 和 718 MHz，右半平面零点（right-half-plane zero）位于 $g_m/C_\mu = 6.4\times10^{10}$ rad/s（10.2 GHz），−3-dB 频率为 1.92 MHz，增益为 31.6 dB。密勒估算的误差约在 1% 以内，次极点公式的误差约在 0.3% 以内。
