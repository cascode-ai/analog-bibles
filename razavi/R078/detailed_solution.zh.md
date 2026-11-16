# 详细步骤 - R078

**思路。** $V_{GS}$ 固定时，器件在 $V_{DS}$ 较小时工作在线性区，一旦 $V_{DS}$ 超过过驱动电压（overdrive voltage）就进入饱和区。在每个区域内，对平方律（square law）电流求导，得到 $g_m = \partial I_D/\partial V_{GS}$ 和漏源电导 $\partial I_D/\partial V_{DS}$；二者之比就是本征增益，逐点计算即可。

### 第 1 步 — 偏置量与线性区/饱和区边界

$$
\begin{aligned}
\frac{W}{L} &= \frac{50\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 100,\\
\beta &= \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}.
\end{aligned}
$$

源极和衬底都接 0 V，因此 $V_{TH} = V_{TH0} = 0.7$ V，且

$$V_{ov} = V_{GS} - V_{TH} = 1.2\ \mathrm{V} - 0.7\ \mathrm{V} = 0.5\ \mathrm{V} .$$

因此，器件在 $0 \le V_{DS} < 0.5$ V 时工作在**线性区**，在 $0.5\ \mathrm{V} \le V_{DS} \le 3$ V 时工作在**饱和区**。

### 第 2 步 — 线性区的小信号参数

由 $I_D = \beta\left[(V_{GS} - V_{TH})V_{DS} - \frac12V_{DS}^2\right]$ 得：

$$
\begin{aligned}
g_m &= \frac{\partial I_D}{\partial V_{GS}} = \beta V_{DS},\\
\frac{1}{r_{ds}} &= \frac{\partial I_D}{\partial V_{DS}} = \beta\left[(V_{GS} - V_{TH}) - V_{DS}\right] = \beta\,(V_{ov} - V_{DS}),\\
g_mr_{ds} &= \frac{\beta V_{DS}}{\beta\,(V_{ov} - V_{DS})} = \frac{V_{DS}}{V_{ov} - V_{DS}} = \frac{V_{DS}}{0.5\ \mathrm{V} - V_{DS}} .
\end{aligned}
$$

$\beta$ 被约去，因此线性区的曲线只取决于 $V_{DS}$ 和 $V_{ov}$。

**算例：$V_{DS} = 0.1$ V。**

$$
\begin{aligned}
g_m &= (13.4\ \mathrm{mA/V^2})(0.1\ \mathrm{V}) = 1.34\ \mathrm{mS},\\
r_{ds} &= \frac{1}{(13.4\ \mathrm{mA/V^2})(0.5 - 0.1)\ \mathrm{V}} = \frac{1}{5.36\ \mathrm{mS}} = 186.6\ \Omega,\\
g_mr_{ds} &= (1.34\ \mathrm{mS})(186.6\ \Omega) = 0.25 .
\end{aligned}
$$

**其他各点**由 $V_{DS}/(0.5 - V_{DS})$ 求得：

| $V_{DS}$ (V) | 0 | 0.05 | 0.1 | 0.2 | 0.25 | 0.3 | 0.4 | 0.45 | 0.48 |
|---|---|---|---|---|---|---|---|---|---|
| $g_mr_{ds}$ | 0 | 0.11 | 0.25 | 0.67 | 1.0 | 1.5 | 4.0 | 9.0 | 24 |

增益在 $V_{DS} = 0$ 时为零（此时 $g_m = \beta V_{DS} = 0$），起始斜率为 $1/V_{ov} = 2\ \mathrm{V^{-1}}$，直到 $V_{DS} = V_{ov}/2 = 0.25$ V 时才达到 1。在边界附近增益急剧上升，这是因为沟道趋于夹断（pinch-off），$r_{ds}$ 变得非常大。

### 第 3 步 — 饱和区的小信号参数（简单模型）

饱和电流为 $I_D = \frac12\beta V_{ov}^2(1 + \lambda V_{DS})$。在简单模型中，$I_D$ 和 $g_m$ 中的因子 $(1+\lambda V_{DS})$ 被略去，沟道长度调制（channel-length modulation）只通过 $r_O = 1/(\lambda I_D)$ 体现：

$$
\begin{aligned}
I_D &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{V})^2 = \tfrac12(13.4)(0.25)\ \mathrm{mA} = 1.675\ \mathrm{mA},\\
g_m &= \beta V_{ov} = (13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{V}) = 6.7\ \mathrm{mS},\\
r_O &= \frac{1}{\lambda I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1.675\ \mathrm{mA})} = 5.97\ \mathrm{k}\Omega,\\
g_mr_O &= (6.7\ \mathrm{mS})(5.97\ \mathrm{k}\Omega) = 40 .
\end{aligned}
$$

用符号表示，$g_mr_O = \beta V_{ov}\big/\big(\lambda\cdot\tfrac12\beta V_{ov}^2\big) = 2/(\lambda V_{ov})$。验证：

$$\frac{2}{\lambda V_{ov}} = \frac{2}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{V})} = 40 .$$

在该模型中，$g_m$ 和 $r_O$ 都与 $V_{DS}$ 无关，因此在 $0.5\ \mathrm{V} \le V_{DS} \le 3$ V 范围内，**曲线平坦地保持在 40**。

