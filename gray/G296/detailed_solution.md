# Detailed solution - G296

The 300-kHz pole is moved down to a dominant position $p_1'$, leaving the 2-MHz and 25-MHz poles as the only non-dominant poles. The 20-dB closed-loop gain fixes the low-frequency loop gain $T_0$; then $|p_1'|$ is chosen so that the loop gain crosses unity where the remaining poles have used up $45^\circ$ of phase. Finally the bandwidth follows from the crossover.

### Step 1 — Low-frequency loop gain

A 20-dB closed-loop gain is $A_0=10$. From $A_0=a_0/(1+T_0)$ with $a_0=5000$:
$$
T_0=\frac{a_0}{A_0}-1=499,\qquad f=\frac{T_0}{a_0}=0.0998 .
$$
The loop gain is
$$
T(jf_\mathrm{s})=\frac{499}{\left(1+j\dfrac{f_\mathrm{s}}{|p_1'|}\right)\left(1+j\dfrac{f_\mathrm{s}}{2\ \mathrm{MHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{25\ \mathrm{MHz}}\right)} .
$$

### Step 2 — Exact $45^\circ$ design

At the crossover $f_0\gg|p_1'|$, the dominant pole contributes almost exactly $-90^\circ$, so a $45^\circ$ margin requires the other two poles to contribute $45^\circ$:
$$
\tan^{-1}\frac{f_0}{2\ \mathrm{MHz}}+\tan^{-1}\frac{f_0}{25\ \mathrm{MHz}}=45^\circ\ \Rightarrow\ f_0\approx1.75\ \mathrm{MHz}.
$$
At $f_0$ the dominant pole factor is $\approx f_0/|p_1'|$, and the other two factors are $\sqrt{1+0.874^2}=1.33$ and $\sqrt{1+0.070^2}=1.00$. Setting $|T(f_0)|=1$:
$$
|p_1'|\approx\frac{f_0\times1.33\times1.00}{499}=4.65\ \mathrm{kHz}.
$$
Solving magnitude and phase conditions together without the $-90^\circ$ approximation gives $|p_1'|=4.66$ kHz and $f_0=1.75$ MHz.

### Step 3 — Quick estimate and check

The usual rule lets $|T|$ fall at $-20$ dB/dec from 499 to unity at the second pole, 2 MHz:
$$
|p_1'|=\frac{2\ \mathrm{MHz}}{499}=4.0\ \mathrm{kHz}.
$$
With this value the exact crossover is at 1.57 MHz, where $\angle T=-90.0^\circ-38.1^\circ-3.6^\circ\approx-131.6^\circ$, i.e. $\mathrm{PM}\approx48^\circ$, slightly more than required. Either $|p_1'|\approx4.0$ kHz (rule) or 4.66 kHz (exact $45^\circ$) satisfies the specification; this is ten times the unity-gain design value, because $T_0$ is ten times smaller.

### Step 4 — Bandwidth with feedback

The closed-loop gain $A=\dfrac1f\cdot\dfrac{T}{1+T}$ stays near $1/f\approx10$ until $|T|$ approaches unity, so the bandwidth is set by the crossover. Several equivalent measures:

| Measure | 4.0-kHz design | 4.66-kHz design |
|---|---|---|
| Unity-loop-gain frequency | 1.57 MHz | 1.75 MHz |
| $(1+T_0)\lvert p_1'\rvert$ | 2.0 MHz | 2.3 MHz |
| Closed-loop $-3$ dB point (with peaking) | 2.6 MHz (1.8 dB peak) | 2.9 MHz (2.3 dB peak) |

The bandwidth with feedback is therefore about 2 MHz nominally, the same as the unity-gain design of the previous case, because in both cases the crossover is placed at the 2-MHz pole. Result: $|p_1'|\approx4.6$ kHz (4.0 kHz by the quick rule), bandwidth ≈ 2 MHz.
