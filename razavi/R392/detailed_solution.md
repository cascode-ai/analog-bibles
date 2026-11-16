# Detailed solution - R392

**Approach.** Replace $R_S$ by an ideal current source and add $R_{D2}$ at the drain of $M_2$. Then apply KCL at the input node and at node Y. Because the gate of $M_1$ draws no current and the current source at Y carries a fixed current, KCL alone forces the small-signal drain current of $M_2$ to equal $-I_{in}$, independent of all transistor parameters. The transimpedance follows immediately. The same KCL, applied to the total terminal currents including noise, shows that no internal noise source can change $M_2$'s drain current, so only $R_{D2}$ contributes to the input-referred noise current.

### Step 1 — The modified circuit

Reading the figure:

- The input current $I_{in}$ is injected into the input node, which is the gate of $M_1$.
- $M_1$: common-source device, source grounded, drain = node X, load $R_D$ to $V_{DD}$.
- $M_2$: gate at X, source = node Y, drain = output (where $I_{out}$ flows in).
- $R_F$ connects Y back to the input node.
- $R_S$ (from Y to ground) is **replaced by an ideal current source** $I_B$ from Y to ground.
- A resistor $R_{D2}$ is added from $V_{DD}$ to the drain of $M_2$; the output voltage is taken there.

**Small-signal model in words.** Nodes: in, X, Y and out.

- $R_F$ between in and Y; the gate of $M_1$ draws no current.
- $M_1$: controlled current $g_{m1}V_{in}$ from X to ground; $R_D$ from X to AC ground.
- $M_2$: controlled current $g_{m2}(V_X - V_Y)$ from out (drain) to Y (source); no $r_O$ and no body effect ($\lambda = \gamma = 0$).
- The ideal current source at Y: an open circuit for small signals.
- $R_{D2}$ from out to AC ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the input node

The input node connects only to the input source, the gate of $M_1$ (no current) and $R_F$. Hence **all** of $I_{in}$ flows through $R_F$ into Y:

$$I_{R_F} = I_{in}\quad(\text{from the input node to Y}).$$

### Step 3 — KCL at node Y

Node Y connects to $R_F$, to the source of $M_2$ and to the ideal current source, whose small-signal current is zero. With $i_{d2}$ the small-signal drain current of $M_2$ (flowing from drain to source, i.e. into Y):

$$
\begin{aligned}
i_{d2} + I_{in} &= 0\\
i_{d2} &= -I_{in}.
\end{aligned}
$$

So the current gain from $I_{in}$ to $M_2$'s drain current is **exactly −1**, regardless of $g_{m1}$, $g_{m2}$, $R_D$ or $R_F$.

**How the circuit achieves this.** The loop $Y \to R_F \to M_1 \to X \to M_2 \to Y$ adjusts the node voltages until $M_2$'s current balances the current arriving through $R_F$. In feedback language this is current–current feedback with $\beta = 1$: all of the output current is sensed at Y and returned to the input. The open-loop current gain is infinite because nothing at Y can absorb the input current, so the closed-loop current gain is exactly $1/\beta = 1$ in magnitude. The finite loop gain $g_{m1}R_D$ only affects node voltages; for example, the input impedance is $Z_{in} = (R_F + 1/g_{m2})/(1 + g_{m1}R_D)$.

### Step 4 — Transimpedance

The output voltage is $V_{out} = V_{DD} - R_{D2}I_{D2}$, so for small signals

$$v_{out} = -R_{D2}\,i_{d2} = -R_{D2}(-I_{in}) = R_{D2}\,I_{in},$$

$$\frac{V_{out}}{I_{in}} = +R_{D2}.$$

The transimpedance is set entirely by $R_{D2}$, and it is exact under the stated assumptions.

### Step 5 — Input-referred noise current

The **input-referred noise current** is found with the input open: compute the output noise and divide by the square of the transimpedance.

**Which sources can reach the output?** Repeat the KCL of Steps 2–3 with the input open and with all noise sources present, using total terminal currents:

- At the input node, the total current in the $R_F$ branch (resistor plus its noise source) must be zero, because the gate draws no current and the input is open.
- At Y, the total drain-terminal current of $M_2$ (controlled part plus its noise current) plus the $R_F$ branch current must be zero, because the ideal current source carries a fixed current.

Hence $M_2$'s total drain current is zero, **whatever** the noise of $M_1$, $M_2$, $R_D$ and $R_F$. These sources only shift the node voltages: for example, $M_2$'s noise current $I_{n2}$ is cancelled by a change of $v_{gs2}$ such that $g_{m2}v_{gs2} = -I_{n2}$. None of it reaches $R_{D2}$.

**Output noise.** Only $R_{D2}$'s own noise remains. Its noise current $4kT/R_{D2}$ flows in $R_{D2}$ itself (the drain of $M_2$ is a current source of zero small-signal current, i.e. infinite impedance):

$$\overline{V_{n,out}^2} = \frac{4kT}{R_{D2}}R_{D2}^2 = 4kTR_{D2},$$

where $k$ is Boltzmann's constant and $T$ the absolute temperature.

**Refer to the input** by dividing by the transimpedance squared:

$$\overline{I_{n,in}^2} = \frac{4kTR_{D2}}{R_{D2}^2} = \frac{4kT}{R_{D2}}\quad(\mathrm{A^2/Hz}).$$

**Remark.** This low noise depends on the ideal, noiseless current source at Y. A real current source would inject its own noise current at Y, which by the same KCL would appear directly in $i_{d2}$, i.e. it would add its full noise current to $\overline{I_{n,in}^2}$.

### Result

With $R_S$ replaced by an ideal current source and $\lambda = \gamma = 0$, KCL at the input node and at Y gives $i_{d2} = -I_{in}$ exactly, so

$$\frac{V_{out}}{I_{in}} = +R_{D2}, \qquad \overline{I_{n,in}^2} = \frac{4kT}{R_{D2}}.$$

The noise of $M_1$, $M_2$, $R_D$ and $R_F$ cannot change $M_2$'s drain current and therefore does not appear; only $R_{D2}$ contributes.

**Common mistake.** Giving the transimpedance as $R_F$ (as in a shunt-feedback TIA whose output is taken at Y) or as a $g_m$-dependent expression. Here the output is the drain current of $M_2$, which KCL at Y pins to $-I_{in}$; the voltage is produced by $R_{D2}$.

**Common mistake.** Referring the noise of $M_1$, $R_D$ or $R_F$ to the input as if the loop were open (for example adding $4kT/R_F$). The total current in the $R_F$ branch and at Y is fixed by KCL, so these sources only move node voltages and never reach the output current.

**Common mistake.** Keeping $R_S$ in the circuit. With $R_S$, part of the input current would flow to ground through $R_S$, the current gain would no longer be exactly 1, and $R_S$'s noise would appear at the output; the problem explicitly replaces $R_S$ with an ideal current source.
