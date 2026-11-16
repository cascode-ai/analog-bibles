# 详细步骤 - R091

**思路。** 输出取自 $M_1$ 的源极，因此该电路是源极跟随器；$R_D$ 只决定漏极电压。跟踪 $M_1$ 从截止进入饱和区的过程，此时它是一个斜率小于 1 的跟随器，体效应（body effect）使斜率进一步减小；若 $R_D$ 足够大，它还会进入线性区，此时输出在由 $R_D$–$R_S$ 分压决定的上限处趋于平缓。最后用一个数值示例展示这两种情况。

### 第 1 步 — 基本关系与截止

设漏极电流为 $I_D$，则：

$$
\begin{aligned}
V_{out} &= V_S = I_DR_S,\\
V_D &= V_{DD} - I_DR_D,\\
V_{GS} &= V_{in} - V_{out},\\
V_{SB} &= V_{out} ,
\end{aligned}
$$

体效应给出

$$V_{TH}(V_{out}) = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - \sqrt{0.9}\right)\ \mathrm{V}.$$

没有电流时，$V_{out} = 0$，$V_{TH} = 0.7$ V，因此只有当 $V_{in} > 0.7$ V 时 $M_1$ 才导通：

$$V_{out} = 0 \qquad\text{for } V_{in} \le 0.7\ \mathrm{V}.$$

### 第 2 步 — 饱和区：跟随器方程

刚导通时，漏极电压接近 $V_{DD}$，远高于栅极电压，因此 $M_1$ 处于**饱和区**，$V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$。利用 $V_{in} = V_{GS} + V_{out}$ 和 $I_D = V_{out}/R_S$：

$$V_{in} = V_{out} + V_{TH}(V_{out}) + \sqrt{\frac{2V_{out}}{\beta R_S}} .$$

选定 $V_{out}$ 就可直接求出 $V_{in}$。输出等于输入减去一个电平移位 $V_{GS}$，它随电流缓慢增大：体效应会抬高阈值电压（threshold voltage），过驱动电压（overdrive voltage）也会增大。由于 $\lambda = 0$，饱和电流与漏极电压无关，因此在这一区域内 **$R_D$ 对 $V_{out}$ 没有影响**。

### 第 3 步 — 饱和区中的斜率

在小信号模型（small-signal model）中，$R_D$ 接在漏极 $d$ 与交流地之间，$R_S$ 接在 $out$ 与地之间。$M_1$ 从 $d$ 向 $out$ 流过电流 $g_mv_{gs} + g_{mb}v_{bs}$，其中 $v_{gs} = v_{in} - v_{out}$，$v_{bs} = -v_{out}$，$g_m = \sqrt{2\beta I_D}$，$g_{mb} = \eta g_m$，$\eta = \gamma/(2\sqrt{2|\phi_F| + V_{out}})$。

<!-- diagram: diagram-01.cir -->

对 $out$ 节点应用基尔霍夫电流定律（KCL），其中器件电流流入 $R_S$：

$$
\begin{aligned}
g_m(v_{in} - v_{out}) - g_{mb}v_{out} &= \frac{v_{out}}{R_S}\\
g_mv_{in} &= v_{out}\left(\frac{1}{R_S} + g_m + g_{mb}\right)\\
\frac{dV_{out}}{dV_{in}} &= \frac{g_m}{1/R_S + g_m + g_{mb}} = \frac{g_mR_S}{1 + (g_m + g_{mb})R_S} .
\end{aligned}
$$

- **在导通点**，$g_m = 0$：斜率为 0，曲线以相切的方式离开横轴。
- **随着电流增大**，斜率上升，并在 $g_mR_S \gg 1$ 时趋于其极限值
$$\frac{dV_{out}}{dV_{in}} \to \frac{g_mR_S}{(1 + \eta)g_mR_S} = \frac{1}{1 + \eta} ,$$
取 $\eta \approx 0.15$–$0.24$（对应 $V_{SB}$ 约在 1.5 V 到 0 之间）时，该值约为 **0.8–0.87**。
- 斜率**始终小于 1**：每个输入增量都有一部分落在 $V_{GS}$ 上，而且输出升高时体效应会使 $V_{TH}$ 升高。

