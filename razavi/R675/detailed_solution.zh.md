# 详细步骤 - R675

**思路。** 将 $I_D$ 对 $V_{GS}$ 求导；由于有效迁移率依赖于过驱动电压，分母 $1 + \theta(V_{GS} - V_{TH})$ 也必须求导（商的求导法则）。然后分别在 $\theta V_{ov} \ll 1$ 和 $\theta V_{ov} \gg 1$ 时展开结果。

### 第 1 步 — 写出表达式

令 $V_{ov} = V_{GS} - V_{TH}$（$dV_{ov}/dV_{GS} = 1$），并记

$$K = \frac12\,\mu_0C_{ox}\,\frac{W}{L},$$

则漏极电流为

$$I_D = K\,\frac{V_{ov}^2}{1 + \theta V_{ov}} .$$

提高 $V_{GS}$ 会增加沟道电荷，但同时也会通过更强的纵向电场降低其迁移率。

### 第 2 步 — 求导（商的求导法则）

令 $u = KV_{ov}^2$（$u' = 2KV_{ov}$），$w = 1 + \theta V_{ov}$（$w' = \theta$）：

$$
\begin{aligned}
g_m = \frac{\partial I_D}{\partial V_{GS}} &= \frac{2KV_{ov}\,(1 + \theta V_{ov}) - KV_{ov}^2\,\theta}{(1 + \theta V_{ov})^2}\\
&= \frac{K\left(2V_{ov} + 2\theta V_{ov}^2 - \theta V_{ov}^2\right)}{(1 + \theta V_{ov})^2}\\
&= \frac{K\left(2V_{ov} + \theta V_{ov}^2\right)}{(1 + \theta V_{ov})^2}\\
&= \frac12\,\mu_0C_{ox}\,\frac{W}{L}\cdot\frac{V_{ov}\,(2 + \theta V_{ov})}{(1 + \theta V_{ov})^2}.
\end{aligned}
$$

### 第 3 步 — 两种等价形式

**形式 2。** 由于 $(1 + \theta V_{ov})^2 - 1 = 2\theta V_{ov} + \theta^2V_{ov}^2 = \theta V_{ov}(2 + \theta V_{ov})$，

$$\frac{V_{ov}(2 + \theta V_{ov})}{(1 + \theta V_{ov})^2} = \frac{1}{\theta}\cdot\frac{(1 + \theta V_{ov})^2 - 1}{(1 + \theta V_{ov})^2} = \frac{1}{\theta}\left[1 - \frac{1}{(1 + \theta V_{ov})^2}\right],$$

因此

$$g_m = \frac{\mu_0C_{ox}W}{2\theta L}\left[1 - \frac{1}{(1 + \theta V_{ov})^2}\right]:$$

$g_m$ 随 $V_{ov}$ 单调增大，并趋近一个上限。

**形式 3。** 提出因子 $I_D/V_{ov} = KV_{ov}/(1 + \theta V_{ov})$，并利用 $(2 + \theta V_{ov})/(1 + \theta V_{ov}) = 1 + 1/(1 + \theta V_{ov})$：

$$g_m = \frac{KV_{ov}}{1 + \theta V_{ov}}\cdot\frac{2 + \theta V_{ov}}{1 + \theta V_{ov}} = \frac{I_D}{V_{ov}}\left[1 + \frac{1}{1 + \theta V_{ov}}\right].$$

因此 $g_m/I_D$ 介于 $2/V_{ov}$（无退化）与 $1/V_{ov}$（强退化）之间。

### 第 4 步 — 过驱动电压非常小（$\theta V_{ov} \ll 1$）

取一阶近似，利用 $1/(1 + \epsilon)^2 \approx 1 - 2\epsilon$：

$$
\begin{aligned}
g_m &= KV_{ov}\,(2 + \theta V_{ov})\,(1 + \theta V_{ov})^{-2}\\
&\approx KV_{ov}\,(2 + \theta V_{ov})\,(1 - 2\theta V_{ov})\\
&\approx KV_{ov}\,(2 - 4\theta V_{ov} + \theta V_{ov})\\
&= 2KV_{ov}\left(1 - \tfrac32\,\theta V_{ov}\right)\\
&= \mu_0C_{ox}\,\frac{W}{L}\,V_{ov}\left(1 - \tfrac32\,\theta V_{ov}\right).
\end{aligned}
$$

