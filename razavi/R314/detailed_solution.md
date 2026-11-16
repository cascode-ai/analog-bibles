# Detailed solution - R314

**Approach.** Keep only $C_{GS2}$ and the new gate resistor $R_G$, with $\lambda = \gamma = 0$. The input transistor $M_1$ then delivers a fixed signal current $g_{m1}V_{in}$, drawn from node X. That current must be supplied by $M_2$, either through its channel or through $C_{GS2}$, and both paths are controlled by the same voltage $V_{GS2}$. KCL at X fixes $V_{GS2}$; only the channel part reaches the output. The result does not depend on $R_G$.

### Step 1 — The circuit with only $C_{GS2}$ and $R_G$

From the figure, with the stated simplifications:

- $V_{in}$ drives the gate of $M_1$ (node A) through $R_S$. All capacitances at A are neglected, so the gate draws no current, $R_S$ carries no signal current, and $V_A = V_{in}$.
- $M_1$ (source grounded) has its drain at node **X**.
- $M_2$ has its source at X, its drain at the output (node Y), and its gate at node **G**. $R_G$ connects G to $V_b$ (an ac ground). $C_{GS2}$ connects G to X.
- $R_D$ connects the output to $V_{DD}$ (an ac ground).
- $C_{GD1}$, $C_{GS1}$, $C_{GD2}$, $C_{DB1}$, $C_{SB2}$, $C_{DB2}$ and $C_L$ are all neglected.

### Step 2 — Small-signal model

- **$M_1$:** current $g_{m1}V_{in}$ from X to ground. With $\lambda = 0$, it does not depend on $V_X$.
- **$M_2$:** current $g_{m2}V_{GS2}$ from the output to X, where $V_{GS2} = V_G - V_X$. No $g_{mb2}$ ($\gamma = 0$), no $r_{O2}$.
- **$C_{GS2}$** from G to X, carrying $C_{GS2}s\,V_{GS2}$ from G to X.
- **$R_G$** from G to ground; **$R_D$** from the output to ground.

<!-- diagram: diagram-01.cir -->

### Step 3 — KCL at node X

Current arrives at X from $M_2$'s channel ($g_{m2}V_{GS2}$) and through $C_{GS2}$ ($C_{GS2}sV_{GS2}$), and leaves through $M_1$ ($g_{m1}V_{in}$):

$$g_{m2}V_{GS2} + C_{GS2}s\,V_{GS2} = g_{m1}V_{in}.$$

Solve for $V_{GS2}$:

$$V_{GS2} = \frac{g_{m1}V_{in}}{g_{m2} + C_{GS2}s}.$$

$R_G$ does not appear: whatever current flows through $C_{GS2}$ is determined by $V_{GS2}$ alone.

### Step 4 — KCL at the output

The output node connects only $R_D$ and the drain of $M_2$. The current $g_{m2}V_{GS2}$ flowing down through $M_2$ must come through $R_D$, so

$$-\frac{V_{out}}{R_D} = g_{m2}V_{GS2}\quad\Longrightarrow\quad V_{out} = -R_D\,g_{m2}V_{GS2}.$$

### Step 5 — The transfer function

Substitute $V_{GS2}$ from Step 3:

$$
\begin{aligned}
V_{out} &= -R_D\,\frac{g_{m1}g_{m2}}{g_{m2} + C_{GS2}s}\,V_{in}\\
\frac{V_{out}}{V_{in}}(s) &= -\frac{g_{m1}R_D}{1 + \dfrac{C_{GS2}}{g_{m2}}s}.
\end{aligned}
$$

- Low-frequency gain: $-g_{m1}R_D$, the usual cascode gain with a resistive load.
- One pole at $\omega_p = g_{m2}/C_{GS2}$, which is approximately the transit frequency $\omega_T$ of $M_2$.
- Neither $R_G$ nor $R_S$ appears.

### Step 6 — Why $R_G$ drops out, and what it does change

**Current division.** $M_1$ forces a fixed current $g_{m1}V_{in}$ out of X. Two parallel paths can supply it, both controlled by the same $V_{GS2}$: the channel ($g_{m2}V_{GS2}$) and the capacitor ($C_{GS2}sV_{GS2}$). The fraction carried by the channel is

$$\frac{g_{m2}}{g_{m2} + C_{GS2}s},$$

regardless of $R_G$. Only the channel current reaches the output; the capacitor current flows through $C_{GS2}$ to G and then through $R_G$ to the ac ground at $V_b$, and is lost. This is the same current division that defines a transistor's $\omega_T$.

**What $R_G$ does change** is how much G and X move. KCL at G (current through $R_G$ into G equals the current leaving through $C_{GS2}$):

$$-\frac{V_G}{R_G} = C_{GS2}s\,V_{GS2}\quad\Longrightarrow\quad V_G = -R_GC_{GS2}s\,V_{GS2},$$

$$V_X = V_G - V_{GS2} = -V_{GS2}(1 + R_GC_{GS2}s) = -g_{m1}V_{in}\,\frac{1 + R_GC_{GS2}s}{g_{m2} + C_{GS2}s}.$$

So $R_G$ makes the gate and source of $M_2$ swing together at high frequency (X swings more), but since $V_{GS2}$ is unchanged, the output is unaffected. In a fuller model, a larger swing at X would matter through the capacitances neglected here ($C_{DB1}$, $C_{SB2}$, $C_{GD1}$), but not in this one.

### Result

$$\frac{V_{out}}{V_{in}}(s) = -\frac{g_{m1}R_D}{1 + \dfrac{C_{GS2}}{g_{m2}}s}$$

A single pole at $g_{m2}/C_{GS2}$ (about $\omega_T$ of $M_2$), with the low-frequency gain $-g_{m1}R_D$. $R_G$ (and $R_S$) do not appear: the split of $M_1$'s current between $M_2$'s channel and $C_{GS2}$ depends only on $g_{m2}$ and $C_{GS2}s$. $R_G$ only changes how the gate and source of $M_2$ move: $V_X = -g_{m1}V_{in}(1 + R_GC_{GS2}s)/(g_{m2} + C_{GS2}s)$.

**Common mistake.** Writing a pole that depends on $R_G$, such as $1/[(R_G + 1/g_{m2})C_{GS2}]$, by treating $C_{GS2}$ as a capacitor charged through $R_G$ plus the source resistance. The relevant quantity is the current split at X, which depends only on $V_{GS2}$; $R_G$ cancels out of it exactly.

**Common mistake.** Adding a zero from $R_G$ to $V_{out}/V_{in}$. The factor $1 + R_GC_{GS2}s$ appears in $V_X$, not in the output: the output current is $g_{m2}V_{GS2}$, and $V_{GS2}$ has no $R_G$ dependence.

**Common mistake.** Giving a low-frequency gain other than $-g_{m1}R_D$ (for example including $R_S$ or $R_G$). At dc no current flows in $C_{GS2}$, all of $M_1$'s current passes through $M_2$ to $R_D$, and $R_S$ carries no current because the gate of $M_1$ draws none.
