# 详细步骤 - R440

**思路。** 在差分半边电路中，第一级是增益为 $G_mR_{out}$ 的套筒式共源共栅（telescopic cascode）级，其中 $R_{out}$ 为向下看进 NMOS 共源共栅结构的电阻与向上看进 PMOS 共源共栅负载的电阻的并联；第二级是增益为 $g_{m9}(r_{O9}\parallel r_{O11})$ 的共源级（common-source stage）。体效应对共源共栅管 $M_3$ 和 $M_5$ 有影响，因此先由偏置条件求出它们源极的直流电压。

### 第 1 步 — 半边电路与偏置电流

$M_1$–$M_2$ 的源极公共节点 P 对差分信号而言是虚地（virtual ground），因此差分增益等于半边电路的增益：该半边电路由 $M_1$、$M_3$、$M_5$、$M_7$（输出为 X）以及其后以 $M_{11}$ 为负载的 $M_9$（输出为 $V_{out1}$）构成。每个器件都流过 0.5 mA：

$$I_{D1} = I_{D3} = I_{D5} = I_{D7} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}, \qquad I_{D9} = I_{D11} = 0.5\ \mathrm{mA}.$$

### 第 2 步 — 第一级的跨导（transconductance）与输出电阻（output resistance）

利用 $g_m = 2I_D/V_{ov}$ 和 $r_O = 1/(\lambda I_D)$：

**NMOS 管 $M_1$、$M_3$**（尺寸相同，电流相同，$V_{ov} = 0.67$ V）：

$$
\begin{aligned}
g_{m1} = g_{m3} &= \frac{2I_D}{V_{ov}} = \frac{2\,(0.5\ \mathrm{mA})}{0.67\ \mathrm{V}} = 1.49\ \mathrm{mS},\\
r_{O1} = r_{O3} &= \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega.
\end{aligned}
$$

**PMOS 管 $M_5$、$M_7$**（$|V_{ov}| = 0.53$ V）：

$$
\begin{aligned}
g_{m5} = g_{m7} &= \frac{2\,(0.5\ \mathrm{mA})}{0.53\ \mathrm{V}} = 1.89\ \mathrm{mS},\\
r_{O5} = r_{O7} &= \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega.
\end{aligned}
$$

（用 $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ 验证：$\sqrt{2(134\ \mu)(16.6)(0.5\ \mathrm{m})} = 1.49$ mS，$\sqrt{2(38.4\ \mu)(92.6)(0.5\ \mathrm{m})} = 1.89$ mS。）

### 第 3 步 — 共源共栅管的体跨导（body transconductance）

$g_{mb} = \eta g_m$，其中

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}}$$

（对 PMOS 取 $|V_{SB}|$）。

**$M_3$。** 尾电流源（tail current source）处于其最小电压 $V_P = 0.4$ V，$M_1$ 处于饱和区边缘（$V_{DS1} = V_{ov1}$），因此 $M_3$ 的源极位于

$$V_{S3} = V_P + V_{ov1} = 0.4\ \mathrm{V} + 0.67\ \mathrm{V} = 1.07\ \mathrm{V}.$$

衬底接地，因此 $V_{SB3} = 1.07$ V，并且

$$
\begin{aligned}
\eta_3 &= \frac{0.45\ \mathrm{V^{1/2}}}{2\sqrt{0.9\ \mathrm{V} + 1.07\ \mathrm{V}}} = \frac{0.45}{2\times1.404} = 0.160,\\
g_{mb3} &= 0.160\times1.49\ \mathrm{mS} = 0.239\ \mathrm{mS}.
\end{aligned}
$$

**$M_5$。** $M_7$ 处于饱和区边缘，因此 $V_{S5} = V_{DD} - |V_{ov7}| = 3 - 0.53 = 2.47$ V；衬底接 $V_{DD}$，因此 $|V_{SB5}| = 0.53$ V，并且

$$
\begin{aligned}
\eta_5 &= \frac{0.4\ \mathrm{V^{1/2}}}{2\sqrt{0.8\ \mathrm{V} + 0.53\ \mathrm{V}}} = \frac{0.4}{2\times1.153} = 0.173,\\
g_{mb5} &= 0.173\times1.89\ \mathrm{mS} = 0.327\ \mathrm{mS}.
\end{aligned}
$$

