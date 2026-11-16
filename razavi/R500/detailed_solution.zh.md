# 详细步骤 - R500

**思路。** 跨接在 $M_1$ 上的补偿电容会在流过它的前馈（feedforward）电流等于 $M_1$ 的电流之处产生一个零点。串联电阻 $R_z$ 把零点移到 $1/[C_C(1/g_{m1} - R_z)]$；当 $R_z > 1/g_{m1}$ 时零点进入左半平面。在 0.5 pF 负载下，补偿后环路的第一个次极点是输出节点；选取 $R_z$ 使零点恰好落在它上面。

### 第 1 步 — 小信号参数

偏置：$I_{D1} = |I_{D2}| = 1$ mA，$I_{D3} = 10\ \mu$A；所有器件均工作在饱和区（saturation region）。

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 5.18\ \mathrm{mS}, \qquad \frac{1}{g_{m1}} = 193\ \Omega,\\
r_{O2} &= \frac{1}{\lambda_pI_{D2}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega, \qquad g_{m2} = 2.77\ \mathrm{mS},\\
r_{O1} &= 10\ \mathrm{k}\Omega, \qquad g_{m3} = 0.164\ \mathrm{mS}, \qquad r_{O3} = 1\ \mathrm{M}\Omega .
\end{aligned}
$$

器件电容（$C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$，$C_{GD} = WC_{ov}$）：$C_{GS1} = 84$，$C_{GD1} = 20$，$C_{GS2} = 79$，$C_{GD2} = 15$，$C_{GS3} = 8.4$，$C_{GD3} = 2$ fF。

断开后的环路（测试源接在 $M_3$ 的栅极，其栅极电容的复制品接在 Y 处）：节点 A（$M_1$ 的栅极；$r_{O3}$，86 fF），节点 B（$M_1$ 的漏极；$r_{O1}$，$C_{GS2}$），节点 Y（$r_{O2}$，$C_L + C_{GS3} + C_{GD3} = 510.4$ fF）；$C_{GD1}$ 和 $R_z$–$C_C$ 支路（$C_C = 9$ pF）跨接在 A 与 B 之间，$C_{GD2}$ 跨接在 B 与 Y 之间。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 加串联电阻后的零点

在零点处 $V_B = 0$ 而 $V_A \ne 0$，因此没有电流从 B 流入 $r_{O1}$、$C_{GS2}$ 或 $C_{GD2}$，B 处的基尔霍夫电流定律（KCL）方程使来自 A 的电流与 $M_1$ 的电流相平衡：

$$\frac{V_A}{R_z + 1/(sC_C)} + sC_{GD1}V_A = g_{m1}V_A .$$

与 $C_C = 9$ pF 相比略去 $C_{GD1} = 20$ fF：

$$
\begin{aligned}
R_z + \frac{1}{s_zC_C} &= \frac{1}{g_{m1}}\\
s_z &= \frac{1}{C_C\left(g_{m1}^{-1} - R_z\right)} .
\end{aligned}
$$

当 $R_z = 0$ 时，这是右半平面（RHP）零点 $g_{m1}/C_C$；当 $R_z = 1/g_{m1}$ 时它移到无穷远处；当 $R_z > 1/g_{m1}$ 时，它成为位于 $\omega_z = 1/[C_C(R_z - g_{m1}^{-1})]$ 的左半平面（LHP）零点，带来相位超前，可以抵消一个极点。

### 第 3 步 — 第一个次极点

$M_1$ 上跨接 9 pF 时，主极点（dominant pole）位于 A，$\omega_{p1} \approx 1/[r_{O3}(1 + g_{m1}r_{O1})(C_C + C_{GD1})] = 1/[(1\ \mathrm{M}\Omega)(52.8)(9.02\ \mathrm{pF})] = 2.1\times10^3$ rad/s；由于极点分裂（pole splitting），$M_1$ 在高频时经 $C_C$ 实际上成为二极管连接（diode-connected），使 B 成为快节点（≈ $3\times10^{10}$ rad/s）。因此第一个次极点是**输出节点 Y**，其电容主要来自负载：

$$\omega_{p2} \approx \frac{1}{r_{O2}\left(C_L + C_{GD2} + C_{GS3} + C_{GD3}\right)} = \frac{1}{(5\ \mathrm{k}\Omega)(0.525\ \mathrm{pF})} = \frac{1}{2.63\ \mathrm{ns}} = 3.8\times10^8\ \mathrm{rad/s}.$$

更完整的计算（把节点 B 简化为 $R_B' = 1/[1/r_{O1} + g_{m1}C_1/(C_1 + C_{A0})] = 191\ \Omega$ 和 $C_B' = 164$ fF，再求解 B–Y 两节点的二次方程）给出 $\omega_{p2} = 3.75\times10^8$ rad/s；由于 $C_{GD2}$ 的密勒负载效应，该值略低。

### 第 4 步 — 把 LHP 零点放到 $\omega_{p2}$ 上

令 $\omega_z = \omega_{p2}$：

$$
\begin{aligned}
\frac{1}{C_C\left(R_z - g_{m1}^{-1}\right)} &= \omega_{p2}\\
R_z &= \frac{1}{g_{m1}} + \frac{1}{\omega_{p2}C_C} .
\end{aligned}
$$

取 $\omega_{p2} = 3.75\times10^8$ rad/s：

$$
\begin{aligned}
\frac{1}{\omega_{p2}C_C} &= \frac{1}{(3.75\times10^8\ \mathrm{rad/s})(9\ \mathrm{pF})} = \frac{1}{3.375\ \mathrm{mS}} = 296\ \Omega,\\
R_z &= 193\ \Omega + 296\ \Omega = 489\ \Omega \approx 0.49\ \mathrm{k}\Omega .
\end{aligned}
$$

（若用逐节点估算的 $\omega_{p2} = 3.8\times10^8$ rad/s，则 $R_z = 193 + 292 = 485\ \Omega$；差别可以忽略。）

### 第 5 步 — 验证

取 $R_z = 489\ \Omega$ 时，完整的节点分析把 LHP 零点放在 $-3.75\times10^8$ rad/s，正好位于 $3.75\times10^8$ rad/s 的输出极点上；$R_z$ 几乎不移动这个极点（它主要由 $r_{O2}$ 和 $C_L$ 决定）。输出极点被抵消后，剩余的高频极点在 $2\times10^{10}$ rad/s 附近，因此直到远高于增益交点（gain crossover）的频率，环路都表现为单极点系统，交点 ≈ $2.5\times10^8$ rad/s：相位裕度（phase margin）约为 89°，而仅用 9 pF 电容时约为 37°。

### 结果

$$R_z = \frac{1}{g_{m1}} + \frac{1}{\omega_{p2}C_C} = 193\ \Omega + \frac{1}{(3.75\times10^8\ \mathrm{rad/s})(9\ \mathrm{pF})} \approx 193 + 296 \approx 0.49\ \mathrm{k}\Omega,$$

其中 $\omega_{p2} \approx 1/[r_{O2}(C_L + C_{GD2} + C_{GS3} + C_{GD3})] \approx 3.75$–$3.8\times10^8$ rad/s 是输出节点的极点。于是零点移入左半平面并落在输出极点上，相位裕度提高到约 89°。

**常见错误。** 回答 $R_z = 1/g_{m1} \approx 193\ \Omega$。这只是把零点送到无穷远处；要把它放到输出极点上，还需要额外的 $1/(\omega_{p2}C_C) \approx 296\ \Omega$。

**常见错误。** 把零点对准了错误的极点，例如 $M_1$ 漏极处的极点或输入节点的主极点。补偿后 $M_1$ 的漏极是快节点（≈ $3\times10^{10}$ rad/s）；限制相位裕度的是由 $r_{O2}$ 和 0.5 pF 负载决定的输出极点。

**常见错误。** 取 $R_z < 1/g_{m1}$，使零点留在右半平面，带来相位滞后，而不是抵消极点。
