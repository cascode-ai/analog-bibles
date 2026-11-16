# 详细步骤 - R477

**思路。** 当 $\beta = 1$ 时，环路增益（loop gain）就是放大器的两极点传递函数。令其幅值为 1 求出增益交点，计算该处的相位，相位裕度就是该相位与 $-180°$ 之间的距离。

### 第 1 步 — 归一化形式的环路增益

取 $\beta = 1$、$A_0 = 1000$、$\omega_{p2} = 4\omega_{p1}$，环路增益为

$$H(j\omega) = \frac{A_0}{\left(1 + j\dfrac{\omega}{\omega_{p1}}\right)\left(1 + j\dfrac{\omega}{\omega_{p2}}\right)}.$$

令 $x = \omega/\omega_{p1}$，则 $\omega/\omega_{p2} = x/4$：

$$
\begin{aligned}
|H| &= \frac{1000}{\sqrt{1 + x^2}\,\sqrt{1 + x^2/16}},\\
\angle H &= -\tan^{-1}x - \tan^{-1}\frac{x}{4}.
\end{aligned}
$$

起作用的只是比值 $\omega_{p2}/\omega_{p1} = 4$；$\omega_{p1} = 1$ MHz 这一数值只决定频率标度。

### 第 2 步 — 增益交点频率

将条件 $|H| = 1$ 两边平方：

$$(1 + x^2)\left(1 + \frac{x^2}{16}\right) = 10^6 .$$

令 $u = x^2$：

$$
\begin{aligned}
1 + \frac{u}{16} + u + \frac{u^2}{16} &= 10^6\\
\frac{u^2}{16} + \frac{17u}{16} + 1 - 10^6 &= 0\\
u^2 + 17u + 16 - 16\times10^6 &= 0 .
\end{aligned}
$$

正根为

$$u = \frac{-17 + \sqrt{17^2 - 4(16 - 16\times10^6)}}{2} = \frac{-17 + \sqrt{64\,000\,225}}{2} = \frac{-17 + 8000.014}{2} = 3991.5 ,$$

因此

$$x_u = \sqrt{3991.5} = 63.18, \qquad \omega_u \approx 63.2\,\omega_{p1}.$$

**快速估算。** 两个极点都远低于交点，因此 $\sqrt{1 + x^2} \approx x$，$\sqrt{1 + x^2/16} \approx x/4$：$|H| \approx 1000/(x\cdot x/4) = 4000/x^2 = 1$，得到 $x_u \approx \sqrt{4000} = 63.25$，与精确值相差不到 0.1 %。

### 第 3 步 — 交点处的相位

$$
\begin{aligned}
\tan^{-1}(63.18) &= 89.09°,\\
\tan^{-1}\left(\frac{63.18}{4}\right) = \tan^{-1}(15.79) &= 86.38°,\\
\angle H(j\omega_u) &= -(89.09° + 86.38°) = -175.47° .
\end{aligned}
$$

### 第 4 步 — 相位裕度

$$\mathrm{PM} = 180° + \angle H(j\omega_u) = 180° - 175.47° = 4.53° .$$

**验证。** 当 $z$ 很大时，$\tan^{-1}z \approx 90° - 1/z$（以弧度计），因此两个“缺少”的相位分别为 $1/x_u$ 和 $4/x_u$：

$$\mathrm{PM} \approx \frac{1 + 4}{x_u} = \frac{5}{63.18}\ \mathrm{rad} = 0.0791\ \mathrm{rad} = 4.53° .\ \checkmark$$

### 第 5 步 — 为什么移动第二个极点作用如此之小

对于极点比 $k = \omega_{p2}/\omega_{p1}$ 且 $A_0 \gg k$ 的情形，第 2 步和第 4 步中的近似给出：

$$x_u \approx \sqrt{kA_0}, \qquad \mathrm{PM} \approx \frac{1 + k}{\sqrt{kA_0}}\ \mathrm{rad}.$$

| $k$ | $x_u$ | PM |
|---|---|---|
| 2 | 44.7 | 3.8° |
| 4 | 63.2 | 4.5° |

极点间距加倍只使交点提高 $\sqrt2$ 倍，而在 $A_0 = 1000$ 时交点仍远高于**两个**极点，因此环路相位仍接近 $-180°$。要获得足够的裕度（例如 60°），第二个极点必须位于交点**之上**，即需要大得多的极点间距或小得多的环路增益；这正是频率补偿（frequency compensation）所要实现的。

### 结果

$$\omega_u \approx 63.2\,\omega_{p1}\ (\approx 63.2\ \mathrm{MHz}), \qquad \angle H(j\omega_u) \approx -175.5°, \qquad \mathrm{PM} \approx 4.5° .$$

环路是稳定的，但阻尼非常差。

**常见错误。** 像单极点放大器那样取交点为 $A_0\,\omega_{p1} = 1000\,\omega_{p1}$，忽略了第二个极点引起的滚降：在 $1000\,\omega_{p1}$ 处环路增益只有约 0.004，由该处相位得到的 PM 约为 0.3°，毫无意义。

**常见错误。** 把交点放在第二个极点处或更低，并给出几十度的裕度。在 $\omega_{p2} = 4\omega_{p1}$ 处，环路增益仍为 $1000/(\sqrt{17}\,\sqrt2) \approx 171$，远大于 1。

**常见错误。** 以为把 $\omega_{p2}$ 从 $2\omega_{p1}$ 移到 $4\omega_{p1}$ 会带来很大改善。相位裕度只从约 3.8° 提高到约 4.5°，因为两个极点仍远低于交点。
