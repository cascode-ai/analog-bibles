# Detailed solution - R223

**Approach.** Replace the two ideal current sources by open circuits in the small-signal model and apply KCL at each node. The key observation is that the drain of $M_1$ connects only to the ideal source $I_1$, so the small-signal current of $M_1$ must be zero. This forces the current of $M_2$ to zero as well, which fixes $v_{out2}$, then $v_P$, and finally $v_{out1}$.

### Step 1 — Reading the circuit and the bias point

- $M_1$: gate driven by $V_{in}$, drain at $V_{out1}$, which is fed from $V_{DD}$ by the ideal current source $I_1$ (nothing else is connected there).
- $M_2$: gate at the constant bias $V_b$, drain at $V_{out2}$, which is connected to $V_{DD}$ through $R_1$.
- The sources of $M_1$ and $M_2$ meet at node P, which is pulled down by the ideal tail source $I_{SS}$. Both bulks are at ground.

**Bias currents.** KCL at the drain of $M_1$: the only current that can flow into $M_1$ is $I_1$, so $I_{D1} = I_1$. KCL at P then gives

$$I_{D2} = I_{SS} - I_1 ,$$

which requires $I_1 < I_{SS}$. Both currents are fixed by the current sources. In general they differ, so the two transistors have different small-signal parameters:

$$g_{m1} = \sqrt{2\mu_nC_{ox}(W/L)_1I_1}, \quad r_{O1} = \frac{1}{\lambda I_1}, \qquad g_{m2} = \sqrt{2\mu_nC_{ox}(W/L)_2(I_{SS} - I_1)}, \quad r_{O2} = \frac{1}{\lambda(I_{SS} - I_1)} .$$

Here $g_m$ is the transconductance, $r_O$ the output resistance due to channel-length modulation ($\lambda$), and $g_{mb}$ (below) the body-effect transconductance. Both transistors are assumed to be in saturation; $V_{out1}$ is a high-impedance node that settles wherever $M_1$ carries exactly $I_1$.

### Step 2 — Small-signal model

**Rules.**

- $V_{DD}$ and $V_b$ are constant, so they are **ac ground**.
- The ideal sources $I_1$ and $I_{SS}$ have constant currents, so they are **open circuits**.
- Each MOSFET is modelled by three elements between drain and source: a current source $g_mv_{gs}$, a current source $g_{mb}v_{bs}$ (both flowing from drain to source), and the resistance $r_O$.

**Nodes and controlling voltages** (the bulks are at ground, so $v_b = 0$):

$$
\begin{aligned}
M_1:&\quad v_{gs1} = v_{in} - v_P, & v_{bs1} &= -v_P,\\
M_2:&\quad v_{gs2} = 0 - v_P = -v_P, & v_{bs2} &= -v_P .
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

**Drain-to-source small-signal currents:**

$$
\begin{aligned}
i_1 &= g_{m1}(v_{in} - v_P) - g_{mb1}v_P + \frac{v_{out1} - v_P}{r_{O1}},\\
i_2 &= -g_{m2}v_P - g_{mb2}v_P + \frac{v_{out2} - v_P}{r_{O2}} .
\end{aligned}
$$

In words: node $out1$ connects only to $M_1$ (the open $I_1$ adds nothing); node $out2$ connects to $M_2$ and to $R_1$ (to ac ground); node P connects to the sources of both transistors (the open $I_{SS}$ adds nothing).

### Step 3 — KCL at $V_{out1}$: the current of $M_1$ cannot change

All the current entering node $out1$ from above comes from $I_1$, whose small-signal value is zero. All the current leaving it goes into $M_1$. Hence

$$i_1 = 0 .$$

This is the crucial point: **the input cannot change the current of $M_1$**, because an ideal current source sits in series with it.

### Step 4 — KCL at P, then at $V_{out2}$

**At P.** $i_1$ and $i_2$ flow into P and the tail (open) takes nothing:

$$i_1 + i_2 = 0 \quad\Longrightarrow\quad i_2 = -i_1 = 0 .$$

**At $out2$.** The current $i_2$ drawn by $M_2$ comes from ac ground through $R_1$:

$$\frac{0 - v_{out2}}{R_1} = i_2 \quad\Longrightarrow\quad v_{out2} = -R_1i_2 = 0 .$$

So

$$\frac{V_{out2}}{V_{in}} = 0 .$$

No signal current reaches $R_1$, so no signal voltage appears across it.

