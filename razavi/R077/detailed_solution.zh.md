# 详细步骤 - R077

思路： $I_D$ 和 $L$ 固定时，$r_O = 1/(\lambda I_D)$ 不变，因此 $g_mr_O$ 对 $W/L$ 的依赖完全来自 $g_m$，下面用 $I_D$ 和 $W/L$ 来表示它。

### 第 1 步 — 哪些量不变，哪些量变化

$\lambda$ 只取决于 $L$，因此为常数，$r_O = 1/(\lambda I_D)$ 也随之为常数。过驱动电压 $V_{ov} = V_{GS} - V_{TH}$ 则不是常数：要让更宽的器件流过同样的电流，栅极电压必须降低。由平方律 $I_D = \frac12\mu C_{ox}(W/L)V_{ov}^2$ 可得

$$V_{ov} = \sqrt{\frac{2I_D}{\mu C_{ox}(W/L)}} \;\propto\; \left(\frac{W}{L}\right)^{-1/2}.$$

因此 $g_m = \mu C_{ox}(W/L)V_{ov}$ 包含两个变化方向相反的因子，必须先消去 $V_{ov}$。

### 第 2 步 — 恒定电流下的跨导（transconductance）

将 $V_{ov}$ 代入 $g_m = \mu C_{ox}(W/L)V_{ov}$，并把前面的系数移入根号内：

$$g_m = \mu C_{ox}\frac{W}{L}\sqrt{\frac{2I_D}{\mu C_{ox}(W/L)}} = \sqrt{\left(\mu C_{ox}\frac{W}{L}\right)^2\frac{2I_D}{\mu C_{ox}(W/L)}} = \sqrt{2\mu C_{ox}\frac{W}{L}I_D} \;\propto\; \sqrt{\frac{W}{L}} .$$

在电流恒定时，$g_m$ 只按 $W/L$ 的平方根增大：因子 $W/L$ 增大了，但过驱动电压按 $(W/L)^{-1/2}$ 减小。

### 第 3 步 — 构成乘积 $g_mr_O$

$$g_mr_O = \sqrt{2\mu C_{ox}\frac{W}{L}I_D}\cdot\frac{1}{\lambda I_D} = \frac{1}{\lambda}\sqrt{\frac{2\mu C_{ox}(W/L)I_D}{I_D^2}} = \frac{1}{\lambda}\sqrt{\frac{2\mu C_{ox}(W/L)}{I_D}} .$$

由于 $\lambda$、$\mu C_{ox}$ 和 $I_D$ 均固定，唯一的变量是 $W/L$：

$$g_mr_O \;\propto\; \sqrt{\frac{W}{L}} .$$

验证： 由于 $g_m = 2I_D/V_{ov}$，也有 $g_mr_O = 2/(\lambda V_{ov})$；结合 $V_{ov} \propto (W/L)^{-1/2}$（第 1 步），同样得到 $g_mr_O \propto (W/L)^{+1/2}$。增益之所以上升，是因为更宽的器件工作在更小的过驱动电压下。

### 第 4 步 — 数值示例

举例来说，取 $\mu C_{ox} = 100\ \mu\mathrm{A/V^2}$、$I_D = 100\ \mu\mathrm{A}$、$\lambda = 0.1\ \mathrm{V^{-1}}$。对任何宽度，输出电阻（output resistance）都相同：

$$r_O = \frac{1}{(0.1\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})} = 100\ \mathrm{k}\Omega .$$

当 $W/L = 20$ 时：

$$
\begin{aligned}
g_m &= \sqrt{2\,(100\ \mu\mathrm{A/V^2})(20)(100\ \mu\mathrm{A})} = \sqrt{4\times10^{-7}}\ \mathrm{A/V} = 0.632\ \mathrm{mS},\\
V_{ov} &= \sqrt{\frac{2\,(100\ \mu\mathrm{A})}{(100\ \mu\mathrm{A/V^2})(20)}} = \sqrt{0.1}\ \mathrm{V} = 0.316\ \mathrm{V},\\
g_mr_O &= (0.632\ \mathrm{mS})(100\ \mathrm{k}\Omega) = 63.2 .
\end{aligned}
$$

