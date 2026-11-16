# Detailed solution - R480

**Approach.** Break the feedback loop at node X (the gate of $M_2$), inject a test voltage there, follow it around the loop through the source follower $M_2$, the feedback network $R_F$–$C_A$ and the common-source stage $M_1$, and obtain the loop transmission $T(s)$. Then find its poles, the frequency at which $|T| = 1$, and the phase there.

### Step 1 — The circuit and where to break the loop

Reading the figure:

- $M_1$ is a common-source (CS) stage: gate at node A, source grounded, drain at node X with load $R_D = 2$ kΩ to $V_{DD}$ and capacitance $C_X$ to ground.
- $M_2$ is a source follower: gate at X, drain at $V_{DD}$, source at the output node Y, biased by an ideal current source. $C_Y$ loads Y.
- $R_F$ feeds the output Y back to the input node A, which also has $C_A$ to ground. The input current $I_{in}$ enters A.

For the loop analysis the input is set to zero: the ideal current source $I_{in}$ becomes an **open circuit**.

**Why break at X.** The gate of $M_2$ draws no current (no gate capacitance is given), so cutting the wire between X and the gate of $M_2$ leaves the load at X ($R_D \parallel C_X$) unchanged. Drive the gate of $M_2$ with a test voltage $V_t$ and compute the voltage $V_X$ that comes back. The loop transmission is

$$T(s) = -\frac{V_X}{V_t},$$

with the minus sign chosen so that $T > 0$ means negative feedback.

### Step 2 — Small-signal model of the opened loop

With $\lambda = \gamma = 0$ there is no $r_O$ and no body effect, so each transistor is a voltage-controlled current source; $V_{DD}$ is an AC ground.

- **$M_2$**: current $g_{m2}(V_t - V_Y)$ from $V_{DD}$ into node Y.
- **Node Y**: $C_Y$ to ground and $R_F$ to node A; the ideal bias source carries no signal current.
- **Node A**: $C_A$ to ground; the gate of $M_1$ draws no current.
- **$M_1$**: current $g_{m1}V_A$ pulled out of node X.
- **Node X**: $R_D$ and $C_X$ to AC ground.

<!-- diagram: diagram-01.cir -->

Time constants (with $g_{m1} = g_{m2} = 1/(100\ \Omega) = 10$ mS):

$$
\begin{aligned}
R_FC_A &= (10\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 1\ \mathrm{ns},\\
R_DC_X &= (2\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 0.2\ \mathrm{ns},\\
C_Y/g_{m2} &= (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps},\\
C_A/g_{m2} &= (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps}.
\end{aligned}
$$

### Step 3 — From $V_t$ to node A

**KCL at node A** (current through $R_F$ charges $C_A$):

$$
\begin{aligned}
\frac{V_Y - V_A}{R_F} &= sC_AV_A\\
V_Y &= V_A(1 + sR_FC_A).
\end{aligned}
$$

**KCL at node Y** (current from $M_2$ splits into $C_Y$ and $R_F$):

$$g_{m2}(V_t - V_Y) = sC_YV_Y + \frac{V_Y - V_A}{R_F} = sC_YV_Y + sC_AV_A .$$

Substitute $V_Y$ from the first equation:

$$
\begin{aligned}
g_{m2}V_t &= (g_{m2} + sC_Y)V_Y + sC_AV_A\\
&= V_A\left[(g_{m2} + sC_Y)(1 + sR_FC_A) + sC_A\right],
\end{aligned}
$$

$$\frac{V_A}{V_t} = \frac{1}{\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}} .$$

At DC this ratio is 1: the follower copies $V_t$ to Y, and with no DC current in $R_F$, node A follows Y.

### Step 4 — From node A back to X, and the loop transmission

**KCL at node X.** The current $g_{m1}V_A$ is drawn through $R_D \parallel (1/sC_X)$:

$$V_X = -g_{m1}V_A\left(R_D \parallel \frac{1}{sC_X}\right) = -\frac{g_{m1}R_D}{1 + sR_DC_X}V_A .$$

Combining with Step 3, and noting the single inversion (negative feedback):

$$T(s) = -\frac{V_X}{V_t} = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}\right]} .$$

**Low-frequency loop gain:**

