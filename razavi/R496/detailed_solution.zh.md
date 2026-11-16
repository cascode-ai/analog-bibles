# 详细步骤 - R496

**思路。** 接在 $M_1$ 栅极与漏极之间的 $C_C$ 与 $C_{GD1}$ 相加，并被 $M_1$ 的增益密勒倍增（Miller multiplication）：它降低了输入节点（电阻为 $r_{O3}$）的极点，并通过极点分裂把 $M_1$ 漏极处的极点推到很高的频率，因此第一个次极点位于输出节点 Y。按 60° 的两极点规则确定 $C_C$（暂不考虑右半平面零点），计算补偿后的极点，再考察 $C_C$ 引入的零点。

### 第 1 步 — 小信号参数与未补偿的环路

把输入节点（$M_1$ 的栅极）记为 A，$M_1$ 的漏极记为 B。偏置：所有源极都接在电源轨上，因此没有体效应（body effect）；$I_{D3} = 10\ \mu$A，$I_{D1} = |I_{D2}| = 1$ mA；$V_Y = V_{GS3} = 0.82$ V，$V_A = V_{GS1} = 1.09$ V，$V_B = V_{DD} - |V_{GS2}| = 1.48$ V；所有器件均工作在饱和区（saturation region）。

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu)(100)(1\ \mathrm{m})} = 5.18\ \mathrm{mS}, & r_{O1} &= 10\ \mathrm{k}\Omega, & g_{m1}r_{O1} &= 51.8,\\
g_{m2} &= \sqrt{2(38.4\ \mu)(100)(1\ \mathrm{m})} = 2.77\ \mathrm{mS}, & r_{O2} &= 5\ \mathrm{k}\Omega, & g_{m2}r_{O2} &= 13.9,\\
g_{m3} &= \sqrt{2(134\ \mu)(10)(10\ \mu)} = 0.164\ \mathrm{mS}, & r_{O3} &= 1\ \mathrm{M}\Omega, & g_{m3}r_{O3} &= 163.7 .
\end{aligned}
$$

环路增益（loop gain）如下；环路在 $M_3$ 的栅极处断开，三个反相级构成负反馈：

$$T_0 = (g_{m3}r_{O3})(g_{m1}r_{O1})(g_{m2}r_{O2}) = 163.7\times51.8\times13.9 = 1.17\times10^5 .$$

电容（$C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$，$C_{GD} = WC_{ov}$）：$C_{GS1} = 84$ fF，$C_{GD1} = 20$ fF，$C_{GS2} = 79$ fF，$C_{GD2} = 15$ fF，$C_{GS3} = 8.4$ fF，$C_{GD3} = 2$ fF。环路断开后，A 的对地电容为 $C_{A0} = C_{GS1} + C_{GD3} = 86$ fF，Y 上接有复制负载 $C_{Y0} = C_{GS3} + C_{GD3} = 10.4$ fF。

未补偿时，极点约为 $8.7\times10^5$、$2.6\times10^9$ 和 $3.3\times10^{10}$ rad/s。增益带宽积（gain-bandwidth product）$T_0\times8.7\times10^5 \approx 10^{11}$ rad/s 远高于次极点，因此环路不稳定（PM ≈ −35°）。

### 第 2 步 — 加入 $C_C$：主极点与增益带宽积

$C_C$ 与 $C_{GD1}$ 并联；记 $C_1 = C_C + C_{GD1}$。

<!-- diagram: diagram-01.cir -->

**主极点。** $C_1$ 跨接在反相增益 $-g_{m1}r_{O1}$ 的两端，因此它在电阻为 $r_{O3}$ 的节点 A 处表现为乘以 $(1 + g_{m1}r_{O1})$ 的电容：

$$\omega_{p1} \approx \frac{1}{r_{O3}\left[C_{A0} + (1 + g_{m1}r_{O1})C_1\right]} \approx \frac{1}{r_{O3}\,(1 + g_{m1}r_{O1})\,C_1} .$$

**增益带宽积**（取 $1 + g_{m1}r_{O1} \approx g_{m1}r_{O1}$）：

$$\mathrm{GBW} = T_0\,\omega_{p1} \approx \frac{g_{m3}r_{O3}\cdot g_{m1}r_{O1}\cdot g_{m2}r_{O2}}{r_{O3}\,g_{m1}r_{O1}\,C_1} = \frac{g_{m3}\,g_{m2}r_{O2}}{C_C + C_{GD1}} = \frac{2.27\ \mathrm{mS}}{C_C + C_{GD1}} .$$

这就是密勒补偿放大器中的“$G_m/C_C$”，其中 $M_3$ 作为输入跨导器，再乘以密勒电容（Miller capacitance）之后那一级的增益 $g_{m2}r_{O2}$。

### 第 3 步 — 补偿后的次极点（极点分裂）

