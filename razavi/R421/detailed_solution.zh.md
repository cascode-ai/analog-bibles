# 详细步骤 - R421

**思路。** 在线性区和饱和区分别把平方律漏极电流对 $V_{GS}$ 求导（得 $g_m$）、对 $V_{DS}$ 求导（得 $1/r_O$），然后在固定过驱动电压下，跟踪 $V_{DS}$ 从 0 扫过饱和边缘时 $g_m$、$r_O$ 和 $g_mr_O$ 的变化。

### 第 1 步 — 两个电流方程

令 $\beta = \mu C_{ox}W/L$，$V_{OD} = V_{GS} - V_{TH} > 0$（固定），且 $g_m = \partial I_D/\partial V_{GS}$，$1/r_O = \partial I_D/\partial V_{DS}$。

**线性区**（$0 \le V_{DS} < V_{OD}$）：

$$I_D = \beta\left[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2\right].$$

**饱和区**（$V_{DS} \ge V_{OD}$）：

$$I_D = \tfrac12\beta\,(V_{GS} - V_{TH})^2\,(1 + \lambda V_{DS}).$$

### 第 2 步 — 线性区的跨导与输出电阻

方括号中只有第一项与 $V_{GS}$ 有关：

$$g_m = \frac{\partial}{\partial V_{GS}}\Big\{\beta\big[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2\big]\Big\} = \beta V_{DS} = \mu C_{ox}\frac WL\,V_{DS} ,$$

它与 $V_{DS}$ 成正比，并且**与过驱动电压无关**：栅极调制的是沟道电导，由此引起的电流变化等于电导的变化乘以很小的 $V_{DS}$。

$$
\begin{aligned}
\frac{1}{r_O} &= \frac{\partial}{\partial V_{DS}}\Big\{\beta\big[V_{OD}V_{DS} - \tfrac12V_{DS}^2\big]\Big\} = \beta\,(V_{OD} - V_{DS}),\\
r_O &= \frac{1}{\mu C_{ox}\dfrac WL\,(V_{GS} - V_{TH} - V_{DS})} .
\end{aligned}
$$

在 $V_{DS} = 0$ 时，这就是导通电阻 $R_{on} = 1/(\beta V_{OD})$；随着 $V_{DS}$ 升高，靠近漏极的沟道变薄，$r_O$ 增大。本征增益为

$$g_mr_O = \frac{\beta V_{DS}}{\beta(V_{OD} - V_{DS})} = \frac{V_{DS}}{V_{OD} - V_{DS}} .$$

### 第 3 步 — 饱和区的跨导与输出电阻

$$
\begin{aligned}
g_m &= \beta V_{OD}\,(1 + \lambda V_{DS}) \approx \beta V_{OD} = \frac{2I_D}{V_{OD}},\\
\frac{1}{r_O} &= \tfrac12\beta V_{OD}^2\,\lambda\ \Longrightarrow\ r_O = \frac{1}{\lambda\cdot\tfrac12\beta V_{OD}^2} \approx \frac{1}{\lambda I_D},\\
g_mr_O &\approx \frac{\beta V_{OD}}{\tfrac12\lambda\beta V_{OD}^2} = \frac{2}{\lambda V_{OD}}\quad(\text{times } 1 + \lambda V_{DS}\ \text{if that factor is kept}).
\end{aligned}
$$

在 $V_{DS} = V_{OD}$ 处，线性区的 $g_m = \beta V_{DS}$ 等于 $\beta V_{OD}$，因此 $g_m$ 是连续的（除了很小的因子 $1 + \lambda V_{DS}$ 之外）。

### 第 4 步 — 饱和边缘处 $r_O$ 的特性

当 $V_{DS} \to V_{OD}$ 时，纯线性区公式给出 $r_O \to \infty$（不含 $\lambda$ 的平方律在该处的斜率为零），而饱和区的 $r_O = 1/(\lambda I_D)$ 是有限的。这种不连续是只在饱和区使用 $\lambda$ 造成的假象。若在线性区方程中也保留这一系数，即 $I_D = \beta[V_{OD}V_{DS} - \tfrac12V_{DS}^2](1 + \lambda V_{DS})$，则得

$$\frac{1}{r_O} = \beta(V_{OD} - V_{DS})(1 + \lambda V_{DS}) + \lambda\beta\left(V_{OD}V_{DS} - \tfrac12V_{DS}^2\right),$$

它在 $V_{DS} = V_{OD}$ 处等于 $\tfrac12\lambda\beta V_{OD}^2$，恰好是饱和区的值：于是 $r_O$ 从 $R_{on}$ 平滑地上升到 $1/(\lambda I_D)$，然后保持不变。

### 第 5 步 — 数值示例与曲线

取 $V_{OD} = 0.5$ V，$\lambda = 0.1\ \mathrm{V^{-1}}$（$\lambda V_{OD} = 0.05$），把 $g_m$ 对 $\beta V_{OD}$ 归一化，把 $r_O$ 对 $R_{on} = 1/(\beta V_{OD})$ 归一化。在饱和区，$g_m \approx \beta V_{OD}$（归一化值为 1），$r_O \approx 2/(\lambda V_{OD})\,R_{on} = 40\,R_{on}$，$g_mr_O \approx 40$。

