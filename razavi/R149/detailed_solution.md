# Detailed solution - R149

**Approach.** During a fast clock edge the resistance at node $X$ has no time to move charge, so $X$ is coupled only through the line-to-line capacitance and the 100-fF capacitance to ground. Charge conservation then gives a capacitive divider, which sets the glitch amplitude; afterwards the glitch decays through the resistance at $X$.

### Step 1 — Node $X$ during a clock edge

Call the load resistor of $M_1$ $R_D$. The inverter driving $L_2$ is a low-impedance driver, so $L_2$ swings the full $\Delta V_{CK} = 3$ V on each edge. Node $X$ has the coupling capacitance $C_c = 10$ fF to the clock line, $C_g = 100$ fF to ground, and the small-signal resistance $R_X = R_D\parallel r_{O1}$ to ac ground. So its equivalent circuit is a step $\Delta V_{CK}$ in series with $C_c$, driving $C_g$ and $R_X$ to ground.

<!-- diagram: diagram-01.cir -->

$R_X$ can only move charge onto or off $X$ with the time constant

$$\tau = R_X\,(C_c + C_g).$$

For example, with $R_X = 5\ \mathrm{k}\Omega$, $\tau = (5\ \mathrm{k}\Omega)(110\ \mathrm{fF}) = 0.55$ ns, while a clock edge lasts some tens of picoseconds up to about 100 ps. So during the edge essentially no current flows through $R_D$ or $M_1$, and the charge on $X$ is conserved.

### Step 2 — Charge conservation on node $X$

The charge on the plates connected to $X$ is $Q_X = C_c\,(V_X - V_{CK}) + C_gV_X$. If the clock jumps by $\Delta V_{CK}$ and the node by $\Delta V_X$, $\Delta Q_X = 0$ gives

$$
\begin{aligned}
C_c\,(\Delta V_X - \Delta V_{CK}) + C_g\,\Delta V_X &= 0\\
\Delta V_X &= \Delta V_{CK}\,\frac{C_c}{C_c + C_g}.
\end{aligned}
$$

Numerically:

$$
\begin{aligned}
\frac{C_c}{C_c + C_g} &= \frac{10\ \mathrm{fF}}{10\ \mathrm{fF} + 100\ \mathrm{fF}} = \frac{10}{110} = 0.0909,\\
\Delta V_X &= (3\ \mathrm{V})(0.0909) = 0.273\ \mathrm{V}.
\end{aligned}
$$

So each clock edge produces a glitch of about **273 mV** at $V_X$, with the same sign as the clock step: a rising edge (0 → 3 V) pushes $V_X$ *up* by 0.27 V, and a falling edge (3 V → 0) pulls it *down* by 0.27 V.

### Step 3 — Shape of the disturbed waveform

After each jump, the injected charge leaks away through $R_X$, so $V_X$ relaxes back with $\tau = (R_D\parallel r_{O1})(110\ \mathrm{fF})$:

$$\Delta V_X(t) = 0.273\ \mathrm{V}\times e^{-t/\tau}\qquad (t\ \text{measured from the edge}).$$

The analog signal therefore carries spikes of ±0.27 V at every clock edge, each followed by an exponential decay: the spiky waveform drawn on $L_1$ in the figure. Next to an analog signal of a few hundred millivolts, such a glitch is enormous.

### Result

$$\Delta V_X = \Delta V_{CK}\,\frac{C_c}{C_c + C_g} = 3\ \mathrm{V}\times\frac{10\ \mathrm{fF}}{110\ \mathrm{fF}} \approx 0.27\ \mathrm{V}\ (273\ \mathrm{mV})$$

per clock edge: positive on rising edges and negative on falling edges. Each glitch then decays with the time constant $(R_D\parallel r_{O1})\times 110$ fF.

**Common mistake.** Writing $\Delta V_X = 3\ \mathrm{V}\times 10/100 = 0.30$ V. The coupling capacitor is also connected to $X$, so the denominator is the *total* capacitance at $X$, $C_c + C_g = 110$ fF.

**Common mistake.** Inverting the divider ($3\ \mathrm{V}\times 100/110 \approx 2.7$ V), or assuming the full 3-V swing appears at $X$. The grounded 100-fF capacitor absorbs most of the injected charge.

**Common mistake.** Arguing that there is no glitch because $M_1$ or $R_D$ "holds" the node voltage. Neither is a voltage source: they remove the injected charge only with the time constant $(R_D\parallel r_{O1})(C_c + C_g)$, much longer than a clock edge.
