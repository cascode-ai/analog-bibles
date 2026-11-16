# Detailed solution - R284

**Approach.** Treat the supply change $v_{dd}$ as a small-signal source with both inputs at ac ground. $M_3$ carries a fixed current, so its gate follows $V_{DD}$; hence $M_4$'s gate–source voltage does not change and $M_4$ behaves like the bare resistor $r_{O4}$ to the supply. KCL at P and at the output then shows that the output follows the supply exactly. Finally, compute the differential gain to express the supply rejection.

### Step 1 — $M_3$/$M_4$: the gate tracks the supply

$M_3$'s current is fixed by an ideal current source, so $V_{SG3}$ is fixed and the common gate node moves by exactly $v_{dd}$. Then

$$v_{sg4} = v_{dd} - v_{dd} = 0,$$

so $M_4$'s controlled current does not change, and all that remains of $M_4$ is its output resistance between the supply and the output:

$$i_{D4}\ (\text{into the output}) = \frac{v_{dd} - v_{out}}{r_{O4}} .$$

### Step 2 — Small-signal equations for the pair

Let $g_m$, $r_O$ describe the identical $M_1$, $M_2$. $M_1$'s drain is the supply ($v_{dd}$), its gate is at ac ground and its source is at $v_P$; $M_2$ is identical except that its drain is the output. Neglecting body effect:

$$
\begin{aligned}
i_1\ (\text{supply} \to \text{P}) &= -g_m\,v_P + \frac{v_{dd} - v_P}{r_O},\\
i_2\ (\text{out} \to \text{P}) &= -g_m\,v_P + \frac{v_{out} - v_P}{r_O}.
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

**KCL at P** (the ideal tail carries no small-signal current), $i_1 + i_2 = 0$:

$$
\begin{aligned}
-2g_mv_P + \frac{v_{dd} + v_{out} - 2v_P}{r_O} &= 0\\
v_P &= \frac{v_{dd} + v_{out}}{2\left(1 + g_mr_O\right)} .
\end{aligned}
$$

Putting this back into $i_2$:

$$i_2 = \frac{v_{out}}{r_O} - \frac{1 + g_mr_O}{r_O}\,v_P = \frac{v_{out}}{r_O} - \frac{v_{dd} + v_{out}}{2r_O} = \frac{v_{out} - v_{dd}}{2r_O} .$$

(With body effect, $g_m$ becomes $g_m + g_{mb}$ in $v_P$, and $i_2$ is unchanged.) Seen from the output, the path through $M_2$, P and $M_1$ back to the supply behaves like a resistance $2r_O$ connected **to $V_{DD}$**, not to ground.

### Step 3 — The supply gain

**KCL at the output** (no load), $i_{D4} = i_2$:

$$
\begin{aligned}
\frac{v_{dd} - v_{out}}{r_{O4}} &= \frac{v_{out} - v_{dd}}{2r_O}\\
(v_{dd} - v_{out})\left(\frac{1}{r_{O4}} + \frac{1}{2r_O}\right) &= 0\\
v_{out} &= v_{dd}.
\end{aligned}
$$

$$A_{sup} = \frac{\Delta V_{out}}{\Delta V_{DD}} = 1 .$$

**Physical check.** If the output moves exactly with the supply, $M_4$'s $V_{SD}$ and $V_{SG}$ are unchanged, so its current is unchanged. The drains of $M_1$ and $M_2$ both move by $\Delta V_{DD}$, so by symmetry their currents stay equal, and with the ideal tail each stays at $I_{SS}/2$ (node P moves by only $\Delta V_{DD}/(1 + g_mr_O)$). Every KCL equation is satisfied, and the linear equations have a unique solution. The output connects to the supply through two resistances ($r_{O4}$ and the effective $2r_O$) and to ground through nothing, so it simply follows the supply.

### Step 4 — Differential gain and supply rejection

**Transconductance.** With the output shorted and $v_{1,2} = \pm v_d/2$, symmetry keeps $v_P = 0$, and $M_2$ carries $g_m(-v_d/2)$. $M_1$'s half of the signal current goes into the supply and is lost, because there is no mirror:

$$|G_m| = \frac{g_{m1}}{2}.$$

**Output resistance.** Looking into $M_2$'s drain, its source P sees about $1/g_{m1}$ (the source of $M_1$, whose drain is at ac ground). This degeneration raises $M_2$'s resistance to about $r_{O2} + (1 + g_{m2}r_{O2})/g_{m1} \approx 2r_{O2}$, in parallel with $r_{O4}$:

$$R_{out} \approx (2r_{O2})\,\|\,r_{O4}.$$

**Differential gain:**

$$|A_{DM}| = \frac{g_{m1}}{2}\left[(2r_{O2})\,\|\,r_{O4}\right].$$

**Supply rejection.** The power-supply rejection ratio compares the differential gain with the gain from the supply:

$$\mathrm{PSRR} = \frac{|A_{DM}|}{|A_{sup}|} = |A_{DM}| = \frac{g_{m1}}{2}\left[(2r_{O2})\,\|\,r_{O4}\right].$$

A supply ripple appears at the output at full size, and referred to the input it equals $\Delta V_{DD}/|A_{DM}|$.

**Example.** With $g_{m1} = 1$ mS and $r_{O2} = r_{O4} = 100\ \mathrm{k}\Omega$: $R_{out} = 200\,\|\,100 = 66.7\ \mathrm{k}\Omega$, $|A_{DM}| = 0.5\ \mathrm{mS}\times66.7\ \mathrm{k}\Omega = 33$, and PSRR = 33 (about 30 dB). A 10 mV supply ripple appears as 10 mV at the output, equivalent to 0.3 mV at the input.

### Result

$$\frac{\Delta V_{out}}{\Delta V_{DD}} = 1 :$$

the output follows the supply one-for-one, so the circuit provides no supply rejection by itself. $M_3$'s fixed current makes the gate of $M_4$ track $V_{DD}$, so $M_4$ acts only as $r_{O4}$ to the supply, and the $M_2$–$M_1$ path acts as $2r_O$ to the supply as well. The power-supply rejection ratio is therefore just the differential gain:

$$\mathrm{PSRR} = \frac{|A_{DM}|}{|A_{sup}|} = \frac{g_{m1}}{2}\left[(2r_{O2})\,\|\,r_{O4}\right].$$

**Common mistake.** Claiming that the current-source load rejects supply noise, giving a supply gain near zero or of order $1/(g_mr_O)$. $M_4$'s gate is referenced to $V_{DD}$ through $M_3$, whose current is fixed, so $M_4$ only presents $r_{O4}$ to the supply, and nothing pulls the output toward ground.

**Common mistake.** Treating $M_1$'s drain as an ac ground for the supply calculation. It is one for the *differential* gain, but when $V_{DD}$ is the signal it moves, which is what makes the $M_2$–$M_1$ path look like $2r_O$ to the supply rather than to ground.

**Common mistake.** Using $g_{m1}(r_{O2}\|r_{O4})$ for the differential gain. Without a mirror, $M_1$'s signal current is dumped into the supply, so only half of the differential current reaches the output, and $M_2$'s output resistance is doubled by the degeneration from $M_1$.
