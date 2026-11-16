# Detailed solution - R496

**Approach.** A capacitor $C_C$ from the gate to the drain of $M_1$ adds to $C_{GD1}$ and is Miller-multiplied by the gain of $M_1$, so it lowers the pole at the input node (high resistance $r_{O3}$) and, by pole splitting, pushes the pole at the drain of $M_1$ to very high frequencies. The circuit then behaves like a Miller-compensated amplifier whose first non-dominant pole is at the output node Y. We size $C_C$ with the standard two-pole rule for 60° (right-half-plane zero set aside), compute the compensated poles, and then examine the zero that $C_C$ creates.

### Step 1 — Small-signal parameters and uncompensated loop

Bias (no body effect; all sources on the rails): $I_{D3} = 10\ \mu$A, $I_{D1} = |I_{D2}| = 1$ mA; $V_Y = V_{GS3} = 0.82$ V, $V_A = V_{GS1} = 1.09$ V, $V_B = V_{DD} - |V_{GS2}| = 1.48$ V; all devices saturated.

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu)(100)(1\ \mathrm{m})} = 5.18\ \mathrm{mS}, & r_{O1} &= 10\ \mathrm{k}\Omega, & g_{m1}r_{O1} &= 51.8,\\
g_{m2} &= \sqrt{2(38.4\ \mu)(100)(1\ \mathrm{m})} = 2.77\ \mathrm{mS}, & r_{O2} &= 5\ \mathrm{k}\Omega, & g_{m2}r_{O2} &= 13.9,\\
g_{m3} &= \sqrt{2(134\ \mu)(10)(10\ \mu)} = 0.164\ \mathrm{mS}, & r_{O3} &= 1\ \mathrm{M}\Omega, & g_{m3}r_{O3} &= 163.7 .
\end{aligned}
$$

Loop gain (loop broken at the gate of $M_3$; three inverting stages, so negative feedback):

$$T_0 = (g_{m3}r_{O3})(g_{m1}r_{O1})(g_{m2}r_{O2}) = 163.7\times51.8\times13.9 = 1.17\times10^5 .$$

Capacitances ($C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$, $C_{GD} = WC_{ov}$): $C_{GS1} = 84$ fF, $C_{GD1} = 20$ fF, $C_{GS2} = 79$ fF, $C_{GD2} = 15$ fF, $C_{GS3} = 8.4$ fF, $C_{GD3} = 2$ fF. With the loop opened at the gate of $M_3$: node A has $C_{A0} = C_{GS1} + C_{GD3} = 86$ fF to ground; node Y carries the replica load $C_{Y0} = C_{GS3} + C_{GD3} = 10.4$ fF.

Uncompensated, the poles are about $8.7\times10^5$, $2.6\times10^9$ and $3.3\times10^{10}$ rad/s. The gain-bandwidth $T_0\times8.7\times10^5 \approx 10^{11}$ rad/s lies far above the non-dominant poles, so the loop is unstable (PM ≈ −35°): compensation is needed.

### Step 2 — Adding $C_C$: the dominant pole and the gain-bandwidth

$C_C$ appears in parallel with $C_{GD1}$; write $C_1 = C_C + C_{GD1}$ for the total gate–drain capacitance of $M_1$.

<!-- diagram: diagram-01.cir -->

**Dominant pole.** $C_1$ spans the inverting gain $-g_{m1}r_{O1}$ and appears at node A multiplied by $(1 + g_{m1}r_{O1})$. Node A has the resistance $r_{O3}$:

$$\omega_{p1} \approx \frac{1}{r_{O3}\left[C_{A0} + (1 + g_{m1}r_{O1})C_1\right]} \approx \frac{1}{r_{O3}\,(1 + g_{m1}r_{O1})\,C_1} .$$

**Gain-bandwidth.** Multiplying by $T_0$ (and using $1 + g_{m1}r_{O1} \approx g_{m1}r_{O1}$):

$$\mathrm{GBW} = T_0\,\omega_{p1} \approx \frac{g_{m3}r_{O3}\cdot g_{m1}r_{O1}\cdot g_{m2}r_{O2}}{r_{O3}\,g_{m1}r_{O1}\,C_1} = \frac{g_{m3}\,g_{m2}r_{O2}}{C_C + C_{GD1}} = \frac{2.27\ \mathrm{mS}}{C_C + C_{GD1}} .$$

This is the familiar "$G_m/C_C$" of a Miller-compensated amplifier: here the input transconductor is $M_3$ and the stage after the Miller capacitor ($M_2$) contributes its gain $g_{m2}r_{O2}$.

### Step 3 — The non-dominant poles after compensation (pole splitting)

