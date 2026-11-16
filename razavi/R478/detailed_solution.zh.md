# 详细步骤 - R478

**思路。** 对于单位增益环路，闭环响应为 $H/(1 + H)$，其中 $H$ 为环路增益（loop gain）。在增益交点处 $|H| = 1$，而 $H$ 的相位由相位裕度确定，因此该处的闭环幅值只取决于相位裕度；令其等于 1.5 即可求出相位裕度。再用二阶模型进行交叉验证。

### 第 1 步 — 闭环响应与峰化条件

当 $\beta = 1$ 时，

$$\frac{Y}{X}(j\omega) = \frac{H(j\omega)}{1 + H(j\omega)},$$

在低频处 $|H| \gg 1$，该式约等于 1。在增益交点 $\omega_1$ 处，$|H(j\omega_1)| = 1$，$\angle H(j\omega_1) = -(180° - \mathrm{PM})$。

“50 % 峰化”意味着闭环幅值在 $\omega_1$ 附近升高到其低频值 1 的 1.5 倍。按照这类估算的惯例，直接在 $\omega_1$ 处计算闭环幅值，峰值大致就出现在这里：

$$\left|\frac{Y}{X}\right|_{\text{peak}} = 1.5 .$$

### 第 2 步 — 增益交点处的闭环幅值

在 $\omega_1$ 处，环路增益是一个单位相量：

$$H(j\omega_1) = 1\cdot e^{-j(180° - \mathrm{PM})} = e^{-j180°}\,e^{j\,\mathrm{PM}} = -e^{j\,\mathrm{PM}} = -\cos\mathrm{PM} - j\sin\mathrm{PM},$$

因此 $1 + H(j\omega_1) = (1 - \cos\mathrm{PM}) - j\sin\mathrm{PM}$，再利用 $1 - \cos\theta = 2\sin^2(\theta/2)$，得

$$
\begin{aligned}
|1 + H(j\omega_1)| &= \sqrt{(1 - \cos\mathrm{PM})^2 + \sin^2\mathrm{PM}}\\
&= \sqrt{1 - 2\cos\mathrm{PM} + \cos^2\mathrm{PM} + \sin^2\mathrm{PM}}\\
&= \sqrt{2 - 2\cos\mathrm{PM}}\\
&= \sqrt{4\sin^2(\mathrm{PM}/2)}\\
&= 2\sin\frac{\mathrm{PM}}{2}.
\end{aligned}
$$

由于 $|H(j\omega_1)| = 1$：

$$\left|\frac{Y}{X}(j\omega_1)\right| = \frac{|H(j\omega_1)|}{|1 + H(j\omega_1)|} = \frac{1}{2\sin(\mathrm{PM}/2)} .$$

从几何上看，$|1 + H|$ 是单位圆上的 $H$ 与临界点 $-1$ 之间的弦长，二者相隔 PM 度：裕度小时 $H$ 靠近 $-1$，闭环响应就出现峰值。

### 第 3 步 — 求解相位裕度

$$
\begin{aligned}
\frac{1}{2\sin(\mathrm{PM}/2)} &= 1.5\\
\sin\frac{\mathrm{PM}}{2} &= \frac{1}{2\times1.5} = \frac13\\
\frac{\mathrm{PM}}{2} &= \sin^{-1}\frac13 = 19.47°\\
\mathrm{PM} &= 38.9° .
\end{aligned}
$$

**合理性检验**，取几个熟悉的值计算 $1/(2\sin(\mathrm{PM}/2))$：

| PM | $\omega_1$ 处的闭环幅值 | 峰化 |
|---|---|---|
| 30° | 1.93 | 93 % |
| 38.9° | 1.50 | 50 % |
| 45° | 1.31 | 31 % |
| 60° | 1.00 | $\omega_1$ 处无峰化 |

45° 的情形重现了熟知的“约 30 % 峰化”，60° 在交点处恰好给出 1，因此 50 % 的峰值需要小于 45° 的裕度，与 38.9° 一致。

### 第 4 步 — 用二阶闭环系统交叉验证

一个高增益的两极点放大器接成单位增益环路后，其特性类似于

$$\frac{Y}{X}(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2},$$

对应的环路增益为 $L(s) = \omega_n^2/[s(s + 2\zeta\omega_n)]$。

**由峰值求阻尼比。** 当 $\zeta < 0.707$ 时，峰值为 $M_p = 1/(2\zeta\sqrt{1 - \zeta^2})$。令 $M_p = 1.5$：

$$
\begin{aligned}
2\zeta\sqrt{1 - \zeta^2} &= \frac23\\
4\zeta^2(1 - \zeta^2) &= \frac49\\
\zeta^4 - \zeta^2 + \frac19 &= 0\\
\zeta^2 &= \frac{1 - \sqrt{1 - 4/9}}{2} = \frac{1 - 0.7454}{2} = 0.1273\\
\zeta &= 0.357 .
\end{aligned}
$$

（另一个根 $\zeta^2 = 0.873$ 大于 0.5，不产生峰值。）

**该环路的相位裕度。** $L$ 的交点满足 $\omega_n^2 = \omega_c\sqrt{\omega_c^2 + 4\zeta^2\omega_n^2}$，因此 $(\omega_c/\omega_n)^2 = \sqrt{1 + 4\zeta^4} - 2\zeta^2$。$L$ 的相位为 $-90° - \tan^{-1}[\omega_c/(2\zeta\omega_n)]$，因此

$$\mathrm{PM} = \tan^{-1}\frac{2\zeta}{\sqrt{\sqrt{1 + 4\zeta^4} - 2\zeta^2}} .$$

代入 $\zeta = 0.357$：$\sqrt{1 + 4(0.0162)} = 1.0319$，然后 $1.0319 - 0.2546 = 0.7773$，其平方根为 0.8816，因此

$$\mathrm{PM} = \tan^{-1}\frac{0.714}{0.8816} = \tan^{-1}(0.810) = 39.0° .$$

两种方法结果一致：PM ≈ 39°。

### 结果

$$\mathrm{PM} = 2\sin^{-1}\frac13 \approx 39°,$$

由 $\left|Y/X\right|_{\omega_1} = 1/[2\sin(\mathrm{PM}/2)] = 1.5$ 得到。（二阶模型给出 $\zeta \approx 0.36$，结果相同。）

**常见错误。** 凭记忆回答 45° 或 60°。45° 的裕度约产生 30 % 的峰化，60° 基本没有峰化；50 % 的峰化需要更小的裕度，约 39°。

**常见错误。** 把 50 % 直接当作 50° 的相位裕度。峰化是幅值之比，必须通过 $1/[2\sin(\mathrm{PM}/2)]$ 换算成裕度。

**常见错误。** 忘记在增益交点处 $|H| = 1$，或把相量加错（例如写成 $|1 + H| = \cos\mathrm{PM}$）。分母是单位圆上 $H$ 与 $-1$ 之间的距离，即 $2\sin(\mathrm{PM}/2)$。
