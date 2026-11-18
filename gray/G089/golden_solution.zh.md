$I_{IN} \approx 0.977$ mA，$R_2 \approx 27.4$ kΩ，$R_o \approx 160$ MΩ。

- $V_{BE1} = V_T\ln(I_{IN}/I_S) \approx 0.676$ V，故 $I_{IN} = (30 - 0.676)/30\ \mathrm{k\Omega} = 0.977$ mA（取 $V_{BE} = 0.7$ V 时也是 0.977 mA）。
- 沿基极-发射极回路列 KVL：$V_{BE1} - V_{BE2} = I_{OUT}R_2$（忽略基极电流），故 $R_2 = \dfrac{V_T}{I_{OUT}}\ln\dfrac{I_{IN}}{I_{OUT}} = \dfrac{26\ \mathrm{mV}}{5\ \mu\mathrm{A}}\ln(195.5) = 5.2\ \mathrm{k\Omega}\times5.28 = 27.4$ kΩ（若对发射极电流计入因子 $(\beta_F+1)/\beta_F$，则为 27.3 kΩ）。
- 输出电阻（带发射极负反馈的共射输出，基极由二极管 $Q_1$ 的低阻抗驱动）：$R_o \approx r_{o2}[1 + g_{m2}(R_2\|r_{\pi2})]$，其中 $g_{m2} = 5\ \mu\mathrm{A}/26\ \mathrm{mV} = 0.192$ mS，$r_{\pi2} = \beta_0/g_{m2} = 1.04$ MΩ，$R_2\|r_{\pi2} = 26.7$ kΩ，$r_{o2} = V_A/I_{OUT} = 26$ MΩ：$R_o \approx 26\ \mathrm{M\Omega}\times6.14 \approx 160$ MΩ。
