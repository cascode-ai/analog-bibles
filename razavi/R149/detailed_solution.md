# Detailed solution - R149

**Approach.** During a fast clock edge the resistive elements at node $X$ have no time to move charge, so node $X$ is connected to the outside world only through two capacitors: the line-to-line capacitance to the clock line and the 100-fF capacitance to ground. Charge conservation on node $X$ then gives a capacitive divider, which sets the glitch amplitude. Afterwards the glitch decays through the resistance at $X$.

### Step 1 — What is connected to node $X$

Reading the figure:

- $V_X$ is the drain of $M_1$, a common-source stage with a resistive load (call it $R_D$) to $V_{DD}$.
- The signal line $L_1$, which carries $V_X$, runs next to the clock line $L_2$. The clock line is driven by an inverter, which is a low-impedance driver, so $L_2$ swings the full clock amplitude $\Delta V_{CK} = 3$ V on each edge.
- The capacitance between the two lines, distributed along their length, adds up to $C_c = 10$ fF (the *coupling capacitance*).
- All the other capacitance at node $X$ (the drain junction of $M_1$, the wiring to the substrate, the next stage's input) adds up to $C_{g} = 100$ fF to ground.

For small signals, node $X$ also has a resistance to AC ground: the load resistor $R_D$ (whose other end, $V_{DD}$, is an AC ground) in parallel with the output resistance $r_{O1}$ of $M_1$:

$$R_X = R_D\parallel r_{O1}.$$

So the small-signal equivalent circuit of node $X$ is a step source $\Delta V_{CK}$ in series with $C_c$, driving node $X$, which has $C_g$ and $R_X$ to ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — Why the resistors can be ignored during the edge

The resistance $R_X$ can only move charge onto or off node $X$ with the time constant

$$\tau = R_X\,(C_c + C_g).$$

For example, with $R_X = 5\ \mathrm{k}\Omega$, $\tau = (5\ \mathrm{k}\Omega)(110\ \mathrm{fF}) = 0.55$ ns. A clock edge in a modern process lasts a few tens of picoseconds, much shorter than $\tau$. So during the edge essentially no current flows through $R_D$ or $M_1$, and the total charge on node $X$ is conserved. In particular, $M_1$ does not "hold" the node: it is a current source with a high output resistance, not a voltage source.

### Step 3 — Charge conservation on node $X$

The charge stored on the plates connected to node $X$ is

$$Q_X = C_c\,(V_X - V_{CK}) + C_g\,(V_X - 0).$$

The first term belongs to the coupling capacitor (voltage $V_X - V_{CK}$ across it), the second to the grounded capacitor.

Let the clock jump by $\Delta V_{CK}$ and the node by $\Delta V_X$. Charge conservation requires $\Delta Q_X = 0$:

$$
\begin{aligned}
C_c\,(\Delta V_X - \Delta V_{CK}) + C_g\,\Delta V_X &= 0\\
(C_c + C_g)\,\Delta V_X &= C_c\,\Delta V_{CK}\\
\Delta V_X &= \Delta V_{CK}\,\frac{C_c}{C_c + C_g}.
\end{aligned}
$$

This is a **capacitive divider**: the clock step is shared between $C_c$ (in series) and $C_g$ (to ground). Note that $C_c$ appears in the denominator too, because node $X$ "sees" both capacitors.

### Step 4 — Numerical value

$$
\begin{aligned}
\frac{C_c}{C_c + C_g} &= \frac{10\ \mathrm{fF}}{10\ \mathrm{fF} + 100\ \mathrm{fF}} = \frac{10}{110} = 0.0909,\\
\Delta V_X &= (3\ \mathrm{V})(0.0909) = 0.273\ \mathrm{V}.
\end{aligned}
$$

So each clock edge produces a glitch of about **273 mV** at $V_X$:

- a rising clock edge (0 → 3 V) pushes $V_X$ *up* by 0.27 V;
- a falling clock edge (3 V → 0) pulls $V_X$ *down* by 0.27 V.

The glitch has the same sign as the clock transition because a series capacitor passes a step without inversion.

### Step 5 — Shape of the disturbed waveform

After each jump, the charge injected onto node $X$ leaks away through $R_X$, so $V_X$ relaxes back toward the value set by the amplifier with time constant $\tau = (R_D\parallel r_{O1})(110\ \mathrm{fF})$:

$$\Delta V_X(t) = 0.273\ \mathrm{V}\times e^{-t/\tau}\qquad (t\ \text{measured from the edge}).$$

The analog signal therefore carries sharp spikes of ±0.27 V at every clock edge, each followed by an exponential decay. This is the spiky waveform drawn on $L_1$ in the figure. Compared with an analog signal of a few hundred millivolts, a 0.27-V glitch is enormous, which is why clock lines should not run next to sensitive analog lines.

### Result

$$\Delta V_X = \Delta V_{CK}\,\frac{C_c}{C_c + C_g} = 3\ \mathrm{V}\times\frac{10\ \mathrm{fF}}{110\ \mathrm{fF}} \approx 0.27\ \mathrm{V}\ (273\ \mathrm{mV})$$

per clock edge: positive on rising edges and negative on falling edges. Each glitch then decays with the time constant $(R_D\parallel r_{O1})\times 110$ fF.

**Common mistake.** Writing $\Delta V_X = 3\ \mathrm{V}\times 10/100 = 0.30$ V. The coupling capacitor is also connected to node $X$, so the divider denominator is the *total* capacitance at $X$, $C_c + C_g = 110$ fF. The difference is small here only because $C_c \ll C_g$.

**Common mistake.** Inverting the divider ($3\ \mathrm{V}\times 100/110 \approx 2.7$ V), or assuming the full 3-V swing appears at $X$. The grounded 100-fF capacitor is ten times larger than $C_c$, so it absorbs most of the injected charge and only a small fraction of the step reaches $X$.

**Common mistake.** Arguing that there is no glitch because $M_1$ or $R_D$ "holds" the node voltage. Neither is a voltage source: they can only remove the injected charge gradually, with the time constant $(R_D\parallel r_{O1})(C_c + C_g)$, which is much longer than a clock edge.
