# 详细步骤 - R428

**思路。** 这个设计题有多种正确答案。把功耗预算分配为各支路电流，把摆幅指标转化为输出端四个叠接晶体管的过驱动电压（overdrive voltage）预算，用平方律（square law）确定每个器件的尺寸，选择偏置电压，用折叠式共源共栅的公式计算增益，并检验输入共模电平能否达到 0 V。可以自由选择的量都已标明。

### 第 1 步 — 电流预算

把 $M_1$、$M_2$ 的漏极记为 X 和 Y，它们就是折叠节点（folding node）。$V_{DD} = 3$ V 时 $P = 6$ mW 允许 $6\ \mathrm{mW}/3\ \mathrm{V} = 2$ mA 的电流，由尾电流源以及 $M_9$、$M_{10}$ 从 $V_{DD}$ 汲取。**选择：** $I_{SS} = 1$ mA（每个输入器件 0.5 mA），$|I_{D9}| = |I_{D10}| = 0.5$ mA：

$$I_{SS} + |I_{D9}| + |I_{D10}| = 1 + 0.5 + 0.5 = 2\ \mathrm{mA}.$$

在 X 处，$M_5$ 必须同时吸收输入器件和共源共栅支路的电流：

$$I_{D5} = I_{D6} = 0.5 + 0.5 = 1\ \mathrm{mA},\qquad I_{D3} = I_{D4} = |I_{D7}| = |I_{D8}| = 0.5\ \mathrm{mA}.$$

### 第 2 步 — 摆幅预算

2.4 V 峰峰值的差分摆幅意味着每个输出的峰峰值为 $2.4/2 = 1.2$ V。每个输出可以低到 $V_{OD5} + V_{OD3}$，高到 $V_{DD} - |V_{OD9}| - |V_{OD7}|$，因此

$$V_{DD} - \big(V_{OD3} + V_{OD5} + |V_{OD7}| + |V_{OD9}|\big) \ge 1.2\ \mathrm{V}\ \Longrightarrow\ V_{OD3} + V_{OD5} + |V_{OD7}| + |V_{OD9}| \le 1.8\ \mathrm{V}.$$

**选择**（用满整个预算；取更小的值可以留出余量，但器件会更大）：

$$V_{OD5} = 0.5\ \mathrm{V}\ (\text{it carries 1 mA}),\quad V_{OD3} = 0.4\ \mathrm{V},\quad |V_{OD7}| = |V_{OD9}| = 0.45\ \mathrm{V}.$$

于是每个输出在 $0.5 + 0.4 = 0.9$ V 与 $3 - 0.45 - 0.45 = 2.1$ V 之间摆动，即围绕 1.5 V 的输出共模电平摆动 1.2 V 峰峰值，该共模电平由共模反馈（common-mode feedback）设定。输入对管和尾电流源不在输出叠层中。**选择：** $|V_{OD1,2}| = 0.3$ V（以获得较大的 $g_m$），$|V_{OD,tail}| = 0.4$ V。

### 第 3 步 — 器件尺寸（$L = 0.5\ \mu$m）

利用 $W/L = 2|I_D|/(\mu C_{ox}V_{OD}^2)$：

$$
\begin{aligned}
\left(\frac WL\right)_{5,6} &= \frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{V})^2} = \frac{2\times10^{-3}}{33.5\times10^{-6}} = 60,\\
\left(\frac WL\right)_{3,4} &= \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.4\ \mathrm{V})^2} = \frac{1\times10^{-3}}{21.4\times10^{-6}} = 47,\\
\left(\frac WL\right)_{7\text{–}10} &= \frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.45\ \mathrm{V})^2} = \frac{1\times10^{-3}}{7.78\times10^{-6}} = 129,\\
\left(\frac WL\right)_{1,2} &= \frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2} = \frac{1\times10^{-3}}{3.46\times10^{-6}} = 289,\\
\left(\frac WL\right)_{tail} &= \frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.4\ \mathrm{V})^2} = \frac{2\times10^{-3}}{6.14\times10^{-6}} = 326 .
\end{aligned}
$$

| 器件 | 类型 | $\lvert I_D\rvert$ | $\lvert V_{OD}\rvert$ | $W/L$ | $W$（$L = 0.5\ \mu$m） |
|---|---|---|---|---|---|
| $M_1$、$M_2$ | PMOS | 0.5 mA | 0.30 V | 289 | 145 μm |
| 尾电流管 | PMOS | 1 mA | 0.40 V | 326 | 163 μm |
| $M_3$、$M_4$ | NMOS | 0.5 mA | 0.40 V | 47 | 23 μm |
| $M_5$、$M_6$ | NMOS | 1 mA | 0.50 V | 60 | 30 μm |
| $M_7$–$M_{10}$ | PMOS | 0.5 mA | 0.45 V | 129 | 64 μm |

