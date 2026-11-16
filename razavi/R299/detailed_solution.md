# Detailed solution - R299

**Approach.** With the ideal current sources open, KCL at the output gives $v_{out}$ in terms of $v_X$, and KCL at X gives the input current, hence $Z_{in}$. The transfer function follows from the divider formed by $R_S$ and $Z_{in}$. The input resistance is *negative*, because the loop through the two transistors is positive feedback.

### Step 1 — Small-signal model

Call the input node (right of $R_S$) X. $M_1$ is a common-source stage from X to the output; $M_2$, with its source at $V_{DD}$, gate at the output and drain at X, is a second common-source stage from the output back to X. The loop inverts twice: **positive feedback**. With $V_{DD}$ at ac ground and $I_1$, $I_2$ open:

- **$M_1$:** a current $g_{m1}v_X$ from the output to ground, with $r_{O1}$ from the output to ground.
- **$M_2$:** $v_{gs2} = v_{out}$, so a current $g_{m2}v_{out}$ flows **from X to ac ground**, with $r_{O2}$ from X to ac ground.

<!-- diagram: diagram-01.cir -->

Let $i_{in}$ be the current entering X through $R_S$.

### Step 2 — KCL at the output node

$I_1$ is open and the gate of $M_2$ draws no current, so

$$g_{m1}v_X + \frac{v_{out}}{r_{O1}} = 0 \quad\Longrightarrow\quad v_{out} = -g_{m1}r_{O1}\,v_X ,$$

the CS gain of $M_1$ with load $r_{O1}$.

### Step 3 — KCL at node X and the input impedance

$i_{in}$ leaves X through $M_2$'s controlled source and $r_{O2}$ ($I_2$ and the gate of $M_1$ carry no signal current):

$$i_{in} = g_{m2}v_{out} + \frac{v_X}{r_{O2}} .$$

Substitute $v_{out}$ from Step 2:

$$
\begin{aligned}
i_{in} &= g_{m2}(-g_{m1}r_{O1}v_X) + \frac{v_X}{r_{O2}}\\
&= v_X\left(\frac{1}{r_{O2}} - g_{m1}g_{m2}r_{O1}\right)\\
&= v_X\,\frac{1 - g_{m1}r_{O1}g_{m2}r_{O2}}{r_{O2}},
\end{aligned}
$$

$$Z_{in} = \frac{v_X}{i_{in}} = \frac{r_{O2}}{1 - g_{m1}r_{O1}g_{m2}r_{O2}} .$$

**Sign.** The loop gain $L = g_{m1}r_{O1}\,g_{m2}r_{O2}$ is a product of two intrinsic gains (each typically 10–100), so $L\gg1$ and

$$Z_{in}\approx -\frac{r_{O2}}{g_{m1}r_{O1}g_{m2}r_{O2}} = -\frac{1}{g_{m1}g_{m2}r_{O1}} ,$$

a **negative resistance** of small magnitude: when $v_X$ rises, $M_1$ pulls the output (the gate of $M_2$) down, and $M_2$ pushes *more* current into X.

### Step 4 — Transfer function

$R_S$ and $Z_{in}$ divide $V_{in}$ onto X:

$$v_X = V_{in}\,\frac{Z_{in}}{Z_{in} + R_S}, \qquad v_{out} = -g_{m1}r_{O1}\,v_X .$$

With $Z_{in} = r_{O2}/(1 - L)$, multiplying numerator and denominator by $(1 - L)$:

$$\frac{Z_{in}}{Z_{in} + R_S} = \frac{r_{O2}}{r_{O2} + R_S(1 - L)} = \frac{r_{O2}}{R_S + r_{O2} - g_{m1}g_{m2}r_{O1}r_{O2}R_S},$$

$$\frac{V_{out}}{V_{in}} = \frac{-g_{m1}r_{O1}r_{O2}}{R_S + r_{O2} - g_{m1}g_{m2}r_{O1}r_{O2}R_S} .$$

If $L\gg1$ and also $g_{m1}g_{m2}r_{O1}R_S\gg1$ (i.e. $R_S\gg|Z_{in}|$), the last term of the denominator dominates:

$$\frac{V_{out}}{V_{in}}\approx\frac{-g_{m1}r_{O1}r_{O2}}{-g_{m1}g_{m2}r_{O1}r_{O2}R_S} = +\frac{1}{g_{m2}R_S}.$$

### Step 5 — A remark on stability

The total conductance from X to ac ground is $1/R_S + 1/Z_{in} = 1/R_S + 1/r_{O2} - g_{m1}g_{m2}r_{O1}$. When $R_S > |Z_{in}|$, the normal situation since $|Z_{in}|$ is tiny, it is **negative**, so any capacitance at X gives a right-half-plane pole and the two inverters **latch** (a bistable loop, like an SRAM cell). The formulas above are then formal small-signal results at a bias point the circuit cannot hold. This is also why the gain in Step 4 changes sign: its denominator becomes negative exactly when $R_S > |Z_{in}|$.

### Result

$$Z_{in} = \frac{r_{O2}}{1 - g_{m1}r_{O1}g_{m2}r_{O2}}\approx -\frac{1}{g_{m1}g_{m2}r_{O1}}\quad\text{(a negative resistance)},$$

$$\frac{V_{out}}{V_{in}} = -g_{m1}r_{O1}\,\frac{Z_{in}}{Z_{in} + R_S} = \frac{-g_{m1}r_{O1}r_{O2}}{R_S + r_{O2} - g_{m1}g_{m2}r_{O1}r_{O2}R_S}\ \left(\approx +\frac{1}{g_{m2}R_S}\ \text{for large loop gain and } R_S\gg|Z_{in}|\right).$$

The two inverting CS stages form a positive-feedback loop, so the input resistance is negative; with $R_S > |Z_{in}|$ the circuit is unstable (it latches) and these are formal small-signal results.

**Common mistake.** Treating $M_2$ as a source follower. It is a PMOS with its *source* at $V_{DD}$ and *drain* at X, i.e. a common-source amplifier, which turns the loop into positive feedback and makes $Z_{in}$ negative rather than near zero.

**Common mistake.** Quoting a positive $Z_{in}$ such as $r_{O2}$ or $1/g_{m2}$. $r_{O2}$ is the resistance at X only with $M_2$'s gate held fixed; here the gate is driven by $M_1$ with gain $-g_{m1}r_{O1}$, which adds the large negative conductance $-g_{m1}g_{m2}r_{O1}$.

**Common mistake.** Ignoring $\lambda$ and concluding $Z_{in} = 0$ or $\infty$. With $\lambda = 0$ the output node would have no resistive path and $M_1$'s gain would be infinite; the finite $r_{O1}$, $r_{O2}$ set $Z_{in}$ here.
