# Detailed solution - R360

**Approach.** All noise sources of the stage, the channel thermal noise and flicker noise of $M_1$ and the thermal noise of $R_D$, can be written as currents injected into the output node. There they flow into the output impedance: $R_D$, $r_O$ and $C_L$ in parallel. We write the output PSD, which has a single pole, and integrate the thermal (white) and flicker ($1/f$) parts separately from $f_L$ to $f_H$.

### Step 1 — Noise sources as output currents

With the input at ac ground ($v_{in} = 0$), the noise sources are:

- **Channel thermal noise of $M_1$:** a current between drain and source, $\overline{I_{n,th}^2} = 4kT\gamma g_m$, where $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.
- **Flicker noise of $M_1$:** a voltage in series with the gate, $\overline{V_{n,1/f}^2} = \dfrac{K}{C_{ox}WL}\cdot\dfrac1f$ ($K$ the flicker-noise coefficient, $C_{ox}$ the oxide capacitance per unit area, $WL$ the gate area). The transistor converts it into a drain current $g_mV_{n,1/f}$ with PSD
$$\overline{I_{n,1/f}^2} = g_m^2\,\frac{K}{C_{ox}WL}\cdot\frac{1}{f}.$$
- **Thermal noise of $R_D$:** a current in parallel with $R_D$, $\overline{I_{n,R}^2} = 4kT/R_D$.

All three are uncorrelated, so their PSDs add. The total noise current injected into the output node is

$$\overline{I_{n,tot}^2}(f) = 4kT\left(\gamma g_m + \frac{1}{R_D}\right) + \frac{g_m^2K}{C_{ox}WL}\cdot\frac1f .$$

$r_O$ is not a noise source: it models channel-length modulation, and the channel's noise is already contained in $4kT\gamma g_m$.

### Step 2 — Output impedance and the output PSD

**Small-signal model at the output.** With $v_{in} = 0$, the dependent source $g_mv_{gs}$ is off. The output node then sees three elements to ac ground: $R_D$ (its top end is at $V_{DD}$), $r_O$ and $C_L$. Define

$$R_0 = R_D\parallel r_O = \frac{R_Dr_O}{R_D + r_O}.$$

<!-- diagram: diagram-01.cir -->

The output impedance is $Z_{out}(j\omega) = R_0\parallel\dfrac{1}{j\omega C_L} = \dfrac{R_0}{1 + j\omega R_0C_L}$. Its squared magnitude is

$$|Z_{out}(f)|^2 = \frac{R_0^2}{1 + (\omega R_0C_L)^2} = \frac{R_0^2}{1 + (f/f_0)^2}, \qquad f_0 = \frac{1}{2\pi R_0C_L},$$

where $f_0$ is the output pole frequency. Note that it uses $R_D\parallel r_O$, not $R_D$ alone.

A noise current of PSD $\overline{I^2}$ produces an output voltage of PSD $\overline{I^2}\,|Z_{out}|^2$. Hence the output PSD is

$$S_{out}(f) = \left[4kT\left(\gamma g_m + \frac{1}{R_D}\right) + \frac{g_m^2K}{C_{ox}WL}\cdot\frac1f\right]\frac{R_0^2}{1 + (f/f_0)^2}.$$

### Step 3 — Integrating the thermal part

$$\overline{V_{n,out,th}^2} = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2\int_{f_L}^{f_H}\frac{df}{1 + (f/f_0)^2}.$$

Substitute $x = f/f_0$, so $df = f_0\,dx$:

$$\int\frac{df}{1 + (f/f_0)^2} = f_0\int\frac{dx}{1 + x^2} = f_0\tan^{-1}x = f_0\tan^{-1}\frac{f}{f_0}.$$

Evaluate between the limits:

$$\overline{V_{n,out,th}^2} = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2f_0\left[\tan^{-1}\frac{f_H}{f_0} - \tan^{-1}\frac{f_L}{f_0}\right].$$

### Step 4 — Integrating the flicker part

$$\overline{V_{n,out,1/f}^2} = \frac{g_m^2KR_0^2}{C_{ox}WL}\int_{f_L}^{f_H}\frac{df}{f\left[1 + (f/f_0)^2\right]}.$$

**Partial fractions.** Write

$$\frac{1}{f\left(1 + f^2/f_0^2\right)} = \frac{1}{f} - \frac{f/f_0^2}{1 + f^2/f_0^2}.$$

(Check: put the right side over the common denominator; the numerator is $(1 + f^2/f_0^2) - f^2/f_0^2 = 1$.)

**Integrate each term.** $\int df/f = \ln f$. For the second, note that $\frac{d}{df}\ln(1 + f^2/f_0^2) = \frac{2f/f_0^2}{1 + f^2/f_0^2}$, so $\int\frac{f/f_0^2}{1 + f^2/f_0^2}df = \tfrac12\ln(1 + f^2/f_0^2)$. Therefore

