# 详细步骤 - R205

**思路。** 每个输出端的负载包括一个二极管连接的 PMOS（$M_5$ 或 $M_6$），它是正电导；以及交叉耦合对管中的一个器件（$M_3$ 或 $M_4$），它对差分信号而言是负电导。用两个二极管的过驱动电压（overdrive voltage）写出两个输出端的大信号（large-signal）基尔霍夫电流定律（KCL）方程，在中心区域精确求解，再跟踪电路一直到完全电流导引。预期的尺寸是 $W_{3,4} < W_{5,6}$（$L$ 相等），即 $\beta_3 < \beta_5$；最后说明 $\beta_3 > \beta_5$ 时会有什么变化。

### 第 1 步 — 用二极管过驱动电压表示的大信号方程

把左输出端记为 X，右输出端记为 Y，则 $V_{out} = V_X - V_Y$。由于 $V_{in2} = 3\ \mathrm{V} - V_{in1}$，输入共模电平（common-mode level）为 1.5 V，且 $\Delta V_{in} = V_{in1} - V_{in2} = 2V_{in1} - 3$ V；由对称性，$V_{out}$ 关于 $V_{in1} = 1.5$ V 奇对称。

定义两个二极管的过驱动电压

$$a = V_{DD} - V_X - |V_{THP}|\ (\text{for } M_5), \qquad b = V_{DD} - V_Y - |V_{THP}|\ (\text{for } M_6),$$

于是 $V_{out} = V_X - V_Y = b - a$。$M_3$（栅极接 Y）的过驱动电压为 $b$，$M_4$（栅极接 X）的过驱动电压为 $a$。四个 PMOS 都饱和时，对两个输出端列 KCL 得

$$
\begin{aligned}
I_{D1} &= I_5 + I_3 = \tfrac12\beta_5a^2 + \tfrac12\beta_3b^2 \quad(\text{KCL at X}),\\
I_{D2} &= I_6 + I_4 = \tfrac12\beta_5b^2 + \tfrac12\beta_3a^2 \quad(\text{KCL at Y}).
\end{aligned}
$$

两式相加、相减，并利用 $I_{D1} + I_{D2} = I_{SS}$ 和 $\Delta I = I_{D1} - I_{D2}$：

$$
\begin{aligned}
I_{SS} &= \tfrac12(\beta_5 + \beta_3)(a^2 + b^2),\\
\Delta I &= \tfrac12(\beta_5 - \beta_3)(a^2 - b^2),
\end{aligned}
$$

因此

$$a^2 = \frac{I_{SS}}{\beta_5 + \beta_3} + \frac{\Delta I}{\beta_5 - \beta_3}, \qquad b^2 = \frac{I_{SS}}{\beta_5 + \beta_3} - \frac{\Delta I}{\beta_5 - \beta_3}.$$

所以在中心区域，

$$V_{out} = b - a = \sqrt{\frac{I_{SS}}{\beta_5 + \beta_3} - \frac{\Delta I}{\beta_5 - \beta_3}} - \sqrt{\frac{I_{SS}}{\beta_5 + \beta_3} + \frac{\Delta I}{\beta_5 - \beta_3}},$$

其中采用常用的电流导引关系 $\Delta I = \tfrac{\beta_n}{2}\Delta V_{in}\sqrt{4I_{SS}/\beta_n - \Delta V_{in}^2}$，$\beta_n = \mu_nC_{ox}(W/L)_{1,2}$。曲线是**反相**的：$\Delta I > 0$（$V_{in1}$ 较高）使 $a > b$，即 $V_{out} < 0$。

**适用条件。** 只要 $V_{DD} - V_X \ge b$，即 $V_{out} \le |V_{THP}|$，$M_3$ 就处于饱和区（saturation region）；若 $\sqrt{2I_{SS}/(\beta_5 + \beta_3)} < |V_{THP}|$（这里假设如此），该条件在整个区域内都成立。

### 第 2 步 — 中心斜率（小信号验证）

平衡时 $a = b = a_0 = \sqrt{I_{SS}/(\beta_5 + \beta_3)}$，且

