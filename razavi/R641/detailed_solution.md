# Detailed solution - R641

**Approach.** With all of $I_T$ steered to $M_1$–$M_2$, the cross-coupled pair is off and each stage is a plain resistively loaded differential pair with one dominant pole at its outputs. A three-stage ring oscillates only if each stage has a low-frequency gain of at least 2, so compute $g_{m1,2}$ at this bias and solve $g_{m1,2}R \ge 2$.

### Step 1 — Transconductance of $M_1$ and $M_2$

With $M_6$ off, $I_1 = 0$: $M_3$–$M_4$ carry no current, have $g_m = 0$ and drop out of the small-signal circuit, and $I_{SS} = I_T = 1$ mA. At the edge of oscillation the swings are tiny, so each input transistor carries half the tail current:

$$I_{D1} = I_{D2} = \frac{I_T}{2} = 0.5\ \mathrm{mA}.$$

With $(W/L)_{1,2} = 50/0.5 = 100$:

$$g_{m1,2} = \sqrt{2\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_D} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS},$$

equivalently $g_{m1,2} = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_T}$. The overdrive is $V_{ov} = 2I_D/g_m = 1\ \mathrm{mA}/3.66\ \mathrm{mS} = 0.27$ V.

### Step 2 — Small-signal model of one stage

For differential signals P is a virtual ground, so each side is a common-source stage driving $R$ and the output-node capacitance $C$ (the next stage's gates plus junctions). With $\lambda = 0$:

$$\frac{v_{out}}{v_{in}} = -\frac{g_{m1,2}R}{1 + sRC} = -\frac{A_0}{1 + s/\omega_0}, \qquad A_0 = g_{m1,2}R, \qquad \omega_0 = \frac{1}{RC}.$$

### Step 3 — Oscillation condition of a three-stage ring

Three identical stages give

$$H(s) = -\frac{A_0^3}{(1 + s/\omega_0)^3}.$$

The three inversions provide 180° at dc, so the poles must add 180°, 60° each:

$$\tan^{-1}\frac{\omega_{osc}}{\omega_0} = 60^\circ \quad\Longrightarrow\quad \omega_{osc} = \sqrt3\,\omega_0 .$$

There each stage's gain is $A_0/\sqrt{1 + 3} = A_0/2$, so the loop gain is $A_0^3/8$, and

$$\frac{A_0^3}{8} \ge 1 \quad\Longrightarrow\quad A_0 \ge 2 .$$

$C$ cancels out of the condition; it only sets the frequency.

### Step 4 — Minimum $R$

$$g_{m1,2}R \ge 2 \quad\Longrightarrow\quad R \ge \frac{2}{g_{m1,2}} = \frac{2}{3.66\times10^{-3}\ \mathrm{S}} = 546\ \Omega .$$

At $R = 546\ \Omega$ the loop gain at $\sqrt3\,\omega_0$ is exactly 1 (the critical value); in practice $R$ is made slightly larger so the oscillation starts and grows.

| $R$ | $A_0 = g_{m1,2}R$ | $A_0^3/8$ | Behaviour |
|---|---|---|---|
| 400 Ω | 1.46 | 0.39 | no oscillation |
| 546 Ω | 2.00 | 1.00 | edge of oscillation |
| 700 Ω | 2.56 | 2.10 | oscillates |

### Result

With all of $I_T$ in $M_1$–$M_2$ (0.5 mA each), $g_{m1,2} = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_T} = 3.66$ mS. A three-stage ring needs a low-frequency gain of at least 2 per stage, so

$$R_{min} = \frac{2}{g_{m1,2}} \approx 546\ \Omega .$$

**Common mistake.** Requiring a per-stage gain of 1 (or $\sqrt2$), which gives 273 Ω (or 386 Ω). Where the three poles supply 180°, each has already halved the stage gain.

**Common mistake.** Computing $g_m$ with the full 1 mA in one transistor, $g_m = \sqrt{2\mu_nC_{ox}(W/L)(1\ \mathrm{mA})} = 5.18$ mS, which gives 386 Ω. At balance the tail current divides equally, 0.5 mA per device.

**Common mistake.** Including the cross-coupled pair with some assumed size. In this case $M_3$–$M_4$ carry no current, so their transconductance is zero.
