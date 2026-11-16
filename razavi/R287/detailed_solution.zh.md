# 详细步骤 - R287

**思路。** 在阶跃发生的瞬间，串有有限 $R_{out}$ 的放大器无法在零时间内改变任何电容上的电荷，因此节点 Y 暂时被孤立在 $C_F$ 与 $C_L$ 之间，由 Y 处的电荷守恒（电容分压）即可得到初始跳变。此后放大器经 $R_{out}$ 把 Y 拉向 $-A\Delta V$。传递函数可以证实这两部分，并确定右半平面零点的位置。

### 第 1 步 — 输出为什么先向上跳变

所有电压都是相对于初始状态（阶跃前 $V_X = V_Y = 0$）的变化量。

<!-- diagram: diagram-01.cir -->

要在零时间内改变电容电压，需要冲激电流，但放大器与 Y 之间唯一的连接是 $R_{out}$，它只能流过有限的电流 $(-AV_X - V_Y)/R_{out}$，因此在 $0^-$ 到 $0^+$ 之间不会向 Y 输送**任何电荷**。在这一瞬间 Y 是一个孤立节点：$C_F$ 右极板与 $C_L$ 上极板上的总电荷不能改变。X 处的理想源可以提供任意大的电流，因此 X 确实跳变了 $\Delta V$，并把电荷经 $C_F$ 推入 $C_L$。

### 第 2 步 — 跳变的大小（电荷守恒）

设 Y 处的跳变为 $\Delta V_Y$。在 Y 一侧，$C_F$ 上的电荷变化 $C_F(\Delta V_Y - \Delta V)$（其电压 $V_Y - V_X$ 变化 $\Delta V_Y - \Delta V$），$C_L$ 上的电荷变化 $C_L\Delta V_Y$。Y 处的电荷守恒：

$$
\begin{aligned}
C_F(\Delta V_Y - \Delta V) + C_L\Delta V_Y &= 0\\
(C_F + C_L)\,\Delta V_Y &= C_F\,\Delta V\\
\Delta V_Y &= \Delta V\,\frac{C_F}{C_F + C_L} .
\end{aligned}
$$

这就是一个**电容分压器**：输入阶跃经 $C_F$ 耦合到 Y，并与 $C_L$ 分压。跳变为正（与输入方向相同），且小于 $\Delta V$；当 $C_L = 0$ 时，它就是完整的 $\Delta V$。

### 第 3 步 — 跳变之后：向 $-A\Delta V$ 衰减

当 $t > 0$ 时，$V_X = \Delta V$ 恒定，因此两个电容上的电压变化率都是 $dV_Y/dt$，由节点 Y 的基尔霍夫电流定律（KCL）得

$$\frac{-A\Delta V - V_Y}{R_{out}} = (C_F + C_L)\frac{dV_Y}{dt} \quad\Longrightarrow\quad R_{out}(C_F + C_L)\frac{dV_Y}{dt} + V_Y = -A\Delta V .$$

从 $V_Y(0^+) = \Delta V\,C_F/(C_F + C_L)$ 出发：

$$V_Y(t) = -A\Delta V + \left(A + \frac{C_F}{C_F + C_L}\right)\Delta V\,e^{-t/\tau}, \qquad \tau = R_{out}(C_F + C_L).$$

放大器经 $R_{out}$ 输出的电流给两个电容充电，把 Y 拉低到理想值 $-A\Delta V$。

### 第 4 步 — 传递函数及其零点

s 域中节点 Y 的 KCL（以流出 Y 的电流为正）：

$$\frac{V_Y + AV_X}{R_{out}} + (V_Y - V_X)\,sC_F + V_Y\,sC_L = 0 .$$

乘以 $R_{out}$ 并合并同类项：

$$
\begin{aligned}
V_Y\left[1 + sR_{out}(C_F + C_L)\right] &= V_X\,(sR_{out}C_F - A)\\
\frac{V_Y}{V_X}(s) &= \frac{sR_{out}C_F - A}{1 + sR_{out}(C_F + C_L)} .
\end{aligned}
$$

- **极点：** $s_p = -1/[R_{out}(C_F + C_L)]$，与第 3 步中衰减的时间常数一致。
- **零点：** $s_z = +A/(R_{out}C_F)$，位于**右半平面**，且与 $C_L$ 无关。
- **直流增益：** $-A$。**高频增益：** $C_F/(C_F + C_L)$，为正值，且等于跳变比例；由初值定理得 $V_Y(0^+) = H(\infty)\Delta V = \Delta V\,C_F/(C_F + C_L)$，与上面的结果一致。

朝“错误”方向的初始跳变正是这个右半平面零点在时域中的特征：在高频下经 $C_F$ 的同相前馈通路占主导，在低频下反相的放大器通路占主导，两者在 $s_z$ 处相互抵消。$C_L$ 不会移动零点；它只是减小跳变并使衰减变慢。

### 第 5 步 — 数值示例

$A = 10$，$R_{out} = 10\ \mathrm{k}\Omega$，$C_F = 1$ pF，$C_L = 4$ pF，$\Delta V = 0.1$ V：

$$
\begin{aligned}
\Delta V_Y(0^+) &= 0.1\ \mathrm{V}\times\frac{1}{1 + 4} = 20\ \mathrm{mV},\\
\tau &= (10\ \mathrm{k}\Omega)(5\ \mathrm{pF}) = 50\ \mathrm{ns},\\
V_Y(t) &= -1 + (1 + 0.02)\,e^{-t/50\,\mathrm{ns}}\ \mathrm{V},\\
s_z &= \frac{10}{(10\ \mathrm{k}\Omega)(1\ \mathrm{pF})} = 10^9\ \mathrm{s^{-1}}\ \text{(same as without } C_L).
\end{aligned}
$$

### 结果

输出先**向上**跳变

$$\Delta V_Y(0^+) = \Delta V\,\frac{C_F}{C_F + C_L},$$

因为在 $t = 0^+$ 时，有限的 $R_{out}$ 无法提供改变电容电荷所需的冲激电流。X 处的阶跃只能经 $C_F$ 到达 Y，而该电容与 $C_L$ 构成电容分压器。随后，随着放大器经 $R_{out}$ 输出的电流给两个电容充电，输出以 $\tau = R_{out}(C_F + C_L)$ 向 $-A\Delta V$ 衰减。这一行为揭示了如下传递函数中的一个**右半平面零点**：

$$\frac{V_Y}{V_X} = \frac{sR_{out}C_F - A}{1 + sR_{out}(C_F + C_L)},$$

它位于 $s_z = +A/(R_{out}C_F)$，与 $C_L$ 无关。

**常见错误。** 把跳变当作完整的 $\Delta V$。经 $C_F$ 推过来的电荷要与 $C_L$ 分享，因此跳变按分压比 $C_F/(C_F + C_L)$ 减小。

**常见错误。** 把分压比弄反，写成 $\Delta V\,C_L/(C_F + C_L)$。耦合元件是 $C_F$：$C_F$ 越大，跳变越大；而 $C_L$ 越大，越能把 Y 稳住，跳变越小。

**常见错误。** 认为输出立即下降，或者把这个凸起归因于放大器的振铃。该模型只有一个极点；向上的跳变是经 $C_F$ 的直接前馈，是右半平面零点的特征。
