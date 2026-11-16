# 详细步骤 - R491

**思路。** 在每个密勒电容（Miller capacitance）上串联电阻 $R_z$，可把零点移到 $s_z = 1/[C_C(g_{m5}^{-1} - R_z)]$；当 $R_z > 1/g_{m5}$ 时，零点位于左半平面，其离原点的距离可以选择。求出补偿后放大器的次极点，并选取 $R_z$ 使零点恰好落在该极点上。

### 第 1 步 — 半边电路（half circuit）与所需参数

由对称性，只需分析一个半边电路：$M_1$（负载为 $M_3$）驱动 X，$M_5$（负载为 $M_7$）驱动带有负载 $C_L = 1$ pF 的 $V_{out1}$，$R_z$ 与 $C_C = 0.9$ pF 串联接在 X 与 $V_{out1}$ 之间。

**第二级**（$I_D = 1$ mA，$(W/L)_5 = 60/0.5 = 120$）：

$$
\begin{aligned}
g_{m5} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(120)(1\ \mathrm{mA})} = \sqrt{9.216\times10^{-6}}\ \mathrm{A/V} = 3.036\ \mathrm{mS},\qquad \frac{1}{g_{m5}} = 329.4\ \Omega,\\
r_{O5} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\qquad r_{O7} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
R_L &= r_{O5} \parallel r_{O7} = 3.333\ \mathrm{k}\Omega,\qquad g_{m5}R_L = 10.12 .
\end{aligned}
$$

第一级的 $g_{m1} = 1.830$ mS，$R_X = r_{O1} \parallel r_{O3} = 26.67$ kΩ；它们决定主极点（dominant pole），但不影响本题答案。

在半边电路中，$M_1$ 从 X（经 $R_X$ 接地）抽取 $g_{m1}V_{in}$，$R_z$–$C_C$ 支路把 X 与输出端相连，$M_5$（源极接交流地的 PMOS 管）从输出端抽取 $g_{m5}V_X$，输出端经 $R_L$ 和 $C_L$ 接地。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 加入 $R_z$ 后零点的位置

在零点处，$V_{out} = 0$ 而 $V_X \ne 0$，因此 $R_L$ 和 $C_L$ 中没有电流，输出端的基尔霍夫电流定律（KCL）方程只涉及该支路和 $M_5$：

$$\frac{V_X - 0}{R_z + \dfrac{1}{sC_C}} - g_{m5}V_X = 0 .$$

两边除以 $V_X$：

$$
\begin{aligned}
R_z + \frac{1}{s_zC_C} &= \frac{1}{g_{m5}}\\
\frac{1}{s_zC_C} &= \frac{1}{g_{m5}} - R_z\\
s_z &= \frac{1}{C_C\left(g_{m5}^{-1} - R_z\right)} .
\end{aligned}
$$

当 $R_z = 0$ 时，这就是右半平面（RHP）零点 $+g_{m5}/C_C$；当 $R_z = 1/g_{m5}$ 时，零点移到无穷远处；当 $R_z > 1/g_{m5}$ 时，$s_z = -1/[C_C(R_z - g_{m5}^{-1})]$，即位于 $\omega_z = 1/[C_C(R_z - g_{m5}^{-1})]$ 的**左半平面（LHP）零点**。它的相位**超前**可以抵消次极点的相位滞后（以及幅值滚降）。

### 第 3 步 — 次极点

在第二个极点的频率处，$C_C$ 把 $M_5$ 的栅极和漏极短接，该管在输出端看起来就像二极管连接（diode-connected）的器件。输出端看到的电导为 $g_{m5} + 1/R_L$，电容为 $C_L$（这里 X 本身没有电容）：

$$\omega_{p2} \approx \frac{g_{m5} + 1/R_L}{C_L} = \frac{1 + g_{m5}R_L}{R_LC_L} \approx \frac{g_{m5}}{C_L}\quad(\text{for } g_{m5}R_L \gg 1).$$

数值计算：

