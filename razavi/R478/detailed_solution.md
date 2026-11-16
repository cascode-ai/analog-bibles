# Detailed solution - R478

**Approach.** For a unity-gain loop the closed-loop response is $H/(1 + H)$, where $H$ is the loop gain. At the gain-crossover frequency $|H| = 1$ and the phase of $H$ is fixed by the phase margin, so the closed-loop magnitude there is a simple function of the phase margin alone. Setting that magnitude to 1.5 (a 50 % peak above the low-frequency gain of 1) gives the phase margin. A second-order model is used as a cross-check.

### Step 1 — Closed-loop response of a unity-gain loop

With the output fed back entirely ($\beta = 1$), the closed-loop transfer function from input $X$ to output $Y$ is

$$\frac{Y}{X}(j\omega) = \frac{H(j\omega)}{1 + H(j\omega)},$$

where $H$ is the open-loop gain of the amplifier (which, with $\beta = 1$, is also the loop gain).

- At low frequencies $|H| \gg 1$, so $Y/X \approx 1$: the closed-loop gain is unity.
- The *gain-crossover frequency* $\omega_1$ is where $|H(j\omega_1)| = 1$.
- The *phase margin* is $\mathrm{PM} = 180° + \angle H(j\omega_1)$, i.e. $\angle H(j\omega_1) = -(180° - \mathrm{PM})$.

"50 % peaking" means the closed-loop magnitude rises to $1.5$ times its low-frequency value of 1 near $\omega_1$:

$$\left|\frac{Y}{X}\right|_{\text{peak}} = 1.5 .$$

As is customary for this estimate, we evaluate the closed-loop magnitude *at* the crossover frequency $\omega_1$, which is where the peak occurs approximately.

### Step 2 — Closed-loop magnitude at the gain crossover

At $\omega_1$ the loop gain is a unit-length phasor at angle $-(180° - \mathrm{PM})$:

$$H(j\omega_1) = 1\cdot e^{-j(180° - \mathrm{PM})} = e^{-j180°}\,e^{j\,\mathrm{PM}} = -e^{j\,\mathrm{PM}} = -\cos\mathrm{PM} - j\sin\mathrm{PM}.$$

Add 1:

$$1 + H(j\omega_1) = (1 - \cos\mathrm{PM}) - j\sin\mathrm{PM}.$$

Its magnitude:

$$
\begin{aligned}
|1 + H(j\omega_1)| &= \sqrt{(1 - \cos\mathrm{PM})^2 + \sin^2\mathrm{PM}}\\
&= \sqrt{1 - 2\cos\mathrm{PM} + \cos^2\mathrm{PM} + \sin^2\mathrm{PM}}\\
&= \sqrt{2 - 2\cos\mathrm{PM}}\\
&= \sqrt{4\sin^2(\mathrm{PM}/2)}\\
&= 2\sin\frac{\mathrm{PM}}{2},
\end{aligned}
$$

using $\cos^2 + \sin^2 = 1$ and the half-angle identity $1 - \cos\theta = 2\sin^2(\theta/2)$.

Since $|H(j\omega_1)| = 1$:

$$\left|\frac{Y}{X}(j\omega_1)\right| = \frac{|H(j\omega_1)|}{|1 + H(j\omega_1)|} = \frac{1}{2\sin(\mathrm{PM}/2)} .$$

**Geometric picture.** In the complex plane, $H(j\omega_1)$ lies on the unit circle, PM degrees away from the critical point $-1$. The quantity $|1 + H|$ is the straight-line distance (the chord) between $H$ and $-1$, which is $2\sin(\mathrm{PM}/2)$. A small phase margin puts $H$ close to $-1$, the denominator $1 + H$ becomes small, and the closed-loop response peaks.

### Step 3 — Solve for the phase margin

Set the closed-loop magnitude at $\omega_1$ equal to 1.5:

