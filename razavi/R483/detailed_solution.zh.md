# 详细步骤 - R483

**思路。** 在节点 X（$M_2$ 的栅极）处断开环路，推导环路传输（loop transmission）$T(s)$。$C_X$ 只出现在极点 $1/(R_DC_X)$ 中，它是第一个**次**极点。增大 $C_X$ 会把该极点拉向增益交点，削弱相位裕度；求出使裕度降到 45° 的极点位置，进而求出 $C_X$。

### 第 1 步 — 断开环路

令 $I_{in} = 0$（开路）。$M_2$ 的栅极不吸取电流，因此切断 X 与该栅极之间的连线不会改变 X 处的负载（$R_D \parallel C_X$）。在 $M_2$ 的栅极施加测试电压 $V_t$，计算返回的 $V_X$；环路传输为 $T = -V_X/V_t$。

取 $\lambda = \gamma = 0$，$V_{DD}$ 为交流地：$M_2$ 向 Y 注入 $g_{m2}(V_t - V_Y)$；Y 经 $C_Y$ 接地，并经 $R_F$ 接到 A；A 经 $C_A$ 接地；$M_1$ 从 X 抽取 $g_{m1}V_A$；X 经 $R_D \parallel C_X$ 接地。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 环路传输

**节点 A 的 KCL：** $(V_Y - V_A)/R_F = sC_AV_A$，因此 $V_Y = V_A(1 + sR_FC_A)$。

**节点 Y 的 KCL：** $g_{m2}(V_t - V_Y) = sC_YV_Y + sC_AV_A$。代入 $V_Y$：

$$
\begin{aligned}
g_{m2}V_t &= (g_{m2} + sC_Y)(1 + sR_FC_A)V_A + sC_AV_A\\
\frac{V_A}{V_t} &= \frac{1}{(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}} .
\end{aligned}
$$

**节点 X 的 KCL：** $V_X = -g_{m1}V_A\,(R_D \parallel 1/sC_X) = -g_{m1}R_DV_A/(1 + sR_DC_X)$。因此

$$T(s) = -\frac{V_X}{V_t} = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]} .$$

### 第 3 步 — 极点，以及 $C_X$ 如何起作用

**环路增益：** $T_0 = g_{m1}R_D = (10\ \mathrm{mS})(1\ \mathrm{k}\Omega) = 10$。

**方括号项**不含 $C_X$。由 $C_Y/g_{m2} = 10$ ps、$R_FC_A = (10\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 1$ ns 和 $C_A/g_{m2} = 10$ ps：

$$D(s) = 1 + (1.02\times10^{-9})\,s + (10^{-20})\,s^2 ,$$

其根位于 $s = -\omega_p$：

$$\omega_p = \frac{1.02\times10^{-9} \mp \sqrt{1.0404\times10^{-18} - 4\times10^{-20}}}{2\times10^{-20}} = \frac{1.02\times10^{-9} \mp 1.0002\times10^{-9}}{2\times10^{-20}},$$

$$\omega_{p1} = 0.99\times10^9\ \mathrm{rad/s}\ \ (\text{dominant}, \approx 1/R_FC_A), \qquad \omega_{p3} = 1.01\times10^{11}\ \mathrm{rad/s}\ \ (\approx g_{m2}/C_Y).$$

**X 处的极点**是唯一依赖于 $C_X$ 的极点：

$$\omega_X = \frac{1}{R_DC_X} = 10^{10}\ \mathrm{rad/s}\ \text{ for } C_X = 100\ \mathrm{fF}.$$

因此严格地有

$$T(s) = \frac{10}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_X}\right)\left(1 + \dfrac{s}{\omega_{p3}}\right)} .$$

当 $C_X = 100$ fF 时，交点为 $7.74\times10^9$ rad/s，PM = 55.2°。更大的 $C_X$ 会使 $\omega_X$ 向交点降低，裕度随之减小；最大的 $C_X$ 对应 PM = 45°。

### 第 4 步 — X 处极点所需的位置

PM = 45° 意味着在交点 $\omega_u$ 处总相位为 $-135°$：

$$\tan^{-1}\frac{\omega_u}{\omega_{p1}} + \tan^{-1}\frac{\omega_u}{\omega_X} + \tan^{-1}\frac{\omega_u}{\omega_{p3}} = 135°,$$

$$\sqrt{1 + (\omega_u/\omega_{p1})^2}\,\sqrt{1 + (\omega_u/\omega_X)^2}\,\sqrt{1 + (\omega_u/\omega_{p3})^2} = 10 .$$

用迭代法求解 $\omega_u$ 和 $\omega_X$：先猜一个 $\omega_u$，由相位条件求出 $\omega_X$，再检验幅值。

**猜测 $\omega_u = 6.0\times10^9$ rad/s。**

