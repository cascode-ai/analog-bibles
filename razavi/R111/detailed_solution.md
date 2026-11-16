# Detailed solution - R111

**Approach.** $M_1$ has its gate at the DC bias $V_b$ (an AC ground) and its source driven by the ideal input source, so it is a common-gate (CG) stage. $R_1$ is connected directly across $M_1$'s drain and source, in parallel with $r_{O1}$, and $R_2$ is the load to $V_{DD}$. Write the small-signal model, apply KCL at the output node, and solve for $v_{out}/v_{in}$.

### Step 1 — The circuit

From the figure:

- $R_2$ connects $V_{DD}$ to the output node.
- $M_1$: drain at the output, gate at the fixed voltage $V_b$, source at the input node driven by $V_{in}$.
- $R_1$ connects the output node to the input node, i.e. it is in parallel with $M_1$'s drain–source path.

All transistors are saturated, $\lambda \ne 0$ (finite $r_{O1}$), and $\gamma = 0$ (no body effect, even though the source moves).

### Step 2 — Small-signal model

- $V_{DD}$ and $V_b$ are constant, so both are **AC grounds**. $R_2$ therefore goes from $out$ to ground, and the gate of $M_1$ is grounded.
- The input node $in$ is held at $v_{in}$ by the ideal source.
- **$M_1$:** a current source $g_{m1}v_{gs}$ from drain ($out$) to source ($in$), with $v_{gs} = v_g - v_s = 0 - v_{in} = -v_{in}$, in parallel with $r_{O1}$ (also from $out$ to $in$).
- **$R_1$:** from $out$ to $in$, in parallel with $r_{O1}$.

The only unknown is $v_{out}$.

<!-- diagram: diagram-01.cir -->

### Step 3 — KCL at the output node

Sum the currents **leaving** the output node:

- through $R_2$ to AC ground: $v_{out}/R_2$;
- through $R_1$ to the input: $(v_{out} - v_{in})/R_1$;
- through $r_{O1}$ to the input: $(v_{out} - v_{in})/r_{O1}$;
- through $M_1$'s controlled source, drain to source: $g_{m1}v_{gs} = -g_{m1}v_{in}$.

KCL:

$$\frac{v_{out}}{R_2} + \frac{v_{out} - v_{in}}{R_1} + \frac{v_{out} - v_{in}}{r_{O1}} - g_{m1}v_{in} = 0 .$$

### Step 4 — Solve for the gain

Collect the $v_{out}$ terms on the left and the $v_{in}$ terms on the right:

$$v_{out}\left(\frac{1}{R_2} + \frac{1}{R_1} + \frac{1}{r_{O1}}\right) = v_{in}\left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1}\right).$$

The bracket on the left is the total conductance at the output, the reciprocal of $R_1\|R_2\|r_{O1}$. So

$$A_v = \frac{v_{out}}{v_{in}} = \left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1}\right)\left(R_1\|R_2\|r_{O1}\right).$$

**Expanded form.** Write each factor over a common denominator:

$$
\begin{aligned}
g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1} &= \frac{g_{m1}R_1r_{O1} + R_1 + r_{O1}}{R_1r_{O1}},\\
R_1\|R_2\|r_{O1} &= \frac{R_1R_2r_{O1}}{R_2r_{O1} + R_1r_{O1} + R_1R_2} .
\end{aligned}
$$

Multiply them; the factor $R_1r_{O1}$ cancels:

$$A_v = \frac{R_2\left(g_{m1}R_1r_{O1} + R_1 + r_{O1}\right)}{R_1R_2 + R_1r_{O1} + R_2r_{O1}} .$$

The gain is **positive**: a common-gate stage is non-inverting. Raising the source voltage reduces $V_{GS}$, so less current is drawn through $R_2$ and the output rises.

### Step 5 — Cross-check by superposition

The small-signal circuit is linear, so split the response into two parts.

**(a) The transistor's current alone.** With $v_{gs} = -v_{in}$, the controlled source drives the current $g_{m1}v_{in}$ *into* the output node (from source to drain). Treat it as an independent source and set the input node to zero in the resistive connections. Then $R_1$, $r_{O1}$ and $R_2$ all go from $out$ to ground:

$$v_{out,a} = g_{m1}v_{in}\,(R_1\|R_2\|r_{O1}) .$$

