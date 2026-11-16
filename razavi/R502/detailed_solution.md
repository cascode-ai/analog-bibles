# Detailed solution - R502

**Approach.** A Miller compensation capacitor works only if three conditions hold: it spans an *inverting* gain stage, so that it is multiplied and produces negative (stabilizing) feedback; the multiplied capacitance lands on the *highest-impedance* node, so a small capacitor creates a low dominant pole and splits the other poles apart; and the capacitor's own feedforward path (its right-half-plane zero) does not create a new unstable loop. Check each placement ($M_1$, $M_2$, $M_3$) against these conditions.

### Step 1 — The loop and its node impedances

Reading the figure: input node A (fed by $I_{in}$ and $I_3$; drain of $M_3$; gate of $M_1$) → $M_1$, an NMOS common-source stage, drives node B (fed by $I_1$) → $M_2$, a PMOS common-source stage (source at $V_{DD}$), drives the output Y (loaded by $I_2$) → $M_3$ (gate at Y) returns a current to A.

- **Forward path A → Y.** Two inverting common-source stages: gain $+(g_{m1}r_{O1})(g_{m2}r_{O2})$, *non-inverting*.
- **Feedback.** $M_3$ pulls the current $g_{m3}V_Y$ out of A: an inverting transconductance, so the overall loop is negative feedback (three inversions).
- **Node resistances** (ideal current sources): $R_A = r_{O3}$, $R_B = r_{O1}$, $R_Y = r_{O2}$.

For orientation, use the device data that accompany this circuit ($\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, $\lambda_n = 0.1\ \mathrm{V^{-1}}$, $\lambda_p = 0.2\ \mathrm{V^{-1}}$):

$$
\begin{aligned}
g_{m1} &= 5.18\ \mathrm{mS}, & r_{O1} &= 10\ \mathrm{k}\Omega, & g_{m1}r_{O1} &\approx 52,\\
g_{m2} &= 2.77\ \mathrm{mS}, & r_{O2} &= 5\ \mathrm{k}\Omega, & g_{m2}r_{O2} &\approx 14,\\
g_{m3} &= 0.164\ \mathrm{mS}, & r_{O3} &= 1\ \mathrm{M}\Omega, & g_{m3}r_{O3} &\approx 164,
\end{aligned}
$$

and the loop gain is $T_0 \approx 164\times52\times14 \approx 1.2\times10^5$. Node A, at 1 MΩ, is by far the highest-impedance node.

### Step 2 — Why the gate–drain of $M_1$ is the right place

- **Miller multiplication at the right node.** $C_C$ spans the inverting gain $-g_{m1}r_{O1} \approx -52$ and appears at node A as about $53\,C_C$, in parallel with 1 MΩ. A capacitor of well under 1 pF puts the dominant pole in the tens of krad/s.
- **Pole splitting.** At high frequency $C_C$ connects the gate and drain of $M_1$, making it behave like a diode, so node B becomes a low-impedance node and its pole moves far out. The remaining non-dominant pole (at Y) can then be placed above the crossover.
- **Harmless feedforward.** Above the zero $g_{m1}/C_C$, $M_1$ is effectively diode-connected; the loop left over (through $M_2$ and $M_3$) has a gain of only about $g_{m2}r_{O2}\cdot g_{m3}/g_{m1} \approx 14\times0.164/5.18 \approx 0.44 < 1$, so it cannot oscillate.

### Step 3 — Capacitor across $M_2$ (from B to Y)

**(a) Weak Miller effect at a low-impedance node.** The capacitor is now multiplied by $1 + g_{m2}r_{O2} \approx 15$ and appears at node B, whose resistance is only $r_{O1} = 10$ kΩ, 100 times lower than node A. To get the same dominant pole one needs a capacitor several hundred times larger.

**(b) The input-node pole is not split away.** The capacitor does not touch node A, so the natural pole at A (1 MΩ with $C_{GS1}$ and the Miller-multiplied $C_{GD1}$, around $9\times10^5$ rad/s) stays where it is. The loop then has *two* low-frequency poles (A and B), and the phase approaches −180° while the loop gain is still large.

**(c) A badly placed right-half-plane zero.** The capacitor's feedforward current cancels $M_2$'s current at $\omega_z = g_{m2}/C_C$, a right-half-plane (RHP) zero. The new dominant pole is $\omega_B \approx 1/(r_{O1}\,g_{m2}r_{O2}\,C_C)$, so

