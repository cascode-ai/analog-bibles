# Detailed solution - G322

Write the node equations of the three-stage model and keep only the leading terms for $g_mR\gg1$. The outer capacitor $C_{m2}$ then sets the dominant pole, and with it the unity-gain frequency $g_{m0}/C_{m2}$. The inner capacitor $C_{m1}$ sets the two nondominant poles. Choose $C_{m1}$ for the required spacing of $p_3$ from $p_2$, then $C_{m2}$ for 45°, and check the margin with the full loop gain.

### Step 1 — Node equations and denominator

With node voltages $v_1$, $v_2$, $v_o$ and $G_i=1/R_i$, KCL in [Fig. 1] gives
$$
\begin{aligned}
g_{m0}v_{in}&=(G_0+sC_0)v_1+sC_{m2}(v_1-v_o),\\
g_{m1}v_1&=(G_1+sC_1)v_2+sC_{m1}(v_2-v_o),\\
-g_{m2}v_2&=(G_2+sC_2)v_o+sC_{m1}(v_o-v_2)+sC_{m2}(v_o-v_1).
\end{aligned}
$$
Solving, the gain is $a(s)=-a_0N(s)/D(s)$ with $a_0=g_{m0}R_0\,g_{m1}R_1\,g_{m2}R_2$, where $N(s)$ contains the feedforward zeros, which are assumed eliminated. Keeping the highest power of $R$ in each coefficient, $D(s)=1+a_1s+a_2s^2+a_3s^3$ with
$$
\begin{aligned}
a_1&=R_0R_1R_2\,g_{m1}g_{m2}C_{m2},\\
a_2&=R_0R_1R_2\,C_{m1}\left[C_0g_{m2}+C_{m2}(g_{m2}-g_{m1})\right],\\
a_3&=R_0R_1R_2\left[C_{m2}\left(C_1C_2+C_{m1}(C_1+C_2)\right)+C_0\left(C_1C_2+C_1C_{m1}+C_1C_{m2}+C_2C_{m1}+C_{m1}C_{m2}\right)\right].
\end{aligned}
$$
These follow from a symbolic solution of the three equations.

### Step 2 — Dominant pole and unity-gain frequency

$a_1$ is by far the largest coefficient, so
$$
p_1\approx-\frac1{a_1}=-\frac{1}{g_{m1}R_1\,g_{m2}R_2\,R_0\,C_{m2}},
$$
the Miller effect of $C_{m2}$ across the last two stages. Above $|p_1|$, the loop gain with $f=1$ is
$$
T(s)\approx\frac{a_0}{a_1s}\cdot\frac{1}{D'(s)},\qquad \frac{a_0}{a_1}=\frac{g_{m0}}{C_{m2}},\qquad D'(s)=1+\frac{a_2}{a_1}s+\frac{a_3}{a_1}s^2 .
$$
Ignoring $D'$, the unity-gain frequency is $\omega_u=g_{m0}/C_{m2}$. These expressions contain only ratios of $g_m$ and capacitances, so the design does not depend on the unspecified value of $g_{m1}$.

### Step 3 — Nondominant poles

Neglecting the $C_0$ terms (small compared with the $C_{m2}$ terms), and using $g_{m2}=6g_{m1}$ with capacitances in pF:
$$
\frac{a_2}{a_1}=\frac{(g_{m2}-g_{m1})C_{m1}}{g_{m1}g_{m2}}=\frac{5C_{m1}}{6g_{m1}},\qquad
\frac{a_3}{a_1}=\frac{C_1C_2+C_{m1}(C_1+C_2)}{g_{m1}g_{m2}}=\frac{3+6.5C_{m1}}{6g_{m1}^2}.
$$
For widely spaced real roots of $D'$,
$$
|p_2|\approx\frac{a_1}{a_2}=\frac{1.2\,g_{m1}}{C_{m1}},\qquad
|p_3|\approx\frac{a_2}{a_3}=\frac{5g_{m1}C_{m1}}{3+6.5C_{m1}} .
$$

### Step 4 — Choose $C_{m1}$ for $|p_3|=10|p_2|$

$$
\frac{5C_{m1}}{3+6.5C_{m1}}=\frac{12}{C_{m1}}\quad\Rightarrow\quad 5C_{m1}^2-78C_{m1}-36=0
\quad\Rightarrow\quad C_{m1}=\frac{78+\sqrt{78^2+720}}{10}=16.0\ \mathrm{pF}.
$$
Then $|p_2|=0.075\,g_{m1}/\mathrm{pF}$ and $|p_3|=0.75\,g_{m1}/\mathrm{pF}$; for example, 75 and 750 Mrad/s if $g_{m1}=1$ mA/V.

### Step 5 — Choose $C_{m2}$ for 45°

With $p_3$ far away, the phase above $|p_1|$ is about $-90^\circ-\tan^{-1}(\omega/|p_2|)$. The usual 45° rule places $|p_2|$ at $\omega_u$:
$$
\frac{g_{m0}}{C_{m2}}=\frac{1.2\,g_{m1}}{C_{m1}}\quad\Rightarrow\quad C_{m2}=\frac{C_{m1}}{1.2}=13.4\ \mathrm{pF}\qquad(g_{m0}=g_{m1}).
$$

### Step 6 — Check with the full loop gain

Evaluating $T(j\omega)=g_{m0}/(j\omega C_{m2}\,D'(j\omega))$ with $C_{m1}=16.0$ pF and $C_{m2}=13.4$ pF:

| Model | Crossover ($g_{m1}/\mathrm{pF}$) | Actual $\lvert p_3\rvert/\lvert p_2\rvert$ | Phase margin |
|---|---|---|---|
| $C_0$ neglected | 0.060 | 7.9 | 49° |
| $C_0$ included | 0.060 | 7.7 | 48° |

The true crossover lies below $|p_2|$, which more than offsets the roughly 5° of phase lost to $p_3$, so the margin is at least 45°. The design is therefore $C_{m1}\approx16$ pF and $C_{m2}\approx13.4$ pF.

If the specifications are instead imposed exactly, with the actual root ratio of $D'$ equal to 10 and an exact 45° margin at the true crossover, the same model with $C_0$ included gives $C_{m1}=19.8$ pF and $C_{m2}=14.1$ pF. These values are also independent of $g_{m1}$.
