# Detailed solution - R120

**Approach.** The circuit is an NMOS cascode ($M_1$ under $M_2$) whose PMOS load $M_3$ is not an ordinary current source: its gate is driven by the cascode node $X$. Write KCL at $X$ and at the output and solve; a $G_mR_{out}$ view then explains the $(g_{m2} - g_{m3})$ factor in the result.

### Step 1 — Small-signal model

Call the node between $M_1$ and $M_2$ (which also drives the gate of $M_3$) node $X$. $V_{b1}$ and $V_{DD}$ are ac grounds and $\gamma = 0$. With the unknowns $v_X$ and $v_{out}$:

- **$M_1$**: $v_{gs1} = v_{in}$; a controlled source $g_{m1}v_{in}$ from $X$ to ground, with $r_{O1}$ from $X$ to ground.
- **$M_2$**: $v_{gs2} = -v_X$; a controlled source $-g_{m2}v_X$ from out (drain) to $X$ (source), with $r_{O2}$ between out and $X$.
- **$M_3$**: $v_{gs3} = v_X$ (source at ac ground); a controlled source $g_{m3}v_X$ from out (drain) to ac ground, with $r_{O3}$ from out to ac ground.

<!-- diagram: diagram-01.cir -->

Name two branch currents:

$$i_2 \equiv \text{current from out down through } M_2 \text{ into } X = -g_{m2}v_X + \frac{v_{out} - v_X}{r_{O2}},$$

$$i_3 \equiv \text{current from } V_{DD} \text{ through } M_3 \text{ into out} = -g_{m3}v_X - \frac{v_{out}}{r_{O3}}$$

($i_3$ is the negative of $M_3$'s drain-to-source current $g_{m3}v_X + v_{out}/r_{O3}$).

### Step 2 — The two KCL equations

**At the output** (unloaded), $i_3 = i_2$:

$$-g_{m3}v_X - \frac{v_{out}}{r_{O3}} = -g_{m2}v_X + \frac{v_{out} - v_X}{r_{O2}}. \tag{1}$$

**At $X$**, $i_2 = g_{m1}v_{in} + v_X/r_{O1}$; combined with $i_2 = i_3$:

$$-g_{m3}v_X - \frac{v_{out}}{r_{O3}} = g_{m1}v_{in} + \frac{v_X}{r_{O1}}. \tag{2}$$

### Step 3 — Solve for the gain

**$v_X$ from (1).** Collecting the $v_X$ terms on the left and the $v_{out}$ terms on the right:

$$v_X\left(g_{m2} - g_{m3} + \frac{1}{r_{O2}}\right) = v_{out}\,\frac{r_{O2} + r_{O3}}{r_{O2}r_{O3}}.$$

Multiplying both sides by $r_{O2}r_{O3}$:

$$v_X\,r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right] = v_{out}\,(r_{O2} + r_{O3}),$$

$$v_X = \frac{r_{O2} + r_{O3}}{r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]}\,v_{out}. \tag{3}$$

**Rearrange (2):**

$$g_{m1}v_{in} = -v_X\left(g_{m3} + \frac{1}{r_{O1}}\right) - \frac{v_{out}}{r_{O3}} = -v_X\,\frac{1 + g_{m3}r_{O1}}{r_{O1}} - \frac{v_{out}}{r_{O3}}.$$

**Substitute (3):**

$$g_{m1}v_{in} = -v_{out}\left[\frac{(r_{O2} + r_{O3})(1 + g_{m3}r_{O1})}{r_{O1}r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]} + \frac{1}{r_{O3}}\right].$$

Over the common denominator $r_{O1}r_{O3}[1 + (g_{m2} - g_{m3})r_{O2}]$, the bracket's numerator is

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

**Check.** With $M_3$'s gate at ac ground ($g_{m3} = 0$):
$$-\frac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}} \approx -g_{m1}\left\{r_{O3}\,\Big\|\,\left[(1 + g_{m2}r_{O2})r_{O1} + r_{O2}\right]\right\},$$
the familiar cascode gain with a current-source load $r_{O3}$. ✓

