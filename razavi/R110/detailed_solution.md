# Detailed solution - R110

**Approach.** Replace $M_1$ by its small-signal model (a transconductance $g_{m1}v_{gs}$ in parallel with $r_{O1}$), short the supply to AC ground, and write KCL at the output node. Because $V_{in}$ is an *ideal* source tied directly to the gate, $v_{gs} = v_{in}$ no matter what $R_F$ does. $R_F$ therefore acts only as a feedforward path from input to output and as an extra load on the output, not as feedback that changes $v_{gs}$.

### Step 1 — The circuit

From the figure: $M_1$ has its gate at $V_{in}$, source at ground and drain at $V_{out}$. $R_D$ connects $V_{out}$ to $V_{DD}$. $R_F$ connects the input node (gate) to the output node (drain). The input source drives both the gate and the left end of $R_F$.

All MOSFETs are saturated (given), $\lambda \ne 0$ (so $r_{O1}$ is finite), and $\gamma = 0$ (the source is grounded anyway, so there would be no body effect).

### Step 2 — Small-signal model

- $V_{DD}$ is a constant voltage, so it is an **AC ground**: $R_D$ connects $out$ to ground.
- **$M_1$:** a voltage-controlled current source $g_{m1}v_{gs}$ from drain ($out$) to source (ground), in parallel with its output resistance $r_{O1}$. With the source grounded and the gate tied to the ideal input source, $v_{gs} = v_{in}$.
- **$R_F$:** between $in$ (held at $v_{in}$) and $out$.

The only unknown node voltage is $v_{out}$.

<!-- diagram: diagram-01.cir -->

### Step 3 — KCL at the output node

Sum the currents **leaving** the output node:

- through $R_F$ toward the input: $(v_{out} - v_{in})/R_F$;
- through $R_D$ to AC ground: $v_{out}/R_D$;
- through $r_{O1}$ to ground: $v_{out}/r_{O1}$;
- through $M_1$'s controlled source, from drain to source: $g_{m1}v_{in}$.

KCL (the sum is zero):

$$\frac{v_{out} - v_{in}}{R_F} + \frac{v_{out}}{R_D} + \frac{v_{out}}{r_{O1}} + g_{m1}v_{in} = 0 .$$

### Step 4 — Solve for the gain

Move the $v_{in}$ terms to the right-hand side:

$$v_{out}\left(\frac{1}{R_F} + \frac{1}{R_D} + \frac{1}{r_{O1}}\right) = v_{in}\left(\frac{1}{R_F} - g_{m1}\right).$$

Divide:

$$A_v = \frac{v_{out}}{v_{in}} = \frac{\dfrac{1}{R_F} - g_{m1}}{\dfrac{1}{R_F} + \dfrac{1}{R_D} + \dfrac{1}{r_{O1}}} .$$

The denominator is the total conductance at the output, the reciprocal of $R_D\|R_F\|r_{O1}$. Hence

$$A_v = -\left(g_{m1} - \frac{1}{R_F}\right)\left(R_D\|R_F\|r_{O1}\right).$$

**Expanded form.** Multiply numerator and denominator by $R_DR_Fr_{O1}$:

$$
\begin{aligned}
A_v &= \frac{\left(\dfrac{1}{R_F} - g_{m1}\right)R_DR_Fr_{O1}}{R_Dr_{O1} + R_Fr_{O1} + R_DR_F}\\
&= \frac{(1 - g_{m1}R_F)\,R_Dr_{O1}}{R_DR_F + R_Dr_{O1} + R_Fr_{O1}}\\
&= -\frac{(g_{m1}R_F - 1)\,R_Dr_{O1}}{R_DR_F + R_Dr_{O1} + R_Fr_{O1}} .
\end{aligned}
$$

### Step 5 — Cross-check by superposition

The circuit is linear (small-signal), so the output can be found as the sum of two simpler contributions.

**(a) The transistor's current alone.** Treat $g_{m1}v_{in}$ as an independent current source and set the input node to zero in all *resistive* connections. Then $R_F$ goes from $out$ to ground, in parallel with $R_D$ and $r_{O1}$, and the current $g_{m1}v_{in}$ is drawn out of the output node:

$$v_{out,a} = -g_{m1}v_{in}\,(R_D\|R_F\|r_{O1}) .$$

