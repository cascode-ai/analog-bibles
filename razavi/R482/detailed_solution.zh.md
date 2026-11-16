# 详细步骤 - R482

**思路。** 在节点 X（$M_2$ 的栅极）处断开环路，推导环路传输（loop transmission）$T(s)$，然后考察 $C_A$ 如何移动其极点。$C_A$ 经 $R_F$ 充电，决定的是**主**极点，因此增大它会降低交点并**提高**相位裕度，这就是主极点补偿（dominant-pole compensation）。因此 45° 的要求规定的是 $C_A$ 的**最小值**，而不是最大值。

### 第 1 步 — 断开环路

令 $I_{in} = 0$（开路）。$M_2$ 的栅极不吸取电流，因此可以切断 X 与该栅极之间的连线而不改变 X 处的负载。在 $M_2$ 的栅极施加测试电压 $V_t$，求出返回的 $V_X$；环路传输为 $T = -V_X/V_t$。

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

**节点 X 的 KCL：** $V_X = -g_{m1}R_DV_A/(1 + sR_DC_X)$。因此

$$T(s) = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]} .$$

**固定的量**（$g_{m1} = g_{m2} = 10$ mS，$C_X = C_Y = 100$ fF）：

$$
\begin{aligned}
T_0 &= g_{m1}R_D = (10\ \mathrm{mS})(1\ \mathrm{k}\Omega) = 10,\\
\omega_X &= \frac{1}{R_DC_X} = \frac{1}{(1\ \mathrm{k}\Omega)(100\ \mathrm{fF})} = 10^{10}\ \mathrm{rad/s},\\
\tau_Y &= \frac{C_Y}{g_{m2}} = (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps}.
\end{aligned}
$$

### 第 3 步 — $C_A$ 出现在哪里：主极点

方括号项为 $D(s) = 1 + \left[\tau_Y + C_A(R_F + 1/g_{m2})\right]s + \tau_YR_FC_A\,s^2 = (1 + s/\omega_{p1})(1 + s/\omega_{p3})$。对于实际的 $C_A$（几十 fF 及以上），$R_FC_A \gg \tau_Y$，两个根相距很远：

$$\omega_{p1} \approx \frac{1}{(R_F + 1/g_{m2})\,C_A + C_Y/g_{m2}}, \qquad \omega_{p3} \approx \left(1 + \frac{1}{g_{m2}R_F}\right)\frac{g_{m2}}{C_Y} = 1.01\times10^{11}\ \mathrm{rad/s}.$$

- $\omega_{p1}$ 来自经 $R_F$（加上跟随器的 $1/g_{m2}$）对 $C_A$ 的充电，它是**主**极点，与 $C_A$ 成反比。
- $\omega_X = 10^{10}$ rad/s 和 $\omega_{p3} \approx 1.01\times10^{11}$ rad/s 都**不**依赖于 $C_A$。

**在给定值 $C_A = 100$ fF 下：** $\omega_{p1} = 0.99\times10^9$ rad/s，交点位于 $\omega_u = 7.74\times10^9$ rad/s，该处相位为 $-(82.7° + 37.7° + 4.4°) = -124.8°$，因此 PM = 55.2°。

### 第 4 步 — 增大 $C_A$ 可改善相位裕度

更大的 $C_A$ 会降低 $\omega_{p1}$；由于 $T_0\,\omega_{p1}$ 大致就是环路的增益带宽积（gain-bandwidth product），交点也随之下移，远离位于 $10^{10}$ 和 $1.01\times10^{11}$ rad/s 的固定次极点，这些次极点贡献的相移随之减小。由 $T(s)$ 算出的精确值如下：

| $C_A$ | 100 fF | 150 fF | 200 fF | 500 fF | 1 pF | 10 pF |
|---|---|---|---|---|---|---|
| $\omega_u$ (rad/s) | $7.7\times10^9$ | $5.7\times10^9$ | $4.5\times10^9$ | $1.9\times10^9$ | $9.8\times10^8$ | $9.9\times10^7$ |
| PM | 55.2° | 63.8° | 69.6° | 83.8° | 89.6° | 95.1° |

**大 $C_A$ 极限。** 当 $\omega_u \ll \omega_X$ 时，只有主极点起作用：$|T| = 1$ 发生在 $\omega_u = \omega_{p1}\sqrt{T_0^2 - 1}$ 处，且

$$\mathrm{PM} \to 180° - \tan^{-1}\sqrt{T_0^2 - 1} = 180° - \tan^{-1}\sqrt{99} = 180° - 84.3° = 95.7° .$$

（它超过 90°，是因为环路增益只有 10，在交点处主极点尚未贡献完整的 90°。）

因此**不存在有限的最大值**：高于某一值的所有 $C_A$ 都满足 45° 的要求，更大的 $C_A$ 只会有利于稳定性（代价是带宽）。

### 第 5 步 — 真正的约束：$C_A$ 的最小值

减小 $C_A$ 会提高 $\omega_{p1}$，并使交点向 $\omega_X$ 上移，因此裕度减小。PM = 45° 要求在 $\omega_u$ 处总相位为 $-135°$，同时 $|T(j\omega_u)| = 1$。先猜一个 $\omega_u$，由相位条件求出 $\omega_{p1}$，再检验幅值：

