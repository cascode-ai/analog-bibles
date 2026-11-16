# 详细步骤 - R090

**思路。** 这是一个带源极负反馈电阻 $R_S$ 的共源（common-source，CS）级。跟踪 $M_1$ 从截止经饱和区进入线性区的过程。在饱和区，以 $I_D$ 为参数描述曲线，并计入体效应（body effect）使阈值升高（$V_{SB} = I_DR_S$），再由带源极负反馈的放大级的小信号模型（small-signal model）求出斜率。在线性区，求出 $V_{out}$ 所趋近的下限。最后用一个数值示例展示曲线形状。

### 第 1 步 — 基本关系与截止

设漏极电流为 $I_D$，则：

$$
\begin{aligned}
V_S &= I_DR_S &&\text{(source voltage)},\\
V_{out} &= V_{DD} - I_DR_D &&\text{(drain voltage)},\\
V_{GS} &= V_{in} - I_DR_S,\\
V_{SB} &= V_S - 0 = I_DR_S ,
\end{aligned}
$$

因此随着电流增大，体效应使阈值升高：

$$V_{TH}(V_S) = 0.7 + 0.45\left(\sqrt{0.9 + V_S} - \sqrt{0.9}\right)\ \mathrm{V}.$$

没有电流时，$V_S = 0$，且恰好有 $V_{TH} = V_{TH0} = 0.7$ V。因此当 $V_{in} \le 0.7$ V 时 $M_1$ 截止，此时

$$V_{out} = V_{DD} = 3\ \mathrm{V},$$

导通点恰好位于 $V_{in} = V_{TH0} = 0.7$ V。

### 第 2 步 — 饱和区：大信号（large-signal）方程

刚导通时，漏极电压接近 $V_{DD}$，远高于栅极电压，因此 $M_1$ 处于**饱和区**，$V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$。再加上 $V_S$：

$$V_{in} = V_{TH}(I_DR_S) + \sqrt{\frac{2I_D}{\beta}} + I_DR_S, \qquad V_{out} = V_{DD} - R_DI_D .$$

每选定一个 $I_D$，就直接得到曲线上的一个点 $(V_{in}, V_{out})$。输入电压由三部分分担：$V_{TH}$，略高于 0.7 V 且随电流增大而升高；过驱动电压（overdrive voltage），只按 $\sqrt{I_D}$ 增长；以及 $R_S$ 上的压降，线性增长。电流较大时，$I_DR_S$ 项占主导，因此输入的每一个增量大部分都落在 $R_S$ 上。

### 第 3 步 — 饱和区中的斜率（小信号模型）

在小信号模型中，$R_D$ 接在 $out$ 与交流地之间，$R_S$ 接在源极 $s$ 与地之间。$M_1$ 贡献两个从 $out$ 流向 $s$ 的电流：$g_mv_{gs}$（其中 $v_{gs} = v_{in} - v_s$）和 $g_{mb}v_{bs}$（其中 $v_{bs} = -v_s$），这里 $g_m = \sqrt{2\beta I_D}$，$g_{mb} = \eta g_m$，$\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$。

<!-- diagram: diagram-01.cir -->

小信号漏极电流 $i$ 流过 $R_S$，因此 $v_s = iR_S$：

$$
\begin{aligned}
i &= g_m(v_{in} - v_s) + g_{mb}(0 - v_s) = g_mv_{in} - (g_m + g_{mb})\,iR_S\\
i\left[1 + (g_m + g_{mb})R_S\right] &= g_mv_{in}\\
i &= \frac{g_m}{1 + (g_m + g_{mb})R_S}\,v_{in} .
\end{aligned}
$$

由 $v_{out} = -iR_D$ 得

$$\frac{dV_{out}}{dV_{in}} = -\frac{g_mR_D}{1 + (g_m + g_{mb})R_S} .$$

