# 详细步骤 - R366

**思路。** 先求出噪声指标所要求的 $g_{m2}$，再由它求出 $M_2$ 的过驱动电压。$M_2$ 处于饱和区边缘时，输入节点的电压随之确定；再加上 $V_{GS1}$（计入体效应），即得最小的 $V_b$。输出摆幅的下限由 $M_1$ 的饱和条件决定，上限由 $V_{DD}$ 决定。

### 第 1 步 — 噪声指标所要求的跨导（transconductance）

把输入节点（$M_1$ 的源极、$M_2$ 的漏极）记为 X。输入端开路时，在 X 点应用基尔霍夫电流定律（KCL），可知 $M_1$ 的沟道电流必须等于 $M_2$ 的噪声电流 $I_{n2}$：$M_1$ 自身的噪声相互抵消，而 $I_{n2}$ 像输入电流一样经 $M_1$ 流入 $R_D$。跨阻（transimpedance）为 $R_D$（共栅级的电流增益为 1），因此

$$\overline{I_{n,in}^2} = \frac{4kT}{R_D} + 4kT\gamma g_{m2}.$$

令 $M_2$ 贡献的均方根值为 $R_D$ 贡献的 1/5：

$$
\begin{aligned}
\sqrt{4kT\gamma g_{m2}} &= \frac15\sqrt{\frac{4kT}{R_D}}\\
4kT\gamma g_{m2} &= \frac{1}{25}\cdot\frac{4kT}{R_D}\\
g_{m2} &= \frac{1}{25\gamma R_D} = \frac{1}{25\times\tfrac23\times1000\ \Omega} = 60\ \mu\mathrm{S}.
\end{aligned}
$$

由 $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$ 得：

$$\left(\frac{W}{L}\right)_2 = \frac{g_{m2}^2}{2\mu_nC_{ox}I_{D2}} = \frac{(60\ \mu\mathrm{S})^2}{2\,(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{mA})} = \frac{3.6\times10^{-9}}{1.34\times10^{-7}} = 0.027 .$$

### 第 2 步 — $M_2$ 的过驱动电压与节点 X 的电压

$$V_{ov2} = \frac{2I_{D2}}{g_{m2}} = \frac{2\times0.5\ \mathrm{mA}}{60\ \mu\mathrm{S}} = \frac{1\times10^{-3}\ \mathrm{A}}{60\times10^{-6}\ \mathrm{A/V}} = 16.7\ \mathrm{V}.$$

（验证：$\tfrac12(134\ \mu\mathrm{A/V^2})(0.027)(16.7\ \mathrm{V})^2 = 0.5$ mA。）

$M_2$ 的源极接地，漏极为 X，因此**在线性区边缘**有

$$V_X = V_{DS2} = V_{ov2} = 16.7\ \mathrm{V}.$$

$M_2$ 的源极和衬底都接地，因此它没有体效应。

### 第 3 步 — $M_1$ 的栅源电压

由 $(W/L)_1 = 50/0.5 = 100$ 得：

