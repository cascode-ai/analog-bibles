# Detailed solution - R500

**Approach.** The compensation capacitor across $M_1$ produces a zero where the feedforward current through it equals $M_1$'s current. A series resistor $R_z$ moves the zero to $1/[C_C(1/g_{m1} - R_z)]$, into the left half plane for $R_z > 1/g_{m1}$. With the 0.5-pF load, the first non-dominant pole of the compensated loop is the output node; choose $R_z$ so that the zero lands on it.

### Step 1 — Small-signal parameters

Bias: $I_{D1} = |I_{D2}| = 1$ mA, $I_{D3} = 10\ \mu$A; all devices saturated.

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 5.18\ \mathrm{mS}, \qquad \frac{1}{g_{m1}} = 193\ \Omega,\\
r_{O2} &= \frac{1}{\lambda_pI_{D2}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega, \qquad g_{m2} = 2.77\ \mathrm{mS},\\
r_{O1} &= 10\ \mathrm{k}\Omega, \qquad g_{m3} = 0.164\ \mathrm{mS}, \qquad r_{O3} = 1\ \mathrm{M}\Omega .
\end{aligned}
$$

Device capacitances ($C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$, $C_{GD} = WC_{ov}$): $C_{GS1} = 84$, $C_{GD1} = 20$, $C_{GS2} = 79$, $C_{GD2} = 15$, $C_{GS3} = 8.4$, $C_{GD3} = 2$ fF.

Opened loop (test source at the gate of $M_3$, replica of its gate capacitance at Y): node A (gate of $M_1$; $r_{O3}$, 86 fF), node B (drain of $M_1$; $r_{O1}$, $C_{GS2}$), node Y ($r_{O2}$, $C_L + C_{GS3} + C_{GD3} = 510.4$ fF); $C_{GD1}$ and the branch $R_z$–$C_C$ ($C_C = 9$ pF) bridge A and B, and $C_{GD2}$ bridges B and Y.

<!-- diagram: diagram-01.cir -->

### Step 2 — The zero with a series resistor

At the zero $V_B = 0$ while $V_A \ne 0$, so nothing flows from B into $r_{O1}$, $C_{GS2}$ or $C_{GD2}$, and KCL at B balances the current arriving from A against $M_1$'s current:

$$\frac{V_A}{R_z + 1/(sC_C)} + sC_{GD1}V_A = g_{m1}V_A .$$

Dropping $C_{GD1} = 20$ fF next to $C_C = 9$ pF:

$$
\begin{aligned}
R_z + \frac{1}{s_zC_C} &= \frac{1}{g_{m1}}\\
s_z &= \frac{1}{C_C\left(g_{m1}^{-1} - R_z\right)} .
\end{aligned}
$$

For $R_z = 0$ this is the right-half-plane (RHP) zero $g_{m1}/C_C$; at $R_z = 1/g_{m1}$ it moves to infinity; for $R_z > 1/g_{m1}$ it becomes a left-half-plane (LHP) zero at $\omega_z = 1/[C_C(R_z - g_{m1}^{-1})]$, which adds phase lead and can cancel a pole.

### Step 3 — The first non-dominant pole

With 9 pF across $M_1$, the dominant pole is at A, $\omega_{p1} \approx 1/[r_{O3}(1 + g_{m1}r_{O1})(C_C + C_{GD1})] = 1/[(1\ \mathrm{M}\Omega)(52.8)(9.02\ \mathrm{pF})] = 2.1\times10^3$ rad/s, and by pole splitting $M_1$ is essentially diode-connected through $C_C$ at high frequency, making B a fast node (≈ $3\times10^{10}$ rad/s). The first non-dominant pole is therefore the **output node Y**, whose capacitance is dominated by the load:

$$\omega_{p2} \approx \frac{1}{r_{O2}\left(C_L + C_{GD2} + C_{GS3} + C_{GD3}\right)} = \frac{1}{(5\ \mathrm{k}\Omega)(0.525\ \mathrm{pF})} = \frac{1}{2.63\ \mathrm{ns}} = 3.8\times10^8\ \mathrm{rad/s}.$$

A more complete calculation (node B reduced to $R_B' = 1/[1/r_{O1} + g_{m1}C_1/(C_1 + C_{A0})] = 191\ \Omega$ and $C_B' = 164$ fF, then the two-node B–Y quadratic) gives $\omega_{p2} = 3.75\times10^8$ rad/s, slightly lower because of the Miller loading of $C_{GD2}$.

### Step 4 — Place the LHP zero on $\omega_{p2}$

Set $\omega_z = \omega_{p2}$:

$$
\begin{aligned}
\frac{1}{C_C\left(R_z - g_{m1}^{-1}\right)} &= \omega_{p2}\\
R_z &= \frac{1}{g_{m1}} + \frac{1}{\omega_{p2}C_C} .
\end{aligned}
$$

With $\omega_{p2} = 3.75\times10^8$ rad/s:

$$
\begin{aligned}
\frac{1}{\omega_{p2}C_C} &= \frac{1}{(3.75\times10^8\ \mathrm{rad/s})(9\ \mathrm{pF})} = \frac{1}{3.375\ \mathrm{mS}} = 296\ \Omega,\\
R_z &= 193\ \Omega + 296\ \Omega = 489\ \Omega \approx 0.49\ \mathrm{k}\Omega .
\end{aligned}
$$

(With the per-node $\omega_{p2} = 3.8\times10^8$ rad/s, $R_z = 193 + 292 = 485\ \Omega$; the difference is negligible.)

### Step 5 — Check

With $R_z = 489\ \Omega$ the full nodal analysis places the LHP zero at $-3.75\times10^8$ rad/s, on top of the output pole at $3.75\times10^8$ rad/s, which $R_z$ hardly moves (it is set mainly by $r_{O2}$ and $C_L$). With the output pole cancelled and the remaining high-frequency poles near $2\times10^{10}$ rad/s, the loop behaves like a one-pole system well beyond the crossover (≈ $2.5\times10^8$ rad/s): the phase margin becomes about 89°, compared with about 37° for the plain 9-pF capacitor.

### Result

$$R_z = \frac{1}{g_{m1}} + \frac{1}{\omega_{p2}C_C} = 193\ \Omega + \frac{1}{(3.75\times10^8\ \mathrm{rad/s})(9\ \mathrm{pF})} \approx 193 + 296 \approx 0.49\ \mathrm{k}\Omega,$$

where $\omega_{p2} \approx 1/[r_{O2}(C_L + C_{GD2} + C_{GS3} + C_{GD3})] \approx 3.75$–$3.8\times10^8$ rad/s is the output-node pole. The zero then moves into the left half plane onto the output pole, and the phase margin rises to about 89°.

**Common mistake.** Answering $R_z = 1/g_{m1} \approx 193\ \Omega$. That only sends the zero to infinity; putting it on the output pole needs the additional $1/(\omega_{p2}C_C) \approx 296\ \Omega$.

**Common mistake.** Aligning the zero with the wrong pole, e.g. the pole at the drain of $M_1$ or the dominant input-node pole. After compensation the drain of $M_1$ is a fast node (≈ $3\times10^{10}$ rad/s); the pole that limits the phase margin is the output pole set by $r_{O2}$ and the 0.5-pF load.

**Common mistake.** Using $R_z < 1/g_{m1}$, which leaves the zero in the right half plane, adding phase lag instead of cancelling a pole.
