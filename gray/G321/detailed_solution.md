# Detailed solution - G321

The denominator is linear in $C$, so it can be written as $G(s)+C\,H(s)$, and the poles follow a root locus with $C$ as the gain parameter. The start points ($C=0$) are the roots of $G$, and the end points ($C\to\infty$) are the roots of $H$. The real-axis rule, together with a check that the discriminant never changes sign, shows that both poles stay real and move apart: this is pole splitting.

### Step 1 — Split the denominator

Collecting the terms in $C$:
$$
\begin{aligned}
D(s)&=\underbrace{(1+sR_1C_1)(1+sR_2C_2)}_{G(s)}+C\,\underbrace{s\left[(R_1+R_2+g_mR_1R_2)+sR_1R_2(C_1+C_2)\right]}_{H(s)} .
\end{aligned}
$$
To check, $G$ supplies the terms $s(R_1C_1+R_2C_2)$ and $s^2R_1R_2C_1C_2$, and $H$ supplies $s\,C(R_1+R_2+g_mR_1R_2)$ and $s^2R_1R_2C(C_1+C_2)$, as in the given denominator.

### Step 2 — Start and end points

At $C=0$ the poles are the roots of $G$:
$$
-\frac1{R_1C_1}=-\frac1{(200\ \mathrm{k\Omega})(0.1\ \mathrm{pF})}=-5.0\times10^7\ \mathrm{rad/s},\qquad
-\frac1{R_2C_2}=-\frac1{(100\ \mathrm{k\Omega})(8\ \mathrm{pF})}=-1.25\times10^6\ \mathrm{rad/s}.
$$
As $C\to\infty$ they approach the roots of $H$:
$$
s=0,\qquad
s=-\frac{R_1+R_2+g_mR_1R_2}{R_1R_2(C_1+C_2)}=-\frac{4.03\times10^7\ \Omega}{(2\times10^{10}\ \Omega^2)(8.1\ \mathrm{pF})}=-2.49\times10^8\ \mathrm{rad/s}.
$$
Since $g_mR_1R_2$ dominates the numerator, the second end point is close to $-g_m/(C_1+C_2)=-2.47\times10^8$ rad/s.

### Step 3 — Real-axis segments and no break-away

For a positive parameter, a real-axis point is on the locus if the number of start and end points to its right is odd. The locus therefore occupies $[-1.25\times10^6,\,0]$ and $[-2.49\times10^8,\,-5\times10^7]$. Each segment holds exactly one branch:

- the slow pole moves from $-1.25\times10^6$ rad/s to the origin;
- the fast pole moves from $-5\times10^7$ rad/s out to $-2.49\times10^8$ rad/s.

The branches never meet, so the poles never become complex. To confirm, write the denominator as $1+b_1s+b_2s^2$ with $b_1=A+BC$, where $A=R_1C_1+R_2C_2=0.82\ \mu\mathrm s$ and $B=R_1+R_2+g_mR_1R_2=4.03\times10^7\ \Omega$. The discriminant is
$$
b_1^2-4b_2=\left(A^2-4R_1R_2C_1C_2\right)+C\left[2AB-4R_1R_2(C_1+C_2)\right]+B^2C^2 .
$$
Its coefficients are $6.1\times10^{-13}\ \mathrm{s^2}$, $65.4\ \mathrm{s\,\Omega}$ and $1.6\times10^{15}\ \Omega^2$, all positive, so it is positive for every $C\ge0$.

### Step 4 — Calibration and asymptotes

Roots of $1+b_1s+b_2s^2=0$ for several values of $C$:

| $C$ (pF) | Slow pole (rad/s) | Fast pole (rad/s) |
|---|---|---|
| 0 | $-1.25\times10^6$ | $-5.0\times10^7$ |
| 0.01 | $-8.3\times10^5$ | $-6.9\times10^7$ |
| 0.1 | $-2.1\times10^5$ | $-1.50\times10^8$ |
| 1 | $-2.4\times10^4$ | $-2.31\times10^8$ |
| 10 | $-2.5\times10^3$ | $-2.47\times10^8$ |
| 100 | $-2.5\times10^2$ | $-2.49\times10^8$ |

For large $C$, the widely split poles are well approximated by
$$
p_1\approx-\frac1{g_mR_1R_2C},\qquad
p_2\approx-\frac{g_mC}{C_1C_2+C(C_1+C_2)}\ \to\ -\frac{g_m}{C_1+C_2}.
$$
The slow pole falls as $1/C$, while the fast pole saturates near $2.5\times10^8$ rad/s.

![Pole locus versus C on log axes: the slow pole starts at 1.25×10⁶ rad/s and falls as 1/C toward the origin; the fast pole starts at 5×10⁷ rad/s and rises to 2.49×10⁸ rad/s; both stay on the negative real axis](/q/G321/solution-root-locus.svg)

The right-half-plane zero at $s=+g_m/C$ is a zero, not a pole, and does not appear in this locus.
