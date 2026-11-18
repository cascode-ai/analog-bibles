$dV_{OUT}/dT \approx +23\ \mu\mathrm{V/°C}$（≈ +18 ppm/°C）。

- 标称设计：各电流是 PTAT 的，因此零温度系数的输出为 $V_{OUT} = V_{G0} + (\gamma-1)V_T = 1.205 + 2.2(0.0257) = 1.2615$ V，$R_1$ 和 $R_2$ 上的电压为 $V_{R2} = V_{OUT} - V_{EB1} = 1.2615 - 0.6 = 0.66$ V。
- $V_{R2} = (R_2/R_3)\Delta V_{EB}$，而 $\Delta V_{EB} = V_T\ln[(R_2/R_1)(I_{S2}/I_{S1})]$ 与 $R_3$ 无关。$R_3$ 偏低 1 % 使 $R_2/R_3$ 增大 1.01 %：$\Delta V_{R2} = 0.66\times0.0101 = 6.7$ mV。
- 两个电流都增大 1.01 %，使 $V_{EB1}$ 升高 $V_T\ln(1.0101) = 0.26$ mV。
- $\Delta V_{OUT} = 6.7 + 0.26 \approx 6.9$ mV，且两个增量都与 T 成正比，故 $dV_{OUT}/dT = \Delta V_{OUT}/T = 6.94\ \mathrm{mV}/298\ \mathrm{K} \approx +23\ \mu\mathrm{V/K}$（等价地，零温度系数点的温度上移后为 $(\gamma-1)(V_T/T)\ln(T_0'/T)$）。
