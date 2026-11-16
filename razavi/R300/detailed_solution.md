# Detailed solution - R300

**Approach.** With $\lambda = \gamma = 0$, each transistor is just a voltage-controlled current source, and the ideal current sources are open circuits. Write KCL at the output node and at node X. The output node has no resistive path, so all of $M_1$'s signal current must come through $M_2$ from node X; this makes X look like a diode-connected $M_1$. The transfer function then follows from the divider $R_S$–$Z_{in}$ and the gain from X to the output.

### Step 1 — Reading the circuit

From the figure:

- $V_{in}$ drives node **X** through $R_S$; $Z_{in}$ is the impedance looking into X.
- Node X is the **gate of $M_1$**, the **drain of $M_2$**, and the top of the ideal current source $I_2$ (to ground).
- $M_1$ (NMOS): source grounded, drain at the **output**. The output is fed by the ideal current source $I_1$ from $V_{DD}$.
- $M_2$ (PMOS): **source at the output**, **gate at the fixed bias $V_b$**, **drain at X**. With its gate at a fixed voltage and the signal at its source, $M_2$ is a **common-gate** device that passes current from the output node to X.

### Step 2 — Small-signal model

- $V_{DD}$ and $V_b$ are ac grounds; $I_1$ and $I_2$ are open circuits; no $r_O$, no body effect.
- **$M_1$:** current $g_{m1}v_X$ from the output to ground.
- **$M_2$:** drain-to-source current $g_{m2}v_{gs2}$ with $v_{gs2} = v_G - v_S = 0 - v_{out}$. So the current from X (drain) to the output (source) is $-g_{m2}v_{out}$; equivalently, **$M_2$ carries $g_{m2}v_{out}$ from the output to X**. Physically, if the output rises, $M_2$'s source–gate voltage grows and it passes more current from the output down to X.

<!-- diagram: diagram-01.cir -->

Let $i_{in}$ be the current entering X through $R_S$.

### Step 3 — KCL at the output node

Currents leaving the output node: $g_{m1}v_X$ through $M_1$ and $g_{m2}v_{out}$ through $M_2$. $I_1$ carries no signal current. So

$$g_{m1}v_X + g_{m2}v_{out} = 0 ,$$

$$v_{out} = -\frac{g_{m1}}{g_{m2}}\,v_X .$$

The output node has no resistor to ground, so its voltage settles where $M_2$ supplies exactly the current that $M_1$ draws. The gain from X to the output is that of a CS stage $M_1$ loaded by the input resistance $1/g_{m2}$ of the common-gate device $M_2$.

### Step 4 — KCL at node X and the input impedance

Currents entering X: $i_{in}$ through $R_S$ and $g_{m2}v_{out}$ from $M_2$. $I_2$ and the gate of $M_1$ carry no signal current. So

$$i_{in} + g_{m2}v_{out} = 0 .$$

Substitute $g_{m2}v_{out} = -g_{m1}v_X$ from Step 3:

$$
\begin{aligned}
i_{in} - g_{m1}v_X &= 0\\
i_{in} &= g_{m1}v_X .
\end{aligned}
$$

Hence

$$Z_{in} = \frac{v_X}{i_{in}} = \frac{1}{g_{m1}} .$$

**Interpretation.** Follow the signal current. $M_1$ draws $g_{m1}v_X$ from the output node. With $I_1$ ideal, that current can only come from $M_2$, which in turn takes it from X. So the input current is exactly $M_1$'s signal current: X behaves as if $M_1$ were **diode-connected** (gate and drain shorted), through the common-gate device $M_2$. That is why $Z_{in} = 1/g_{m1}$ and $g_{m2}$ does not appear.

### Step 5 — Transfer function

**Divider at the input.** $R_S$ in series with $Z_{in} = 1/g_{m1}$:

$$
\begin{aligned}
v_X &= V_{in}\,\frac{Z_{in}}{Z_{in} + R_S} = V_{in}\,\frac{1/g_{m1}}{1/g_{m1} + R_S}\\
&= \frac{V_{in}}{1 + g_{m1}R_S}.
\end{aligned}
$$

**Gain from X to the output** (Step 3): $v_{out} = -(g_{m1}/g_{m2})\,v_X$. Combine:

$$\frac{V_{out}}{V_{in}} = -\frac{g_{m1}}{g_{m2}}\cdot\frac{1}{1 + g_{m1}R_S} = -\frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)} .$$

**Check via currents.** $i_{in} = V_{in}/(R_S + 1/g_{m1}) = g_{m1}V_{in}/(1 + g_{m1}R_S)$ flows into X and out through $M_2$, so $g_{m2}v_{out} = -i_{in}$, giving the same result. For $g_{m1}R_S\gg1$ the gain approaches $-1/(g_{m2}R_S)$: the circuit converts the input current $V_{in}/R_S$ into a voltage through $1/g_{m2}$.

### Result

$$Z_{in} = \frac{1}{g_{m1}}, \qquad \frac{V_{out}}{V_{in}} = -\frac{g_{m1}}{g_{m2}\,(1 + g_{m1}R_S)} .$$

$M_2$ is a common-gate PMOS that carries $g_{m2}v_{out}$ from the output to X. Because $I_1$ is ideal, all of $M_1$'s signal current $g_{m1}v_X$ returns to X through $M_2$, so X looks like a diode-connected $M_1$.

**Common mistake.** Taking $Z_{in} = 1/g_{m2}$, the impedance looking into the *source* of $M_2$. X is connected to the *drain* of $M_2$; the impedance there is set by the current that $M_1$ demands, which is $g_{m1}v_X$.

**Common mistake.** Getting the sign of the gain wrong by reversing $M_2$'s current. For a PMOS with gate at ac ground, a rise of the source (the output) *increases* the current from the output down to X. Writing it the other way round gives $+g_{m1}/[g_{m2}(1 + g_{m1}R_S)]$, which is wrong.

**Common mistake.** Forgetting the input divider and quoting $-g_{m1}/g_{m2}$ as the overall gain. That is only the gain from X to the output. Since $Z_{in} = 1/g_{m1}$ is low, $R_S$ attenuates the input by $1 + g_{m1}R_S$, so the gain depends on $R_S$.
