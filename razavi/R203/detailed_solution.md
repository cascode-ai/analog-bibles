# Detailed solution - R203

**Approach.** This is a folded-cascode stage with a **PMOS** input pair and **crossed** folding connections. For a differential input the common source node of the pair is a virtual ground. We follow one input device into its folding node and through its cascode to the output it drives, and represent that output by a Norton equivalent: a short-circuit transconductance $G_m$ and an output resistance $R_D\parallel R_{cas}$. Signs are tracked carefully, because the crossing and the PMOS input together make the stage **non-inverting**.

### Step 1 — Reading the circuit

From the figure:

- $M_7$ (PMOS, gate at $V_{b2}$) is the tail current source. It feeds the common source node S of the PMOS input pair $M_1$, $M_2$.
- $M_3$, $M_4$ (NMOS, gates at $V_{b1}$) are current sinks from the two folding nodes to ground.
- $M_5$, $M_6$ (NMOS, gates at $V_{b3}$) are common-gate cascodes whose drains connect to $V_{DD}$ through $R_D$. The drain of $M_5$ is the left output, the drain of $M_6$ the right output.
- **Crossed wiring:**
  - the drain of $M_1$ joins $M_3$ and the source of $M_6$ (folding node F1, which feeds the *right* output);
  - the drain of $M_2$ joins $M_4$ and the source of $M_5$ (node F2, which feeds the *left* output).
- Bulks: NMOS at ground, PMOS at $V_{DD}$. $V_{out} = V_{left} - V_{right}$.

### Step 2 — Virtual ground and body effect

Apply $v_{in1} = +v_d/2$, $v_{in2} = -v_d/2$. By symmetry the signal currents of $M_1$ and $M_2$ at node S are equal and opposite, so S does not move. **S is a virtual ground**, and each input device acts as a common-source transconductor with its source at AC ground.

Body effect:

- $M_1$/$M_2$: sources at the virtual ground S and bulks at $V_{DD}$ (AC ground), so $v_{bs} = 0$.
- $M_3$/$M_4$: sources at ground, so $v_{bs} = 0$.
- Cascodes $M_5$/$M_6$: sources at the moving folding nodes, bulks at ground, so they **do** have a body-effect term $g_{mb}$.

### Step 3 — Small-signal model of the right half (driven by $M_1$)

Use the uniform small-signal model (valid for NMOS and PMOS): the drain-to-source current is $g_mv_{gs} + g_{mb}v_{bs} + v_{ds}/r_O$. Let $v_{F1}$ be the folding-node voltage and $v_R$ the right output.

- **$M_1$** (gate $v_d/2$, source at AC ground, drain at F1): current leaving F1 through $M_1$ is $g_{m1}\dfrac{v_d}{2} + \dfrac{v_{F1}}{r_{O1}}$.
- **$M_3$** (gate and source at AC ground): current leaving F1 is $v_{F1}/r_{O3}$.
- **$M_6$** (gate at AC ground, source at F1, drain at the right output): drain-to-source current, flowing from the output down into F1, is
$$i_6 = g_{m6}(0 - v_{F1}) + g_{mb6}(0 - v_{F1}) + \frac{v_R - v_{F1}}{r_{O6}} = -(g_{m6} + g_{mb6})v_{F1} + \frac{v_R - v_{F1}}{r_{O6}}.$$
- **$R_D$**: from the right output to $V_{DD}$ (AC ground).

Let $R_S = r_{O1}\parallel r_{O3}$, the total resistance from F1 to ground excluding the cascode.

<!-- diagram: diagram-01.cir -->

KCL at F1 ($i_6$ arrives; the $M_1$ and $M_3$ currents leave):

$$i_6 = g_{m1}\frac{v_d}{2} + \frac{v_{F1}}{R_S}. \tag{1}$$

KCL at the right output ($i_6$ leaves downward; the $R_D$ current leaves toward $V_{DD}$):

$$i_6 + \frac{v_R}{R_D} = 0. \tag{2}$$

### Step 4 — Output resistance of the cascode, $R_{cas}$

Set $v_d = 0$, apply a test voltage $v_R$ at the drain of $M_6$, and find $i_6$. From (1), $v_{F1} = i_6R_S$. Substitute into the expression for $i_6$:

