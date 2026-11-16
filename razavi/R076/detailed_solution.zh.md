# 详细步骤 - R076

**思路。** 在 $V_{GS}$ 和 $L$ 固定的条件下，求出 $I_D$、$g_m$ 和 $r_O$ 随 $W/L$ 的变化规律，再构成乘积 $g_mr_O$，考察它与 $W/L$ 的关系。

### 第 1 步 — $I_D$、$g_m$ 和 $r_O$ 随 $W/L$ 的变化规律

$V_{TH}$ 与 $W$ 无关，因此过驱动电压（overdrive voltage）$V_{ov} = V_{GS} - V_{TH}$ 为常数。$\lambda$ 只取决于 $L$，因此也是常数；饱和条件 $V_{DS} \ge V_{ov}$ 也与 $W/L$ 无关。在 $\mu C_{ox}$、$V_{ov}$ 和 $\lambda$ 固定的条件下，由平方律可得

$$
\begin{aligned}
I_D &= \Big(\tfrac12\mu C_{ox}V_{ov}^2\Big)\cdot\frac{W}{L} &&\propto \frac{W}{L},\\
g_m &= \frac{\partial I_D}{\partial V_{GS}} = \big(\mu C_{ox}V_{ov}\big)\cdot\frac{W}{L} &&\propto \frac{W}{L},\\
r_O &= \frac{1}{\lambda I_D} = \frac{2}{\lambda\mu C_{ox}V_{ov}^2}\cdot\left(\frac{W}{L}\right)^{-1} &&\propto \left(\frac{W}{L}\right)^{-1}.
\end{aligned}
$$

加宽器件会提高跨导（transconductance），但电流也按同一倍数增大，而更大的电流又使 $r_O$ 按比例降低。

### 第 2 步 — 构成乘积 $g_mr_O$

$$g_mr_O = \mu C_{ox}\frac{W}{L}V_{ov}\cdot\frac{1}{\lambda\cdot\frac12\mu C_{ox}\frac{W}{L}V_{ov}^2} .$$

先约去 $\mu C_{ox}(W/L)$，再约去一个 $V_{ov}$ 因子：

$$g_mr_O = \frac{V_{ov}}{\lambda\cdot\frac12 V_{ov}^2} = \frac{1}{\frac12\lambda V_{ov}} = \frac{2}{\lambda V_{ov}} = \frac{2}{\lambda\,(V_{GS} - V_{TH})} .$$

**验证。** 利用 $g_m = 2I_D/V_{ov}$，

$$g_mr_O = \frac{2I_D}{V_{ov}}\cdot\frac{1}{\lambda I_D} = \frac{2}{\lambda V_{ov}} ,$$

它只取决于过驱动电压和 $\lambda$，而二者在这里都是定值，因此 $W/L$ 完全消去。若饱和电流中含有因子 $(1+\lambda V_{DS})$，该因子同时乘在 $g_m$ 和 $I_D$ 上，在比值中相互抵消，因此结论不变。

### 第 3 步 — 数值示例

举例来说，取 $\mu C_{ox} = 100\ \mu\mathrm{A/V^2}$、$V_{ov} = 0.2$ V、$\lambda = 0.1\ \mathrm{V^{-1}}$。当 $W/L = 10$ 时：

$$
\begin{aligned}
I_D &= \tfrac12\,(100\ \mu\mathrm{A/V^2})(10)(0.2\ \mathrm{V})^2 = 20\ \mu\mathrm{A},\\
g_m &= (100\ \mu\mathrm{A/V^2})(10)(0.2\ \mathrm{V}) = 0.2\ \mathrm{mS},\\
r_O &= \frac{1}{(0.1\ \mathrm{V^{-1}})(20\ \mu\mathrm{A})} = 500\ \mathrm{k}\Omega,\\
g_mr_O &= (0.2\ \mathrm{mS})(500\ \mathrm{k}\Omega) = 100 .
\end{aligned}
$$

其他宽度下的结果如下：

| $W/L$ | $I_D$ | $g_m$ | $r_O$ | $g_mr_O$ |
|---|---|---|---|---|
| 10 | 20 μA | 0.2 mS | 500 kΩ | 100 |
| 20 | 40 μA | 0.4 mS | 250 kΩ | 100 |
| 50 | 100 μA | 1.0 mS | 100 kΩ | 100 |
| 100 | 200 μA | 2.0 mS | 50 kΩ | 100 |

这与公式一致：$2/(\lambda V_{ov}) = 2/[(0.1\ \mathrm{V^{-1}})(0.2\ \mathrm{V})] = 100$。

### 第 4 步 — 曲线图

- 以 $W/L$ 为横轴，$g_mr_O$ 是一条高度为 $2/[\lambda(V_{GS} - V_{TH})]$ 的**水平直线**，斜率为零，也没有转折点。
- 直线的高度由所选的 $V_{GS}$ 决定：过驱动电压越小，直线越高（例如取 $\lambda = 0.1\ \mathrm{V^{-1}}$，$V_{ov} = 0.2$ V 时为 100，$V_{ov} = 0.1$ V 时为 200）。
- 若同时画出 $g_m$ 和 $r_O$，则在双对数坐标中，$g_m$ 是斜率为 $+1$ 的直线，$r_O$ 是斜率为 $-1$ 的直线，而二者之积是平的。

在 $V_{GS}$ 固定时，宽度为 $NW$ 的器件相当于 $N$ 个宽度为 $W$ 的器件并联：$g_m$ 乘以 $N$，$r_O$ 除以 $N$。因此加宽器件换来的是更大的电流（和更高的速度），而不是更高的增益。

### 结果

$$g_mr_O = \frac{2}{\lambda\,(V_{GS} - V_{TH})} ,$$

它与 $W/L$ **无关**：曲线是一条**水平直线**。随着 $W/L$ 增大，$g_m$ 与 $W/L$ 成正比地增大，$I_D$ 也按同一比例增大，因此 $r_O = 1/(\lambda I_D)$ 按 $(W/L)^{-1}$ 减小，二者之积保持不变（由于 $L$ 恒定，$\lambda$ 为定值）。

**常见错误。** 因为 $g_m = \mu C_{ox}(W/L)V_{ov}$ 线性增大，就断定增益也随 $W/L$ 线性增大。在 $V_{GS}$ 恒定时，漏极电流同样随 $W/L$ 增大，而 $r_O = 1/(\lambda I_D)$ 恰好按同一倍数减小。

**常见错误。** 在保持 $I_D$ 恒定的前提下使用 $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$，得到一条 $\sqrt{W/L}$ 曲线：这回答的是电流恒定时的问题。本题中 $V_{GS}$ 固定，因此应使用 $g_m = \mu C_{ox}(W/L)V_{ov}$ 或 $g_m = 2I_D/V_{ov}$。

**常见错误。** 让 $\lambda$ 随 $W/L$ 变化。沟道长度调制（channel-length modulation）取决于 $L$，而它保持不变。