### 第 4 步 — 改进：保留因子 $(1+\lambda V_{DS})$

**饱和区。** 对 $I_D = \frac12\beta V_{ov}^2(1 + \lambda V_{DS})$ 精确求导：

$$
\begin{aligned}
g_m &= \frac{\partial I_D}{\partial V_{GS}} = \beta V_{ov}(1 + \lambda V_{DS}),\\
\frac{1}{r_O} &= \frac{\partial I_D}{\partial V_{DS}} = \frac12\beta V_{ov}^2\lambda,\\
g_mr_O &= \frac{\beta V_{ov}(1 + \lambda V_{DS})}{\frac12\lambda\beta V_{ov}^2} = \frac{2}{\lambda V_{ov}}(1 + \lambda V_{DS}) = 40\,(1 + 0.1\,V_{DS}) .
\end{aligned}
$$

由此在 $V_{DS} = 0.5$ V 时得 42，1 V 时得 44，2 V 时得 48，**3 V 时得 52**：这是一条平缓上升的直线，而不是一条水平线。

**线性区（保留同一因子）。** 写出 $I_D = \beta(V_{ov}V_{DS} - \frac12V_{DS}^2)(1+\lambda V_{DS})$，并利用乘积求导法则，得

$$
\begin{aligned}
g_m &= \beta V_{DS}(1 + \lambda V_{DS}),\\
\frac{1}{r_{ds}} &= \beta(V_{ov} - V_{DS})(1 + \lambda V_{DS}) + \beta\lambda\left(V_{ov}V_{DS} - \tfrac12V_{DS}^2\right).
\end{aligned}
$$

在边界处（$V_{DS} = V_{ov}$），$1/r_{ds}$ 的第一项为零，第二项变为 $\frac12\beta\lambda V_{ov}^2$，恰好等于饱和区的值。因此增益在边界处不再发散，而是达到 $2(1+\lambda V_{ov})/(\lambda V_{ov}) = 42$，并与饱和区的直线连续衔接。远离边界处，数值几乎不变：0.1 V 时为 0.25，0.25 V 时为 0.97，0.4 V 时为 3.6，0.45 V 时为 7.3，0.48 V 时为 15。

### 第 5 步 — 曲线图

横轴为 $V_{DS}$，从 0 到 3 V；纵轴为 $g_m \times r_{ds}$：

| 区域 | $V_{DS}$ | 本征增益 | 形状 |
|---|---|---|---|
| 线性区 | 0 → 0.5 V | $V_{DS}/(0.5 - V_{DS})$：在 0、0.1、0.25、0.4、0.45 V 处分别为 0、0.25、1、4、9 | 从 0 开始，起始斜率为 2 V⁻¹，随后上升得越来越陡 |
| 边界 | 0.5 V | 跃升至平台（若线性区方程中保留 λ，则 ≈ 42） | 转折点 |
| 饱和区 | 0.5 → 3 V | 40（简单模型），或 $40(1 + 0.1V_{DS})$：42 → 52 | 平坦，或平缓的线性上升 |

在线性区，漏极对电流的控制作用几乎与栅极一样强，因此 $r_{ds}$ 只有几百欧姆；夹断之后只剩下沟道长度调制效应，$r_O$ 跃升到千欧量级，增益也跃升到 $2/(\lambda V_{ov})$。

### 结果

- **线性区，$0 \le V_{DS} < 0.5$ V：** $g_mr_{ds} = V_{DS}/(0.5\ \mathrm{V} - V_{DS})$，从 0 开始上升（0.1 V 时为 0.25，0.25 V 时为 1，0.4 V 时为 4，0.45 V 时为 9），并在接近边界时急剧攀升。
- **转折点**位于 $V_{DS} = V_{GS} - V_{TH} = 0.5$ V（$\beta = 13.4\ \mathrm{mA/V^2}$，$V_{ov} = 0.5$ V）。
- **饱和区，$0.5\ \mathrm{V} \le V_{DS} \le 3$ V**（$I_D \approx 1.68$ mA，$g_m = 6.7$ mS，$r_O \approx 6$ kΩ）：平台 $g_mr_O = 2/(\lambda V_{ov}) = 40$。若在 $g_m$ 中保留因子 $(1+\lambda V_{DS})$，则为 $40(1 + 0.1V_{DS})$，从边界处的 42 平缓上升到 3 V 时的 52。

**常见错误。** 把转折点放在 $V_{DS} = V_{GS} = 1.2$ V 或 $V_{DS} = V_{TH} = 0.7$ V 处。边界由过驱动电压决定：$V_{DS} = V_{GS} - V_{TH} = 0.5$ V。

**常见错误。** 在线性区使用饱和区公式 $g_m = \beta V_{ov}$，从而在线性区得到很大的增益。在线性区，$g_m = \beta V_{DS}$ 更小，而 $r_{ds} = 1/[\beta(V_{ov} - V_{DS})]$ 只有几百欧姆。

**常见错误。** 漏掉 $I_D = \tfrac12\beta V_{ov}^2$ 中的 $\tfrac12$，这会使 $r_O$ 减半，得到 20 的平台，而不是 $2/(\lambda V_{ov}) = 40$。
