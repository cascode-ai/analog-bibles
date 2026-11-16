# 详细步骤 - R203

**思路。** 这是一个采用 **PMOS** 输入对管、折叠连接**交叉**的折叠式共源共栅（folded cascode）级。对于差分输入，差分对的公共源极节点是虚地。沿着一个输入器件进入其折叠节点，再经过其共源共栅管到达它所驱动的输出端，并用诺顿等效电路（Norton equivalent）表示该输出：短路跨导 $G_m$ 和输出电阻 $R_D\parallel R_{cas}$。交叉连接和 PMOS 输入共同使该级成为**同相**放大。

### 第 1 步 — 节点、虚地与体效应（body effect）

把 $M_1$、$M_2$ 的公共源极节点记为 S；把 $M_1$ 漏极处的折叠节点（与 $M_3$ 及**右侧**共源共栅管 $M_6$ 的源极相连）记为 F1；把 $M_2$ 漏极处的折叠节点（与 $M_4$ 及**左侧**共源共栅管 $M_5$ 相连）记为 F2。$V_{out} = V_{left} - V_{right}$，两者分别取自 $M_5$ 和 $M_6$ 的漏极。

取 $v_{in1} = +v_d/2$、$v_{in2} = -v_d/2$，由对称性 S 是**虚地**，因此每个输入器件都是一个共源跨导器。体效应：$M_1$/$M_2$ 的源极和衬底都处于交流地，$M_3$/$M_4$ 的源极接地，因此这四个器件的 $v_{bs} = 0$；共源共栅管 $M_5$/$M_6$ 的源极接在变化的折叠节点上，而衬底接地，因此它们**确实**存在 $g_{mb}$ 项。

### 第 2 步 — 右半边（由 $M_1$ 驱动）的小信号模型（small-signal model）

每个器件从漏极流向源极的电流为 $g_mv_{gs} + g_{mb}v_{bs} + v_{ds}/r_O$；记 $v_{F1}$ 为折叠节点电压，$v_R$ 为右输出电压：

- **$M_1$**（栅极为 $v_d/2$，漏极接 F1）：经 $M_1$ 流出 F1 的电流为 $g_{m1}\dfrac{v_d}{2} + \dfrac{v_{F1}}{r_{O1}}$。
- **$M_3$**：流出 F1 的电流为 $v_{F1}/r_{O3}$。
- **$M_6$**（栅极接交流地，源极接 F1，漏极接右输出端）：从输出端向下流入 F1 的电流为
$$i_6 = g_{m6}(0 - v_{F1}) + g_{mb6}(0 - v_{F1}) + \frac{v_R - v_{F1}}{r_{O6}} = -(g_{m6} + g_{mb6})v_{F1} + \frac{v_R - v_{F1}}{r_{O6}}.$$
- **$R_D$**：从右输出端接到 $V_{DD}$（交流地）。

令 $R_S = r_{O1}\parallel r_{O3}$，即不计共源共栅管时从 F1 到地的电阻。

<!-- diagram: diagram-01.cir -->

对 F1 和右输出端应用基尔霍夫电流定律（KCL）：

$$i_6 = g_{m1}\frac{v_d}{2} + \frac{v_{F1}}{R_S}, \tag{1}$$

$$i_6 + \frac{v_R}{R_D} = 0. \tag{2}$$

### 第 3 步 — 诺顿等效：$R_{cas}$ 与 $G_m$

**共源共栅管的输出电阻。** 令 $v_d = 0$，由 (1) 得 $v_{F1} = i_6R_S$；代入 $i_6$ 的表达式：

$$
\begin{aligned}
i_6 &= -(g_{m6} + g_{mb6})R_Si_6 + \frac{v_R - R_Si_6}{r_{O6}}\\
R_{cas} = \frac{v_R}{i_6} &= r_{O6} + \left[1 + (g_{m6} + g_{mb6})r_{O6}\right]R_S,\qquad R_S = r_{O1}\parallel r_{O3},
\end{aligned}
$$

这就是熟悉的带源极负反馈共源共栅结构的结果。

**短路跨导。** 令 $v_R = 0$，$i_6 = -(g_{m6} + g_{mb6} + 1/r_{O6})v_{F1}$；与 (1) 联立：

$$
\begin{aligned}
v_{F1} &= -\frac{g_{m1}v_d/2}{g_{m6} + g_{mb6} + 1/r_{O6} + 1/R_S},\\
i_{6,sc} &= g_{m1}\frac{v_d}{2}\cdot\frac{g_{m6} + g_{mb6} + 1/r_{O6}}{g_{m6} + g_{mb6} + 1/r_{O6} + 1/R_S}.
\end{aligned}
$$

