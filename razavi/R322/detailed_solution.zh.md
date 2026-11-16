# 详细步骤 - R322

**思路。** 栅极串联 $R_G$ 后，栅极成为一个独立的节点，经 $R_G$ 接地，经 $C_{GD}$ 接到漏极，因此会随输出变化。在源极、栅极和漏极列基尔霍夫电流定律（KCL）方程，求出栅源电压，得到带一个零点的二阶传递函数。用 $R_G = 0$ 的情况和主极点估算验证结果。

### 第 1 步 — 小信号模型（small-signal model）

<!-- diagram: diagram-01.cir -->

把 $M_1$ 的源极、栅极和漏极（输出端）分别记为 S、G 和 D。$R_S$ 接在输入端与 S 之间，$R_D$ 接在 D 与交流地之间，$R_G$ 接在 G 与交流地（$V_b$）之间；$C_{GD}$ 连接 G 与 D，$C_{DB}$ 连接 D 与接地的衬底；沟道电流 $g_m(V_G - V_S)$ 从 D 流向 S（$\lambda = \gamma = 0$）。S 上没有接任何电容，因此源极节点是纯电阻性的。

### 第 2 步 — 三个 KCL 方程

对流入每个节点的电流求和：

$$\frac{V_{in} - V_S}{R_S} + g_m(V_G - V_S) = 0 , \qquad (1)$$

$$-\frac{V_G}{R_G} + (V_{out} - V_G)C_{GD}s = 0 , \qquad (2)$$

$$-\frac{V_{out}}{R_D} - V_{out}C_{DB}s + (V_G - V_{out})C_{GD}s - g_m(V_G - V_S) = 0 . \qquad (3)$$

### 第 3 步 — 由节点 G 求栅极电压

由式 (2)：

$$
\begin{aligned}
V_G\left(\frac{1}{R_G} + C_{GD}s\right) &= C_{GD}s\,V_{out}\\
V_G &= \frac{R_GC_{GD}s}{1 + R_GC_{GD}s}\,V_{out},
\end{aligned}
$$

这是从输出端到栅极的高通分压：在高频时栅极跟随输出变化。

### 第 4 步 — 由节点 S 求沟道电流

将式 (1) 乘以 $R_S$：

$$
\begin{aligned}
V_{in} - V_S + g_mR_S(V_G - V_S) &= 0\\
V_S(1 + g_mR_S) &= V_{in} + g_mR_SV_G ,
\end{aligned}
$$

$$V_G - V_S = \frac{V_G(1 + g_mR_S) - V_{in} - g_mR_SV_G}{1 + g_mR_S} = \frac{V_G - V_{in}}{1 + g_mR_S},$$

因此沟道电流为

$$g_m(V_G - V_S) = G_m'(V_G - V_{in}), \qquad G_m' \equiv \frac{g_m}{1 + g_mR_S} .$$

$R_S$ 对晶体管形成源极负反馈（source degeneration），$V_{in}$ 和 $V_G$ 都通过 $G_m'$ 起作用。

### 第 5 步 — 求解节点 D

把沟道电流代入式 (3)，并合并 $V_{out}$ 项：