$$
\begin{aligned}
\tan^{-1}(6.0/0.99) + \tan^{-1}(6.0/101) &= 80.63° + 3.40° = 84.03°,\\
\text{share left for } \omega_X &= 135° - 84.03° = 50.97°,\\
\omega_X &= \frac{6.0\times10^9}{\tan50.97°} = \frac{6.0\times10^9}{1.2336} = 4.86\times10^9\ \mathrm{rad/s},\\
|T| &= \frac{10}{6.143\times1.588\times1.0018} = \frac{10}{9.77} = 1.02 .
\end{aligned}
$$

$|T|$ 仍大于 1，因此交点略高一些。

**猜测 $\omega_u = 6.2\times10^9$ rad/s。**

$$
\begin{aligned}
\tan^{-1}(6.2/0.99) + \tan^{-1}(6.2/101) &= 80.93° + 3.51° = 84.44°,\\
\text{share left for } \omega_X &= 135° - 84.44° = 50.56°,\\
\omega_X &= \frac{6.2\times10^9}{\tan50.56°} = \frac{6.2\times10^9}{1.2157} = 5.10\times10^9\ \mathrm{rad/s},\\
|T| &= \frac{10}{6.342\times1.574\times1.0019} = \frac{10}{10.00} = 1.00 .\ \checkmark
\end{aligned}
$$

因此 X 处的极点最低可降到 $\omega_X \approx 5.10\times10^9$ rad/s，低于 $6.2\times10^9$ rad/s 的交点。

### 第 5 步 — 由极点换算出 $C_X$

$$C_X = \frac{1}{R_D\,\omega_X} = \frac{1}{(1\ \mathrm{k}\Omega)(5.10\times10^9\ \mathrm{rad/s})} = 1.96\times10^{-13}\ \mathrm{F} = 196\ \mathrm{fF} \approx 0.20\ \mathrm{pF}.$$

另外两个极点与 $C_X$ 无关，因此在该模型内这一结果是精确的（若把这两个极点取整为 $10^9$ 和 $10^{11}$ rad/s，则得到约 193 fF）。

### 第 6 步 — 更大范围内的变化趋势

由完整的 $T(s)$ 算出的相位裕度：

| $C_X$ | 100 fF | 150 fF | 196 fF | 300 fF | 500 fF | 1 pF | 2 pF | 4.2 pF | 10 pF |
|---|---|---|---|---|---|---|---|---|---|
| $\omega_X$ (rad/s) | $10^{10}$ | $6.7\times10^9$ | $5.1\times10^9$ | $3.3\times10^9$ | $2\times10^9$ | $10^9$ | $5\times10^8$ | $2.4\times10^8$ | $10^8$ |
| PM | 55.2° | 48.7° | 45.0° | 40.3° | 36.7° | 35.2° | 37.7° | 45° | 58.7° |

从 100 fF 开始，裕度单调下降，并在约 0.2 pF 处穿过 45°；这就是答案。它在 0.9–1 pF 附近达到约 35° 的最小值，此时 $\omega_X$ 与 $R_F$–$C_A$ 极点重合（重合极点是最坏的情况）。当 $C_X \gtrsim 4.2$ pF 时，节点 X 成为主极点，裕度回升到 45° 以上；但在约 0.2 pF 与 4.2 pF 之间裕度低于 45°，因此这一区域并不能扩展从 100 fF 起的允许范围。

### 结果

$$C_{X,max} \approx 0.20\ \mathrm{pF}\quad(196\ \mathrm{fF}),$$

此时 X 处的极点已降到 $1/(R_DC_X) \approx 5.1\times10^9$ rad/s，增益交点位于 $\approx 6.2\times10^9$ rad/s，PM = 45°（$C_X = 100$ fF 时为 55°）。（只有当 $C_X \gtrsim 4.2$ pF、X 成为主极点时，才会重新满足 PM ≥ 45°。）

**常见错误。** 认为额外的电容能“补偿”环路并改善裕度。在 100 fF 附近，主极点由 $R_F$ 和 $C_A$ 决定；$C_X$ 控制的是一个次极点，把它移向交点只会减小相位裕度。

**常见错误。** 使用直流值不等于 $g_{m1}R_D = 10$ 的环路增益，例如相对于 $R_F$ 求得的回归比（return ratio），或者除以任意常数后的特征多项式。交点频率以及 $C_X$ 的上限都直接取决于 $T_0$。

**常见错误。** 以跟随器极点 $g_{m2}/C_Y$ 位于 $10^{11}$ rad/s、“离得很远”为由将其忽略。它在交点处仍贡献约 3.5° 的相位滞后；忽略它会得到 $\omega_X \approx 3.9\times10^9$ rad/s 和 $C_X \approx 0.26$ pF，约偏大 30 %。