- **在导通点**，$g_m = 0$：斜率为**零**，曲线以相切的方式离开 $V_{DD}$ 电平。
- **随着电流增大**，斜率变陡；一旦 $g_mR_S \gg 1$，
$$\frac{dV_{out}}{dV_{in}} \approx -\frac{g_mR_D}{(1 + \eta)g_mR_S} = -\frac{R_D}{(1 + \eta)R_S} .$$
曲线变成**近似为斜率 $\approx -R_D/R_S$ 的直线**（按 $1 + \eta \approx 1.2$ 有所减小）：源极负反馈使增益等于电阻之比，从而使特性曲线线性化。

### 第 4 步 — 进入线性区

当满足下式时，$M_1$ 离开饱和区：

$$V_{out} = V_{in} - V_{TH}(V_S), \qquad\text{equivalently}\qquad V_{DS} = V_{ov}:\quad V_{DD} - (R_D + R_S)I_D = \sqrt{\frac{2I_D}{\beta}} ,$$

这里用到了 $V_{DS} = V_{out} - V_S = V_{DD} - (R_D + R_S)I_D$；由第二种形式可以直接解出边界电流。

只有当 $R_D$ 足够大时，这一转变才会在扫描范围内发生。若在 $V_{in} = V_{DD}$ 时，$R_D$ 上的压降仍小于一个阈值电压，即 $R_DI_D < V_{TH}$，则器件始终保持饱和，不存在线性区段。

### 第 5 步 — 线性区：曲线的下限

在线性区，沟道电导 $g_{ds} = \beta(V_{GS} - V_{TH} - V_{DS})$ 给器件电流增加一项 $g_{ds}(v_{out} - v_s)$；再利用 $g_m = \beta V_{DS}$，得

$$\frac{dV_{out}}{dV_{in}} = -\frac{g_mR_D}{1 + (g_m + g_{mb})R_S + g_{ds}(R_D + R_S)} .$$

随着 $g_{ds}$ 增大，斜率的幅值**减小**并趋于零。

**下限。** 漏极电压不可能低于源极电压，即 $V_{DS} \ge 0$，因此

$$
\begin{aligned}
V_{DD} - I_DR_D &\ge I_DR_S\\
I_D &\le \frac{V_{DD}}{R_D + R_S}\\
V_{out} = V_{DD} - I_DR_D &\ge V_{DD} - \frac{V_{DD}R_D}{R_D + R_S} = \frac{V_{DD}R_S}{R_D + R_S} .
\end{aligned}
$$

达到该极限需要 $M_1$ 是理想短路（栅极电压无穷大），因此 $V_{out}$ **从上方趋近 $V_{DD}R_S/(R_D + R_S)$，在 $V_{in} = V_{DD}$ 时仍略高于该值**；它永远不会达到 0 V。

### 第 6 步 — 数值示例

为便于说明，取 $\beta = 10\ \mathrm{mA/V^2}$，$R_D = 2\ \mathrm{k}\Omega$，$R_S = 1\ \mathrm{k}\Omega$。于是下限为 $3\times1/(1 + 2) = 1$ V，极限斜率约为 $-2/1.18 \approx -1.7$。

**详细计算饱和区中的一个点**，$I_D = 0.5$ mA：

$$
\begin{aligned}
V_S &= (0.5\ \mathrm{mA})(1\ \mathrm{k}\Omega) = 0.5\ \mathrm{V},\\
V_{TH} &= 0.7 + 0.45(\sqrt{1.4} - \sqrt{0.9}) = 0.7 + 0.45(1.1832 - 0.9487) = 0.806\ \mathrm{V},\\
V_{ov} &= \sqrt{2(0.5\ \mathrm{mA})/(10\ \mathrm{mA/V^2})} = \sqrt{0.1}\ \mathrm{V} = 0.316\ \mathrm{V},\\
V_{in} &= 0.806 + 0.316 + 0.5 = 1.622\ \mathrm{V},\\
V_{out} &= 3 - (2\ \mathrm{k}\Omega)(0.5\ \mathrm{mA}) = 2.0\ \mathrm{V}.
\end{aligned}
$$

