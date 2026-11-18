手工分析：$I_{C1} \approx 1.05$ mA，$I_{C2} \approx 70.9$ mA，$R_i \approx 1.90$ MΩ，$v_o/v_i \approx 0.990$，以及（相同假设、理想输入源）$R_o \approx 0.49\ \Omega$。

- 直流：$V_O = 5 - 0.7 - 0.7 = 3.6$ V，50 Ω 中的电流为 72 mA；（跨接在 $V_{BE2}$ 两端的）1 kΩ 电阻流过 0.7 mA，因此 $I_{E2} = 71.3$ mA，$I_{C2} = 70.9$ mA，$I_{B2} = 0.355$ mA；$I_{E1} = I_{B2} + 0.7\ \mathrm{mA} = 1.055$ mA，$I_{C1} = 1.05$ mA。
- 小信号：$g_{m1} = 40.4$ mA/V，$r_{\pi1} = 4.95$ kΩ；$g_{m2} = 2.73$ A/V，$r_{\pi2} = 73.3\ \Omega$。令 $R_p = r_{\pi2}\|1\ \mathrm{k\Omega} = 68.3\ \Omega$。$Q_1$ 发射极处的阻抗为 $Z_1 = R_p + 50(1 + g_{m2}R_p) = 9.44$ kΩ，因此 $R_i = r_{\pi1} + 201 Z_1 = 1.90$ MΩ。
- 增益：$v_o/v_i = 201 \times 50(1 + g_{m2}R_p)/R_i = 0.990$。
- 输出电阻：$Q_1$ 的发射极向 $Q_2$ 的基极呈现 $\approx r_{\pi1}/201 = 24.7\ \Omega$ 的电阻，因此从 $Q_2$ 发射极看进去为 $\approx (24.7 + 73.3)/201 \approx 0.49\ \Omega$，再与 50 Ω 并联 → $R_o \approx 0.49\ \Omega$。
- SPICE 模型带来的变化：取 $I_S = 5\times10^{-15}$ A 时，两个基极-发射极压降约为 0.68 V 和 0.79 V，因此 $V_O \approx 3.53$ V，$I_{C1} \approx 1.13$ mA，$I_{C2} \approx 69.5$ mA（取 RB = 0、VAF = ∞ 时，小信号结果仍约为 1.90 MΩ、0.990、0.49 Ω）。取 RB = 200 Ω 时，$r_{b2}$ 在输出电阻中起主导作用：$R_o \approx 1.5\ \Omega$，$R_i \approx 1.5$–1.6 MΩ，增益 ≈ 0.97。
