$v_o/v_i = -3.53$；$T_0 \approx 1.00$ ns，$f_{-3\text{dB}} \approx 159$ MHz。

- $g_m = 1.94$ mA/V；$G_m = g_m/(1 + g_mR_{SS}) = 1.94/2.743 = 0.706$ mA/V；增益 $-G_mR_L = -3.53$。
- $R_{gs0}$（在栅极与源极之间加测试电流，类似于无输入电阻的射极跟随器）：$(R_S + R_{SS})/(1 + g_mR_{SS}) = 10.9\ \mathrm{k}/2.743 = 3.97\ \mathrm{k\Omega}$ → $C_{gs}R_{gs0} = 0.297$ ns。
- $R_{gd0} = R_S + R_L + G_mR_LR_S = 10 + 5 + 35.3 = 50.3\ \mathrm{k\Omega}$ → $C_{gd}R_{gd0} = 0.704$ ns。
- $T_0 = 1.00$ ns → 159 MHz（精确值：163 MHz）。负反馈使增益降低 2.74 倍，带宽提高约 2.3 倍。
