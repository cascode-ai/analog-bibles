# 详细步骤 - R256

**思路。** 用平方律电流写出节点 X 和 Y 的基尔霍夫电流定律（KCL）方程，然后随着 $I_{REF}$ 增大，依次分析电路经历的各个区域：(i) 自偏置（self-biased）区域，此时源极跟随器（source follower）$M_3$ 提供一部分电流；(ii) $M_3$ 截止，电路成为带电阻负载的普通电流镜（current mirror）；(iii) $M_1$ 进入线性区。用一个数值例子（$\beta = 2.68\ \mathrm{mA/V^2}$，$R_1 = 10\ \mathrm{k}\Omega$）确定曲线的形状。

### 第 1 步 — 器件方程与 KCL

$M_3$（漏极接 $V_{DD}$，栅极接 Y，源极接 X）是一个从 Y 到 X 的源极跟随器，可以向 X 额外注入电流。它的衬底接地，因此 $V_{SB3} = V_X$，存在体效应。取 $\lambda = 0$：

$$
\begin{aligned}
I_{D2} &= \frac{\beta}{2}(V_X - V_{TH0})^2 \quad (M_2 \text{ diode-connected, always saturated}),\\
I_{D1} &= \frac{\beta}{2}(V_X - V_{TH0})^2 \quad \text{while } M_1 \text{ is saturated, i.e. } V_Y \ge V_X - V_{TH0},\\
I_{D3} &= \frac{\beta}{2}\left(V_Y - V_X - V_{TH3}\right)^2 \quad \text{if } V_Y - V_X > V_{TH3}, \text{ else } 0,
\end{aligned}
$$

其中

$$V_{TH3} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_X} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - 0.949\right)\ \mathrm{V}.$$

$M_3$ 导通时必定处于饱和区（saturation region）：由于 $V_Y \le V_{DD}$，有 $V_{DS3} = V_{DD} - V_X \ge V_Y - V_X - V_{TH3}$。

节点 X 和节点 Y 的 KCL 方程（栅极不取电流）：

$$I_{D2} = I_{REF} + I_{D3}, \tag{1}$$

$$\frac{V_{DD} - V_Y}{R_1} = I_{D1}. \tag{2}$$

当 $M_1$ 饱和时，$I_{D1} = I_{D2}$，把这一公共电流记为 $I_1$。于是 $V_Y = V_{DD} - R_1I_1$，$V_X = V_{TH0} + \sqrt{2I_1/\beta}$。

### 第 2 步 — $I_{REF} = 0$：环路自行导通

即使 $I_{REF} = 0$，电路也会导通：假如没有电流，则 $V_Y = V_{DD} = 3$ V，而 $V_X \le 0.7$ V，于是 $V_{GS3} \ge 2.3$ V，远高于 $V_{TH3}$，$M_3$ 必然导通。

当 $I_{REF} = 0$ 时，由 (1) 得 $I_{D3} = I_{D2} = I_1 \equiv I_0$：$M_3$ 为二极管连接（diode-connected）的 $M_2$ 提供电流，$M_1$ 复制该电流，并使其流过 $R_1$。沿着从 $V_{DD}$ 到地的环路，有 $V_Y = V_{GS2} + V_{GS3}$ 和 $V_Y = V_{DD} - R_1I_0$，因此 $I_0$ 满足

$$V_{DD} - R_1I_0 = \underbrace{V_{TH0} + \sqrt{\frac{2I_0}{\beta}}}_{V_{GS2} = V_X} + \underbrace{V_{TH3}(V_X) + \sqrt{\frac{2I_0}{\beta}}}_{V_{GS3}} .$$

这是一个**负反馈**环路：$I_0$ 增大会使 $V_Y = V_{DD} - R_1I_0$ 降低，从而使 $V_{GS3}$ 以及 $M_3$ 注入 X 的电流减小，于是 $I_{D2}$ 和 $I_{D1}$ 又回落。因此工作点是唯一且确定的。

**数值**（$\beta = 134\ \mu\mathrm{A/V^2}\times(10/0.5) = 2.68\ \mathrm{mA/V^2}$，$R_1 = 10\ \mathrm{k}\Omega$）。数值求解得 $I_0 = 89.6\ \mu\mathrm{A}$。验算：

