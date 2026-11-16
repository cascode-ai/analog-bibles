# Detailed solution - R298

**Approach.** With $\lambda = \gamma = 0$ each transistor is a plain controlled current source and the ideal current sources are open circuits. KCL at the output alone forces $v_X = 0$, so $Z_{in} = 0$; KCL at the input node X then gives $V_{out}$ in terms of the input current.

### Step 1 — Small-signal model

Call the input node (right of $R_S$) X. $M_1$ is a common-source stage from X to the output, and $M_2$ is a source follower from the output back to X, so the loop X → $M_1$ → output → $M_2$ → X inverts once: **negative feedback**. With $V_{DD}$ at ac ground, $I_1$, $I_2$ open and no $r_O$:

- **$M_1$:** a current $g_{m1}v_X$ from the output to ground.
- **$M_2$:** a current $g_{m2}(v_{out} - v_X)$ from its drain (ac ground) into its source, X; no $g_{mb2}$ since $\gamma = 0$.

<!-- diagram: diagram-01.cir -->

Let $i_{in}$ be the small-signal current flowing through $R_S$ into X.

### Step 2 — KCL at the output node forces $v_X = 0$

At the output, $I_1$ is open and the gate of $M_2$ draws no current, so the only signal current is that of $M_1$:

$$g_{m1}v_X = 0 \quad\Longrightarrow\quad v_X = 0$$

for any input current. The output node has no resistive path to ground, so $M_1$'s drain current, and hence $v_X$, cannot change: the loop gain is infinite and X is a perfect virtual ground, with the output moving to whatever voltage makes that happen.

### Step 3 — KCL at node X gives the output voltage

At X, $I_2$ is open and the gate of $M_1$ draws no current, so $i_{in}$ and $M_2$'s current are the only currents entering X:

$$i_{in} + g_{m2}(v_{out} - v_X) = 0 .$$

With $v_X = 0$:

$$
\begin{aligned}
i_{in} + g_{m2}v_{out} &= 0\\
v_{out} &= -\frac{i_{in}}{g_{m2}}.
\end{aligned}
$$

All of the input current is absorbed by $M_2$, whose gate (the output) must move down by $i_{in}/g_{m2}$ to sink it.

### Step 4 — Input impedance and transfer function

$$Z_{in} = \frac{v_X}{i_{in}} = \frac{0}{i_{in}} = 0 ,$$

so the node to the right of $R_S$ is a virtual ground. The current through $R_S$ is therefore set by $V_{in}$ alone,

$$i_{in} = \frac{V_{in} - v_X}{R_S} = \frac{V_{in}}{R_S},$$

and substituting into $v_{out} = -i_{in}/g_{m2}$:

$$\frac{V_{out}}{V_{in}} = -\frac{1}{g_{m2}R_S}.$$

The circuit is a **transimpedance amplifier** with $v_{out}/i_{in} = -1/g_{m2}$; $R_S$ converts $V_{in}$ into the input current.

### Step 5 — Check with finite output resistances

Add $r_{O1}$ (output to ground) and $r_{O2}$ (from $V_{DD}$, ac ground, to X). KCL at the output:

$$g_{m1}v_X + \frac{v_{out}}{r_{O1}} = 0 \quad\Longrightarrow\quad v_{out} = -g_{m1}r_{O1}v_X .$$

KCL at X (the current through $r_{O2}$ into X is $-v_X/r_{O2}$):

$$i_{in} + g_{m2}(v_{out} - v_X) - \frac{v_X}{r_{O2}} = 0 .$$

Substitute $v_{out}$:

$$
\begin{aligned}
i_{in} &= g_{m2}v_X(1 + g_{m1}r_{O1}) + \frac{v_X}{r_{O2}},\\
Z_{in} &= \frac{v_X}{i_{in}} = \frac{1}{g_{m2}(1 + g_{m1}r_{O1}) + 1/r_{O2}} = \frac{r_{O2}}{1 + g_{m2}r_{O2} + g_{m1}g_{m2}r_{O1}r_{O2}}\approx\frac{1}{g_{m1}g_{m2}r_{O1}}.
\end{aligned}
$$

This is the follower's output resistance $1/g_{m2}$ divided by one plus the loop gain $g_{m1}r_{O1}$, as expected for shunt feedback at the input. Letting $r_{O1}, r_{O2}\to\infty$ ($\lambda\to0$) gives $Z_{in}\to0$, in agreement with Step 4.

### Result

$$Z_{in} = 0, \qquad \frac{V_{out}}{V_{in}} = -\frac{1}{g_{m2}R_S}.$$

KCL at the output (ideal $I_1$, $\lambda = 0$, no gate current) forces $g_{m1}v_X = 0$, so X is a virtual ground. The input current $V_{in}/R_S$ is absorbed entirely by $M_2$, which requires $v_{out} = -i_{in}/g_{m2}$. (With finite $r_O$: $Z_{in} = r_{O2}/(1 + g_{m2}r_{O2} + g_{m1}g_{m2}r_{O1}r_{O2})\approx 1/(g_{m1}g_{m2}r_{O1})$.)

**Common mistake.** Giving a finite $Z_{in}$ such as $1/g_{m2}$, the impedance looking into the source of a follower with a fixed gate. Here the gate of $M_2$ is driven by $M_1$ with infinite gain, and the feedback drives the impedance at X to zero.

**Common mistake.** Getting the sign or the transconductance wrong, e.g. $+1/(g_{m2}R_S)$ or $-g_{m1}/g_{m2}$. A current flowing *into* X must be sunk by $M_2$, so its gate (the output) goes *down*: the gain is negative and involves only $g_{m2}$ and $R_S$. $g_{m1}$ only sets how well X is held at virtual ground, which with $\lambda = 0$ is perfect.

**Common mistake.** Misreading $M_2$ as a PMOS or a common-source device. With its drain at $V_{DD}$, gate at the output and source at X, it is an NMOS source follower feeding the output back to X.
