# 详细步骤 - R490

**思路。** 在每个第二级两端跨接补偿电容 $C_C$（X 到 $V_{out1}$，Y 到 $V_{out2}$）。用基尔霍夫电流定律（KCL）推导半边电路的传递函数，并利用极点分裂近似：主极点 $\approx 1/(g_{m5}R_LR_XC_C)$，增益带宽积（gain-bandwidth product）$\approx g_{m1}/C_C$，第二个极点 $\approx g_{m5}/C_L$，右半平面零点为 $g_{m5}/C_C$。再按两极点设计规则选取 $C_C$，使相位裕度为 60°。然后计算实际的极点和零点位置，并检查零点的影响。

### 第 1 步 — 半边电路与小信号参数

由对称性，对差分信号而言尾节点是交流地，因此只需分析一个半边电路：以 $M_3$ 为负载、驱动 X 的共源级（common-source stage）$M_1$，后接以 $M_7$ 为负载、驱动 $V_{out1}$ 和 $C_L = 1$ pF 的 PMOS 共源级 $M_5$。在全差分单位增益环路（$\beta = 1$）中，环路增益就是该半边电路的增益。

**第一级**（$I_D = I_{SS}/2 = 0.125$ mA，$W/L = 100$）：

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.125\ \mathrm{mA})} = 1.830\ \mathrm{mS},\\
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.125\ \mathrm{mA})} = 80\ \mathrm{k}\Omega, \qquad r_{O3} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.125\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
R_X &= r_{O1} \parallel r_{O3} = 26.67\ \mathrm{k}\Omega, \qquad A_1 = g_{m1}R_X = 48.8 .
\end{aligned}
$$

**第二级**（$I_D = 1$ mA，$(W/L)_5 = 120$）：

$$
\begin{aligned}
g_{m5} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(120)(1\ \mathrm{mA})} = 3.036\ \mathrm{mS},\\
r_{O5} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega, \qquad r_{O7} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
R_L &= r_{O5} \parallel r_{O7} = 3.333\ \mathrm{k}\Omega, \qquad A_2 = g_{m5}R_L = 10.12 .
\end{aligned}
$$

**直流增益：** $A_0 = A_1A_2 = 48.8\times10.12 = 494$。

**说明。** 忽略晶体管电容时，节点 X 本身没有电容，因此**未补偿**的放大器只有输出极点，显然是稳定的（一个极小的 $C_C \approx 0.17$ fF 只会把它 90° 的裕度降到 60°，这并不是有意义的补偿）。在实际电路中，X 上有 $M_5$ 的大栅极电容，密勒补偿使 X 成为主极点，同时把输出极点推向高频（即“极点分裂”）；下面的设计正是如此。

### 第 2 步 — 接入 $C_C$ 后的传递函数（KCL）

在半边电路中，$M_1$ 从 X 抽取 $g_{m1}V_{in}$，X 经 $R_X$ 接地，并经 $C_C$ 接到输出端；$M_5$（源极接交流地的 PMOS 管）从输出端抽取 $g_{m5}V_X$，输出端经 $R_L$ 和 $C_L$ 接地。

<!-- diagram: diagram-01.cir -->

**节点 X 的 KCL**（以流出节点的电流为正）：

$$g_{m1}V_{in} + \frac{V_X}{R_X} + sC_C(V_X - V_{out}) = 0 .$$

**输出端的 KCL**（以流出节点的电流为正）：

$$g_{m5}V_X + \frac{V_{out}}{R_L} + sC_LV_{out} + sC_C(V_{out} - V_X) = 0 .$$

令 $G_X = 1/R_X$，$G_L = 1/R_L$，由第二个方程得

$$V_X(g_{m5} - sC_C) = -V_{out}\left[G_L + s(C_L + C_C)\right] \quad\Longrightarrow\quad V_X = -V_{out}\,\frac{G_L + s(C_L + C_C)}{g_{m5} - sC_C} .$$

