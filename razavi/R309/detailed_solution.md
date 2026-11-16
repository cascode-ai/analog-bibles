# Detailed solution - R309

**Approach.** The circuit is fully symmetric and is driven differentially, so we use a **half circuit**. Every element that bridges the two halves symmetrically (the two $R_2$ resistors, the $R_1$–$C_1$ branch) is split at its electrical midpoint, which is an ac ground for differential signals. In the half circuit, $M_1$'s signal current is shared between the cascode device $M_6$ and the $R_1$–$C_1$ branch; only the part that passes through $M_6$ reaches the load $R_2$. Evaluating this current division at very low and very high frequencies gives the two gains.

### Step 1 — Reading the circuit

From the figure:

- $M_1$–$M_2$: NMOS differential pair, sources tied at node **P**, ideal tail $I_{SS}$. $V_{in} = V_{G1} - V_{G2}$.
- $M_6$ (left) and $M_5$ (right): NMOS cascode devices with gates at $V_b$. The source of $M_6$ is node **X** (drain of $M_1$); the source of $M_5$ is node **Y** (drain of $M_2$).
- $M_3$ (left) and $M_4$ (right): PMOS loads with sources at $V_{DD}$. Their gates are tied together at node **M**, which is the midpoint of two equal resistors $R_2$ running from the left output (drain of $M_6$) and the right output (drain of $M_5$). $C_2$ connects M to $V_{DD}$.
- $R_1$ in series with $C_1$ connects X to Y.
- $V_{out} = V_{D6} - V_{D5}$.

### Step 2 — Differential symmetry: what $C_2$ and the PMOS loads do

For a purely differential input, every node voltage on the left is the negative of the corresponding one on the right: $V_{D6} = -V_{D5}$, $V_X = -V_Y$.

- **Node M.** It sits exactly in the middle of two equal resistors between $V_{D6}$ and $V_{D5} = -V_{D6}$. The current through the left $R_2$ equals the current through the right $R_2$, so M is at $(V_{D6} + V_{D5})/2 = 0$: **an ac ground for differential signals**. No differential current flows into $C_2$, so **$C_2$ does not affect the differential gain**; it only acts on common-mode signals.
- **$M_3$, $M_4$.** Their gates are at M (ac ground) and their sources at $V_{DD}$ (ac ground), so $v_{gs} = 0$. With $\lambda = 0$ they have no $r_O$, so they carry **no signal current**: they are ideal current sources.
- **Load of each output.** Each output therefore sees just one $R_2$ to ac ground (the virtual ground at M).
- **Node P.** With an ideal tail and a differential input, $V_P = (V_{G1} + V_{G2})/2 = 0$: P is also an ac ground.

### Step 3 — The $R_1$–$C_1$ branch seen from one side

The branch is not symmetric internally (a resistor then a capacitor), but its current depends only on $V_X - V_Y$:

$$I_b = \frac{V_X - V_Y}{R_1 + \dfrac{1}{C_1s}} = \frac{2V_X}{R_1 + \dfrac{1}{C_1s}} .$$

So, seen from X, the branch behaves like an impedance to ground

$$Z_b = \frac{V_X}{I_b} = \frac12\left(R_1 + \frac{1}{C_1s}\right) = \frac{R_1}{2} + \frac{1}{2C_1s} = \frac{1 + R_1C_1s}{2C_1s},$$

i.e. **$R_1/2$ in series with $2C_1$**, from X to ac ground.

### Step 4 — The half circuit

<!-- diagram: diagram-01.cir -->

The left half circuit has:

- $M_1$ with its source at ac ground (P) and gate voltage $V_{in}/2$: it draws $i_1 = g_{m1}V_{in}/2$ from X (λ = 0, so this does not depend on $V_X$).
- $M_6$ with gate at ac ground ($V_b$), source at X, drain at the output node $D6$: it carries $-g_{m6}V_X$ from $D6$ down into X. Its input resistance, looking into the source, is $1/g_{m6}$ (λ = γ = 0).
- $Z_b$ from X to ground.
- $R_2$ from $D6$ to ground; $M_3$ contributes nothing.

$M_5$ and $M_6$ are identical, so $g_{m6} = g_{m5}$.

### Step 5 — Current division at X and the output voltage

**KCL at X.** The current drawn by $M_1$ is supplied by $M_6$ (from above) and by the branch $Z_b$ (whose current into X is $-V_X/Z_b$):

$$-g_{m5}V_X - \frac{V_X}{Z_b} = i_1\quad\Longrightarrow\quad V_X = -\frac{i_1}{g_{m5} + 1/Z_b}.$$

