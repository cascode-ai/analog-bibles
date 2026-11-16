# 详细步骤 - R622

**思路。** 把两个正弦信号分别代入两个多项式，相减，再按频率整理输出。系数相同时，$x$ 的每一次幂只通过两个输入各自取该次幂后的差值起作用，而只有平方项会产生 $2\omega$ 处的分量；用三角恒等式求出该分量。

### 第 1 步 — 哪些项能产生二次谐波？

取 $\beta_j = \alpha_j$，

$$y_1 - y_2 = \alpha_1\left(x_1 - x_2\right) + \alpha_2\left(x_1^2 - x_2^2\right) + \alpha_3\left(x_1^3 - x_2^3\right).$$

若 $\theta = 0$，每一项都会抵消；全部输出都来自失配。对于 $x = A\cos(\omega t + \phi)$，线性项只含 $\omega$，而

$$x^2 = \frac{A^2}{2} + \frac{A^2}{2}\cos(2\omega t + 2\phi), \qquad x^3 = \frac{3A^3}{4}\cos(\omega t + \phi) + \frac{A^3}{4}\cos(3\omega t + 3\phi).$$

只有平方项含 $2\omega$，因此二次谐波完全来自 $\alpha_2(x_1^2 - x_2^2)$；$\alpha_1$ 和 $\alpha_3$ 对它没有贡献。

### 第 2 步 — 展开二次项

$$
\begin{aligned}
x_1^2 &= A^2\cos^2\omega t = \frac{A^2}{2} + \frac{A^2}{2}\cos2\omega t,\\
x_2^2 &= A^2\cos^2(\omega t + \theta) = \frac{A^2}{2} + \frac{A^2}{2}\cos(2\omega t + 2\theta).
\end{aligned}
$$

直流部分 $A^2/2$ 在差值中抵消：

$$x_1^2 - x_2^2 = \frac{A^2}{2}\left[\cos2\omega t - \cos(2\omega t + 2\theta)\right].$$

### 第 3 步 — 合并两个余弦

利用 $\cos a - \cos b = -2\sin\frac{a + b}{2}\,\sin\frac{a - b}{2}$，取 $a = 2\omega t$，$b = 2\omega t + 2\theta$：

$$
\begin{aligned}
\frac{a + b}{2} &= 2\omega t + \theta, \qquad \frac{a - b}{2} = -\theta,\\
\cos2\omega t - \cos(2\omega t + 2\theta) &= -2\sin(2\omega t + \theta)\sin(-\theta) = 2\sin\theta\,\sin(2\omega t + \theta).
\end{aligned}
$$

代入第 2 步的结果并乘以 $\alpha_2$：

$$\alpha_2\left(x_1^2 - x_2^2\right) = \alpha_2\frac{A^2}{2}\cdot2\sin\theta\,\sin(2\omega t + \theta) = \alpha_2A^2\sin\theta\,\sin(2\omega t + \theta).$$

### 第 4 步 — 二次谐波的幅度

输出中的二次谐波分量为

$$y_1 - y_2\Big|_{2\omega} = \alpha_2A^2\sin\theta\,\sin(2\omega t + \theta),$$

其幅度为

$$\left|y_1 - y_2\right|_{2\omega} = \alpha_2A^2\,|\sin\theta| \approx \alpha_2A^2\,|\theta| \quad (\theta \ll 1,\ \theta\text{ in radians}).$$

它是相位失配的**一阶**量。例如，$\theta = 1^\circ = 0.0175$ rad 给出 $0.0175\,\alpha_2A^2$，即单条通路自身产生的二次谐波 $\tfrac12\alpha_2A^2$ 的 $2\sin\theta = 3.5\%$。

基波处的相位误差 $\theta$ 在二次谐波处变为 $2\theta$；两个长度均为 $\tfrac12\alpha_2A^2$、相位相差 $2\theta$ 的相量，其差的大小为 $2\times\tfrac12\alpha_2A^2\sin\theta = \alpha_2A^2\sin\theta$。

### 第 5 步 — 差分驱动时结果相同

若第二条通路由反相信号 $x_2 = -A\cos(\omega t + \theta)$ 驱动，$x_2^2$ 不变，因此二次谐波**完全相同**，仍为 $\alpha_2A^2\sin\theta\,\sin(2\omega t + \theta)$。而基波此时相加而不是相消：

$$\alpha_1\left[A\cos\omega t + A\cos(\omega t + \theta)\right] \approx 2\alpha_1A\cos\omega t ,$$

因此

$$\mathrm{HD_2} \approx \frac{\alpha_2A^2\theta}{2\alpha_1A} = \frac{\alpha_2A}{2\alpha_1}\,\theta .$$

差分电路对偶次失真的抑制效果取决于两半电路的匹配程度，这里指相位上的匹配：即使系数完全匹配，仅凭相位失配也会使二次谐波重新出现。

### 结果

只有二次项在 $2\omega$ 处有贡献；直流项相互抵消，三次项只产生 $\omega$ 和 $3\omega$ 分量：

$$\alpha_2\left(x_1^2 - x_2^2\right) = \frac{\alpha_2A^2}{2}\left[\cos2\omega t - \cos(2\omega t + 2\theta)\right] = \alpha_2A^2\sin\theta\,\sin(2\omega t + \theta).$$

输出端二次谐波的幅度为

$$\alpha_2A^2\,|\sin\theta| \approx \alpha_2A^2\,|\theta| .$$

**常见错误。** 认为系数相同，二次谐波就会抵消。抵消还要求**相位**相同；相位失配 $\theta$ 会留下与 $\theta$ 成正比的残余分量。

**常见错误。** 在 $x_2^2$ 中写成 $\cos(2\omega t + \theta)$ 而不是 $\cos(2\omega t + 2\theta)$，这会得到 $\alpha_2A^2\theta/2$，只有正确值的一半。平方运算使频率和相位都加倍。

**常见错误。** 把部分二次谐波归因于三次项，或认为残余分量与 $\theta^2$ 成正比。三次项只产生奇次谐波，而 $\sin\theta \approx \theta$ 使残余分量为一阶量。
