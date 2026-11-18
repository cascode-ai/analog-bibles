低频：≈ $5.5\times10^{-25}$ A²/Hz（≈ 0.74 pA/√Hz），由 30-kΩ 反馈电阻决定。在 −3-dB 频率处（≈ 650 MHz）：≈ $2.1\times10^{-23}$ A²/Hz（≈ 4.6 pA/√Hz），由 $M_1$ 的沟道噪声作用于 $C_S + C_{gs1}$ 决定。加入 $r_b = 200\ \Omega$ 后两者仅变化百分之一二。

- 直流（按题给模型）：偏置支路电流 $(5 - V_{BE2} - V_{GS2})/10\text{ k} \approx 0.33$ mA，$Q_1$ 基极为 1.75 V，$Q_1$ 发射极 ≈ 1.0 V，因此 $R_{L1}$ 中电流 ≈ 4.0 mA；$V_o = V_{GS1} \approx 0.98$ V（30-kΩ 电阻中无直流电流），$I_{D1} \approx 4.31$ mA（$g_{m1} = 22.8$ mS），$I_{C1} \approx 0.31$ mA，$I_{C3} \approx 0.97$ mA。
- 小信号：栅极到输出的增益 ≈ −183（计入 30-kΩ 的负载效应）；开环输入极点 $1/(2\pi\cdot30\text{ k}\cdot1.5\text{ pF}) = 3.5$ MHz；闭环跨阻 ≈ 29.8 kΩ，−3 dB 频率 ≈ (1 + 183)·3.5 MHz ≈ 650 MHz。
- 并联反馈的输入噪声：$\overline{i_i^2} = 4kT/R_F + \overline{v_{ia}^2}\,\left|1/R_F + j\omega(C_S + C_{gs1})\right|^2$，其中 $\overline{v_{ia}^2} \approx 4kT\left(\frac{2}{3g_{m1}} + \frac{1}{g_{m1}^2R_{L1}} + \dots\right) \approx 4kT(31\ \Omega)$（$Q_1$、$R_{L2}$、偏置链和 $Q_3$ 的各项较小）。
- 低频：$1.66\times10^{-20}/30\text{ k} = 5.53\times10^{-25}$，加上可忽略的 $\overline{v_{ia}^2}/R_F^2$ → $5.54\times10^{-25}$ A²/Hz。
- 650 MHz 处：$\omega(C_S + C_{gs1}) = 6.1$ mS → $4kT(31)\times3.8\times10^{-5} \approx 2.0\times10^{-23}$，加上 $5.5\times10^{-25}$ → ≈ $2.1\times10^{-23}$ A²/Hz。
