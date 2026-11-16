# 详细步骤 - R497

**思路。** 跨接在 $M_1$ 上的补偿电容会在流过它的前馈（feedforward）电流等于 $M_1$ 自身电流之处产生一个零点。串联电阻 $R_z$ 把这个零点移到 $1/[C_C(1/g_{m1} - R_z)]$；当 $R_z > 1/g_{m1}$ 时，零点进入左半平面。求出补偿后环路的第一个次极点（位于输出节点 Y），并选取 $R_z$ 使零点恰好落在它上面。

### 第 1 步 — 小信号参数

偏置：$I_{D1} = |I_{D2}| = 1$ mA，$I_{D3} = 10\ \mu$A，所有器件均工作在饱和区（saturation region）；源极都接在电源轨上，因此没有体效应（body effect）。

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 5.18\ \mathrm{mS}, \qquad \frac{1}{g_{m1}} = 193\ \Omega, \qquad r_{O1} = 10\ \mathrm{k}\Omega,\\
g_{m2} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 2.77\ \mathrm{mS}, \qquad r_{O2} = \frac{1}{(0.2)(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\\
g_{m3} &= 0.164\ \mathrm{mS}, \qquad r_{O3} = \frac{1}{(0.1)(10\ \mu\mathrm{A})} = 1\ \mathrm{M}\Omega .
\end{aligned}
$$

电容（$C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$，$C_{GD} = WC_{ov}$）：$C_{GS1} = 84$ fF，$C_{GD1} = 20$ fF，$C_{GS2} = 79$ fF，$C_{GD2} = 15$ fF，$C_{GS3} = 8.4$ fF，$C_{GD3} = 2$ fF。

在 $M_3$ 的栅极处断开环路后，各节点为：A（$M_1$ 的栅极；对地接有 $r_{O3}$ 和 $C_{A0} = C_{GS1} + C_{GD3} = 86$ fF），B（$M_1$ 的漏极；$r_{O1}$、$C_{GS2}$）和 Y（输出；$r_{O2}$ 以及复制负载 $C_{Y0} = C_{GS3} + C_{GD3} = 10.4$ fF）。$R_z$–$C_C$ 支路连接 A 与 B，与 $C_{GD1}$ 并联。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 补偿后 $M_1$ 这一级的零点

在零点处 $V_B = 0$ 而 $V_A \ne 0$，因此 $r_{O1}$、$C_{GS2}$ 和 $C_{GD2}$ 中没有来自 B 的电流，B 处的基尔霍夫电流定律（KCL）方程只涉及来自 A 的电流和 $M_1$ 的电流：

$$\frac{V_A}{R_z + 1/(sC_C)} + sC_{GD1}V_A = g_{m1}V_A .$$

与 $C_C = 0.6$ pF 相比，$C_{GD1} = 20$ fF 很小，可以略去（在第 4 步中验证）：

$$
\begin{aligned}
R_z + \frac{1}{s_zC_C} &= \frac{1}{g_{m1}}\\
s_z &= \frac{1}{C_C\left(g_{m1}^{-1} - R_z\right)} .
\end{aligned}
$$

当 $R_z = 0$ 时，这是右半平面（RHP）零点 $+g_{m1}/C_C$；当 $R_z = 1/g_{m1}$ 时，零点移到无穷远处；当 $R_z > 1/g_{m1}$ 时，它是位于 $\omega_z = 1/[C_C(R_z - g_{m1}^{-1})]$ 的左半平面（LHP）零点，带来相位**超前**，可以抵消一个极点。

### 第 3 步 — 第一个次极点

$M_1$ 上跨接 $C_1 = C_C + C_{GD1} = 0.62$ pF 时，主极点（dominant pole）位于 A：$\omega_{p1} \approx 1/[r_{O3}(1 + g_{m1}r_{O1})C_1] = 1/[(1\ \mathrm{M}\Omega)(52.8)(0.62\ \mathrm{pF})] = 3.1\times10^4$ rad/s。

在 $\omega_{p1}$ 以上，A 经电容分压器（capacitive divider）$C_1$–$C_{A0}$ 跟随 B，$V_A = V_B\,C_1/(C_1 + C_{A0})$，因此 $M_1$ 在 B 处几乎相当于一个二极管，这就是极点分裂（pole splitting）；B 可以用下式描述：

$$
\begin{aligned}
G_B' &= \frac{1}{r_{O1}} + g_{m1}\frac{C_1}{C_1 + C_{A0}} = 0.1\ \mathrm{mS} + (5.18\ \mathrm{mS})\frac{620}{706} = 4.65\ \mathrm{mS}\quad(R_B' = 215\ \Omega),\\
C_B' &= C_{GS2} + \frac{C_1C_{A0}}{C_1 + C_{A0}} = 79 + \frac{620\times86}{706} = 154.5\ \mathrm{fF}.
\end{aligned}
$$

剩下的两个极点属于由 $C_{GD2}$ 和 $g_{m2}$ 耦合的 B–Y 节点对，它们是 $1 + as + bs^2$ 的根，其中

$$
\begin{aligned}
a &= R_B'(1 + g_{m2}r_{O2})C_{GD2} + R_B'C_B' + r_{O2}(C_{GD2} + C_{Y0}) = 48.0 + 33.3 + 127 = 208.2\ \mathrm{ps},\\
b &= R_B'r_{O2}\left(C_B'C_{GD2} + C_B'C_{Y0} + C_{GD2}C_{Y0}\right) = 4.39\times10^{-21}\ \mathrm{s^2},
\end{aligned}
$$

$$\omega = \frac{a \mp \sqrt{a^2 - 4b}}{2b} \quad\Longrightarrow\quad \omega_{p2} = 5.4\times10^9\ \mathrm{rad/s},\qquad \omega_{p3} = 4.2\times10^{10}\ \mathrm{rad/s}.$$

较低的 $\omega_{p2}$ 是**第一个次极点**，主要位于输出节点 Y；被极点分裂变为低阻的 B 对应于 $\omega_{p3}$。（Y 极点的逐节点估算 $1/[r_{O2}(C_{GD2} + C_{GS3} + C_{GD3})] = 1/(5\ \mathrm{k}\Omega\times25.4\ \mathrm{fF}) = 7.9\times10^9$ rad/s 较为粗略，因为它忽略了 $C_{GD2}$ 的密勒负载效应。）

### 第 4 步 — 把 LHP 零点放到 $\omega_{p2}$ 上

令 $\omega_z = \omega_{p2}$：

$$
\begin{aligned}
\frac{1}{C_C\left(R_z - g_{m1}^{-1}\right)} &= \omega_{p2}\\
R_z &= \frac{1}{g_{m1}} + \frac{1}{\omega_{p2}C_C} ,
\end{aligned}
$$

$$
\begin{aligned}
\frac{1}{\omega_{p2}C_C} &= \frac{1}{(5.4\times10^9\ \mathrm{rad/s})(0.6\ \mathrm{pF})} = \frac{1}{3.25\times10^{-3}\ \mathrm{S}} = 307\ \Omega,\\
R_z &= 193\ \Omega + 307\ \Omega = 500\ \Omega .
\end{aligned}
$$

若改用逐节点估算的 $\omega_{p2} = 7.9\times10^9$ rad/s，则 $R_z = 193 + 212 = 404\ \Omega$。

**$C_{GD1}$ 的影响。** 若在第 2 步中保留 $sC_{GD1}$ 项，则 $1/g_{m1}$ 变为 $1/(g_{m1} + \omega_{p2}C_{GD1}) = 1/(5.29\ \mathrm{mS}) = 189\ \Omega$，只改变了 4 Ω。

### 第 5 步 — 用完整模型验证

加入 $R_z$ 会稍微改变极点分裂网络：取 $R_z = 500\ \Omega$ 时，完整的节点分析给出第一个次极点位于 $5.8\times10^9$ rad/s，LHP 零点位于 $5.4\times10^9$ rad/s，二者几乎抵消（$R_z \approx 476\ \Omega$ 时恰好重合）。于是在剩余的高频极点之前，环路几乎表现为单极点系统，相位裕度（phase margin）从约 30°（仅用 0.6 pF 电容）提高到约 77°。

### 结果

$$R_z = \frac{1}{g_{m1}} + \frac{1}{\omega_{p2}C_C} = 193\ \Omega + \frac{1}{(5.4\times10^9\ \mathrm{rad/s})(0.6\ \mathrm{pF})} \approx 193 + 307 \approx 0.5\ \mathrm{k}\Omega,$$

其中 $\omega_{p2} \approx 5.4\times10^9$ rad/s 是用 0.6 pF 补偿后环路的第一个次极点（输出节点 Y）。（用逐节点估算的 $\omega_{p2} \approx 7.9\times10^9$ rad/s 得到 ≈ 0.4 kΩ。）采用这个电阻后，相位裕度约为 77°。

**常见错误。** 取 $R_z = 1/g_{m1} \approx 193\ \Omega$。这只是把零点移到无穷远处，并没有抵消任何极点；还需要额外的 $1/(\omega_{p2}C_C)$，才能把零点拉回 LHP，落在 $\omega_{p2}$ 上。

**常见错误。** 照搬两级运放（two-stage op amp）的公式 $R_z = (1 + C_L/C_C)/g_m$，并代入一个不相干的电容。该公式假设次极点是跨接 $C_C$ 的那一级的 $g_m/C_L$；而这里第一个次极点位于节点 Y，必须针对本电路求出。

**常见错误。** 取 $R_z < 1/g_{m1}$，使零点留在 RHP；或者把零点放在主极点上，这会抵消补偿的作用，而不是抵消次极点。
