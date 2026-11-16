# 详细步骤 - R187

**思路。** PMOS 的栅极由节点 N 驱动，N 是跨接在两个输出端之间的电阻串 $R_1$–$R_2$ 的中点，因此 N 处于输出共模电平，负载实现自偏置。由 KCL 可知每个 PMOS 恰好流过 $I_{SS}/2$，且 $V_N$ 保持不变；再对每个输出端列 KCL，把 $V_{out}$ 与输入对管电流之差联系起来，结合差分对的大信号（large-signal）电流导引规律，就得到整条曲线。

### 第 1 步 — 扫描方式

把左输出端（$M_1$、$M_3$ 的漏极）记为 X，右输出端（$M_2$、$M_4$ 的漏极）记为 Y，$R_1$ 与 $R_2$ 的连接点（即 PMOS 的栅极）记为 N，$M_1$、$M_2$ 的公共源极节点记为 P；$V_{out} = V_X - V_Y$。由于 $V_{in2} = 3\ \mathrm{V} - V_{in1}$，输入共模电平保持在 1.5 V，差分输入为

$$\Delta V_{in} \equiv V_{in1} - V_{in2} = 2V_{in1} - 3\ \mathrm{V}.$$

交换两个输入就交换了 $V_X$ 和 $V_Y$，因此 $V_{out}$ 关于 $V_{in1} = 1.5$ V 奇对称，并在该处为零。

### 第 2 步 — 节点 N 处于输出共模电平

栅极不吸取电流，因此从 X 经 $R_1$ 流到 N 的电流与从 N 经 $R_2$ 流到 Y 的电流相同；由于 $R_1 = R_2$，

$$\frac{V_X - V_N}{R_1} = \frac{V_N - V_Y}{R_2} \quad\Longrightarrow\quad V_N = \frac{V_X + V_Y}{2}.$$

两个 PMOS 负载的栅极电压等于**两个输出的平均值**，即输出共模电平。

### 第 3 步 — 每个 PMOS 流过 $I_{SS}/2$，且 $V_N$ 不变

$M_3$ 和 $M_4$ 的源极（$V_{DD}$）和栅极（N）都相同，因此只要两者都饱和，它们就流过相同的电流 $I_L$：

$$I_{D3} = I_{D4} = I_L = \tfrac12\beta_p\left(V_{DD} - V_N - |V_{THP}|\right)^2, \qquad \beta_p = \mu_pC_{ox}\left(\frac WL\right)_{3,4}.$$

令 $I_R$ 为电阻串中的电流（X → N → Y），X 点的 KCL 给出 $I_L = I_{D1} + I_R$，Y 点的 KCL 给出 $I_L + I_R = I_{D2}$。两式相加，$I_R$ 被消去：

$$2I_L = I_{D1} + I_{D2} = I_{SS} \quad\Longrightarrow\quad I_L = \frac{I_{SS}}{2}.$$

只要两个 PMOS 器件都饱和，这一结论对**任何** $V_{in1}$ 都成立。由平方律（square law）反解：

$$
\begin{aligned}
\frac{I_{SS}}{2} &= \tfrac12\beta_p(V_{SG3} - |V_{THP}|)^2\\
V_{SG3} &= |V_{THP}| + \sqrt{\frac{I_{SS}}{\beta_p}}\\
V_N &= V_{DD} - |V_{THP}| - \sqrt{\frac{I_{SS}}{\beta_p}} = \text{constant}.
\end{aligned}
$$

所以在扫描过程中，**输出共模电平 $V_N = (V_X + V_Y)/2$ 保持不动**。这是一种局部的共模反馈（common-mode feedback）：若两个输出同时上升，N 也随之上升，负载提供的电流减小，输出就会被拉回。

### 第 4 步 — 对每个输出端列 KCL：用漏极电流表示 $V_{out}$

**X 点的 KCL**，其中 $I_L = I_{SS}/2$：

$$
\begin{aligned}
\frac{I_{SS}}{2} &= I_{D1} + \frac{V_X - V_N}{R_1}\\
V_X - V_N &= R_1\left(\frac{I_{SS}}{2} - I_{D1}\right).
\end{aligned}
$$

**Y 点的 KCL**：

$$
\begin{aligned}
\frac{I_{SS}}{2} + \frac{V_N - V_Y}{R_2} &= I_{D2}\\
V_N - V_Y &= R_1\left(I_{D2} - \frac{I_{SS}}{2}\right).
\end{aligned}
$$

将两式**相加**：

$$
\begin{aligned}
V_{out} &= (V_X - V_N) + (V_N - V_Y) = R_1\left(\frac{I_{SS}}{2} - I_{D1} + I_{D2} - \frac{I_{SS}}{2}\right)\\
V_{out} &= -R_1\,(I_{D1} - I_{D2}).
\end{aligned}
$$

