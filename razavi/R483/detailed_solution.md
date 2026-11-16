# Detailed solution - R483

**Approach.** Derive the loop transmission $T(s)$ by breaking the loop at node X (the gate of $M_2$). $C_X$ appears only in the pole $1/(R_DC_X)$, the first *non-dominant* pole. Increasing $C_X$ pulls this pole down toward the gain crossover and erodes the phase margin; find the pole position, and hence $C_X$, at which the margin has fallen to 45°.

### Step 1 — Opening the loop

Set $I_{in} = 0$ (open circuit). The gate of $M_2$ draws no current, so cutting the wire between X and that gate leaves the load at X ($R_D \parallel C_X$) unchanged. Apply a test voltage $V_t$ at the gate of $M_2$ and compute the returned $V_X$; the loop transmission is $T = -V_X/V_t$.

With $\lambda = \gamma = 0$ and $V_{DD}$ at ac ground: $M_2$ injects $g_{m2}(V_t - V_Y)$ into Y; Y has $C_Y$ to ground and $R_F$ to A; A has $C_A$ to ground; $M_1$ draws $g_{m1}V_A$ from X; X has $R_D \parallel C_X$ to ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — Loop transmission

**KCL at A:** $(V_Y - V_A)/R_F = sC_AV_A$, so $V_Y = V_A(1 + sR_FC_A)$.

**KCL at Y:** $g_{m2}(V_t - V_Y) = sC_YV_Y + sC_AV_A$. Substituting $V_Y$:

$$
\begin{aligned}
g_{m2}V_t &= (g_{m2} + sC_Y)(1 + sR_FC_A)V_A + sC_AV_A\\
\frac{V_A}{V_t} &= \frac{1}{(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}} .
\end{aligned}
$$

**KCL at X:** $V_X = -g_{m1}V_A\,(R_D \parallel 1/sC_X) = -g_{m1}R_DV_A/(1 + sR_DC_X)$. Hence

$$T(s) = -\frac{V_X}{V_t} = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]} .$$

### Step 3 — Poles, and how $C_X$ enters

**Loop gain:** $T_0 = g_{m1}R_D = (10\ \mathrm{mS})(1\ \mathrm{k}\Omega) = 10$.

**The bracket** does not contain $C_X$. With $C_Y/g_{m2} = 10$ ps, $R_FC_A = (10\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 1$ ns and $C_A/g_{m2} = 10$ ps:

$$D(s) = 1 + (1.02\times10^{-9})\,s + (10^{-20})\,s^2 ,$$

with roots at $s = -\omega_p$:

$$\omega_p = \frac{1.02\times10^{-9} \mp \sqrt{1.0404\times10^{-18} - 4\times10^{-20}}}{2\times10^{-20}} = \frac{1.02\times10^{-9} \mp 1.0002\times10^{-9}}{2\times10^{-20}},$$

$$\omega_{p1} = 0.99\times10^9\ \mathrm{rad/s}\ \ (\text{dominant}, \approx 1/R_FC_A), \qquad \omega_{p3} = 1.01\times10^{11}\ \mathrm{rad/s}\ \ (\approx g_{m2}/C_Y).$$

**The pole at X** is the only one that depends on $C_X$:

$$\omega_X = \frac{1}{R_DC_X} = 10^{10}\ \mathrm{rad/s}\ \text{ for } C_X = 100\ \mathrm{fF}.$$

So, exactly,

$$T(s) = \frac{10}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_X}\right)\left(1 + \dfrac{s}{\omega_{p3}}\right)} .$$

At $C_X = 100$ fF the crossover is $7.74\times10^9$ rad/s and PM = 55.2°. A larger $C_X$ lowers $\omega_X$ toward the crossover and the margin decreases; the maximum $C_X$ gives PM = 45°.

### Step 4 — Required position of the X pole

PM = 45° means a total phase of $-135°$ at the crossover $\omega_u$:

$$\tan^{-1}\frac{\omega_u}{\omega_{p1}} + \tan^{-1}\frac{\omega_u}{\omega_X} + \tan^{-1}\frac{\omega_u}{\omega_{p3}} = 135°,$$

$$\sqrt{1 + (\omega_u/\omega_{p1})^2}\,\sqrt{1 + (\omega_u/\omega_X)^2}\,\sqrt{1 + (\omega_u/\omega_{p3})^2} = 10 .$$

Solve for $\omega_u$ and $\omega_X$ by iteration: guess $\omega_u$, get $\omega_X$ from the phase condition, then check the magnitude.

**Guess $\omega_u = 6.0\times10^9$ rad/s.**

