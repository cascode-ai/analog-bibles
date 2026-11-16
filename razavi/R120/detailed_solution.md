# Detailed solution - R120

**Approach.** The circuit is an NMOS cascode ($M_1$ with $M_2$ on top) whose PMOS load $M_3$ is not an ordinary current source: its gate is driven by the cascode node $X$. We write the small-signal model, apply Kirchhoff's current law (KCL) at $X$ and at the output, and solve the two equations. A $G_mR_{out}$ view then explains the $(g_{m2} - g_{m3})$ factor in the result.

### Step 1 — Reading the circuit

From the figure:

- $M_1$: NMOS, gate at $V_{in}$, source at ground, drain at a node we call $X$.
- $M_2$: NMOS cascode device, gate at the dc bias $V_{b1}$, source at $X$, drain at $V_{out}$.
- $M_3$: PMOS, source at $V_{DD}$, drain at $V_{out}$, and its **gate connected to $X$** (the wire on the right runs from the gate of $M_3$ down to the node between $M_2$ and $M_1$).

The output is the drain of $M_2$ and of $M_3$.

The problem gives $\gamma = 0$ (no body effect for $M_2$) and $\lambda \neq 0$. Here $g_{mi}$ is the transconductance of $M_i$, $r_{Oi} \approx 1/(\lambda I_D)$ its output resistance due to channel-length modulation, and lower-case symbols are small-signal quantities. $V_{b1}$, $V_{DD}$ and ground are **ac grounds**.

### Step 2 — Small-signal model

The small-signal model of a PMOS is identical to that of an NMOS: a current $g_mv_{gs}$ from drain to source, with $r_O$ from drain to source. The unknown node voltages are $v_X$ and $v_{out}$.

- **$M_1$**: $v_{gs1} = v_{in}$. Current $g_{m1}v_{in}$ from $X$ to ground, with $r_{O1}$ from $X$ to ground.
- **$M_2$**: gate at ac ground, source at $X$, so $v_{gs2} = -v_X$. Current $-g_{m2}v_X$ from out (drain) to $X$ (source), with $r_{O2}$ between out and $X$.
- **$M_3$**: source at ac ground, gate at $X$, so $v_{gs3} = v_X$. Current $g_{m3}v_X$ from out (drain) to ac ground (source), with $r_{O3}$ from out to ac ground.

<!-- diagram: diagram-01.cir -->

It is convenient to name two branch currents:

$$i_2 \equiv \text{current from out down through } M_2 \text{ into } X = -g_{m2}v_X + \frac{v_{out} - v_X}{r_{O2}},$$

$$i_3 \equiv \text{current from } V_{DD} \text{ through } M_3 \text{ into out} = -g_{m3}v_X - \frac{v_{out}}{r_{O3}}.$$

(For $M_3$, the drain-to-source current is $g_{m3}v_X + v_{out}/r_{O3}$; the current *into* the output from $V_{DD}$ is its negative.)

### Step 3 — The two KCL equations

**KCL at the output** (unloaded): what $M_3$ supplies, $M_2$ takes away:

$$i_3 = i_2:\qquad -g_{m3}v_X - \frac{v_{out}}{r_{O3}} = -g_{m2}v_X + \frac{v_{out} - v_X}{r_{O2}}. \tag{1}$$

**KCL at $X$**: what $M_2$ delivers, $M_1$ takes away:

$$i_2 = g_{m1}v_{in} + \frac{v_X}{r_{O1}}.$$

Combining it with (1) ($i_2 = i_3$):

$$-g_{m3}v_X - \frac{v_{out}}{r_{O3}} = g_{m1}v_{in} + \frac{v_X}{r_{O1}}. \tag{2}$$

### Step 4 — Solve for the gain

**From (1), express $v_X$ through $v_{out}$.** Move the $v_X$ terms to the left and the $v_{out}$ terms to the right:

$$g_{m2}v_X - g_{m3}v_X + \frac{v_X}{r_{O2}} = \frac{v_{out}}{r_{O2}} + \frac{v_{out}}{r_{O3}},$$

$$v_X\left(g_{m2} - g_{m3} + \frac{1}{r_{O2}}\right) = v_{out}\,\frac{r_{O2} + r_{O3}}{r_{O2}r_{O3}}.$$

Multiply both sides by $r_{O2}r_{O3}$:

$$v_X\,r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right] = v_{out}\,(r_{O2} + r_{O3}),$$

$$v_X = \frac{r_{O2} + r_{O3}}{r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]}\,v_{out}. \tag{3}$$

**Rearrange (2):**

$$g_{m1}v_{in} = -v_X\left(g_{m3} + \frac{1}{r_{O1}}\right) - \frac{v_{out}}{r_{O3}} = -v_X\,\frac{1 + g_{m3}r_{O1}}{r_{O1}} - \frac{v_{out}}{r_{O3}}.$$

**Substitute (3):**

$$g_{m1}v_{in} = -v_{out}\left[\frac{(r_{O2} + r_{O3})(1 + g_{m3}r_{O1})}{r_{O1}r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]} + \frac{1}{r_{O3}}\right].$$

Put the bracket over the common denominator $r_{O1}r_{O3}[1 + (g_{m2} - g_{m3})r_{O2}]$. Its numerator is

