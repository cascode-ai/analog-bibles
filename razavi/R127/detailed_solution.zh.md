# 详细步骤 - R127

**思路。** 在给定偏置下计算 $g_m$、$r_O$ 以及 $M_2$（其源极位于 $V_X$）的体跨导（body transconductance）$g_{mb}$，推导以 $R_D$ 为负载的共源共栅级增益并代入数值。由于与共源共栅结构的输出电阻相比 $R_D$ 非常小，结果接近 $-g_{m1}R_D$。

### 第 1 步 — 小信号参数

由 $(W/L)_1 = 50/0.5 = 100$、$(W/L)_2 = 10/0.5 = 20$ 以及 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ 得：

$$
\begin{aligned}
g_{m1} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.66\ \mathrm{mS},\\
g_{m2} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(20)(0.5\ \mathrm{mA})} = \sqrt{2.68\times10^{-6}}\ \mathrm{A/V} = 1.64\ \mathrm{mS},
\end{aligned}
$$

$$r_{O1} = r_{O2} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega}.$$

**$M_2$ 的体效应（body effect）。** 它的衬底接地，源极位于 $V_{SB2} = V_X = 0.323$ V，因此它还有第二个受控源 $g_{mb2}v_{bs2}$，其中 $g_{mb} = \eta g_m$，$\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$：

$$
\begin{aligned}
\eta_2 &= \frac{0.45}{2\sqrt{0.9 + 0.323}} = \frac{0.45}{2\times1.106} = 0.203,\\
g_{mb2} &= \eta_2\,g_{m2} = 0.203\times1.64\ \mathrm{mS} = 0.333\ \mathrm{mS},\\
g_{m2} + g_{mb2} &= 1.637 + 0.333 = 1.970\ \mathrm{mS}.
\end{aligned}
$$

$M_1$ 的 $V_{SB1} = 0$，$v_{bs1} = 0$，因此其体效应不起作用。

### 第 2 步 — 小信号模型（small-signal model）与增益表达式

$V_{DD}$ 和 $V_b$ 为交流地。对于 $M_2$，$v_{gs2} = v_{bs2} = -v_X$，因此它的两个受控源合起来从 out 向 $X$ 输送 $-(g_{m2} + g_{mb2})v_X$，$r_{O2}$ 接在 out 与 $X$ 之间。$M_1$ 等效为从 $X$ 流向地的 $g_{m1}v_{in}$，并联 $r_{O1}$；$R_D$ 从 out 接到交流地。

<!-- diagram: diagram-01.cir -->

设 $i$ 为从输出端向下流过 $M_2$ 和 $M_1$ 的信号电流，并记 $g_t = g_{m2} + g_{mb2}$：

$$v_{out} = -iR_D, \qquad i = g_{m1}v_{in} + \frac{v_X}{r_{O1}}\ \Longrightarrow\ v_X = r_{O1}(i - g_{m1}v_{in}),$$

$$i = -g_tv_X + \frac{v_{out} - v_X}{r_{O2}}.$$

代入 $v_X$ 和 $v_{out}$，并乘以 $r_{O2}$：

$$ir_{O2} = -g_tr_{O1}r_{O2}\,i + g_tr_{O1}r_{O2}\,g_{m1}v_{in} - iR_D - r_{O1}i + r_{O1}g_{m1}v_{in}.$$

合并 $i$ 项和 $v_{in}$ 项：

$$i\,(R_D + r_{O1} + r_{O2} + g_tr_{O1}r_{O2}) = g_{m1}r_{O1}\,(1 + g_tr_{O2})\,v_{in},$$

再由 $v_{out} = -iR_D$ 得：

$$A_v = -\frac{g_{m1}r_{O1}\left[1 + (g_{m2} + g_{mb2})r_{O2}\right]R_D}{R_D + r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2}}.$$

### 第 3 步 — 数值计算

$$
\begin{aligned}
(g_{m2} + g_{mb2})r_{O2} &= (1.970\ \mathrm{mS})(20\ \mathrm{k\Omega}) = 39.40,\\
r_{O1}\left[1 + (g_{m2} + g_{mb2})r_{O2}\right] &= (20\ \mathrm{k\Omega})(40.40) = 808.1\ \mathrm{k\Omega},\\
R_{out,c} \equiv r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2} &= 20 + 20 + 39.40\times20\ \mathrm{k\Omega} = 828.1\ \mathrm{k\Omega},\\
\text{denominator} &= R_D + R_{out,c} = 1 + 828.1 = 829.1\ \mathrm{k\Omega},
\end{aligned}
$$

$$A_v = -(3.66\ \mathrm{mS})(1\ \mathrm{k\Omega})\times\frac{808.1\ \mathrm{k\Omega}}{829.1\ \mathrm{k\Omega}} = -3.66\times0.9747 \approx -3.57 .$$

### 第 4 步 — 解释：$A_v \approx -g_{m1}R_D$

增益为 $A_v = -G_m\,(R_D\parallel R_{out,c})$，其中 $R_{out,c} = 828$ kΩ 是向下看进共源共栅结构的电阻，$G_m = g_{m1}r_{O1}[1 + (g_{m2} + g_{mb2})r_{O2}]/R_{out,c} = 3.66\ \mathrm{mS}\times808.1/828.1 = 3.57$ mS 是它的短路跨导（short-circuit transconductance），略低于 $g_{m1}$，因为 $M_1$ 的信号电流有一小部分损失在 $r_{O1}$ 中。$R_D = 1$ kΩ 比 $R_{out,c}$ 小约 800 倍，因此

$$A_v \approx -G_mR_D \approx -g_{m1}R_D = -3.66 .$$

当负载为 1 kΩ 电阻时，共源共栅结构的高输出电阻（约 $g_{m2}r_{O2}r_{O1}$）被浪费了：增益由负载决定。在这里它的好处在于减小了 $M_1$ 的密勒效应（Miller effect），并改善了输入与输出之间的隔离。$M_2$ 的体效应几乎没有影响（若不计体效应，增益为 −3.55）。

### 结果

$$A_v = -\frac{g_{m1}r_{O1}\left[1 + (g_{m2} + g_{mb2})r_{O2}\right]R_D}{R_D + r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2}} \approx -3.57,$$

其中 $g_{m1} = 3.66$ mS，$g_{m2} = 1.64$ mS，$g_{mb2} = 0.333$ mS，$r_{O1} = r_{O2} = 20$ kΩ。这基本上就是 $-g_{m1}R_D = -3.66$，因为共源共栅结构的输出电阻（≈ 828 kΩ）远大于 $R_D$。

**常见错误。** 给出共源共栅结构的本征增益（intrinsic gain），其量级为 $g_{m1}(g_{m2} + g_{mb2})r_{O1}r_{O2}$（此处约为 −2900），仿佛负载是理想电流源（current source）。实际上，与 828 kΩ 共源共栅电阻并联的 $R_D = 1$ kΩ 起主导作用。

**常见错误。** 用 $g_{m2}$ 代替 $g_{m1}$，例如 $A_v \approx -g_{m2}R_D = -1.64$。输入驱动的是 $M_1$；共栅（common-gate）管 $M_2$ 只是把 $M_1$ 的信号电流传送到输出端。

**常见错误。** 得出正增益。$v_{in}$ 升高会使流过 $R_D$ 的电流增大，因此 $V_{out}$ 下降。