由于 $I_{D1} + I_{D2} = I_{SS}$，有 $\tfrac{I_{SS}}{2} - I_{D1} = -\tfrac12(I_{D1} - I_{D2})$，因此每个输出都围绕固定电平 $V_N$ 变化 $\mp\tfrac12R_1(I_{D1} - I_{D2})$。

### 第 5 步 — 输入对管的大信号电流导引

$M_1$、$M_2$ 饱和时，由 $\sqrt{2I_{D1}/\beta_n} - \sqrt{2I_{D2}/\beta_n} = \Delta V_{in}$ 和 $I_{D1} + I_{D2} = I_{SS}$ 可得标准的电流导引关系

$$I_{D1} - I_{D2} = \frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2},$$

该式在 $|\Delta V_{in}| \le \sqrt{2I_{SS}/\beta_n}$ 时成立。超出此范围后，一个器件截止，$I_{D1} - I_{D2} = \pm I_{SS}$；即使导通的器件进入线性区，饱和的尾电流管 $M_5$ 仍然迫使其电流为 $I_{SS}$。

### 第 6 步 — 传输曲线

结合第 4 步和第 5 步：

$$V_{out} = -R_1\frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}\quad\text{for } |\Delta V_{in}| \le \sqrt{\frac{2I_{SS}}{\beta_n}}, \qquad V_{out} = \mp I_{SS}R_1\ \text{beyond}.$$

**输出电平。** $V_{in1}$ 较低时 $M_1$ 截止：$M_3$ 的全部 $I_{SS}/2$ 经 $R_1$ 和 $R_2$ 流到 Y，在 Y 点与 $M_4$ 的 $I_{SS}/2$ 一起被 $M_2$ 吸收。因此 $V_X - V_N = +I_{SS}R_1/2$，$V_N - V_Y = +I_{SS}R_1/2$，$V_{out} = +I_{SS}R_1$。$V_{in1}$ 较高时，$V_{out} = -I_{SS}R_1$。

**中心斜率。** 在 $\Delta V_{in} = 0$ 处：

$$\frac{d(I_{D1} - I_{D2})}{d\Delta V_{in}}\bigg|_0 = \frac{\beta_n}{2}\sqrt{\frac{4I_{SS}}{\beta_n}} = \sqrt{\beta_nI_{SS}} = g_{m1},$$

其中平衡时每个输入器件的 $g_{m1} = \sqrt{2\beta_n(I_{SS}/2)}$，因此

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})}\bigg|_0 = -g_{m1}R_1, \qquad \frac{dV_{out}}{dV_{in1}}\bigg|_{1.5\ \mathrm{V}} = -2g_{m1}R_1 .$$

**半边电路（half circuit）验证。** 对差分信号而言，N 是虚地（virtual ground），因此 $M_3$、$M_4$ 的栅极处于交流地，每个 PMOS 相当于开路（$\lambda = 0$），每个输出端看到的只有 $R_1$：

<!-- diagram: diagram-01.cir -->

于是 $v_X = -g_{m1}R_1\Delta v_{in}/2$，$v_Y = -v_X$，因此 $v_{out} = -g_{m1}R_1\Delta v_{in}$，与上面得到的斜率一致。

### 第 7 步 — 适用条件：PMOS 必须保持饱和

PMOS 的饱和条件 $V_{SD3} \ge V_{SG3} - |V_{THP}|$ 变为

$$
\begin{aligned}
V_{DD} - V_X &\ge V_{DD} - V_N - |V_{THP}|\\
V_X - V_N &\le |V_{THP}| = 0.8\ \mathrm{V}.
\end{aligned}
$$

$V_X - V_N$ 的最大值在完全导引时取得，为 $I_{SS}R_1/2$，因此只有满足下式时，输出电平才恰好是 $\pm I_{SS}R_1$：

$$\frac{I_{SS}R_1}{2} \le |V_{THP}| = 0.8\ \mathrm{V}.$$

否则，高电位一侧的 PMOS 会在完全导引之前进入线性区，无法再提供完整的 $I_{SS}/2$，$V_{out}$ 将在较小的幅度处变平。例如，当 $I_{SS} = 200\ \mu$A、$R_1 = 10\ \mathrm{k}\Omega$ 时，理想电平应为 ±2 V，但曲线实际上在约 ±1.8 V 处饱和。

### 第 8 步 — 数值示例

自由选取 $\beta_n = 2\ \mathrm{mA/V^2}$、$\beta_p = 2.22\ \mathrm{mA/V^2}$、$I_{SS} = 200\ \mu$A 和 $R_1 = R_2 = 5\ \mathrm{k}\Omega$：

