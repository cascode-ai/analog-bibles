# 详细步骤 - R157

**思路。** 对平方律差分对的大信号（large-signal）特性 $I_{D1} - I_{D2} = f(V_{in1} - V_{in2})$ 求导得到 $G_m$，并在 50 mV 处求值。用两个器件跨导的串联关系可以验证这个数值。

### 第 1 步 — 差分对的大信号特性

两个器件都处于饱和区（saturation region），$\lambda = 0$。令 $\beta = \mu_nC_{ox}W/L$，$\Delta V \equiv V_{in1} - V_{in2}$。由 $I_{D1} + I_{D2} = I_{SS}$、$\Delta V = V_{GS1} - V_{GS2}$ 和 $V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$（两个器件的 $V_{TH}$ 相同），得 $\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$。两边平方，利用电流之和，分离出交叉项后再平方一次：

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right)\\
4I_{D1}I_{D2} &= \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2\\
(I_{D1} - I_{D2})^2 &= (I_{D1} + I_{D2})^2 - 4I_{D1}I_{D2} = I_{SS}^2 - \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2\\
&= \beta I_{SS}\Delta V^2 - \frac{\beta^2}{4}\Delta V^4 .
\end{aligned}
$$

开平方并取与 $\Delta V$ 相同的符号：

$$\Delta I \equiv I_{D1} - I_{D2} = \frac{\beta}{2}\,\Delta V\sqrt{K - \Delta V^2}, \qquad K \equiv \frac{4I_{SS}}{\beta},$$

该式在两个器件都导通时成立，即 $|\Delta V| \le \sqrt{2I_{SS}/\beta}$。

### 第 2 步 — 求导得到 $G_m$

利用乘积求导法则以及 $\dfrac{d}{d\Delta V}\sqrt{K - \Delta V^2} = \dfrac{-\Delta V}{\sqrt{K - \Delta V^2}}$：

$$
\begin{aligned}
G_m &= \frac{\beta}{2}\left[\sqrt{K - \Delta V^2} + \Delta V\cdot\frac{-\Delta V}{\sqrt{K - \Delta V^2}}\right]\\
&= \frac{\beta}{2}\cdot\frac{(K - \Delta V^2) - \Delta V^2}{\sqrt{K - \Delta V^2}}\\
&= \frac{\beta}{2}\cdot\frac{K - 2\Delta V^2}{\sqrt{K - \Delta V^2}} .
\end{aligned}
$$

平衡时（$\Delta V = 0$），$G_{m0} = \dfrac{\beta}{2}\sqrt{K} = \dfrac{\beta}{2}\cdot 2\sqrt{\dfrac{I_{SS}}{\beta}} = \sqrt{\beta I_{SS}}$，即任一器件在 $I_{SS}/2$ 下的 $g_m$，因为 $g_m = \sqrt{2\beta(I_{SS}/2)} = \sqrt{\beta I_{SS}}$。

