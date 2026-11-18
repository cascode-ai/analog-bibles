$v_o/v_i = -65.8$；$T_0 \approx 172$ ns，故 $\omega_{-3\text{dB}} \approx 5.8\times10^6$ rad/s，$f_{-3\text{dB}} \approx 0.92$ MHz。

- $g_m = 38.5$ mA/V，$r_\pi = 5.2\ \mathrm{k\Omega}$；$C_\pi + C_\mu = g_m/\omega_T = 10.2$ pF → $C_\pi = 10.0$ pF（$C_{je}$ 已包含在该值中）。
- 增益：$-g_mR_L\,r_\pi/(R_S + r_\pi) = -192.3\times5.2/15.2 = -65.8$。
- $R_{\pi0} = R_S\|r_\pi = 3.42\ \mathrm{k\Omega}$ → $C_\pi R_{\pi0} = 34.2$ ns。
- $R_{\mu0} = R_{\pi0} + R_L + g_mR_LR_{\pi0} = 3.42 + 5 + 657.9 = 666\ \mathrm{k\Omega}$ → $C_\mu R_{\mu0} = 133.3$ ns。
- $R_{cs0} = R_L = 5\ \mathrm{k\Omega}$ → 5 ns。
- $T_0 = 172.5$ ns → $f_{-3\text{dB}} = 1/(2\pi T_0) = 0.92$ MHz（精确分析给出 0.93 MHz）。