$$\frac{dV_{out}}{d\Delta I}\bigg|_0 = \frac{db}{d\Delta I} - \frac{da}{d\Delta I} = -\frac{1}{2a_0(\beta_5 - \beta_3)} - \frac{1}{2a_0(\beta_5 - \beta_3)} = -\frac{1}{(\beta_5 - \beta_3)a_0}.$$

利用 $d\Delta I/d\Delta V_{in} = g_{m1} = \sqrt{\beta_nI_{SS}}$、$g_{m5} = \beta_5a_0$ 和 $g_{m3} = \beta_3a_0$（平衡时过驱动电压相同）：

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})}\bigg|_0 = -\frac{g_{m1}}{g_{m5} - g_{m3}} .$$

在每一边，二极管 $M_5$ 提供 $+g_{m5}$，而 $M_3$ 的栅极感受到 $v_Y = -v_X$，它向 X 注入 $+g_{m3}v_X$，相当于电导 $-g_{m3}$。当 $\beta_3 < \beta_5$ 时，净电导 $g_{m5} - g_{m3}$ 很小但为正，因此增益很高。

### 第 3 步 — 无再生、无迟滞（$\beta_3 < \beta_5$ 时）

保持输入对管电流不变，断开环路 $X \to M_4 \to Y \to M_3 \to X$。X 的变化 $v_X$ 使 $M_4$ 的电流变化 $-g_{m4}v_X$，这一变化必须由二极管 $M_6$ 吸收，因此 $v_Y = -(g_{m4}/g_{m6})v_X$；同理 $v_X' = -(g_{m3}/g_{m5})v_Y$。环路增益为

$$LG = \frac{g_{m3}g_{m4}}{g_{m5}g_{m6}} = \frac{\beta_3b\cdot\beta_3a}{\beta_5a\cdot\beta_5b} = \left(\frac{\beta_3}{\beta_5}\right)^2 ,$$

这是因为 $M_3$ 与 $M_6$ 的过驱动电压同为 $b$，$M_4$ 与 $M_5$ 的过驱动电压同为 $a$。当 $\beta_3 < \beta_5$ 时，在所有器件都饱和的**任何**偏置点上它都小于 1，因此永远不会发生再生：曲线是单值的（没有迟滞）且单调。

### 第 4 步 — 中心区域的边缘：近乎垂直的台阶

当 $V_{in1}$ 降到 1.5 V 以下时，$\Delta I < 0$ 的幅度增大，$a$ 减小。当

$$|\Delta I| = I_{SS}\frac{\beta_5 - \beta_3}{\beta_5 + \beta_3},\qquad\text{i.e.}\quad \frac{I_{D1}}{I_{D2}} = \frac{\beta_3}{\beta_5},$$

时，$a$ 降到 0：$M_5$ 和 $M_4$（过驱动电压都是 $a$）截止，X 位于 $V_{DD} - |V_{THP}|$，$V_{out} = b = \sqrt{2I_{SS}/(\beta_5 + \beta_3)}$。

再往外一点，X 只与两个饱和器件相连：$M_3$ 相当于电流为 $\tfrac12\beta_3b^2$ 的电流源（current source），$M_1$ 吸收 $I_{D1}$；$M_5$ 截止，$M_4$ 的栅极不吸取电流。在 $\lambda = 0$ 时，没有任何因素能确定 $V_X$，直到 $M_3$ 在 $V_X = V_Y + |V_{THP}|$ 处退出饱和区，因此 $V_X$ 从 $V_{DD} - |V_{THP}|$ 跳到 $V_Y + |V_{THP}|$，$V_{out}$ 从 $\sqrt{2I_{SS}/(\beta_5 + \beta_3)}$ **垂直**上升到 $|V_{THP}|$。考虑 $\lambda$ 和亚阈值（subthreshold）导电后，这一段变为非常陡峭但仍然单值的曲线。

### 第 5 步 — 外侧区域与两端电平

台阶之外，$M_5$ 和 $M_4$ 截止，$M_6$ 单独流过 $I_{D2}$，$M_3$ 处于线性区（triode region）并流过 $I_{D1}$：

