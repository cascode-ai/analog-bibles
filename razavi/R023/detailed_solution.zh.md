# 详细步骤 - R023

**思路。** $M_1$（栅极接固定电压 $V_b$，源极接地）把 $C_1$ 从 3 V 开始放电，满足 $C_1\,dV_X/dt = -I_X$。当 $V_X$ 较高时，$M_1$ 处于饱和区，吸取恒定电流，因此 $V_X$ 线性下降；一旦 $V_X$ 降到 $V_b - V_{TH}$ 以下，$M_1$ 进入线性区，越来越像一个电阻，$V_X$ 大致按指数规律衰减到零。分别求解各阶段，再把它们连接起来。

### 第 1 步 — 控制方程

$V_{GS} = V_b$，$V_{DS} = V_X$；由于没有体效应（body effect），$V_{TH} = 0.7$ V。$I_X$ 只能来自电容：

$$I_X = -C_1\frac{dV_X}{dt} .$$

过驱动电压（overdrive voltage）$V_{ov} = V_b - V_{TH} = V_b - 0.7$ V 是恒定的。**假设** $V_b > 0.7$ V，使 $M_1$ 导通（若 $V_b \le 0.7$ V，则什么都不会发生：$I_X = 0$，$V_X$ 保持 3 V），并假设 $V_{ov} < 3$ V（即 $V_b < 3.7$ V），使 $M_1$ 从饱和区开始工作。

### 第 2 步 — 阶段 1：饱和区，恒定电流，线性下降

$M_1$ 处于饱和区的条件是

$$V_X \ge V_b - 0.7 = V_{ov},$$

在 $t = 0$ 时（$V_X = 3$ V）该条件成立。忽略沟道长度调制（channel-length modulation），电流与 $V_X$ 无关：

$$I_X = I_{sat} = \tfrac12\beta\,(V_b - 0.7)^2 = \tfrac12\beta V_{ov}^2 \quad(\text{constant}),$$

$$\frac{dV_X}{dt} = -\frac{I_{sat}}{C_1} \quad\Longrightarrow\quad V_X(t) = 3\ \mathrm{V} - \frac{I_{sat}}{C_1}\,t .$$

**$V_X$ 沿直线下降。** 当 $V_X$ 降到 $V_{ov}$ 时，阶段 1 结束：

$$
\begin{aligned}
3 - \frac{I_{sat}}{C_1}t_1 &= V_{ov}\\
t_1 &= \frac{C_1\,(3\ \mathrm{V} - V_{ov})}{I_{sat}} = \frac{C_1\,[3\ \mathrm{V} - (V_b - 0.7\ \mathrm{V})]}{\tfrac12\beta(V_b - 0.7\ \mathrm{V})^2} .
\end{aligned}
$$

（若计入沟道长度调制，$I_X$ 会随 $V_X$ 下降而略有减小，斜坡会略微弯曲。）

### 第 3 步 — 阶段 2：线性区，电流衰减

当 $t > t_1$ 时，$V_X < V_{ov}$，$M_1$ 处于线性区：

$$I_X = \beta\left[V_{ov}V_X - \tfrac12V_X^2\right],$$

$$C_1\frac{dV_X}{dt} = -\beta\left[V_{ov}V_X - \tfrac12V_X^2\right] = -\beta\,V_X\left(V_{ov} - \tfrac12V_X\right).$$

分离变量，并利用部分分式

$$\frac{1}{V_X\,(V_{ov} - V_X/2)} = \frac{1}{V_{ov}}\left(\frac{1}{V_X} + \frac{1}{2V_{ov} - V_X}\right)$$

（将括号内通分得到 $\dfrac{2V_{ov}}{V_X(2V_{ov} - V_X)} = \dfrac{V_{ov}}{V_X(V_{ov} - V_X/2)}$，与要求相符），再积分：

$$
\begin{aligned}
\frac{1}{V_{ov}}\left[\ln V_X - \ln(2V_{ov} - V_X)\right] &= -\frac{\beta}{C_1}\,t + K\\
\ln\frac{V_X}{2V_{ov} - V_X} &= -\frac{\beta V_{ov}}{C_1}\,t + KV_{ov}.
\end{aligned}
$$

在 $t = t_1$ 时，$V_X = V_{ov}$，左边为 $\ln 1 = 0$，由此确定积分常数。引入时间常数

$$\tau = \frac{C_1}{\beta V_{ov}} = R_{on}C_1, \qquad R_{on} = \frac{1}{\beta\,(V_b - 0.7)},$$

其中 $R_{on}$ 为深线性区的导通电阻（on-resistance）；再令 $E(t) = e^{-(t - t_1)/\tau}$，得到：

$$\frac{V_X}{2V_{ov} - V_X} = E \quad\Longrightarrow\quad V_X(t) = \frac{2V_{ov}\,E}{1 + E} .$$

由于 $V_{ov} - V_X/2 = V_{ov} - V_{ov}E/(1 + E) = V_{ov}/(1 + E)$，电流为

