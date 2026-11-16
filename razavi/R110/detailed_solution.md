# Detailed solution - R110

**Approach.** Replace $M_1$ by $g_{m1}v_{gs}$ in parallel with $r_{O1}$, take $V_{DD}$ as ac ground, and write KCL at the output. Because $V_{in}$ is an *ideal* source tied to the gate, $v_{gs} = v_{in}$ whatever $R_F$ does: $R_F$ is only a feedforward path and an extra load, not feedback that changes $v_{gs}$.

### Step 1 — Small-signal model

$R_D$ runs from $out$ to ac ground, $R_F$ from $in$ (held at $v_{in}$) to $out$, and $M_1$ is $g_{m1}v_{in}$ from $out$ to ground in parallel with $r_{O1}$ ($\lambda \ne 0$; $\gamma = 0$, and the source is grounded anyway). The only unknown is $v_{out}$.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the output node

Summing the currents leaving $out$ (through $R_F$, $R_D$, $r_{O1}$ and $M_1$'s controlled source):

$$\frac{v_{out} - v_{in}}{R_F} + \frac{v_{out}}{R_D} + \frac{v_{out}}{r_{O1}} + g_{m1}v_{in} = 0 .$$

### Step 3 — Solve for the gain

$$v_{out}\left(\frac{1}{R_F} + \frac{1}{R_D} + \frac{1}{r_{O1}}\right) = v_{in}\left(\frac{1}{R_F} - g_{m1}\right),$$

$$A_v = \frac{v_{out}}{v_{in}} = \frac{\dfrac{1}{R_F} - g_{m1}}{\dfrac{1}{R_F} + \dfrac{1}{R_D} + \dfrac{1}{r_{O1}}} .$$

The denominator is the total output conductance, $1/(R_D\|R_F\|r_{O1})$, so

$$A_v = -\left(g_{m1} - \frac{1}{R_F}\right)\left(R_D\|R_F\|r_{O1}\right).$$

**Expanded form.** Multiplying numerator and denominator by $R_DR_Fr_{O1}$:

$$
\begin{aligned}
A_v &= \frac{\left(\dfrac{1}{R_F} - g_{m1}\right)R_DR_Fr_{O1}}{R_Dr_{O1} + R_Fr_{O1} + R_DR_F}\\
&= \frac{(1 - g_{m1}R_F)\,R_Dr_{O1}}{R_DR_F + R_Dr_{O1} + R_Fr_{O1}}\\
&= -\frac{(g_{m1}R_F - 1)\,R_Dr_{O1}}{R_DR_F + R_Dr_{O1} + R_Fr_{O1}} .
\end{aligned}
$$

### Step 4 — Cross-check by superposition

**(a) Transistor current alone** (input node grounded in the resistive paths): $R_F$ then goes from $out$ to ground, and

$$v_{out,a} = -g_{m1}v_{in}\,(R_D\|R_F\|r_{O1}) .$$

**(b) Resistive path alone** (transistor current zero): $R_F$ and $R_D\|r_{O1}$ form a divider,

$$v_{out,b} = v_{in}\,\frac{R_D\|r_{O1}}{R_F + R_D\|r_{O1}} = v_{in}\,\frac{R_D\|R_F\|r_{O1}}{R_F} ,$$

using $R_p/(R_F + R_p) = (R_F\|R_p)/R_F$ with $R_p = R_D\|r_{O1}$. The sum,

$$v_{out} = v_{out,a} + v_{out,b} = -\left(g_{m1} - \frac{1}{R_F}\right)(R_D\|R_F\|r_{O1})\,v_{in},$$

matches Step 3.

### Step 5 — Interpretation and checks

- **Two paths.** The transistor sinks the inverting current $g_{m1}v_{in}$, while $R_F$ injects the non-inverting current $v_{in}/R_F$ (at $v_{out} = 0$); the net transconductance $g_{m1} - 1/R_F$ develops a voltage across $R_D\|R_F\|r_{O1}$. $R_F$ also loads the output, since the ideal input source is an ac ground.
- **No feedback on $v_{gs}$.** The ideal source pins the gate at $v_{in}$, so there is no Miller-type reduction of $v_{gs}$ (a gain like $-R_F/R_S$ would need a source resistance $R_S$, which is absent).
- **$R_F \to \infty$:** $A_v \to -g_{m1}(R_D\|r_{O1})$, the ordinary CS gain. ✓
- **$g_{m1}R_F \gg 1$:** $A_v \approx -g_{m1}(R_D\|R_F\|r_{O1})$; the feedforward term is negligible but the loading by $R_F$ remains.
- **Sign:** inverting as long as $g_{m1} > 1/R_F$; at $g_{m1} = 1/R_F$ the two paths cancel and $A_v = 0$.

**Numerical check** (illustrative values): $g_{m1} = 2$ mS, $r_{O1} = 20\ \mathrm{k}\Omega$, $R_D = 5\ \mathrm{k}\Omega$, $R_F = 10\ \mathrm{k}\Omega$.

$$
\begin{aligned}
R_D\|R_F\|r_{O1} &= \frac{1}{(0.2 + 0.1 + 0.05)\ \mathrm{mS}} = \frac{1}{0.35\ \mathrm{mS}} = 2.857\ \mathrm{k}\Omega,\\
A_v &= -(2 - 0.1)\ \mathrm{mS}\times2.857\ \mathrm{k}\Omega = -5.43 .
\end{aligned}
$$

The expanded form gives the same: $-(20 - 1)(5\ \mathrm{k}\Omega)(20\ \mathrm{k}\Omega)/[(50 + 100 + 200)\times10^6\ \Omega^2] = -19\times10^8/(3.5\times10^8) = -5.43$.

### Result

$$A_v = -\left(g_{m1} - \frac{1}{R_F}\right)\left(R_D\|R_F\|r_{O1}\right) = -\frac{(g_{m1}R_F - 1)\,R_Dr_{O1}}{R_DR_F + R_Dr_{O1} + R_Fr_{O1}} .$$

**Common mistake.** Ignoring $R_F$ and writing $-g_{m1}(R_D\|r_{O1})$. $R_F$ both loads the output and feeds the input forward, so it appears twice: in $R_D\|R_F\|r_{O1}$ and in the $-1/R_F$ term.

**Common mistake.** Treating $R_F$ as negative feedback that reduces $v_{gs}$ and quoting a closed-loop gain such as $-R_F/R_S$. With an ideal input source the gate is pinned at $v_{in}$.

**Common mistake.** Writing $-g_{m1}(R_D\|R_F\|r_{O1})$ as if exact. That holds only for $g_{m1}R_F \gg 1$; the exact numerator is $g_{m1} - 1/R_F$.
