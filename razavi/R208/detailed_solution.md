# Detailed solution - R208

**Approach.** Use the differential half circuit. Node P (the tail) and the midpoint of $R_1$ are virtual grounds, so node X sees $R_1/2$ to ground. The small-signal current that $M_1$ draws from X splits between $R_1/2$ and the source of the cascode $M_3$, and only the part that flows through $M_3$ reaches the diode load $M_5$ and produces an output voltage. We derive this current division with $\lambda = 0$ (including the body effect of the cascode), then give the exact result for $\lambda \ne 0$.

### Step 1 — Reading the circuit

From the figure:

- $M_1$, $M_2$: NMOS input pair (sources at P, tail $M_7$). Their drains are X and Y.
- $M_3$, $M_4$: NMOS cascodes with gates at the fixed bias $V_{b1}$ and sources at X and Y. $R_1$ connects X and Y.
- $M_5$, $M_6$: diode-connected PMOS loads; the left output is the drain of $M_5$ (and of $M_3$), the right output that of $M_6$.
- Bulks: NMOS at ground, PMOS at $V_{DD}$. $V_{out} = V_{left} - V_{right}$.

**Body effect.**

- $M_1$: its source is at the virtual ground P, so $v_{bs1} = 0$.
- $M_5$: its source is at its bulk ($V_{DD}$).
- $M_3$: its source is at X, which moves, while its bulk is grounded. So **$M_3$ has a body-effect transconductance $g_{mb3}$**.

### Step 2 — The half circuit

Apply $v_{in1} = +v_{in}$ and $v_{in2} = -v_{in}$ (so $v_{in1} - v_{in2} = 2v_{in}$). By symmetry X and Y move oppositely, so:

- P is an AC ground;
- the midpoint of $R_1$ is an AC ground, so X sees $R_1/2$ to ground.

The left half circuit, with $\lambda = 0$:

- **$M_1$:** a current $g_{m1}v_{in}$ drawn from X to ground.
- **$R_1/2$:** from X to ground.
- **$M_3$:** gate at AC ground, source at X, drain at the output A. Its drain-to-source current (from A down into X) is $i_3 = g_{m3}(0 - v_X) + g_{mb3}(0 - v_X) = -(g_{m3} + g_{mb3})v_X$.
- **$M_5$ (diode):** from A to AC ground, a conductance $g_{m5}$.

<!-- diagram: diagram-01.cir -->

### Step 3 — KCL at X: current division

KCL at X, with the currents leaving X through $M_1$ and $R_1/2$ equal to the current arriving from $M_3$:

$$g_{m1}v_{in} + \frac{v_X}{R_1/2} = i_3 = -(g_{m3} + g_{mb3})v_X .$$

Solve for $v_X$:

$$
\begin{aligned}
v_X\left[\frac{2}{R_1} + g_{m3} + g_{mb3}\right] &= -g_{m1}v_{in}\\
v_X &= -\frac{g_{m1}v_{in}}{g_{m3} + g_{mb3} + 2/R_1}.
\end{aligned}
$$

Then the current through the cascode is

$$i_3 = -(g_{m3} + g_{mb3})v_X = g_{m1}v_{in}\,\frac{g_{m3} + g_{mb3}}{g_{m3} + g_{mb3} + 2/R_1} = g_{m1}v_{in}\,\frac{(g_{m3} + g_{mb3})R_1/2}{1 + (g_{m3} + g_{mb3})R_1/2}.$$

This is current division between $R_1/2$ and the input resistance $1/(g_{m3} + g_{mb3})$ of the cascode's source.

### Step 4 — KCL at the output and the gain

The current $i_3$ flows from the output node A down through $M_3$. The diode supplies it: $i_3 = -g_{m5}v_A$ (a rise in $i_3$ pulls A down). So

$$v_A = -\frac{i_3}{g_{m5}} = -\frac{g_{m1}}{g_{m5}}\cdot\frac{(g_{m3} + g_{mb3})R_1/2}{1 + (g_{m3} + g_{mb3})R_1/2}\,v_{in}.$$

By symmetry the right output moves by $-v_A$, so $v_{out} = 2v_A$, while $v_{in1} - v_{in2} = 2v_{in}$. The differential gain equals the half-circuit gain:

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -\frac{g_{m1}}{g_{m5}}\cdot\frac{(g_{m3} + g_{mb3})R_1/2}{1 + (g_{m3} + g_{mb3})R_1/2}\qquad(\lambda = 0).$$

**Limits:**

- $R_1 \to \infty$: all of $M_1$'s current goes through the cascode, and $A_v \to -g_{m1}/g_{m5}$, the gain of a diode-loaded pair.
- $R_1 \to 0$: X is shorted to the virtual ground, all the signal current flows in $R_1$, and $A_v \to 0$.