$$
\begin{aligned}
V_{ov} &= \sqrt{2I_0/\beta} = \sqrt{2(89.6\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = \sqrt{0.0669}\ \mathrm{V} = 0.259\ \mathrm{V},\\
V_X &= 0.7 + 0.259 = 0.959\ \mathrm{V},\\
V_{TH3} &= 0.7 + 0.45\left(\sqrt{0.9 + 0.959} - 0.949\right) = 0.7 + 0.45(1.363 - 0.949) = 0.887\ \mathrm{V},\\
V_{GS3} &= 0.887 + 0.259 = 1.145\ \mathrm{V},\\
V_Y &= V_X + V_{GS3} = 0.959 + 1.145 = 2.104\ \mathrm{V},\\
V_{DD} - R_1I_0 &= 3 - (10\ \mathrm{k}\Omega)(89.6\ \mu\mathrm{A}) = 2.104\ \mathrm{V}. \ \checkmark
\end{aligned}
$$

$M_1$ 处于饱和区（$V_Y = 2.10$ V $> V_X - 0.7 = 0.26$ V）。体效应使 $V_{TH3}$ 升高了 0.19 V，从而使环路电流略有减小。

### 第 3 步 — $I_{REF}$ 较小：$M_3$ 让出电流

当 $I_{REF}$ 从零开始增大时，环路使 $I_1$（从而 $V_X$ 和 $V_Y$）几乎保持不变，因此新增的 $I_{REF}$ 大部分取代了原先由 $M_3$ 提供的电流。对于小的变化量，令

$$g_m = \beta(V_X - V_{TH0}) \ (M_1, M_2), \qquad g_{m3} = \beta(V_Y - V_X - V_{TH3}), \qquad g_{mb3} = g_{m3}\,\frac{\gamma}{2\sqrt{2|\phi_F| + V_X}},$$

由 $V_X = V_{TH0} + \sqrt{2I_1/\beta}$ 和 $V_Y = V_{DD} - R_1I_1$ 得

$$dV_X = \frac{dI_1}{g_m}, \qquad dV_Y = -R_1\,dI_1 .$$

$M_3$ 电流的变化量为：

$$
\begin{aligned}
dI_{D3} &= g_{m3}(dV_Y - dV_X) - g_{mb3}\,dV_X\\
&= g_{m3}\left(-R_1\,dI_1 - \frac{dI_1}{g_m}\right) - g_{mb3}\frac{dI_1}{g_m}\\
&= -\,dI_1\left[g_{m3}R_1 + \frac{g_{m3} + g_{mb3}}{g_m}\right].
\end{aligned}
$$

代入 (1)，即 $dI_1 = dI_{REF} + dI_{D3}$，并合并 $dI_1$ 项：

$$
\begin{aligned}
dI_1\left[1 + g_{m3}R_1 + \frac{g_{m3} + g_{mb3}}{g_m}\right] &= dI_{REF},\\
\frac{dV_Y}{dI_{REF}} = \frac{-R_1}{1 + g_{m3}R_1 + (g_{m3} + g_{mb3})/g_m}, &\qquad \frac{dV_X}{dI_{REF}} = \frac{1/g_m}{1 + g_{m3}R_1 + (g_{m3} + g_{mb3})/g_m}.
\end{aligned}
$$

**$I_{REF} = 0$ 处的数值**（三个器件都流过 89.6 μA）：

$$
\begin{aligned}
g_m = g_{m3} &= \beta V_{ov} = (2.68\ \mathrm{mA/V^2})(0.259\ \mathrm{V}) = 0.693\ \mathrm{mS},\\
g_{mb3} &= 0.693\ \mathrm{mS}\times\frac{0.45}{2(1.363)} = 0.114\ \mathrm{mS},\\
\text{denominator} &= 1 + (0.693\ \mathrm{mS})(10\ \mathrm{k}\Omega) + \frac{0.693 + 0.114}{0.693} = 1 + 6.93 + 1.17 = 9.10,\\
\frac{dV_Y}{dI_{REF}} &= -\frac{10\ \mathrm{k}\Omega}{9.10} = -1.10\ \mathrm{k}\Omega, \qquad \frac{dV_X}{dI_{REF}} = \frac{1.44\ \mathrm{k}\Omega}{9.10} = 0.16\ \mathrm{k}\Omega .
\end{aligned}
$$

因此 **$V_X$ 仅略微上升，而 $V_Y$ 缓慢下降**。随着 $I_{D3}$ 减小，$g_{m3}$ 和 $g_{mb3}$ 趋于零，$V_Y$ 的斜率平滑地变陡并趋向 $-R_1$：在这一区域，$V_Y$ 曲线向下弯曲。

### 第 4 步 — 转折点：$M_3$ 截止

当 $V_Y - V_X = V_{TH3}$ 时，$M_3$ 停止导通。此时 $I_1 = I_{REF}$，因此

$$V_{DD} - R_1I_{REF}^* = V_{GS}(I_{REF}^*) + V_{TH3}(V_X), \qquad V_{GS}(I) = 0.7\ \mathrm{V} + \sqrt{2I/\beta}.$$

对于该例，试取 $I_{REF}^* = 112\ \mu\mathrm{A}$：

$$
\begin{aligned}
V_X &= 0.7 + \sqrt{2(112\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.7 + 0.289 = 0.989\ \mathrm{V},\\
V_{TH3} &= 0.7 + 0.45\left(\sqrt{1.889} - 0.949\right) = 0.892\ \mathrm{V},\\
V_X + V_{TH3} &= 1.881\ \mathrm{V}, \qquad V_{DD} - R_1I_{REF}^* = 3 - 1.12 = 1.880\ \mathrm{V}. \ \checkmark
\end{aligned}
$$

因此 $M_3$ 在 $I_{REF}^* \approx 112\ \mu\mathrm{A}$ 处截止，此时 $V_X \approx 0.99$ V，$V_Y \approx 1.88$ V。

### 第 5 步 — $M_3$ 截止：带电阻负载的普通电流镜

当 $I_{REF} > I_{REF}^*$ 时，$I_{D3} = 0$，$I_{D2} = I_{REF}$，只要 $M_1$ 饱和，就会复制这一电流：

$$V_X = 0.7\ \mathrm{V} + \sqrt{\frac{2I_{REF}}{\beta}} \ \ \text{(slow, square-root rise)}, \qquad V_Y = V_{DD} - R_1I_{REF} \ \ \text{(straight line, slope } -R_1).$$

$M_3$ 不会重新导通：$V_Y$ 下降而 $V_X$ 上升，因此 $V_Y - V_X$ 只会越来越低于 $V_{TH3}$。

### 第 6 步 — $M_1$ 进入线性区；$V_Y$ 在零附近趋于平坦

当 $V_Y = V_X - V_{TH0}$ 时，$M_1$ 退出饱和区：

$$V_{DD} - R_1I_{REF} = \sqrt{\frac{2I_{REF}}{\beta}} .$$

例如，在 $I_{REF} = 256\ \mu\mathrm{A}$ 处，$3 - 2.56 = 0.44$ V，而 $\sqrt{2(256\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.437$ V，因此饱和区边界约在 256 μA 处（$V_X = 1.14$ V，$V_Y = 0.44$ V）。

超过该点后，$M_1$ 越来越像一个电阻 $R_{on1} = 1/[\beta(V_X - V_{TH0})]$，且 $V_Y \approx V_{DD}\,R_{on1}/(R_1 + R_{on1})$。由于 $V_X$ 持续上升，$R_{on1}$ 不断减小，**$V_Y$ 趋于平坦并逼近零**；无论 $I_{REF}$ 多大，$M_1$ 的电流都饱和在 $V_{DD}/R_1 = 0.3$ mA 附近。$V_X$ 仍然跟随 $V_{GS}(I_{REF})$ 变化，因为全部 $I_{REF}$ 都流过 $M_2$。

### 第 7 步 — 用于画草图的数值表

计入体效应、按平方律模型对 (1)–(2) 完整求解的结果（$\beta = 2.68\ \mathrm{mA/V^2}$，$R_1 = 10\ \mathrm{k}\Omega$）：

| $I_{REF}$ | $V_X$ (V) | $V_Y$ (V) | $I_{D3}$ | 工作区 |
|---|---|---|---|---|
| 0 | 0.959 | 2.104 | 89.6 μA | $M_3$ 导通（自偏置环路） |
| 50 μA | 0.968 | 2.041 | 45.9 μA | $M_3$ 导通 |
| 100 μA | 0.981 | 1.939 | 6.1 μA | $M_3$ 导通 |
| 112 μA | 0.989 | 1.881 | 0 | $M_3$ 截止 |
| 150 μA | 1.035 | 1.500 | 0 | 电流镜，$M_1$ 饱和 |
| 200 μA | 1.086 | 1.000 | 0 | 电流镜，$M_1$ 饱和 |
| 256 μA | 1.137 | 0.437 | 0 | $M_1$ 处于线性区边缘 |
| 500 μA | 1.311 | 0.205 | 0 | $M_1$ 处于线性区 |
| 1 mA | 1.564 | 0.134 | 0 | $M_1$ 处于线性区 |

### 结果

- **$I_{REF}$ 较小（包括为零）时：** 环路 $M_3 \to M_2 \to M_1 \to R_1$ 是一个能自行导通的负反馈环路。$M_3$ 提供 $I_{D3} = I_{D1} - I_{REF}$，且 $V_Y = V_X + V_{GS3}$。在 $I_{REF} = 0$ 时，环路电流 $I_0$ 满足 $V_{DD} - R_1I_0 = V_{GS2}(I_0) + V_{GS3}(I_0)$，其中 $V_{TH3}$ 因体效应而升高（$V_{SB3} = V_X$）。随着 $I_{REF}$ 增大，$V_X$ 略有上升，$V_Y$ 缓慢下降，同时 $M_3$ 承担的份额逐渐减小。
- **转折点：** $M_3$ 在由 $V_{DD} - R_1I_{REF}^* = V_{GS}(I_{REF}^*) + V_{TH3}(V_X)$ 确定的 $I_{REF}^*$ 处截止。
- **此后：** $V_X = 0.7 + \sqrt{2I_{REF}/\beta}$（缓慢上升），$V_Y = V_{DD} - R_1I_{REF}$（线性下降，斜率为 $-R_1$）。
- **$I_{REF}$ 较大时：** 当 $V_Y < V_X - 0.7$ V 时，$M_1$ 进入线性区，$V_Y$ 在零附近趋于平坦。
- **示例**（$\beta = 2.68\ \mathrm{mA/V^2}$，$R_1 = 10\ \mathrm{k}\Omega$）：$I_{REF} = 0$ 时，$V_X \approx 0.96$ V，$V_Y \approx 2.10$ V（环路电流 90 μA）；约从 112 μA 起 $M_3$ 截止（$V_Y \approx 1.88$ V）；超过约 256 μA 后 $M_1$ 处于线性区；在 1 mA 时，$V_X \approx 1.56$ V，$V_Y \approx 0.13$ V。

**常见错误。** 假设 $M_3$ 对所有 $I_{REF}$ 都截止，并从零开始就写成 $V_Y = V_{DD} - R_1I_{REF}$。在 $I_{REF}$ 较小时，这会使 $V_Y$ 接近 3 V、$V_X$ 接近 0.7 V，$M_3$ 的栅源电压超过 2 V，因此它必然导通。

**常见错误。** 认为 $I_{REF}$ 较大时 $M_3$ 导通得更强，并把 $V_X$ 拉向 $V_{DD}$。$M_3$ 导通需要 $V_Y - V_X > V_{TH3}$，但随着 $I_{REF}$ 增大，$V_Y$ 下降而 $V_X$ 上升，因此 $M_3$ 截止后一直保持截止。

**常见错误。** 把 $M_3$ 当作二极管负载或 PMOS 负载，或者忽略它的体效应。$M_3$ 是一个 NMOS 源极跟随器，其源极比衬底高约 1 V，因此它的阈值电压（threshold voltage）比 $V_{TH0}$ 高约 0.19 V，这会使 $I_{REF} = 0$ 时的工作点和转折点都发生移动。
