# 详细步骤 - R479

**思路。** 在节点 X（$M_2$ 的栅极）处断开环路，在该处注入测试电压，并让它依次经过源极跟随器 $M_2$、反馈网络 $R_F$–$C_A$ 和共源级 $M_1$，得到环路传输 $T(s)$。然后求出其极点、$|T| = 1$ 的频率以及该频率处的相位。

### 第 1 步 — 在 X 处断开环路

令 $I_{in} = 0$（开路）。$M_2$ 的栅极不吸取电流，因此切断 X 与该栅极之间的连线后，X 的负载恰好仍为 $R_D \parallel C_X$，而栅极可以用测试电压 $V_t$ 驱动。选取符号使负反馈对应 $T > 0$，则

$$T(s) = -\frac{V_X}{V_t}.$$

当 $\lambda = \gamma = 0$ 时，每个晶体管都是一个纯跨导（transconductance），$V_{DD}$ 为交流地：$M_2$ 向 Y 注入 $g_{m2}(V_t - V_Y)$，Y 的负载为 $C_Y$ 以及接到 A 的 $R_F$；节点 A 只有对地电容 $C_A$；$M_1$ 从 X 抽取 $g_{m1}V_A$。

<!-- diagram: diagram-01.cir -->

由 $g_{m1} = g_{m2} = 1/(100\ \Omega) = 10$ mS，各时间常数为

$$
\begin{aligned}
R_FC_A &= (10\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 1\ \mathrm{ns},\\
R_DC_X &= (1\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 0.1\ \mathrm{ns},\\
C_Y/g_{m2} &= (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps},\\
C_A/g_{m2} &= (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps}.
\end{aligned}
$$

### 第 2 步 — 从 $V_t$ 到节点 A（跟随器加反馈网络）

**节点 A 的 KCL。** 流过 $R_F$ 的电流流入 $C_A$：

$$
\begin{aligned}
\frac{V_Y - V_A}{R_F} &= sC_AV_A\\
V_Y &= V_A(1 + sR_FC_A).
\end{aligned}
$$

**节点 Y 的 KCL。** 来自 $M_2$ 的电流在 $C_Y$ 和 $R_F$ 之间分流：

$$g_{m2}(V_t - V_Y) = sC_YV_Y + \frac{V_Y - V_A}{R_F} = sC_YV_Y + sC_AV_A .$$

代入 $V_Y = V_A(1 + sR_FC_A)$：

$$
\begin{aligned}
g_{m2}V_t &= (g_{m2} + sC_Y)V_Y + sC_AV_A\\
&= V_A\left[(g_{m2} + sC_Y)(1 + sR_FC_A) + sC_A\right],
\end{aligned}
$$

$$\frac{V_A}{V_t} = \frac{1}{\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}} .$$

在低频时该比值等于 1：跟随器把 $V_t$ 复制到 Y，而 $R_F$ 中没有直流电流，A 点处于同样的电压。

### 第 3 步 — 从节点 A 回到 X，以及环路传输

**节点 X 的 KCL。** $g_{m1}V_A$ 经 $R_D \parallel (1/sC_X)$ 从 X 抽出：

$$V_X = -g_{m1}V_A\left(R_D \parallel \frac{1}{sC_X}\right) = -\frac{g_{m1}R_D}{1 + sR_DC_X}V_A .$$

乘以第 2 步得到的 $V_A/V_t$：

$$\frac{V_X}{V_t} = -\frac{g_{m1}R_D}{(1 + sR_DC_X)\left[\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}\right]} .$$

环路中只有一次反相（共源级），因此是负反馈，

$$T(s) = -\frac{V_X}{V_t} = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}\right]} ,$$

$$T_0 = g_{m1}R_D = (10\ \mathrm{mS})(1\ \mathrm{k}\Omega) = 10 .$$

### 第 4 步 — 极点

**X 处的极点：**

$$\omega_X = \frac{1}{R_DC_X} = \frac{1}{0.1\ \mathrm{ns}} = 1.0\times10^{10}\ \mathrm{rad/s}.$$

**方括号项的两个极点。** 将其展开：

$$
\begin{aligned}
D(s) &= 1 + s\left(\frac{C_Y}{g_{m2}} + R_FC_A + \frac{C_A}{g_{m2}}\right) + s^2\frac{C_Y}{g_{m2}}R_FC_A\\
&= 1 + (1.02\times10^{-9})\,s + (10^{-20})\,s^2 .
\end{aligned}
$$

其根 $s = -\omega_p$ 为

$$\omega_p = \frac{1.02\times10^{-9} \mp \sqrt{(1.02\times10^{-9})^2 - 4\times10^{-20}}}{2\times10^{-20}} = \frac{1.02\times10^{-9} \mp 1.0002\times10^{-9}}{2\times10^{-20}}\ \mathrm{rad/s},$$