### 第 4 步 — 偏置电压（一组自洽的取值）

- **$V_{b4}$**（$M_5$/$M_6$ 的栅极）：$V_{TH} + V_{OD5} = 0.7 + 0.5 = 1.2$ V。
- **$V_{b1}$**（$M_3$/$M_4$ 的栅极）：把 X 设在 $V_{OD5} = 0.5$ V，以获得完整的低端范围。此时 $M_3$ 的源极比其接地的衬底高 0.5 V：
$$V_{TH3} = 0.7 + 0.45\left(\sqrt{0.9 + 0.5} - \sqrt{0.9}\right) = 0.7 + 0.45(1.1832 - 0.9487) = 0.806\ \mathrm{V},$$
$$V_{b1} = V_X + V_{TH3} + V_{OD3} = 0.5 + 0.806 + 0.4 = 1.71\ \mathrm{V}.$$
- **$V_{b3}$**（$M_9$/$M_{10}$ 的栅极）：$V_{DD} - |V_{THP}| - |V_{OD9}| = 3 - 0.8 - 0.45 = 1.75$ V。
- **$V_{b2}$**（$M_7$/$M_8$ 的栅极）：$M_7$ 的源极位于 $V_{DD} - |V_{OD9}| = 2.55$ V，$|V_{SB}| = 0.45$ V：
$$|V_{TH7}| = 0.8 + 0.4\left(\sqrt{0.8 + 0.45} - \sqrt{0.8}\right) = 0.8 + 0.4(1.1180 - 0.8944) = 0.889\ \mathrm{V},$$
$$V_{b2} = 2.55 - 0.889 - 0.45 = 1.21\ \mathrm{V}.$$
- **尾电流管栅极：** $V_{DD} - 0.8 - 0.4 = 1.8$ V。

### 第 5 步 — 电压增益

利用 $g_m = 2|I_D|/|V_{OD}|$ 和 $r_O = 1/(\lambda|I_D|)$：

