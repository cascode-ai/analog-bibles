# Detailed solution - R471

**Approach.** During slewing a large differential input switches the input pair completely, so all of $I_{SS}$ flows through one input transistor. The currents at the folding nodes and output nodes are then fixed numbers (not small signals), and each output capacitor charges or discharges with a constant current. We do KCL at the folding nodes and at the outputs on both sides, find $dV_{out}/dt$ for each output and for the differential output, and check the condition under which no cascode device turns off.

### Step 1 — The topology and the equilibrium currents

We consider the standard fully differential folded cascode (shown below, since no figure is given):

- NMOS input pair $M_1$ (gate $V_{in1}$, drain at folding node X) and $M_2$ (gate $V_{in2}$, drain at folding node Y), with tail current $I_{SS}$.
- PMOS current sources $M_3$ (into X) and $M_4$ (into Y), each carrying $I_P$.
- PMOS cascodes $M_5$ (from X down to $V_{out1}$) and $M_6$ (from Y down to $V_{out2}$).
- NMOS cascodes $M_7$, $M_8$ and NMOS current sources $M_9$, $M_{10}$ below the outputs, each sinking $I_P - I_{SS}/2$.
- A load $C_L$ on each output; all other capacitances neglected.

<!-- diagram: diagram-01.cir -->

**Equilibrium** ($V_{in1} = V_{in2}$). Each input device takes $I_{SS}/2$ out of its folding node. KCL at X: $I_P$ enters from $M_3$, $I_{SS}/2$ leaves through $M_1$, so the cascode $M_5$ carries

$$I_{D5} = I_P - \frac{I_{SS}}{2},$$

exactly what $M_9$ sinks below the output. The net current into each $C_L$ is zero.

### Step 2 — The large differential step

Apply a large positive differential step: $V_{in1} - V_{in2}$ well beyond $\sqrt2$ times the pair's equilibrium overdrive. Then $M_1$ takes the entire tail current and $M_2$ turns off:

$$I_{D1} = I_{SS}, \qquad I_{D2} = 0 .$$

Every other current source keeps its value ($M_3$, $M_4$: $I_P$; $M_9$, $M_{10}$: $I_P - I_{SS}/2$). The output voltages cannot jump, because the outputs are loaded by $C_L$.

### Step 3 — Side 1 (folding node X, output $V_{out1}$)

**KCL at X.** $I_P$ comes in from $M_3$ and $I_{SS}$ leaves through $M_1$. The remainder flows down through the cascode $M_5$:

$$I_{D5} = I_P - I_{SS}.$$

This requires $I_P \ge I_{SS}$ (a cascode cannot carry negative current); see Step 6.

**KCL at $V_{out1}$.** $I_{D5}$ flows in, and $M_7$/$M_9$ remove $I_P - I_{SS}/2$. The net current into $C_L$ is

$$I_{C1} = (I_P - I_{SS}) - \left(I_P - \frac{I_{SS}}{2}\right) = -\frac{I_{SS}}{2},$$

so $V_{out1}$ falls at

$$\frac{dV_{out1}}{dt} = \frac{I_{C1}}{C_L} = -\frac{I_{SS}}{2C_L}.$$

### Step 4 — Side 2 (folding node Y, output $V_{out2}$)

**KCL at Y.** $M_2$ is off, so all of $I_P$ from $M_4$ flows down through the cascode $M_6$: $I_{D6} = I_P$.

**KCL at $V_{out2}$.**

$$I_{C2} = I_P - \left(I_P - \frac{I_{SS}}{2}\right) = +\frac{I_{SS}}{2},$$

so $V_{out2}$ rises at

$$\frac{dV_{out2}}{dt} = +\frac{I_{SS}}{2C_L}.$$

### Step 5 — Differential and common-mode slew rates

