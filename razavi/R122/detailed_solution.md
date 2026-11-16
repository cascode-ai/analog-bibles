# Detailed solution - R122

**Approach.** $M_1$ is a common-source stage driving node $A$ (its drain, also the drain of $M_3$); $M_2$ is a source follower from $A$ to the output, loaded by the ideal $I_1$; and the output drives the gate of the PMOS $M_3$. Write KCL at the output (which fixes the follower gain) and at $A$, and solve. $M_3$, closed through the follower, behaves like a diode-connected load.

### Step 1 — Small-signal model

$V_{DD}$ is an ac ground, $\gamma = 0$, and the ideal $I_1$ is an **open circuit**. With the unknowns $v_A$ and $v_{out}$:

- **$M_1$**: $v_{gs1} = v_{in}$; a controlled source $g_{m1}v_{in}$ from $A$ to ground, with $r_{O1}$ from $A$ to ground.
- **$M_3$**: $v_{gs3} = v_{out}$ (source at ac ground); a controlled source $g_{m3}v_{out}$ from $A$ (drain) to ac ground, with $r_{O3}$ from $A$ to ac ground.
- **$M_2$**: $v_{gs2} = v_A - v_{out}$; a controlled source $g_{m2}(v_A - v_{out})$ from ac ground (drain) into the output (source), with $r_{O2}$ from the output to ac ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the output: the follower

$I_1$ is open and the gate of $M_3$ draws no current, so the small-signal current of $M_2$ is **zero** ($r_{O2}$ carries $(0 - v_{out})/r_{O2}$):

$$g_{m2}(v_A - v_{out}) - \frac{v_{out}}{r_{O2}} = 0.$$

Solving for $v_A$:

$$g_{m2}v_A = v_{out}\left(g_{m2} + \frac{1}{r_{O2}}\right)\quad\Longrightarrow\quad v_A = v_{out}\left(1 + \frac{1}{g_{m2}r_{O2}}\right). \tag{1}$$

The follower gain is $v_{out}/v_A = g_{m2}r_{O2}/(1 + g_{m2}r_{O2})$, just below 1.

### Step 3 — KCL at node A

Current leaves $A$ through $M_1$ and through $M_3$:

$$g_{m1}v_{in} + \frac{v_A}{r_{O1}} + g_{m3}v_{out} + \frac{v_A}{r_{O3}} = 0, \tag{2}$$

$$g_{m1}v_{in} = -g_{m3}v_{out} - v_A\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}}\right).$$

### Step 4 — Solve for the gain

Substituting (1) into (2):

$$g_{m1}v_{in} = -v_{out}\left[g_{m3} + \left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}}\right)\left(1 + \frac{1}{g_{m2}r_{O2}}\right)\right],$$

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{g_{m3} + \left(\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}}\right)\left(1 + \dfrac{1}{g_{m2}r_{O2}}\right)}.$$

**Polynomial form.** Multiplying numerator and denominator by $g_{m2}r_{O1}r_{O2}r_{O3}$, the denominator terms become

$$
\begin{aligned}
g_{m3}\cdot g_{m2}r_{O1}r_{O2}r_{O3} &= g_{m2}g_{m3}r_{O1}r_{O2}r_{O3},\\
\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}}\right)g_{m2}r_{O1}r_{O2}r_{O3} &= g_{m2}r_{O2}(r_{O1} + r_{O3}),\\
g_{m2}r_{O2}(r_{O1} + r_{O3})\left(1 + \frac{1}{g_{m2}r_{O2}}\right) &= (r_{O1} + r_{O3})(1 + g_{m2}r_{O2}) = g_{m2}r_{O1}r_{O2} + g_{m2}r_{O2}r_{O3} + r_{O1} + r_{O3}.
\end{aligned}
$$

Hence

$$A_v = -\frac{g_{m1}g_{m2}r_{O1}r_{O2}r_{O3}}{g_{m2}g_{m3}r_{O1}r_{O2}r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m2}r_{O2}r_{O3} + r_{O1} + r_{O3}}.$$

### Step 5 — Approximation and intuition

In the compact form, $(1/r_{O1} + 1/r_{O3})(1 + 1/(g_{m2}r_{O2}))$ is of order $2/r_O$, while $g_{m3}r_O \gg 1$, so

$$A_v \approx -\frac{g_{m1}}{g_{m3}}.$$

**Why it behaves like a diode-connected load.** The follower carries no signal current, so $v_{out} \approx v_A$: the gate of $M_3$ moves with its own drain, and $A$ sees about $1/g_{m3}$ (in parallel with $r_{O1}$ and $r_{O3}$). $M_1$ therefore gains about $-g_{m1}/g_{m3}$ to $A$, and the follower copies it to the output. In feedback terms, a rise at $A$ raises the PMOS gate, so $M_3$ supplies less current into $A$ and pulls it back down. (In dc terms the gate of $M_3$ sits one $V_{GS2}$ below its drain, unlike a true diode connection, but the small-signal effect is the same.)

**Check of the limit.** With $M_3$'s gate at a fixed bias ($g_{m3} \to 0$), the gain becomes $-g_{m1}(r_{O1}\parallel r_{O3})\cdot g_{m2}r_{O2}/(1 + g_{m2}r_{O2})$: a high-gain CS stage followed by a follower. The feedback through $M_3$ reduces this to about $g_{m1}/g_{m3}$.

### Result

$$A_v = -\frac{g_{m1}}{g_{m3} + \left(\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}}\right)\left(1 + \dfrac{1}{g_{m2}r_{O2}}\right)} = -\frac{g_{m1}g_{m2}r_{O1}r_{O2}r_{O3}}{g_{m2}g_{m3}r_{O1}r_{O2}r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m2}r_{O2}r_{O3} + r_{O1} + r_{O3}} \approx -\frac{g_{m1}}{g_{m3}}.$$

**Common mistake.** Ignoring the feedback through $M_3$ (gate at a fixed bias) and writing $A_v \approx -g_{m1}(r_{O1}\parallel r_{O3})$. The gate of $M_3$ follows $A$ through the output, so $M_3$ is effectively a diode-connected load of about $1/g_{m3}$.

**Common mistake.** Giving $I_1$ a finite small-signal resistance. Because $I_1$ is ideal and the gate of $M_3$ draws no current, $M_2$'s small-signal current is exactly zero, which gives $v_{out} = v_A\,g_{m2}r_{O2}/(1 + g_{m2}r_{O2})$.

**Common mistake.** Stating $-g_{m1}/g_{m3}$ as the exact answer. It is the $g_mr_O \gg 1$ limit; the exact result keeps the $(1/r_{O1} + 1/r_{O3})(1 + 1/(g_{m2}r_{O2}))$ term, which lowers the gain slightly.
