# 详细步骤 - R165

**思路。** 对平方律差分对的大信号（large-signal）特性求导得到 $G_m(\Delta V)$，在 $I_{SS} = 2$ mA 下于 50 mV 处求值，再对 1 mA 重复计算。结果与平衡值相差约 1 % 以内，因此需要使用有限 $\Delta V$ 下的公式。

### 第 1 步 — 大信号特性

两个器件都处于饱和区（saturation region），$\lambda = 0$。令 $\beta = \mu_nC_{ox}W/L$，$\Delta V = V_{in1} - V_{in2}$。由 $I_{D1} + I_{D2} = I_{SS}$ 和 $\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$（由 KVL 与平方律得到；阈值相等）：

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right) \;\Rightarrow\; 4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2,\\
I_{D1} - I_{D2} &= \sqrt{I_{SS}^2 - 4I_{D1}I_{D2}} = \frac{\beta}{2}\,\Delta V\sqrt{K - \Delta V^2}, \qquad K \equiv \frac{4I_{SS}}{\beta}.
\end{aligned}
$$

### 第 2 步 — 等效跨导

利用乘积求导法则以及 $\dfrac{d}{d\Delta V}\sqrt{K - \Delta V^2} = -\Delta V/\sqrt{K - \Delta V^2}$：

$$
\begin{aligned}
G_m = \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V} &= \frac{\beta}{2}\left[\sqrt{K - \Delta V^2} - \frac{\Delta V^2}{\sqrt{K - \Delta V^2}}\right]\\
&= \frac{\beta}{2}\,\frac{K - 2\Delta V^2}{\sqrt{K - \Delta V^2}} .
\end{aligned}
$$

当 $\Delta V = 0$ 时：$G_{m0} = \tfrac{\beta}{2}\sqrt{K} = \sqrt{\beta I_{SS}}$，即任一器件在 $I_{SS}/2$ 下的 $g_m$。

### 第 3 步 — $I_{SS} = 2$ mA，$\Delta V = 50$ mV

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}, \qquad \frac{\beta}{2} = 6.7\ \mathrm{mA/V^2},\\
K &= \frac{4(2\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.5970\ \mathrm{V^2},\\
K - 2\Delta V^2 &= 0.5970 - 0.0050 = 0.5920\ \mathrm{V^2},\\
\sqrt{K - \Delta V^2} &= \sqrt{0.5945}\ \mathrm{V} = 0.7711\ \mathrm{V},\\
G_m &= (6.7\ \mathrm{mA/V^2})\,\frac{0.5920\ \mathrm{V^2}}{0.7711\ \mathrm{V}} = (6.7\ \mathrm{mA/V^2})(0.7678\ \mathrm{V}) = 5.14\ \mathrm{mS}.
\end{aligned}
$$

平衡值为

$$G_{m0} = \sqrt{(13.4\ \mathrm{mA/V^2})(2\ \mathrm{mA})} = \sqrt{26.8}\ \mathrm{mS} = 5.18\ \mathrm{mS},$$

所以 $G_m/G_{m0} = 5.144/5.177 = 0.994$，下降 0.6 %。

### 第 4 步 — $I_{SS} = 1$ mA，$\Delta V = 50$ mV（作比较）

$$
\begin{aligned}
K &= \frac{4(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.2985\ \mathrm{V^2},\\
G_m &= (6.7\ \mathrm{mA/V^2})\,\frac{0.2985 - 0.0050}{\sqrt{0.2985 - 0.0025}}\ \mathrm{V} = (6.7\ \mathrm{mA/V^2})\,\frac{0.2935}{0.5441}\ \mathrm{V} = 3.61\ \mathrm{mS},\\
G_{m0} &= \sqrt{(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 3.66\ \mathrm{mS}\quad(\text{a drop of }1.3\ \%).
\end{aligned}
$$

### 第 5 步 — 比较与归一化验证

利用 $V_{ov} = \sqrt{I_{SS}/\beta}$ 和 $x = \Delta V/V_{ov}$，第 2 步的公式变为 $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2}$。

| $I_{SS}$ | $V_{ov}$ | $x$ | $G_{m0}$ | 50 mV 时的 $G_m$ | 下降量 |
|---|---|---|---|---|---|
| 2 mA | 0.386 V | 0.129 | 5.18 mS | 5.14 mS | 0.6 % |
| 1 mA | 0.273 V | 0.183 | 3.66 mS | 3.61 mS | 1.3 % |

- $G_m$ 与 $\sqrt{I_{SS}}$ 成正比：$5.14/3.61 = 1.42 \approx \sqrt2$。电流加倍使跨导增大 $\sqrt2$ 倍而不是 2 倍，因为过驱动电压（overdrive voltage）也增大了 $\sqrt2$ 倍（$g_m = 2I_D/V_{ov}$）。
- 过驱动电压较大，使同样的 50 mV 只占输入范围的较小部分，因此 $G_m$ 退化较少（0.6 % 而不是 1.3 %）。
- 代价是电源电流加倍。

### 结果

$$G_m(2\ \mathrm{mA},\ 50\ \mathrm{mV}) = \frac{\beta}{2}\,\frac{4I_{SS}/\beta - 2\Delta V^2}{\sqrt{4I_{SS}/\beta - \Delta V^2}} \approx 5.14\ \mathrm{mS}$$

（平衡值 $\sqrt{\beta I_{SS}} = 5.18$ mS，下降 0.6 %），而尾电流为 1 mA 时为 **3.61 mS**（平衡值 3.66 mS）。较大的电流使跨导高出 $\sqrt2$ 倍，且受 50 mV 不平衡造成的退化更小，代价是功耗加倍。

**常见错误。** 让 $G_m$ 随电流一起加倍（≈ 7.3 mS）。$G_m = \sqrt{\beta I_{SS}}$ 只按电流的平方根增长。

**常见错误。** 认为电流较大时由于过驱动电压较大，$G_m$ 会减小。对于固定的器件尺寸，较大的过驱动电压伴随着较大的电流，$g_m = 2I_D/V_{ov} = \sqrt{2\beta I_D}$ 仍然增大。
