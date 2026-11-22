# Detailed solution - G298

The 2-kHz pole is moved down to a dominant position $p_1'$, leaving the 200-kHz and 4-MHz poles. The 20-dB closed-loop gain fixes the low-frequency loop gain $T_0$; $|p_1'|$ is then chosen so that $|T|$ crosses unity where the two remaining poles have used $45^\circ$ of phase, and the bandwidth follows from the crossover.

### Step 1 — Low-frequency loop gain

A 20-dB closed-loop gain is $A_0=10$. From $A_0=a_0/(1+T_0)$ with $a_0=40{,}000$:
$$
T_0=\frac{a_0}{A_0}-1=3999,\qquad f=\frac{T_0}{a_0}=0.09998 .
$$
The loop gain is
$$
T(jf_\mathrm{s})=\frac{3999}{\left(1+j\dfrac{f_\mathrm{s}}{|p_1'|}\right)\left(1+j\dfrac{f_\mathrm{s}}{200\ \mathrm{kHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{4\ \mathrm{MHz}}\right)} .
$$

### Step 2 — Exact $45^\circ$ design

At the crossover $f_0\gg|p_1'|$ the dominant pole contributes $-90^\circ$, so the remaining poles must contribute $45^\circ$:
$$
\tan^{-1}\frac{f_0}{200\ \mathrm{kHz}}+\tan^{-1}\frac{f_0}{4\ \mathrm{MHz}}=45^\circ\ \Rightarrow\ f_0\approx183\ \mathrm{kHz}.
$$
There the two non-dominant factors are $\sqrt{1+0.913^2}=1.354$ and $\sqrt{1+0.046^2}=1.001$, and the dominant factor is $\approx f_0/|p_1'|$. Setting $|T(f_0)|=1$:
$$
|p_1'|=\frac{183\ \mathrm{kHz}\times1.354\times1.001}{3999}=61.9\ \mathrm{Hz}\approx62\ \mathrm{Hz}.
$$

### Step 3 — Quick estimate and check

Letting $|T|$ fall at $-20$ dB/dec from 3999 to unity at the 200-kHz pole gives
$$
|p_1'|=\frac{200\ \mathrm{kHz}}{3999}=50\ \mathrm{Hz}.
$$
With 50 Hz the exact crossover is 157 kHz and $\angle T=-90.0^\circ-38.2^\circ-2.2^\circ=-130.4^\circ$, so $\mathrm{PM}\approx49.6^\circ$, slightly above the requirement. Both values are ten times those for unity-gain compensation, because $T_0$ is ten times smaller.

### Step 4 — Bandwidth with feedback

The closed-loop gain $A=\dfrac1f\cdot\dfrac{T}{1+T}$ stays near $1/f\approx10$ until $|T|$ approaches unity, so the bandwidth is set by the crossover:

| Measure | 50-Hz design | 62-Hz design |
|---|---|---|
| Unity-loop-gain frequency | 157 kHz | 183 kHz |
| $(1+T_0)\lvert p_1'\rvert$ | 200 kHz | 248 kHz |
| Closed-loop $-3$ dB point (with peaking) | 260 kHz (1.6 dB peak) | 300 kHz (2.3 dB peak) |

The bandwidth with feedback is therefore about 200 kHz nominally, the same as for unity-gain compensation, since the crossover is again placed at the 200-kHz pole. Result: $|p_1'|\approx62$ Hz (50 Hz by the quick rule), bandwidth ≈ 200 kHz.
