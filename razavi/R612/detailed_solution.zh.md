# 详细步骤 - R612

**思路。** 采用谐波平衡（harmonic balance）法：假设输出包含基波和一个小的三次谐波，算出放大器输入 $y_S = x - \beta y$，让它通过 $\alpha_1y_S + \alpha_3y_S^3$，并要求所得的 $\cos\omega t$ 和 $\cos3\omega t$ 系数与假设的输出一致。由于非线性较弱，含有小三次谐波的乘积项可以略去；再用幂级数加以验证。

### 第 1 步 — 假设的输出形式

该特性是奇函数，且反馈是线性的，因此余弦输入只产生奇次谐波。忽略相移，

$$y(t) \approx a\cos\omega t + c\cos3\omega t,$$

其中基波为 $a$，三次谐波为 $c$，$|c| \ll a$；五次及更高次谐波是 $\alpha_3$ 的更高阶量，予以忽略。

### 第 2 步 — 放大器的输入

$$y_S(t) = x(t) - \beta y(t) = (V_m - \beta a)\cos\omega t - \beta c\cos3\omega t .$$

记 $A = V_m - \beta a$ 为放大器输入端的基波幅度；$-\beta c\cos3\omega t$ 项是反馈回来的三次谐波。

### 第 3 步 — 让 $y_S$ 通过放大器

**线性项：**

$$\alpha_1y_S = \alpha_1A\cos\omega t - \alpha_1\beta c\cos3\omega t .$$

**三次项。** 由于 $|\beta c| \ll A$，只保留 $A^3\cos^3\omega t$（与 $c$ 的交叉项是二阶小量），并利用 $\cos^3\theta = \tfrac34\cos\theta + \tfrac14\cos3\theta$：

$$\alpha_3y_S^3 \approx \alpha_3A^3\left(\tfrac34\cos\omega t + \tfrac14\cos3\omega t\right).$$

**总输出：**

$$y \approx \left(\alpha_1A + \tfrac34\alpha_3A^3\right)\cos\omega t + \left(-\alpha_1\beta c + \tfrac14\alpha_3A^3\right)\cos3\omega t .$$

### 第 4 步 — 比较系数

**基波。** 对于弱非线性，$a = \alpha_1A + \tfrac34\alpha_3A^3 \approx \alpha_1A$，因此

$$
\begin{aligned}
A &= V_m - \beta a \approx V_m - \beta\alpha_1A\\
A\,(1 + \beta\alpha_1) &= V_m\\
A &= \frac{V_m}{1 + \beta\alpha_1}, \qquad a \approx \frac{\alpha_1V_m}{1 + \beta\alpha_1}.
\end{aligned}
$$

放大器自身的输入摆幅比 $V_m$ 小 $1 + \beta\alpha_1$ 倍。

**三次谐波。** 令 $\cos3\omega t$ 的系数等于 $c$：

$$
\begin{aligned}
c &= -\alpha_1\beta c + \tfrac14\alpha_3A^3\\
c\,(1 + \beta\alpha_1) &= \tfrac14\alpha_3A^3\\
c &= \frac{\alpha_3A^3}{4\,(1 + \beta\alpha_1)}.
\end{aligned}
$$

代入 $A = V_m/(1 + \beta\alpha_1)$：

$$c = \frac{\alpha_3}{4(1 + \beta\alpha_1)}\cdot\frac{V_m^3}{(1 + \beta\alpha_1)^3} = \frac{\alpha_3V_m^3}{4\,(1 + \beta\alpha_1)^4}.$$

### 第 5 步 — 用幂级数交叉验证

把闭环特性写成 $y = b_1x + b_3x^3 + \dots$（没有偶次项）。于是 $y_S = (1 - \beta b_1)x - \beta b_3x^3$，且

$$y = \alpha_1(1 - \beta b_1)x + \left[\alpha_3(1 - \beta b_1)^3 - \alpha_1\beta b_3\right]x^3 + \dots$$

比较系数得 $b_1 = \alpha_1/(1 + \beta\alpha_1)$，$1 - \beta b_1 = 1/(1 + \beta\alpha_1)$，以及

$$b_3(1 + \beta\alpha_1) = \frac{\alpha_3}{(1 + \beta\alpha_1)^3} \;\Rightarrow\; b_3 = \frac{\alpha_3}{(1 + \beta\alpha_1)^4}.$$

对于 $x = V_m\cos\omega t$，$x^3$ 项贡献 $\tfrac14b_3V_m^3\cos3\omega t$，即 $c = \alpha_3V_m^3/[4(1 + \beta\alpha_1)^4]$，结果相同。

### 第 6 步 — 解释及与开环情况的比较

相对于基波，

$$\frac{|c|}{a} = \frac{|\alpha_3|V_m^3/[4(1 + \beta\alpha_1)^4]}{\alpha_1V_m/(1 + \beta\alpha_1)} = \frac{|\alpha_3|V_m^2}{4\alpha_1}\cdot\frac{1}{(1 + \beta\alpha_1)^3}.$$

在相同输入下开环时，$c_{OL} = \alpha_3V_m^3/4$，$\mathrm{HD3}_{OL} = |\alpha_3|V_m^2/(4\alpha_1)$，因此反馈使 HD3 降低 $(1 + \beta\alpha_1)^3$ 倍：输入摆幅减小 $1 + \beta\alpha_1$ 倍，三次项按其三次方缩小，而基波按线性缩小（合起来为因子 $(1 + \beta\alpha_1)^2$），环路又把所产生的谐波再抑制 $1 + \beta\alpha_1$ 倍。若在相同的**输出**幅度下比较（开环输入为 $V_m/(1 + \beta\alpha_1)$），闭环 HD3 低 $1 + \beta\alpha_1$ 倍。

**示例。** 取 $\alpha_1 = 10$，$\alpha_3 = -5\ \mathrm{V^{-2}}$，$\beta = 0.2$，$V_m = 0.1$ V：$1 + \beta\alpha_1 = 3$，$|c| = 5(0.001)/(4\times81) = 1.54\times10^{-5}$ V，$a = 0.333$ V，因此 HD3 $= 4.6\times10^{-5}$，而开环为 $1.25\times10^{-3}$（大 27 倍）。环路方程的数值解与之相差不到 0.2 %。

### 结果

$$|c| \approx \frac{|\alpha_3|\,V_m^3}{4\,(1 + \beta\alpha_1)^4},$$

相对于基波 $a \approx \alpha_1V_m/(1 + \beta\alpha_1)$，

$$\frac{|c|}{a} \approx \frac{|\alpha_3|V_m^2}{4\alpha_1}\cdot\frac{1}{(1 + \beta\alpha_1)^3},$$

即比相同输入幅度下的开环值低 $(1 + \beta\alpha_1)^3$ 倍。由于特性是奇函数，不会出现二次谐波（second harmonic）。

**常见错误。** 在 $y_S$ 中漏掉反馈回来的三次谐波 $-\beta c\cos3\omega t$。这会得到 $c = \alpha_3V_m^3/[4(1 + \beta\alpha_1)^3]$，结果大了一个 $1 + \beta\alpha_1$ 因子。

**常见错误。** 在放大器输入端使用完整的输入幅度 $V_m$（得到 $c = \alpha_3V_m^3/4$，即“不受反馈影响”，或者 $c = \alpha_3V_m^3/[4(1 + \beta\alpha_1)]$）。放大器看到的只是 $V_m/(1 + \beta\alpha_1)$，而三次失真按这一缩小量的三次方减小。
