# 详细步骤 - R619

**思路。** 失调指标确定器件宽度；宽度和 1 mA 尾电流确定平衡时的过驱动电压；过驱动电压决定差分对的线性度。推导对称平方律差分对的三次谐波失真（third-harmonic distortion）$\mathrm{HD_3} \approx V_m^2/[32(V_{GS} - V_{TH})^2]$，解出 THD 为 1 % 时的幅度，再对 5 mV 设计重复计算以作比较。

### 第 1 步 — $V_{OS} \le 2$ mV 时的器件宽度

只有阈值失配时，两管漏极电流相等需要过驱动电压相等，因此失调等于阈值失配：

$$V_{OS} = \Delta V_{TH} = \frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} \le 2\ \mathrm{mV}.$$

解出宽度：

$$
\begin{aligned}
\sqrt{WL} &\ge \frac{9\ \mathrm{mV\cdot\mu m}}{2\ \mathrm{mV}} = 4.5\ \mu\mathrm{m},\\
WL &\ge (4.5\ \mu\mathrm{m})^2 = 20.25\ \mu\mathrm{m}^2,\\
W &\ge \frac{20.25\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 40.5\ \mu\mathrm{m}.
\end{aligned}
$$

差分对采用最小宽度，因此 $W = 40.5\ \mu$m，$W/L = 81$。

### 第 2 步 — 偏置点：过驱动电压与跨导（transconductance）

令 $\beta = \mu_nC_{ox}W/L$：

$$\beta = (134\ \mu\mathrm{A/V^2})(81) = 10.854\ \mathrm{mA/V^2}.$$

平衡时每个器件的电流为 $I_D = I_{SS}/2 = 0.5$ mA，因此由 $I_D = \tfrac12\beta V_{ov}^2$ 得

$$V_{ov} = \sqrt{\frac{2I_D}{\beta}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{10.854\ \mathrm{mA/V^2}}} = \sqrt{0.09213\ \mathrm{V^2}} = 0.304\ \mathrm{V},$$

$$g_m = \beta V_{ov} = (10.854\ \mathrm{mA/V^2})(0.304\ \mathrm{V}) = 3.29\ \mathrm{mS}.$$

注意 $I_{SS} = 2I_D = \beta V_{ov}^2$，即 $I_{SS}/\beta = V_{ov}^2$。

### 第 3 步 — 大信号（large-signal）特性及其幂级数

令 $\Delta V = V_{in1} - V_{in2}$，$\Delta I = I_{D1} - I_{D2}$，器件均工作在饱和区（saturation region），且 $\lambda = 0$。由于源极相连，$\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$；两次平方，并利用 $I_{D1} + I_{D2} = I_{SS}$ 和 $4I_{D1}I_{D2} = I_{SS}^2 - \Delta I^2$，即得到标准的特性方程

$$\Delta I = \frac{\beta}{2}\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2}.$$

利用 $I_{SS}/\beta = V_{ov}^2$ 和 $g_m = \beta V_{ov}$：

$$\Delta I = g_m\,\Delta V\sqrt{1 - \frac{\Delta V^2}{4V_{ov}^2}} .$$

利用 $\sqrt{1 - u} = 1 - u/2 - u^2/8 - \dots$ 展开，其中 $u = \Delta V^2/(4V_{ov}^2)$：

$$\Delta I = g_m\left[\Delta V - \frac{\Delta V^3}{8V_{ov}^2} - \frac{\Delta V^5}{128\,V_{ov}^4} - \dots\right].$$

对称差分对的特性是奇函数，$\Delta I(-\Delta V) = -\Delta I(\Delta V)$，因此**偶次谐波相互抵消**，三次谐波占主导。

### 第 4 步 — 正弦输入下的三次谐波失真

取 $\Delta V = V_m\cos\omega t$，并利用 $\cos^3\omega t = \tfrac34\cos\omega t + \tfrac14\cos3\omega t$：

$$\Delta I \approx g_mV_m\left(1 - \frac{3V_m^2}{32V_{ov}^2}\right)\cos\omega t - g_m\frac{V_m^3}{32V_{ov}^2}\cos3\omega t .$$

忽略基波的轻微压缩以及五次谐波（它还要再小一个 $(V_m/V_{ov})^2$ 量级的因子）：

$$\mathrm{THD} \approx \mathrm{HD_3} \approx \frac{V_m^2}{32V_{ov}^2}.$$

令 $\mathrm{HD_3} = 0.01$：

$$
\begin{aligned}
V_m^2 &= 0.32\,V_{ov}^2,\\
V_m &= \sqrt{0.32}\,V_{ov} = 0.566\,V_{ov}.
\end{aligned}
$$

