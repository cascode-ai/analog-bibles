# Detailed solution - R622

**Approach.** Substitute the two sinusoids into the two polynomials, subtract, and sort the output by frequency. With identical coefficients, each power of $x$ contributes only through the difference of the two inputs raised to that power, and only the square produces a component at $2\omega$; evaluate that component with trigonometric identities.

### Step 1 — Which terms can produce a second harmonic?

With $\beta_j = \alpha_j$,

$$y_1 - y_2 = \alpha_1\left(x_1 - x_2\right) + \alpha_2\left(x_1^2 - x_2^2\right) + \alpha_3\left(x_1^3 - x_2^3\right).$$

For $\theta = 0$ every term would cancel; all the output comes from the mismatch. For $x = A\cos(\omega t + \phi)$, the linear term contains only $\omega$, while

$$x^2 = \frac{A^2}{2} + \frac{A^2}{2}\cos(2\omega t + 2\phi), \qquad x^3 = \frac{3A^3}{4}\cos(\omega t + \phi) + \frac{A^3}{4}\cos(3\omega t + 3\phi).$$

Only the square contains $2\omega$, so the second harmonic comes entirely from $\alpha_2(x_1^2 - x_2^2)$; $\alpha_1$ and $\alpha_3$ cannot contribute to it.

### Step 2 — Expand the quadratic terms

$$
\begin{aligned}
x_1^2 &= A^2\cos^2\omega t = \frac{A^2}{2} + \frac{A^2}{2}\cos2\omega t,\\
x_2^2 &= A^2\cos^2(\omega t + \theta) = \frac{A^2}{2} + \frac{A^2}{2}\cos(2\omega t + 2\theta).
\end{aligned}
$$

The dc parts $A^2/2$ cancel in the difference:

$$x_1^2 - x_2^2 = \frac{A^2}{2}\left[\cos2\omega t - \cos(2\omega t + 2\theta)\right].$$

### Step 3 — Combine the two cosines

With $\cos a - \cos b = -2\sin\frac{a + b}{2}\,\sin\frac{a - b}{2}$, $a = 2\omega t$ and $b = 2\omega t + 2\theta$:

$$
\begin{aligned}
\frac{a + b}{2} &= 2\omega t + \theta, \qquad \frac{a - b}{2} = -\theta,\\
\cos2\omega t - \cos(2\omega t + 2\theta) &= -2\sin(2\omega t + \theta)\sin(-\theta) = 2\sin\theta\,\sin(2\omega t + \theta).
\end{aligned}
$$

Substituting into Step 2 and multiplying by $\alpha_2$:

$$\alpha_2\left(x_1^2 - x_2^2\right) = \alpha_2\frac{A^2}{2}\cdot2\sin\theta\,\sin(2\omega t + \theta) = \alpha_2A^2\sin\theta\,\sin(2\omega t + \theta).$$

### Step 4 — Magnitude of the second harmonic

The second-harmonic component of the output is

$$y_1 - y_2\Big|_{2\omega} = \alpha_2A^2\sin\theta\,\sin(2\omega t + \theta),$$

with amplitude

$$\left|y_1 - y_2\right|_{2\omega} = \alpha_2A^2\,|\sin\theta| \approx \alpha_2A^2\,|\theta| \quad (\theta \ll 1,\ \theta\text{ in radians}).$$

It is **first order** in the phase mismatch. For example, $\theta = 1^\circ = 0.0175$ rad gives $0.0175\,\alpha_2A^2$, i.e. $2\sin\theta = 3.5\%$ of the second harmonic $\tfrac12\alpha_2A^2$ that one path produces on its own.

The phase error $\theta$ at the fundamental becomes $2\theta$ at the second harmonic, and two equal phasors of length $\tfrac12\alpha_2A^2$ that are $2\theta$ apart differ by $2\times\tfrac12\alpha_2A^2\sin\theta = \alpha_2A^2\sin\theta$.

### Step 5 — The same result for a differential drive

If the second path is driven with the inverted signal, $x_2 = -A\cos(\omega t + \theta)$, $x_2^2$ is unchanged, so the second harmonic is **exactly the same**, $\alpha_2A^2\sin\theta\,\sin(2\omega t + \theta)$. The fundamental now adds instead of cancelling:

$$\alpha_1\left[A\cos\omega t + A\cos(\omega t + \theta)\right] \approx 2\alpha_1A\cos\omega t ,$$

so

$$\mathrm{HD_2} \approx \frac{\alpha_2A^2\theta}{2\alpha_1A} = \frac{\alpha_2A}{2\alpha_1}\,\theta .$$

A differential circuit suppresses even-order distortion only as well as its halves are matched, here in phase: a phase mismatch alone, with perfectly matched coefficients, brings the second harmonic back.

### Result

Only the quadratic terms contribute at $2\omega$; the dc terms cancel, and the cubic terms produce only $\omega$ and $3\omega$:

$$\alpha_2\left(x_1^2 - x_2^2\right) = \frac{\alpha_2A^2}{2}\left[\cos2\omega t - \cos(2\omega t + 2\theta)\right] = \alpha_2A^2\sin\theta\,\sin(2\omega t + \theta).$$

The magnitude of the second harmonic at the output is

$$\alpha_2A^2\,|\sin\theta| \approx \alpha_2A^2\,|\theta| .$$

**Common mistake.** Concluding that the second harmonic cancels because the coefficients are identical. Cancellation also requires equal *phase*; a phase mismatch $\theta$ leaves a residue proportional to $\theta$.

**Common mistake.** Writing $x_2^2$ with $\cos(2\omega t + \theta)$ instead of $\cos(2\omega t + 2\theta)$, which gives $\alpha_2A^2\theta/2$, half the correct value. Squaring doubles both the frequency and the phase.

**Common mistake.** Attributing part of the second harmonic to the cubic term, or claiming the residue is proportional to $\theta^2$. The cubic term produces only odd harmonics, and $\sin\theta \approx \theta$ makes the residue first order.
