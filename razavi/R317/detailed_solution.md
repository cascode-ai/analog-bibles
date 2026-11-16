# Detailed solution - R317

**Approach.** Count the poles. With an ideal voltage source at the gates there is no input pole, and for differential signals the tail node is an ac ground, so each half circuit is a common-source stage with a single moving node, its output. Neither a diode-connected nor a current-source load adds an internal node, so the stage is first order: its frequency-dependent phase lag approaches but never exceeds 90°, plus a few degrees from the right-half-plane zero of $C_{GD}$. A 135° lag at the unity-gain frequency needs a second pole.

### Step 1 — What "135° at unity gain" means

The dc inversion of the pair is the sign of its gain, not a frequency-dependent phase shift. The requirement concerns the **additional phase lag** accumulated at $\omega_u$, where $|A_v(j\omega_u)| = 1$; 135° there is what a feedback design with a 45° phase margin calls for. (Counting the dc inversion as $-180°$, the total lag of the circuits below lies between 180° and 270°, so it cannot equal 135° either.)

### Step 2 — Reduce the circuit to one node

The gates are driven by a zero-impedance source, so there is no pole at the input and $C_{GS1}$ has no effect; the tail node is a differential ac ground. Each half circuit is then a CS stage $M_1$ with its source grounded and its gate driven ideally by $V_{in}/2$, and the only node that moves is the drain (output).

<!-- diagram: diagram-01.cir -->

The output has a resistance $R_{out}$ and a grounded capacitance $C_{out}$ (drain junctions, load-device capacitances, any load), and $C_{GD1}$ connects it to the driven gate.

- **Diode-connected load** ($M_3$): $R_{out} = \dfrac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\approx\dfrac{1}{g_{m3}}$, so $A_0 = g_{m1}R_{out}\approx g_{m1}/g_{m3}$.
- **Current-source load** ($M_3$ with fixed gate bias): $R_{out} = r_{O1}\parallel r_{O3}$, so $A_0 = g_{m1}(r_{O1}\parallel r_{O3})$.

Neither load introduces a new node: the diode is just $1/g_{m3}$ (plus capacitance) at the output, and the current source is $r_{O3}$ (plus capacitance).

### Step 3 — The half-circuit transfer function is first order

Let $v_1 = V_{in}/2$ be the gate voltage of the half circuit. KCL at the output (current arrives through $C_{GD1}$ and leaves through $M_1$, $R_{out}$ and $C_{out}$):

$$(v_1 - V_{out})C_{GD1}s = g_{m1}v_1 + \frac{V_{out}}{R_{out}} + C_{out}s\,V_{out}.$$

Collecting terms:

$$
\begin{aligned}
V_{out}\left[\frac{1}{R_{out}} + (C_{out} + C_{GD1})s\right] &= -(g_{m1} - C_{GD1}s)v_1\\
A_v(s) = \frac{V_{out}}{v_1} &= -\frac{(g_{m1} - C_{GD1}s)R_{out}}{1 + R_{out}C_Ts}, \qquad C_T = C_{out} + C_{GD1},
\end{aligned}
$$

where the half-circuit gain $V_{out}/(V_{in}/2)$ equals the differential gain. There is exactly **one pole**, $\omega_p = 1/(R_{out}C_T)$, and one right-half-plane zero, $\omega_z = g_{m1}/C_{GD1}$.

### Step 4 — Phase lag at the unity-gain frequency (single pole)

Ignoring the zero, $A_v\approx -A_0/(1 + s/\omega_p)$, whose magnitude $A_0/\sqrt{1 + (\omega/\omega_p)^2}$ equals 1 at

$$\omega_u = \omega_p\sqrt{A_0^2 - 1}.$$

The lag of a single pole is $\arctan(\omega/\omega_p)$, so

$$\phi_{lag}(\omega_u) = \arctan\sqrt{A_0^2 - 1} < 90^\circ .$$

| $A_0$ | $\phi_{lag}$ at $\omega_u$ |
|---|---|
| 1.41 | 45° |
| 2 | 60° |
| 5 | 78.5° |
| 10 | 84.3° |
| 100 | 89.4° |

However large the gain, the lag approaches 90° but never exceeds it.

### Step 5 — The right-half-plane zero adds only a little

The zero adds a lag $\arctan(\omega/\omega_z)$. For very large $A_0$, $\omega_u\approx g_{m1}/\sqrt{C_T^2 - C_{GD1}^2}$, so $\omega_u/\omega_z = C_{GD1}/\sqrt{C_T^2 - C_{GD1}^2}$, whose arctangent is $\arcsin(C_{GD1}/C_T)$, and the lag at $\omega_u$ tends to

$$\phi_{lag}(\omega_u)\to 90^\circ + \arcsin\frac{C_{GD1}}{C_T}.$$

Reaching 135° would need $C_{GD1}$ to be at least $\sin45^\circ\approx71\%$ of all the capacitance at the output. But $C_{GD1}$ is only an overlap capacitance, while the output also carries the drain junctions of $M_1$ and $M_3$ (each typically comparable to or larger than $C_{GD1}$), $M_3$'s own capacitances and any load. So $C_{GD1}/C_T$ is roughly 0.1–0.3, and the zero adds only about 5°–17°, far short of the missing 45°.

### Step 6 — The diode-connected load is even further away

With a diode load, $A_0\approx g_{m1}/g_{m3} = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_3]}$, typically only 1–5, so the lag at $\omega_u$ is only 0°–78°; if $g_{m1}/g_{m3} < 1$ the gain never reaches unity and there is no unity-gain frequency at all.

### Step 7 — What would be needed

A lag of 135° at $\omega_u$ requires a **second pole** comparable to $\omega_u$: for example, a dominant pole far below $\omega_u$ (nearly 90°) plus a second pole at $\omega_u$ (45°). That takes an extra internal node, such as a current-mirror load (mirror pole), a cascode node, a second gain stage, or a resistive source driving the input capacitance; diode-connected and current-source loads have none.

### Result

With ideal voltage-source drive (no input pole) and the tail node at ac ground for differential signals, each half of the pair is a CS stage with only one node, the output, so

$$A_v(s)\approx -\frac{A_0}{1 + s/\omega_p},\qquad A_0 = \frac{g_{m1}}{g_{m3}}\ \text{(diode load)}\ \text{or}\ g_{m1}(r_{O1}\parallel r_{O3})\ \text{(current-source load)},\quad \omega_p = \frac{1}{R_{out}C_{out}}.$$

A single pole gives a lag of $\arctan(\omega/\omega_p)$; at $\omega_u = \omega_p\sqrt{A_0^2 - 1}$ it is $\arctan\sqrt{A_0^2 - 1} < 90^\circ$. The right-half-plane zero at $g_{m1}/C_{GD1}$, far above $\omega_u$, adds only a few degrees. So the frequency-dependent phase shift is between 0 and about 90° (between 180° and 270° if the inversion is counted), never 135°. Reaching 135° requires a second pole near $\omega_u$; with a diode load the gain may not even reach unity.

**Common mistake.** Claiming two or more significant poles, e.g. an "input pole" or a "tail pole". The input is driven by an ideal voltage source and the tail is a differential virtual ground, so only the output moves.

**Common mistake.** Arguing that the phase shift is *too large* (e.g. 180° from two poles). The problem is the opposite: one pole cannot supply more than 90° of lag.

**Common mistake.** Treating 135° as $180^\circ - 45^\circ$ and concluding that a single pole with $A_0 = \sqrt2$ meets the requirement. The 180° is the dc sign of the gain; the requirement is 135° of lag from the frequency response.