**(b) The resistive path alone** (transistor current set to zero). $v_{in}$ reaches the output through $R_1\|r_{O1}$, which forms a divider with $R_2$:

$$v_{out,b} = v_{in}\,\frac{R_2}{R_2 + R_1\|r_{O1}} = v_{in}\,\frac{R_1\|R_2\|r_{O1}}{R_1\|r_{O1}} = v_{in}\left(\frac{1}{R_1} + \frac{1}{r_{O1}}\right)(R_1\|R_2\|r_{O1}) .$$

(The middle step uses $\dfrac{R_2}{R_2 + R_p} = \dfrac{1}{R_p}\cdot\dfrac{R_2R_p}{R_2 + R_p}$ with $R_p = R_1\|r_{O1}$.)

**Sum:**

$$v_{out} = \left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1}\right)(R_1\|R_2\|r_{O1})\,v_{in},$$

the same as Step 4.

### Step 6 — Interpretation and checks

- **Why the "$+1/r_{O1}$" and "$+1/R_1$" terms.** Both $r_{O1}$ and $R_1$ connect the output to the input source. Raising $v_{in}$ pushes current through them into the output node, in the same (non-inverting) direction as the transistor's $-g_{m1}v_{gs} = g_{m1}v_{in}$. So the effective transconductance is $g_{m1} + 1/r_{O1} + 1/R_1$. With the input at AC ground they also load the output, which is why they appear in $R_1\|R_2\|r_{O1}$.
- **Check, $R_1 \to \infty$:** $A_v \to (g_{m1} + 1/r_{O1})(R_2\|r_{O1}) = (1 + g_{m1}r_{O1})R_2/(R_2 + r_{O1})$, the standard CG gain with finite $r_O$. ✓
- **Check, $r_{O1} \to \infty$:** $A_v \to (g_{m1} + 1/R_1)(R_1\|R_2)$.
- **Check, $R_1 \to 0$:** the output is shorted to the input, and the expanded formula gives $A_v \to R_2r_{O1}/(R_2r_{O1}) = 1$. ✓

**Numerical sanity check** (illustrative values): $g_{m1} = 2$ mS, $r_{O1} = 20\ \mathrm{k}\Omega$, $R_1 = 10\ \mathrm{k}\Omega$, $R_2 = 5\ \mathrm{k}\Omega$.

$$
\begin{aligned}
g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1} &= (2 + 0.05 + 0.1)\ \mathrm{mS} = 2.15\ \mathrm{mS},\\
R_1\|R_2\|r_{O1} &= \frac{1}{(0.1 + 0.2 + 0.05)\ \mathrm{mS}} = 2.857\ \mathrm{k}\Omega,\\
A_v &= (2.15\ \mathrm{mS})(2.857\ \mathrm{k}\Omega) = 6.14 .
\end{aligned}
$$

The expanded form gives $5\ \mathrm{k}\Omega\,(400 + 10 + 20)\ \mathrm{k}\Omega/[(50 + 200 + 100)\times10^6\ \Omega^2] = 2.15\times10^9/3.5\times10^8 = 6.14$. ✓

### Result

$$A_v = \left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1}\right)\left(R_1\|R_2\|r_{O1}\right) = \frac{R_2\left(g_{m1}R_1r_{O1} + R_1 + r_{O1}\right)}{R_1R_2 + R_1r_{O1} + R_2r_{O1}}$$

(non-inverting, common gate). For $r_{O1} \to \infty$ it reduces to $(g_{m1} + 1/R_1)(R_1\|R_2)$.

**Common mistake.** Treating $R_1$ as a load from the output to ground. Its lower end is the *input* node, which carries $v_{in}$; it therefore also injects the input signal into the output, adding $1/R_1$ to the transconductance, not just to the output conductance.

**Common mistake.** Analysing $M_1$ as a common-source stage driven at the gate, which gives an inverting gain $-g_{m1}(\ldots)$. The gate is at the DC bias $V_b$ (an AC ground) and the signal enters at the source, so $v_{gs} = -v_{in}$ and the gain is positive.

**Common mistake.** Connecting $r_{O1}$ from the output to ground. $r_{O1}$ is between drain and source, and the source is the input node, so $r_{O1}$ too goes from $out$ to $in$. That is why $1/r_{O1}$ appears in the numerator as well.
