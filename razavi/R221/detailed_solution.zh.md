# 详细步骤 - R221

**思路。** 在偏置点附近把每个器件线性化（$\Delta I = g_m\Delta V$），对节点 P 列 KCL 方程并计入尾电阻的电流（$\Delta V_P/R_T$），解出 $\Delta V_P$；对差分输入，它等于零。然后用戴维南等效和大信号（large-signal）验证来确认这一结论。

### 第 1 步 — 器件模型与偏置点

两个相同的器件满足 $I_1 = f(V_1)$ 和 $I_2 = f(V_2)$，函数 $f$ 相同，其中 $V_{1,2}$ 为控制电压（栅源电压）；由于 $\lambda = 0$，上端电压不起作用（对 MOSFET 而言，$f(V) = \tfrac12\mu_nC_{ox}\tfrac{W}{L}(V - V_{TH})^2$）。由图可知，

$$V_1 = V_{in1} - V_P, \qquad V_2 = V_{in2} - V_P .$$

变化之前，$V_{in1} = V_{in2} = V_0$，因此 $V_1 = V_0 - V_P = V_2$，两管电流相等，$I_1 = I_2 = I_0$，而 P 点的 KCL 确定了偏置：

$$2I_0 = \frac{V_P}{R_T} .$$

两个器件位于同一条曲线的同一点上，因此它们的**跨导相同**

$$g_m = \frac{dI}{dV}\bigg|_{V = V_0 - V_P}$$

（对 MOSFET 而言，$g_m = \sqrt{2\mu_nC_{ox}(W/L)I_0}$）。这种相等关系源于电路的对称性，正是证明所需要的。线性化后（即“电路保持线性”）：

$$
\begin{aligned}
\Delta V_1 &= \Delta V_{in1} - \Delta V_P, & \Delta I_1 &= g_m\,\Delta V_1,\\
\Delta V_2 &= \Delta V_{in2} - \Delta V_P, & \Delta I_2 &= g_m\,\Delta V_2 .
\end{aligned}
$$

### 第 2 步 — 小信号电路与 P 点的 KCL

每个器件都是一个电流源 $g_m\Delta V_1$（或 $g_m\Delta V_2$），从其上端（可视为交流地）流入 P。与理想尾电流源不同，$R_T$ **不是**开路：它的电流随 $V_P$ 变化。

<!-- diagram: diagram-01.cir -->

对 P 点列 KCL，$I_1 + I_2 = V_P/R_T$，对变化量有

$$\Delta I_1 + \Delta I_2 = \frac{\Delta V_P}{R_T} .$$

若采用理想电流源，右边应为零；而这里它不为零，这正是需要重新证明这一结论的原因。

### 第 3 步 — 求解 $\Delta V_P$

代入线性化后的电流：

$$g_m(\Delta V_{in1} - \Delta V_P) + g_m(\Delta V_{in2} - \Delta V_P) = \frac{\Delta V_P}{R_T} ,$$

$$g_m(\Delta V_{in1} + \Delta V_{in2}) - 2g_m\Delta V_P = \frac{\Delta V_P}{R_T} \quad\Longrightarrow\quad g_m(\Delta V_{in1} + \Delta V_{in2}) = \Delta V_P\left(2g_m + \frac{1}{R_T}\right) .$$

括号内的量为正，因此

$$\Delta V_P = \frac{g_m}{2g_m + 1/R_T}\,(\Delta V_{in1} + \Delta V_{in2}) = \frac{g_mR_T}{1 + 2g_mR_T}\,(\Delta V_{in1} + \Delta V_{in2}) ,$$

该式对任意小的输入变化都成立，而不仅限于差分变化。

### 第 4 步 — 差分输入：$\Delta V_P = 0$

当 $\Delta V_{in1} = +\Delta V_{in}$、$\Delta V_{in2} = -\Delta V_{in}$ 时，

$$\Delta V_{in1} + \Delta V_{in2} = 0 \quad\Longrightarrow\quad \boxed{\Delta V_P = 0} ,$$

由于 $2g_m + 1/R_T \neq 0$，这是**唯一**解。于是

$$
\begin{aligned}
\Delta V_1 &= \Delta V_{in1} - 0 = +\Delta V_{in}, & \Delta I_1 &= +g_m\Delta V_{in},\\
\Delta V_2 &= \Delta V_{in2} - 0 = -\Delta V_{in}, & \Delta I_2 &= -g_m\Delta V_{in},\\
\Delta I_{R_T} &= \Delta V_P/R_T = 0 . & &
\end{aligned}
$$

