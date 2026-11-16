# Detailed solution - R382

**Approach.** The noise voltage of $R_S$ appears in full at the amplifier input, because the amplifier draws no input current. The output noise spectral density is that input PSD times the squared magnitude of the single-pole transfer function. Integrating it from $f = 0$ to $\infty$ gives the total output noise power.

### Step 1 — Noise at the amplifier input

For the noise calculation the signal source $V_{in}$ is set to zero (an AC short). What remains at the input is $R_S$ from ground to the amplifier input. Model its thermal noise as a voltage source $V_{nR}$ in series with it, with one-sided power spectral density (PSD)

$$\overline{V_{nR}^2} = 4kTR_S\quad(\mathrm{V^2/Hz}),$$

where $k = 1.38\times10^{-23}$ J/K is Boltzmann's constant and $T$ the absolute temperature.

The amplifier draws no input current, so no current flows through $R_S$ and there is no voltage drop across it. The voltage at the amplifier input is therefore exactly the noise voltage:

$$V_{amp,in} = V_{nR}, \qquad S_{in}(f) = 4kTR_S .$$

This PSD is **white**: it is the same at every frequency.

### Step 2 — Transfer function of the amplifier

A single-pole amplifier with low-frequency gain $A_0$ and pole at $\omega_0$ (rad/s) has

$$A(s) = \frac{A_0}{1 + s/\omega_0}.$$

On the $j\omega$ axis, with $\omega = 2\pi f$:

$$|A(j2\pi f)|^2 = \frac{A_0^2}{1 + \left(2\pi f/\omega_0\right)^2}.$$

At low frequency this is $A_0^2$; above $f_0 = \omega_0/2\pi$ it falls as $1/f^2$ (−20 dB/decade in voltage).

### Step 3 — Output noise PSD

A noise PSD passes through a linear system multiplied by the squared magnitude of the transfer function:

$$S_{out}(f) = |A(j2\pi f)|^2\,S_{in}(f) = \frac{4kTR_S\,A_0^2}{1 + \left(2\pi f/\omega_0\right)^2}.$$

### Step 4 — Integrating over all frequencies

The total (integrated) output noise power is the area under the one-sided PSD:

$$\overline{V_{n,out,tot}^2} = \int_0^\infty S_{out}(f)\,df = 4kTR_SA_0^2\int_0^\infty\frac{df}{1 + (2\pi f/\omega_0)^2}.$$

**Change of variable.** Let $x = 2\pi f/\omega_0$, so $f = \omega_0x/2\pi$ and $df = (\omega_0/2\pi)\,dx$. The limits stay $0$ and $\infty$:

$$\int_0^\infty\frac{df}{1 + (2\pi f/\omega_0)^2} = \frac{\omega_0}{2\pi}\int_0^\infty\frac{dx}{1 + x^2}.$$

**Standard integral.** $\int dx/(1 + x^2) = \arctan x$, so

$$\int_0^\infty\frac{dx}{1 + x^2} = \arctan(\infty) - \arctan(0) = \frac{\pi}{2} - 0 = \frac{\pi}{2}.$$

Therefore

$$\int_0^\infty\frac{df}{1 + (2\pi f/\omega_0)^2} = \frac{\omega_0}{2\pi}\cdot\frac{\pi}{2} = \frac{\omega_0}{4}.$$

**Total output noise:**

$$\overline{V_{n,out,tot}^2} = 4kTR_SA_0^2\cdot\frac{\omega_0}{4} = A_0^2\,kTR_S\,\omega_0 .$$

Units check: $kT$ in J = V·A·s, times $R_S$ in V/A, times $\omega_0$ in 1/s gives V². ✓

### Step 5 — Interpretation and an example

**Noise bandwidth.** The result can be written as $4kTR_SA_0^2\cdot\dfrac{\pi}{2}f_0$ with $f_0 = \omega_0/2\pi$. A single-pole response collects the same noise as an ideal "brick-wall" filter of bandwidth $(\pi/2)f_0 \approx 1.57f_0$, called the equivalent noise bandwidth. The extra 57 % comes from the slowly decaying skirt above $f_0$.

**Dependence on $R_S$.** Unlike the familiar $kT/C$ result of an RC filter, the total noise here grows with $R_S$, because the bandwidth is set by the amplifier ($\omega_0$), not by $R_S$.

**Example** (illustrative values): $R_S = 1\ \mathrm{k}\Omega$, $A_0 = 10$, $f_0 = 10$ MHz ($\omega_0 = 6.28\times10^7$ rad/s), $T = 300$ K, so $kT = 4.14\times10^{-21}$ J:

$$
\begin{aligned}
\overline{V_{n,out,tot}^2} &= (10)^2(4.14\times10^{-21}\ \mathrm{J})(10^3\ \Omega)(6.28\times10^7\ \mathrm{s^{-1}}) = 2.6\times10^{-8}\ \mathrm{V^2},\\
V_{n,out,rms} &= \sqrt{2.6\times10^{-8}}\ \mathrm{V} \approx 161\ \mu\mathrm{V}.
\end{aligned}
$$

### Result

$$\overline{V_{n,out,tot}^2} = A_0^2\,kTR_S\,\omega_0\quad(\mathrm{V^2}), \qquad V_{n,out,rms} = A_0\sqrt{kTR_S\,\omega_0},$$

equivalently $2\pi A_0^2kTR_Sf_0$ with $f_0 = \omega_0/2\pi$. It follows from $S_{out}(f) = 4kTR_SA_0^2/[1 + (2\pi f/\omega_0)^2]$ and $\int_0^\infty df/[1 + (2\pi f/\omega_0)^2] = \omega_0/4$.

**Common mistake.** Integrating over $\omega$ instead of $f$. The PSD $4kTR_S$ is per hertz, so the integration variable must be $f$. Integrating over $\omega$ gives $A_0^2\cdot4kTR_S\cdot\pi\omega_0/2$, too large by a factor of $2\pi$.

**Common mistake.** Forgetting to square the gain, or using $4kT/R_S$ (a current PSD) as if it were the voltage at the input. The amplifier senses a voltage, so the voltage form $4kTR_S$ must be used, and power spectra scale with $|A|^2$.

**Common mistake.** Answering with a $kT/C$-type result that does not depend on $R_S$. That would apply if $R_S$ itself, together with a capacitor, set the bandwidth; here the bandwidth $\omega_0$ belongs to the amplifier, so the total noise is proportional to $R_S$.