$$\int\frac{df}{f\left(1 + f^2/f_0^2\right)} = \ln f - \frac12\ln\left(1 + \frac{f^2}{f_0^2}\right) = \frac12\ln\frac{f^2}{1 + f^2/f_0^2}.$$

**Evaluate between the limits:**

$$
\begin{aligned}
\int_{f_L}^{f_H}\frac{df}{f\left(1 + f^2/f_0^2\right)} &= \frac12\ln\frac{f_H^2}{1 + f_H^2/f_0^2} - \frac12\ln\frac{f_L^2}{1 + f_L^2/f_0^2}\\
&= \frac12\ln\left[\frac{f_H^2\,(1 + f_L^2/f_0^2)}{f_L^2\,(1 + f_H^2/f_0^2)}\right] = \frac12\ln\left[\frac{f_H^2\,(f_0^2 + f_L^2)}{f_L^2\,(f_0^2 + f_H^2)}\right].
\end{aligned}
$$

Hence

$$\overline{V_{n,out,1/f}^2} = \frac{g_m^2KR_0^2}{C_{ox}WL}\cdot\frac12\ln\left[\frac{f_H^2\,(f_0^2 + f_L^2)}{f_L^2\,(f_0^2 + f_H^2)}\right].$$

### Step 5 — Checks

- **Band well below the pole** ($f_H \ll f_0$): $\tan^{-1}x \approx x$, so the thermal part becomes $4kT(\gamma g_m + 1/R_D)R_0^2(f_H - f_L)$, a white PSD times the bandwidth. The log argument becomes $f_H^2/f_L^2$, so the flicker part becomes $\dfrac{g_m^2KR_0^2}{C_{ox}WL}\ln\dfrac{f_H}{f_L}$, the familiar "noise per decade" result.
- **Whole spectrum of the thermal part** ($f_L \to 0$, $f_H \to \infty$): the bracket tends to $\pi/2$, and $R_0^2f_0\cdot\frac{\pi}{2} = R_0^2\cdot\frac{1}{2\pi R_0C_L}\cdot\frac{\pi}{2} = \frac{R_0}{4C_L}$. So
$$\overline{V_{n,out,th}^2} \to 4kT\left(\gamma g_m + \frac{1}{R_D}\right)\frac{R_0}{4C_L} = \frac{kT}{C_L}\left(\gamma g_m + \frac{1}{R_D}\right)R_0 .$$
For a resistor alone ($g_m \to 0$, $r_O \to \infty$, so $R_0 = R_D$) this is $kT/C_L$, the well-known result.
- **Flicker part as $f_L \to 0$:** the logarithm diverges, so the flicker noise power requires a finite lower frequency limit (set by the observation time).

### Result

With $R_0 = R_D\parallel r_O$ and $f_0 = 1/(2\pi R_0C_L)$:

$$S_{out}(f) = \left[4kT\left(\gamma g_m + \frac{1}{R_D}\right) + \frac{g_m^2K}{C_{ox}WL}\cdot\frac{1}{f}\right]\frac{R_0^2}{1 + (f/f_0)^2},$$

$$\overline{V_{n,out,th}^2} = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2 f_0\left[\tan^{-1}\frac{f_H}{f_0} - \tan^{-1}\frac{f_L}{f_0}\right],$$

$$\overline{V_{n,out,1/f}^2} = \frac{g_m^2KR_0^2}{C_{ox}WL}\cdot\frac12\ln\!\left[\frac{f_H^2\,(f_0^2 + f_L^2)}{f_L^2\,(f_0^2 + f_H^2)}\right].$$

The total output noise is the sum $\overline{V_{n,out,th}^2} + \overline{V_{n,out,1/f}^2}$.

**Common mistake.** Using $R_D$ alone for the output resistance and pole ($f_0 = 1/(2\pi R_DC_L)$) while claiming that $\lambda \neq 0$ is included. With channel-length modulation the output node sees $R_D\parallel r_O$, which sets both the low-frequency noise level $R_0^2$ and the pole $f_0$. Counting $r_O$ as a noise source ($4kT/r_O$) is also wrong; it is not a separate resistor.

**Common mistake.** Integrating the flicker noise as if it were white, or giving $\ln(f_H/f_L)$ without the pole correction. The $1/f$ PSD integrates to a logarithm, and the output pole modifies it to $\tfrac12\ln[f_H^2(f_0^2 + f_L^2)/(f_L^2(f_0^2 + f_H^2))]$; the simple $\ln(f_H/f_L)$ is valid only when $f_H \ll f_0$.

**Common mistake.** Forgetting that the gate-referred flicker voltage must be multiplied by $g_m^2$ to become a drain current, or integrating the thermal part as PSD × $(f_H - f_L)$ even when the band extends beyond the pole. Above $f_0$ the capacitor shunts the noise, which is what the arctangent accounts for.