| 猜测的 $\omega_u$ (rad/s) | $\tan^{-1}\frac{\omega_u}{\omega_X}$ | $\tan^{-1}\frac{\omega_u}{\omega_{p3}}$ | 留给 $\omega_{p1}$ 的相位 | $\omega_{p1}$ (rad/s) | $\lvert T\rvert$ |
|---|---|---|---|---|---|
| $1.05\times10^{10}$ | 46.40° | 5.94° | 82.67° | $1.35\times10^9$ | 0.88 |
| $1.08\times10^{10}$ | 47.20° | 6.10° | 81.69° | $1.58\times10^9$ | 0.98 |
| $1.0875\times10^{10}$ | 47.40° | 6.15° | 81.45° | $1.63\times10^9$ | 1.00 |

其中 $\omega_{p1} = \omega_u/\tan(\text{share})$，$|T| = 10/\left[\sqrt{1 + (\omega_u/\omega_{p1})^2}\sqrt{1 + (\omega_u/\omega_X)^2}\sqrt{1 + (\omega_u/\omega_{p3})^2}\right]$；对最后一行，$10/(6.730\times1.4774\times1.0058) = 10/10.00 = 1.00$。✓

因此当 $\omega_{p1} = 1.634\times10^9$ rad/s 时 PM = 45°（交点 $\approx 1.09\times10^{10}$ rad/s）。

**换算为 $C_A$。** 由 $\omega_{p1} \approx 1/[(R_F + 1/g_{m2})C_A + \tau_Y]$ 作简单估算：

$$C_A \approx \frac{1/\omega_{p1} - \tau_Y}{R_F + 1/g_{m2}} = \frac{612\ \mathrm{ps} - 10\ \mathrm{ps}}{10.1\ \mathrm{k}\Omega} = 59.6\ \mathrm{fF}.$$

精确地说，$s = -\omega_{p1}$ 必须是 $D(s)$ 的根：$1 - \omega_{p1}\left[\tau_Y + C_A(R_F + 1/g_{m2})\right] + \omega_{p1}^2\tau_YR_FC_A = 0$，它是关于 $C_A$ 的线性方程：

$$
\begin{aligned}
C_A &= \frac{1 - \omega_{p1}\tau_Y}{\omega_{p1}(R_F + 1/g_{m2}) - \omega_{p1}^2\tau_YR_F}\\
&= \frac{1 - 0.0163}{1.650\times10^{13} - 0.027\times10^{13}}\ \mathrm{F} = \frac{0.9837}{1.624\times10^{13}}\ \mathrm{F} = 60.6\ \mathrm{fF}.
\end{aligned}
$$

因此 PM ≥ 45° 要求 $C_A \gtrsim 61$ fF（其他电容为 100 fF）。

### 第 6 步 — 不现实的小 $C_A$ 分支

严格来说，PM 并非在**所有** $C_A$ 范围内都是单调的。低于约 61 fF 后它继续下降（10 fF 时为 21.6°），在 5 fF 附近达到约 19° 的最小值。当 $C_A$ 只有几 fF 时，节点 A 的极点移到交点**之上**，只剩下位于 $10^{10}$ rad/s 和约 $10^{11}$ rad/s 的极点，此时 PM 为 59°（$C_A = 0$ 时）；在 $C_A \approx 0.36$ fF 处 PM 再次穿过 45°（交点 $\approx 7.6\times10^{10}$ rad/s）。

因此，当 $C_A \le 0.36$ fF **或** $C_A \ge 61$ fF 时 PM ≥ 45°。0.36 fF 这个值只是封闭了一个不现实的分支（它甚至远小于 $M_1$ 的栅极电容）；它并不是有用范围的最大值，因为所有 $C_A \ge 61$ fF 的值也都满足要求。

### 结果

$C_A$ **不存在有限的最大值**。$C_A$ 决定环路的主极点（$\approx 1/R_FC_A$），因此增大它只会改善相位裕度：100 fF 时为 55°，200 fF 时约 70°，$C_A$ 很大时趋近约 96°。45° 的指标反而规定了一个**最小值**：

$$C_A \gtrsim 61\ \mathrm{fF}\quad(\text{PM} = 45°,\ \omega_u \approx 1.09\times10^{10}\ \mathrm{rad/s}).$$

（孤立的区间 $C_A \lesssim 0.36$ fF 也能给出 PM ≥ 45°，但在物理上不现实。）

**常见错误。** 把约 61 fF 说成“$C_A$ 的最大值”。在 61 fF 处裕度恰好为 45°，但 $C_A$ **更大**时裕度更高，因此 61 fF 是允许的最小值。

**常见错误。** 把 $C_A$ 与 $C_Y$ 或 $C_X$ 同样看待，即认为任何附加电容都会产生有害的次极点。$C_A$ 控制的是**主**极点，而降低主极点正是主极点补偿提高相位裕度的方式。

**常见错误。** 把 0.36 fF 报告为最大值，却没有指出所有 $C_A \ge 61$ fF 的值也满足指标：可接受的取值集合没有上界。
