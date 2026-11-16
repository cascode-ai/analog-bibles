# 详细步骤 - R481

**思路。** 在节点 X（$M_2$ 的栅极）处断开环路，推导环路传输（loop transmission）$T(s)$。它有一个由 $R_F$ 和 $C_A$ 决定的主极点、一个位于 X 的极点，以及一个约为 $g_{m2}/C_Y$ 的输出极点（跟随器极点）。增大 $C_Y$ 会把输出极点拉向增益交点，削弱相位裕度；求出使裕度恰好为 45° 的极点位置，进而求出对应的 $C_Y$。

### 第 1 步 — 断开环路

令 $I_{in} = 0$（开路）。$M_2$ 的栅极不吸取电流，因此切断 X 与该栅极之间的连接不会改变 X 处的负载。在 $M_2$ 的栅极施加测试电压 $V_t$，计算返回的 $V_X$；环路传输为 $T = -V_X/V_t$。

取 $\lambda = \gamma = 0$，$V_{DD}$ 为交流地：$M_2$ 向 Y 注入 $g_{m2}(V_t - V_Y)$；Y 经 $C_Y$ 接地，并经 $R_F$ 接到 A；A 经 $C_A$ 接地；$M_1$ 从 X 抽取 $g_{m1}V_A$；X 经 $R_D \parallel C_X$ 接地。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 环路传输

**节点 A 的 KCL**（$R_F$ 中的电流给 $C_A$ 充电）：

$$\frac{V_Y - V_A}{R_F} = sC_AV_A \quad\Longrightarrow\quad V_Y = V_A(1 + sR_FC_A).$$

**节点 Y 的 KCL**（跟随器电流流向 $C_Y$ 和 $R_F$）：

$$g_{m2}(V_t - V_Y) = sC_YV_Y + sC_AV_A .$$

代入 $V_Y$：

$$
\begin{aligned}
g_{m2}V_t &= (g_{m2} + sC_Y)(1 + sR_FC_A)V_A + sC_AV_A\\
\frac{V_A}{V_t} &= \frac{1}{(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}} .
\end{aligned}
$$

**节点 X 的 KCL：** $V_X = -g_{m1}V_A\,(R_D \parallel 1/sC_X) = -g_{m1}R_DV_A/(1 + sR_DC_X)$。因此

$$T(s) = -\frac{V_X}{V_t} = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]} .$$

取 $g_{m1} = g_{m2} = 10$ mS：