$$V_{out}\left[\frac{1}{R_D} + (C_{DB} + C_{GD})s\right] = V_G\left(C_{GD}s - G_m'\right) + G_m'V_{in}.$$

代入第 3 步的 $V_G$，并在两边同乘以 $(1 + R_GC_{GD}s)$：

$$V_{out}\left\{\left[\frac{1}{R_D} + (C_{DB} + C_{GD})s\right](1 + R_GC_{GD}s) - R_GC_{GD}s\left(C_{GD}s - G_m'\right)\right\} = G_m'(1 + R_GC_{GD}s)V_{in}.$$

展开花括号，$R_GC_{GD}^2s^2$ 项相互抵消：

$$
\begin{aligned}
\{\cdots\} &= \frac{1}{R_D} + \frac{R_GC_{GD}}{R_D}s + (C_{DB} + C_{GD})s + R_GC_{GD}(C_{DB} + C_{GD})s^2 - R_GC_{GD}^2s^2 + G_m'R_GC_{GD}s\\
&= \frac{1}{R_D}\left\{1 + \left[R_DC_{DB} + (R_D + R_G + G_m'R_GR_D)C_{GD}\right]s + R_DR_GC_{GD}C_{DB}s^2\right\}.
\end{aligned}
$$

因此

$$\frac{V_{out}}{V_{in}} = \frac{G_m'R_D\,(1 + R_GC_{GD}s)}{1 + \left[R_DC_{DB} + (R_D + R_G + G_m'R_GR_D)C_{GD}\right]s + R_DR_GC_{GD}C_{DB}s^2}.$$

### 第 6 步 — 最终形式

将分子、分母同乘以 $(1 + g_mR_S)$，并利用 $G_m'(1 + g_mR_S) = g_m$ 以及

$$(1 + g_mR_S)(R_D + R_G) + g_mR_GR_D = R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S) .$$

得到

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D(1 + R_GC_{GD}s)}{(1 + g_mR_S) + b_1s + (1 + g_mR_S)R_DR_GC_{GD}C_{DB}s^2},$$

$$b_1 = (1 + g_mR_S)R_DC_{DB} + \left[R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S)\right]C_{GD}.$$

### 第 7 步 — 验证与解读

**直流增益。** $g_mR_D/(1 + g_mR_S)$，即带信号源电阻的常规共栅级增益。

**$R_G = 0$。** 零点消失，分母变为 $(1 + g_mR_S)[1 + R_D(C_{GD} + C_{DB})s]$：

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D}{(1 + g_mR_S)\left[1 + R_D(C_{GD} + C_{DB})s\right]},$$

只有一个输出极点；这正是栅极为交流地、$C_{GD}$ 只是简单地与 $C_{DB}$ 相加时应有的结果。

**零点。** $s_z = -1/(R_GC_{GD})$，位于**左半平面**：在该频率处，从输出端到交流接地的 $V_b$ 的串联支路 $R_G + 1/(C_{GD}s)$ 阻抗为零，把输出端短路。

**主极点。** 当两个极点相距较远时，$\omega_{p1}\approx(1 + g_mR_S)/b_1$，即

$$\omega_{p1}\approx\frac{1}{R_DC_{DB} + \left[R_D + \left(1 + \dfrac{g_mR_D}{1 + g_mR_S}\right)R_G\right]C_{GD}} .$$

$\left(1 + \dfrac{g_mR_D}{1 + g_mR_S}\right)R_GC_{GD}$ 项是一种类似密勒效应的作用：当 $V_{in} = 0$ 时，栅极作为增益为 $-g_mR_D/(1 + g_mR_S)$ 的带源极负反馈共源级（common-source stage）驱动漏极，因此经 $R_G$ 看到的 $C_{GD}$ 被乘以 $1 + g_mR_D/(1 + g_mR_S)$。这就是栅极电阻会降低共栅级带宽的原因。

### 结果

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D(1 + R_GC_{GD}s)}{(1 + g_mR_S) + b_1s + (1 + g_mR_S)R_DR_GC_{GD}C_{DB}s^2},$$

$$b_1 = (1 + g_mR_S)R_DC_{DB} + \left[R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S)\right]C_{GD}.$$

- 直流增益为 $g_mR_D/(1 + g_mR_S)$；有两个极点；还有一个由 $R_G$ 产生、位于 $s = -1/(R_GC_{GD})$ 的左半平面零点。
- 当 $R_G = 0$ 时：$g_mR_D/\{(1 + g_mR_S)[1 + R_D(C_{GD} + C_{DB})s]\}$。
- 主极点 $\approx 1/\{R_DC_{DB} + [R_D + (1 + g_mR_D/(1 + g_mR_S))R_G]C_{GD}\}$。

**常见错误。** 把栅极当作交流地，从而认为 $R_G$ 不起作用。由于 $R_G$ 的存在，$C_{GD}$ 把输出摆幅耦合回栅极，从而调制沟道电流；响应变为二阶，主极点降低。

**常见错误。** 把零点放在右半平面。该零点来自从输出端到交流地的 $R_G$–$C_{GD}$ 串联支路，其阻抗在负实频率 $s = -1/(R_GC_{GD})$ 处为零。

**常见错误。** 把直流增益写成 $g_mR_D$。$R_S$ 与输入电阻 $1/g_m$ 构成分压器，得到 $g_mR_D/(1 + g_mR_S)$。
