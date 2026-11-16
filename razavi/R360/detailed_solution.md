# Detailed solution - R360

**Approach.** The thermal and flicker noise of $M_1$ and the thermal noise of $R_D$ are all currents injected into the output node, where they flow into $R_D$, $r_O$ and $C_L$ in parallel. Write the single-pole output PSD and integrate its thermal (white) and flicker ($1/f$) parts separately from $f_L$ to $f_H$.

### Step 1 — Noise sources as output currents

With the input at ac ground:

- **Thermal noise of $M_1$:** a drain–source current with $\overline{I_{n,th}^2} = 4kT\gamma g_m$.
- **Flicker noise of $M_1$:** the gate voltage $\overline{V_{n,1/f}^2} = \dfrac{K}{C_{ox}WL}\cdot\dfrac1f$ becomes a drain current $g_mV_{n,1/f}$ with
$$\overline{I_{n,1/f}^2} = g_m^2\,\frac{K}{C_{ox}WL}\cdot\frac{1}{f}.$$
- **Thermal noise of $R_D$:** a parallel current with $\overline{I_{n,R}^2} = 4kT/R_D$.

The three are uncorrelated, so the total noise current injected into the output is

$$\overline{I_{n,tot}^2}(f) = 4kT\left(\gamma g_m + \frac{1}{R_D}\right) + \frac{g_m^2K}{C_{ox}WL}\cdot\frac1f .$$

$r_O$ is not a noise source: the channel's noise is already contained in $4kT\gamma g_m$.

### Step 2 — Output impedance and the output PSD

With $v_{in} = 0$, $g_mv_{gs}$ is off and the output sees $R_D$, $r_O$ and $C_L$ to ac ground. Define

$$R_0 = R_D\parallel r_O = \frac{R_Dr_O}{R_D + r_O}.$$

<!-- diagram: diagram-01.cir -->

Then $Z_{out}(j\omega) = R_0\parallel\dfrac{1}{j\omega C_L} = \dfrac{R_0}{1 + j\omega R_0C_L}$, and

$$|Z_{out}(f)|^2 = \frac{R_0^2}{1 + (\omega R_0C_L)^2} = \frac{R_0^2}{1 + (f/f_0)^2}, \qquad f_0 = \frac{1}{2\pi R_0C_L},$$

with the pole set by $R_D\parallel r_O$, not $R_D$ alone. The output PSD is $\overline{I_{n,tot}^2}\,|Z_{out}|^2$:

$$S_{out}(f) = \left[4kT\left(\gamma g_m + \frac{1}{R_D}\right) + \frac{g_m^2K}{C_{ox}WL}\cdot\frac1f\right]\frac{R_0^2}{1 + (f/f_0)^2}.$$

### Step 3 — Integrating the thermal part

$$\overline{V_{n,out,th}^2} = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2\int_{f_L}^{f_H}\frac{df}{1 + (f/f_0)^2}.$$

With $x = f/f_0$, $df = f_0\,dx$:

$$\int\frac{df}{1 + (f/f_0)^2} = f_0\int\frac{dx}{1 + x^2} = f_0\tan^{-1}x = f_0\tan^{-1}\frac{f}{f_0},$$

$$\overline{V_{n,out,th}^2} = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2f_0\left[\tan^{-1}\frac{f_H}{f_0} - \tan^{-1}\frac{f_L}{f_0}\right].$$

### Step 4 — Integrating the flicker part

$$\overline{V_{n,out,1/f}^2} = \frac{g_m^2KR_0^2}{C_{ox}WL}\int_{f_L}^{f_H}\frac{df}{f\left[1 + (f/f_0)^2\right]}.$$

By partial fractions (the right side over a common denominator has numerator $(1 + f^2/f_0^2) - f^2/f_0^2 = 1$),

$$\frac{1}{f\left(1 + f^2/f_0^2\right)} = \frac{1}{f} - \frac{f/f_0^2}{1 + f^2/f_0^2}.$$

Since $\frac{d}{df}\ln(1 + f^2/f_0^2) = \frac{2f/f_0^2}{1 + f^2/f_0^2}$, the second term integrates to $\tfrac12\ln(1 + f^2/f_0^2)$, so

