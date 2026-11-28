# 详细步骤 - R092

**思路：** $M_1$ 是一个源极跟随器（source follower），其漏极接 $V_{DD}$，输出取自源极；$R_F$ 把输入直接连到输出端。在 $M_1$ 导通之前，$R_F$ 和 $R_S$ 对输入分压。求出导通点（由于源极位于 $V_{out} > 0$，需计入体效应），证明 $M_1$ 一旦导通就始终处于饱和区，再由 KCL 和小信号模型（small-signal model）推导跟随器区域的斜率。

### 第 1 步 — 输出节点方程

$$V_{GS} = V_{in} - V_{out}, \qquad V_{SB} = V_{out}, \qquad V_{TH}(V_{out}) = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - \sqrt{0.9}\right)\ \mathrm{V}.$$

输出节点的 KCL（电流经 $R_F$ 和 $M_1$ 流入，经 $R_S$ 流出）：

$$\frac{V_{in} - V_{out}}{R_F} + I_{D1} = \frac{V_{out}}{R_S} .$$

### 第 2 步 — $M_1$ 截止：分压直线

当 $I_{D1} = 0$ 时：

$$
\begin{aligned}
R_S(V_{in} - V_{out}) &= R_FV_{out}\\
V_{out} &= \frac{R_S}{R_S + R_F}\,V_{in} ,
\end{aligned}
$$

这是一条斜率为 $R_S/(R_S + R_F)$ 的过原点的直线；$M_1$ 截止时输出并不为零。在这条直线上

$$V_{GS} = V_{in} - V_{out} = V_{in}\left(1 - \frac{R_S}{R_S + R_F}\right) = \frac{R_F}{R_F + R_S}\,V_{in} = \frac{R_F}{R_S}\,V_{out} ,$$

因此只有一部分输入电压加在栅源之间，$M_1$ 的导通点晚于 $V_{in} = 0.7$ V。

### 第 3 步 — 导通点

当分压直线上的 $V_{GS} = V_{TH}(V_{out})$ 时，$M_1$ 导通：

$$\frac{R_F}{R_F + R_S}\,V_{in,on} = V_{TH}(V_{out,on}), \qquad V_{out,on} = \frac{R_S}{R_F + R_S}\,V_{in,on},$$

即

$$V_{in,on} = \frac{R_F + R_S}{R_F}\,V_{TH}(V_{out,on}) = \left(1 + \frac{R_S}{R_F}\right)V_{TH}(V_{out,on}) > 0.7\left(1 + \frac{R_S}{R_F}\right)\ \mathrm{V}.$$

这里体效应很重要，因为 $V_{out,on}$ 并不小。

示例：$R_S = R_F$。 此时 $V_{GS} = V_{out} = V_{in}/2$，条件为 $V_{out} = V_{TH}(V_{out})$。令 $w = \sqrt{0.9 + V_{out}}$，则 $V_{out} = w^2 - 0.9$：

$$
\begin{aligned}
w^2 - 0.9 &= 0.7 + 0.45w - 0.4269\\
w^2 - 0.45w - 1.1731 &= 0\\
w &= \frac{0.45 + \sqrt{0.2025 + 4.6924}}{2} = \frac{0.45 + 2.2124}{2} = 1.3312,\\
V_{out,on} &= 1.3312^2 - 0.9 = 1.7721 - 0.9 = 0.872\ \mathrm{V},\\
V_{in,on} &= 2V_{out,on} = 1.744\ \mathrm{V},
\end{aligned}
$$

而无体效应时为 $2\times0.7 = 1.40$ V。

一定会导通吗？ 令 $V_{in,on} = 3$ V 求解导通条件可知，当 $R_F/R_S < 0.527$ 时，导通点高于 $V_{DD}$。这时 $M_1$ 在整个扫描过程中都保持截止，特性曲线就只是这条分压直线。

### 第 4 步 — 一旦导通，$M_1$ 始终处于饱和区

由于栅极电压从不超过 $V_{DD}$，$V_{DS} = 3 - V_{out} \ge V_{in} - V_{out} = V_{GS} > V_{GS} - V_{TH}$。因此在这一扫描过程中，$M_1$ 从不进入线性区（triode region），KCL 变为

$$\frac{V_{in} - V_{out}}{R_F} + \frac{\beta}{2}\left(V_{in} - V_{out} - V_{TH}(V_{out})\right)^2 = \frac{V_{out}}{R_S} .$$

### 第 5 步 — 跟随器区域的斜率

在小信号模型中，$R_F$ 接在 $in$ 与 $out$ 之间，$R_S$ 接在 $out$ 与地之间。$M_1$（漏极接交流地，栅极接 $in$，源极接 $out$，衬底接地）向 $out$ 注入电流 $g_m(v_{in} - v_{out}) + g_{mb}(0 - v_{out})$，其中 $g_m = \sqrt{2\beta I_{D1}}$，$g_{mb} = \eta g_m$。

<!-- diagram: diagram-01.cir -->

对 $out$ 节点应用 KCL：

