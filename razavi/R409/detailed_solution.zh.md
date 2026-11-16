# 详细步骤 - R409

**思路。** 先求偏置点，因为它决定 $V_{SB1}$，从而决定体效应。然后把电路看作电压串联反馈放大器：$R_F$–$R_{S1}$ 对 $V_{out}$ 采样，并把其一半送回 $M_1$ 的源极。计算计入负载效应的开环增益、环路增益（包括 $g_{mb1}$ 的一个微妙作用）、闭环增益（closed-loop gain）和输出电阻，最后用精确节点分析验证这两个结果。

### 第 1 步 — 偏置点

把 $M_1$ 的源极记为节点 S。$M_1$ 向 S 注入 0.5 mA，$M_3$ 向 $V_{out}$ 注入 0.5 mA。对这两个节点列基尔霍夫电流定律（KCL）方程（单位为 mA、kΩ、V）：

$$
\begin{aligned}
\text{at } V_{out}:&\quad 0.5 = \frac{V_{out}}{3} + \frac{V_{out} - V_S}{3}\ \Longrightarrow\ 1.5 = 2V_{out} - V_S,\\
\text{at S}:&\quad 0.5 + \frac{V_{out} - V_S}{3} = \frac{V_S}{3}\ \Longrightarrow\ V_{out} = 2V_S - 1.5 .
\end{aligned}
$$

代入得 $1.5 = 3V_S - 3$，因此 $V_S = 1.5$ V，$V_{out} = 1.5$ V。$R_F$ 中没有直流电流，且

$$V_{SB1} = 1.5\ \mathrm{V}.$$

### 第 2 步 — 小信号参数

所有器件的电流均为 $I_D = 0.5$ mA，且 $W/L = 100$：

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{S} = 3.66\ \mathrm{mS},\\
g_{m3} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{3.84\times10^{-6}}\ \mathrm{S} = 1.96\ \mathrm{mS}.
\end{aligned}
$$

利用 $g_{mb} = \eta g_m$，$\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$：

$$
\begin{aligned}
\eta &= \frac{0.45}{2\sqrt{0.9 + 1.5}} = \frac{0.45}{2(1.549)} = 0.145,\\
g_{mb1} &= 0.145\times3.66\ \mathrm{mS} = 0.53\ \mathrm{mS}.
\end{aligned}
$$

$$
r_{O1} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\qquad
r_{O2} = r_{O3} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega}.
$$

### 第 3 步 — 反馈拓扑与计入负载效应的开环电路

前向通路由两个共源级（common-source stage）组成（$M_1$ 到 X，$M_3$ 到 $V_{out}$），因此是同相的。$R_F$–$R_{S1}$ 检测输出**电压**，并把一个电压送回 $M_1$ 的源极，在那里与输入相减（$v_{GS1} = v_{in} - v_S$）：这是**电压串联**负反馈，其中

$$\beta = \frac{R_{S1}}{R_{S1} + R_F} = \frac{3}{3 + 3} = 0.5 .$$

按二端口规则计入负载效应：

- **输入端**（输出端短路）：$M_1$ 的源极看到 $R_{S1}\parallel R_F = 1.5\ \mathrm{k\Omega}$。
- **输出端**（节点 S 开路）：输出端看到 $R_F + R_{S1} = 6\ \mathrm{k\Omega}$。

开环电路为：带源极负反馈电阻 $R_{deg} = 1.5\ \mathrm{k\Omega}$、在 X 处以 $r_{O2}$ 为负载的 $M_1$，驱动 $M_3$，后者的漏极看到 $R_L = R_{D2}\parallel6\ \mathrm{k\Omega}\parallel r_{O3}$。

### 第 4 步 — 开环增益

**第 1 级。** 计入体效应和有限 $r_O$ 时，带源极负反馈的这一级的跨导（transconductance）为：

$$G_{m1} = \frac{g_{m1}}{1 + (g_{m1} + g_{mb1})R_{deg} + R_{deg}/r_{O1}} = \frac{3.66\ \mathrm{mS}}{1 + (4.19\ \mathrm{mS})(1.5\ \mathrm{k\Omega}) + 0.075} = \frac{3.66}{7.36}\ \mathrm{mS} = 0.497\ \mathrm{mS}.$$

