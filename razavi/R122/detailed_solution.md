# Detailed solution - R122

**Approach.** $M_1$ is a common-source stage driving node $A$; $M_2$ is a source follower from $A$ to the output, loaded by the ideal current source $I_1$; and the output drives the gate of the PMOS $M_3$, whose drain is node $A$. We write Kirchhoff's current law (KCL) at the output (which fixes the follower gain) and at $A$, and solve. The result shows that $M_3$, closed through the follower, behaves like a diode-connected load.

### Step 1 — Reading the circuit

From the figure:

- $M_1$: NMOS, gate at $V_{in}$, source at ground, drain at a node we call $A$.
- $M_3$: PMOS, source at $V_{DD}$, drain at $A$, and its **gate connected to $V_{out}$** (the line from the gate of $M_3$ runs to the right and down to the output).
- $M_2$: NMOS, drain at $V_{DD}$, **gate at $A$**, source at $V_{out}$.
- $I_1$: ideal current source from $V_{out}$ to ground.

So $A$ is the output of the CS stage, $M_2$ buffers $A$ to $V_{out}$, and the output feeds back to the gate of $M_3$.

The problem gives $\gamma = 0$ (no body effect for $M_2$) and $\lambda \neq 0$. Here $g_{mi}$ is the transconductance of $M_i$, $r_{Oi} \approx 1/(\lambda I_D)$ its output resistance, and lower-case symbols are small-signal quantities. $V_{DD}$ and ground are **ac grounds**.

### Step 2 — Small-signal model

The small-signal model of a PMOS is identical to that of an NMOS (current $g_mv_{gs}$ from drain to source, $r_O$ from drain to source). An ideal current source has a constant current, so its small-signal model is an **open circuit**. The unknown node voltages are $v_A$ and $v_{out}$.

- **$M_1$**: $v_{gs1} = v_{in}$; current $g_{m1}v_{in}$ from $A$ to ground, with $r_{O1}$ from $A$ to ground.
- **$M_3$**: source at ac ground, gate at the output, so $v_{gs3} = v_{out}$; current $g_{m3}v_{out}$ from $A$ (drain) to ac ground (source), with $r_{O3}$ from $A$ to ac ground.
- **$M_2$**: drain at ac ground, gate at $A$, source at the output, so $v_{gs2} = v_A - v_{out}$; current $g_{m2}(v_A - v_{out})$ from ac ground (drain) into the output (source), with $r_{O2}$ from the output to ac ground.
- **$I_1$**: open circuit. The gate of $M_3$ also draws no current.

<!-- diagram: diagram-01.cir -->

### Step 3 — KCL at the output: the follower

Only $M_2$ connects to the output with a conducting path, because $I_1$ is an open circuit and the gate of $M_3$ draws nothing. So the small-signal current of $M_2$ must be **zero**:

$$g_{m2}(v_A - v_{out}) - \frac{v_{out}}{r_{O2}} = 0.$$

(The second term is the current in $r_{O2}$ from the drain at ac ground to the source: $(0 - v_{out})/r_{O2}$.)

Solve for $v_A$:

$$g_{m2}v_A = v_{out}\left(g_{m2} + \frac{1}{r_{O2}}\right)\quad\Longrightarrow\quad v_A = v_{out}\left(1 + \frac{1}{g_{m2}r_{O2}}\right). \tag{1}$$

Equivalently, the follower gain is $v_{out}/v_A = g_{m2}r_{O2}/(1 + g_{m2}r_{O2})$, just below 1.

### Step 4 — KCL at node A

The sum of currents leaving $A$ is zero. Current leaves through $M_1$ (controlled source and $r_{O1}$) and through $M_3$ (controlled source and $r_{O3}$):

$$g_{m1}v_{in} + \frac{v_A}{r_{O1}} + g_{m3}v_{out} + \frac{v_A}{r_{O3}} = 0. \tag{2}$$

Rearrange:

$$g_{m1}v_{in} = -g_{m3}v_{out} - v_A\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}}\right).$$

### Step 5 — Solve for the gain

Substitute (1) into (2):

$$g_{m1}v_{in} = -v_{out}\left[g_{m3} + \left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}}\right)\left(1 + \frac{1}{g_{m2}r_{O2}}\right)\right].$$

Therefore

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{g_{m3} + \left(\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}}\right)\left(1 + \dfrac{1}{g_{m2}r_{O2}}\right)}.$$

