# 详细步骤 - R434

**思路。** 这是一个开放的设计题。功耗预算决定了尾电流（tail current）；在 3 V 电源下要得到 2.4 V 的单端摆幅，输出端叠接的五个器件的过驱动电压总共只剩 0.6 V。分配这些过驱动电压，用平方律（square law）确定每个器件的尺寸，设置偏置电压（计入体效应），使起限制作用的器件恰好处于饱和边缘，并计算开环增益。可以自由选择的量都已标明。

### 第 1 步 — 电流预算

尾电流 $I_{SS}$ 由一个 NMOS 电流源（current source）晶体管实现，因此需要一定的电压余度（headroom）。$M_2$ 的栅极是普通输入端，因此输入共模（common-mode）电平可以自由选择。$V_{DD} = 3$ V 时 $P = 6\ \mathrm{mW}$ 总共允许 2 mA 的电流，全部流过尾电流源（忽略偏置电路）：

$$I_{SS} = 2\ \mathrm{mA},\qquad I_D = 1\ \mathrm{mA}\ \text{in each branch}.$$

### 第 2 步 — 摆幅预算

输出端是 NMOS 叠层（尾电流管、$M_2$、$M_4$）的顶端，也是 PMOS 叠层（$M_8$、$M_6$）的底端。每个器件都刚好饱和时：

$$V_{out,min} = V_{OD,SS} + V_{OD2} + V_{OD4},\qquad V_{out,max} = V_{DD} - |V_{OD8}| - |V_{OD6}| ,$$

而 $V_{out,max} - V_{out,min} \ge 2.4$ V 要求

$$V_{OD,SS} + V_{OD2} + V_{OD4} + |V_{OD6}| + |V_{OD8}| \le 3 - 2.4 = 0.6\ \mathrm{V}.$$

**选择**（用满整个预算）：

$$V_{OD,SS} = 0.15\ \mathrm{V},\quad V_{OD1\text{–}4} = 0.10\ \mathrm{V},\quad |V_{OD5\text{–}8}| = 0.125\ \mathrm{V}\qquad(\text{sum } 0.15 + 0.1 + 0.1 + 0.125 + 0.125 = 0.6\ \mathrm{V}).$$

尾电流管分得更多，因为它的电流是两倍；PMOS 器件比 NMOS 器件分得多，因为其迁移率（mobility）较低。其他分配方式同样可行。

### 第 3 步 — 器件尺寸（$L = 0.5\ \mu$m）

利用 $W/L = 2I_D/(\mu C_{ox}V_{OD}^2)$：

$$
\begin{aligned}
\left(\frac WL\right)_{SS} &= \frac{2(2\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.15\ \mathrm{V})^2} = \frac{4\times10^{-3}}{3.015\times10^{-6}} \approx 1330,\\
\left(\frac WL\right)_{1\text{–}4} &= \frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.10\ \mathrm{V})^2} = \frac{2\times10^{-3}}{1.34\times10^{-6}} \approx 1490,\\
\left(\frac WL\right)_{5\text{–}8} &= \frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.125\ \mathrm{V})^2} = \frac{2\times10^{-3}}{0.600\times10^{-6}} \approx 3330 .
\end{aligned}
$$

| 器件 | 类型 | $\lvert I_D\rvert$ | $\lvert V_{OD}\rvert$ | $W/L$ | $W$ |
|---|---|---|---|---|---|
| 尾电流管 | NMOS | 2 mA | 0.15 V | 1330 | 663 μm |
| $M_1$–$M_4$ | NMOS | 1 mA | 0.10 V | 1490 | 746 μm |
| $M_5$–$M_8$ | PMOS | 1 mA | 0.125 V | 3330 | 1667 μm |

过驱动电压只有 0.1 V 时，这些非常宽的器件工作在弱反型附近，此时平方律会高估电流；设计者可以牺牲一些摆幅来换取较小的器件。

### 第 4 步 — 偏置电压

**尾电流管栅极：** $V_{GS,SS} = 0.7 + 0.15 = 0.85$ V，其漏极（节点 P，即 $M_1$/$M_2$ 的源极）处于饱和边缘，$V_P = 0.15$ V。

**输入共模电平。** $M_1$ 的源极比其接地的衬底高 0.15 V：

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 0.15} - \sqrt{0.9}\right) = 0.7 + 0.45(1.0247 - 0.9487) = 0.734\ \mathrm{V},\\
V_{in,CM} &= V_P + V_{TH1} + V_{OD1} = 0.15 + 0.734 + 0.10 = 0.98\ \mathrm{V}.
\end{aligned}
$$

**$V_{b1}$。** 把 $M_1$/$M_2$ 的漏极设在 $V_P + V_{OD1} = 0.25$ V（输入器件处于饱和边缘）；于是共源共栅（cascode）管的源极比地高 0.25 V：

$$
\begin{aligned}
V_{TH3} &= 0.7 + 0.45\left(\sqrt{0.9 + 0.25} - \sqrt{0.9}\right) = 0.7 + 0.45(1.0724 - 0.9487) = 0.756\ \mathrm{V},\\
V_{b1} &= 0.25 + V_{TH3} + V_{OD3} = 0.25 + 0.756 + 0.10 = 1.11\ \mathrm{V}.
\end{aligned}
$$

验算：$V_{out,min} = V_{b1} - V_{TH4} = 1.106 - 0.756 = 0.35$ V $= 0.15 + 0.1 + 0.1$。✓

**$V_{b2}$。** 把 $M_6$ 的源极设在 $V_{DD} - |V_{OD8}| = 2.875$ V（$M_8$ 处于饱和边缘），于是 $|V_{SB6}| = 0.125$ V：

