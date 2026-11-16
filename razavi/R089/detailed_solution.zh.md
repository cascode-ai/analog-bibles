# 详细步骤 - R089

**思路。** $M_1$ 是源极接地的共源（common-source）器件，$R_F$ 把输入源直接连到输出端。列出输出节点的基尔霍夫电流定律（KCL）方程，并跟踪 $M_1$ 从截止经饱和区进入线性区的过程，对每个区域给出 $V_{out}$ 的方程、由小信号模型（small-signal model）求得的斜率以及区域边界。最后用一个数值示例使曲线形状更加具体。

### 第 1 步 — 输出节点方程

输出节点的 KCL 如下，其中流过 $R_D$ 和 $R_F$ 的电流经 $M_1$ 流出；没有体效应（body effect），$V_{TH} = 0.7$ V：

$$\frac{V_{DD} - V_{out}}{R_D} + \frac{V_{in} - V_{out}}{R_F} = I_{D1} .$$

输入通过两条路径到达输出：直接经过 $R_F$（同相），以及经过 $M_1$（反相）。曲线的形状正是由二者的竞争决定的。

### 第 2 步 — $M_1$ 截止（$V_{in} < 0.7$ V）：分压直线

当 $I_{D1} = 0$ 时：

$$
\begin{aligned}
R_F(V_{DD} - V_{out}) + R_D(V_{in} - V_{out}) &= 0\\
V_{out} &= \frac{R_FV_{DD} + R_DV_{in}}{R_D + R_F} .
\end{aligned}
$$

这条直线**起始于** $V_{out}(0) = V_{DD}R_F/(R_D + R_F)$，而不是 $V_{DD}$；它以斜率 $R_D/(R_D + R_F) > 0$ **上升**，在 $V_{in} = 0.7$ V 的**导通点**达到 $V_{out} = (R_FV_{DD} + 0.7R_D)/(R_D + R_F)$。

### 第 3 步 — $M_1$ 饱和：方程与小信号斜率

刚导通时漏极电位很高，因此 $M_1$ 处于**饱和区**（$V_{out} \ge V_{in} - 0.7$ V）：

$$\frac{V_{DD} - V_{out}}{R_D} + \frac{V_{in} - V_{out}}{R_F} = \frac{\beta}{2}(V_{in} - 0.7)^2 ,$$

$$V_{out} = (R_D\|R_F)\left[\frac{V_{DD}}{R_D} + \frac{V_{in}}{R_F} - \frac{\beta}{2}(V_{in} - 0.7)^2\right],$$

这是关于 $V_{in}$ 的一条开口向下的抛物线。

**斜率。** 在小信号模型中，$R_D$ 接在 $out$ 与交流地之间，$R_F$ 接在 $in$ 与 $out$ 之间，$M_1$ 从 $out$ 吸取电流 $g_mv_{in}$，其中 $g_m = \beta(V_{in} - 0.7)$。

<!-- diagram: diagram-01.cir -->

对 $out$ 节点应用 KCL：

$$
\begin{aligned}
\frac{0 - v_{out}}{R_D} + \frac{v_{in} - v_{out}}{R_F} &= g_mv_{in}\\
-v_{out}\left(\frac{1}{R_D} + \frac{1}{R_F}\right) &= v_{in}\left(g_m - \frac{1}{R_F}\right)\\
\frac{dV_{out}}{dV_{in}} &= \left(\frac{1}{R_F} - g_m\right)(R_D\|R_F) ,
\end{aligned}
$$

这也正是上述抛物线的导数。

### 第 4 步 — $V_{out}$ 的最大值

在略高于 0.7 V 处，$g_m$ 很小，因此 $1/R_F > g_m$，斜率**仍为正**。当两条路径相互平衡时，斜率为零：

$$
\begin{aligned}
g_m &= \frac{1}{R_F}\\
\beta(V_{in} - 0.7) &= \frac{1}{R_F}\\
V_{in,pk} &= 0.7\ \mathrm{V} + \frac{1}{\beta R_F} .
\end{aligned}
$$

