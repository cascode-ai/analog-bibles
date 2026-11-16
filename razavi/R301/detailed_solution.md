# Detailed solution - R301

**Approach.** With $\lambda = \gamma = 0$ each transistor is a plain controlled current source, and the ideal current sources are open circuits. KCL at the output, which has no resistive path, forces $M_1$'s current to zero and hence $v_X = 0$. KCL at X then shows that $M_2$ absorbs the input current, which fixes $v_{out}$.

### Step 1 — Small-signal model

Call the input node (right of $R_S$) X. $M_1$ (gate at $V_b$, source at X, drain at the output) is a common-gate stage from X to the output, and $M_2$ (source at $V_{DD}$, gate at the output, drain at X) is a common-source stage from the output back to X. One inversion around the loop: **negative feedback**. With $V_{DD}$ and $V_b$ at ac ground and $I_1$, $I_2$ open:

- **$M_1$:** $v_{gs1} = 0 - v_X$, so a current $-g_{m1}v_X$ flows from the output (drain) to X (source).
- **$M_2$:** $v_{gs2} = v_{out} - 0$, so a current $g_{m2}v_{out}$ flows from X (drain) to ac ground; equivalently, $M_2$ injects $-g_{m2}v_{out}$ into X.

<!-- diagram: diagram-01.cir -->

Let $i_{in}$ be the current entering X through $R_S$.

### Step 2 — KCL at the output node forces $v_X = 0$

At the output, $I_1$ is open and the gate of $M_2$ draws no current, so the only signal current is $M_1$'s:

$$-g_{m1}v_X = 0 \quad\Longrightarrow\quad v_X = 0 .$$

$M_1$'s current cannot change and its gate is fixed, so its source voltage cannot change either: the output node's infinite resistance makes the loop gain infinite and holds X at a perfect virtual ground. Hence, for any input current,

$$Z_{in} = \frac{v_X}{i_{in}} = 0 .$$

### Step 3 — KCL at X gives the output voltage

$i_{in}$ enters from $R_S$, $-g_{m1}v_X$ from $M_1$ (zero by Step 2) and $-g_{m2}v_{out}$ from $M_2$; $I_2$ is open:

$$i_{in} - g_{m1}v_X - g_{m2}v_{out} = 0 .$$

With $v_X = 0$:

$$
\begin{aligned}
i_{in} - g_{m2}v_{out} &= 0\\
v_{out} &= \frac{i_{in}}{g_{m2}}.
\end{aligned}
$$

$M_2$ must absorb the input current, so it must push *less* current into X: its source–gate voltage shrinks and its gate, the output, rises by $i_{in}/g_{m2}$, in the **same direction** as the input current.

### Step 4 — Transfer function

With $v_X = 0$,

$$i_{in} = \frac{V_{in} - v_X}{R_S} = \frac{V_{in}}{R_S},$$

and substituting into $v_{out} = i_{in}/g_{m2}$:

$$\frac{V_{out}}{V_{in}} = +\frac{1}{g_{m2}R_S}.$$

The circuit is a transimpedance amplifier with transimpedance $+1/g_{m2}$, driven by the current $V_{in}/R_S$.

### Step 5 — Check with finite output resistances

Add $r_{O1}$ (between the output and X) and $r_{O2}$ (from X to ac ground). KCL at the output (the current leaving through $M_1$ and $r_{O1}$ must be zero):

$$-g_{m1}v_X + \frac{v_{out} - v_X}{r_{O1}} = 0 \quad\Longrightarrow\quad v_{out} = (1 + g_{m1}r_{O1})\,v_X .$$

KCL at X, where the current from the output through $M_1$/$r_{O1}$ is zero:

$$i_{in} = g_{m2}v_{out} + \frac{v_X}{r_{O2}} = v_X\left[g_{m2}(1 + g_{m1}r_{O1}) + \frac{1}{r_{O2}}\right],$$

$$Z_{in} = \frac{1}{g_{m2}(1 + g_{m1}r_{O1}) + 1/r_{O2}}\approx\frac{1}{g_{m1}g_{m2}r_{O1}} ,$$

which tends to 0 as $r_{O1}, r_{O2}\to\infty$, confirming Step 2.

### Result

$$Z_{in} = 0, \qquad \frac{V_{out}}{V_{in}} = +\frac{1}{g_{m2}R_S}.$$

KCL at the output (ideal $I_1$, no gate current into $M_2$) forces the common-gate device's current $-g_{m1}v_X$ to be zero, so X is a virtual ground. The input current $V_{in}/R_S$ is absorbed by $M_2$, which requires $v_{out} = i_{in}/g_{m2}$.

**Common mistake.** Quoting $Z_{in} = 1/g_{m1}$, the input impedance of an isolated common-gate stage, which assumes $M_1$'s drain current can change freely. Here the output has no resistive path and drives the gate of $M_2$, closing a negative-feedback loop of infinite gain that holds X at virtual ground.

**Common mistake.** Getting the sign wrong. $M_2$ is a PMOS with its source at $V_{DD}$: to *remove* current from X, its gate must go *up*, so the gain is $+1/(g_{m2}R_S)$, not $-1/(g_{m2}R_S)$.

**Common mistake.** Misreading $M_2$ as an NMOS source follower, or giving a gain such as $g_{m1}/g_{m2}$. With $\lambda = 0$ the common-gate device carries no signal current, so $g_{m1}$ does not appear; only $M_2$ converts the input current to the output voltage.
