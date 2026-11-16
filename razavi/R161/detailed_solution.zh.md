# 详细步骤 - R161

**思路。** 对平方律差分对的大信号（large-signal）特性求导得到 $G_m(\Delta V)$，对 $W/L = 25/0.5$ 在 $\Delta V = 50$ mV 处求值，再对 $W/L = 50/0.5$ 重复计算。平衡值只略高一点，因此需要使用有限输入下的表达式。

### 第 1 步 — 大信号特性

两个器件都处于饱和区（saturation region），$\lambda = 0$。令 $\beta = \mu_nC_{ox}W/L$，$\Delta V = V_{in1} - V_{in2}$。由 $I_{D1} + I_{D2} = I_{SS}$ 和 $\Delta V = V_{GS1} - V_{GS2} = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$（相等的阈值相互抵消），两边平方，利用电流之和，再平方一次，并利用 $(I_{D1} - I_{D2})^2 = I_{SS}^2 - 4I_{D1}I_{D2}$：

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right)\;\Rightarrow\; 4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2,\\
I_{D1} - I_{D2} &= \frac{\beta}{2}\,\Delta V\sqrt{K - \Delta V^2}, \qquad K \equiv \frac{4I_{SS}}{\beta}.
\end{aligned}
$$

### 第 2 步 — 等效跨导

利用乘积求导法则：

$$
\begin{aligned}
G_m = \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V} &= \frac{\beta}{2}\left[\sqrt{K - \Delta V^2} + \Delta V\cdot\frac{-\Delta V}{\sqrt{K - \Delta V^2}}\right]\\
&= \frac{\beta}{2}\,\frac{K - 2\Delta V^2}{\sqrt{K - \Delta V^2}} .
\end{aligned}
$$

平衡时它化为 $G_{m0} = \tfrac{\beta}{2}\sqrt{K} = \sqrt{\beta I_{SS}}$，即单个器件在 $I_{SS}/2$ 下的 $g_m$。

### 第 3 步 — $W/L = 25/0.5$，$\Delta V = 50$ mV

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})(50) = 6.7\ \mathrm{mA/V^2}, \qquad \frac{\beta}{2} = 3.35\ \mathrm{mA/V^2},\\
K &= \frac{4(1\ \mathrm{mA})}{6.7\ \mathrm{mA/V^2}} = 0.5970\ \mathrm{V^2},\\
K - 2\Delta V^2 &= 0.5970 - 0.0050 = 0.5920\ \mathrm{V^2},\\
\sqrt{K - \Delta V^2} &= \sqrt{0.5970 - 0.0025}\ \mathrm{V} = \sqrt{0.5945}\ \mathrm{V} = 0.7711\ \mathrm{V},\\
G_m &= (3.35\ \mathrm{mA/V^2})\,\frac{0.5920\ \mathrm{V^2}}{0.7711\ \mathrm{V}} = (3.35\ \mathrm{mA/V^2})(0.7678\ \mathrm{V}) = 2.57\ \mathrm{mS}.
\end{aligned}
$$

平衡值为

$$G_{m0} = \sqrt{\beta I_{SS}} = \sqrt{(6.7\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 2.59\ \mathrm{mS},$$

所以 $G_m/G_{m0} = 2.572/2.588 = 0.994$，只下降了 0.6 %。

**归一化验证。** 取 $V_{ov} = \sqrt{I_{SS}/\beta} = \sqrt{1/6.7}\ \mathrm{V} = 0.386$ V，$x = \Delta V/V_{ov} = 0.05/0.386 = 0.129$，则 $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2} = (2 - 0.0168)/\sqrt{3.9833} = 1.9833/1.9958 = 0.994$。✓

### 第 4 步 — $W/L = 50/0.5$，$\Delta V = 50$ mV（作比较）

$$
\begin{aligned}
\beta &= 13.4\ \mathrm{mA/V^2}, \qquad K = \frac{4(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.2985\ \mathrm{V^2},\\
G_m &= (6.7\ \mathrm{mA/V^2})\,\frac{0.2985 - 0.0050}{\sqrt{0.2985 - 0.0025}}\ \mathrm{V} = (6.7\ \mathrm{mA/V^2})\,\frac{0.2935}{0.5441}\ \mathrm{V} = 3.61\ \mathrm{mS},\\
G_{m0} &= \sqrt{(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 3.66\ \mathrm{mS}\quad(\text{a drop of }1.3\ \%).
\end{aligned}
$$

### 第 5 步 — 比较

| $W/L$ | $V_{ov}$ | $x = \Delta V/V_{ov}$ | $G_{m0}$ | 50 mV 时的 $G_m$ | 下降量 |
|---|---|---|---|---|---|
| 25/0.5 | 0.386 V | 0.129 | 2.59 mS | 2.57 mS | 0.6 % |
| 50/0.5 | 0.273 V | 0.183 | 3.66 mS | 3.61 mS | 1.3 % |

- **大小。** $G_{m0} = \sqrt{\beta I_{SS}}$，因此把 $W/L$ 减半会使它缩小 $\sqrt2$ 倍：$3.66/2.59 = 1.414$。在 50 mV 时，两者之比为 $3.61/2.57 = 1.405 \approx \sqrt2$。
- **线性度。** 较窄的差分对的过驱动电压（overdrive voltage）大 $\sqrt2$ 倍，因此 50 mV 只占其输入范围的较小部分（$x = 0.129$ 而不是 0.183），其 $G_m$ 的退化也较小：0.6 % 而不是 1.3 %。

把器件变窄是以跨导（增益）换取线性度。

### 结果

$$G_m(25/0.5,\ 50\ \mathrm{mV}) = \frac{\beta}{2}\,\frac{4I_{SS}/\beta - 2\Delta V^2}{\sqrt{4I_{SS}/\beta - \Delta V^2}} \approx 2.57\ \mathrm{mS}$$

（为其平衡值 2.59 mS 的 99.4 %），而 $W/L = 50/0.5$ 时约为 **3.61 mS**（平衡值 3.66 mS）。较窄的差分对的跨导约为后者的 $1/\sqrt2$，但在相同输入下退化较少。

**常见错误。** 对 $W/L = 25/0.5$ 使用单个器件承载全部 1 mA 时的 $g_m$，即 $\sqrt{2\beta I_{SS}} = 3.66$ mS。在平衡点附近每个器件只承载 $I_{SS}/2$，差分对的 $G_m$ 为 $\sqrt{\beta I_{SS}}$。

**常见错误。** 认为较窄的差分对因为过驱动电压较大而具有**更大**的 $G_m$。在固定电流下，$g_m = 2I_D/V_{ov}$ 随过驱动电压升高而下降。
