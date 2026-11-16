# 详细步骤 - R299

**思路。** 把理想电流源开路，由输出端的基尔霍夫电流定律（KCL）得到用 $v_X$ 表示的 $v_{out}$，再由 X 点的 KCL 得到输入电流，从而求出 $Z_{in}$。传递函数则由 $R_S$ 与 $Z_{in}$ 构成的分压器得到。输入电阻为**负**，因为经过两个晶体管的环路是正反馈。

### 第 1 步 — 小信号模型（small-signal model）

把输入节点（$R_S$ 右侧）记为 X。$M_1$ 是从 X 到输出端的共源级（common-source stage）；$M_2$ 的源极接 $V_{DD}$、栅极接输出端、漏极接 X，是从输出端回到 X 的第二个共源级。环路反相两次：**正反馈**。$V_{DD}$ 为交流地，$I_1$、$I_2$ 开路：

- **$M_1$：** 从输出端流向地的电流 $g_{m1}v_X$，以及从输出端到地的 $r_{O1}$。
- **$M_2$：** $v_{gs2} = v_{out}$，因此电流 $g_{m2}v_{out}$ **从 X 流向交流地**，另有从 X 到交流地的 $r_{O2}$。

<!-- diagram: diagram-01.cir -->

设 $i_{in}$ 为经 $R_S$ 流入 X 的电流。

### 第 2 步 — 输出节点的 KCL

$I_1$ 开路，$M_2$ 的栅极不吸取电流，因此

$$g_{m1}v_X + \frac{v_{out}}{r_{O1}} = 0 \quad\Longrightarrow\quad v_{out} = -g_{m1}r_{O1}\,v_X ,$$

即以 $r_{O1}$ 为负载时 $M_1$ 的共源增益。

### 第 3 步 — 节点 X 的 KCL 与输入阻抗

$i_{in}$ 经 $M_2$ 的受控源和 $r_{O2}$ 离开 X（$I_2$ 和 $M_1$ 的栅极都不流过信号电流）：

$$i_{in} = g_{m2}v_{out} + \frac{v_X}{r_{O2}} .$$

代入第 2 步得到的 $v_{out}$：

$$
\begin{aligned}
i_{in} &= g_{m2}(-g_{m1}r_{O1}v_X) + \frac{v_X}{r_{O2}}\\
&= v_X\left(\frac{1}{r_{O2}} - g_{m1}g_{m2}r_{O1}\right)\\
&= v_X\,\frac{1 - g_{m1}r_{O1}g_{m2}r_{O2}}{r_{O2}},
\end{aligned}
$$

$$Z_{in} = \frac{v_X}{i_{in}} = \frac{r_{O2}}{1 - g_{m1}r_{O1}g_{m2}r_{O2}} .$$

**符号。** 环路增益（loop gain）$L = g_{m1}r_{O1}\,g_{m2}r_{O2}$ 是两个本征增益（intrinsic gain）的乘积，每个通常为 10–100，因此 $L\gg1$，且

$$Z_{in}\approx -\frac{r_{O2}}{g_{m1}r_{O1}g_{m2}r_{O2}} = -\frac{1}{g_{m1}g_{m2}r_{O1}} ,$$

这是一个幅值很小的**负电阻**（negative resistance）：当 $v_X$ 升高时，$M_1$ 把输出端（即 $M_2$ 的栅极）拉低，$M_2$ 就向 X 注入**更多**电流。

### 第 4 步 — 传递函数

$R_S$ 与 $Z_{in}$ 对 $V_{in}$ 分压，得到 X 点电压：

$$v_X = V_{in}\,\frac{Z_{in}}{Z_{in} + R_S}, \qquad v_{out} = -g_{m1}r_{O1}\,v_X .$$

代入 $Z_{in} = r_{O2}/(1 - L)$，并将分子、分母同乘以 $(1 - L)$：

$$\frac{Z_{in}}{Z_{in} + R_S} = \frac{r_{O2}}{r_{O2} + R_S(1 - L)} = \frac{r_{O2}}{R_S + r_{O2} - g_{m1}g_{m2}r_{O1}r_{O2}R_S},$$

$$\frac{V_{out}}{V_{in}} = \frac{-g_{m1}r_{O1}r_{O2}}{R_S + r_{O2} - g_{m1}g_{m2}r_{O1}r_{O2}R_S} .$$

若 $L\gg1$，并且 $g_{m1}g_{m2}r_{O1}R_S\gg1$（即 $R_S\gg|Z_{in}|$），则分母的最后一项占主导：

$$\frac{V_{out}}{V_{in}}\approx\frac{-g_{m1}r_{O1}r_{O2}}{-g_{m1}g_{m2}r_{O1}r_{O2}R_S} = +\frac{1}{g_{m2}R_S}.$$

### 第 5 步 — 关于稳定性的说明

从 X 到交流地的总电导为 $1/R_S + 1/Z_{in} = 1/R_S + 1/r_{O2} - g_{m1}g_{m2}r_{O1}$。当 $R_S > |Z_{in}|$ 时（由于 $|Z_{in}|$ 极小，这是通常的情况），总电导为**负**，因此 X 点的任何电容都会产生一个右半平面极点，两个反相器（inverter）会**锁定**（构成双稳态环路，就像 SRAM 单元一样）。此时上面的公式只是在电路无法维持的偏置点上得到的形式上的小信号结果。这也是第 4 步中增益改变符号的原因：恰好在 $R_S > |Z_{in}|$ 时，其分母变为负值。

### 结果

$$Z_{in} = \frac{r_{O2}}{1 - g_{m1}r_{O1}g_{m2}r_{O2}}\approx -\frac{1}{g_{m1}g_{m2}r_{O1}}\quad\text{(a negative resistance)},$$

$$\frac{V_{out}}{V_{in}} = -g_{m1}r_{O1}\,\frac{Z_{in}}{Z_{in} + R_S} = \frac{-g_{m1}r_{O1}r_{O2}}{R_S + r_{O2} - g_{m1}g_{m2}r_{O1}r_{O2}R_S}\ \left(\approx +\frac{1}{g_{m2}R_S}\ \text{for large loop gain and } R_S\gg|Z_{in}|\right).$$

两个反相的 CS 级构成正反馈环路，因此输入电阻为负；当 $R_S > |Z_{in}|$ 时电路不稳定（会锁定），上述结果只是形式上的小信号结果。

**常见错误。** 把 $M_2$ 当作源极跟随器（source follower）。它是一个**源极**接 $V_{DD}$、**漏极**接 X 的 PMOS 管，即共源放大器；这使环路变为正反馈，$Z_{in}$ 为负，而不是接近零。

**常见错误。** 给出正的 $Z_{in}$，例如 $r_{O2}$ 或 $1/g_{m2}$。只有在 $M_2$ 的栅极固定时，X 点的电阻才是 $r_{O2}$；而这里栅极由增益为 $-g_{m1}r_{O1}$ 的 $M_1$ 驱动，这就附加了很大的负电导 $-g_{m1}g_{m2}r_{O1}$。

**常见错误。** 忽略 $\lambda$，得出 $Z_{in} = 0$ 或 $\infty$ 的结论。若 $\lambda = 0$，输出节点将没有电阻性通路，$M_1$ 的增益将为无穷大；本题中正是有限的 $r_{O1}$、$r_{O2}$ 决定了 $Z_{in}$。
