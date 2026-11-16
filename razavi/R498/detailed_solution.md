# Detailed solution - R498

**Approach.** Compute the bias point, small-signal parameters and device capacitances, then break the loop at the gate of $M_3$. The input node (resistance $r_{O3}$, Miller-multiplied $C_{GD1}$) gives the dominant pole. Above it, the input node just follows the drain of $M_1$ through a capacitive divider, which reduces the circuit to a two-node system; with the heavy 0.5-pF load, the output node Y gives the second pole, while the drain of $M_1$ is split away to a high frequency.

### Step 1 — Bias point and small-signal parameters

Call the input node (gate of $M_1$) A and the drain of $M_1$ B. With $I_{in} = 0$: $I_{D3} = 10\ \mu$A, $I_{D1} = |I_{D2}| = 1$ mA, and all sources are on the rails (no body effect):

$$V_Y = V_{GS3} = 0.7 + 0.122 = 0.82\ \mathrm{V}, \qquad V_A = V_{GS1} = 0.7 + 0.386 = 1.09\ \mathrm{V}, \qquad V_B = 3 - (0.8 + 0.722) = 1.48\ \mathrm{V},$$

so every device has $|V_{DS}| > |V_{ov}|$ and is saturated.

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu)(100)(1\ \mathrm{m})} = 5.18\ \mathrm{mS}, & r_{O1} &= \frac{1}{(0.1)(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
g_{m2} &= \sqrt{2(38.4\ \mu)(100)(1\ \mathrm{m})} = 2.77\ \mathrm{mS}, & r_{O2} &= \frac{1}{(0.2)(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\\
g_{m3} &= \sqrt{2(134\ \mu)(10)(10\ \mu)} = 0.164\ \mathrm{mS}, & r_{O3} &= \frac{1}{(0.1)(10\ \mu\mathrm{A})} = 1\ \mathrm{M}\Omega .
\end{aligned}
$$

**Loop gain** (three inverting stages, so negative feedback):

$$T_0 = (g_{m3}r_{O3})(g_{m1}r_{O1})(g_{m2}r_{O2}) = 163.7\times51.8\times13.9 = 1.17\times10^5 .$$

### Step 2 — Capacitances and the opened loop

With $C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$ and $C_{GD} = WC_{ov}$ ($C_{ox} = 3.84\ \mathrm{fF/\mu m^2}$, $L = 0.5\ \mu$m):

$$C_{GS1} = 64 + 20 = 84\ \mathrm{fF},\ C_{GD1} = 20\ \mathrm{fF};\quad C_{GS2} = 64 + 15 = 79\ \mathrm{fF},\ C_{GD2} = 15\ \mathrm{fF};\quad C_{GS3} = 6.4 + 2 = 8.4\ \mathrm{fF},\ C_{GD3} = 2\ \mathrm{fF}.$$

With a test source on the gate of $M_3$ (and a replica of $M_3$'s gate capacitance, 10.4 fF, left at Y), A has $r_{O3}$ and $C_{A0} = C_{GS1} + C_{GD3} = 86$ fF to ground and $C_{GD1}$ to B; B has $r_{O1}$, $C_{GS2} = 79$ fF to ac ground and $C_{GD2}$ to Y; Y has $r_{O2}$ and $C_{Y} = C_L + C_{GS3} + C_{GD3} = 500 + 10.4 = 510.4$ fF to ground.

<!-- diagram: diagram-01.cir -->

### Step 3 — Dominant pole at the input node A

$C_{GD1}$ spans the gain $-g_{m1}r_{O1} = -51.8$, so it appears at A multiplied by $1 + g_{m1}r_{O1} = 52.8$:

$$
\begin{aligned}
C_A &= C_{GS1} + C_{GD3} + (1 + g_{m1}r_{O1})C_{GD1} = 84 + 2 + 52.8\times20 = 1142\ \mathrm{fF},\\
\omega_A &= \frac{1}{r_{O3}C_A} = \frac{1}{(1\ \mathrm{M}\Omega)(1.142\ \mathrm{pF})} = 8.8\times10^5\ \mathrm{rad/s}\quad(\approx 140\ \mathrm{kHz}),
\end{aligned}
$$

the same as without $C_L$.

### Step 4 — Reduced model for the two higher poles

For $\omega \gg \omega_A$ the current in $r_{O3}$ is negligible, and KCL at A becomes a capacitive divider:

$$V_A = \frac{C_{GD1}}{C_{GD1} + C_{A0}}V_B = \frac{20}{106}V_B = 0.189\,V_B .$$

$M_1$'s current $g_{m1}V_A$ then acts as a conductance at B (pole splitting by $C_{GD1}$), and $C_{GD1}$ in series with $C_{A0}$ adds a capacitance:

$$
\begin{aligned}
G_B' &= \frac{1}{r_{O1}} + g_{m1}\,(0.189) = 0.1 + 0.977 = 1.08\ \mathrm{mS}\quad(R_B' = 929\ \Omega),\\
C_B' &= C_{GS2} + \frac{C_{GD1}C_{A0}}{C_{GD1} + C_{A0}} = 79 + 16.2 = 95.2\ \mathrm{fF}.
\end{aligned}
$$

B ($R_B'$, $C_B'$) and Y ($r_{O2}$, $C_Y$) now form a two-node system coupled by $C_{GD2}$ and $g_{m2}$:

<!-- diagram: diagram-02.cir -->

Its characteristic polynomial is $1 + as + bs^2$ with ($1 + g_{m2}r_{O2} = 14.86$)

$$
\begin{aligned}
a &= R_B'(1 + g_{m2}r_{O2})C_{GD2} + R_B'C_B' + r_{O2}(C_{GD2} + C_Y)\\
&= (929)(14.86)(15\ \mathrm{fF}) + (929)(95.2\ \mathrm{fF}) + (5\ \mathrm{k}\Omega)(525.4\ \mathrm{fF})\\
&= 0.207 + 0.088 + 2.627 = 2.922\ \mathrm{ns},\\
b &= R_B'\,r_{O2}\left(C_B'C_{GD2} + C_B'C_Y + C_{GD2}C_Y\right)\\
&= (929)(5000)\left[(95.2)(15) + (95.2)(510.4) + (15)(510.4)\right]\times10^{-30}\ \mathrm{s^2}\\
&= (4.645\times10^6)(5.767\times10^{-26}) = 2.68\times10^{-19}\ \mathrm{s^2}.
\end{aligned}
$$

The roots are widely separated, so

$$\omega_Y \approx \frac1a = \frac{1}{2.922\ \mathrm{ns}} = 3.4\times10^8\ \mathrm{rad/s}, \qquad \omega_B \approx \frac ab = \frac{2.922\times10^{-9}}{2.68\times10^{-19}} = 1.1\times10^{10}\ \mathrm{rad/s}$$

(the quadratic formula gives $3.54\times10^8$ and $1.06\times10^{10}$ rad/s).

- $\omega_Y$ is essentially the output node, since $a$ is dominated by $r_{O2}(C_L + \ldots)$. The per-node estimate $1/[r_{O2}(C_L + C_{GD2} + C_{GS3} + C_{GD3})] = 1/(5\ \mathrm{k}\Omega\times0.525\ \mathrm{pF}) = 3.8\times10^8$ rad/s is close; the Miller loading of $C_{GD2}$ lowers it slightly.
- $\omega_B$ belongs to the drain of $M_1$. A per-node Miller estimate, $1/[r_{O1}(C_{GD1} + C_{GS2} + (1 + g_{m2}r_{O2})C_{GD2})] = 1/(10\ \mathrm{k}\Omega\times0.32\ \mathrm{pF}) = 3\times10^8$ rad/s, would be badly wrong: through $C_{GD1}$, $M_1$ acts like a diode at high frequency and B is a low-impedance node.

A full three-node analysis gives $8.74\times10^5$, $3.54\times10^8$ and $1.06\times10^{10}$ rad/s, in agreement.

### Step 5 — What this means for the loop

The loop's gain-bandwidth, $T_0\,\omega_A \approx 1.17\times10^5\times8.8\times10^5 \approx 10^{11}$ rad/s, lies far above the second pole at $3.5\times10^8$ rad/s. The loop gain is still about 200 at $\omega_Y$, so it crosses unity only after the phase has passed $-180°$ (crossover near $5.7\times10^9$ rad/s, PM ≈ −32°): the uncompensated amplifier with this load is unstable.

### Result

Open-loop poles (loop broken at the gate of $M_3$):

- $\omega_A \approx 8.8\times10^5$ rad/s (≈ 140 kHz): input node, $r_{O3}$ times $C_{GS1} + C_{GD3} + (1 + g_{m1}r_{O1})C_{GD1}$;
- $\omega_Y \approx 3.5\times10^8$ rad/s (≈ 56 MHz): output node, essentially $1/[r_{O2}(C_L + C_{GD2} + C_{GS3} + C_{GD3})] \approx 3.8\times10^8$ rad/s;
- $\omega_B \approx 1.1\times10^{10}$ rad/s (≈ 1.7 GHz): drain of $M_1$, pushed up by pole splitting.

With $T_0 \approx 1.2\times10^5$ the loop is unstable without compensation (PM ≈ −32°).

**Common mistake.** Computing the output pole with $1/g_{m2}$, as if $M_2$ were a source follower. $M_2$ is a PMOS common-source stage whose output is its drain, so the resistance at Y is $r_{O2} = 5$ kΩ (the ideal $I_2$ adds nothing).

**Common mistake.** Estimating the pole at the drain of $M_1$ node by node with Miller capacitances (≈ $3\times10^8$ rad/s). $C_{GD1}$ couples B to the high-impedance node A, so above the dominant pole $M_1$ is effectively diode-connected and B becomes fast (≈ $10^{10}$ rad/s).

**Common mistake.** Concluding that the large load capacitance makes the output the dominant pole and stabilizes the loop. The input node, with 1 MΩ and a Miller capacitance above 1 pF, is still dominant, and with $T_0 \approx 10^5$ the crossover lies far beyond the output pole.