$$
\begin{aligned}
V_N &= 3 - 0.8 - \sqrt{\frac{200\ \mu\mathrm{A}}{2.22\ \mathrm{mA/V^2}}} = 3 - 0.8 - 0.3 = 1.9\ \mathrm{V},\\
I_{SS}R_1 &= (200\ \mu\mathrm{A})(5\ \mathrm{k}\Omega) = 1.0\ \mathrm{V}\quad(\text{and } I_{SS}R_1/2 = 0.5\ \mathrm{V} < 0.8\ \mathrm{V}\ \checkmark),\\
\sqrt{2I_{SS}/\beta_n} &= \sqrt{\frac{2(200\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 0.447\ \mathrm{V},\\
g_{m1} &= \sqrt{\beta_nI_{SS}} = \sqrt{(2\ \mathrm{mA/V^2})(200\ \mu\mathrm{A})} = 0.632\ \mathrm{mS},\\
\frac{dV_{out}}{dV_{in1}}\bigg|_{1.5\ \mathrm{V}} &= -2(0.632\ \mathrm{mS})(5\ \mathrm{k}\Omega) = -6.3 .
\end{aligned}
$$

当 $V_{in1} = 1.4$ V（$\Delta V_{in} = -0.2$ V）时：

$$
\begin{aligned}
I_{D1} - I_{D2} &= (1\ \mathrm{mA/V^2})(-0.2\ \mathrm{V})\sqrt{0.4 - 0.04}\ \mathrm{V} = -0.2\times0.6\ \mathrm{mA} = -120\ \mu\mathrm{A},\\
V_{out} &= -(5\ \mathrm{k}\Omega)(-120\ \mu\mathrm{A}) = +0.6\ \mathrm{V}\quad(V_X = 2.2\ \mathrm{V},\ V_Y = 1.6\ \mathrm{V}).
\end{aligned}
$$

| $V_{in1}$ (V) | $\Delta V_{in}$ (V) | $V_X$ (V) | $V_Y$ (V) | $V_{out}$ (V) |
|---|---|---|---|---|
| 0 到 1.276 | ≤ −0.447 | 2.40 | 1.40 | +1.0 |
| 1.4 | −0.2 | 2.20 | 1.60 | +0.6 |
| 1.5 | 0 | 1.90 | 1.90 | 0 |
| 1.6 | +0.2 | 1.60 | 2.20 | −0.6 |
| 1.724 到 3 | ≥ +0.447 | 1.40 | 2.40 | −1.0 |

在整个范围内，$(V_X + V_Y)/2 = 1.9$ V。

### 结果

$V_{out}$ 是一条**以 $V_{in1} = 1.5$ V 为中心的反相 S 形曲线**：

$$V_{out} = -R_1(I_{D1} - I_{D2}) = -R_1\frac{\beta_n}{2}(V_{in1} - V_{in2})\sqrt{\frac{4I_{SS}}{\beta_n} - (V_{in1} - V_{in2})^2}.$$

- 它从 $+I_{SS}R_1$ 变化到 $-I_{SS}R_1$（若 $I_{SS}R_1/2 < |V_{THP}|$；否则当某个 PMOS 进入线性区时，曲线在较小的幅度处饱和）。
- 中心斜率为 $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}R_1$，其中 $g_{m1} = \sqrt{\beta_nI_{SS}}$。
- 当 $|V_{in1} - V_{in2}| > \sqrt{2I_{SS}/\beta_n}$ 时，曲线是平坦的。
- 由于负载由输出中点 N 提供偏置，每个 PMOS 流过 $I_{SS}/2$，输出共模电平保持为常数 $V_N = V_{DD} - |V_{THP}| - \sqrt{I_{SS}/\beta_p}$。

**常见错误。** 把 $M_3$/$M_4$ 当作二极管连接（diode-connected）的负载，从而得到增益 $g_{m1}/g_{m3}$。它们的栅极只是在 N 点经 $R_1$ 和 $R_2$ 连到漏极，而 N 对差分信号是虚地，因此对差分信号而言，PMOS 器件是电流源（current source），每边的负载是 $R_1$。

**常见错误。** 类比于两个输出端之间只接单个电阻 $R_1$ 的情形，得出电平为 $\pm I_{SS}R_1/2$ 或斜率为 $g_{m1}R_1/2$。这里两个输出端之间接的是 $R_1 + R_2 = 2R_1$，因此每半边看到的是 $R_1$；完全导引时 $I_{SS}/2$ 流过 $2R_1$，得到 $I_{SS}R_1$。

**常见错误。** 像电流源负载那样画出轨到轨的输出。差分负载只是 $R_1$，且输出共模被固定在 $V_N$，因此摆幅被限制在 $\pm I_{SS}R_1$（若 PMOS 进入线性区，则更小）。