这就是 $V_{out}$ 的**峰值**所在。将 $V_{in,pk} - 0.7 = 1/(\beta R_F)$ 代入抛物线：

$$
\begin{aligned}
V_{out,pk} &= (R_D\|R_F)\left[\frac{V_{DD}}{R_D} + \frac{0.7}{R_F} + \frac{1}{\beta R_F^2} - \frac{\beta}{2}\cdot\frac{1}{\beta^2R_F^2}\right]\\
&= \underbrace{(R_D\|R_F)\left[\frac{V_{DD}}{R_D} + \frac{0.7}{R_F}\right]}_{V_{out}\text{ at turn-on}} + \frac{R_D\|R_F}{2\beta R_F^2} .
\end{aligned}
$$

峰值高出导通点的部分 $(R_D\|R_F)/(2\beta R_F^2)$ 在 $\beta R_F$ 较大时很小；此时峰值位于略高于 0.7 V 处。

越过峰值后，斜率为**负**（反相），当 $g_m \gg 1/R_F$ 时趋于共源增益 $-g_m(R_D\|R_F)$。

### 第 5 步 — $M_1$ 进入线性区；扫描的终点

随着 $V_{out}$ 下降，$M_1$ 在下式处**进入线性区**：

$$V_{out} = V_{in} - 0.7\ \mathrm{V},$$

此后

$$\frac{V_{DD} - V_{out}}{R_D} + \frac{V_{in} - V_{out}}{R_F} = \beta\left[(V_{in} - 0.7)V_{out} - \tfrac12V_{out}^2\right].$$

**线性区中的斜率。** 此时 $g_m = \beta V_{DS} = \beta V_{out}$，沟道电导为 $g_{ds} = \beta(V_{in} - 0.7 - V_{out})$。在第 3 步的 KCL 中，给器件电流加上 $g_{ds}v_{out}$：

$$\frac{dV_{out}}{dV_{in}} = \frac{1/R_F - g_m}{1/R_D + 1/R_F + g_{ds}} .$$

越深入线性区，$g_{ds}$ 越大，因此斜率保持为负，但其**幅值减小**：曲线在一个较低的值处趋于平坦。

**终点（$V_{in} = V_{DD} = 3$ V）：**

$$(3 - V_{out})\left(\frac{1}{R_D} + \frac{1}{R_F}\right) = \beta\left[2.3V_{out} - \tfrac12V_{out}^2\right],$$

由此得到一个较低但不为零的 $V_{out}$，因为 $R_D$ 和 $R_F$（此时接 3 V 的输入）都向输出端注入电流。

当 $V_{out} > V_{in}$ 时，$R_F$ 中的电流从输出流向输入；一旦 $V_{in} > V_{out}$，电流就反向，这发生在曲线下降段的某处。

### 第 6 步 — 数值示例

为便于说明，取 $\beta = 0.5\ \mathrm{mA/V^2}$，$R_D = R_F = 10\ \mathrm{k}\Omega$（$R_D\|R_F = 5\ \mathrm{k}\Omega$）：

- **截止：** $V_{out} = (3 + V_{in})/2$：$V_{in} = 0$ 时为 1.5 V，0.7 V 时为 1.85 V。
- **饱和区：** $V_{out} = 5\ \mathrm{k}\Omega\left[0.3\ \mathrm{mA} + V_{in}/10\ \mathrm{k}\Omega - 0.25\ \mathrm{mA/V^2}\,(V_{in} - 0.7)^2\right] = 1.5 + 0.5V_{in} - 1.25(V_{in} - 0.7)^2$。
- **峰值：** $V_{in,pk} = 0.7 + 1/(0.5\ \mathrm{mA/V^2}\times10\ \mathrm{k}\Omega) = 0.7 + 0.2 = 0.9$ V，$V_{out,pk} = 1.85 + 5\ \mathrm{k}\Omega/[2(0.5\ \mathrm{mA/V^2})(10\ \mathrm{k}\Omega)^2] = 1.85 + 0.05 = 1.90$ V。
- **进入线性区：** 在饱和区抛物线中令 $V_{out} = V_{in} - 0.7 \equiv x$，得 $1.5 + 0.5(x + 0.7) - 1.25x^2 = x$，即 $1.25x^2 + 0.5x - 1.85 = 0$，因此 $x = (-0.5 + \sqrt{0.25 + 9.25})/2.5 = 1.033$。进入点为 $V_{in} = 1.733$ V，$V_{out} = 1.033$ V。
- **终点：** 在 $V_{in} = 3$ V 处，$(3 - V_{out})(0.2\ \mathrm{mS}) = 0.5\ \mathrm{mA/V^2}\,(2.3V_{out} - 0.5V_{out}^2)$，即 $2.5V_{out}^2 - 13.5V_{out} + 6 = 0$，因此 $V_{out} = (13.5 - \sqrt{122.25})/5 = 0.489$ V。