$M_1$（源极位于虚地 P，因此 $v_{bs1} = 0$）、$M_7$ 和 $M_9$（源极接 $V_{DD}$）以及 $M_{11}$（源极接地）都没有小信号体效应。

### 第 4 步 — 第一级半边电路的小信号模型（small-signal model）

把 $M_1$ 的漏极（$M_3$ 的源极）记为 A，把 $M_7$ 的漏极（$M_5$ 的源极）记为 B；除 $M_1$ 外所有管子的栅极、所有衬底、$V_{DD}$ 以及 P 都是交流地。$M_1$ 从 A 抽取电流 $g_{m1}v_{in}$，并与 $r_{O1}$ 并联。由于 $v_{gs3} = v_{bs3} = -v_A$，$M_3$ 从 X 向 A 流过电流 $(g_{m3} + g_{mb3})(-v_A)$，并与 $r_{O3}$ 并联。由于 $v_{sg5} = v_{sb5} = v_B$，$M_5$ 从 B 向 X 流过电流 $(g_{m5} + g_{mb5})v_B$，并与 $r_{O5}$ 并联。$M_7$ 只贡献一个从 B 接地的电阻 $r_{O7}$。

<!-- diagram: diagram-01.cir -->

### 第 5 步 — 向下看进 NMOS 共源共栅结构的电阻

令 $v_{in} = 0$，向 $M_3$ 的漏极注入测试电流 $i_X$，则 $v_A = i_Xr_{O1}$，流过 $M_3$ 的电流为

$$
\begin{aligned}
i_X &= (g_{m3} + g_{mb3})(-v_A) + \frac{v_X - v_A}{r_{O3}}\\
v_X &= i_X\left[(g_{m3} + g_{mb3})r_{O3}r_{O1} + r_{O1} + r_{O3}\right].
\end{aligned}
$$

因此

$$
\begin{aligned}
R_{down} &= (g_{m3} + g_{mb3})r_{O3}r_{O1} + r_{O1} + r_{O3}\\
&= (1.49 + 0.239)\ \mathrm{mS}\times(20\ \mathrm{k}\Omega)(20\ \mathrm{k}\Omega) + 40\ \mathrm{k}\Omega\\
&= 693\ \mathrm{k}\Omega + 40\ \mathrm{k}\Omega = 733\ \mathrm{k}\Omega ,
\end{aligned}
$$

即 $r_{O1}$ 被提高了大约本征增益（intrinsic gain）$(g_{m3} + g_{mb3})r_{O3} \approx 35$ 倍。

### 第 6 步 — 向上看进 PMOS 共源共栅负载的电阻

用同样的方法推导，此时 $M_5$ 以 $r_{O7}$ 作为源极负反馈（source degeneration）电阻：

$$
\begin{aligned}
R_{up} &= (g_{m5} + g_{mb5})r_{O5}r_{O7} + r_{O5} + r_{O7}\\
&= (1.89 + 0.327)\ \mathrm{mS}\times(10\ \mathrm{k}\Omega)(10\ \mathrm{k}\Omega) + 20\ \mathrm{k}\Omega\\
&= 221\ \mathrm{k}\Omega + 20\ \mathrm{k}\Omega = 241\ \mathrm{k}\Omega .
\end{aligned}
$$

PMOS 一侧的电阻只有 NMOS 一侧的三分之一左右，因为 PMOS 的 $\lambda$ 是 NMOS 的两倍（$r_O$ 减半），因此负载起主导作用：

$$R_{out} = R_{down}\parallel R_{up} = \frac{(733\ \mathrm{k}\Omega)(241\ \mathrm{k}\Omega)}{733\ \mathrm{k}\Omega + 241\ \mathrm{k}\Omega} = 182\ \mathrm{k}\Omega .$$

### 第 7 步 — 第一级增益

短路跨导基本上就是 $g_{m1}$，因为 $M_3$ 在 A 点呈现的电阻很低：

$$A_1 = G_mR_{out} \approx g_{m1}R_{out} = (1.49\ \mathrm{mS})(182\ \mathrm{k}\Omega) = 271 .$$

**精确值。** 将 X 短路到地，对节点 A 列 KCL 方程得

$$
\begin{aligned}
g_{m1}v_{in} + \frac{v_A}{r_{O1}} &= -\left(g_{m3} + g_{mb3} + \frac{1}{r_{O3}}\right)v_A\\
v_A &= -\frac{g_{m1}v_{in}}{g_{m3} + g_{mb3} + 1/r_{O3} + 1/r_{O1}} .
\end{aligned}
$$

