# Detailed solution - R655

**Approach.** Write the closed-loop poles of the second-order system explicitly, show that for complex poles their real part is $-\zeta\omega_n$ and their distance from the origin is exactly $\omega_n$, and read $\cos\varphi$ off the right triangle formed by the pole, the origin and the real axis. Finally, relate this to the PLL's root locus.

### Step 1 — Closed-loop transfer function of the type I PLL

The loop gain (phase detector, filter, VCO) is

$$H_{open}(s) = K_{PD}\cdot\frac{1}{1 + s/\omega_{LPF}}\cdot\frac{K_{VCO}}{s}.$$

With unity feedback the closed loop is $H = H_{open}/(1 + H_{open})$. Multiplying the numerator and denominator by $s(1 + s/\omega_{LPF})$ and then by $\omega_{LPF}$:

$$
\begin{aligned}
H(s) &= \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF}) + K_{PD}K_{VCO}}\\
&= \frac{\omega_{LPF}K_{PD}K_{VCO}}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}} .
\end{aligned}
$$

Matching this to $\omega_n^2/(s^2 + 2\zeta\omega_ns + \omega_n^2)$ gives

$$\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO}, \qquad 2\zeta\omega_n = \omega_{LPF}.$$

Here $\omega_n$ is the natural frequency and $\zeta$ the damping ratio.

### Step 2 — The poles

The poles are the roots of $s^2 + 2\zeta\omega_ns + \omega_n^2 = 0$. By the quadratic formula:

$$
\begin{aligned}
s_{1,2} &= \frac{-2\zeta\omega_n \pm \sqrt{4\zeta^2\omega_n^2 - 4\omega_n^2}}{2}\\
&= -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2 - 1}.
\end{aligned}
$$

The poles are complex when $\zeta < 1$. Then $\zeta^2 - 1 < 0$, and $\sqrt{\zeta^2 - 1} = j\sqrt{1 - \zeta^2}$, so

$$s_{1,2} = -\zeta\omega_n \pm j\,\omega_n\sqrt{1 - \zeta^2}.$$

- Real part: $\mathrm{Re}\,s_{1,2} = -\zeta\omega_n$ (negative: the poles are in the left half plane).
- Imaginary part: $\mathrm{Im}\,s_{1,2} = \pm\omega_n\sqrt{1 - \zeta^2}$.

### Step 3 — Distance from the origin to a pole

The distance from the origin to $s_1$ is its magnitude:

$$
\begin{aligned}
|s_1|^2 &= (\mathrm{Re}\,s_1)^2 + (\mathrm{Im}\,s_1)^2\\
&= \zeta^2\omega_n^2 + \omega_n^2(1 - \zeta^2)\\
&= \zeta^2\omega_n^2 + \omega_n^2 - \zeta^2\omega_n^2\\
&= \omega_n^2,
\end{aligned}
$$

so

$$|s_1| = |s_2| = \omega_n .$$