$$
\begin{aligned}
\tan^{-1}(6.0/0.99) + \tan^{-1}(6.0/101) &= 80.63° + 3.40° = 84.03°,\\
\text{share left for } \omega_X &= 135° - 84.03° = 50.97°,\\
\omega_X &= \frac{6.0\times10^9}{\tan50.97°} = \frac{6.0\times10^9}{1.2336} = 4.86\times10^9\ \mathrm{rad/s},\\
|T| &= \frac{10}{6.143\times1.588\times1.0018} = \frac{10}{9.77} = 1.02 .
\end{aligned}
$$

$|T|$ is still above 1, so the crossover is slightly higher.

**Guess $\omega_u = 6.2\times10^9$ rad/s.**

$$
\begin{aligned}
\tan^{-1}(6.2/0.99) + \tan^{-1}(6.2/101) &= 80.93° + 3.51° = 84.44°,\\
\text{share left for } \omega_X &= 135° - 84.44° = 50.56°,\\
\omega_X &= \frac{6.2\times10^9}{\tan50.56°} = \frac{6.2\times10^9}{1.2157} = 5.10\times10^9\ \mathrm{rad/s},\\
|T| &= \frac{10}{6.342\times1.574\times1.0019} = \frac{10}{10.00} = 1.00 .\ \checkmark
\end{aligned}
$$

So the X pole may come down to $\omega_X \approx 5.10\times10^9$ rad/s, below the crossover of $6.2\times10^9$ rad/s.

### Step 5 — Convert the pole into $C_X$

$$C_X = \frac{1}{R_D\,\omega_X} = \frac{1}{(1\ \mathrm{k}\Omega)(5.10\times10^9\ \mathrm{rad/s})} = 1.96\times10^{-13}\ \mathrm{F} = 196\ \mathrm{fF} \approx 0.20\ \mathrm{pF}.$$

The other two poles do not depend on $C_X$, so this is exact within the model (rounding the poles to $10^9$ and $10^{11}$ rad/s gives about 193 fF).

### Step 6 — Trend over a wider range

Phase margin from the full $T(s)$:

| $C_X$ | 100 fF | 150 fF | 196 fF | 300 fF | 500 fF | 1 pF | 2 pF | 4.2 pF | 10 pF |
|---|---|---|---|---|---|---|---|---|---|
| $\omega_X$ (rad/s) | $10^{10}$ | $6.7\times10^9$ | $5.1\times10^9$ | $3.3\times10^9$ | $2\times10^9$ | $10^9$ | $5\times10^8$ | $2.4\times10^8$ | $10^8$ |
| PM | 55.2° | 48.7° | 45.0° | 40.3° | 36.7° | 35.2° | 37.7° | 45° | 58.7° |

Starting from 100 fF, the margin falls monotonically and crosses 45° at about 0.2 pF; that is the answer. It reaches a minimum of about 35° near 0.9–1 pF, where $\omega_X$ coincides with the $R_F$–$C_A$ pole (coincident poles are the worst case). For $C_X \gtrsim 4.2$ pF node X becomes the dominant pole and the margin recovers above 45°, but between about 0.2 pF and 4.2 pF it is below 45°, so that region does not extend the allowed range from 100 fF.

### Result

$$C_{X,max} \approx 0.20\ \mathrm{pF}\quad(196\ \mathrm{fF}),$$

where the pole at X has dropped to $1/(R_DC_X) \approx 5.1\times10^9$ rad/s and the gain crossover is at $\approx 6.2\times10^9$ rad/s, giving PM = 45° (versus 55° at $C_X = 100$ fF). (PM ≥ 45° is regained only for $C_X \gtrsim 4.2$ pF, where X becomes the dominant pole.)

**Common mistake.** Assuming that extra capacitance "compensates" the loop and improves the margin. Near 100 fF the dominant pole is set by $R_F$ and $C_A$; $C_X$ controls a non-dominant pole, and moving it toward the crossover reduces the phase margin.

**Common mistake.** Using a loop gain whose DC value is not $g_{m1}R_D = 10$ (such as a return ratio taken with respect to $R_F$, or the characteristic polynomial divided by an arbitrary constant). The crossover frequency, and hence the $C_X$ limit, depends directly on $T_0$.

**Common mistake.** Dropping the follower pole $g_{m2}/C_Y$ because it lies "far away" at $10^{11}$ rad/s. It still contributes about 3.5° of lag at the crossover; without it one finds $\omega_X \approx 3.9\times10^9$ rad/s and $C_X \approx 0.26$ pF, about 30 % too large.