可见 $\Delta I_1 + \Delta I_2 = 0$ 是解出来的，而不是假设的：$D_1$ 增加的电流恰好等于 $D_2$ 减少的电流，因此 $R_T$ 中的电流及其两端电压都不变。对于这种输入，电阻的表现与电流源完全一样。

### 第 5 步 — 戴维南等效的观点

由于 $\Delta I_1 = (\Delta V_{in1} - \Delta V_P)/(1/g_m)$，从 P 看进去，每半边电路都是其输入电压源串联 $1/g_m$。两半边电路并联后等效为

$$V_{eq} = \frac{\Delta V_{in1} + \Delta V_{in2}}{2}, \qquad R_{eq} = \frac{1}{g_m}\Big\|\frac{1}{g_m} = \frac{1}{2g_m} ,$$

再接上负载 $R_T$，

$$\Delta V_P = V_{eq}\frac{R_T}{R_T + \frac{1}{2g_m}} = \frac{\Delta V_{in1} + \Delta V_{in2}}{2}\cdot\frac{2g_mR_T}{1 + 2g_mR_T} = \frac{g_mR_T}{1 + 2g_mR_T}(\Delta V_{in1} + \Delta V_{in2}),$$

与第 3 步的结果相同。对差分输入，$V_{eq} = 0$，因此**无论** P 与地之间接什么负载，P 点的变化都为零：电流源、电阻 $R_T$ 或其他任何元件都是如此。

### 第 6 步 — 大信号验证（为什么要求“电路保持线性”）

令 $V_c = V_0 - V_P$，则 $V_1 = V_c + \Delta V_{in}$，$V_2 = V_c - \Delta V_{in}$，于是 P 点的 KCL 方程为

$$f(V_c + \Delta V_{in}) + f(V_c - \Delta V_{in}) = \frac{V_P}{R_T} .$$

左边是 $\Delta V_{in}$ 的偶函数，因此 $V_P$ 也是：它**没有线性项**。对平方律（square law）器件，左边等于 $\mu_nC_{ox}\frac{W}{L}\left[(V_c - V_{TH})^2 + \Delta V_{in}^2\right]$，因此 $V_P$ 的变化只与 $\Delta V_{in}^2$ 成正比；这是二阶效应，在线性（小信号）范围内可以忽略。

### 第 7 步 — 对比：共模变化确实会使 P 点移动

当 $\Delta V_{in1} = \Delta V_{in2} = \Delta V_{CM}$ 时，由第 3 步得

$$\Delta V_P = \frac{2g_mR_T}{1 + 2g_mR_T}\,\Delta V_{CM} ,$$

增益略小于 1（对理想电流源，即 $R_T \to \infty$，增益恰为 1）。电阻尾改变了差分对的共模特性，但不改变节点 P 的差分特性。

### 结果

采用电阻尾时，P 点的 KCL 方程 $\Delta I_1 + \Delta I_2 = \Delta V_P/R_T$ 与 $\Delta I_{1,2} = g_m(\Delta V_{in1,2} - \Delta V_P)$ 联立，得

$$\Delta V_P\left(2g_m + \frac{1}{R_T}\right) = g_m(\Delta V_{in1} + \Delta V_{in2}) .$$

当 $\Delta V_{in1} = -\Delta V_{in2} = \Delta V_{in}$ 时右边为零，因此 **$\Delta V_P = 0$**，进而 $\Delta V_1 = \Delta V_{in}$，$\Delta V_2 = -\Delta V_{in}$，$\Delta I_1 = -\Delta I_2 = g_m\Delta V_{in}$。证明要求小信号（线性工作）和对称性（器件相同、偏置电流相等，因而 $g_m$ 相等）。作为对比，共模变化会使 P 点移动 $\frac{2g_mR_T}{1 + 2g_mR_T}\Delta V_{CM}$。

**常见错误。** 以 $\Delta I_1 + \Delta I_2 = 0$ 作为证明的出发点。这是电流源的定义性质；对电阻而言，这等于把待证的结论当成了前提。正确的 KCL 方程是 $\Delta I_1 + \Delta I_2 = \Delta V_P/R_T$，电流之和之所以为零，**恰恰是因为** $\Delta V_P = 0$。

**常见错误。** 仅用文字描述对称性，却始终没有说明两个器件的 $g_m$ 相等。如果两管跨导不同，第 3 步的方程就变为 $\Delta V_P(g_{m1} + g_{m2} + 1/R_T) = g_{m1}\Delta V_{in1} + g_{m2}\Delta V_{in2}$，对差分输入它不为零。
