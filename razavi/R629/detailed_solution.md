# Detailed solution - R629

**Approach.** Each common-source stage is an inverting gain $A_0 = g_mR_D$ with one pole at $\omega_0 = 1/(R_DC_L)$. The specified low-frequency loop gain of 16 fixes $A_0$ and hence $R_D$. A three-stage ring oscillates where each pole contributes 60°, at $\omega_{osc} = \sqrt3\,\omega_0$, so the 1-GHz frequency then fixes $C_L$.

### Step 1 — Model of one stage and of the loop

With $\lambda = 0$, each drain sees $Z = R_D \parallel (1/sC_L) = R_D/(1 + sR_DC_L)$, so

$$\frac{v_{out}}{v_{in}} = -g_mZ = -\frac{A_0}{1 + s/\omega_0}, \qquad A_0 = g_mR_D, \qquad \omega_0 = \frac{1}{R_DC_L},$$

and, breaking the loop at the gate of $M_1$, the loop gain is

$$H(s) = -\frac{A_0^3}{(1 + s/\omega_0)^3}.$$

### Step 2 — Gain per stage and $R_D$ from the loop-gain specification

The total low-frequency loop gain is $|H(0)|$:

$$|H(0)| = A_0^3 = 16 \quad\Longrightarrow\quad A_0 = 16^{1/3} = 2.52 .$$

With $g_m = (200\ \Omega)^{-1}$:

$$R_D = \frac{A_0}{g_m} = 2.52\times200\ \Omega = 504\ \Omega .$$

**Start-up check.** Oscillation requires $A_0 \ge 2$ (Step 3), and 2.52 > 2: at the oscillation frequency the loop gain is $A_0^3/8 = 16/8 = 2$, twice the minimum.

### Step 3 — Oscillation frequency of a three-stage ring

The three inversions supply 180° at dc, so the three poles must add another 180°, 60° each:

$$\tan^{-1}\frac{\omega_{osc}}{\omega_0} = 60^\circ \quad\Longrightarrow\quad \omega_{osc} = \sqrt3\,\omega_0 = \frac{\sqrt3}{R_DC_L}.$$

There each stage's magnitude is $A_0/\sqrt{1 + 3} = A_0/2$, which is why $A_0 \ge 2$ is needed.

### Step 4 — Solve for $C_L$

$$\omega_{osc} = 2\pi f_{osc} = 2\pi\times10^9\ \mathrm{s^{-1}} = 6.283\times10^9\ \mathrm{rad/s},$$

$$C_L = \frac{\sqrt3}{\omega_{osc}R_D} = \frac{1.732}{(6.283\times10^9\ \mathrm{rad/s})(504\ \Omega)} = \frac{1.732}{3.167\times10^{12}\ \mathrm{s^{-1}}} = 5.47\times10^{-13}\ \mathrm{F},$$

so

$$C_L \approx 0.55\ \mathrm{pF}.$$

The pole of each stage is at $\omega_0 = \omega_{osc}/\sqrt3 = 3.63\times10^9$ rad/s ($f_0 = 577$ MHz).

**Check.** $R_DC_L = 504\ \Omega\times0.547\ \mathrm{pF} = 0.276$ ns, and $\sqrt3/(0.276\ \mathrm{ns}) = 6.28\times10^9$ rad/s $= 2\pi\times1$ GHz. ✓

### Step 5 — Remark: start-up frequency versus steady-state frequency

Since $A_0 = 2.52$ exceeds the critical value 2, the small-signal closed-loop poles, the roots of $(1 + s/\omega_0)^3 = -A_0^3$, lie in the right half-plane:

$$s = \omega_0\left[\frac{A_0}{2} - 1 \pm j\frac{\sqrt3}{2}A_0\right] = \omega_0\,(0.26 \pm j2.18).$$

The oscillation therefore **starts** growing at $2.18\,\omega_0$ rather than $\sqrt3\,\omega_0 = 1.73\,\omega_0$. As the amplitude grows, the transistors' large-signal behaviour lowers their effective gain until the loop gain at the oscillation frequency is exactly 1; the $R_DC_L$ poles stay linear, so the 60°-per-stage condition again sets the frequency, which settles near $\sqrt3\,\omega_0$. (A transient simulation of this ring with square-law devices gives a steady-state frequency within about 10 % of 1 GHz.) $\omega_{osc} = \sqrt3\,\omega_0$ is the standard design equation.

Setting the start-up pole frequency $\sqrt3A_0\omega_0/2$ to $2\pi\times1$ GHz instead would give $C_L = \sqrt3A_0/(2\omega_{osc}R_D) = \sqrt3\,g_m/(2\omega_{osc}) \approx 0.69$ pF, which describes the initial growth of a small disturbance, not the steady-state oscillation.

### Result

$$A_0 = 16^{1/3} = 2.52,\qquad R_D = 2.52\times200\ \Omega \approx 504\ \Omega,$$

$$C_L = \frac{\sqrt3}{2\pi f_{osc}R_D} = \frac{\sqrt3}{2\pi(10^9\ \mathrm{s^{-1}})(504\ \Omega)} \approx 0.55\ \mathrm{pF},$$

from the three-stage ring condition $\omega_{osc} = \sqrt3\,\omega_0 = \sqrt3/(R_DC_L)$. (Using the frequency of the growing start-up poles, $\sqrt3A_0\omega_0/2$, would give about 0.69 pF.)

**Common mistake.** Treating 16 as the gain of each stage, which gives $R_D = 16\times200\ \Omega = 3.2$ kΩ. The specification is the *total* loop gain, $A_0^3 = 16$.

**Common mistake.** Setting $\omega_{osc} = 1/(R_DC_L)$, which gives $C_L = 0.32$ pF. At $\omega_0$ each pole contributes only 45°, 135° in total, not enough to complete the 360° around the loop.

**Common mistake.** Using $\omega_{osc} = 10^9$ rad/s (hertz confused with rad/s), which makes $C_L$ larger by $2\pi$ (about 3.4 pF).