在 $\omega_{p1}$ 以上，$r_{O3}$ 对 A 已不起作用，A 经电容分压器（capacitive divider）$C_1$–$C_{A0}$ 跟随 B：

$$V_A = \frac{C_1}{C_1 + C_{A0}}\,V_B .$$

因此 $M_1$ 的电流 $g_{m1}V_A$ 在 B 处相当于一个电导，而 $C_1$ 与 $C_{A0}$ 的串联相当于一个电容：

$$G_B' = \frac{1}{r_{O1}} + g_{m1}\frac{C_1}{C_1 + C_{A0}}, \qquad C_B' = C_{GS2} + \frac{C_1C_{A0}}{C_1 + C_{A0}} .$$

当 $C_1 \gg C_{A0}$ 时，$G_B' \to g_{m1}$：$M_1$ 经 $C_C$ 实际上成为**二极管连接**（diode-connected），B 成为低阻节点。剩下的是一个两节点系统：B（$1/G_B'$、$C_B'$）和 Y（$r_{O2}$、$C_{Y0}$），二者由 $C_{GD2}$ 和 $g_{m2}$ 耦合。

<!-- diagram: diagram-02.cir -->

其极点是 $1 + as + bs^2$ 的根，其中

$$a = R_B'(1 + g_{m2}r_{O2})C_{GD2} + R_B'C_B' + r_{O2}(C_{GD2} + C_{Y0}), \qquad b = R_B'r_{O2}\left(C_B'C_{GD2} + C_B'C_{Y0} + C_{GD2}C_{Y0}\right),$$

式中 $R_B' = 1/G_B'$。这些极点与 $C_C$ 的关系很弱，但它们决定了允许的 GBW，因此下面进行简短的迭代。

### 第 4 步 — 为 PM = 60° 选取 $C_C$

设第一个次极点为 $\omega_{p2}$（暂不考虑 RHP 零点），60° 要求 $\omega_u = \omega_{p2}\tan30°$；计入 $\omega_{p2}$ 引起的幅值滚降后，$\mathrm{GBW} = \omega_u\sqrt{1 + 1/3} = \tfrac23\,\omega_{p2}$。因此

$$C_C + C_{GD1} = \frac{2.27\ \mathrm{mS}}{\tfrac23\,\omega_{p2}} .$$

**第 1 次迭代。** 从输出极点的逐节点估算 $\omega_{p2} \approx 1/[r_{O2}(C_{GD2} + C_{Y0})] = 1/[(5\ \mathrm{k}\Omega)(25.4\ \mathrm{fF})] = 7.9\times10^9$ rad/s 出发：

$$C_C + C_{GD1} = \frac{2.27\ \mathrm{mS}}{5.25\times10^9\ \mathrm{rad/s}} = 0.43\ \mathrm{pF}.$$

**第 2 次迭代。** 取 $C_1 = 0.43$ pF：$G_B' = 0.1 + 5.18\times0.833 = 4.41$ mS（$R_B' = 227\ \Omega$），$C_B' = 79 + 71.7 = 150.7$ fF。于是 $a = 50.5 + 34.2 + 127 = 211.6$ ps，$b = 4.51\times10^{-21}\ \mathrm{s^2}$，其根为 $5.33\times10^9$ 和 $4.16\times10^{10}$ rad/s。取 $\omega_{p2} = 5.33\times10^9$ rad/s：

$$C_C + C_{GD1} = \frac{2.27\ \mathrm{mS}}{3.55\times10^9\ \mathrm{rad/s}} = 0.64\ \mathrm{pF}.$$

**第 3 次迭代。** 取 $C_1 = 0.62$ pF：$G_B' = 0.1 + 5.18\times0.878 = 4.65$ mS（$R_B' = 215\ \Omega$），$C_B' = 79 + 75.5 = 154.5$ fF；$a = 48.0 + 33.3 + 127 = 208.2$ ps，$b = 4.39\times10^{-21}\ \mathrm{s^2}$；根为 $5.42\times10^9$ 和 $4.20\times10^{10}$ rad/s。于是

$$C_C + C_{GD1} = \frac{2.27\ \mathrm{mS}}{3.61\times10^9\ \mathrm{rad/s}} = 0.63\ \mathrm{pF} \quad\Longrightarrow\quad C_C \approx 0.63 - 0.02 \approx 0.6\ \mathrm{pF},$$

迭代已收敛。

### 第 5 步 — 补偿后的极点（及零点），$C_C = 0.6$ pF