**Polynomial form.** Multiply numerator and denominator by $g_{m2}r_{O1}r_{O2}r_{O3}$. The terms of the denominator become:

$$
\begin{aligned}
g_{m3}\cdot g_{m2}r_{O1}r_{O2}r_{O3} &= g_{m2}g_{m3}r_{O1}r_{O2}r_{O3},\\
\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}}\right)g_{m2}r_{O1}r_{O2}r_{O3} &= g_{m2}r_{O2}(r_{O1} + r_{O3}),\\
g_{m2}r_{O2}(r_{O1} + r_{O3})\left(1 + \frac{1}{g_{m2}r_{O2}}\right) &= (r_{O1} + r_{O3})(1 + g_{m2}r_{O2}) = g_{m2}r_{O1}r_{O2} + g_{m2}r_{O2}r_{O3} + r_{O1} + r_{O3}.
\end{aligned}
$$

Hence

$$A_v = -\frac{g_{m1}g_{m2}r_{O1}r_{O2}r_{O3}}{g_{m2}g_{m3}r_{O1}r_{O2}r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m2}r_{O2}r_{O3} + r_{O1} + r_{O3}}.$$

### Step 6 — Approximation and intuition

Compare the two parts of the denominator of the compact form. $g_{m3}$ is a transconductance, while $(1/r_{O1} + 1/r_{O3})(1 + 1/(g_{m2}r_{O2}))$ is of order $2/r_O$. Since $g_{m3}r_O \gg 1$, $g_{m3}$ dominates and

$$A_v \approx -\frac{g_{m1}}{g_{m3}}.$$

**Why it behaves like a diode-connected load.** The follower $M_2$ carries no signal current, so $v_{out} \approx v_A$ (Step 3). The gate of $M_3$ therefore moves together with its own drain, as if $M_3$ were diode-connected, and node $A$ sees a resistance of about $1/g_{m3}$ (in parallel with $r_{O1}$ and $r_{O3}$). The CS stage $M_1$ thus has a gain of about $-g_{m1}/g_{m3}$ to node $A$, and the follower copies it to the output.

In feedback terms: if $A$ rises, the output rises, the PMOS gate rises, and $M_3$ supplies less current into $A$, pulling $A$ back down. This local negative feedback makes $A$ a low-impedance node. (Unlike a true diode connection, the gate of $M_3$ here sits one $V_{GS2}$ below its drain in dc terms, but small-signal-wise the effect is the same.)

**Check of the limit.** If $M_3$'s gate were at a fixed bias ($g_{m3} \to 0$ in the formula), the gain would become $-g_{m1}(r_{O1}\parallel r_{O3})\cdot g_{m2}r_{O2}/(1 + g_{m2}r_{O2})$: a high-gain CS stage followed by a follower. The feedback through $M_3$ reduces this to about $g_{m1}/g_{m3}$.

### Result

$$A_v = -\frac{g_{m1}}{g_{m3} + \left(\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}}\right)\left(1 + \dfrac{1}{g_{m2}r_{O2}}\right)} = -\frac{g_{m1}g_{m2}r_{O1}r_{O2}r_{O3}}{g_{m2}g_{m3}r_{O1}r_{O2}r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m2}r_{O2}r_{O3} + r_{O1} + r_{O3}} \approx -\frac{g_{m1}}{g_{m3}}.$$

**Common mistake.** Ignoring the feedback through $M_3$ (treating its gate as a fixed bias) and writing $A_v \approx -g_{m1}(r_{O1}\parallel r_{O3})$. The gate of $M_3$ is connected to the output, which follows $A$; this turns $M_3$ into an effectively diode-connected load of about $1/g_{m3}$, and the gain is only about $g_{m1}/g_{m3}$.

**Common mistake.** Giving $I_1$ a finite small-signal resistance or forgetting that it is an open circuit. Because $I_1$ is ideal and the gate of $M_3$ draws no current, $M_2$'s small-signal current is exactly zero; this is what gives $v_{out} = v_A\,g_{m2}r_{O2}/(1 + g_{m2}r_{O2})$.

**Common mistake.** Stating $-g_{m1}/g_{m3}$ as the exact answer. It is the limit for $g_mr_O \gg 1$; the exact result keeps the $(1/r_{O1} + 1/r_{O3})(1 + 1/(g_{m2}r_{O2}))$ term, which lowers the gain slightly.