$$
\begin{aligned}
i_6 &= -(g_{m6} + g_{mb6})R_Si_6 + \frac{v_R - R_Si_6}{r_{O6}}\\
i_6r_{O6}\left[1 + (g_{m6} + g_{mb6})R_S\right] + R_Si_6 &= v_R\\
R_{cas} = \frac{v_R}{i_6} &= r_{O6} + \left[1 + (g_{m6} + g_{mb6})r_{O6}\right]R_S,\qquad R_S = r_{O1}\parallel r_{O3}.
\end{aligned}
$$

This is the familiar degenerated-cascode result, with $R_S$ as the degeneration.

### Step 5 — Short-circuit transconductance $G_m$

Short the output ($v_R = 0$). Then $i_6 = -(g_{m6} + g_{mb6} + 1/r_{O6})v_{F1}$. Equate this with (1):

$$
\begin{aligned}
-\left(g_{m6} + g_{mb6} + \frac{1}{r_{O6}}\right)v_{F1} &= g_{m1}\frac{v_d}{2} + \frac{v_{F1}}{R_S}\\
v_{F1} &= -\frac{g_{m1}v_d/2}{g_{m6} + g_{mb6} + 1/r_{O6} + 1/R_S},\\
i_{6,sc} &= g_{m1}\frac{v_d}{2}\cdot\frac{g_{m6} + g_{mb6} + 1/r_{O6}}{g_{m6} + g_{mb6} + 1/r_{O6} + 1/R_S}.
\end{aligned}
$$

Multiply numerator and denominator by $r_{O6}R_S$:

$$i_{6,sc} = G_m\frac{v_d}{2}, \qquad G_m = g_{m1}\frac{\left[1 + (g_{m6} + g_{mb6})r_{O6}\right]R_S}{R_{cas}} \approx g_{m1}.$$

Almost all of $M_1$'s signal current goes into the low-impedance source of the cascode rather than into $R_S$.

### Step 6 — The output voltages and the gain

**Norton equivalent at the right output.** A current $G_mv_d/2$ is pulled **down** out of the node, and the node sees $R_D\parallel R_{cas}$ to AC ground. So

$$v_R = -G_m\left(R_D\parallel R_{cas}\right)\frac{v_d}{2}.$$

**Left output.** It is driven by $M_2$, whose gate is at $-v_d/2$, through $M_5$:

$$v_L = -G_m\left(R_D\parallel R_{cas}\right)\left(-\frac{v_d}{2}\right) = +G_m\left(R_D\parallel R_{cas}\right)\frac{v_d}{2}.$$

**Differential output:**

$$v_{out} = v_L - v_R = G_m\left(R_D\parallel R_{cas}\right)v_d .$$

**Gain:**

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = +G_m\left(R_D\parallel R_{cas}\right) = \frac{g_{m1}\,(r_{O1}\parallel r_{O3})\left[1 + (g_{m5} + g_{mb5})r_{O5}\right]R_D}{R_D + R_{cas}},$$

using $g_{m5} = g_{m6}$, $r_{O5} = r_{O6}$ by symmetry. With $G_m \approx g_{m1}$:

$$A_v \approx +g_{m1}\left(R_D\parallel R_{cas}\right), \qquad R_{cas} = r_{O5} + \left[1 + (g_{m5} + g_{mb5})r_{O5}\right](r_{O1}\parallel r_{O3}).$$

The approximation overestimates the gain by the factor $R_{cas}/(R_{cas} - r_{O5})$, normally only a few percent.

**Why the sign is positive.** A positive $v_{in1}$ *raises* the gate of the PMOS $M_1$ and *reduces* its current. Less current is pushed into F1, so the cascode $M_6$ must carry *more*, and the right output *falls*. Symmetrically the left output rises, so $V_{left} - V_{right}$ increases.

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

**Common mistake.** Claiming an inverting gain. This comes from misreading the crossed connections ($M_1$ drives the *right* output) or from treating the PMOS input as NMOS. Raising the gate of a PMOS lowers its current, and that current folds into the opposite output.

**Common mistake.** Writing $R_{cas}$ without the full degeneration $r_{O1}\parallel r_{O3}$ (for example, using only $r_{O3}$ or only $r_{O1}$), or dropping $g_{mb5}$. Both $M_1$ and $M_3$ hang on the folding node, and the cascode's source moves while its bulk is grounded.

**Common mistake.** Treating $M_3$/$M_4$ as diodes or as part of the signal path. Their gates are at the fixed bias $V_{b1}$, so they only add $r_{O3}$ at the folding node.
