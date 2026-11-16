# 详细步骤 - R495

**思路。** 求出偏置点、小信号参数以及 $M_1$–$M_3$ 的栅源电容和栅漏电容。在 $M_3$ 的栅极处断开环路；开环电路有三个节点。输入节点处的主极点可由 $C_{GD1}$ 的密勒效应求得，但同一个电容也会使极点**分裂**，因此对另外两个极点逐节点估算是行不通的；它们需要由一个简化的高频模型求出，在该模型中输入节点相当于一个电容分压器（capacitive divider）。

### 第 1 步 — 偏置点

把输入节点（$M_1$ 的栅极、$M_3$ 的漏极）记为 A，$M_1$ 的漏极记为 B。当 $I_{in} = 0$ 时，$I_{D3} = 10\ \mu$A，$I_{D1} = 1$ mA，$|I_{D2}| = 1$ mA；所有源极都接在电源轨上，因此没有体效应。由 $V_{GS} = V_{TH} + \sqrt{2I_D/(\mu C_{ox}W/L)}$：

$$
\begin{aligned}
V_Y &= V_{GS3} = 0.7 + \sqrt{\frac{2(10\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(10)}} = 0.7 + 0.122 = 0.822\ \mathrm{V},\\
V_A &= V_{GS1} = 0.7 + \sqrt{\frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(100)}} = 0.7 + 0.386 = 1.086\ \mathrm{V},\\
V_B &= V_{DD} - |V_{GS2}| = 3 - \left(0.8 + \sqrt{\frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}}\right) = 3 - 1.522 = 1.478\ \mathrm{V}.
\end{aligned}
$$

所有器件均饱和：$V_{DS3} = 1.086\ \mathrm{V} > 0.122$ V，$V_{DS1} = 1.478\ \mathrm{V} > 0.386$ V，$|V_{DS2}| = 3 - 0.822 = 2.18\ \mathrm{V} > 0.722$ V。