对精确特性（包含基波的压缩和 $\Delta V^5$ 项）做数值傅里叶分析，得到的比值略小，为 $V_m = 0.551\,V_{ov}$。

### 第 5 步 — 2 mV 设计的最大摆幅

$$V_m = 0.566\,V_{ov} = 0.566\times0.304\ \mathrm{V} = 0.172\ \mathrm{V}.$$

精确特性给出 $0.551\times0.304 = 0.167$ V，因此答案为**峰值约 0.17 V**（峰峰值 0.34 V）。由于 $V_m$ 远小于 $\sqrt2\,V_{ov} = 0.43$ V，没有器件截止。

### 第 6 步 — 按 $V_{OS} \le 5$ mV 设计的同一差分对

对 5 mV 重复第 1、2、5 步：

$$
\begin{aligned}
\sqrt{WL} &\ge 9/5 = 1.8\ \mu\mathrm{m}, \quad WL \ge 3.24\ \mu\mathrm{m}^2, \quad W = 6.48\ \mu\mathrm{m}, \quad W/L = 12.96,\\
\beta &= (134\ \mu\mathrm{A/V^2})(12.96) = 1.7366\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{1\ \mathrm{mA}}{1.7366\ \mathrm{mA/V^2}}} = \sqrt{0.5758\ \mathrm{V^2}} = 0.759\ \mathrm{V},\\
V_m &= 0.566\times0.759\ \mathrm{V} = 0.429\ \mathrm{V}\quad(0.418\ \mathrm{V\ exact}).
\end{aligned}
$$

### 第 7 步 — 比较：失调与线性度的折中

两种设计的摆幅之比等于过驱动电压之比：

$$\frac{V_m(5\ \mathrm{mV})}{V_m(2\ \mathrm{mV})} = \frac{0.759}{0.304} = \sqrt{\frac{81}{12.96}} = \sqrt{6.25} = 2.5 .$$

$L$ 和尾电流固定时，失调和过驱动电压都按 $1/\sqrt{W}$ 变化：

$$V_{OS} = \frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} \propto \frac{1}{\sqrt W}, \qquad V_{ov} = \sqrt{\frac{I_{SS}}{\mu_nC_{ox}W/L}} \propto \frac{1}{\sqrt W}.$$

因此，**THD 为 1 % 时的摆幅与允许的失调成正比**：$V_m/V_{OS} = 0.172\ \mathrm{V}/2\ \mathrm{mV} = 86$，$0.429\ \mathrm{V}/5\ \mathrm{mV} = 86$。低失调差分对的宽度是前者的 6.25 倍，跨导更大（3.29 mS 对 1.32 mS），但过驱动电压更小，因而线性范围更窄；只有增大尾电流（消耗更多功率）或采用更长的沟道，才能避开这一折中。

| 设计 | $W$ | $W/L$ | $V_{ov}$ | $g_m$ | THD 为 1 % 时的 $V_m$ |
|---|---|---|---|---|---|
| $V_{OS} \le 5$ mV | 6.48 µm | 12.96 | 0.759 V | 1.32 mS | 0.43 V（精确值 0.418 V） |
| $V_{OS} \le 2$ mV | 40.5 µm | 81 | 0.304 V | 3.29 mS | 0.17 V（精确值 0.167 V） |

### 结果

对于 2 mV 设计（$W = 40.5\ \mu$m，$V_{GS} - V_{TH} = 0.304$ V）：

$$V_m \approx \sqrt{0.32}\,(V_{GS} - V_{TH}) \approx 0.17\ \mathrm{V}\ \text{peak differential}\quad (0.167\ \mathrm{V}\ \text{with the exact characteristic}).$$

5 mV 设计允许约 0.43 V（精确值 0.418 V），因此它的摆幅是 2 mV 差分对的 **2.5 倍**。失调越低，需要的器件越大，在给定电流下过驱动电压就越低，线性输入范围也就越窄（失调与线性度之间的折中）。

**常见错误。** 认为低失调设计的跨导更高，所以摆幅**更大**。线性范围由过驱动电压决定，而在相同电流下，更宽器件的过驱动电压更小。

**常见错误。** 使用 $\mathrm{HD_3} = V_m^2/(8V_{ov}^2)$，即漏掉了 $\cos^3\omega t$ 中的因子 $\tfrac14$。这会使算出的摆幅减半（0.086 V 而不是 0.17 V）。

**常见错误。** 为对称差分对计算二次谐波（second harmonic）。其特性为奇函数，只产生奇次谐波；THD 由三次谐波决定。