### 第 4 步 — $M_1$ 何时进入线性区？

随着电流增大，漏极电压**下降**，而栅极电压上升。当漏极电压比栅极电压低一个阈值电压时，$M_1$ 离开饱和区：

$$V_D = V_{in} - V_{TH}(V_{out}) \quad\Longleftrightarrow\quad V_{DD} - \frac{R_D}{R_S}V_{out} = V_{in} - V_{TH}(V_{out}) .$$

在扫描终点 $V_{in} = V_{DD}$ 处，保持饱和的条件 $V_{DD} - I_DR_D \ge V_{DD} - V_{TH}$ 可简化为

$$I_DR_D \le V_{TH} .$$

因此，**若 $V_{in} = 3$ V 时 $R_D$ 上的压降小于一个阈值电压，跟随器就一直保持饱和直到 $V_{DD}$**，斜率趋于 $1/(1 + \eta)$；更大的 $R_D$ 会使 $M_1$ 在扫描结束之前进入线性区。

### 第 5 步 — 线性区：输出在上限处趋于平缓

漏极电压不可能低于源极电压（$V_{DS} \ge 0$）：

$$
\begin{aligned}
V_{DD} - I_DR_D &\ge I_DR_S\\
I_D &\le \frac{V_{DD}}{R_D + R_S}\\
V_{out} = I_DR_S &\le \frac{V_{DD}R_S}{R_D + R_S} .
\end{aligned}
$$

因此在线性区，$V_{out}$ **趋于平缓并逼近上限 $V_{DD}R_S/(R_S + R_D)$**（即 $M_1$ 相当于短路时的值），但达不到该值。线性区的沟道电导 $g_{ds}$ 使斜率降向零：

$$\frac{dV_{out}}{dV_{in}} = \frac{g_mR_S}{1 + (g_m + g_{mb})R_S + g_{ds}(R_D + R_S)}, \qquad g_m = \beta V_{DS} .$$

### 第 6 步 — 数值示例

为便于说明，取 $\beta = 10\ \mathrm{mA/V^2}$，$R_S = 1\ \mathrm{k}\Omega$，并比较 $R_D = 0$ 与 $R_D = 2\ \mathrm{k}\Omega$ 两种情况。

**详细计算饱和区中的一个点**，$V_{out} = 0.5$ V（$I_D = 0.5$ mA）：

$$
\begin{aligned}
V_{TH} &= 0.7 + 0.45(\sqrt{1.4} - \sqrt{0.9}) = 0.7 + 0.45(1.1832 - 0.9487) = 0.806\ \mathrm{V},\\
\sqrt{\frac{2V_{out}}{\beta R_S}} &= \sqrt{\frac{2(0.5\ \mathrm{V})}{(10\ \mathrm{mA/V^2})(1\ \mathrm{k}\Omega)}} = \sqrt{0.1}\ \mathrm{V} = 0.316\ \mathrm{V},\\
V_{in} &= 0.5 + 0.806 + 0.316 = 1.622\ \mathrm{V}.
\end{aligned}
$$

