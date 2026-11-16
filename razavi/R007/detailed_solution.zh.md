# 详细步骤 - R007

**思路。** $M_1$ 中电位较低的扩散区端（diffusion terminal）是源极，因此扫描范围在 $V_X = 1$ V 处分为两段。在每一段中，计入体效应（衬底接地，而不是接源极）计算阈值电压（threshold voltage），确定工作区，再计算平方律（square law）电流和跨导。

### 第 1 步 — 源极端与阈值电压

当 $V_X < 1$ V 时，电位较低的 $V_X$ 端是源极，1 V 端是漏极；当 $V_X > 1$ V 时，两者角色互换；当 $V_X = 1$ V 时，两端电位相同，$I_X = 0$。衬底接地时，

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_{SB}} - 0.9487\right)\ \mathrm{V}.$$

### 第 2 步 — $V_X < 1$ V 时的工作区

源极接 $V_X$，漏极接 1 V，栅极接 1.9 V，衬底接 0：

$$
\begin{aligned}
V_{GS} &= 1.9 - V_X,\\
V_{DS} &= 1 - V_X,\\
V_{SB} &= V_X - 0 = V_X .
\end{aligned}
$$

线性区要求 $V_{DS} < V_{GS} - V_{TH}$：

$$
\begin{aligned}
1 - V_X &< 1.9 - V_X - V_{TH}\\
V_{TH} &< 0.9\ \mathrm{V}.
\end{aligned}
$$

$V_X$ 被消去了：栅极电位始终比漏极高 0.9 V。在 $0 \le V_X < 1$ V 范围内，阈值电压的变化范围为

$$V_{TH}(0) = 0.700\ \mathrm{V} \quad\text{to}\quad V_{TH}(1\ \mathrm{V}) = 0.7 + 0.45(\sqrt{1.9} - 0.9487) = 0.7 + 0.45\times0.4297 = 0.893\ \mathrm{V}.$$

两者都低于 0.9 V，因此**对所有 $V_X < 1$ V，$M_1$ 都处于线性区**（在 $V_X = 1$ V 附近只是勉强满足）。

### 第 3 步 — $V_X < 1$ V 时的电流

线性区电流从漏极（1 V）流向源极（$V_X$），

$$I_{D} = \beta\left[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2\right] = \beta\left[(1.9 - V_X - V_{TH})(1 - V_X) - \tfrac12(1 - V_X)^2\right],$$

即从 $M_1$ 流出，流入 $V_X$ 电源，与 $I_X$ 的方向**相反**。因此

$$I_X = -I_D = -\beta\left[(1.9 - V_X - V_{TH})(1 - V_X) - \tfrac12(1 - V_X)^2\right].$$

逐点计算（阈值电压、过驱动电压、电流）：

- $V_X = 0$：$V_{TH} = 0.700$ V，$V_{ov} = 1.9 - 0.700 = 1.200$ V，$V_{DS} = 1$ V。
$$I_X = -\beta\left[(1.2\ \mathrm{V})(1\ \mathrm{V}) - \tfrac12(1\ \mathrm{V})^2\right] = -\beta(1.2 - 0.5)\ \mathrm{V^2} = -0.70\beta\ \mathrm{V^2}.$$
- $V_X = 0.25$ V：$V_{TH} = 0.7 + 0.45(\sqrt{1.15} - 0.9487) = 0.7 + 0.45\times0.1237 = 0.756$ V，$V_{ov} = 1.65 - 0.756 = 0.894$ V，$V_{DS} = 0.75$ V。
$$I_X = -\beta\left[(0.894)(0.75) - \tfrac12(0.75)^2\right]\ \mathrm{V^2} = -\beta(0.671 - 0.281)\ \mathrm{V^2} = -0.39\beta\ \mathrm{V^2}.$$
- $V_X = 0.5$ V：$V_{TH} = 0.7 + 0.45(\sqrt{1.4} - 0.9487) = 0.7 + 0.45\times0.2345 = 0.806$ V，$V_{ov} = 1.4 - 0.806 = 0.594$ V，$V_{DS} = 0.5$ V。
$$I_X = -\beta\left[(0.594)(0.5) - \tfrac12(0.5)^2\right]\ \mathrm{V^2} = -\beta(0.297 - 0.125)\ \mathrm{V^2} = -0.17\beta\ \mathrm{V^2}.$$
- $V_X = 0.75$ V：$V_{TH} = 0.7 + 0.45(\sqrt{1.65} - 0.9487) = 0.7 + 0.45\times0.3358 = 0.851$ V，$V_{ov} = 1.15 - 0.851 = 0.299$ V，$V_{DS} = 0.25$ V。
$$I_X = -\beta\left[(0.299)(0.25) - \tfrac12(0.25)^2\right]\ \mathrm{V^2} = -\beta(0.0747 - 0.0313)\ \mathrm{V^2} = -0.044\beta\ \mathrm{V^2}.$$
- $V_X = 1$ V：$V_{DS} = 0$，因此 $I_X = 0$。

