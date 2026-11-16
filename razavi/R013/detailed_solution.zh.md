# 详细步骤 - R013

**思路。** $R_1$ 直接跨接在 $M_1$ 的漏极与源极之间，二者必须共同承载固定电流 $I_1$，因此源极电压 $V_S$ 会自行调整，直到满足基尔霍夫电流定律（KCL），并有 $I_X = I_1 - V_{DS}/R_1$。用 $V_S$ 和 $V_X$ 求出线性区、饱和区和截止的边界，然后跟踪 $I_X$ 和 $g_m$ 在整个扫描范围内的变化，并用一个数值示例把草图具体化。

### 第 1 步 — 端电压与 KCL 方程

把源极节点电压记为 $V_S$（未知）。于是

$$
\begin{aligned}
V_{GS} &= 2 - V_S,\\
V_{DS} &= V_X - V_S,\\
V_{SB} &= V_S - 0 = V_S .
\end{aligned}
$$

在源极节点列 KCL：$I_X$ 和 $R_1$ 的电流流入该节点，$I_1$ 流出：

$$I_X + \frac{V_X - V_S}{R_1} = I_1 \quad\Longrightarrow\quad I_X = I_1 - \frac{V_{DS}}{R_1}.$$

所以 $I_X$ 永远不会超过 $I_1$，并且只有当 $V_{DS}$ 较小时才较大。计入体效应，

$$V_{TH}(V_S) = 0.7 + 0.45\left(\sqrt{0.9 + V_S} - 0.9487\right)\ \mathrm{V}.$$

### 第 2 步 — 工作区边界

**线性区与饱和区。** 当 $V_{DS} \ge V_{GS} - V_{TH}$ 时 $M_1$ 饱和：

$$
\begin{aligned}
V_X - V_S &\ge 2 - V_S - V_{TH}\\
V_X &\ge 2 - V_{TH}(V_S).
\end{aligned}
$$

$V_S$ 只在 $V_{TH}$ 中出现，其余部分都被消去了：一旦漏极电位比栅极低一个阈值电压（threshold voltage）以上，器件就进入饱和区；对于典型的 $V_S$ 值，这发生在 $V_X \approx 1.1$–$1.3$ V。**低于该值时，$M_1$ 处于线性区。**

**截止。** 当 $2 - V_S \le V_{TH}(V_S)$ 时 $M_1$ 截止。令两者相等，并令 $u = \sqrt{0.9 + V_S}$（$V_S = u^2 - 0.9$）：

$$
\begin{aligned}
2 - (u^2 - 0.9) &= 0.7 + 0.45u - 0.4269\\
u^2 + 0.45u - 2.6269 &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 10.5076}}{2} = \frac{-0.45 + 3.2726}{2} = 1.4113\\
V_{S,\mathrm{off}} &= u^2 - 0.9 = 1.9918 - 0.9 = 1.09\ \mathrm{V}.
\end{aligned}
$$

（此时 $V_{TH} = 2 - 1.09 = 0.91$ V。若没有体效应，则为 $V_{S,\mathrm{off}} = 2 - 0.7 = 1.3$ V。）

截止时 $I_X = 0$，因此 $I_1$ 全部流经 $R_1$，得到 $V_{DS} = I_1R_1$，且

$$V_{X,\mathrm{off}} = V_{S,\mathrm{off}} + I_1R_1 \approx 1.09\ \mathrm{V} + I_1R_1 .$$

当 $V_X > V_{X,\mathrm{off}}$ 时（如果该值低于 3 V），$M_1$ 截止，$I_X = 0$，$V_S = V_X - I_1R_1$ 只是跟随 $V_X$ 变化。

### 第 3 步 — $V_X$ 较小时：处于线性区的 $M_1$ 与 $R_1$ 分担 $I_1$

在 $V_X = 0$ 时，流过 $R_1$ 的电流从漏极流向源极，因此源极电位**低于**地：$V_S = -V_{DS} = -(I_1 - I_X)R_1 < 0$。于是 $V_{GS} = 2 + V_{DS} > 2$ V，$M_1$ 深处于线性区，相当于一个电阻

