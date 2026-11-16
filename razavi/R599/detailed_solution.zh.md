# 详细步骤 - R599

**思路。** 过特性曲线的两个端点作一条直线，把特性曲线与该直线之差写成 $x$ 的函数，求其极值，再用最大偏差除以输出摆幅 $y(x_{max}) - y(0)$。

### 第 1 步 — 端点连线

特性曲线满足 $y(0) = 0$ 和 $y(x_{max}) = \alpha_1x_{max} + \alpha_2x_{max}^2$，因此过两端点的直线斜率为

$$m = \frac{y(x_{max}) - y(0)}{x_{max} - 0} = \frac{\alpha_1x_{max} + \alpha_2x_{max}^2}{x_{max}} = \alpha_1 + \alpha_2x_{max}$$

（即该范围内的平均增益），并且该直线过原点：

$$y_1(x) = (\alpha_1 + \alpha_2x_{max})\,x .$$

### 第 2 步 — 与直线的偏差

$$
\begin{aligned}
\Delta y(x) &= y(x) - y_1(x)\\
&= \alpha_1x + \alpha_2x^2 - \alpha_1x - \alpha_2x_{max}x\\
&= \alpha_2x^2 - \alpha_2x_{max}x\\
&= \alpha_2\,x\,(x - x_{max}).
\end{aligned}
$$

在两端 $\Delta y = 0$，且线性项 $\alpha_1x$ 被消去：只有二次项系数会引起非线性。

### 第 3 步 — 偏差最大的位置

$$
\begin{aligned}
\frac{d\Delta y}{dx} &= \alpha_2\,(2x - x_{max}) = 0\\
x &= \frac{x_{max}}{2}.
\end{aligned}
$$

由于 $d^2\Delta y/dx^2 = 2\alpha_2 \ne 0$，这就是极值点（$\alpha_2 > 0$ 时为 $\Delta y$ 的极小值，$\alpha_2 < 0$ 时为极大值），其绝对值即为最大偏差：

$$\Delta y\!\left(\frac{x_{max}}{2}\right) = \alpha_2\cdot\frac{x_{max}}{2}\left(\frac{x_{max}}{2} - x_{max}\right) = \alpha_2\cdot\frac{x_{max}}{2}\cdot\left(-\frac{x_{max}}{2}\right) = -\frac{\alpha_2x_{max}^2}{4},$$

因此

$$|\Delta y|_{max} = \frac{|\alpha_2|\,x_{max}^2}{4}\quad\text{at}\quad x = \frac{x_{max}}{2}.$$

误差是一条在两端为零的对称抛物线：

| $x/x_{max}$ | 0 | 0.25 | 0.5 | 0.75 | 1 |
|---|---|---|---|---|---|
| $\Delta y/(\alpha_2x_{max}^2)$ | 0 | −0.1875 | −0.25 | −0.1875 | 0 |

当 $\alpha_2 > 0$ 时，特性曲线向上弯曲，位于其弦的**下方**；当 $\alpha_2 < 0$ 时（增益压缩），它位于弦的上方。

### 第 4 步 — 对输出摆幅归一化

输出摆幅为

$$y(x_{max}) - y(0) = \alpha_1x_{max} + \alpha_2x_{max}^2,$$

因此

$$
\text{nonlinearity} = \frac{|\alpha_2|\,x_{max}^2/4}{\alpha_1x_{max} + \alpha_2x_{max}^2} = \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})}.
$$

对于非线性较弱的放大器，$|\alpha_2|x_{max} \ll \alpha_1$：

$$\text{nonlinearity} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}.$$

### 第 5 步 — 示例与解释

取 $\alpha_1 = 1$，$\alpha_2 = 0.1$（单位为 $1/x$），$x_{max} = 1$：

$$
\begin{aligned}
|\Delta y|_{max} &= \frac{0.1\times1^2}{4} = 0.025,\\
\text{swing} &= 1\times1 + 0.1\times1^2 = 1.1,\\
\text{nonlinearity} &= \frac{0.025}{1.1} = 2.27\ \%\quad(\text{approximation: } 0.1/4 = 2.5\ \%).
\end{aligned}
$$

相对非线性与 $x_{max}$ 成正比（范围减半，非线性也减半），这是二次项的特征。若是对称范围内纯奇次的三次特性，非线性则与 $x_{max}^2$ 成正比。

### 结果

偏离端点连线的最大偏差出现在范围的中点 $x = x_{max}/2$ 处，其值为

$$|\Delta y|_{max} = \frac{|\alpha_2|\,x_{max}^2}{4}.$$

对输出摆幅 $\alpha_1x_{max} + \alpha_2x_{max}^2$ 归一化：

$$\text{maximum nonlinearity} = \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}\quad(\text{for } |\alpha_2|x_{max} \ll \alpha_1).$$

**常见错误。** 以原点处的切线 $y = \alpha_1x$ 而不是端点连线为基准来度量偏差。那样得到的偏差为 $\alpha_2x^2$，在 $x = x_{max}$ 处最大，且大四倍（$\alpha_2x_{max}^2$）：这是另一种以增益为参考的定义。

**常见错误。** 把最大值的位置定错（例如定在 $x_{max}/\sqrt3$，那是三次特性的结果），或者用错误的量归一化（例如用两倍的摆幅，这适用于关于零对称的范围）。这里误差抛物线关于范围中点对称，摆幅就是 $y(x_{max}) - y(0)$。