$$T_0 = g_{m1}R_D = (10\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 20 .$$

### Step 5 — The poles

**Pole at X:**

$$\omega_X = \frac{1}{R_DC_X} = \frac{1}{0.2\ \mathrm{ns}} = 5\times10^{9}\ \mathrm{rad/s}.$$

**The bracket.** Expanding,

$$D(s) = 1 + s\left(\frac{C_Y}{g_{m2}} + R_FC_A + \frac{C_A}{g_{m2}}\right) + s^2\frac{C_Y}{g_{m2}}R_FC_A = 1 + (1.02\times10^{-9})\,s + (10^{-20})\,s^2 .$$

Quadratic formula for the pole magnitudes $\omega_p$ (roots at $s = -\omega_p$):

$$\omega_p = \frac{1.02\times10^{-9} \mp \sqrt{(1.02\times10^{-9})^2 - 4\times10^{-20}}}{2\times10^{-20}} = \frac{1.02\times10^{-9} \mp 1.0002\times10^{-9}}{2\times10^{-20}}\ \mathrm{rad/s},$$

$$\omega_{p1} = 0.99\times10^{9}\ \mathrm{rad/s}, \qquad \omega_{p3} = 1.01\times10^{11}\ \mathrm{rad/s}.$$

Hence

$$T(s) = \frac{20}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_X}\right)\left(1 + \dfrac{s}{\omega_{p3}}\right)} .$$

$\omega_{p1}$ comes from $C_A$ charged through $R_F$ (dominant pole), $\omega_{p3} \approx g_{m2}/C_Y$ from the follower output. Compared with $R_D = 1$ kΩ, the X pole has moved *down* from $10^{10}$ to $5\times10^9$ rad/s, now only 5 times above the dominant pole.

### Step 6 — Gain-crossover frequency

We need

$$\sqrt{1 + (\omega_u/\omega_{p1})^2}\;\sqrt{1 + (\omega_u/\omega_X)^2}\;\sqrt{1 + (\omega_u/\omega_{p3})^2} = 20 .$$

**First estimate.** With $\sqrt{1 + (\omega/\omega_{p1})^2} \approx \omega/\omega_{p1}$ and $\omega_{p3}$ neglected, $(\omega/\omega_{p1})\sqrt{1 + (\omega/\omega_X)^2} = 20$ gives roughly $9.3\times10^9$ rad/s. Refine with the exact magnitude:

| $\omega$ (rad/s) | $\sqrt{1 + (\omega/\omega_{p1})^2}$ | $\sqrt{1 + (\omega/\omega_X)^2}$ | $\sqrt{1 + (\omega/\omega_{p3})^2}$ | $\lvert T\rvert$ |
|---|---|---|---|---|
| $8.0\times10^9$ | 8.142 | 1.887 | 1.0031 | 1.30 |
| $9.0\times10^9$ | 9.146 | 2.059 | 1.0040 | 1.06 |
| $9.29\times10^9$ | 9.437 | 2.110 | 1.0042 | 1.00 |
| $9.5\times10^9$ | 9.648 | 2.147 | 1.0044 | 0.96 |

So $\omega_u \approx 9.29\times10^9$ rad/s ($f_u \approx 1.48$ GHz).

### Step 7 — Phase at crossover and phase margin

$$
\begin{aligned}
\tan^{-1}\frac{9.29\times10^9}{0.99\times10^9} &= \tan^{-1}(9.38) = 83.9°,\\
\tan^{-1}\frac{9.29\times10^9}{5\times10^{9}} &= \tan^{-1}(1.858) = 61.7°,\\
\tan^{-1}\frac{9.29\times10^9}{1.01\times10^{11}} &= \tan^{-1}(0.092) = 5.3°,\\
\angle T(j\omega_u) &= -(83.9° + 61.7° + 5.3°) = -150.9° .
\end{aligned}
$$

$$\mathrm{PM} = 180° - 150.9° = 29.1° .$$

**Why the margin collapsed.** Doubling $R_D$ does two harmful things at once: it doubles the loop gain (pushing the crossover up), and it halves the X pole frequency (so that pole is now *below* the crossover and contributes 62° instead of 38°). With $R_D = 1$ kΩ the same circuit has PM ≈ 55°. A transimpedance amplifier with only 29° of margin would show strong peaking and ringing.

### Result

$$T(s) = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]}, \qquad T_0 = 20,$$

with poles at $0.99\times10^9$, $5\times10^9$ and $1.01\times10^{11}$ rad/s. The crossover is at $\omega_u \approx 9.3\times10^9$ rad/s, where the phase is $-150.9°$:

$$\mathrm{PM} \approx 29° .$$

**Common mistake.** Concluding that a larger $R_D$ improves stability (or leaves it unchanged). A larger $R_D$ raises the loop gain *and* lowers the pole at X, so both effects reduce the phase margin: from about 55° at 1 kΩ to about 29° at 2 kΩ.

**Common mistake.** Ignoring the follower pole $g_{m2}/C_Y$. It costs about 5° at this crossover; without it one gets about 34°.

**Common mistake.** Using a wrong loop gain such as $g_{m1}R_F$ or $R_F/R_D$, or omitting the $R_F$–$C_A$ pole. Only the CS stage has gain around the loop ($T_0 = g_{m1}R_D = 20$), and the $R_F$–$C_A$ network sets the dominant pole; without that pole the analysis would predict a margin of about 56°, a completely wrong picture of this circuit.