Above $\omega_{p1}$, the resistance $r_{O3}$ no longer matters at node A, which simply follows node B through the capacitive divider $C_1$–$C_{A0}$:

$$V_A = \frac{C_1}{C_1 + C_{A0}}\,V_B .$$

So $M_1$'s current $g_{m1}V_A$ acts at B as a conductance, and the series combination of $C_1$ and $C_{A0}$ as a capacitance:

$$G_B' = \frac{1}{r_{O1}} + g_{m1}\frac{C_1}{C_1 + C_{A0}}, \qquad C_B' = C_{GS2} + \frac{C_1C_{A0}}{C_1 + C_{A0}} .$$

With $C_1 \gg C_{A0}$, $G_B' \to g_{m1}$: at high frequency $M_1$ is essentially **diode-connected** through $C_C$, and B becomes a low-impedance node. What remains is a two-node system: B ($1/G_B'$, $C_B'$) and Y ($r_{O2}$, $C_{Y0}$), coupled by $C_{GD2}$ and $g_{m2}$.

<!-- diagram: diagram-02.cir -->

Its poles are the roots of $1 + as + bs^2$ with

$$a = R_B'(1 + g_{m2}r_{O2})C_{GD2} + R_B'C_B' + r_{O2}(C_{GD2} + C_{Y0}), \qquad b = R_B'r_{O2}\left(C_B'C_{GD2} + C_B'C_{Y0} + C_{GD2}C_{Y0}\right),$$

where $R_B' = 1/G_B'$. These two poles depend only weakly on $C_C$, but they set the allowed GBW, so a short iteration is used in Step 4.

### Step 4 — Choosing $C_C$ for PM = 60°

**Two-pole design rule** (right-half-plane zero set aside for now): with the first non-dominant pole $\omega_{p2}$, a 60° margin requires the crossover at $\omega_u = \omega_{p2}\tan30°$; including the magnitude roll-off of $\omega_{p2}$, $\mathrm{GBW} = \omega_u\sqrt{1 + 1/3} = \tfrac23\,\omega_{p2}$. Therefore

$$C_C + C_{GD1} = \frac{2.27\ \mathrm{mS}}{\tfrac23\,\omega_{p2}} .$$

**Iteration 1.** Start from a per-node estimate of the output pole, $\omega_{p2} \approx 1/[r_{O2}(C_{GD2} + C_{Y0})] = 1/[(5\ \mathrm{k}\Omega)(25.4\ \mathrm{fF})] = 7.9\times10^9$ rad/s:

$$C_C + C_{GD1} = \frac{2.27\ \mathrm{mS}}{5.25\times10^9\ \mathrm{rad/s}} = 0.43\ \mathrm{pF}.$$

**Iteration 2.** With $C_1 = 0.43$ pF: $G_B' = 0.1 + 5.18\times0.833 = 4.41$ mS ($R_B' = 227\ \Omega$), $C_B' = 79 + 71.7 = 150.7$ fF. Then $a = 50.5 + 34.2 + 127 = 211.6$ ps and $b = 4.51\times10^{-21}\ \mathrm{s^2}$, whose roots are $5.33\times10^9$ and $4.16\times10^{10}$ rad/s. Using $\omega_{p2} = 5.33\times10^9$ rad/s:

$$C_C + C_{GD1} = \frac{2.27\ \mathrm{mS}}{3.55\times10^9\ \mathrm{rad/s}} = 0.64\ \mathrm{pF}.$$

**Iteration 3.** With $C_1 = 0.62$ pF: $G_B' = 0.1 + 5.18\times0.878 = 4.65$ mS ($R_B' = 215\ \Omega$), $C_B' = 79 + 75.5 = 154.5$ fF; $a = 48.0 + 33.3 + 127 = 208.2$ ps, $b = 4.39\times10^{-21}\ \mathrm{s^2}$; roots $5.42\times10^9$ and $4.20\times10^{10}$ rad/s. Then

$$C_C + C_{GD1} = \frac{2.27\ \mathrm{mS}}{3.61\times10^9\ \mathrm{rad/s}} = 0.63\ \mathrm{pF} \quad\Longrightarrow\quad C_C \approx 0.63 - 0.02 \approx 0.6\ \mathrm{pF}.$$

The iteration has converged.

### Step 5 — Poles (and zero) after compensation, $C_C = 0.6$ pF

