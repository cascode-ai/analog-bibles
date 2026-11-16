# 详细步骤 - R402

**思路。** 从 $I_{D2}$ 倒推：由 $M_2$ 的平方律（square law）确定 $V_X$，再由 $R_{D1}$ 确定 $I_{D1}$，然后对电阻网络列基尔霍夫电流定律（KCL）方程，确定 $M_1$ 的源极电压，进而得到 $V_{in}$。接着检验这个工作点在物理上是否可能，并用电压串联反馈（series–shunt feedback）分析计算小信号增益，再用精确节点分析加以验证。

### 第 1 步 — $M_2$ 的栅极电压与 $M_1$ 的偏置电流

把 $M_1$ 的源极记为节点 S。$W/L = 50/0.5 = 100$，因此：

$$
\begin{aligned}
\mu_nC_{ox}\frac WL &= (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
\mu_pC_{ox}\frac WL &= (38.4\ \mu\mathrm{A/V^2})(100) = 3.84\ \mathrm{mA/V^2}.
\end{aligned}
$$

$M_2$ 工作在饱和区（第 2 步将加以验证），由 $I_{D2} = \frac12\mu_pC_{ox}\frac WL(|V_{GS2}| - |V_{TH2}|)^2$ 得

$$
\begin{aligned}
|V_{GS2}| - |V_{TH2}| &= \sqrt{\frac{2I_{D2}}{\mu_pC_{ox}(W/L)}} = \sqrt{\frac{2(1\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = \sqrt{0.5208\ \mathrm{V^2}} = 0.722\ \mathrm{V},\\
|V_{GS2}| &= 0.8\ \mathrm{V} + 0.722\ \mathrm{V} = 1.522\ \mathrm{V},\\
V_X &= V_{DD} - |V_{GS2}| = 3\ \mathrm{V} - 1.522\ \mathrm{V} = 1.478\ \mathrm{V}.
\end{aligned}
$$

$M_2$ 的栅极不取电流，因此 $R_{D1}$ 中的电流全部流入 $M_1$：

$$I_{D1} = \frac{V_{DD} - V_X}{R_{D1}} = \frac{3\ \mathrm{V} - 1.478\ \mathrm{V}}{2\ \mathrm{k\Omega}} = \frac{1.522\ \mathrm{V}}{2\ \mathrm{k\Omega}} = 0.761\ \mathrm{mA}.$$

### 第 2 步 — 电阻网络的直流电压

$I_{D2} = 1$ mA 流入 $V_{out}$ 节点，$I_{D1} = 0.761$ mA 流入节点 S。设 $I_F$ 为 $R_F$ 中从 $V_{out}$ 流向 S 的电流。以 mA、kΩ 和 V 为单位：

**$V_{out}$ 节点的 KCL**（$I_{D2}$ 在 $R_{D2}$ 和 $R_F$ 之间分流）：

$$
\begin{aligned}
1 &= \frac{V_{out}}{2} + \frac{V_{out} - V_S}{2}\\
2 &= 2V_{out} - V_S .
\end{aligned}
$$

**节点 S 的 KCL**（$I_{D1}$ 和 $I_F$ 都经 $R_S$ 流出）：

$$
\begin{aligned}
0.761 + \frac{V_{out} - V_S}{2} &= \frac{V_S}{2}\\
1.522 + V_{out} - V_S &= V_S\\
V_{out} &= 2V_S - 1.522 .
\end{aligned}
$$

**求解：**

$$
\begin{aligned}
2 &= 2(2V_S - 1.522) - V_S = 3V_S - 3.044\\
V_S &= \frac{5.044}{3} = 1.681\ \mathrm{V},\\
V_{out} &= 2(1.681) - 1.522 = 1.841\ \mathrm{V},\\
I_F &= \frac{V_{out} - V_S}{R_F} = \frac{0.160\ \mathrm{V}}{2\ \mathrm{k\Omega}} = 0.080\ \mathrm{mA}.
\end{aligned}
$$

$|V_{DS2}| = V_{DD} - V_{out} = 3 - 1.841 = 1.159\ \mathrm{V} > 0.722\ \mathrm{V}$，因此 $M_2$ 工作在饱和区。

### 第 3 步 — 形式上求得的 $V_{in}$

$$
\begin{aligned}
V_{GS1} - V_{TH} &= \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.761\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.1136\ \mathrm{V^2}} = 0.337\ \mathrm{V},\\
V_{GS1} &= 0.7\ \mathrm{V} + 0.337\ \mathrm{V} = 1.037\ \mathrm{V},\\
V_{in} &= V_S + V_{GS1} = 1.681\ \mathrm{V} + 1.037\ \mathrm{V} = 2.72\ \mathrm{V}.
\end{aligned}
$$

### 第 4 步 — 这个工作点可能存在吗？

$$V_{DS1} = V_X - V_S = 1.478\ \mathrm{V} - 1.681\ \mathrm{V} = -0.20\ \mathrm{V}.$$

$M_1$ 的“漏极”电位**低于**其“源极”，因此 $M_1$ 不可能从 X 向下传导 0.761 mA 的电流到 S；要工作在饱和区，甚至还需要 $V_{DS1} \ge V_{GS1} - V_{TH} = 0.337$ V。因此，第 1–3 步描述的是一个**不自洽的偏置点**：在这些电阻值下，任何 $V_{in}$ 都无法建立 $I_{D2} = 1$ mA。

**$I_{D2}$ 最大能有多大？** 继续升高 $V_{in}$ 只会使 $M_1$ 更深地进入线性区（triode region），趋向于 X 与 S 之间短路（$V_X \to V_S$）。对于一般的 $I_1 = I_{D1}$ 和 $I_2 = I_{D2}$（以 mA 为单位），由第 2 步的两个 KCL 方程得 $V_S = (2I_2 + 4I_1)/3$，而 $V_X = 3 - 2I_1$，$I_2 = 1.92\,(2I_1 - 0.8)^2$。令 $V_X = V_S$，得 $I_1 \approx 0.73$ mA，$I_2 \approx 0.84$ mA，因此即使 $M_1$ 完全导通，$I_{D2}$ 也不能超过约 0.84 mA。若要求 $M_1$ 保持饱和（$V_X - V_S \ge V_{GS1} - V_{TH}$），则上限约为 0.61 mA，此时 $V_{in} \approx 2.34$ V。

按照题目要求，下面仍用题给的电流**形式上**计算小信号增益。

### 第 5 步 — 小信号参数

由于 $\lambda = \gamma = 0$，不存在 $r_O$ 和体效应（body effect）；利用 $g_m = 2I_D/(V_{GS} - V_{TH})$ 得：

$$
\begin{aligned}
g_{m1} &= \frac{2(0.761\ \mathrm{mA})}{0.337\ \mathrm{V}} = 4.52\ \mathrm{mS}, \qquad \frac{1}{g_{m1}} = 221\ \Omega,\\
g_{m2} &= \frac{2(1\ \mathrm{mA})}{0.722\ \mathrm{V}} = 2.77\ \mathrm{mS}.
\end{aligned}
$$

### 第 6 步 — 用反馈分析求增益（电压串联反馈）

$R_F$–$R_S$ 检测 $V_{out}$，并把 $v_S$ 送回 $M_1$ 的源极，在那里与 $v_{in}$ 相减（$v_{GS1} = v_{in} - v_S$）：这是**电压串联**反馈。前向通路包含两个反相级，因此整体是同相的，环路为负反馈。

**反馈网络的负载效应。**

- 在节点 S 处（输出端对地短路）：$R_S\parallel R_F = 2\parallel2 = 1\ \mathrm{k\Omega}$。
- 在输出端（节点 S 开路）：$R_F + R_S = 4\ \mathrm{k\Omega}$。

<!-- diagram: diagram-01.cir -->

开环电路为：带 1 kΩ 源极负反馈（source degeneration）电阻、以 $R_{D1}$ 为负载的 $M_1$，驱动 $M_2$，后者的漏极负载为 $R_{D2}$ 与 4 kΩ 的并联。

**开环增益（open-loop gain）。** 第 1 级是带源极负反馈的共源级（common-source stage）：

$$A_1 = -\frac{R_{D1}}{1/g_{m1} + R_S\parallel R_F} = -\frac{2000\ \Omega}{221\ \Omega + 1000\ \Omega} = -1.637 .$$

第 2 级是 PMOS 共源级：

$$
\begin{aligned}
R_{L2} &= R_{D2}\parallel(R_F + R_S) = 2\parallel4 = 1.333\ \mathrm{k\Omega},\\
A_2 &= -g_{m2}R_{L2} = -(2.77\ \mathrm{mS})(1.333\ \mathrm{k\Omega}) = -3.695 ,\\
A_{open} &= A_1A_2 = (-1.637)(-3.695) = 6.05 .
\end{aligned}
$$

**反馈系数（feedback factor）**，即 S 开路时输出端每伏电压返回到 S 的电压：

$$\beta = \frac{R_S}{R_S + R_F} = \frac{2}{2 + 2} = 0.5 .$$

**环路增益与闭环增益（closed-loop gain）：**

$$
\begin{aligned}
T &= \beta A_{open} = 0.5 \times 6.05 = 3.03,\\
A_v &= \frac{A_{open}}{1 + T} = \frac{6.05}{4.03} = 1.50 .
\end{aligned}
$$

增益为正，且远低于理想值 $1/\beta = 2$，因为环路增益只有 3 左右。

### 第 7 步 — 用精确节点分析验证

$M_1$ 是从 X 流向 S 的电流 $g_{m1}(v_{in} - v_S)$，$M_2$ 向输出节点注入 $-g_{m2}v_X$。单位：mS、kΩ。

**节点 X 的 KCL：** $v_X/R_{D1} + g_{m1}(v_{in} - v_S) = 0$，因此 $v_X = -g_{m1}R_{D1}(v_{in} - v_S)$，$M_2$ 向输出端注入 $g_{m1}g_{m2}R_{D1}(v_{in} - v_S) = 25.03\,(v_{in} - v_S)$。

**节点 S 的 KCL：**

$$
\begin{aligned}
4.516\,(v_{in} - v_S) + \frac{v_{out} - v_S}{2} &= \frac{v_S}{2}\\
4.516\,v_{in} + 0.5\,v_{out} &= 5.516\,v_S\\
v_S &= 0.8187\,v_{in} + 0.0907\,v_{out} .
\end{aligned}
$$

**输出节点的 KCL：**

$$
\begin{aligned}
25.03\,(v_{in} - v_S) &= \frac{v_{out}}{2} + \frac{v_{out} - v_S}{2} = v_{out} - 0.5\,v_S\\
25.03\,v_{in} &= v_{out} + 24.53\,v_S .
\end{aligned}
$$

**代入 $v_S$：**

$$
\begin{aligned}
25.03\,v_{in} &= v_{out} + 24.53\,(0.8187\,v_{in} + 0.0907\,v_{out}) = 3.224\,v_{out} + 20.08\,v_{in}\\
4.95\,v_{in} &= 3.224\,v_{out}\\
\frac{v_{out}}{v_{in}} &= 1.53 .
\end{aligned}
$$

精确值 1.53 与二端口分析得到的 1.50 很接近；两者的差别来自 $M_1$ 的源极电流经 $R_F$ 前馈（feedforward）到输出端的信号，二端口近似忽略了这一部分。

### 结果

- **$M_1$ 的偏置电流：** $I_{D1} = (V_{DD} - V_X)/R_{D1} \approx 0.76$ mA，其中 $V_X = 1.48$ V 由 $|V_{GS2}| = 1.52$ V 决定。
- **所需的 $V_{in}$（形式解）：** $V_{in} = V_S + V_{GS1} = 1.68 + 1.04 \approx 2.72$ V。然而，这使 $M_1$ 的源极（1.68 V）比其漏极（1.48 V）**高出**约 0.2 V，这对于导通的 NMOS 是不可能的。在这些电阻值下无法建立 $I_{D2} = 1$ mA：$I_{D2}$ 不能超过约 0.84 mA；若要求 $M_1$ 饱和，则只能达到约 0.61 mA。
- **增益（形式解，按题给电流）：** $g_{m1} = 4.52$ mS，$g_{m2} = 2.77$ mS，$A_{open} = 6.05$，$\beta = 0.5$，$T = 3.03$，因此
$$A_v = \frac{V_{out}}{V_{in}} \approx +1.50\quad(\text{feedback analysis}),\qquad 1.53\ (\text{exact nodal analysis}).$$

**常见错误。** 假设 $I_{D1} = I_{D2}$。$I_{D1}$ 由 $R_{D1}$ 上的压降决定，而该压降必须等于 $|V_{GS2}|$：$I_{D1} = 1.522\ \mathrm{V}/2\ \mathrm{k\Omega} = 0.76$ mA。

**常见错误。** 认为增益恰好等于 $1/\beta = 2$，或者认为增益为负。环路增益只有 3 左右，因此 $A_v = A_{open}/(1 + T) \approx 1.5$；两个反相级使增益为正。

**常见错误。** 求出 $V_{in} = 2.72$ V 就停下来，不检查各端电压：$V_{DS1} < 0$ 说明题目要求的工作点并不存在。
