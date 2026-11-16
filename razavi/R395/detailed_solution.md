# Detailed solution - R395

**Approach.** Identify the feedback topology: $M_1$ is a common-source amplifier from node N to the output, and the source follower $M_2$ senses the output voltage and returns a current to N (shunt–shunt, i.e. voltage–current, feedback). With ideal current sources and $\lambda = 0$, the output node has infinite resistance, so the loop gain is infinite. That makes N a virtual ground, which gives $Z_{in}$ and the gain at once; the output impedance is found as the limit $R_{out,open}/(1 + T)$ and checked by direct KCL.

### Step 1 — The circuit and its small-signal model

Reading the figure:

- $V_{in}$ drives node N through $R_S$; $Z_{in}$ is the impedance looking into N (to the right of $R_S$).
- Node N connects to the gate of $M_1$, the source of $M_2$, and an ideal current source $I_1$ to ground.
- $M_1$ (NMOS): source grounded, drain = $V_{out}$, loaded by an ideal current source $I_1$ from $V_{DD}$.
- $M_2$ (NMOS): drain at $V_{DD}$, gate at $V_{out}$, source at N: a source follower from the output back to N.

**Small-signal model in words.** Nodes: in, N and out.

- $R_S$ between in and N.
- $M_2$: a controlled current $g_{m2}(v_{out} - v_N)$ from $V_{DD}$ (AC ground) into N.
- $M_1$: a controlled current $g_{m1}v_N$ from out to ground.
- Both current sources $I_1$: open circuits. No $r_O$ ($\lambda = 0$), no body effect ($\gamma = 0$). The gates draw no current.

Here $g_{m1}$ and $g_{m2}$ are the transconductances.

<!-- diagram: diagram-01.cir -->

### Step 2 — Feedback topology and loop gain

**Topology.** The feedback network ($M_2$) senses the output *voltage* (its gate is connected in shunt with the output) and returns a *current* to the input node N (its source is connected in shunt with N). This is **shunt–shunt (voltage–current) feedback**.

**Sign.** If $v_N$ rises, $M_1$ draws more current and $v_{out}$ falls; the follower $M_2$ then pulls N back down. The feedback is negative.

**Loop gain.** Break the loop at the gate of $M_2$ (exact, since a gate draws no current) and apply $v_t$ there, with $V_{in} = 0$. The follower produces some nonzero $v_N$ proportional to $v_t$. $M_1$ converts it into a current $g_{m1}v_N$, which must flow into the output node. That node is connected only to the ideal current source (infinite impedance), the drain of $M_1$ ($\lambda = 0$) and the gate of $M_2$. Its open-loop resistance $R_{out,open}$ is therefore infinite, and so is the returned voltage:

$$T \to \infty .$$

To handle the limits cleanly, we can imagine a large resistance $R_L$ from the output to ground, so that $R_{out,open} = R_L$, and let $R_L \to \infty$ at the end.

### Step 3 — Input impedance: a virtual ground

**Feedback view.** Shunt feedback at the input lowers the input impedance by $1 + T$. With the loop open (gate of $M_2$ at AC ground), the impedance looking into N is the source of $M_2$, $1/g_{m2}$. With the input driven by a current, the loop gain is $T' = g_{m1}R_L$ (the unloaded follower has unity gain). So

$$Z_{in} = \frac{1/g_{m2}}{1 + g_{m1}R_L} \;\xrightarrow{R_L\to\infty}\; 0 .$$

**Direct check by KCL.** Inject a test current $i_x$ into N.

- KCL at the output (with $R_L \to \infty$): the only small-signal current at that node is $M_1$'s, so $g_{m1}v_N = 0$, i.e. $v_N = 0$.
- KCL at N: $i_x + g_{m2}(v_{out} - v_N) = 0$, so $v_{out} = -i_x/g_{m2}$.

Node N stays at AC ground for any injected current; $M_2$ absorbs the current while the output moves:

$$Z_{in} = \frac{v_N}{i_x} = 0 .$$

N is a **virtual ground**. (If $R_S$ is included, the impedance seen by the source $V_{in}$ is simply $R_S$.)

### Step 4 — Voltage gain