**(b) The resistive path alone** (transistor current set to zero). $v_{in}$ drives $R_F$, which feeds the parallel combination $R_D\|r_{O1}$, a voltage divider:

$$v_{out,b} = v_{in}\,\frac{R_D\|r_{O1}}{R_F + R_D\|r_{O1}} = v_{in}\,\frac{R_D\|R_F\|r_{O1}}{R_F} .$$

(The last step uses $\dfrac{R_p}{R_F + R_p} = \dfrac{1}{R_F}\cdot\dfrac{R_FR_p}{R_F + R_p} = \dfrac{R_F\|R_p}{R_F}$ with $R_p = R_D\|r_{O1}$.)

**Sum:**

$$v_{out} = v_{out,a} + v_{out,b} = -\left(g_{m1} - \frac{1}{R_F}\right)(R_D\|R_F\|r_{O1})\,v_{in},$$

the same result as Step 4.

### Step 6 — Interpretation and checks

- **Two paths from input to output.** The transistor produces an inverting current $g_{m1}v_{in}$. The resistor $R_F$ injects a *non-inverting* current $v_{in}/R_F$ into the output node (when $v_{out} = 0$). The net short-circuit transconductance is $g_{m1} - 1/R_F$, and it develops a voltage across the total output resistance $R_D\|R_F\|r_{O1}$.
- **$R_F$ as a load.** Seen from the output, the ideal input source is an AC ground, so $R_F$ also appears in parallel with $R_D$ and $r_{O1}$.
- **No feedback on $v_{gs}$.** Because $V_{in}$ is ideal, the gate voltage cannot be changed by current in $R_F$; there is no Miller-type reduction of $v_{gs}$. (A gain like $-R_F/R_S$ would require a source resistance $R_S$ in series with the input, which is not present here.)
- **Check, $R_F \to \infty$:** $A_v \to -g_{m1}(R_D\|r_{O1})$, the ordinary CS gain. ✓
- **Check, $g_{m1}R_F \gg 1$:** $A_v \approx -g_{m1}(R_D\|R_F\|r_{O1})$; the feedforward term is negligible but the loading by $R_F$ remains.
- **Sign:** the gain is inverting as long as $g_{m1} > 1/R_F$; at $g_{m1} = 1/R_F$ the two paths cancel and $A_v = 0$.

**Numerical sanity check** (illustrative values): $g_{m1} = 2$ mS, $r_{O1} = 20\ \mathrm{k}\Omega$, $R_D = 5\ \mathrm{k}\Omega$, $R_F = 10\ \mathrm{k}\Omega$.

$$
\begin{aligned}
R_D\|R_F\|r_{O1} &= \frac{1}{(0.2 + 0.1 + 0.05)\ \mathrm{mS}} = \frac{1}{0.35\ \mathrm{mS}} = 2.857\ \mathrm{k}\Omega,\\
A_v &= -(2 - 0.1)\ \mathrm{mS}\times2.857\ \mathrm{k}\Omega = -5.43 .
\end{aligned}
$$

The expanded form gives the same: $-(20 - 1)(5\ \mathrm{k}\Omega)(20\ \mathrm{k}\Omega)/[(50 + 100 + 200)\times10^6\ \Omega^2] = -19\times10^8/(3.5\times10^8) = -5.43$.

### Result

$$A_v = -\left(g_{m1} - \frac{1}{R_F}\right)\left(R_D\|R_F\|r_{O1}\right) = -\frac{(g_{m1}R_F - 1)\,R_Dr_{O1}}{R_DR_F + R_Dr_{O1} + R_Fr_{O1}} .$$

**Common mistake.** Ignoring $R_F$ and writing $-g_{m1}(R_D\|r_{O1})$. $R_F$ both loads the output (it goes to the AC-grounded input source) and feeds the input signal forward, so it appears twice: in $R_D\|R_F\|r_{O1}$ and in the $-1/R_F$ term.

**Common mistake.** Treating $R_F$ as negative feedback that reduces $v_{gs}$, and quoting a closed-loop gain such as $-R_F/R_S$. With an ideal input source there is no source resistance; the gate is pinned at $v_{in}$, so $v_{gs} = v_{in}$ exactly.

**Common mistake.** Dropping the feedforward term, i.e. writing $-g_{m1}(R_D\|R_F\|r_{O1})$ as if it were exact. It is only an approximation valid for $g_{m1}R_F \gg 1$; the exact numerator is $g_{m1} - 1/R_F$.
