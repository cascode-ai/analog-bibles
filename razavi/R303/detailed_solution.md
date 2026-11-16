# Detailed solution - R303

**Approach.** With $\lambda = \gamma = 0$ each transistor is a plain controlled current source, and the ideal current sources are open circuits. KCL at the output, which has no resistive path, pins the current of the common-gate device $M_1$ and forces $v_X = 0$. KCL at X then shows that the follower $M_2$ absorbs the input current, which sets $v_{out}$. A check with finite $r_O$ shows that the feedback is positive, which matters for stability but not for the ideal small-signal result.

### Step 1 — Small-signal model

Call the input node (right of $R_S$) X. $M_1$ (gate at $V_{b2}$, source at X, drain at the output) is a **common-gate** stage from X to the output, and $M_2$ (drain at $V_{DD}$, gate at the output, source at X) is a **source follower** from the output back to X. Neither inverts, so the loop is **positive feedback**. With $V_{DD}$ and $V_{b2}$ at ac ground and $I_1$, $I_2$ open:

- **$M_1$:** $g_{m1}v_{gs1} = g_{m1}(0 - v_X)$, so it carries $-g_{m1}v_X$ from the output to X.
- **$M_2$:** $g_{m2}v_{gs2} = g_{m2}(v_{out} - v_X)$, flowing from $V_{DD}$ (ac ground) into X.

<!-- diagram: diagram-01.cir -->

Let $i_{in}$ be the current entering X through $R_S$.

### Step 2 — KCL at the output forces $v_X = 0$

At the output, $I_1$ is open and the gate of $M_2$ draws no current, so the only signal current is $M_1$'s:

$$-g_{m1}v_X = 0 \quad\Longrightarrow\quad v_X = 0, \qquad Z_{in} = \frac{v_X}{i_{in}} = 0 .$$

With no resistive path at the output, $M_1$'s current cannot change; with its gate fixed, its source voltage $v_X$ cannot change either.

### Step 3 — KCL at X gives the output voltage

$i_{in}$ enters from $R_S$, $g_{m2}(v_{out} - v_X)$ from $M_2$ and $-g_{m1}v_X$ from $M_1$; $I_2$ is open:

$$i_{in} + g_{m2}(v_{out} - v_X) - g_{m1}v_X = 0 .$$

With $v_X = 0$:

$$
\begin{aligned}
i_{in} + g_{m2}v_{out} &= 0\\
v_{out} &= -\frac{i_{in}}{g_{m2}}.
\end{aligned}
$$

The follower $M_2$ must absorb the input current, i.e. push *less* current into X, so its gate (the output) goes *down* by $i_{in}/g_{m2}$.

### Step 4 — Transfer function

With $v_X = 0$, $i_{in} = (V_{in} - v_X)/R_S = V_{in}/R_S$, so

$$\frac{V_{out}}{V_{in}} = -\frac{1}{g_{m2}R_S} .$$

### Step 5 — Finite $r_O$: the feedback is positive

Add $r_{O1}$ (between the output and X) and $r_{O2}$ (between $V_{DD}$ and X). KCL at the output (the current leaving through $M_1$ and $r_{O1}$ must be zero):

$$-g_{m1}v_X + \frac{v_{out} - v_X}{r_{O1}} = 0 \quad\Longrightarrow\quad v_{out} = (1 + g_{m1}r_{O1})\,v_X .$$

A positive $v_X$ gives a *larger* positive $v_{out}$, and the follower pulls X further up: positive feedback. KCL at X, where the current from the output through $M_1$/$r_{O1}$ is zero:

$$
\begin{aligned}
i_{in} + g_{m2}(v_{out} - v_X) - \frac{v_X}{r_{O2}} &= 0\\
i_{in} &= -g_{m2}\,g_{m1}r_{O1}\,v_X + \frac{v_X}{r_{O2}}\\
Z_{in} &= \frac{r_{O2}}{1 - g_{m1}g_{m2}r_{O1}r_{O2}} = -\frac{r_{O2}}{g_{m1}g_{m2}r_{O1}r_{O2} - 1}.
\end{aligned}
$$

Since $g_{m1}g_{m2}r_{O1}r_{O2}\gg1$, this is a small **negative** resistance, about $-1/(g_{m1}g_{m2}r_{O1})$, which tends to $0^-$ as $\lambda\to0$, consistent with Step 2.

**Stability.** The net conductance from X to ground, $1/R_S + 1/Z_{in}$, is negative for any practical $R_S > |Z_{in}|$, so with any capacitance at X the bias point would be unstable (the circuit would latch). The results above are the formal small-signal answers at the assumed bias point.

### Result

$$Z_{in} = 0, \qquad \frac{V_{out}}{V_{in}} = -\frac{1}{g_{m2}R_S} .$$

KCL at the output (ideal $I_1$, no gate current into $M_2$) forces the common-gate current $-g_{m1}v_X$ to zero, so $v_X = 0$. The input current $V_{in}/R_S$ is absorbed by the follower $M_2$, giving $v_{out} = -i_{in}/g_{m2}$. The loop is positive feedback; with finite $r_O$ the input resistance is $-r_{O2}/(g_{m1}g_{m2}r_{O1}r_{O2} - 1)$, which tends to $0^-$ as $\lambda\to0$, and such a bias point would not be stable in practice.

**Common mistake.** Quoting $Z_{in} = 1/g_{m1}$ (isolated common-gate input) or $1/(g_{m1} + g_{m2})$ (both devices seen from their sources with fixed gates). The gate of $M_2$ is the output node, which has infinite resistance, so the loop forces $v_X = 0$.

**Common mistake.** Giving the gain as $g_{m1}/g_{m2}$ or $+1/(g_{m2}R_S)$. With $v_X = 0$, $M_1$ carries no signal current and $g_{m1}$ drops out; the follower must sink the input current, so its gate goes down and the gain is negative.

**Common mistake.** Misreading $M_2$ as a PMOS common-source device (as in a related circuit). Here it is an NMOS with its drain at $V_{DD}$ and source at X, i.e. a follower.
