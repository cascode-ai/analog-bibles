# 详细步骤 - R480

**思路。** 在节点 X（$M_2$ 的栅极）处断开环路，在该处注入测试电压，并让它依次经过源极跟随器（source follower）$M_2$、反馈网络 $R_F$–$C_A$ 和共源级（common-source stage）$M_1$，得到环路传输（loop transmission）$T(s)$。然后求出其极点、$|T| = 1$ 的频率以及该频率处的相位。

### 第 1 步 — 在 X 处断开环路

令 $I_{in} = 0$（开路）。$M_2$ 的栅极不吸取电流，因此切断 X 与该栅极之间的连线不会改变 X 处的负载（$R_D \parallel C_X$）。用测试电压 $V_t$ 驱动栅极，并计算返回的 $V_X$；选取符号使 $T > 0$ 表示负反馈，则

$$T(s) = -\frac{V_X}{V_t}.$$

当 $\lambda = \gamma = 0$ 时，每个晶体管都是一个纯跨导（transconductance），$V_{DD}$ 为交流地：$M_2$ 向 Y 注入 $g_{m2}(V_t - V_Y)$，Y 的负载为 $C_Y$ 以及接到 A 的 $R_F$；节点 A 只有对地电容 $C_A$；$M_1$ 从 X 抽取 $g_{m1}V_A$。

<!-- diagram: diagram-01.cir -->

由 $g_{m1} = g_{m2} = 1/(100\ \Omega) = 10$ mS，各时间常数为

$$
\begin{aligned}
R_FC_A &= (10\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 1\ \mathrm{ns},\\
R_DC_X &= (2\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 0.2\ \mathrm{ns},\\
C_Y/g_{m2} &= (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps},\\
C_A/g_{m2} &= (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps}.
\end{aligned}
$$

### 第 2 步 — 从 $V_t$ 到节点 A

**节点 A 的 KCL**（流过 $R_F$ 的电流给 $C_A$ 充电）：

$$
\begin{aligned}
\frac{V_Y - V_A}{R_F} &= sC_AV_A\\
V_Y &= V_A(1 + sR_FC_A).
\end{aligned}
$$

**节点 Y 的 KCL**（来自 $M_2$ 的电流分流到 $C_Y$ 和 $R_F$）：

$$g_{m2}(V_t - V_Y) = sC_YV_Y + \frac{V_Y - V_A}{R_F} = sC_YV_Y + sC_AV_A .$$

代入第一个方程中的 $V_Y$：

$$
\begin{aligned}
g_{m2}V_t &= (g_{m2} + sC_Y)V_Y + sC_AV_A\\
&= V_A\left[(g_{m2} + sC_Y)(1 + sR_FC_A) + sC_A\right],
\end{aligned}
$$

$$\frac{V_A}{V_t} = \frac{1}{\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}} .$$

在直流时该比值为 1：跟随器把 $V_t$ 复制到 Y，而 $R_F$ 中没有直流电流，节点 A 跟随 Y。

### 第 3 步 — 从节点 A 回到 X，以及环路传输

**节点 X 的 KCL。** $g_{m1}V_A$ 流经 $R_D \parallel (1/sC_X)$：

$$V_X = -g_{m1}V_A\left(R_D \parallel \frac{1}{sC_X}\right) = -\frac{g_{m1}R_D}{1 + sR_DC_X}V_A .$$

与第 2 步的结果合并（环路中只有一次反相，故为负反馈）：

$$T(s) = -\frac{V_X}{V_t} = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}\right]} ,$$

$$T_0 = g_{m1}R_D = (10\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 20 .$$

### 第 4 步 — 极点

**X 处的极点：**

$$\omega_X = \frac{1}{R_DC_X} = \frac{1}{0.2\ \mathrm{ns}} = 5\times10^{9}\ \mathrm{rad/s}.$$

**方括号项。** 展开得

$$D(s) = 1 + s\left(\frac{C_Y}{g_{m2}} + R_FC_A + \frac{C_A}{g_{m2}}\right) + s^2\frac{C_Y}{g_{m2}}R_FC_A = 1 + (1.02\times10^{-9})\,s + (10^{-20})\,s^2 ,$$

其根位于 $s = -\omega_p$：

$$\omega_p = \frac{1.02\times10^{-9} \mp \sqrt{(1.02\times10^{-9})^2 - 4\times10^{-20}}}{2\times10^{-20}} = \frac{1.02\times10^{-9} \mp 1.0002\times10^{-9}}{2\times10^{-20}}\ \mathrm{rad/s},$$

$$\omega_{p1} = 0.99\times10^{9}\ \mathrm{rad/s}, \qquad \omega_{p3} = 1.01\times10^{11}\ \mathrm{rad/s}.$$

因此

$$T(s) = \frac{20}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_X}\right)\left(1 + \dfrac{s}{\omega_{p3}}\right)} .$$