$V_{in} - V_{TH} = 0.816$ V $< V_{out} = 2.0$ V，因此 $M_1$ 处于饱和区。斜率：$g_m = \sqrt{2(10\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 3.16$ mS，$\eta = 0.45/(2\times1.1832) = 0.190$，因此 $dV_{out}/dV_{in} = -(3.16)(2)/[1 + (1.190)(3.16)] = -6.32/4.76 = -1.33$。

**线性区边界。** 以 mA 为 $I_D$ 的单位，$3 - 3I_D = \sqrt{0.2I_D}$；两边平方得 $9I_D^2 - 18.2I_D + 9 = 0$，因此 $I_D = (18.2 - \sqrt{7.24})/18 = 0.862$ mA。于是 $V_{out} = 3 - 1.723 = 1.277$ V，$V_{in} = V_{TH}(0.862) + \sqrt{0.172} + 0.862 = 0.870 + 0.415 + 0.862 = 2.147$ V。

| $V_{in}$ (V) | $I_D$ (mA) | $V_{out}$ (V) | 工作区 | 斜率 |
|---|---|---|---|---|
| ≤ 0.70 | 0 | 3.00 | 截止 | 0 |
| 0.965 | 0.10 | 2.80 | 饱和区 | −1.04 |
| 1.229 | 0.25 | 2.50 | 饱和区 | −1.21 |
| 1.622 | 0.50 | 2.00 | 饱和区 | −1.33 |
| 1.988 | 0.75 | 1.50 | 饱和区 | −1.40 |
| 2.147 | 0.862 | 1.277 | 进入线性区 | −1.42 |
| 2.4 | 0.936 | 1.129 | 线性区 | −0.26 |
| 3.0 | 0.971 | 1.059 | 线性区 | −0.05 |

（这里 $g_mR_S$ 最大只有约 4，因此斜率只达到 −1.4，而没有一直达到 −1.7。）

### 结果

这是一个**反相**特性：

- **$V_{in} \le 0.7$ V：** $M_1$ 截止，$V_{out} = V_{DD}$。导通点恰好位于 $V_{TH0}$，因为 $I_D = 0$ 时源极电位为 0 V。
- **饱和区：** $V_{in} = V_{TH}(I_DR_S) + \sqrt{2I_D/\beta} + I_DR_S$，$V_{out} = V_{DD} - R_DI_D$。斜率 $-g_mR_D/[1 + (g_m + g_{mb})R_S]$ 从 0 开始增大，当 $g_mR_S \gg 1$ 时趋于 $\approx -R_D/[(1 + \eta)R_S]$，形成一段近似线性的下降段。
- 一旦 $V_{out} < V_{in} - V_{TH}(V_S)$（漏极电压低于栅极电压减阈值电压），即进入**线性区**；前提是 $R_D$ 足够大，使这一转变发生在扫描范围之内。此后斜率幅值减小，$V_{out}$ 趋近下限 $V_{DD}R_S/(R_S + R_D)$（即 $M_1$ 相当于短路时的值），在 $V_{in} = V_{DD}$ 时仍略高于该值。
- **转折点：** $V_{in} = 0.7$ V；$V_{out} = V_{in} - V_{TH}$；下限 $V_{DD}R_S/(R_D + R_S)$。

**常见错误。** 像无源极负反馈的共源级那样，把曲线画成一直下降到 0 V。电流永远不会超过 $V_{DD}/(R_D + R_S)$，因此 $V_{out}$ 不可能低于 $V_{DD}R_S/(R_D + R_S)$。

**常见错误。** 声称增益为与 $R_S$ 无关的较大值 $g_mR_D$。有源极负反馈时，当 $g_mR_S \gg 1$ 时斜率为 $-g_mR_D/[1 + (g_m + g_{mb})R_S] \approx -R_D/[(1 + \eta)R_S]$。

**常见错误。** 因体效应而把导通点移到 0.7 V 以上。导通时没有电流流过，因此 $V_S = 0$，$V_{TH} = V_{TH0}$。
