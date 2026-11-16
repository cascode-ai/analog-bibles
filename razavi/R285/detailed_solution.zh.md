# 详细步骤 - R285

**思路。** 把放大器建模为 $-AV_X$ 串联 $R_{out}$ 后，能经 Y 给 $C_F$ 充电的唯一通路只能流过有限的电流，因此在阶跃瞬间 $C_F$ 保持其电压，Y 被 X 一起带着向上跳。然后求解 $t > 0$ 时的电路，并推导传递函数，说明这一行为背后的右半平面零点。

### 第 1 步 — 模型及其 KCL 方程

所有量都是相对于初始状态（阶跃前 $V_X = V_Y = 0$）的变化量。把受控源 $-AV_X$ 的输出端称为节点 N；$R_{out}$ 接在 N 与 Y 之间。

<!-- diagram: diagram-01.cir -->

**节点 Y 的基尔霍夫电流定律（KCL）。** 从 X 经 $C_F$ 流入 Y 的电流与从 N 经 $R_{out}$ 流入 Y 的电流之和为零：

$$C_F\frac{d(V_X - V_Y)}{dt} + \frac{-AV_X - V_Y}{R_{out}} = 0. \tag{1}$$

### 第 2 步 — $t = 0^+$ 时发生了什么

把 (1) 从 $0^-$ 积分到 $0^+$：

$$C_F\left[\Delta(V_X - V_Y)\right]_{0^-}^{0^+} = -\int_{0^-}^{0^+}\frac{-AV_X - V_Y}{R_{out}}\,dt .$$

被积函数是有限的（有限的电压除以有限的 $R_{out}$），因此在长度为零的区间上积分为零。于是

$$V_X - V_Y \ \text{is continuous at } t = 0 \quad\Longrightarrow\quad V_Y(0^+) - V_Y(0^-) = V_X(0^+) - V_X(0^-) = \Delta V .$$

**输出向上跳变 $+\Delta V$。** 若要立即按放大器的指令（$-A\Delta V$）变化，$C_F$ 两端的电压就必须在零时间内变化 $(1 + A)\Delta V$，即需要流过 $R_{out}$ 的电流为无穷大。因此一开始 $C_F$ 就像一节电池，把输入阶跃直接传到输出端。

### 第 3 步 — $t > 0$ 时的响应

此时 $V_X = \Delta V$ 恒定，因此 (1) 变为

$$-C_F\frac{dV_Y}{dt} = \frac{A\Delta V + V_Y}{R_{out}} \quad\Longrightarrow\quad R_{out}C_F\frac{dV_Y}{dt} + V_Y = -A\Delta V ,$$

这是一个一阶方程，时间常数为 $\tau = R_{out}C_F$，终值为 $-A\Delta V$。由 $V_Y(0^+) = +\Delta V$ 得：

$$V_Y(t) = -A\Delta V + (1 + A)\Delta V\,e^{-t/(R_{out}C_F)} .$$

随着流过 $R_{out}$ 的电流 $[V_Y - (-A\Delta V)]/R_{out}$ 逐渐给 $C_F$ 充电，输出**从 $+\Delta V$ 开始**，**按指数规律向 $-A\Delta V$ 衰减**——这正是理想放大器会立即给出的值。它在 $t = R_{out}C_F\ln[(1 + A)/A]$ 时过零。

### 第 4 步 — 传递函数：右半平面零点

对 (1) 进行拉普拉斯变换：

$$
\begin{aligned}
sC_F(V_X - V_Y) + \frac{-AV_X - V_Y}{R_{out}} &= 0\\
V_X\left(sC_F - \frac{A}{R_{out}}\right) &= V_Y\left(sC_F + \frac{1}{R_{out}}\right)\\
\frac{V_Y}{V_X}(s) &= \frac{sC_F - A/R_{out}}{sC_F + 1/R_{out}} = -A\,\frac{1 - s\dfrac{R_{out}C_F}{A}}{1 + sR_{out}C_F}.
\end{aligned}
$$

