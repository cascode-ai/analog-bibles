# Detailed solution - R636

**Approach.** Write KCL at the source node X and at the output node, with a test current $I_{in}$ injected at the output. The equation at X shows that the currents of $C_2$ and $M_1$ cancel, so neither draws net current from the output node. The transfer function is then just the tank impedance, whose poles lie in the left half-plane, so the circuit cannot oscillate.

### Step 1 — Small-signal model

Unlike a Colpitts oscillator, this circuit has **no capacitor from X to ground**; only $C_2$ connects to X. For small signals:

- the tank is an admittance from the output node to ac ground,
$$Y_T(s) = \frac{1}{L_Ps} + \frac{1}{R_P} + C_Ps ;$$
- $M_1$, with its gate at ac ground, is a controlled current $g_mV_{GS} = g_m(0 - V_X) = -g_mV_X$ from the drain (output) to the source (X);
- the ideal $I_b$ is an open circuit;
- $I_{in}$ is injected into the output node.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the source node X

The currents into X through $C_2$ and through $M_1$ (drain to source) must sum to zero:

$$(V_{out} - V_X)C_2s - g_mV_X = 0 .$$

So

$$
\begin{aligned}
C_2s\,V_{out} &= V_X\,(g_m + C_2s),\\
V_X &= \frac{C_2s}{g_m + C_2s}\,V_{out}.
\end{aligned}
$$

### Step 3 — KCL at the output node

$I_{in}$ leaves the output node through the tank, $Y_T(s)\,V_{out}$; through $C_2$, $(V_{out} - V_X)C_2s$; and through $M_1$, $-g_mV_X$:

$$I_{in} = Y_T\,V_{out} + \left[(V_{out} - V_X)C_2s - g_mV_X\right].$$

The bracket is the left-hand side of the KCL equation at X, which is zero, so

$$I_{in} = Y_T\,V_{out} .$$

Node X has no small-signal path to ground, so any current $C_2$ carries from the output into X returns to the output through $M_1$: the pair draws no net current, and all of $I_{in}$ flows into the tank.

### Step 4 — Closed-loop transfer function

$$\frac{V_{out}}{I_{in}} = \frac{1}{Y_T(s)} = L_Ps \parallel R_P \parallel \frac{1}{C_Ps}.$$

Multiplying numerator and denominator by $R_PL_Ps$:

$$
\frac{V_{out}}{I_{in}} = \frac{1}{\dfrac{1}{L_Ps} + \dfrac{1}{R_P} + C_Ps} = \frac{R_PL_Ps}{R_P + L_Ps + R_PL_PC_Ps^2} = \frac{R_PL_Ps}{R_PL_PC_Ps^2 + L_Ps + R_P}.
$$

The transistor and $C_2$ have dropped out: the closed-loop response is just the passive tank.

### Step 5 — Can the circuit oscillate?

Oscillation needs closed-loop poles on the $j\omega$ axis or in the right half-plane. The poles are the roots of

$$R_PL_PC_Ps^2 + L_Ps + R_P = 0 \quad\Longleftrightarrow\quad s^2 + \frac{1}{R_PC_P}\,s + \frac{1}{L_PC_P} = 0 .$$

Their sum is $-1/(R_PC_P)$ and their product $1/(L_PC_P)$, so both have real part

$$\mathrm{Re}\{s\} = -\frac{1}{2R_PC_P} < 0 ,$$

in the **left half-plane** for any finite $R_P$. On the $j\omega$ axis the response stays finite, largest at $\omega = 1/\sqrt{L_PC_P}$, where it equals $R_P$. The loss in $R_P$ is never compensated, so **the circuit does not oscillate**, whatever $g_m$ is: the transistor's current is cancelled by the $C_2$ current and never supplies energy to the tank.

**Consistency check with a voltage stimulus.** With a small $V_{in}$ at the gate, KCL at X gives $g_m(V_{in} - V_X) + (V_{out} - V_X)C_2s = 0$, and the output node then gives $Y_TV_{out} = 0$, i.e. $V_{out} = 0$: the gate signal never reaches the tank. A Colpitts oscillator needs a second capacitor $C_1$ from X to ground, so that the capacitive divider can feed part of the output back to the source.

### Result

$$\frac{V_{out}}{I_{in}} = L_Ps \parallel R_P \parallel \frac{1}{C_Ps} = \frac{R_PL_Ps}{R_PL_PC_Ps^2 + L_Ps + R_P},$$

which is simply the tank impedance. Node X has no ac path to ground, so the current of $C_2$ is returned exactly by $M_1$, and the pair draws no net current from the output. The poles have real part $-1/(2R_PC_P) < 0$, and the response is finite on the $j\omega$ axis (maximum $R_P$ at $\omega = 1/\sqrt{L_PC_P}$), so **the circuit cannot oscillate**.

**Common mistake.** Adding a capacitor $C_1$ from X to ground, as in a Colpitts oscillator, and then finding an oscillation condition. With an ideal $I_b$, node X connects only to $C_2$ and $M_1$.

**Common mistake.** Counting the current of $M_1$ as an independent contribution to the output node, forgetting that KCL at X ties it to the $C_2$ current. The two cancel, which is why the transistor drops out of $V_{out}/I_{in}$.

**Common mistake.** Concluding that the circuit oscillates because the tank has a resonance. The tank alone has poles at $\mathrm{Re}\{s\} = -1/(2R_PC_P)$; oscillation needs an active element that cancels the loss of $R_P$, and here the transistor provides none.