当 $\theta V_{ov} \to 0$ 时，$g_m \to \mu_0C_{ox}(W/L)V_{ov} = 2I_D/V_{ov}$：即**平方律的结果**，由于纵向电场较弱，一阶修正只使其略有减小。

### 第 5 步 — 过驱动电压非常大（$\theta V_{ov} \gg 1$）

利用 $1 + \theta V_{ov} \approx \theta V_{ov}$，

$$I_D \approx K\,\frac{V_{ov}^2}{\theta V_{ov}} = \frac{\mu_0C_{ox}W}{2\theta L}\,V_{ov},$$

它是过驱动电压的**线性**函数。在形式 2 中，$1/(1 + \theta V_{ov})^2 \to 0$，因此

$$g_m \to \frac{\mu_0C_{ox}W}{2\theta L} = \frac{I_D}{V_{ov}},$$

这是一个**常数**，与过驱动电压和偏置电流都无关：更大的 $V_{GS}$（以及电流）不再能换来跨导，因为额外的电荷被降低的迁移率抵消了，这与速度饱和的情况非常相似。

### 第 6 步 — 数值示例

取 $\mu_0C_{ox}(W/L) = 2\ \mathrm{mA/V^2}$（$K = 1\ \mathrm{mA/V^2}$），$\theta = 1\ \mathrm{V^{-1}}$；上限为 $\mu_0C_{ox}W/(2\theta L) = 1$ mS。

| $V_{ov}$ (V) | $I_D$ (mA) | $g_m$ (mS) | 平方律 $g_m$ (mS) | $g_m/I_D$ (V⁻¹) | $2/V_{ov}$ |
|---|---|---|---|---|---|
| 0.1 | 0.0091 | 0.174 | 0.2 | 19.1 | 20 |
| 0.2 | 0.033 | 0.306 | 0.4 | 9.2 | 10 |
| 0.5 | 0.167 | 0.556 | 1.0 | 3.3 | 4 |
| 1 | 0.50 | 0.750 | 2.0 | 1.5 | 2 |
| 2 | 1.33 | 0.889 | 4.0 | 0.67 | 1 |
| 5 | 4.17 | 0.972 | 10 | 0.23 | 0.4 |

例如，在 $V_{ov} = 1$ V 时：$g_m = K V_{ov}(2 + 1)/(1 + 1)^2 = (1\ \mathrm{mA/V^2})(1\ \mathrm{V})(3/4) = 0.75$ mS。$V_{ov}$ 较小时，结果与平方律吻合；$V_{ov}$ 较大时，它饱和于 1 mS，而平方律的值则持续增长。

### 结果

$$g_m = \frac12\,\mu_0C_{ox}\,\frac{W}{L}\,\frac{V_{ov}(2 + \theta V_{ov})}{(1 + \theta V_{ov})^2} = \frac{\mu_0C_{ox}W}{2\theta L}\left[1 - \frac{1}{(1 + \theta V_{ov})^2}\right] = \frac{I_D}{V_{ov}}\left[1 + \frac{1}{1 + \theta V_{ov}}\right],\qquad V_{ov} = V_{GS} - V_{TH}.$$

- **过驱动电压非常小**（$\theta V_{ov} \ll 1$）：$g_m \approx \mu_0C_{ox}(W/L)V_{ov}(1 - \frac32\theta V_{ov}) \to \mu_0C_{ox}(W/L)(V_{GS} - V_{TH})$，即平方律的值。
- **过驱动电压非常大**（$\theta V_{ov} \gg 1$）：$I_D \approx \mu_0C_{ox}WV_{ov}/(2\theta L)$ 变为 $V_{ov}$ 的线性函数，且 $g_m \to \mu_0C_{ox}W/(2\theta L)$，这是一个与偏置无关的常数。
- $g_m$ 单调上升但趋于饱和，$g_m/I_D$ 从 $2/V_{ov}$ 下降并趋近 $1/V_{ov}$。

**常见错误。** 求导时把 $1 + \theta V_{ov}$ 当作常数，这会得到 $g_m = \mu_0C_{ox}(W/L)V_{ov}/(1 + \theta V_{ov})$，以及大过驱动电压下的极限 $\mu_0C_{ox}W/(\theta L)$，是正确值的两倍。

**常见错误。** 以迁移率持续下降为由，断定 $g_m$ 最终会随过驱动电压下降。电荷仍随 $V_{ov}$ 线性增长，因此电流变为 $V_{ov}$ 的线性函数，$g_m$ 趋于一个非零常数。
