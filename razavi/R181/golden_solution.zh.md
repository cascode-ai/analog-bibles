以 $V_{in1} = V_{in2} = 1.5$ V 为中心的反相、奇对称 S 形曲线：$V_{in1}$ 较低时 $V_{out} = +V_{sat}$，然后以斜率 $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}(1/g_{m3}\|R_1/2)$ 过零，$V_{in1}$ 较高时 $V_{out} = -V_{sat}$，其中 $0 < V_{sat} < \sqrt{2I_{SS}/\beta_p}$。
- 输入共模（common-mode）电平保持在 1.5 V，因此除了在 $|V_{in1} - V_{in2}| < \sqrt{2I_{SS}/\beta_n}$（$V_{in1} = 1.5$ V 附近的一个窄窗口）内以外，差分对把全部 $I_{SS}$ 导向一边；在窗口之外 $V_{out}$ 是平的。
- 平衡时 $R_1$ 中没有电流；两个输出都位于 $V_{DD} - |V_{THP}| - \sqrt{I_{SS}/\beta_p}$。对差分信号而言，$R_1$ 的中点是虚地（virtual ground），因此每一边看到 $1/g_{m3}\|R_1/2$。
- 饱和电平：$M_1$ 截止时，二极管 $M_3$ 的电流 $I_R$ 经 $R_1$ 流入右侧节点，$M_4$ 提供 $I_{SS} - I_R$：$V_{sat} = I_RR_1 = \sqrt{2/\beta_p}\,(\sqrt{I_{SS} - I_R} - \sqrt{I_R})$。因此 $R_1$ 较小时 $V_{sat} \approx I_{SS}R_1/2$，$R_1 \to \infty$ 时趋近于普通二极管负载的值 $\sqrt{2I_{SS}/\beta_p}$。截止一侧的输出位于 $2.2\ \mathrm{V} - \sqrt{2I_R/\beta_p}$：$R_1$ 较大时（$I_R \to 0$）略低于 2.2 V，$R_1$ 较小时（$I_R \to I_{SS}/2$）接近平衡电平 $2.2 - \sqrt{I_{SS}/\beta_p}$。
- 与普通二极管负载相比，$R_1$ 同时降低了增益和摆幅。