$\omega_{p1}$（经 $R_F$ 对 $C_A$ 充电）是主极点（dominant pole），$\omega_{p3} \approx g_{m2}/C_Y$ 是跟随器的输出极点。与 $R_D = 1$ kΩ 时相比，X 处的极点从 $10^{10}$ **下移**到 $5\times10^9$ rad/s，现在只比主极点高 5 倍。

### 第 5 步 — 增益交点频率

$|T(j\omega_u)| = 1$ 要求

$$\sqrt{1 + (\omega_u/\omega_{p1})^2}\;\sqrt{1 + (\omega_u/\omega_X)^2}\;\sqrt{1 + (\omega_u/\omega_{p3})^2} = 20 .$$

取 $\sqrt{1 + (\omega/\omega_{p1})^2} \approx \omega/\omega_{p1}$ 并忽略 $\omega_{p3}$，由 $(\omega/\omega_{p1})\sqrt{1 + (\omega/\omega_X)^2} = 20$ 大致得到 $9.3\times10^9$ rad/s。再用精确的幅值进行修正：

| $\omega$ (rad/s) | $\sqrt{1 + (\omega/\omega_{p1})^2}$ | $\sqrt{1 + (\omega/\omega_X)^2}$ | $\sqrt{1 + (\omega/\omega_{p3})^2}$ | $\lvert T\rvert$ |
|---|---|---|---|---|
| $8.0\times10^9$ | 8.142 | 1.887 | 1.0031 | 1.30 |
| $9.0\times10^9$ | 9.146 | 2.059 | 1.0040 | 1.06 |
| $9.29\times10^9$ | 9.437 | 2.110 | 1.0042 | 1.00 |
| $9.5\times10^9$ | 9.648 | 2.147 | 1.0044 | 0.96 |

因此 $\omega_u \approx 9.29\times10^9$ rad/s（$f_u \approx 1.48$ GHz）。

### 第 6 步 — 交点处的相位与相位裕度

$$
\begin{aligned}
\tan^{-1}\frac{9.29\times10^9}{0.99\times10^9} &= \tan^{-1}(9.38) = 83.9°,\\
\tan^{-1}\frac{9.29\times10^9}{5\times10^{9}} &= \tan^{-1}(1.858) = 61.7°,\\
\tan^{-1}\frac{9.29\times10^9}{1.01\times10^{11}} &= \tan^{-1}(0.092) = 5.3°,\\
\angle T(j\omega_u) &= -(83.9° + 61.7° + 5.3°) = -150.9° ,
\end{aligned}
$$

$$\mathrm{PM} = 180° - 150.9° = 29.1° .$$

$R_D$ 加倍一方面使环路增益加倍，把交点推高；另一方面使 X 处的极点频率减半，于是该极点现在位于交点**之下**，贡献 62° 而不是 38°。当 $R_D = 1$ kΩ 时，同一电路的 PM ≈ 55°；只有 29° 时，放大器会表现出明显的峰化和振铃。

### 结果

$$T(s) = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]}, \qquad T_0 = 20,$$

其极点位于 $0.99\times10^9$、$5\times10^9$ 和 $1.01\times10^{11}$ rad/s。交点位于 $\omega_u \approx 9.3\times10^9$ rad/s，该处相位为 $-150.9°$：

$$\mathrm{PM} \approx 29° .$$

**常见错误。** 认为增大 $R_D$ 能改善稳定性（或不影响稳定性）。增大 $R_D$ 既提高了环路增益，**又**降低了 X 处的极点频率，两种效应都会减小相位裕度：从 1 kΩ 时的约 55° 降到 2 kΩ 时的约 29°。

**常见错误。** 忽略跟随器极点 $g_{m2}/C_Y$。在此交点处它使裕度损失约 5°；忽略它会得到约 34°。

**常见错误。** 使用错误的环路增益，例如 $g_{m1}R_F$ 或 $R_F/R_D$，或漏掉 $R_F$–$C_A$ 极点。环路中只有共源级提供增益（$T_0 = g_{m1}R_D = 20$）；若没有 $R_F$–$C_A$ 这个主极点，分析会预测出约 56° 的裕度，完全歪曲了这个电路的实际情况。
