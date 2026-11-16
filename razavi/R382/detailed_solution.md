# Detailed solution - R382

**Approach.** The amplifier draws no input current, so the full noise voltage of $R_S$ appears at its input. The output PSD is that white PSD times the squared magnitude of the single-pole transfer function; integrating it from $f = 0$ to $\infty$ gives the total output noise power.

### Step 1 — Output noise PSD

With the signal source zeroed, no current flows through $R_S$, so the amplifier input sees exactly the noise voltage of $R_S$, a white PSD $S_{in}(f) = 4kTR_S$. With

$$A(s) = \frac{A_0}{1 + s/\omega_0}, \qquad |A(j2\pi f)|^2 = \frac{A_0^2}{1 + \left(2\pi f/\omega_0\right)^2},$$

the output PSD is

$$S_{out}(f) = |A(j2\pi f)|^2\,S_{in}(f) = \frac{4kTR_S\,A_0^2}{1 + \left(2\pi f/\omega_0\right)^2}.$$

### Step 2 — Integrating over all frequencies

$$\overline{V_{n,out,tot}^2} = \int_0^\infty S_{out}(f)\,df = 4kTR_SA_0^2\int_0^\infty\frac{df}{1 + (2\pi f/\omega_0)^2}.$$

With $x = 2\pi f/\omega_0$, $df = (\omega_0/2\pi)\,dx$, and $\int_0^\infty dx/(1 + x^2) = \arctan(\infty) - \arctan(0) = \pi/2$:

$$\int_0^\infty\frac{df}{1 + (2\pi f/\omega_0)^2} = \frac{\omega_0}{2\pi}\int_0^\infty\frac{dx}{1 + x^2} = \frac{\omega_0}{2\pi}\cdot\frac{\pi}{2} = \frac{\omega_0}{4}.$$

Hence

$$\overline{V_{n,out,tot}^2} = 4kTR_SA_0^2\cdot\frac{\omega_0}{4} = A_0^2\,kTR_S\,\omega_0 .$$

Units: $kT$ (J = V·A·s) times $R_S$ (V/A) times $\omega_0$ (1/s) gives V² ✓.

### Step 3 — Interpretation and an example

**Noise bandwidth.** The result equals $4kTR_SA_0^2\cdot\dfrac{\pi}{2}f_0$ with $f_0 = \omega_0/2\pi$: the single pole collects the same noise as a brick-wall filter of bandwidth $(\pi/2)f_0 \approx 1.57f_0$, the extra 57 % coming from the skirt above $f_0$.

**Dependence on $R_S$.** Unlike the $kT/C$ result of an RC filter, the total grows with $R_S$, because the bandwidth is set by the amplifier ($\omega_0$), not by $R_S$.

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

**Common mistake.** Integrating over $\omega$ instead of $f$. The PSD is per hertz; integrating over $\omega$ gives $A_0^2\cdot4kTR_S\cdot\pi\omega_0/2$, too large by $2\pi$.

**Common mistake.** Forgetting to square the gain, or using the current PSD $4kT/R_S$ as the input voltage. The amplifier senses the voltage $4kTR_S$, and power spectra scale with $|A|^2$.

**Common mistake.** Answering with a $kT/C$-type result independent of $R_S$. Here the bandwidth $\omega_0$ belongs to the amplifier, so the total noise is proportional to $R_S$.
