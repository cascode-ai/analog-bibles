# Detailed solution - R502

**Approach.** A Miller compensation capacitor works only if it spans an *inverting* gain stage (so that it is multiplied and gives negative feedback), if the multiplied capacitance lands on the *highest-impedance* node (so that a small capacitor creates a low dominant pole and splits the other poles), and if its own feedforward path (its right-half-plane zero) does not create a new unstable loop. Check each placement ($M_1$, $M_2$, $M_3$) against these conditions.

### Step 1 — The loop and its node impedances

Call the input node (gate of $M_1$, drain of $M_3$) A and the drain of $M_1$ (gate of $M_2$) B.

- **Forward path A → Y.** Two inverting common-source stages, $M_1$ and the PMOS $M_2$: gain $+(g_{m1}r_{O1})(g_{m2}r_{O2})$, *non-inverting*.
- **Feedback.** $M_3$ pulls the current $g_{m3}V_Y$ out of A, an inverting transconductance, so the overall loop (three inversions) is negative feedback.
- **Node resistances** (ideal current sources): $R_A = r_{O3}$, $R_B = r_{O1}$, $R_Y = r_{O2}$.

With the device data that accompany this circuit ($\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, $\lambda_n = 0.1\ \mathrm{V^{-1}}$, $\lambda_p = 0.2\ \mathrm{V^{-1}}$):

$$
\begin{aligned}
g_{m1} &= 5.18\ \mathrm{mS}, & r_{O1} &= 10\ \mathrm{k}\Omega, & g_{m1}r_{O1} &\approx 52,\\
g_{m2} &= 2.77\ \mathrm{mS}, & r_{O2} &= 5\ \mathrm{k}\Omega, & g_{m2}r_{O2} &\approx 14,\\
g_{m3} &= 0.164\ \mathrm{mS}, & r_{O3} &= 1\ \mathrm{M}\Omega, & g_{m3}r_{O3} &\approx 164,
\end{aligned}
$$

and the loop gain is $T_0 \approx 164\times52\times14 \approx 1.2\times10^5$. Node A, at 1 MΩ, is by far the highest-impedance node.

### Step 2 — Why the gate–drain of $M_1$ is the right place

- **Miller multiplication at the right node.** $C_C$ spans the inverting gain $-g_{m1}r_{O1} \approx -52$ and appears at A as about $53\,C_C$, in parallel with 1 MΩ, so well under 1 pF puts the dominant pole in the tens of krad/s.
- **Pole splitting.** At high frequency $C_C$ makes $M_1$ behave like a diode, so B becomes a low-impedance node and its pole moves far out; the remaining non-dominant pole (at Y) can then be placed above the crossover.
- **Harmless feedforward.** Above the zero $g_{m1}/C_C$, with $M_1$ effectively diode-connected, the leftover loop through $M_2$ and $M_3$ has a gain of only about $g_{m2}r_{O2}\cdot g_{m3}/g_{m1} \approx 14\times0.164/5.18 \approx 0.44 < 1$, so it cannot oscillate.

### Step 3 — Capacitor across $M_2$ (from B to Y)

**(a) Weak Miller effect at a low-impedance node.** The capacitor is multiplied by only $1 + g_{m2}r_{O2} \approx 15$ and appears at B, whose resistance $r_{O1} = 10$ kΩ is 100 times lower than at A; the same dominant pole needs a capacitor several hundred times larger.

**(b) The input-node pole is not split away.** The natural pole at A (1 MΩ with $C_{GS1}$ and the Miller-multiplied $C_{GD1}$, around $9\times10^5$ rad/s) stays where it is, so the loop has *two* low-frequency poles (A and B), and the phase approaches −180° while the loop gain is still large.

**(c) A badly placed right-half-plane zero.** The feedforward current cancels $M_2$'s current at $\omega_z = g_{m2}/C_C$, a right-half-plane (RHP) zero. With the new dominant pole $\omega_B \approx 1/(r_{O1}\,g_{m2}r_{O2}\,C_C)$,

