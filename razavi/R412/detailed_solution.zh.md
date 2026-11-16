# 详细步骤 - R412

**思路。** 先求偏置点（它决定 $M_1$ 的体效应），然后把电路看作电压串联反馈放大器：分压器 $R_2$–$R_1$ 对 $V_{out}$ 采样，并把其中一部分送回 $M_1$ 的源极。计算计入负载效应的开环增益、环路增益（包括 $g_{mb1}$ 对反馈信号的影响）、闭环增益和输出电阻（output resistance），并用精确节点分析加以验证。

### 第 1 步 — 偏置点

把 $M_1$ 的漏极（$M_2$ 的栅极）记为节点 A，把 $R_2$ 与 $R_1$ 的连接点记为节点 B。在输出端，$M_4$ 提供 0.5 mA，$M_2$ 吸收 0.5 mA，因此 $R_2$ 中没有直流电流，$V_{out} = V_B$；$I_{D1} = 0.5$ mA 全部流过 $R_1$：

$$V_B = V_{out} = (0.5\ \mathrm{mA})(0.973\ \mathrm{k\Omega}) = 0.487\ \mathrm{V}.$$

因此 $V_{SB1} = 0.487$ V。（$R_1 = 0.973\ \mathrm{k\Omega}$ 是允许范围 0.546–1.40 kΩ 的中点：$M_2$ 要求 $V_{out} \ge 0.273$ V，$M_1$ 要求 $V_B \le 0.70$ V。）

### 第 2 步 — 小信号参数

所有器件的电流均为 0.5 mA，$W/L = 100$：

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
\eta &= \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB1}}} = \frac{0.45}{2\sqrt{0.9 + 0.487}} = \frac{0.45}{2(1.1775)} = 0.191,\\
g_{mb1} &= \eta\,g_{m1} = 0.191\times3.66\ \mathrm{mS} = 0.70\ \mathrm{mS},\\
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\qquad
r_{O3} = r_{O4} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega}.
\end{aligned}
$$

### 第 3 步 — 识别反馈类型

前向通路由两个共源级（common-source stage）组成（$M_1$ 到 A，$M_2$ 到 $V_{out}$），因此是同相的。$R_2$–$R_1$ 检测输出电压，并把一个电压加到 $M_1$ 的源极，在那里与输入相减（$v_{GS1} = v_{in} - v_B$）：这是**电压串联**负反馈。B 点空载时，

$$\beta = \frac{R_1}{R_1 + R_2} = \frac{0.973}{3.973} = 0.245 ,$$

理想闭环增益为 $1/\beta = 1 + R_2/R_1 = 4.08$。

### 第 4 步 — 计入分压器负载效应的开环增益

二端口负载效应：

- 在 $M_1$ 的源极（输出端短路）：$R_{deg} = R_1\parallel R_2 = \dfrac{0.973\times3}{3.973}\ \mathrm{k\Omega} = 0.735\ \mathrm{k\Omega}$；
- 在输出端（B 开路）：对地电阻为 $R_1 + R_2 = 3.97\ \mathrm{k\Omega}$。

**第 1 级**（带源极负反馈的共源级，计入体效应和 $r_{O1}$）：

$$
\begin{aligned}
G_{m1} &= \frac{g_{m1}}{1 + (g_{m1} + g_{mb1})R_{deg} + R_{deg}/r_{O1}} = \frac{3.66\ \mathrm{mS}}{1 + (4.36\ \mathrm{mS})(0.735\ \mathrm{k\Omega}) + 0.037} = \frac{3.66}{4.24}\ \mathrm{mS} = 0.863\ \mathrm{mS},\\
R_{d1} &= \big[1 + (g_{m1} + g_{mb1})R_{deg}\big]r_{O1} + R_{deg} = (4.20)(20\ \mathrm{k\Omega}) + 0.735\ \mathrm{k\Omega} = 84.8\ \mathrm{k\Omega},\\
R_A &= r_{O3}\parallel R_{d1} = \frac{10\times84.8}{94.8}\ \mathrm{k\Omega} = 8.95\ \mathrm{k\Omega},\\
A_1 &= -G_{m1}R_A = -(0.863\ \mathrm{mS})(8.95\ \mathrm{k\Omega}) = -7.72 .
\end{aligned}
$$

**第 2 级**（共源级 $M_2$）：

$$
\begin{aligned}
R_L &= r_{O2}\parallel r_{O4}\parallel(R_1 + R_2) = \frac{1}{1/20 + 1/10 + 1/3.973}\ \mathrm{k\Omega} = \frac{1}{0.4017}\ \mathrm{k\Omega} = 2.49\ \mathrm{k\Omega},\\
A_2 &= -g_{m2}R_L = -(3.66\ \mathrm{mS})(2.49\ \mathrm{k\Omega}) = -9.11 ,\\
A_{open} &= A_1A_2 = (-7.72)(-9.11) = 70.4 .
\end{aligned}
$$

### 第 5 步 — 环路增益、闭环增益与输出电阻

**$g_{mb1}$ 如何进入环路。** $M_1$ 的漏极电流对栅极电压的响应权重为 $g_{m1}$，而对源极电压的响应权重为 $g_{m1} + g_{mb1}$。忽略 $r_{O1}$，并利用 $v_B = R_{deg}\,i_{d1} + \beta v_{out}$（分压器的二端口模型）：

$$
\begin{aligned}
i_{d1} &= g_{m1}v_{in} - (g_{m1} + g_{mb1})(R_{deg}\,i_{d1} + \beta v_{out})\\
i_{d1} &= G_{m1}\big[v_{in} - (1 + \eta)\beta\,v_{out}\big].
\end{aligned}
$$

反馈电压实际上被乘以 $(1 + \eta)$，因此

