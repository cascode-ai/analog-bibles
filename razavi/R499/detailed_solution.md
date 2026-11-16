# Detailed solution - R499

**Approach.** A capacitor $C_C$ across the gate and drain of $M_1$ is Miller-multiplied at the high-resistance input node, creating a low dominant pole; by pole splitting it also makes the drain of $M_1$ a fast, low-impedance node. With the 0.5-pF load, the first non-dominant pole is the output node Y. Size $C_C$ with the two-pole rule for 60° (the right-half-plane zero set aside, since it is to be cancelled by a series resistor), list the poles after compensation, and then quantify the effect of the zero.

### Step 1 — Small-signal parameters and capacitances

Bias: $I_{D3} = 10\ \mu$A, $I_{D1} = |I_{D2}| = 1$ mA; $V_Y = 0.82$ V, $V_A = 1.09$ V, $V_B = 1.48$ V; all devices saturated (no body effect).

$$
\begin{aligned}
g_{m1} &= 5.18\ \mathrm{mS}, & r_{O1} &= 10\ \mathrm{k}\Omega, & g_{m1}r_{O1} &= 51.8,\\
g_{m2} &= 2.77\ \mathrm{mS}, & r_{O2} &= 5\ \mathrm{k}\Omega, & g_{m2}r_{O2} &= 13.9,\\
g_{m3} &= 0.164\ \mathrm{mS}, & r_{O3} &= 1\ \mathrm{M}\Omega, & g_{m3}r_{O3} &= 163.7,
\end{aligned}
$$

from $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ and $r_O = 1/(\lambda I_D)$. Loop gain (loop broken at the gate of $M_3$; three inversions, negative feedback): $T_0 = 163.7\times51.8\times13.9 = 1.17\times10^5$.

Capacitances ($C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$, $C_{GD} = WC_{ov}$): $C_{GS1} = 84$, $C_{GD1} = 20$, $C_{GS2} = 79$, $C_{GD2} = 15$, $C_{GS3} = 8.4$, $C_{GD3} = 2$ fF.

Nodes of the opened loop: A ($r_{O3}$, $C_{A0} = C_{GS1} + C_{GD3} = 86$ fF), B ($r_{O1}$, $C_{GS2}$), Y ($r_{O2}$, $C_Y = C_L + C_{GS3} + C_{GD3} = 510.4$ fF, the replica of $M_3$'s gate capacitance included). $C_{GD1}$ and $C_C$ bridge A–B; $C_{GD2}$ bridges B–Y.

<!-- diagram: diagram-01.cir -->

Without compensation the poles are $8.7\times10^5$, $3.5\times10^8$ and $1.1\times10^{10}$ rad/s, and the loop is unstable (PM ≈ −32°).

### Step 2 — Dominant pole and gain-bandwidth with $C_C$

Let $C_1 = C_C + C_{GD1}$. Across the gain $-g_{m1}r_{O1}$ it is Miller-multiplied at A:

$$\omega_{p1} \approx \frac{1}{r_{O3}(1 + g_{m1}r_{O1})C_1}, \qquad \mathrm{GBW} = T_0\,\omega_{p1} \approx \frac{g_{m3}\,g_{m2}r_{O2}}{C_C + C_{GD1}} = \frac{(0.164\ \mathrm{mS})(13.9)}{C_C + C_{GD1}} = \frac{2.27\ \mathrm{mS}}{C_C + C_{GD1}} .$$

### Step 3 — First non-dominant pole: the output node

Above $\omega_{p1}$, node A follows B through the divider $C_1$–$C_{A0}$, so $M_1$ behaves almost like a diode at B. With $C_1 \approx 9$ pF (anticipating the result):

$$
\begin{aligned}
G_B' &= \frac{1}{r_{O1}} + g_{m1}\frac{C_1}{C_1 + C_{A0}} = 0.1 + 5.18\times0.991 = 5.23\ \mathrm{mS}\quad(R_B' = 191\ \Omega),\\
C_B' &= C_{GS2} + \frac{C_1C_{A0}}{C_1 + C_{A0}} = 79 + 85 = 164\ \mathrm{fF}.
\end{aligned}
$$

The two higher poles are the roots of $1 + as + bs^2$ for the B–Y pair (coupling $C_{GD2}$, transconductance $g_{m2}$):

$$
\begin{aligned}
a &= R_B'(1 + g_{m2}r_{O2})C_{GD2} + R_B'C_B' + r_{O2}(C_{GD2} + C_Y) = 0.043 + 0.031 + 2.627 = 2.701\ \mathrm{ns},\\
b &= R_B'r_{O2}\left(C_B'C_{GD2} + C_B'C_Y + C_{GD2}C_Y\right) = 8.98\times10^{-20}\ \mathrm{s^2},
\end{aligned}
$$

$$\omega_{p2,p3} = \frac{a \mp \sqrt{a^2 - 4b}}{2b} \quad\Longrightarrow\quad \omega_{p2} = 3.75\times10^8\ \mathrm{rad/s}, \qquad \omega_{p3} = 3.0\times10^{10}\ \mathrm{rad/s}$$

(the widely-spaced-root approximations $1/a = 3.70\times10^8$ rad/s and $a/b = 3.0\times10^{10}$ rad/s are close).

