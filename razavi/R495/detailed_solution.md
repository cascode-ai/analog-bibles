# Detailed solution - R495

**Approach.** Find the bias point and the small-signal parameters, then the gate–source and gate–drain capacitances of $M_1$–$M_3$. Break the loop at the gate of $M_3$ and identify the three nodes of the open loop (A: input, B: drain of $M_1$, Y: output). The dominant pole at A follows from the Miller effect of $C_{GD1}$. The same capacitor also *splits* the poles, so simple per-node estimates fail for the other two; we obtain them from a reduced high-frequency model in which node A acts as a capacitive divider.

### Step 1 — Circuit and bias point

Reading the figure: $I_3$ (10 µA) and the input current $I_{in}$ feed node A. $M_3$ (gate at Y, source grounded) sinks current from A. $M_1$ (gate at A, source grounded) is a common-source (CS) stage whose drain, node B, is fed by $I_1 = 1$ mA. $M_2$ is a PMOS CS stage (source at $V_{DD}$, gate at B) whose drain is the output Y, loaded by $I_2 = 1$ mA. $M_3$ senses $V_{out}$ and returns a current to the input: voltage–current feedback.

With $I_{in} = 0$, $I_{D3} = 10\ \mu$A, $I_{D1} = 1$ mA and $|I_{D2}| = 1$ mA. All sources are on the rails, so there is no body effect. From the square law, $V_{GS} = V_{TH} + \sqrt{2I_D/(\mu C_{ox}W/L)}$:

$$
\begin{aligned}
V_Y &= V_{GS3} = 0.7 + \sqrt{\frac{2(10\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(10)}} = 0.7 + 0.122 = 0.822\ \mathrm{V},\\
V_A &= V_{GS1} = 0.7 + \sqrt{\frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(100)}} = 0.7 + 0.386 = 1.086\ \mathrm{V},\\
V_B &= V_{DD} - |V_{GS2}| = 3 - \left(0.8 + \sqrt{\frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}}\right) = 3 - 1.522 = 1.478\ \mathrm{V}.
\end{aligned}
$$

Saturation checks: $V_{DS3} = 1.086\ \mathrm{V} > 0.122$ V; $V_{DS1} = 1.478\ \mathrm{V} > 0.386$ V; $|V_{DS2}| = 3 - 0.822 = 2.18\ \mathrm{V} > 0.722$ V. All saturated.

