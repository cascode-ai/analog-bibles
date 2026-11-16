# Detailed solution - R299

**Approach.** Replace $M_1$ and $M_2$ by their small-signal models (controlled current source plus $r_O$) and the ideal current sources by open circuits. KCL at the output gives $v_{out}$ in terms of $v_X$; KCL at X then gives the input current, hence $Z_{in}$. The transfer function follows from the voltage divider formed by $R_S$ and $Z_{in}$. The result is a *negative* input resistance, because the loop through the two transistors is positive feedback.

### Step 1 — Reading the circuit

From the figure:

- $V_{in}$ drives node **X** through $R_S$; $Z_{in}$ is the impedance looking into X.
- Node X is the **gate of $M_1$**, the **drain of $M_2$**, and the top of the ideal current source $I_2$ (to ground).
- $M_1$ (NMOS) has its source grounded and its drain at the output, which is loaded by the ideal current source $I_1$. It is a common-source stage from X to the output.
- $M_2$ (PMOS) has its **source at $V_{DD}$**, its **gate at the output** and its **drain at X**. It is a second common-source stage, from the output back to X.

Both stages invert, so going around the loop X → output → X the signal is inverted twice. This is **positive feedback**. (Compare with an NMOS follower in place of $M_2$, which would give negative feedback.)

### Step 2 — Small-signal model

- $V_{DD}$ is an ac ground; $I_1$ and $I_2$ are open circuits.
- **$M_1$:** current $g_{m1}v_X$ from the output to ground, with $r_{O1}$ from the output to ground.
- **$M_2$:** a PMOS has the same small-signal model as an NMOS: a current $g_{m2}v_{gs2}$ from drain to source. Its source is at ac ground and its gate at the output, so $v_{gs2} = v_{out}$, and the current $g_{m2}v_{out}$ flows **from X to ac ground**. $r_{O2}$ connects X to ac ground.

<!-- diagram: diagram-01.cir -->

Let $i_{in}$ be the current entering X through $R_S$.

### Step 3 — KCL at the output node

At the output the elements are the drain of $M_1$ (with $r_{O1}$), the open current source $I_1$, and the gate of $M_2$ (no current). Sum of currents leaving the node:

$$g_{m1}v_X + \frac{v_{out}}{r_{O1}} = 0 .$$

Solve:

$$v_{out} = -g_{m1}r_{O1}\,v_X .$$

This is the usual CS gain of $M_1$ with load $r_{O1}$.

### Step 4 — KCL at node X and the input impedance

At X, $i_{in}$ comes in through $R_S$, and it leaves through $M_2$'s controlled source ($g_{m2}v_{out}$) and through $r_{O2}$ ($v_X/r_{O2}$). $I_2$ and the gate of $M_1$ carry no signal current:

$$i_{in} = g_{m2}v_{out} + \frac{v_X}{r_{O2}} .$$

Substitute $v_{out}$ from Step 3:

$$
\begin{aligned}
i_{in} &= g_{m2}(-g_{m1}r_{O1}v_X) + \frac{v_X}{r_{O2}}\\
&= v_X\left(\frac{1}{r_{O2}} - g_{m1}g_{m2}r_{O1}\right)\\
&= v_X\,\frac{1 - g_{m1}r_{O1}g_{m2}r_{O2}}{r_{O2}}.
\end{aligned}
$$

So

$$Z_{in} = \frac{v_X}{i_{in}} = \frac{r_{O2}}{1 - g_{m1}r_{O1}g_{m2}r_{O2}} .$$

**Sign.** Let $L = g_{m1}r_{O1}\,g_{m2}r_{O2}$, the product of two intrinsic gains (each typically 10–100). Then $L\gg1$, and

$$Z_{in}\approx -\frac{r_{O2}}{g_{m1}r_{O1}g_{m2}r_{O2}} = -\frac{1}{g_{m1}g_{m2}r_{O1}} .$$

This is a **negative resistance** of small magnitude.

**Physical picture.** Raise $v_X$ a little. $M_1$ conducts more and pulls the output down by $g_{m1}r_{O1}v_X$. The output is $M_2$'s gate, so $M_2$ now has a *larger* source–gate voltage and pushes *more* current into X. The circuit therefore *supplies* current to X when X rises, the opposite of what a resistor does, which is the signature of a negative resistance.