$$
\begin{aligned}
&(r_{O2} + r_{O3})(1 + g_{m3}r_{O1}) + r_{O1}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]\\
&= r_{O2} + r_{O3} + g_{m3}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} + r_{O1} + g_{m2}r_{O1}r_{O2} - g_{m3}r_{O1}r_{O2}\\
&= r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3},
\end{aligned}
$$

where the two $g_{m3}r_{O1}r_{O2}$ terms cancelled. Therefore

$$g_{m1}v_{in} = -v_{out}\,\frac{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}}{r_{O1}r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]},$$

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}r_{O1}r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}}.$$

**Check.** If $M_3$'s gate were at ac ground, we would set $g_{m3} = 0$ and get
$$-\frac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}} \approx -g_{m1}\left\{r_{O3}\,\Big\|\,\left[(1 + g_{m2}r_{O2})r_{O1} + r_{O2}\right]\right\},$$
the familiar gain of a cascode with a current-source load $r_{O3}$. ✓

### Step 5 — Large-$g_mr_O$ approximation

If all $g_mr_O \gg 1$ and $g_{m2} \neq g_{m3}$ (so $|g_{m2} - g_{m3}|r_{O2} \gg 1$):

- numerator: $1 + (g_{m2} - g_{m3})r_{O2} \approx (g_{m2} - g_{m3})r_{O2}$;
- denominator: $g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} = r_{O1}(g_{m2}r_{O2} + g_{m3}r_{O3})$ dominates $r_{O1} + r_{O2} + r_{O3}$.

Hence

$$A_v \approx -\frac{g_{m1}r_{O1}r_{O3}(g_{m2} - g_{m3})r_{O2}}{r_{O1}(g_{m2}r_{O2} + g_{m3}r_{O3})} = -\frac{g_{m1}(g_{m2} - g_{m3})\,r_{O2}r_{O3}}{g_{m2}r_{O2} + g_{m3}r_{O3}}.$$

For $g_{m2} > g_{m3}$ the gain is negative (inverting) and of the order of $g_mr_O$.

### Step 6 — Interpretation as $A_v = -G_mR_{out}$

**Transconductance (output shorted).** With $v_{out} = 0$, node $X$ is driven by $M_1$ and looks up into the source of $M_2$, so $X$ moves by about $v_X \approx -g_{m1}v_{in}/g_{m2}$. Then:

- $M_2$ passes $M_1$'s signal current, $\approx g_{m1}v_{in}$, and pulls it *out* of the output;
- $M_3$'s gate falls by $g_{m1}v_{in}/g_{m2}$, so the PMOS pushes an extra $\approx g_{m3}g_{m1}v_{in}/g_{m2}$ *into* the output.

The net is $G_m \approx g_{m1}(1 - g_{m3}/g_{m2}) = g_{m1}(g_{m2} - g_{m3})/g_{m2}$. Exactly, $G_m = g_{m1}r_{O1}[1 + (g_{m2} - g_{m3})r_{O2}]/R_c$, where $R_c = r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}$ is the resistance looking down into the cascode.

**Output resistance.** A test voltage $v_x$ at the output drives the current $v_x/R_c$ down the cascode, which raises $X$ by $r_{O1}v_x/R_c$. The rising gate of $M_3$ cuts its current by $g_{m3}r_{O1}v_x/R_c$, which the test source must also supply. Together with $r_{O3}$:

$$\frac{1}{R_{out}} = \frac{1}{r_{O3}} + \frac{1 + g_{m3}r_{O1}}{R_c}\quad\Longrightarrow\quad R_{out} = r_{O3}\,\Big\|\,\frac{R_c}{1 + g_{m3}r_{O1}} \approx r_{O3}\,\Big\|\,\frac{g_{m2}r_{O2}}{g_{m3}}.$$

Multiplying $-G_mR_{out}$ reproduces the exact result of Step 4 (the factor $R_c$ cancels). The connection of $M_3$'s gate to $X$ thus has two effects: it subtracts $g_{m3}/g_{m2}$ of the signal current (the $g_{m2} - g_{m3}$ factor) and it lowers the output resistance from about $r_{O3}$ to $r_{O3}\parallel(g_{m2}r_{O2}/g_{m3})$.

### Result

$$A_v = -\frac{g_{m1}r_{O1}r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}},$$

and for $g_mr_O \gg 1$:

$$A_v \approx -\frac{g_{m1}(g_{m2} - g_{m3})\,r_{O2}r_{O3}}{g_{m2}r_{O2} + g_{m3}r_{O3}}.$$

**Common mistake.** Treating $M_3$ as an ordinary current source (gate at ac ground). That gives the plain cascode result $\approx -g_{m1}[r_{O3}\parallel g_{m2}r_{O1}r_{O2}] \approx -g_{m1}r_{O3}$, missing both the $(g_{m2} - g_{m3})$ factor and the reduced output resistance. The gate of $M_3$ is wired to $X$, which carries signal.

**Common mistake.** Getting the sign of $M_3$'s contribution wrong. When $v_{in}$ rises, $X$ *falls*, and a falling gate makes a PMOS conduct *more*, so $M_3$ pushes current into the output and opposes $M_2$'s pull-down. Writing $+g_{m3}v_X$ for the current into the output turns $(g_{m2} - g_{m3})$ into $(g_{m2} + g_{m3})$.

**Common mistake.** Reading the output at $X$ or connecting $M_3$'s gate to the output or to $V_{DD}$. The output is the common drain of $M_2$ and $M_3$; $X$ is the low-impedance cascode node. For $g_{m2} > g_{m3}$ the stage is inverting.
