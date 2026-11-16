# Detailed solution - R221

**Approach.** Linearize each device around its bias point ($\Delta I = g_m\Delta V$), write KCL at node P including the current of the tail resistor ($\Delta V_P/R_T$), and solve for $\Delta V_P$, which is zero for a differential input. Then confirm it with a Thevenin argument and a large-signal check.

### Step 1 — Device model and bias point

The identical devices obey $I_1 = f(V_1)$ and $I_2 = f(V_2)$ with the same function $f$, where $V_{1,2}$ are the control (gate–source) voltages and, with $\lambda = 0$, the upper-terminal voltage has no effect (for a MOSFET, $f(V) = \tfrac12\mu_nC_{ox}\tfrac{W}{L}(V - V_{TH})^2$). From the figure,

$$V_1 = V_{in1} - V_P, \qquad V_2 = V_{in2} - V_P .$$

Before the change, $V_{in1} = V_{in2} = V_0$, so $V_1 = V_0 - V_P = V_2$, the currents are equal, $I_1 = I_2 = I_0$, and KCL at P sets the bias:

$$2I_0 = \frac{V_P}{R_T} .$$

Both devices sit at the same point of the same curve, so they have the **same transconductance**

$$g_m = \frac{dI}{dV}\bigg|_{V = V_0 - V_P}$$

(for a MOSFET, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_0}$). This equality, which follows from the symmetry, is what the proof needs. Linearized ("the circuit remains linear"):

$$
\begin{aligned}
\Delta V_1 &= \Delta V_{in1} - \Delta V_P, & \Delta I_1 &= g_m\,\Delta V_1,\\
\Delta V_2 &= \Delta V_{in2} - \Delta V_P, & \Delta I_2 &= g_m\,\Delta V_2 .
\end{aligned}
$$

### Step 2 — Small-signal circuit and KCL at P

Each device is a current source $g_m\Delta V_1$ (or $g_m\Delta V_2$) from its upper terminal, which can be taken as ac ground, into P. Unlike the ideal tail source, $R_T$ is **not** an open circuit: its current changes with $V_P$.

<!-- diagram: diagram-01.cir -->

KCL at P, $I_1 + I_2 = V_P/R_T$, gives for the changes

$$\Delta I_1 + \Delta I_2 = \frac{\Delta V_P}{R_T} .$$

With an ideal current source the right-hand side would be zero; here it is not, which is why the result has to be proved again.

### Step 3 — Solve for $\Delta V_P$

Substituting the linearized currents:

$$g_m(\Delta V_{in1} - \Delta V_P) + g_m(\Delta V_{in2} - \Delta V_P) = \frac{\Delta V_P}{R_T} ,$$

$$g_m(\Delta V_{in1} + \Delta V_{in2}) - 2g_m\Delta V_P = \frac{\Delta V_P}{R_T} \quad\Longrightarrow\quad g_m(\Delta V_{in1} + \Delta V_{in2}) = \Delta V_P\left(2g_m + \frac{1}{R_T}\right) .$$

The bracket is positive, so

$$\Delta V_P = \frac{g_m}{2g_m + 1/R_T}\,(\Delta V_{in1} + \Delta V_{in2}) = \frac{g_mR_T}{1 + 2g_mR_T}\,(\Delta V_{in1} + \Delta V_{in2}) ,$$

for any small input changes, not only differential ones.

### Step 4 — Differential input: $\Delta V_P = 0$

For $\Delta V_{in1} = +\Delta V_{in}$ and $\Delta V_{in2} = -\Delta V_{in}$,

$$\Delta V_{in1} + \Delta V_{in2} = 0 \quad\Longrightarrow\quad \boxed{\Delta V_P = 0} ,$$

the **only** solution, since $2g_m + 1/R_T \neq 0$. Then

$$
\begin{aligned}
\Delta V_1 &= \Delta V_{in1} - 0 = +\Delta V_{in}, & \Delta I_1 &= +g_m\Delta V_{in},\\
\Delta V_2 &= \Delta V_{in2} - 0 = -\Delta V_{in}, & \Delta I_2 &= -g_m\Delta V_{in},\\
\Delta I_{R_T} &= \Delta V_P/R_T = 0 . & &
\end{aligned}
$$

