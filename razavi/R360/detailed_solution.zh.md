# 详细步骤 - R360

**思路。** $M_1$ 的热噪声和闪烁噪声以及 $R_D$ 的热噪声，都是注入输出节点的电流，它们流入并联的 $R_D$、$r_O$ 和 $C_L$。写出单极点的输出功率谱密度，再从 $f_L$ 到 $f_H$ 分别对其热噪声（白噪声）部分和闪烁噪声（$1/f$）部分积分。

### 第 1 步 — 以输出电流表示的噪声源

输入接交流地时：

- **$M_1$ 的热噪声：** 漏源之间的电流，$\overline{I_{n,th}^2} = 4kT\gamma g_m$。
- **$M_1$ 的闪烁噪声：** 栅极电压 $\overline{V_{n,1/f}^2} = \dfrac{K}{C_{ox}WL}\cdot\dfrac1f$ 变为漏极电流 $g_mV_{n,1/f}$，其中
$$\overline{I_{n,1/f}^2} = g_m^2\,\frac{K}{C_{ox}WL}\cdot\frac{1}{f}.$$
- **$R_D$ 的热噪声：** 并联电流，$\overline{I_{n,R}^2} = 4kT/R_D$。

三者互不相关，因此注入输出端的总噪声电流为

$$\overline{I_{n,tot}^2}(f) = 4kT\left(\gamma g_m + \frac{1}{R_D}\right) + \frac{g_m^2K}{C_{ox}WL}\cdot\frac1f .$$

$r_O$ 不是噪声源：沟道的噪声已经包含在 $4kT\gamma g_m$ 中。

### 第 2 步 — 输出阻抗（output impedance）与输出功率谱密度

令 $v_{in} = 0$，$g_mv_{gs}$ 不起作用，输出端看到的是接到交流地的 $R_D$、$r_O$ 和 $C_L$。定义

$$R_0 = R_D\parallel r_O = \frac{R_Dr_O}{R_D + r_O}.$$

<!-- diagram: diagram-01.cir -->

于是 $Z_{out}(j\omega) = R_0\parallel\dfrac{1}{j\omega C_L} = \dfrac{R_0}{1 + j\omega R_0C_L}$，且

$$|Z_{out}(f)|^2 = \frac{R_0^2}{1 + (\omega R_0C_L)^2} = \frac{R_0^2}{1 + (f/f_0)^2}, \qquad f_0 = \frac{1}{2\pi R_0C_L},$$

极点由 $R_D\parallel r_O$ 决定，而不是仅由 $R_D$ 决定。输出功率谱密度为 $\overline{I_{n,tot}^2}\,|Z_{out}|^2$：

$$S_{out}(f) = \left[4kT\left(\gamma g_m + \frac{1}{R_D}\right) + \frac{g_m^2K}{C_{ox}WL}\cdot\frac1f\right]\frac{R_0^2}{1 + (f/f_0)^2}.$$

### 第 3 步 — 对热噪声部分积分

$$\overline{V_{n,out,th}^2} = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2\int_{f_L}^{f_H}\frac{df}{1 + (f/f_0)^2}.$$

令 $x = f/f_0$，$df = f_0\,dx$：

$$\int\frac{df}{1 + (f/f_0)^2} = f_0\int\frac{dx}{1 + x^2} = f_0\tan^{-1}x = f_0\tan^{-1}\frac{f}{f_0},$$

$$\overline{V_{n,out,th}^2} = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2f_0\left[\tan^{-1}\frac{f_H}{f_0} - \tan^{-1}\frac{f_L}{f_0}\right].$$

### 第 4 步 — 对闪烁噪声部分积分

$$\overline{V_{n,out,1/f}^2} = \frac{g_m^2KR_0^2}{C_{ox}WL}\int_{f_L}^{f_H}\frac{df}{f\left[1 + (f/f_0)^2\right]}.$$

用部分分式分解（右边通分后的分子为 $(1 + f^2/f_0^2) - f^2/f_0^2 = 1$），

$$\frac{1}{f\left(1 + f^2/f_0^2\right)} = \frac{1}{f} - \frac{f/f_0^2}{1 + f^2/f_0^2}.$$

由于 $\frac{d}{df}\ln(1 + f^2/f_0^2) = \frac{2f/f_0^2}{1 + f^2/f_0^2}$，第二项的积分为 $\tfrac12\ln(1 + f^2/f_0^2)$，因此

