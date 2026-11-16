# 详细步骤 - R218

**思路。** 这一结果的基础是**对称性加线性**：相同的器件接相同的负载，在大小相等、方向相反的输入变化驱动下，每条支路中的响应也大小相等、方向相反，因此两半边共享的节点（例如 P）只能保持不动。下面用三种观点把这一点具体化：直观的电流论证、从 P 看进去的戴维南等效图，以及简短的严格验证；第四部分说明为什么负载相等是关键。

### 第 1 步 — 问题设定

把 $D_1$ 和 $D_2$ 的上端（漏极）分别记为 X 和 Y，它们各自经 $R_D$ 接到电源；器件电流记为 $I_1$、$I_2$。输入的变化为 $\Delta V_{in1} = +\Delta V_{in}$ 和 $\Delta V_{in2} = -\Delta V_{in}$；对于小变化，每个器件满足

$$\Delta I = g_m\Delta V_{GS} + \frac{\Delta V_{DS}}{r_O}.$$

当 $r_O = \infty$ 时，$\Delta I_1 = g_m(\Delta V_{in} - \Delta V_P)$，$\Delta I_2 = g_m(-\Delta V_{in} - \Delta V_P)$，而恒定的尾电流要求 $\Delta I_1 + \Delta I_2 = 0$：

$$-2g_m\Delta V_P = 0\quad\Longrightarrow\quad\Delta V_P = 0 .$$

问题在于 $\Delta V_{DS}/r_O$ 项是否会破坏这一结论。

### 第 2 步 — 计入沟道长度调制时的直观论证

假设 $I_1$ 增加 $\delta$、$I_2$ 减小 $\delta$，从而保持尾电流不变。

- **$D_1$ 的漏极：** X 下降 $R_D\delta$，这降低了 $V_{DS1}$，并通过 $r_O$ 使 $I_1$ 略微**减小**；若 P 发生移动，减小量为 $(R_D\delta + \Delta V_P)/r_O$。
- **$D_2$ 的漏极：** Y 上升 $R_D\delta$，这提高了 $V_{DS2}$，使 $I_2$ 略微**增大**相同的量。

负载相等时，这两项修正**大小相等、方向相反**，因此无需 $V_P$ 的任何变化，$I_1 + I_2$ 就保持等于 $I_T$。两个漏极反对称地变化（$\Delta V_X = -\Delta V_Y$），因此一边对公共节点施加的任何影响都会被另一边恰好抵消，P 保持不动。

### 第 3 步 — 从 P 看进去的戴维南等效

从 P 看进某一半边（器件加负载）的下端：设源极电压为 $v_s$，从源极流出的电流为 $i$，则 $v_d = -R_Di$，$i = g_m(v_{in} - v_s) + (v_d - v_s)/r_O$，因此

$$
\begin{aligned}
i(r_O + R_D) &= g_mr_Ov_{in} - (1 + g_mr_O)v_s\\
i &= \frac{V_T - v_s}{R_T}, \qquad V_T = \frac{g_mr_O}{1 + g_mr_O}v_{in},\quad R_T = \frac{R_D + r_O}{1 + g_mr_O}.
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

因此 P 看到的是两个戴维南电压源 $V_{T1}$ 和 $V_{T2}$，它们各自串联**相同的** $R_T$（器件相同、负载相同），再加上尾电流源。对 P 点应用基尔霍夫电流定律（KCL），并令理想尾电流源的小信号电流为零：

$$
\begin{aligned}
\frac{V_{T1} - v_P}{R_T} + \frac{V_{T2} - v_P}{R_T} &= 0\\
v_P &= \frac{V_{T1} + V_{T2}}{2}.
\end{aligned}
$$

对于差分输入，$V_{T1} = -V_{T2}$，因此 $v_P = 0$。即使从 P 到地存在有限的尾电流源电阻，它也只是增加一个与 $v_P$ 成正比的项，仍然得到 $v_P = 0$。

