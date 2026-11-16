# Golden Solution - R360

## Reference answer

With $R_0 = R_D\|r_O$ and $f_0 = 1/(2\pi R_0C_L)$, the output PSD is
$$S_{out}(f) = \left[4kT\left(\gamma g_m + \frac{1}{R_D}\right) + \frac{g_m^2K}{C_{ox}WL}\cdot\frac{1}{f}\right]\frac{R_0^2}{1 + (f/f_0)^2}$$
and integrating from $f_L$ to $f_H$:
$$\overline{V_{n,out,th}^2} = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2 f_0\left[\tan^{-1}\frac{f_H}{f_0} - \tan^{-1}\frac{f_L}{f_0}\right]$$
$$\overline{V_{n,out,1/f}^2} = \frac{g_m^2KR_0^2}{C_{ox}WL}\cdot\frac12\ln\!\left[\frac{f_H^2\,(f_0^2 + f_L^2)}{f_L^2\,(f_0^2 + f_H^2)}\right]$$
Total = sum of the two.

- Noise currents of $M_1$ (thermal and flicker, the latter $g_m^2K/(C_{ox}WLf)$) and of $R_D$ flow into $R_0\|C_L$; $r_O$ is noiseless.
- $\int \dfrac{df}{1+(f/f_0)^2} = f_0\tan^{-1}(f/f_0)$ and $\int \dfrac{df}{f[1+(f/f_0)^2]} = \tfrac12\ln\dfrac{f^2}{1+(f/f_0)^2}$.
- Checks: for $f_H \ll f_0$ the terms become $4kT(\gamma g_m + 1/R_D)R_0^2(f_H - f_L)$ and $\dfrac{g_m^2KR_0^2}{C_{ox}WL}\ln\dfrac{f_H}{f_L}$; for $f_L \to 0$, $f_H \to \infty$ the thermal part becomes $kT(\gamma g_m + 1/R_D)R_0/C_L$.

## Grading notes

+2: correct output PSD with $R_D\|r_O$ and the single pole, and both integrals correct (arctangent and logarithmic forms or equivalents). +1: correct PSD and one integral right, the other with a minor slip (e.g., the $1/f$ integral given as $\ln(f_H/f_L)$ without the pole correction, stated as an approximation). 0: correct PSD but integrals missing or wrong, or $r_O$ ignored throughout (using $R_D$ only) with otherwise correct work. -2 (asserted as fact): $r_O$ counted as a noise source, the flicker noise integrated as if white, the pole frequency $1/(2\pi R_DC_L)$ used while claiming λ is included, or a dimensionally wrong result.
