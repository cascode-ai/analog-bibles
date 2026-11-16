# Detailed solution - R614

**Approach.** Because the two transistors share a source node, the *ratio* of their exponential currents depends only on the differential input; together with the fixed sum $I_{D1} + I_{D2} = I_{SS}$ this gives each current and their difference, which simplifies to a hyperbolic tangent. Then expand $\tanh$ in its (odd-only) Taylor series, substitute the cosine input, and convert $\cos^3$ into harmonics.

### Step 1 — Ratio of the two drain currents

Both devices obey $I_D = I_0\exp[V_{GS}/(\zeta V_T)]$, where $V_T = kT/q$ is the thermal voltage and $\zeta > 1$ the subthreshold slope factor. They are identical (same $I_0$) and share the source node P, so

$$\frac{I_{D1}}{I_{D2}} = \frac{I_0\exp[V_{GS1}/(\zeta V_T)]}{I_0\exp[V_{GS2}/(\zeta V_T)]} = \exp\!\left(\frac{V_{GS1} - V_{GS2}}{\zeta V_T}\right) = \exp\!\left(\frac{V_{G1} - V_{G2}}{\zeta V_T}\right) = e^{V_{in}/(\zeta V_T)},$$

because $V_{GS1} - V_{GS2} = (V_{G1} - V_P) - (V_{G2} - V_P) = V_{in}$. Any dependence of $I_0$ on the source–bulk voltage is the same for both devices (common source) and cancels as well. Let $r = e^{V_{in}/(\zeta V_T)}$.

### Step 2 — Each current, using the tail constraint

KCL at the source node: $I_{D1} + I_{D2} = I_{SS}$. With $I_{D1} = rI_{D2}$:

$$
\begin{aligned}
rI_{D2} + I_{D2} &= I_{SS}\\
I_{D2} &= \frac{I_{SS}}{1 + r} = \frac{I_{SS}}{1 + e^{V_{in}/(\zeta V_T)}},\\
I_{D1} &= \frac{rI_{SS}}{1 + r} = \frac{I_{SS}}{1 + e^{-V_{in}/(\zeta V_T)}}.
\end{aligned}
$$

### Step 3 — The difference is a hyperbolic tangent

$$\Delta I = I_{D1} - I_{D2} = I_{SS}\,\frac{r - 1}{r + 1} = I_{SS}\,\frac{e^{V_{in}/(\zeta V_T)} - 1}{e^{V_{in}/(\zeta V_T)} + 1}.$$

Multiply numerator and denominator by $e^{-V_{in}/(2\zeta V_T)}$ and let $z = V_{in}/(2\zeta V_T)$:

$$\Delta I = I_{SS}\,\frac{e^{z} - e^{-z}}{e^{z} + e^{-z}} = I_{SS}\tanh z = I_{SS}\tanh\frac{V_{in}}{2\zeta V_T}.$$

This proves $I_{D1} - I_{D2} \propto \tanh[V_{in}/(2\zeta V_T)]$. The output saturates at $\pm I_{SS}$ once $|V_{in}|$ exceeds a few $\zeta V_T$ (about 100 mV): the subthreshold pair switches fully over a very small input range.

### Step 4 — Taylor expansion of $\tanh$

$$\tanh z = z - \frac{z^3}{3} + \frac{2z^5}{15} - \dots$$

Only odd powers appear, because $\tanh$ is an odd function: $\tanh(-z) = -\tanh z$. Hence the symmetric pair produces **no even harmonics**.

Define the normalized input amplitude $u = V_m/(\zeta V_T) \ll 1$. For $V_{in} = V_m\cos\omega t$:

$$z = \frac{V_m\cos\omega t}{2\zeta V_T} = \frac{u}{2}\cos\omega t .$$

### Step 5 — Harmonic amplitudes

**Linear term:** $z = \dfrac u2\cos\omega t$.