$$
\begin{aligned}
T_0 &= g_{m1}R_D = (10\ \mathrm{mS})(1\ \mathrm{k}\Omega) = 10,\\
R_FC_A &= (10\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 1\ \mathrm{ns},\\
C_A/g_{m2} &= (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps},\\
\omega_X &= \frac{1}{R_DC_X} = \frac{1}{(1\ \mathrm{k}\Omega)(100\ \mathrm{fF})} = 10^{10}\ \mathrm{rad/s}.
\end{aligned}
$$

### 第 3 步 — $C_Y$ 如何起作用：方括号项的两个极点

令 $\tau_Y = C_Y/g_{m2}$，$\tau_F = R_FC_A = 1$ ns，$\tau_A = C_A/g_{m2} = 10$ ps，则方括号项为

$$D(s) = 1 + (\tau_Y + \tau_F + \tau_A)\,s + \tau_Y\tau_F\,s^2 = \left(1 + \frac{s}{\omega_{p1}}\right)\left(1 + \frac{s}{\omega_{p3}}\right).$$

当 $\tau_Y \ll \tau_F$ 时，两个根相距很远：

- $\omega_{p1} \approx 1/(\tau_F + \tau_A + \tau_Y) \approx 0.99\times10^9$ rad/s，是**主极点**（几乎与 $C_Y$ 无关）；
- $\omega_{p3} \approx g_{m2}/C_Y$，是**输出极点**：由跟随器的输出电阻（output resistance）$1/g_{m2}$ 驱动 $C_Y$ 形成。

当 $C_Y = 100$ fF 时，$\omega_{p3} = 1.01\times10^{11}$ rad/s，交点位于 $7.74\times10^9$ rad/s，PM = 55°。增大 $C_Y$ 会使 $\omega_{p3}$ 向交点下移，裕度随之减小；可接受的最大 $C_Y$ 恰好使 PM 等于 45°。

### 第 4 步 — 所需的输出极点频率

PM = 45° 意味着在交点 $\omega_u$ 处总相位为 $-135°$：

$$\tan^{-1}\frac{\omega_u}{\omega_{p1}} + \tan^{-1}\frac{\omega_u}{\omega_X} + \tan^{-1}\frac{\omega_u}{\omega_{p3}} = 135°,$$

同时还要满足幅值条件

$$\sqrt{1 + (\omega_u/\omega_{p1})^2}\,\sqrt{1 + (\omega_u/\omega_X)^2}\,\sqrt{1 + (\omega_u/\omega_{p3})^2} = 10 .$$

用迭代法求解两个未知量（$\omega_u$、$\omega_{p3}$）：先猜一个 $\omega_u$，由相位方程求出 $\omega_{p3}$，再检验幅值。

**第 1 次迭代：$\omega_u = 7.74\times10^9$ rad/s**（100 fF 时的交点）。

$$
\begin{aligned}
\tan^{-1}(7.74/0.99) + \tan^{-1}(0.774) &= 82.71° + 37.74° = 120.45°,\\
\text{share left for } \omega_{p3} &= 135° - 120.45° = 14.55°,\\
\omega_{p3} &= \frac{7.74\times10^9}{\tan14.55°} = \frac{7.74\times10^9}{0.2595} = 2.98\times10^{10}\ \mathrm{rad/s},\\
|T| &= \frac{10}{7.882\times1.2645\times1.0331} = \frac{10}{10.30} = 0.97 .
\end{aligned}
$$

$|T| < 1$，因此真实的交点略低一些。

**第 2 次迭代：$\omega_u = 7.55\times10^9$ rad/s。**

$$
\begin{aligned}
\tan^{-1}(7.55/0.99) + \tan^{-1}(0.755) &= 82.53° + 37.05° = 119.58°,\\
\text{share left for } \omega_{p3} &= 135° - 119.58° = 15.42°,\\
\omega_{p3} &= \frac{7.55\times10^9}{\tan15.42°} = \frac{7.55\times10^9}{0.2758} = 2.74\times10^{10}\ \mathrm{rad/s},\\
|T| &= \frac{10}{7.692\times1.2530\times1.0373} = \frac{10}{9.997} = 1.00 .\ \checkmark
\end{aligned}
$$

因此输出极点最低可降到 $\omega_{p3} \approx 2.74\times10^{10}$ rad/s，约为交点的 3.6 倍。

### 第 5 步 — 由极点换算出 $C_Y$

**简单估算。** 由 $\omega_{p3} \approx g_{m2}/C_Y$：

$$C_Y \approx \frac{g_{m2}}{\omega_{p3}} = \frac{10\ \mathrm{mS}}{2.74\times10^{10}\ \mathrm{rad/s}} = 365\ \mathrm{fF}.$$

**精确计算。** $s = -\omega_{p3}$ 必须是 $D(s)$ 的根：

$$1 - (\tau_Y + \tau_F + \tau_A)\,\omega_{p3} + \tau_Y\tau_F\,\omega_{p3}^2 = 0 ,$$

它是关于 $\tau_Y$ 的线性方程：

$$
\begin{aligned}
\tau_Y\left(\tau_F\,\omega_{p3}^2 - \omega_{p3}\right) &= (\tau_F + \tau_A)\,\omega_{p3} - 1\\
\tau_Y &= \frac{(1.01\times10^{-9})(2.738\times10^{10}) - 1}{(10^{-9})(2.738\times10^{10})^2 - 2.738\times10^{10}}\ \mathrm{s}\\
&= \frac{27.65 - 1}{7.497\times10^{11} - 0.274\times10^{11}}\ \mathrm{s} = \frac{26.65}{7.223\times10^{11}}\ \mathrm{s} = 36.9\ \mathrm{ps}.
\end{aligned}
$$

$$C_Y = g_{m2}\,\tau_Y = (10\ \mathrm{mS})(36.9\ \mathrm{ps}) = 369\ \mathrm{fF} \approx 0.37\ \mathrm{pF}.$$

### 第 6 步 — 检查变化趋势（这真的是最大值吗？）

由完整的 $T(s)$ 计算几个 $C_Y$ 值下的相位裕度：

| $C_Y$ | 100 fF | 200 fF | 300 fF | 369 fF | 400 fF | 1 pF | 5 pF | 20 pF | 60 pF |
|---|---|---|---|---|---|---|---|---|---|
| PM | 55.2° | 51.1° | 47.4° | 45.0° | 44.0° | 30.6° | 18.9° | 27.8° | 44.6° |

当 $C_Y$ 从 100 fF 开始增大时，PM 持续下降，并在 369 fF 处穿过 45°，因此直到 0.37 pF 的所有 $C_Y$ 都满足要求。（当电容达到几十 pF 时，输出极点降到 $1/R_FC_A$ **以下**并成为主极点，裕度因而回升，在 61 pF 附近重新回到 45°；这种不切实际的环路补偿方式不在我们关心的范围内，而在 0.37 pF 与约 61 pF 之间裕度低于 45°。）

### 结果

$$C_{Y,max} \approx 0.37\ \mathrm{pF}\quad(369\ \mathrm{fF}),$$

此时输出极点位于 $\approx 2.74\times10^{10}$ rad/s，增益交点位于 $\approx 7.55\times10^9$ rad/s，PM = 45°（$C_Y = 100$ fF 时为 55°）。用简单估算 $\omega_{p3} \approx g_{m2}/C_Y$ 得到 365 fF。

**常见错误。** 把输出极点取为 $1/(R_FC_Y)$。节点 Y 由跟随器驱动，其输出电阻 $1/g_{m2} = 100\ \Omega$ 远小于 $R_F$；用 $R_F$ 计算会把极点放低 100 倍，得到远低于 0.2 pF 的 $C_Y$ 上限。

**常见错误。** 认为更大的 $C_Y$“增加了补偿”，因而能改善裕度。在实际的取值范围内，主极点由 $R_F$ 和 $C_A$ 决定；$C_Y$ 只控制一个次极点（non-dominant pole），把它移向交点只会减小相位裕度。

**常见错误。** 把大电容一侧的 45° 点（约 61 pF）当作最大值。在 0.37 pF 与约 61 pF 之间裕度低于 45°（在 5 pF 附近低至 19°），因此该点只是第二个不切实际的取值范围的起点。
