# Detailed solution - R661

**Approach.** Write the closed-loop characteristic equation $1 + H_{open}(s) = 0$, solve it for the poles as a function of the gain $K = I_PK_{VCO}/2\pi$, and eliminate $K$ between the real and imaginary parts of the complex poles to obtain the equation of a circle. Then follow the real poles at large gain and check the break-in point and the end points against the figure.

### Step 1 — Characteristic equation

With

$$K \equiv \frac{I_PK_{VCO}}{2\pi} \quad(> 0),$$

the open-loop transfer function is

$$H_{open}(s) = K\left(R_P + \frac{1}{C_Ps}\right)\frac{1}{s} = K\,\frac{R_PC_Ps + 1}{C_Ps^2},$$

with a **double pole at the origin** ($C_P$ and the VCO) and a **zero at $s = -1/(R_PC_P)$** ($R_P$). The closed-loop poles satisfy $1 + H_{open}(s) = 0$:

$$
\begin{aligned}
1 + K\,\frac{R_PC_Ps + 1}{C_Ps^2} &= 0\\
C_Ps^2 + KR_PC_Ps + K &= 0\\
s^2 + KR_P\,s + \frac{K}{C_P} &= 0 .
\end{aligned}
$$

Comparing with $s^2 + 2\zeta\omega_ns + \omega_n^2$:

$$\omega_n^2 = \frac{K}{C_P}, \qquad 2\zeta\omega_n = KR_P \;\Rightarrow\; \zeta = \frac{KR_P}{2\sqrt{K/C_P}} = \frac{R_P}{2}\sqrt{KC_P}.$$

Unlike the type I PLL, $\zeta$ *increases* with the gain.

### Step 2 — The poles as a function of $K$

$$s_{1,2} = \frac{-KR_P \pm \sqrt{K^2R_P^2 - 4K/C_P}}{2}.$$

- **$K = 0$:** $s_{1,2} = 0$, the double open-loop pole at the origin, where the locus starts.
- **Complex poles** when the discriminant is negative:
$$K^2R_P^2 < \frac{4K}{C_P} \quad\Longleftrightarrow\quad K < \frac{4}{R_P^2C_P}\quad(\Longleftrightarrow \zeta < 1).$$
- **Real poles** when $K \ge 4/(R_P^2C_P)$ ($\zeta \ge 1$).

### Step 3 — Complex poles lie on a circle

For $K < 4/(R_P^2C_P)$ write $s = \sigma \pm j\omega$, with

$$\sigma = -\frac{KR_P}{2}, \qquad \omega^2 = \frac{K}{C_P} - \frac{K^2R_P^2}{4}.$$

Substituting $K = -2\sigma/R_P$ from the first relation into the second:

$$
\begin{aligned}
\omega^2 &= \frac{1}{C_P}\left(-\frac{2\sigma}{R_P}\right) - \frac{R_P^2}{4}\left(\frac{4\sigma^2}{R_P^2}\right)\\
\omega^2 &= -\frac{2\sigma}{R_PC_P} - \sigma^2 .
\end{aligned}
$$

Completing the square in $\sigma$:

$$
\begin{aligned}
\sigma^2 + \frac{2\sigma}{R_PC_P} + \omega^2 &= 0\\
\sigma^2 + \frac{2\sigma}{R_PC_P} + \frac{1}{(R_PC_P)^2} + \omega^2 &= \frac{1}{(R_PC_P)^2}\\
\left(\sigma + \frac{1}{R_PC_P}\right)^2 + \omega^2 &= \left(\frac{1}{R_PC_P}\right)^2 .
\end{aligned}
$$

This is a **circle centred at $s = -1/(R_PC_P)$ (the zero) with radius $1/(R_PC_P)$**, passing through the origin and through its leftmost point $s = -2/(R_PC_P)$.

As $K$ grows from 0 to $4/(R_P^2C_P)$, $\sigma = -KR_P/2$ moves steadily from 0 to $-2/(R_PC_P)$, so the conjugate pair travels along the upper and lower halves of the whole circle, from the origin to the leftmost point, as in the figure. For very small $K$, $|\sigma| = KR_P/2 \propto K$ while $|\omega| \approx \sqrt{K/C_P} \propto \sqrt K$ is much larger, so the poles leave the origin vertically, consistent with the circle being tangent to the $j\omega$ axis there.

### Step 4 — Break-in point at $\zeta = 1$

At $K = 4/(R_P^2C_P)$ the discriminant vanishes and the poles meet at

$$s = -\frac{KR_P}{2} = -\frac{4}{R_P^2C_P}\cdot\frac{R_P}{2} = -\frac{2}{R_PC_P},$$

