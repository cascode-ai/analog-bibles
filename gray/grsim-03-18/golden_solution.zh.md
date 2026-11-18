手工分析（$r_b = 0$，$V_A = \infty$）：$I_C \approx 10.2\ \mu$A，$A_{dm} \approx -39.1$，$A_{cm} \approx -4.97\times10^{-3}$，CMRR ≈ 7.9×10³（≈ 78 dB），$R_{id} \approx 1.02$ MΩ，$R_{ic} \approx 4.0$ GΩ。取 $r_b = 200\ \Omega$、$V_A = 130$ V 时：$A_{dm} \approx -38.8$，$A_{cm} \approx -4.93\times10^{-3}$，CMRR ≈ 7.9×10³（基本不变），$R_{id} \approx 1.02$ MΩ（+0.4 kΩ），$R_{ic} \approx 1.6$ GΩ。

- 偏置：$V_{BE} \approx 0.56$ V；$R_{\text{TAIL}}$ 在 20 µA 电流源之外增加约 0.44 µA；$I_E = 10.2\ \mu$A，$I_C = 10.17\ \mu$A；$g_m = 0.391$ mA/V，$r_\pi = 511$ kΩ。（若取 $I_C = 10\ \mu$A：$A_{dm} = -38.5$，CMRR ≈ 7700，$R_{id} = 1.04$ MΩ。）
- $A_{dm} = -g_m R_C = -39.1$；$A_{cm} = -g_m R_C/[1 + 2g_m R_{\text{TAIL}}(1 + 1/\beta_0)] \approx -R_C/(2R_{\text{TAIL}}) = -0.0050$；CMRR $\approx 1 + 2g_m R_{\text{TAIL}} \approx 7860$。
- $R_{id} = 2r_\pi = 1.02$ MΩ；$R_{ic} = r_\pi + (\beta_0+1)2R_{\text{TAIL}} = 4.02$ GΩ。
- 影响：$r_b$ 使 $R_{id}$ 增加 2$r_b$、$R_{ic}$ 增加 $r_b$（在这样小的电流下可忽略，因为 $r_\pi \gg r_b$），并使增益乘以 $r_\pi/(r_\pi + r_b)$；有限 $V_A$ 给出 $r_o = V_A/I_C \approx 12.8$ MΩ，使 $A_{dm}$ 降为 $-g_m(R_C\|r_o) \approx -38.8$，对 $A_{cm}$ 几乎没有影响，但会对共模输入形成分流：在共模半边电路（half circuit）中，$r_o$（经 $R_C$）在发射极处与 $2R_{\text{TAIL}}$ 并联，因此 $R_{ic}$ 降至 ≈ 1.6 GΩ。
