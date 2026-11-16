令 $R_0 = R_D\|r_O$，$f_0 = 1/(2\pi R_0C_L)$，则输出功率谱密度（PSD）为
$$S_{out}(f) = \left[4kT\left(\gamma g_m + \frac{1}{R_D}\right) + \frac{g_m^2K}{C_{ox}WL}\cdot\frac{1}{f}\right]\frac{R_0^2}{1 + (f/f_0)^2}$$
从 $f_L$ 到 $f_H$ 积分得：
$$\overline{V_{n,out,th}^2} = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2 f_0\left[\tan^{-1}\frac{f_H}{f_0} - \tan^{-1}\frac{f_L}{f_0}\right]$$
$$\overline{V_{n,out,1/f}^2} = \frac{g_m^2KR_0^2}{C_{ox}WL}\cdot\frac12\ln\!\left[\frac{f_H^2\,(f_0^2 + f_L^2)}{f_L^2\,(f_0^2 + f_H^2)}\right]$$
总噪声 = 两者之和。

- $M_1$ 的噪声电流（热噪声和闪烁噪声，后者为 $g_m^2K/(C_{ox}WLf)$）和 $R_D$ 的噪声电流流入 $R_0\|C_L$；$r_O$ 无噪声。
- $\int \dfrac{df}{1+(f/f_0)^2} = f_0\tan^{-1}(f/f_0)$ 以及 $\int \dfrac{df}{f[1+(f/f_0)^2]} = \tfrac12\ln\dfrac{f^2}{1+(f/f_0)^2}$。
- 验证：当 $f_H \ll f_0$ 时，两项分别变为 $4kT(\gamma g_m + 1/R_D)R_0^2(f_H - f_L)$ 和 $\dfrac{g_m^2KR_0^2}{C_{ox}WL}\ln\dfrac{f_H}{f_L}$；当 $f_L \to 0$、$f_H \to \infty$ 时，热噪声部分变为 $kT(\gamma g_m + 1/R_D)R_0/C_L$。