验证：$2/(\lambda V_{ov}) = 2/[(0.1\ \mathrm{V^{-1}})(0.316\ \mathrm{V})] = 63.2$。其他宽度下的结果如下：

| $W/L$ | $V_{ov}$ | $g_m$ | $r_O$ | $g_mr_O$ |
|---|---|---|---|---|
| 5 | 0.632 V | 0.316 mS | 100 kΩ | 31.6 |
| 10 | 0.447 V | 0.447 mS | 100 kΩ | 44.7 |
| 20 | 0.316 V | 0.632 mS | 100 kΩ | 63.2 |
| 40 | 0.224 V | 0.894 mS | 100 kΩ | 89.4 |
| 80 | 0.158 V | 1.265 mS | 100 kΩ | 126.5 |

$W/L$ 每增大到四倍（5 → 20 → 80），本征增益就翻一番（31.6 → 63.2 → 126.5），这正符合平方根规律。

### 第 5 步 — 曲线及其局限

图中各点满足 $V_{ov}>0$，并假设 $V_{DS}\geq V_{ov}$。 每个偏置点的跨导是在器件尺寸固定时求得的小信号量。宽度的调整发生在不同偏置点之间。

![本征增益 g_m r_O](/q/R077/solution-gain.zh.svg)

- 以 $W/L$ 为横轴，曲线是一条平方根曲线：$g_mr_O = k\sqrt{W/L}$，其中 $k = \lambda^{-1}\sqrt{2\mu C_{ox}/I_D}$。它单调上升且向下凹（concave down）：其斜率 $k/(2\sqrt{W/L})$ 随 $W/L$ 增大而减小。外推时它经过原点；在双对数坐标中，它是一条斜率为 $1/2$ 的直线。
- $W/L$ 较小时：过驱动电压变大（示例中 $W/L = 5$ 时为 0.63 V），因此器件需要较大的 $V_{DS}$ 才能保持饱和（$V_{DS} \ge V_{ov}$）；而且在实际中，速度饱和（velocity saturation）与迁移率退化（mobility degradation）也会降低 $g_m$。
- $W/L$ 较大时：过驱动电压缩小到接近零，器件进入弱反型区，平方律不再成立。$g_m$ 趋近于 $I_D/(\zeta V_T)$，不能再增大，其中 $V_T = kT/q \approx 26$ mV 为热电压（thermal voltage），$\zeta \approx 1.5$ 为亚阈值斜率因子（subthreshold slope factor）。因此实际曲线趋于平坦，逼近 $g_mr_O \approx 1/(\lambda\zeta V_T)$，在本例中约为 256（令两种极限表达式相等，得 $V_{ov}=2\zeta V_T\approx78$ mV，在平方律下对应 $W/L=2I_D/(\mu C_{ox}V_{ov}^2)\approx329$）。

电流固定时，提高增益的唯一途径是增大 $g_m/I_D = 2/V_{ov}$。加宽器件可以做到这一点，但代价是更大的面积和电容，即器件速度更慢。

### 结果

$$g_mr_O = \frac{1}{\lambda}\sqrt{\frac{2\mu C_{ox}(W/L)}{I_D}} \;\propto\; \sqrt{\frac{W}{L}} ,$$

这是一条随 $W/L$ 上升的平方根曲线，$W/L$ 每增大到四倍，它就翻一番。原因是：$g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ 按 $\sqrt{W/L}$ 增大，而 $r_O = 1/(\lambda I_D)$ 保持不变（$I_D$ 和 $\lambda$ 都是常数），过驱动电压则按 $1/\sqrt{W/L}$ 减小。当 $W/L$ 非常大时，器件进入弱反型区，实际曲线趋于平缓。

常见错误： 把 $V_{ov}$ 当作常数，由 $g_m = \mu C_{ox}(W/L)V_{ov}$ 画出一条直线 $g_mr_O \propto W/L$。在电流恒定时，过驱动电压按 $(W/L)^{-1/2}$ 减小，因此 $g_m$ 只按 $\sqrt{W/L}$ 增大。

常见错误： 取固定的 $V_{ov}$，由 $g_mr_O = 2/(\lambda V_{ov})$ 画出一条水平直线。那是 $V_{GS}$ 保持恒定时的答案；本题中 $I_D$ 固定，$r_O$ 固定，而 $V_{ov}$ 减小，因此增益上升。
