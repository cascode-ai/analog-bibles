# Detailed solution - R197

**Approach.** The circuit is symmetric and the input differential, so use the **differential half circuit**: the tail node P and the midpoint of $R_1$ are virtual grounds, and each output sees the diode-connected load ($1/g_{m3}$), $r_{O1}$, $r_{O3}$ and half of $R_1$ in parallel. KCL at the output gives the gain, confirmed by a direct two-node analysis.

### Step 1 — The half-circuit small-signal model

Call the left output (drains of $M_1$, $M_3$) X, the right output Y and the common source node of $M_1$, $M_2$ P, and apply $v_{in1} = +v_d/2$, $v_{in2} = -v_d/2$ with $v_d = v_{in1} - v_{in2}$. By symmetry $v_Y = -v_X$, so P is a virtual ground and so is the midpoint of $R_1$: for differential signals $R_1$ splits into two halves of $R_1/2$, each from an output to ac ground.

The left half circuit then has, at X:

- **$M_1$:** gate at $v_d/2$, source at ground, drawing $g_{m1}v_d/2$ out of X, with $r_{O1}$ from X to ground;
- **$M_3$ (diode-connected):** a resistance $1/g_{m3}$ in parallel with $r_{O3}$;
- **half of $R_1$:** $R_1/2$ from X to ground.

<!-- diagram: diagram-01.cir -->

Body effect plays no role: the sources of $M_3$/$M_4$ are at $V_{DD}$ (their bulk), and those of $M_1$/$M_2$ are at the virtual ground P.

### Step 2 — KCL at X and the gain

The currents leaving X sum to zero:

$$g_{m1}\frac{v_d}{2} + g_{m3}v_X + \frac{v_X}{r_{O1}} + \frac{v_X}{r_{O3}} + \frac{v_X}{R_1/2} = 0 .$$

Solving for $v_X$:

$$v_X = -\frac{g_{m1}}{g_{m3} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{2}{R_1}}\cdot\frac{v_d}{2}.$$

By symmetry $v_Y = -v_X$, so $v_{out} = v_X - v_Y = 2v_X$:

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -\frac{g_{m1}}{g_{m3} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{2}{R_1}} = -g_{m1}\left(\frac{1}{g_{m3}}\Big\|\,r_{O1}\Big\|\,r_{O3}\Big\|\,\frac{R_1}{2}\right).$$

### Step 3 — Check by a direct two-node analysis

With $v_P = 0$ and $G = g_{m3} + 1/r_{O1} + 1/r_{O3}$ (the conductance from each output to ac ground, excluding $R_1$), KCL at X and at Y of the full circuit:

$$g_{m1}\frac{v_d}{2} + Gv_X + \frac{v_X - v_Y}{R_1} = 0, \qquad -g_{m1}\frac{v_d}{2} + Gv_Y + \frac{v_Y - v_X}{R_1} = 0 .$$

Subtracting the second from the first:

$$
\begin{aligned}
g_{m1}v_d + G(v_X - v_Y) + \frac{2(v_X - v_Y)}{R_1} &= 0\\
\frac{v_X - v_Y}{v_d} &= -\frac{g_{m1}}{g_{m3} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{2}{R_1}} ,
\end{aligned}
$$

the same result. $R_1$ appears as $2/R_1$ because it carries a current proportional to $v_X - v_Y = 2v_X$, twice what it would carry from X to ground.

### Step 4 — Interpretation and a numerical feel

Since $g_{m3} \gg 1/r_O$, without $R_1$ the gain is close to $g_{m1}/g_{m3}$, the familiar diode-loaded value; $R_1$ adds a load of $R_1/2$ per side and lowers it further. For example, with $g_{m1} = 1$ mS, $g_{m3} = 0.5$ mS, $r_{O1} = r_{O3} = 50\ \mathrm{k}\Omega$ and $R_1 = 4\ \mathrm{k}\Omega$:

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

**Common mistake.** Using $R_1$ instead of $R_1/2$ in the parallel combination. $R_1$ joins two nodes that move in opposite directions, so its midpoint is a virtual ground and each output sees only half of it.

**Common mistake.** Treating $M_3$/$M_4$ as current sources (keeping only $r_{O3}$), which gives $-g_{m1}(r_{O1}\parallel r_{O3}\parallel R_1/2)$. Each load is diode-connected and contributes the low resistance $1/g_{m3}$, which usually dominates.

**Common mistake.** Dropping an output resistance, or putting $R_1$ in series with the load. $r_{O1}$, $r_{O3}$, $1/g_{m3}$ and $R_1/2$ all connect X to ac ground, in parallel.
