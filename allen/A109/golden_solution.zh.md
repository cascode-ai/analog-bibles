$R_1$ = 1 kΩ，$R_2 \approx 11.06$ kΩ，$R_3 \approx 8.76$ kΩ。

- $T_0$ 处零温度系数（temperature coefficient）：$\frac{R_3}{R_1}\frac{V_{PTAT}}{T_0} + \frac{R_3}{R_2}\frac{V_{CTAT} - V_{G0} - (\gamma - \alpha)V_{t0}}{T_0} = 0$，故 $\dfrac{R_2}{R_1} = \dfrac{V_{G0} - V_{CTAT} + (\gamma - \alpha)V_{t0}}{V_{t0}\ln10} = \dfrac{1.205 - 0.6 + 0.0572}{0.0599} = 11.06$，$R_2$ = 11.06 kΩ。
- 取此比值时 $V_{REF} = \frac{R_3}{R_2}\left[\frac{R_2}{R_1}V_{PTAT} + V_{CTAT}\right] = \frac{R_3}{R_2}\left[V_{G0} + (\gamma - \alpha)V_{t0}\right] = \frac{R_3}{R_2}\times1.262$ V。
- $V_{REF}$ = 1 V：$R_3/R_2 = 1/1.262 = 0.792$，$R_3$ = 8.76 kΩ。