### 第 4 步 — 严格验证

器件方程为

$$
\begin{aligned}
\Delta I_1 &= g_m(\Delta V_{in} - \Delta V_P) + \frac{\Delta V_X - \Delta V_P}{r_O},\\
\Delta I_2 &= g_m(-\Delta V_{in} - \Delta V_P) + \frac{\Delta V_Y - \Delta V_P}{r_O},
\end{aligned}
$$

负载给出 $\Delta V_X = -R_D\Delta I_1$，$\Delta V_Y = -R_D\Delta I_2$，因此在尾电流恒定时

$$\Delta V_X + \Delta V_Y = -R_D(\Delta I_1 + \Delta I_2) = 0 .$$

把两个器件方程相加：

$$
\begin{aligned}
\underbrace{\Delta I_1 + \Delta I_2}_{0} &= -2g_m\Delta V_P + \frac{\overbrace{\Delta V_X + \Delta V_Y}^{0} - 2\Delta V_P}{r_O}\\
0 &= -2\Delta V_P\left(g_m + \frac{1}{r_O}\right)\quad\Longrightarrow\quad\Delta V_P = 0 .
\end{aligned}
$$

### 第 5 步 — 为什么负载相等很重要

若 $R_{D1} \ne R_{D2}$，戴维南电阻 $R_{T1} = (R_{D1} + r_O)/(1 + g_mr_O)$ 与 $R_{T2} = (R_{D2} + r_O)/(1 + g_mr_O)$ 不相等，且

$$v_P = \frac{V_{T1}/R_{T1} + V_{T2}/R_{T2}}{1/R_{T1} + 1/R_{T2}} \ne 0 \quad\text{for } V_{T1} = -V_{T2}.$$

负载较大的一边漏极摆幅也较大，因此其 $r_O$ 修正较大，两边的修正不再相互抵消。当 $r_O = \infty$ 时，负载不出现在电流方程中，无论负载如何结论都成立；当 $r_O$ 有限时，正是**负载相等**使 $V_P$ 保持不变。

### 结果

$V_P$ 仍然不变，因为电路仍然是**对称且线性的**：相同的器件接相同的负载，在大小相等、方向相反的输入驱动下，各处的变化也大小相等、方向相反，而位于对称轴上的公共节点 P 只能保持不动。

- **直观理解。** 当 $I_1$ 增加 $\delta$ 时，$D_1$ 的漏极下降 $R_D\delta$，这通过 $r_O$ 使 $I_1$ 略微减小。另一边 $I_2$ 减小 $\delta$，其漏极上升 $R_D\delta$，使 $I_2$ 略微增大。这两项修正大小相等、方向相反，因此无需 $V_P$ 的任何变化，$I_1 + I_2$ 就保持为 $I_T$。
- **戴维南观点。** 从 P 看进去，每半边都是电压源 $V_T = \dfrac{g_mr_O}{1 + g_mr_O}V_{in}$ 串联电阻 $R_T = \dfrac{R_D + r_O}{1 + g_mr_O}$。负载相等时，两个 $R_T$ 相等，两个 $V_T$ 的变化大小相等、方向相反，因此 $V_P$ 不变。
- **负载相等是关键：** 负载不等时，两个 $R_T$ 不同，P 就会移动。

**常见错误。** 认为一旦 $\lambda \ne 0$，由于漏极电压会影响电流，$V_P$ 就必然移动。漏极电压确实会影响电流，但影响是反对称的，因此这些影响在 $I_1 + I_2$ 中以及在 P 点相互抵消。

**常见错误。** 按照两个漏极朝**相同**方向变化来论证，而这是共模（common-mode）情形。对于差分输入，两个漏极朝**相反**方向变化，正是这一点使 $r_O$ 修正相互抵消。

**常见错误。** 忽略负载的作用。这一论证需要从 P 看进去的戴维南电阻相等；在负载不等且 $r_O$ 有限时，抵消不再成立，P 就会移动。
