# 详细步骤 - R505

**思路。** 极点是二次分母 $as^2 + bs + c$ 的根。当两个根相距很远时，根之和由较大的根主导，由此得到较大的根的模 ≈ $b/a$，较小的根的模 ≈ $c/b$；把这一结论应用于给定的系数即可。

### 第 1 步 — 系数与相距很远的根的近似法则

$H_{closed}$ 的分母为 $as^2 + bs + c$，其中

$$a = \frac{1}{\omega_{p1}\omega_{p2}}, \qquad b = \frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}, \qquad c = 1 + A_0 ,$$

它们都是正的。设极点位于 $s = -\omega_{pA}$ 和 $s = -\omega_{pB}$，且 $\omega_{pA} \ll \omega_{pB}$：

$$as^2 + bs + c = a\,(s + \omega_{pA})(s + \omega_{pB}) = as^2 + a(\omega_{pA} + \omega_{pB})s + a\,\omega_{pA}\omega_{pB} ,$$

因此

$$\omega_{pA} + \omega_{pB} = \frac ba, \qquad \omega_{pA}\,\omega_{pB} = \frac ca .$$

和由 $\omega_{pB}$ 主导，因此 $\omega_{pB} \approx b/a$，进而 $\omega_{pA} = (c/a)/\omega_{pB} \approx c/b$。（利用求根公式并取 $\sqrt{1 - 4ac/b^2} \approx 1 - 2ac/b^2$ 也可得到同样的结果，并且可以看出条件是 $b^2 \gg 4ac$，即 $\omega_{pB}/\omega_{pA} \gg 1$。）

### 第 2 步 — 应用于 $H_{closed}$

**低频极点：**

$$\omega_{pA} \approx \frac cb = \frac{1 + A_0}{\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}} .$$

**高频极点：**

$$
\begin{aligned}
\omega_{pB} \approx \frac ba &= \omega_{p1}\omega_{p2}\left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right)\\
&= \omega_{p2} + \omega_{p1} + \frac{A_0\,\omega_{p1}\omega_{p2}}{\omega_z} .
\end{aligned}
$$

由于所有系数都是正的，两个极点都在左半平面：$s = -\omega_{pA}$ 和 $s = -\omega_{pB}$，其中 $\omega_{pA}, \omega_{pB} > 0$。该近似要求 $b^2 \gg 4ac$：

$$\left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right)^2 \gg \frac{4(1 + A_0)}{\omega_{p1}\omega_{p2}} .$$

### 第 3 步 — 解释与验证

**近似对消的情形**（$\omega_z \approx \omega_{p2}$，$A_0 \gg 1$，且 $\omega_{p2} \ll (1 + A_0)\omega_{p1}$）：$A_0/\omega_z \approx A_0/\omega_{p2}$ 在 $b$ 中占主导，于是

$$\omega_{pA} \approx \frac{1 + A_0}{(1 + A_0)/\omega_{p2}} \approx \omega_{p2}\ (\approx \omega_z), \qquad \omega_{pB} \approx \omega_{p1} + \omega_{p2} + A_0\omega_{p1} \approx (1 + A_0)\,\omega_{p1} .$$

**精确验证。** 当 $\omega_z = \omega_{p2}$ 时，分母可分解为 $(1 + s/\omega_{p2})(1 + A_0 + s/\omega_{p1})$，其根位于 $\omega_{p2}$ 和 $(1 + A_0)\omega_{p1}$，与近似结果一致。

高频极点就是单极点放大器熟知的闭环极点，约为 $A_0\omega_{p1}$，即增益带宽积（gain-bandwidth product）；而低频极点被拉向零点，与零点构成一个零极点对（doublet）。

### 结果

$$\omega_{pA} \approx \frac{1 + A_0}{\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}}, \qquad \omega_{pB} \approx \omega_{p1}\omega_{p2}\left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right) = \omega_{p1} + \omega_{p2} + \frac{A_0\,\omega_{p1}\omega_{p2}}{\omega_z},$$

极点位于 $s = -\omega_{pA}$ 和 $s = -\omega_{pB}$（左半平面），在 $b^2 \gg 4ac$ 时成立。当 $\omega_z \approx \omega_{p2}$ 时，它们简化为 $\omega_{pA} \approx \omega_{p2}$ 和 $\omega_{pB} \approx (1 + A_0)\omega_{p1}$。

**常见错误。** 把两个根取为 $c/a$ 和 $b/a$。$c/a$ 是两个极点频率的**乘积**；较小的根是 $c/b$。

**常见错误。** 丢掉负号，把极点放到右半平面：当 $a$、$b$、$c > 0$ 时，$as^2 + bs + c$ 的两个根都是负的。

**常见错误。** 不检查两个根是否确实相距很远就直接使用近似；若 $b^2$ 并不远大于 $4ac$，就必须使用精确的求根公式（而且根甚至可能是复数）。