从 $M_1$ 的漏极向下看进去：

$$R_{d1} = \big[1 + (g_{m1} + g_{mb1})R_{deg}\big]r_{O1} + R_{deg} = (7.29)(20\ \mathrm{k\Omega}) + 1.5\ \mathrm{k\Omega} = 147\ \mathrm{k\Omega}.$$

$$
\begin{aligned}
R_X &= r_{O2}\parallel R_{d1} = \frac{10\times147}{10 + 147}\ \mathrm{k\Omega} = 9.36\ \mathrm{k\Omega},\\
A_1 &= -G_{m1}R_X = -(0.497\ \mathrm{mS})(9.36\ \mathrm{k\Omega}) = -4.66 .
\end{aligned}
$$

**第 2 级。**

$$
\begin{aligned}
R_L &= 3\ \mathrm{k\Omega}\parallel6\ \mathrm{k\Omega}\parallel10\ \mathrm{k\Omega} = \frac{1}{1/3 + 1/6 + 1/10}\ \mathrm{k\Omega} = \frac{1}{0.6}\ \mathrm{k\Omega} = 1.67\ \mathrm{k\Omega},\\
A_2 &= -g_{m3}R_L = -(1.96\ \mathrm{mS})(1.67\ \mathrm{k\Omega}) = -3.27 ,\\
A_{open} &= A_1A_2 = (-4.66)(-3.27) = 15.2 .
\end{aligned}
$$

### 第 5 步 — 环路增益、闭环增益与输出电阻

**体效应如何进入环路。** 暂时忽略 $r_{O1}$，$M_1$ 的漏极电流对栅极电压的响应权重为 $g_{m1}$，而对源极电压的响应权重为 $g_{m1} + g_{mb1}$（源极电压升高既减小 $v_{GS}$，又增大 $V_{SB}$）：

$$i_{d1} = g_{m1}v_{in} - (g_{m1} + g_{mb1})v_S .$$

利用反馈网络的二端口模型，$v_S = R_{deg}\,i_{d1} + \beta v_{out}$，因此

$$
\begin{aligned}
i_{d1}\big[1 + (g_{m1} + g_{mb1})R_{deg}\big] &= g_{m1}v_{in} - (g_{m1} + g_{mb1})\beta v_{out}\\
i_{d1} &= G_{m1}\big[v_{in} - (1 + \eta)\beta\,v_{out}\big].
\end{aligned}
$$

反馈电压实际上被放大了 $(1 + \eta)$ 倍，于是

$$T = (1 + \eta)\,\beta\,A_{open} = 1.145\times0.5\times15.2 = 8.7 ,\qquad A_v = \frac{A_{open}}{1 + T} = \frac{15.2}{9.7} = 1.57 .$$

环路增益无穷大时，增益将趋于 $1/[(1 + \eta)\beta] = 2/1.145 = 1.75$，而不是 $1/\beta = 2$。

**输出电阻。** 并联检测使开环电阻 $R_L = 1.67\ \mathrm{k\Omega}$ 除以 $1 + T$：

$$R_{out} = \frac{R_L}{1 + T} = \frac{1.67\ \mathrm{k\Omega}}{9.7} = 0.17\ \mathrm{k\Omega}.$$

### 第 6 步 — 用精确节点分析验证

$M_1$ 是从 X 流向 S 的电流 $g_{m1}(v_{in} - v_S) - g_{mb1}v_S$ 与 $r_{O1}$ 的并联；$M_2$ 是从 X 到地的 $r_{O2}$；$M_3$ 向输出端注入 $-g_{m3}v_X$，并有对地的 $r_{O3}$。

<!-- diagram: diagram-01.cir -->

单位：mS、kΩ。$g_{m1} + g_{mb1} + 1/r_{O1} = 3.661 + 0.532 + 0.05 = 4.242$ mS。

**节点 X 的 KCL**（流入 $r_{O2}$ 的电流与向下流过 $M_1$ 的电流之和为零）：

$$
\begin{aligned}
0.1\,v_X + 3.661\,v_{in} - 4.242\,v_S + 0.05\,v_X &= 0\\
v_X &= 28.28\,v_S - 24.40\,v_{in} .
\end{aligned}
$$

