# 详细步骤 - R162

**思路。** 把差分对的等效跨导写成归一化形式 $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2}$，其中 $x = \Delta V/V_{ov}$，并求出使该比值为 0.9 和 0.1 的 $x$；这些值与器件尺寸无关。然后用各设计的过驱动电压把 $x$ 换算成电压。

### 第 1 步 — 大信号（large-signal）特性

两个器件都处于饱和区（saturation region），$\lambda = 0$。令 $\beta = \mu_nC_{ox}W/L$，$\Delta V = V_{in1} - V_{in2}$。由 $I_{D1} + I_{D2} = I_{SS}$、$\Delta V = V_{GS1} - V_{GS2}$ 和 $V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$（两者的 $V_{TH}$ 相同）：

$$
\begin{aligned}
\Delta V &= \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta},\\
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right)\;\Rightarrow\; 4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2,\\
I_{D1} - I_{D2} &= \sqrt{I_{SS}^2 - 4I_{D1}I_{D2}} = \frac{\beta}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2}.
\end{aligned}
$$

### 第 2 步 — 归一化的 $G_m$

求导（乘积法则）：

$$G_m = \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V} = \frac{\beta}{2}\,\frac{4I_{SS}/\beta - 2\Delta V^2}{\sqrt{4I_{SS}/\beta - \Delta V^2}} .$$

利用平衡时的过驱动电压 $V_{ov} = \sqrt{I_{SS}/\beta}$（因此 $4I_{SS}/\beta = 4V_{ov}^2$），并令 $x = \Delta V/V_{ov}$：

$$
\begin{aligned}
G_m &= \frac{\beta}{2}\,\frac{V_{ov}^2(4 - 2x^2)}{V_{ov}\sqrt{4 - x^2}} = \beta V_{ov}\,\frac{2 - x^2}{\sqrt{4 - x^2}},\\
G_{m0} &= \beta V_{ov} = \sqrt{\beta I_{SS}},\\
\frac{G_m}{G_{m0}} &= \frac{2 - x^2}{\sqrt{4 - x^2}} ,
\end{aligned}
$$

它只与 $x$ 有关，从 $x = 0$ 时的 1 下降到 $x = \sqrt2$（完全导向）时的 0。

### 第 3 步 — 求 10 % 和 90 % 下降点（以 $x$ 表示）

令 $u = x^2$（在有效范围内 $u < 2$），并对每个条件两边平方。

**$G_m/G_{m0} = 0.9$：**

$$
\begin{aligned}
(2 - u)^2 &= 0.81(4 - u)\\
u^2 - 4u + 4 &= 3.24 - 0.81u\\
u^2 - 3.19u + 0.76 &= 0\\
u &= \frac{3.19 \pm \sqrt{10.176 - 3.04}}{2} = \frac{3.19 \pm 2.671}{2} = 0.2593\ \ (\text{or } 2.93,\ \text{rejected since } u > 2),\\
x &= \sqrt{0.2593} = 0.5092 .
\end{aligned}
$$

**$G_m/G_{m0} = 0.1$：**

$$
\begin{aligned}
(2 - u)^2 &= 0.01(4 - u)\\
u^2 - 3.99u + 3.96 &= 0\\
u &= \frac{3.99 \pm \sqrt{15.920 - 15.840}}{2} = \frac{3.99 \pm 0.283}{2} = 1.8535\ \ (\text{or } 2.137,\ \text{rejected}),\\
x &= \sqrt{1.8535} = 1.3614 .
\end{aligned}
$$

舍去的根是平方引入的；它们对应 $2 - u < 0$，超出了完全导向点。

### 第 4 步 — $W/L = 25/0.5$ 时换算成电压

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})(25/0.5) = 6.7\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{1\ \mathrm{mA}}{6.7\ \mathrm{mA/V^2}}} = 0.3863\ \mathrm{V},\\
\Delta V_{10\%} &= (0.5092)(0.3863\ \mathrm{V}) = 0.197\ \mathrm{V},\\
\Delta V_{90\%} &= (1.3614)(0.3863\ \mathrm{V}) = 0.526\ \mathrm{V},\\
\Delta V_{cut} &= \sqrt2\,(0.3863\ \mathrm{V}) = 0.546\ \mathrm{V}\ \ (G_m = 0).
\end{aligned}
$$

### 第 5 步 — 与 $W/L = 50/0.5$ 比较

对于 $W/L = 50/0.5$：$\beta = 13.4\ \mathrm{mA/V^2}$，$V_{ov} = \sqrt{1/13.4}\ \mathrm{V} = 0.2732$ V，因此

$$\Delta V_{10\%} = (0.5092)(0.2732\ \mathrm{V}) = 0.139\ \mathrm{V}, \qquad \Delta V_{90\%} = (1.3614)(0.2732\ \mathrm{V}) = 0.372\ \mathrm{V}, \qquad \Delta V_{cut} = 0.386\ \mathrm{V}.$$

| $W/L$ | $V_{ov}$ | $G_{m0}$ | 下降 10 % 处 | 下降 90 % 处 | $G_m = 0$ 处 |
|---|---|---|---|---|---|
| 25/0.5 | 0.386 V | 2.59 mS | 0.197 V | 0.526 V | 0.546 V |
| 50/0.5 | 0.273 V | 3.66 mS | 0.139 V | 0.372 V | 0.386 V |

较窄差分对的每个电压都大 $V_{ov}(25/0.5)/V_{ov}(50/0.5) = \sqrt{100/50} = \sqrt2$ 倍：$0.197/0.139 = 1.41$，$0.526/0.372 = 1.41$。在电流不变时把 $W/L$ 减半，差分对的线性度提高 $\sqrt2$ 倍，代价是 $G_{m0}$ 降低 $\sqrt2$ 倍（因而增益更低）。

### 结果

对于 $W/L = 25/0.5$，$G_m$ 在 $|V_{in1} - V_{in2}| \approx 0.197$ V 时下降 10 %，在 $\approx 0.526$ V 时下降 90 %（截止点为 0.546 V）。对于 $W/L = 50/0.5$，相应值为 0.139 V 和 0.372 V。较窄差分对的输入范围宽 $\sqrt2$ 倍（线性度更好），但跨导低 $\sqrt2$ 倍。

**常见错误。** 认为较窄的器件会使输入范围**变窄**。输入范围与过驱动电压 $\sqrt{I_{SS}/\beta}$ 成正比，而 $W/L$ 减小时过驱动电压增大。

**常见错误。** 使用线性化的 $G_m$ 表达式，或者保留平方后方程的增根，而这些增根落在截止电压之外。
