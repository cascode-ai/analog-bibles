# 详细步骤 - R499

**思路。** 跨接在 $M_1$ 上的 $C_C$ 在高阻输入节点处被密勒倍增（Miller multiplication），形成一个很低的主极点，并通过极点分裂使 $M_1$ 的漏极成为快节点，因此在 0.5 pF 负载下，第一个次极点是输出节点 Y。按 60° 的两极点规则确定 $C_C$（暂不考虑右半平面零点），然后列出各极点，并定量分析零点的影响。

### 第 1 步 — 小信号参数与电容

偏置：$I_{D3} = 10\ \mu$A，$I_{D1} = |I_{D2}| = 1$ mA；$V_Y = 0.82$ V，输入节点 A（$M_1$ 的栅极）处 $V_A = 1.09$ V，$M_1$ 的漏极 B 处 $V_B = 1.48$ V；所有器件均工作在饱和区（saturation region），没有体效应（body effect）。由 $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ 和 $r_O = 1/(\lambda I_D)$：

$$
\begin{aligned}
g_{m1} &= 5.18\ \mathrm{mS}, & r_{O1} &= 10\ \mathrm{k}\Omega, & g_{m1}r_{O1} &= 51.8,\\
g_{m2} &= 2.77\ \mathrm{mS}, & r_{O2} &= 5\ \mathrm{k}\Omega, & g_{m2}r_{O2} &= 13.9,\\
g_{m3} &= 0.164\ \mathrm{mS}, & r_{O3} &= 1\ \mathrm{M}\Omega, & g_{m3}r_{O3} &= 163.7 .
\end{aligned}
$$

环路增益（在 $M_3$ 的栅极处断开环路；三次反相，为负反馈）：$T_0 = 163.7\times51.8\times13.9 = 1.17\times10^5$。电容（$C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$，$C_{GD} = WC_{ov}$）：$C_{GS1} = 84$，$C_{GD1} = 20$，$C_{GS2} = 79$，$C_{GD2} = 15$，$C_{GS3} = 8.4$，$C_{GD3} = 2$ fF。

断开后环路的各节点：A（$r_{O3}$，$C_{A0} = C_{GS1} + C_{GD3} = 86$ fF），B（$r_{O1}$，$C_{GS2}$），Y（$r_{O2}$，$C_Y = C_L + C_{GS3} + C_{GD3} = 510.4$ fF，含 $M_3$ 栅极电容的复制品）。$C_{GD1}$ 和 $C_C$ 跨接在 A–B 之间；$C_{GD2}$ 跨接在 B–Y 之间。

<!-- diagram: diagram-01.cir -->

未补偿时极点为 $8.7\times10^5$、$3.5\times10^8$ 和 $1.1\times10^{10}$ rad/s，环路不稳定（PM ≈ −32°）。

### 第 2 步 — 加入 $C_C$ 后的主极点与增益带宽积（gain-bandwidth product）

令 $C_1 = C_C + C_{GD1}$。它跨接在增益 $-g_{m1}r_{O1}$ 的两端，在 A 处被密勒倍增：

$$\omega_{p1} \approx \frac{1}{r_{O3}(1 + g_{m1}r_{O1})C_1}, \qquad \mathrm{GBW} = T_0\,\omega_{p1} \approx \frac{g_{m3}\,g_{m2}r_{O2}}{C_C + C_{GD1}} = \frac{(0.164\ \mathrm{mS})(13.9)}{C_C + C_{GD1}} = \frac{2.27\ \mathrm{mS}}{C_C + C_{GD1}} .$$

### 第 3 步 — 第一个次极点：输出节点

在 $\omega_{p1}$ 以上，A 经分压器 $C_1$–$C_{A0}$ 跟随 B，因此 $M_1$ 在 B 处几乎相当于一个二极管。取 $C_1 \approx 9$ pF（预先采用最终结果）：

$$
\begin{aligned}
G_B' &= \frac{1}{r_{O1}} + g_{m1}\frac{C_1}{C_1 + C_{A0}} = 0.1 + 5.18\times0.991 = 5.23\ \mathrm{mS}\quad(R_B' = 191\ \Omega),\\
C_B' &= C_{GS2} + \frac{C_1C_{A0}}{C_1 + C_{A0}} = 79 + 85 = 164\ \mathrm{fF}.
\end{aligned}
$$

两个较高的极点是 B–Y 节点对（耦合电容 $C_{GD2}$，跨导 $g_{m2}$）的 $1 + as + bs^2$ 的根：

$$
\begin{aligned}
a &= R_B'(1 + g_{m2}r_{O2})C_{GD2} + R_B'C_B' + r_{O2}(C_{GD2} + C_Y) = 0.043 + 0.031 + 2.627 = 2.701\ \mathrm{ns},\\
b &= R_B'r_{O2}\left(C_B'C_{GD2} + C_B'C_Y + C_{GD2}C_Y\right) = 8.98\times10^{-20}\ \mathrm{s^2},
\end{aligned}
$$

$$\omega_{p2,p3} = \frac{a \mp \sqrt{a^2 - 4b}}{2b} \quad\Longrightarrow\quad \omega_{p2} = 3.75\times10^8\ \mathrm{rad/s}, \qquad \omega_{p3} = 3.0\times10^{10}\ \mathrm{rad/s}$$

（按两根相距很远的近似，$1/a = 3.70\times10^8$ rad/s，$a/b = 3.0\times10^{10}$ rad/s，与之接近）。

