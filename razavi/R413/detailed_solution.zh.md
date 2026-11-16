# 详细步骤 - R413

**思路。** 电路中有两条反馈通路：$R_{F1}$（从输出端到 $M_1$ 的源极）构成全局的电压串联反馈环路，$R_{F2}$（从输出端到 $M_2$ 的栅极）构成围绕 $M_2$ 的局部电压并联反馈环路。由于 $\lambda = \gamma = 0$，用三个节点方程做精确节点分析是最可靠的方法；我们先求出一般解，再代入数值。随后的二端口反馈估算说明了增益为何远低于 $1/\beta$。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 的漏极记为节点 A，源极记为节点 S。$V_{DD}$ 为交流地，因此 $R_{D1}$ 和 $R_{D2}$ 都接地。$M_1$ 是从 A 流向 S 的受控电流 $g(v_{in} - v_S)$，$M_2$ 是从输出端流向地的电流 $g\,v_A$，其中 $g = g_{m1} = g_{m2} = 1/(200\ \Omega) = 5$ mS。所有电阻都等于 $R = 2\ \mathrm{k\Omega}$，且

$$k = gR = (5\ \mathrm{mS})(2\ \mathrm{k\Omega}) = 10 .$$

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 节点方程

按“流出节点的电流之和 = 0”列基尔霍夫电流定律（KCL）方程，并乘以 $R$：

**节点 A**（电流经 $R_{D1}$、$R_{F2}$ 流出，并向下流过 $M_1$）：

$$\frac{v_A}{R} + \frac{v_A - v_{out}}{R} + g(v_{in} - v_S) = 0\ \Longrightarrow\ 2v_A - v_{out} + kv_{in} - kv_S = 0 .$$

**节点 S**（来自 $M_1$ 的电流经 $R_{S1}$ 和 $R_{F1}$ 流出）：

$$g(v_{in} - v_S) = \frac{v_S}{R} + \frac{v_S - v_{out}}{R}\ \Longrightarrow\ kv_{in} + v_{out} = (k + 2)\,v_S .$$

**输出节点**（电流经 $M_2$、$R_{D2}$、$R_{F2}$ 和 $R_{F1}$ 流出）：

$$gv_A + \frac{v_{out}}{R} + \frac{v_{out} - v_A}{R} + \frac{v_{out} - v_S}{R} = 0\ \Longrightarrow\ (k - 1)\,v_A + 3v_{out} - v_S = 0 .$$

### 第 3 步 — 求解增益

由节点 S 得：

$$v_S = \frac{kv_{in} + v_{out}}{k + 2} .$$

由节点 A 得 $v_A = \tfrac12\left(v_{out} - kv_{in} + kv_S\right)$；代入 $v_S$：

$$
\begin{aligned}
v_A &= \frac12\left[v_{out} - kv_{in} + \frac{k(kv_{in} + v_{out})}{k + 2}\right]\\
&= \frac{(k + 2)v_{out} - k(k + 2)v_{in} + k^2v_{in} + kv_{out}}{2(k + 2)}\\
&= \frac{(2k + 2)v_{out} - 2kv_{in}}{2(k + 2)} = \frac{(k + 1)v_{out} - kv_{in}}{k + 2} .
\end{aligned}
$$

对输出节点方程代入 $v_A$、$v_S$，并乘以 $(k + 2)$：

$$
\begin{aligned}
(k - 1)\big[(k + 1)v_{out} - kv_{in}\big] + 3(k + 2)v_{out} - (kv_{in} + v_{out}) &= 0\\
v_{out}\big[(k^2 - 1) + 3k + 6 - 1\big] &= v_{in}\big[k(k - 1) + k\big]\\
v_{out}\,(k^2 + 3k + 4) &= v_{in}\,k^2 .
\end{aligned}
$$

$$A_v = \frac{v_{out}}{v_{in}} = \frac{k^2}{k^2 + 3k + 4} = \frac{100}{100 + 30 + 4} = \frac{100}{134} = 0.746 \quad (k = 10).$$

按单位输入电压计，$v_S = (10 + 0.746)/12 = 0.896$，$v_A = (11\times0.746 - 10)/12 = -0.149$。

### 第 4 步 — 输出阻抗

令 $v_{in} = 0$，向输出端注入测试电流 $I_X$。由节点 A 和 S 的方程得

$$
\begin{aligned}
v_S &= \frac{v_{out}}{k + 2},\\
v_A &= \frac{(k + 1)\,v_{out}}{k + 2},
\end{aligned}
$$

而在输出节点方程中，右边的零换成 $I_XR$：

$$
\begin{aligned}
I_XR &= (k - 1)\,v_A + 3v_{out} - v_S\\
&= v_{out}\left[\frac{(k - 1)(k + 1)}{k + 2} + 3 - \frac{1}{k + 2}\right]\\
&= v_{out}\,\frac{k^2 - 1 + 3k + 6 - 1}{k + 2} = v_{out}\,\frac{k^2 + 3k + 4}{k + 2} .
\end{aligned}
$$

