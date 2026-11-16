# Detailed solution - R301

**Approach.** With $\lambda = \gamma = 0$, each transistor is a voltage-controlled current source and the ideal current sources are open circuits. KCL at the output node, which has no resistive path, forces the current of $M_1$ to be zero and hence $v_X = 0$. KCL at X then shows that the input current is absorbed by $M_2$, which fixes $v_{out}$.

### Step 1 — Reading the circuit

From the figure:

- $V_{in}$ drives node **X** through $R_S$; $Z_{in}$ is the impedance looking into X.
- Node X is the **source of $M_1$**, the **drain of $M_2$**, and the top of the ideal current source $I_2$ (to ground).
- $M_1$ (NMOS): **gate at the fixed bias $V_b$**, source at X, drain at the **output**. It is a **common-gate** stage from X to the output. The output is fed by the ideal current source $I_1$ from $V_{DD}$.
- $M_2$ (PMOS): **source at $V_{DD}$**, **gate at the output**, **drain at X**. It is a common-source stage from the output back to X.

**The loop.** X → $M_1$ (common gate, non-inverting) → output → $M_2$ (common source, inverting) → X. One inversion around the loop, so this is **negative feedback**.

### Step 2 — Small-signal model

- $V_{DD}$ and $V_b$ are ac grounds; $I_1$, $I_2$ are open circuits; no $r_O$, no body effect.
- **$M_1$:** drain-to-source current $g_{m1}v_{gs1}$ with $v_{gs1} = 0 - v_X$. So a current $-g_{m1}v_X$ flows from the output (drain) to X (source).
- **$M_2$:** drain-to-source current $g_{m2}v_{gs2}$ with $v_{gs2} = v_{out} - 0$. So a current $g_{m2}v_{out}$ flows from X (drain) to ac ground (source). Equivalently, $M_2$ injects $-g_{m2}v_{out}$ into X.

<!-- diagram: diagram-01.cir -->

Let $i_{in}$ be the current entering X through $R_S$.

### Step 3 — KCL at the output node forces $v_X = 0$

At the output, the elements are the ideal source $I_1$ (open), the drain of $M_1$, and the gate of $M_2$ (no current). The only signal current is $M_1$'s:

$$-g_{m1}v_X = 0 \quad\Longrightarrow\quad v_X = 0 .$$

The output node has no path for a signal current, so $M_1$'s current cannot change, and since its gate is fixed, its source voltage $v_X$ cannot change either. In feedback terms, the output node has infinite resistance, so the loop gain is infinite and X is held at a perfect virtual ground.

### Step 4 — Input impedance

Since $v_X = 0$ for any input current,

$$Z_{in} = \frac{v_X}{i_{in}} = 0 .$$

### Step 5 — KCL at X gives the output voltage

Currents entering X: $i_{in}$ from $R_S$; $-g_{m1}v_X$ from $M_1$ (which is zero by Step 3); and $-g_{m2}v_{out}$ from $M_2$. $I_2$ is open. So

$$i_{in} - g_{m1}v_X - g_{m2}v_{out} = 0 .$$

With $v_X = 0$:

$$
\begin{aligned}
i_{in} - g_{m2}v_{out} &= 0\\
v_{out} &= \frac{i_{in}}{g_{m2}}.
\end{aligned}
$$

**Physical picture.** The input current cannot go through $M_1$ (its current is pinned) or through $I_2$ (ideal), so $M_2$ must absorb it. To take an extra $i_{in}$ out of X, $M_2$ must push *less* current into X, so its source–gate voltage must shrink: its gate, the output, must rise by $i_{in}/g_{m2}$. The output therefore moves in the **same direction** as the input current.

### Step 6 — Transfer function

With $v_X = 0$, the current through $R_S$ is

$$i_{in} = \frac{V_{in} - v_X}{R_S} = \frac{V_{in}}{R_S}.$$

Substitute into $v_{out} = i_{in}/g_{m2}$:

$$\frac{V_{out}}{V_{in}} = +\frac{1}{g_{m2}R_S}.$$

The circuit is a transimpedance amplifier with transimpedance $+1/g_{m2}$, driven by the current $V_{in}/R_S$.

### Step 7 — Check with finite output resistances

Add $r_{O1}$ (between the output and X) and $r_{O2}$ (from X to ac ground).

KCL at the output: the current leaving through $M_1$ and $r_{O1}$ must be zero:

$$-g_{m1}v_X + \frac{v_{out} - v_X}{r_{O1}} = 0 \quad\Longrightarrow\quad v_{out} = (1 + g_{m1}r_{O1})\,v_X .$$

KCL at X: the current from the output through $M_1$/$r_{O1}$ is zero (just shown), so

$$i_{in} = g_{m2}v_{out} + \frac{v_X}{r_{O2}} = v_X\left[g_{m2}(1 + g_{m1}r_{O1}) + \frac{1}{r_{O2}}\right],$$

$$Z_{in} = \frac{1}{g_{m2}(1 + g_{m1}r_{O1}) + 1/r_{O2}}\approx\frac{1}{g_{m1}g_{m2}r_{O1}} .$$

As $r_{O1}, r_{O2}\to\infty$ this tends to 0, confirming Step 4.

### Result

$$Z_{in} = 0, \qquad \frac{V_{out}}{V_{in}} = +\frac{1}{g_{m2}R_S}.$$

KCL at the output (ideal $I_1$, no gate current into $M_2$) forces the common-gate device's current $-g_{m1}v_X$ to be zero, so X is a virtual ground. The input current $V_{in}/R_S$ is absorbed by $M_2$, which requires $v_{out} = i_{in}/g_{m2}$.

**Common mistake.** Quoting $Z_{in} = 1/g_{m1}$, the input impedance of an isolated common-gate stage. That value assumes the drain current of $M_1$ can change freely. Here the output node has no resistive path and drives the gate of $M_2$, closing a negative-feedback loop of infinite gain that holds X at virtual ground.

**Common mistake.** Getting the sign wrong. $M_2$ is a PMOS with its source at $V_{DD}$: to *remove* current from X, its gate must go *up*. So a positive input current gives a positive output voltage and the gain is $+1/(g_{m2}R_S)$, not $-1/(g_{m2}R_S)$.

**Common mistake.** Misreading $M_2$ as an NMOS source follower, or giving a gain such as $g_{m1}/g_{m2}$. $g_{m1}$ does not appear in the result: with $\lambda = 0$ the common-gate device carries no signal current at all, and only $M_2$ converts the input current to the output voltage.