### Step 5 — Including channel-length modulation ($\lambda \ne 0$)

Now add $r_{O1}$ (X to ground), $r_{O3}$ (between A and X) and $r_{O5}$ (A to ground). Define

$$R_X = r_{O1}\parallel\frac{R_1}{2}, \qquad Z_L = \frac{1}{g_{m5}}\parallel r_{O5}, \qquad G_3 = g_{m3} + g_{mb3}.$$

The three equations are:

- KCL at X: $i_3 = g_{m1}v_{in} + v_X/R_X$;
- the cascode: $i_3 = -G_3v_X + (v_A - v_X)/r_{O3}$;
- KCL at A: $v_A = -Z_Li_3$.

From the first, $v_X = R_X(i_3 - g_{m1}v_{in})$. Substitute this and $v_A$ into the second:

$$
\begin{aligned}
i_3 &= -\left(G_3 + \frac{1}{r_{O3}}\right)R_X(i_3 - g_{m1}v_{in}) - \frac{Z_L}{r_{O3}}i_3\\
i_3\left[r_{O3} + (1 + G_3r_{O3})R_X + Z_L\right] &= g_{m1}v_{in}(1 + G_3r_{O3})R_X .
\end{aligned}
$$

So

$$A_v = \frac{v_A}{v_{in}} = -\frac{g_{m1}Z_L(1 + G_3r_{O3})R_X}{r_{O3} + (1 + G_3r_{O3})R_X + Z_L}\ \approx\ -g_{m1}\left(\frac{1}{g_{m5}}\parallel r_{O5}\right)\frac{G_3R_X}{1 + G_3R_X}.$$

The approximate form holds for $G_3r_{O3} \gg 1$ and $r_{O3} \gg Z_L$. To first order, $\lambda$ simply replaces $R_1/2$ by $R_1/2\parallel r_{O1}$ and $1/g_{m5}$ by $1/g_{m5}\parallel r_{O5}$.

*Numerical feel* ($\lambda = 0$): $g_{m1} = g_{m3} = 0.632$ mS, $g_{mb3} = 0.13$ mS, $g_{m5} = 0.447$ mS, $R_1 = 5\ \mathrm{k}\Omega$:

$$
\begin{aligned}
(g_{m3} + g_{mb3})\frac{R_1}{2} &= (0.762\ \mathrm{mS})(2.5\ \mathrm{k}\Omega) = 1.905,\\
A_v &= -\frac{0.632}{0.447}\cdot\frac{1.905}{2.905} = -1.414\times0.656 = -0.93 .
\end{aligned}
$$

### Result

With $\lambda = 0$:

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -\frac{g_{m1}}{g_{m5}}\cdot\frac{(g_{m3} + g_{mb3})R_1/2}{1 + (g_{m3} + g_{mb3})R_1/2}.$$

In the half circuit, the midpoint of $R_1$ is a virtual ground, so X sees $R_1/2$. The current $g_{m1}v_{in}$ drawn by $M_1$ divides between $R_1/2$ and the source of the cascode $M_3$, whose input resistance is $1/(g_{m3} + g_{mb3})$. Only the part through $M_3$ reaches the diode load $1/g_{m5}$. With $\lambda \ne 0$, approximately replace $R_1/2$ by $R_1/2\parallel r_{O1}$ and $1/g_{m5}$ by $1/g_{m5}\parallel r_{O5}$ (exact form in Step 5). As $R_1 \to \infty$ the gain approaches $g_{m1}/g_{m5}$; as $R_1 \to 0$ it vanishes.

**Common mistake.** Claiming the gain is $g_{m1}/g_{m5}$ independent of $R_1$, as if the cascode passed all of $M_1$'s current to the output. $R_1$ provides a second path at X (through the virtual-ground midpoint), and the signal current divides between that path and the cascode.

**Common mistake.** Treating $R_1$ as source degeneration of the input pair, writing something like $g_{m1}/(1 + g_{m1}R_1/2)$. $R_1$ connects the **drains** of $M_1$ and $M_2$, not their sources. With $\lambda = 0$, $M_1$'s current $g_{m1}v_{in}$ is not affected by what is at its drain, and $R_1$ only diverts that current away from the cascode.

**Common mistake.** Using $R_1$ instead of $R_1/2$, or omitting $g_{mb3}$. The resistor sits between two nodes moving in opposite directions, so each half sees half of it. The cascode's source moves while its bulk is grounded, so the body effect raises its source conductance to $g_{m3} + g_{mb3}$.
