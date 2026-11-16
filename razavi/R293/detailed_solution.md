# Detailed solution - R293

**Approach.** Replace $M_1$ by $g_mV_{GS}$ (no $r_O$, since $\lambda = 0$), drive the input with a test source, and write KCL at the gate and at the drain. The key observation is that the current through $C_2$ has nowhere to go except into the drain of $M_1$.

### Step 1 — Small-signal model

Call the gate of $M_1$ (between $C_1$ and $C_2$) node **A** and its drain node **D**; $M_1$ is assumed saturated. For small signals the ideal current source $I_1$ is an open circuit, and with $\lambda = 0$ there is no $r_O$, so the only element from D to ground is the controlled source $g_mV_A$ ($V_{GS} = V_A$, source grounded). Apply a test voltage $V_x$ at the input, drawing $I_x$.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the gate (A) and the drain (D)

The gate draws no current, so whatever enters A through $C_1$ leaves through $C_2$:

$$I_{C1} = I_{C2} = I_x .$$

At D this current can leave only through the transistor ($I_1$ is open and there is no $r_O$):

$$I_x = g_mV_A \quad\Longrightarrow\quad V_A = \frac{I_x}{g_m}, \qquad Z_A = \frac{V_A}{I_x} = \frac{1}{g_m},$$

independent of $C_2$ and of frequency. The drain voltage simply adjusts to push $I_x$ through $C_2$:

$$V_D = V_A - \frac{I_x}{C_2s} = I_x\left(\frac{1}{g_m} - \frac{1}{C_2s}\right).$$

In effect, $C_2$ "diode-connects" $M_1$ for ac signals, so node A looks like $1/g_m$.

### Step 3 — KVL from the input to ground

Going from the input through $C_1$ to node A, and substituting $V_A = I_x/g_m$:

$$
\begin{aligned}
V_x &= \frac{I_x}{C_1s} + V_A = \frac{I_x}{C_1s} + \frac{I_x}{g_m}\\
&= I_x\left(\frac{1}{C_1s} + \frac{1}{g_m}\right),
\end{aligned}
$$

$$Z_{in} = \frac{V_x}{I_x} = \frac{1}{C_1s} + \frac{1}{g_m}.$$

The input impedance is $C_1$ in series with a resistance $1/g_m$; $C_2$ does not appear.

### Step 4 — Check with Miller's theorem

Miller's theorem replaces $Z = 1/(C_2s)$ by $Z/(1 - A_v)$ at node A, with $A_v$ the **exact** gain from A to D. From Step 2,

$$A_v = \frac{V_D}{V_A} = \frac{I_x\left(\dfrac{1}{g_m} - \dfrac{1}{C_2s}\right)}{I_x/g_m} = 1 - \frac{g_m}{C_2s},$$

so

$$
\begin{aligned}
1 - A_v &= \frac{g_m}{C_2s},\\
Z_A &= \frac{1/(C_2s)}{1 - A_v} = \frac{1}{C_2s}\cdot\frac{C_2s}{g_m} = \frac{1}{g_m},
\end{aligned}
$$

in agreement with Step 2. This $A_v$ is frequency dependent; the "low-frequency gain" of the common-source stage would be infinite here (ideal current-source load, $\lambda = 0$), and using it would wrongly give a huge capacitance at A.

### Result

$$Z_{in} = \frac{1}{C_1s} + \frac{1}{g_m}$$

The input looks like $C_1$ in series with a resistance $1/g_m$. $C_2$ has no effect: the current it carries must all be absorbed by $M_1$'s drain current $g_mV_A$, so node A always presents $1/g_m$ to ground.

**Common mistake.** Applying Miller's theorem with a fixed gain, for example $C_2(1 + g_mr_O)$ or "an infinite gain makes $C_2$ infinite". The factor is $1 - V_D/V_A$ with the *actual* gain, which here depends on the current through $C_2$ itself; done correctly it gives $1/g_m$, with no trace of $C_2$.

**Common mistake.** Ignoring the transistor and treating the circuit as two capacitors in series, $Z_{in} = 1/(C_1s) + 1/(C_2s)$. The drain is not a ground; its voltage is set by the requirement that $M_1$ sinks the capacitor current, and $Z_{in}$ has a real part $1/g_m$.

**Common mistake.** Forgetting $C_1$ and quoting only $1/g_m$, which is the impedance at node A, not at the input.
