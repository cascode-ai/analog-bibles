# Detailed solution - R323

**Approach.** For differential signals use a half circuit: the tail node is a virtual ground, and the PMOS loads, with their gates at a fixed bias, reduce to their output resistances. Each half is then a common-source (CS) stage with source resistance $R_S$, load $R_L = r_{O1}\parallel r_{O3}$, capacitances $C_{GS1}$, $C_{GD1}$ and output capacitance $C_L$. Derive its transfer function from KCL at the gate and output, and relate it to the differential gain.

### Step 1 — Reduction to a half circuit

<!-- diagram: diagram-01.cir -->

Call the tail node P. For a differential input, $V_{in1} = +V_{in}/2$ and $V_{in2} = -V_{in}/2$, and every signal on one side is the negative of that on the other:

- **P** receives equal and opposite signal currents and the ideal tail absorbs none, so P is an **ac ground** ($C_{SB1}$, $C_{SB2}$ and any tail capacitance carry no differential signal).
- **$M_3$, $M_4$** have $v_{gs3} = 0$ (gate at $V_b$, source at $V_{DD}$), so each is just $r_{O3}$ from the output to ac ground.

Each half is therefore $M_1$ with its source at ac ground, its gate (node **A**) driven from $V_{in}/2$ through $R_S$, and its drain loaded by $C_L$ and

$$R_L = r_{O1}\parallel r_{O3} = \frac{r_{O1}r_{O3}}{r_{O1} + r_{O3}}.$$

### Step 2 — Small-signal model of the half circuit

<!-- diagram: diagram-02.cir -->

Node A has $R_S$ to the source $V_{in}/2$, $C_{GS1}$ to ground and $C_{GD1}$ to the output; the output has $g_{m1}V_A$, $R_L$ and $C_L$ to ground and $C_{GD1}$ to A. Write $v_i = V_{in}/2$ for the half-circuit input and $V_o = V_{out1}$ for its output.

### Step 3 — KCL at the two nodes

At A (currents leaving), multiplied by $R_S$:

$$\frac{V_A - v_i}{R_S} + C_{GS1}s\,V_A + C_{GD1}s\,(V_A - V_o) = 0 ,$$

$$V_A\left[1 + R_S(C_{GS1} + C_{GD1})s\right] - R_SC_{GD1}s\,V_o = v_i . \qquad (1)$$

At the output (currents leaving):

$$C_{GD1}s\,(V_o - V_A) + g_{m1}V_A + \frac{V_o}{R_L} + C_Ls\,V_o = 0 ,$$

$$V_A\,(g_{m1} - C_{GD1}s) = -V_o\left[\frac{1}{R_L} + (C_{GD1} + C_L)s\right]\quad\Longrightarrow\quad V_A = -V_o\,\frac{1 + R_L(C_{GD1} + C_L)s}{R_L(g_{m1} - C_{GD1}s)} . \qquad (2)$$

### Step 4 — Eliminate $V_A$

Substitute (2) into (1) and multiply both sides by $R_L(g_{m1} - C_{GD1}s)$:

$$-V_o\Big\{\left[1 + R_L(C_{GD1} + C_L)s\right]\left[1 + R_S(C_{GS1} + C_{GD1})s\right] + R_SR_LC_{GD1}s\,(g_{m1} - C_{GD1}s)\Big\} = v_i\,R_L(g_{m1} - C_{GD1}s).$$

The curly bracket expands to

$$
\begin{aligned}
D(s) &= 1 + \left[R_L(C_{GD1} + C_L) + R_S(C_{GS1} + C_{GD1}) + g_{m1}R_SR_LC_{GD1}\right]s\\
&\quad + R_SR_L\left[(C_{GD1} + C_L)(C_{GS1} + C_{GD1}) - C_{GD1}^2\right]s^2 ,
\end{aligned}
$$

where the $C_{GD1}^2$ terms cancel in the $s^2$ bracket:

$$(C_{GD1} + C_L)(C_{GS1} + C_{GD1}) - C_{GD1}^2 = C_{GS1}C_{GD1} + C_{GS1}C_L + C_{GD1}C_L\equiv\xi .$$

Regrouping the $s$ coefficient as $R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)$:

$$\frac{V_o}{v_i} = \frac{(C_{GD1}s - g_{m1})R_L}{R_SR_L\xi s^2 + \left[R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)\right]s + 1}.$$

### Step 5 — From the half circuit to the differential gain

$V_{out1} = (V_o/v_i)\cdot V_{in}/2$ and $V_{out2} = -V_{out1}$, so $V_{out} = V_{out1} - V_{out2} = 2V_{out1} = (V_o/v_i)\,V_{in}$: the differential transfer function equals the half-circuit one,

$$\frac{V_{out}}{V_{in}}(s) = \frac{(C_{GD1}s - g_{m1})R_L}{R_SR_L\xi s^2 + \left[R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)\right]s + 1},$$

$$R_L = r_{O1}\parallel r_{O3}, \qquad \xi = C_{GS1}C_{GD1} + C_{GS1}C_L + C_{GD1}C_L .$$

### Step 6 — Gain, zero and poles

**dc gain:** $-g_{m1}(r_{O1}\parallel r_{O3})$.

**Zero:** $s_z = +g_{m1}/C_{GD1}$, in the right half plane: $C_{GD1}$ passes the signal without inversion, the transistor inverts it, and they cancel at a positive real $s$.

**Poles.** With $a = R_SR_L\xi$ and $b$ the $s$ coefficient, for well-separated poles:

$$\omega_{p1}\approx\frac{1}{b} = \frac{1}{R_L(C_L + C_{GD1}) + R_S\left[(1 + g_{m1}R_L)C_{GD1} + C_{GS1}\right]},\qquad \omega_{p2}\approx\frac{b}{a} = \frac{R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)}{R_SR_L\,\xi}.$$

With $R_L = r_{O1}\parallel r_{O3}$ large, the **output pole is usually dominant**; when $C_L$ dominates $b$,

$$\omega_{p1}\approx\frac{1}{(r_{O1}\parallel r_{O3})C_L}.$$

A pole-per-node estimate at the input would multiply $C_{GD1}$ by the large $1 + g_{m1}R_L$, but the gain from A to the output starts falling at the low output pole, so where the input node matters the actual Miller factor is much smaller. That estimate is pessimistic; the exact quadratic above should be used.

### Result

$$\frac{V_{out}}{V_{in}}(s) = \frac{(C_{GD1}s - g_{m1})R_L}{R_SR_L\xi s^2 + \left[R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)\right]s + 1}$$

with $R_L = r_{O1}\parallel r_{O3}$ and $\xi = C_{GS1}C_{GD1} + C_{GS1}C_L + C_{GD1}C_L$ (the same expression holds for each half, $V_{out1}/V_{in1}$). The dc gain is $-g_{m1}(r_{O1}\parallel r_{O3})$, there is a right-half-plane zero at $g_{m1}/C_{GD1}$, and the dominant pole is usually the output pole, $\approx 1/\{R_L(C_L + C_{GD1}) + R_S[(1 + g_{m1}R_L)C_{GD1} + C_{GS1}]\}\approx1/[(r_{O1}\parallel r_{O3})C_L]$ when $C_L$ dominates.

**Common mistake.** Taking the load as $1/g_{m3}$ (as if $M_3$ were diode-connected) or as $r_{O3}$ alone. With its gate at a fixed bias, $M_3$ contributes only $r_{O3}$, in parallel with $r_{O1}$.

**Common mistake.** Treating the tail node as a moving node (source degeneration) for differential inputs. The two halves inject equal and opposite currents into P, so P is an ac ground and $C_{GS1}$ goes from the gate to ground in the half circuit.

**Common mistake.** Writing a left-half-plane zero ($C_{GD1}s + g_{m1}$ in the numerator), or a first-order result (just the output pole or just a Miller input pole). $C_{GD1}$ couples A and the output, so the response is second order with a right-half-plane zero.
