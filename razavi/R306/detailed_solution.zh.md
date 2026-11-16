# 详细步骤 - R306

**思路。** 在极低频时 $C_1$ 和 $C_2$ 相当于开路，在极高频时相当于短路。对每种极限情况，判断每个晶体管和电阻变成了什么（共源共栅器件、二极管连接负载、电流源或额外的负载电阻），再用基尔霍夫电流定律（KCL）计算增益。关键在于：在两种极限情况之间，$C_1$ 和 $C_2$ 互换了 $M_2$ 和 $M_3$ 的角色。

### 第 1 步 — 极低频：电路变成什么

把 $M_1$ 的漏极称为节点 X，$M_2$ 的栅极称为 G2，$M_3$ 的栅极称为 G3；$V_{DD}$、$V_b$ 和地都是交流地。$C_1$ 和 $C_2$ 开路时，$R_1$ 和 $R_2$ 中没有电流（它们只连接到栅极），因此：

- **G2** 的电压等于 $V_b$，即交流地：$M_2$ 是**共源共栅**器件，即共栅（common-gate）器件。
- **G3** 的电压等于 $V_{out}$：$M_3$ 为**二极管连接**。

因此，电路是以二极管连接 PMOS 管为负载的共源共栅级 $M_1$–$M_2$。

<!-- diagram: diagram-01.cir -->

**输出端的负载。** 二极管连接的 PMOS 管吸取电流 $g_{m3}v_{out}$，并与 $r_{O3}$ 并联：

$$R_L = \frac{1}{g_{m3}}\parallel r_{O3} = \frac{r_{O3}}{1 + g_{m3}r_{O3}}.$$

**共源共栅级的输出电阻**（$\gamma = 0$）：

$$R_{casc} = r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}.$$

**短路跨导（short-circuit transconductance）$G_m$。** 将输出端对交流地短路，从输出端向下流过 $M_2$ 的电流为 $g_{m2}(0 - V_X) + (0 - V_X)/r_{O2} = -V_X(g_{m2} + 1/r_{O2})$，在 X 点它等于 $M_1$ 的电流 $g_{m1}V_{in} + V_X/r_{O1}$：

$$
\begin{aligned}
-V_X\left(g_{m2} + \frac{1}{r_{O2}}\right) &= g_{m1}V_{in} + \frac{V_X}{r_{O1}}\\
V_X &= -\frac{g_{m1}V_{in}}{g_{m2} + 1/r_{O2} + 1/r_{O1}}.
\end{aligned}
$$

因此输出短路电流为

$$i_{out} = -V_X\left(g_{m2} + \frac{1}{r_{O2}}\right) = g_{m1}V_{in}\,\frac{g_{m2} + 1/r_{O2}}{g_{m2} + 1/r_{O2} + 1/r_{O1}},$$

$$G_m = \frac{i_{out}}{V_{in}} = \frac{g_{m1}r_{O1}(1 + g_{m2}r_{O2})}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}} = \frac{g_{m1}r_{O1}(1 + g_{m2}r_{O2})}{R_{casc}}\approx g_{m1}.$$

### 第 2 步 — 极低频：增益

$$A_{v,low} = -G_m\,\frac{R_{casc}R_L}{R_{casc} + R_L} = -\frac{g_{m1}r_{O1}(1 + g_{m2}r_{O2})\,R_L}{R_{casc} + R_L}.$$

代入 $R_L = r_{O3}/(1 + g_{m3}r_{O3})$，并将分子、分母同乘以 $(1 + g_{m3}r_{O3})$：

$$A_{v,low} = -\frac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{(1 + g_{m3}r_{O3})(r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}) + r_{O3}}.$$

$R_{casc}$ 的量级为 $g_mr_O^2$，而 $R_L\approx1/g_{m3}$，因此 $R_{casc}\parallel R_L\approx 1/g_{m3}$；再利用 $G_m\approx g_{m1}$ 和 $g_{m3}r_{O3}\gg1$，得

$$A_{v,low}\approx -\frac{g_{m1}}{g_{m3}},$$

即带二极管负载的共源（common-source）放大器。

### 第 3 步 — 极高频：电路变成什么

$C_1$ 和 $C_2$ 短路时：

- **$C_1$ 把 G2 与输出端短接。** $M_2$ 变为**二极管连接**，不再是共源共栅器件；$R_1$ 此时接在输出端与 $V_b$（交流地）之间，**成为输出端的负载**。
- **$C_2$ 把 G3 接地。** $M_3$ 变为**电流源**，其输出电阻为 $r_{O3}$；$R_2$ 此时接在输出端与交流地之间，**也成为输出端的负载**。

从输出端到交流地的总电导为

$$G = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{r_{O3}} .$$