$$
\begin{aligned}
|V_{TH6}| &= 0.8 + 0.4\left(\sqrt{0.8 + 0.125} - \sqrt{0.8}\right) = 0.8 + 0.4(0.9618 - 0.8944) = 0.827\ \mathrm{V},\\
V_{b2} &= 2.875 - |V_{TH6}| - |V_{OD6}| = 2.875 - 0.827 - 0.125 = 1.92\ \mathrm{V}
\end{aligned}
$$

（若忽略体效应则为 1.95 V）。验算：$V_{out,max} = V_{b2} + |V_{TH6}| = 1.923 + 0.827 = 2.75$ V $= 3 - 0.125 - 0.125$。✓ 同一个 $V_{b2}$ 也使左侧的 $M_7$ 处于饱和边缘。

**节点 X**（$M_3$/$M_5$ 的漏极、$M_7$ 的栅极）：$V_X = V_{DD} - |V_{GS7}| = 3 - (0.8 + 0.125) = 2.075$ V。$M_5$ 要求 $V_X \le V_{b2} + |V_{TH5}| = 2.75$ V ✓，$M_3$ 要求 $V_X \ge V_{b1} - V_{TH3} = 0.35$ V ✓。

**输出范围：** 0.35 V 到 2.75 V，即围绕中间电平 1.55 V 的 2.4 V 峰峰值。

### 第 5 步 — 开环增益

$$
\begin{aligned}
g_{m1\text{–}4} &= \frac{2I_D}{V_{OD}} = \frac{2(1\ \mathrm{mA})}{0.1\ \mathrm{V}} = 20\ \mathrm{mS}, & r_{O1\text{–}4} &= \frac{1}{(0.1)(1\ \mathrm{mA})} = 10\ \mathrm{k\Omega},\\
g_{m5\text{–}8} &= \frac{2(1\ \mathrm{mA})}{0.125\ \mathrm{V}} = 16\ \mathrm{mS}, & r_{O5\text{–}8} &= \frac{1}{(0.2)(1\ \mathrm{mA})} = 5\ \mathrm{k\Omega}.
\end{aligned}
$$

$$
\begin{aligned}
R_{down} &\approx g_{m4}r_{O4}r_{O2} = (20\ \mathrm{mS})(10\ \mathrm{k\Omega})(10\ \mathrm{k\Omega}) = 2\ \mathrm{M\Omega},\\
R_{up} &\approx g_{m6}r_{O6}r_{O8} = (16\ \mathrm{mS})(5\ \mathrm{k\Omega})(5\ \mathrm{k\Omega}) = 0.4\ \mathrm{M\Omega},\\
R_{out} &= 2\parallel0.4\ \mathrm{M\Omega} = 0.333\ \mathrm{M\Omega}.
\end{aligned}
$$

由于电流镜（current mirror）的作用，短路跨导（short-circuit transconductance）$\approx g_{m1}$：

$$A_v \approx g_{m1}\Big\{\big[g_{m4}r_{O4}r_{O2}\big]\parallel\big[g_{m6}r_{O6}r_{O8}\big]\Big\} = (20\ \mathrm{mS})(333\ \mathrm{k\Omega}) \approx 6700 .$$

计入 NMOS 共源共栅管的体效应（$\eta_4 = 0.45/(2\sqrt{1.15}) = 0.21$，$R_{down} \to 2.42\ \mathrm{M\Omega}$），增益约为 6900；再计入 PMOS 共源共栅管的体效应（$\eta_6 = 0.21$），增益约为 8000。

### 结果

一种自洽的设计：$I_{SS} = 2$ mA（6 mW），每条支路 1 mA；过驱动电压为：尾电流管 0.15 V，$M_1$–$M_4$ 0.10 V，$M_5$–$M_8$ 0.125 V（总和 0.6 V，输出范围为 0.35–2.75 V = 2.4 V 峰峰值）；$(W/L)_{SS} \approx 1330$，$(W/L)_{1\text{–}4} \approx 1490$，$(W/L)_{5\text{–}8} \approx 3330$，$L = 0.5\ \mu$m。偏置：尾电流管栅极 0.85 V，$V_{in,CM} \approx 0.98$ V，$V_{b1} \approx 1.11$ V，$V_{b2} \approx 1.92$ V（不计体效应时为 1.95 V），由此 $V_X \approx 2.08$ V。开环增益为

$$A_v \approx g_{m1}\big[(g_{m4}r_{O4}r_{O2})\parallel(g_{m6}r_{O6}r_{O8})\big] = 20\ \mathrm{mS}\times(2\ \mathrm{M\Omega}\parallel0.4\ \mathrm{M\Omega}) \approx 6700$$

（计入共源共栅管的体效应时约为 6900–8000）。大摆幅的代价是晶体管非常宽，并工作在弱反型附近。

**常见错误。** 不加说明地把尾电流源排除在摆幅预算之外。实际的尾电流管也需要过驱动电压，因此五个过驱动电压必须分享这 0.6 V。

**常见错误。** 把 PMOS 负载当作双二极管共源共栅电流镜（cascode current mirror），得到 $V_X = V_{DD} - |V_{GS5}| - |V_{GS7}|$。X 直接驱动 $M_7$ 的栅极，因此 $V_X = V_{DD} - |V_{GS7}|$，而 $V_{b2}$ 必须另外产生。

**常见错误。** 把增益算成 $g_{m1}(r_{O2}\parallel r_{O4})$。两侧都是共源共栅结构，因此输出电阻（output resistance）约为 $g_mr_O^2$ 量级，增益达到数千。