$$R_{on} \approx \frac{1}{\beta\,(V_{GS} - V_{TH})}$$

它与 $R_1$ 并联，二者由 $I_1$ 供电：

<!-- diagram: diagram-01.cir -->

电流的分配为

$$I_X \approx I_1\,\frac{R_1}{R_1 + R_{on}} = I_1\,\frac{\beta R_1(V_{GS} - V_{TH})}{1 + \beta R_1(V_{GS} - V_{TH})},$$

这是 $I_1$ 中相当大的一部分，只有当 $\beta R_1(V_{GS} - V_{TH}) \gg 1$ 时才接近 $I_1$。

**示例：$I_1 = 1$ mA，$\beta = 1\ \mathrm{mA/V^2}$，$R_1 = 1\ \mathrm{k\Omega}$。** 令 $x = V_{DS} = -V_S$，线性区的精确 KCL 方程为

$$\beta\left[(2 + x - V_{TH})x - \tfrac12x^2\right] + \frac{x}{R_1} = I_1 .$$

试取 $x = 0.385$ V：

$$
\begin{aligned}
V_{SB} &= -0.385\ \mathrm{V} \quad(\text{bulk slightly above the source}),\\
V_{TH} &= 0.7 + 0.45\left(\sqrt{0.9 - 0.385} - 0.9487\right) = 0.7 + 0.45\,(0.7176 - 0.9487) = 0.596\ \mathrm{V},\\
V_{ov} &= 2 + 0.385 - 0.596 = 1.789\ \mathrm{V},\\
I_X &= (1\ \mathrm{mA/V^2})\left[(1.789)(0.385) - \tfrac12(0.385)^2\right]\mathrm{V^2} = (0.689 - 0.074)\ \mathrm{mA} = 0.615\ \mathrm{mA},\\
\frac{V_{DS}}{R_1} &= \frac{0.385\ \mathrm{V}}{1\ \mathrm{k\Omega}} = 0.385\ \mathrm{mA},\\
I_X + \frac{V_{DS}}{R_1} &= 1.000\ \mathrm{mA} = I_1 .\ \checkmark
\end{aligned}
$$

所以 **$I_X(0) \approx 0.61\,I_1$**。用分流公式估算，$R_{on} = 1/(1\ \mathrm{mA/V^2}\times1.789\ \mathrm{V}) = 559\ \Omega$，$I_X \approx 1000/1559 = 0.64$ mA，二者很接近。取 $R_1 = 10\ \mathrm{k\Omega}$ 时，同样的计算给出 $I_X(0) \approx 0.95\,I_1$；对于较弱的器件（$\beta = 0.2\ \mathrm{mA/V^2}$，$R_1 = 1\ \mathrm{k\Omega}$），只有约 $0.28\,I_1$，但此时源极电位约为 $-0.72$ V，低到足以使源-衬底结（source–bulk junction）分走一部分 $I_1$。

在主示例中，源极比接地的衬底低 0.385 V，因此源-衬底结略微正向偏置（forward-biased），但在这一电平下其电流可以忽略；只有当 $I_1R_1$ 把 $V_S$ 推到约 $-0.5$ V 以下时，它才开始导通。

### 第 4 步 — $I_X$ 随 $V_X$ 升高单调减小

升高 $V_X$ 也会迫使 $V_S$ 升高，这会削弱 $M_1$，而 $V_{DS}$ 仍在增大，于是更多的 $I_1$ 被推入 $R_1$。为说明这一点，设 $g_m$、$g_{mb}$ 和 $g_{ds}$ 分别为器件对 $V_{GS}$、对衬底和对 $V_{DS}$ 的灵敏度，并令 $G_1 = 1/R_1$。由于 $I_1$ 恒定，变化量 $dV_X$ 及其引起的 $dV_S$ 必须使源极节点的总电流保持不变：

$$\underbrace{g_{ds}(dV_X - dV_S) - (g_m + g_{mb})\,dV_S}_{dI_X} + G_1(dV_X - dV_S) = 0 .$$