| $V_{in}$ (V) | $V_{out}$ (V) | $M_1$ 的工作区 | 斜率 |
|---|---|---|---|
| 0 | 1.500 | 截止 | +0.5 |
| 0.7 | 1.850 | 导通点 | +0.5 |
| 0.9 | 1.900 | 饱和区（峰值） | 0 |
| 1.2 | 1.788 | 饱和区 | −0.75 |
| 1.5 | 1.450 | 饱和区 | −1.5 |
| 1.733 | 1.033 | 进入线性区 | −2.1 |
| 2.0 | 0.757 | 线性区 | −0.59 |
| 2.5 | 0.575 | 线性区 | −0.23 |
| 3.0 | 0.489 | 线性区 | −0.13 |

### 结果

- **$V_{in} < 0.7$ V（$M_1$ 截止）：** $V_{out} = (R_FV_{DD} + R_DV_{in})/(R_D + R_F)$，这是一条从 $V_{DD}R_F/(R_D + R_F)$ 开始、斜率为 $R_D/(R_D + R_F)$ 的上升直线。
- **$V_{in} > 0.7$ V，$M_1$ 饱和（$V_{out} > V_{in} - 0.7$ V）：** $(V_{DD} - V_{out})/R_D + (V_{in} - V_{out})/R_F = \tfrac12\beta(V_{in} - 0.7)^2$，斜率为 $(1/R_F - g_m)(R_D\|R_F)$。斜率在略高于 0.7 V 处仍为正，在 $g_m = 1/R_F$ 处，即 $V_{in} = 0.7 + 1/(\beta R_F)$ 处（$V_{out}$ 的**最大值**）为零，此后为负，并趋于 $-g_m(R_D\|R_F)$。
- 从 $V_{out} = V_{in} - 0.7$ V 起，**$M_1$ 处于线性区**：曲线继续下降，斜率逐渐减小，在 $V_{in} = V_{DD}$ 时降到一个较低的终值，由 $(3 - V_{out})(1/R_D + 1/R_F) = \beta[2.3V_{out} - V_{out}^2/2]$ 给出。
- 一旦 $V_{in} > V_{out}$，$R_F$ 中的电流就反向。
- **转折点：** $V_{in} = 0.7$ V 处导通，$g_m = 1/R_F$ 处达到峰值，$V_{out} = V_{in} - 0.7$ V 处进入线性区。

**常见错误。** 认为 $M_1$ 截止时 $V_{out} = V_{DD}$。$R_F$ 把输出端与输入源相连，因此输出位于分压直线上，该直线的起点远低于 $V_{DD}$，并随 $V_{in}$ 上升。

**常见错误。** 让曲线恰好从 $V_{in} = 0.7$ V 处开始下降。导通时 $g_m = 0$，因此经过 $R_F$ 的路径仍占主导；$V_{out}$ 会继续上升，直到 $g_m = 1/R_F$。

**常见错误。** 认为 $M_1$ 刚导通就处于线性区。此时它的漏极电压接近曲线的最高处，因此处于饱和区；只有当 $V_{out}$ 降到 $V_{in} - 0.7$ V 时，它才进入线性区。
