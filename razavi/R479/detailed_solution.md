# Detailed solution - R479

**Approach.** Break the feedback loop at node X (the gate of $M_2$), inject a test voltage there, follow it around the loop through the source follower $M_2$, the feedback network $R_F$–$C_A$ and the common-source stage $M_1$, and obtain the loop transmission $T(s)$. Then find its poles, the frequency at which $|T| = 1$, and the phase there.

### Step 1 — The circuit and where to break the loop

Reading the figure:

- $M_1$ is a common-source (CS) stage: gate at node A, source grounded, drain at node X with load $R_D$ to $V_{DD}$ and capacitance $C_X$ to ground.
- $M_2$ is a source follower: gate at X, drain at $V_{DD}$, source at the output node Y, biased by an ideal current source. $C_Y$ loads Y.
- $R_F$ connects the output Y back to the input node A, which also has $C_A$ to ground. The input current $I_{in}$ is injected into A.

For the loop analysis the input is set to zero: an ideal current source becomes an **open circuit**.

**Why break at X.** The gate of $M_2$ draws no current (no gate capacitance is given). So if the wire between node X and the gate of $M_2$ is cut, node X still sees exactly the same load ($R_D \parallel C_X$), and the gate of $M_2$ can be driven by an ideal test voltage $V_t$ without disturbing anything. The loop transmission is

$$T(s) = -\frac{V_X}{V_t},$$

where the minus sign is chosen so that $T > 0$ for negative feedback.

### Step 2 — Small-signal model of the opened loop

With $\lambda = \gamma = 0$, each transistor is just a voltage-controlled current source (no $r_O$, no body effect), and $V_{DD}$ is an AC ground.

- **$M_2$**: a current $g_{m2}(V_t - V_Y)$ flows from $V_{DD}$ into node Y.
- **Node Y**: capacitance $C_Y$ to ground, and $R_F$ to node A. The bias current source is ideal and carries no signal current.
- **Node A**: capacitance $C_A$ to ground; the gate of $M_1$ draws no current.
- **$M_1$**: a current $g_{m1}V_A$ is pulled out of node X to ground.
- **Node X**: $R_D$ and $C_X$ to (AC) ground.

<!-- diagram: diagram-01.cir -->

Time constants that will appear (with $g_{m1} = g_{m2} = 1/(100\ \Omega) = 10$ mS):

$$
\begin{aligned}
R_FC_A &= (10\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 1\ \mathrm{ns},\\
R_DC_X &= (1\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 0.1\ \mathrm{ns},\\
C_Y/g_{m2} &= (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps},\\
C_A/g_{m2} &= (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps}.
\end{aligned}
$$

### Step 3 — From $V_t$ to node A (follower plus feedback network)

**KCL at node A.** The current arriving through $R_F$ flows into $C_A$:

$$
\begin{aligned}
\frac{V_Y - V_A}{R_F} &= sC_AV_A\\
V_Y &= V_A(1 + sR_FC_A).
\end{aligned}
$$

**KCL at node Y.** The current delivered by $M_2$ splits between $C_Y$ and $R_F$:

$$g_{m2}(V_t - V_Y) = sC_YV_Y + \frac{V_Y - V_A}{R_F} = sC_YV_Y + sC_AV_A .$$

Substitute $V_Y = V_A(1 + sR_FC_A)$:

$$
\begin{aligned}
g_{m2}V_t &= (g_{m2} + sC_Y)V_Y + sC_AV_A\\
&= V_A\left[(g_{m2} + sC_Y)(1 + sR_FC_A) + sC_A\right].
\end{aligned}
$$

Divide by $g_{m2}$:

$$\frac{V_A}{V_t} = \frac{1}{\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}} .$$

At low frequency this equals 1: the follower copies $V_t$ to Y and, with no DC current in $R_F$, A sits at the same voltage.

### Step 4 — From node A back to X, and the loop transmission

**KCL at node X.** The current $g_{m1}V_A$ is pulled out of X through the impedance $R_D \parallel (1/sC_X)$:

$$V_X = -g_{m1}V_A\left(R_D \parallel \frac{1}{sC_X}\right) = -\frac{g_{m1}R_D}{1 + sR_DC_X}V_A .$$

Multiply by $V_A/V_t$ from Step 3:

$$\frac{V_X}{V_t} = -\frac{g_{m1}R_D}{(1 + sR_DC_X)\left[\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}\right]} .$$

There is one inversion (the CS stage), so the feedback is negative and

$$T(s) = -\frac{V_X}{V_t} = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[\left(1 + s\dfrac{C_Y}{g_{m2}}\right)(1 + sR_FC_A) + s\dfrac{C_A}{g_{m2}}\right]} .$$

**Low-frequency loop gain:**

$$T_0 = g_{m1}R_D = (10\ \mathrm{mS})(1\ \mathrm{k}\Omega) = 10 .$$

### Step 5 — The poles

**Pole at X:**

$$\omega_X = \frac{1}{R_DC_X} = \frac{1}{0.1\ \mathrm{ns}} = 1.0\times10^{10}\ \mathrm{rad/s}.$$

**The two poles of the bracket.** Expand it:

$$
\begin{aligned}
D(s) &= 1 + s\left(\frac{C_Y}{g_{m2}} + R_FC_A + \frac{C_A}{g_{m2}}\right) + s^2\frac{C_Y}{g_{m2}}R_FC_A\\
&= 1 + (1.02\times10^{-9})\,s + (10^{-20})\,s^2 .
\end{aligned}
$$

