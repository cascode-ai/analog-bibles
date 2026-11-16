# 详细步骤 - R070

**思路。** 对每个目标输出电压，由负载线 $I_D = (V_{DD} - V_{out})/R_D$ 得到漏极电流。检查 $M_1$ 在该输出下是否饱和，由平方律（square law）反解出过驱动电压，再加上阈值电压（threshold voltage）得到输入电压。

### 第 1 步 — 平方律的反解

在 $\lambda = 0$ 且

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})\frac{50}{0.5} = 13.4\ \mathrm{mA/V^2},$$

时，饱和器件满足 $I_D = \tfrac12\beta(V_{in} - V_{TH})^2$，因此

$$V_{in} = V_{TH} + V_{ov}, \qquad V_{ov} = \sqrt{\frac{2I_D}{\beta}} .$$

### 第 2 步 — $V_{out} = 1$ V

由负载线（没有电流流入输出端）得

$$I_D = \frac{V_{DD} - V_{out}}{R_D} = \frac{3\ \mathrm{V} - 1\ \mathrm{V}}{2\ \mathrm{k}\Omega} = 1\ \mathrm{mA},$$

$$V_{ov} = \sqrt{\frac{2(1\times10^{-3}\ \mathrm{A})}{13.4\times10^{-3}\ \mathrm{A/V^2}}} = \sqrt{0.1493\ \mathrm{V^2}} = 0.386\ \mathrm{V}.$$

$V_{DS} = V_{out} = 1\ \mathrm{V} \ge 0.386$ V ✓，因此平方律适用，且

$$V_{in} = 0.7 + 0.386 = 1.086\ \mathrm{V}.$$

### 第 3 步 — $V_{out} = 2.5$ V

$$I_D = \frac{3\ \mathrm{V} - 2.5\ \mathrm{V}}{2\ \mathrm{k}\Omega} = 0.25\ \mathrm{mA},$$

$$V_{ov} = \sqrt{\frac{2(0.25\times10^{-3}\ \mathrm{A})}{13.4\times10^{-3}\ \mathrm{A/V^2}}} = \sqrt{0.03731\ \mathrm{V^2}} = 0.193\ \mathrm{V}.$$

$V_{DS} = 2.5\ \mathrm{V} \ge 0.193$ V ✓，且

$$V_{in} = 0.7 + 0.193 = 0.893\ \mathrm{V}.$$

### 第 4 步 — 解释：输入范围与非线性

输入只需变化

$$1.086 - 0.893 = 0.193\ \mathrm{V}$$

就能使输出扫过整个 1.5 V 的范围，平均增益幅度为 $1.5/0.193 = 7.8$；较高的输入对应较低的输出（该级是反相的）。

小信号增益 $-g_mR_D$（其中 $g_m = \sqrt{2\beta I_D}$）在这一范围内并不恒定：

$$
\begin{aligned}
V_{out} = 1\ \mathrm{V}\ (I_D = 1\ \mathrm{mA}):&\quad g_m = \sqrt{2(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 5.18\ \mathrm{mS},\quad A_v = -10.4,\\
V_{out} = 2.5\ \mathrm{V}\ (I_D = 0.25\ \mathrm{mA}):&\quad g_m = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS},\quad A_v = -5.2 .
\end{aligned}
$$

增益在整个摆幅范围内相差 2 倍：这就是带电阻负载的共源级的非线性（nonlinearity），它会使大的输出摆幅产生失真。中间的每一点也都处于饱和区，因为输出从不低于 1 V，而过驱动电压从不超过 0.386 V。

### 结果

- $V_{out} = 1$ V：$I_D = 1$ mA，$V_{ov} = 0.386$ V，因此 $V_{in} \approx 1.086$ V。
- $V_{out} = 2.5$ V：$I_D = 0.25$ mA，$V_{ov} = 0.193$ V，因此 $V_{in} \approx 0.893$ V。

$M_1$ 在两端都处于饱和区（$V_{DS} = 1$ V 和 2.5 V，都高于过驱动电压）。

**常见错误。** 忘记加上 $V_{TH}$，即把过驱动电压（0.386 V 或 0.193 V）当作输入电压。平方律中出现的是 $V_{GS} - V_{TH}$，因此 $V_{in} = V_{TH} + \sqrt{2I_D/\beta}$。

**常见错误。** 使用线性区（triode region）方程，或者不由负载线求电流。两个输出都远高于过驱动电压，因此器件处于饱和区，而 $R_D$ 决定了电流：$I_D = (V_{DD} - V_{out})/R_D$。