### 第 2 步 — 小信号参数与环路增益

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu)(100)(1\ \mathrm{m})} = 5.18\ \mathrm{mS}, & r_{O1} &= \frac{1}{(0.1)(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
g_{m2} &= \sqrt{2(38.4\ \mu)(100)(1\ \mathrm{m})} = 2.77\ \mathrm{mS}, & r_{O2} &= \frac{1}{(0.2)(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\\
g_{m3} &= \sqrt{2(134\ \mu)(10)(10\ \mu)} = 0.164\ \mathrm{mS}, & r_{O3} &= \frac{1}{(0.1)(10\ \mu\mathrm{A})} = 1\ \mathrm{M}\Omega .
\end{aligned}
$$

理想电流源 $I_1$–$I_3$ 和 $I_{in}$ 的电阻为无穷大，因此 $R_A = r_{O3}$，$R_B = r_{O1}$，$R_Y = r_{O2}$。

**环路增益。** 在 $M_3$ 的栅极加测试电压 $V_t$，得 $V_A = -g_{m3}r_{O3}V_t$，$V_B = -g_{m1}r_{O1}V_A$，$V_Y = -g_{m2}r_{O2}V_B$。三次反相使反馈为负反馈，且

$$T_0 = (g_{m3}r_{O3})(g_{m1}r_{O1})(g_{m2}r_{O2}) = 163.7\times51.8\times13.9 = 1.17\times10^5\quad(101\ \mathrm{dB}).$$

### 第 3 步 — 器件电容

在饱和区中 $C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$，$C_{GD} = WC_{ov}$（$C_{ox} = 3.84\ \mathrm{fF/\mu m^2}$，$L = 0.5\ \mu$m）：

$$
\begin{aligned}
C_{GS1} &= \tfrac23(50)(0.5)(3.84) + 50(0.4) = 64 + 20 = 84\ \mathrm{fF}, & C_{GD1} &= 20\ \mathrm{fF},\\
C_{GS2} &= 64 + 50(0.3) = 79\ \mathrm{fF}, & C_{GD2} &= 15\ \mathrm{fF},\\
C_{GS3} &= \tfrac23(5)(0.5)(3.84) + 5(0.4) = 6.4 + 2 = 8.4\ \mathrm{fF}, & C_{GD3} &= 2\ \mathrm{fF}.
\end{aligned}
$$

### 第 4 步 — 断开后的环路

为了保持闭环时的负载，在 Y 上接一个 $M_3$ 栅极电容的复制品 $C_{GS3} + C_{GD3} = 10.4$ fF。于是节点 A 对地接有 $r_{O3}$、$C_{GS1}$ 和 $C_{GD3}$（接到测试源，即交流地），$C_{A0} = 84 + 2 = 86$ fF，并由 $C_{GD1}$ 跨接在 A 与 B 之间；B 经 $r_{O1}$ 和 $C_{GS2}$ 接交流地，并经 $C_{GD2}$ 接到 Y；Y 经 $r_{O2}$ 和复制电容 $C_{Y0} = 10.4$ fF 接地。

<!-- diagram: diagram-01.cir -->

### 第 5 步 — 输入节点 A 处的主极点

A 的电阻（1 MΩ）远大于其他节点，而 $C_{GD1}$ 跨接在反相增益 $-g_{m1}r_{O1} = -51.8$ 的两端，因此它在 A 处表现为乘以 $(1 + g_{m1}r_{O1})$ 的电容：

$$
\begin{aligned}
C_A &= C_{GS1} + C_{GD3} + (1 + g_{m1}r_{O1})C_{GD1} = 84 + 2 + 52.8\times20 = 1142\ \mathrm{fF},\\
\omega_A &= \frac{1}{r_{O3}C_A} = \frac{1}{(1\ \mathrm{M}\Omega)(1.142\ \mathrm{pF})} = 8.8\times10^5\ \mathrm{rad/s}\quad(\approx 140\ \mathrm{kHz}).
\end{aligned}
$$

这里的密勒近似是准确的，因为在 $\omega_A$ 处其他所有节点的行为仍与低频时相同。

### 第 6 步 — 为什么逐节点估算在 B 处失效，以及简化的高频模型

在 B 处逐节点估算时，要用 $C_B \approx C_{GD1} + C_{GS2} + (1 + g_{m2}r_{O2})C_{GD2} = 20 + 79 + 223 = 322$ fF 和 $R_B = 10$ kΩ，得到 $3\times10^8$ rad/s。这忽略了**极点分裂**：在 $\omega_A$ 以上，节点 A 经电容分压器 $C_{GD1}$–$C_{A0}$ 跟随 B 变化，因此 $M_1$ 像一个部分二极管连接（diode-connected）的器件那样感知自身的漏极电压，B 于是成为一个**低**阻节点。

**简化。** 当 $\omega \gg \omega_A$ 时，$1/r_{O3} \ll \omega(C_{A0} + C_{GD1})$，A 处的基尔霍夫电流定律（KCL）方程简化为

$$sC_{A0}V_A + sC_{GD1}(V_A - V_B) = 0 \quad\Longrightarrow\quad V_A = \frac{C_{GD1}}{C_{GD1} + C_{A0}}V_B = \frac{20}{106}V_B = 0.189\,V_B .$$

于是在 B 处的 KCL 中，$M_1$ 的电流 $g_{m1}V_A$ 变成一个电导，两个串联电容则增加了一个电容：

$$
\begin{aligned}
G_B' &= \frac{1}{r_{O1}} + g_{m1}\frac{C_{GD1}}{C_{GD1} + C_{A0}} = 0.1\ \mathrm{mS} + (5.18\ \mathrm{mS})(0.189) = 1.08\ \mathrm{mS}\quad(R_B' = 929\ \Omega),\\
C_B' &= C_{GS2} + \frac{C_{GD1}C_{A0}}{C_{GD1} + C_{A0}} = 79 + \frac{20\times86}{106} = 95.2\ \mathrm{fF}.
\end{aligned}
$$

这样高频电路就成为一个两节点系统：B（$R_B'$、$C_B'$）和 Y（$r_{O2}$、$C_{Y0}$），二者由 $C_{GD2}$ 和 $g_{m2}$ 耦合，其结构与密勒补偿（Miller compensation）的两级放大器相同。

<!-- diagram: diagram-02.cir -->

### 第 7 步 — 两个次极点

对于两个节点，若电阻为 $R_1$、$R_2$，对地电容为 $C_1$、$C_2$，跨接电容为 $C_F$，从节点 1 到节点 2 的跨导（transconductance）为 $g_m$，则特征多项式为 $1 + as + bs^2$，其中

$$a = R_1(1 + g_mR_2)C_F + R_1C_1 + R_2(C_F + C_2), \qquad b = R_1R_2(C_1C_F + C_1C_2 + C_FC_2).$$

这里 $R_1 = R_B' = 929\ \Omega$，$C_1 = C_B' = 95.2$ fF，$R_2 = r_{O2} = 5$ kΩ，$C_2 = C_{Y0} = 10.4$ fF，$C_F = C_{GD2} = 15$ fF，$g_m = g_{m2}$（$1 + g_{m2}r_{O2} = 14.86$）：

$$
\begin{aligned}
a &= (929)(14.86)(15\ \mathrm{f}) + (929)(95.2\ \mathrm{f}) + (5000)(25.4\ \mathrm{f}) = 207 + 88 + 127 = 422\ \mathrm{ps},\\
b &= (929)(5000)\left[(95.2)(15) + (95.2)(10.4) + (15)(10.4)\right]\times10^{-30}\ \mathrm{s^2} = 1.196\times10^{-20}\ \mathrm{s^2}.
\end{aligned}
$$

$1 + as + bs^2$ 的根（$s = -\omega$）：

$$\omega = \frac{a \mp \sqrt{a^2 - 4b}}{2b} = \frac{4.224\times10^{-10} \mp 3.614\times10^{-10}}{2.391\times10^{-20}}\ \mathrm{rad/s},$$

$$\omega_B = 2.6\times10^9\ \mathrm{rad/s}\ (\approx 0.41\ \mathrm{GHz}), \qquad \omega_Y = 3.3\times10^{10}\ \mathrm{rad/s}\ (\approx 5.2\ \mathrm{GHz}).$$

完整的三节点分析（节点方程的行列式）给出 $8.74\times10^5$、$2.56\times10^9$ 和 $3.28\times10^{10}$ rad/s，证实了这些结果。若 Y 处没有复制负载（$C_{Y0} = 0$），同样的步骤给出 $2.9\times10^9$ 和 $5.3\times10^{10}$ rad/s。

### 第 8 步 — 对稳定性的影响

环路的增益带宽积（gain-bandwidth product）$T_0\,\omega_A \approx 1.17\times10^5\times8.8\times10^5 \approx 10^{11}$ rad/s 远高于两个次极点，因此环路增益要在相移超过 180° 之后才降到单位增益（在 $1.5\times10^{10}$ rad/s 附近）：PM ≈ −35°。未补偿的电路不稳定，需要进行频率补偿（frequency compensation）。

### 结果

开环传递函数的极点（在 $M_3$ 的栅极处断开环路，Y 处接复制负载）：

- $\omega_A \approx 1/\{r_{O3}[C_{GS1} + C_{GD3} + (1 + g_{m1}r_{O1})C_{GD1}]\} \approx 8.7\times10^5$ rad/s（≈ 140 kHz），位于输入节点，为主极点；
- $\omega_B \approx 2.6\times10^9$ rad/s（≈ 0.4 GHz），位于 $M_1$ 的漏极（被极点分裂推高）；
- $\omega_Y \approx 3.3\times10^{10}$ rad/s（≈ 5 GHz），位于输出节点。

（无复制负载时：$8.7\times10^5$、$2.9\times10^9$ 和 $5.3\times10^{10}$ rad/s。）由于 $T_0 \approx 1.2\times10^5$，未补偿的环路不稳定（PM ≈ −35°）。

**常见错误。** 把 $M_2$ 当作源极跟随器（source follower）。它的源极接 $V_{DD}$，输出取自漏极：它是增益为 $-g_{m2}r_{O2}$ 的 PMOS 共源级，三个反相级使反馈成为负反馈。

**常见错误。** 把输入节点的电阻取为 $1/g_{m3}$ 或闭环输入电阻。环路断开后，$M_3$ 是一个电流源（current source），其漏极呈现 $r_{O3} = 1$ MΩ，正是这一点使 A 成为主极点。

**常见错误。** 用密勒电容（Miller capacitance）逐节点估算次极点，得到约 $3\times10^8$ 和 $8\times10^9$ rad/s。$C_{GD1}$ 跨接在一个阻抗非常高的节点上，使极点分裂：在高频时 B 成为低阻节点，其极点约高十倍。
