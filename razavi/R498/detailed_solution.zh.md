# 详细步骤 - R498

**思路。** 计算偏置点、小信号参数和器件电容，然后在 $M_3$ 的栅极处断开环路。输入节点（电阻为 $r_{O3}$，$C_{GD1}$ 经密勒倍增）给出主极点（dominant pole）。在主极点以上，输入节点只是经电容分压器（capacitive divider）跟随 $M_1$ 的漏极，从而把电路简化为两节点系统；由于 0.5 pF 的负载很重，第二个极点由输出节点 Y 给出，而 $M_1$ 的漏极则被分裂到高频。

### 第 1 步 — 偏置点与小信号参数

把输入节点（$M_1$ 的栅极）记为 A，$M_1$ 的漏极记为 B。当 $I_{in} = 0$ 时：$I_{D3} = 10\ \mu$A，$I_{D1} = |I_{D2}| = 1$ mA，且所有源极都接在电源轨上，因此没有体效应（body effect）：

$$V_Y = V_{GS3} = 0.7 + 0.122 = 0.82\ \mathrm{V}, \qquad V_A = V_{GS1} = 0.7 + 0.386 = 1.09\ \mathrm{V}, \qquad V_B = 3 - (0.8 + 0.722) = 1.48\ \mathrm{V},$$