$$
\begin{aligned}
g_{m1} &= \frac{2(0.5\ \mathrm{mA})}{0.3\ \mathrm{V}} = 3.33\ \mathrm{mS}, & r_{O1} &= \frac{1}{(0.2)(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega},\\
g_{m3} &= \frac{2(0.5\ \mathrm{mA})}{0.4\ \mathrm{V}} = 2.5\ \mathrm{mS}, & r_{O3} &= \frac{1}{(0.1)(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\\
r_{O5} &= \frac{1}{(0.1)(1\ \mathrm{mA})} = 10\ \mathrm{k\Omega}, & g_{m7} &= \frac{2(0.5\ \mathrm{mA})}{0.45\ \mathrm{V}} = 2.22\ \mathrm{mS},\\
r_{O7} = r_{O9} &= \frac{1}{(0.2)(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega}.
\end{aligned}
$$

**跨导（transconductance）。** $M_1$ 的信号电流流入 X，X 看到的是 $M_3$ 的源极（约 $1/g_{m3} = 400\ \Omega$）与 $r_{O1}\parallel r_{O5} = 5\ \mathrm{k\Omega}$ 的并联，因此几乎全部电流都被折叠到输出端：$G_m \approx g_{m1}$。

**每一侧的输出电阻（output resistance）。** 向下看，$M_3$ 由 $r_{O1}\parallel r_{O5}$ 提供源极负反馈（source degeneration）；向上看，$M_7$ 由 $r_{O9}$ 提供负反馈：

$$
\begin{aligned}
R_{down} &\approx g_{m3}r_{O3}(r_{O1}\parallel r_{O5}) = (2.5\ \mathrm{mS})(20\ \mathrm{k\Omega})(5\ \mathrm{k\Omega}) = 250\ \mathrm{k\Omega},\\
R_{up} &\approx g_{m7}r_{O7}r_{O9} = (2.22\ \mathrm{mS})(10\ \mathrm{k\Omega})(10\ \mathrm{k\Omega}) = 222\ \mathrm{k\Omega},\\
R_{out} &= R_{down}\parallel R_{up} = \frac{250\times222}{250 + 222}\ \mathrm{k\Omega} = 118\ \mathrm{k\Omega}.
\end{aligned}
$$

$$A_v \approx g_{m1}\Big\{\big[g_{m3}r_{O3}(r_{O1}\parallel r_{O5})\big]\parallel\big[g_{m7}r_{O7}r_{O9}\big]\Big\} = (3.33\ \mathrm{mS})(118\ \mathrm{k\Omega}) \approx 390 .$$

**若计入共源共栅管的体效应**，则 $g_m \to g_m(1 + \eta)$，其中 $\eta_3 = 0.45/(2\sqrt{0.9 + 0.5}) = 0.19$，$\eta_7 = 0.4/(2\sqrt{0.8 + 0.45}) = 0.18$：$R_{down} = 298\ \mathrm{k\Omega}$，$R_{up} = 262\ \mathrm{k\Omega}$，$R_{out} = 139\ \mathrm{k\Omega}$，$A_v \approx 460$。这类结构的任何合理设计都会给出几百的增益。

### 第 6 步 — 输入共模电平能否为 0 V？

输入器件是 PMOS，因此其源极位于栅极**之上**：$V_P = V_{in,CM} + |V_{GS1}|$。当 $V_{in,CM} = 0$、衬底接 $V_{DD}$ 时，$|V_{TH1}| = 0.8 + 0.4(\sqrt{0.8 + 3 - V_P} - \sqrt{0.8})$。从 $V_P = 1.4$ V 开始迭代 $V_P = |V_{TH1}| + 0.3$：$|V_{TH1}| = 0.8 + 0.4(\sqrt{2.4} - 0.894) = 1.062$ V，因此 $V_P = 1.362$ V；再算得 $|V_{TH1}| = 0.8 + 0.4(\sqrt{2.438} - 0.894) = 1.067$ V：

$$|V_{TH1}| \approx 1.07\ \mathrm{V},\qquad V_P \approx 1.37\ \mathrm{V}.$$

- **尾电流源的电压余度（headroom）：** 它需要 $|V_{DS}| \ge 0.4$ V，而实际有 $3 - 1.37 = 1.63$ V。✓
- **输入器件饱和：** PMOS 的漏极最多可以比其栅极高一个阈值电压：
$$V_X \le V_{in,CM} + |V_{TH1}| = 0 + 1.07 = 1.07\ \mathrm{V}.$$
- **$M_5$ 饱和：** $V_X \ge V_{OD5} = 0.5$ V。

当 $V_{b1}$ 使 $V_X = 0.5$ V 时（第 4 步），两个条件都满足：

$$0.5\ \mathrm{V} \le V_X = 0.5\ \mathrm{V} \le 1.07\ \mathrm{V}.\ \checkmark$$

所以答案是**能**：输入共模电平可以为 0 V，甚至可以略为负值（低至约 $V_X - |V_{TH1}| \approx -0.6$ V），这是 PMOS 输入折叠式共源共栅结构的一个重要优点。

### 结果

一种自洽的设计：总电流 2 mA（$I_{SS} = 1$ mA，每条共源共栅支路 0.5 mA，$M_5$/$M_6$ 中 1 mA）；过驱动电压预算 $V_{OD3} + V_{OD5} + |V_{OD7}| + |V_{OD9}| = 0.4 + 0.5 + 0.45 + 0.45 = 1.8$ V，使每个输出的峰峰值摆幅为 1.2 V（差分 2.4 V）；$(W/L)_{5,6} \approx 60$，$(W/L)_{3,4} \approx 47$，$(W/L)_{7\text{–}10} \approx 129$，$(W/L)_{1,2} \approx 290$（过驱动电压 0.3 V），尾电流管 $\approx 326$，均取 $L = 0.5\ \mu$m。

$$A_v \approx g_{m1}\Big\{\big[g_{m3}r_{O3}(r_{O1}\parallel r_{O5})\big]\parallel\big[g_{m7}r_{O7}r_{O9}\big]\Big\} \approx 390\quad(\approx 460\ \text{with the body effect of the cascodes}).$$

输入共模电平可以为零：采用 PMOS 输入时，$V_P \approx 1.37$ V 为尾电流源留出了充足的余度；只要 $V_X \le V_{in,CM} + |V_{TH1}| \approx 1.07$ V，输入器件就保持饱和，而 $M_5$ 只要求 $V_X \ge 0.5$ V。

**常见错误。** 把 2.4 V 理解为每个输出的摆幅。它是差分摆幅，因此每个输出只需 1.2 V 峰峰值，过驱动电压预算为 1.8 V，而不是 0.6 V。

**常见错误。** 只按共源共栅支路的电流（0.5 mA）来确定 $M_5$/$M_6$ 的尺寸。折叠节点必须吸收两路电流，共 1 mA。

**常见错误。** 把增益算成 $g_{m1}(r_{O1}\parallel r_{O5})$，或者认为 0 V 输入不可能实现。输出端是共源共栅节点（约 $g_mr_O^2$），而 PMOS 对管位于其栅极**之上**，因此 0 V 输入只是使 P 点处于 1.4 V 附近。
