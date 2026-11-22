# Detailed solution - G305

With a frequency-independent $f$, the loop gain $T=f\,a(s)$ has the poles and zero of the op amp. The closed-loop poles are the roots of $1+T(s)=0$ and move along the root locus; the closed-loop zeros are the zeros of $a(s)$, because $A=a/(1+af)$ and $f$ is constant. Sketch the locus with the real-axis rule, then solve the closed-loop quadratic for the two values of $f$.

### Step 1 — Loop gain

The low-frequency gain is $a_0=10^{100/20}=10^5$. With all frequencies as $s/2\pi$ in kHz, the poles are at $-0.1$ and $-120$ and the zero at $-100$:
$$
a(s)=\frac{10^5\,(1+s/100)}{(1+s/0.1)(1+s/120)},\qquad T(s)=\frac{T_0\,(1+s/100)}{(1+s/0.1)(1+s/120)},\quad T_0=10^5f .
$$

### Step 2 — Root locus

On the real axis, a point lies on the locus if the number of real poles and zeros to its right is odd. That holds between $-100$ Hz and $-100$ kHz (one pole to the right) and to the left of $-120$ kHz (three critical points to the right), but not between $-100$ kHz and $-120$ kHz (two to the right). Therefore:

- the branch starting at $-100$ Hz moves left and ends on the zero at $-100$ kHz as $f$ increases;
- the branch starting at $-120$ kHz moves left toward $-\infty$.

The two branches never meet, so there is no break-away point and the closed-loop poles stay real for every $f$.

![Root locus on the negative real axis (log scale): branch 1 from −100 Hz to the zero at −100 kHz, branch 2 from −120 kHz to −∞, with the closed-loop poles for f = 10⁻³ and f = 1 marked](/q/G305/solution-root-locus.svg)

### Step 3 — Closed-loop characteristic equation

$1+T(s)=0$ gives
$$
\left(1+\frac{s}{0.1}\right)\left(1+\frac{s}{120}\right)+T_0\left(1+\frac{s}{100}\right)=0 .
$$
Multiplying by $0.1\times120=12$:
$$
s^2+\left(120.1+0.12\,T_0\right)s+12(1+T_0)=0 .
$$

### Step 4 — Poles and zeros for $f=10^{-3}$ and $f=1$

| $f$ | $T_0$ | Equation (kHz) | Closed-loop poles | Zero |
|---|---|---|---|---|
| $10^{-3}$ | 100 | $s^2+132.1s+1212=0$ | $-9.92$ kHz, $-122.2$ kHz | $-100$ kHz |
| 1 | $10^5$ | $s^2+12{,}120s+1.2\times10^6=0$ | $-99.83$ kHz, $-12.02$ MHz | $-100$ kHz |

For example, for $f=10^{-3}$, $s=\tfrac12\left[-132.1\pm\sqrt{132.1^2-4\times1212}\right]=-9.92$ and $-122.2$ kHz.

The zero at $-100$ kHz is present for every $f$. For $f=1$ the lower pole ($-99.83$ kHz) almost cancels it, forming a pole–zero doublet: the response is essentially single-pole with bandwidth 12 MHz, plus a small, slowly settling component with time constant $1/(2\pi\times99.8\ \mathrm{kHz})$.
