$f_T = \dfrac{1}{2\pi[\tau_F + (C_{je}+C_\mu)/g_m]}$，其中 $\tau_F \approx 147$ ps，$C_{je} \approx 4.38$ pF，$C_\mu(2\ \mathrm{V}) \approx 0.305$ pF，因此 $C_{je}+C_\mu \approx 4.69$ pF。

- 小电流：$f_T \approx I_C/[2\pi V_T(C_{je}+C_\mu)]$，在双对数坐标上是斜率为 +1 的直线：1 µA 时 ≈ 1.3 MHz，10 µA 时 12.9 MHz，100 µA 时 116 MHz。
- 转折点为 $(C_{je}+C_\mu)/g_m = \tau_F$ 处：$I_C \approx 0.83$ mA，此时 $f_T$ 为其最大值的一半（≈ 540 MHz）。
- 大电流：$f_T \to 1/(2\pi\tau_F) \approx 1.08$ GHz；1 mA 时 591 MHz，3 mA 时 847 MHz，10 mA 时 ≈ 1.0 GHz。
- （实际器件在大电流下由于大注入和基区扩展效应，$f_T$ 会下降；本模型未包含这一点。）

参数提取：$\tau_T = 1/(2\pi f_T)$ = 265.3 ps（1 mA）和 159.2 ps（10 mA）；由 $\tau_T = \tau_F + (C_{je}+C_\mu)/g_m$，且 $1/g_m$ 分别为 26 Ω 和 2.6 Ω，得 $C_{je}+C_\mu(10\ \mathrm{V}) = 4.53$ pF，$C_{je} = 4.38$ pF，$\tau_F = 147.4$ ps；$C_{\mu0} = 0.15\sqrt{1+10/0.55} = 0.657$ pF → $C_\mu(2\ \mathrm{V}) = 0.305$ pF。