$$
\begin{aligned}
\frac{1}{2\sin(\mathrm{PM}/2)} &= 1.5\\
\sin\frac{\mathrm{PM}}{2} &= \frac{1}{2\times1.5} = \frac13\\
\frac{\mathrm{PM}}{2} &= \sin^{-1}\frac13 = 19.47°\\
\mathrm{PM} &= 38.9° .
\end{aligned}
$$

**Sanity check with familiar values** of $1/(2\sin(\mathrm{PM}/2))$:

| PM | closed-loop magnitude at $\omega_1$ | peaking |
|---|---|---|
| 30° | 1.93 | 93 % |
| 38.9° | 1.50 | 50 % |
| 45° | 1.31 | 31 % |
| 60° | 1.00 | none at $\omega_1$ |

The 45° case reproduces the well-known "about 30 % peaking", and 60° gives a magnitude of exactly 1 at crossover. A 50 % peak must therefore correspond to a margin below 45°, consistent with 38.9°.

### Step 4 — Cross-check with a second-order closed loop

A two-pole amplifier with a large gain, closed in a unity-gain loop, behaves like a standard second-order system

$$\frac{Y}{X}(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2},$$

with natural frequency $\omega_n$ and damping factor $\zeta$. Its loop gain is $L(s) = \omega_n^2/[s(s + 2\zeta\omega_n)]$.

**Damping from the peak.** For $\zeta < 0.707$ the peak of $|Y/X|$ is $M_p = 1/(2\zeta\sqrt{1 - \zeta^2})$. Setting $M_p = 1.5$:

$$
\begin{aligned}
2\zeta\sqrt{1 - \zeta^2} &= \frac23\\
4\zeta^2(1 - \zeta^2) &= \frac49\\
\zeta^4 - \zeta^2 + \frac19 &= 0\\
\zeta^2 &= \frac{1 - \sqrt{1 - 4/9}}{2} = \frac{1 - 0.7454}{2} = 0.1273\\
\zeta &= 0.357 .
\end{aligned}
$$

(The other root, $\zeta^2 = 0.873$, exceeds 0.5 and gives no peak, so it is discarded.)

**Phase margin of that loop.** The crossover of $L$ satisfies $\omega_n^2 = \omega_c\sqrt{\omega_c^2 + 4\zeta^2\omega_n^2}$, which gives $(\omega_c/\omega_n)^2 = \sqrt{1 + 4\zeta^4} - 2\zeta^2$. The phase of $L$ is $-90° - \tan^{-1}[\omega_c/(2\zeta\omega_n)]$, so

$$\mathrm{PM} = \tan^{-1}\frac{2\zeta}{\sqrt{\sqrt{1 + 4\zeta^4} - 2\zeta^2}} .$$

With $\zeta = 0.357$: $\sqrt{1 + 4(0.0162)} = 1.0319$, then $1.0319 - 0.2546 = 0.7773$, whose square root is 0.8816, so

$$\mathrm{PM} = \tan^{-1}\frac{0.714}{0.8816} = \tan^{-1}(0.810) = 39.0° .$$

The two methods agree: PM ≈ 39°.

### Result

$$\mathrm{PM} = 2\sin^{-1}\frac13 \approx 39°,$$

from $\left|Y/X\right|_{\omega_1} = 1/[2\sin(\mathrm{PM}/2)] = 1.5$. (The second-order model, $\zeta \approx 0.36$, gives the same value.)

**Common mistake.** Answering 45° or 60° from memory. A 45° margin gives about 30 % peaking and 60° gives essentially none; 50 % peaking requires a smaller margin, about 39°.

**Common mistake.** Reading the 50 % directly as a phase margin of 50°. Peaking is a magnitude ratio; it must be converted to a margin through $1/[2\sin(\mathrm{PM}/2)]$.

**Common mistake.** Forgetting that $|H| = 1$ at the gain crossover, or adding the phasors incorrectly (for example writing $|1 + H| = \cos\mathrm{PM}$). The denominator is the distance between $H$ and $-1$ on the unit circle, $|1 + H| = 2\sin(\mathrm{PM}/2)$.