$$
\begin{aligned}
\frac{d(V_{out1} - V_{out2})}{dt} &= -\frac{I_{SS}}{2C_L} - \frac{I_{SS}}{2C_L} = -\frac{I_{SS}}{C_L},\\
\frac{d}{dt}\left(\frac{V_{out1} + V_{out2}}{2}\right) &= \frac12\left(-\frac{I_{SS}}{2C_L} + \frac{I_{SS}}{2C_L}\right) = 0 .
\end{aligned}
$$

So:

$$SR_{single\text{-}ended} = \frac{I_{SS}}{2C_L}, \qquad SR_{differential} = \frac{I_{SS}}{C_L}.$$

The two outputs slew symmetrically in opposite directions, the output common-mode level stays constant, and the common-mode feedback loop is not disturbed. (A negative step simply swaps the roles of the two sides.)

| Quantity during slewing | Side 1 ($M_1$ on) | Side 2 ($M_2$ off) |
|---|---|---|
| Input-device current | $I_{SS}$ | 0 |
| Cascode current | $I_P - I_{SS}$ | $I_P$ |
| Output-side sink | $I_P - I_{SS}/2$ | $I_P - I_{SS}/2$ |
| Net current into $C_L$ | $-I_{SS}/2$ | $+I_{SS}/2$ |
| Output slope | $-I_{SS}/(2C_L)$ | $+I_{SS}/(2C_L)$ |

**Intuition.** The slew rate is set by the tail current, not by $I_P$: the extra current $I_P$ only routes $I_{SS}$ through the folding nodes. Each output receives an imbalance of $I_{SS}/2$, because in equilibrium each side already carries half of $I_{SS}$.

### Step 6 — The condition $I_P \ge I_{SS}$, and what happens otherwise

The derivation needs $I_{D5} = I_P - I_{SS} \ge 0$, i.e. **$I_P \ge I_{SS}$**. (A common choice is $I_P = I_{SS}$, so each cascode branch carries $I_{SS}/2$ in equilibrium and the condition is just met.)

If $I_P < I_{SS}$, $M_1$ demands more current than $M_3$ can supply. The cascode $M_5$ turns off, the folding node X collapses toward ground (the tail source is starved and $M_1$/the tail device leave saturation), and the pair can draw only $I_P$ in total. Then:

- $V_{out1}$ receives nothing from $M_5$ and falls at $(I_P - I_{SS}/2)/C_L$, *slower* than $I_{SS}/(2C_L)$;
- $V_{out2}$ still rises at $I_{SS}/(2C_L)$;
- the differential slew rate becomes $[(I_P - I_{SS}/2) + I_{SS}/2]/C_L = I_P/C_L$;
- the two sides slew at different rates, so the output CM level is disturbed, and X must be recharged from its collapsed state after the transient, which causes a slow recovery.

### Result

For a large differential step, with $I_P \ge I_{SS}$, each output slews at

$$SR = \frac{I_{SS}}{2C_L}$$

(one output up, the other down), and the differential output slews at

$$SR_{diff} = \frac{I_{SS}}{C_L}.$$

The output CM level stays constant. If $I_P < I_{SS}$, one cascode device turns off: that output slews at only $(I_P - I_{SS}/2)/C_L$, the differential slew rate drops to $I_P/C_L$, and the starved folding node collapses, giving a slow recovery.

**Common mistake.** Taking the slew rate as $I_P/C_L$ (or $(I_P - I_{SS}/2)/C_L$) for $I_P \ge I_{SS}$. The currents $I_P$ and $I_P - I_{SS}/2$ cancel in the output KCL; only the redirected tail current $I_{SS}$ appears in the result.

**Common mistake.** Writing $I_{SS}/C_L$ for each output. Each output's net current is only $\pm I_{SS}/2$; the full $I_{SS}/C_L$ is the slew rate of the *differential* output $V_{out1} - V_{out2}$.

**Common mistake.** Assuming the cascode currents stay constant during slewing. The cascodes carry exactly the currents that change: $I_P - I_{SS}$ on one side and $I_P$ on the other.
