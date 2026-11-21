# Detailed solution - G302

The closed-loop poles are the roots of $1+T(s)=0$ with $T(s)=f\,a(s)$. As $f$ grows from 0, they start at the open-loop poles and move along the root locus. Construct the locus from the standard rules (real-axis segments, break-away point, asymptotes), calibrate it with a few computed roots, and find the $j\omega$-axis crossing from the characteristic polynomial.

### Step 1 — Characteristic equation

With $s$ expressed in units of $2\pi\times1$ MHz, the poles are at $-1$, $-3$, $-4$, and
$$
a(s)=\frac{200}{(1+s)(1+s/3)(1+s/4)}=\frac{2400}{(s+1)(s+3)(s+4)} .
$$
With $T_0=a_0f=200f$, $1+T(s)=0$ becomes
$$
(s+1)(s+3)(s+4)+12T_0=s^3+8s^2+19s+12(1+T_0)=0 .
$$
As $f$ goes from 0 to 1, $T_0$ goes from 0 to 200.

### Step 2 — Locus construction

- **Real-axis segments:** a real point is on the locus if an odd number of poles lies to its right, i.e. between $-1$ and $-3$, and to the left of $-4$.
- **Break-away point:** the branches from $-1$ and $-3$ approach each other and leave the axis where $\dfrac{d}{ds}[(s+1)(s+3)(s+4)]=0$, equivalently
$$
\frac1{\sigma+1}+\frac1{\sigma+3}+\frac1{\sigma+4}=0\ \Rightarrow\ 3\sigma^2+16\sigma+19=0\ \Rightarrow\ \sigma=-1.78 .
$$
The gain there is $T_0=-(\sigma+1)(\sigma+3)(\sigma+4)/12=0.176$, i.e. $f=8.8\times10^{-4}$. The two branches leave the axis at right angles.
- **Asymptotes:** three poles and no zeros give asymptotes at $\pm60^\circ$ and $180^\circ$, centered at $(-1-3-4)/3=-2.67$.
- **Third branch:** starts at $-4$ and moves left along the real axis to $-\infty$.

Calibration points, from the roots of the cubic:

| $f$ | $T_0$ | Real root | Complex pair |
|---|---|---|---|
| 0.01 | 2 | $-5.79$ | $-1.10\pm j2.24$ |
| 0.03 | 6 | $-7.00$ | $-0.50\pm j3.43$ |
| 0.058 | 11.7 | $-8.00$ | $\pm j4.36$ |
| 1 | 200 | $-16.1$ | $+4.06\pm j11.5$ |

![Root locus in the upper half of the s-plane: branches from −1 and −3 break away at −1.78 MHz, bend along the 60° asymptote and cross the jω axis at j4.36 MHz for f = 0.058; the third branch runs from −4 to −∞](/q/G302/solution-root-locus.svg)

The locus is symmetric about the real axis; only the upper half is drawn. Coordinates are $s/2\pi$ in MHz.

### Step 3 — Onset of instability

The complex pair crosses into the right half-plane when the cubic has roots $s=\pm j\omega$. Substituting $s=j\omega$ and separating real and imaginary parts:
$$
12(1+T_0)-8\omega^2=0,\qquad 19\omega-\omega^3=0 .
$$
The second gives $\omega^2=19$, i.e. $\omega=4.36$ (4.36 MHz), and the first then gives
$$
12(1+T_0)=8\times19\ \Rightarrow\ T_0=11.67,\qquad f=\frac{T_0}{a_0}=\frac{11.67}{200}=0.058 .
$$
At this point the third root is $-8$, since the three roots sum to $-8$. For $f>0.058$ the complex poles lie in the right half-plane, and at $f=1$ they are at $+4.06\pm j11.5$. A quick estimate that follows the $60^\circ$ asymptote, crossing at $j2.67\tan60^\circ=j4.62$, gives $T_0\approx13.3$ and $f\approx0.066$, close to the exact value. The amplifier becomes unstable for $f\approx0.058$.