$$\frac{\omega_z}{\omega_B} = g_{m2}r_{O1}\cdot g_{m2}r_{O2} \approx 27.7\times13.9 \approx 380,$$

independent of $C_C$. At the zero the loop gain is still about $T_0/380 \approx 300$, so the zero lies far *below* the crossover.

**(d) Above the zero the loop turns into positive feedback.** For $\omega > g_{m2}/C_C$, $C_C$ shorts the gate and drain of $M_2$; $M_2$ acts like a diode (impedance $\approx 1/g_{m2}$) and B and Y move together. What remains is the loop Y → $M_3$ → A → $M_1$ → B = Y, which contains only **two** inversions ($M_3$ and $M_1$), i.e. *positive* feedback, with gain

$$g_{m3}r_{O3}\cdot\frac{g_{m1}}{g_{m2}} \approx 164\times\frac{5.18}{2.77} \approx 300 \gg 1 .$$

A positive-feedback loop with gain above 1 has a right-half-plane closed-loop pole, so this placement cannot be stabilized by *any* value of $C_C$. A numerical check of the closed-loop poles confirms right-half-plane poles for every $C_C$ from 1 pF to 1 µF (for the larger values, a real unstable pole near $1.8\times10^9$ rad/s).

### Step 4 — Capacitor across $M_3$ (from Y to A)

The capacitor now connects the output back to the input node, around the forward path A → $M_1$ → $M_2$ → Y, which is **non-inverting** with gain $A \approx +52\times14 \approx +720$.

**(a) Negative Miller capacitance.** Seen from node A, a capacitor across a gain $A$ looks like $(1 - A)C_C \approx -719\,C_C$, a *negative* capacitance. It cannot create a dominant pole; instead it partly cancels the real capacitance at A.

**(b) The feedback changes sign at high frequency.** The total current that the output returns to node A is

$$I_{fb} = -g_{m3}V_Y + sC_CV_Y = -(g_{m3} - sC_C)V_Y .$$

$M_3$'s part is negative feedback, but the capacitor injects current *in phase* with $V_Y$, i.e. positive feedback. Above $\omega = g_{m3}/C_C$ the capacitive path dominates, and the loop, with its enormous forward gain, becomes a positive-feedback loop. For example, with $C_C = 1$ pF this happens above $1.6\times10^8$ rad/s, and the closed loop has right-half-plane poles (one near $g_{m3}/C_C$). The capacitor destabilizes the amplifier instead of compensating it.

### Result

- **Across $M_1$ (correct):** the capacitor spans an inverting gain of about 52 and is multiplied onto the 1-MΩ input node, so a small $C_C$ creates the dominant pole and splits the other poles; the residual loop through its feedforward path has a gain of only ≈ 0.44.
- **Across $M_2$:** the Miller effect acts at a 10-kΩ node with a gain of only ≈ 14, the input-node pole remains (two low-frequency poles), and the RHP zero $g_{m2}/C_C$ lies far below the crossover. Above it $M_2$ behaves as a diode and the remaining $M_3$–$M_1$ loop is positive feedback with gain ≈ 300, so no value of $C_C$ makes the amplifier stable.
- **Across $M_3$:** the capacitor closes a path around the *non-inverting* forward amplifier (gain ≈ +700). Its Miller capacitance is negative, and above $g_{m3}/C_C$ the capacitive feedback current overrides $M_3$'s, turning the loop into positive feedback; it destabilizes the circuit.

**Common mistake.** Assuming any gate–drain capacitor in the loop is equivalent, because "it adds a pole". What matters is which node receives the Miller-multiplied capacitance (it must be the highest-impedance node) and whether the capacitor's feedforward path leaves a residual loop gain below 1.

**Common mistake.** Treating $M_2$ as a source follower. $M_2$ is a PMOS common-source stage (source at $V_{DD}$, output at its drain) with an inverting gain of about 14; that inversion is exactly why the A → Y forward path is non-inverting.

**Common mistake.** Claiming that the forward path from the input to the output is inverting and therefore that a capacitor from the output to the input provides "Miller" negative feedback. The forward path contains two inverting stages, so a capacitor from Y to A gives positive feedback.