- **极点**位于 $s_p = -1/(R_{out}C_F)$：对应衰减的时间常数。
- **零点**位于 $s_z = +A/(R_{out}C_F)$：实数且为**正**，是一个**右半平面（RHP）零点**。
- **低频：** $V_Y/V_X \to -A$，即经过放大器的反相主通路。
- **高频：** $V_Y/V_X \to +1$，即经过 $C_F$ 的同相前馈通路。

两条通路符号相反，并在 $s_z$ 处恰好相互抵消。高频增益与直流增益符号相反，正是右半平面零点的特征，它在时域中表现为阶跃响应从“错误”的方向开始。初值定理也证实了这一跳变：$V_Y(0^+) = \lim_{s\to\infty}sH(s)\,\Delta V/s = H(\infty)\Delta V = +\Delta V$。

若 $R_{out} = 0$，零点移到无穷远处，放大器提供冲激式的充电电流，输出直接阶跃到 $-A\Delta V$：跳变是 $R_{out}$ 有限的结果。

### 第 5 步 — 数值示例

$A = 10$，$R_{out} = 10\ \mathrm{k}\Omega$，$C_F = 1$ pF，$\Delta V = 0.1$ V：

$$
\begin{aligned}
\tau &= R_{out}C_F = (10\ \mathrm{k}\Omega)(1\ \mathrm{pF}) = 10\ \mathrm{ns},\\
V_Y(0^+) &= +0.1\ \mathrm{V}, \qquad V_Y(\infty) = -10\times0.1 = -1\ \mathrm{V},\\
V_Y(t) &= -1 + 1.1\,e^{-t/10\,\mathrm{ns}}\ \mathrm{V}, \qquad \text{zero crossing at } t = 10\ \mathrm{ns}\times\ln(1.1) = 0.95\ \mathrm{ns},\\
s_z &= \frac{A}{R_{out}C_F} = \frac{10}{10\ \mathrm{ns}} = 10^9\ \mathrm{rad/s}\ \ (159\ \mathrm{MHz}).
\end{aligned}
$$

### 结果

在阶跃发生的瞬间，$C_F$ 两端的电压不能改变，因为唯一能向 Y 提供电荷的通路是 $R_{out}$，而它只能流过有限的电流。因此 $V_Y - V_X$ 保持其初始值，Y 被 X 一起带着向上跳：$\Delta V_Y(0^+) = +\Delta V$。此后放大器才起作用。电流 $[V_Y - (-A\Delta V)]/R_{out}$ 给 $C_F$ 充电，Y 以时间常数 $R_{out}C_F$ 从 $+\Delta V$ 按指数规律向 $-A\Delta V$ 衰减：

$$V_Y(t) = -A\Delta V + (1 + A)\Delta V\,e^{-t/(R_{out}C_F)}.$$

$C_F$ 是一条在高频下增益为 $+1$ 的前馈通路，与主通路（$-A$）符号相反。两者在 $s_z = +A/(R_{out}C_F)$ 处相互抵消，这是 $V_Y/V_X = (sC_F - A/R_{out})/(sC_F + 1/R_{out})$ 的一个右半平面零点。

**常见错误。** 认为输出立即跳到 $-A\Delta V$（或跳变 $-(1 + A)\Delta V$）。这要求电容电压在零时间内变化 $(1 + A)\Delta V$，即流过有限 $R_{out}$ 的电流为无穷大。

**常见错误。** 把最初的向上跳变归因于放大器的过冲或振铃。该模型只有一个极点，没有谐振；跳变是电容的直接馈通，是右半平面零点在时域中的特征。

**常见错误。** 说输出先向下移动一点。前馈通路是同相的，因此在反相主通路起主导作用之前，输出先**向上**移动，且恰好移动 $\Delta V$。
