$v_o/v_i \approx -2.83$；$T_0 \approx 7.7$ ns，$f_{-3\text{dB}} \approx 21$ MHz。

- $g_m = 38.5$ mA/V，$r_\pi = 5.2\ \mathrm{k\Omega}$，$C_\pi = 10.0$ pF。
- 用节点分析求增益：输出节点 $v_o(1/R_L + 1/R_F) = v_b(1/R_F - g_m)$ → $v_o = -164.7\,v_b$；基极节点 $v_i/R_S = v_b(1/R_S + 1/r_\pi + 1/R_F) - v_o/R_F$ → $v_b = 0.0172\,v_i$；$v_o/v_i = -2.83$。
- $R_{\pi0}$：基极到地 $= R_S\|r_\pi\|\dfrac{R_F + R_L}{1 + g_mR_L} = 10\ \mathrm{k}\|5.2\ \mathrm{k}\|181 = 172\ \Omega$ → 1.72 ns。
- $R_{\mu0}$：$R_F$ 直接跨接在 $C_\mu$ 两端，因此 $R_{\mu0} = (R_A + R_L + g_mR_LR_A)\|R_F$，其中 $R_A = R_S\|r_\pi = 3.42\ \mathrm{k\Omega}$：$666\ \mathrm{k}\|30\ \mathrm{k} = 28.7\ \mathrm{k\Omega}$ → 5.74 ns。
- $R_{cs0}$：集电极到地 $= 1/[1/R_L + (1-a)/R_F + g_ma]$，其中 $a = R_A/(R_A + R_F) = 0.102$：240 Ω → 0.24 ns。
- $T_0 = 7.70$ ns → $f_{-3\text{dB}} = 20.7$ MHz（精确分析：24 MHz）。并联反馈（shunt feedback）以增益换取带宽。