解出 $dV_S$：

$$dV_S = \frac{g_{ds} + G_1}{g_m + g_{mb} + g_{ds} + G_1}\,dV_X ,$$

再代入 $dI_X = -G_1(dV_X - dV_S)$（由 $I_X = I_1 - V_{DS}/R_1$ 得到）：

$$
\begin{aligned}
dI_X &= -G_1\left(1 - \frac{g_{ds} + G_1}{g_m + g_{mb} + g_{ds} + G_1}\right)dV_X\\
\frac{dI_X}{dV_X} &= -\frac{G_1\,(g_m + g_{mb})}{g_m + g_{mb} + g_{ds} + G_1} < 0 .
\end{aligned}
$$

所以 $I_X$ 总是减小的。在饱和区且器件很强时（$g_m \gg G_1$，$g_{ds} \approx 0$），斜率趋于 $-1/R_1$：$V_S$ 几乎不动，$V_X$ 每多出一伏都加在 $R_1$ 上。接近截止时 $g_m \to 0$，斜率趋于零，因此 **$I_X$ 以相切的方式降到零**。

### 第 5 步 — 跨导

- **线性区**（$V_X < 2 - V_{TH}$）：$g_m = \beta V_{DS}$。它在 $V_X = 0$ 时较小（示例中为 $\beta\times0.385$ V），并随 $V_X$ 升高而**增大**，因为 $V_{DS} = (I_1 - I_X)R_1$ 在增大。
- **饱和区边缘**（$V_{DS} = V_{ov}$）：$g_m = \beta(V_{GS} - V_{TH}) = \beta V_{DS}$，达到最大值。
- **饱和区**：$g_m = \beta(V_{GS} - V_{TH}) = \sqrt{2\beta I_X}$，随 $I_X$ **下降**，并在截止时降为零。
- **截止**：$g_m = 0$。

所以 $g_m$ 先上升，在线性区/饱和区边界附近达到峰值，然后下降到零。

**边界处的示例数值**（$I_1 = 1$ mA，$\beta = 1\ \mathrm{mA/V^2}$，$R_1 = 1\ \mathrm{k\Omega}$）。此处 $V_{DS} = V_{ov}$，因此 KCL 方程为 $\tfrac12\beta V_{ov}^2 + V_{ov}/R_1 = I_1$：

$$
\begin{aligned}
\tfrac12V_{ov}^2 + V_{ov} &= 1 \quad(\text{V, mA units})\\
V_{ov}^2 + 2V_{ov} - 2 &= 0\\
V_{ov} &= -1 + \sqrt3 = 0.732\ \mathrm{V},
\end{aligned}
$$

得到 $I_X = \tfrac12(1\ \mathrm{mA/V^2})(0.732\ \mathrm{V})^2 = 0.268$ mA，$g_m = (1\ \mathrm{mA/V^2})(0.732\ \mathrm{V}) = 0.732$ mS。按第 2 步的方法求解 $V_S = 2 - V_{TH}(V_S) - 0.732$，得到 $V_S = 0.468$ V，$V_{TH} = 0.800$ V，因此边界位于 $V_X = V_S + V_{DS} = 0.468 + 0.732 = 1.20$ V（与 $V_X = 2 - V_{TH}$ 一致）。

### 第 6 步 — 完整的示例曲线

取 $I_1 = 1$ mA，$\beta = 1\ \mathrm{mA/V^2}$，$R_1 = 1\ \mathrm{k\Omega}$；每一行都用相应的平方律（square law）公式求解第 1 步的 KCL 方程：