将第一个方程改写为 $V_X(G_X + sC_C) - sC_CV_{out} = -g_{m1}V_{in}$，并代入 $V_X$：

$$-V_{out}\,\frac{\left[G_L + s(C_L + C_C)\right](G_X + sC_C)}{g_{m5} - sC_C} - sC_CV_{out} = -g_{m1}V_{in} .$$

两边同乘以 $-(g_{m5} - sC_C)$：

$$V_{out}\left\{\left[G_L + s(C_L + C_C)\right](G_X + sC_C) + sC_C(g_{m5} - sC_C)\right\} = g_{m1}(g_{m5} - sC_C)\,V_{in} .$$

花括号中的 $s^2C_C^2$ 项相互抵消：

$$G_LG_X + s\left[G_LC_C + G_X(C_L + C_C) + g_{m5}C_C\right] + s^2C_LC_C .$$

除以 $G_LG_X$，并利用 $A_0 = g_{m1}R_X\,g_{m5}R_L$：

$$\frac{V_{out}}{V_{in}} = \frac{A_0\left(1 - \dfrac{sC_C}{g_{m5}}\right)}{1 + a\,s + b\,s^2},$$

$$a = R_XC_C + R_L(C_L + C_C) + g_{m5}R_XR_LC_C = R_X(1 + g_{m5}R_L)C_C + R_L(C_C + C_L), \qquad b = R_XR_LC_CC_L .$$

### 第 3 步 — 极点分裂：极点与零点的近似位置

当 $1 + as + bs^2$ 的两个根相距很远时，$\omega_{p1} \approx 1/a$，$\omega_{p2} \approx a/b$：

$$
\begin{aligned}
\omega_{p1} &\approx \frac{1}{R_X(1 + g_{m5}R_L)C_C + R_L(C_C + C_L)} \approx \frac{1}{g_{m5}R_L\,R_XC_C},\\
\omega_{p2} &\approx \frac{R_X(1 + g_{m5}R_L)C_C + R_L(C_C + C_L)}{R_XR_LC_CC_L} \approx \frac{g_{m5}}{C_L}\quad(\text{for } g_{m5}R_L \gg 1).
\end{aligned}
$$

- 主极点由 $R_X$ 与经**密勒倍增**后的电容 $(1 + A_2)C_C$ 之积决定，因此 $\mathrm{GBW} = A_0\,\omega_{p1} \approx \dfrac{g_{m1}R_X\,g_{m5}R_L}{g_{m5}R_LR_XC_C} = \dfrac{g_{m1}}{C_C}$。
- 输出极点外移到约 $g_{m5}/C_L$：在高频时 $C_C$ 把 $M_5$ 的栅极和漏极短接，该管在输出端看起来就像一个二极管，阻抗为 $1/g_{m5}$。
- 分子给出一个位于 $s = +g_{m5}/C_C$ 的零点，它在**右半平面**（RHP）：$C_C$ 把信号前馈（feedforward）到输出，与 $M_5$ 的反相电流方向相反。

### 第 4 步 — 为 60° 相位裕度选取 $C_C$

采用 $\mathrm{GBW} = g_{m1}/C_C$、$\omega_{p2} = g_{m5}/C_L$ 的两极点模型（RHP 零点在第 6 步中处理）。由于 $\omega_u \gg \omega_{p1}$，主极点贡献 90°，因此第二个极点只能贡献 30°：

$$\omega_u = \omega_{p2}\tan30° = \frac{\omega_{p2}}{\sqrt3}.$$

由幅值条件 $|H(j\omega_u)| \approx \dfrac{\mathrm{GBW}}{\omega_u\sqrt{1 + (\omega_u/\omega_{p2})^2}} = 1$ 得

$$\mathrm{GBW} = \omega_u\sqrt{1 + \tfrac13} = \frac{\omega_{p2}}{\sqrt3}\cdot\frac{2}{\sqrt3} = \frac23\,\omega_{p2}.$$

