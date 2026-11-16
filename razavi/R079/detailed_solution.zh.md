# 详细步骤 - R079

**思路。** 负的衬底电压通过体效应使阈值电压（threshold voltage）升高。先求出新的 $V_{TH}$ 和减小后的过驱动电压，再用平方律（square law）方程和新的阈值，分别计算线性区和饱和区中的本征增益 $g_m r_{ds}$。

### 第 1 步 — 考虑体效应的阈值电压

$$V_{SB} = V_S - V_B = 0 - (-1\ \mathrm{V}) = +1\ \mathrm{V},$$

它使源-衬底结（source–bulk junction）反向偏置，从而提高阈值：

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right),$$

$$
\begin{aligned}
\sqrt{2|\phi_F| + V_{SB}} &= \sqrt{0.9 + 1}\ \sqrt{\mathrm{V}} = \sqrt{1.9}\ \sqrt{\mathrm{V}} = 1.3784\ \sqrt{\mathrm{V}},\\
\sqrt{2|\phi_F|} &= \sqrt{0.9}\ \sqrt{\mathrm{V}} = 0.9487\ \sqrt{\mathrm{V}},\\
V_{TH} &= 0.7\ \mathrm{V} + (0.45\ \mathrm{V^{1/2}})(1.3784 - 0.9487)\ \mathrm{V^{1/2}}\\
&= 0.7\ \mathrm{V} + (0.45)(0.4297)\ \mathrm{V} = 0.7\ \mathrm{V} + 0.1934\ \mathrm{V} = 0.893\ \mathrm{V}.
\end{aligned}
$$

阈值升高了约 0.19 V。

### 第 2 步 — 过驱动电压、电流因子与工作区边界

$$V_{ov} = V_{GS} - V_{TH} = 1.2\ \mathrm{V} - 0.893\ \mathrm{V} = 0.307\ \mathrm{V}$$

（无体效应时为 0.5 V），以及

$$
\begin{aligned}
\frac{W}{L} &= \frac{50}{0.5} = 100,\\
\beta &= \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}.
\end{aligned}
$$

器件在 $0 \le V_{DS} < 0.307$ V 时工作在**线性区**，在 $0.307\ \mathrm{V} \le V_{DS} \le 3$ V 时工作在**饱和区**：转折点从 0.5 V（无体效应）下移到 0.31 V。

$g_{mb}$ 不出现：题目要求的是栅跨导，而且无论如何，衬底和源极都处于固定电位，因此 $v_{bs} = 0$。体效应只通过更高的 $V_{TH}$ 和更小的 $V_{ov}$ 起作用。

### 第 3 步 — 线性区（$V_{DS} < 0.307$ V）

由 $I_D = \beta\left[V_{ov}V_{DS} - \frac12V_{DS}^2\right]$ 得：

$$
\begin{aligned}
g_m &= \frac{\partial I_D}{\partial V_{GS}} = \beta V_{DS}, \qquad \frac{1}{r_{ds}} = \frac{\partial I_D}{\partial V_{DS}} = \beta\,(V_{ov} - V_{DS}),\\
g_mr_{ds} &= \frac{\beta V_{DS}}{\beta\,(V_{ov} - V_{DS})} = \frac{V_{DS}}{0.307\ \mathrm{V} - V_{DS}} .
\end{aligned}
$$

**算例：$V_{DS} = 0.1$ V。**

$$
\begin{aligned}
g_m &= (13.4\ \mathrm{mA/V^2})(0.1\ \mathrm{V}) = 1.34\ \mathrm{mS},\\
r_{ds} &= \frac{1}{(13.4\ \mathrm{mA/V^2})(0.307 - 0.1)\ \mathrm{V}} = \frac{1}{2.77\ \mathrm{mS}} = 361\ \Omega,\\
g_mr_{ds} &= (1.34\ \mathrm{mS})(361\ \Omega) = 0.48 .
\end{aligned}
$$

**其他各点：**

| $V_{DS}$ (V) | 0 | 0.05 | 0.1 | 0.15 | 0.2 | 0.25 | 0.28 | 0.30 |
|---|---|---|---|---|---|---|---|---|
| $g_mr_{ds}$ | 0 | 0.19 | 0.48 | 0.96 | 1.9 | 4.4 | 10.5 | 45 |

增益在 $V_{DS} = 0$ 时为零，在 $V_{DS} = V_{ov}/2 \approx 0.15$ V 时等于 1，并在接近边界时上升得越来越陡；在边界处，这一简单模型（线性区方程中未计入 $\lambda$）会发散。若在线性区方程中保留 $(1+\lambda V_{DS})$，则 $1/r_{ds}$ 在边界处趋于 $\frac12\lambda\beta V_{ov}^2$ 而不是零，曲线与饱和区的值连续衔接（0.1 V 时为 0.48，0.25 V 时为 4.1，0.3 V 时为 27，边界处为 67）。

### 第 4 步 — 饱和区（$V_{DS} \ge 0.307$ V）

取 $I_D = \frac12\beta V_{ov}^2$（简单模型）、$g_m = \beta V_{ov}$ 和 $r_O = 1/(\lambda I_D)$：