### Step 5 — Node P does not move

Insert $v_{out2} = 0$ and $i_2 = 0$ into the current equation of $M_2$:

$$0 = -g_{m2}v_P - g_{mb2}v_P + \frac{0 - v_P}{r_{O2}} = -\left(g_{m2} + g_{mb2} + \frac{1}{r_{O2}}\right)v_P .$$

The bracket is positive, so

$$v_P = 0 .$$

**Intuition:** $M_2$ has a fixed gate voltage, a fixed drain voltage and (Step 4) a fixed current. The only way all three can hold is with a fixed source voltage. In this circuit P is a true ac ground, although not for the usual "differential symmetry" reason.

### Step 6 — Gain to $V_{out1}$

Insert $v_P = 0$ and $i_1 = 0$ into the current equation of $M_1$:

$$0 = g_{m1}(v_{in} - 0) - g_{mb1}\cdot0 + \frac{v_{out1} - 0}{r_{O1}} = g_{m1}v_{in} + \frac{v_{out1}}{r_{O1}} .$$

Multiply by $r_{O1}$ and solve:

$$v_{out1} = -g_{m1}r_{O1}\,v_{in}, \qquad \frac{V_{out1}}{V_{in}} = -g_{m1}r_{O1} .$$

This is the **intrinsic gain** of $M_1$. **Why:** when $v_{in}$ rises, $M_1$ "wants" more current, but $I_1$ does not allow it. The only way to keep the current constant is for $V_{DS1}$ to drop until channel-length modulation cancels the increase: $g_{m1}v_{in} = -v_{out1}/r_{O1}$. $M_1$ thus acts as a common-source stage with its source at ac ground (P) and an ideal current-source load.

**Body effect plays no role:** both $g_{mb}$ terms are multiplied by $v_P = 0$. The finite $\lambda$, on the other hand, is essential. With $\lambda = 0$ ($r_{O1} \to \infty$) the equation would read $0 = g_{m1}v_{in}$, which has no solution for $v_{in} \neq 0$. The gain would be unbounded, and in practice $V_{out1}$ would be driven to a rail.

### Step 7 — Check by solving all equations together

Collect the three conditions and the two device equations:

$$
\begin{aligned}
i_1 &= 0, \qquad i_1 + i_2 = 0, \qquad v_{out2} = -R_1i_2,\\
i_1 &= g_{m1}(v_{in} - v_P) - g_{mb1}v_P + (v_{out1} - v_P)/r_{O1},\\
i_2 &= -(g_{m2} + g_{mb2})v_P + (v_{out2} - v_P)/r_{O2} .
\end{aligned}
$$

These five linear equations have the unique solution $i_1 = i_2 = 0$, $v_{out2} = 0$, $v_P = 0$, $v_{out1} = -g_{m1}r_{O1}v_{in}$, confirming Steps 3–6.

### Result

$$\frac{V_{out1}}{V_{in}} = -g_{m1}r_{O1}, \qquad \frac{V_{out2}}{V_{in}} = 0 .$$

The ideal source $I_1$ forces the signal current of $M_1$ to zero, and the ideal tail then forces the signal current of $M_2$ to zero. So $V_{out2}$ does not move, P does not move (body effect is irrelevant), and $V_{out1}$ shows the intrinsic gain of $M_1$.

**Common mistake.** Treating the circuit as a standard differential pair and writing $V_{out2}/V_{in} = g_mR_1/2$ (or some other nonzero value). That result assumes the input can steer current from one side to the other. Here $I_1$ blocks any change in the current of $M_1$, so with an ideal tail no current can be steered into $M_2$ either.

**Common mistake.** Assuming P is a "virtual ground" of a half circuit and writing $V_{out1}/V_{in} = -g_{m1}r_{O1}/2$ together with a nonzero $V_{out2}$. P is indeed at ac ground, but because $M_2$'s current, gate and drain are all fixed, not because of differential symmetry. There is no splitting of the input between two halves.

**Common mistake.** Declaring $V_{out1}/V_{in}$ infinite because "the load is an ideal current source." That would be true only with $\lambda = 0$. With $\lambda > 0$ the node resistance is $r_{O1}$ (P being at ac ground), and the gain is finite, $-g_{m1}r_{O1}$. Also avoid slips such as $-(1 + g_{m1}r_{O1})$: the "$+1$" appears only when the input drives the *source*, not the gate.
