# 详细步骤 - R207

**思路。** 输入对管把 $I_{SS}$ 在 X 与 Y 之间导引，但 $R_1$ 使电流能在 X 与 Y 之间流动，因此共源共栅管 $M_3$、$M_4$（以及它们上方的二极管负载）中的电流**并不**简单地等于 $I_{D1}$ 和 $I_{D2}$。对 X 和 Y 列基尔霍夫电流定律（KCL）方程，并利用共源共栅管（栅极接固定的 $V_{b1}$）的平方律（square law），用共源共栅管的电流表示 $V_X$、$V_Y$ 和输出；然后从平衡点出发跟踪扫描过程直到完全导引，最后给出一个数值示例。

### 第 1 步 — X 点和 Y 点的 KCL

由于 $V_{in2} = 3\ \mathrm{V} - V_{in1}$，输入共模电平（common-mode level）固定为 1.5 V，且 $\Delta V_{in} = 2V_{in1} - 3$ V。假设偏置使 $M_3$–$M_7$ 都保持饱和。令 $I_3$ 和 $I_4$ 为向下流过 $M_3$ 和 $M_4$ 的电流，$(V_X - V_Y)/R_1$ 为 $R_1$ 中从 X 流向 Y 的电流：

$$I_3 = I_{D1} + \frac{V_X - V_Y}{R_1}\ \ (\text{KCL at X}), \qquad I_4 = I_{D2} - \frac{V_X - V_Y}{R_1}\ \ (\text{KCL at Y}).$$

两式相加，$I_3 + I_4 = I_{D1} + I_{D2} = I_{SS}$：两个共源共栅管总是恰好分担 $I_{SS}$。

### 第 2 步 — 用共源共栅管电流表示节点电压

令 $\beta_3 = \mu_nC_{ox}(W/L)_{3,4}$，$\beta_5 = \mu_pC_{ox}(W/L)_{5,6}$，则共源共栅管的源极电压（栅极接 $V_{b1}$）和以二极管为负载的输出电压（每个二极管流过其共源共栅管的电流）为

$$V_X = V_{b1} - V_{GS3}(I_3) = V_{b1} - V_{THN} - \sqrt{\frac{2I_3}{\beta_3}}, \qquad V_Y = V_{b1} - V_{THN} - \sqrt{\frac{2I_4}{\beta_3}},$$

$$V_{left} = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_3}{\beta_5}}, \qquad V_{right} = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_4}{\beta_5}}.$$

因此

$$
\begin{aligned}
V_X - V_Y &= \sqrt{\frac{2}{\beta_3}}\left(\sqrt{I_4} - \sqrt{I_3}\right),\\
V_{out} &= \sqrt{\frac{2}{\beta_5}}\left(\sqrt{I_4} - \sqrt{I_3}\right).
\end{aligned}
$$

一切都只取决于 $I_{SS}$ 在 $I_3$ 和 $I_4$ 之间如何分配，而这由 KCL 和 $R_1$ 共同决定：

$$I_3 - \frac{I_{SS}}{2} = \frac{I_{D1} - I_{D2}}{2} + \frac{V_X - V_Y}{R_1}.$$

$V_X - V_Y$ 与 $I_3 - I_4$ 符号相反，因此 $R_1$ 项总是**减小**传递到共源共栅管的不平衡：被导引的电流有一部分经 $R_1$ 返回，而不是向上流过共源共栅管。

### 第 3 步 — 平衡点与中心区域

**平衡时**（$V_{in1} = V_{in2}$）：$I_{D1} = I_{D2} = I_{SS}/2$，由对称性 $V_X = V_Y$，因此 $R_1$ 中没有电流，$I_3 = I_4 = I_{SS}/2$：

$$V_X = V_Y = V_{b1} - V_{GS3}\!\left(\frac{I_{SS}}{2}\right), \qquad V_{left} = V_{right} = V_{DD} - \left|V_{GS5}\!\left(\frac{I_{SS}}{2}\right)\right|, \qquad V_{out} = 0 .$$

**随着 $V_{in1}$ 升高**，$I_{D1}$ 以及 $I_3$ 增大：$V_X = V_{b1} - V_{GS3}(I_3)$ **下降**，左输出 $V_{DD} - |V_{GS5}(I_3)|$ **下降**；同时 $I_4$ 减小，因此 $V_Y$ 和右输出**上升**。$V_{out}$ 是**反相**的，$V_X$、$V_Y$ 关于平衡点互为镜像。