$$I_X(t) = \beta\,V_X\left(V_{ov} - \tfrac12V_X\right) = \beta\,\frac{2V_{ov}E}{1 + E}\cdot\frac{V_{ov}}{1 + E} = \frac{2\beta V_{ov}^2\,E}{(1 + E)^2} .$$

**验证。**

- 在 $t = t_1$（$E = 1$）时：$V_X = V_{ov}$，$I_X = 2\beta V_{ov}^2/4 = \tfrac12\beta V_{ov}^2 = I_{sat}$，因此电流以及 $V_X$ 的斜率在转换处都是**连续的**。
- 当 $t - t_1 \gg \tau$（$E \ll 1$）时：$V_X \approx 2V_{ov}e^{-(t - t_1)/\tau}$，$I_X \approx V_X/R_{on}$：$M_1$ 就是一个对 $C_1$ 放电的电阻 $R_{on}$，形成时间常数为 $R_{on}C_1$ 的**指数拖尾**。
- 最终状态：$V_X \to 0$，$I_X \to 0$，因为 $V_{GS} > V_{TH}$ 的线性区 MOSFET 一直导通到 $V_{DS} = 0$。

### 第 4 步 — 数值示例

取 $V_b = 1.7$ V，则 $V_{ov} = 1$ V：

$$
\begin{aligned}
I_{sat} &= \tfrac12\beta\,(1\ \mathrm{V})^2 = 0.5\beta\ \mathrm{V^2},\\
\tau &= \frac{C_1}{\beta\,(1\ \mathrm{V})},\\
t_1 &= \frac{C_1\,(3 - 1)\ \mathrm{V}}{0.5\beta\ \mathrm{V^2}} = \frac{4C_1}{\beta\ \mathrm{V}} = 4\tau .
\end{aligned}
$$

例如，取 $\beta = 1\ \mathrm{mA/V^2}$，$C_1 = 1$ pF：$I_{sat} = 0.5$ mA，$\tau = 1$ ns，$t_1 = 4$ ns。

| $t/\tau$ | 阶段 | $V_X$ (V) | $I_X/\beta$ (V²) |
|---|---|---|---|
| 0 | 饱和区 | 3.00 | 0.50 |
| 1 | 饱和区 | 2.50 | 0.50 |
| 2 | 饱和区 | 2.00 | 0.50 |
| 3 | 饱和区 | 1.50 | 0.50 |
| 4 | 边界 | 1.00 | 0.50 |
| 5 | 线性区 | 0.54 | 0.39 |
| 6 | 线性区 | 0.24 | 0.21 |
| 7 | 线性区 | 0.095 | 0.090 |
| 8 | 线性区 | 0.036 | 0.035 |

以 $t = 5\tau$ 这一行为例：$E = e^{-1} = 0.368$，$V_X = 2(1)(0.368)/1.368 = 0.538$ V，$I_X/\beta = 2(1)(0.368)/1.368^2 = 0.393\ \mathrm{V^2}$。

### 结果

假设 $V_b > V_{TH}$ 且 $V_b - V_{TH} < 3$ V：

- **阶段 1（饱和区，$V_X > V_b - 0.7$ V）：** $M_1$ 吸取恒定电流 $I_X = \tfrac12\beta(V_b - 0.7)^2$，因此 $V_X$ 以斜率 $-I_X/C_1$ **线性下降**。该阶段持续 $t_1 = C_1[3 - (V_b - 0.7)]/I_X$。
- **阶段 2（线性区，$V_X < V_b - 0.7$ V）：** $I_X = \beta[(V_b - 0.7)V_X - V_X^2/2]$ 逐渐降到零。精确解为 $V_X = 2V_{ov}E/(1 + E)$，$I_X = 2\beta V_{ov}^2E/(1 + E)^2$，其中 $E = e^{-(t - t_1)/\tau}$。接近结束时，$M_1$ 相当于电阻 $R_{on} = 1/[\beta(V_b - 0.7)]$，$V_X \propto e^{-t/(R_{on}C_1)}$。
- **最终状态：** $V_X = 0$，$I_X = 0$。
- **$I_X(t)$：** 先平坦地保持在 $\tfrac12\beta(V_b - 0.7)^2$，然后连续衰减到零。（若 $V_b \le 0.7$ V，则什么都不会发生：$V_X$ 保持 3 V，$I_X = 0$。）

**常见错误。** 从 $t = 0$ 开始就画成纯 $RC$ 指数曲线。起初 $V_X = 3$ V 大于过驱动电压，因此 $M_1$ 处于饱和区，相当于一个**电流源**；最初的放电是一条直线。

**常见错误。** 让 $V_X$ 稳定在 $V_b - V_{TH}$。这一电平只标志着从饱和区到线性区的转变；由于 $V_{GS} = V_b > V_{TH}$，沟道保持导通，一直把 $C_1$ 放电到 0 V。

**常见错误。** 把 $I_X$ 画成上升的，或在 $t_1$ 处突然下降。电流在饱和区恒定，在 $t_1$ 处连续，之后平滑地衰减。