$$\int\frac{df}{f\left(1 + f^2/f_0^2\right)} = \ln f - \frac12\ln\left(1 + \frac{f^2}{f_0^2}\right) = \frac12\ln\frac{f^2}{1 + f^2/f_0^2}.$$

Between the limits:

$$
\begin{aligned}
\int_{f_L}^{f_H}\frac{df}{f\left(1 + f^2/f_0^2\right)} &= \frac12\ln\frac{f_H^2}{1 + f_H^2/f_0^2} - \frac12\ln\frac{f_L^2}{1 + f_L^2/f_0^2}\\
&= \frac12\ln\left[\frac{f_H^2\,(1 + f_L^2/f_0^2)}{f_L^2\,(1 + f_H^2/f_0^2)}\right] = \frac12\ln\left[\frac{f_H^2\,(f_0^2 + f_L^2)}{f_L^2\,(f_0^2 + f_H^2)}\right],
\end{aligned}
$$

$$\overline{V_{n,out,1/f}^2} = \frac{g_m^2KR_0^2}{C_{ox}WL}\cdot\frac12\ln\left[\frac{f_H^2\,(f_0^2 + f_L^2)}{f_L^2\,(f_0^2 + f_H^2)}\right].$$

### Step 5 — Checks

- **Band well below the pole** ($f_H \ll f_0$): $\tan^{-1}x \approx x$, so the thermal part becomes $4kT(\gamma g_m + 1/R_D)R_0^2(f_H - f_L)$, and the log argument becomes $f_H^2/f_L^2$, so the flicker part becomes $\dfrac{g_m^2KR_0^2}{C_{ox}WL}\ln\dfrac{f_H}{f_L}$, the familiar "noise per decade" result.
- **Whole spectrum, thermal part** ($f_L \to 0$, $f_H \to \infty$): the bracket tends to $\pi/2$, and $R_0^2f_0\cdot\frac{\pi}{2} = R_0^2\cdot\frac{1}{2\pi R_0C_L}\cdot\frac{\pi}{2} = \frac{R_0}{4C_L}$, so
$$\overline{V_{n,out,th}^2} \to 4kT\left(\gamma g_m + \frac{1}{R_D}\right)\frac{R_0}{4C_L} = \frac{kT}{C_L}\left(\gamma g_m + \frac{1}{R_D}\right)R_0 ,$$
which for a resistor alone ($g_m \to 0$, $r_O \to \infty$, $R_0 = R_D$) is the well-known $kT/C_L$.
- **Flicker part as $f_L \to 0$:** the logarithm diverges, so a finite lower limit (set by the observation time) is needed.

### Result

With $R_0 = R_D\parallel r_O$ and $f_0 = 1/(2\pi R_0C_L)$:

$$S_{out}(f) = \left[4kT\left(\gamma g_m + \frac{1}{R_D}\right) + \frac{g_m^2K}{C_{ox}WL}\cdot\frac{1}{f}\right]\frac{R_0^2}{1 + (f/f_0)^2},$$

$$\overline{V_{n,out,th}^2} = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2 f_0\left[\tan^{-1}\frac{f_H}{f_0} - \tan^{-1}\frac{f_L}{f_0}\right],$$

$$\overline{V_{n,out,1/f}^2} = \frac{g_m^2KR_0^2}{C_{ox}WL}\cdot\frac12\ln\!\left[\frac{f_H^2\,(f_0^2 + f_L^2)}{f_L^2\,(f_0^2 + f_H^2)}\right].$$

The total output noise is the sum $\overline{V_{n,out,th}^2} + \overline{V_{n,out,1/f}^2}$.

**Common mistake.** Using $R_D$ alone for the output resistance and pole while claiming to include $\lambda \neq 0$. The output sees $R_D\parallel r_O$, which sets both $R_0^2$ and $f_0$; and $r_O$ is not a noise source ($4kT/r_O$).

**Common mistake.** Integrating the flicker noise as if it were white, or giving $\ln(f_H/f_L)$ without the pole correction, which is valid only for $f_H \ll f_0$.

**Common mistake.** Leaving out the factor $g_m^2$ that turns the gate-referred flicker voltage into a drain current, or integrating the thermal part as PSD × $(f_H - f_L)$ when the band extends beyond the pole, where $C_L$ shunts the noise.
