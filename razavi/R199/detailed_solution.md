# Detailed solution - R199

**Approach.** Use the differential half circuit. For a differential input, two points do not move: the tail node P, and the midpoint of the resistor $R_1$ connected between the outputs. With those virtual grounds, each output sees $M_1$ (a transconductor with $r_{O1}$), the PMOS current source $M_3$ ($r_{O3}$) and half of $R_1$, all in parallel. KCL at the output gives the gain. A direct two-node analysis confirms the factor $R_1/2$.

### Step 1 — Reading the circuit

From the figure:

- $M_1$, $M_2$: NMOS differential pair with sources at node P and tail transistor $M_5$ (gate at $V_{b1}$).
- $M_3$, $M_4$: PMOS with sources at $V_{DD}$ and gates at the fixed bias $V_{b2}$. These are current-source loads, not diodes.
- X is the left output (drain of $M_1$ and $M_3$) and Y the right output (drain of $M_2$ and $M_4$). $R_1$ connects X to Y.
- $V_{out} = V_X - V_Y$; all devices saturated, $\lambda \ne 0$.

### Step 2 — Virtual grounds for a differential input

Apply $v_{in1} = +v_d/2$ and $v_{in2} = -v_d/2$, where $v_d = v_{in1} - v_{in2}$. By symmetry the outputs move equally and oppositely: $v_Y = -v_X$.

- **Node P.** The signal currents of $M_1$ and $M_2$ into P cancel, so $v_P = 0$.
- **Midpoint of $R_1$.** The two ends of $R_1$ are at $+v_X$ and $-v_X$, so its centre is at zero. Each output therefore sees $R_1/2$ to AC ground.
- **$M_3$.** Its gate ($V_{b2}$) and source ($V_{DD}$) are at AC ground, so $v_{gs3} = 0$ and its controlled source is inactive. Only $r_{O3}$ remains, from X to AC ground.

### Step 3 — Half-circuit small-signal model and KCL

The left half circuit has a single node, X, with:

- the current $g_{m1}v_d/2$ drawn out of X by $M_1$ (its gate at $v_d/2$, its source at the virtual ground P);
- $r_{O1}$ from X to ground;
- $r_{O3}$ from X to ground;
- $R_1/2$ from X to ground.

<!-- diagram: diagram-01.cir -->

KCL at X (all currents leaving X sum to zero):

$$g_{m1}\frac{v_d}{2} + \frac{v_X}{r_{O1}} + \frac{v_X}{r_{O3}} + \frac{v_X}{R_1/2} = 0 .$$

Collect the terms in $v_X$ and solve:

$$
\begin{aligned}
v_X\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{2}{R_1}\right) &= -g_{m1}\frac{v_d}{2}\\
v_X &= -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel\frac{R_1}{2}\right)\frac{v_d}{2}.
\end{aligned}
$$

With $v_{out} = v_X - v_Y = 2v_X$:

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel\frac{R_1}{2}\right).$$

### Step 4 — Check with a direct two-node analysis

Let $G_o = 1/r_{O1} + 1/r_{O3}$ be the conductance from each output to AC ground, excluding $R_1$. With $v_P = 0$:

- KCL at X: $\;g_{m1}\dfrac{v_d}{2} + G_ov_X + \dfrac{v_X - v_Y}{R_1} = 0$
- KCL at Y: $\;-g_{m1}\dfrac{v_d}{2} + G_ov_Y + \dfrac{v_Y - v_X}{R_1} = 0$

Subtract the second from the first:

$$
\begin{aligned}
g_{m1}v_d + G_o(v_X - v_Y) + \frac{2}{R_1}(v_X - v_Y) &= 0\\
\frac{v_X - v_Y}{v_d} &= -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{2}{R_1}} .
\end{aligned}
$$

This is identical to Step 3. The current in $R_1$ is $(v_X - v_Y)/R_1 = 2v_X/R_1$, twice what a resistor $R_1$ from X to ground would draw, which is why it acts as $R_1/2$ per side.

### Step 5 — Interpretation

Without $R_1$, the current-source loads would give the high gain $g_{m1}(r_{O1}\parallel r_{O3})$. Adding $R_1$ between the outputs sets a lower, better-defined gain: if $R_1/2 \ll r_{O1}\parallel r_{O3}$, then $A_v \approx -g_{m1}R_1/2$. Because $R_1$ carries no current for common-mode signals, it does **not** fix the output common-mode level, which is why such a stage still needs common-mode feedback.

*Numerical feel:* with $g_{m1} = 1$ mS, $r_{O1} = r_{O3} = 50\ \mathrm{k}\Omega$ and $R_1 = 10\ \mathrm{k}\Omega$:

$$
\begin{aligned}
r_{O1}\parallel r_{O3}\parallel\frac{R_1}{2} &= \frac{1}{\frac{1}{50} + \frac{1}{50} + \frac{1}{5}}\ \mathrm{k}\Omega = \frac{1}{0.24}\ \mathrm{k}\Omega = 4.17\ \mathrm{k}\Omega,\\
A_v &= -(1\ \mathrm{mS})(4.17\ \mathrm{k}\Omega) = -4.17 .
\end{aligned}
$$

### Result

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -g_{m1}\left(r_{O1}\,\Big\|\,r_{O3}\,\Big\|\,\frac{R_1}{2}\right).$$

$M_3$ and $M_4$ (gates at $V_{b2}$) are current sources with output resistance $r_{O3}$, and the midpoint of $R_1$ is a virtual ground for differential signals, so each output sees $R_1/2$.

**Common mistake.** Using $R_1$ instead of $R_1/2$. A resistor connected *between* two nodes that swing in opposite directions has a virtual ground at its centre, so each half circuit sees only half of it.

**Common mistake.** Treating $M_3$/$M_4$ as diode-connected and including $1/g_{m3}$ in the load. Their gates are at the fixed bias $V_{b2}$, not at their drains, so they contribute only $r_{O3}$.

**Common mistake.** Ignoring $R_1$, or placing it in series with the load. It is connected from output to output, so in the half circuit it appears as $R_1/2$ in parallel with $r_{O1}$ and $r_{O3}$.