$\omega_{p2}$ is the output node: $a$ is dominated by $r_{O2}(C_L + \ldots)$, and indeed the per-node estimate $1/[r_{O2}(C_L + C_{GD2} + C_{GS3} + C_{GD3})] = 1/(5\ \mathrm{k}\Omega\times0.525\ \mathrm{pF}) = 3.8\times10^8$ rad/s is almost the same. $\omega_{p3}$ is node B, pushed up by pole splitting. Since $\omega_{p2}$ hardly depends on $C_C$, no iteration is needed.

<!-- diagram: diagram-02.cir -->

### Step 4 — $C_C$ for a 60° phase margin

Two-pole rule: with the dominant pole contributing 90°, PM = 60° requires $\omega_u = \omega_{p2}\tan30°$; including the magnitude drop due to $\omega_{p2}$, $\mathrm{GBW} = \omega_u\sqrt{1 + 1/3} = \tfrac23\omega_{p2}$:

$$
\begin{aligned}
\mathrm{GBW} &= \tfrac23\times3.75\times10^8 = 2.50\times10^8\ \mathrm{rad/s},\\
C_C + C_{GD1} &= \frac{2.27\ \mathrm{mS}}{2.50\times10^8\ \mathrm{rad/s}} = 9.07\ \mathrm{pF},\\
C_C &= 9.07 - 0.02 \approx 9\ \mathrm{pF}.
\end{aligned}
$$

(With the per-node $\omega_{p2} = 3.8\times10^8$ rad/s, 8.9 pF.) Compared with the unloaded circuit (about 0.6 pF), the 0.5-pF load lowers the output pole by about 15 times, so a 15-times larger $C_C$, and 15 times less bandwidth, is needed.

### Step 5 — Poles after compensation ($C_C = 9$ pF)

$$
\begin{aligned}
\omega_{p1} &= \frac{1}{(1\ \mathrm{M}\Omega)(52.8)(9.02\ \mathrm{pF})} = 2.1\times10^3\ \mathrm{rad/s}\quad(\approx 330\ \mathrm{Hz}),\ \text{input node A},\\
\omega_{p2} &\approx 3.75\times10^8\ \mathrm{rad/s}\quad(\approx 60\ \mathrm{MHz}),\ \text{output node Y},\\
\omega_{p3} &\approx 3.0\times10^{10}\ \mathrm{rad/s}\quad(\approx 4.7\ \mathrm{GHz}),\ \text{drain of } M_1 .
\end{aligned}
$$

A full three-node analysis gives $2.10\times10^3$, $3.75\times10^8$ and $2.97\times10^{10}$ rad/s. With the zero removed, the full model gives PM ≈ 60° at $C_C \approx 9.1$–9.2 pF, confirming the design.

**The zero.** The feedforward current through $C_C + C_{GD1}$ cancels $M_1$'s current at

$$\omega_z = +\frac{g_{m1}}{C_C + C_{GD1}} = \frac{5.18\ \mathrm{mS}}{9.02\ \mathrm{pF}} = 5.7\times10^8\ \mathrm{rad/s},$$

a right-half-plane (RHP) zero.

### Step 6 — Why the zero must be dealt with

At the crossover, $\omega_u/\omega_z \approx \mathrm{GBW}/\omega_z = g_{m3}g_{m2}r_{O2}/g_{m1} = 2.27/5.18 = 0.44$, whatever $C_C$ is, so the RHP zero always adds roughly 24–26° of phase lag:

- with a plain 9-pF capacitor the actual phase margin is only about 37°;
- reaching 60° with a plain capacitor would take $C_C \approx 80$ pF (dominant pole ≈ 230 rad/s, zero ≈ $6.3\times10^7$ rad/s), impractical in area and bandwidth;
- the practical solution is a resistor in series with $C_C$ that removes the zero or moves it onto $\omega_{p2}$, which is why the zero-neglected 9-pF design is the intended one.

### Result

$$C_C \approx 9\ \mathrm{pF}\quad\left(\mathrm{GBW} = \frac{g_{m3}g_{m2}r_{O2}}{C_C + C_{GD1}} = \tfrac23\,\omega_{p2},\ \omega_{p2} \approx 3.75\times10^8\ \mathrm{rad/s}\right),$$

with the RHP zero neglected (to be cancelled by a series resistor). Poles after compensation: ≈ $2.1\times10^3$ rad/s (input node), ≈ $3.75\times10^8$ rad/s (output node), ≈ $3\times10^{10}$ rad/s (drain of $M_1$); the RHP zero is at ≈ $5.7\times10^8$ rad/s. With a plain capacitor and the zero left in place, 60° would require ≈ 80 pF.

**Common mistake.** Using $\mathrm{GBW} = g_{m3}/C_C$ or $g_{m1}/C_C$. The gain of $M_2$ ($g_{m2}r_{O2} \approx 14$) follows the Miller-compensated stage inside the loop, so $\mathrm{GBW} = g_{m3}g_{m2}r_{O2}/(C_C + C_{GD1})$; omitting it gives a $C_C$ 14 times too small.

**Common mistake.** Computing the output pole with $1/g_{m2}$, as if $M_2$ were a source follower. $M_2$ is a common-source stage and the resistance at Y is $r_{O2} = 5$ kΩ, which together with $C_L$ sets the first non-dominant pole near $3.8\times10^8$ rad/s.

**Common mistake.** Reusing the unloaded result (≈ 0.6 pF) or claiming that a capacitor of a pF or two suffices. The load lowers the output pole about fifteenfold, and the GBW must fall with it.
