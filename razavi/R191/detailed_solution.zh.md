# 详细步骤 - R191

**思路。** 每个输出端的负载都是一个二极管连接的 PMOS（$M_3$ 或 $M_4$）**并联**一个提供固定电流 $I_P$ 的 PMOS 电流源（$M_5$ 或 $M_6$）。电流源分担了输入器件的一部分电流，因此二极管只流过 $I_{D1} - I_P$：它的 $1/g_m$ 更大，从而提高了增益；而且一旦 $I_{D1}$ 降到 $I_P$ 以下，它就会**截止**。让 $V_{in1}$ 从 1.5 V 向外变化，依次经过三个区域（两个二极管都导通、一个二极管截止、完全导引），其余部分由对称性得到。

### 第 1 步 — 扫描方式与电流源模型

把左输出端（$M_1$、$M_3$、$M_5$ 的漏极）记为 X，右输出端记为 Y，则 $V_{out} = V_X - V_Y$。由于 $V_{in2} = 3\ \mathrm{V} - V_{in1}$，输入共模电平（common-mode level）固定为 1.5 V，且 $\Delta V_{in} = V_{in1} - V_{in2} = 2V_{in1} - 3$ V。由对称性，$V_{out}$ 关于 $V_{in1} = 1.5$ V 奇对称，因此只需分析 $V_{in1} \le 1.5$ V 的情况，此时 $I_{D1} \le I_{D2}$。

$M_5$ 处于饱和区（saturation region）时提供 $I_P$，即要求 $V_X \le V_{b1} + |V_{THP}|$；而只要二极管导通，就有 $V_X \le V_{DD} - |V_{THP}| = 2.2$ V。假设偏置使 $M_5$ 的饱和边缘不低于 2.2 V，即 $V_{b1} + |V_{THP}| \ge V_{DD} - |V_{THP}|$，这样只要二极管导通，$M_5$ 就是真正的电流源。在 $V_{b1} + |V_{THP}|$ 以上，它进入线性区，电流下降，在 $V_X = V_{DD}$ 时降为零。（若该边缘低于 2.2 V，第 4 步中的陡峭台阶会被圆滑化，但第 5 步中的两端电平不变。）

### 第 2 步 — 对输出端应用基尔霍夫电流定律（KCL）：电流如何分配

$M_1$ 吸取的电流由 $M_5$ 和 $M_3$ 共同提供：

$$I_{D1} = I_P + I_{D3}\quad\Longrightarrow\quad I_{D3} = I_{D1} - I_P .$$

二极管连接的 $M_3$ 只要导通就处于饱和区，因此当 $I_{D3} > 0$ 时

$$
\begin{aligned}
I_{D3} &= \tfrac12\beta_p(V_{SG3} - |V_{THP}|)^2\\
V_X &= V_{DD} - |V_{THP}| - \sqrt{\frac{2(I_{D1} - I_P)}{\beta_p}} .
\end{aligned}
$$

这要求 $I_{D1} \ge I_P$；二极管不能反向导电，因此当 $I_{D1} < I_P$ 时，$M_3$ **截止**。右边的 $I_{D2}$ 也是如此。平衡时 $I_{D1} = I_{D2} = I_{SS}/2$，因此每个二极管流过

$$I_{D3} = \frac{I_{SS}}{2} - I_P > 0 ,$$

由于 $I_P < I_{SS}/2$，它为正。

### 第 3 步 — 中心区域：两个二极管都导通

当 $I_{D1}, I_{D2} \ge I_P$ 时两个二极管都导通，即（利用 $I_{D1} + I_{D2} = I_{SS}$）$|I_{D1} - I_{D2}| \le I_{SS} - 2I_P$ 时。此时

$$V_{out} = V_X - V_Y = \sqrt{\frac{2(I_{D2} - I_P)}{\beta_p}} - \sqrt{\frac{2(I_{D1} - I_P)}{\beta_p}},$$

其中输入对管的电流由平方律（square law）电流导引公式给出

$$I_{D1} - I_{D2} = \frac{\beta_n}{2}\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}, \qquad I_{D1,2} = \frac{I_{SS} \pm (I_{D1} - I_{D2})}{2}.$$

**平衡点处的小信号增益。** 在差分半边电路（half circuit）中，P 是虚地（virtual ground），因此 $M_1$ 从 X 抽取 $g_{m1}\Delta v_{in}/2$；$M_5$ 相当于开路（$\lambda = 0$），二极管 $M_3$ 相当于接到交流地的 $1/g_{m3}$。

<!-- diagram: diagram-01.cir -->

X 点的 KCL：

$$
\begin{aligned}
g_{m1}\frac{\Delta v_{in}}{2} + g_{m3}v_X &= 0\\
v_X &= -\frac{g_{m1}}{g_{m3}}\cdot\frac{\Delta v_{in}}{2}.
\end{aligned}
$$

由 $v_Y = -v_X$ 得：

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})}\bigg|_0 = -\frac{g_{m1}}{g_{m3}}, \qquad g_{m1} = \sqrt{2\beta_n\frac{I_{SS}}{2}}, \qquad g_{m3} = \sqrt{2\beta_p\left(\frac{I_{SS}}{2} - I_P\right)} .$$

