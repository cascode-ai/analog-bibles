# Detailed solution - R309

**Approach.** The circuit is symmetric and driven differentially, so use a **half circuit**, splitting each symmetric bridging element (the two $R_2$ resistors, the $R_1$–$C_1$ branch) at its midpoint, an ac ground for differential signals. In the half circuit, $M_1$'s signal current is shared between the cascode device $M_6$ and the $R_1$–$C_1$ branch, and only the part through $M_6$ reaches the load $R_2$. Evaluating this current division at very low and very high frequencies gives the two gains.

### Step 1 — Differential symmetry

Call the common source node of $M_1$, $M_2$ P, the sources of $M_6$ and $M_5$ X and Y, and the common gate node of $M_3$, $M_4$ (midpoint of the two $R_2$ resistors) M. For a differential input, $V_{D6} = -V_{D5}$ and $V_X = -V_Y$, so:

- **M** is at $(V_{D6} + V_{D5})/2 = 0$, **an ac ground for differential signals**. No differential current flows into $C_2$, so **$C_2$ does not affect the differential gain**; it acts only on common-mode signals.
- **$M_3$, $M_4$** have gate (M) and source ($V_{DD}$) at ac ground, so $v_{gs} = 0$; with $\lambda = 0$ they carry **no signal current**.
- **Each output** therefore sees one $R_2$ to ac ground.
- **P:** with an ideal tail, $V_P = (V_{G1} + V_{G2})/2 = 0$, also an ac ground.

### Step 2 — The $R_1$–$C_1$ branch seen from one side

The branch current depends only on $V_X - V_Y$:

$$I_b = \frac{V_X - V_Y}{R_1 + \dfrac{1}{C_1s}} = \frac{2V_X}{R_1 + \dfrac{1}{C_1s}} ,$$

so, seen from X, it is an impedance to ground

$$Z_b = \frac{V_X}{I_b} = \frac12\left(R_1 + \frac{1}{C_1s}\right) = \frac{R_1}{2} + \frac{1}{2C_1s} = \frac{1 + R_1C_1s}{2C_1s},$$

i.e. **$R_1/2$ in series with $2C_1$**, from X to ac ground.

### Step 3 — The half circuit

<!-- diagram: diagram-01.cir -->

- $M_1$, with its source at ac ground (P) and gate voltage $V_{in}/2$, draws $i_1 = g_{m1}V_{in}/2$ from X, independent of $V_X$ ($\lambda = 0$).
- $M_6$, with its gate at ac ground ($V_b$), carries $-g_{m5}V_X$ from $D6$ down into X ($g_{m6} = g_{m5}$, since $M_5$ and $M_6$ are identical); its input resistance looking into the source is $1/g_{m5}$ ($\lambda = \gamma = 0$).
- $Z_b$ runs from X to ground, and $R_2$ from $D6$ to ground; $M_3$ contributes nothing.

### Step 4 — Current division at X and the output voltage

At X, the current drawn by $M_1$ is supplied by $M_6$ and by $Z_b$ (whose current into X is $-V_X/Z_b$):

$$-g_{m5}V_X - \frac{V_X}{Z_b} = i_1\quad\Longrightarrow\quad V_X = -\frac{i_1}{g_{m5} + 1/Z_b}.$$

The current through the cascode device is the share of a current divider between $1/g_{m5}$ and $Z_b$:

$$i_6 = -g_{m5}V_X = i_1\,\frac{g_{m5}}{g_{m5} + 1/Z_b} = i_1\,\frac{Z_b}{Z_b + 1/g_{m5}} .$$

At $D6$, $M_3$ carries no signal current, so $i_6$ comes from $R_2$: $-V_{D6}/R_2 = i_6$, i.e.

$$V_{D6} = -R_2\,i_6 = -R_2\,\frac{g_{m1}V_{in}}{2}\cdot\frac{Z_b}{Z_b + 1/g_{m5}} .$$

By antisymmetry $V_{D5} = -V_{D6}$, so

$$V_{out} = V_{D6} - V_{D5} = 2V_{D6} = -g_{m1}R_2\,\frac{Z_b}{Z_b + 1/g_{m5}}\,V_{in}.$$

### Step 5 — The transfer function

Insert $Z_b = (1 + R_1C_1s)/(2C_1s)$ and multiply numerator and denominator by $2C_1s$:

$$
\begin{aligned}
\frac{Z_b}{Z_b + 1/g_{m5}} &= \frac{1 + R_1C_1s}{1 + R_1C_1s + 2C_1s/g_{m5}}\\
&= \frac{1 + R_1C_1s}{1 + (R_1 + 2/g_{m5})C_1s},
\end{aligned}
$$

$$\frac{V_{out}}{V_{in}}(s) = -g_{m1}R_2\,\frac{1 + R_1C_1s}{1 + (R_1 + 2/g_{m5})C_1s}.$$

It has a pole at $s = -1/[(R_1 + 2/g_{m5})C_1]$ and a slightly higher-frequency zero at $s = -1/(R_1C_1)$: a lag network that lowers the gain at high frequencies.

### Step 6 — Very low and very high frequencies

**Very low frequencies** ($s\to0$): $C_1$ is open, $Z_b\to\infty$, and all of $M_1$'s current flows through the cascode into $R_2$:

$$\frac{V_{out}}{V_{in}} = -g_{m1}R_2, \qquad |A_v| = g_{m1}R_2 .$$

**Very high frequencies** ($s\to\infty$): $C_1$ is a short and $Z_b\to R_1/2$, in parallel with the cascode input resistance $1/g_{m5}$ at X, so only the fraction $\dfrac{R_1/2}{R_1/2 + 1/g_{m5}}$ of $M_1$'s current reaches the output:

$$\frac{V_{out}}{V_{in}} = -g_{m1}R_2\,\frac{R_1}{R_1 + 2/g_{m5}} = -g_{m1}R_2\,\frac{g_{m5}R_1}{2 + g_{m5}R_1}.$$

### Result

$$\frac{V_{out}}{V_{in}}(s) = -g_{m1}R_2\,\frac{1 + R_1C_1s}{1 + (R_1 + 2/g_{m5})C_1s}$$

- **Very low frequencies:** $|A_v| = g_{m1}R_2$.
- **Very high frequencies:** $|A_v| = g_{m1}R_2\,\dfrac{R_1}{R_1 + 2/g_{m5}} = g_{m1}R_2\,\dfrac{g_{m5}R_1}{2 + g_{m5}R_1}$.

The output taken at the drain of $M_6$ minus that of $M_5$ is inverted relative to $V_{G1} - V_{G2}$. $C_2$ has no effect on the differential gain because the midpoint of the $R_2$ resistors is a differential virtual ground.

**Common mistake.** Letting the PMOS devices set the gain (for example $g_{m1}/g_{m3}$, as if they were diode-connected). Their gates sit at a differential ac ground, so with $\lambda = 0$ they are ideal current sources and the load is $R_2$.

**Common mistake.** Claiming that $C_2$ changes the differential gain. No differential current reaches node M, so $C_2$ carries none; it matters only for common-mode signals.

**Common mistake.** Using $R_1$ instead of $R_1/2$ per side, or dropping $R_1$ at high frequency (gain zero or unchanged $g_{m1}R_2$). Each half sees half the branch's resistance (and twice its capacitance), which at high frequency diverts part of $M_1$'s current from the cascode: the gain drops, but not to zero.