Because N is a virtual ground, the current entering it through $R_S$ is

$$i_{in} = \frac{V_{in} - 0}{R_S} = \frac{V_{in}}{R_S}.$$

This current cannot flow into the gate of $M_1$ or into the ideal current source, so $M_2$ must remove it. KCL at N:

$$
\begin{aligned}
\frac{V_{in}}{R_S} + g_{m2}(V_{out} - 0) &= 0\\
\frac{V_{out}}{V_{in}} &= -\frac{1}{g_{m2}R_S}.
\end{aligned}
$$

In feedback language: the closed-loop transimpedance $V_{out}/i_{in}$ tends to $-1/\beta$, where $\beta = g_{m2}$ is the current returned to N per volt of output; then $V_{out}/V_{in} = (-1/g_{m2})(1/R_S)$.

### Step 5 — Output impedance

**Direct calculation.** Set $V_{in} = 0$, so $R_S$ connects N to ground, and apply a test voltage $v_X$ at the output, supplying a current $I_X$.

*Follower $M_2$.* KCL at N: the current $M_2$ delivers into N leaves through $R_S$:

$$
\begin{aligned}
g_{m2}(v_X - v_N) &= \frac{v_N}{R_S}\\
v_N &= \frac{g_{m2}R_S}{1 + g_{m2}R_S}\,v_X .
\end{aligned}
$$

*Output node.* The test current can only flow into $M_1$ (the current source is ideal and the gate of $M_2$ draws nothing):

$$I_X = g_{m1}v_N = \frac{g_{m1}g_{m2}R_S}{1 + g_{m2}R_S}\,v_X .$$

$$Z_{out} = \frac{v_X}{I_X} = \frac{1 + g_{m2}R_S}{g_{m1}g_{m2}R_S} = \frac{1}{g_{m1}} + \frac{1}{g_{m1}g_{m2}R_S}.$$

**Feedback view.** With the finite $R_L$, the open-loop output resistance is $R_L$ and the loop gain (input source zeroed, N loaded by $R_S$) is $T = g_{m1}R_L\,g_{m2}R_S/(1 + g_{m2}R_S)$. Shunt sensing at the output divides the resistance by $1 + T$:

$$Z_{out} = \frac{R_L}{1 + g_{m1}R_L\dfrac{g_{m2}R_S}{1 + g_{m2}R_S}} \;\xrightarrow{R_L\to\infty}\; \frac{1 + g_{m2}R_S}{g_{m1}g_{m2}R_S},$$

the same result. Although $T \to \infty$, $Z_{out}$ stays finite, because $R_{out,open}$ grows at the same rate.

### Result

$$Z_{in} = 0\ (\text{virtual ground}), \qquad Z_{out} = \frac{1 + g_{m2}R_S}{g_{m1}g_{m2}R_S} = \frac{1}{g_{m1}} + \frac{1}{g_{m1}g_{m2}R_S}, \qquad \frac{V_{out}}{V_{in}} = -\frac{1}{g_{m2}R_S}.$$

The circuit is a shunt–shunt feedback amplifier with infinite loop gain ($\lambda = 0$, ideal current sources). N is held at AC ground, the input current $V_{in}/R_S$ is absorbed by the follower $M_2$, and the output impedance is $R_{out,open}/(1 + T)$ in the limit of infinite $R_{out,open}$.

**Common mistake.** Reporting a positive gain. Current flowing into the virtual ground from $V_{in}$ must be pulled out by $M_2$, which requires $V_{out}$ to go *below* N: the gain is $-1/(g_{m2}R_S)$.

**Common mistake.** Giving $Z_{in} = 1/g_{m2}$ (the impedance looking into the follower's source) or another finite value. That is the *open-loop* input impedance; the infinite loop gain divides it down to zero.

**Common mistake.** Concluding that the output impedance is infinite (ideal current-source load, $\lambda = 0$), or that feedback raises it. Voltage sensing at the output lowers the impedance; the result is finite, $1/g_{m1} + 1/(g_{m1}g_{m2}R_S)$. Also note that $M_2$ is an NMOS source follower (gate at the output, source at N), not a common-gate device.