**中心斜率。** 在差分半边电路（half circuit）中，$R_1$ 的中点是虚地（virtual ground），因此 X 到地的电阻为 $R_1/2$。$M_1$ 的信号电流 $g_{m1}v_d/2$ 在 $R_1/2$ 与 $M_3$ 的源极（$1/g_{m3}$）之间分流，只有流过 $M_3$ 的那部分才到达二极管 $1/g_{m5}$：

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})}\bigg|_0 = -\frac{g_{m1}}{g_{m5}}\cdot\frac{R_1/2}{R_1/2 + 1/g_{m3}} = -\frac{g_{m1}}{g_{m5}}\cdot\frac{g_{m3}R_1/2}{1 + g_{m3}R_1/2}.$$

### 第 4 步 — 完全导引：两端电平

三条曲线都只在差分对进行电流导引时变化，即 $|\Delta V_{in}| < \sqrt{2I_{SS}/\beta_n}$，其中 $\beta_n = \mu_nC_{ox}(W/L)_{1,2}$；在该窗口之外它们都是平坦的。在扫描两端，导通的输入器件可能进入线性区（triode region），但尾电流管仍迫使 $I_{SS}$ 流过它。

**$V_{in1}$ 较低时：** $M_1$ 截止（$I_{D1} = 0$，$I_{D2} = I_{SS}$），因此 X 点的 KCL 变为

$$I_3 = \frac{V_X - V_Y}{R_1}:$$

$M_3$ 仍然导通从 X 经 $R_1$ 流入 Y 的电流，该电流在 Y 点与 $M_4$ 的 $I_4 = I_{SS} - I_3$ 一起被 $M_2$ 吸收。结合第 2 步，$I_3$ 由下式确定

$$I_3R_1 = V_X - V_Y = \sqrt{\frac{2}{\beta_3}}\left(\sqrt{I_{SS} - I_3} - \sqrt{I_3}\right),$$

于是

$$V_{out} = \sqrt{\frac{2}{\beta_5}}\left(\sqrt{I_{SS} - I_3} - \sqrt{I_3}\right) > 0, \qquad V_X - V_Y = I_3R_1 > 0 .$$

$V_{in1}$ 较高时，各值互为镜像。当 **$R_1$ 很大**时，$I_3 \to 0$，因此 $|V_{out}| \to \sqrt{2I_{SS}/\beta_5}$（即二极管负载差分对的完整摆幅），$|V_X - V_Y| \to \sqrt{2I_{SS}/\beta_3}$；当 **$R_1$ 很小**时，X 与 Y 近乎短接，两个共源共栅管几乎平均分担电流，$V_{out}$ 和 $V_X - V_Y$ 都缩小到接近零。

### 第 5 步 — 数值示例

取 $\beta_n = \beta_3 = 2\ \mathrm{mA/V^2}$，$\beta_5 = 1\ \mathrm{mA/V^2}$，$I_{SS} = 200\ \mu$A，$V_{b1} = 2.0$ V，$R_1 = 5\ \mathrm{k}\Omega$（示例值）。

**平衡点：**

