# Detailed solution - R628

**Approach.** Model each common-source stage as an inverting gain with one pole. Break the ring to get the loop gain, then apply the Barkhausen criteria: the loop must provide 180° of frequency-dependent phase shift (on top of the DC inversion) with a loop-gain magnitude of at least 1 at that frequency. For three identical stages this requires a low-frequency gain of 2 per stage, which fixes $R_D$.

### Step 1 — The circuit

Reading the figure: three identical common-source (CS) stages $M_1$, $M_2$, $M_3$, each with a resistor $R_D$ to $V_{DD}$ and a capacitor $C_L$ from its drain to ground. The drain of $M_1$ (node E) drives the gate of $M_2$, the drain of $M_2$ (node F) drives the gate of $M_3$, and the drain of $M_3$ (node G, the output) is fed back to the gate of $M_1$.

Each stage inverts, so the loop contains three inversions, an odd number. At DC the loop is therefore negative feedback, and the circuit has a stable DC operating point with all three nodes at the same voltage. Oscillation, if it occurs, must come from the extra phase shift of the three poles.

### Step 2 — Transfer function of one stage

Small-signal model of one stage ($\lambda = 0$): a controlled current source $g_mv_{gs}$ from the drain node to ground, in parallel with $R_D$ (to AC ground) and $C_L$. The drain impedance is

$$Z = R_D \parallel \frac{1}{sC_L} = \frac{R_D}{1 + sR_DC_L}.$$

**KCL at the drain:** the transistor current $g_mv_{in}$ must be supplied through $Z$, so $v_{out} = -g_mZ\,v_{in}$:

$$\frac{v_{out}}{v_{in}} = -\frac{g_mR_D}{1 + sR_DC_L} = -\frac{A_0}{1 + s/\omega_0},$$

where

$$A_0 = g_mR_D \quad\text{(low-frequency gain magnitude)}, \qquad \omega_0 = \frac{1}{R_DC_L}\quad\text{(pole frequency)}.$$

### Step 3 — Loop gain

Break the loop at the gate of $M_1$ (it draws no current, so the loading is unchanged). Three identical stages in cascade give

$$H(s) = \left(-\frac{A_0}{1 + s/\omega_0}\right)^3 = -\frac{A_0^3}{(1 + s/\omega_0)^3}.$$

The minus sign is the DC inversion (180°). For the loop to sustain oscillation, the signal must return **in phase** with itself, so the three poles must add another 180°.

### Step 4 — Barkhausen phase condition: the oscillation frequency

Each pole contributes $-\tan^{-1}(\omega/\omega_0)$. With three identical poles, a total of 180° means 60° per stage:

$$
\begin{aligned}
3\tan^{-1}\frac{\omega_{osc}}{\omega_0} &= 180^\circ,\\
\tan^{-1}\frac{\omega_{osc}}{\omega_0} &= 60^\circ,\\
\omega_{osc} &= \omega_0\tan60^\circ = \sqrt3\,\omega_0 .
\end{aligned}
$$

### Step 5 — Barkhausen gain condition: minimum gain per stage

At $\omega_{osc}$ each stage's magnitude is

$$\left|\frac{A_0}{1 + j\sqrt3}\right| = \frac{A_0}{\sqrt{1 + 3}} = \frac{A_0}{2}.$$

The loop-gain magnitude is the cube:

$$|H(j\omega_{osc})| = \left(\frac{A_0}{2}\right)^3 = \frac{A_0^3}{8}.$$

Oscillation requires $|H(j\omega_{osc})| \ge 1$:

$$\frac{A_0^3}{8} \ge 1 \quad\Longrightarrow\quad A_0 \ge 2 .$$

**Intuition.** At $\sqrt3\,\omega_0$ the capacitor has already halved each stage's gain, so each stage must have a low-frequency gain of at least 2 for the loop to break even.

### Step 6 — Minimum $R_D$

$$g_mR_D \ge 2 \quad\Longrightarrow\quad R_D \ge \frac{2}{g_m} = 2\times200\ \Omega = 400\ \Omega .$$

$C_L$ does not appear: it sets the frequency ($\omega_{osc} = \sqrt3/(R_DC_L)$), not the start-up condition.

### Step 7 — Check with the closed-loop poles

The closed-loop poles are the roots of $1 - H(s) = 0$ (the loop has no external input):

$$
\begin{aligned}
1 + \frac{A_0^3}{(1 + s/\omega_0)^3} &= 0,\\
\left(1 + \frac{s}{\omega_0}\right)^3 &= -A_0^3 .
\end{aligned}
$$

The cube roots of $-1$ are $-1$ and $e^{\pm j60^\circ} = \tfrac12 \pm j\tfrac{\sqrt3}{2}$, so

$$s_1 = -\omega_0(1 + A_0), \qquad s_{2,3} = \omega_0\left[\frac{A_0}{2} - 1 \pm j\frac{\sqrt3}{2}A_0\right].$$

The complex pair crosses into the right half-plane when $A_0/2 - 1 > 0$, i.e. $A_0 > 2$. At exactly $A_0 = 2$ it sits on the $j\omega$ axis at $s = \pm j\sqrt3\,\omega_0$, which confirms both the gain condition and the frequency.

| $R_D$ | $A_0 = g_mR_D$ | Loop gain at $\sqrt3\,\omega_0$, $A_0^3/8$ | Behaviour |
|---|---|---|---|
| 300 Ω | 1.5 | 0.42 | decays, no oscillation |
| 400 Ω | 2.0 | 1.00 | edge of oscillation |
| 500 Ω | 2.5 | 1.95 | oscillation grows until limited by nonlinearity |

### Result

Each stage is $-A_0/(1 + s/\omega_0)$ with $A_0 = g_mR_D$ and $\omega_0 = 1/(R_DC_L)$. The loop provides 180° of extra phase at $\omega_{osc} = \sqrt3\,\omega_0$ (60° per stage), where the loop gain is $A_0^3/8$. Oscillation requires $A_0 \ge 2$, so

$$R_{D,min} = \frac{2}{g_m} = 400\ \Omega,$$

independent of $C_L$. In practice $R_D$ is chosen somewhat larger to guarantee start-up despite variations.

**Common mistake.** Requiring a per-stage gain of 1 (giving $R_D = 200$ Ω). Unity gain would suffice only if the stages had no attenuation at the oscillation frequency; at $\sqrt3\,\omega_0$ each pole reduces the gain by a factor of 2.

**Common mistake.** Using 45° per stage, or 90°, which leads to a per-stage requirement of $\sqrt2$ (283 Ω) or to the claim that the ring cannot oscillate. Three inverting stages already provide 180° at DC; the poles must supply the remaining 180°, i.e. 60° each.

**Common mistake.** Mixing up the total and the per-stage requirement: setting the per-stage gain to 8 (which gives 1.6 kΩ), or setting the total loop gain to 2 (per-stage gain $2^{1/3} = 1.26$, about 252 Ω). The condition is $A_0^3/8 \ge 1$, i.e. a total low-frequency loop gain $A_0^3 \ge 8$, which means $A_0 \ge 2$ per stage.
