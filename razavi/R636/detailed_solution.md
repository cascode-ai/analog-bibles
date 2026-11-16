# Detailed solution - R636

**Approach.** Write KCL at the two nodes of the small-signal circuit, the source node X and the output node, with a test current $I_{in}$ injected at the output. The equation at X shows that the currents of $C_2$ and $M_1$ cancel, so neither draws any net current from the output node. The transfer function is then just the tank impedance, whose poles lie in the left half-plane, so the circuit cannot oscillate.

### Step 1 — The circuit and its small-signal model

Reading the figure:

- The parallel tank $L_P$, $R_P$, $C_P$ connects $V_{DD}$ to the output node ($V_{out}$), which is the drain of $M_1$.
- $C_2$ connects the output node to the source of $M_1$, node X.
- The ideal current source $I_b$ connects X to ground.
- The gate of $M_1$ is driven by $V_{in}$, which is set to zero here, so the gate is at AC ground.

Note that there is **no capacitor from X to ground**: unlike a Colpitts oscillator, this circuit has only $C_2$.

Small-signal model:

- $V_{DD}$ is AC ground, so the tank is an admittance $Y_T(s) = \dfrac{1}{L_Ps} + \dfrac{1}{R_P} + C_Ps$ from the output node to ground.
- $M_1$ is a controlled current $g_mV_{GS} = g_m(0 - V_X) = -g_mV_X$ flowing from the drain (output node) to the source (X).
- $I_b$ is ideal, so it is an open circuit for small signals.
- The stimulus $I_{in}$ is injected into the output node.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the source node X

Only two elements connect to X for small signals: $C_2$ and $M_1$. The current flowing into X through $C_2$ is $(V_{out} - V_X)C_2s$. The current flowing into X through $M_1$ (drain to source) is $-g_mV_X$. Their sum must be zero:

$$(V_{out} - V_X)C_2s - g_mV_X = 0 .$$

Solve for $V_X$:

$$
\begin{aligned}
C_2s\,V_{out} &= V_X\,(g_m + C_2s),\\
V_X &= \frac{C_2s}{g_m + C_2s}\,V_{out}.
\end{aligned}
$$

### Step 3 — KCL at the output node

The injected current $I_{in}$ leaves the output node through three branches:

- the tank: $Y_T(s)\,V_{out}$;
- $C_2$, toward X: $(V_{out} - V_X)C_2s$;
- $M_1$, from drain to source: $-g_mV_X$.

So

$$I_{in} = Y_T\,V_{out} + \left[(V_{out} - V_X)C_2s - g_mV_X\right].$$

The bracket is exactly the left-hand side of the KCL equation at X, which is zero. Therefore

$$I_{in} = Y_T\,V_{out} .$$

**Why.** Node X has no small-signal path to ground: the current source is ideal and there is no capacitor from X to ground. Any current that $C_2$ carries from the output into X must therefore return to the output through $M_1$. $M_1$ and $C_2$ form a closed loop that draws no net current from the output node, so all of $I_{in}$ flows into the tank.

### Step 4 — Closed-loop transfer function

$$\frac{V_{out}}{I_{in}} = \frac{1}{Y_T(s)} = L_Ps \parallel R_P \parallel \frac{1}{C_Ps}.$$

Write it as a ratio of polynomials. Multiply numerator and denominator by $R_PL_Ps$:

$$
\frac{V_{out}}{I_{in}} = \frac{1}{\dfrac{1}{L_Ps} + \dfrac{1}{R_P} + C_Ps} = \frac{R_PL_Ps}{R_P + L_Ps + R_PL_PC_Ps^2} = \frac{R_PL_Ps}{R_PL_PC_Ps^2 + L_Ps + R_P}.
$$

The transistor and $C_2$ have disappeared: the closed-loop response is just the passive tank.

### Step 5 — Can the circuit oscillate?

An oscillator needs closed-loop poles on the $j\omega$ axis (or in the right half-plane), so that the response is infinite for a finite stimulus. The poles here are the roots of

$$R_PL_PC_Ps^2 + L_Ps + R_P = 0 \quad\Longleftrightarrow\quad s^2 + \frac{1}{R_PC_P}\,s + \frac{1}{L_PC_P} = 0 .$$

Their sum is $-1/(R_PC_P)$ and their product $1/(L_PC_P)$, so both have real part

$$\mathrm{Re}\{s\} = -\frac{1}{2R_PC_P} < 0 .$$

Both poles lie in the **left half-plane** for any finite $R_P$. On the $j\omega$ axis the transfer function stays finite: its magnitude is largest at $\omega = 1/\sqrt{L_PC_P}$, where the inductor and capacitor cancel and the value is $R_P$.

The response to any stimulus therefore decays: the loss in $R_P$ is never compensated, and **the circuit does not oscillate**, whatever $g_m$ is. The transistor never supplies energy to the tank, because its current is cancelled by the $C_2$ current.

**Consistency check with a voltage stimulus.** If instead a small voltage $V_{in}$ is applied at the gate, KCL at X gives $g_m(V_{in} - V_X) + (V_{out} - V_X)C_2s = 0$, and the output node then gives $Y_TV_{out} = 0$, i.e. $V_{out} = 0$. The gate signal never reaches the tank, which again shows that there is no feedback path that could sustain oscillation. A Colpitts oscillator needs a second capacitor $C_1$ from X to ground, so that X can carry a current to ground and the capacitive divider can feed part of the output back to the source.

### Result

$$\frac{V_{out}}{I_{in}} = L_Ps \parallel R_P \parallel \frac{1}{C_Ps} = \frac{R_PL_Ps}{R_PL_PC_Ps^2 + L_Ps + R_P},$$

which is simply the tank impedance. Node X has no AC path to ground, so the current of $C_2$ is returned exactly by $M_1$, and the pair draws no net current from the output. The poles have real part $-1/(2R_PC_P) < 0$, and the response is finite on the $j\omega$ axis (maximum $R_P$ at $\omega = 1/\sqrt{L_PC_P}$), so **the circuit cannot oscillate**.

**Common mistake.** Adding a capacitor $C_1$ from X to ground, as in a Colpitts oscillator, and then finding an oscillation condition. This circuit has no such capacitor; with an ideal $I_b$, node X connects only to $C_2$ and $M_1$.

**Common mistake.** Counting the current of $M_1$ as an independent contribution to the output node while forgetting that it is tied to the $C_2$ current by KCL at X. The two cancel, which is why the transistor drops out of $V_{out}/I_{in}$.

**Common mistake.** Concluding that the circuit oscillates because the tank has a resonance. The tank alone has poles at $\mathrm{Re}\{s\} = -1/(2R_PC_P)$; oscillation requires an active element that cancels the loss of $R_P$, and here the transistor provides none.
