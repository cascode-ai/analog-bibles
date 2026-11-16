# 详细步骤 - R080

**思路。** 衬底电压越负，体效应（body effect）使 $V_{TH}$ 越高，因此在 $V_{GS}$ 固定时过驱动电压减小。在平方律模型中用过驱动电压表示 $g_m$、$r_O$ 和 $g_mr_O$，再考察衬底电压 $V_B$ 从 0 变化到 $-\infty$ 时它们各自的变化。

### 第 1 步 — 从衬底电压到阈值电压（threshold voltage）

源极接 0 V 时，$V_{SB} = V_S - V_B = -V_B$，它从 0 变化到 $+\infty$，且

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_{SB}} - 0.9487\right)\ \mathrm{V}.$$

其上升速率为

$$\frac{dV_{TH}}{dV_{SB}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} :$$

$$
\begin{aligned}
\text{at } V_{SB} = 0:&\quad \frac{0.45}{2\sqrt{0.9}} = \frac{0.45}{1.897} = 0.237,\\
\text{at } V_{SB} = 3\ \mathrm{V}:&\quad \frac{0.45}{2\sqrt{3.9}} = \frac{0.45}{3.950} = 0.114 .
\end{aligned}
$$

因此 $V_{TH}$ **在 $V_B = 0$ 附近上升得最快**，之后上升得较慢（平方根曲线），但当 $V_{SB} \to \infty$ 时它会无界增大。

### 第 2 步 — 过驱动电压、工作区与截止点

$V_{GS}$ 固定时，$V_{ov} = V_{GS} - V_{TH}$ **减小**，在 $V_B = 0$ 附近减小得最快。$V_{DS}$ 固定而 $V_{ov}$ 只会减小，因此在 $V_B = 0$ 时处于饱和区（$V_{DS} \ge V_{ov}$）的器件会一直保持饱和。

**截止点。** 由于 $V_{TH}$ 无上界，它会在一个**有限的** $V_{SB,off}$ 处达到 $V_{GS}$：

$$
\begin{aligned}
V_{GS} &= V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB,off}} - \sqrt{2|\phi_F|}\right)\\
\sqrt{2|\phi_F| + V_{SB,off}} &= \frac{V_{GS} - V_{TH0}}{\gamma} + \sqrt{2|\phi_F|}\\
V_{SB,off} &= \left[\frac{V_{GS} - V_{TH0}}{\gamma} + \sqrt{2|\phi_F|}\right]^2 - 2|\phi_F| .
\end{aligned}
$$

题目没有给出 $V_{GS}$。举例来说，取 $V_{GS} = 1.2$ V（零偏置时的过驱动电压为 0.5 V）：

$$
\begin{aligned}
\frac{V_{GS} - V_{TH0}}{\gamma} &= \frac{1.2 - 0.7}{0.45}\ \sqrt{\mathrm{V}} = 1.111\ \sqrt{\mathrm{V}},\\
\sqrt{2|\phi_F| + V_{SB,off}} &= 1.111 + 0.949 = 2.060\ \sqrt{\mathrm{V}},\\
V_{SB,off} &= (2.060)^2 - 0.9 = 4.243 - 0.9 = 3.34\ \mathrm{V}.
\end{aligned}
$$

因此器件在 $V_B \approx -3.34$ V 处截止。

### 第 3 步 — 跨导（transconductance）$g_m$

令 $\beta = \mu_nC_{ox}W/L$，则

$$I_D = \frac12\beta V_{ov}^2, \qquad g_m = \frac{\partial I_D}{\partial V_{GS}} = \beta V_{ov} = \beta\,(V_{GS} - V_{TH}) .$$

（$V_{DS}$ 固定时，因子 $(1+\lambda V_{DS})$ 只会使所有曲线按一个常数缩放，因此将其略去。）

$g_m$ 在 $V_B = 0$ 时的初值为 $g_{m0} = \beta(V_{GS} - V_{TH0})$，随着 $V_B$ 变负而**减小**，其斜率为

$$\frac{dg_m}{dV_{SB}} = -\beta\frac{dV_{TH}}{dV_{SB}} = -\frac{\beta\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} ,$$

其绝对值在 $V_B = 0$ 时最大，因此曲线起初很陡、随后变缓，呈向上凹（concave up）的形状。在 $V_{SB} = V_{SB,off}$ 处它**降为零**，此时 $V_{ov} = 0$。

### 第 4 步 — 输出电阻（output resistance）$r_O$

$$r_O = \frac{1}{\lambda I_D} = \frac{1}{\lambda\cdot\frac12\beta V_{ov}^2} = \frac{2}{\lambda\beta V_{ov}^2} .$$

$r_O$ 的初值为 $r_{O0} = 2/[\lambda\beta(V_{GS} - V_{TH0})^2]$，随着 $V_B$ 变负而**增大**（电流减小），并在截止点处按 $1/V_{ov}^2$ **发散**，在截止点之前不远处上升得非常陡峭。

### 第 5 步 — 本征增益（intrinsic gain）$g_mr_O$

$$g_mr_O = \beta V_{ov}\cdot\frac{2}{\lambda\beta V_{ov}^2} = \frac{2}{\lambda V_{ov}} = \frac{2}{\lambda\,(V_{GS} - V_{TH})} .$$

它的初值为 $2/[\lambda(V_{GS} - V_{TH0})]$，随着 $V_B$ 变负而**增大**，因为 $r_O \propto 1/V_{ov}^2$ 增大的速度比 $g_m \propto V_{ov}$ 减小的速度快。它在截止点处按 $1/V_{ov}$ **发散**，不如 $r_O$ 那样陡峭。

