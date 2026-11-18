每个晶体管 $I_C \approx 10.2\ \mu$A；$A_{dm} \approx -15.2$；$A_{cm} \approx -5.0\times10^{-3}$；$R_{id} \approx 2.63$ MΩ；$R_{ic} \approx 4.0$ GΩ；CMRR ≈ 3.06×10³（≈ 69.7 dB）。

- 偏置：$V_{BE} \approx V_T\ln(I_C/I_S) \approx 0.56$ V；尾节点约为 −0.6 V，因此 $R_{\text{TAIL}}$ 额外提供约 0.44 µA：总电流约 20.4 µA，$I_E = 10.2\ \mu$A，$I_C = 10.17\ \mu$A。$g_m = 0.391$ mA/V，$r_\pi = 511$ kΩ。（取 $I_C = 10\ \mu$A 时结果变化 ≤ 2%。）
- 差模半边电路（half circuit，尾节点为交流地）：带发射极电阻 $R_E$ 的共射级：$A_{dm} = -\dfrac{g_m R_C}{1 + g_m R_E (1 + 1/\beta_0)} = -\dfrac{39.1}{1 + 1.57} = -15.2$（$\approx -R_C/(R_E + 1/g_m)$）。
- 共模半边电路：发射极电阻为 $R_E + 2R_{\text{TAIL}}$：$A_{cm} = -\dfrac{g_m R_C}{1 + g_m (R_E + 2R_{\text{TAIL}})(1 + 1/\beta_0)} \approx -\dfrac{R_C}{R_E + 2R_{\text{TAIL}}} = -4.97\times10^{-3}$。
- CMRR $= \dfrac{1 + g_m(R_E + 2R_{\text{TAIL}})(1+1/\beta_0)}{1 + g_m R_E(1+1/\beta_0)} \approx 7860/2.57 \approx 3060$。
- $R_{id} = 2\left[r_\pi + (\beta_0+1)R_E\right] = 2(511\ \mathrm{k} + 804\ \mathrm{k}) = 2.63$ MΩ。
- $R_{ic} = r_\pi + (\beta_0+1)(R_E + 2R_{\text{TAIL}}) = 0.51\ \mathrm{M} + 201 \times 20.004\ \mathrm{M} \approx 4.02$ GΩ。
- 与无负反馈的差分对相比（$A_{dm} \approx -39$，CMRR ≈ 7900，$R_{id} \approx 1.02$ MΩ）：$R_E$ 以牺牲差模增益和 CMRR 为代价，换取了更高的差模输入电阻（以及更宽的线性输入范围）；$A_{cm}$ 和 $R_{ic}$ 几乎不变。
