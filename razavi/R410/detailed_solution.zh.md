# 详细步骤 - R410

**思路。** 在修改后的电路（[图 1]）中，误差电压 $v_{in} - v_F$ 由差分对 $M_1$–$M_4$ 形成，而不是在 $M_1$ 的源极形成，反馈网络只驱动 $M_4$ 的栅极。求出这一电压串联反馈（series–shunt feedback）环路的偏置点、开环增益（open-loop gain）和环路增益，进而求出闭环增益（closed-loop gain）和输出电阻。然后对原电路（[图 2]）简要重复上述分析并加以比较。

### 第 1 步 — 修改后的电路及其偏置点

把 $M_1$ 和 $M_4$ 的公共源极节点记为 P，把 $M_4$ 的栅极（即 $R_F$ 与 $R_{S1}$ 的连接点）记为 F。

**节点 F 的 KCL。** $M_4$ 的栅极不取电流，因此 $R_F$ 和 $R_{S1}$ 中的电流相同：

$$\frac{V_{out} - V_F}{R_F} = \frac{V_F - 1.5}{R_{S1}} \ \Longrightarrow\ V_F = \frac{V_{out} + 1.5}{2}\quad(R_F = R_{S1}).$$

**$V_{out}$ 节点的 KCL**（$M_3$ 提供 0.5 mA；单位为 mA、kΩ、V）：

$$
\begin{aligned}
0.5 &= \frac{V_{out}}{3} + \frac{V_{out} - V_F}{3}\ \Longrightarrow\ 1.5 = 2V_{out} - V_F = 2V_{out} - \frac{V_{out} + 1.5}{2}\\
3 &= 3V_{out} - 1.5\ \Longrightarrow\ V_{out} = 1.5\ \mathrm{V},\quad V_F = 1.5\ \mathrm{V}.
\end{aligned}
$$