### Step 5 — Transfer function

$R_S$ and $Z_{in}$ form a voltage divider from $V_{in}$ to X:

$$v_X = V_{in}\,\frac{Z_{in}}{Z_{in} + R_S}, \qquad v_{out} = -g_{m1}r_{O1}\,v_X .$$

Evaluate the divider with $Z_{in} = r_{O2}/(1 - L)$. Multiply numerator and denominator by $(1 - L)$:

$$\frac{Z_{in}}{Z_{in} + R_S} = \frac{r_{O2}}{r_{O2} + R_S(1 - L)} = \frac{r_{O2}}{R_S + r_{O2} - g_{m1}g_{m2}r_{O1}r_{O2}R_S}.$$

Therefore

$$\frac{V_{out}}{V_{in}} = \frac{-g_{m1}r_{O1}r_{O2}}{R_S + r_{O2} - g_{m1}g_{m2}r_{O1}r_{O2}R_S} .$$

**Approximation.** If $L\gg1$ and also $g_{m1}g_{m2}r_{O1}R_S\gg1$ (i.e. $R_S\gg|Z_{in}|$), the last term of the denominator dominates:

$$\frac{V_{out}}{V_{in}}\approx\frac{-g_{m1}r_{O1}r_{O2}}{-g_{m1}g_{m2}r_{O1}r_{O2}R_S} = +\frac{1}{g_{m2}R_S}.$$

### Step 6 — A remark on stability

The total conductance from X to ac ground is $1/R_S + 1/Z_{in} = 1/R_S + 1/r_{O2} - g_{m1}g_{m2}r_{O1}$. When $R_S > |Z_{in}|$, which is the normal situation because $|Z_{in}|$ is tiny, this total conductance is **negative**. Any capacitance at X then produces a pole in the right half plane: a small disturbance grows exponentially and the circuit **latches** (the two inverters form a bistable loop, like a latch or SRAM cell). The formulas above are the formal small-signal results at the given bias point; in practice the circuit cannot sit at that point when $R_S > |Z_{in}|$. This is also why the gain changes sign in Step 5: the denominator becomes negative exactly when $R_S > |Z_{in}|$.

### Result

$$Z_{in} = \frac{r_{O2}}{1 - g_{m1}r_{O1}g_{m2}r_{O2}}\approx -\frac{1}{g_{m1}g_{m2}r_{O1}}\quad\text{(a negative resistance)},$$

$$\frac{V_{out}}{V_{in}} = -g_{m1}r_{O1}\,\frac{Z_{in}}{Z_{in} + R_S} = \frac{-g_{m1}r_{O1}r_{O2}}{R_S + r_{O2} - g_{m1}g_{m2}r_{O1}r_{O2}R_S}\ \left(\approx +\frac{1}{g_{m2}R_S}\ \text{for large loop gain and } R_S\gg|Z_{in}|\right).$$

The two inverting CS stages form a positive-feedback loop, so the input resistance is negative; with $R_S > |Z_{in}|$ the circuit is unstable (it latches) and these are formal small-signal results.

**Common mistake.** Treating $M_2$ as a source follower (as for an NMOS with its source at X). Here $M_2$ is a PMOS whose *source* is at $V_{DD}$ and whose *drain* is at X, so it is a common-source amplifier. That turns the loop into positive feedback and makes $Z_{in}$ negative, rather than near zero.

**Common mistake.** Quoting a positive $Z_{in}$ such as $r_{O2}$ or $1/g_{m2}$. $r_{O2}$ is only the resistance at X when $M_2$'s gate is held fixed; here the gate is driven by $M_1$ with gain $-g_{m1}r_{O1}$, which adds the large negative conductance $-g_{m1}g_{m2}r_{O1}$.

**Common mistake.** Ignoring $\lambda$ and concluding $Z_{in} = 0$ or $\infty$. With $\lambda = 0$ the output node would have no resistive path and the gain of $M_1$ would be infinite; the finite $r_{O1}$, $r_{O2}$ are what set the value of $Z_{in}$ here.
