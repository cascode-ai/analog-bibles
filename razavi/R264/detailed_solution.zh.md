# 详细步骤 - R264

**思路。** 节点 X 上只有 $C_1$、二极管连接的 $M_2$ 和 $M_1$ 的栅极，没有电流源（current source）：$C_1$ 通过 $M_2$ 放电，其电流是 $V_X$ 的平方律函数。精确求解这个非线性微分方程。$M_1$ 与 $M_2$ 的栅源电压相同，因此它把逐渐衰减的放电电流镜像到 $R_1$ 中，由此得到 $V_Y(t)$。

### 第 1 步 — 平凡情况 $V_0 \le V_{TH}$

若 $V_0 \le V_{TH}$，两个晶体管从一开始就截止——在平方律模型中不存在亚阈值（subthreshold）电流——因此没有任何电流给 $C_1$ 放电：

$$V_X(t) = V_0, \qquad V_Y(t) = V_{DD} \quad\text{(no current in } R_1).$$

以下假设 $V_0 > V_{TH}$。

### 第 2 步 — $V_X$ 的放电方程

取 $\lambda = 0$，$V_{TH} = 0.7$ V。离开电容的唯一电流是 $M_2$ 的漏极电流，而二极管连接的 $M_2$ 只要导通就处于饱和区（saturation region）：

$$-C_1\frac{dV_X}{dt} = I_{D2} = \frac{\beta}{2}\left(V_X - V_{TH}\right)^2 .$$

令过驱动电压（overdrive voltage）$u = V_X - V_{TH}$，则 $u(0) = V_0 - V_{TH}$，$du = dV_X$：

$$\frac{du}{dt} = -\frac{\beta}{2C_1}u^2 .$$

### 第 3 步 — 求解

分离变量并从 0 到 $t$ 积分：

$$
\begin{aligned}
\frac{du}{u^2} &= -\frac{\beta}{2C_1}\,dt\\
\left[-\frac{1}{u}\right]_{u(0)}^{u(t)} &= -\frac{\beta}{2C_1}\,t\\
\frac{1}{u(t)} &= \frac{1}{V_0 - V_{TH}} + \frac{\beta t}{2C_1}\\
u(t) &= \frac{V_0 - V_{TH}}{1 + \dfrac{\beta(V_0 - V_{TH})}{2C_1}t} .
\end{aligned}
$$

因此

$$V_X(t) = V_{TH} + \frac{V_0 - V_{TH}}{1 + t/\tau}, \qquad \tau = \frac{2C_1}{\beta(V_0 - V_{TH})}.$$

**波形形状。** $V_X$ 从 $V_0$ 开始，起初下降很快，初始斜率为

$$\left.\frac{dV_X}{dt}\right|_{0} = -\frac{V_0 - V_{TH}}{\tau} = -\frac{\beta(V_0 - V_{TH})^2}{2C_1} = -\frac{I_{D2}(0)}{C_1}.$$

随后下降变慢，并按 $1/t$ 的规律趋近 **$V_{TH}$ 而不是零**，在平方律模型中永远不会完全达到。这种衰减是双曲型的，而不是指数型的，因为放电电导 $g_m = \beta u$ 随 $u$ 减小。

### 第 4 步 — $M_1$ 的电流与 $V_Y(t)$

$M_1$ 与 $M_2$ 的栅源电压相同，因此在饱和时它流过相同的电流：

$$I_{D1}(t) = \frac{\beta}{2}\left(V_X - V_{TH}\right)^2 = \frac{\beta}{2}\frac{(V_0 - V_{TH})^2}{(1 + t/\tau)^2},$$

$$V_Y(t) = V_{DD} - R_1I_{D1}(t) = V_{DD} - \frac{R_1\beta(V_0 - V_{TH})^2}{2\,(1 + t/\tau)^2}.$$

- **初始值：** $V_Y(0) = V_{DD} - R_1\tfrac{\beta}{2}(V_0 - V_{TH})^2$，是一个较低的值。
- **随后**，随着镜像电流逐渐消失，$V_Y$ **向 $V_{DD}$ 上升**，起初很快，之后呈现按 $1/t^2$ 缓慢衰减的拖尾。

**$M_1$ 的饱和检查。** 饱和要求 $V_Y \ge V_X - V_{TH} = u$。若 $V_{DD} - R_1\tfrac{\beta}{2}(V_0 - V_{TH})^2 < V_0 - V_{TH}$（$R_1$ 较大或 $V_0$ 较大），则 $M_1$ 一开始处于**线性区**，$V_Y$ 的起始值更低，由下式的解给出：

$$\frac{V_{DD} - V_Y}{R_1} = \beta\left[(V_X - V_{TH})V_Y - \tfrac12V_Y^2\right].$$