短路输出电流（short-circuit output current）就是流过 $M_3$ 的电流 $i_{out} = -(g_{m3} + g_{mb3} + 1/r_{O3})v_A$，因此

$$G_m = g_{m1}\,\frac{g_{m3} + g_{mb3} + 1/r_{O3}}{g_{m3} + g_{mb3} + 1/r_{O3} + 1/r_{O1}} = g_{m1}\,\frac{1.782\ \mathrm{mS}}{1.832\ \mathrm{mS}} = 0.973\,g_{m1},$$

从而 $A_1 = 0.973\times271 = 264$。这一小部分损失来自经 $r_{O1}$ 泄漏、而没有进入共源共栅管的信号电流。

### 第 8 步 — 第二级增益

$M_9$ 的 $(W/L)_9 = 100/0.5 = 200$，流过 0.5 mA：

$$
\begin{aligned}
g_{m9} &= \sqrt{2\mu_pC_{ox}(W/L)_9I_{D9}} = \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(200)(0.5\ \mathrm{mA})} = \sqrt{7.68\times10^{-6}}\ \mathrm{S} = 2.77\ \mathrm{mS},\\
r_{O9} &= \frac{1}{\lambda_pI_{D9}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O11} &= \frac{1}{\lambda_nI_{D11}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O9}\parallel r_{O11} &= \frac{10\times20}{10+20}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega,\\
A_2 &= g_{m9}(r_{O9}\parallel r_{O11}) = (2.77\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 18.5 .
\end{aligned}
$$

$M_9$ 的栅极不吸取电流，因此第二级不会对 X 构成负载。

### 第 9 步 — 总增益

两级都反相，因此 $A_v = A_1A_2$ 为正：

- 取 $G_m \approx g_{m1}$：$A_v = 271\times18.5 \approx 5.0\times10^3$。
- 半边电路精确分析：$A_v = 264\times18.5 \approx 4.87\times10^3$，即 $20\log_{10}(4.87\times10^3) \approx 74$ dB。

**近似的影响。** 略去 $r_{O1} + r_{O3}$ 和 $r_{O5} + r_{O7}$ 两项，得到 $R_{down} = 693$ kΩ，$R_{up} = 221$ kΩ，$A_1 = 250$，$A_v \approx 4.6\times10^3$。忽略体效应，得到 $R_{down} = 637$ kΩ，$R_{up} = 209$ kΩ，$A_1 \approx 235$，$A_v \approx 4.3\times10^3$：体效应反而使增益**提高**了约 15 %，因为在共源共栅结构的电阻提升因子中，$g_{mb}$ 与 $g_m$ 相加。

### 结果

$$A_v = g_{m1}(R_{down}\parallel R_{up})\times g_{m9}(r_{O9}\parallel r_{O11}) \approx 4.9\times10^3\ (\approx 74\ \mathrm{dB}),$$

其中

$$R_{down} = (g_{m3} + g_{mb3})r_{O3}r_{O1} + r_{O1} + r_{O3} \approx 0.73\ \mathrm{M}\Omega, \qquad R_{up} = (g_{m5} + g_{mb5})r_{O5}r_{O7} + r_{O5} + r_{O7} \approx 0.24\ \mathrm{M}\Omega,$$

$A_1 \approx 264$–$271$，$A_2 \approx 18.5$。根据共源共栅近似方式的不同，增益为 $4.6$–$5.0\times10^3$（若忽略体效应，约为 $4.2$–$4.3\times10^3$）。

**常见错误。** 忽略共源共栅管，把第一级增益取为 $g_{m1}(r_{O1}\parallel r_{O7})$：$1.49\ \mathrm{mS}\times(20\ \mathrm{k}\Omega\parallel10\ \mathrm{k}\Omega) \approx 10$，约小了 27 倍。X 处的电阻是两个**共源共栅结构**的并联。

**常见错误。** 第二级只用 $r_{O9}$，而不用 $r_{O9}\parallel r_{O11}$。另外，若 $M_9$ 取 $W/L = 100$，则 $g_{m9} = 1.96$ mS，$A_2 \approx 13$。

**常见错误。** 漏掉共源共栅管的 $g_{mb}$（它们的源极与衬底之间分别有 1.07 V 和 0.53 V 的电压），或者给 $M_1$ 加上体效应，而它的源极是虚地 P（$v_{bs1} = 0$）。