<!-- diagram: diagram-02.cir -->

### 第 4 步 — 极高频：增益

令 $g' = g_{m2} + 1/r_{O2}$。由于栅极接输出端，$M_2$（连同 $r_{O2}$）从输出端向 X 输送电流 $g'(V_{out} - V_X)$。X 点和输出端的 KCL：

$$g'(V_{out} - V_X) = g_{m1}V_{in} + \frac{V_X}{r_{O1}} , \qquad (1)$$

$$-GV_{out} = g'(V_{out} - V_X). \qquad (2)$$

由式 (2)：

$$V_X = V_{out}\left(1 + \frac{G}{g'}\right). \qquad (3)$$

比较式 (1) 和式 (2)，得 $-GV_{out} = g_{m1}V_{in} + V_X/r_{O1}$，即

$$V_X = -r_{O1}\left(g_{m1}V_{in} + GV_{out}\right). \qquad (4)$$

令式 (3) 与式 (4) 相等：

$$
\begin{aligned}
V_{out}\left(1 + \frac{G}{g'}\right) &= -g_{m1}r_{O1}V_{in} - r_{O1}GV_{out}\\
V_{out}\left(1 + Gr_{O1} + \frac{G}{g'}\right) &= -g_{m1}r_{O1}V_{in}\\
A_{v,high} &= \frac{-g_{m1}r_{O1}}{1 + Gr_{O1} + G/g'} = -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + G\left(1 + \dfrac{1}{g'r_{O1}}\right)}.
\end{aligned}
$$

由于 $g'r_{O1}\approx g_{m2}r_{O1}\gg1$，$1/(g'r_{O1})$ 项可以忽略：

$$A_{v,high}\approx -\frac{g_{m1}}{1/r_{O1} + 1/R_1 + 1/R_2 + 1/r_{O3}} = -g_{m1}\,(r_{O1}\parallel R_1\parallel R_2\parallel r_{O3}).$$

$r_{O1}$ 之所以与输出端负载并联出现，是因为二极管连接的 $M_2$（约为 $1/g_{m2}$）使 X 紧紧跟随输出端，$V_X\approx V_{out}$。

### 第 5 步 — 两种极限情况的比较

低频时输出端的负载是一个二极管（$\approx 1/g_{m3}$）；高频时负载是 $r_{O1}\parallel R_1\parallel R_2\parallel r_{O3}$，通常大得多。因此通常 $|A_{v,high}|\gg|A_{v,low}|$：增益随频率**升高**。

**示例**（示例数值，并非题目的一部分）：取 $g_{m1} = g_{m2} = 5$ mS，$g_{m3} = 2$ mS，$r_{O1} = r_{O2} = 10\ \mathrm{k\Omega}$，$r_{O3} = 5\ \mathrm{k\Omega}$，$R_1 = R_2 = 50\ \mathrm{k\Omega}$，由精确公式得 $A_{v,low} = -2.23$（近似值为 $-2.5$），$A_{v,high} = -14.5$（近似值为 $-14.7$）。

### 结果

**极低频**（$C_1$、$C_2$ 开路：$M_2$ 为栅极接 $V_b$ 的共源共栅器件，$M_3$ 经 $R_2$ 接成二极管连接）：

$$A_{v,low} = -\frac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{(1 + g_{m3}r_{O3})(r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}) + r_{O3}}\approx -\frac{g_{m1}}{g_{m3}}.$$

**极高频**（$C_1$、$C_2$ 短路：$M_2$ 为二极管连接，$M_3$ 为电流源，$R_1$ 和 $R_2$ 成为输出端负载）：

$$A_{v,high} = -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + G\left(1 + \dfrac{1}{(g_{m2} + 1/r_{O2})r_{O1}}\right)},\quad G = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{r_{O3}},\qquad A_{v,high}\approx -g_{m1}(r_{O1}\parallel R_1\parallel R_2\parallel r_{O3}).$$

**常见错误。** 在低频时把 $M_3$ 当作电流源。$C_2$ 开路时，$R_2$ 中没有电流，因此 $M_3$ 的栅极电压等于输出电压，$M_3$ 为二极管连接；低频增益只有约 $-g_{m1}/g_{m3}$。

**常见错误。** 在高频时仍把 $M_2$ 当作共源共栅器件。$C_1$ 把它的栅极接到漏极，因此提升因子 $g_{m2}r_{O2}$ 消失，增益由 $r_{O1}\parallel R_1\parallel R_2\parallel r_{O3}$ 决定。

**常见错误。** 在高频时漏掉 $R_1$ 或 $R_2$，或在低频时计入它们。在直流时它们只连接到栅极，不流过信号电流；一旦 $C_1$ 和 $C_2$ 短路，它们各自把输出端接到一个交流地。