$$
\begin{aligned}
\frac{g_{m5}}{C_L} &= \frac{3.036\ \mathrm{mS}}{1\ \mathrm{pF}} = 3.04\times10^9\ \mathrm{rad/s},\\
\frac{1 + g_{m5}R_L}{R_LC_L} &= \frac{11.12}{(3.333\ \mathrm{k}\Omega)(1\ \mathrm{pF})} = 3.34\times10^9\ \mathrm{rad/s}.
\end{aligned}
$$

通常的估计值是 $g_{m5}/C_L$；稍高的那个值考虑了 $g_{m5}R_L$ 只有约 10 这一事实。

### 第 4 步 — 把 LHP 零点放到次极点上

令 $\omega_z = \omega_{p2}$：

$$
\begin{aligned}
\frac{1}{C_C\left(R_z - g_{m5}^{-1}\right)} &= \omega_{p2}\\
R_z - \frac{1}{g_{m5}} &= \frac{1}{\omega_{p2}C_C}\\
R_z &= \frac{1}{g_{m5}} + \frac{1}{\omega_{p2}C_C} .
\end{aligned}
$$

**取 $\omega_{p2} = g_{m5}/C_L$：**

$$R_z = \frac{1}{g_{m5}} + \frac{C_L}{g_{m5}C_C} = \frac{1}{g_{m5}}\left(1 + \frac{C_L}{C_C}\right) = 329.4\ \Omega\times\left(1 + \frac{1\ \mathrm{pF}}{0.9\ \mathrm{pF}}\right) = 329.4\ \Omega\times2.111 = 695\ \Omega .$$

**取更精确的 $\omega_{p2} = 3.34\times10^9$ rad/s：**

$$R_z = 329.4\ \Omega + \frac{1}{(3.34\times10^9\ \mathrm{rad/s})(0.9\ \mathrm{pF})} = 329.4\ \Omega + 333\ \Omega = 663\ \Omega .$$

### 第 5 步 — 验证：$R_z$ 会不会扰动它要抵消的极点？

用 $Y_c = sC_C/(1 + sR_zC_C)$ 代替 $sC_C$ 后，半边电路的分母变为 $1 + a's + b's^2$，其中

$$a' = R_X(1 + g_{m5}R_L)C_C + R_L(C_C + C_L) + R_zC_C, \qquad b' = R_LC_LC_C(R_X + R_z).$$

由于 $R_z$（≈ 0.7 kΩ）远小于 $R_X$（26.7 kΩ），极点几乎不动：主极点仍在 $3.7\times10^6$ rad/s 附近，第二个极点仍在 $3.3\times10^9$ rad/s 附近。对于这个模型（X 处没有电容），把零点代入分母可以发现，它能抵消的极点恰好是 $(g_{m5} + 1/R_L)/C_L$，因此 663 Ω 能实现精确抵消。此时环路表现为单极点系统，在单位增益反馈下相位裕度（phase margin）接近 90°。

### 结果

$$R_z = \frac{1}{g_{m5}} + \frac{1}{\omega_{p2}C_C} = \frac{1}{g_{m5}}\left(1 + \frac{C_L}{C_C}\right) \approx 695\ \Omega \approx 0.7\ \mathrm{k}\Omega$$

与每个 $C_C$ 串联，这里取 $\omega_{p2} \approx g_{m5}/C_L$。若采用更精确的 $\omega_{p2} = (1 + g_{m5}R_L)/(R_LC_L) \approx 3.3\times10^9$ rad/s，则 $R_z \approx 663\ \Omega$。无论哪种情况，零点都移入左半平面，距原点约 $3\times10^9$ rad/s，正好落在次极点上。

**常见错误。** 取 $R_z = 1/g_{m5} \approx 330\ \Omega$。这只是把零点移到无穷远处，而没有把它放到次极点上；还需要再加 $1/(\omega_{p2}C_C)$，才能把零点从左侧的无穷远处拉回来。

**常见错误。** 把电容比弄反，写成 $R_z = (1 + C_C/C_L)/g_{m5}$。额外的电阻为 $1/(\omega_{p2}C_C) = C_L/(g_{m5}C_C)$，因此比值应为 $C_L/C_C$。

**常见错误。** 取 $R_z < 1/g_{m5}$，这会使零点留在 RHP，无法抵消 LHP 极点；或者把零点放在**主**极点上，这会破坏主极点特性，而不是抵消第二个极点。
