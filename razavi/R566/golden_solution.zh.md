$$\frac{V_{out}}{V_{in}}(s) = -\frac{C_1\,(A_v - R_{out}C_2s)}{C_1 + (1+A_v)C_2 + R_{out}C_1C_2s} = -\frac{C_1}{C_2}\cdot\frac{A_v - R_{out}C_2s}{1 + A_v + \dfrac{C_1}{C_2} + R_{out}C_1s}$$
代入给定数值：$\dfrac{V_{out}}{V_{in}} = -4\,\dfrac{A_v - (0.5\ \mathrm{pF})R_{out}s}{5 + A_v + (2\ \mathrm{pF})R_{out}s}$。

特点：低频增益为 $-4A_v/(5+A_v)$（$A_v$ 很大时 → −4）；在 $s = A_v/(R_{out}C_2)$ 处有一个右半平面零点（right-half-plane zero），它来自经 $C_2$ 流入 $R_{out}$ 的前馈（feedforward）；在 $s = -(1 + A_v + C_1/C_2)/(R_{out}C_1)$ 处有一个极点；在极高频率下增益趋于 +1（电容把 $V_{in}$ 直接耦合到输出端）。

推导：
- 在 X 处列 KCL：$C_1s(V_{in} - V_X) = C_2s(V_X - V_{out})$ → $V_X = (C_1V_{in} + C_2V_{out})/(C_1 + C_2)$。
- 输出节点：流过 $R_{out}$ 的电流流入 $C_2$：$(-A_vV_X - V_{out})/R_{out} = C_2s(V_{out} - V_X)$ → $V_X(R_{out}C_2s - A_v) = V_{out}(1 + R_{out}C_2s)$。
- 消去 $V_X$ 即得结果。它等于把电阻反馈公式中的 $R_1 \to 1/(C_1s)$、$R_2 \to 1/(C_2s)$ 后的结果。采用诺顿形式的运放模型（$G_m$、$R_{out}$）可得到相同的结果，其中 $A_v = G_mR_{out}$。
