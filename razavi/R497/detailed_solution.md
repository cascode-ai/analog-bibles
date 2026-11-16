# Detailed solution - R497

**Approach.** The compensation capacitor across $M_1$ creates a zero where the feedforward current through the capacitor equals $M_1$'s own current. A series resistor $R_z$ moves this zero to $1/[C_C(1/g_{m1} - R_z)]$, i.e. into the left half plane when $R_z > 1/g_{m1}$. Identify the first non-dominant pole of the compensated loop (it is at the output node Y), then choose $R_z$ so that the left-half-plane zero sits on it.

### Step 1 — Small-signal parameters

Bias: $I_{D1} = |I_{D2}| = 1$ mA, $I_{D3} = 10\ \mu$A, all devices saturated (no body effect; sources on the rails).

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 5.18\ \mathrm{mS}, \qquad \frac{1}{g_{m1}} = 193\ \Omega, \qquad r_{O1} = 10\ \mathrm{k}\Omega,\\
g_{m2} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 2.77\ \mathrm{mS}, \qquad r_{O2} = \frac{1}{(0.2)(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\\
g_{m3} &= 0.164\ \mathrm{mS}, \qquad r_{O3} = \frac{1}{(0.1)(10\ \mu\mathrm{A})} = 1\ \mathrm{M}\Omega .
\end{aligned}
$$

Capacitances ($C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$, $C_{GD} = WC_{ov}$): $C_{GS1} = 84$ fF, $C_{GD1} = 20$ fF, $C_{GS2} = 79$ fF, $C_{GD2} = 15$ fF, $C_{GS3} = 8.4$ fF, $C_{GD3} = 2$ fF.

With the loop broken at the gate of $M_3$, the nodes are A (gate of $M_1$; $r_{O3}$ and $C_{A0} = C_{GS1} + C_{GD3} = 86$ fF to ground), B (drain of $M_1$; $r_{O1}$, $C_{GS2}$) and Y (output; $r_{O2}$ and the replica load $C_{Y0} = C_{GS3} + C_{GD3} = 10.4$ fF). The compensation branch $R_z$–$C_C$ connects A to B, in parallel with $C_{GD1}$.

<!-- diagram: diagram-01.cir -->

### Step 2 — The zero of the compensated $M_1$ stage

At the zero, the voltage at B is zero while $V_A \ne 0$. Then $r_{O1}$, $C_{GS2}$ and $C_{GD2}$ carry no current from B, and KCL at B involves only the current arriving from A and $M_1$'s current:

$$\frac{V_A}{R_z + 1/(sC_C)} + sC_{GD1}V_A = g_{m1}V_A .$$

$C_{GD1} = 20$ fF is small compared with $C_C = 0.6$ pF, so drop that term (its effect is checked below). Then

$$
\begin{aligned}
R_z + \frac{1}{s_zC_C} &= \frac{1}{g_{m1}}\\
s_z &= \frac{1}{C_C\left(g_{m1}^{-1} - R_z\right)} .
\end{aligned}
$$

- $R_z = 0$: $s_z = +g_{m1}/C_C$, a right-half-plane (RHP) zero that adds phase lag.
- $R_z = 1/g_{m1}$: the zero moves to infinity.
- $R_z > 1/g_{m1}$: the zero is in the left half plane (LHP) at $\omega_z = 1/[C_C(R_z - g_{m1}^{-1})]$; it adds phase *lead* and can cancel a pole.

### Step 3 — The first non-dominant pole

With $C_1 = C_C + C_{GD1} = 0.62$ pF across $M_1$, the dominant pole is at A: $\omega_{p1} \approx 1/[r_{O3}(1 + g_{m1}r_{O1})C_1] = 1/[(1\ \mathrm{M}\Omega)(52.8)(0.62\ \mathrm{pF})] = 3.1\times10^4$ rad/s.

Above $\omega_{p1}$, node A simply follows B through the capacitive divider $C_1$–$C_{A0}$, $V_A = V_B\,C_1/(C_1 + C_{A0})$, so $M_1$ acts almost like a diode at B (pole splitting). Node B is then described by

$$
\begin{aligned}
G_B' &= \frac{1}{r_{O1}} + g_{m1}\frac{C_1}{C_1 + C_{A0}} = 0.1\ \mathrm{mS} + (5.18\ \mathrm{mS})\frac{620}{706} = 4.65\ \mathrm{mS}\quad(R_B' = 215\ \Omega),\\
C_B' &= C_{GS2} + \frac{C_1C_{A0}}{C_1 + C_{A0}} = 79 + \frac{620\times86}{706} = 154.5\ \mathrm{fF},
\end{aligned}
$$

and the two remaining poles are those of the B–Y pair coupled by $C_{GD2}$ and $g_{m2}$: the roots of $1 + as + bs^2$ with

$$
\begin{aligned}
a &= R_B'(1 + g_{m2}r_{O2})C_{GD2} + R_B'C_B' + r_{O2}(C_{GD2} + C_{Y0}) = 48.0 + 33.3 + 127 = 208.2\ \mathrm{ps},\\
b &= R_B'r_{O2}\left(C_B'C_{GD2} + C_B'C_{Y0} + C_{GD2}C_{Y0}\right) = 4.39\times10^{-21}\ \mathrm{s^2}.
\end{aligned}
$$

$$\omega = \frac{a \mp \sqrt{a^2 - 4b}}{2b} \quad\Longrightarrow\quad \omega_{p2} = 5.4\times10^9\ \mathrm{rad/s},\qquad \omega_{p3} = 4.2\times10^{10}\ \mathrm{rad/s}.$$

The lower one, $\omega_{p2}$, is the **first non-dominant pole**, associated mainly with the output node Y; B, made low-impedance by pole splitting, is at $\omega_{p3}$. (A simple per-node estimate of the Y pole, $1/[r_{O2}(C_{GD2} + C_{GS3} + C_{GD3})] = 1/(5\ \mathrm{k}\Omega\times25.4\ \mathrm{fF}) = 7.9\times10^9$ rad/s, is rougher because it ignores the Miller loading of $C_{GD2}$.)

### Step 4 — Place the LHP zero on $\omega_{p2}$

Require $\omega_z = \omega_{p2}$:

$$
\begin{aligned}
\frac{1}{C_C\left(R_z - g_{m1}^{-1}\right)} &= \omega_{p2}\\
R_z &= \frac{1}{g_{m1}} + \frac{1}{\omega_{p2}C_C} .
\end{aligned}
$$

Numerically:

$$
\begin{aligned}
\frac{1}{\omega_{p2}C_C} &= \frac{1}{(5.4\times10^9\ \mathrm{rad/s})(0.6\ \mathrm{pF})} = \frac{1}{3.25\times10^{-3}\ \mathrm{S}} = 307\ \Omega,\\
R_z &= 193\ \Omega + 307\ \Omega = 500\ \Omega .
\end{aligned}
$$

With the per-node estimate $\omega_{p2} = 7.9\times10^9$ rad/s instead: $R_z = 193 + 212 = 404\ \Omega$.

**Effect of $C_{GD1}$.** Keeping the $sC_{GD1}$ term in Step 2 replaces $1/g_{m1}$ by $1/(g_{m1} + \omega_{p2}C_{GD1}) = 1/(5.29\ \mathrm{mS}) = 189\ \Omega$, a change of only 4 Ω.

### Step 5 — Check with the full model

Adding $R_z$ slightly modifies the pole-splitting network, so the poles move a little: with $R_z = 500\ \Omega$ the full nodal analysis gives the first non-dominant pole at $5.8\times10^9$ rad/s and the LHP zero at $5.4\times10^9$ rad/s, i.e. a near-cancellation (exact coincidence occurs for $R_z \approx 476\ \Omega$). The loop then behaves almost like a single-pole system up to the remaining high-frequency poles, and its phase margin rises from about 30° (plain 0.6-pF capacitor) to about 77°.

### Result

$$R_z = \frac{1}{g_{m1}} + \frac{1}{\omega_{p2}C_C} = 193\ \Omega + \frac{1}{(5.4\times10^9\ \mathrm{rad/s})(0.6\ \mathrm{pF})} \approx 193 + 307 \approx 0.5\ \mathrm{k}\Omega,$$

where $\omega_{p2} \approx 5.4\times10^9$ rad/s is the first non-dominant pole (output node Y) of the loop compensated with 0.6 pF. (Using the per-node estimate $\omega_{p2} \approx 7.9\times10^9$ rad/s gives ≈ 0.4 kΩ.) With this resistor the phase margin is about 77°.

**Common mistake.** Choosing $R_z = 1/g_{m1} \approx 193\ \Omega$. That moves the zero to infinity, which removes the RHP zero but does not cancel any pole; the extra $1/(\omega_{p2}C_C)$ is needed to bring the zero back to the LHP, on top of $\omega_{p2}$.

**Common mistake.** Copying the two-stage op-amp formula $R_z = (1 + C_L/C_C)/g_m$ with an unrelated capacitance. That expression assumes the non-dominant pole is $g_m/C_L$ of the stage whose gate–drain carries $C_C$; here the first non-dominant pole is at node Y, set by $r_{O2}$ and the capacitances there, and must be found for this circuit.

**Common mistake.** Using $R_z < 1/g_{m1}$ (the zero stays in the RHP), or placing the zero on the dominant pole, which would undo the compensation instead of cancelling the troublesome non-dominant pole.
