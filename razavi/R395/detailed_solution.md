# Detailed solution - R395

**Approach.** $M_1$ is a common-source amplifier from the gate node N to the output, and the source follower $M_2$ senses the output voltage and returns a current to N: shunt–shunt (voltage–current) feedback. With ideal current sources and $\lambda = 0$ the output node has infinite resistance, so the loop gain is infinite and N is a virtual ground, which gives $Z_{in}$ and the gain at once; $Z_{out}$ follows as the limit of $R_{out,open}/(1 + T)$, checked by direct KCL.

### Step 1 — Small-signal model

Call the node to the right of $R_S$ (gate of $M_1$, source of $M_2$) N. Then:

- $R_S$ between in and N;
- $M_2$: $g_{m2}(v_{out} - v_N)$ from $V_{DD}$ (ac ground) into N;
- $M_1$: $g_{m1}v_N$ from out to ground;
- both current sources $I_1$ are open circuits; no $r_O$, no body effect, no gate currents.

<!-- diagram: diagram-01.cir -->

### Step 2 — Feedback topology and loop gain

$M_2$'s gate senses the output *voltage* and its source returns a *current* to N: **shunt–shunt feedback**. It is negative: a rise of $v_N$ makes $M_1$ pull $v_{out}$ down, and the follower pulls N back down.

Break the loop at the gate of $M_2$ (exact, since a gate draws no current) with $V_{in} = 0$. The follower produces a nonzero $v_N$, and $M_1$ turns it into $g_{m1}v_N$, which must flow into the output node. That node sees only the ideal current source, the drain of $M_1$ ($\lambda = 0$) and the gate of $M_2$, so $R_{out,open}$ is infinite and

$$T \to \infty .$$

To handle the limits, imagine a large resistance $R_L$ from the output to ground ($R_{out,open} = R_L$) and let $R_L \to \infty$ at the end.

### Step 3 — Input impedance: a virtual ground

**Feedback view.** With the loop open, the impedance into N is the source of $M_2$, $1/g_{m2}$; with a current drive the loop gain is $T' = g_{m1}R_L$ (the unloaded follower has unity gain). Shunt feedback at the input gives

$$Z_{in} = \frac{1/g_{m2}}{1 + g_{m1}R_L} \;\xrightarrow{R_L\to\infty}\; 0 .$$

**Direct check.** Inject $i_x$ into N. KCL at the output ($R_L \to \infty$) leaves only $M_1$'s current, so $g_{m1}v_N = 0$, i.e. $v_N = 0$; KCL at N gives $i_x + g_{m2}(v_{out} - v_N) = 0$, so $v_{out} = -i_x/g_{m2}$. N stays at ac ground while $M_2$ absorbs the current:

$$Z_{in} = \frac{v_N}{i_x} = 0 .$$

N is a **virtual ground**; the impedance seen by $V_{in}$ is simply $R_S$.

### Step 4 — Voltage gain

The current entering the virtual ground through $R_S$ is $V_{in}/R_S$, and only $M_2$ can remove it. KCL at N:

$$
\begin{aligned}
\frac{V_{in}}{R_S} + g_{m2}(V_{out} - 0) &= 0\\
\frac{V_{out}}{V_{in}} &= -\frac{1}{g_{m2}R_S}.
\end{aligned}
$$

In feedback terms, the closed-loop transimpedance tends to $-1/\beta$ with $\beta = g_{m2}$ (current returned per volt of output), and $V_{out}/V_{in} = (-1/g_{m2})(1/R_S)$.

### Step 5 — Output impedance

**Direct calculation.** With $V_{in} = 0$ ($R_S$ from N to ground) and a test voltage $v_X$ at the output, KCL at N gives the follower output:

$$
\begin{aligned}
g_{m2}(v_X - v_N) &= \frac{v_N}{R_S}\\
v_N &= \frac{g_{m2}R_S}{1 + g_{m2}R_S}\,v_X .
\end{aligned}
$$

The test current can only flow into $M_1$:

$$I_X = g_{m1}v_N = \frac{g_{m1}g_{m2}R_S}{1 + g_{m2}R_S}\,v_X ,$$

$$Z_{out} = \frac{v_X}{I_X} = \frac{1 + g_{m2}R_S}{g_{m1}g_{m2}R_S} = \frac{1}{g_{m1}} + \frac{1}{g_{m1}g_{m2}R_S}.$$

**Feedback view.** With $R_L$, the open-loop output resistance is $R_L$ and the loop gain (N loaded by $R_S$) is $T = g_{m1}R_L\,g_{m2}R_S/(1 + g_{m2}R_S)$, so

$$Z_{out} = \frac{R_L}{1 + g_{m1}R_L\dfrac{g_{m2}R_S}{1 + g_{m2}R_S}} \;\xrightarrow{R_L\to\infty}\; \frac{1 + g_{m2}R_S}{g_{m1}g_{m2}R_S},$$

the same result: $Z_{out}$ stays finite because $R_{out,open}$ grows at the same rate as $T$.

### Result

$$Z_{in} = 0\ (\text{virtual ground}), \qquad Z_{out} = \frac{1 + g_{m2}R_S}{g_{m1}g_{m2}R_S} = \frac{1}{g_{m1}} + \frac{1}{g_{m1}g_{m2}R_S}, \qquad \frac{V_{out}}{V_{in}} = -\frac{1}{g_{m2}R_S}.$$

The circuit is a shunt–shunt feedback amplifier with infinite loop gain ($\lambda = 0$, ideal current sources). N is held at ac ground, the input current $V_{in}/R_S$ is absorbed by the follower $M_2$, and the output impedance is $R_{out,open}/(1 + T)$ in the limit of infinite $R_{out,open}$.

**Common mistake.** Reporting a positive gain. To pull the input current out of the virtual ground, $M_2$ needs $V_{out}$ *below* N: the gain is $-1/(g_{m2}R_S)$.

**Common mistake.** Giving $Z_{in} = 1/g_{m2}$. That is the *open-loop* value; the infinite loop gain divides it down to zero.

**Common mistake.** Concluding that the output impedance is infinite, or that feedback raises it. Voltage sensing lowers it to $1/g_{m1} + 1/(g_{m1}g_{m2}R_S)$. Note also that $M_2$ is a source follower (gate at the output, source at N), not a common-gate device.
