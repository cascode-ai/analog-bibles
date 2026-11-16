# 详细步骤 - R600

**思路。** 把输入代入特性方程，展开平方项，然后归并直流、基波和二次谐波各项。THD 就是谐波幅度与基波幅度之比。

### 第 1 步 — 把输入写成便于计算的形式

输入是一个叠加在直流电平 $A$ 上、幅度为 $A$ 的正弦信号，恰好扫过 $[0, x_{max}]$：

$$x(t) = \frac{x_{max}\cos\omega t + x_{max}}{2} = A + A\cos\omega t, \qquad A = \frac{x_{max}}{2}.$$

### 第 2 步 — 展开平方项

$$
\begin{aligned}
x^2(t) &= A^2(1 + \cos\omega t)^2\\
&= A^2\left(1 + 2\cos\omega t + \cos^2\omega t\right)\\
&= A^2\left(1 + 2\cos\omega t + \tfrac12 + \tfrac12\cos2\omega t\right)\qquad\left(\cos^2\theta = \tfrac12 + \tfrac12\cos2\theta\right)\\
&= A^2\left(\tfrac32 + 2\cos\omega t + \tfrac12\cos2\omega t\right).
\end{aligned}
$$

由于输入含有直流分量，平方后还会在基波频率上产生交叉项 $2\cos\omega t$。

### 第 3 步 — 输出各分量

$$
\begin{aligned}
y(t) &= \alpha_1(A + A\cos\omega t) + \alpha_2A^2\left(\tfrac32 + 2\cos\omega t + \tfrac12\cos2\omega t\right)\\
&= \underbrace{\left(\alpha_1A + \tfrac32\alpha_2A^2\right)}_{\text{DC}} + \underbrace{\left(\alpha_1A + 2\alpha_2A^2\right)}_{\text{fundamental } Y_1}\cos\omega t + \underbrace{\tfrac12\alpha_2A^2}_{\text{2nd harmonic } Y_2}\cos2\omega t .
\end{aligned}
$$

由 $A = x_{max}/2$，$A^2 = x_{max}^2/4$：

$$
\begin{aligned}
Y_1 &= \alpha_1\frac{x_{max}}{2} + 2\alpha_2\frac{x_{max}^2}{4} = \frac{x_{max}}{2}\left(\alpha_1 + \alpha_2x_{max}\right),\\
Y_2 &= \frac12\alpha_2\frac{x_{max}^2}{4} = \frac{\alpha_2x_{max}^2}{8}.
\end{aligned}
$$

二阶多项式作用于单一正弦信号时，不会产生高于 $2\omega$ 的分量，因此**没有三次或更高次谐波**；直流项是工作电平，而不是失真。

### 第 4 步 — 总谐波失真

只存在 $Y_2$，因此

$$
\begin{aligned}
\mathrm{THD} &= \frac{|Y_2|}{Y_1} = \frac{|\alpha_2|\,x_{max}^2/8}{(x_{max}/2)(\alpha_1 + \alpha_2x_{max})}\\
&= \frac{|\alpha_2|\,x_{max}^2}{8}\cdot\frac{2}{x_{max}(\alpha_1 + \alpha_2x_{max})}\\
&= \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})}.
\end{aligned}
$$

当非线性较小时（$|\alpha_2|x_{max} \ll \alpha_1$）：

$$\mathrm{THD} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}.$$

若按功率之比计算，THD 为该值的平方。

### 第 5 步 — 示例与解释

取 $\alpha_1 = 1$，$\alpha_2 = 0.1$，$x_{max} = 1$：

$$
\begin{aligned}
Y_1 &= \tfrac12(1 + 0.1) = 0.55,\qquad Y_2 = \frac{0.1}{8} = 0.0125,\\
\mathrm{THD} &= \frac{0.0125}{0.55} = 2.27\ \% \quad(-32.9\ \mathrm{dB}).
\end{aligned}
$$

- 基波为 $\alpha_1A + 2\alpha_2A^2$，而不只是 $\alpha_1A$：输入的直流电平使增量增益变为 $\alpha_1 + 2\alpha_2A = \alpha_1 + \alpha_2x_{max}$，即该范围内的平均斜率。
- THD 与 $x_{max}$ 成正比增长，这是二阶失真的典型特征。
- 该结果等于同一特性在 $[0, x_{max}]$ 上的端点非线性，即（最大偏差 $|\alpha_2|x_{max}^2/4$）/（摆幅 $\alpha_1x_{max} + \alpha_2x_{max}^2$）：对于纯二次特性，这两种度量是一致的。

### 结果

只产生幅度为 $\alpha_2x_{max}^2/8$ 的二次谐波，而基波为 $(x_{max}/2)(\alpha_1 + \alpha_2x_{max})$。因此

$$\mathrm{THD} = \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}$$

（这是谐波与基波的幅度之比；若按功率之比，则为其平方）。

**常见错误。** 只把 $\alpha_1x_{max}/2$ 当作基波。交叉项 $2\alpha_2A^2\cos\omega t$ 也位于基波频率上；丢掉它会得到 $\alpha_2x_{max}/(4\alpha_1)$，而这只是小非线性情况下的近似。

**常见错误。** 用 $x_{max}$ 而不是 $x_{max}/2$ 作为信号幅度（得到 THD $= \alpha_2x_{max}/(2\alpha_1)$），把直流项算作失真，或者声称存在三次及更高次谐波。
