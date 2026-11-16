# Detailed solution - R630

**Approach.** At the edge of oscillation the swings are tiny, so every differential pair sits at its balanced point with $I_{SS}/2$ in each transistor and can be analysed with its small-signal model. Each stage then has a differential gain $g_mR_1$ and one pole at its output nodes, and a three-stage ring oscillates only if each stage has a low-frequency gain of at least 2. Expressing $g_m$ through $I_{SS}$ turns this into a lower bound on the tail current.

### Step 1 — Small-signal model at the edge of oscillation

Each stage inverts the differential signal, so the ring has three inversions: at dc it is negative feedback, and the balanced state is its operating point. Near balance each transistor carries $I_D = I_{SS}/2$, so

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2\mu_nC_{ox}\frac{W}{L}\cdot\frac{I_{SS}}{2}} = \sqrt{\mu_nC_{ox}\frac{W}{L}I_{SS}} .$$

For differential signals each tail node is a virtual ground, so each stage reduces to a common-source half circuit with load $R_1$ and the capacitance $C$ of its output node (the next stage's gate capacitance plus the drain junction):

$$\frac{v_{out}}{v_{in}} = -\frac{g_mR_1}{1 + s/\omega_0}, \qquad \omega_0 = \frac{1}{R_1C}.$$

The ring then behaves like a single-ended ring of three such stages:

<!-- diagram: diagram-01.cir -->

Each controlled source $g_mv_{gs}$ pulls current from its drain node (X, then the drains of $M_3$ and $M_5$), and each node has $R_1$ and $C$ to ac ground.

### Step 2 — Oscillation condition for three identical stages

The loop gain is

$$H(s) = -\frac{A_0^3}{(1 + s/\omega_0)^3}, \qquad A_0 = g_mR_1 .$$

The three inversions provide 180° at dc, so the poles must supply the other 180°, 60° each:

$$\tan^{-1}\frac{\omega_{osc}}{\omega_0} = 60^\circ \quad\Longrightarrow\quad \omega_{osc} = \sqrt3\,\omega_0 .$$

There each stage's gain is $A_0/\sqrt{1 + 3} = A_0/2$, so the loop-gain magnitude is $A_0^3/8$, and $|H(j\omega_{osc})| \ge 1$ gives

$$\frac{A_0^3}{8} \ge 1 \quad\Longrightarrow\quad A_0 = g_mR_1 \ge 2 .$$

The node capacitance $C$ is not needed: it sets the frequency, not the start-up condition.

### Step 3 — Minimum tail current

Substituting $g_m$ from Step 1 into $g_mR_1 \ge 2$ and squaring:

$$\sqrt{\mu_nC_{ox}\frac{W}{L}I_{SS}}\;R_1 \ge 2 \quad\Longrightarrow\quad \mu_nC_{ox}\frac{W}{L}I_{SS}R_1^2 \ge 4 \quad\Longrightarrow\quad I_{SS} \ge \frac{4}{\mu_nC_{ox}(W/L)R_1^2} .$$

With $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$:

$$\frac{4}{134\times10^{-6}\ \mathrm{A/V^2}} = 2.99\times10^4\ \mathrm{V^2/A} = 2.99\times10^4\ \mathrm{A\,\Omega^2},$$

so

$$I_{SS,min} = \frac{2.99\times10^4\ \mathrm{A\,\Omega^2}}{(W/L)\,R_1^2} .$$

**Example.** For $W/L = 50$ and $R_1 = 1$ kΩ:

$$I_{SS,min} = \frac{2.99\times10^4\ \mathrm{A\,\Omega^2}}{50\times(10^3\ \Omega)^2} = 5.97\times10^{-4}\ \mathrm{A} \approx 0.6\ \mathrm{mA}.$$

Check: $g_m = \sqrt{(134\ \mu\mathrm{A/V^2})(50)(0.597\ \mathrm{mA})} = \sqrt{4.0\times10^{-6}}\ \mathrm{A/V} = 2.0$ mS, and $g_mR_1 = 2.0$ mS × 1 kΩ = 2. ✓

### Step 4 — Remarks

- **Why the current matters.** The stage gain depends on the bias through $g_m \propto \sqrt{I_{SS}}$. Below $I_{SS,min}$ the stages cannot provide a gain of 2, and a disturbance dies out.
- **Channel-length modulation.** With $\lambda \neq 0$ the load becomes $R_1 \parallel r_O$, with $r_O = 1/(\lambda I_{SS}/2)$, and the condition $g_m(R_1 \parallel r_O) \ge 2$ requires slightly more current.
- **Above the minimum.** With $I_{SS} > I_{SS,min}$ the oscillation grows until the pairs steer the tail current almost completely, and the differential swing per stage approaches $I_{SS}R_1$. Whether the oscillation *starts* is decided by the small-signal gain, not by this swing.

### Result

At the edge of oscillation each transistor carries $I_{SS}/2$, so $g_m = \sqrt{\mu_nC_{ox}(W/L)I_{SS}}$. A three-stage ring needs $g_mR_1 \ge 2$ (60° per stage at $\sqrt3\,\omega_0$, loop gain $A_0^3/8 \ge 1$), giving

$$I_{SS,min} = \frac{4}{\mu_nC_{ox}(W/L)R_1^2} \approx \frac{2.99\times10^4\ \mathrm{A\,\Omega^2}}{(W/L)R_1^2},$$

e.g. about 0.6 mA for $W/L = 50$ and $R_1 = 1$ kΩ.

**Common mistake.** Computing $g_m$ with the whole tail current in one transistor, which gives $I_{SS} \ge 2/[\mu_nC_{ox}(W/L)R_1^2]$, half the correct value. At the edge of oscillation the pairs are balanced, with $I_{SS}/2$ in each device.

**Common mistake.** Requiring a per-stage gain of 1 (or $\sqrt2$, or 8). At $\sqrt3\,\omega_0$ each pole halves the stage gain, so the low-frequency gain must be at least 2.

**Common mistake.** Basing the bound on the large-signal swing (for example requiring $I_{SS}R_1$ to exceed some voltage). Start-up is decided by the small-signal loop gain around the balanced point, as the hint indicates.
