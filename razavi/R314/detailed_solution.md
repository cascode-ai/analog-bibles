# Detailed solution - R314

**Approach.** With only $C_{GS2}$ and $R_G$ kept and $\lambda = \gamma = 0$, $M_1$ draws a fixed signal current $g_{m1}V_{in}$ from node X. $M_2$ must supply it through its channel or through $C_{GS2}$, both controlled by $V_{GS2}$. KCL at X fixes $V_{GS2}$, and only the channel part reaches the output, so the result does not depend on $R_G$.

### Step 1 — Small-signal model

Call the drain of $M_1$ (source of $M_2$) X and the gate of $M_2$ G. With no capacitance at the gate of $M_1$, $R_S$ carries no signal current and the gate of $M_1$ is at $V_{in}$; $V_b$ and $V_{DD}$ are ac grounds.

- **$M_1$:** a current $g_{m1}V_{in}$ from X to ground, independent of $V_X$ ($\lambda = 0$).
- **$M_2$:** a current $g_{m2}V_{GS2}$ from the output to X, with $V_{GS2} = V_G - V_X$ (no $g_{mb2}$, no $r_{O2}$).
- **$C_{GS2}$** from G to X, carrying $C_{GS2}s\,V_{GS2}$ from G to X; **$R_G$** from G to ground; **$R_D$** from the output to ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at node X

$M_2$'s channel current $g_{m2}V_{GS2}$ and the current $C_{GS2}sV_{GS2}$ through $C_{GS2}$ arrive at X, and $g_{m1}V_{in}$ leaves through $M_1$:

$$g_{m2}V_{GS2} + C_{GS2}s\,V_{GS2} = g_{m1}V_{in}\quad\Longrightarrow\quad V_{GS2} = \frac{g_{m1}V_{in}}{g_{m2} + C_{GS2}s}.$$

$R_G$ does not appear: the current through $C_{GS2}$ is set by $V_{GS2}$ alone.

### Step 3 — The transfer function

The output connects only $R_D$ and the drain of $M_2$, so $-V_{out}/R_D = g_{m2}V_{GS2}$, i.e. $V_{out} = -R_D\,g_{m2}V_{GS2}$. Substituting $V_{GS2}$:

$$
\begin{aligned}
V_{out} &= -R_D\,\frac{g_{m1}g_{m2}}{g_{m2} + C_{GS2}s}\,V_{in}\\
\frac{V_{out}}{V_{in}}(s) &= -\frac{g_{m1}R_D}{1 + \dfrac{C_{GS2}}{g_{m2}}s}.
\end{aligned}
$$

- Low-frequency gain: $-g_{m1}R_D$, the usual cascode gain with a resistive load.
- One pole at $\omega_p = g_{m2}/C_{GS2}$, approximately the transit frequency $\omega_T$ of $M_2$.
- Neither $R_G$ nor $R_S$ appears.

### Step 4 — Why $R_G$ drops out, and what it does change

$M_1$ forces $g_{m1}V_{in}$ out of X, supplied by two parallel paths controlled by the same $V_{GS2}$; the channel carries the fraction

$$\frac{g_{m2}}{g_{m2} + C_{GS2}s},$$

regardless of $R_G$. Only the channel current reaches the output; the capacitor current flows through $C_{GS2}$ to G and through $R_G$ to the ac ground at $V_b$. This is the same current division that defines a transistor's $\omega_T$.

$R_G$ does change how much G and X move. KCL at G (the current through $R_G$ into G leaves through $C_{GS2}$):

$$-\frac{V_G}{R_G} = C_{GS2}s\,V_{GS2}\quad\Longrightarrow\quad V_G = -R_GC_{GS2}s\,V_{GS2},$$

$$V_X = V_G - V_{GS2} = -V_{GS2}(1 + R_GC_{GS2}s) = -g_{m1}V_{in}\,\frac{1 + R_GC_{GS2}s}{g_{m2} + C_{GS2}s}.$$

So at high frequency the gate and source of $M_2$ swing together and X swings more, but $V_{GS2}$, and hence the output, is unchanged. A larger swing at X would matter only through capacitances neglected here ($C_{DB1}$, $C_{SB2}$, $C_{GD1}$).

### Result

$$\frac{V_{out}}{V_{in}}(s) = -\frac{g_{m1}R_D}{1 + \dfrac{C_{GS2}}{g_{m2}}s}$$

A single pole at $g_{m2}/C_{GS2}$ (about $\omega_T$ of $M_2$), with the low-frequency gain $-g_{m1}R_D$. $R_G$ (and $R_S$) do not appear: the split of $M_1$'s current between $M_2$'s channel and $C_{GS2}$ depends only on $g_{m2}$ and $C_{GS2}s$. $R_G$ only changes how the gate and source of $M_2$ move: $V_X = -g_{m1}V_{in}(1 + R_GC_{GS2}s)/(g_{m2} + C_{GS2}s)$.

**Common mistake.** Writing a pole that depends on $R_G$, such as $1/[(R_G + 1/g_{m2})C_{GS2}]$, as if $C_{GS2}$ were charged through $R_G$ plus the source resistance. What matters is the current split at X, which depends only on $V_{GS2}$; $R_G$ cancels exactly.

**Common mistake.** Adding a zero from $R_G$ to $V_{out}/V_{in}$. The factor $1 + R_GC_{GS2}s$ appears in $V_X$, not in the output current $g_{m2}V_{GS2}$.

**Common mistake.** Giving a low-frequency gain other than $-g_{m1}R_D$ (for example including $R_S$ or $R_G$). At dc no current flows in $C_{GS2}$, all of $M_1$'s current reaches $R_D$, and $R_S$ carries no current.