$$
\begin{aligned}
\frac{v_{in} - v_{out}}{R_F} + g_m(v_{in} - v_{out}) - g_{mb}v_{out} &= \frac{v_{out}}{R_S}\\
v_{in}\left(\frac{1}{R_F} + g_m\right) &= v_{out}\left(\frac{1}{R_F} + g_m + g_{mb} + \frac{1}{R_S}\right)\\
\frac{dV_{out}}{dV_{in}} &= \frac{g_m + 1/R_F}{g_m + g_{mb} + 1/R_F + 1/R_S} .
\end{aligned}
$$

- 在导通点，$g_m = g_{mb} = 0$，斜率为 $(1/R_F)/(1/R_F + 1/R_S) = R_S/(R_S + R_F)$，即分压直线的斜率：曲线平滑地向上弯折，斜率没有跳变。
- 随着电流增大，斜率上升，当 $g_m \gg 1/R_F, 1/R_S$ 时趋于 $g_m/(g_m + g_{mb}) = 1/(1 + \eta) \approx 0.85$。
- 分子总是小于分母，因此斜率始终小于 1。

终点： 在 $V_{in} = V_{DD}$ 时，$V_{out} = 3 - V_{TH}(V_{out}) - \sqrt{2I_{D1}/\beta}$，略高于普通跟随器的值：$R_F$ 提供了 $R_S$ 中的一部分电流，因此 $M_1$ 所需的电流和过驱动电压（overdrive voltage）都更小。

### 第 6 步 — 数值示例

为便于说明，取 $R_F = R_S = 10\ \mathrm{k}\Omega$，$\beta = 10\ \mathrm{mA/V^2}$。导通点位于 $V_{in} = 1.744$ V（第 3 步）。求解第 4 步的 KCL：

| $V_{in}$ (V) | $V_{out}$ (V) | $I_{D1}$ (μA) | 斜率 |
|---|---|---|---|
| 0 | 0 | 0 | 0.50 |
| 1.0 | 0.500 | 0 | 0.50 |
| 1.744 | 0.872 | 0（导通点） | 0.50 |
| 2.0 | 1.052 | 10.5 | 0.76 |
| 2.4 | 1.367 | 33.5 | 0.81 |
| 3.0 | 1.859 | 71.9 | 0.83 |

对于具有相同 $R_S$ 和 $\beta$ 的普通跟随器（去掉 $R_F$），在 $V_{in} = 3$ V 时输出为 1.80 V；接入 $R_F$ 后，输出约高 60 mV。

求临界电阻比时，令导通点位于 $V_{in}=V_{DD}$。输出 $v_*$ 满足 $V_{DD}-v_*=V_{TH}(v_*)$，解得 $v_*\approx1.9652\ \mathrm V$。由分压式得 $R_F/R_S=V_{DD}/v_*-1\approx0.52656$。

![R092 输出特性](/q/R092/solution-vout.zh.svg)

### 结果

- $M_1$ 截止： 没有漏极电流，$R_F$ 和 $R_S$ 对输入分压：$V_{out} = V_{in}R_S/(R_S + R_F)$，这是一条斜率为 $R_S/(R_S + R_F)$ 的过原点直线。只要 $V_{GS} = V_{in}R_F/(R_F + R_S) < V_{TH}(V_{out})$，$M_1$ 就保持截止。
- 导通点为 $V_{in,on} = \dfrac{R_F + R_S}{R_F}V_{TH}(V_{out,on})$，由于体效应，它高于 $0.7(1 + R_S/R_F)$ V（$V_{SB} = V_{out,on} = V_{in,on}R_S/(R_F + R_S)$ 并不小）。例如，$R_S = R_F$ 时 $V_{in,on} \approx 1.74$ V，而不是 1.40 V。若 $R_F/R_S < 0.527$，导通点高于 3 V，$M_1$ 在整个扫描过程中都保持截止。
- 导通后： $M_1$ 始终处于饱和区（漏极接 $V_{DD}$，栅极电压至多为 $V_{DD}$）。KCL：$(V_{in} - V_{out})/R_F + \tfrac12\beta(V_{in} - V_{out} - V_{TH})^2 = V_{out}/R_S$。斜率 $(g_m + 1/R_F)/(g_m + g_{mb} + 1/R_F + 1/R_S)$ 从 $R_S/(R_S + R_F)$ 开始上升，当 $g_m$ 较大时趋于 $\approx 1/(1 + \eta)$，始终小于 1。
- 在 $V_{in} = V_{DD}$ 时： $V_{out} \approx 3 - V_{TH}(V_{out}) - \sqrt{2I_D/\beta}$，略高于普通跟随器的值。

**常见错误：** 认为 $M_1$ 导通之前 $V_{out} = 0$。导通之前，输出沿分压直线 $V_{in}R_S/(R_S + R_F)$ 变化。

**常见错误：** 把导通点放在 $V_{in} = 0.7$ V 处，或者忽略体效应而放在 $0.7(1 + R_S/R_F)$ 处。只有比例为 $R_F/(R_F + R_S)$ 的那部分输入电压表现为 $V_{GS}$，而且源极已经处于 $V_{out,on} > 0$。

**常见错误：** 声称输入较高时 $M_1$ 会进入线性区，或者把斜率画得大于 1。漏极接 $V_{DD}$，从不低于栅极，而跟随器的斜率至多约为 $1/(1 + \eta)$。