**A second way to see it.** For a monic quadratic, the product of the roots equals the constant term and their sum equals minus the $s$ coefficient (Vieta's formulas). Complex poles are a conjugate pair, $s_2 = s_1^*$, so

$$s_1s_2 = s_1s_1^* = |s_1|^2 = \omega_n^2, \qquad s_1 + s_2 = 2\,\mathrm{Re}\,s_1 = -2\zeta\omega_n .$$

Both results follow directly: $|s_1| = \omega_n$ and $\mathrm{Re}\,s_1 = -\zeta\omega_n$.

### Step 4 — The angle $\varphi$

In the figure, $\varphi$ is the angle between the **negative** real axis and the line from the origin to a pole. Draw the right triangle with vertices at the origin, at the pole $s_1$, and at the foot of the perpendicular from $s_1$ to the real axis (the point $-\zeta\omega_n$):

- the **hypotenuse** is the line from the origin to the pole, of length $|s_1| = \omega_n$;
- the **side adjacent** to $\varphi$ lies along the negative real axis, of length $|\mathrm{Re}\,s_1| = \zeta\omega_n$;
- the **opposite side** is vertical, of length $|\mathrm{Im}\,s_1| = \omega_n\sqrt{1 - \zeta^2}$.

The cosine of an angle in a right triangle is adjacent over hypotenuse:

$$\cos\varphi = \frac{|\mathrm{Re}\,s_1|}{|s_1|} = \frac{\zeta\omega_n}{\omega_n} = \zeta . \qquad\blacksquare$$

As a check, the sine is opposite over hypotenuse, $\sin\varphi = \omega_n\sqrt{1 - \zeta^2}/\omega_n = \sqrt{1 - \zeta^2}$, and indeed $\cos^2\varphi + \sin^2\varphi = \zeta^2 + 1 - \zeta^2 = 1$.

**Numerical illustration.** Take $K_{PD}K_{VCO} = \omega_{LPF}$. Then $\omega_n^2 = \omega_{LPF}^2$, so $\omega_n = \omega_{LPF}$, and $\zeta = \omega_{LPF}/(2\omega_n) = 0.5$. The poles are

$$s_{1,2} = -0.5\,\omega_{LPF} \pm j\,0.866\,\omega_{LPF}, \qquad \tan\varphi = \frac{0.866}{0.5} = \sqrt3 \;\Rightarrow\; \varphi = 60^\circ,$$

and $\cos60^\circ = 0.5 = \zeta$, as predicted.

### Step 5 — What this means on the PLL root locus

For this PLL, $\mathrm{Re}\,s = -\zeta\omega_n = -\omega_{LPF}/2$ whenever the poles are complex. This is why the complex branches in the figure are a **vertical line** through $-\omega_{LPF}/2$.

- **Break-away point.** For small $K_{PD}K_{VCO}$ the poles are real and lie between $0$ and $-\omega_{LPF}$. They meet at $-\omega_{LPF}/2$ when the discriminant vanishes, $\omega_{LPF}^2 = 4\omega_{LPF}K_{PD}K_{VCO}$, i.e. $K_{PD}K_{VCO} = \omega_{LPF}/4$. There $\varphi = 0$ and $\zeta = \cos0 = 1$ (critical damping).
- **Increasing gain.** As $K_{PD}K_{VCO}$ grows, $|s| = \omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}}$ grows while the horizontal distance $\omega_{LPF}/2$ stays fixed. So $\cos\varphi = (\omega_{LPF}/2)/\omega_n$ falls: $\varphi \to 90^\circ$ and $\zeta \to 0$. The poles approach the $j\omega$ axis in angle (though not in distance), and the step response rings more and more.

The general lesson: **lines of constant damping are straight rays from the origin**. The angle of a pole, not its real part alone, tells how well damped the response is.

### Result

For complex poles,

$$s_{1,2} = -\zeta\omega_n \pm j\,\omega_n\sqrt{1 - \zeta^2}, \qquad |s_{1,2}| = \omega_n,$$

so, with $\varphi$ measured from the negative real axis,

$$\cos\varphi = \frac{|\mathrm{Re}\,s|}{|s|} = \frac{\zeta\omega_n}{\omega_n} = \zeta .$$

On the PLL locus the real part stays at $-\omega_{LPF}/2$ while $|s| = \omega_n$ grows with $K_{PD}K_{VCO}$, so $\varphi$ increases toward 90° and $\zeta$ decreases toward 0. $\zeta = 1$ at $\varphi = 0$ (the break-away point, $K_{PD}K_{VCO} = \omega_{LPF}/4$).

**Common mistake.** Taking the pole's distance from the origin to be $\zeta\omega_n$ (its real part) instead of $\omega_n$. The real part is only the horizontal leg of the triangle; the hypotenuse includes the imaginary part, and the two combine to exactly $\omega_n$.

**Common mistake.** Measuring the angle from the *imaginary* axis (or mixing up adjacent and opposite sides), which gives $\cos\varphi = \sqrt{1 - \zeta^2}$. The angle in the figure is measured from the negative real axis, so the adjacent side is the real part.

**Common mistake.** Merely checking the identity for one numerical case. A numerical example illustrates the result but does not prove it; the proof needs the general expressions $|s| = \omega_n$ and $\mathrm{Re}\,s = -\zeta\omega_n$.