$$
\begin{aligned}
V_{ov}^2 &= (0.307\ \mathrm{V})^2 = 0.0940\ \mathrm{V^2},\\
I_D &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.0940\ \mathrm{V^2}) = 0.630\ \mathrm{mA},\\
g_m &= (13.4\ \mathrm{mA/V^2})(0.307\ \mathrm{V}) = 4.11\ \mathrm{mS},\\
r_O &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.630\ \mathrm{mA})} = 15.9\ \mathrm{k}\Omega,\\
g_mr_O &= (4.11\ \mathrm{mS})(15.9\ \mathrm{k}\Omega) = 65 .
\end{aligned}
$$

用符号表示：$g_mr_O = \beta V_{ov}/(\lambda\cdot\frac12\beta V_{ov}^2) = 2/(\lambda V_{ov}) = 2/[(0.1\ \mathrm{V^{-1}})(0.3066\ \mathrm{V})] = 65.2$，结果相同，且与 $V_{DS}$ 无关：曲线**平坦地保持在约 65**。

**若保留因子 $(1+\lambda V_{DS})$**，即取 $I_D = \frac12\beta V_{ov}^2(1+\lambda V_{DS})$：

$$
g_m = \beta V_{ov}(1+\lambda V_{DS}), \qquad \frac{1}{r_O} = \frac{\partial I_D}{\partial V_{DS}} = \frac12\lambda\beta V_{ov}^2,
$$

$$
g_mr_O = \frac{2}{\lambda V_{ov}}(1 + \lambda V_{DS}) = 65.2\,(1 + 0.1\,V_{DS}) ,
$$

它从边界处的约 67 平缓上升到 $V_{DS} = 3$ V 时的 $65.2\times1.3 \approx 85$。

### 第 5 步 — 曲线图，以及与衬底电压为零时的比较

横轴为 $V_{DS}$，从 0 到 3 V；纵轴为 $g_m r_{ds}$：

| 区域 | $V_{DS}$ | 本征增益 |
|---|---|---|
| 线性区 | 0 → 0.307 V | $V_{DS}/(0.307 - V_{DS})$：在 0、0.1、0.2、0.25 V 处分别为 0、0.48、1.9、4.4；接近边界时急剧上升 |
| 转折点 | 0.307 V | $V_{DS} = V_{GS} - V_{TH}$ |
| 饱和区 | 0.307 → 3 V | 平坦，≈ 65（或 $65(1 + 0.1V_{DS})$：67 → 85） |

曲线形状与衬底接 0 V 时相同，但：

| | $V_B = 0$ | $V_B = -1$ V |
|---|---|---|
| $V_{TH}$ | 0.700 V | 0.893 V |
| $V_{ov}$（转折点） | 0.500 V | 0.307 V |
| 饱和区中的 $I_D$ | 1.68 mA | 0.63 mA |
| 饱和区中的 $g_m$ | 6.7 mS | 4.1 mS |
| $g_mr_O$ 平台 | 40 | 65 |

较小的过驱动电压使 $I_D \propto V_{ov}^2$ 比 $g_m \propto V_{ov}$ 下降得更快，因此 $g_m/I_D = 2/V_{ov}$ 增大，$g_mr_O = (g_m/I_D)/\lambda$ 也随之增大，代价是电流更小、器件速度更慢。

### 结果

当 $V_B = -1$ V 时，体效应使阈值升高到 $V_{TH} = 0.7 + 0.45(\sqrt{1.9} - \sqrt{0.9}) \approx 0.893$ V，因此 $V_{ov} \approx 0.307$ V。

- **线性区，$V_{DS} < 0.307$ V：** $g_mr_{ds} = V_{DS}/(0.307\ \mathrm{V} - V_{DS})$，从 0 开始上升（0.05 V 时为 0.19，0.1 V 时为 0.48，0.2 V 时为 1.9），并在接近边界时急剧攀升。
- **转折点**位于 $V_{DS} \approx 0.31$ V（衬底电压为零时为 0.5 V）。
- **饱和区：** 平台 $g_mr_O = 2/(\lambda V_{ov}) \approx 65$（若在 $g_m$ 中保留因子 $(1+\lambda V_{DS})$，则从边界处的约 67 上升到 3 V 时的约 85），高于衬底电压为零时的平台 40，而电流则降到约 0.63 mA。

**常见错误。** 弄错 $V_{SB}$ 的符号，从而断定负的衬底电压会**降低**阈值。$V_{SB} = V_S - V_B = +1$ V 会**提高** $V_{TH}$；若取 $V_{SB} = -1$ V，公式中甚至会出现 $\sqrt{0.9 - 1}$。

**常见错误。** 忽略体效应，照搬衬底电压为零时的曲线（转折点在 0.5 V，平台为 40）。衬底偏置会同时移动转折点和平台。

**常见错误。** 在本征增益中把 $g_{mb}$ 加到 $g_m$ 上。衬底和源极都处于固定电位，因此 $v_{bs} = 0$，$g_{mb}$ 电流源在这里不起作用。