$$
\begin{aligned}
\omega_{p1} &\approx \frac{1}{r_{O3}(1 + g_{m1}r_{O1})(C_C + C_{GD1})} = \frac{1}{(1\ \mathrm{M}\Omega)(52.8)(0.62\ \mathrm{pF})} = 3.1\times10^4\ \mathrm{rad/s}\ (\approx 4.9\ \mathrm{kHz}),\\
\omega_{p2} &\approx 5.4\times10^9\ \mathrm{rad/s}\ (\approx 0.86\ \mathrm{GHz}),\ \text{mainly the output node Y},\\
\omega_{p3} &\approx 4.2\times10^{10}\ \mathrm{rad/s}\ (\approx 6.7\ \mathrm{GHz}),\ \text{the drain of } M_1 \text{ (node B)}.
\end{aligned}
$$

(A full three-node analysis gives $3.05\times10^4$, $5.42\times10^9$ and $4.20\times10^{10}$ rad/s.) The dominant pole moved down by a factor of about 29, from $8.7\times10^5$ rad/s, and the pole at B moved *up*, from $2.6\times10^9$ to $4.2\times10^{10}$ rad/s: that is pole splitting.

**Zero.** The feedforward current through $C_C + C_{GD1}$ from A to B cancels $M_1$'s current $g_{m1}V_A$ at

$$\omega_z = +\frac{g_{m1}}{C_C + C_{GD1}} = \frac{5.18\ \mathrm{mS}}{0.62\ \mathrm{pF}} = 8.3\times10^9\ \mathrm{rad/s},$$

a **right-half-plane** zero.

### Step 6 — Effect of the right-half-plane zero

A RHP zero adds phase *lag*. At the crossover,

$$\frac{\omega_u}{\omega_z} \approx \frac{\mathrm{GBW}}{\omega_z} = \frac{g_{m3}g_{m2}r_{O2}/(C_C + C_{GD1})}{g_{m1}/(C_C + C_{GD1})} = \frac{g_{m3}g_{m2}r_{O2}}{g_{m1}} = \frac{2.27}{5.18} = 0.44,$$

independent of $C_C$, i.e. about $\tan^{-1}0.44 \approx 24°$ of extra lag. Evaluating the full loop gain:

- with a plain $C_C = 0.6$ pF the actual phase margin is only about 30°;
- reaching 60° with a plain capacitor would require $C_C \approx 6.7$ pF (crossover pushed so low that the Y pole costs almost nothing), at a large cost in bandwidth;
- the practical fix is a resistor in series with $C_C$ that moves the zero (to infinity with $R_z = 1/g_{m1} \approx 190\ \Omega$, or into the left half plane). In the full three-node model with $R_z = 1/g_{m1}$, 60° is reached at $C_C \approx 0.85$ pF; with all zeros ignored, at about 0.72 pF. The two-pole design value 0.6 pF is therefore the right order, slightly optimistic.

### Result

$$C_C \approx 0.6\ \mathrm{pF}\quad\left(\mathrm{GBW} = \frac{g_{m3}g_{m2}r_{O2}}{C_C + C_{GD1}} = \tfrac23\,\omega_{p2}\right),$$

with the right-half-plane zero neglected (to be removed by a series resistor). Poles after compensation:

- $\omega_{p1} \approx 3\times10^4$ rad/s (≈ 5 kHz), input node A (dominant, Miller-multiplied $C_C$);
- $\omega_{p2} \approx 5.4\times10^9$ rad/s (≈ 0.86 GHz), output node Y;
- $\omega_{p3} \approx 4.2\times10^{10}$ rad/s (≈ 6.7 GHz), drain of $M_1$ (pushed up by pole splitting);
- RHP zero at $g_{m1}/(C_C + C_{GD1}) \approx 8.3\times10^9$ rad/s.

With a plain capacitor this zero costs about 24°, so 0.6 pF alone gives PM ≈ 30°, and 60° with a plain capacitor would need about 6.7 pF.

**Common mistake.** Using $\mathrm{GBW} = g_{m3}/C_C$ or $g_{m1}/C_C$. The Miller capacitor is driven by the transconductor $M_3$, but the stage after it ($M_2$, gain $g_{m2}r_{O2} \approx 14$) is also inside the loop, so $\mathrm{GBW} = g_{m3}g_{m2}r_{O2}/(C_C + C_{GD1})$.

**Common mistake.** Placing the compensated dominant pole at node B or Y, or keeping node B as the first non-dominant pole. With $C_C$ across $M_1$, the dominant pole is at A (resistance $r_{O3}$ times the Miller-multiplied $C_C$), and node B becomes a low-impedance, high-frequency node; the first non-dominant pole is at Y.

**Common mistake.** Concluding that no compensation is needed because the circuit "has a dominant pole". The uncompensated loop gain is about $10^5$, so its crossover lies far above the non-dominant poles and the loop is unstable (PM ≈ −35°).