### 第 3 步 — 在 $\Delta V = 50$ mV 处的数值计算

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})\left(\frac{50}{0.5}\right) = 13.4\ \mathrm{mA/V^2}, \qquad \frac{\beta}{2} = 6.7\ \mathrm{mA/V^2},\\
K &= \frac{4I_{SS}}{\beta} = \frac{4(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.2985\ \mathrm{V^2},\\
K - 2\Delta V^2 &= 0.2985 - 2(0.0025) = 0.2935\ \mathrm{V^2},\\
\sqrt{K - \Delta V^2} &= \sqrt{0.2985 - 0.0025}\ \mathrm{V} = \sqrt{0.2960}\ \mathrm{V} = 0.5441\ \mathrm{V},\\
G_m &= (6.7\ \mathrm{mA/V^2})\,\frac{0.2935\ \mathrm{V^2}}{0.5441\ \mathrm{V}} = (6.7\ \mathrm{mA/V^2})(0.5395\ \mathrm{V}) = 3.61\ \mathrm{mS}.
\end{aligned}
$$

作为比较，

$$G_{m0} = \sqrt{\beta I_{SS}} = \sqrt{(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 3.66\ \mathrm{mS},$$

所以 $G_m/G_{m0} = 3.614/3.661 = 0.987$：下降约 1.3 %。

### 第 4 步 — 归一化形式

利用平衡时的过驱动电压（overdrive voltage）$V_{ov} = \sqrt{I_{SS}/\beta}$（因此 $K = 4V_{ov}^2$，$G_{m0} = \beta V_{ov}$），并令 $x = \Delta V/V_{ov}$：

$$\frac{G_m}{G_{m0}} = \frac{(\beta/2)V_{ov}(4 - 2x^2)/\sqrt{4 - x^2}}{\beta V_{ov}} = \frac{2 - x^2}{\sqrt{4 - x^2}} .$$

这里 $V_{ov} = \sqrt{1\ \mathrm{mA}/13.4\ \mathrm{mA/V^2}} = 0.273$ V，$x = 0.05/0.273 = 0.183$：

$$\frac{G_m}{G_{m0}} = \frac{2 - 0.0335}{\sqrt{4 - 0.0335}} = \frac{1.9665}{1.9916} = 0.987 ,$$

与第 3 步一致。

### 第 5 步 — 交叉验证：两个跨导的串联

在 50 mV 时，电流为 $I_{D1} = 0.591$ mA 和 $I_{D2} = 0.409$ mA（由 $\Delta I = 0.182$ mA 和 $I_{D1} + I_{D2} = 1$ mA 得到），因此

$$g_{m1} = \sqrt{2\beta I_{D1}} = \sqrt{2(13.4)(0.591)}\ \mathrm{mS} = 3.98\ \mathrm{mS}, \qquad g_{m2} = \sqrt{2\beta I_{D2}} = 3.31\ \mathrm{mS}.$$

尾电流恒定，因此 $\delta I_{D1} = -\delta I_{D2} = i$，输入电压分配在两个栅源电压上，$\delta V_{in1} - \delta V_{in2} = i/g_{m1} + i/g_{m2}$：

$$
\begin{aligned}
\delta(I_{D1} - I_{D2}) &= 2i = \frac{2}{1/g_{m1} + 1/g_{m2}}\,\delta\Delta V,\\
G_m &= \frac{2g_{m1}g_{m2}}{g_{m1} + g_{m2}} = \frac{2(3.98)(3.31)}{3.98 + 3.31}\ \mathrm{mS} = 3.61\ \mathrm{mS}.
\end{aligned}
$$

这也说明了 $G_m$ 下降的**原因**：$g_{m1}$ 与 $g_{m2}$ 的调和平均值受失去电流的器件拖累而下降的量，大于因获得电流的器件而上升的量。

### 结果

$$G_m = \frac{\beta}{2}\,\frac{4I_{SS}/\beta - 2\Delta V^2}{\sqrt{4I_{SS}/\beta - \Delta V^2}} \approx 3.61\ \mathrm{mS}\quad\text{at } \Delta V = 50\ \mathrm{mV},$$

比平衡值 $\sqrt{\mu_nC_{ox}(W/L)I_{SS}} = 3.66$ mS 低约 1.3 %。

**常见错误。** 使用单个器件承载全部尾电流时的 $g_m$，即 $\sqrt{2\beta I_{SS}} = 5.18$ mS。在平衡点附近，每个器件约承载 $I_{SS}/2$，差分对的 $G_m$ 为 $\sqrt{\beta I_{SS}}$。

**常见错误。** 认为由于 $M_1$ 现在电流更大，$G_m$ 会随不平衡而**增大**，或者预测它会大幅下降。作为调和平均值，$G_m$ 是减小的；而且对于远小于 0.386 V 完全导向电压的输入，减小量很小（1.3 %）。
