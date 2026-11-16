# Detailed solution - R111

**Approach.** $M_1$ has its gate at the DC bias $V_b$ (an ac ground) and its source driven by the ideal input, so it is a common-gate (CG) stage. $R_1$ sits directly across $M_1$'s drain and source, in parallel with $r_{O1}$, and $R_2$ is the load to $V_{DD}$. Apply KCL at the output of the small-signal model and solve for $v_{out}/v_{in}$.

### Step 1 — Small-signal model

$V_{DD}$ and $V_b$ are ac grounds, so $R_2$ runs from $out$ to ground and the gate is grounded. The input node is held at $v_{in}$. $M_1$ is $g_{m1}v_{gs}$ from drain ($out$) to source ($in$) with $v_{gs} = 0 - v_{in} = -v_{in}$, in parallel with $r_{O1}$; $R_1$ is also from $out$ to $in$ ($\lambda \ne 0$; $\gamma = 0$, so no body effect even though the source moves). The only unknown is $v_{out}$.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the output node

Summing the currents leaving $out$ (through $R_2$, $R_1$, $r_{O1}$ and the controlled source, which carries $g_{m1}v_{gs} = -g_{m1}v_{in}$):

$$\frac{v_{out}}{R_2} + \frac{v_{out} - v_{in}}{R_1} + \frac{v_{out} - v_{in}}{r_{O1}} - g_{m1}v_{in} = 0 .$$

### Step 3 — Solve for the gain

$$v_{out}\left(\frac{1}{R_2} + \frac{1}{R_1} + \frac{1}{r_{O1}}\right) = v_{in}\left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1}\right).$$

The left bracket is the total output conductance, $1/(R_1\|R_2\|r_{O1})$, so

$$A_v = \frac{v_{out}}{v_{in}} = \left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1}\right)\left(R_1\|R_2\|r_{O1}\right).$$

**Expanded form.** Over common denominators,

$$
\begin{aligned}
g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1} &= \frac{g_{m1}R_1r_{O1} + R_1 + r_{O1}}{R_1r_{O1}},\\
R_1\|R_2\|r_{O1} &= \frac{R_1R_2r_{O1}}{R_2r_{O1} + R_1r_{O1} + R_1R_2} ,
\end{aligned}
$$

and multiplying, $R_1r_{O1}$ cancels:

$$A_v = \frac{R_2\left(g_{m1}R_1r_{O1} + R_1 + r_{O1}\right)}{R_1R_2 + R_1r_{O1} + R_2r_{O1}} .$$

The gain is **positive**: raising the source voltage reduces $V_{GS}$, so less current is drawn through $R_2$ and the output rises.

### Step 4 — Cross-check by superposition

**(a) Transistor current alone.** With $v_{gs} = -v_{in}$ the controlled source drives $g_{m1}v_{in}$ *into* the output; with the input node grounded in the resistive paths, $R_1$, $r_{O1}$ and $R_2$ all go from $out$ to ground:

$$v_{out,a} = g_{m1}v_{in}\,(R_1\|R_2\|r_{O1}) .$$

**(b) Resistive path alone** (transistor current zero): $R_1\|r_{O1}$ and $R_2$ form a divider,

$$v_{out,b} = v_{in}\,\frac{R_2}{R_2 + R_1\|r_{O1}} = v_{in}\,\frac{R_1\|R_2\|r_{O1}}{R_1\|r_{O1}} = v_{in}\left(\frac{1}{R_1} + \frac{1}{r_{O1}}\right)(R_1\|R_2\|r_{O1}) ,$$

using $R_2/(R_2 + R_p) = (1/R_p)\cdot R_2R_p/(R_2 + R_p)$ with $R_p = R_1\|r_{O1}$. The sum,

$$v_{out} = \left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_1}\right)(R_1\|R_2\|r_{O1})\,v_{in},$$

matches Step 3.

### Step 5 — Interpretation and checks

- **The $+1/r_{O1}$ and $+1/R_1$ terms.** Both $r_{O1}$ and $R_1$ connect the output to the input source, so raising $v_{in}$ pushes current through them into the output, in the same direction as the transistor's $-g_{m1}v_{gs} = g_{m1}v_{in}$. With the input at ac ground they also load the output, hence $R_1\|R_2\|r_{O1}$.
- **$R_1 \to \infty$:** $A_v \to (g_{m1} + 1/r_{O1})(R_2\|r_{O1}) = (1 + g_{m1}r_{O1})R_2/(R_2 + r_{O1})$, the standard CG gain with finite $r_O$. ✓
- **$r_{O1} \to \infty$:** $A_v \to (g_{m1} + 1/R_1)(R_1\|R_2)$.
- **$R_1 \to 0$:** the output is shorted to the input, and the expanded formula gives $A_v \to R_2r_{O1}/(R_2r_{O1}) = 1$. ✓

**Numerical check** (illustrative values): $g_{m1} = 2$ mS, $r_{O1} = 20\ \mathrm{k}\Omega$, $R_1 = 10\ \mathrm{k}\Omega$, $R_2 = 5\ \mathrm{k}\Omega$.

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

**Common mistake.** Treating $R_1$ as a load from the output to ground. Its lower end is the *input* node, so it also injects the input signal into the output, adding $1/R_1$ to the transconductance, not just to the output conductance.

**Common mistake.** Analysing $M_1$ as a common-source stage driven at the gate, which gives an inverting gain. The gate is at ac ground and the signal enters at the source, so $v_{gs} = -v_{in}$ and the gain is positive.

**Common mistake.** Connecting $r_{O1}$ from the output to ground. It is between drain and source, i.e. from $out$ to $in$, which is why $1/r_{O1}$ also appears in the numerator.
