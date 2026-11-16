# Detailed solution - R058

**Approach.** Node X touches only the gate of $M_1$ and capacitor $C_1$, so the charge on $C_1$ cannot change and $V_X - V_Y$ stays equal to $V_{GS1}$. The negative input step is coupled fully to Y through $C_2$, and X follows. Then check the region of $M_1$ after the step: if it is still saturated, it still carries exactly $I_1$, no net current flows into $C_2$, and nothing moves afterwards.

### Step 1 — The initial state

Before $t = 0$, $M_1$ carries $I_1$ with $V_{DS1} = V_{DD} - V_Y = V_{GS1}$, so it is saturated, and with $\lambda = 0$

$$I_1 = \frac{\beta}{2}(V_{GS1} - V_{TH})^2 \quad\Longrightarrow\quad V_{GS1} = V_{TH} + \sqrt{\frac{2I_1}{\beta}} .$$

With the overdrive $V_{ov} = \sqrt{2I_1/\beta}$, initially

$$V_X(0^-) = V_{DD}, \qquad V_Y(0^-) = V_{DD} - V_{GS1} = V_{DD} - V_{TH} - V_{ov} .$$

### Step 2 — Node X floats, so $V_X - V_Y$ is constant

The gate of $M_1$ draws no current (its capacitances are neglected), so the only element that could carry current into X is $C_1$, and that current has nowhere to go:

$$C_1\frac{d(V_X - V_Y)}{dt} = 0 \quad\Longrightarrow\quad V_X(t) - V_Y(t) = V_{GS1}\ \text{for all}\ t .$$

$C_1$ acts as a floating battery: X copies every change of Y, and the gate–source voltage of $M_1$ never changes.

### Step 3 — The jump at $t = 0$

At $t = 0$, $V_{in}$ drops by $V_0 = V_{TH}$. Finite currents cannot change the voltage across $C_2$ instantly, and no charge can pass through $C_1$ to the floating node X, so the full step appears at Y, and X follows:

$$V_Y(0^+) = V_Y(0^-) - V_{TH} = V_{DD} - V_{GS1} - V_{TH}, \qquad V_X(0^+) = V_{DD} - V_{TH} .$$

### Step 4 — Region of $M_1$ after the step

Just after the step:

$$
\begin{aligned}
V_{GS1} &= V_X - V_Y\quad\text{(unchanged)},\\
V_{DS1} &= V_{DD} - V_Y(0^+) = V_{GS1} + V_{TH} .
\end{aligned}
$$

Since

$$V_{GS1} + V_{TH} \;>\; V_{GS1} \;>\; V_{GS1} - V_{TH},$$

**$M_1$ remains saturated**, with even more margin than before: its source moved down while its drain stayed at $V_{DD}$. With $\lambda = 0$ its current depends only on the unchanged $V_{GS1}$:

$$I_{M1} = \frac{\beta}{2}(V_{GS1} - V_{TH})^2 = I_1 .$$

### Step 5 — KCL at node Y: nothing moves after the step

For $t > 0$, $V_{in}$ is constant, so the current flowing from $C_2$ into Y is $C_2\,d(V_{in} - V_Y)/dt = -C_2\,dV_Y/dt$, and $C_1$ carries none (Step 2). KCL at node Y, with $I_{M1} = I_1$:

$$I_{M1} - C_2\frac{dV_Y}{dt} = I_1 \quad\Longrightarrow\quad C_2\frac{dV_Y}{dt} = I_{M1} - I_1 = 0 \quad\Longrightarrow\quad \frac{dV_Y}{dt} = 0 .$$

$M_1$ supplies exactly what $I_1$ draws, so $C_2$ is neither charged nor discharged, and Y (and with it X) stays at its post-step value indefinitely: no resistor or other dc path can pull the nodes back.

This assumes the current source $I_1$ still has enough voltage across it to operate, i.e. $V_Y(0^+) = V_{DD} - 2V_{TH} - V_{ov}$ stays above the minimum voltage that $I_1$ needs.

### Step 6 — The waveforms

| Time | $V_X$ | $V_Y$ |
|---|---|---|
| $t < 0$ | $V_{DD}$ | $V_{DD} - V_{TH} - \sqrt{2I_1/\beta}$ |
| $t > 0$ (constant) | $V_{DD} - V_{TH}$ | $V_{DD} - 2V_{TH} - \sqrt{2I_1/\beta}$ |

Both are step functions: flat, a sudden drop of exactly $V_{TH}$ at $t = 0$, then flat again, always $V_{GS1}$ apart.

**Numerical illustration** (assumed values: $V_{DD} = 3$ V, $V_{TH} = 0.7$ V, $\beta = 1\ \mathrm{mA/V^2}$, $I_1 = 0.1$ mA):

$$V_{ov} = \sqrt{\frac{2(0.1\ \mathrm{mA})}{1\ \mathrm{mA/V^2}}} = 0.447\ \mathrm{V}, \qquad V_{GS1} = 0.7 + 0.447 = 1.147\ \mathrm{V}.$$

$V_X$: 3 V before, 2.3 V after. $V_Y$: 1.853 V before, 1.153 V after. $M_1$'s $V_{DS}$ grows from 1.147 V to 1.847 V, still far above $V_{ov} = 0.447$ V.

**Contrast with a positive step.** A positive step larger than $V_{TH}$ would raise Y toward $V_{DD}$ and squeeze $V_{DS1}$ below $V_{ov}$, pushing $M_1$ into triode; the current deficit would then discharge $C_2$. A negative step only increases $V_{DS1}$, so $M_1$ stays saturated and the nodes stay where the step puts them. (With a nonzero $\lambda$, the larger $V_{DS1}$ would make $M_1$ carry slightly more than $I_1$ and Y would creep up slowly; with $\lambda = 0$ it is exactly constant.)

### Result

At $t = 0$ both nodes drop by $V_{TH}$ and then **stay constant**:

$$V_X = V_{DD} - V_{TH}, \qquad V_Y = V_{DD} - V_{GS1} - V_{TH} = V_{DD} - 2V_{TH} - \sqrt{2I_1/\beta}\qquad(t > 0).$$

Reason: $C_1$ cannot discharge (node X has no current path), so $V_{GS1}$ is unchanged. $M_1$, whose $V_{DS}$ has increased to $V_{GS1} + V_{TH}$, stays saturated and carries exactly $I_1$ ($\lambda = 0$), so no net current flows into $C_2$ and the voltages do not change.

**Common mistake.** Keeping $V_X$ at $V_{DD}$. X is connected only to $C_1$ and an insulated gate, so the voltage across $C_1$ is fixed and X must follow Y down.

**Common mistake.** Predicting a recovery toward the original voltages. $M_1$ is saturated with an unchanged $V_{GS}$, so it delivers exactly $I_1$, and nothing can supply the net current needed to recharge $C_2$.

**Common mistake.** Making the nodes move in opposite directions or by different amounts. With X floating, $C_1$ is only a level shifter, so both nodes move by the same $V_{TH}$, in the same direction.