因此 $g_{m1}/C_C = \tfrac23\,g_{m5}/C_L$，于是

$$C_C = \frac32\,\frac{g_{m1}}{g_{m5}}\,C_L = 1.5\times\frac{1.830\ \mathrm{mS}}{3.036\ \mathrm{mS}}\times1\ \mathrm{pF} = 1.5\times0.603\times1\ \mathrm{pF} = 0.90\ \mathrm{pF},$$

一个接在 X 与 $V_{out1}$ 之间，另一个相同的接在 Y 与 $V_{out2}$ 之间。（若忽略因子 $\sqrt{1 + 1/3}$，则 $C_C = \sqrt3\,(g_{m1}/g_{m5})C_L = 1.04$ pF。）

### 第 5 步 — $C_C = 0.9$ pF 时的极点与零点位置

**系数：**

$$
\begin{aligned}
a &= (26.67\ \mathrm{k}\Omega)(1 + 10.12)(0.9\ \mathrm{pF}) + (3.333\ \mathrm{k}\Omega)(0.9 + 1)\ \mathrm{pF}\\
&= 266.9\ \mathrm{ns} + 6.3\ \mathrm{ns} = 273.2\ \mathrm{ns},\\
b &= (26.67\ \mathrm{k}\Omega)(3.333\ \mathrm{k}\Omega)(0.9\ \mathrm{pF})(1\ \mathrm{pF}) = 8.0\times10^{-17}\ \mathrm{s^2}.
\end{aligned}
$$

**主极点：**

$$\omega_{p1} \approx \frac1a = \frac{1}{273.2\ \mathrm{ns}} = 3.66\times10^6\ \mathrm{rad/s}\quad(\approx 0.58\ \mathrm{MHz}).$$

（较粗略的 $1/(g_{m5}R_LR_XC_C) = 1/(242.9\ \mathrm{ns}) = 4.1\times10^6$ rad/s。）

**次极点：**

$$\omega_{p2} \approx \frac ab = \frac{273.2\times10^{-9}}{8.0\times10^{-17}}\ \mathrm{rad/s} = 3.41\times10^9\ \mathrm{rad/s}\quad(\approx 0.54\ \mathrm{GHz}),$$

比估计值 $g_{m5}/C_L = 3.04\times10^9$ rad/s 高约 12 %，因为 $g_{m5}R_L \approx 10$ 并不远大于 1。

**零点（RHP）：**

$$\omega_z = +\frac{g_{m5}}{C_C} = \frac{3.036\ \mathrm{mS}}{0.9\ \mathrm{pF}} = 3.37\times10^9\ \mathrm{rad/s}\quad(\approx 0.54\ \mathrm{GHz}).$$

**增益带宽积：** $A_0\,\omega_{p1} = 494\times3.66\times10^6 = 1.81\times10^9$ rad/s（≈ 0.29 GHz）。

采用精确的极点位置（并去掉零点）时，这个两极点环路的 PM ≈ 64.6°，略高于 60° 的目标，因为真实的 $\omega_{p2}$ 比估计值高，而真实的 GBW 比估计值低。按精确的两极点分母，$C_C \approx 0.71$ pF 时恰好达到 60°。

### 第 6 步 — 右半平面零点及其消除方法

RHP 零点在使幅值上升的同时带来相位**滞后** $-\tan^{-1}(\omega/\omega_z)$。在交点处

$$\frac{\omega_u}{\omega_z} \approx \frac{g_{m1}/C_C}{g_{m5}/C_C} = \frac{g_{m1}}{g_{m5}} \approx 0.6,$$

它与 $C_C$ 无关，因此无论 $C_C$ 取何值，零点都要消耗大约 $\tan^{-1}(0.6) \approx 30°$（$C_C = 0.9$ pF 时为 28°，此时 $\omega_u/\omega_z = 0.54$）。由第 2 步含零点的完整传递函数可得：

