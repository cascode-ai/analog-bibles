# Detailed solution - R221

**Approach.** Linearize each device around its bias point ($\Delta I = g_m\Delta V$), write KCL at node P including the current of the tail resistor ($\Delta V_P/R_T$), and solve for $\Delta V_P$. For a differential input the solution is $\Delta V_P = 0$. We then confirm it with a Thevenin argument and a large-signal check.

### Step 1 — The circuit and the device model

Reading the figure, with the tail current source replaced by a resistor:

- $D_1$ and $D_2$ are identical three-terminal devices. Their control inputs are driven by $V_{in1}$ and $V_{in2}$ (both referred to ground).
- Their lower terminals are joined at node P, and the resistor $R_T$ connects P to ground.
- $V_1$ and $V_2$ are the control voltages, measured from each input terminal to the lower terminal (for a MOSFET, the gate–source voltages). $I_1$ and $I_2$ are the currents entering the upper terminals; they leave through the lower terminals into P.

**Device model.** Each device's current depends only on its own control voltage:

$$I_1 = f(V_1), \qquad I_2 = f(V_2),$$

with the same function $f$ for both, because the devices are identical. For a MOSFET with $\lambda = 0$ this is the square law $f(V) = \tfrac12\mu_nC_{ox}\tfrac{W}{L}(V - V_{TH})^2$; $\lambda = 0$ means the voltage of the upper terminal has no effect on the current.

From the figure (KVL around each input loop):

$$V_1 = V_{in1} - V_P, \qquad V_2 = V_{in2} - V_P .$$

### Step 2 — Bias point: both devices have the same $g_m$

Before the change, $V_{in1} = V_{in2} = V_0$. Then

$$V_1 = V_0 - V_P = V_2,$$

so the two control voltages are equal. Since the devices are identical, the currents are equal too, $I_1 = I_2 = I_0$, and KCL at P sets the bias:

$$2I_0 = \frac{V_P}{R_T} .$$

**Transconductance.** For small changes we linearize $f$ about the bias point. The transconductance is the slope of $f$ there:

$$g_m = \frac{dI}{dV}\bigg|_{V = V_0 - V_P} .$$

Both devices sit at the same point of the same curve, so **they have the same $g_m$**. (For a MOSFET, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_0}$.) This equality is what the proof needs, and it follows from the symmetry of the circuit.

**Linearized relations** ("the circuit remains linear"):

$$
\begin{aligned}
\Delta V_1 &= \Delta V_{in1} - \Delta V_P, & \Delta I_1 &= g_m\,\Delta V_1,\\
\Delta V_2 &= \Delta V_{in2} - \Delta V_P, & \Delta I_2 &= g_m\,\Delta V_2 .
\end{aligned}
$$

### Step 3 — Small-signal circuit and KCL at P

In the small-signal circuit each device is a current source $g_m\Delta V_1$ (or $g_m\Delta V_2$) flowing from its upper terminal into P. Since the current does not depend on the upper-terminal voltage, that terminal can be taken as ac ground. The resistor $R_T$ remains between P and ground; unlike the ideal tail source, it is **not** an open circuit, because its current changes when $V_P$ changes.

<!-- diagram: diagram-01.cir -->

**KCL at P.** The currents of both devices enter P and the resistor current leaves it:

$$I_1 + I_2 = \frac{V_P}{R_T} .$$

Take the change of both sides:

$$\Delta I_1 + \Delta I_2 = \frac{\Delta V_P}{R_T} .$$

(With an ideal current source the right-hand side would be zero. Here it is not, which is why the result has to be proved again.)

### Step 4 — Solve for $\Delta V_P$

**Substitute** the linearized currents:

$$g_m(\Delta V_{in1} - \Delta V_P) + g_m(\Delta V_{in2} - \Delta V_P) = \frac{\Delta V_P}{R_T} .$$

**Expand:**

$$g_m(\Delta V_{in1} + \Delta V_{in2}) - 2g_m\Delta V_P = \frac{\Delta V_P}{R_T} .$$

**Collect the $\Delta V_P$ terms on the right:**

$$g_m(\Delta V_{in1} + \Delta V_{in2}) = \Delta V_P\left(2g_m + \frac{1}{R_T}\right) .$$

**Solve** (the bracket is positive, so we may divide by it):

$$\Delta V_P = \frac{g_m}{2g_m + 1/R_T}\,(\Delta V_{in1} + \Delta V_{in2}) = \frac{g_mR_T}{1 + 2g_mR_T}\,(\Delta V_{in1} + \Delta V_{in2}) .$$

This holds for any small input changes, not only differential ones.

### Step 5 — Differential input: $\Delta V_P = 0$

For the differential change, $\Delta V_{in1} = +\Delta V_{in}$ and $\Delta V_{in2} = -\Delta V_{in}$, so

$$\Delta V_{in1} + \Delta V_{in2} = 0 \quad\Longrightarrow\quad \boxed{\Delta V_P = 0} .$$

Because $2g_m + 1/R_T \neq 0$, this is the **only** solution. The consequences are:

$$
\begin{aligned}
\Delta V_1 &= \Delta V_{in1} - 0 = +\Delta V_{in}, & \Delta I_1 &= +g_m\Delta V_{in},\\
\Delta V_2 &= \Delta V_{in2} - 0 = -\Delta V_{in}, & \Delta I_2 &= -g_m\Delta V_{in},\\
\Delta I_{R_T} &= \Delta V_P/R_T = 0 . & &
\end{aligned}
$$

So $\Delta I_1 + \Delta I_2 = 0$ comes out of the solution; it was not assumed. **Intuition:** the extra current of $D_1$ is exactly the current $D_2$ gives up, so the total current into $R_T$, and hence the voltage across it, does not change. A resistor whose current does not change behaves, for this input, just like a current source.

### Step 6 — Thevenin view

Rewrite the current of $D_1$ as

$$\Delta I_1 = \frac{\Delta V_{in1} - \Delta V_P}{1/g_m} .$$

This is the current a voltage source $\Delta V_{in1}$ in series with a resistance $1/g_m$ would push into P. Likewise $D_2$ is $\Delta V_{in2}$ behind $1/g_m$.

Combine the two halves (two sources with equal series resistances in parallel). Their Thevenin equivalent at P is

$$V_{eq} = \frac{\Delta V_{in1} + \Delta V_{in2}}{2}, \qquad R_{eq} = \frac{1}{g_m}\Big\|\frac{1}{g_m} = \frac{1}{2g_m} .$$

Load it with $R_T$ (voltage divider):

$$\Delta V_P = V_{eq}\frac{R_T}{R_T + \frac{1}{2g_m}} = \frac{\Delta V_{in1} + \Delta V_{in2}}{2}\cdot\frac{2g_mR_T}{1 + 2g_mR_T} = \frac{g_mR_T}{1 + 2g_mR_T}(\Delta V_{in1} + \Delta V_{in2}),$$

the same as Step 4. For a differential input $V_{eq} = 0$: a source of zero volts gives zero at P **whatever** load is connected from P to ground, a current source, a resistor $R_T$, or anything else.

### Step 7 — Large-signal check (why "if the circuit remains linear")

Without linearizing, write $V_c = V_0 - V_P$. Then $V_1 = V_c + \Delta V_{in}$ and $V_2 = V_c - \Delta V_{in}$, and KCL at P reads

$$f(V_c + \Delta V_{in}) + f(V_c - \Delta V_{in}) = \frac{V_P}{R_T} .$$

The left side is an even function of $\Delta V_{in}$ (it does not change if $\Delta V_{in} \to -\Delta V_{in}$), so the solution $V_P$ is also even in $\Delta V_{in}$: it contains **no linear term**. For the square law, for example, the left side equals $\mu_nC_{ox}\frac{W}{L}\left[(V_c - V_{TH})^2 + \Delta V_{in}^2\right]$. $V_P$ shifts only in proportion to $\Delta V_{in}^2$, a second-order effect that vanishes in the linear (small-signal) regime.

### Step 8 — Contrast: a common-mode change does move P

For $\Delta V_{in1} = \Delta V_{in2} = \Delta V_{CM}$, Step 4 gives

$$\Delta V_P = \frac{2g_mR_T}{1 + 2g_mR_T}\,\Delta V_{CM} .$$

P follows the common-mode input with a gain just below 1 (exactly 1 for an ideal current source, $R_T \to \infty$). The resistive tail therefore changes the common-mode behaviour of the pair, but not the differential behaviour of node P.

### Result

KCL at P with the resistive tail, $\Delta I_1 + \Delta I_2 = \Delta V_P/R_T$, together with $\Delta I_{1,2} = g_m(\Delta V_{in1,2} - \Delta V_P)$, gives

$$\Delta V_P\left(2g_m + \frac{1}{R_T}\right) = g_m(\Delta V_{in1} + \Delta V_{in2}) .$$

For $\Delta V_{in1} = -\Delta V_{in2} = \Delta V_{in}$ the right side is zero, so **$\Delta V_P = 0$**, and then $\Delta V_1 = \Delta V_{in}$, $\Delta V_2 = -\Delta V_{in}$ and $\Delta I_1 = -\Delta I_2 = g_m\Delta V_{in}$. The proof requires small signals (linear operation) and symmetry (identical devices with equal bias currents, hence equal $g_m$). For comparison, a common-mode change moves P by $\frac{2g_mR_T}{1 + 2g_mR_T}\Delta V_{CM}$.

**Common mistake.** Starting the proof with $\Delta I_1 + \Delta I_2 = 0$. That equation is the defining property of a current source, so using it with a resistor assumes what has to be proved. With $R_T$, the correct KCL is $\Delta I_1 + \Delta I_2 = \Delta V_P/R_T$; the sum turns out to be zero only *because* $\Delta V_P = 0$.

**Common mistake.** Giving a purely verbal symmetry argument ("the circuit is symmetric, so P cannot move") without any equation, or without noting that the two devices have equal $g_m$ because they carry equal bias currents. If the transconductances differed, Step 4 would become $\Delta V_P(g_{m1} + g_{m2} + 1/R_T) = g_{m1}\Delta V_{in1} + g_{m2}\Delta V_{in2}$, which is not zero for a differential input.

**Common mistake.** Concluding that the result fails because "the resistor current depends on $V_P$." It does, but for a differential input $V_P$ does not change, so the resistor current does not change either.