So $\Delta I_1 + \Delta I_2 = 0$ comes out of the solution rather than being assumed: the extra current of $D_1$ is exactly what $D_2$ gives up, so the current in $R_T$, and the voltage across it, do not change. For this input the resistor behaves just like a current source.

### Step 5 — Thevenin view

Since $\Delta I_1 = (\Delta V_{in1} - \Delta V_P)/(1/g_m)$, each half seen from P is its input source behind $1/g_m$. The two halves in parallel are equivalent to

$$V_{eq} = \frac{\Delta V_{in1} + \Delta V_{in2}}{2}, \qquad R_{eq} = \frac{1}{g_m}\Big\|\frac{1}{g_m} = \frac{1}{2g_m} ,$$

and loading this with $R_T$,

$$\Delta V_P = V_{eq}\frac{R_T}{R_T + \frac{1}{2g_m}} = \frac{\Delta V_{in1} + \Delta V_{in2}}{2}\cdot\frac{2g_mR_T}{1 + 2g_mR_T} = \frac{g_mR_T}{1 + 2g_mR_T}(\Delta V_{in1} + \Delta V_{in2}),$$

as in Step 3. For a differential input $V_{eq} = 0$, which gives zero at P **whatever** load is connected from P to ground: a current source, a resistor $R_T$, or anything else.

### Step 6 — Large-signal check (why "if the circuit remains linear")

With $V_c = V_0 - V_P$, $V_1 = V_c + \Delta V_{in}$ and $V_2 = V_c - \Delta V_{in}$, so KCL at P reads

$$f(V_c + \Delta V_{in}) + f(V_c - \Delta V_{in}) = \frac{V_P}{R_T} .$$

The left side is even in $\Delta V_{in}$, so $V_P$ is too: it has **no linear term**. For the square law the left side equals $\mu_nC_{ox}\frac{W}{L}\left[(V_c - V_{TH})^2 + \Delta V_{in}^2\right]$, so $V_P$ shifts only in proportion to $\Delta V_{in}^2$, a second-order effect that vanishes in the linear (small-signal) regime.

### Step 7 — Contrast: a common-mode change does move P

For $\Delta V_{in1} = \Delta V_{in2} = \Delta V_{CM}$, Step 3 gives

$$\Delta V_P = \frac{2g_mR_T}{1 + 2g_mR_T}\,\Delta V_{CM} ,$$

a gain just below 1 (exactly 1 for an ideal current source, $R_T \to \infty$). The resistive tail changes the common-mode behaviour of the pair, but not the differential behaviour of node P.

### Result

KCL at P with the resistive tail, $\Delta I_1 + \Delta I_2 = \Delta V_P/R_T$, together with $\Delta I_{1,2} = g_m(\Delta V_{in1,2} - \Delta V_P)$, gives

$$\Delta V_P\left(2g_m + \frac{1}{R_T}\right) = g_m(\Delta V_{in1} + \Delta V_{in2}) .$$

For $\Delta V_{in1} = -\Delta V_{in2} = \Delta V_{in}$ the right side is zero, so **$\Delta V_P = 0$**, and then $\Delta V_1 = \Delta V_{in}$, $\Delta V_2 = -\Delta V_{in}$ and $\Delta I_1 = -\Delta I_2 = g_m\Delta V_{in}$. The proof requires small signals (linear operation) and symmetry (identical devices with equal bias currents, hence equal $g_m$). For comparison, a common-mode change moves P by $\frac{2g_mR_T}{1 + 2g_mR_T}\Delta V_{CM}$.

**Common mistake.** Starting the proof with $\Delta I_1 + \Delta I_2 = 0$, the defining property of a current source; with a resistor that assumes what has to be proved. The correct KCL is $\Delta I_1 + \Delta I_2 = \Delta V_P/R_T$, and the sum is zero only *because* $\Delta V_P = 0$.

**Common mistake.** A purely verbal symmetry argument that never shows the two devices have equal $g_m$. If the transconductances differed, Step 3 would become $\Delta V_P(g_{m1} + g_{m2} + 1/R_T) = g_{m1}\Delta V_{in1} + g_{m2}\Delta V_{in2}$, which is not zero for a differential input.
