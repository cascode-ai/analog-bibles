# Detailed solution - R298

**Approach.** Replace both transistors by their small-signal models (with $\lambda = \gamma = 0$, each is just a voltage-controlled current source) and the ideal current sources by open circuits. Then write KCL at the output node and at the input node X. The output-node equation alone forces $v_X = 0$, which gives $Z_{in} = 0$; the input-node equation then gives $V_{out}$ in terms of the input current.

### Step 1 — Reading the circuit

From the figure:

- $V_{in}$ drives node **X** through $R_S$. $Z_{in}$ is the impedance looking into X (to the right of $R_S$).
- Node X is the **gate of $M_1$**, the **source of $M_2$**, and the top of the ideal current source $I_2$ (to ground).
- $M_1$ has its source grounded and its drain at the **output**, which is loaded by the ideal current source $I_1$ from $V_{DD}$. So $M_1$ is a common-source stage from X to the output.
- $M_2$ has its drain at $V_{DD}$, its gate at the **output** and its source at X. So $M_2$ is a source follower from the output back to X.

The two transistors form a loop: X → ($M_1$, inverting CS) → output → ($M_2$, follower) → X. Going around the loop the signal is inverted once, so this is **negative feedback**.

### Step 2 — Small-signal model

- $V_{DD}$ is an ac ground. Ideal current sources $I_1$, $I_2$ are open circuits.
- **$M_1$:** a current $g_{m1}v_X$ flowing from the output to ground (its $v_{gs} = v_X$).
- **$M_2$:** a current $g_{m2}v_{gs2} = g_{m2}(v_{out} - v_X)$ flowing from its drain (ac ground) into its source, node X. With $\gamma = 0$ there is no $g_{mb2}$ term.
- $\lambda = 0$: no $r_O$ for either transistor.

<!-- diagram: diagram-01.cir -->

Let $i_{in}$ be the small-signal current flowing through $R_S$ into node X.

### Step 3 — KCL at the output node forces $v_X = 0$

At the output node, the elements are: the ideal $I_1$ (open), the drain of $M_1$, and the gate of $M_2$ (draws no current). The only signal current is that of $M_1$. KCL:

$$g_{m1}v_X = 0 \quad\Longrightarrow\quad v_X = 0 .$$

This holds for any input current. **Why:** the output node has no resistive path to ground at all, so the drain current of $M_1$ cannot change, and therefore its gate voltage $v_X$ cannot change either. In feedback terms, the loop gain is infinite ($M_1$ with an ideal load has infinite voltage gain), so the feedback holds X at a perfect virtual ground. The output moves to whatever voltage is needed to make that happen.

### Step 4 — KCL at node X gives the output voltage

At node X, the elements are: $R_S$ (carrying $i_{in}$ in), the ideal $I_2$ (open), the gate of $M_1$ (no current) and the source of $M_2$ (carrying $g_{m2}(v_{out} - v_X)$ in). KCL, sum of currents entering X:

$$i_{in} + g_{m2}(v_{out} - v_X) = 0 .$$

Substitute $v_X = 0$ from Step 3:

$$
\begin{aligned}
i_{in} + g_{m2}v_{out} &= 0\\
v_{out} &= -\frac{i_{in}}{g_{m2}}.
\end{aligned}
$$

All of the input current is absorbed by $M_2$: to sink $i_{in}$, $M_2$'s gate (the output) must move down by $i_{in}/g_{m2}$.

### Step 5 — Input impedance

$$Z_{in} = \frac{v_X}{i_{in}} = \frac{0}{i_{in}} = 0 .$$

The node to the right of $R_S$ is a virtual ground: current flows in, but the voltage does not change.

### Step 6 — Transfer function

Since $v_X = 0$, the current through $R_S$ is set by $V_{in}$ alone:

$$i_{in} = \frac{V_{in} - v_X}{R_S} = \frac{V_{in}}{R_S}.$$

Substitute into $v_{out} = -i_{in}/g_{m2}$:

$$\frac{V_{out}}{V_{in}} = -\frac{1}{g_{m2}R_S}.$$

The circuit is a **transimpedance amplifier**: it converts the input current into an output voltage with transimpedance $v_{out}/i_{in} = -1/g_{m2}$, and $R_S$ converts $V_{in}$ into that current.

### Step 7 — Check with finite output resistances

To see that $Z_{in} = 0$ is the limit of a sensible result, add $r_{O1}$ (output to ground) and $r_{O2}$ (from $V_{DD}$, ac ground, to X).

KCL at the output:

$$g_{m1}v_X + \frac{v_{out}}{r_{O1}} = 0 \quad\Longrightarrow\quad v_{out} = -g_{m1}r_{O1}v_X .$$

KCL at X (current through $r_{O2}$ into X is $-v_X/r_{O2}$):

$$i_{in} + g_{m2}(v_{out} - v_X) - \frac{v_X}{r_{O2}} = 0 .$$

Substitute $v_{out}$:

$$
\begin{aligned}
i_{in} &= g_{m2}v_X(1 + g_{m1}r_{O1}) + \frac{v_X}{r_{O2}},\\
Z_{in} &= \frac{v_X}{i_{in}} = \frac{1}{g_{m2}(1 + g_{m1}r_{O1}) + 1/r_{O2}} = \frac{r_{O2}}{1 + g_{m2}r_{O2} + g_{m1}g_{m2}r_{O1}r_{O2}}\approx\frac{1}{g_{m1}g_{m2}r_{O1}}.
\end{aligned}
$$

This is the follower's own output resistance $1/g_{m2}$ divided by one plus the loop gain $g_{m1}r_{O1}$, as expected for shunt feedback at the input. Letting $r_{O1}, r_{O2}\to\infty$ ($\lambda\to0$) gives $Z_{in}\to0$, in agreement with Step 5.

### Result

$$Z_{in} = 0, \qquad \frac{V_{out}}{V_{in}} = -\frac{1}{g_{m2}R_S}.$$

KCL at the output (ideal $I_1$, $\lambda = 0$, no gate current) forces $g_{m1}v_X = 0$, so X is a virtual ground. The input current $V_{in}/R_S$ is absorbed entirely by $M_2$, which requires $v_{out} = -i_{in}/g_{m2}$. (With finite $r_O$: $Z_{in} = r_{O2}/(1 + g_{m2}r_{O2} + g_{m1}g_{m2}r_{O1}r_{O2})\approx 1/(g_{m1}g_{m2}r_{O1})$.)

**Common mistake.** Giving a finite $Z_{in}$ such as $1/g_{m2}$, the impedance looking into the source of a follower. That value assumes the gate of $M_2$ is fixed, but here the gate is driven by $M_1$ with infinite gain, and the feedback drives the impedance at X to zero.

**Common mistake.** Getting the sign or the transconductance wrong, e.g. $+1/(g_{m2}R_S)$ or $-g_{m1}/g_{m2}$. A current flowing *into* X must be sunk by $M_2$, which requires its gate–source voltage to decrease, so the output goes *down*: the gain is negative and involves only $g_{m2}$ (and $R_S$). $g_{m1}$ only sets how well X is held at virtual ground, and with $\lambda = 0$ that is perfect.

**Common mistake.** Misreading $M_2$ as a PMOS or as a common-source device. Its drain is at $V_{DD}$, its gate at the output and its source at X: it is an NMOS source follower that feeds the output voltage back to X.
