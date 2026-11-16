# Detailed solution - R323

**Approach.** For differential signals a symmetric differential pair can be analysed with a half circuit: the tail node is a virtual ground, and the PMOS loads, whose gates sit at a fixed bias, reduce to their output resistances. Each half is then a common-source (CS) stage with source resistance $R_S$, load $R_L = r_{O1}\parallel r_{O3}$, capacitances $C_{GS1}$, $C_{GD1}$ and output capacitance $C_L$. We derive its transfer function from KCL at the gate and output nodes, and relate it to the differential gain.

### Step 1 — The circuit

<!-- diagram: diagram-01.cir -->

- $M_1$, $M_2$: NMOS input pair, sources tied at the tail node P, fed by an ideal current source $I_{SS}$.
- $M_3$, $M_4$: PMOS current-source loads, sources at $V_{DD}$, gates at a fixed bias $V_b$, drains at the outputs.
- Each gate of the input pair is driven through a series resistance $R_S$.
- $V_{out} = V_{out1} - V_{out2}$, $V_{in} = V_{in1} - V_{in2}$.

### Step 2 — Reduction to a half circuit

For a purely differential input, $V_{in1} = +V_{in}/2$ and $V_{in2} = -V_{in}/2$. Because the circuit is symmetric, every signal on one side is the negative of the corresponding signal on the other.

- **Tail node P.** The two input transistors push equal and opposite signal currents into P, and the ideal tail source cannot absorb any signal current, so P does not move: it is an **ac ground**. ($C_{SB1}$, $C_{SB2}$ and any tail capacitance carry no differential signal.)
- **PMOS loads.** The gates of $M_3$, $M_4$ are at a fixed bias and their sources at $V_{DD}$, so $v_{gs3} = 0$: each load is just its output resistance $r_{O3}$ from the output to ac ground.
- **Half circuit.** $M_1$ with its source at ac ground, gate (node **A**) driven from $V_{in}/2$ through $R_S$, and drain (output) loaded by $r_{O1}\parallel r_{O3}$ and $C_L$.

The load resistance of each half is

$$R_L = r_{O1}\parallel r_{O3} = \frac{r_{O1}r_{O3}}{r_{O1} + r_{O3}}.$$

### Step 3 — Small-signal model of the half circuit

<!-- diagram: diagram-02.cir -->

- **Node A** (gate of $M_1$): $R_S$ to the source $V_{in}/2$; $C_{GS1}$ to ground (the source of $M_1$ is at ac ground); $C_{GD1}$ to the output.
- **Output node**: a current $g_{m1}V_A$ from the output to ground; $R_L$ to ground; $C_L$ to ground; $C_{GD1}$ to A.

Write $v_i = V_{in}/2$ for the half-circuit input and $V_o = V_{out1}$ for its output.

### Step 4 — KCL at the two nodes

**KCL at A** (currents leaving A):

$$\frac{V_A - v_i}{R_S} + C_{GS1}s\,V_A + C_{GD1}s\,(V_A - V_o) = 0 .$$

Multiply by $R_S$:

$$V_A\left[1 + R_S(C_{GS1} + C_{GD1})s\right] - R_SC_{GD1}s\,V_o = v_i . \qquad (1)$$

**KCL at the output** (currents leaving the node):

$$C_{GD1}s\,(V_o - V_A) + g_{m1}V_A + \frac{V_o}{R_L} + C_Ls\,V_o = 0 .$$

Solve for $V_A$:

$$V_A\,(g_{m1} - C_{GD1}s) = -V_o\left[\frac{1}{R_L} + (C_{GD1} + C_L)s\right]\quad\Longrightarrow\quad V_A = -V_o\,\frac{1 + R_L(C_{GD1} + C_L)s}{R_L(g_{m1} - C_{GD1}s)} . \qquad (2)$$

### Step 5 — Eliminate $V_A$

Substitute (2) into (1) and multiply both sides by $R_L(g_{m1} - C_{GD1}s)$:

$$-V_o\Big\{\left[1 + R_L(C_{GD1} + C_L)s\right]\left[1 + R_S(C_{GS1} + C_{GD1})s\right] + R_SR_LC_{GD1}s\,(g_{m1} - C_{GD1}s)\Big\} = v_i\,R_L(g_{m1} - C_{GD1}s).$$

Expand the curly bracket $D(s)$:

$$
\begin{aligned}
D(s) &= 1 + \left[R_L(C_{GD1} + C_L) + R_S(C_{GS1} + C_{GD1}) + g_{m1}R_SR_LC_{GD1}\right]s\\
&\quad + R_SR_L\left[(C_{GD1} + C_L)(C_{GS1} + C_{GD1}) - C_{GD1}^2\right]s^2 .
\end{aligned}
$$