因此每个器件都满足 $|V_{DS}| > |V_{ov}|$，均工作在饱和区（saturation region）。

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu)(100)(1\ \mathrm{m})} = 5.18\ \mathrm{mS}, & r_{O1} &= \frac{1}{(0.1)(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
g_{m2} &= \sqrt{2(38.4\ \mu)(100)(1\ \mathrm{m})} = 2.77\ \mathrm{mS}, & r_{O2} &= \frac{1}{(0.2)(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\\
g_{m3} &= \sqrt{2(134\ \mu)(10)(10\ \mu)} = 0.164\ \mathrm{mS}, & r_{O3} &= \frac{1}{(0.1)(10\ \mu\mathrm{A})} = 1\ \mathrm{M}\Omega .
\end{aligned}
$$

**环路增益**（三个反相级，因此是负反馈）：

$$T_0 = (g_{m3}r_{O3})(g_{m1}r_{O1})(g_{m2}r_{O2}) = 163.7\times51.8\times13.9 = 1.17\times10^5 .$$

### 第 2 步 — 电容与断开后的环路

由 $C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$ 和 $C_{GD} = WC_{ov}$（$C_{ox} = 3.84\ \mathrm{fF/\mu m^2}$，$L = 0.5\ \mu$m）：

$$C_{GS1} = 64 + 20 = 84\ \mathrm{fF},\ C_{GD1} = 20\ \mathrm{fF};\quad C_{GS2} = 64 + 15 = 79\ \mathrm{fF},\ C_{GD2} = 15\ \mathrm{fF};\quad C_{GS3} = 6.4 + 2 = 8.4\ \mathrm{fF},\ C_{GD3} = 2\ \mathrm{fF}.$$

在 $M_3$ 的栅极接测试源（并在 Y 处保留 $M_3$ 栅极电容的复制品，10.4 fF）时，A 对地接有 $r_{O3}$ 和 $C_{A0} = C_{GS1} + C_{GD3} = 86$ fF，并经 $C_{GD1}$ 接到 B；B 经 $r_{O1}$、$C_{GS2} = 79$ fF 接交流地，并经 $C_{GD2}$ 接到 Y；Y 对地接有 $r_{O2}$ 和 $C_{Y} = C_L + C_{GS3} + C_{GD3} = 500 + 10.4 = 510.4$ fF。

<!-- diagram: diagram-01.cir -->

### 第 3 步 — 输入节点 A 处的主极点

$C_{GD1}$ 跨接在增益 $-g_{m1}r_{O1} = -51.8$ 的两端，因此它在 A 处表现为乘以 $1 + g_{m1}r_{O1} = 52.8$ 的电容：

$$
\begin{aligned}
C_A &= C_{GS1} + C_{GD3} + (1 + g_{m1}r_{O1})C_{GD1} = 84 + 2 + 52.8\times20 = 1142\ \mathrm{fF},\\
\omega_A &= \frac{1}{r_{O3}C_A} = \frac{1}{(1\ \mathrm{M}\Omega)(1.142\ \mathrm{pF})} = 8.8\times10^5\ \mathrm{rad/s}\quad(\approx 140\ \mathrm{kHz}),
\end{aligned}
$$

与无 $C_L$ 时相同。

### 第 4 步 — 求两个高频极点的简化模型

当 $\omega \gg \omega_A$ 时，$r_{O3}$ 中的电流可以忽略，A 处的基尔霍夫电流定律（KCL）方程变为一个电容分压关系：

$$V_A = \frac{C_{GD1}}{C_{GD1} + C_{A0}}V_B = \frac{20}{106}V_B = 0.189\,V_B .$$

于是 $M_1$ 的电流 $g_{m1}V_A$ 在 B 处相当于一个电导，这就是 $C_{GD1}$ 引起的极点分裂；同时 $C_{GD1}$ 与 $C_{A0}$ 串联，增加了一个电容：

$$
\begin{aligned}
G_B' &= \frac{1}{r_{O1}} + g_{m1}\,(0.189) = 0.1 + 0.977 = 1.08\ \mathrm{mS}\quad(R_B' = 929\ \Omega),\\
C_B' &= C_{GS2} + \frac{C_{GD1}C_{A0}}{C_{GD1} + C_{A0}} = 79 + 16.2 = 95.2\ \mathrm{fF}.
\end{aligned}
$$

现在 B（$R_B'$、$C_B'$）和 Y（$r_{O2}$、$C_Y$）构成一个由 $C_{GD2}$ 和 $g_{m2}$ 耦合的两节点系统：

<!-- diagram: diagram-02.cir -->

其特征多项式为 $1 + as + bs^2$，其中（$1 + g_{m2}r_{O2} = 14.86$）

$$
\begin{aligned}
a &= R_B'(1 + g_{m2}r_{O2})C_{GD2} + R_B'C_B' + r_{O2}(C_{GD2} + C_Y)\\
&= (929)(14.86)(15\ \mathrm{fF}) + (929)(95.2\ \mathrm{fF}) + (5\ \mathrm{k}\Omega)(525.4\ \mathrm{fF})\\
&= 0.207 + 0.088 + 2.627 = 2.922\ \mathrm{ns},\\
b &= R_B'\,r_{O2}\left(C_B'C_{GD2} + C_B'C_Y + C_{GD2}C_Y\right)\\
&= (929)(5000)\left[(95.2)(15) + (95.2)(510.4) + (15)(510.4)\right]\times10^{-30}\ \mathrm{s^2}\\
&= (4.645\times10^6)(5.767\times10^{-26}) = 2.68\times10^{-19}\ \mathrm{s^2}.
\end{aligned}
$$

两个根相距很远，因此

$$\omega_Y \approx \frac1a = \frac{1}{2.922\ \mathrm{ns}} = 3.4\times10^8\ \mathrm{rad/s}, \qquad \omega_B \approx \frac ab = \frac{2.922\times10^{-9}}{2.68\times10^{-19}} = 1.1\times10^{10}\ \mathrm{rad/s}$$

（用求根公式得 $3.54\times10^8$ 和 $1.06\times10^{10}$ rad/s）。

- $\omega_Y$ 基本上属于输出节点，因为 $a$ 主要由 $r_{O2}(C_L + \ldots)$ 决定。逐节点估算 $1/[r_{O2}(C_L + C_{GD2} + C_{GS3} + C_{GD3})] = 1/(5\ \mathrm{k}\Omega\times0.525\ \mathrm{pF}) = 3.8\times10^8$ rad/s 与之接近；$C_{GD2}$ 的密勒负载效应使它略有降低。
- $\omega_B$ 属于 $M_1$ 的漏极。按密勒效应逐节点估算得 $1/[r_{O1}(C_{GD1} + C_{GS2} + (1 + g_{m2}r_{O2})C_{GD2})] = 1/(10\ \mathrm{k}\Omega\times0.32\ \mathrm{pF}) = 3\times10^8$ rad/s，这是严重错误的：通过 $C_{GD1}$，$M_1$ 在高频时相当于一个二极管，B 是低阻节点。

完整的三节点分析给出 $8.74\times10^5$、$3.54\times10^8$ 和 $1.06\times10^{10}$ rad/s，结果一致。

### 第 5 步 — 这对环路意味着什么

环路的增益带宽积（gain-bandwidth product）$T_0\,\omega_A \approx 1.17\times10^5\times8.8\times10^5 \approx 10^{11}$ rad/s 远高于位于 $3.5\times10^8$ rad/s 的第二个极点。在 $\omega_Y$ 处环路增益仍约为 200，因此要在相位越过 $-180°$ 之后才降到单位增益，增益交点（gain crossover）在 $5.7\times10^9$ rad/s 附近，PM ≈ −32°：带有这一负载的未补偿放大器是不稳定的。

### 结果

开环极点（在 $M_3$ 的栅极处断开环路）：

- $\omega_A \approx 8.8\times10^5$ rad/s（≈ 140 kHz）：输入节点，由 $r_{O3}$ 与 $C_{GS1} + C_{GD3} + (1 + g_{m1}r_{O1})C_{GD1}$ 之积决定；
- $\omega_Y \approx 3.5\times10^8$ rad/s（≈ 56 MHz）：输出节点，基本上就是 $1/[r_{O2}(C_L + C_{GD2} + C_{GS3} + C_{GD3})] \approx 3.8\times10^8$ rad/s；
- $\omega_B \approx 1.1\times10^{10}$ rad/s（≈ 1.7 GHz）：$M_1$ 的漏极，被极点分裂推高。

由于 $T_0 \approx 1.2\times10^5$，不加补偿时环路不稳定（PM ≈ −32°）。

**常见错误。** 用 $1/g_{m2}$ 计算输出极点，仿佛 $M_2$ 是源极跟随器（source follower）。$M_2$ 是 PMOS 共源级（common-source stage），输出取自其漏极，因此 Y 处的电阻为 $r_{O2} = 5$ kΩ（理想的 $I_2$ 不贡献电导）。

**常见错误。** 用密勒电容（Miller capacitance）逐节点估算 $M_1$ 漏极处的极点（≈ $3\times10^8$ rad/s）。$C_{GD1}$ 把 B 耦合到高阻节点 A，因此在主极点以上 $M_1$ 实际上成为二极管连接（diode-connected），B 变成快节点（≈ $10^{10}$ rad/s）。

**常见错误。** 认为大的负载电容使输出成为主极点，从而使环路稳定。输入节点的电阻为 1 MΩ、密勒电容超过 1 pF，仍然是主极点；而且由于 $T_0 \approx 10^5$，交点远在输出极点之外。