由于 $g_{m3}$ 是在**减小了的**电流 $I_{SS}/2 - I_P$ 下计算的，增益比普通二极管负载时高出 $\sqrt{(I_{SS}/2)/(I_{SS}/2 - I_P)}$ 倍，而输入对管的偏置电流并没有改变。

### 第 4 步 — 电流较小一侧的二极管截止：陡峭的台阶

让 $V_{in1}$ 从 1.5 V 往下减小，$I_{D1}$ 随之减小。当 $I_{D1} = I_P$，即 $I_{D2} - I_{D1} = I_{SS} - 2I_P$ 时，二极管 $M_3$ 的电流降为零，此时

$$V_X = V_{DD} - |V_{THP}| = 2.2\ \mathrm{V}, \qquad V_Y = V_{DD} - |V_{THP}| - \sqrt{\frac{2(I_{SS} - 2I_P)}{\beta_p}},$$

因此曲线到达

$$V_{out,\,kink} = \sqrt{\frac{2(I_{SS} - 2I_P)}{\beta_p}} .$$

**再往外一点**（$I_{D1} < I_P$），$M_3$ 截止，$M_5$ 向 X 注入 $I_P$，而 $M_1$ 只抽走 $I_{D1} < I_P$。多余的电流把 X 充电抬高，直到 $M_5$ 退出饱和区、其电流降到 $I_{D1}$ 为止，因此 $V_X$ **从 2.2 V 迅速升向 $V_{DD}$**。对于理想电流源，这在 $V_{out}$ 上是一个垂直的台阶；对于实际的 PMOS，台阶在 $V_{b1} + |V_{THP}|$ 以下是垂直的，此后处于线性区的 $M_5$ 使 $V_X$ 随 $I_{D1} \to 0$ 缓慢升到 $V_{DD}$。与此同时，由于 $M_4$ 仍然导通，$V_Y$ 继续平滑下降。

### 第 5 步 — 完全导引：两端电平

当 $|\Delta V_{in}| \ge \Delta V_{max} = \sqrt{2I_{SS}/\beta_n}$ 时，$M_1$ 截止（$I_{D1} = 0$），$M_2$ 流过 $I_{SS}$。

- **左输出端。** $M_3$ 截止，$M_5$ 必须提供零电流，而处于线性区的 PMOS 只有在 $V_{SD5} = 0$ 时才能做到：$V_X = V_{DD}$。
- **右输出端。** $M_6$ 提供 $I_P$，二极管 $M_4$ 流过其余的 $I_{SS} - I_P$：

$$V_Y = V_{DD} - |V_{THP}| - \sqrt{\frac{2(I_{SS} - I_P)}{\beta_p}}.$$

- **两者之差：**

$$V_{out} = V_X - V_Y = |V_{THP}| + \sqrt{\frac{2(I_{SS} - I_P)}{\beta_p}}\quad(\text{low } V_{in1}),$$

$V_{in1}$ 较高时取其相反数。（在扫描的最两端，导通的输入器件会进入线性区，但尾电流管仍迫使 $I_{SS}$ 流过它，因此这些电平不变。）

### 第 6 步 — 数值示例

取 $I_{SS} = 1$ mA，$I_P = 0.4$ mA，所有器件 $W/L = 50/0.5$，$\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$，$\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$（示例值）：

