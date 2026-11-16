# Detailed solution - R302

**Approach.** With $\lambda = \gamma = 0$, each transistor is a voltage-controlled current source and the ideal current sources are open circuits. Both transistors connect only node X and the output node, so the two nodes form an "island" that is reached from outside only through ideal current sources and through $R_S$. KCL at the output relates $v_{out}$ to $v_X$; KCL at X (or on the island as a whole) shows that no signal current can enter, so $Z_{in} = \infty$ and $v_X = V_{in}$.

### Step 1 — Reading the circuit

From the figure:

- $V_{in}$ drives node **X** through $R_S$; $Z_{in}$ is the impedance looking into X. Node X is also the top of the ideal current source $I_2$ (to ground).
- $M_1$ (NMOS): **gate at the fixed bias $V_{b2}$**, source at X, drain at the **output**.
- $M_2$ (PMOS): **source at the output**, **gate at the fixed bias $V_{b1}$**, drain at X.
- The output node is fed by the ideal current source $I_1$ from $V_{DD}$.

Both transistors have their gates at fixed voltages and are connected **between X and the output**. Neither gate is driven by the signal.

### Step 2 — Small-signal model

- $V_{DD}$, $V_{b1}$ and $V_{b2}$ are ac grounds; $I_1$, $I_2$ are open circuits; no $r_O$, no body effect.
- **$M_1$:** drain-to-source current $g_{m1}v_{gs1}$ with $v_{gs1} = 0 - v_X$. So $M_1$ carries $-g_{m1}v_X$ **from the output to X**.
- **$M_2$:** drain-to-source current $g_{m2}v_{gs2}$ with $v_{gs2} = 0 - v_{out}$. Its drain is X and its source the output, so it carries $-g_{m2}v_{out}$ from X to the output, i.e. **$+g_{m2}v_{out}$ from the output to X**.

<!-- diagram: diagram-01.cir -->

Physically: raising X reduces $M_1$'s gate–source voltage, so $M_1$ conducts *less* from the output to X; raising the output increases $M_2$'s source–gate voltage, so $M_2$ conducts *more* from the output to X.

Let $i_{in}$ be the current entering X through $R_S$.

### Step 3 — KCL at the output node

The output node connects only to the ideal $I_1$ (open) and to the two transistors. The total signal current leaving the output through $M_1$ and $M_2$ must therefore be zero:

$$-g_{m1}v_X + g_{m2}v_{out} = 0 .$$

Solve:

$$v_{out} = \frac{g_{m1}}{g_{m2}}\,v_X .$$

The two transistors must change their currents by equal and opposite amounts. If $M_1$'s current falls by $g_{m1}v_X$, $M_2$'s current must rise by the same amount, which requires the output to rise by $g_{m1}v_X/g_{m2}$.

### Step 4 — KCL at X: no current can enter

Currents entering X: $i_{in}$ from $R_S$, plus the currents arriving from the output through $M_1$ and $M_2$. $I_2$ is open and no gate is connected to X. So

$$i_{in} + \left(-g_{m1}v_X + g_{m2}v_{out}\right) = 0 .$$

The bracket is exactly the quantity that Step 3 showed to be zero. Therefore

$$i_{in} = 0 \quad\text{for any } v_X .$$

**Supernode view.** Draw a boundary around X and the output together. The only elements crossing that boundary are $R_S$ and the two ideal current sources $I_1$ and $I_2$ (the transistors lie entirely inside, and their gates sit at fixed voltages outside without carrying current). Ideal current sources carry no signal current, so KCL on the boundary gives $i_{in} = 0$ directly. Current can circulate between X and the output through $M_1$ and $M_2$, but it cannot enter from outside.

### Step 5 — Input impedance

$$Z_{in} = \frac{v_X}{i_{in}} = \frac{v_X}{0} = \infty .$$

### Step 6 — Transfer function

Since no signal current flows through $R_S$, there is no voltage drop across it:

$$v_X = V_{in} - i_{in}R_S = V_{in}.$$

Combine with Step 3:

$$\frac{V_{out}}{V_{in}} = \frac{v_{out}}{v_X} = +\frac{g_{m1}}{g_{m2}} .$$

The gain is positive and independent of $R_S$. In effect $M_1$ acts as a common-gate stage that converts $v_X$ into the current $-g_{m1}v_X$, and $M_2$, looked into from its source, acts as a load of $1/g_{m2}$ for that current.

### Result

$$Z_{in} = \infty, \qquad \frac{V_{out}}{V_{in}} = +\frac{g_{m1}}{g_{m2}} .$$

Both transistors connect only X and the output. Because $I_1$ and $I_2$ are ideal, KCL at the output forces $g_{m2}v_{out} = g_{m1}v_X$, and the same currents then cancel at X, so $i_{in} = 0$. With no current through $R_S$, $v_X = V_{in}$.

**Common mistake.** Giving a finite input impedance such as $1/g_{m1}$ or $1/(g_{m1} + g_{m2})$, by treating X like the source of an isolated common-gate device. The current that $M_1$ or $M_2$ would draw from X has to go to the output node, and from there it can only come back to X. Nothing leaves the X–output island, so no input current can flow.

**Common mistake.** Making the gain depend on $R_S$, for instance with a divider between $R_S$ and $Z_{in}$. Since $Z_{in}$ is infinite, $R_S$ carries no current and $v_X = V_{in}$ exactly.

**Common mistake.** A negative gain from reading $M_2$ as a common-source device. $M_2$'s gate is at the fixed bias $V_{b1}$, not at a signal node, and its source is at the output. A rise of the output *increases* $M_2$'s current, which is needed to balance the *decrease* in $M_1$'s current when X rises, so the output moves in the same direction as X.