### Step 2 — Small-signal parameters and loop gain

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu)(100)(1\ \mathrm{m})} = 5.18\ \mathrm{mS}, & r_{O1} &= \frac{1}{(0.1)(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
g_{m2} &= \sqrt{2(38.4\ \mu)(100)(1\ \mathrm{m})} = 2.77\ \mathrm{mS}, & r_{O2} &= \frac{1}{(0.2)(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\\
g_{m3} &= \sqrt{2(134\ \mu)(10)(10\ \mu)} = 0.164\ \mathrm{mS}, & r_{O3} &= \frac{1}{(0.1)(10\ \mu\mathrm{A})} = 1\ \mathrm{M}\Omega .
\end{aligned}
$$

The ideal sources $I_1$–$I_3$ and $I_{in}$ have infinite resistance, so the node resistances are $R_A = r_{O3}$, $R_B = r_{O1}$ and $R_Y = r_{O2}$.

**Loop gain.** A test voltage $V_t$ on the gate of $M_3$ produces $V_A = -g_{m3}r_{O3}V_t$, then $V_B = -g_{m1}r_{O1}V_A$, then $V_Y = -g_{m2}r_{O2}V_B$. Three inversions make the feedback negative, and

$$T_0 = (g_{m3}r_{O3})(g_{m1}r_{O1})(g_{m2}r_{O2}) = 163.7\times51.8\times13.9 = 1.17\times10^5\quad(101\ \mathrm{dB}).$$

### Step 3 — Device capacitances

In saturation $C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$ and $C_{GD} = WC_{ov}$, with $C_{ox} = 3.84\ \mathrm{fF/\mu m^2}$ and $L = 0.5\ \mu$m:

$$
\begin{aligned}
C_{GS1} &= \tfrac23(50)(0.5)(3.84) + 50(0.4) = 64 + 20 = 84\ \mathrm{fF}, & C_{GD1} &= 20\ \mathrm{fF},\\
C_{GS2} &= 64 + 50(0.3) = 79\ \mathrm{fF}, & C_{GD2} &= 15\ \mathrm{fF},\\
C_{GS3} &= \tfrac23(5)(0.5)(3.84) + 5(0.4) = 6.4 + 2 = 8.4\ \mathrm{fF}, & C_{GD3} &= 2\ \mathrm{fF}.
\end{aligned}
$$

### Step 4 — The opened loop: nodes and their capacitances

The test source drives the gate of $M_3$. To keep the loading the same as in the closed loop, a replica of $M_3$'s gate capacitance, $C_{GS3} + C_{GD3} = 10.4$ fF, is attached to Y. The three nodes are:

- **Node A:** $r_{O3}$, $C_{GS1}$ and $C_{GD3}$ (to the test source, an AC ground) to ground: $C_{A0} = 84 + 2 = 86$ fF; $C_{GD1}$ bridges A and B.
- **Node B:** $r_{O1}$ and $C_{GS2}$ (to $V_{DD}$, AC ground); $C_{GD1}$ to A; $C_{GD2}$ to Y.
- **Node Y:** $r_{O2}$ and the replica $C_{Y0} = 10.4$ fF to ground; $C_{GD2}$ to B.

<!-- diagram: diagram-01.cir -->

### Step 5 — Dominant pole at the input node A

Node A has by far the largest resistance (1 MΩ), and $C_{GD1}$ sits across the inverting gain $-g_{m1}r_{O1} = -51.8$ of $M_1$. By the Miller theorem it appears at A multiplied by $(1 + g_{m1}r_{O1})$:

$$
\begin{aligned}
C_A &= C_{GS1} + C_{GD3} + (1 + g_{m1}r_{O1})C_{GD1} = 84 + 2 + 52.8\times20 = 1142\ \mathrm{fF},\\
\omega_A &= \frac{1}{r_{O3}C_A} = \frac{1}{(1\ \mathrm{M}\Omega)(1.142\ \mathrm{pF})} = 8.8\times10^5\ \mathrm{rad/s}\quad(\approx 140\ \mathrm{kHz}).
\end{aligned}
$$

The Miller approximation is accurate for the dominant pole, because at $\omega_A$ all other nodes still behave as at low frequency.

### Step 6 — Why per-node estimates fail at B, and the reduced high-frequency model

A per-node estimate at B would use $C_B \approx C_{GD1} + C_{GS2} + (1 + g_{m2}r_{O2})C_{GD2} = 20 + 79 + 223 = 322$ fF and $R_B = 10$ kΩ, giving $3\times10^8$ rad/s. This is far too low: it ignores **pole splitting**. Above $\omega_A$, node A no longer holds its voltage through $r_{O3}$; it simply follows B through the capacitive divider $C_{GD1}$–$C_{A0}$. $M_1$ then senses its own drain voltage, like a partially diode-connected device, so B becomes a *low*-impedance node and its pole moves up.

**Reduction.** For $\omega \gg \omega_A$, $1/r_{O3} \ll \omega(C_{A0} + C_{GD1})$, and KCL at A reduces to a capacitive divider:

$$sC_{A0}V_A + sC_{GD1}(V_A - V_B) = 0 \quad\Longrightarrow\quad V_A = \frac{C_{GD1}}{C_{GD1} + C_{A0}}V_B = \frac{20}{106}V_B = 0.189\,V_B .$$

Substituting into KCL at B, $M_1$'s current $g_{m1}V_A$ becomes a conductance at B, and the two capacitors in series add a capacitance:

$$
\begin{aligned}
G_B' &= \frac{1}{r_{O1}} + g_{m1}\frac{C_{GD1}}{C_{GD1} + C_{A0}} = 0.1\ \mathrm{mS} + (5.18\ \mathrm{mS})(0.189) = 1.08\ \mathrm{mS}\quad(R_B' = 929\ \Omega),\\
C_B' &= C_{GS2} + \frac{C_{GD1}C_{A0}}{C_{GD1} + C_{A0}} = 79 + \frac{20\times86}{106} = 95.2\ \mathrm{fF}.
\end{aligned}
$$

The high-frequency circuit is now a two-node system: B ($R_B'$, $C_B'$) and Y ($r_{O2}$, $C_{Y0}$), coupled by $C_{GD2}$ and the transconductance $g_{m2}$, which is the same structure as a Miller-compensated two-stage amplifier.

<!-- diagram: diagram-02.cir -->

### Step 7 — The two non-dominant poles

For two nodes with resistances $R_1$, $R_2$, grounded capacitances $C_1$, $C_2$, a bridging capacitance $C_F$ and transconductance $g_m$ from node 1 to node 2, the characteristic polynomial is $1 + as + bs^2$ with

$$a = R_1(1 + g_mR_2)C_F + R_1C_1 + R_2(C_F + C_2), \qquad b = R_1R_2(C_1C_F + C_1C_2 + C_FC_2).$$

Here $R_1 = R_B' = 929\ \Omega$, $C_1 = C_B' = 95.2$ fF, $R_2 = r_{O2} = 5$ kΩ, $C_2 = C_{Y0} = 10.4$ fF, $C_F = C_{GD2} = 15$ fF, $g_m = g_{m2}$ ($1 + g_{m2}r_{O2} = 14.86$):

$$
\begin{aligned}
a &= (929)(14.86)(15\ \mathrm{f}) + (929)(95.2\ \mathrm{f}) + (5000)(25.4\ \mathrm{f}) = 207 + 88 + 127 = 422\ \mathrm{ps},\\
b &= (929)(5000)\left[(95.2)(15) + (95.2)(10.4) + (15)(10.4)\right]\times10^{-30}\ \mathrm{s^2} = 1.196\times10^{-20}\ \mathrm{s^2}.
\end{aligned}
$$

Roots of $1 + as + bs^2$ ($s = -\omega$):

$$\omega = \frac{a \mp \sqrt{a^2 - 4b}}{2b} = \frac{4.224\times10^{-10} \mp 3.614\times10^{-10}}{2.391\times10^{-20}}\ \mathrm{rad/s},$$

$$\omega_B = 2.6\times10^9\ \mathrm{rad/s}\ (\approx 0.41\ \mathrm{GHz}), \qquad \omega_Y = 3.3\times10^{10}\ \mathrm{rad/s}\ (\approx 5.2\ \mathrm{GHz}).$$

A full three-node analysis (the determinant of the nodal equations) gives $8.74\times10^5$, $2.56\times10^9$ and $3.28\times10^{10}$ rad/s, confirming these values. Without the replica load at Y ($C_{Y0} = 0$), the same procedure gives $2.9\times10^9$ and $5.3\times10^{10}$ rad/s.

### Step 8 — Consequence for stability

The gain-bandwidth of the loop is $T_0\,\omega_A \approx 1.17\times10^5\times8.8\times10^5 \approx 10^{11}$ rad/s, far above both non-dominant poles. The loop gain therefore crosses unity (near $1.5\times10^{10}$ rad/s) only after more than 180° of phase shift: PM ≈ −35°. The uncompensated circuit is unstable and needs frequency compensation.

### Result

Poles of the open-loop transfer function (loop broken at the gate of $M_3$, replica load at Y):

- $\omega_A \approx 1/\{r_{O3}[C_{GS1} + C_{GD3} + (1 + g_{m1}r_{O1})C_{GD1}]\} \approx 8.7\times10^5$ rad/s (≈ 140 kHz), dominant, at the input node;
- $\omega_B \approx 2.6\times10^9$ rad/s (≈ 0.4 GHz), drain of $M_1$ (pushed up by pole splitting);
- $\omega_Y \approx 3.3\times10^{10}$ rad/s (≈ 5 GHz), output node.

(Without the replica load: $8.7\times10^5$, $2.9\times10^9$ and $5.3\times10^{10}$ rad/s.) With $T_0 \approx 1.2\times10^5$ the uncompensated loop is unstable (PM ≈ −35°).

**Common mistake.** Treating $M_2$ as a source follower. Its source is at $V_{DD}$ and its output is taken at the drain: it is a PMOS common-source stage with gain $-g_{m2}r_{O2}$. Three inverting stages make the feedback negative.

**Common mistake.** Taking the input-node resistance as $1/g_{m3}$ or as the closed-loop input resistance. With the loop broken, $M_3$ is a current source whose drain presents $r_{O3} = 1$ MΩ, which is what makes A the dominant pole.

**Common mistake.** Estimating the non-dominant poles node by node with Miller capacitances, which gives about $3\times10^8$ and $8\times10^9$ rad/s. $C_{GD1}$ bridges a very high-impedance node and causes pole splitting: B becomes a low-impedance node at high frequency, and its pole is about ten times higher.