| $C_C$（单个电容） | 0.5 pF | 0.9 pF | 2 pF | 5 pF | 24 pF | 100 pF |
|---|---|---|---|---|---|---|
| PM | 27° | 34° | 43° | 51° | 56° | 57° |

$C_C = 0.9$ pF 时实际裕度只有约 34°（交点为 $1.81\times10^9$ rad/s）；$C_C$ 很大时，交点趋近零点，裕度在 57° 附近饱和：**在这里仅用单个电容无法达到 60°。**

**解决办法：调零电阻。** 将 $R_z$ 与 $C_C$ 串联后，前馈导纳变为 $sC_C/(1 + sR_zC_C)$，零点移到

$$\omega_z = \frac{1}{C_C\left(g_{m5}^{-1} - R_z\right)} .$$

$R_z = 1/g_{m5} = 1/(3.036\ \mathrm{mS}) \approx 330\ \Omega$ 把零点移到无穷远处。加入 $R_z$ 后重新列 KCL，分母变为 $1 + a's + b's^2$，其中 $a' = a + R_zC_C$，$b' = R_LC_LC_C(R_X + R_z)$；由于 $R_z \ll R_X$，极点几乎不变，环路成为真正的两极点系统：

- $C_C = 0.9$ pF 时，PM ≈ 64°（即第 4 步的设计，并留有余量）；
- 若要恰好 60°，取 $C_C \approx 0.71$ pF，此时 $\omega_{p1} \approx 4.6\times10^6$ rad/s，$\omega_{p2} \approx 3.4\times10^9$ rad/s，交点 $\approx 1.96\times10^9$ rad/s，且没有有限零点。

### 结果

- **补偿：** $C_C \approx 0.9$ pF，分别接在 X 与 $V_{out1}$、Y 与 $V_{out2}$ 之间（两极点设计：$\mathrm{GBW} = g_{m1}/C_C = \tfrac23\,g_{m5}/C_L$，即 $C_C = 1.5(g_{m1}/g_{m5})C_L$）。
- **主极点：** $\omega_{p1} \approx 3.7\times10^6$ rad/s（≈ 0.58 MHz）。
- **次极点：** $\omega_{p2} \approx 3.4\times10^9$ rad/s（≈ 0.54 GHz；估计式 $g_{m5}/C_L$ 给出 $3.0\times10^9$ rad/s）。
- **零点：** 位于 RHP 的 $g_{m5}/C_C \approx 3.4\times10^9$ rad/s（≈ 0.54 GHz）。
- 由于这个零点，只有在 $C_C$ 上串联调零电阻 $R_z = 1/g_{m5} \approx 330\ \Omega$ 时才能真正达到 60° 的裕度；此时 $C_C \approx 0.71$ pF 恰好给出 60°（极点 ≈ $4.6\times10^6$ 和 $3.4\times10^9$ rad/s），而 0.9 pF 给出 ≈ 64°。

**常见错误。** 使用错误的增益带宽积表达式，例如 $g_{m5}/C_C$ 或 $A_1g_{m1}/C_C$。第一级的电流 $g_{m1}V_{in}$ 直接给 $C_C$ 充电，因此 $\mathrm{GBW} = g_{m1}/C_C$。

**常见错误。** 把单个电容密勒补偿的零点放在左半平面，或者忽略它。流过 $C_C$ 的前馈电流与 $M_5$ 的电流方向相反，因此零点 $g_{m5}/C_C$ 位于 RHP；由于 $\omega_u/\omega_z \approx g_{m1}/g_{m5}$，在这里它要消耗约 30° 的裕度。

**常见错误。** 使用 45° 时的规则 $C_C = (g_{m1}/g_{m5})C_L \approx 0.6$ pF，或者为了“抵消”一个极点而选取 $C_C = C_L$。要达到 60°，第二个极点必须位于 $1.5\times\mathrm{GBW}$，这要求 $C_C = 1.5(g_{m1}/g_{m5})C_L$。
