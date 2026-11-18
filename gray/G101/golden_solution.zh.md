$dV_{OUT}/dT \approx +0.13$ mV/°C（由电路方程精确求解得 +0.134 mV/°C；一阶估计 $+V_{OS}/T = +0.10$ mV/°C 忽略了电流比的变化）。

- 电路方程（$V_{OS}$ 与反相输入端串联）：同相输入端位于 $Q_1$ 的集电极，电位为 $V_{BE1}$；$Q_2$ 的集电极电位为 $V_{BE1} - V_{OS}$。故 $I_1R_1 = V_{OUT} - V_{BE1}$，$I_2R_2 = V_{OUT} - V_{BE1} + V_{OS}$，$I_2R_3 = V_{BE1} - V_{BE2} = V_T\ln(8I_1/I_2)$。因此 $V_{OUT} = V_{BE1} + (R_2/R_3)\Delta V_{BE} - V_{OS}$。
- $V_{OS} = 0$：各电流是 PTAT 的，故目标值为 $V_{G0} + (\gamma-1)V_T = 1.2615$ V（取 $R_2 \approx 5.75$ kΩ 时达到；$I_1 \approx 0.57$ mA，$I_2 \approx 0.098$ mA）。
- $V_{OS} = 30$ mV：输出中包含 $-V_{OS}$ 这一与温度无关的项。把 $R_2$ 调大（到 ≈ 6.06 kΩ），使 PTAT 项 $(R_2/R_3)\Delta V_{BE}$ 增加约 30 mV，从而恢复 $V_{OUT}$。由于斜率为零的 $V_{BE}$ + PTAT 组合比目标值低 30 mV，多出的 PTAT 电压给出 $dV_{OUT}/dT \approx +V_{OS}/T = +30\ \mathrm{mV}/298\ \mathrm{K} \approx +0.10$ mV/°C。
- 二阶效应：$I_1/I_2 = R_2/R_1 - V_{OS}/(I_2R_1)$，而 $V_{OS}/(I_2R_1) \approx 0.3$ 随 T 升高而减小（因为 $I_2 \propto T$），因此 $\Delta V_{BE}$ 比 PTAT 增长得更快；这一效应附加 ≈ $(R_2/R_3)V_T\,(0.3/5.75)/T \approx +0.03$ mV/°C。完整数值求解得 +0.134 mV/°C。