### 第 6 步 — $V_{GS} = 1.2$ V 时的数值

题目没有给出 $\beta$，因此将 $g_m$ 和 $r_O$ 对其在 $V_B = 0$ 时的值归一化：$g_m/g_{m0} = V_{ov}/0.5\ \mathrm{V}$，$r_O/r_{O0} = (0.5\ \mathrm{V}/V_{ov})^2$。增益的计算取 $\lambda = 0.1\ \mathrm{V^{-1}}$。以 $V_B = -1$ V 这一行为例：

$$
\begin{aligned}
V_{TH} &= 0.7 + 0.45(\sqrt{1.9} - \sqrt{0.9}) = 0.7 + 0.45(1.3784 - 0.9487) = 0.893\ \mathrm{V},\\
V_{ov} &= 1.2 - 0.893 = 0.307\ \mathrm{V},\\
g_m/g_{m0} &= 0.307/0.5 = 0.61,\\
r_O/r_{O0} &= (0.5/0.307)^2 = 2.66,\\
g_mr_O &= \frac{2}{(0.1\ \mathrm{V^{-1}})(0.307\ \mathrm{V})} = 65 .
\end{aligned}
$$

| $V_B$ (V) | $V_{TH}$ (V) | $V_{ov}$ (V) | $g_m/g_{m0}$ | $r_O/r_{O0}$ | $g_mr_O$ |
|---|---|---|---|---|---|
| 0 | 0.700 | 0.500 | 1.00 | 1.0 | 40 |
| −0.5 | 0.806 | 0.394 | 0.79 | 1.6 | 51 |
| −1 | 0.893 | 0.307 | 0.61 | 2.7 | 65 |
| −1.5 | 0.970 | 0.230 | 0.46 | 4.7 | 87 |
| −2 | 1.039 | 0.161 | 0.32 | 9.7 | 125 |
| −2.5 | 1.103 | 0.097 | 0.19 | 26 | 206 |
| −3 | 1.162 | 0.038 | 0.08 | 171 | 523 |
| −3.34 | 1.200 | 0 | 0 | ∞ | ∞ |

第一伏反向偏置使 $g_m$ 减少 39 %；下一伏只再减少原值的 29 %。

### 第 7 步 — 截止点之后

当 $V_{SB} > V_{SB,off}$ 时，平方律给出 $I_D = 0$、$g_m = 0$ 和 $r_O = \infty$，因此在该模型中 $g_mr_O$ 失去意义。实际器件则进入**弱反型（weak inversion）区**，随着 $V_{TH}$ 继续升高，$I_D$ 按指数规律衰减。此时 $g_m = I_D/(\zeta V_T)$ 按指数规律下降，其中 $V_T = kT/q \approx 26$ mV 为热电压（thermal voltage），$\zeta \approx 1.5$ 为亚阈值斜率因子（subthreshold slope factor）；而 $r_O = 1/(\lambda I_D)$ 按指数规律增大，二者之积在下式附近趋于平缓：

$$g_mr_O \approx \frac{1}{\lambda\zeta V_T} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1.5)(0.026\ \mathrm{V})} \approx 256$$

而不会发散。平方律给出的 $g_mr_O$ 发散，只是把平方律用到 $V_{ov} = 0$ 附近所造成的假象。

### 结果

当 $V_B$ 从 0 变化到 $-\infty$ 时，$V_{SB} = -V_B$ 增大，体效应使 $V_{TH} = V_{TH0} + \gamma(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|})$ 升高，因此过驱动电压 $V_{GS} - V_{TH}$ 减小：

- **$g_m = \beta(V_{GS} - V_{TH})$ 减小**：在 $V_B = 0$ 附近减小得最快（此处 $dV_{TH}/dV_{SB} = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$ 最大），之后减小得较慢，在 $V_{TH} = V_{GS}$ 时降为零。
- **$r_O = 2/(\lambda\beta V_{ov}^2)$ 增大**，并在同一点趋于无穷大。
- **$g_mr_O = 2/(\lambda V_{ov})$ 增大**，按平方律在该点同样无界增大（$V_{GS} = 1.2$ V 时，$V_B = 0$ 时为 40，−1 V 时为 65，−2 V 时为 125）。
- 器件在一个有限的衬底电压处截止：$V_{SB,off} = [(V_{GS} - V_{TH0})/\gamma + \sqrt{2|\phi_F|}]^2 - 2|\phi_F|$；当 $V_{GS} = 1.2$ V 时，对应 $V_B \approx -3.34$ V。超过该点后，平方律给出 $g_m = 0$ 和 $I_D = 0$。实际上仍有亚阈值电流流过，$g_m$ 按指数规律下降，而 $g_mr_O$ 在 $1/(\lambda\zeta V_T)$ 附近趋于平缓。

**常见错误。** 取 $V_{SB} = V_B$ 而不是 $V_S - V_B$，以致负的衬底电压看起来会**降低**阈值并提高 $g_m$。负的衬底电压使源-衬底结（source–bulk junction）反向偏置，这在 NMOS 中总是**提高** $V_{TH}$。

**常见错误。** 声称 $g_mr_O$ 是器件的常数。按平方律，$g_mr_O = 2/(\lambda V_{ov})$ 取决于过驱动电压，而衬底电压改变的恰恰就是过驱动电压。

**常见错误。** 把 $g_m$ 画成一条直线，或认为它只有在 $V_B \to -\infty$ 时才降为零。$V_{TH}$ 按平方根规律增长，因此 $g_m$ 起初下降得最快；但由于平方根无上界，器件会在一个**有限的**衬底电压处截止。
