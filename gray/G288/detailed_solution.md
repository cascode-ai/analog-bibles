# Detailed solution - G288

The stability of the closed loop is decided by the loop gain $T(j\omega)=a(j\omega)f$. Since the amplifier has only left-half-plane poles, the Nyquist criterion reduces to checking whether the polar plot of $T(j\omega)$ encircles the critical point $-1$. Compute the plot from the three-pole transfer function, locate its axis crossings exactly, then read off the margins.

### Step 1 — Loop gain

With $a_0=200$ and $f=0.05$, the low-frequency loop gain is $T_0=a_0f=10$. Write frequency in megahertz, $x=\omega/(2\pi\cdot1\ \mathrm{MHz})$, so the poles at 1, 2 and 4 MHz give
$$
T(jx)=\frac{10}{(1+jx)(1+jx/2)(1+jx/4)} .
$$
Magnitude and phase are
$$
|T|=\frac{10}{\sqrt{(1+x^2)(1+x^2/4)(1+x^2/16)}},\qquad
\angle T=-\left(\tan^{-1}x+\tan^{-1}\frac x2+\tan^{-1}\frac x4\right).
$$
The phase falls monotonically from $0^\circ$ to $-270^\circ$, so the locus starts at $+10$ on the positive real axis, moves clockwise through the fourth, third and second quadrants, and enters the origin tangent to the $+j$ axis.

### Step 2 — Axis crossings

Multiplying out the denominator with $s$ normalized to $2\pi\cdot1$ MHz:
$$
(1+s)\left(1+\frac s2\right)\left(1+\frac s4\right)=\frac{s^3+7s^2+14s+8}{8}.
$$
At $s=jx$ this is $\dfrac{(8-7x^2)+jx(14-x^2)}{8}$.

- **Negative imaginary axis** (real part zero): $8-7x^2=0$ gives $x=\sqrt{8/7}=1.069$, i.e. 1.07 MHz, where $T=\dfrac{80}{j\sqrt{8/7}\,(14-8/7)}=-j5.82$.
- **Negative real axis** (imaginary part zero): $14-x^2=0$ gives $x=\sqrt{14}=3.742$, i.e. $f_{180}=3.74$ MHz, where
$$
T=\frac{10\times8}{8-7\times14}=\frac{80}{-90}=-0.889 .
$$

### Step 3 — Plot points

Representative points, from the magnitude and phase formulas of Step 1:

| $f$ (MHz) | $\lvert T\rvert$ | $\angle T$ |
|---|---|---|
| 0 | 10 | $0^\circ$ |
| 0.5 | 8.61 | $-47.7^\circ$ |
| 1 | 6.14 | $-85.6^\circ$ |
| 1.07 | 5.82 | $-90^\circ$ |
| 2 | 2.83 | $-135^\circ$ |
| 3 | 1.40 | $-164.7^\circ$ |
| 3.54 | 1.00 | $-176.3^\circ$ |
| 3.74 | 0.889 | $-180^\circ$ |
| 5 | 0.455 | $-198.2^\circ$ |

For example, at 2 MHz, $|T|=10/\sqrt{5\cdot2\cdot1.25}=2.83$ and $\angle T=-(63.4^\circ+45^\circ+26.6^\circ)=-135^\circ$.

![Nyquist plot of the loop gain from 10 on the real axis, clockwise through −j5.82 at 1.07 MHz and the negative real axis at −0.889 into the origin](/q/G288/solution-nyquist.svg)

![Zoom near −1: the locus crosses the negative real axis at −0.889, just to the right of the critical point, and crosses the unit circle at 3.54 MHz](/q/G288/solution-nyquist-zoom.svg)

The dashed branch in the first plot is the mirror image for negative frequencies, which closes the contour.

### Step 4 — Stability

The open-loop transfer function has no right-half-plane poles, so the closed loop is stable if and only if the Nyquist plot does not encircle $-1$. The only negative-real-axis crossing is at $-0.889$, to the right of $-1$, so there is no encirclement and **the feedback amplifier is stable**.

It is only marginally stable. The gain margin is $1/0.889=1.125$, i.e. $20\log_{10}1.125=1.0$ dB. The unity-gain crossing, $|T|=1$, occurs at 3.54 MHz with phase $-176.3^\circ$, giving a phase margin of about $3.7^\circ$. The closed-loop response would therefore show a large peak near 3.5–3.7 MHz and strong ringing in its step response; a small increase of $f$ (by 12.5%) would make it oscillate.
