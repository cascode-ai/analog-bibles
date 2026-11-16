在 $t_0$ 之后 ≈ 0.73 ns（饱和区中 ≈ 49 ps，加上线性区中 ≈ 684 ps）。

- $\beta = \mu_nC_{ox}W/L = 134\ \mu\mathrm{A/V^2} \times 40 = 5.36$ mA/V²，$V_{DD} - V_{TH} = 2.3$ V。源极是接地的输入端，因此 $V_{SB} = 0$，没有体效应（body effect）。
- 饱和区（$V_{out}$ 从 3 V 降到 2.3 V）：恒定电流 $\tfrac12\beta(2.3)^2 = 14.2$ mA，所以 $t_1 = 2V_{TH}C_H/[\beta(V_{DD} - V_{TH})^2] = 0.7\ \mathrm{V} \times 1\ \mathrm{pF}/14.2\ \mathrm{mA} = 49.4$ ps。
- 线性区：$C_H\,dV_{out}/dt = -\beta[(V_{DD} - V_{TH})V_{out} - V_{out}^2/2]$。其解为 $V_{out} = \dfrac{2(V_{DD} - V_{TH})e^{-u}}{1 + e^{-u}}$，其中 $u = \beta(V_{DD} - V_{TH})(t - t_1)/C_H$，$C_H/[\beta(V_{DD} - V_{TH})] = 81.1$ ps。
- 当 $V_{out} = 1$ mV 时：$e^{-u} = 0.001/(4.6 - 0.001)$，所以 $u = 8.43$，$t - t_1 = 684$ ps。
- 总计：49 + 684 ≈ 733 ps（直接数值积分也得到相同结果）。
