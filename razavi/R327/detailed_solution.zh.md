# 详细步骤 - R327

**思路。** 在精确传递函数中令 $C_{GD} = 0$，化简分子、$\xi$ 和 $s$ 项系数。证明所得分母可以精确分解为 $(1 + R_SC_{GS}s)(1 + R_DC_{DB}s)$，然后直接由电路推导输入节点和输出节点的传递函数，并证明它们的乘积就是同一个表达式。

### 第 1 步 — 代入 $C_{GD} = 0$

$$(C_{GD}s - g_m)R_D\Big|_{C_{GD} = 0} = -g_mR_D ,$$

因此位于 $s = +g_m/C_{GD}$ 的零点移到无穷远处（从栅极到输出端没有前馈）。

$$\xi = C_{GS}C_{GD} + C_{GS}C_{DB} + C_{GD}C_{DB}\Big|_{C_{GD} = 0} = C_{GS}C_{DB}, \qquad R_SR_D\xi = R_SR_DC_{GS}C_{DB}.$$

在 $s$ 项系数中，$R_S(1 + g_mR_D)C_{GD}$ 项以及第三项中的 $C_{GD}$ 部分都消失了：

$$R_S(1 + g_mR_D)\cdot0 + R_SC_{GS} + R_D(0 + C_{DB}) = R_SC_{GS} + R_DC_{DB}.$$

因此

$$\frac{V_{out}}{V_{in}}(s)\Big|_{C_{GD} = 0} = \frac{-g_mR_D}{R_SR_DC_{GS}C_{DB}s^2 + (R_SC_{GS} + R_DC_{DB})s + 1}.$$

### 第 2 步 — 分母的因式分解

展开输入节点因子与输出节点因子的乘积，

$$
\begin{aligned}
(1 + R_SC_{GS}s)(1 + R_DC_{DB}s) &= 1 + R_DC_{DB}s + R_SC_{GS}s + R_SC_{GS}\,R_DC_{DB}\,s^2\\
&= R_SR_DC_{GS}C_{DB}s^2 + (R_SC_{GS} + R_DC_{DB})s + 1 ,
\end{aligned}
$$

它与第 1 步的分母逐项相同（常数项为 1，$s$ 项系数为 $R_SC_{GS} + R_DC_{DB}$，$s^2$ 项系数为 $R_SR_DC_{GS}C_{DB}$）。因此

$$\frac{V_{out}}{V_{in}}(s) = \frac{-g_mR_D}{(1 + R_SC_{GS}s)(1 + R_DC_{DB}s)} = \frac{1}{1 + R_SC_{GS}s}\cdot\frac{-g_mR_D}{1 + R_DC_{DB}s},$$

其极点恰好位于 $\omega_{in} = 1/(R_SC_{GS})$ 和 $\omega_{out} = 1/(R_DC_{DB})$。

### 第 3 步 — 通过把极点与节点相关联得到相同的因子

<!-- diagram: diagram-01.cir -->

当 $C_{GD} = 0$ 时，电路分成两部分，二者只通过受控源 $g_mV_X$ 相联系，其中 X 为栅极。

**输入节点 X。** 它经 $R_S$ 接到 $V_{in}$，经 $C_{GS}$ 接地，且栅极不吸取电流：

$$\frac{V_{in} - V_X}{R_S} = C_{GS}s\,V_X\quad\Longrightarrow\quad\frac{V_X}{V_{in}} = \frac{1}{1 + R_SC_{GS}s},$$

这是一个极点为 $1/(R_SC_{GS})$ 的 RC 低通网络。

**输出节点。** $M_1$ 吸取电流 $g_mV_X$，输出端接有 $R_D$（接到 $V_{DD}$，即交流地；$\lambda = 0$）和 $C_{DB}$：

$$-g_mV_X = \frac{V_{out}}{R_D} + C_{DB}s\,V_{out}\quad\Longrightarrow\quad\frac{V_{out}}{V_X} = \frac{-g_mR_D}{1 + R_DC_{DB}s},$$

其极点为 $1/(R_DC_{DB})$。二者的乘积

$$\frac{V_{out}}{V_{in}} = \frac{V_X}{V_{in}}\cdot\frac{V_{out}}{V_X} = \frac{1}{1 + R_SC_{GS}s}\cdot\frac{-g_mR_D}{1 + R_DC_{DB}s},$$

与第 2 步的结果完全相同。

### 第 4 步 — 为什么这里的因式分解是精确的

当 $C_{GD} = 0$（且 $\lambda = 0$）时，没有任何元件把输出端连回 X，因此 $V_X$ 只取决于 $V_{in}$、$R_S$ 和 $C_{GS}$；而从 X 到输出端的唯一联系是与频率无关的受控源 $g_mV_X$，因此不存在第二条信号通路，也没有零点。两个节点相互隔离，各自贡献一个精确的极点。

当 $C_{GD}\ne0$ 时，该电容把两个节点耦合起来：$s$ 项系数增加了密勒效应（Miller effect）项 $R_S(1 + g_mR_D)C_{GD}$，$\xi$ 增加了交叉项 $C_{GD}(C_{GS} + C_{DB})$，分母不再能分解为两个节点时间常数的形式，把每个节点与一个极点相关联也就只是一种近似了。

### 结果

当 $C_{GD} = 0$ 时：$\xi = C_{GS}C_{DB}$，分子变为 $-g_mR_D$，分母变为 $R_SR_DC_{GS}C_{DB}s^2 + (R_SC_{GS} + R_DC_{DB})s + 1 = (1 + R_SC_{GS}s)(1 + R_DC_{DB}s)$。因此

$$\frac{V_{out}}{V_{in}} = \frac{1}{1 + R_SC_{GS}s}\cdot\frac{-g_mR_D}{1 + R_DC_{DB}s}.$$

第一个因子是 $V_X/V_{in}$，对应带 $R_S$ 和 $C_{GS}$ 的输入节点（极点为 $1/(R_SC_{GS})$）。第二个因子是 $V_{out}/V_X$，对应流入 $R_D\parallel C_{DB}$ 的电流 $g_mV_X$（极点为 $1/(R_DC_{DB})$）。没有 $C_{GD}$ 时，两个节点相互隔离，因此传递函数可以精确地因式分解，而零点 $g_m/C_{GD}$ 移到无穷远处。

**常见错误。** 电阻与电容配对错误，例如得到含 $R_SC_{DB}$ 或 $R_DC_{GS}$ 的因子。只有输入电阻配输入电容、输出电阻配输出电容，才能得到 $s$ 项系数 $R_SC_{GS} + R_DC_{DB}$。

**常见错误。** 在化简后的表达式中仍保留零点。零点 $g_m/C_{GD}$ 来自经 $C_{GD}$ 的前馈；当 $C_{GD} = 0$ 时，分子为常数 $-g_mR_D$。

**常见错误。** 认为二阶分母不能因式分解。只要实系数二次式的根是实数，它就可以分解为实系数一阶因子之积；这里的根恰好是 $-1/(R_SC_{GS})$ 和 $-1/(R_DC_{DB})$。
