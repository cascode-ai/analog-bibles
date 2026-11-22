# Detailed solution - G317

With $f=0.5$ the loop gain is $T(s)=f\,a(s)$, half the open-loop gain. Its crossover is therefore half the op amp's unity-gain frequency, and less compensation is needed than for a follower. With the zero eliminated, $a(s)$ has the Miller-split poles $p_1$ and $p_2$. The usual 45° rule places $|p_2|$ at the loop crossover; an exact evaluation of the two-pole phase margin then refines the value.

### Step 1 — Gains and loop gain

$$
a_0=g_{m1}R_1\cdot g_{m6}R_2=(0.5\ \mathrm{mA/V})(200\ \mathrm{k\Omega})\cdot(2\ \mathrm{mA/V})(100\ \mathrm{k\Omega})=100\times200=2\times10^4,
$$
$$
T_0=f\,a_0=0.5\times2\times10^4=10^4 .
$$
The feedback network does not load the amplifier, so the poles of $T$ are those of $a$.

### Step 2 — Poles and loop crossover

With $R_Z$ eliminating the zero, the denominator of $a(s)$ for the model of [Fig. 2] is
$$
D(s)=1+s\left[(C_2+C)R_2+(C_1+C)R_1+g_{m6}R_1R_2C\right]+s^2R_1R_2\left(C_1C_2+CC_1+CC_2\right).
$$
The Miller term $g_{m6}R_1R_2C$ dominates the $s$ coefficient, so the poles split:
$$
p_1\approx-\frac{1}{g_{m6}R_1R_2C},\qquad
p_2\approx-\frac{g_{m6}C}{C_1C_2+C(C_1+C_2)} .
$$
Above $|p_1|$, $|T|$ falls at $-20$ dB/dec from $T_0$. Ignoring $p_2$, it crosses unity at
$$
\omega_c\approx T_0|p_1|=\frac{f\,g_{m1}R_1g_{m6}R_2}{g_{m6}R_1R_2C}=\frac{f\,g_{m1}}{C}=\frac{0.5\,g_{m1}}{C}.
$$

### Step 3 — Design rule for 45°

The phase above $|p_1|$ is $-90^\circ-\tan^{-1}(\omega/|p_2|)$, so the usual rule for 45° sets $\omega_c=|p_2|$:
$$
\frac{0.5\,g_{m1}}{C}=\frac{g_{m6}C}{C_1C_2+C(C_1+C_2)}
\quad\Rightarrow\quad
g_{m6}C^2=0.5\,g_{m1}\left[C_1C_2+C(C_1+C_2)\right].
$$
In mA/V and pF this reads $2C^2=0.25\,(0.8+8.1C)$, that is
$$
2C^2-2.025C-0.2=0\quad\Rightarrow\quad C=\frac{2.025+\sqrt{2.025^2+1.6}}{4}=1.10\ \mathrm{pF}.
$$
Then $|p_2|=227$ Mrad/s, equal to $\omega_c=0.5g_{m1}/C=227$ Mrad/s (36 MHz). The simpler form $|p_2|\approx g_{m6}/(C_1+C_2)$ gives $C=0.5g_{m1}(C_1+C_2)/g_{m6}=1.01$ pF.

### Step 4 — Exact phase margin

The rule sets $|p_2|$ equal to the asymptotic crossover. At that frequency the true magnitude is already lower by $\sqrt2$, so the real crossover is lower and the margin larger than 45°. Evaluating $T(j\omega)=T_0/D(j\omega)$ numerically:

| $C$ (pF) | Crossover (MHz) | Phase margin |
|---|---|---|
| 0.76 | 35.9 | 45.1° |
| 1.01 | 29.8 | 51.0° |
| 1.10 | 28.1 | 52.8° |

The exact 45° point is at $C\approx0.76$ pF. The answer is therefore $C\approx1.1$ pF by the standard design rule, which gives a safe margin of about 53°, or 0.76 pF for exactly 45°. Without the factor $f=0.5$, the unity-gain design would need about twice the capacitance, about 2.1 pF.