$$V_{ov1} = \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)_1}} = \sqrt{\frac{2\times0.5\times10^{-3}\ \mathrm{A}}{(134\times10^{-6}\ \mathrm{A/V^2})(100)}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

$M_1$ 的源极电压为 $V_X$，衬底接地，因此 $V_{SB1} = V_X = 16.7$ V，且

$$V_{TH1} = V_{TH0} + \gamma_{body}\left(\sqrt{2|\phi_F| + V_{SB1}} - \sqrt{2|\phi_F|}\right),$$

$$
\begin{aligned}
\sqrt{2|\phi_F| + V_{SB1}} &= \sqrt{0.9 + 16.67}\ \sqrt{\mathrm{V}} = \sqrt{17.57} = 4.191\ \sqrt{\mathrm{V}},\\
\sqrt{2|\phi_F|} &= \sqrt{0.9} = 0.949\ \sqrt{\mathrm{V}},\\
V_{TH1} &= 0.7 + 0.45\,(4.191 - 0.949) = 0.7 + 0.45\times3.243 = 0.7 + 1.459 = 2.16\ \mathrm{V}.
\end{aligned}
$$

因此

$$V_{GS1} = V_{TH1} + V_{ov1} = 2.16 + 0.273 = 2.43\ \mathrm{V}$$

（若忽略体效应，则为 $0.7 + 0.273 = 0.97$ V）。

### 第 4 步 — 最小 $V_b$

当 X 处于其允许的最低电压时，$V_b$ 取最小值：

$$V_{b,min} = V_X + V_{GS1} = V_{ov2} + V_{TH1} + V_{ov1}.$$

$$
\begin{aligned}
\text{with body effect:} \quad V_{b,min} &= 16.67 + 2.16 + 0.273 = 19.1\ \mathrm{V},\\
\text{without body effect:} \quad V_{b,min} &= 16.67 + 0.70 + 0.273 = 17.6\ \mathrm{V}.
\end{aligned}
$$

无论哪种情况，$V_b$ 都必须远高于 $V_{DD} = 3$ V，而片上偏置电路无法提供这样的电压。

### 第 5 步 — 最大允许输出摆幅

**下限。** 当 $V_{out} - V_X \ge V_{ov1}$，即 $V_{out} \ge V_b - V_{TH1}$ 时，$M_1$ 保持饱和：

$$V_{out,min} = V_X + V_{ov1} = V_{ov2} + V_{ov1} = 16.67 + 0.273 = 16.94\ \mathrm{V}.$$

**上限。** 输出端经 $R_D$ 接到电源，其电压不可能高于 $V_{out,max} = V_{DD} = 3$ V。

**允许的摆幅：**

$$V_{out,max} - V_{out,min} = V_{DD} - V_{ov1} - V_{ov2} = 3 - 0.273 - 16.67 = -13.9\ \mathrm{V} < 0 .$$

“摆幅”为负，意味着**不存在能使两个晶体管同时饱和的输出电压**。即使是静态输出电压 $V_{DD} - I_DR_D = 3 - 0.5 = 2.5$ V，也远低于 $M_1$ 所需的 16.94 V，因此电路无法按指标偏置。

### 第 6 步 — 指标为何无法满足，以及 3 V 电源所允许的范围

要得到正的摆幅，需要 $V_{ov2} < V_{DD} - V_{ov1}$，即

$$g_{m2} = \frac{2I_D}{V_{ov2}} > \frac{2I_D}{V_{DD} - V_{ov1}} = \frac{1\ \mathrm{mA}}{3 - 0.273\ \mathrm{V}} = 0.367\ \mathrm{mS},$$

这是噪声要求所允许的 60 μS 的六倍。即使在这个零摆幅的极限下，$M_2$ 的均方根噪声与 $R_D$ 的均方根噪声之比也将是

$$\sqrt{\frac{4kT\gamma g_{m2}}{4kT/R_D}} = \sqrt{\gamma g_{m2}R_D} = \sqrt{\tfrac23\times0.367\times10^{-3}\times1000} = \sqrt{0.244} = 0.49,$$

约为二分之一，而不是五分之一：一个 0.5 mA 的电流源只有在过驱动电压极大时才能具有很小的 $g_m$（即低噪声），而这会消耗电压余度（headroom）。

### 结果

噪声要求迫使 $g_{m2} = 1/(25\gamma R_D) = 60\ \mu$S，即 $V_{ov2} = 2I_D/g_{m2} \approx 16.7$ V。$M_2$ 处于饱和区边缘时：

$$V_{b,min} = V_{ov2} + V_{TH1} + V_{ov1} \approx 16.7 + 2.16 + 0.27 \approx 19.1\ \mathrm{V}$$

（若忽略 $M_1$ 的体效应，则 ≈ 17.6 V），远高于 $V_{DD} = 3$ V。

输出电压必须保持在 $V_b - V_{TH1} = V_{ov2} + V_{ov1} \approx 16.9$ V 以上，因此允许的摆幅 $V_{DD} - V_{ov1} - V_{ov2} \approx -13.9$ V 为负值：**不存在可用的输出摆幅**，在 3 V 电源下该设计不可行。

**常见错误。** 为 $M_2$ 假设一个“典型”的过驱动电压（比如 0.2–0.3 V），从而得到正的摆幅。$g_{m2}$ 和 $I_{D2}$ 都已确定，$V_{ov2} = 2I_D/g_{m2} = 16.7$ V 也就随之确定。

**常见错误。** 忽略 $M_2$，把摆幅算成 $V_{DD} - V_{ov1}$。$M_1$ 的源极电压一旦低于 $V_{ov2}$，$M_2$ 就会进入线性区，因此 $V_{ov2}$ 直接叠加到最低输出电压上。

**常见错误。** 漏掉体效应公式中的 $-\sqrt{2|\phi_F|}$ 项，得到 $V_{TH1} \approx 2.6$ V 和 $V_b \approx 19.5$ V。这会使 $V_b$ 偏移零点几伏，但不改变结论。