The $s^2$ bracket simplifies because the $C_{GD1}^2$ terms cancel:

$$(C_{GD1} + C_L)(C_{GS1} + C_{GD1}) - C_{GD1}^2 = C_{GS1}C_{GD1} + C_{GS1}C_L + C_{GD1}C_L\equiv\xi .$$

Regroup the $s$ coefficient as $R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)$. Therefore

$$\frac{V_o}{v_i} = \frac{(C_{GD1}s - g_{m1})R_L}{R_SR_L\xi s^2 + \left[R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)\right]s + 1}.$$

### Step 6 — From the half circuit to the differential gain

$V_{out1} = (V_o/v_i)\cdot V_{in}/2$, and by symmetry $V_{out2} = -V_{out1}$. Hence $V_{out} = V_{out1} - V_{out2} = 2V_{out1} = (V_o/v_i)\,V_{in}$: the differential transfer function equals the half-circuit transfer function:

$$\frac{V_{out}}{V_{in}}(s) = \frac{(C_{GD1}s - g_{m1})R_L}{R_SR_L\xi s^2 + \left[R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)\right]s + 1},$$

$$R_L = r_{O1}\parallel r_{O3}, \qquad \xi = C_{GS1}C_{GD1} + C_{GS1}C_L + C_{GD1}C_L .$$

### Step 7 — Gain, zero and poles

**dc gain:** $-g_{m1}(r_{O1}\parallel r_{O3})$.

**Zero:** $s_z = +g_{m1}/C_{GD1}$, in the right half plane (feedforward through $C_{GD1}$: the capacitor passes the signal without inversion, the transistor inverts it, and they cancel at a positive real $s$).

**Poles.** With $a = R_SR_L\xi$ and $b$ the $s$ coefficient, if the poles are well separated:

$$\omega_{p1}\approx\frac{1}{b} = \frac{1}{R_L(C_L + C_{GD1}) + R_S\left[(1 + g_{m1}R_L)C_{GD1} + C_{GS1}\right]},\qquad \omega_{p2}\approx\frac{b}{a} = \frac{R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)}{R_SR_L\,\xi}.$$

Because $R_L = r_{O1}\parallel r_{O3}$ is large, the **output pole is usually dominant**; when $C_L$ dominates the $b$ coefficient,

$$\omega_{p1}\approx\frac{1}{(r_{O1}\parallel r_{O3})C_L}.$$

**A remark on the Miller effect.** A pole-per-node estimate at the input would multiply $C_{GD1}$ by $1 + g_{m1}R_L$, which is very large here. But the gain from A to the output starts falling at the (low) output pole, so at the frequencies where the input node matters the actual Miller factor is much smaller. The low-frequency Miller estimate of the input pole is therefore pessimistic, and the exact quadratic above should be used.

### Result

$$\frac{V_{out}}{V_{in}}(s) = \frac{(C_{GD1}s - g_{m1})R_L}{R_SR_L\xi s^2 + \left[R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)\right]s + 1}$$

with $R_L = r_{O1}\parallel r_{O3}$ and $\xi = C_{GS1}C_{GD1} + C_{GS1}C_L + C_{GD1}C_L$ (the same expression holds for each half, $V_{out1}/V_{in1}$). The dc gain is $-g_{m1}(r_{O1}\parallel r_{O3})$, there is a right-half-plane zero at $g_{m1}/C_{GD1}$, and the dominant pole is usually the output pole, $\approx 1/\{R_L(C_L + C_{GD1}) + R_S[(1 + g_{m1}R_L)C_{GD1} + C_{GS1}]\}\approx1/[(r_{O1}\parallel r_{O3})C_L]$ when $C_L$ dominates.

**Common mistake.** Taking the load as $1/g_{m3}$ (as if $M_3$ were diode-connected) or as $r_{O3}$ alone. $M_3$'s gate is at a fixed bias, so it contributes only $r_{O3}$, and it appears in parallel with $r_{O1}$ of the input device.

**Common mistake.** Treating the tail node as a moving node (source degeneration) for differential inputs. With a symmetric circuit and a purely differential input, the two halves inject equal and opposite currents into P, so P is an ac ground and $C_{GS1}$ goes from the gate to ground in the half circuit.

**Common mistake.** Writing a left-half-plane zero ($C_{GD1}s + g_{m1}$ in the numerator), or giving only a first-order result (just the output pole or just a Miller input pole). The two nodes A and output are coupled by $C_{GD1}$, so the response is second order with a right-half-plane zero.
