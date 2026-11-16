# Detailed solution - R303

**Approach.** With $\lambda = \gamma = 0$, each transistor is a voltage-controlled current source and the ideal current sources are open circuits. KCL at the output node, which has no resistive path, pins the current of the common-gate device $M_1$ and hence forces $v_X = 0$. KCL at X then shows that the input current is absorbed by the follower $M_2$, which sets $v_{out}$. A short check with finite $r_O$ shows that the feedback here is positive, which matters for stability but not for the ideal small-signal result.

### Step 1 — Reading the circuit

From the figure:

- $V_{in}$ drives node **X** through $R_S$; $Z_{in}$ is the impedance looking into X. Node X is also the top of the ideal current source $I_2$ (to ground).
- $M_1$ (NMOS): **gate at the fixed bias $V_{b2}$**, source at X, drain at the **output**. It is a **common-gate** stage from X to the output. The output is fed by the ideal current source $I_1$.
- $M_2$ (NMOS): **drain at $V_{DD}$**, **gate at the output**, **source at X**. It is a **source follower** from the output back to X.

**The loop.** X → $M_1$ (common gate, non-inverting) → output → $M_2$ (follower, non-inverting) → X. No inversion around the loop, so the feedback is **positive**.

### Step 2 — Small-signal model

- $V_{DD}$ and $V_{b2}$ are ac grounds; $I_1$, $I_2$ are open circuits; no $r_O$, no body effect.
- **$M_1$:** drain-to-source current $g_{m1}v_{gs1} = g_{m1}(0 - v_X)$. So $M_1$ carries $-g_{m1}v_X$ from the output to X.
- **$M_2$:** drain-to-source current $g_{m2}v_{gs2} = g_{m2}(v_{out} - v_X)$, flowing from $V_{DD}$ (ac ground) into X.

<!-- diagram: diagram-01.cir -->

Let $i_{in}$ be the current entering X through $R_S$.

### Step 3 — KCL at the output forces $v_X = 0$

At the output the elements are the ideal source $I_1$ (open), the drain of $M_1$, and the gate of $M_2$ (no current). The only signal current is $M_1$'s:

$$-g_{m1}v_X = 0 \quad\Longrightarrow\quad v_X = 0 .$$

The output node has no resistive path, so $M_1$'s current cannot change; with its gate fixed, its source voltage $v_X$ cannot change either.

### Step 4 — Input impedance

$$Z_{in} = \frac{v_X}{i_{in}} = 0 .$$

### Step 5 — KCL at X gives the output voltage

Currents entering X: $i_{in}$ from $R_S$; $g_{m2}(v_{out} - v_X)$ from $M_2$; $-g_{m1}v_X$ from $M_1$. $I_2$ is open. So

$$i_{in} + g_{m2}(v_{out} - v_X) - g_{m1}v_X = 0 .$$

With $v_X = 0$:

$$
\begin{aligned}
i_{in} + g_{m2}v_{out} &= 0\\
v_{out} &= -\frac{i_{in}}{g_{m2}}.
\end{aligned}
$$

**Physical picture.** $M_1$'s current is pinned and $I_2$ is ideal, so the follower $M_2$ must absorb the input current. To push *less* current into X, the gate of $M_2$ (the output) must go *down* by $i_{in}/g_{m2}$.

### Step 6 — Transfer function

With $v_X = 0$, $i_{in} = (V_{in} - v_X)/R_S = V_{in}/R_S$. Substitute:

$$\frac{V_{out}}{V_{in}} = -\frac{1}{g_{m2}R_S} .$$

### Step 7 — Finite $r_O$: the feedback is positive

Add $r_{O1}$ (between the output and X) and $r_{O2}$ (between $V_{DD}$ and X).

KCL at the output (the current leaving through $M_1$ and $r_{O1}$ must be zero):

$$-g_{m1}v_X + \frac{v_{out} - v_X}{r_{O1}} = 0 \quad\Longrightarrow\quad v_{out} = (1 + g_{m1}r_{O1})\,v_X .$$

A positive $v_X$ gives a *larger* positive $v_{out}$, and the follower then pulls X further up: positive feedback. KCL at X (the current from the output through $M_1$/$r_{O1}$ is zero by the previous line):

$$
\begin{aligned}
i_{in} + g_{m2}(v_{out} - v_X) - \frac{v_X}{r_{O2}} &= 0\\
i_{in} &= -g_{m2}\,g_{m1}r_{O1}\,v_X + \frac{v_X}{r_{O2}}\\
Z_{in} &= \frac{r_{O2}}{1 - g_{m1}g_{m2}r_{O1}r_{O2}} = -\frac{r_{O2}}{g_{m1}g_{m2}r_{O1}r_{O2} - 1}.
\end{aligned}
$$

Since $g_{m1}g_{m2}r_{O1}r_{O2}\gg1$, this is a small **negative** resistance, about $-1/(g_{m1}g_{m2}r_{O1})$. As $\lambda\to0$ it tends to $0^-$, consistent with Step 4.

**Stability.** The net conductance from X to ground is $1/R_S + 1/Z_{in}$. For any practical $R_S$ larger than $|Z_{in}|$ this is negative, so with any capacitance at X the bias point would be unstable (the circuit would latch). The results above are the formal small-signal answers at the assumed bias point.

### Result

$$Z_{in} = 0, \qquad \frac{V_{out}}{V_{in}} = -\frac{1}{g_{m2}R_S} .$$

KCL at the output (ideal $I_1$, no gate current into $M_2$) forces the common-gate current $-g_{m1}v_X$ to zero, so $v_X = 0$. The input current $V_{in}/R_S$ is absorbed by the follower $M_2$, giving $v_{out} = -i_{in}/g_{m2}$. The loop is positive feedback; with finite $r_O$ the input resistance is $-r_{O2}/(g_{m1}g_{m2}r_{O1}r_{O2} - 1)$, which tends to $0^-$ as $\lambda\to0$, and such a bias point would not be stable in practice.

**Common mistake.** Quoting $Z_{in} = 1/g_{m1}$ (isolated common-gate input) or $1/(g_{m1} + g_{m2})$ (both devices seen from their sources with fixed gates). The gate of $M_2$ is not fixed: it is the output node, which has infinite resistance, so the loop forces $v_X = 0$.

**Common mistake.** Giving the gain as $g_{m1}/g_{m2}$ or as $+1/(g_{m2}R_S)$. With $v_X = 0$, $M_1$ carries no signal current and $g_{m1}$ drops out. The follower must sink the input current, which requires its gate to go down, so the gain is negative.

**Common mistake.** Misreading $M_2$ as a PMOS common-source device (as in a related circuit). Here $M_2$ is an NMOS with its drain at $V_{DD}$ and its source at X, i.e. a follower.
