# Detailed solution - R203

**Approach.** This is a folded-cascode stage with a **PMOS** input pair and **crossed** folding connections. For a differential input the common source node of the pair is a virtual ground. Follow one input device into its folding node and through its cascode to the output it drives, and represent that output by a Norton equivalent: a short-circuit transconductance $G_m$ and an output resistance $R_D\parallel R_{cas}$. The crossing and the PMOS input together make the stage **non-inverting**.

### Step 1 — Nodes, virtual ground and body effect

Call the common source node of $M_1$, $M_2$ S; the folding node at the drain of $M_1$, shared with $M_3$ and the source of the **right** cascode $M_6$, F1; and the one at the drain of $M_2$, shared with $M_4$ and the **left** cascode $M_5$, F2. $V_{out} = V_{left} - V_{right}$, the drains of $M_5$ and $M_6$.

With $v_{in1} = +v_d/2$, $v_{in2} = -v_d/2$, symmetry makes S a **virtual ground**, so each input device is a common-source transconductor. Body effect: $M_1$/$M_2$ have source and bulk at ac ground, and $M_3$/$M_4$ have their sources at ground, so $v_{bs} = 0$ for all four; the cascodes $M_5$/$M_6$ have their sources at the moving folding nodes and their bulks at ground, so they **do** have a $g_{mb}$ term.

### Step 2 — Small-signal model of the right half (driven by $M_1$)

With drain-to-source current $g_mv_{gs} + g_{mb}v_{bs} + v_{ds}/r_O$ for each device, $v_{F1}$ the folding-node voltage and $v_R$ the right output:

- **$M_1$** (gate $v_d/2$, drain at F1): current leaving F1 through $M_1$ is $g_{m1}\dfrac{v_d}{2} + \dfrac{v_{F1}}{r_{O1}}$.
- **$M_3$**: current leaving F1 is $v_{F1}/r_{O3}$.
- **$M_6$** (gate at ac ground, source at F1, drain at the right output): the current from the output down into F1 is
$$i_6 = g_{m6}(0 - v_{F1}) + g_{mb6}(0 - v_{F1}) + \frac{v_R - v_{F1}}{r_{O6}} = -(g_{m6} + g_{mb6})v_{F1} + \frac{v_R - v_{F1}}{r_{O6}}.$$
- **$R_D$**: from the right output to $V_{DD}$ (ac ground).

Let $R_S = r_{O1}\parallel r_{O3}$, the resistance from F1 to ground excluding the cascode.

<!-- diagram: diagram-01.cir -->

KCL at F1 and at the right output:

$$i_6 = g_{m1}\frac{v_d}{2} + \frac{v_{F1}}{R_S}, \tag{1}$$

$$i_6 + \frac{v_R}{R_D} = 0. \tag{2}$$

### Step 3 — Norton equivalent: $R_{cas}$ and $G_m$

**Output resistance of the cascode.** With $v_d = 0$, (1) gives $v_{F1} = i_6R_S$; substituting into $i_6$:

$$
\begin{aligned}
i_6 &= -(g_{m6} + g_{mb6})R_Si_6 + \frac{v_R - R_Si_6}{r_{O6}}\\
R_{cas} = \frac{v_R}{i_6} &= r_{O6} + \left[1 + (g_{m6} + g_{mb6})r_{O6}\right]R_S,\qquad R_S = r_{O1}\parallel r_{O3},
\end{aligned}
$$

the familiar degenerated-cascode result.

**Short-circuit transconductance.** With $v_R = 0$, $i_6 = -(g_{m6} + g_{mb6} + 1/r_{O6})v_{F1}$; equating with (1):

$$
\begin{aligned}
v_{F1} &= -\frac{g_{m1}v_d/2}{g_{m6} + g_{mb6} + 1/r_{O6} + 1/R_S},\\
i_{6,sc} &= g_{m1}\frac{v_d}{2}\cdot\frac{g_{m6} + g_{mb6} + 1/r_{O6}}{g_{m6} + g_{mb6} + 1/r_{O6} + 1/R_S}.
\end{aligned}
$$

Multiplying numerator and denominator by $r_{O6}R_S$:

$$i_{6,sc} = G_m\frac{v_d}{2}, \qquad G_m = g_{m1}\frac{\left[1 + (g_{m6} + g_{mb6})r_{O6}\right]R_S}{R_{cas}} \approx g_{m1}:$$

almost all of $M_1$'s signal current goes into the low-impedance source of the cascode rather than into $R_S$.

### Step 4 — The output voltages and the gain

At the right output a current $G_mv_d/2$ is pulled **down** out of the node, which sees $R_D\parallel R_{cas}$ to ac ground; the left output is driven the same way by $M_2$, whose gate is at $-v_d/2$, through $M_5$:

$$v_R = -G_m\left(R_D\parallel R_{cas}\right)\frac{v_d}{2}, \qquad v_L = +G_m\left(R_D\parallel R_{cas}\right)\frac{v_d}{2}.$$

So $v_{out} = v_L - v_R = G_m(R_D\parallel R_{cas})v_d$ and, using $g_{m5} = g_{m6}$, $r_{O5} = r_{O6}$,

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = +G_m\left(R_D\parallel R_{cas}\right) = \frac{g_{m1}\,(r_{O1}\parallel r_{O3})\left[1 + (g_{m5} + g_{mb5})r_{O5}\right]R_D}{R_D + R_{cas}}.$$

With $G_m \approx g_{m1}$:

$$A_v \approx +g_{m1}\left(R_D\parallel R_{cas}\right), \qquad R_{cas} = r_{O5} + \left[1 + (g_{m5} + g_{mb5})r_{O5}\right](r_{O1}\parallel r_{O3}).$$

The approximation overestimates the gain by the factor $R_{cas}/(R_{cas} - r_{O5})$, normally only a few percent.

**Why the sign is positive.** A positive $v_{in1}$ *raises* the gate of the PMOS $M_1$ and *reduces* its current, so less current enters F1, the cascode $M_6$ carries *more*, and the right output *falls*; symmetrically the left output rises, so $V_{left} - V_{right}$ increases.

*Numerical feel:* with $g_{m1} = 1$ mS, $r_{O1} = r_{O3} = 40\ \mathrm{k}\Omega$ (so $R_S = 20\ \mathrm{k}\Omega$), $g_{m5} = 1$ mS, $g_{mb5} = 0.2$ mS, $r_{O5} = 50\ \mathrm{k}\Omega$ and $R_D = 20\ \mathrm{k}\Omega$:

$$
\begin{aligned}
R_{cas} &= 50\ \mathrm{k}\Omega + (1 + 1.2\times50)(20\ \mathrm{k}\Omega) = 50 + 1220 = 1270\ \mathrm{k}\Omega,\\
R_D\parallel R_{cas} &= \frac{20\times1270}{1290}\ \mathrm{k}\Omega = 19.7\ \mathrm{k}\Omega,\\
A_v &\approx +(1\ \mathrm{mS})(19.7\ \mathrm{k}\Omega) = +19.7 .
\end{aligned}
$$

The cascode resistance is so large that $R_D$ sets the gain.

### Result

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} \approx +g_{m1}\left(R_D\parallel R_{cas}\right), \qquad R_{cas} = r_{O5} + \left[1 + (g_{m5} + g_{mb5})r_{O5}\right](r_{O1}\parallel r_{O3}).$$

Exactly,

$$A_v = \frac{g_{m1}(r_{O1}\parallel r_{O3})\left[1 + (g_{m5} + g_{mb5})r_{O5}\right]R_D}{R_D + R_{cas}}.$$

The stage is **non-inverting** from $V_{in1} - V_{in2}$ to $V_{left} - V_{right}$.

**Common mistake.** Claiming an inverting gain, by misreading the crossed connections ($M_1$ drives the *right* output) or treating the PMOS input as NMOS.

**Common mistake.** Writing $R_{cas}$ without the full degeneration $r_{O1}\parallel r_{O3}$ (only $r_{O3}$ or only $r_{O1}$), or dropping $g_{mb5}$. Both $M_1$ and $M_3$ hang on the folding node, and the cascode's source moves while its bulk is grounded.

**Common mistake.** Treating $M_3$/$M_4$ as diodes or as part of the signal path. Their gates are at the fixed bias $V_{b1}$, so they only add $r_{O3}$ at the folding node.
