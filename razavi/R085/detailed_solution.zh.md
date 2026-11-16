# 详细步骤 - R085

**思路。** 对输出节点应用 KCL，可求出二极管连接（diode-connected）的 PMOS $M_2$ 中的电流（电流源 $I_S$ 提供了 $M_1$ 电流的一部分）。$M_1$ 的线性区边缘条件确定了 $V_{out}$，从而确定 $|V_{GS2}|$，再由平方律（square law）得到 $(W/L)_2$。在小信号模型（small-signal model）中，理想电流源相当于开路，因此 $A_v = -g_{m1}/g_{m2}$。

### 第 1 步 — $M_2$ 中的电流（输出节点的 KCL）

$I_S$ 与二极管连接的负载 $M_2$ 并联地向输出节点供电，因此 $M_1$ 吸取的电流 $I_1$ 为

$$
\begin{aligned}
I_1 &= I_S + |I_{D2}|\\
|I_{D2}| &= I_1 - I_S = 1\ \mathrm{mA} - 0.75\ \mathrm{mA} = 0.25\ \mathrm{mA}.
\end{aligned}
$$

$M_2$ 只流过 $M_1$ 电流的四分之一。两个衬底都与各自的源极相连，因此没有体效应：$V_{TH1} = 0.7$ V，$|V_{TH2}| = 0.8$ V。

### 第 2 步 — $M_1$：过驱动电压（overdrive voltage）与线性区边缘

由 $I_1 = \frac12\beta_1V_{ov1}^2$ 得：

$$
\begin{aligned}
\left(\frac{W}{L}\right)_1 &= \frac{20}{0.5} = 40,\\
\beta_1 &= (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2},\\
V_{ov1} &= \sqrt{\frac{2I_1}{\beta_1}} = \sqrt{\frac{2\,(1\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.3731\ \mathrm{V^2}} = 0.611\ \mathrm{V}.
\end{aligned}
$$

在线性区边缘，$V_{DS1} = V_{GS1} - V_{TH1}$：

$$V_{out} = V_{ov1} = 0.611\ \mathrm{V} ,$$

此时 $V_{in} = V_{TH1} + V_{ov1} = 0.7 + 0.611 = 1.311$ V。$M_1$ 的电流只由 $V_{in}$ 决定，而 $V_{out}$ 取决于负载管的尺寸，因此可以通过 $(W/L)_2$ 把 $V_{out}$ 恰好设在 0.611 V。

### 第 3 步 — 确定 $M_2$ 的尺寸

$$V_{SG2} = V_{DD} - V_{out} = 3\ \mathrm{V} - 0.611\ \mathrm{V} = 2.389\ \mathrm{V}, \qquad |V_{ov2}| = V_{SG2} - |V_{TH2}| = 2.389\ \mathrm{V} - 0.8\ \mathrm{V} = 1.589\ \mathrm{V} .$$

$M_2$ 为二极管连接，因此处于饱和区（saturation region），由 $|I_{D2}| = \frac12\mu_pC_{ox}(W/L)_2|V_{ov2}|^2$ 得

$$
\begin{aligned}
\left(\frac{W}{L}\right)_2 &= \frac{2|I_{D2}|}{\mu_pC_{ox}|V_{ov2}|^2} = \frac{2\,(0.25\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(1.589\ \mathrm{V})^2}\\
&= \frac{0.5\ \mathrm{mA}}{(38.4\ \mu\mathrm{A/V^2})(2.525\ \mathrm{V^2})} = \frac{500\ \mu\mathrm{A}}{96.98\ \mu\mathrm{A}} = 5.16 .
\end{aligned}
$$

例如，取 $L = 0.5$ μm，则 $W_2 \approx 2.6$ μm。

### 第 4 步 — 小信号模型

由于 $\lambda = 0$ 且没有体效应，$V_{DD}$ 为交流地，模型中只有一个节点 $out$：

- **$M_1$：** 从 $out$ 流向地的电流源 $g_{m1}v_{in}$。
- **$M_2$：** 源极接交流地，栅极和漏极接 $out$，因此 $v_{sg2} = -v_{out}$；它向 $out$ 注入电流 $g_{m2}v_{sg2} = -g_{m2}v_{out}$，即相当于一个接地的电阻 $1/g_{m2}$。
- **$I_S$：** 理想电流源，因此相当于**开路**。

<!-- diagram: diagram-01.cir -->

对 $out$ 节点应用 KCL：

$$
\begin{aligned}
-g_{m2}v_{out} &= g_{m1}v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2}} .
\end{aligned}
$$

### 第 5 步 — 增益的数值

对每个器件，按其各自的电流使用 $g_m = 2I_D/V_{ov}$：

$$
\begin{aligned}
g_{m1} &= \frac{2I_1}{V_{ov1}} = \frac{2\,(1\ \mathrm{mA})}{0.611\ \mathrm{V}} = 3.27\ \mathrm{mS},\\
g_{m2} &= \frac{2|I_{D2}|}{|V_{ov2}|} = \frac{2\,(0.25\ \mathrm{mA})}{1.589\ \mathrm{V}} = 0.315\ \mathrm{mS},\\
A_v &= -\frac{3.27\ \mathrm{mS}}{0.315\ \mathrm{mS}} = -10.4 .
\end{aligned}
$$

验证：$g_{m2} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(5.16)(0.25\ \mathrm{mA})} = \sqrt{9.9\times10^{-8}}\ \mathrm{A/V} = 0.315$ mS。

**为什么分流电流源能提高增益。**

$$|A_v| = \frac{2I_1/V_{ov1}}{2|I_{D2}|/|V_{ov2}|} = \frac{I_1}{|I_{D2}|}\cdot\frac{|V_{ov2}|}{V_{ov1}} = 4\times\frac{1.589}{0.611} = 10.4 .$$

电压比 $|V_{ov2}|/V_{ov1} = 2.6$ 由偏置电压确定；电流比 $I_1/|I_{D2}| = 4$ 则来自 $I_S$。若没有 $I_S$，$M_2$ 将在相同的过驱动电压下流过全部 1 mA，增益只有约 $-2.6$：从二极管连接的负载中分走电流，可以降低 $g_{m2}$，而不占用更多的电压余度（headroom）。

### 结果

$$\left(\frac{W}{L}\right)_2 = \frac{2(I_1 - I_S)}{\mu_pC_{ox}(V_{DD} - V_{ov1} - |V_{TH2}|)^2} \approx 5.16 \quad(\text{e.g. } 2.6/0.5),$$

其中 $V_{ov1} = V_{out} = 0.611$ V，$V_{in} \approx 1.311$ V。小信号增益为

$$A_v = -\frac{g_{m1}}{g_{m2}} = -\frac{3.27\ \mathrm{mS}}{0.315\ \mathrm{mS}} \approx -10.4 .$$

**常见错误。** 认为 $M_2$ 流过全部 1 mA（或 0.75 mA）。由输出节点的 KCL 可知，$M_2$ 只流过 $I_1 - I_S = 0.25$ mA，它的尺寸和 $g_m$ 都应由这一电流求出。

**常见错误。** 用 $\mu_nC_{ox}$ 或 $V_{TH} = 0.7$ V 来确定 PMOS 的尺寸。应使用 $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$ 和 $|V_{TH2}| = 0.8$ V。

**常见错误。** 在小信号模型中把理想的 $I_S$ 当作电阻。它相当于开路。
