# Detailed solution - R630

**Approach.** At the edge of oscillation the swings are tiny, so every differential pair sits at its balanced operating point with $I_{SS}/2$ in each transistor and can be analysed with its small-signal model. Each stage then has a differential gain $g_mR_1$ and one pole at its output nodes. A three-stage ring oscillates only if each stage has a low-frequency gain of at least 2. Expressing $g_m$ through $I_{SS}$ turns this into a lower bound on the tail current.

### Step 1 — The circuit

Reading the figure: three identical differential pairs, $M_1$–$M_2$, $M_3$–$M_4$ and $M_5$–$M_6$, each with a tail current source $I_{SS}$ and two load resistors $R_1$ to $V_{DD}$. The differential output of each stage (for the first stage, nodes X and Y) drives the differential input of the next stage, and the output of the third stage is returned to the input of the first. Every stage inverts the differential signal, so the loop contains three inversions: at DC it is negative feedback, and the balanced state (all differential voltages zero) is the circuit's DC operating point.

### Step 2 — Small-signal model at the edge of oscillation

The hint says that at the edge of oscillation the swings are very small. Each pair therefore stays close to balance, where:

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2}\quad\text{(and likewise in the other stages)}.$$

The **transconductance** of each transistor at this point follows from the square law:

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2\mu_nC_{ox}\frac{W}{L}\cdot\frac{I_{SS}}{2}} = \sqrt{\mu_nC_{ox}\frac{W}{L}I_{SS}} .$$

For differential signals, the common source node of each pair is a **virtual ground**: one side's current rises exactly as much as the other's falls, so the tail node does not move. Each stage reduces to a common-source **half circuit**: a transistor with grounded source, drain load $R_1$ (to AC ground), and the capacitance $C$ of its output node (the next stage's gate capacitance plus the drain junction). Its gain is

$$\frac{v_{out}}{v_{in}} = -\frac{g_mR_1}{1 + s/\omega_0}, \qquad \omega_0 = \frac{1}{R_1C}.$$

The ring then behaves like a single-ended ring of three such stages:

<!-- diagram: diagram-01.cir -->

Here each controlled source $g_mv_{gs}$ pulls current from its drain node (X, then the drains of $M_3$ and $M_5$), and each node has $R_1$ and $C$ to AC ground.

### Step 3 — Oscillation condition for three identical stages

Breaking the loop gives the loop gain

$$H(s) = -\frac{A_0^3}{(1 + s/\omega_0)^3}, \qquad A_0 = g_mR_1 .$$

The three inversions provide 180° at DC. The poles must supply the other 180°, i.e. 60° each, which happens at

$$\tan^{-1}\frac{\omega_{osc}}{\omega_0} = 60^\circ \quad\Longrightarrow\quad \omega_{osc} = \sqrt3\,\omega_0 .$$

At that frequency each stage's gain magnitude is $A_0/\sqrt{1 + 3} = A_0/2$, so the loop-gain magnitude is $A_0^3/8$. The Barkhausen condition $|H(j\omega_{osc})| \ge 1$ gives

$$\frac{A_0^3}{8} \ge 1 \quad\Longrightarrow\quad A_0 = g_mR_1 \ge 2 .$$

The node capacitance $C$ is not given, and it does not need to be: it sets the frequency but not the start-up condition.

### Step 4 — Minimum tail current

Substitute $g_m$ from Step 2 into $g_mR_1 \ge 2$:

$$\sqrt{\mu_nC_{ox}\frac{W}{L}I_{SS}}\;R_1 \ge 2 .$$

Square both sides (both are positive):

$$\mu_nC_{ox}\frac{W}{L}I_{SS}R_1^2 \ge 4 .$$

Solve for $I_{SS}$:

$$I_{SS} \ge \frac{4}{\mu_nC_{ox}(W/L)R_1^2} .$$

With $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$:

$$\frac{4}{134\times10^{-6}\ \mathrm{A/V^2}} = 2.99\times10^4\ \mathrm{V^2/A} = 2.99\times10^4\ \mathrm{A\,\Omega^2},$$

so

$$I_{SS,min} = \frac{2.99\times10^4\ \mathrm{A\,\Omega^2}}{(W/L)\,R_1^2} .$$

**Example.** For $W/L = 50$ and $R_1 = 1$ kΩ:

$$I_{SS,min} = \frac{2.99\times10^4\ \mathrm{A\,\Omega^2}}{50\times(10^3\ \Omega)^2} = 5.97\times10^{-4}\ \mathrm{A} \approx 0.6\ \mathrm{mA}.$$

Check: $g_m = \sqrt{(134\ \mu\mathrm{A/V^2})(50)(0.597\ \mathrm{mA})} = \sqrt{4.0\times10^{-6}}\ \mathrm{A/V} = 2.0$ mS, and $g_mR_1 = 2.0$ mS × 1 kΩ = 2. ✓

### Step 5 — Remarks

- **Why the current matters.** In a differential pair the gain depends on the bias current through $g_m \propto \sqrt{I_{SS}}$. Below $I_{SS,min}$ the stages cannot provide a gain of 2, a disturbance dies out, and the circuit stays at its balanced DC point.
- **Channel-length modulation.** With $\lambda \neq 0$, each half circuit's load becomes $R_1 \parallel r_O$, with $r_O = 1/(\lambda I_{SS}/2)$. The condition becomes $g_m(R_1 \parallel r_O) \ge 2$, which requires slightly more current. Here $\lambda$ is neglected.
- **Above the minimum.** With $I_{SS} > I_{SS,min}$ the oscillation grows until the pairs steer the tail current almost completely, and the differential swing per stage approaches $I_{SS}R_1$. That large-signal swing does not decide whether oscillation *starts*; the small-signal gain does.

### Result

At the edge of oscillation each transistor carries $I_{SS}/2$, so $g_m = \sqrt{\mu_nC_{ox}(W/L)I_{SS}}$. A three-stage ring needs $g_mR_1 \ge 2$ (60° per stage at $\sqrt3\,\omega_0$, loop gain $A_0^3/8 \ge 1$), giving

$$I_{SS,min} = \frac{4}{\mu_nC_{ox}(W/L)R_1^2} \approx \frac{2.99\times10^4\ \mathrm{A\,\Omega^2}}{(W/L)R_1^2},$$

e.g. about 0.6 mA for $W/L = 50$ and $R_1 = 1$ kΩ.

**Common mistake.** Computing $g_m$ with the whole tail current in one transistor, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_{SS}}$, which gives $I_{SS} \ge 2/[\mu_nC_{ox}(W/L)R_1^2]$, half the correct value. At the edge of oscillation the pairs are balanced, with $I_{SS}/2$ in each device.

**Common mistake.** Requiring a per-stage gain of 1 (or $\sqrt2$, or 8). At the oscillation frequency $\sqrt3\,\omega_0$, each pole halves the stage gain, so the low-frequency gain must be at least 2 per stage.

**Common mistake.** Basing the bound on the large-signal swing (for example requiring $I_{SS}R_1$ to exceed some voltage). Whether the ring starts is decided by the small-signal loop gain around the balanced point, as the hint indicates.