$$\frac{\omega_z}{\omega_B} = g_{m2}r_{O1}\cdot g_{m2}r_{O2} \approx 27.7\times13.9 \approx 380,$$

independent of $C_C$. At the zero the loop gain is still about $T_0/380 \approx 300$, so the zero lies far *below* the crossover.

**(d) Above the zero the loop turns into positive feedback.** For $\omega > g_{m2}/C_C$, $C_C$ shorts the gate and drain of $M_2$, which acts like a diode ($\approx 1/g_{m2}$), and B and Y move together. What remains is the loop Y → $M_3$ → A → $M_1$ → B = Y, with only **two** inversions ($M_3$ and $M_1$), i.e. *positive* feedback, with gain

$$g_{m3}r_{O3}\cdot\frac{g_{m1}}{g_{m2}} \approx 164\times\frac{5.18}{2.77} \approx 300 \gg 1 .$$

A positive-feedback loop with gain above 1 has a right-half-plane closed-loop pole, so *no* value of $C_C$ stabilizes this placement. A numerical check of the closed-loop poles confirms right-half-plane poles for every $C_C$ from 1 pF to 1 µF (for the larger values, a real unstable pole near $1.8\times10^9$ rad/s).

### Step 4 — Capacitor across $M_3$ (from Y to A)

The capacitor now connects the output back to A around the forward path A → $M_1$ → $M_2$ → Y, which is **non-inverting** with gain $A \approx +52\times14 \approx +720$.

**(a) Negative Miller capacitance.** Seen from A, a capacitor across a gain $A$ looks like $(1 - A)C_C \approx -719\,C_C$, a *negative* capacitance: it cannot create a dominant pole and instead partly cancels the real capacitance at A.

**(b) The feedback changes sign at high frequency.** The current that the output returns to A is

$$I_{fb} = -g_{m3}V_Y + sC_CV_Y = -(g_{m3} - sC_C)V_Y .$$

$M_3$'s part is negative feedback, but the capacitor injects current *in phase* with $V_Y$. Above $\omega = g_{m3}/C_C$ the capacitive path dominates, and the loop, with its enormous forward gain, becomes a positive-feedback loop. With $C_C = 1$ pF, for example, this happens above $1.6\times10^8$ rad/s, and the closed loop has right-half-plane poles (one near $g_{m3}/C_C$): the capacitor destabilizes the amplifier instead of compensating it.

### Result

- **Across $M_1$ (correct):** the capacitor spans an inverting gain of about 52 and is multiplied onto the 1-MΩ input node, so a small $C_C$ creates the dominant pole and splits the other poles; the residual loop through its feedforward path has a gain of only ≈ 0.44.
- **Across $M_2$:** the Miller effect acts at a 10-kΩ node with a gain of only ≈ 14, the input-node pole remains (two low-frequency poles), and the RHP zero $g_{m2}/C_C$ lies far below the crossover. Above it $M_2$ behaves as a diode and the remaining $M_3$–$M_1$ loop is positive feedback with gain ≈ 300, so no value of $C_C$ makes the amplifier stable.
- **Across $M_3$:** the capacitor closes a path around the *non-inverting* forward amplifier (gain ≈ +700). Its Miller capacitance is negative, and above $g_{m3}/C_C$ the capacitive feedback current overrides $M_3$'s, turning the loop into positive feedback; it destabilizes the circuit.

**Common mistake.** Assuming any gate–drain capacitor in the loop is equivalent because "it adds a pole". What matters is which node receives the Miller-multiplied capacitance (it must be the highest-impedance node) and whether the feedforward path leaves a residual loop gain below 1.

**Common mistake.** Treating $M_2$ as a source follower. It is a PMOS common-source stage with an inverting gain of about 14, which is exactly why the A → Y forward path is non-inverting.

**Common mistake.** Assuming the forward path from input to output is inverting, so that a capacitor from the output to the input gives "Miller" negative feedback. With two inverting stages, a capacitor from Y to A gives positive feedback.
