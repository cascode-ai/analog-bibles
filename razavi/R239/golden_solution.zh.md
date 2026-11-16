$|A_v| = \dfrac{g_{m1}}{2}\,[(2r_{O2})\,\|\,r_{O4}] \approx 20.7$（从 $M_1$ 的栅极到 $V_{out}$ 为同相增益）。

- 每个输入器件流过 0.25 mA：$g_{m1} = g_{m2} = \sqrt{2(134\ \mu)(100)(0.25\ \mathrm{m})} = 2.59$ mS；$r_{O2} = 1/(0.1\times0.25\ \mathrm{mA}) = 40$ kΩ；$M_4$ 流过 $I_1 = 0.25$ mA：$r_{O4} = 1/(0.2\times0.25\ \mathrm{mA}) = 20$ kΩ。
- $G_m$：输出短路时，差分对是对称的，只有 $M_2$ 那一半信号电流到达输出端（$M_1$ 的漏极接 $V_{DD}$；$M_4$ 是固定的电流源）：$G_m = g_{m1}/2$。
- $R_{out}$：$M_2$ 以 $M_1$ 的源极阻抗作为源极负反馈（degeneration），得到 $2r_{O2}$——对于匹配器件，即使计入体效应（body effect），这一结果也精确成立；它再与 $r_{O4}$ 并联：$80\ \mathrm{k}\Omega\,\|\,20\ \mathrm{k}\Omega = 16$ kΩ。
- $|A_v| = 1.29\ \mathrm{mS}\times 16\ \mathrm{k}\Omega \approx 20.7$。
