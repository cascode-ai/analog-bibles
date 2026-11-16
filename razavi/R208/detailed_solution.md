# Detailed solution - R208

**Approach.** In the differential half circuit the tail node P and the midpoint of $R_1$ are virtual grounds, so X sees $R_1/2$ to ground. The signal current that $M_1$ draws from X splits between $R_1/2$ and the source of the cascode $M_3$, and only the part through $M_3$ reaches the diode load $M_5$. Derive this current division with $\lambda = 0$ (including the cascode's body effect), then give the exact result for $\lambda \ne 0$.

### Step 1 — The half circuit

Call the left output (drains of $M_3$, $M_5$) A. Apply $v_{in1} = +v_{in}$, $v_{in2} = -v_{in}$ (so $v_{in1} - v_{in2} = 2v_{in}$); by symmetry X and Y move oppositely, so P and the midpoint of $R_1$ are ac grounds. Body effect: $M_1$'s source is at the virtual ground P and $M_5$'s at its bulk ($V_{DD}$), but $M_3$'s source X moves while its bulk is grounded, so **$M_3$ has a body-effect transconductance $g_{mb3}$**.

The left half circuit, with $\lambda = 0$:

- **$M_1$:** a current $g_{m1}v_{in}$ drawn from X to ground.
- **$R_1/2$:** from X to ground.
- **$M_3$** (gate at ac ground, source at X, drain at A): its current from A down into X is $i_3 = g_{m3}(0 - v_X) + g_{mb3}(0 - v_X) = -(g_{m3} + g_{mb3})v_X$.
- **$M_5$ (diode):** a conductance $g_{m5}$ from A to ac ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at X: current division

The current leaving X through $M_1$ and $R_1/2$ equals the current arriving from $M_3$:

$$g_{m1}v_{in} + \frac{v_X}{R_1/2} = i_3 = -(g_{m3} + g_{mb3})v_X \quad\Longrightarrow\quad v_X = -\frac{g_{m1}v_{in}}{g_{m3} + g_{mb3} + 2/R_1}.$$

The current through the cascode is then

$$i_3 = -(g_{m3} + g_{mb3})v_X = g_{m1}v_{in}\,\frac{g_{m3} + g_{mb3}}{g_{m3} + g_{mb3} + 2/R_1} = g_{m1}v_{in}\,\frac{(g_{m3} + g_{mb3})R_1/2}{1 + (g_{m3} + g_{mb3})R_1/2},$$

a current division between $R_1/2$ and the cascode's source resistance $1/(g_{m3} + g_{mb3})$.

### Step 3 — KCL at the output and the gain

$i_3$ flows from A down through $M_3$ and is supplied by the diode, $i_3 = -g_{m5}v_A$, so

$$v_A = -\frac{i_3}{g_{m5}} = -\frac{g_{m1}}{g_{m5}}\cdot\frac{(g_{m3} + g_{mb3})R_1/2}{1 + (g_{m3} + g_{mb3})R_1/2}\,v_{in}.$$

The right output moves by $-v_A$, so $v_{out} = 2v_A$ while $v_{in1} - v_{in2} = 2v_{in}$, and the differential gain equals the half-circuit gain:

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -\frac{g_{m1}}{g_{m5}}\cdot\frac{(g_{m3} + g_{mb3})R_1/2}{1 + (g_{m3} + g_{mb3})R_1/2}\qquad(\lambda = 0).$$

As $R_1 \to \infty$, all of $M_1$'s current goes through the cascode and $A_v \to -g_{m1}/g_{m5}$, the diode-loaded value; as $R_1 \to 0$, X is shorted to the virtual ground and $A_v \to 0$.

### Step 4 — Including channel-length modulation ($\lambda \ne 0$)

Add $r_{O1}$ (X to ground), $r_{O3}$ (A to X) and $r_{O5}$ (A to ground), and define

$$R_X = r_{O1}\parallel\frac{R_1}{2}, \qquad Z_L = \frac{1}{g_{m5}}\parallel r_{O5}, \qquad G_3 = g_{m3} + g_{mb3}.$$

KCL at X gives $i_3 = g_{m1}v_{in} + v_X/R_X$, the cascode gives $i_3 = -G_3v_X + (v_A - v_X)/r_{O3}$, and KCL at A gives $v_A = -Z_Li_3$. Substituting $v_X = R_X(i_3 - g_{m1}v_{in})$ and $v_A$ into the cascode equation:

$$
\begin{aligned}
i_3 &= -\left(G_3 + \frac{1}{r_{O3}}\right)R_X(i_3 - g_{m1}v_{in}) - \frac{Z_L}{r_{O3}}i_3\\
i_3\left[r_{O3} + (1 + G_3r_{O3})R_X + Z_L\right] &= g_{m1}v_{in}(1 + G_3r_{O3})R_X .
\end{aligned}
$$

So

$$A_v = \frac{v_A}{v_{in}} = -\frac{g_{m1}Z_L(1 + G_3r_{O3})R_X}{r_{O3} + (1 + G_3r_{O3})R_X + Z_L}\ \approx\ -g_{m1}\left(\frac{1}{g_{m5}}\parallel r_{O5}\right)\frac{G_3R_X}{1 + G_3R_X},$$

the approximation holding for $G_3r_{O3} \gg 1$ and $r_{O3} \gg Z_L$. To first order, $\lambda$ simply replaces $R_1/2$ by $R_1/2\parallel r_{O1}$ and $1/g_{m5}$ by $1/g_{m5}\parallel r_{O5}$.

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

In the half circuit the midpoint of $R_1$ is a virtual ground, so X sees $R_1/2$. The current $g_{m1}v_{in}$ drawn by $M_1$ divides between $R_1/2$ and the source of the cascode $M_3$, whose input resistance is $1/(g_{m3} + g_{mb3})$; only the part through $M_3$ reaches the diode load $1/g_{m5}$. With $\lambda \ne 0$, approximately replace $R_1/2$ by $R_1/2\parallel r_{O1}$ and $1/g_{m5}$ by $1/g_{m5}\parallel r_{O5}$ (exact form in Step 4). As $R_1 \to \infty$ the gain approaches $g_{m1}/g_{m5}$; as $R_1 \to 0$ it vanishes.

**Common mistake.** Taking the gain as $g_{m1}/g_{m5}$ independent of $R_1$. $R_1$ gives a second path at X (through its virtual-ground midpoint), and the signal current divides between that path and the cascode.

**Common mistake.** Treating $R_1$ as source degeneration of the input pair, e.g. $g_{m1}/(1 + g_{m1}R_1/2)$. $R_1$ joins the **drains** of $M_1$ and $M_2$; with $\lambda = 0$ it does not change $M_1$'s current, only diverts it from the cascode.

**Common mistake.** Using $R_1$ instead of $R_1/2$, or omitting $g_{mb3}$. Each half sees half of the resistor, and the cascode's moving source with grounded bulk raises its source conductance to $g_{m3} + g_{mb3}$.
