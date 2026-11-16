# 详细步骤 - R371

**思路。** 计入两个沟道噪声电流，对跟随器输出节点列基尔霍夫电流定律（KCL）方程，再通过跟随器的增益（此处为 1）把输出噪声折算到输入端。两项贡献的均方根之比确定 $g_{m2}$，再由平方律得到 $(W/L)_2$ 和 $V_{ov2}$。摆幅的下限由 $M_2$ 的饱和条件决定，上限为 $V_{DD} - V_{GS1}$。

### 第 1 步 — 小信号噪声模型（small-signal noise model）与输出噪声

噪声源为 $M_1$ 漏源之间的 $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$，以及从输出端到地的 $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$。流入输出节点的是 $g_{m1}v_{gs1} = g_{m1}(v_{in} - v_{out})$ 和 $I_{n1}$，两者都来自漏极（$V_{DD}$，交流地）；$I_{n2}$ 从输出节点流向地。（$M_2$ 的栅极和源极电位固定，因此其受控源为零；由于 $\lambda = 0$ 且没有体效应，不存在 $r_O$ 或 $g_{mb}$ 项。）

<!-- diagram: diagram-01.cir -->

对输出节点列 KCL（无外接负载）：

$$g_{m1}(v_{in} - v_{out}) + I_{n1} - I_{n2} = 0 .$$

关闭噪声源时，$v_{out} = v_{in}$，因此 $A_v = 1$。输入端接地时：

$$
\begin{aligned}
-g_{m1}v_{out} + I_{n1} - I_{n2} &= 0\\
v_{out} &= \frac{I_{n1} - I_{n2}}{g_{m1}}.
\end{aligned}
$$

两个噪声电流看到的都是跟随器的输出电阻 $1/g_{m1}$，并且它们互不相关，因此功率相加：

$$\overline{V_{n,out}^2} = \frac{4kT\gamma g_{m1} + 4kT\gamma g_{m2}}{g_{m1}^2}.$$

### 第 2 步 — 输入参考噪声与 1/5 条件

除以 $A_v^2 = 1$：

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT\gamma g_{m2}}{g_{m1}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right).$$

第一项来自 $M_1$，第二项来自 $M_2$。两者的**均方根**之比为

$$\frac{\sqrt{4kT\gamma g_{m2}/g_{m1}^2}}{\sqrt{4kT\gamma/g_{m1}}} = \sqrt{\frac{g_{m2}}{g_{m1}^2}\cdot g_{m1}} = \sqrt{\frac{g_{m2}}{g_{m1}}}.$$

令其等于 1/5：

$$
\begin{aligned}
\sqrt{\frac{g_{m2}}{g_{m1}}} &= \frac15\\
\frac{g_{m2}}{g_{m1}} &= \frac{1}{25}\\
g_{m2} &= \frac{g_{m1}}{25} = \frac{10\ \mathrm{mS}}{25} = 0.4\ \mathrm{mS}.
\end{aligned}
$$

### 第 3 步 — $M_2$ 的尺寸与过驱动电压（overdrive voltage）

取 $I_D = 0.1$ mA，由 $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$ 得：

$$
\begin{aligned}
\left(\frac{W}{L}\right)_2 &= \frac{g_{m2}^2}{2\mu_nC_{ox}I_D} = \frac{(0.4\times10^{-3}\ \mathrm{A/V})^2}{2\,(134\times10^{-6}\ \mathrm{A/V^2})(0.1\times10^{-3}\ \mathrm{A})}\\
&= \frac{1.6\times10^{-7}}{2.68\times10^{-8}} = 5.97 \approx 6 .
\end{aligned}
$$

$$V_{ov2} = \frac{2I_D}{g_{m2}} = \frac{2\times0.1\ \mathrm{mA}}{0.4\ \mathrm{mS}} = 0.5\ \mathrm{V}.$$

（验证：$\tfrac12(134\ \mu\mathrm{A/V^2})(5.97)(0.5\ \mathrm{V})^2 = 0.1$ mA ✓。）于是偏置电压为 $V_b = V_{TH} + V_{ov2} = 0.7 + 0.5 = 1.2$ V。

作为对比，$V_{ov1} = 2I_D/g_{m1} = 2\times0.1\ \mathrm{mA}/10\ \mathrm{mS} = 0.02$ V。低噪声电流源在给定电流下需要较小的 $g_m$，因此 $g_{m2} = g_{m1}/25$ 意味着 $V_{ov2}$ 是 $V_{ov1}$ 的 25 倍（0.5 V 对 0.02 V），其代价是输出范围底部的电压余度（headroom）。

### 第 4 步 — 最大输出摆幅

**最低输出。** 只要 $V_{DS2} = V_{out} \ge V_{ov2}$，$M_2$ 就保持饱和：

$$V_{out,min} = V_{ov2} = 0.5\ \mathrm{V}.$$

**最高输出。** 输出电压比输入电压低 $V_{GS1} = V_{TH} + V_{ov1}$，而输入电压不能超过 $V_{DD}$：

$$V_{out,max} = V_{DD} - V_{TH} - V_{ov1} = 3 - 0.7 - 0.02 = 2.28\ \mathrm{V}.$$

$M_1$ 始终保持饱和，因为其漏极电压 $V_{DD} \ge V_{in}$：$V_{DS1} = V_{DD} - V_{out} \ge V_{GS1} > V_{GS1} - V_{TH}$。

**摆幅：**

$$V_{out,max} - V_{out,min} = 2.28 - 0.5 = 1.78\ \mathrm{V}.$$

**关于体效应的补充说明**（本题忽略）。若 $M_1$ 的衬底接地并取典型值（$\gamma_{body} = 0.45\ \mathrm{V^{1/2}}$，$2|\phi_F| = 0.9$ V），求解 $V_{out} = 2.28 - 0.45(\sqrt{0.9 + V_{out}} - \sqrt{0.9})$ 得 $V_{out,max} \approx 1.95$ V（$V_{TH1} \approx 1.03$ V），摆幅缩小到约 1.45 V。

### 结果

$$\overline{V_{n,in}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right), \qquad \sqrt{\frac{g_{m2}}{g_{m1}}} = \frac15 \;\Rightarrow\; g_{m2} = \frac{g_{m1}}{25} = 0.4\ \mathrm{mS},$$

$$\left(\frac{W}{L}\right)_2 = \frac{g_{m2}^2}{2\mu_nC_{ox}I_D} \approx 6.0, \qquad V_{ov2} = 0.5\ \mathrm{V}.$$

输出范围：$0.5\ \mathrm{V} \le V_{out} \le V_{DD} - V_{TH} - V_{ov1} = 2.28$ V，即最大摆幅**约为 1.78 V**。

**常见错误。** 把 1/5 的比例用在噪声**功率**上（$g_{m2} = g_{m1}/5 = 2$ mS，$(W/L)_2 \approx 149$）。该比例针对的是均方根电压，因此功率之比为 $1/25$。

**常见错误。** 把 $M_2$ 的贡献写成 $4kT\gamma/g_{m2}$，仿佛 $M_2$ 是输入器件。它的噪声电流经 $1/g_{m1}$ 转换为电压，得到 $4kT\gamma g_{m2}/g_{m1}^2$：$g_{m2}$ 越小，噪声**越小**。

**常见错误。** 把输出下限取为 0 V。$M_2$ 需要 $V_{DS2} \ge V_{ov2} = 0.5$ V 才能保持饱和；为降低噪声而采用的大过驱动电压恰好消耗了这么多摆幅。
