# Detailed solution - R482

**Approach.** Derive the loop transmission $T(s)$ by breaking the loop at node X (the gate of $M_2$), then examine how $C_A$ moves its poles. $C_A$, charged through $R_F$, sets the *dominant* pole, so increasing it lowers the crossover and *raises* the phase margin (dominant-pole compensation). The 45° requirement therefore sets a *minimum* $C_A$, not a maximum.

### Step 1 — Opening the loop

Set $I_{in} = 0$ (an open circuit). The gate of $M_2$ draws no current, so the wire between X and that gate can be cut without changing the load at X. Apply a test voltage $V_t$ to the gate of $M_2$ and find the returned $V_X$; the loop transmission is $T = -V_X/V_t$.

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

**KCL at X:** $V_X = -g_{m1}R_DV_A/(1 + sR_DC_X)$. Hence

$$T(s) = \frac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]} .$$

**Fixed quantities** ($g_{m1} = g_{m2} = 10$ mS, $C_X = C_Y = 100$ fF):

$$
\begin{aligned}
T_0 &= g_{m1}R_D = (10\ \mathrm{mS})(1\ \mathrm{k}\Omega) = 10,\\
\omega_X &= \frac{1}{R_DC_X} = \frac{1}{(1\ \mathrm{k}\Omega)(100\ \mathrm{fF})} = 10^{10}\ \mathrm{rad/s},\\
\tau_Y &= \frac{C_Y}{g_{m2}} = (100\ \mathrm{fF})(100\ \Omega) = 10\ \mathrm{ps}.
\end{aligned}
$$

### Step 3 — Where $C_A$ appears: the dominant pole

The bracket is $D(s) = 1 + \left[\tau_Y + C_A(R_F + 1/g_{m2})\right]s + \tau_YR_FC_A\,s^2 = (1 + s/\omega_{p1})(1 + s/\omega_{p3})$. For realistic $C_A$ (tens of fF and up), $R_FC_A \gg \tau_Y$ and the roots are widely separated:

$$\omega_{p1} \approx \frac{1}{(R_F + 1/g_{m2})\,C_A + C_Y/g_{m2}}, \qquad \omega_{p3} \approx \left(1 + \frac{1}{g_{m2}R_F}\right)\frac{g_{m2}}{C_Y} = 1.01\times10^{11}\ \mathrm{rad/s}.$$

