τ ≈ 0.47 ns，比不计 $C_{GS}$ 时得到的 0.453 ns 长约 4%。

- $C_{GS} = \tfrac23WLC_{ox} + WC_{ov} = \tfrac23(50)(0.5)(3.84\ \mathrm{fF}) + 50(0.4\ \mathrm{fF}) = 64 + 20 = 84$ fF（不计交叠电容时为 64 fF）。
- 对于差分信号，公共源极节点是交流地，因此在每个栅极上 $C_{GS}$ 与 $C_1$ 相加：反馈系数（feedback factor）变为 $C_3/(C_1 + C_{GS} + C_3) = 0.1935$。
- $\tau = \dfrac{C_3(C_1 + C_{GS})/(C_1 + C_{GS} + C_3)}{1/R_0 + G_mC_3/(C_1 + C_{GS} + C_3)} = \dfrac{0.403\ \mathrm{pF}}{0.15\ \mathrm{mS} + 0.708\ \mathrm{mS}} = 0.470$ ns（不计交叠项时为 0.466 ns），其中 $G_m$ = 3.66 mS，$R_0$ = 6.67 kΩ。
- 大环路增益（loop gain）近似 $(C_1 + C_{GS})/G_m$ 给出 0.569 ns（不计 $C_{GS}$ 时为 0.546 ns）。
