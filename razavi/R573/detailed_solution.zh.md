# 详细步骤 - R573

**思路。** 输入处于 $V_{DD}$ 时，开关以源极跟随器（source follower）的方式给 $C_H$ 充电，其过驱动电压随 $V_{out}$ 升高而减小。$M_1$ 始终饱和，因此用平方律（square law）电流列 KCL，得到一个非线性微分方程，可用分离变量法精确求解。求出 2.1 V 处的时间，并说明为什么不能用单一的时间常数描述该波形。

### 第 1 步 — 端口与工作区

输出从 0 V 开始，只能向 3 V 的输入电压上升，因此电位较低的端口 $V_{out}$ 是源极，输入端是漏极：

$$V_{GS} = V_{DD} - V_{out}, \qquad V_{DS} = V_{DD} - V_{out}.$$

由于 $V_{DS} = V_{GS}$，**$M_1$ 在整个瞬态过程中都处于饱和区**，并且只要 $V_{out} < V_{DD} - V_{TH} = 2.3$ V 就导通。器件常数为

$$\beta = \mu_nC_{ox}\frac WL = (134\ \mu\mathrm{A/V^2})\times40 = 5.36\ \mathrm{mA/V^2}.$$

### 第 2 步 — 微分方程

漏极电流给 $C_H$ 充电（$\lambda = 0$，$\gamma = 0$）：

$$C_H\frac{dV_{out}}{dt} = I_D = \frac12\beta\left(V_{DD} - V_{out} - V_{TH}\right)^2 .$$

记剩余的过驱动电压为

$$w(t) = V_{DD} - V_{TH} - V_{out}(t),$$

它从 $w(0) = 2.3 - 0 = 2.3$ V 开始向 0 减小，且 $dw/dt = -dV_{out}/dt$：

$$\frac{dw}{dt} = -\frac{\beta}{2C_H}\,w^2 .$$

### 第 3 步 — 用分离变量法求解

$$\frac{dw}{w^2} = -\frac{\beta}{2C_H}\,dt .$$

从 $t = 0$（$w = w_0 = V_{DD} - V_{TH}$）开始积分：

$$
\begin{aligned}
-\frac{1}{w} + \frac{1}{w_0} &= -\frac{\beta}{2C_H}\,t\\
\frac1w &= \frac{\beta}{2C_H}\,t + \frac{1}{w_0},
\end{aligned}
$$

$$V_{out}(t) = V_{DD} - V_{TH} - \frac{1}{\dfrac{\beta}{2C_H}\,t + \dfrac{1}{V_{DD} - V_{TH}}}.$$

当 $t \to \infty$ 时，$V_{out} \to V_{DD} - V_{TH} = 2.3$ V，但只是渐近地趋近，而且只按 $1/t$ 的规律，比指数函数慢得多。

### 第 4 步 — 达到 2.1 V 所需的时间

$$\frac{\beta}{2C_H} = \frac{5.36\times10^{-3}\ \mathrm{A/V^2}}{2\times10^{-12}\ \mathrm{F}} = 2.68\times10^{9}\ \mathrm{V^{-1}s^{-1}}.$$

当 $V_{out} = 2.1$ V 时，剩余的过驱动电压为 $w = 2.3 - 2.1 = 0.2$ V，因此

$$
\begin{aligned}
\frac{\beta}{2C_H}\,t &= \frac{1}{0.2\ \mathrm{V}} - \frac{1}{2.3\ \mathrm{V}} = 5.000 - 0.435 = 4.565\ \mathrm{V^{-1}},\\
t &= \frac{4.565\ \mathrm{V^{-1}}}{2.68\times10^{9}\ \mathrm{V^{-1}s^{-1}}} = 1.70\times10^{-9}\ \mathrm{s} = 1.70\ \mathrm{ns}.
\end{aligned}
$$

### 第 5 步 — 为什么没有单一的时间常数

$C_H$ 看到的小信号电阻为 $1/g_{m1}$，其中 $g_{m1} = \beta w$，因此瞬时时间常数为

$$\tau_{inst} = \frac{C_H}{g_{m1}} = \frac{C_H}{\beta w} = \frac{C_H}{\beta}\left(\frac{\beta}{2C_H}t + \frac{1}{w_0}\right) = \frac{C_H}{\beta w_0} + \frac{t}{2} = 81\ \mathrm{ps} + \frac t2 ,$$

它随时间线性增大：

| $t$ (ns) | $V_{out}$ (V) | $g_{m1}$ (mS) | $\tau_{inst} = C_H/g_{m1}$ (ps) |
|---|---|---|---|
| 0 | 0 | 12.3 | 81 |
| 0.1 | 0.88 | 7.6 | 131 |
| 0.2 | 1.27 | 5.5 | 181 |
| 0.5 | 1.74 | 3.0 | 331 |
| 1.0 | 1.98 | 1.7 | 581 |
| 1.70 | 2.10 | 1.1 | 931 |
| 3.0 | 2.18 | 0.63 | 1581 |

初始斜率为 $I_D/C_H = 14.2\ \mathrm{mA}/1\ \mathrm{pF} = 14.2$ V/ns；随后波形逐渐弯曲，缓慢地爬向 2.3 V。前 1.27 V 只需 0.2 ns，而到 2.1 V 为止的最后 0.12 V 却需要约 0.7 ns，这就是 NMOS 开关无法快速传递接近 $V_{DD}$ 的电压的原因。

**关于体效应的补充说明。** 若衬底（bulk）接地、源极位于 $V_{out}$，并采用实际的 $\gamma = 0.45\ \mathrm{V^{1/2}}$，阈值电压会随 $V_{out}$ 升高，输出不能超过约 1.97 V，因此永远达不到 2.1 V。本题设定 $\gamma = 0$。

### 结果

$$t \approx 1.70\ \mathrm{ns}.$$

栅极和漏极都处于 $V_{DD}$，因此 $M_1$ 饱和：

$$C_H\frac{dV_{out}}{dt} = \frac12\beta(V_{DD} - V_{out} - V_{TH})^2, \qquad \beta = 5.36\ \mathrm{mA/V^2}.$$

从 $V_{out}(0) = 0$ 开始积分得 $V_{out} = V_{DD} - V_{TH} - \dfrac{1}{\frac{\beta}{2C_H}t + \frac{1}{V_{DD} - V_{TH}}}$，它只能渐近地趋近 2.3 V。由 $\beta/(2C_H) = 2.68\times10^9\ \mathrm{V^{-1}s^{-1}}$ 以及 2.1 V 处 0.2 V 的剩余过驱动电压，$2.68\times10^9\,t = 1/0.2 - 1/2.3 = 4.565\ \mathrm{V^{-1}}$，所以 $t = 1.70$ ns。

**常见错误。** 把 $M_1$ 当作固定的线性区（triode region）电阻 $1/[\beta(V_{DD} - V_{TH})] = 81\ \Omega$，取 $\tau = 81$ ps，得到约 0.1–0.2 ns，短了约十倍。该器件是工作在饱和区的源极跟随器，当 $V_{out}$ 趋近 $V_{DD} - V_{TH}$ 时，其 $1/g_m$ 会无限增大。

**常见错误。** 漏掉饱和电流中的 ½，使时间减半为 0.85 ns。

**常见错误。** 声称由于体效应而无法达到 2.1 V。对于 $\gamma \approx 0.45\ \mathrm{V^{1/2}}$ 的实际器件确实如此，但这里 $\gamma = 0$，因此输出趋近 2.3 V，并在 1.70 ns 后超过 2.1 V。