**形状。** 令 $\eta = \partial V_{TH}/\partial V_{SB} = \gamma/(2\sqrt{0.9 + V_{SB}})$，则斜率为 $dI_X/dV_X = \beta\left[V_{ov} + \eta\,V_{DS}\right]$：$V_X = 0$ 时为 $1.44\beta$（V），到 $V_X = 1$ V 时只有 $0.0066\beta$。所以 $I_X$ 从 $-0.70\beta$ 开始陡峭上升，随后平缓地趋于零，曲线向下凹（concave down）；这是因为 $V_{GS}$ 下降的同时，体效应使 $V_{TH}$ 不断升高。

### 第 4 步 — $V_X > 1$ V 时的工作区与电流

此时 1 V 端是源极：

$$
\begin{aligned}
V_{GS} &= 1.9 - 1 = 0.9\ \mathrm{V},\\
V_{SB} &= 1 - 0 = 1\ \mathrm{V},\\
V_{DS} &= V_X - 1 ,
\end{aligned}
$$

因此只有 $V_{DS}$ 变化。$V_{SB} = 1$ V 时，

$$V_{TH} = 0.7 + 0.45\left(\sqrt{1.9} - \sqrt{0.9}\right) = 0.7 + 0.45\,(1.3784 - 0.9487) = 0.7 + 0.1934 = 0.8934\ \mathrm{V},$$

$$V_{ov} = V_{GS} - V_{TH} = 0.9 - 0.8934 = 0.0066\ \mathrm{V} \approx 7\ \mathrm{mV}.$$

**器件勉强导通。** 一旦 $V_{DS} > V_{ov}$，即 $V_X > 1.0066$ V，它就离开线性区，进入饱和区，电流为

$$I_X = \tfrac12\beta V_{ov}^2 = \tfrac12\beta\,(0.0066\ \mathrm{V})^2 = \tfrac12\beta\,(4.39\times10^{-5}\ \mathrm{V^2}) \approx 2.2\times10^{-5}\,\beta\ \mathrm{V^2}.$$

取 $\beta = 1\ \mathrm{mA/V^2}$ 时，该电流约为 22 nA，而 $V_X = 0$ 时为 0.7 mA。此时 $I_X$ 为正（电流从 $V_X$ 流入 $M_1$），但**实际上为零**，并且直到 $V_X = 3$ V 都保持不变；计入沟道长度调制（channel-length modulation）时只略有增大。在实际器件中，如此小的过驱动电压使 $M_1$ 处于弱反型（weak inversion）的边缘，只有很小的、同样可以忽略的亚阈值电流。

**若没有体效应**，过驱动电压将为 $0.9 - 0.7 = 0.2$ V，器件将在 $V_X = 1.2$ V 时进入饱和区，平台电流为 $I_X = \tfrac12\beta(0.2\ \mathrm{V})^2 = 0.02\beta\ \mathrm{V^2}$，约大 900 倍。正是 $V_{TH}$ 升高的 0.19 V 使 $M_1$ 几乎关断。

### 第 5 步 — 跨导

**线性区**（$V_X < 1$ V）：将 $\beta[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2]$ 对 $V_{GS}$ 求导，

$$g_m = \beta V_{DS} = \beta\,(1 - V_X),$$

它从 $V_X = 0$ 时的 $\beta\times(1\ \mathrm{V})$ **线性**下降到 $V_X = 1$ V 时的零：$V_X = 0$、0.25、0.5、0.75 和 1 V 时分别为 1.0、0.75、0.5、0.25 和 0（单位为 $\beta\cdot$V）。在线性区，$g_m$ 由 $V_{DS}$ 决定，而不是由过驱动电压决定。

