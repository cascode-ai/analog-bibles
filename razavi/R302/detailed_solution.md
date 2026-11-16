# Detailed solution - R302

**Approach.** With $\lambda = \gamma = 0$ each transistor is a plain controlled current source, and the ideal current sources are open circuits. Both transistors connect only X and the output, so the two nodes form an "island" reached from outside only through ideal current sources and $R_S$. KCL at the output relates $v_{out}$ to $v_X$; KCL at X then shows that no signal current can enter, so $Z_{in} = \infty$ and $v_X = V_{in}$.

### Step 1 — Small-signal model

Call the input node (right of $R_S$) X. Both gates sit at fixed biases ($V_{b2}$ for $M_1$, $V_{b1}$ for $M_2$), and both transistors are connected **between X and the output**. With $V_{DD}$, $V_{b1}$, $V_{b2}$ at ac ground and $I_1$, $I_2$ open:

- **$M_1$** (source X, drain output): $v_{gs1} = 0 - v_X$, so it carries $-g_{m1}v_X$ **from the output to X**.
- **$M_2$** (source output, drain X): $v_{gs2} = 0 - v_{out}$, so it carries $-g_{m2}v_{out}$ from X to the output, i.e. **$+g_{m2}v_{out}$ from the output to X**.

<!-- diagram: diagram-01.cir -->

So raising X makes $M_1$ conduct *less* from the output to X, and raising the output makes $M_2$ conduct *more*. Let $i_{in}$ be the current entering X through $R_S$.

### Step 2 — KCL at the output node

The output connects only to the open $I_1$ and the two transistors, so their total signal current must be zero:

$$-g_{m1}v_X + g_{m2}v_{out} = 0 \quad\Longrightarrow\quad v_{out} = \frac{g_{m1}}{g_{m2}}\,v_X .$$

When $M_1$'s current falls by $g_{m1}v_X$, $M_2$'s must rise by the same amount, which requires the output to rise by $g_{m1}v_X/g_{m2}$.

### Step 3 — KCL at X: no current can enter

$i_{in}$ enters from $R_S$, plus the currents arriving from the output through $M_1$ and $M_2$; $I_2$ is open and no gate is connected to X:

$$i_{in} + \left(-g_{m1}v_X + g_{m2}v_{out}\right) = 0 .$$

The bracket is zero by Step 2, so

$$i_{in} = 0 \quad\text{for any } v_X, \qquad Z_{in} = \frac{v_X}{i_{in}} = \frac{v_X}{0} = \infty .$$

Equivalently, a boundary drawn around X and the output is crossed only by $R_S$ and the ideal $I_1$, $I_2$ (the gates carry no current), so current can circulate between X and the output but cannot enter from outside.

### Step 4 — Transfer function

No signal current flows through $R_S$, so

$$v_X = V_{in} - i_{in}R_S = V_{in},$$

and with Step 2:

$$\frac{V_{out}}{V_{in}} = \frac{v_{out}}{v_X} = +\frac{g_{m1}}{g_{m2}} .$$

The gain is positive and independent of $R_S$: $M_1$, as a common-gate stage, converts $v_X$ into the current $-g_{m1}v_X$, and $M_2$, looked into from its source, loads it with $1/g_{m2}$.

### Result

$$Z_{in} = \infty, \qquad \frac{V_{out}}{V_{in}} = +\frac{g_{m1}}{g_{m2}} .$$

Both transistors connect only X and the output. Because $I_1$ and $I_2$ are ideal, KCL at the output forces $g_{m2}v_{out} = g_{m1}v_X$, and the same currents then cancel at X, so $i_{in} = 0$. With no current through $R_S$, $v_X = V_{in}$.

**Common mistake.** Giving a finite input impedance such as $1/g_{m1}$ or $1/(g_{m1} + g_{m2})$, as if X were the source of an isolated common-gate device. Any current $M_1$ or $M_2$ draws from X goes to the output and can only come back to X, so no input current can flow.

**Common mistake.** Making the gain depend on $R_S$, e.g. through a divider with $Z_{in}$. Since $Z_{in}$ is infinite, $R_S$ carries no current and $v_X = V_{in}$ exactly.

**Common mistake.** A negative gain from reading $M_2$ as a common-source device. Its gate is at the fixed bias $V_{b1}$ and its source at the output, so a rising output *increases* its current, balancing the *decrease* in $M_1$'s current when X rises: the output follows X.