随着 $u$ 减小，$M_1$ 回到饱和区，上面的公式随之适用；无论哪种情况，$V_Y$ 都单调上升并趋向 $V_{DD}$。$M_1$ 处于线性区并不影响 $V_X$，后者只取决于 $C_1$ 和 $M_2$。

### 第 5 步 — 数值示例

取 $\beta = 2.68\ \mathrm{mA/V^2}$（$W/L = 10/0.5$，$\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$），$C_1 = 10$ pF，$V_0 = 1.5$ V，$R_1 = 2\ \mathrm{k}\Omega$：

$$
\begin{aligned}
V_0 - V_{TH} &= 0.8\ \mathrm{V},\\
\tau &= \frac{2(10\ \mathrm{pF})}{(2.68\ \mathrm{mA/V^2})(0.8\ \mathrm{V})} = \frac{20\times10^{-12}}{2.144\times10^{-3}}\ \mathrm{s} = 9.33\ \mathrm{ns},\\
I_{D1}(0) &= \tfrac12(2.68\ \mathrm{mA/V^2})(0.8\ \mathrm{V})^2 = 0.858\ \mathrm{mA},\\
V_Y(0) &= 3 - (2\ \mathrm{k}\Omega)(0.858\ \mathrm{mA}) = 1.28\ \mathrm{V} \ \ (> 0.8\ \mathrm{V}, \text{ so } M_1 \text{ is saturated}).
\end{aligned}
$$

| $t$ | $1 + t/\tau$ | $V_X$ (V) | $I_{D1}$ | $V_Y$ (V) |
|---|---|---|---|---|
| 0 | 1 | 1.500 | 858 μA | 1.28 |
| 4.7 ns ($\tau/2$) | 1.5 | 1.233 | 381 μA | 2.24 |
| 9.3 ns ($\tau$) | 2 | 1.100 | 214 μA | 2.57 |
| 18.7 ns ($2\tau$) | 3 | 0.967 | 95 μA | 2.81 |
| 47 ns ($5\tau$) | 6 | 0.833 | 24 μA | 2.95 |
| 93 ns ($10\tau$) | 11 | 0.773 | 7.1 μA | 2.99 |

例如，在 $t = \tau$ 时：$V_X = 0.7 + 0.8/2 = 1.1$ V，$I_{D1} = 858\ \mu\mathrm{A}/2^2 = 214\ \mu\mathrm{A}$，$V_Y = 3 - (2\ \mathrm{k}\Omega)(214\ \mu\mathrm{A}) = 2.57$ V。

若改取 $R_1 = 10\ \mathrm{k}\Omega$，$M_1$ 将从线性区开始，$V_Y(0) \approx 0.15$ V，并在 $u = 0.437$ V 时回到饱和区，即 $1 + t/\tau = 0.8/0.437 = 1.83$ 时，约为 $0.8\tau$；此后它沿同类的上升曲线变化。

### 结果

当 $V_0 > V_{TH}$ 时：

$$V_X(t) = V_{TH} + \frac{V_0 - V_{TH}}{1 + t/\tau}, \qquad \tau = \frac{2C_1}{\beta(V_0 - V_{TH})},$$

- **$V_X$** 从 $V_0$ 开始，随着二极管连接的 $M_2$ 使 $C_1$ 放电，向 $V_{TH} = 0.7$ V（而不是 0）衰减：先快后慢，在平方律模型中永远不会完全达到 $V_{TH}$。
- **$V_Y$** 从较低的值 $V_{DD} - R_1\tfrac{\beta}{2}(V_0 - V_{TH})^2$ 开始（若该值低于 $V_0 - V_{TH}$，则 $M_1$ 处于线性区，起始值更低），随着 $M_1$ 的镜像电流 $\tfrac{\beta}{2}(V_X - V_{TH})^2 = \tfrac{\beta}{2}(V_0 - V_{TH})^2/(1 + t/\tau)^2$ 逐渐消失而上升并趋向 $V_{DD}$。

若 $V_0 \le V_{TH}$，则什么也不会发生：对所有 $t$，$V_X = V_0$，$V_Y = V_{DD}$。

**常见错误。** 让 $V_X$ 衰减到 0 V。放电通路是二极管连接的 $M_2$，它在 $V_X = V_{TH}$ 时停止导通，因此电容电压越来越缓慢地趋向约 0.7 V。

**常见错误。** 把衰减说成具有 RC 时间常数的指数衰减。$M_2$ 的电流正比于 $(V_X - V_{TH})^2$，由此得到双曲型的 $1/(1 + t/\tau)$ 规律，其特征时间本身还取决于初始过驱动电压。

**常见错误。** 把 $V_Y$ 画成随时间下降。$M_1$ 复制 $M_2$ 的电流，而该电流在 $t = 0$ 时最大、之后逐渐衰减，因此 $V_Y$ **回升**到 $V_{DD}$。