$$
\begin{aligned}
b &= \sqrt{\frac{2I_{D2}}{\beta_5}}, \qquad V_Y = V_{DD} - |V_{THP}| - b,\\
I_{D1} &= \beta_3\left(bV_{SD3} - \tfrac12V_{SD3}^2\right)\ \Rightarrow\ V_{SD3} = b - \sqrt{b^2 - \frac{2I_{D1}}{\beta_3}},\\
V_X &= V_{DD} - V_{SD3}.
\end{aligned}
$$

两者相减：

$$V_{out} = V_X - V_Y = |V_{THP}| + \sqrt{\frac{2I_{D2}}{\beta_5} - \frac{2I_{D1}}{\beta_3}} .$$

在这一区域的起点，$I_{D1}/I_{D2} = \beta_3/\beta_5$，$V_{out} = |V_{THP}|$，与台阶顶部衔接。在**完全导引**时（$V_{in1}$ 较低：$I_{D1} = 0$，$I_{D2} = I_{SS}$，对应 $|\Delta V_{in}| \ge \sqrt{2I_{SS}/\beta_n}$），左节点升到 $V_{DD}$（$M_3$ 导通，栅极接低电位的右节点，但不流过电流，因此 $V_{SD3} = 0$；$M_5$ 截止），而 $M_4$（栅极接 $V_{DD}$）截止，因此只有二极管 $M_6$ 流过 $I_{SS}$：

$$V_{out} = |V_{THP}| + \sqrt{\frac{2I_{SS}}{\beta_5}}\quad(\text{low } V_{in1}),$$

$V_{in1}$ 较高时取其相反数。

### 第 6 步 — 数值示例

取 $\beta_n = 2\ \mathrm{mA/V^2}$，$\beta_5 = 1\ \mathrm{mA/V^2}$，$\beta_3 = 0.8\ \mathrm{mA/V^2}$，$I_{SS} = 200\ \mu$A（示例值）：

$$
\begin{aligned}
a_0 &= \sqrt{\frac{200\ \mu\mathrm{A}}{1.8\ \mathrm{mA/V^2}}} = 0.333\ \mathrm{V}\ \Rightarrow\ V_X = V_Y = 2.2 - 0.333 = 1.867\ \mathrm{V}\ \text{at balance},\\
g_{m1} &= \sqrt{(2\ \mathrm{mA/V^2})(200\ \mu\mathrm{A})} = 0.632\ \mathrm{mS}, \quad g_{m5} - g_{m3} = (0.2\ \mathrm{mA/V^2})(0.333\ \mathrm{V}) = 0.0667\ \mathrm{mS},\\
\text{central slope} &= -\frac{0.632}{0.0667} = -9.5\ \text{per volt of } \Delta V_{in}\ (-19\ \text{per volt of } V_{in1}),\\
\text{step} &: |\Delta I| = 200\ \mu\mathrm{A}\times\frac{0.2}{1.8} = 22.2\ \mu\mathrm{A}\ \Rightarrow\ \Delta V_{in} = \mp0.035\ \mathrm{V},\ V_{in1} = 1.5 \mp 0.018\ \mathrm{V},\\
&\phantom{:}\ |V_{out}|\ \text{jumps from}\ \sqrt{0.222}\ \mathrm{V} = 0.47\ \mathrm{V}\ \text{to}\ 0.8\ \mathrm{V},\\
\text{end levels} &= \pm\left(0.8 + \sqrt{\frac{2(200\ \mu\mathrm{A})}{1\ \mathrm{mA/V^2}}}\right) = \pm(0.8 + 0.632) = \pm1.43\ \mathrm{V},\ \text{for } |V_{in1} - 1.5\ \mathrm{V}| \ge 0.224\ \mathrm{V}.
\end{aligned}
$$

**两个算例：**