$$\int\frac{df}{f\left(1 + f^2/f_0^2\right)} = \ln f - \frac12\ln\left(1 + \frac{f^2}{f_0^2}\right) = \frac12\ln\frac{f^2}{1 + f^2/f_0^2}.$$

代入上下限：

$$
\begin{aligned}
\int_{f_L}^{f_H}\frac{df}{f\left(1 + f^2/f_0^2\right)} &= \frac12\ln\frac{f_H^2}{1 + f_H^2/f_0^2} - \frac12\ln\frac{f_L^2}{1 + f_L^2/f_0^2}\\
&= \frac12\ln\left[\frac{f_H^2\,(1 + f_L^2/f_0^2)}{f_L^2\,(1 + f_H^2/f_0^2)}\right] = \frac12\ln\left[\frac{f_H^2\,(f_0^2 + f_L^2)}{f_L^2\,(f_0^2 + f_H^2)}\right],
\end{aligned}
$$

$$\overline{V_{n,out,1/f}^2} = \frac{g_m^2KR_0^2}{C_{ox}WL}\cdot\frac12\ln\left[\frac{f_H^2\,(f_0^2 + f_L^2)}{f_L^2\,(f_0^2 + f_H^2)}\right].$$

### 第 5 步 — 验证

- **频带远低于极点**（$f_H \ll f_0$）：$\tan^{-1}x \approx x$，因此热噪声部分变为 $4kT(\gamma g_m + 1/R_D)R_0^2(f_H - f_L)$；对数的自变量变为 $f_H^2/f_L^2$，因此闪烁噪声部分变为 $\dfrac{g_m^2KR_0^2}{C_{ox}WL}\ln\dfrac{f_H}{f_L}$，即熟悉的“每十倍频程噪声相同”的结果。
- **全频谱的热噪声部分**（$f_L \to 0$，$f_H \to \infty$）：方括号趋于 $\pi/2$，且 $R_0^2f_0\cdot\frac{\pi}{2} = R_0^2\cdot\frac{1}{2\pi R_0C_L}\cdot\frac{\pi}{2} = \frac{R_0}{4C_L}$，因此
$$\overline{V_{n,out,th}^2} \to 4kT\left(\gamma g_m + \frac{1}{R_D}\right)\frac{R_0}{4C_L} = \frac{kT}{C_L}\left(\gamma g_m + \frac{1}{R_D}\right)R_0 ,$$
对于单个电阻（$g_m \to 0$，$r_O \to \infty$，$R_0 = R_D$），这就是众所周知的 $kT/C_L$。
- **$f_L \to 0$ 时的闪烁噪声部分：** 对数发散，因此需要一个有限的下限（由观测时间决定）。

### 结果

令 $R_0 = R_D\parallel r_O$，$f_0 = 1/(2\pi R_0C_L)$，则

$$S_{out}(f) = \left[4kT\left(\gamma g_m + \frac{1}{R_D}\right) + \frac{g_m^2K}{C_{ox}WL}\cdot\frac{1}{f}\right]\frac{R_0^2}{1 + (f/f_0)^2},$$

$$\overline{V_{n,out,th}^2} = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2 f_0\left[\tan^{-1}\frac{f_H}{f_0} - \tan^{-1}\frac{f_L}{f_0}\right],$$

$$\overline{V_{n,out,1/f}^2} = \frac{g_m^2KR_0^2}{C_{ox}WL}\cdot\frac12\ln\!\left[\frac{f_H^2\,(f_0^2 + f_L^2)}{f_L^2\,(f_0^2 + f_H^2)}\right].$$

总输出噪声为两者之和 $\overline{V_{n,out,th}^2} + \overline{V_{n,out,1/f}^2}$。

**常见错误。** 声称考虑了 $\lambda \neq 0$，却仍只用 $R_D$ 计算输出电阻和极点。输出端看到的是 $R_D\parallel r_O$，它同时决定 $R_0^2$ 和 $f_0$；而且 $r_O$ 不是噪声源（不应加 $4kT/r_O$）。

**常见错误。** 把闪烁噪声当作白噪声来积分，或者给出不含极点修正的 $\ln(f_H/f_L)$，后者只在 $f_H \ll f_0$ 时成立。

**常见错误。** 漏掉把折算到栅极的闪烁噪声电压转换为漏极电流的因子 $g_m^2$；或者在频带延伸到极点以外时，仍把热噪声部分按功率谱密度 × $(f_H - f_L)$ 积分，而在极点以外 $C_L$ 会对噪声分流。
