# Detailed solution - R317

**Approach.** Count the poles. With an ideal voltage source at the gates there is no input pole, and for differential signals the tail node is an ac ground, so each half circuit is a common-source stage with a single node, its output. A diode-connected or current-source load adds no internal node, so the stage is first order: its frequency-dependent phase shift can approach, but never exceed, 90° (plus a few degrees from the right-half-plane zero of $C_{GD}$). A 135° shift at the unity-gain frequency needs a second pole, which these topologies do not have.

### Step 1 — What "135° at unity gain" means

At low frequency a differential pair simply inverts (or not, depending on which output is taken); this is the sign of the dc gain, not a frequency-dependent phase shift. The requirement concerns the **additional phase lag** that accumulates with frequency, evaluated at $\omega_u$, the frequency where $|A_v(j\omega_u)| = 1$. A lag of 135° there is what a feedback design with a 45° phase margin calls for. (If the dc inversion is counted as $-180°$, the total lag lies between 180° and 270° for the circuits below, so it can never equal 135° either; the conclusion is the same.)

### Step 2 — Reduce the circuit to one node

- **Ideal voltage-source drive.** The gates are driven directly by a zero-impedance source, so their voltage is the input voltage at every frequency: no pole at the input, and $C_{GS1}$ has no effect on the transfer function.
- **Tail node.** For differential signals the two halves push equal and opposite currents into the tail, which therefore does not move: it is an ac ground.
- **Half circuit.** Each side is then a common-source (CS) stage $M_1$ with its source grounded, its gate driven ideally, and a load connected at the drain. The only node that can move is the drain (output).

<!-- diagram: diagram-01.cir -->

The output node has a resistance $R_{out}$ to ground and a total grounded capacitance $C_{out}$ (drain junctions, load-device capacitances, any load). $C_{GD1}$ connects the ideally driven gate to the output.

**Diode-connected load** ($M_3$): $R_{out} = \dfrac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\approx\dfrac{1}{g_{m3}}$, so $A_0 = g_{m1}R_{out}\approx g_{m1}/g_{m3}$.

**Current-source load** ($M_3$ with fixed gate bias): $R_{out} = r_{O1}\parallel r_{O3}$, so $A_0 = g_{m1}(r_{O1}\parallel r_{O3})$.

Neither load introduces a new node: a diode-connected device is just a resistance $1/g_{m3}$ (plus capacitance) at the output, and a current source is $r_{O3}$ (plus capacitance) at the output.

### Step 3 — The half-circuit transfer function is first order

**KCL at the output.** Current arrives through $C_{GD1}$ from the gate and leaves through $M_1$, $R_{out}$ and $C_{out}$:

$$(V_{in} - V_{out})C_{GD1}s = g_{m1}V_{in} + \frac{V_{out}}{R_{out}} + C_{out}s\,V_{out}.$$

Collect terms:

$$
\begin{aligned}
V_{out}\left[\frac{1}{R_{out}} + (C_{out} + C_{GD1})s\right] &= -(g_{m1} - C_{GD1}s)V_{in}\\
A_v(s) = \frac{V_{out}}{V_{in}} &= -\frac{(g_{m1} - C_{GD1}s)R_{out}}{1 + R_{out}C_Ts}, \qquad C_T = C_{out} + C_{GD1}.
\end{aligned}
$$

There is exactly **one pole**, $\omega_p = 1/(R_{out}C_T)$, and one right-half-plane zero, $\omega_z = g_{m1}/C_{GD1}$.

### Step 4 — Phase lag at the unity-gain frequency (single pole)

Ignore the zero for a moment: $A_v\approx -A_0/(1 + s/\omega_p)$. The magnitude is $A_0/\sqrt{1 + (\omega/\omega_p)^2}$, which equals 1 at

$$\omega_u = \omega_p\sqrt{A_0^2 - 1}.$$

The phase lag of a single pole is $\arctan(\omega/\omega_p)$, so at $\omega_u$:

$$\phi_{lag}(\omega_u) = \arctan\sqrt{A_0^2 - 1} < 90^\circ .$$

