# 详细步骤 - R600

**思路。** 把输入代入特性方程，利用恒等式 $\cos^2\theta = \tfrac12(1 + \cos2\theta)$ 展开平方项，再合并直流、基波（fundamental）和二次谐波（second harmonic）各项。总谐波失真（THD）就是谐波幅度与基波幅度之比。

### 第 1 步 — 把输入写成便于计算的形式

输入为

$$x(t) = \frac{x_{max}\cos\omega t + x_{max}}{2} = A + A\cos\omega t, \qquad A = \frac{x_{max}}{2}.$$

它是叠加在直流电平 $A$ 上、幅度为 $A = x_{max}/2$ 的正弦信号，因此恰好扫过 $[0, x_{max}]$ 整个范围：$\cos\omega t = -1$ 时 $x = 0$，$\cos\omega t = +1$ 时 $x = x_{max}$。

### 第 2 步 — 展开平方项

$$
\begin{aligned}
x^2(t) &= A^2(1 + \cos\omega t)^2\\
&= A^2\left(1 + 2\cos\omega t + \cos^2\omega t\right)\\
&= A^2\left(1 + 2\cos\omega t + \tfrac12 + \tfrac12\cos2\omega t\right)\qquad\left(\cos^2\theta = \tfrac12 + \tfrac12\cos2\theta\right)\\
&= A^2\left(\tfrac32 + 2\cos\omega t + \tfrac12\cos2\omega t\right).
\end{aligned}
$$

注意交叉项 $2\cos\omega t$：由于输入含有直流分量，平方运算还会产生位于基波频率上的分量。

### 第 3 步 — 输出的各个分量

$$
\begin{aligned}
y(t) &= \alpha_1(A + A\cos\omega t) + \alpha_2A^2\left(\tfrac32 + 2\cos\omega t + \tfrac12\cos2\omega t\right)\\
&= \underbrace{\left(\alpha_1A + \tfrac32\alpha_2A^2\right)}_{\text{DC}} + \underbrace{\left(\alpha_1A + 2\alpha_2A^2\right)}_{\text{fundamental } Y_1}\cos\omega t + \underbrace{\tfrac12\alpha_2A^2}_{\text{2nd harmonic } Y_2}\cos2\omega t .
\end{aligned}
$$

用 $x_{max}$ 表示（$A = x_{max}/2$，$A^2 = x_{max}^2/4$）：

$$
\begin{aligned}
Y_1 &= \alpha_1\frac{x_{max}}{2} + 2\alpha_2\frac{x_{max}^2}{4} = \frac{x_{max}}{2}\left(\alpha_1 + \alpha_2x_{max}\right),\\
Y_2 &= \frac12\alpha_2\frac{x_{max}^2}{4} = \frac{\alpha_2x_{max}^2}{8}.
\end{aligned}
$$

输出中**没有三次及更高次谐波**：二阶多项式作用于单一正弦信号，只能产生最高到 $2\omega$ 的频率。直流项不是失真，它只是输出的工作电平。

### 第 4 步 — 总谐波失真

THD（按幅度之比定义）等于各次谐波幅度的方和根（rms sum）除以基波幅度，即 $\mathrm{THD} = \sqrt{Y_2^2 + Y_3^2 + \dots}\,/\,Y_1$。这里只有 $Y_2$：

$$
\begin{aligned}
\mathrm{THD} &= \frac{|Y_2|}{Y_1} = \frac{|\alpha_2|\,x_{max}^2/8}{(x_{max}/2)(\alpha_1 + \alpha_2x_{max})}\\
&= \frac{|\alpha_2|\,x_{max}^2}{8}\cdot\frac{2}{x_{max}(\alpha_1 + \alpha_2x_{max})}\\
&= \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})}.
\end{aligned}
$$

当非线性（nonlinearity）较弱，即 $|\alpha_2|x_{max} \ll \alpha_1$ 时：

$$\mathrm{THD} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}.$$

若 THD 改用功率比表示，则为上述数值的平方。

### 第 5 步 — 示例与解释

取 $\alpha_1 = 1$，$\alpha_2 = 0.1$，$x_{max} = 1$：

$$
\begin{aligned}
Y_1 &= \tfrac12(1 + 0.1) = 0.55,\qquad Y_2 = \frac{0.1}{8} = 0.0125,\\
\mathrm{THD} &= \frac{0.0125}{0.55} = 2.27\ \% \quad(-32.9\ \mathrm{dB}).
\end{aligned}
$$

**几点说明。**

- 基波是 $\alpha_1A + 2\alpha_2A^2$，而不仅仅是 $\alpha_1A$：输入的直流电平把工作点移到增量增益为 $\alpha_1 + 2\alpha_2A = \alpha_1 + \alpha_2x_{max}$ 的位置，这正是特性曲线在该范围内的平均斜率。
- THD 与 $x_{max}$ 成正比增长，这是二阶失真的典型特征。
- 该结果与同一特性在 $[0, x_{max}]$ 上的端点非线性（end-point nonlinearity）完全相同，后者等于（最大偏差 $|\alpha_2|x_{max}^2/4$）/（摆幅 $\alpha_1x_{max} + \alpha_2x_{max}^2$）。对于纯二次特性，这两种非线性度量是一致的。

### 结果

输出中只有二次谐波，其幅度为 $\alpha_2x_{max}^2/8$，而基波幅度为 $(x_{max}/2)(\alpha_1 + \alpha_2x_{max})$。因此

$$\mathrm{THD} = \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}$$

（按谐波幅度与基波幅度之比计；若按功率比，则为其平方）。

**常见错误。** 只把 $\alpha_1x_{max}/2$ 当作基波。对含直流分量的信号求平方会产生交叉项 $2\alpha_2A^2\cos\omega t$，它也位于基波频率上；略去它会得到 $\alpha_2x_{max}/(4\alpha_1)$，而这只是弱非线性下的近似。

**常见错误。** 把 $x_{max}$ 而不是 $x_{max}/2$ 当作信号幅度（得到 THD $= \alpha_2x_{max}/(2\alpha_1)$），把直流项算作失真，或者声称存在三次及更高次谐波。平方律（square law）作用于单一正弦信号，只会产生直流、基波和二次谐波。