$$
\begin{aligned}
\omega_{p1} &\approx \frac{1}{r_{O3}(1 + g_{m1}r_{O1})(C_C + C_{GD1})} = \frac{1}{(1\ \mathrm{M}\Omega)(52.8)(0.62\ \mathrm{pF})} = 3.1\times10^4\ \mathrm{rad/s}\ (\approx 4.9\ \mathrm{kHz}),\\
\omega_{p2} &\approx 5.4\times10^9\ \mathrm{rad/s}\ (\approx 0.86\ \mathrm{GHz}),\ \text{mainly the output node Y},\\
\omega_{p3} &\approx 4.2\times10^{10}\ \mathrm{rad/s}\ (\approx 6.7\ \mathrm{GHz}),\ \text{the drain of } M_1 \text{ (node B)}.
\end{aligned}
$$

（完整的三节点分析给出 $3.05\times10^4$、$5.42\times10^9$ 和 $4.20\times10^{10}$ rad/s。）主极点从 $8.7\times10^5$ rad/s 下移了约 29 倍，而 B 处的极点从 $2.6\times10^9$ **上移**到 $4.2\times10^{10}$ rad/s：这就是极点分裂。

**零点。** 从 A 经 $C_C + C_{GD1}$ 流向 B 的前馈（feedforward）电流在下述频率处抵消 $M_1$ 的电流 $g_{m1}V_A$：

$$\omega_z = +\frac{g_{m1}}{C_C + C_{GD1}} = \frac{5.18\ \mathrm{mS}}{0.62\ \mathrm{pF}} = 8.3\times10^9\ \mathrm{rad/s},$$

这是一个**右半平面**零点。

### 第 6 步 — 右半平面零点的影响

RHP 零点带来相位**滞后**。在交点处

$$\frac{\omega_u}{\omega_z} \approx \frac{\mathrm{GBW}}{\omega_z} = \frac{g_{m3}g_{m2}r_{O2}/(C_C + C_{GD1})}{g_{m1}/(C_C + C_{GD1})} = \frac{g_{m3}g_{m2}r_{O2}}{g_{m1}} = \frac{2.27}{5.18} = 0.44,$$

它与 $C_C$ 无关，即额外的相位滞后约为 $\tan^{-1}0.44 \approx 24°$。由完整的环路增益可得：

- 若只用单个电容 $C_C = 0.6$ pF，实际相位裕度只有约 30°；
- 若用单个电容达到 60°，需要 $C_C \approx 6.7$ pF（交点被压得很低，使 Y 处的极点几乎不消耗相位），但带宽损失很大；
- 实际的解决办法是在 $C_C$ 上串联一个电阻来移动零点（取 $R_z = 1/g_{m1} \approx 190\ \Omega$ 可把零点移到无穷远处，也可以把它移入左半平面）。在取 $R_z = 1/g_{m1}$ 的完整三节点模型中，$C_C \approx 0.85$ pF 时达到 60°；若忽略所有零点，则约为 0.72 pF。因此两极点模型给出的 0.6 pF 数量级正确，只是略为乐观。

### 结果

$$C_C \approx 0.6\ \mathrm{pF}\quad\left(\mathrm{GBW} = \frac{g_{m3}g_{m2}r_{O2}}{C_C + C_{GD1}} = \tfrac23\,\omega_{p2}\right),$$

此处忽略了右半平面零点（它将由串联电阻消除）。补偿后的极点：

- $\omega_{p1} \approx 3\times10^4$ rad/s（≈ 5 kHz），位于输入节点 A（主极点，$C_C$ 经密勒倍增）；
- $\omega_{p2} \approx 5.4\times10^9$ rad/s（≈ 0.86 GHz），位于输出节点 Y；
- $\omega_{p3} \approx 4.2\times10^{10}$ rad/s（≈ 6.7 GHz），位于 $M_1$ 的漏极（被极点分裂推高）；
- RHP 零点位于 $g_{m1}/(C_C + C_{GD1}) \approx 8.3\times10^9$ rad/s。

若只用单个电容，该零点约消耗 24°，因此仅用 0.6 pF 时 PM ≈ 30°；用单个电容要达到 60° 需要约 6.7 pF。

**常见错误。** 取 $\mathrm{GBW} = g_{m3}/C_C$ 或 $g_{m1}/C_C$。密勒电容之后的那一级（$M_2$，增益 $g_{m2}r_{O2} \approx 14$）也在环路之内，因此 $\mathrm{GBW} = g_{m3}g_{m2}r_{O2}/(C_C + C_{GD1})$。

**常见错误。** 把补偿后的主极点放在节点 B 或 Y，或者仍把 B 当作第一个次极点。$C_C$ 跨接在 $M_1$ 上时，主极点位于 A（由 $r_{O3}$ 与经密勒倍增的 $C_C$ 之积决定），而 B 成为低阻的高频节点，因此第一个次极点位于 Y。

**常见错误。** 以电路“已有主极点”为由认为无需补偿。未补偿时环路增益约为 $10^5$，因此交点远高于次极点，环路不稳定（PM ≈ −35°）。
