# Detailed solution - R300

**Approach.** With $\lambda = \gamma = 0$ each transistor is a plain controlled current source, and the ideal current sources are open circuits. Write KCL at the output and at X. The output has no resistive path, so all of $M_1$'s signal current must come through $M_2$ from X, which makes X look like a diode-connected $M_1$. The transfer function follows from the divider $R_S$–$Z_{in}$ and the gain from X to the output.

### Step 1 — Small-signal model

Call the input node (right of $R_S$) X. $M_2$ has its gate at the fixed bias $V_b$, source at the output and drain at X, so it is a **common-gate** device passing current between the output and X. With $V_{DD}$ and $V_b$ at ac ground and $I_1$, $I_2$ open:

- **$M_1$:** a current $g_{m1}v_X$ from the output to ground.
- **$M_2$:** $v_{gs2} = 0 - v_{out}$, so the drain-to-source current from X to the output is $-g_{m2}v_{out}$; equivalently, **$M_2$ carries $g_{m2}v_{out}$ from the output to X** (a rising output increases its source–gate voltage).

<!-- diagram: diagram-01.cir -->

Let $i_{in}$ be the current entering X through $R_S$.

### Step 2 — KCL at the output node

$g_{m1}v_X$ leaves through $M_1$ and $g_{m2}v_{out}$ through $M_2$; $I_1$ carries no signal current:

$$g_{m1}v_X + g_{m2}v_{out} = 0 \quad\Longrightarrow\quad v_{out} = -\frac{g_{m1}}{g_{m2}}\,v_X ,$$

the gain of the CS stage $M_1$ loaded by the input resistance $1/g_{m2}$ of the common-gate device $M_2$.

### Step 3 — KCL at node X and the input impedance

$i_{in}$ and $g_{m2}v_{out}$ enter X; $I_2$ and the gate of $M_1$ carry no signal current. With $g_{m2}v_{out} = -g_{m1}v_X$ from Step 2:

$$
\begin{aligned}
i_{in} + g_{m2}v_{out} &= 0\\
i_{in} - g_{m1}v_X &= 0\\
i_{in} &= g_{m1}v_X ,
\end{aligned}
$$

$$Z_{in} = \frac{v_X}{i_{in}} = \frac{1}{g_{m1}} .$$

$M_1$'s signal current $g_{m1}v_X$ can only come from $M_2$, which takes it from X, so X behaves like a **diode-connected** $M_1$ (through $M_2$) and $g_{m2}$ does not appear.

### Step 4 — Transfer function

$R_S$ in series with $Z_{in} = 1/g_{m1}$:

$$
\begin{aligned}
v_X &= V_{in}\,\frac{Z_{in}}{Z_{in} + R_S} = V_{in}\,\frac{1/g_{m1}}{1/g_{m1} + R_S}\\
&= \frac{V_{in}}{1 + g_{m1}R_S}.
\end{aligned}
$$

With $v_{out} = -(g_{m1}/g_{m2})\,v_X$ from Step 2:

$$\frac{V_{out}}{V_{in}} = -\frac{g_{m1}}{g_{m2}}\cdot\frac{1}{1 + g_{m1}R_S} = -\frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)} .$$

**Check via currents.** $i_{in} = V_{in}/(R_S + 1/g_{m1}) = g_{m1}V_{in}/(1 + g_{m1}R_S)$ leaves through $M_2$, so $g_{m2}v_{out} = -i_{in}$, the same result. For $g_{m1}R_S\gg1$ the gain approaches $-1/(g_{m2}R_S)$: the input current $V_{in}/R_S$ is converted into a voltage through $1/g_{m2}$.

### Result

$$Z_{in} = \frac{1}{g_{m1}}, \qquad \frac{V_{out}}{V_{in}} = -\frac{g_{m1}}{g_{m2}\,(1 + g_{m1}R_S)} .$$

$M_2$ is a common-gate PMOS that carries $g_{m2}v_{out}$ from the output to X. Because $I_1$ is ideal, all of $M_1$'s signal current $g_{m1}v_X$ returns to X through $M_2$, so X looks like a diode-connected $M_1$.

**Common mistake.** Taking $Z_{in} = 1/g_{m2}$, the impedance looking into the *source* of $M_2$. X is at the *drain* of $M_2$, where the impedance is set by the current $M_1$ demands, $g_{m1}v_X$.

**Common mistake.** Reversing $M_2$'s current. With its gate at ac ground, a rising source (the output) *increases* the current from the output down to X; the other direction gives the wrong sign, $+g_{m1}/[g_{m2}(1 + g_{m1}R_S)]$.

**Common mistake.** Quoting $-g_{m1}/g_{m2}$, the gain from X to the output, as the overall gain. Since $Z_{in} = 1/g_{m1}$ is low, $R_S$ attenuates the input by $1 + g_{m1}R_S$.