该点的斜率：$g_m = \sqrt{2(10\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 3.16$ mS，$\eta = 0.45/(2\times1.1832) = 0.190$，因此斜率为 $3.16/[1 + (1.190)(3.16)] = 3.16/4.76 = 0.66$。

**$R_D = 2\ \mathrm{k}\Omega$ 时进入线性区的点。** 在边界处 $V_{DS} = V_{ov}$，即 $V_{DD} - (R_D + R_S)I_D = \sqrt{2I_D/\beta}$；以 mA 为 $I_D$ 的单位，$3 - 3I_D = \sqrt{0.2I_D}$，因此 $9I_D^2 - 18.2I_D + 9 = 0$，$I_D = 0.862$ mA。由此得 $V_{out} = 0.862$ V，对应 $V_{in} = 0.862 + V_{TH}(0.862) + \sqrt{0.172} = 0.862 + 0.870 + 0.415 = 2.147$ V。上限为 $3\times1/(1 + 2) = 1$ V。

| $V_{in}$ (V) | $V_{out}$, $R_D = 0$ | $V_{out}$, $R_D = 2\ \mathrm{k}\Omega$ | 斜率（$R_D = 0$） | 斜率（$R_D = 2\ \mathrm{k}\Omega$） |
|---|---|---|---|---|
| ≤ 0.70 | 0 | 0 | 0 | 0 |
| 0.965 | 0.100 | 0.100 | 0.52 | 0.52 |
| 1.229 | 0.250 | 0.250 | 0.60 | 0.60 |
| 1.622 | 0.500 | 0.500 | 0.66 | 0.66 |
| 1.988 | 0.750 | 0.750 | 0.70 | 0.70 |
| 2.147 | 0.862 | 0.862（进入线性区） | 0.71 | 0.71 |
| 2.4 | 1.043 | 0.936 | 0.72 | 0.13 |
| 3.0 | 1.487 | 0.971 | 0.75 | 0.03 |

当 $R_D = 0$ 时，器件一直保持饱和直到 3 V（$I_DR_D = 0 < V_{TH}$）；在本例中，任何小于约 $V_{TH}/I_D = 0.97\ \mathrm{V}/1.49\ \mathrm{mA} \approx 0.65\ \mathrm{k}\Omega$ 的 $R_D$ 都是如此。当 $R_D = 2\ \mathrm{k}\Omega$ 时，曲线在 2.15 V 处弯折，并缓慢逼近 1 V 的上限。

### 结果

这是一个**源极跟随器**（同相）特性：

- **$V_{in} \le 0.7$ V：** $V_{out} = 0$。
- **饱和区：** $V_{out} = I_DR_S$，且 $V_{in} = V_{out} + V_{TH}(V_{out}) + \sqrt{2I_D/\beta}$。斜率 $g_mR_S/[1 + (g_m + g_{mb})R_S]$ 从 0 开始上升，当 $g_mR_S \gg 1$ 时趋于 $\approx 1/(1 + \eta)$（约 0.8–0.85），始终小于 1。$R_D$ 不影响这一区域（$\lambda = 0$）。
- 当漏极电压 $V_{DD} - I_DR_D$ 降到 $V_{in} - V_{TH}(V_{out})$ 以下，即 $V_{DD} - (R_D/R_S)V_{out} < V_{in} - V_{TH}$ 时，**进入线性区**。此后斜率减小，$V_{out}$ 趋于平缓并逼近上限 $V_{DD}R_S/(R_S + R_D)$（$M_1$ 相当于一个小电阻）。只有当 $R_D$（以及 $\beta$）足够大时，这一情况才会在 0–3 V 范围内出现：若在 $V_{in} = V_{DD}$ 时 $I_DR_D < V_{TH}$，跟随器会一直保持饱和直到终点。
- **转折点：** 0.7 V 处导通，按上述条件进入线性区，上限为 $V_{DD}R_S/(R_D + R_S)$。

**常见错误。** 把斜率画成等于（甚至大于）1。即使 $g_mR_S \gg 1$，体效应也把它限制在 $1/(1 + \eta) \approx 0.8$–$0.85$，而在小电流时斜率还要更小。

**常见错误。** 断言对任意 $R_D$，跟随器的斜率都约为 0.85 并一直保持到 3 V。若在扫描结束前 $I_DR_D$ 超过 $V_{TH}$，$M_1$ 就会进入线性区，$V_{out}$ 被限制在 $V_{DD}R_S/(R_S + R_D)$ 以下。

**常见错误。** 画出反相的曲线，或者在 0.7 V 以下画出非零输出。输出取自源极，源极随栅极升高而升高；而 $M_1$ 截止时，$R_S$ 中没有电流。