$$\omega_{p1} = 0.99\times10^{9}\ \mathrm{rad/s}, \qquad \omega_{p3} = 1.01\times10^{11}\ \mathrm{rad/s}.$$

因此 $D(s) = (1 + s/\omega_{p1})(1 + s/\omega_{p3})$ 严格成立，并且

$$T(s) = \frac{10}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_X}\right)\left(1 + \dfrac{s}{\omega_{p3}}\right)} .$$

主极点（dominant pole）$\omega_{p1} \approx 1/[(R_F + 1/g_{m2})C_A]$ 对应于跟随器输出端经 $R_F$ 对 $C_A$ 充电，比 $\omega_X$ 低十倍；$\omega_{p3} \approx g_{m2}/C_Y$ 是跟随器的输出极点。

### 第 5 步 — 增益交点频率

$|T(j\omega_u)| = 1$ 要求

$$\sqrt{1 + (\omega_u/\omega_{p1})^2}\;\sqrt{1 + (\omega_u/\omega_X)^2}\;\sqrt{1 + (\omega_u/\omega_{p3})^2} = 10 .$$

由于 $\omega_u \gg \omega_{p1}$，$\sqrt{1 + (\omega/\omega_{p1})^2} \approx \omega/\omega_{p1}$；忽略 $\omega_{p3}$，由 $(\omega/\omega_{p1})\sqrt{1 + (\omega/\omega_X)^2} = 10$ 大致得到 $7.7\times10^9$ rad/s。再用精确的幅值进行修正：

| $\omega$ (rad/s) | $\sqrt{1 + (\omega/\omega_{p1})^2}$ | $\sqrt{1 + (\omega/\omega_X)^2}$ | $\sqrt{1 + (\omega/\omega_{p3})^2}$ | $\lvert T\rvert$ |
|---|---|---|---|---|
| $7.0\times10^9$ | 7.141 | 1.221 | 1.0024 | 1.14 |
| $7.5\times10^9$ | 7.642 | 1.250 | 1.0028 | 1.04 |
| $7.74\times10^9$ | 7.882 | 1.265 | 1.0029 | 1.00 |
| $8.0\times10^9$ | 8.142 | 1.281 | 1.0031 | 0.96 |

因此 $\omega_u \approx 7.74\times10^9$ rad/s（$f_u = \omega_u/2\pi \approx 1.23$ GHz）。

### 第 6 步 — 交点处的相位与相位裕度

$$
\begin{aligned}
\tan^{-1}\frac{7.74\times10^9}{0.99\times10^9} &= \tan^{-1}(7.82) = 82.7°,\\
\tan^{-1}\frac{7.74\times10^9}{1.0\times10^{10}} &= \tan^{-1}(0.774) = 37.7°,\\
\tan^{-1}\frac{7.74\times10^9}{1.01\times10^{11}} &= \tan^{-1}(0.0766) = 4.4°,\\
\angle T(j\omega_u) &= -(82.7° + 37.7° + 4.4°) = -124.8° ,
\end{aligned}
$$

$$\mathrm{PM} = 180° - 124.8° = 55.2° .$$

跟随器极点比交点高 13 倍，却仍使裕度减少约 4.4°；若没有它，裕度约为 59.5°。

### 结果

$$T(s) = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]}, \qquad T_0 = g_{m1}R_D = 10,$$

其极点位于 $0.99\times10^9$、$1.0\times10^{10}$ 和 $1.01\times10^{11}$ rad/s。增益交点位于 $\omega_u \approx 7.7\times10^9$ rad/s（≈ 1.23 GHz），该处相位为 $-124.8°$，因此

$$\mathrm{PM} \approx 55° .$$

**常见错误。** 使用错误的低频环路增益，例如 $g_{m1}R_F = 100$ 或 $R_F/R_D$（它在这里恰好等于 10，但并不是环路增益）。在环路中，跟随器和 $R_F$ 的直流增益为 1（$R_F$ 中没有直流电流），因此 $T_0 = g_{m1}R_D$。

**常见错误。** 漏掉由 $R_F$ 和 $C_A$ 形成的极点，而它正是环路的**主**极点（$\approx 1$ Grad/s）。这样算出的交点会上移十倍，到约 $8\times10^{10}$ rad/s，超过 X 处的极点；由此得到的裕度即使与 55° 相符，也只是数值上的巧合。

**常见错误。** 以“离得很远”为由忽略跟随器极点 $g_{m2}/C_Y$。它只比交点高约 13 倍，却使裕度损失约 4°，忽略它会得到 59.5° 而不是 55°。