$$
\begin{aligned}
T &= (1 + \eta)\,\beta\,A_{open} = 1.191\times0.245\times70.4 = 20.5 ,\\
A_v &= \frac{A_{open}}{1 + T} = \frac{70.4}{21.5} = 3.27 ,\\
R_{out} &= \frac{R_L}{1 + T} = \frac{2.49\ \mathrm{k\Omega}}{21.5} = 116\ \Omega .
\end{aligned}
$$

环路增益无穷大时，增益将趋于 $(1 + R_2/R_1)/(1 + \eta) = 4.08/1.191 = 3.43$，而不是 4.08。

### 第 6 步 — 用精确节点分析验证

$M_1$ 是从 A 流向 B 的电流 $g_{m1}(v_{in} - v_B) - g_{mb1}v_B$，并联 $r_{O1}$；$M_3$ 是从 A 到地的 $r_{O3}$；$M_2$ 是从输出端流向地的电流 $g_{m2}v_A$，并联 $r_{O2}$；$M_4$ 是从输出端到地的 $r_{O4}$。

<!-- diagram: diagram-01.cir -->

单位：mS 和 kΩ。$g_{m1} + g_{mb1} + 1/r_{O1} = 3.661 + 0.699 + 0.05 = 4.410$ mS，$1/R_1 + 1/R_2 = 1.028 + 0.333 = 1.361$ mS。

**对节点 A 列基尔霍夫电流定律（KCL）方程**，$r_{O3}$ 中的电流与 $M_1$ 中的电流之和为零：

$$
\begin{aligned}
0.1\,v_A + 3.661\,v_{in} - 4.410\,v_B + 0.05\,v_A &= 0\\
v_A &= 29.40\,v_B - 24.40\,v_{in} .
\end{aligned}
$$

**节点 B 的 KCL。** 由节点 A 的 KCL 可知，$M_1$ 中的电流为 $-0.1\,v_A$，它流入 $R_1$ 和 $R_2$：

$$
\begin{aligned}
-0.1\,v_A &= 1.361\,v_B - 0.333\,v_{out}\\
v_A &= -13.61\,v_B + 3.333\,v_{out} .
\end{aligned}
$$

令 $v_A$ 的两个表达式相等：

$$
\begin{aligned}
43.01\,v_B &= 24.40\,v_{in} + 3.333\,v_{out}\\
v_B &= 0.5674\,v_{in} + 0.0775\,v_{out} .
\end{aligned}
$$

**输出节点的 KCL**（$1/r_{O2} + 1/r_{O4} + 1/R_2 = 0.483$ mS）：

$$3.661\,v_A + 0.483\,v_{out} - 0.333\,v_B = 0 .$$

代入 $v_A = -13.61v_B + 3.333v_{out}$：

$$
\begin{aligned}
-49.82\,v_B + 12.20\,v_{out} + 0.483\,v_{out} - 0.333\,v_B &= 0\\
v_B &= \frac{12.69}{50.16}\,v_{out} = 0.2529\,v_{out} .
\end{aligned}
$$

**联立：**

$$
\begin{aligned}
0.2529\,v_{out} - 0.0775\,v_{out} &= 0.5674\,v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= \frac{0.5674}{0.1754} = 3.23 .
\end{aligned}
$$

**输出电阻。** 令 $v_{in} = 0$：$v_B = 0.0775\,v_{out}$，$v_A = -13.61(0.0775\,v_{out}) + 3.333\,v_{out} = 2.279\,v_{out}$。注入输出端的测试电流 $I_X$ 必须满足

$$
\begin{aligned}
I_X &= g_{m2}v_A + 0.483\,v_{out} - 0.333\,v_B = (8.341 + 0.483 - 0.026)\,v_{out} = 8.80\,v_{out}\ \mathrm{mA},\\
R_{out} &= \frac{1}{8.80\ \mathrm{mS}} = 0.114\ \mathrm{k\Omega} = 114\ \Omega .
\end{aligned}
$$

反馈分析的估计值（3.27，116 Ω）与之相差约 1–2 %。不计体效应时，同样的分析给出 3.83 和 120 Ω。若 $\lambda = 0$（理想电流源），开环增益将为无穷大，增益恰好为 $A_v = 3.43$，$R_{out} = 0$；有限的输出电阻把环路增益限制在 20 左右。

### 结果

$$A_v = \frac{V_{out}}{V_{in}} \approx +3.2\ \ (3.23\ \text{exact};\ 3.27\ \text{from the feedback analysis}),\qquad R_{out} \approx 0.11\ \mathrm{k\Omega}\ \ (114\ \Omega),$$

其中 $A_{open} \approx 70$，$\beta = 0.245$，环路增益 $\approx 20.5$。增益低于理想值 $1 + R_2/R_1 = 4.08$，一方面是因为环路增益有限，另一方面是因为 $M_1$ 的体效应使反馈增强到 $1 + \eta = 1.19$ 倍。

**常见错误。** 采用普通公式 $A_{open}/(1 + \beta A_{open})$，只在源极负反馈中计入 $g_{mb1}$（约得 3.86 和 137 Ω）。反馈电压作用于源极，权重为 $g_{m1} + g_{mb1}$，因此其作用是栅极信号的 $(1 + \eta)$ 倍。

**常见错误。** 取 $\beta = R_2/(R_1 + R_2)$。送回 $M_1$ 源极的是 $R_1$ 两端的电压，因此 $\beta = R_1/(R_1 + R_2) = 0.245$。

**常见错误。** 得到大于 $1 + R_2/R_1 = 4.08$ 的增益，或者得到反相增益。负反馈只能使增益从下方逼近 $1/\beta$，而两个反相级使增益为正。
