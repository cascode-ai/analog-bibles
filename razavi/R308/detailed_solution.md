# Detailed solution - R308

**Approach.** Model the differential pair, the current-mirror load and $C_1$ with small-signal elements ($\lambda = \gamma = 0$, so no $r_O$ and no body effect). First use the ideal tail to find the two drain currents of the pair. Then write KCL at the mirror node A and at the output, and add the two equations: this shows that the mirror node stays at ac ground, after which $C_1$ alone converts the signal current into the output voltage. The circuit turns out to be an integrator, $V_{out}/V_{in} = g_{m1}/(2C_1s)$, from which both frequency limits follow.

### Step 1 — Reading the circuit

From the figure:

- $M_1$ and $M_2$ form an NMOS differential pair; their sources are tied at node **P**, which is fed by the ideal tail current source $I_{SS}$. $V_{in}$ is applied between the gates: $V_{in} = V_{G1} - V_{G2}$.
- $M_3$ (PMOS) is **diode-connected** at node **A**, the drain of $M_1$. $M_4$ (PMOS) has its gate at A and its drain at the **output** (drain of $M_2$). $M_3$–$M_4$ is a current mirror.
- $C_1$ connects A to the output.

### Step 2 — Small-signal model

- $V_{DD}$ is an ac ground; the ideal tail current source is an open circuit, so nothing connects P to ground.
- **$M_1$, $M_2$:** drain-to-source currents $i_1 = g_{m1}(V_{G1} - V_P)$ and $i_2 = g_{m2}(V_{G2} - V_P)$, with $g_{m1} = g_{m2}$.
- **$M_3$, $M_4$:** both have their source at ac ground and their gate at A, so both have $v_{gs} = V_A$. Each carries a drain-to-source current $g_{m3}V_A$ (upward, from its drain to $V_{DD}$); the current each one delivers **down** into its drain node is therefore $-g_{m3}V_A$ (with $g_{m4} = g_{m3}$).
- **$C_1$** between A and the output. No $r_O$ anywhere.

<!-- diagram: diagram-01.cir -->

### Step 3 — Drain currents of the pair

The tail source is ideal, so the total signal current through P is zero:

$$i_1 + i_2 = 0 .$$

Write out the two currents with $g_{m1} = g_{m2}$:

$$
\begin{aligned}
g_{m1}(V_{G1} - V_P) + g_{m1}(V_{G2} - V_P) &= 0\\
V_P &= \frac{V_{G1} + V_{G2}}{2}.
\end{aligned}
$$

Substitute back:

$$i_1 = g_{m1}\left(V_{G1} - \frac{V_{G1} + V_{G2}}{2}\right) = \frac{g_{m1}V_{in}}{2}, \qquad i_2 = -\frac{g_{m1}V_{in}}{2}.$$

With $\lambda = 0$ these currents do not depend on the drain voltages, so they hold at every frequency.

### Step 4 — KCL at A and at the output

**KCL at A.** Current enters from $M_3$ ($-g_{m3}V_A$) and through $C_1$ from the output ($(V_{out} - V_A)C_1s$), and leaves through $M_1$ ($i_1$):

$$-g_{m3}V_A + (V_{out} - V_A)C_1s = i_1 . \qquad (1)$$

**KCL at the output.** Current enters from $M_4$ ($-g_{m3}V_A$) and through $C_1$ from A ($(V_A - V_{out})C_1s$), and leaves through $M_2$ ($i_2$):

$$-g_{m3}V_A + (V_A - V_{out})C_1s = i_2 . \qquad (2)$$

### Step 5 — The mirror node is an ac ground

Add (1) and (2). The two $C_1$ terms are equal and opposite and cancel:

$$-2g_{m3}V_A = i_1 + i_2 = 0 \quad\Longrightarrow\quad V_A = 0 .$$

This holds at all frequencies. **Why:** both mirror devices are controlled by the same voltage $V_A$, so they change their currents together, by $-g_{m3}V_A$ each. The pair, however, only *steers* current (its total is fixed by the ideal tail), so the net current it draws from A and the output together is zero. The only way to balance KCL for the two nodes taken together is $V_A = 0$: the mirror carries no signal current at all.

### Step 6 — $C_1$ integrates the signal current

With $V_A = 0$, equation (1) becomes

$$V_{out}C_1s = i_1 = \frac{g_{m1}V_{in}}{2},$$

so

$$\frac{V_{out}}{V_{in}}(s) = \frac{g_{m1}}{2C_1s}.$$

The signal current $i_1$ circulates around a loop: from the output through $C_1$ to A, down through $M_1$ to P, and up through $M_2$ back to the output ($M_2$'s current is $i_2 = -i_1$, i.e. $i_1$ flowing from source to drain). $C_1$ is the only element in that loop that converts current into voltage, so the output is the integral of $i_1$. (Equation (2) gives the same result: $-V_{out}C_1s = i_2 = -i_1$.)

### Step 7 — Very low and very high frequencies

**Very low frequencies** ($s\to0$):

$$\left|\frac{V_{out}}{V_{in}}\right| = \frac{g_{m1}}{2C_1\omega}\to\infty .$$

Check without the formula: with $C_1$ open, the circuit is the standard differential pair with active current-mirror load, whose gain is $g_{m1}(r_{O2}\parallel r_{O4})$. With $\lambda = 0$, $r_{O2}\parallel r_{O4} = \infty$, so the gain is infinite.

**Very high frequencies** ($s\to\infty$):

$$\frac{V_{out}}{V_{in}}\to0 .$$

Check without the formula: with $C_1$ a short, A and the output become one node. Both PMOS devices are then diode-connected, and the pair draws a total current $i_1 + i_2 = 0$ from that combined node. So the combined node does not move: $V_{out} = V_A = 0$.

**Transition.** The magnitude falls as $1/\omega$ (−20 dB/decade) at all frequencies, with a constant phase of $-90^\circ$, and crosses unity at

$$\omega_u = \frac{g_{m1}}{2C_1}.$$

### Result

$$\frac{V_{out}}{V_{in}}(s) = \frac{g_{m1}}{2C_1s}$$

The circuit is an ideal integrator. The gain is **infinite at very low frequencies** (no resistive path at the output when $\lambda = 0$ and the mirror load is ideal) and **zero at very high frequencies** ($C_1$ shorts the output to the mirror node, both PMOS devices become diode-connected, and the two branch currents cancel). The unity-gain frequency is $\omega_u = g_{m1}/(2C_1)$. The mirror node A stays at ac ground at all frequencies.

**Common mistake.** Quoting a finite low-frequency gain such as $g_{m1}/g_{m3}$. That would be the gain if the output were loaded by a diode, but at low frequency $C_1$ is open and the output sees only $M_4$ (a current source driven by the mirror) and $M_2$, both with infinite $r_O$ for $\lambda = 0$.

**Common mistake.** A finite high-frequency gain such as $g_{m1}/(2g_{m3})$ or $1/2$. When $C_1$ shorts A to the output, the pair pushes $i_1$ into one side and pulls $-i_1$ from the other side of the same node, so its net effect is zero and $V_{out}\to0$.

**Common mistake.** Treating $M_3$ as a current source. $M_3$ is diode-connected (its gate is tied to its drain at A), and $M_4$ shares its gate; it is this matched pair that forces $V_A = 0$.