$$
\begin{aligned}
\beta_n &= (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}, \qquad \beta_p = (38.4\ \mu\mathrm{A/V^2})(100) = 3.84\ \mathrm{mA/V^2},\\
g_{m1} &= \sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
g_{m3} &= \sqrt{2(3.84\ \mathrm{mA/V^2})(0.5 - 0.4)\ \mathrm{mA}} = 0.876\ \mathrm{mS},\\
\text{central gain} &= g_{m1}/g_{m3} = 4.18\quad(\text{plain diodes at } 0.5\ \mathrm{mA}: 3.66/1.96 = 1.87),\\
V_X = V_Y\ \text{at balance} &= 3 - 0.8 - \sqrt{\frac{2(0.1\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = 2.2 - 0.228 = 1.97\ \mathrm{V},\\
V_{out,\,kink} &= \sqrt{\frac{2(1 - 0.8)\ \mathrm{mA}}{3.84\ \mathrm{mA/V^2}}} = \sqrt{0.104}\ \mathrm{V} = 0.32\ \mathrm{V},\\
\text{end level} &= 0.8 + \sqrt{\frac{2(1 - 0.4)\ \mathrm{mA}}{3.84\ \mathrm{mA/V^2}}} = 0.8 + 0.559 = 1.36\ \mathrm{V},\\
\Delta V_{max} &= \sqrt{\frac{2(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.386\ \mathrm{V}\ \Rightarrow\ \text{full steering for } V_{in1} \le 1.307\ \mathrm{V}.
\end{aligned}
$$

**转折点在哪里？** 在电流导引公式中令 $I_{D1} - I_{D2} = -(I_{SS} - 2I_P) = -0.2$ mA：

$$
\begin{aligned}
(6.7\ \mathrm{mA/V^2})\,\Delta V_{in}\sqrt{0.2985 - \Delta V_{in}^2} &= -0.2\ \mathrm{mA}\\
\Delta V_{in}^2(0.2985 - \Delta V_{in}^2) &= (0.02985)^2 = 8.91\times10^{-4}\\
\Delta V_{in}^2 &= \frac{0.2985 - \sqrt{0.2985^2 - 4(8.91\times10^{-4})}}{2} = 3.02\times10^{-3}\ \mathrm{V^2}\\
\Delta V_{in} &= -0.055\ \mathrm{V}\ \Rightarrow\ V_{in1} = 1.5 - 0.0275 = 1.4725\ \mathrm{V}.
\end{aligned}
$$

**中心区域中的一点：$V_{in1} = 1.48$ V（$\Delta V_{in} = -0.04$ V）：**

$$
\begin{aligned}
I_{D1} - I_{D2} &= (6.7\ \mathrm{mA/V^2})(-0.04)\sqrt{0.2985 - 0.0016} = -0.146\ \mathrm{mA}\ \Rightarrow\ I_{D1} = 0.427\ \mathrm{mA},\ I_{D2} = 0.573\ \mathrm{mA},\\
V_{out} &= \sqrt{\frac{2(0.173\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} - \sqrt{\frac{2(0.027\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = 0.300 - 0.119 = 0.18\ \mathrm{V}.
\end{aligned}
$$

| $V_{in1}$ (V) | 区域 | $V_{out}$ (V) |
|---|---|---|
| 0 到 1.307 | 完全导引（$M_1$ 截止） | +1.36 |
| 1.307 到 1.4725 | $M_3$ 截止，X 接近 $V_{DD}$ | 从 +1.36 下降到台阶顶部 |
| 1.4725 | $M_3$ 开始截止 | 在 +0.32 与接近端电平的某个值之间近乎垂直的台阶 |
| 1.48 | 两个二极管都导通 | +0.18 |
| 1.49 | 两个二极管都导通 | +0.085 |
| 1.50 | 平衡点 | 0 |
| > 1.5 | 镜像 | 负值，最低到 −1.36 |

（台阶顶部到完全导引之间的形状取决于 $V_{b1}$ 和 $M_5$ 的尺寸，而它们未给定。例如，若 $M_5$ 一直饱和到 $V_X = 2.6$ V，台阶就从 0.32 V 跳到约 0.72 V，之后 $V_{out}$ 陡峭但连续地上升到 1.36 V。）

### 结果

$V_{out}$ 是一条**反相曲线**，关于 $V_{in1} = 1.5$ V 奇对称，每一侧各有三个区域：

1. **中心区域**（两个二极管都导通，$|I_{D1} - I_{D2}| < I_{SS} - 2I_P$）：斜率为 $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}/g_{m3}$。这里 $g_{m3} = \sqrt{2\beta_p(I_{SS}/2 - I_P)}$ 是在减小了的二极管电流下计算的，因此增益比普通二极管负载时更高。
2. **二极管截止**（$I_{D1} = I_P$，此时 $|V_{out}| = \sqrt{2(I_{SS} - 2I_P)/\beta_p}$）：电流较小一侧的二极管截止。该节点只由其电流源驱动，与之抗衡的 NMOS 电流又较小，因此它从 $V_{DD} - |V_{THP}| = 2.2$ V 迅速升向 $V_{DD}$，使 $V_{out}$ 出现一个近乎垂直的台阶。
3. **平坦两端**（完全导引）：一个输出位于 $V_{DD}$，另一个位于 $V_{DD} - |V_{THP}| - \sqrt{2(I_{SS} - I_P)/\beta_p}$，因此
$$V_{out} = \pm\left[|V_{THP}| + \sqrt{\frac{2(I_{SS} - I_P)}{\beta_p}}\right],$$
$V_{in1}$ 较低时为正。

示例（$I_{SS} = 1$ mA，$I_P = 0.4$ mA，$W/L = 50/0.5$）：中心增益 ≈ 4.2，转折点位于 $|V_{out}| \approx 0.32$ V，两端位于 ±1.36 V。

**常见错误。** 忽略 $M_5$/$M_6$，画出普通二极管负载的 S 形曲线，两端位于 $\pm\sqrt{2I_{SS}/\beta_p}$。电流源既改变了中心增益（二极管只流过 $I_{SS}/2 - I_P$），也改变了两端电平（截止的一侧被拉到 $V_{DD}$）。

**常见错误。** 认为增益由 $M_5$/$M_6$ 决定，即 $g_{m1}(r_{O1}\parallel r_{O5})$。二极管 $M_3$ 与 $M_5$ 并联，其 $1/g_{m3}$ 远小于 $r_{O5}$，因此只要二极管导通，增益就由它决定。

**常见错误。** 像纯二极管负载那样，把高输出电平限制在 $V_{DD} - |V_{THP}| = 2.2$ V。一旦 $I_{D1} < I_P$，二极管就截止，电流源会把该节点拉高到 $V_{DD}$。