| $V_X$ (V) | $V_S$ (V) | $V_{TH}$ (V) | 工作区 | $I_X$ (mA) | $g_m$ (mS) |
|---|---|---|---|---|---|
| 0 | −0.385 | 0.596 | 线性区 | 0.615 | 0.385 |
| 0.5 | 0.010 | 0.703 | 线性区 | 0.510 | 0.490 |
| 1.0 | 0.353 | 0.777 | 线性区 | 0.353 | 0.647 |
| 1.20 | 0.468 | 0.800 | 边界 | 0.268 | 0.732 |
| 1.5 | 0.640 | 0.832 | 饱和区 | 0.140 | 0.529 |
| 1.75 | 0.806 | 0.861 | 饱和区 | 0.056 | 0.334 |
| 2.0 | 1.005 | 0.894 | 饱和区 | 0.005 | 0.101 |
| 2.09 | 1.09 | 0.91 | 截止点 | 0 | 0 |
| 2.09 – 3 | $V_X - 1$ | 0.91 → 1.04 | 截止 | 0 | 0 |

这里 $V_{X,\mathrm{off}} = 1.09 + (1\ \mathrm{mA})(1\ \mathrm{k\Omega}) = 2.09$ V。若 $I_1R_1 > 3 - 1.09 = 1.91$ V，则在扫描范围内永远达不到截止：对于 $R_1 = 10\ \mathrm{k\Omega}$，$I_X$ 从 $0.95I_1$ 开始，以 ≈ $-1/R_1$ 的斜率缓慢下降，到 $V_X = 3$ V 时约为 $0.71I_1$。

### 结果

$R_1$ 跨接在漏极与源极之间，二者共同承载 $I_1$，因此

$$I_X = I_1 - \frac{V_{DS}}{R_1}, \qquad V_{GS} = 2 - V_S,\quad V_{SB} = V_S,\quad V_{DS} = V_X - V_S .$$

- **$V_X$ 较小时：** $V_S$ 低于地，$V_{GS} > 2$ V，因此 $M_1$ 处于**线性区**，相当于与 $R_1$ 并联的电阻 $R_{on} \approx 1/[\beta(V_{GS} - V_{TH})]$：$I_X(0) \approx I_1R_1/(R_1 + R_{on})$，是 $I_1$ 中相当大的一部分，只有当 $\beta R_1(V_{GS} - V_{TH}) \gg 1$ 时才接近 $I_1$（示例：$\beta = 1\ \mathrm{mA/V^2}$，$R_1 = 1\ \mathrm{k\Omega}$，$I_1 = 1$ mA 时为 $0.61I_1$）。
- **随着 $V_X$ 升高**，$I_X$ 单调**减小**：$V_S$ 升高，$V_{GS}$ 下降，$R_1$ 分走更多的 $I_1$。$M_1$ 在 $V_X = 2 - V_{TH}(V_S)$（约 1.1–1.3 V）处进入饱和区，此后 $I_X = \tfrac12\beta(2 - V_S - V_{TH})^2$。
- 当 $V_S = 2 - V_{TH}(V_S) \approx 1.09$ V 时**截止**（不计体效应时为 1.3 V），即在 $V_X \approx 1.09\ \mathrm{V} + I_1R_1$ 处；此后 $I_X = 0$（如果该值低于 3 V）。
- **$g_m$** $= \beta V_{DS}$（线性区，在 $V_X = 0$ 时较小，随后增大），在线性区/饱和区边界附近达到峰值，之后在饱和区 $g_m = \sqrt{2\beta I_X}$，并在截止时降为零。

**常见错误。** 认为对所有 $V_X$ 都有 $I_X = I_1$，或者把 $R_1$ 看成从漏极接到地。$R_1$ 与沟道并联，因此 $I_X = I_1 - V_{DS}/R_1$，它随 $V_{DS}$ 增大而减小。

**常见错误。** 把过驱动电压（overdrive voltage）写成 $2 - 0.7$ V，好像源极接地一样。源极浮动在 $V_S$，其值从低于地变化到高于 1 V；正是 $2 - V_S - V_{TH}(V_S)$ 决定了饱和边界在 1.2 V 附近、截止点在 $1.09\ \mathrm{V} + I_1R_1$。

**常见错误。** 认为 $V_X = 0$ 时 $M_1$ 处于饱和区。此时 $V_{DS}$ 只有零点几伏，而 $V_{GS} - V_{TH}$ 远大于 1 V，因此器件深处于线性区，其 $g_m = \beta V_{DS}$ 很小。