$$R_{out} = \frac{v_{out}}{I_X} = \frac{R\,(k + 2)}{k^2 + 3k + 4} = \frac{(2\ \mathrm{k\Omega})(12)}{134} = \frac{24\ \mathrm{k\Omega}}{134} = 179\ \Omega .$$

### 第 5 步 — 反馈解释：增益为何只有 0.75

$R_{F1}$ 和 $R_{S1}$ 把 $V_{out}$ 的 $\beta = R_{S1}/(R_{S1} + R_{F1}) = 0.5$ 送回 $M_1$ 的源极；由于前向通路是同相的，这个环路为负反馈，若环路增益很大，增益将为 $1/\beta = 2$。环路增益的二端口估算如下：

- **输入一侧的负载效应：** $M_1$ 由 $R_{S1}\parallel R_{F1} = 1\ \mathrm{k\Omega}$ 提供源极负反馈：
$$G_{m1} = \frac{g}{1 + g(1\ \mathrm{k\Omega})} = \frac{5\ \mathrm{mS}}{6} = 0.833\ \mathrm{mS}.$$
- **节点 A：** 除 $R_{D1}$ 外，它还通过 $R_{F2}$ 看到 $M_2$ 级。该级的输出负载为 $R_L = R_{D2}\parallel(R_{F1} + R_{S1}) = 2\parallel4 = 1.33\ \mathrm{k\Omega}$，因此从 $R_{F2}$ 看进去的电阻因密勒效应而减小：
$$R_{in,2} = \frac{R_{F2} + R_L}{1 + gR_L} = \frac{3.33\ \mathrm{k\Omega}}{1 + 6.67} = 0.435\ \mathrm{k\Omega},\qquad R_A = 2\parallel0.435 = 0.357\ \mathrm{k\Omega}.$$
- **从 A 到输出端的增益：** 电流 $gv_A$ 减去前馈（feedforward）电流 $v_A/R_{F2}$，流入 $R_L\parallel R_{F2} = 0.8\ \mathrm{k\Omega}$：
$$\frac{v_{out}}{v_A} = -\left(g - \frac{1}{R_{F2}}\right)(R_L\parallel R_{F2}) = -(4.5\ \mathrm{mS})(0.8\ \mathrm{k\Omega}) = -3.6 .$$
- **开环增益（open-loop gain）与环路增益：**
$$A_{open} = (0.833\ \mathrm{mS})(0.357\ \mathrm{k\Omega})(3.6) = 1.07,\qquad T = \beta A_{open} = 0.54 ,$$
因此 $A_v \approx 1.07/1.54 = 0.70$。
- **输出电阻（output resistance）。** 在开环电路中，输出端的测试电压 $v$ 经 $R_{F2}$–$R_{D1}$ 分压后在 A 点产生 $v/2$，因此 $M_2$ 吸收 $g\,v/2 = (2.5\ \mathrm{mS})v$，分压器吸收 $v/(4\ \mathrm{k\Omega}) = (0.25\ \mathrm{mS})v$。再加上 $R_L$（$0.75$ mS），开环输出电阻为 $1/(0.75 + 2.5 + 0.25)\ \mathrm{mS} = 286\ \Omega$，因此 $R_{out} \approx 286/1.54 = 186\ \Omega$。

这些估算值（0.70，186 Ω）与精确值 0.746 和 179 Ω 很接近。环路增益只有 0.5 左右，是因为 $R_{F2}$ 使 $M_2$ 级在 A 点呈现很低的电阻（≈ 0.44 kΩ），大大压低了第一级的增益。

### 结果

$$A_v = \frac{(g_mR)^2}{(g_mR)^2 + 3g_mR + 4} = \frac{100}{134} \approx +0.746,\qquad R_{out} = \frac{R\,(g_mR + 2)}{(g_mR)^2 + 3g_mR + 4} = \frac{24\ \mathrm{k\Omega}}{134} \approx 179\ \Omega,$$

其中 $g_mR = 10$。增益为同相，且远低于 $1/\beta = 2$，因为经 $R_{F2}$ 的局部反馈对节点 A 构成很重的负载，使全局环路增益只剩 0.5 左右。

**常见错误。** 给出 $A_v \approx 2 = 1 + R_{F1}/R_{S1}$。这一结果假设环路增益很大，而这里环路增益只有 0.5 左右。

**常见错误。** 忽略 $R_{F2}$，或者把它接到错误的节点上。它接在输出端与 $M_2$ 的栅极（节点 A）之间，大大降低了该处的电阻，这正是增益很小的主要原因。

**常见错误。** 得到反相增益。两个共源级级联后是同相的；反馈只会减小增益的幅值。