Its roots $s = -\omega_p$ follow from the quadratic formula:

$$\omega_p = \frac{1.02\times10^{-9} \mp \sqrt{(1.02\times10^{-9})^2 - 4\times10^{-20}}}{2\times10^{-20}} = \frac{1.02\times10^{-9} \mp 1.0002\times10^{-9}}{2\times10^{-20}}\ \mathrm{rad/s},$$

$$\omega_{p1} = 0.99\times10^{9}\ \mathrm{rad/s}, \qquad \omega_{p3} = 1.01\times10^{11}\ \mathrm{rad/s}.$$

So $D(s) = (1 + s/\omega_{p1})(1 + s/\omega_{p3})$ exactly, and

$$T(s) = \frac{10}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_X}\right)\left(1 + \dfrac{s}{\omega_{p3}}\right)} .$$

**Interpretation.** $\omega_{p1} \approx 1/[(R_F + 1/g_{m2})C_A]$ is the feedback network: $C_A$ charged through $R_F$ from the low-impedance follower output. $\omega_{p3} \approx g_{m2}/C_Y$ is the follower's output pole. The dominant pole is $\omega_{p1}$, a decade below $\omega_X$.

### Step 6 — Gain-crossover frequency

We need $|T(j\omega_u)| = 1$:

$$\sqrt{1 + (\omega_u/\omega_{p1})^2}\;\sqrt{1 + (\omega_u/\omega_X)^2}\;\sqrt{1 + (\omega_u/\omega_{p3})^2} = 10 .$$

**First estimate.** Since $\omega_u \gg \omega_{p1}$, $\sqrt{1 + (\omega/\omega_{p1})^2} \approx \omega/\omega_{p1}$; neglecting $\omega_{p3}$, $(\omega/\omega_{p1})\sqrt{1 + (\omega/\omega_X)^2} = 10$ gives $\omega$ of roughly $7.7\times10^9$ rad/s. Refine by evaluating the exact magnitude:

| $\omega$ (rad/s) | $\sqrt{1 + (\omega/\omega_{p1})^2}$ | $\sqrt{1 + (\omega/\omega_X)^2}$ | $\sqrt{1 + (\omega/\omega_{p3})^2}$ | $\lvert T\rvert$ |
|---|---|---|---|---|
| $7.0\times10^9$ | 7.141 | 1.221 | 1.0024 | 1.14 |
| $7.5\times10^9$ | 7.642 | 1.250 | 1.0028 | 1.04 |
| $7.74\times10^9$ | 7.882 | 1.265 | 1.0029 | 1.00 |
| $8.0\times10^9$ | 8.142 | 1.281 | 1.0031 | 0.96 |

So $\omega_u \approx 7.74\times10^9$ rad/s ($f_u = \omega_u/2\pi \approx 1.23$ GHz).

### Step 7 — Phase at crossover and phase margin

Each pole contributes $-\tan^{-1}(\omega_u/\omega_p)$:

$$
\begin{aligned}
\tan^{-1}\frac{7.74\times10^9}{0.99\times10^9} &= \tan^{-1}(7.82) = 82.7°,\\
\tan^{-1}\frac{7.74\times10^9}{1.0\times10^{10}} &= \tan^{-1}(0.774) = 37.7°,\\
\tan^{-1}\frac{7.74\times10^9}{1.01\times10^{11}} &= \tan^{-1}(0.0766) = 4.4°,\\
\angle T(j\omega_u) &= -(82.7° + 37.7° + 4.4°) = -124.8° .
\end{aligned}
$$

The *phase margin* is the distance from $-180°$:

$$\mathrm{PM} = 180° - 124.8° = 55.2° .$$

The follower pole is a factor of 13 above the crossover, yet it still removes about 4.4° of margin; without it one would get about 59.5°.

### Result

$$T(s) = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]}, \qquad T_0 = g_{m1}R_D = 10,$$

with poles at $0.99\times10^9$, $1.0\times10^{10}$ and $1.01\times10^{11}$ rad/s. The gain crossover is at $\omega_u \approx 7.7\times10^9$ rad/s (≈ 1.23 GHz), where the phase is $-124.8°$, so

$$\mathrm{PM} \approx 55° .$$

**Common mistake.** Using the wrong low-frequency loop gain, such as $g_{m1}R_F = 100$, or $R_F/R_D$ (which happens to equal 10 here but is not the loop gain). Around the loop the follower and $R_F$ have a DC gain of 1 (no DC current flows in $R_F$), so only the CS stage provides gain: $T_0 = g_{m1}R_D$.

**Common mistake.** Omitting the pole formed by $R_F$ and $C_A$. It is the *dominant* pole of the loop ($\approx 1$ Grad/s). Without it the computed crossover moves up tenfold, to about $8\times10^{10}$ rad/s, beyond the X pole; the analysis then describes a different loop, and any agreement of the resulting margin with 55° is a coincidence of the numbers.

**Common mistake.** Dropping the follower pole $g_{m2}/C_Y$ because it is "far away". It lies only about 13 times above the crossover and costs about 4°, giving 59.5° instead of 55°. Also note the sign: the loop contains one inversion, so the feedback is negative; treating it as positive feedback is wrong.
