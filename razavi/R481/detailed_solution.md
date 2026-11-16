# Detailed solution - R481

**Approach.** Derive the loop transmission $T(s)$ by breaking the loop at node X (the gate of $M_2$). It has a dominant pole set by $R_F$ and $C_A$, a pole at X, and an output (follower) pole near $g_{m2}/C_Y$. Increasing $C_Y$ pulls that output pole down toward the gain crossover and erodes the phase margin; we find the pole position, and hence the $C_Y$, at which the margin has dropped to exactly 45°.

### Step 1 — Opening the loop

Circuit: $M_1$ is a common-source (CS) stage from node A to node X (load $R_D$, capacitance $C_X$); $M_2$ is a source follower from X to the output Y (ideal bias current source, capacitance $C_Y$); $R_F$ feeds Y back to A, which has $C_A$ to ground. For loop analysis the input current source $I_{in}$ is set to zero (open circuit).

The gate of $M_2$ draws no current, so cutting the connection between X and the gate of $M_2$ does not change the load at X. Apply a test voltage $V_t$ to the gate of $M_2$ and compute the voltage $V_X$ returned by the loop. The loop transmission is $T = -V_X/V_t$.

**Small-signal model** ($\lambda = \gamma = 0$, so no $r_O$ and no body effect; $V_{DD}$ is AC ground): $M_2$ injects $g_{m2}(V_t - V_Y)$ into Y; Y has $C_Y$ to ground and $R_F$ to A; A has $C_A$ to ground; $M_1$ draws $g_{m1}V_A$ out of X; X has $R_D \parallel C_X$ to ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — Loop transmission

**KCL at A** (the current in $R_F$ charges $C_A$):

$$\frac{V_Y - V_A}{R_F} = sC_AV_A \quad\Longrightarrow\quad V_Y = V_A(1 + sR_FC_A).$$

**KCL at Y** (the follower current feeds $C_Y$ and $R_F$):

$$g_{m2}(V_t - V_Y) = sC_YV_Y + sC_AV_A .$$

Substitute $V_Y$:

$$
\begin{aligned}
g_{m2}V_t &= (g_{m2} + sC_Y)(1 + sR_FC_A)V_A + sC_AV_A\\
\frac{V_A}{V_t} &= \frac{1}{(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}} .
\end{aligned}
$$

**KCL at X:** $V_X = -g_{m1}V_A\,(R_D \parallel 1/sC_X) = -g_{m1}R_DV_A/(1 + sR_DC_X)$. Therefore

$$T(s) = -\frac{V_X}{V_t} = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]} .$$

**Numbers** (with $g_{m1} = g_{m2} = 10$ mS):

$$
\begin{aligned}
T_0 &= g_{m1}R_D = (10\ \mathrm{mS})(1\ \mathrm{k}\Omega) = 10,\\
R_FC_A &= (10\ \mathrm{k}\Omega)(100\ \mathrm{fF}) = 1\ \mathrm{ns},\\
C_A/g_{m2} &= (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps},\\
\omega_X &= \frac{1}{R_DC_X} = \frac{1}{(1\ \mathrm{k}\Omega)(100\ \mathrm{fF})} = 10^{10}\ \mathrm{rad/s}.
\end{aligned}
$$

### Step 3 — How $C_Y$ enters: the two poles of the bracket

Write $\tau_Y = C_Y/g_{m2}$, $\tau_F = R_FC_A = 1$ ns and $\tau_A = C_A/g_{m2} = 10$ ps. The bracket is

$$D(s) = 1 + (\tau_Y + \tau_F + \tau_A)\,s + \tau_Y\tau_F\,s^2 = \left(1 + \frac{s}{\omega_{p1}}\right)\left(1 + \frac{s}{\omega_{p3}}\right).$$

As long as $\tau_Y \ll \tau_F$ the roots are widely separated:

- $\omega_{p1} \approx 1/(\tau_F + \tau_A + \tau_Y) \approx 0.99\times10^9$ rad/s, the **dominant pole** (almost independent of $C_Y$);
- $\omega_{p3} \approx g_{m2}/C_Y$, the **output pole** of the follower: $C_Y$ driven by the follower's output resistance $1/g_{m2}$.

For $C_Y = 100$ fF, $\omega_{p3} = 1.01\times10^{11}$ rad/s, the crossover is at $7.74\times10^9$ rad/s and PM = 55°. Raising $C_Y$ moves $\omega_{p3}$ down toward the crossover, adding phase lag there, so the margin falls. The largest acceptable $C_Y$ is the one that makes PM exactly 45°.

### Step 4 — Required output-pole frequency

PM = 45° means the total phase at the crossover $\omega_u$ is $-135°$:

$$\tan^{-1}\frac{\omega_u}{\omega_{p1}} + \tan^{-1}\frac{\omega_u}{\omega_X} + \tan^{-1}\frac{\omega_u}{\omega_{p3}} = 135°,$$

together with the magnitude condition

$$\sqrt{1 + (\omega_u/\omega_{p1})^2}\,\sqrt{1 + (\omega_u/\omega_X)^2}\,\sqrt{1 + (\omega_u/\omega_{p3})^2} = 10 .$$

Two unknowns ($\omega_u$, $\omega_{p3}$), two equations. Solve by iteration: guess $\omega_u$, use the phase equation to get $\omega_{p3}$, check the magnitude.

**Iteration 1: $\omega_u = 7.74\times10^9$ rad/s** (the crossover for 100 fF).

