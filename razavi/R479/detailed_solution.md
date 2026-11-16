# Detailed solution - R479

**Approach.** Break the loop at node X (the gate of $M_2$), inject a test voltage there, and follow it through the source follower $M_2$, the feedback network $R_F$–$C_A$ and the common-source stage $M_1$ to obtain the loop transmission $T(s)$. Then find its poles, the frequency at which $|T| = 1$, and the phase there.

### Step 1 — Opening the loop at X

Set $I_{in} = 0$ (an open circuit). The gate of $M_2$ draws no current, so cutting the wire between X and that gate leaves X loaded by exactly $R_D \parallel C_X$, and the gate can be driven by a test voltage $V_t$. With the sign chosen so that $T > 0$ for negative feedback,

$$T(s) = -\frac{V_X}{V_t}.$$

With $\lambda = \gamma = 0$ each transistor is a pure transconductance and $V_{DD}$ is ac ground: $M_2$ drives $g_{m2}(V_t - V_Y)$ into Y, which is loaded by $C_Y$ and by $R_F$ to A; node A has only $C_A$ to ground; and $M_1$ pulls $g_{m1}V_A$ out of X.

<!-- diagram: diagram-01.cir -->

With $g_{m1} = g_{m2} = 1/(100\ \Omega) = 10$ mS, the time constants are

$$
\begin{aligned}
R_FC_A &= (10\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 1\ \mathrm{ns},\\
R_DC_X &= (1\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 0.1\ \mathrm{ns},\\
C_Y/g_{m2} &= (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps},\\
C_A/g_{m2} &= (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps}.
\end{aligned}
$$

### Step 2 — From $V_t$ to node A (follower plus feedback network)

**KCL at node A.** The current through $R_F$ flows into $C_A$:

$$
\begin{aligned}
\frac{V_Y - V_A}{R_F} &= sC_AV_A\\
V_Y &= V_A(1 + sR_FC_A).
\end{aligned}
$$

**KCL at node Y.** The current from $M_2$ splits between $C_Y$ and $R_F$:

$$g_{m2}(V_t - V_Y) = sC_YV_Y + \frac{V_Y - V_A}{R_F} = sC_YV_Y + sC_AV_A .$$

Substitute $V_Y = V_A(1 + sR_FC_A)$:

$$
\begin{aligned}
g_{m2}V_t &= (g_{m2} + sC_Y)V_Y + sC_AV_A\\
&= V_A\left[(g_{m2} + sC_Y)(1 + sR_FC_A) + sC_A\right],
\end{aligned}
$$

$$\frac{V_A}{V_t} = \frac{1}{\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}} .$$

At low frequency this equals 1: the follower copies $V_t$ to Y, and with no DC current in $R_F$, A sits at the same voltage.

### Step 3 — From node A back to X, and the loop transmission

**KCL at node X.** $g_{m1}V_A$ is pulled out of X through $R_D \parallel (1/sC_X)$:

$$V_X = -g_{m1}V_A\left(R_D \parallel \frac{1}{sC_X}\right) = -\frac{g_{m1}R_D}{1 + sR_DC_X}V_A .$$

Multiplying by $V_A/V_t$ from Step 2:

$$\frac{V_X}{V_t} = -\frac{g_{m1}R_D}{(1 + sR_DC_X)\left[\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}\right]} .$$

The loop has one inversion (the CS stage), so the feedback is negative and

$$T(s) = -\frac{V_X}{V_t} = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}\right]} ,$$

$$T_0 = g_{m1}R_D = (10\ \mathrm{mS})(1\ \mathrm{k}\Omega) = 10 .$$

### Step 4 — The poles

**Pole at X:**

$$\omega_X = \frac{1}{R_DC_X} = \frac{1}{0.1\ \mathrm{ns}} = 1.0\times10^{10}\ \mathrm{rad/s}.$$

**The two poles of the bracket.** Expanding it:

$$
\begin{aligned}
D(s) &= 1 + s\left(\frac{C_Y}{g_{m2}} + R_FC_A + \frac{C_A}{g_{m2}}\right) + s^2\frac{C_Y}{g_{m2}}R_FC_A\\
&= 1 + (1.02\times10^{-9})\,s + (10^{-20})\,s^2 .
\end{aligned}
$$

Its roots $s = -\omega_p$ are

$$\omega_p = \frac{1.02\times10^{-9} \mp \sqrt{(1.02\times10^{-9})^2 - 4\times10^{-20}}}{2\times10^{-20}} = \frac{1.02\times10^{-9} \mp 1.0002\times10^{-9}}{2\times10^{-20}}\ \mathrm{rad/s},$$