### Step 4 — Large-$g_mr_O$ approximation

If all $g_mr_O \gg 1$ and $g_{m2} \neq g_{m3}$ (so $|g_{m2} - g_{m3}|r_{O2} \gg 1$), then $1 + (g_{m2} - g_{m3})r_{O2} \approx (g_{m2} - g_{m3})r_{O2}$, and $g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} = r_{O1}(g_{m2}r_{O2} + g_{m3}r_{O3})$ dominates $r_{O1} + r_{O2} + r_{O3}$:

$$A_v \approx -\frac{g_{m1}r_{O1}r_{O3}(g_{m2} - g_{m3})r_{O2}}{r_{O1}(g_{m2}r_{O2} + g_{m3}r_{O3})} = -\frac{g_{m1}(g_{m2} - g_{m3})\,r_{O2}r_{O3}}{g_{m2}r_{O2} + g_{m3}r_{O3}}.$$

For $g_{m2} > g_{m3}$ the gain is inverting and of the order of $g_mr_O$.

### Step 5 — Interpretation as $A_v = -G_mR_{out}$

**Transconductance (output shorted).** $X$ moves by about $v_X \approx -g_{m1}v_{in}/g_{m2}$. $M_2$ pulls $M_1$'s signal current, $\approx g_{m1}v_{in}$, *out* of the output, while $M_3$'s falling gate makes it push an extra $\approx g_{m3}g_{m1}v_{in}/g_{m2}$ *into* the output. The net is $G_m \approx g_{m1}(1 - g_{m3}/g_{m2}) = g_{m1}(g_{m2} - g_{m3})/g_{m2}$. Exactly, $G_m = g_{m1}r_{O1}[1 + (g_{m2} - g_{m3})r_{O2}]/R_c$, where $R_c = r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}$ is the resistance looking down into the cascode.

**Output resistance.** A test voltage $v_x$ drives $v_x/R_c$ down the cascode, raising $X$ by $r_{O1}v_x/R_c$; the rising gate of $M_3$ cuts its current by $g_{m3}r_{O1}v_x/R_c$, which the test source must also supply. With $r_{O3}$:

$$\frac{1}{R_{out}} = \frac{1}{r_{O3}} + \frac{1 + g_{m3}r_{O1}}{R_c}\quad\Longrightarrow\quad R_{out} = r_{O3}\,\Big\|\,\frac{R_c}{1 + g_{m3}r_{O1}} \approx r_{O3}\,\Big\|\,\frac{g_{m2}r_{O2}}{g_{m3}}.$$

$-G_mR_{out}$ reproduces the exact result of Step 3 ($R_c$ cancels). So the connection of $M_3$'s gate to $X$ both subtracts $g_{m3}/g_{m2}$ of the signal current and lowers the output resistance from about $r_{O3}$ to $r_{O3}\parallel(g_{m2}r_{O2}/g_{m3})$.

### Result

$$A_v = -\frac{g_{m1}r_{O1}r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}},$$

and for $g_mr_O \gg 1$:

$$A_v \approx -\frac{g_{m1}(g_{m2} - g_{m3})\,r_{O2}r_{O3}}{g_{m2}r_{O2} + g_{m3}r_{O3}}.$$

**Common mistake.** Treating $M_3$ as an ordinary current source (gate at ac ground). That gives the plain cascode result $\approx -g_{m1}[r_{O3}\parallel g_{m2}r_{O1}r_{O2}] \approx -g_{m1}r_{O3}$, missing both the $(g_{m2} - g_{m3})$ factor and the reduced output resistance.

**Common mistake.** The sign of $M_3$'s contribution. When $v_{in}$ rises, $X$ *falls* and the PMOS conducts *more*, opposing $M_2$'s pull-down; writing $+g_{m3}v_X$ for the current into the output turns $(g_{m2} - g_{m3})$ into $(g_{m2} + g_{m3})$.

**Common mistake.** Reading the output at $X$, or connecting $M_3$'s gate to the output or to $V_{DD}$. The output is the common drain of $M_2$ and $M_3$, and for $g_{m2} > g_{m3}$ the stage is inverting.
