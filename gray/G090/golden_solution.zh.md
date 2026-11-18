最优值：$I_{IN} = V_{CC}I_{OUT}/V_T$，由此得 $R_1 = V_T/I_{OUT}$，$R_2 = \dfrac{V_T}{I_{OUT}}\ln\dfrac{V_{CC}}{V_T}$（若保留 $V_{BE}$：$I_{IN} = (V_{CC}-V_{BE})I_{OUT}/V_T$，$R_2 = (V_T/I_{OUT})\ln[(V_{CC}-V_{BE})/V_T]$）。对于 30 V 和 5 µA：$R_1 = 5.2$ kΩ，$R_2 \approx 36.7$ kΩ（总计 ≈ 42 kΩ），$I_{IN} \approx 5.8$ mA。不实用：为产生 5 µA，参考支路要消耗 ≈ 5.6–5.8 mA（从 30 V 电源取用 ≈ 0.17 W），电流比超过 1000，而与 30-kΩ/27-kΩ 的设计相比只节省了 ≈ 15 kΩ 电阻。

- $R_1 = (V_{CC} - V_{BE})/I_{IN}$，$R_2 = (V_T/I_{OUT})\ln(I_{IN}/I_{OUT})$。
- $R_T = \dfrac{V_{CC}-V_{BE}}{I_{IN}} + \dfrac{V_T}{I_{OUT}}\ln\dfrac{I_{IN}}{I_{OUT}}$；$\dfrac{dR_T}{dI_{IN}} = -\dfrac{V_{CC}-V_{BE}}{I_{IN}^2} + \dfrac{V_T}{I_{OUT}I_{IN}} = 0$ → $I_{IN} = (V_{CC}-V_{BE})I_{OUT}/V_T$（二阶导数为正，故为极小值）。
- 于是 $R_1 = V_T/I_{OUT}$，$R_2 = (V_T/I_{OUT})\ln[(V_{CC}-V_{BE})/V_T] \approx (V_T/I_{OUT})\ln(V_{CC}/V_T)$。
- 数值：$R_1 = 26\ \mathrm{mV}/5\ \mu\mathrm{A} = 5.2$ kΩ；$R_2 = 5.2\ \mathrm{k}\times\ln(1154) = 36.7$ kΩ（取 $V_{BE} = 0.7$ V 时为 36.5 kΩ）；$I_{IN} = 5.8$ mA（5.6 mA）。
