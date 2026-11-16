# 详细步骤 - R158

**思路。** 把差分对的等效跨导写成差分输入的函数，对其平衡值归一化，然后求解 $G_m/G_{m0} = 0.9$ 和 $0.1$。其中 $x$ 是对过驱动电压（overdrive voltage）归一化的输入；令 $u = x^2$，每个条件都化为一个二次方程。

### 第 1 步 — 大信号（large-signal）特性

两个器件都处于饱和区（saturation region），$\lambda = 0$。令 $\beta = \mu_nC_{ox}W/L$，$\Delta V = V_{in1} - V_{in2}$。由 $I_{D1} + I_{D2} = I_{SS}$ 和 $\Delta V = V_{GS1} - V_{GS2} = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$（相等的阈值相互抵消），两次平方并利用 $(I_{D1} - I_{D2})^2 = I_{SS}^2 - 4I_{D1}I_{D2}$：

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right) \;\Rightarrow\; 4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2,\\
(I_{D1} - I_{D2})^2 &= I_{SS}^2 - \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2 = \frac{\beta^2}{4}\Delta V^2\left(\frac{4I_{SS}}{\beta} - \Delta V^2\right),\\
I_{D1} - I_{D2} &= \frac{\beta}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2},
\end{aligned}
$$

该式在两个器件都导通时成立，即 $|\Delta V| \le \sqrt{2I_{SS}/\beta}$。

### 第 2 步 — 等效跨导及其归一化形式

令 $K = 4I_{SS}/\beta$，利用乘积求导法则：

$$G_m = \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V} = \frac{\beta}{2}\left[\sqrt{K - \Delta V^2} - \frac{\Delta V^2}{\sqrt{K - \Delta V^2}}\right] = \frac{\beta}{2}\,\frac{K - 2\Delta V^2}{\sqrt{K - \Delta V^2}} .$$

利用平衡时的过驱动电压 $V_{ov} = \sqrt{I_{SS}/\beta}$（每个器件承载 $I_{SS}/2 = \tfrac12\beta V_{ov}^2$），有 $K = 4V_{ov}^2$；令 $x = \Delta V/V_{ov}$：

$$
\begin{aligned}
G_m &= \frac{\beta}{2}\,\frac{4V_{ov}^2 - 2x^2V_{ov}^2}{V_{ov}\sqrt{4 - x^2}} = \beta V_{ov}\,\frac{2 - x^2}{\sqrt{4 - x^2}},\\
G_{m0} &= G_m(x = 0) = \beta V_{ov}\cdot\frac{2}{2} = \beta V_{ov} = \sqrt{\beta I_{SS}},\\
\frac{G_m}{G_{m0}} &= \frac{2 - x^2}{\sqrt{4 - x^2}} .
\end{aligned}
$$

该比值从 $x = 0$ 时的 1 单调下降到 $x = \sqrt2$（完全导向）时的 0；超过此值后一个器件截止，$G_m = 0$。

### 第 3 步 — 本差分对的数值

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{I_{SS}}{\beta}} = \sqrt{\frac{1\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V},\\
G_{m0} &= \beta V_{ov} = (13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V}) = 3.66\ \mathrm{mS},\\
\Delta V_{cut} &= \sqrt2\,V_{ov} = 0.386\ \mathrm{V}\ \ \text{(full steering, } G_m = 0\text{)}.
\end{aligned}
$$

### 第 4 步 — 下降 10 %：$G_m/G_{m0} = 0.9$

令 $u = x^2$，并对条件式两边平方；在有效范围内 $2 - u > 0$，因此舍去 $u > 2$ 的根：

$$
\begin{aligned}
\frac{2 - u}{\sqrt{4 - u}} &= 0.9\\
(2 - u)^2 &= 0.81\,(4 - u)\\
u^2 - 4u + 4 &= 3.24 - 0.81u\\
u^2 - 3.19u + 0.76 &= 0 ,
\end{aligned}
$$

$$u = \frac{3.19 \pm \sqrt{3.19^2 - 4(0.76)}}{2} = \frac{3.19 \pm \sqrt{10.176 - 3.04}}{2} = \frac{3.19 \pm 2.671}{2} .$$

两个根为 $u = 0.2593$ 和 $u = 2.931$；第二个根超出完全导向点（是平方引入的增根）。所以

$$
\begin{aligned}
u &= 0.2593, \qquad x = \sqrt{0.2593} = 0.5092,\\
\Delta V_{10\%} &= xV_{ov} = (0.5092)(0.2732\ \mathrm{V}) = 0.139\ \mathrm{V}.
\end{aligned}
$$

验证：$(2 - 0.2593)/\sqrt{4 - 0.2593} = 1.7407/1.9341 = 0.900$。✓

### 第 5 步 — 下降 90 %：$G_m/G_{m0} = 0.1$

$$
\begin{aligned}
(2 - u)^2 &= 0.01\,(4 - u)\\
u^2 - 4u + 4 &= 0.04 - 0.01u\\
u^2 - 3.99u + 3.96 &= 0,\\
u &= \frac{3.99 \pm \sqrt{3.99^2 - 4(3.96)}}{2} = \frac{3.99 \pm \sqrt{15.920 - 15.840}}{2} = \frac{3.99 \pm 0.2830}{2}.
\end{aligned}
$$

两个根为 $u = 1.8535$ 和 $u = 2.1365$；舍去大于 2 的根：

$$
\begin{aligned}
x &= \sqrt{1.8535} = 1.3614,\\
\Delta V_{90\%} &= xV_{ov} = (1.3614)(0.2732\ \mathrm{V}) = 0.372\ \mathrm{V}.
\end{aligned}
$$

验证：$(2 - 1.8535)/\sqrt{4 - 1.8535} = 0.1465/1.4651 = 0.100$。✓

### 第 6 步 — $G_m$ 随输入的变化

| $\Delta V$ (V) | $x = \Delta V/V_{ov}$ | $G_m/G_{m0}$ | $G_m$ (mS) |
|---|---|---|---|
| 0 | 0 | 1.000 | 3.66 |
| 0.050 | 0.183 | 0.987 | 3.61 |
| 0.139 | 0.509 | 0.900 | 3.29 |
| 0.273 | 1.000 | 0.577 | 2.11 |
| 0.372 | 1.361 | 0.100 | 0.37 |
| 0.386 | 1.414 | 0 | 0 |

$G_m$ 在平衡点附近是平坦的（它是 $\Delta V$ 的偶函数），随后下降得越来越陡，并在完全导向时骤降为零，因此下降 90 % 的点只比截止点低 14 mV。

### 结果

$G_m$ 在 **$|V_{in1} - V_{in2}| \approx 0.139$ V 时下降 10 %**，在 **$|V_{in1} - V_{in2}| \approx 0.372$ V 时下降 90 %**；这由 $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2}$ 得到，其中 $x = \Delta V/V_{ov}$，$V_{ov} = 0.273$ V。对应的根为 $x = 0.509$ 和 $x = 1.361$。作为比较，$G_m$ 在 $\sqrt2\,V_{ov} = 0.386$ V 处降为零。

**常见错误。** 把特性线性化（$G_m$ 取常数或作一阶展开），会得到毫无意义的下降点，例如 10 % 下降对应 27 mV。下降必须由精确的大信号 $G_m$ 求出。

**常见错误。** 保留二次方程的增根（$u = 2.93$ 或 $u = 2.14$，即 $\Delta V = 0.47$ V 或 $0.40$ V）。它们超出了 0.386 V 的完全导向电压，此时一个晶体管已截止，公式不再成立。