**节点 S 的 KCL。** 流过 $M_1$ 的电流 $-v_X/r_{O2}$ 流入 $R_{S1}$ 和 $R_F$：

$$
\begin{aligned}
-0.1\,v_X &= \tfrac23v_S - \tfrac13v_{out}\\
v_X &= -6.667\,v_S + 3.333\,v_{out} .
\end{aligned}
$$

令 $v_X$ 的两个表达式相等：

$$
\begin{aligned}
28.28\,v_S - 24.40\,v_{in} &= -6.667\,v_S + 3.333\,v_{out}\\
v_S &= 0.6983\,v_{in} + 0.0954\,v_{out} .
\end{aligned}
$$

**输出节点的 KCL**（来自 $M_3$ 的电流 = 流入 $r_{O3}$、$R_{D2}$ 和 $R_F$ 的电流之和）：

$$-1.960\,v_X = (0.1 + 0.333 + 0.333)\,v_{out} - 0.333\,v_S .$$

代入 $v_X = -6.667v_S + 3.333v_{out}$：

$$
\begin{aligned}
13.06\,v_S - 6.532\,v_{out} &= 0.767\,v_{out} - 0.333\,v_S\\
13.40\,v_S &= 7.299\,v_{out}\\
v_S &= 0.5448\,v_{out} .
\end{aligned}
$$

**联立** $v_S = 0.6983v_{in} + 0.0954v_{out}$：

$$
\begin{aligned}
0.5448\,v_{out} - 0.0954\,v_{out} &= 0.6983\,v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= \frac{0.6983}{0.4494} = 1.554 .
\end{aligned}
$$

**输出电阻。** 令 $v_{in} = 0$，向输出端注入测试电流 $I_X$，由前两个 KCL 方程得 $v_S = 0.0954\,v_{out}$，$v_X = -6.667(0.0954\,v_{out}) + 3.333\,v_{out} = 2.697\,v_{out}$。对输出端列 KCL：

$$
\begin{aligned}
I_X &= g_{m3}v_X + 0.767\,v_{out} - 0.333\,v_S\\
&= (1.960)(2.697)\,v_{out} + 0.767\,v_{out} - 0.032\,v_{out} = 6.02\,v_{out}\ \mathrm{mA}\\
R_{out} &= \frac{v_{out}}{I_X} = \frac{1}{6.02\ \mathrm{mS}} = 0.166\ \mathrm{k\Omega}.
\end{aligned}
$$

精确值（1.554，166 Ω）与反馈分析的估计值（1.57，172 Ω）一致。不计体效应（$g_{mb1} = 0$）时，同样的分析给出 1.77 和 170 Ω。若 $M_2$ 是理想的（$r_{O2} = \infty$），$A_{open}$ 将为无穷大，增益恰好为 $1/[(1 + \eta)\beta] = 1.75$，且 $R_{out} \to 0$：有限的 $r_{O2}$ 把环路增益限制在 9 左右。

### 结果

$$A_v = \frac{V_{out}}{V_{in}} \approx +1.55, \qquad R_{out} \approx 0.17\ \mathrm{k\Omega}$$

（计入 $\lambda$ 和体效应的精确小信号分析：1.554 和 166 Ω；反馈分析：$A_{open} = 15.2$，环路增益 8.7，结果为 1.57 和 172 Ω）。不计体效应时，增益约为 1.77，$R_{out}$ 约为 0.17 kΩ。

**常见错误。** 采用普通的二端口公式 $A_{open}/(1 + \beta A_{open})$，只在源极负反馈中计入 $g_{mb1}$（约得 1.77）。体效应还会使**反馈**电压乘以 $1 + \eta$，因为源极以权重 $g_{m1} + g_{mb1}$ 控制漏极电流。

**常见错误。** 把 $M_2$ 当作理想电流源，这会使开环增益无穷大，从而得到 $A_v = 1.75$，$R_{out} = 0$。由于 $\lambda \ne 0$，环路增益由 $r_{O2}$ 决定。

**常见错误。** 认为增益为反相，或者大于 2。两个共源级反相两次，而 $\beta = 0.5$ 的负反馈最多只能使增益达到 2（这里由于体效应，上限为 1.75）。
