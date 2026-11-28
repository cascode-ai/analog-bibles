# 详细步骤 - R088

**思路：** $V_{in}$ 驱动的是 $M_1$ 的源极，而其栅极接 $V_b$，因此这是一个共栅级（同相），$R_F$ 把输出端连回输入源。列出输出节点的基尔霍夫电流定律（KCL）方程，求出 $M_1$ 截止的位置（由于 $V_{SB} = V_{in}$，需计入体效应），再分别用方程、斜率和边界描述截止区、饱和区和线性区。最后用一个数值示例展示曲线形状。

采用平方律模型，令 $\beta=\mu_nC_{ox}W/L$，并按题设忽略沟道长度调制。

### 第 1 步 — 各端电压与输出节点的 KCL

电流只能从 $V_{DD}$ 经 $R_D$ 流入输出节点，因此 $V_{in} \le V_{out} \le V_{DD}$，电位较低的一端 $V_{in}$ 是 $M_1$ 的源极：

$$V_{GS} = V_b - V_{in}, \qquad V_{DS} = V_{out} - V_{in}, \qquad V_{SB} = V_{in} - 0 = V_{in}.$$

因此阈值电压（threshold voltage）取决于输入：

$$V_{TH}(V_{in}) = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{in}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_{in}} - 0.9487\right)\ \mathrm{V}.$$

输出节点的 KCL（来自 $R_D$ 的电流经 $R_F$ 和 $M_1$ 流出）：

$$\frac{V_{DD} - V_{out}}{R_D} = \frac{V_{out} - V_{in}}{R_F} + I_{D1} ,$$

$M_1$ 截止时 $I_{D1} = 0$。由于 $I_{D1} \ge 0$，导通的 $M_1$ 会把 $V_{out}$ 拉到低于 $M_1$ 截止时的值。

### 第 2 步 — $M_1$ 在何处截止

$V_b-V_{in}>V_{TH}(V_{in})$ 时满足导通条件。随输入升高，$V_{GS}$ 下降而阈值升高。若截止点在扫描内，其输入满足

$$V_b - V_{in,off} = 0.7 + 0.45\left(\sqrt{0.9 + V_{in,off}} - 0.9487\right).$$

过驱动随输入严格下降，当 $V_b\le V_{DD}+V_{TH}(V_{DD})$ 时，截止边界位于扫描范围内。取等号时边界位于终点。

令 $u = \sqrt{0.9 + V_{in,off}}$，则 $V_{in,off} = u^2 - 0.9$：

$$
\begin{aligned}
V_b - (u^2 - 0.9) &= 0.7 + 0.45u - 0.4269\\
u^2 + 0.45u - (V_b + 0.9 - 0.7 + 0.4269) &= 0\\
u^2 + 0.45u - (V_b + 0.6269) &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 4(V_b + 0.6269)}}{2},\\
V_{in,off} &= u^2 - 0.9 .
\end{aligned}
$$

例如，取 $V_b = 1.5$ V：

$$
\begin{aligned}
u &= \frac{-0.45 + \sqrt{0.2025 + 8.5076}}{2} = \frac{-0.45 + 2.9513}{2} = 1.2507,\\
V_{in,off} &= 1.2507^2 - 0.9 = 1.5641 - 0.9 = 0.664\ \mathrm{V}.
\end{aligned}
$$

验证：$V_{TH}(0.664) = 0.7 + 0.45(1.2507 - 0.9487) = 0.836$ V，而 $V_b - V_{in} = 1.5 - 0.664 = 0.836$ V。✓ 若无体效应，截止点将在 $V_b - 0.7 = 0.8$ V 处；体效应使它下移。

### 第 3 步 — $M_1$ 截止（$V_{in} \ge V_{in,off}$）：分压直线

当 $I_{D1} = 0$ 时，KCL 化为 $V_{DD}$ 与 $V_{in}$ 之间的分压关系：

$$
\begin{aligned}
R_F(V_{DD} - V_{out}) &= R_D(V_{out} - V_{in})\\
V_{out} &= \frac{R_FV_{DD} + R_DV_{in}}{R_D + R_F} .
\end{aligned}
$$

这是一条斜率为 $R_D/(R_D + R_F)$ 的直线。当 $V_{in} = V_{DD}$ 时，$V_{out} = V_{DD}(R_F + R_D)/(R_D + R_F) = V_{DD}$，因此曲线终止于 $(3\ \mathrm{V}, 3\ \mathrm{V})$。在截止点，它经过

$$V_{out,off} = \frac{R_FV_{DD} + R_DV_{in,off}}{R_D + R_F} .$$

这里 $V_{out}$ 并不等于 $V_{DD}$：$R_F$ 仍然流过从 $V_{DD}$ 经 $R_D$ 流入输入源的电流。

### 第 4 步 — $M_1$ 饱和：陡峭的共栅区段

饱和要求 $V_{DS} \ge V_{GS} - V_{TH}$：

$$V_{out} - V_{in} \ge V_b - V_{in} - V_{TH} \quad\Longleftrightarrow\quad V_{out} \ge V_b - V_{TH}(V_{in}) ,$$