$$
\begin{aligned}
V_X = V_Y &= 2.0 - 0.7 - \sqrt{\frac{2(100\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 1.3 - 0.316 = 0.984\ \mathrm{V},\\
V_{left} = V_{right} &= 3 - 0.8 - \sqrt{\frac{2(100\ \mu\mathrm{A})}{1\ \mathrm{mA/V^2}}} = 2.2 - 0.447 = 1.753\ \mathrm{V}.
\end{aligned}
$$

**完全导引。** 试取 $I_3 = 40\ \mu$A：

$$
\begin{aligned}
\sqrt{\frac{2}{2\ \mathrm{mA/V^2}}}\left(\sqrt{160\ \mu\mathrm{A}} - \sqrt{40\ \mu\mathrm{A}}\right) &= (31.6\ \mathrm{V}/\sqrt{\mathrm{A}})(12.65 - 6.32)\times10^{-3}\ \sqrt{\mathrm{A}} = 0.200\ \mathrm{V},\\
I_3R_1 &= (40\ \mu\mathrm{A})(5\ \mathrm{k}\Omega) = 0.200\ \mathrm{V}.\ \checkmark
\end{aligned}
$$

因此 $I_3 = 40\ \mu$A，$I_4 = 160\ \mu$A，得

$$
\begin{aligned}
V_X &= 1.3 - \sqrt{\frac{2(40\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 1.3 - 0.2 = 1.10\ \mathrm{V}, \qquad V_Y = 1.3 - \sqrt{\frac{2(160\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 1.3 - 0.4 = 0.90\ \mathrm{V},\\
V_{out} &= \sqrt{\frac{2}{1\ \mathrm{mA/V^2}}}\left(\sqrt{160\ \mu\mathrm{A}} - \sqrt{40\ \mu\mathrm{A}}\right) = 0.283\ \mathrm{V}.
\end{aligned}
$$

若 $R_1$ 开路，端电平将为 $\sqrt{2(200\ \mu\mathrm{A})/(1\ \mathrm{mA/V^2})} = 0.632$ V；经 $R_1$ 分流后，它降为 0.283 V。

**中心斜率：**

$$
\begin{aligned}
g_{m1} &= g_{m3} = \sqrt{2(2\ \mathrm{mA/V^2})(100\ \mu\mathrm{A})} = 0.632\ \mathrm{mS}, \qquad g_{m5} = \sqrt{2(1\ \mathrm{mA/V^2})(100\ \mu\mathrm{A})} = 0.447\ \mathrm{mS},\\
\frac{g_{m3}R_1}{2} &= (0.632\ \mathrm{mS})(2.5\ \mathrm{k}\Omega) = 1.58,\\
\text{slope} &= -\frac{0.632}{0.447}\cdot\frac{1.58}{2.58} = -0.87\ \text{per volt of } \Delta V_{in}.
\end{aligned}
$$

**导引窗口：** $\sqrt{2I_{SS}/\beta_n} = 0.447$ V，即 $1.276\ \mathrm{V} < V_{in1} < 1.724$ V。

| $V_{in1}$ (V) | $V_X$ (V) | $V_Y$ (V) | $V_{out}$ (V) |
|---|---|---|---|
| 0 到 1.276 | 1.100 | 0.900 | +0.283 |
| 1.35 | 1.077 | 0.912 | +0.233 |
| 1.40 | 1.048 | 0.931 | +0.166 |
| 1.45 | 1.016 | 0.955 | +0.086 |
| 1.50 | 0.984 | 0.984 | 0 |
| 1.55 | 0.955 | 1.016 | −0.086 |
| 1.60 | 0.931 | 1.048 | −0.166 |
| 1.65 | 0.912 | 1.077 | −0.233 |
| 1.724 到 3 | 0.900 | 1.100 | −0.283 |

（中间各点由第 1 步的 KCL 方程与输入对管的电流导引关系联立求解得到。）

### 结果

三条曲线都只在差分对进行电流导引的窗口内变化（在 $V_{in1} = 1.5$ V 附近，$|V_{in1} - V_{in2}| < \sqrt{2I_{SS}/\beta_n}$），在窗口之外都是平坦的。

- **$V_{out}$** 是一条**反相 S 形曲线**，在平衡点处为零。
  - 中心斜率：$-(g_{m1}/g_{m5})\cdot\dfrac{g_{m3}R_1/2}{1 + g_{m3}R_1/2}$。
  - 两端电平：$\pm\sqrt{2/\beta_5}\,(\sqrt{I_{SS} - I_3} - \sqrt{I_3})$，$V_{in1}$ 较低时为正，其中 $I_3$ 满足 $V_{GS4}(I_{SS} - I_3) - V_{GS3}(I_3) = I_3R_1$。
- **$V_X$ 下降而 $V_Y$ 上升**，二者互为镜像。它们在平衡点处相等，均为 $V_{b1} - V_{GS3}(I_{SS}/2)$，在两端相差 $\pm I_3R_1$。
- **摆幅受到限制**，因为 $R_1$ 使“截止”一侧的一部分电流流过另一个共源共栅管。当 $R_1 \to \infty$ 时，摆幅趋近普通二极管负载时的值；当 $R_1 \to 0$ 时，摆幅缩小到零。

**常见错误。** 让 $V_X$ 和 $V_Y$ 大幅摆动，或者朝同一方向变化。它们是栅极电压固定的共源共栅管的源极，因此只会随 $V_{GS}$ 的变化而移动几百毫伏，而且方向相反。

**常见错误。** 给出普通二极管负载差分对的端电平 $\pm\sqrt{2I_{SS}/\beta_5}$。即使 $M_1$ 截止，$M_3$ 也仍在导通从 X 经 $R_1$ 返回 Y 的电流。

**常见错误。** 把 $R_1$ 当作决定增益的负载，得出增益 $g_{m1}R_1$。它是共源共栅管源极之间的一条分流支路，会**分走**信号电流，因此增益是二极管负载增益 $g_{m1}/g_{m5}$ 经电流分配而减小后的值。