**输入直流电平。** $M_1$ 和 $M_4$ 完全相同，共用节点 P，且各自电流为 0.5 mA，因此两者的 $V_{GS}$ 相等，$V_{in} = V_F = 1.5$ V。过驱动电压（overdrive voltage）为 $\sqrt{2(0.5\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.273$ V，用迭代法求解 $V_{GS} = V_{TH}(V_{SB} = V_P) + 0.273$ V（其中 $V_P = 1.5 - V_{GS}$），得 $V_{GS} \approx 1.07$ V，$V_P \approx 0.43$ V。

$V_X = V_{DD} - |V_{GS3}| = 3 - (0.8 + 0.51) = 1.69$ V，因此 $V_{DS1} = 1.69 - 0.43 = 1.26\ \mathrm{V} > 0.273$ V：$M_1$ 稳稳地工作在饱和区。

### 第 2 步 — 小信号参数

$$
\begin{aligned}
g_{m1} = g_{m4} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
g_{m3} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 1.96\ \mathrm{mS},\\
r_{O1} = r_{O4} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\qquad
r_{O2} = r_{O3} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega}.
\end{aligned}
$$

尾电流源视为理想电流源。

### 第 3 步 — 反馈结构

$R_F$–$R_{S1}$ 检测 $V_{out}$（$V_{b2}$ 为交流地），并把 $v_F = \beta v_{out}$ 加到 $M_4$ 的栅极；差分对响应的是 $v_{in} - v_F$，因此该环路是电压串联反馈。栅极不取电流，因此分压器是空载的：

$$\beta = \frac{R_{S1}}{R_{S1} + R_F} = 0.5 .$$

在输出端，该网络呈现对地电阻 $R_F + R_{S1} = 6\ \mathrm{k\Omega}$；在输入一侧，它不构成任何负载。

### 第 4 步 — 差分对：体效应相互抵消

暂时忽略 $r_{O1}$、$r_{O4}$，衬底接地时：

$$i_1 = g_m(v_{in} - v_P) - g_{mb}v_P, \qquad i_4 = g_m(v_F - v_P) - g_{mb}v_P .$$

理想尾电流源不传导信号电流，因此 $i_1 + i_4 = 0$：

$$
\begin{aligned}
g_m(v_{in} + v_F) - 2(g_m + g_{mb})v_P &= 0 \ \Longrightarrow\ v_P = \frac{g_m(v_{in} + v_F)}{2(g_m + g_{mb})},\\
i_1 &= g_mv_{in} - (g_m + g_{mb})v_P = g_mv_{in} - \frac{g_m(v_{in} + v_F)}{2} = \frac{g_m}{2}(v_{in} - v_F).
\end{aligned}
$$

$g_{mb}$ 被消去了：它只改变 P 点的共模（common-mode）电平。当 $r_{O1} = r_{O4}$ 且 $M_1$ 的漏极接交流地时，同样的对称性严格成立，因此流入 X 的短路电流为 $(g_m/2)(v_{in} - v_F)$。

**X 处的电阻。** $M_1$ 的源极由 $M_4$ 的源极提供负反馈电阻 $R_s = 1/(g_m + g_{mb} + 1/r_{O4})$，因此

$$
\begin{aligned}
R_{d1} &= r_{O1} + R_s\big[(g_m + g_{mb})r_{O1} + 1\big] = r_{O1}\left[1 + \frac{g_m + g_{mb} + 1/r_{O1}}{g_m + g_{mb} + 1/r_{O4}}\right]\\
&= 2r_{O1} = 40\ \mathrm{k\Omega}\quad(\text{since } r_{O1} = r_{O4}),
\end{aligned}
$$

$$R_X = r_{O2}\parallel R_{d1} = \frac{10\times40}{10 + 40}\ \mathrm{k\Omega} = 8\ \mathrm{k\Omega}.$$

### 第 5 步 — 开环增益、环路增益、闭环增益与 $R_{out}$

$$
\begin{aligned}
\frac{v_X}{v_{in} - v_F} &= -\frac{g_m}{2}R_X = -(1.83\ \mathrm{mS})(8\ \mathrm{k\Omega}) = -14.6 ,\\
R_L &= R_{D2}\parallel(R_F + R_{S1})\parallel r_{O3} = 3\parallel6\parallel10\ \mathrm{k\Omega} = \frac{1}{0.6}\ \mathrm{k\Omega} = 1.67\ \mathrm{k\Omega},\\
\frac{v_{out}}{v_X} &= -g_{m3}R_L = -(1.96\ \mathrm{mS})(1.67\ \mathrm{k\Omega}) = -3.27 ,\\
A_{open} &= (-14.6)(-3.27) = 47.8,\\
T &= \beta A_{open} = 0.5\times47.8 = 23.9 .
\end{aligned}
$$

电压串联反馈使增益和输出电阻都除以 $1 + T$：

$$
\begin{aligned}
A_v &= \frac{A_{open}}{1 + T} = \frac{47.8}{24.9} = 1.92,\\
R_{out} &= \frac{R_L}{1 + T} = \frac{1667\ \Omega}{24.9} = 67\ \Omega .
\end{aligned}
$$

由于 $M_4$ 的栅极不取电流，且尾电流源是理想的，这种分解是精确的：计入所有 $r_O$ 和 $g_{mb}$ 的完整节点分析给出同样的 1.92 和 67 Ω。若只保留负载电阻 $r_{O2}$、$r_{O3}$（$R_X = 10\ \mathrm{k\Omega}$），则 $A_{open} = 59.8$，$T = 29.9$，$A_v = 1.94$，$R_{out} = 54\ \Omega$。

### 第 6 步 — 用于比较的原电路（图 2）

在 [图 2] 中，$M_1$ 的源极（节点 S）接 $R_{S1}$（到地）和 $R_F$。分别向 S 和 $V_{out}$ 注入 0.5 mA，由 KCL 得 $V_S = V_{out} = 1.5$ V，因此 $V_{SB1} = 1.5$ V，$\eta = \gamma/(2\sqrt{0.9 + 1.5}) = 0.145$，$g_{mb1} = 0.53$ mS。输入电平为 $V_{in} = 1.5 + V_{GS1} \approx 2.74$ V，而 $V_X = 1.69$ V，因此 $V_{DS1} \approx 0.19$ V 处于临界状态；按题意仍假设其饱和。

**开环**（$R_{S1}\parallel R_F = 1.5\ \mathrm{k\Omega}$ 为 $M_1$ 提供源极负反馈；$R_F + R_{S1} = 6\ \mathrm{k\Omega}$ 是输出端的负载）：

$$
\begin{aligned}
G_{m1} &= \frac{g_{m1}}{1 + (g_{m1} + g_{mb1})(1.5\ \mathrm{k\Omega}) + 1.5/20} = \frac{3.66}{7.36}\ \mathrm{mS} = 0.497\ \mathrm{mS},\\
R_X &= r_{O2}\parallel\big[(7.29)(20\ \mathrm{k\Omega}) + 1.5\ \mathrm{k\Omega}\big] = 10\parallel147\ \mathrm{k\Omega} = 9.36\ \mathrm{k\Omega},\\
A_{open} &= (0.497\ \mathrm{mS})(9.36\ \mathrm{k\Omega})\times3.27 = 4.66\times3.27 = 15.2 .
\end{aligned}
$$

**环路增益。** $M_1$ 的源极以权重 $g_{m1} + g_{mb1}$ 控制漏极电流，因此反馈电压被乘以 $1 + \eta$：$T = (1 + \eta)\beta A_{open} = 1.145\times0.5\times15.2 = 8.7$。

$$A_v = \frac{15.2}{9.7} = 1.57\ \ (\text{exact nodal analysis: }1.55),\qquad R_{out} = \frac{1.67\ \mathrm{k\Omega}}{9.7} = 0.17\ \mathrm{k\Omega}\ \ (\text{exact: }0.166\ \mathrm{k\Omega}).$$

### 第 7 步 — 比较与解释

| | 图 2（原电路） | 图 1（带 $M_4$） |
|---|---|---|
| 等效输入跨导 | 0.50 mS（带源极负反馈的 $M_1$） | 1.83 mS（差分对的 $g_m/2$） |
| X 处的电阻 | 9.4 kΩ | 8 kΩ |
| 开环增益 | 15.2 | 47.8 |
| 环路增益 | ≈ 8.7 | ≈ 24 |
| 闭环增益 | ≈ 1.55 | ≈ 1.92 |
| 输出电阻 | ≈ 0.17 kΩ | ≈ 67 Ω |
| 增益的理想极限 | $1/[(1 + \eta)\beta] = 1.75$ | $1/\beta = 1 + R_F/R_{S1} = 2$ |

修改后的电路更好的原因：

- **没有源极负反馈。** 在图 2 中，反馈网络自身的电阻使 $M_1$ 的跨导除以 $1 + (g_m + g_{mb})(1.5\ \mathrm{k\Omega}) \approx 7.3$；在图 1 中，反馈网络驱动的是栅极，差分对提供的跨导为 $g_m/2$。
- **输入一侧没有负载效应。** $\beta$ 恰好为 0.5，且 $M_1$ 的信号电流不流过 $R_F$。
- **体效应相互抵消。** $g_{mb}$ 只改变 P 点的共模电平，因此相减运算 $v_{in} - v_F$ 是精确的，增益趋于 2 而不是 1.75。

环路增益从约 9 提高到约 24，增益从 1.55 提高到 1.92，$R_{out}$ 约降低 2.5 倍（若只保留 $r_{O2}$、$r_{O3}$，约降低 3 倍）。代价是多一个晶体管、多 0.5 mA 电流、一个尾电流源以及偏置电压 $V_{b2}$；附带的好处是输入电平较低（1.5 V 而不是 2.74 V），使 $M_1$ 稳稳地处于饱和区。

### 结果

修改后的电路（图 1）：$A_v \approx 1.92$，$R_{out} \approx 67\ \Omega$（若只保留 $r_{O2}$、$r_{O3}$，则为 1.94 和 54 Ω），对应 $A_{open} \approx 48$，环路增益 $\approx 24$。

原电路（图 2）：$A_v \approx 1.55$，$R_{out} \approx 0.17\ \mathrm{k\Omega}$（若忽略其体效应，增益约为 1.77），对应的环路增益约为 8.7。

修改后的电路更接近理想增益 $1 + R_F/R_{S1} = 2$，输出电阻低 2.5–3 倍，因为去掉源极负反馈和体效应带来的损失后，环路增益提高到约三倍。

**常见错误。** 对修改后电路的第一级使用完整的 $g_m$。输入由差分对的两半共同分担，因此 $i_{d1} = (g_m/2)(v_{in} - v_F)$。

**常见错误。** 以为“损失了一半跨导”，就断定插入 $M_4$ 会降低环路增益。在原电路中，源极负反馈使跨导除以约 7.3，远比差分对的因子 2 严重。

**常见错误。** 在修改后的电路中仍保留体效应修正。尾电流源为理想时，体效应对差分信号相互抵消，因此理想增益恰好为 $1/\beta = 2$。
