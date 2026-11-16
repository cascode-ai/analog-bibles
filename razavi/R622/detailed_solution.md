# Detailed solution - R622

**Approach.** Substitute the two sinusoids into the two polynomial characteristics, subtract, and sort the result by frequency. With identical coefficients, each power of $x$ contributes to the output only through the *difference* between the two inputs raised to that power. We check which powers can produce a component at $2\omega$ (only the square can), and then evaluate that component with trigonometric identities.

### Step 1 — The output in terms of the inputs

The two paths have identical coefficients, $\beta_j = \alpha_j$, so

$$y_1 - y_2 = \alpha_1\left(x_1 - x_2\right) + \alpha_2\left(x_1^2 - x_2^2\right) + \alpha_3\left(x_1^3 - x_2^3\right),$$

with

$$x_1(t) = A\cos\omega t, \qquad x_2(t) = A\cos(\omega t + \theta).$$

Here $A$ is the amplitude, $\omega$ the angular frequency and $\theta$ a small phase mismatch between the two paths. If $\theta$ were zero, $x_1 = x_2$ and every term would cancel exactly. All the output comes from the mismatch.

### Step 2 — Which terms can produce a second harmonic?

Look at the frequencies each power of a sinusoid contains:

- **Linear term.** $x = A\cos(\omega t + \phi)$ contains only $\omega$.
- **Square term.** From $\cos^2u = \tfrac12 + \tfrac12\cos2u$:
$$x^2 = \frac{A^2}{2} + \frac{A^2}{2}\cos(2\omega t + 2\phi),$$
  i.e. a DC part and a component at $2\omega$.
- **Cubic term.** From $\cos^3u = \tfrac34\cos u + \tfrac14\cos3u$:
$$x^3 = \frac{3A^3}{4}\cos(\omega t + \phi) + \frac{A^3}{4}\cos(3\omega t + 3\phi),$$
  i.e. components at $\omega$ and $3\omega$ only.

Only the square term contains a component at $2\omega$. The second harmonic of $y_1 - y_2$ therefore comes entirely from $\alpha_2(x_1^2 - x_2^2)$; the coefficients $\alpha_1$ and $\alpha_3$ cannot contribute to it.

### Step 3 — Expand the quadratic terms

Apply the square identity to each input:

$$
\begin{aligned}
x_1^2 &= A^2\cos^2\omega t = \frac{A^2}{2} + \frac{A^2}{2}\cos2\omega t,\\
x_2^2 &= A^2\cos^2(\omega t + \theta) = \frac{A^2}{2} + \frac{A^2}{2}\cos(2\omega t + 2\theta).
\end{aligned}
$$

Subtract. The DC parts $A^2/2$ are equal and cancel:

$$x_1^2 - x_2^2 = \frac{A^2}{2}\left[\cos2\omega t - \cos(2\omega t + 2\theta)\right].$$

### Step 4 — Combine the two cosines

Use the sum-to-product identity

$$\cos a - \cos b = -2\sin\frac{a + b}{2}\,\sin\frac{a - b}{2},$$

with $a = 2\omega t$ and $b = 2\omega t + 2\theta$:

$$
\begin{aligned}
\frac{a + b}{2} &= 2\omega t + \theta, \qquad \frac{a - b}{2} = -\theta,\\
\cos2\omega t - \cos(2\omega t + 2\theta) &= -2\sin(2\omega t + \theta)\sin(-\theta) = 2\sin\theta\,\sin(2\omega t + \theta).
\end{aligned}
$$

Substitute into Step 3 and multiply by $\alpha_2$:

$$\alpha_2\left(x_1^2 - x_2^2\right) = \alpha_2\frac{A^2}{2}\cdot2\sin\theta\,\sin(2\omega t + \theta) = \alpha_2A^2\sin\theta\,\sin(2\omega t + \theta).$$

### Step 5 — Magnitude of the second harmonic

The second-harmonic component of the output is

$$y_1 - y_2\Big|_{2\omega} = \alpha_2A^2\sin\theta\,\sin(2\omega t + \theta),$$

so its amplitude is

$$\left|y_1 - y_2\right|_{2\omega} = \alpha_2A^2\,|\sin\theta| \approx \alpha_2A^2\,|\theta| \quad (\theta \ll 1,\ \theta\text{ in radians}).$$

It is **first order** in the phase mismatch. For example, $\theta = 1^\circ = 0.0175$ rad gives a second harmonic of $0.0175\,\alpha_2A^2$. That is $2\sin\theta = 3.5\%$ of the second harmonic $\tfrac12\alpha_2A^2$ that one path produces on its own, rather than the zero we would get with perfect matching.

**Intuition.** Each path alone produces a second harmonic $\tfrac12\alpha_2A^2\cos(2\omega t + 2\phi)$, with phase $2\phi$. Subtracting the two paths cancels these only if they are exactly in phase. A phase error $\theta$ at the fundamental becomes a phase error $2\theta$ at the second harmonic, and two equal phasors $2\theta$ apart leave a difference of length $2\times\tfrac12\alpha_2A^2\sin\theta = \alpha_2A^2\sin\theta$.

### Step 6 — The same result for a differential drive

In a differential circuit the second path is usually driven with the inverted signal, $x_2 = -A\cos(\omega t + \theta)$. Since $x_2^2$ does not change when $x_2$ changes sign, the second harmonic is **exactly the same**, $\alpha_2A^2\sin\theta\,\sin(2\omega t + \theta)$.

In that case the fundamental adds instead of cancelling:

$$\alpha_1\left[A\cos\omega t + A\cos(\omega t + \theta)\right] \approx 2\alpha_1A\cos\omega t ,$$

so the relative second-harmonic distortion is

$$\mathrm{HD_2} \approx \frac{\alpha_2A^2\theta}{2\alpha_1A} = \frac{\alpha_2A}{2\alpha_1}\,\theta .$$

This shows that a differential circuit suppresses even-order distortion only to the extent that its two halves are matched, here in phase. A phase mismatch alone, with perfectly matched coefficients, is enough to bring the second harmonic back.

### Result

Only the quadratic terms contribute at $2\omega$; the DC terms cancel, and the cubic terms produce only $\omega$ and $3\omega$:

$$\alpha_2\left(x_1^2 - x_2^2\right) = \frac{\alpha_2A^2}{2}\left[\cos2\omega t - \cos(2\omega t + 2\theta)\right] = \alpha_2A^2\sin\theta\,\sin(2\omega t + \theta).$$

The magnitude of the second harmonic at the output is

$$\alpha_2A^2\,|\sin\theta| \approx \alpha_2A^2\,|\theta| .$$

**Common mistake.** Concluding that the second harmonic cancels because the two paths have identical coefficients. Cancellation requires the two second-harmonic components to be equal in *phase* as well as in amplitude; a phase mismatch $\theta$ leaves a residue proportional to $\theta$.

**Common mistake.** Dropping the factor of 2 in the phase, i.e. writing $x_2^2$ with $\cos(2\omega t + \theta)$ instead of $\cos(2\omega t + 2\theta)$. This gives $\alpha_2A^2\theta/2$, half the correct value. Squaring $\cos(\omega t + \theta)$ doubles both the frequency and the phase.

**Common mistake.** Attributing part of the second harmonic to the cubic term, or claiming that the residue is proportional to $\theta^2$. The cubic term produces only odd harmonics, and $\sin\theta \approx \theta$ makes the residue first order in the mismatch.
