# Detailed solution - R308

**Approach.** With $\lambda = \gamma = 0$ there is no $r_O$ and no body effect. The ideal tail fixes the two drain currents of the pair. KCL at the mirror node A and at the output, added together, shows that A stays at ac ground, after which $C_1$ alone converts the signal current into the output voltage. The circuit is an integrator, $V_{out}/V_{in} = g_{m1}/(2C_1s)$, from which both frequency limits follow.

### Step 1 — Small-signal model

Call the common source node of $M_1$, $M_2$ P and the drain of $M_1$ (gates of $M_3$, $M_4$) A; $V_{in} = V_{G1} - V_{G2}$. $V_{DD}$ is an ac ground and the ideal tail is an open circuit, so nothing connects P to ground.

- **$M_1$, $M_2$:** drain-to-source currents $i_1 = g_{m1}(V_{G1} - V_P)$ and $i_2 = g_{m2}(V_{G2} - V_P)$, with $g_{m1} = g_{m2}$.
- **$M_3$, $M_4$:** source at ac ground and gate at A, so $v_{gs} = V_A$ for both. Each draws a current $g_{m3}V_A$ from its drain node (A or the output) to ac ground ($V_{DD}$), i.e. delivers $-g_{m3}V_A$ into that node ($g_{m4} = g_{m3}$).
- **$C_1$** between A and the output.

<!-- diagram: diagram-01.cir -->

### Step 2 — Drain currents of the pair

The tail is ideal, so the total signal current through P is zero. With $g_{m1} = g_{m2}$:

$$
\begin{aligned}
i_1 + i_2 = g_{m1}(V_{G1} - V_P) + g_{m1}(V_{G2} - V_P) &= 0\\
V_P &= \frac{V_{G1} + V_{G2}}{2},
\end{aligned}
$$

$$i_1 = g_{m1}\left(V_{G1} - \frac{V_{G1} + V_{G2}}{2}\right) = \frac{g_{m1}V_{in}}{2}, \qquad i_2 = -\frac{g_{m1}V_{in}}{2}.$$

With $\lambda = 0$ these currents do not depend on the drain voltages, so they hold at every frequency.

### Step 3 — KCL at A and at the output

At A, $-g_{m3}V_A$ enters from $M_3$ and $(V_{out} - V_A)C_1s$ through $C_1$, and $i_1$ leaves through $M_1$:

$$-g_{m3}V_A + (V_{out} - V_A)C_1s = i_1 . \qquad (1)$$

At the output, $-g_{m3}V_A$ enters from $M_4$ and $(V_A - V_{out})C_1s$ through $C_1$, and $i_2$ leaves through $M_2$:

$$-g_{m3}V_A + (V_A - V_{out})C_1s = i_2 . \qquad (2)$$

### Step 4 — The mirror node is an ac ground

Adding (1) and (2), the $C_1$ terms cancel:

$$-2g_{m3}V_A = i_1 + i_2 = 0 \quad\Longrightarrow\quad V_A = 0$$

at all frequencies. Both mirror devices change their currents together, by $-g_{m3}V_A$ each, while the pair only *steers* current (its total is fixed by the ideal tail); so KCL for A and the output taken together requires $V_A = 0$, and the mirror carries no signal current.

### Step 5 — $C_1$ integrates the signal current

With $V_A = 0$, (1) becomes

$$V_{out}C_1s = i_1 = \frac{g_{m1}V_{in}}{2},$$

$$\frac{V_{out}}{V_{in}}(s) = \frac{g_{m1}}{2C_1s}.$$

The signal current $i_1$ circulates from the output through $C_1$ to A, down through $M_1$ to P and up through $M_2$ ($i_2 = -i_1$) back to the output; $C_1$ is the only element in that loop that converts current into voltage. (Equation (2) gives the same result: $-V_{out}C_1s = i_2 = -i_1$.)

### Step 6 — Very low and very high frequencies

**Very low frequencies** ($s\to0$):

$$\left|\frac{V_{out}}{V_{in}}\right| = \frac{g_{m1}}{2C_1\omega}\to\infty .$$

Check: with $C_1$ open, this is the differential pair with active current-mirror load, of gain $g_{m1}(r_{O2}\parallel r_{O4})$, infinite for $\lambda = 0$.

**Very high frequencies** ($s\to\infty$):

$$\frac{V_{out}}{V_{in}}\to0 .$$

Check: with $C_1$ a short, A and the output are one node, both PMOS devices are diode-connected, and the pair draws a total current $i_1 + i_2 = 0$ from it, so $V_{out} = V_A = 0$.

**Transition.** The magnitude falls as $1/\omega$ (−20 dB/decade) at all frequencies, with a constant phase of $-90^\circ$, and crosses unity at

$$\omega_u = \frac{g_{m1}}{2C_1}.$$

### Result

$$\frac{V_{out}}{V_{in}}(s) = \frac{g_{m1}}{2C_1s}$$

The circuit is an ideal integrator. The gain is **infinite at very low frequencies** (no resistive path at the output when $\lambda = 0$ and the mirror load is ideal) and **zero at very high frequencies** ($C_1$ shorts the output to the mirror node, both PMOS devices become diode-connected, and the two branch currents cancel). The unity-gain frequency is $\omega_u = g_{m1}/(2C_1)$. The mirror node A stays at ac ground at all frequencies.

**Common mistake.** Quoting a finite low-frequency gain such as $g_{m1}/g_{m3}$, as if the output had a diode load. At low frequency $C_1$ is open and the output sees only $M_4$ (a current source driven by the mirror) and $M_2$, both with infinite $r_O$ for $\lambda = 0$.

**Common mistake.** A finite high-frequency gain such as $g_{m1}/(2g_{m3})$ or $1/2$. With A and the output shorted, the pair pushes $i_1$ into the merged node and pulls $-i_1$ from it, so its net effect is zero and $V_{out}\to0$.

**Common mistake.** Treating $M_3$ as a current source. It is diode-connected at A and $M_4$ shares its gate; this matched pair forces $V_A = 0$.
