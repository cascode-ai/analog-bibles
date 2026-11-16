# 详细步骤 - R166

**思路。** 把差分对的等效跨导写成归一化形式 $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2}$，其中 $x = \Delta V/V_{ov}$。10 % 和 90 % 下降点出现在固定的 $x$ 值处；分别用 2 mA 和 1 mA 时的过驱动电压把它们换算成电压，即得到两组答案。

### 第 1 步 — 大信号（large-signal）特性

两个器件都处于饱和区（saturation region），$\lambda = 0$。令 $\beta = \mu_nC_{ox}W/L$，$\Delta V = V_{in1} - V_{in2}$。由 $I_{D1} + I_{D2} = I_{SS}$ 和 $\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$（由 KVL 与平方律得到；阈值相等），两次平方得

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right) \;\Rightarrow\; 4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2,\\
I_{D1} - I_{D2} &= \sqrt{I_{SS}^2 - 4I_{D1}I_{D2}} = \frac{\beta}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2}.
\end{aligned}
$$

### 第 2 步 — 归一化的跨导

求导（乘积法则）：

$$G_m = \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V} = \frac{\beta}{2}\,\frac{4I_{SS}/\beta - 2\Delta V^2}{\sqrt{4I_{SS}/\beta - \Delta V^2}} .$$

利用平衡时的过驱动电压 $V_{ov} = \sqrt{I_{SS}/\beta}$（因此 $4I_{SS}/\beta = 4V_{ov}^2$），并令 $x = \Delta V/V_{ov}$：

$$G_m = \beta V_{ov}\,\frac{2 - x^2}{\sqrt{4 - x^2}}, \qquad G_{m0} = \beta V_{ov} = \sqrt{\beta I_{SS}}, \qquad \frac{G_m}{G_{m0}} = \frac{2 - x^2}{\sqrt{4 - x^2}} ,$$

它只与 $x$ 有关，从 $x = 0$ 时的 1 下降到 $x = \sqrt2$ 时的 0，此时全部 $I_{SS}$ 流过一个器件。

### 第 3 步 — 归一化形式下的 10 % 和 90 % 下降点

令 $u = x^2$（$u < 2$），对每个条件两边平方并求解二次方程。

**下降 10 %，$G_m/G_{m0} = 0.9$：**

$$
\begin{aligned}
(2 - u)^2 &= 0.81(4 - u) \;\Rightarrow\; u^2 - 3.19u + 0.76 = 0,\\
u &= \frac{3.19 - \sqrt{3.19^2 - 4(0.76)}}{2} = \frac{3.19 - 2.671}{2} = 0.2593,\qquad x = 0.5092 .
\end{aligned}
$$

**下降 90 %，$G_m/G_{m0} = 0.1$：**

$$
\begin{aligned}
(2 - u)^2 &= 0.01(4 - u) \;\Rightarrow\; u^2 - 3.99u + 3.96 = 0,\\
u &= \frac{3.99 - \sqrt{3.99^2 - 4(3.96)}}{2} = \frac{3.99 - 0.283}{2} = 1.8535,\qquad x = 1.3614 .
\end{aligned}
$$

两种情况下，取“+”号的根（$u = 2.93$ 和 $u = 2.14$）都大于 2，超出了完全导向点；它们由平方引入，应当舍去。

### 第 4 步 — $I_{SS} = 2$ mA 时换算成电压

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{2\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = 0.3863\ \mathrm{V},\\
\Delta V_{10\%} &= (0.5092)(0.3863\ \mathrm{V}) = 0.197\ \mathrm{V},\\
\Delta V_{90\%} &= (1.3614)(0.3863\ \mathrm{V}) = 0.526\ \mathrm{V},\\
\Delta V_{cut} &= \sqrt2\,(0.3863\ \mathrm{V}) = 0.546\ \mathrm{V}.
\end{aligned}
$$

### 第 5 步 — 与 $I_{SS} = 1$ mA 比较

在 1 mA 时，$V_{ov} = \sqrt{1/13.4}\ \mathrm{V} = 0.2732$ V，因此

$$\Delta V_{10\%} = (0.5092)(0.2732\ \mathrm{V}) = 0.139\ \mathrm{V}, \qquad \Delta V_{90\%} = (1.3614)(0.2732\ \mathrm{V}) = 0.372\ \mathrm{V}, \qquad \Delta V_{cut} = 0.386\ \mathrm{V}.$$

| $I_{SS}$ | $V_{ov}$ | $G_{m0}$ | 下降 10 % | 下降 90 % | 截止点 |
|---|---|---|---|---|---|
| 2 mA | 0.386 V | 5.18 mS | 0.197 V | 0.526 V | 0.546 V |
| 1 mA | 0.273 V | 3.66 mS | 0.139 V | 0.372 V | 0.386 V |

- 线性范围与 $V_{ov} = \sqrt{I_{SS}/\beta}$ 成正比：电流加倍使其扩大 $\sqrt2$ 倍（$0.197/0.139 = 1.41$）。
- $G_{m0} = \sqrt{\beta I_{SS}}$ 也增大 $\sqrt2$ 倍。减小 $W/L$ 也能以同样的倍数扩大范围，但会**降低** $G_m$；增大电流则使两者都得到改善，代价是功耗加倍。

### 结果

当 $I_{SS} = 2$ mA 时，$G_m$ 在 $|V_{in1} - V_{in2}| \approx 0.197$ V 时下降 10 %，在 $\approx 0.526$ V 时下降 90 %（截止点 0.546 V）。尾电流为 1 mA 时，相应值为 0.139 V 和 0.372 V，即 2 mA 时数值的 $1/\sqrt2$。线性范围随过驱动电压一起增大 $\sqrt2$ 倍，同时 $G_{m0}$ 也增大 $\sqrt2$ 倍（从 3.66 增至 5.18 mS），代价是功耗加倍。

**常见错误。** 认为电流较大时差分对增益更高，因而范围**变窄**。范围由过驱动电压决定，而过驱动电压按 $\sqrt{I_{SS}}$ 增长。

**常见错误。** 求解线性化的 $G_m$ 表达式，或者保留平方后方程的增根，而这些增根位于截止电压之外。