此时

$$\frac{V_{DD} - V_{out}}{R_D} = \frac{V_{out} - V_{in}}{R_F} + \frac{\beta}{2}\left(V_b - V_{in} - V_{TH}(V_{in})\right)^2 .$$

斜率： 在小信号模型（small-signal model）中，$R_D$ 接在 $out$ 与交流地之间，$R_F$ 接在 $out$ 与 $in$ 之间。$M_1$ 的栅极接交流地，源极接 $in$，衬底接地，因此 $v_{gs} = v_{bs} = -v_{in}$，其从 $out$ 流向 $in$ 的电流为 $g_mv_{gs} + g_{mb}v_{bs} = -(g_m + g_{mb})v_{in}$，其中 $g_m = \beta(V_b - V_{in} - V_{TH})$，$g_{mb} = \eta g_m$。其中 $\eta=dV_{TH}/dV_{SB}=\gamma/(2\sqrt{2|\phi_F|+V_{SB}})$。

<!-- diagram: diagram-01.cir -->

对 $out$ 节点应用 KCL：

$$
\begin{aligned}
\frac{0 - v_{out}}{R_D} &= \frac{v_{out} - v_{in}}{R_F} - (g_m + g_{mb})\,v_{in}\\
-v_{out}\left(\frac{1}{R_D} + \frac{1}{R_F}\right) &= -v_{in}\left(\frac{1}{R_F} + g_m + g_{mb}\right)\\
\frac{dV_{out}}{dV_{in}} = \frac{v_{out}}{v_{in}} &= \left(g_m + g_{mb} + \frac{1}{R_F}\right)(R_D\|R_F) .
\end{aligned}
$$

斜率为正（同相），且大于分压直线的斜率 $R_D/(R_D + R_F) = (1/R_F)(R_D\|R_F)$。随着 $V_{in}$ 升高并趋近 $V_{in,off}$，$g_m$ 减小到零，斜率恰好降到 $R_D/(R_D + R_F)$：曲线在截止点从下方与分压直线相切衔接。

### 第 5 步 — $M_1$ 处于线性区：扫描的起始段

当 $V_{in} = 0$ 时，源极接地，栅极接 $V_b$。若 $\beta$（或 $R_D$）较大，$M_1$ 会把输出拉到 $V_b - V_{TH}$ 以下，从而一开始就处于线性区：

$$\frac{V_{DD} - V_{out}}{R_D} = \frac{V_{out} - V_{in}}{R_F} + \beta\left[(V_b - V_{in} - V_{TH})(V_{out} - V_{in}) - \tfrac12(V_{out} - V_{in})^2\right].$$

在 $V_{in} = 0$（$V_{TH} = 0.7$ V）时，由此得到起始值：

$$\frac{V_{DD} - V_{out}}{R_D} = \frac{V_{out}}{R_F} + \beta\left[(V_b - 0.7)V_{out} - \tfrac12V_{out}^2\right].$$

反之，若 $V_{in} = 0$ 时的饱和区解 $V_{out}(0) = (R_D\|R_F)\left[V_{DD}/R_D - \tfrac12\beta(V_b - 0.7)^2\right]$ 不小于 $V_b - 0.7$，则 $M_1$ 一开始就处于饱和区（没有线性区段）。

线性区中的斜率： 此时漏极电流还通过 $g_{ds} = \beta(V_{GS} - V_{TH} - V_{DS})$ 依赖于 $v_{ds}$，且 $g_m = \beta V_{DS}$。在第 4 步的 KCL 中，给器件电流加上 $g_{ds}(v_{out} - v_{in})$：

$$\frac{dV_{out}}{dV_{in}} = \frac{g_m + g_{mb} + g_{ds} + 1/R_F}{g_{ds} + 1/R_D + 1/R_F} .$$

在深线性区，若 $g_{ds}$ 占主导，斜率接近 1。到达边界时 $g_{ds}$ 降为零，线性区斜率与饱和区斜率相等。

令 $u=V_b-V_{in}-V_{TH}(V_{in})$ 为过驱动电压。在线性区与饱和区边界，$V_{out}=V_{in}+u$，代入输出节点方程可得

$$\frac{V_{DD}-V_{in}-u}{R_D}=\frac{u}{R_F}+\frac{\beta u^2}{2},\qquad u>0.$$

在扫描的导通区间内求根。随输入增大，$V_{in}+u=V_b-V_{TH}(V_{in})$ 下降，故左侧增大。右侧随 $u$ 下降。若起点的左侧减右侧为负，则从线性区开始。

### 第 6 步 — 数值示例

仅为说明起见，取 $V_b = 1.5$ V，$\beta = 2\ \mathrm{mA/V^2}$，$R_D = R_F = 10\ \mathrm{k}\Omega$。

起点（$V_{in} = 0$，线性区）： 将线性区方程两边乘以 $R_D = 10\ \mathrm{k}\Omega$（$\beta R_D = 20\ \mathrm{V^{-1}}$）：