- $\omega_{p1}$, from $C_A$ charged through $R_F$ (plus the follower's $1/g_{m2}$), is the **dominant** pole and is inversely proportional to $C_A$.
- $\omega_X = 10^{10}$ rad/s and $\omega_{p3} \approx 1.01\times10^{11}$ rad/s do **not** depend on $C_A$.

**At the given value $C_A = 100$ fF:** $\omega_{p1} = 0.99\times10^9$ rad/s, the crossover is at $\omega_u = 7.74\times10^9$ rad/s, and the phase there is $-(82.7° + 37.7° + 4.4°) = -124.8°$, so PM = 55.2°.

### Step 4 — Increasing $C_A$ improves the phase margin

A larger $C_A$ lowers $\omega_{p1}$, and since $T_0\,\omega_{p1}$ is roughly the loop's gain-bandwidth, the crossover moves down with it, away from the fixed non-dominant poles at $10^{10}$ and $1.01\times10^{11}$ rad/s, which then contribute less phase. Exact values from $T(s)$:

| $C_A$ | 100 fF | 150 fF | 200 fF | 500 fF | 1 pF | 10 pF |
|---|---|---|---|---|---|---|
| $\omega_u$ (rad/s) | $7.7\times10^9$ | $5.7\times10^9$ | $4.5\times10^9$ | $1.9\times10^9$ | $9.8\times10^8$ | $9.9\times10^7$ |
| PM | 55.2° | 63.8° | 69.6° | 83.8° | 89.6° | 95.1° |

**Large-$C_A$ limit.** When $\omega_u \ll \omega_X$ only the dominant pole matters: $|T| = 1$ at $\omega_u = \omega_{p1}\sqrt{T_0^2 - 1}$, and

$$\mathrm{PM} \to 180° - \tan^{-1}\sqrt{T_0^2 - 1} = 180° - \tan^{-1}\sqrt{99} = 180° - 84.3° = 95.7° .$$

(It exceeds 90° because with a loop gain of only 10 the dominant pole has not yet reached its full 90° at crossover.)

So **no finite maximum** exists: every $C_A$ above a certain value meets the 45° requirement, and a larger $C_A$ only helps stability (at the cost of bandwidth).

### Step 5 — The real constraint: a minimum $C_A$

Decreasing $C_A$ raises $\omega_{p1}$ and moves the crossover up toward $\omega_X$, so the margin shrinks. PM = 45° requires a total phase of $-135°$ at $\omega_u$ together with $|T(j\omega_u)| = 1$. Guess $\omega_u$, let the phase condition give $\omega_{p1}$, and check the magnitude:

| guess $\omega_u$ (rad/s) | $\tan^{-1}\frac{\omega_u}{\omega_X}$ | $\tan^{-1}\frac{\omega_u}{\omega_{p3}}$ | left for $\omega_{p1}$ | $\omega_{p1}$ (rad/s) | $\lvert T\rvert$ |
|---|---|---|---|---|---|
| $1.05\times10^{10}$ | 46.40° | 5.94° | 82.67° | $1.35\times10^9$ | 0.88 |
| $1.08\times10^{10}$ | 47.20° | 6.10° | 81.69° | $1.58\times10^9$ | 0.98 |
| $1.0875\times10^{10}$ | 47.40° | 6.15° | 81.45° | $1.63\times10^9$ | 1.00 |

Here $\omega_{p1} = \omega_u/\tan(\text{share})$ and $|T| = 10/\left[\sqrt{1 + (\omega_u/\omega_{p1})^2}\sqrt{1 + (\omega_u/\omega_X)^2}\sqrt{1 + (\omega_u/\omega_{p3})^2}\right]$; for the last row, $10/(6.730\times1.4774\times1.0058) = 10/10.00 = 1.00$. ✓

So PM = 45° when $\omega_{p1} = 1.634\times10^9$ rad/s (crossover $\approx 1.09\times10^{10}$ rad/s).

**Convert to $C_A$.** Simple estimate from $\omega_{p1} \approx 1/[(R_F + 1/g_{m2})C_A + \tau_Y]$:

$$C_A \approx \frac{1/\omega_{p1} - \tau_Y}{R_F + 1/g_{m2}} = \frac{612\ \mathrm{ps} - 10\ \mathrm{ps}}{10.1\ \mathrm{k}\Omega} = 59.6\ \mathrm{fF}.$$

Exactly, $s = -\omega_{p1}$ must be a root of $D(s)$: $1 - \omega_{p1}\left[\tau_Y + C_A(R_F + 1/g_{m2})\right] + \omega_{p1}^2\tau_YR_FC_A = 0$, which is linear in $C_A$:

$$
\begin{aligned}
C_A &= \frac{1 - \omega_{p1}\tau_Y}{\omega_{p1}(R_F + 1/g_{m2}) - \omega_{p1}^2\tau_YR_F}\\
&= \frac{1 - 0.0163}{1.650\times10^{13} - 0.027\times10^{13}}\ \mathrm{F} = \frac{0.9837}{1.624\times10^{13}}\ \mathrm{F} = 60.6\ \mathrm{fF}.
\end{aligned}
$$

So PM ≥ 45° requires $C_A \gtrsim 61$ fF (with the other capacitances at 100 fF).

### Step 6 — The unrealistic low-$C_A$ branch

Strictly, the PM is not monotonic over *all* $C_A$. Below about 61 fF it keeps falling (21.6° at 10 fF) to a minimum of about 19° near 5 fF. For $C_A$ of only a few fF the A-node pole moves *above* the crossover, leaving the poles at $10^{10}$ rad/s and about $10^{11}$ rad/s, whose PM is 59° (at $C_A = 0$); PM passes 45° again at $C_A \approx 0.36$ fF (crossover $\approx 7.6\times10^{10}$ rad/s).

Thus PM ≥ 45° for $C_A \le 0.36$ fF **or** $C_A \ge 61$ fF. The 0.36-fF value only closes an unrealistic branch (far smaller than even the gate capacitance of $M_1$); it is not a maximum of the useful range, because every $C_A \ge 61$ fF also satisfies the requirement.

### Result

There is **no finite maximum** for $C_A$. $C_A$ sets the dominant pole of the loop ($\approx 1/R_FC_A$), so increasing it only improves the phase margin: 55° at 100 fF, about 70° at 200 fF, approaching about 96° for very large $C_A$. The 45° specification instead imposes a **minimum**:

$$C_A \gtrsim 61\ \mathrm{fF}\quad(\text{PM} = 45°,\ \omega_u \approx 1.09\times10^{10}\ \mathrm{rad/s}).$$

(An isolated window $C_A \lesssim 0.36$ fF also gives PM ≥ 45°, but it is physically unrealistic.)

**Common mistake.** Presenting about 61 fF as "the maximum $C_A$". At 61 fF the margin is exactly 45°, but for *larger* $C_A$ it is higher, so 61 fF is the smallest allowed value.

**Common mistake.** Treating $C_A$ like $C_Y$ or $C_X$, i.e. assuming that any added capacitance creates a harmful non-dominant pole. $C_A$ controls the *dominant* pole, and lowering the dominant pole is exactly how dominant-pole compensation increases the phase margin.

**Common mistake.** Reporting 0.36 fF as the maximum without noting that every $C_A \ge 61$ fF also meets the specification: the set of acceptable values is unbounded above.