$$\omega_{p1} = 0.99\times10^{9}\ \mathrm{rad/s}, \qquad \omega_{p3} = 1.01\times10^{11}\ \mathrm{rad/s}.$$

So $D(s) = (1 + s/\omega_{p1})(1 + s/\omega_{p3})$ exactly, and

$$T(s) = \frac{10}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_X}\right)\left(1 + \dfrac{s}{\omega_{p3}}\right)} .$$

The dominant pole $\omega_{p1} \approx 1/[(R_F + 1/g_{m2})C_A]$ is $C_A$ charged through $R_F$ from the follower output, a decade below $\omega_X$; $\omega_{p3} \approx g_{m2}/C_Y$ is the follower's output pole.

### Step 5 — Gain-crossover frequency

$|T(j\omega_u)| = 1$ requires

$$\sqrt{1 + (\omega_u/\omega_{p1})^2}\;\sqrt{1 + (\omega_u/\omega_X)^2}\;\sqrt{1 + (\omega_u/\omega_{p3})^2} = 10 .$$

Since $\omega_u \gg \omega_{p1}$, $\sqrt{1 + (\omega/\omega_{p1})^2} \approx \omega/\omega_{p1}$; neglecting $\omega_{p3}$, $(\omega/\omega_{p1})\sqrt{1 + (\omega/\omega_X)^2} = 10$ gives roughly $7.7\times10^9$ rad/s. Refining with the exact magnitude:

| $\omega$ (rad/s) | $\sqrt{1 + (\omega/\omega_{p1})^2}$ | $\sqrt{1 + (\omega/\omega_X)^2}$ | $\sqrt{1 + (\omega/\omega_{p3})^2}$ | $\lvert T\rvert$ |
|---|---|---|---|---|
| $7.0\times10^9$ | 7.141 | 1.221 | 1.0024 | 1.14 |
| $7.5\times10^9$ | 7.642 | 1.250 | 1.0028 | 1.04 |
| $7.74\times10^9$ | 7.882 | 1.265 | 1.0029 | 1.00 |
| $8.0\times10^9$ | 8.142 | 1.281 | 1.0031 | 0.96 |

So $\omega_u \approx 7.74\times10^9$ rad/s ($f_u = \omega_u/2\pi \approx 1.23$ GHz).

### Step 6 — Phase at crossover and phase margin

$$
\begin{aligned}
\tan^{-1}\frac{7.74\times10^9}{0.99\times10^9} &= \tan^{-1}(7.82) = 82.7°,\\
\tan^{-1}\frac{7.74\times10^9}{1.0\times10^{10}} &= \tan^{-1}(0.774) = 37.7°,\\
\tan^{-1}\frac{7.74\times10^9}{1.01\times10^{11}} &= \tan^{-1}(0.0766) = 4.4°,\\
\angle T(j\omega_u) &= -(82.7° + 37.7° + 4.4°) = -124.8° ,
\end{aligned}
$$

$$\mathrm{PM} = 180° - 124.8° = 55.2° .$$

The follower pole is a factor of 13 above the crossover, yet it still removes about 4.4° of margin; without it one would get about 59.5°.

### Result

$$T(s) = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]}, \qquad T_0 = g_{m1}R_D = 10,$$

with poles at $0.99\times10^9$, $1.0\times10^{10}$ and $1.01\times10^{11}$ rad/s. The gain crossover is at $\omega_u \approx 7.7\times10^9$ rad/s (≈ 1.23 GHz), where the phase is $-124.8°$, so

$$\mathrm{PM} \approx 55° .$$

**Common mistake.** Using the wrong low-frequency loop gain, such as $g_{m1}R_F = 100$, or $R_F/R_D$ (which happens to equal 10 here but is not the loop gain). The follower and $R_F$ have a DC gain of 1 around the loop (no DC current flows in $R_F$), so $T_0 = g_{m1}R_D$.

**Common mistake.** Omitting the pole formed by $R_F$ and $C_A$, the *dominant* pole of the loop ($\approx 1$ Grad/s). The computed crossover then moves up tenfold, to about $8\times10^{10}$ rad/s, beyond the X pole, and any agreement of the resulting margin with 55° is a coincidence of the numbers.

**Common mistake.** Dropping the follower pole $g_{m2}/C_Y$ because it is "far away". It lies only about 13 times above the crossover and costs about 4°, giving 59.5° instead of 55°.