$\omega_{p2}$ 属于输出节点（$a$ 主要由 $r_{O2}(C_L + \ldots)$ 决定；逐节点估算 $1/[r_{O2}(C_L + C_{GD2} + C_{GS3} + C_{GD3})] = 1/(5\ \mathrm{k}\Omega\times0.525\ \mathrm{pF}) = 3.8\times10^8$ rad/s 几乎相同），$\omega_{p3}$ 属于节点 B，被极点分裂推高。$\omega_{p2}$ 几乎与 $C_C$ 无关，因此无需迭代。

<!-- diagram: diagram-02.cir -->

### 第 4 步 — 实现 60° 相位裕度所需的 $C_C$

主极点贡献 90°，因此 PM = 60° 要求 $\omega_u = \omega_{p2}\tan30°$；计入 $\omega_{p2}$ 引起的幅值下降后，$\mathrm{GBW} = \omega_u\sqrt{1 + 1/3} = \tfrac23\omega_{p2}$：

$$
\begin{aligned}
\mathrm{GBW} &= \tfrac23\times3.75\times10^8 = 2.50\times10^8\ \mathrm{rad/s},\\
C_C + C_{GD1} &= \frac{2.27\ \mathrm{mS}}{2.50\times10^8\ \mathrm{rad/s}} = 9.07\ \mathrm{pF},\\
C_C &= 9.07 - 0.02 \approx 9\ \mathrm{pF}.
\end{aligned}
$$

（若用逐节点估算的 $\omega_{p2} = 3.8\times10^8$ rad/s，则为 8.9 pF。）负载使输出极点降低约 15 倍，因此 $C_C$ 约为无负载时（0.6 pF）的 15 倍。

### 第 5 步 — 补偿后的极点（$C_C = 9$ pF）

$$
\begin{aligned}
\omega_{p1} &= \frac{1}{(1\ \mathrm{M}\Omega)(52.8)(9.02\ \mathrm{pF})} = 2.1\times10^3\ \mathrm{rad/s}\quad(\approx 330\ \mathrm{Hz}),\ \text{input node A},\\
\omega_{p2} &\approx 3.75\times10^8\ \mathrm{rad/s}\quad(\approx 60\ \mathrm{MHz}),\ \text{output node Y},\\
\omega_{p3} &\approx 3.0\times10^{10}\ \mathrm{rad/s}\quad(\approx 4.7\ \mathrm{GHz}),\ \text{drain of } M_1 .
\end{aligned}
$$

完整的三节点分析给出 $2.10\times10^3$、$3.75\times10^8$ 和 $2.97\times10^{10}$ rad/s；去掉零点后，它在 $C_C \approx 9.1$–9.2 pF 时给出 PM ≈ 60°。

**零点。** 流过 $C_C + C_{GD1}$ 的前馈（feedforward）电流在下述频率处抵消 $M_1$ 的电流：

$$\omega_z = +\frac{g_{m1}}{C_C + C_{GD1}} = \frac{5.18\ \mathrm{mS}}{9.02\ \mathrm{pF}} = 5.7\times10^8\ \mathrm{rad/s},$$

这是一个右半平面（RHP）零点。

### 第 6 步 — 为什么必须处理这个零点

在交点处，无论 $C_C$ 取何值，都有 $\omega_u/\omega_z \approx \mathrm{GBW}/\omega_z = g_{m3}g_{m2}r_{O2}/g_{m1} = 2.27/5.18 = 0.44$，因此 RHP 零点总会带来大约 24–26° 的相位滞后：

- 若只用单个 9 pF 电容，实际相位裕度只有约 37°；
- 用单个电容达到 60° 需要 $C_C \approx 80$ pF（Y 处接复制负载时为 82 pF；主极点 ≈ 230 rad/s，零点 ≈ $6.3\times10^7$ rad/s），在面积和带宽上都不现实；
- 与 $C_C$ 串联一个电阻可以消除零点或把它移到 $\omega_{p2}$ 上，因此忽略零点的 9 pF 设计才是预期的方案。

### 结果

$$C_C \approx 9\ \mathrm{pF}\quad\left(\mathrm{GBW} = \frac{g_{m3}g_{m2}r_{O2}}{C_C + C_{GD1}} = \tfrac23\,\omega_{p2},\ \omega_{p2} \approx 3.75\times10^8\ \mathrm{rad/s}\right),$$

此处忽略了 RHP 零点（它将由串联电阻抵消）。补偿后的极点：≈ $2.1\times10^3$ rad/s（输入节点），≈ $3.75\times10^8$ rad/s（输出节点），≈ $3\times10^{10}$ rad/s（$M_1$ 的漏极）；RHP 零点位于 ≈ $5.7\times10^8$ rad/s。若只用单个电容并保留零点，60° 将需要 ≈ 80 pF。

**常见错误。** 取 $\mathrm{GBW} = g_{m3}/C_C$ 或 $g_{m1}/C_C$。在环路中，密勒补偿级之后还有 $M_2$ 的增益（$g_{m2}r_{O2} \approx 14$），因此 $\mathrm{GBW} = g_{m3}g_{m2}r_{O2}/(C_C + C_{GD1})$；漏掉它会使 $C_C$ 小 14 倍。

**常见错误。** 用 $1/g_{m2}$ 计算输出极点，仿佛 $M_2$ 是源极跟随器（source follower）。$M_2$ 是共源级（common-source stage），因此 Y 处的电阻为 $r_{O2} = 5$ kΩ，它与 $C_L$ 一起把第一个次极点设定在 $3.8\times10^8$ rad/s 附近。

**常见错误。** 沿用无负载时的结果（≈ 0.6 pF），或者认为一两个 pF 的电容就足够了。负载使输出极点降低约十五倍，GBW 也必须随之降低。
