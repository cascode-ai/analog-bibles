# Detailed solution - G306

With a frequency-independent $f$, the loop gain $T=f\,a(s)$ has the poles and zero of the op amp. The closed-loop poles are the roots of $1+T(s)=0$ and move along the root locus as $f$ grows. The closed-loop zero is the zero of $a(s)$, because $A=a/(1+af)$ and $f$ is constant. Here the zero lies just beyond the second pole, so the two poles meet, leave the real axis on a circle around the zero, and come back. Locate the real-axis segments, the break points and the circle, then solve the closed-loop quadratic for the two values of $f$.

### Step 1 — Loop gain

The low-frequency gain is $a_0=10^{100/20}=10^5$. All positions are written as $s/2\pi$ in kHz, so the poles are at $-0.1$ and $-100$ and the zero is at $-120$:
$$
a(s)=\frac{10^5\,(1+s/120)}{(1+s/0.1)(1+s/100)},\qquad T(s)=\frac{T_0\,(1+s/120)}{(1+s/0.1)(1+s/100)},\quad T_0=10^5f .
$$
As $f$ goes from 0 to 1, $T_0$ goes from 0 to $10^5$.

### Step 2 — Closed-loop characteristic equation

$1+T(s)=0$ gives
$$
\left(1+\frac{s}{0.1}\right)\left(1+\frac{s}{100}\right)+T_0\left(1+\frac{s}{120}\right)=0 .
$$
Multiplying by $0.1\times100=10$:
$$
s^2+\left(100.1+\frac{T_0}{12}\right)s+10\,(1+T_0)=0 .
$$
A frequency-independent $f$ adds no dynamics of its own, so this quadratic gives both closed-loop poles for every $f$.

### Step 3 — Real-axis segments

On the real axis, a point lies on the locus if the number of real poles and zeros to its right is odd. That holds between $-0.1$ and $-100$ kHz (one pole to the right) and to the left of $-120$ kHz (three critical points to the right). It does not hold between $-100$ and $-120$ kHz (two to the right).

So the two poles start at $-0.1$ and $-100$ kHz and move toward each other as $f$ grows. Two branches occupying one segment must meet and leave the axis. They can reach the axis again only on the segment left of $-120$ kHz, where one branch then ends on the zero and the other goes to $-\infty$.

### Step 4 — Break points and the circle

Shift the origin to the zero with $s=p-120$. Substituting into the quadratic of Step 2,
$$
\begin{aligned}
(p-120)^2+b\,(p-120)+10(1+T_0)&=0,\qquad b=100.1+\frac{T_0}{12},\\
p^2+(b-240)\,p+\left[14400-120\left(100.1+\frac{T_0}{12}\right)+10+10T_0\right]&=0,\\
p^2+(b-240)\,p+2398&=0 .
\end{aligned}
$$
The $T_0$ terms cancel in the constant, so the product of the two roots in $p$ is always $2398\ \mathrm{kHz^2}$. When the roots are complex conjugates, that product is $|p|^2$. The complex branches therefore lie on a circle centred on the zero, with radius
$$
r=\sqrt{2398}\ \mathrm{kHz}=\sqrt{(120-0.1)(120-100)}\ \mathrm{kHz}=48.97\ \mathrm{kHz}.
$$
The break points are where the circle crosses the real axis, at $s=-120\pm48.97$:

- break-away at $-71.03$ kHz;
- break-in at $-168.97$ kHz.

The gain at each break point follows from $T_0=-(1+s/0.1)(1+s/100)/(1+s/120)$, or equivalently from a zero discriminant, $|b-240|=2\sqrt{2398}=97.94$:

| Point | $s/2\pi$ (kHz) | $b$ | $T_0$ | $f=T_0/10^5$ |
|---|---|---|---|---|
| break-away | $-71.03$ | 142.06 | 503.5 | $5.04\times10^{-3}$ |
| break-in | $-168.97$ | 337.94 | 2854 | 0.0285 |

For example, at the break-away point, $T_0=12\,(142.06-100.1)=503.5$.

The poles are complex only for $5.0\times10^{-3}<f<0.0285$. Beyond the break-in point, one branch moves right toward the zero at $-120$ kHz and the other moves left toward $-\infty$.

![Root locus in the s-plane (kHz): the poles at −0.1 and −100 kHz meet at −71.0 kHz, follow a circle of radius 49.0 kHz centred on the zero at −120 kHz, rejoin the real axis at −169.0 kHz, then one branch ends on the zero and the other goes to −∞; closed-loop poles for f = 10⁻³ and f = 1 marked](/q/G306/solution-root-locus.svg)

### Step 5 — Poles and zeros for $f=10^{-3}$ and $f=1$

| $f$ | $T_0$ | Equation (kHz) | Closed-loop poles | Zero |
|---|---|---|---|---|
| $10^{-3}$ | 100 | $s^2+108.4s+1010=0$ | $-10.3$ kHz, $-98.1$ kHz | $-120$ kHz |
| 1 | $10^5$ | $s^2+8433s+1.0\times10^6=0$ | $-120.3$ kHz, $-8.31$ MHz | $-120$ kHz |

For $f=10^{-3}$, for example:
$$
s=\tfrac12\left[-108.43\pm\sqrt{108.43^2-4\times1010}\right]=\tfrac12\left(-108.43\pm87.85\right)=-10.29,\ -98.14\ \mathrm{kHz}.
$$

Both values of $f$ lie outside the complex range of Step 4, so both pole pairs are real. $f=10^{-3}$ is before the break-away point, so the two poles are still approaching each other. $f=1$ is far past the break-in point. There, the slow pole at $-120.3$ kHz almost cancels the zero at $-120$ kHz, forming a pole–zero doublet. The fast pole at $-8.31$ MHz sets the closed-loop bandwidth.

The zero stays at $-120$ kHz for every $f$.