**Current through the cascode device:**

$$i_6 = -g_{m5}V_X = i_1\,\frac{g_{m5}}{g_{m5} + 1/Z_b} = i_1\,\frac{Z_b}{Z_b + 1/g_{m5}} .$$

This is a current divider between the cascode's input resistance $1/g_{m5}$ and $Z_b$.

**KCL at $D6$.** $M_3$ carries no signal current, so the current $i_6$ flowing down through $M_6$ must come from $R_2$: $-V_{D6}/R_2 = i_6$, i.e.

$$V_{D6} = -R_2\,i_6 = -R_2\,\frac{g_{m1}V_{in}}{2}\cdot\frac{Z_b}{Z_b + 1/g_{m5}} .$$

**Differential output.** By antisymmetry $V_{D5} = -V_{D6}$, so

$$V_{out} = V_{D6} - V_{D5} = 2V_{D6} = -g_{m1}R_2\,\frac{Z_b}{Z_b + 1/g_{m5}}\,V_{in}.$$

### Step 6 — The transfer function

Insert $Z_b = (1 + R_1C_1s)/(2C_1s)$ and multiply numerator and denominator by $2C_1s$:

$$
\begin{aligned}
\frac{Z_b}{Z_b + 1/g_{m5}} &= \frac{1 + R_1C_1s}{1 + R_1C_1s + 2C_1s/g_{m5}}\\
&= \frac{1 + R_1C_1s}{1 + (R_1 + 2/g_{m5})C_1s}.
\end{aligned}
$$

Therefore

$$\frac{V_{out}}{V_{in}}(s) = -g_{m1}R_2\,\frac{1 + R_1C_1s}{1 + (R_1 + 2/g_{m5})C_1s}.$$

It has a pole at $s = -1/[(R_1 + 2/g_{m5})C_1]$ and a slightly higher-frequency zero at $s = -1/(R_1C_1)$: a lag network that lowers the gain at high frequencies.

### Step 7 — Very low and very high frequencies

**Very low frequencies** ($s\to0$): $C_1$ is open, $Z_b\to\infty$, and all of $M_1$'s current flows through the cascode into $R_2$:

$$\frac{V_{out}}{V_{in}} = -g_{m1}R_2, \qquad |A_v| = g_{m1}R_2 .$$

**Very high frequencies** ($s\to\infty$): $C_1$ is a short, $Z_b\to R_1/2$. X now sees $R_1/2$ to ground in parallel with the cascode input resistance $1/g_{m5}$, and only the fraction $\dfrac{R_1/2}{R_1/2 + 1/g_{m5}}$ of $M_1$'s current reaches the output:

$$\frac{V_{out}}{V_{in}} = -g_{m1}R_2\,\frac{R_1}{R_1 + 2/g_{m5}} = -g_{m1}R_2\,\frac{g_{m5}R_1}{2 + g_{m5}R_1}.$$

### Result

$$\frac{V_{out}}{V_{in}}(s) = -g_{m1}R_2\,\frac{1 + R_1C_1s}{1 + (R_1 + 2/g_{m5})C_1s}$$

- **Very low frequencies:** $|A_v| = g_{m1}R_2$.
- **Very high frequencies:** $|A_v| = g_{m1}R_2\,\dfrac{R_1}{R_1 + 2/g_{m5}} = g_{m1}R_2\,\dfrac{g_{m5}R_1}{2 + g_{m5}R_1}$.

The output taken at the drain of $M_6$ minus that of $M_5$ is inverted relative to $V_{G1} - V_{G2}$. $C_2$ has no effect on the differential gain because the midpoint of the $R_2$ resistors is a differential virtual ground.

**Common mistake.** Letting the PMOS devices set the gain (for example $g_{m1}/g_{m3}$, as if they were diode-connected). Their gates are at the midpoint of the $R_2$ resistors, which is an ac ground for differential signals; with $\lambda = 0$ they are ideal current sources, and the load is $R_2$.

**Common mistake.** Claiming that $C_2$ changes the differential gain. No differential current reaches node M, so $C_2$ carries none; it matters only for common-mode signals.

**Common mistake.** Using $R_1$ instead of $R_1/2$ per side, or forgetting $R_1$ altogether at high frequency (gain zero or unchanged $g_{m1}R_2$). The $R_1$–$C_1$ branch spans both halves, so each half sees half its resistance (and twice its capacitance). At high frequency it diverts part of $M_1$'s current away from the cascode, so the gain drops, but not to zero.