**Cubic term,** using $\cos^3\theta = \tfrac34\cos\theta + \tfrac14\cos3\theta$:

$$\frac{z^3}{3} = \frac13\cdot\frac{u^3}{8}\cos^3\omega t = \frac{u^3}{24}\left(\tfrac34\cos\omega t + \tfrac14\cos3\omega t\right) = \frac{u^3}{32}\cos\omega t + \frac{u^3}{96}\cos3\omega t .$$

**Collect** (neglecting the fifth-order term):

$$\Delta I \approx I_{SS}\left[\left(\frac u2 - \frac{u^3}{32}\right)\cos\omega t - \frac{u^3}{96}\cos3\omega t\right].$$

In terms of the circuit quantities:

$$
\begin{aligned}
\text{fundamental:}&\quad I_{SS}\left(\frac{V_m}{2\zeta V_T} - \frac{V_m^3}{32\zeta^3V_T^3}\right) \approx \frac{I_{SS}V_m}{2\zeta V_T},\\
\text{3rd harmonic:}&\quad \frac{I_{SS}V_m^3}{96\,\zeta^3V_T^3}\quad(\text{opposite in sign to the fundamental: compression}),\\
\mathrm{HD3}&= \frac{u^3/96}{u/2} = \frac{u^2}{48} = \frac{V_m^2}{48\,\zeta^2V_T^2}.
\end{aligned}
$$

The fifth harmonic, from $2z^5/15$ with $\cos^5\theta = (10\cos\theta + 5\cos3\theta + \cos5\theta)/16$, is $I_{SS}u^5/3840$, negligible for $u \ll 1$.

### Step 6 — Check and comparison

With $I_{SS} = 2I$, the fundamental is $2I\cdot u/2 = IV_m/(\zeta V_T) = g_mV_m$, where $g_m = I/(\zeta V_T)$ is the subthreshold transconductance of each device: the same fundamental as a common-source stage biased at $I$.

**Example.** $\zeta = 1.5$, $V_T = 26$ mV ($\zeta V_T = 39$ mV), $V_m = 5$ mV: $u = 0.128$, so HD3 $= 0.128^2/48 = 3.4\times10^{-4} = 0.034\ \%$, HD2 = 0. A numerical evaluation of $\tanh$ gives the same value. A single subthreshold CS stage with the same input would have HD2 $= u/4 = 3.2\ \%$, about a hundred times more: the symmetry removes the dominant even-order term.

### Result

$$I_{D1} - I_{D2} = I_{SS}\tanh\frac{V_{in}}{2\zeta V_T},$$

from $I_{D1}/I_{D2} = e^{V_{in}/(\zeta V_T)}$ and $I_{D1} + I_{D2} = I_{SS}$. For $V_{in} = V_m\cos\omega t$ with $u = V_m/(\zeta V_T) \ll 1$, only odd harmonics appear:

- fundamental: $\dfrac{I_{SS}V_m}{2\zeta V_T}$ (minus a small compression $\dfrac{I_{SS}V_m^3}{32\zeta^3V_T^3}$);
- third harmonic: $\dfrac{I_{SS}V_m^3}{96\,\zeta^3V_T^3}$;
- $\mathrm{HD3} = \dfrac{V_m^2}{48\,\zeta^2V_T^2}$; no second harmonic.

**Common mistake.** Using $V_{in}/(\zeta V_T)$ as the argument of $\tanh$ (forgetting the factor 2 from splitting the exponent symmetrically), which makes HD3 four times too large, $V_m^2/(12\zeta^2V_T^2)$. Each transistor sees only half of the differential input relative to the midpoint, so the argument is $V_{in}/(2\zeta V_T)$.

**Common mistake.** Claiming even harmonics, or reusing square-law results. The $\tanh$ function is odd, so a symmetric pair has no even harmonics; and in subthreshold the voltage scale of the nonlinearity is $\zeta V_T$ (tens of millivolts), not the overdrive.