$$
\begin{aligned}
\tan^{-1}(7.74/0.99) + \tan^{-1}(0.774) &= 82.71° + 37.74° = 120.45°,\\
\text{share left for } \omega_{p3} &= 135° - 120.45° = 14.55°,\\
\omega_{p3} &= \frac{7.74\times10^9}{\tan14.55°} = \frac{7.74\times10^9}{0.2595} = 2.98\times10^{10}\ \mathrm{rad/s},\\
|T| &= \frac{10}{7.882\times1.2645\times1.0331} = \frac{10}{10.30} = 0.97 .
\end{aligned}
$$

$|T| < 1$, so the true crossover is slightly lower (the extra pole has trimmed the magnitude).

**Iteration 2: $\omega_u = 7.55\times10^9$ rad/s.**

$$
\begin{aligned}
\tan^{-1}(7.55/0.99) + \tan^{-1}(0.755) &= 82.53° + 37.05° = 119.58°,\\
\text{share left for } \omega_{p3} &= 135° - 119.58° = 15.42°,\\
\omega_{p3} &= \frac{7.55\times10^9}{\tan15.42°} = \frac{7.55\times10^9}{0.2758} = 2.74\times10^{10}\ \mathrm{rad/s},\\
|T| &= \frac{10}{7.692\times1.2530\times1.0373} = \frac{10}{9.997} = 1.00 .\ \checkmark
\end{aligned}
$$

So the output pole may come down to $\omega_{p3} \approx 2.74\times10^{10}$ rad/s, about 3.6 times above the crossover.

### Step 5 — Convert the pole into $C_Y$

**Simple estimate.** With $\omega_{p3} \approx g_{m2}/C_Y$:

$$C_Y \approx \frac{g_{m2}}{\omega_{p3}} = \frac{10\ \mathrm{mS}}{2.74\times10^{10}\ \mathrm{rad/s}} = 365\ \mathrm{fF}.$$

**Exact.** $s = -\omega_{p3}$ must be a root of $D(s)$:

$$1 - (\tau_Y + \tau_F + \tau_A)\,\omega_{p3} + \tau_Y\tau_F\,\omega_{p3}^2 = 0 .$$

This is linear in $\tau_Y$:

$$
\begin{aligned}
\tau_Y\left(\tau_F\,\omega_{p3}^2 - \omega_{p3}\right) &= (\tau_F + \tau_A)\,\omega_{p3} - 1\\
\tau_Y &= \frac{(1.01\times10^{-9})(2.738\times10^{10}) - 1}{(10^{-9})(2.738\times10^{10})^2 - 2.738\times10^{10}}\ \mathrm{s}\\
&= \frac{27.65 - 1}{7.497\times10^{11} - 0.274\times10^{11}}\ \mathrm{s} = \frac{26.65}{7.223\times10^{11}}\ \mathrm{s} = 36.9\ \mathrm{ps}.
\end{aligned}
$$

$$C_Y = g_{m2}\,\tau_Y = (10\ \mathrm{mS})(36.9\ \mathrm{ps}) = 369\ \mathrm{fF} \approx 0.37\ \mathrm{pF}.$$

### Step 6 — Check the trend (is this really a maximum?)

Phase margin from the full $T(s)$ for several $C_Y$:

| $C_Y$ | 100 fF | 200 fF | 300 fF | 369 fF | 400 fF | 1 pF | 5 pF | 20 pF | 60 pF |
|---|---|---|---|---|---|---|---|---|---|
| PM | 55.2° | 51.1° | 47.4° | 45.0° | 44.0° | 30.6° | 18.9° | 27.8° | 44.6° |

PM falls steadily as $C_Y$ grows from 100 fF, crossing 45° at 369 fF, so every $C_Y$ up to 0.37 pF meets the requirement and slightly more does not. (For enormous $C_Y$, tens of pF, the output pole drops *below* $1/R_FC_A$ and becomes the dominant pole, so the margin recovers and returns to 45° near 61 pF. That is a different, impractical way of compensating the loop and lies outside the range of interest; between 0.37 pF and about 61 pF the margin is below 45°.)

### Result

$$C_{Y,max} \approx 0.37\ \mathrm{pF}\quad(369\ \mathrm{fF}),$$

at which the output pole sits at $\approx 2.74\times10^{10}$ rad/s and the gain crossover at $\approx 7.55\times10^9$ rad/s, giving PM = 45° (compared with 55° for $C_Y = 100$ fF). The simple estimate $\omega_{p3} \approx g_{m2}/C_Y$ gives 365 fF.

**Common mistake.** Taking the output pole as $1/(R_FC_Y)$. The node Y is driven by the source follower, whose output resistance is $1/g_{m2} = 100\ \Omega$, far smaller than $R_F$; the pole is near $g_{m2}/C_Y$. Using $R_F$ would place it 100 times too low and give a $C_Y$ limit far below 0.2 pF.

**Common mistake.** Arguing that a larger $C_Y$ "adds compensation" and therefore improves the margin. In the practical range the dominant pole is set by $R_F$ and $C_A$; $C_Y$ only controls a non-dominant pole, and moving that pole toward the crossover reduces the phase margin.

**Common mistake.** Quoting the high-capacitance 45° point (about 60 pF) as the maximum. For all $C_Y$ between 0.37 pF and about 61 pF the margin is below 45° (as low as 19° near 5 pF), so that point is the start of a second, impractical range, not a maximum.
