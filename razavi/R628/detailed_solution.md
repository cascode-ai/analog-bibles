# Detailed solution - R628

**Approach.** Model each common-source stage as an inverting gain with one pole, break the ring to get the loop gain, and apply the Barkhausen criteria: 180° of frequency-dependent phase shift (on top of the dc inversion) with a loop-gain magnitude of at least 1 at that frequency. For three identical stages this requires a low-frequency gain of 2 per stage, which fixes $R_D$.

### Step 1 — Stage and loop transfer functions

The ring has three inversions, an odd number, so at dc it is negative feedback with a stable operating point; oscillation must come from the extra phase shift of the three poles. With $\lambda = 0$, each drain sees $Z = R_D \parallel (1/sC_L) = R_D/(1 + sR_DC_L)$, so each stage is

$$\frac{v_{out}}{v_{in}} = -\frac{g_mR_D}{1 + sR_DC_L} = -\frac{A_0}{1 + s/\omega_0}, \qquad A_0 = g_mR_D, \qquad \omega_0 = \frac{1}{R_DC_L}.$$

Breaking the loop at the gate of $M_1$ (which draws no current), the three stages give

$$H(s) = \left(-\frac{A_0}{1 + s/\omega_0}\right)^3 = -\frac{A_0^3}{(1 + s/\omega_0)^3}.$$

The minus sign is the dc inversion (180°); for the signal to return **in phase**, the three poles must add another 180°.

### Step 2 — Barkhausen phase condition: the oscillation frequency

Each pole contributes $-\tan^{-1}(\omega/\omega_0)$, so 180° in total means 60° per stage:

$$
\begin{aligned}
3\tan^{-1}\frac{\omega_{osc}}{\omega_0} &= 180^\circ,\\
\tan^{-1}\frac{\omega_{osc}}{\omega_0} &= 60^\circ,\\
\omega_{osc} &= \omega_0\tan60^\circ = \sqrt3\,\omega_0 .
\end{aligned}
$$

### Step 3 — Barkhausen gain condition: minimum gain per stage

At $\omega_{osc}$ each stage's magnitude is

$$\left|\frac{A_0}{1 + j\sqrt3}\right| = \frac{A_0}{\sqrt{1 + 3}} = \frac{A_0}{2},$$

so the loop-gain magnitude is

$$|H(j\omega_{osc})| = \left(\frac{A_0}{2}\right)^3 = \frac{A_0^3}{8}.$$

Oscillation requires $|H(j\omega_{osc})| \ge 1$:

$$\frac{A_0^3}{8} \ge 1 \quad\Longrightarrow\quad A_0 \ge 2 .$$

At $\sqrt3\,\omega_0$ each capacitor has already halved its stage's gain, so each stage needs a low-frequency gain of at least 2.

### Step 4 — Minimum $R_D$

$$g_mR_D \ge 2 \quad\Longrightarrow\quad R_D \ge \frac{2}{g_m} = 2\times200\ \Omega = 400\ \Omega .$$

$C_L$ sets the frequency, $\omega_{osc} = \sqrt3/(R_DC_L)$, not the start-up condition.

### Step 5 — Check with the closed-loop poles

With no external input, the closed-loop poles are the roots of $1 - H(s) = 0$:

$$
\begin{aligned}
1 + \frac{A_0^3}{(1 + s/\omega_0)^3} &= 0,\\
\left(1 + \frac{s}{\omega_0}\right)^3 &= -A_0^3 .
\end{aligned}
$$

The cube roots of $-1$ are $-1$ and $e^{\pm j60^\circ} = \tfrac12 \pm j\tfrac{\sqrt3}{2}$, so

$$s_1 = -\omega_0(1 + A_0), \qquad s_{2,3} = \omega_0\left[\frac{A_0}{2} - 1 \pm j\frac{\sqrt3}{2}A_0\right].$$

The complex pair enters the right half-plane when $A_0/2 - 1 > 0$, i.e. $A_0 > 2$; at exactly $A_0 = 2$ it sits on the $j\omega$ axis at $s = \pm j\sqrt3\,\omega_0$, confirming both the gain condition and the frequency.

| $R_D$ | $A_0 = g_mR_D$ | Loop gain at $\sqrt3\,\omega_0$, $A_0^3/8$ | Behaviour |
|---|---|---|---|
| 300 Ω | 1.5 | 0.42 | decays, no oscillation |
| 400 Ω | 2.0 | 1.00 | edge of oscillation |
| 500 Ω | 2.5 | 1.95 | oscillation grows until limited by nonlinearity |

### Result

Each stage is $-A_0/(1 + s/\omega_0)$ with $A_0 = g_mR_D$ and $\omega_0 = 1/(R_DC_L)$. The loop provides 180° of extra phase at $\omega_{osc} = \sqrt3\,\omega_0$ (60° per stage), where the loop gain is $A_0^3/8$. Oscillation requires $A_0 \ge 2$, so

$$R_{D,min} = \frac{2}{g_m} = 400\ \Omega,$$

independent of $C_L$. In practice $R_D$ is chosen somewhat larger to guarantee start-up despite variations.

**Common mistake.** Requiring a per-stage gain of 1 ($R_D = 200$ Ω). At $\sqrt3\,\omega_0$ each pole reduces the stage gain by a factor of 2.

**Common mistake.** Using 45° or 90° per stage, which leads to a per-stage requirement of $\sqrt2$ (283 Ω) or to the claim that the ring cannot oscillate. Three inversions already provide 180° at dc; the poles supply the remaining 180°, i.e. 60° each.

**Common mistake.** Mixing up the total and per-stage requirements: a per-stage gain of 8 (1.6 kΩ), or a total loop gain of 2 (per-stage $2^{1/3} = 1.26$, about 252 Ω). The condition $A_0^3/8 \ge 1$ means a total low-frequency loop gain $A_0^3 \ge 8$, i.e. $A_0 \ge 2$ per stage.