$$
\begin{aligned}
3 - V_{out} &= V_{out} + 20\left(0.8V_{out} - 0.5V_{out}^2\right)\\
10V_{out}^2 - 18V_{out} + 3 &= 0\\
V_{out} &= \frac{18 - \sqrt{324 - 120}}{20} = \frac{18 - 14.28}{20} = 0.186\ \mathrm{V},
\end{aligned}
$$

由于 $0.186\ \mathrm{V} < V_b - 0.7 = 0.8$ V，器件确实处于线性区。在其他输入电压下求解第 3–5 步的方程，得到：

代入示例参数求得边界坐标约为 $(0.3043,0.7331)$ V。将第 2 步的截止输入代入第 3 步的分压关系，得截止点约为 $(0.6641,1.8321)$ V。

| $V_{in}$ (V) | $V_{out}$ (V) | $M_1$ 的工作区 | 斜率 $dV_{out}/dV_{in}$ |
|---|---|---|---|
| 0 | 0.186 | 线性区 | 1.25 |
| 0.2 | 0.469 | 线性区 | 1.7 |
| 0.30 | 0.711 | 线性区 | 4.6 |
| 0.304 | 0.733 | 线性区/饱和区边界（$V_{out} = V_b - V_{TH}$） | 5.7（最大值） |
| 0.4 | 1.208 | 饱和区 | 4.3 |
| 0.5 | 1.561 | 饱和区 | 2.8 |
| 0.6 | 1.771 | 饱和区 | 1.4 |
| 0.664 | 1.832 | 截止点（$V_{in,off}$） | 0.5 |
| 1.0 | 2.000 | 截止 | 0.5 |
| 2.0 | 2.500 | 截止 | 0.5 |
| 3.0 | 3.000 | 截止 | 0.5 |

曲线先平缓上升，在线性区/饱和区边界附近变得非常陡峭，在饱和区内逐渐弯折变缓，并在 $V_{in} = 0.664$ V 处平滑地并入分压直线 $V_{out} = 1.5\ \mathrm{V} + V_{in}/2$，随后沿该直线一直到达 $(3, 3)$。

![传输特性示例](/q/R088/solution-01.zh.svg)

### 结果

共栅传输特性单调上升，并在 $V_{in}=V_{DD}$ 处达到 $V_{out}=V_{DD}$。用第 2、5 步的边界方程判断扫描中实际经过的工作区。

- 截止发生在 $V_{in,off}$ 处，其中 $V_b - V_{in,off} = V_{TH}(V_{in,off})$，$V_{TH}(V) = 0.7 + 0.45(\sqrt{0.9 + V} - \sqrt{0.9})$（体效应，$V_{SB} = V_{in}$）。它略低于 $V_b - 0.7$ V（$V_b = 1.5$ V 时为 0.664 V）。
- 截止（$V_{in} \ge V_{in,off}$）： 分压直线 $V_{out} = (R_FV_{DD} + R_DV_{in})/(R_D + R_F)$，斜率为 $R_D/(R_D + R_F)$，终点为 $(V_{DD}, V_{DD})$。
- 导通： $(V_{DD} - V_{out})/R_D = (V_{out} - V_{in})/R_F + I_{D1}$，因此 $V_{out}$ 位于该直线下方，且 $V_{in} \le V_{out}$。
- 当 $V_{out} \ge V_b - V_{TH}(V_{in})$ 时处于饱和区，$I_{D1} = \tfrac12\beta(V_b - V_{in} - V_{TH})^2$，斜率为 $(g_m + g_{mb} + 1/R_F)(R_D\|R_F)$，大于 $R_D/(R_D + R_F)$，并在截止点降到该值，曲线在那里与直线相切衔接。
- 当 $V_{out} < V_b - V_{TH}(V_{in})$ 时处于线性区，若 $\beta$ 较大，则出现在 $V_{in} = 0$ 附近。$V_{out}(0)$ 由 $(V_{DD} - V_{out})/R_D = V_{out}/R_F + \beta[(V_b - 0.7)V_{out} - V_{out}^2/2]$ 求得。图示参数下，斜率在线性区升高，到达饱和区边界时约为 5.67。
- 转折点： $V_{out} = V_b - V_{TH}(V_{in})$（线性区 → 饱和区）；$V_{in} = V_{in,off}$（截止，此时 $V_{out} = (R_FV_{DD} + R_DV_{in,off})/(R_D + R_F)$）；终点 $(V_{DD}, V_{DD})$。

**常见错误：** 画出反相的曲线，仿佛 $V_{in}$ 驱动的是栅极。这里 $V_{in}$ 驱动的是源极：提高它会减小 $V_{GS}$，因此 $M_1$ 吸取的电流减小，$V_{out}$ 上升。

**常见错误：** 认为 $M_1$ 一旦截止，就有 $V_{out} = V_{DD}$。$R_F$ 仍把输出端与输入源相连，因此 $V_{out}$ 沿分压直线变化，只有在 $V_{in} = V_{DD}$ 时才达到 $V_{DD}$。

**常见错误：** 把截止点放在 $V_{in} = V_b - 0.7$ V 处。由于衬底接地，$V_{SB} = V_{in}$ 使阈值升高，器件会更早截止。
