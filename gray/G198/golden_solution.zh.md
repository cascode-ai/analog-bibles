$v_o/v_i \approx -13.2$；$T_0 \approx 41$ ns，$f_{-3\text{dB}} \approx 3.9$ MHz。

- $g_m = 38.5$ mA/V，$r_\pi = 5.2\ \mathrm{k\Omega}$，$C_\pi = 10.0$ pF（由 $C_\pi + C_\mu = g_m/\omega_T$ 求得）。
- $R_i = r_\pi + (\beta + 1)R_E = 65.5\ \mathrm{k\Omega}$；$G_m = \beta/R_i = 3.05$ mA/V（$\approx g_m/(1 + g_mR_E)$）。
- 增益：$-\beta R_L/(R_S + R_i) = -200\times5\ \mathrm{k}/75.5\ \mathrm{k} = -13.2$。
- $R_{\pi0} = r_\pi\|\dfrac{R_S + R_E}{1 + g_mR_E} = 5.2\ \mathrm{k}\|821 = 709\ \Omega$ → $C_\pi R_{\pi0} = 7.1$ ns。
- $R_{\mu0} = R_1 + R_L + G_mR_LR_1$，其中 $R_1 = R_S\|R_i = 8.68\ \mathrm{k\Omega}$ → $8.68 + 5 + 132.4 = 146\ \mathrm{k\Omega}$ → $C_\mu R_{\mu0} = 29.2$ ns。
- $C_{cs}R_L = 5$ ns。
- $T_0 = 41.3$ ns → $f_{-3\text{dB}} = 3.85$ MHz（精确分析：3.97 MHz）。负反馈使增益降低约 5 倍，带宽提高约 4 倍。