- **$V_{in1} = 1.49$ V**（$\Delta V_{in} = -0.02$ V）：$\Delta I = (1\ \mathrm{mA/V^2})(-0.02)\sqrt{0.4 - 0.0004} = -12.6\ \mu$A，因此 $a^2 = 0.1111 - 0.0632 = 0.0479$，$b^2 = 0.1743$，得 $V_{out} = 0.4175 - 0.2189 = 0.199$ V。
- **$V_{in1} = 1.40$ V**（$\Delta V_{in} = -0.2$ V）：$\Delta I = (1\ \mathrm{mA/V^2})(-0.2)(0.6) = -120\ \mu$A，因此 $I_{D1} = 40\ \mu$A，$I_{D2} = 160\ \mu$A，得 $V_{out} = 0.8 + \sqrt{0.32 - 0.10} = 1.27$ V。

| $V_{in1}$ (V) | 区域 | $V_{out}$ (V) |
|---|---|---|
| 0 到 1.276 | 完全导引 | +1.43 |
| 1.40 | 外侧区域（$M_5$、$M_4$ 截止） | +1.27 |
| 1.45 | 外侧区域 | +1.10 |
| 1.482 | 台阶 | 0.47 → 0.80 |
| 1.485 | 中心区域 | +0.33 |
| 1.49 | 中心区域 | +0.20 |
| 1.495 | 中心区域 | +0.10 |
| 1.50 | 平衡点 | 0 |
| > 1.5 | 镜像 | 最低到 −1.43 |

对本例进行正反两个方向的直流数值扫描，得到的曲线相同，没有迟滞。

### 第 7 步 — 若 $W_{3,4} > W_{5,6}$

此时 $\beta_3 > \beta_5$，因此 $g_{m3} > g_{m5}$，$(\beta_3/\beta_5)^2 > 1$：净负载电导 $g_{m5} - g_{m3}$ 为负，平衡点不稳定，电路会像普通的交叉耦合负载那样**锁存并出现迟滞**。

### 结果

对于预期的尺寸 $W_{3,4} < W_{5,6}$，$V_{out}$ 是一条以 $V_{in1} = V_{in2}$ 为中心的**反相高增益 S 形曲线**，**没有迟滞**：

- **中心斜率：** $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}/(g_{m5} - g_{m3})$。每边的负载是二极管 $M_5$（$+g_{m5}$）与交叉耦合器件的负电导 $-g_{m3}$ 并联；净负载电导 $g_{m5} - g_{m3}$ 很小但为正，因此增益很高而不会发生再生（在所有器件都饱和的任何偏置点上，环路增益 $(\beta_3/\beta_5)^2 < 1$）。
- **中心区域的边缘：** 在 $|V_{out}| = \sqrt{2I_{SS}/(\beta_5 + \beta_3)}$ 处，曲线变得非常陡峭（在理想模型中是垂直的），一直到 $|V_{out}| = |V_{THP}|$。
- **外侧区域与两端：** $V_{out} = |V_{THP}| + \sqrt{2I_{D2}/\beta_5 - 2I_{D1}/\beta_3}$，最终饱和于
$$V_{out} = \pm\left(|V_{THP}| + \sqrt{\frac{2I_{SS}}{\beta_5}}\right)$$
（$V_{in1}$ 较低时为正）。完全导引时，一个输出位于 $V_{DD}$，另一个由流过全部 $I_{SS}$ 的二极管决定。
- 若 $W_{3,4} > W_{5,6}$，电路会锁存并出现迟滞。

**常见错误。** 把交叉耦合对管当作额外的二极管，从而得到增益 $g_{m1}/(g_{m5} + g_{m3})$。$M_3$/$M_4$ 的栅极由**对侧**输出驱动，因此对差分信号而言它们减小电导：$g_{m5} - g_{m3}$。

**常见错误。** 认为 $W_3 < W_5$ 时会出现迟滞或锁存。正反馈（positive feedback）的环路增益 $(\beta_3/\beta_5)^2$ 始终小于一，因此它只起提高增益的作用。

**常见错误。** 给出普通二极管负载差分对的端电平 $\pm\sqrt{2I_{SS}/\beta_5}$。完全导引时，截止一侧的节点被（不流过电流的）$M_3$ 一直拉到 $V_{DD}$，这就多出了 $|V_{THP}|$。
