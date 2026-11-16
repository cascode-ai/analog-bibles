# Detailed solution - R199

**Approach.** Use the differential half circuit: the tail node P and the midpoint of $R_1$ (connected between the outputs) are virtual grounds, so each output sees $M_1$ (a transconductor with $r_{O1}$), the PMOS current source $M_3$ ($r_{O3}$) and half of $R_1$, all in parallel. KCL at the output gives the gain, and a direct two-node analysis confirms the factor $R_1/2$.

### Step 1 — Half-circuit model and KCL

Call the left output (drains of $M_1$, $M_3$) X, the right output Y and the common source node of $M_1$, $M_2$ P, and apply $v_{in1} = +v_d/2$, $v_{in2} = -v_d/2$ with $v_d = v_{in1} - v_{in2}$. By symmetry $v_Y = -v_X$, so P is a virtual ground and so is the midpoint of $R_1$, which therefore appears as $R_1/2$ from each output to ac ground. $M_3$ has its gate ($V_{b2}$) and source ($V_{DD}$) at ac ground, so only $r_{O3}$ remains. Node X thus sees $g_{m1}v_d/2$ drawn out by $M_1$, and $r_{O1}$, $r_{O3}$ and $R_1/2$ to ground:

<!-- diagram: diagram-01.cir -->

KCL at X:

$$g_{m1}\frac{v_d}{2} + \frac{v_X}{r_{O1}} + \frac{v_X}{r_{O3}} + \frac{v_X}{R_1/2} = 0 .$$

Solving:

$$
\begin{aligned}
v_X\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{2}{R_1}\right) &= -g_{m1}\frac{v_d}{2}\\
v_X &= -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel\frac{R_1}{2}\right)\frac{v_d}{2}.
\end{aligned}
$$

With $v_{out} = v_X - v_Y = 2v_X$:

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel\frac{R_1}{2}\right).$$

### Step 2 — Check with a direct two-node analysis

With $v_P = 0$ and $G_o = 1/r_{O1} + 1/r_{O3}$ (the conductance from each output to ac ground, excluding $R_1$), KCL at X and at Y:

$$g_{m1}\frac{v_d}{2} + G_o v_X + \frac{v_X - v_Y}{R_1} = 0, \qquad -g_{m1}\frac{v_d}{2} + G_o v_Y + \frac{v_Y - v_X}{R_1} = 0 .$$

Subtracting the second from the first:

$$
\begin{aligned}
g_{m1}v_d + G_o(v_X - v_Y) + \frac{2}{R_1}(v_X - v_Y) &= 0\\
\frac{v_X - v_Y}{v_d} &= -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{2}{R_1}} ,
\end{aligned}
$$

identical to Step 1. The current in $R_1$, $(v_X - v_Y)/R_1 = 2v_X/R_1$, is twice what $R_1$ from X to ground would draw, which is why it acts as $R_1/2$ per side.

### Step 3 — Interpretation

Without $R_1$, the current-source loads would give the high gain $g_{m1}(r_{O1}\parallel r_{O3})$; $R_1$ sets a lower, better-defined gain, $A_v \approx -g_{m1}R_1/2$ if $R_1/2 \ll r_{O1}\parallel r_{O3}$. $R_1$ carries no current for common-mode signals, so it does **not** fix the output common-mode level, and the stage still needs common-mode feedback.

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

**Common mistake.** Using $R_1$ instead of $R_1/2$. A resistor between two nodes that swing in opposite directions has a virtual ground at its centre, so each half circuit sees only half of it.

**Common mistake.** Treating $M_3$/$M_4$ as diode-connected and including $1/g_{m3}$ in the load. Their gates are at the fixed bias $V_{b2}$, so they contribute only $r_{O3}$.

**Common mistake.** Ignoring $R_1$, or placing it in series with the load. It runs from output to output, so in the half circuit it is $R_1/2$ in parallel with $r_{O1}$ and $r_{O3}$.
