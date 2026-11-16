# Detailed solution - R486

**Approach.** Compute the small-signal resistances at node X (high impedance, dominant pole) and node Y (source-follower output, non-dominant pole), and the low-frequency gain $A_0$. In unity-gain feedback the loop gain is $A_0/[(1 + s/\omega_X)(1 + s/\omega_Y)]$. A 60° phase margin requires a total phase of $-120°$ at the crossover; together with $|H| = 1$ this fixes the lowest allowed $\omega_Y = 1/(R_YC_Y)$, i.e. the largest $C_Y$.

### Step 1 — Feedback polarity and small-signal parameters

Call the common source node of $M_1$ and $M_2$ P. Raising the gate of $M_2$ increases its current, so X and Y fall: the gate of $M_2$ is the inverting input, and unity-gain feedback connects Y to it (negative feedback, $\beta = 1$).

With $I_{D1,2,3} = 0.25$ mA, $I_{D4} = I_1 = 0.5$ mA and $W/L = 100$ for all:

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS},\\
g_{m4} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O4} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .
\end{aligned}
$$

### Step 2 — Resistances at X and Y

**Node X** (inputs at ac ground). Upward: $r_{O3}$. Downward: the drain of $M_2$, whose source sees the source of $M_1$ (gate and drain of $M_1$ at ac ground), i.e. $R_S = (1/g_{m1}) \parallel r_{O1} = r_{O1}/(1 + g_{m1}r_{O1})$.

<!-- diagram: diagram-01.cir -->

For a test current $I_t$ into X: $V_P = I_tR_S$, $V_{GS2} = -I_tR_S$, and

$$
\begin{aligned}
I_t &= -g_{m2}I_tR_S + \frac{V_X - I_tR_S}{r_{O2}}\\
V_X &= I_t\left[r_{O2} + (1 + g_{m2}r_{O2})R_S\right] = I_t\,(r_{O2} + r_{O1}) = I_t\cdot 2r_{O2},
\end{aligned}
$$

using $(1 + g_{m2}r_{O2})R_S = r_{O1}$ for identical devices. Hence

$$R_X = 2r_{O2} \parallel r_{O3} = 80\ \mathrm{k}\Omega \parallel 20\ \mathrm{k}\Omega = 16\ \mathrm{k}\Omega .$$

**Node Y** (follower output, ideal $I_1$):

$$R_Y = \frac{1}{g_{m4}} \parallel r_{O4} = 273\ \Omega \parallel 20\ \mathrm{k}\Omega = 269.5\ \Omega .$$

### Step 3 — Gain, dominant pole and gain-bandwidth

Half of the differential input appears across $M_2$ (P is a virtual ground for the short-circuit current), so $G_m = g_{m2}/2 = 1.294$ mS. With the follower gain $A_{v4} = g_{m4}r_{O4}/(1 + g_{m4}r_{O4}) = 73.2/74.2 = 0.987$:

$$A_0 = G_mR_XA_{v4} = (1.294\ \mathrm{mS})(16\ \mathrm{k}\Omega)(0.987) = 20.4 .$$

With $C_X = 0.5$ pF:

$$\omega_X = \frac{1}{R_XC_X} = \frac{1}{(16\ \mathrm{k}\Omega)(0.5\ \mathrm{pF})} = 1.25\times10^8\ \mathrm{rad/s},$$

and $\mathrm{GBW} = A_0\,\omega_X = 20.4\times1.25\times10^8 = 2.55\times10^9$ rad/s. A larger $C_Y$ moves $\omega_Y = 1/(R_YC_Y)$ down toward the crossover and reduces the phase margin.

### Step 4 — Conditions for PM = 60°

With $\beta = 1$,

$$H(j\omega) = \frac{A_0}{(1 + j\omega/\omega_X)(1 + j\omega/\omega_Y)} .$$

PM = 60° means a phase of $-120°$ at the crossover $\omega_u$, plus $|H(j\omega_u)| = 1$:

$$\tan^{-1}\frac{\omega_u}{\omega_X} + \tan^{-1}\frac{\omega_u}{\omega_Y} = 120°, \qquad \sqrt{1 + \frac{\omega_u^2}{\omega_X^2}}\,\sqrt{1 + \frac{\omega_u^2}{\omega_Y^2}} = A_0 = 20.4 .$$

**Quick estimate (dominant pole taken as exactly 90°).** Then $\tan^{-1}(\omega_u/\omega_Y) = 30°$, i.e. $\omega_Y = \sqrt3\,\omega_u$, and the magnitude condition becomes $(\mathrm{GBW}/\omega_u)/\sqrt{1 + 1/3} = 1$:

