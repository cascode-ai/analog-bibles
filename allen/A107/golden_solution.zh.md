$V_{REF} = V_{G0} + (\gamma - \alpha)V_{t0} \approx 1.262$ V，$R_2 = R_1\,\dfrac{V_{G0} + (\gamma - \alpha)V_{t0} - V_{D3}}{V_t\ln n} = 10\ \mathrm{k\Omega}\times\dfrac{1.262 - V_{D3}}{0.0599\ \mathrm{V}}$，即 $V_{D3}$ = 0.6 V 时 ≈ 110.6 kΩ。

- M1 和 M2 的电流和尺寸都相等，故 $V_{GS1} = V_{GS2}$，且 $V_{D1} = I_2R_1 + V_{D2}$。由于 D2 的面积是 D1 的 $n$ 倍：$I_2 = V_t\ln n/R_1 = 0.026\times2.303/10\ \mathrm{k} = 5.99\ \mu$A（PTAT）。
- $I_3 = I_2$ 流过 $R_2$ 和 D3：$V_{REF} = V_{D3} + (R_2/R_1)V_t\ln n$。
- 零温度系数：$(R_2/R_1)V_{t0}\ln n = V_{G0} - V_{D3} + (\gamma - \alpha)V_{t0}$，由此得到上面的 $R_2$，进而 $V_{REF} = V_{G0} + (\gamma - \alpha)V_{t0} = 1.205 + 0.057 = 1.262$ V。
- 当 $V_{D3}$ = 0.6 V 时：$R_2/R_1 = 0.662/0.0599 = 11.06$，$R_2$ = 110.6 kΩ（若 $V_{D3}$ = 0.7 V，则为 93.9 kΩ）。
