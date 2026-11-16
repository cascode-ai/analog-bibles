# Detailed solution - R655

**Approach.** Write the complex closed-loop poles explicitly, show that their real part is $-\zeta\omega_n$ and their distance from the origin is exactly $\omega_n$, and read $\cos\varphi$ off the right triangle formed by the pole, the origin and the real axis. Then relate this to the PLL's root locus.

### Step 1 — Closed-loop transfer function of the type I PLL

With $H_{open}(s) = K_{PD}K_{VCO}/[s\,(1 + s/\omega_{LPF})]$ and unity feedback,

$$
\begin{aligned}
H(s) &= \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF}) + K_{PD}K_{VCO}}\\
&= \frac{\omega_{LPF}K_{PD}K_{VCO}}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}} ,
\end{aligned}
$$

so that

$$\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO}, \qquad 2\zeta\omega_n = \omega_{LPF}.$$

### Step 2 — The poles

The roots of $s^2 + 2\zeta\omega_ns + \omega_n^2 = 0$ are $s_{1,2} = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2 - 1}$. They are complex when $\zeta < 1$, and then $\sqrt{\zeta^2 - 1} = j\sqrt{1 - \zeta^2}$:

$$s_{1,2} = -\zeta\omega_n \pm j\,\omega_n\sqrt{1 - \zeta^2},$$

with $\mathrm{Re}\,s_{1,2} = -\zeta\omega_n$ and $\mathrm{Im}\,s_{1,2} = \pm\omega_n\sqrt{1 - \zeta^2}$.

### Step 3 — Distance from the origin to a pole

$$
\begin{aligned}
|s_1|^2 &= (\mathrm{Re}\,s_1)^2 + (\mathrm{Im}\,s_1)^2\\
&= \zeta^2\omega_n^2 + \omega_n^2(1 - \zeta^2)\\
&= \omega_n^2,
\end{aligned}
$$

so

$$|s_1| = |s_2| = \omega_n .$$

Equivalently, by Vieta's formulas for the conjugate pair $s_2 = s_1^{\ast}$,

$$s_1s_2 = |s_1|^2 = \omega_n^2, \qquad s_1 + s_2 = 2\,\mathrm{Re}\,s_1 = -2\zeta\omega_n .$$

### Step 4 — The angle $\varphi$

$\varphi$ is measured from the **negative** real axis. In the right triangle with vertices at the origin, at the pole $s_1$ and at the foot $-\zeta\omega_n$ of the perpendicular from $s_1$ to the real axis, the hypotenuse is $|s_1| = \omega_n$, the side adjacent to $\varphi$ is $|\mathrm{Re}\,s_1| = \zeta\omega_n$, and the opposite side is $|\mathrm{Im}\,s_1| = \omega_n\sqrt{1 - \zeta^2}$. Hence

$$\cos\varphi = \frac{|\mathrm{Re}\,s_1|}{|s_1|} = \frac{\zeta\omega_n}{\omega_n} = \zeta . \qquad\blacksquare$$

Check: $\sin\varphi = \omega_n\sqrt{1 - \zeta^2}/\omega_n = \sqrt{1 - \zeta^2}$, and $\cos^2\varphi + \sin^2\varphi = \zeta^2 + 1 - \zeta^2 = 1$.

**Numerical illustration.** Take $K_{PD}K_{VCO} = \omega_{LPF}$. Then $\omega_n^2 = \omega_{LPF}^2$, so $\omega_n = \omega_{LPF}$, and $\zeta = \omega_{LPF}/(2\omega_n) = 0.5$. The poles are

$$s_{1,2} = -0.5\,\omega_{LPF} \pm j\,0.866\,\omega_{LPF}, \qquad \tan\varphi = \frac{0.866}{0.5} = \sqrt3 \;\Rightarrow\; \varphi = 60^\circ,$$

and $\cos60^\circ = 0.5 = \zeta$, as predicted.

### Step 5 — What this means on the PLL root locus

For this PLL, $\mathrm{Re}\,s = -\zeta\omega_n = -\omega_{LPF}/2$ whenever the poles are complex, which is why the complex branches in the figure are a **vertical line** through $-\omega_{LPF}/2$.

- **Break-away point.** For small $K_{PD}K_{VCO}$ the poles are real, between $0$ and $-\omega_{LPF}$. They meet at $-\omega_{LPF}/2$ when the discriminant vanishes, $\omega_{LPF}^2 = 4\omega_{LPF}K_{PD}K_{VCO}$, i.e. $K_{PD}K_{VCO} = \omega_{LPF}/4$. There $\varphi = 0$ and $\zeta = \cos0 = 1$ (critical damping).
- **Increasing gain.** $|s| = \omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}}$ grows while the horizontal distance $\omega_{LPF}/2$ stays fixed, so $\cos\varphi = (\omega_{LPF}/2)/\omega_n$ falls: $\varphi \to 90^\circ$ and $\zeta \to 0$. The poles approach the $j\omega$ axis in angle (though not in distance), and the step response rings more and more.

Lines of constant damping are thus straight rays from the origin: the angle of a pole, not its real part alone, sets the damping.

### Result

For complex poles,

$$s_{1,2} = -\zeta\omega_n \pm j\,\omega_n\sqrt{1 - \zeta^2}, \qquad |s_{1,2}| = \omega_n,$$

so, with $\varphi$ measured from the negative real axis,

$$\cos\varphi = \frac{|\mathrm{Re}\,s|}{|s|} = \frac{\zeta\omega_n}{\omega_n} = \zeta .$$

On the PLL locus the real part stays at $-\omega_{LPF}/2$ while $|s| = \omega_n$ grows with $K_{PD}K_{VCO}$, so $\varphi$ increases toward 90° and $\zeta$ decreases toward 0. $\zeta = 1$ at $\varphi = 0$ (the break-away point, $K_{PD}K_{VCO} = \omega_{LPF}/4$).

**Common mistake.** Taking the pole's distance from the origin to be $\zeta\omega_n$ (its real part) instead of $\omega_n$. The real part is only the horizontal leg; with the imaginary part the hypotenuse is exactly $\omega_n$.

**Common mistake.** Measuring the angle from the *imaginary* axis (or swapping adjacent and opposite sides), which gives $\cos\varphi = \sqrt{1 - \zeta^2}$. The angle in the figure is measured from the negative real axis.