| $V_{DS}$（V） | $V_{DS}/V_{OD}$ | $g_m/(\beta V_{OD})$ | $r_O/R_{on}$ | $g_mr_O$ | 工作区 |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | 线性区 |
| 0.10 | 0.2 | 0.2 | 1.25 | 0.25 | 线性区 |
| 0.25 | 0.5 | 0.5 | 2 | 1 | 线性区 |
| 0.40 | 0.8 | 0.8 | 5 | 4 | 线性区 |
| 0.45 | 0.9 | 0.9 | 10 | 9 | 线性区 |
| 0.475 | 0.95 | 0.95 | 20 | 19 | 线性区 |
| ≥ 0.5 | ≥ 1 | ≈ 1 | ≈ 40 | ≈ 40 | 饱和区 |

（若在饱和区保留 $1 + \lambda V_{DS}$，$g_m$ 和 $g_mr_O$ 会提高百分之几，例如 $V_{DS} = 0.5$ V 时 $g_mr_O = 42$，1 V 时为 44。）

- **$g_m$：** 一条过原点、斜率为 $\beta$ 的直线，在 $V_{DS} = V_{OD}$ 时达到 $\beta V_{OD}$，此后基本平坦（只按 $1 + \lambda V_{DS}$ 上升），在饱和边缘处有一个尖锐的转折。
- **$r_O$：** 从 $R_{on}$ 开始沿双曲线 $1/[\beta(V_{OD} - V_{DS})]$ 上升，起初较慢，接近 $V_{OD}$ 时变得很陡；在饱和区大致保持在 $1/(\lambda I_D)$，这里为 $R_{on}$ 的 40 倍。（若在线性区方程中保留 $\lambda$，曲线会连续地衔接到饱和区的值，见第 4 步。）
- **$g_mr_O$：** 在 $V_{DS} = 0$ 时为零，在线性区的前半段约为 $V_{DS}/V_{OD}$（小于 1），在最后几十毫伏内急剧上升，在饱和区保持在约 $2/(\lambda V_{OD})$（这里为 40）。在进入线性区 50 mV 处（$V_{DS} = 0.45$ V），它只有 9，不到饱和值的四分之一。（若在线性区方程中保留 $\lambda$，它会平滑上升：$V_{DS} = 0.45$ V 时约为 7.3，0.49 V 时约为 22，在边界处为 42。）

器件一进入线性区，本征增益就急剧下降，因为 $g_m$ 与 $V_{DS}$ 成正比地下降，同时 $r_O$ 向 $R_{on}$ 下降；这就是放大器件必须保持在饱和区的原因。

### 结果

**线性区**（$V_{DS} < V_{OD}$）：

$$g_m = \mu C_{ox}\frac WL\,V_{DS},\qquad r_O = \frac{1}{\mu C_{ox}\dfrac WL\,(V_{GS} - V_{TH} - V_{DS})},\qquad g_mr_O = \frac{V_{DS}}{V_{OD} - V_{DS}} .$$

**饱和区**（$V_{DS} \ge V_{OD}$）：

$$g_m = \mu C_{ox}\frac WL\,V_{OD}(1 + \lambda V_{DS}) \approx \frac{2I_D}{V_{OD}},\qquad r_O \approx \frac{1}{\lambda I_D},\qquad g_mr_O \approx \frac{2}{\lambda V_{OD}} .$$

随 $V_{DS}$ 的变化：$g_m$ 从 0 线性上升到 $\beta V_{OD}$，然后几乎保持不变；$r_O$ 从 $R_{on} = 1/(\beta V_{OD})$ 上升到大得多的饱和值 $1/(\lambda I_D)$；$g_mr_O$ 在线性区很小，在边界附近急剧上升，在饱和区保持在 $\approx 2/(\lambda V_{OD})$（例如当 $V_{OD} = 0.5$ V、$\lambda = 0.1\ \mathrm{V^{-1}}$ 时，在进入线性区 50 mV 处为 9，而在饱和区为 40）。

**常见错误。** 把线性区的跨导写成与 $V_{GS} - V_{TH}$ 成正比，或者当作常数。$I_D$ 只通过 $(V_{GS} - V_{TH})V_{DS}$ 依赖于 $V_{GS}$，因此 $g_m = \beta V_{DS}$，它在 $V_{DS} = 0$ 时为零。

**常见错误。** 在线性区使用 $r_O = 1/(\lambda I_D)$。线性区中起主导作用的是沟道的电阻特性，给出的 $r_O = 1/[\beta(V_{OD} - V_{DS})]$ 要小得多。

**常见错误。** 把 $r_O$ 或 $g_mr_O$ 画成在接近饱和边缘时下降，或者认为线性区的本征增益更高。两者在到达边界之前都随 $V_{DS}$ 单调增大；简单模型在边界处的任何过冲，都是线性区方程中没有计入 $\lambda$ 造成的假象。
