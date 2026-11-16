# Detailed solution - R197

**Approach.** The circuit is symmetric and the input is differential, so we use the **differential half circuit**. Node P (the tail node) and the midpoint of $R_1$ are both virtual grounds. Each output then sees four elements in parallel: the diode-connected load ($1/g_{m3}$), the two output resistances $r_{O1}$ and $r_{O3}$, and half of $R_1$. KCL at the output node gives the gain. We then confirm the result with a direct two-node analysis.

### Step 1 — Reading the circuit

From the figure:

- $M_1$, $M_2$: NMOS differential pair, sources joined at node P, tail transistor $M_5$ (gate at $V_b$).
- $M_3$, $M_4$: PMOS loads with sources at $V_{DD}$ and gates tied to their own drains, i.e. **diode-connected**.
- X is the left output (drain of $M_1$/$M_3$) and Y is the right output (drain of $M_2$/$M_4$).
- $R_1$ is connected between X and Y.
- $V_{out} = V_X - V_Y$, and all transistors are saturated with $\lambda \ne 0$.

### Step 2 — Why node P and the midpoint of $R_1$ are virtual grounds

Apply a purely differential input, $v_{in1} = +v_d/2$ and $v_{in2} = -v_d/2$, where $v_d = v_{in1} - v_{in2}$.

- **Node P.** The circuit is symmetric, so the two outputs respond with equal and opposite voltages, $v_Y = -v_X$. The small-signal currents of $M_1$ and $M_2$ into P are then equal and opposite, so no signal current flows into the tail and P does not move: $v_P = 0$.
- **Midpoint of $R_1$.** One end moves by $+v_X$ and the other by $-v_X$. By symmetry the middle of the resistor stays at zero, which is another virtual ground. So, for differential signals, $R_1$ can be split into two halves of $R_1/2$, each going from an output to AC ground.

### Step 3 — The half-circuit small-signal model

The left half circuit consists of:

- **$M_1$:** gate driven by $v_d/2$, source at ground (P). It draws a controlled current $g_{m1}v_d/2$ out of X, and has its output resistance $r_{O1}$ from X to ground.
- **$M_3$ (diode-connected):** source at AC ground ($V_{DD}$), gate and drain both at X. Its controlled current into X is $g_{m3}v_{sg3} = g_{m3}(0 - v_X) = -g_{m3}v_X$. That is exactly a resistance $1/g_{m3}$ from X to ground. In parallel there is $r_{O3}$.
- **Half of $R_1$:** $R_1/2$ from X to ground.

<!-- diagram: diagram-01.cir -->

Body effect plays no role: the sources of $M_3$/$M_4$ are at $V_{DD}$ (their bulk), and the sources of $M_1$/$M_2$ are at the virtual ground P.

### Step 4 — KCL at X and the gain

Sum of the currents leaving X equals zero:

$$g_{m1}\frac{v_d}{2} + g_{m3}v_X + \frac{v_X}{r_{O1}} + \frac{v_X}{r_{O3}} + \frac{v_X}{R_1/2} = 0 .$$

Collect the terms in $v_X$:

$$v_X\left(g_{m3} + \frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{2}{R_1}\right) = -g_{m1}\frac{v_d}{2}.$$

Solve for $v_X$:

$$v_X = -\frac{g_{m1}}{g_{m3} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{2}{R_1}}\cdot\frac{v_d}{2}.$$

By symmetry $v_Y = -v_X$, so $v_{out} = v_X - v_Y = 2v_X$:

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -\frac{g_{m1}}{g_{m3} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{2}{R_1}} = -g_{m1}\left(\frac{1}{g_{m3}}\Big\|\,r_{O1}\Big\|\,r_{O3}\Big\|\,\frac{R_1}{2}\right).$$

### Step 5 — Check by a direct two-node analysis

Instead of using the half circuit, write KCL at both X and Y of the full circuit, with $v_P = 0$ (shown in Step 2). Define $G = g_{m3} + 1/r_{O1} + 1/r_{O3}$, the conductance from each output to AC ground, excluding $R_1$.

- KCL at X: $\;g_{m1}\dfrac{v_d}{2} + Gv_X + \dfrac{v_X - v_Y}{R_1} = 0$
- KCL at Y: $\;-g_{m1}\dfrac{v_d}{2} + Gv_Y + \dfrac{v_Y - v_X}{R_1} = 0$

Subtract the second equation from the first:

$$
\begin{aligned}
g_{m1}v_d + G(v_X - v_Y) + \frac{2(v_X - v_Y)}{R_1} &= 0\\
(v_X - v_Y)\left(G + \frac{2}{R_1}\right) &= -g_{m1}v_d\\
\frac{v_X - v_Y}{v_d} &= -\frac{g_{m1}}{g_{m3} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{2}{R_1}} .
\end{aligned}
$$

This is the same result. Note that $R_1$ appears as $2/R_1$, a conductance of $R_1/2$ per side. A resistor between the two outputs carries a current proportional to $v_X - v_Y = 2v_X$, i.e. twice what it would carry if it went from X to ground.

### Step 6 — Interpretation and a numerical feel

The diode load usually dominates the output conductance, because $g_{m3} \gg 1/r_O$. Without $R_1$ the gain is therefore close to $g_{m1}/g_{m3}$, the familiar gain of a diode-loaded pair. $R_1$ adds a further load of $R_1/2$ per side and lowers the gain further.

For example, with $g_{m1} = 1$ mS, $g_{m3} = 0.5$ mS, $r_{O1} = r_{O3} = 50\ \mathrm{k}\Omega$ and $R_1 = 4\ \mathrm{k}\Omega$:

$$
\begin{aligned}
g_{m3} + \frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{2}{R_1} &= 0.5 + 0.02 + 0.02 + 0.5 = 1.04\ \mathrm{mS},\\
A_v &= -\frac{1\ \mathrm{mS}}{1.04\ \mathrm{mS}} = -0.96 .
\end{aligned}
$$

Without $R_1$ the same devices would give $-1/0.54 = -1.85$.

### Result

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -g_{m1}\left(\frac{1}{g_{m3}}\Big\|\,r_{O1}\Big\|\,r_{O3}\Big\|\,\frac{R_1}{2}\right) = -\frac{g_{m1}}{g_{m3} + 1/r_{O1} + 1/r_{O3} + 2/R_1}.$$

In the half circuit, P and the midpoint of $R_1$ are virtual grounds, so each output sees the diode-connected $M_3$ ($1/g_{m3}\parallel r_{O3}$), $r_{O1}$ and $R_1/2$.

**Common mistake.** Using $R_1$ instead of $R_1/2$ in the parallel combination. $R_1$ is connected between two nodes that move in opposite directions. Its midpoint is a virtual ground, so each output sees only half of it.

**Common mistake.** Treating $M_3$/$M_4$ as current sources (keeping only $r_{O3}$), which gives $-g_{m1}(r_{O1}\parallel r_{O3}\parallel R_1/2)$. Each load has its gate tied to its own drain, so it contributes the low resistance $1/g_{m3}$, which usually dominates.

**Common mistake.** Dropping one of the output resistances, or putting $R_1$ in series with the load instead of in parallel. Both $r_{O1}$ and $r_{O3}$ connect X to AC ground, and so does half of $R_1$. All four elements are in parallel at the output node.