a double real pole at the leftmost point of the circle, with

$$\zeta = \frac{R_P}{2}\sqrt{\frac{4}{R_P^2C_P}\,C_P} = \frac{R_P}{2}\cdot\frac{2}{R_P} = 1 .$$

(Equivalently, the break-in condition $dK/ds = 0$, with $K = -C_Ps^2/(R_PC_Ps + 1)$, gives $R_PC_Ps^2 + 2s = 0$, i.e. $s = 0$ or $s = -2/(R_PC_P)$.)

### Step 5 — Real poles for larger gain

For $K > 4/(R_P^2C_P)$ both poles are real and negative, with

$$s_1 + s_2 = -KR_P, \qquad s_1s_2 = \frac{K}{C_P}.$$

As $K \to \infty$, one pole runs off to $-\infty$, $s_2 \approx -KR_P$, and the other tends to

$$s_1 = \frac{s_1s_2}{s_2} \approx \frac{K/C_P}{-KR_P} = -\frac{1}{R_PC_P},$$

the open-loop zero. So from the break-in point one pole moves right toward the zero and the other left toward $-\infty$, the two arrows on the real axis in the figure. This agrees with the real-axis rule: only $(-\infty, -1/(R_PC_P)]$ has an odd number of open-loop poles and zeros to its right (two poles and one zero).

### Step 6 — Numerical check and the angle $\varphi$

Normalize $R_P = 1$, $C_P = 1$ (so $1/(R_PC_P) = 1$): the equation is $s^2 + Ks + K = 0$ and the circle is $(\sigma + 1)^2 + \omega^2 = 1$.

| $K$ | Poles | $(\sigma + 1)^2 + \omega^2$ | $\zeta = \frac12\sqrt K$ |
|---|---|---|---|
| 1 | $-0.5 \pm j0.866$ | $0.25 + 0.75 = 1$ | 0.50 |
| 2 | $-1 \pm j1$ | $0 + 1 = 1$ | 0.71 |
| 3 | $-1.5 \pm j0.866$ | $0.25 + 0.75 = 1$ | 0.87 |
| 4 | $-2$ (double) | $1 + 0 = 1$ | 1.00 |
| 8 | $-1.17,\ -6.83$ | real | 1.41 |
| 100 | $-1.01,\ -99.0$ | real | 5.0 |

**The angle $\varphi$.** For complex poles $|s|^2 = \sigma^2 + \omega^2 = K/C_P = \omega_n^2$, so

$$\cos\varphi = \frac{|\sigma|}{|s|} = \frac{KR_P/2}{\omega_n} = \zeta .$$

Geometrically, the segment from the origin to $-2/(R_PC_P)$ is a diameter, so by Thales' theorem $\cos\varphi = |s|/(2/(R_PC_P))$, the same result. Since $\zeta = \frac{R_P}{2}\sqrt{KC_P}$ grows with $K$, $\varphi$ shrinks: increasing $I_PK_{VCO}$ moves the poles toward the real axis and makes the loop *more* damped.

### Result

With $K = I_PK_{VCO}/2\pi$, the closed-loop poles satisfy

$$s^2 + KR_Ps + \frac{K}{C_P} = 0, \qquad \omega_n^2 = \frac{K}{C_P},\quad \zeta = \frac{R_P}{2}\sqrt{KC_P}.$$

- $K = 0$: double pole at the origin.
- $0 < K < 4/(R_P^2C_P)$: complex poles on the circle $\left(\sigma + \frac{1}{R_PC_P}\right)^2 + \omega^2 = \left(\frac{1}{R_PC_P}\right)^2$, centred at $-1/(R_PC_P)$ with radius $1/(R_PC_P)$, leaving the origin vertically.
- $K = 4/(R_P^2C_P)$: double pole at the break-in point $-2/(R_PC_P)$, $\zeta = 1$.
- $K \to \infty$: one real pole tends to the zero $-1/(R_PC_P)$, the other to $-\infty$.

This is exactly the locus of the figure, and $\cos\varphi = \zeta$ increases with $I_PK_{VCO}$.

**Common mistake.** Dropping the $R_P$ term from the characteristic equation, which leaves $s^2 + K/C_P = 0$ and poles on the $j\omega$ axis for every gain. $R_P$ provides the zero that bends the locus into a circle.

**Common mistake.** Placing the centre of the circle at the origin or the break-in point at $-1/(R_PC_P)$. The centre is at the zero, $-1/(R_PC_P)$; the break-in point is the far end of the diameter, $-2/(R_PC_P)$.