$$\omega_u = \frac{\sqrt3}{2}\,\mathrm{GBW} = 2.21\times10^9\ \mathrm{rad/s}, \qquad \omega_Y = \sqrt3\,\omega_u = 1.5\,\mathrm{GBW} = 3.83\times10^9\ \mathrm{rad/s}.$$

This would give $C_Y = 1/(269.5\ \Omega\times3.83\times10^9) = 0.97$ pF. But with $A_0$ only about 20 the dominant pole contributes noticeably less than 90° at the crossover, leaving more room for the second pole, so solve the exact conditions.

### Step 5 — Exact solution by iteration

Guess $\omega_u$; the phase condition gives $\omega_Y = \omega_u/\tan\left[120° - \tan^{-1}(\omega_u/\omega_X)\right]$; then check whether $|H| = 1$:

| $\omega_u$ (rad/s) | $\tan^{-1}(\omega_u/\omega_X)$ | left for Y | $\omega_Y$ (rad/s) | $\sqrt{1 + (\omega_u/\omega_X)^2}$ | $\sqrt{1 + (\omega_u/\omega_Y)^2}$ | $\lvert H\rvert$ |
|---|---|---|---|---|---|---|
| $2.00\times10^9$ | 86.42° | 33.58° | $3.01\times10^9$ | 16.03 | 1.200 | 1.06 |
| $2.10\times10^9$ | 86.59° | 33.41° | $3.18\times10^9$ | 16.83 | 1.198 | 1.01 |
| $2.13\times10^9$ | 86.64° | 33.36° | $3.23\times10^9$ | 17.07 | 1.197 | 1.00 |
| $2.20\times10^9$ | 86.75° | 33.25° | $3.36\times10^9$ | 17.63 | 1.196 | 0.97 |

For the converged row, $|H| = 20.4/(17.07\times1.197) = 20.4/20.43 = 1.00$. ✓

So $\omega_u \approx 2.13\times10^9$ rad/s and the Y pole may come down to

$$\omega_Y \approx 3.23\times10^9\ \mathrm{rad/s}:$$

the dominant pole contributes 86.6°, and the Y pole is allowed 33.4° (instead of 30°).

### Step 6 — Maximum $C_Y$

$$C_{Y,max} = \frac{1}{R_Y\,\omega_Y} = \frac{1}{(269.5\ \Omega)(3.23\times10^9\ \mathrm{rad/s})} = 1.15\times10^{-12}\ \mathrm{F} = 1.15\ \mathrm{pF}.$$

For comparison, $C_Y = 0.5$ pF gives PM ≈ 75°, so the limit is indeed above 0.5 pF. (With the cruder $R_X = r_{O2} \parallel r_{O3} = 13.3$ kΩ, the same procedure gives 1.19 pF.)

**Very large $C_Y$.** The two conditions of Step 4 are symmetric in the two poles, so they have a second solution with Y as the *dominant* pole: $\omega_Y \approx 4.8\times10^6$ rad/s ($C_Y \approx 770$ pF), with crossover at $8.2\times10^7$ rad/s. Strictly, PM ≥ 60° holds for $C_Y \lesssim 1.15$ pF or $C_Y \gtrsim 770$ pF; with X dominant (the intended design, and the first limit reached as $C_Y$ grows from small values) the answer is 1.15 pF.

### Result

$$C_{Y,max} \approx 1.15\ \mathrm{pF},$$

obtained with $R_X = 16$ kΩ ($\omega_X = 1.25\times10^8$ rad/s), $A_0 \approx 20.4$, $R_Y \approx 270\ \Omega$: PM = 60° requires $\omega_Y \approx 3.2\times10^9$ rad/s, with the crossover at $\omega_u \approx 2.13\times10^9$ rad/s. (Treating the dominant pole's phase as exactly 90° gives the slightly conservative value ≈ 0.97 pF.)

**Common mistake.** Using $G_m = g_m$ for the differential pair. The input splits between $M_1$ and $M_2$, so the current into X is $(g_m/2)V_{in}$; doubling $G_m$ doubles the GBW and roughly halves the allowed $C_Y$.

**Common mistake.** Taking $R_Y = r_{O4}$. The follower output is a low-impedance node, $(1/g_{m4}) \parallel r_{O4} \approx 270\ \Omega$; with $r_{O4} = 20$ kΩ the Y pole would already be far below the crossover and the "maximum" $C_Y$ would come out absurdly small (well below the given 0.5 pF of $C_X$).

**Common mistake.** Concluding that every $C_Y$ below some huge value (hundreds of pF) is acceptable. Between about 1.15 pF and 770 pF the margin is *below* 60°; the large-$C_Y$ solution exists only because Y then takes over as the dominant pole.