分子分母同乘以 $r_{O6}R_S$：

$$i_{6,sc} = G_m\frac{v_d}{2}, \qquad G_m = g_{m1}\frac{\left[1 + (g_{m6} + g_{mb6})r_{O6}\right]R_S}{R_{cas}} \approx g_{m1}:$$

$M_1$ 的信号电流几乎全部流入共源共栅管的低阻抗源极，而不是流入 $R_S$。

### 第 4 步 — 输出电压与增益

在右输出端，有电流 $G_mv_d/2$ 被**向下**抽出该节点，而该节点到交流地的电阻为 $R_D\parallel R_{cas}$；左输出端以同样的方式由 $M_2$（栅极为 $-v_d/2$）经 $M_5$ 驱动：

$$v_R = -G_m\left(R_D\parallel R_{cas}\right)\frac{v_d}{2}, \qquad v_L = +G_m\left(R_D\parallel R_{cas}\right)\frac{v_d}{2}.$$

因此 $v_{out} = v_L - v_R = G_m(R_D\parallel R_{cas})v_d$，再利用 $g_{m5} = g_{m6}$、$r_{O5} = r_{O6}$，得

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = +G_m\left(R_D\parallel R_{cas}\right) = \frac{g_{m1}\,(r_{O1}\parallel r_{O3})\left[1 + (g_{m5} + g_{mb5})r_{O5}\right]R_D}{R_D + R_{cas}}.$$

取 $G_m \approx g_{m1}$：

$$A_v \approx +g_{m1}\left(R_D\parallel R_{cas}\right), \qquad R_{cas} = r_{O5} + \left[1 + (g_{m5} + g_{mb5})r_{O5}\right](r_{O1}\parallel r_{O3}).$$

该近似把增益高估了 $R_{cas}/(R_{cas} - r_{O5})$ 倍，通常只有百分之几。

**为什么符号为正。** 正的 $v_{in1}$ **抬高**了 PMOS $M_1$ 的栅极，**减小**了它的电流，于是流入 F1 的电流减少，共源共栅管 $M_6$ 的电流**增大**，右输出**下降**；对称地，左输出上升，因此 $V_{left} - V_{right}$ 增大。

**数值感受：** 取 $g_{m1} = 1$ mS，$r_{O1} = r_{O3} = 40\ \mathrm{k}\Omega$（因此 $R_S = 20\ \mathrm{k}\Omega$），$g_{m5} = 1$ mS，$g_{mb5} = 0.2$ mS，$r_{O5} = 50\ \mathrm{k}\Omega$，$R_D = 20\ \mathrm{k}\Omega$：

$$
\begin{aligned}
R_{cas} &= 50\ \mathrm{k}\Omega + (1 + 1.2\times50)(20\ \mathrm{k}\Omega) = 50 + 1220 = 1270\ \mathrm{k}\Omega,\\
R_D\parallel R_{cas} &= \frac{20\times1270}{1290}\ \mathrm{k}\Omega = 19.7\ \mathrm{k}\Omega,\\
A_v &\approx +(1\ \mathrm{mS})(19.7\ \mathrm{k}\Omega) = +19.7 .
\end{aligned}
$$

共源共栅管的电阻非常大，因此增益由 $R_D$ 决定。

### 结果

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} \approx +g_{m1}\left(R_D\parallel R_{cas}\right), \qquad R_{cas} = r_{O5} + \left[1 + (g_{m5} + g_{mb5})r_{O5}\right](r_{O1}\parallel r_{O3}).$$

精确地，

$$A_v = \frac{g_{m1}(r_{O1}\parallel r_{O3})\left[1 + (g_{m5} + g_{mb5})r_{O5}\right]R_D}{R_D + R_{cas}}.$$

从 $V_{in1} - V_{in2}$ 到 $V_{left} - V_{right}$，该级是**同相**的。

**常见错误。** 由于误读交叉连接（$M_1$ 驱动的是**右**输出端）或把 PMOS 输入当作 NMOS，而得出反相增益。

**常见错误。** 写 $R_{cas}$ 时没有计入完整的源极负反馈电阻 $r_{O1}\parallel r_{O3}$（只计入 $r_{O3}$ 或只计入 $r_{O1}$），或者漏掉 $g_{mb5}$。$M_1$ 和 $M_3$ 都挂在折叠节点上，而且共源共栅管的源极在变化，其衬底却接地。

**常见错误。** 把 $M_3$/$M_4$ 当作二极管或信号通路的一部分。它们的栅极接固定偏置 $V_{b1}$，因此只在折叠节点上增加 $r_{O3}$。