**略高于 1 V**（$1 < V_X < 1.0066$ V，线性区）：$g_m = \beta V_{DS} = \beta(V_X - 1)$，从 0 上升到 $0.0066\beta$。

**饱和区**（$V_X > 1.0066$ V）：

$$g_m = \beta V_{ov} = \beta\times0.0066\ \mathrm{V} \approx 0.0066\beta\ \mathrm{V} \approx 0 ,$$

而没有体效应时为 $\beta\times0.2\ \mathrm{V} = 0.2\beta$。

### 第 6 步 — 草图小结

| $V_X$ (V) | 源极端 | 工作区 | $I_X/\beta$ (V²) | $g_m/\beta$ (V) |
|---|---|---|---|---|
| 0 | $V_X$ | 线性区 | −0.70 | 1.00 |
| 0.25 | $V_X$ | 线性区 | −0.39 | 0.75 |
| 0.5 | $V_X$ | 线性区 | −0.17 | 0.50 |
| 0.75 | $V_X$ | 线性区 | −0.044 | 0.25 |
| 1.0 | — | — | 0 | 0 |
| 1.0066 – 3 | 1 V 节点 | 饱和区（勉强导通） | ≈ +2.2×10⁻⁵ | ≈ 0.0066 |

- **$I_X$**：为负，从 $-0.70\beta$ 上升，并在 $V_X = 1$ V 处平缓地趋于零；之后直到 3 V 基本为零（一个很小的正常数）。
- **$g_m$**：一条直线，从 $\beta\cdot(1\ \mathrm{V})$ 下降到 $V_X = 1$ V 处的零，之后基本为零。

### 结果

- **$0 \le V_X < 1$ V：** $V_X$ 节点是源极（$V_{GS} = 1.9 - V_X$，$V_{SB} = V_X$，$V_{DS} = 1 - V_X$）。由于始终有 $V_{TH} < 0.9$ V，$M_1$ 处于**线性区**，电流从 1 V 电源流入 $V_X$ 电源：
$$I_X = -\beta\left[(1.9 - V_X - V_{TH})(1 - V_X) - \tfrac12(1 - V_X)^2\right],$$
$V_X = 0$ 时为 $-0.70\beta$，0.25 V 时为 $-0.39\beta$，0.5 V 时为 $-0.17\beta$，0.75 V 时为 $-0.044\beta$，1 V 时为 0。跨导 $g_m = \beta V_{DS} = \beta(1 - V_X)$，从 $\beta\cdot(1\ \mathrm{V})$ 线性下降到 0。
- **$V_X > 1$ V：** 1 V 节点是源极，$V_{GS} = 0.9$ V，$V_{SB} = 1$ V，因此 $V_{TH} = 0.893$ V，过驱动电压只有约 7 mV。$M_1$ 在比 1 V 高出几 mV 时即进入饱和区，电流为 $I_X \approx \tfrac12\beta(0.0066)^2 \approx 2\times10^{-5}\beta$：实际上为**零**（实际器件中是很小的亚阈值电流），并且直到 3 V 都保持不变，$g_m \approx 0$。
- 若没有体效应，$M_1$ 将在 $V_X = 1.2$ V 时进入饱和区，此时 $I_X = 0.02\beta$，$g_m = 0.2\beta$。

**常见错误。** 对所有 $V_X$ 都把 1 V 节点当作源极，从而得出 $V_X < 1$ V 时 $I_X = 0$ 的结论。在该范围内，$V_X$ 端才是源极，$V_{GS} = 1.9 - V_X$ 很大，有相当大的电流**从** $M_1$ 流出，流入 $V_X$（$I_X < 0$）。

**常见错误。** 在 $V_X > 1$ V 时忽略体效应，预测出一个 $0.02\beta$ 的明显平台。$V_{SB} = 1$ V 使阈值电压升高到 0.893 V，只剩下 7 mV 的过驱动电压，因此电流和 $g_m$ 基本为零。

**常见错误。** 在 $V_X < 1$ V 时使用 $g_m = \beta(V_{GS} - V_{TH})$。此时器件处于线性区，$g_m = \beta V_{DS}$；在 $V_X = 1$ V 处使 $g_m$ 降为零的是趋于零的 $V_{DS}$，而不是过驱动电压。