| $A_0$ | $\phi_{lag}$ at $\omega_u$ |
|---|---|
| 1.41 | 45° |
| 2 | 60° |
| 5 | 78.5° |
| 10 | 84.3° |
| 100 | 89.4° |

However large the gain, the lag approaches 90° but never exceeds it. A single pole simply cannot produce 135°.

### Step 5 — The right-half-plane zero adds only a little

A right-half-plane zero adds phase *lag* $\arctan(\omega/\omega_z)$. With the zero included, the lag at $\omega_u$ grows with $A_0$, and in the limit of very large $A_0$ it tends to

$$\phi_{lag}(\omega_u)\to 90^\circ + \arcsin\frac{C_{GD1}}{C_T}.$$

(For large $A_0$, $\omega_u\approx g_{m1}/\sqrt{C_T^2 - C_{GD1}^2}$, so $\omega_u/\omega_z = C_{GD1}/\sqrt{C_T^2 - C_{GD1}^2}$, whose arctangent is $\arcsin(C_{GD1}/C_T)$.)

To reach 135°, $C_{GD1}$ would have to be at least $\sin45^\circ\approx71\%$ of all the capacitance at the output. In practice $C_{GD1}$ is only an overlap capacitance, while the output also carries the drain junctions of $M_1$ and $M_3$ (each typically comparable to or larger than $C_{GD1}$), $M_3$'s own gate–drain or gate–source capacitance, and any load. So $C_{GD1}/C_T$ is roughly 0.1–0.3, and the zero adds only about 5°–17°, far short of the missing 45°.

### Step 6 — The diode-connected load is even further away

With a diode load, $A_0\approx g_{m1}/g_{m3} = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_3]}$, typically only 1–5. The lag at $\omega_u$ is then only 0°–78°, and if $g_{m1}/g_{m3} < 1$ the gain never reaches unity at all, so there is no unity-gain frequency at which to measure the phase.

### Step 7 — What would be needed

A phase lag of 135° at $\omega_u$ requires a **second pole** at a frequency comparable to $\omega_u$. For example, with a dominant pole far below $\omega_u$ (contributing nearly 90°) and a second pole exactly at $\omega_u$ (contributing 45°), the total is 135°. Topologies that provide such a pole have an extra internal node: a current-mirror load (mirror pole), a cascode (pole at the cascode node), a second gain stage, or a non-ideal (resistive) source driving the input capacitance. Diode-connected and current-source loads have none of these.

### Result

With ideal voltage-source drive (no input pole) and the tail node at ac ground for differential signals, each half of the pair is a CS stage with only one node, the output, so

$$A_v(s)\approx -\frac{A_0}{1 + s/\omega_p},\qquad A_0 = \frac{g_{m1}}{g_{m3}}\ \text{(diode load)}\ \text{or}\ g_{m1}(r_{O1}\parallel r_{O3})\ \text{(current-source load)},\quad \omega_p = \frac{1}{R_{out}C_{out}}.$$

A single pole gives a lag of $\arctan(\omega/\omega_p)$; at $\omega_u = \omega_p\sqrt{A_0^2 - 1}$ it is $\arctan\sqrt{A_0^2 - 1} < 90^\circ$. The right-half-plane zero at $g_{m1}/C_{GD1}$, far above $\omega_u$, adds only a few degrees. So the frequency-dependent phase shift is between 0 and about 90° (between 180° and 270° if the inversion is counted), never 135°. Reaching 135° requires a second pole near $\omega_u$; with a diode load the gain may not even reach unity.

**Common mistake.** Claiming that the stage has two or more significant poles, for example an "input pole" or a "tail pole". The input is driven by an ideal voltage source, and the tail is a differential virtual ground; the only node that moves is the output.

**Common mistake.** Arguing that the phase shift is *too large* (e.g. 180° from two poles). The problem is the opposite: one pole cannot supply more than 90° of lag.

**Common mistake.** Treating 135° as $180^\circ - 45^\circ$ and concluding that a single pole with $A_0 = \sqrt2$ meets the requirement. The 180° is the dc sign of the gain, not a frequency-dependent shift; the requirement is 135° of lag from the frequency response, which a single pole cannot deliver.
