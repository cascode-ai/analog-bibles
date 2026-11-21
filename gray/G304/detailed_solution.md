# Detailed solution - G304

The closed-loop poles are the roots of $1+a(s)f(s)=0$. The basic amplifier contributes two poles, and $C_F$ makes the feedback factor frequency dependent, adding a zero to the loop gain. Find the feedback function, draw both root loci as $|f_0|$ grows, solve the closed-loop quadratic at the actual $|f_0|$, and then evaluate $|i_o/i_s|$ from the resulting poles.

### Step 1 — Feedback factor and loop gain

In the shunt-series connection the feedback network returns a fraction of the output (emitter) current through $R_F$ to the input node; $R_E$ and $R_F$ divide the current. With $C_F$ across $R_F$, the current-division ratio is
$$
f(s)=-\frac{R_E}{R_E+R_F}\cdot\frac{1+sR_FC_F}{1+s\dfrac{R_ER_F}{R_E+R_F}C_F} .
$$
Numerically, $|f_0|=50/5050=0.0099$; the zero is at $1/(2\pi R_FC_F)=1/(2\pi\cdot5\ \mathrm{k\Omega}\cdot1.5\ \mathrm{pF})=21.2$ MHz, and the pole is $(R_E+R_F)/R_E=101$ times higher, at 2.14 GHz, far outside the range of interest. With $a(s)=4000/[(1+s/p_1)(1+s/p_2)]$, $|p_1|/2\pi=3$ MHz and $|p_2|/2\pi=6$ MHz,
$$
T_0=a_0|f_0|=4000\times0.0099=39.6,\qquad A_0=\frac{a_0}{1+T_0}=\frac{4000}{40.6}=98.5\ (39.9\ \mathrm{dB}).
$$
The loop gain has poles at $-3$ and $-6$ MHz, and, with $C_F$, a zero at $-21.2$ MHz.

### Step 2 — Root locus without $C_F$

With two poles and no zero, the closed-loop characteristic equation (frequencies as $s/2\pi$ in MHz) is
$$
s^2+(3+6)s+(1+T_0)(3)(6)=0 .
$$
The real-axis segment lies between $-3$ and $-6$. The poles meet at the midpoint $-4.5$ MHz when the discriminant vanishes, $T_0=1.5^2/18=0.125$ ($f=3.1\times10^{-5}$), and then split vertically along $\mathrm{Re}\,s=-4.5$ MHz, since their sum stays $-9$.

### Step 3 — Root locus with $C_F$

The zero at $-21.2$ MHz adds $T_0\,(3)(6)/21.2$ to the $s$ coefficient:
$$
s^2+\left(9+\frac{18\,T_0}{21.2}\right)s+18(1+T_0)=0 .
$$
For two poles and one zero, the complex part of the locus is a circle centered on the zero with radius $\sqrt{(21.2-3)(21.2-6)}=16.6$ MHz. It leaves the real axis at $-21.2+16.6=-4.57$ MHz ($T_0=0.16$, $f=4.0\times10^{-5}$) and would rejoin it at $-21.2-16.6=-37.9$ MHz at $T_0=79$ ($f=0.0197$, beyond the range asked); after that one branch would move to the zero and the other to $-\infty$. The zero bends the locus away from the $j\omega$ axis.

![Root loci in the upper half-plane for f from 0 to 0.01: without CF the poles split vertically at −4.5 MHz, reaching −4.5 + j26.7 MHz; with CF they follow a circle around the zero at −21.2 MHz, reaching −21.3 + j16.7 MHz](/q/G304/solution-root-loci.svg)

### Step 4 — Closed-loop poles at $|f_0|=0.0099$

Substituting $T_0=39.6$ (all in MHz, as $s/2\pi$):

| | $s$ coefficient | Constant | Poles | $\omega_n$ | $Q$ |
|---|---|---|---|---|---|
| Without $C_F$ | 9 | 730.9 | $-4.5\pm j26.7$ | 27.0 MHz | 3.0 |
| With $C_F$ | 42.6 | 730.9 | $-21.3\pm j16.7$ | 27.0 MHz | 0.63 |

For example, without $C_F$: $s=-4.5\pm j\sqrt{730.9-4.5^2}=-4.5\pm j26.7$ MHz. The natural frequency is the same in both cases; $C_F$ only raises the damping. Including the 2.14-GHz feedback pole as well, the cubic gives $-21.5\pm j16.8$ MHz and a far pole near $-2.1$ GHz, confirming the quadratic estimate.

### Step 5 — Gain magnitude

The closed-loop gain is $A=a/(1+af)$. The zero of $f(s)$ appears only in the denominator, so it is not a zero of $i_o/i_s$; the response has the two closed-loop poles and a low-frequency value of 98.5:
$$
\frac{i_o}{i_s}\approx\frac{A_0}{1+\dfrac{s}{Q\omega_n}+\dfrac{s^2}{\omega_n^2}} .
$$
Representative magnitudes:

| $f$ | 1 MHz | 5 MHz | 10 MHz | 20 MHz | 30 MHz | 50 MHz | 100 MHz |
|---|---|---|---|---|---|---|---|
| Without $C_F$ | 98.6 | 102 | 113 | 191 | 226 | 39.4 | 7.7 |
| With $C_F$ | 98.5 | 97.7 | 94.7 | 79.1 | 56.4 | 26.4 | 7.2 |

![Closed-loop current gain on log scales from 10 kHz to 100 MHz: without CF a peak of about 300 near 26 MHz; with CF a flat response falling 3 dB at about 24 MHz; both fall at −40 dB/dec at high frequency](/q/G304/solution-gain.svg)

Without $C_F$ the high $Q$ produces a peak of about 300 (+9.7 dB) near 26 MHz, a $-3$ dB frequency of about 41 MHz, and then a $-40$ dB/dec roll-off (7.7 at 100 MHz). With $C_F$ the response is flat at 98.5 with no peaking, falls 3 dB at about 24 MHz, and then rolls off at $-40$ dB/dec (7.2 at 100 MHz).
