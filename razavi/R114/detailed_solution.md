# Detailed solution - R114

**Approach.** Write KCL at the source node of $M_1$ (called $S$) and at the output of the small-signal circuit, and solve for $v_{out}/v_{in}$. Then check the answer as $A_v = -G_mR_{out}$, which also explains why the gain is high.

### Step 1 — Small-signal model

Call the source of $M_1$ (the top of $R_S$, which also drives the gate of $M_2$) node $S$. $M_2$ is therefore not a fixed current source: its gate follows the voltage across $R_S$. $V_{DD}$ is an ac ground and $\gamma = 0$ (no body effect, even though $M_1$'s source is not grounded). With the unknowns $v_S$ and $v_{out}$:

- **$M_1$**: $v_{gs1} = v_{in} - v_S$; a controlled source $g_{m1}(v_{in} - v_S)$ from out (drain) to $S$, with $r_{O1}$ between out and $S$.
- **$R_S$**: between $S$ and ground.
- **$M_2$**: $v_{gs2} = v_S$ (source at ac ground); a controlled source $g_{m2}v_S$ from out (drain) to ground, with $r_{O2}$ between out and ground.

<!-- diagram: diagram-01.cir -->

No current flows into the gate of $M_2$, so all of $M_1$'s current flows through $R_S$.

### Step 2 — The two KCL equations

**At node $S$** ($r_{O1}$ carries $(v_{out} - v_S)/r_{O1}$):

$$g_{m1}(v_{in} - v_S) + \frac{v_{out} - v_S}{r_{O1}} = \frac{v_S}{R_S}. \tag{1}$$

**At the output** (unloaded), the currents leaving through $M_2$ and $M_1$ sum to zero:

$$\left[g_{m2}v_S + \frac{v_{out}}{r_{O2}}\right] + \left[g_{m1}(v_{in} - v_S) + \frac{v_{out} - v_S}{r_{O1}}\right] = 0.$$

The second bracket is the left-hand side of (1), i.e. $v_S/R_S$:

$$g_{m2}v_S + \frac{v_{out}}{r_{O2}} + \frac{v_S}{R_S} = 0. \tag{2}$$

That is, the signal current $M_1$ draws from the output (the current in $R_S$) must be supplied by $M_2$.

### Step 3 — Solve for the gain

**From (2):** $v_S\,(g_{m2} + 1/R_S) = -v_{out}/r_{O2}$, and since $g_{m2} + 1/R_S = (1 + g_{m2}R_S)/R_S$,

$$v_S = -\frac{R_S}{r_{O2}(1 + g_{m2}R_S)}\,v_{out}. \tag{3}$$

**Rearrange (1)**, moving the $v_S$ terms to the right:

$$
\begin{aligned}
g_{m1}v_{in} - g_{m1}v_S + \frac{v_{out}}{r_{O1}} - \frac{v_S}{r_{O1}} &= \frac{v_S}{R_S}\\
g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} &= v_S\left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_S}\right),
\end{aligned}
$$

with

$$g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_S} = \frac{g_{m1}r_{O1}R_S + R_S + r_{O1}}{r_{O1}R_S}.$$

**Substitute (3):**

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} = -\frac{R_S}{r_{O2}(1 + g_{m2}R_S)}\cdot\frac{r_{O1} + R_S + g_{m1}r_{O1}R_S}{r_{O1}R_S}\,v_{out} = -\frac{r_{O1} + R_S + g_{m1}r_{O1}R_S}{r_{O1}r_{O2}(1 + g_{m2}R_S)}\,v_{out}.$$

Moving $v_{out}/r_{O1}$ to the right over the common denominator $r_{O1}r_{O2}(1 + g_{m2}R_S)$:

$$g_{m1}v_{in} = -\frac{r_{O2}(1 + g_{m2}R_S) + r_{O1} + R_S + g_{m1}r_{O1}R_S}{r_{O1}r_{O2}(1 + g_{m2}R_S)}\,v_{out},$$

where the numerator groups as

$$r_{O2} + g_{m2}r_{O2}R_S + r_{O1} + R_S + g_{m1}r_{O1}R_S = r_{O1} + r_{O2} + R_S(1 + g_{m1}r_{O1} + g_{m2}r_{O2}).$$

**The gain:**

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}r_{O1}r_{O2}\,(1 + g_{m2}R_S)}{r_{O1} + r_{O2} + R_S\,(1 + g_{m1}r_{O1} + g_{m2}r_{O2})}.$$

The stage is inverting.

### Step 4 — Cross-check as $A_v = -G_mR_{out}$

**Short-circuit transconductance** ($v_{out} = 0$). Equation (1) gives

$$g_{m1}(v_{in} - v_S) - \frac{v_S}{r_{O1}} = \frac{v_S}{R_S}\quad\Longrightarrow\quad v_S = \frac{g_{m1}r_{O1}R_S}{r_{O1} + R_S + g_{m1}r_{O1}R_S}\,v_{in}.$$

The current pulled out of the shorted output is $M_1$'s current ($v_S/R_S$) plus the *reduction* of $M_2$'s current ($g_{m2}v_S$):

$$|G_m| = \frac{(1 + g_{m2}R_S)\,v_S}{R_S\,v_{in}} = \frac{g_{m1}r_{O1}(1 + g_{m2}R_S)}{r_{O1} + R_S + g_{m1}r_{O1}R_S}.$$

**Output resistance** ($v_{in} = 0$, test voltage $v_x$). The degenerated $M_1$ presents $R_1 = r_{O1} + (1 + g_{m1}r_{O1})R_S$ and draws $v_x/R_1$, which also flows in $R_S$, so $v_S = R_Sv_x/R_1$; $M_2$ then draws $g_{m2}v_S + v_x/r_{O2}$:

$$i_x = \frac{v_x}{R_1}(1 + g_{m2}R_S) + \frac{v_x}{r_{O2}}\quad\Longrightarrow\quad R_{out} = r_{O2}\,\Big\|\,\frac{r_{O1} + R_S + g_{m1}r_{O1}R_S}{1 + g_{m2}R_S}.$$

**Product.** As a single fraction,

$$R_{out} = \frac{r_{O2}\,(r_{O1} + R_S + g_{m1}r_{O1}R_S)}{r_{O2}(1 + g_{m2}R_S) + r_{O1} + R_S + g_{m1}r_{O1}R_S},$$

so $(r_{O1} + R_S + g_{m1}r_{O1}R_S)$ cancels in $-|G_m|R_{out}$:

$$-|G_m|R_{out} = -\frac{g_{m1}r_{O1}r_{O2}(1 + g_{m2}R_S)}{r_{O1} + r_{O2} + R_S(1 + g_{m1}r_{O1} + g_{m2}r_{O2})},$$

identical to Step 3. ✓

**Intuition.** When $v_{in}$ rises, $v_S$ rises with $M_1$'s current, which lifts the gate of the PMOS $M_2$ so that it conducts *less*. Both transistors thus pull the output down: $M_2$ acts as a second input device driven from $S$, multiplying the transconductance by $(1 + g_{m2}R_S)$. That is why the gain is far above the plain degenerated value $\approx R_{out}/R_S$.

### Step 5 — Limiting cases

- **$R_S = 0$.** $S$ is grounded, $M_2$ is an ideal current-source load, and $A_v = -g_{m1}r_{O1}r_{O2}/(r_{O1} + r_{O2}) = -g_{m1}(r_{O1}\parallel r_{O2})$. ✓
- **Large $r_O$, $g_{m1}R_S \gg 1$.** $r_{O1} + r_{O2} + R_S$ is negligible next to $R_S(g_{m1}r_{O1} + g_{m2}r_{O2})$, so
$$A_v \approx -\frac{g_{m1}r_{O1}r_{O2}(1 + g_{m2}R_S)}{R_S(g_{m1}r_{O1} + g_{m2}r_{O2})}.$$
If also $g_{m2}R_S \gg 1$, $(1 + g_{m2}R_S)/R_S \approx g_{m2}$ and
$$A_v \approx -\frac{(g_{m1}r_{O1})(g_{m2}r_{O2})}{g_{m1}r_{O1} + g_{m2}r_{O2}},$$
about half the intrinsic gain $g_mr_O$ when the two devices have equal intrinsic gains. The degeneration does **not** reduce the gain toward $R_{out}/R_S$, because $M_2$ recovers the signal from $R_S$.

### Result

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}r_{O1}r_{O2}\,(1 + g_{m2}R_S)}{r_{O1} + r_{O2} + R_S\,(1 + g_{m1}r_{O1} + g_{m2}r_{O2})},$$

an inverting gain of the order of the intrinsic gain $g_mr_O$; for large $r_O$ and $g_{m1}R_S \gg 1$ it approaches $-g_{m1}r_{O1}r_{O2}(1 + g_{m2}R_S)/[R_S(g_{m1}r_{O1} + g_{m2}r_{O2})]$.

**Common mistake.** Treating $M_2$ as an ideal current source with resistance $r_{O2}$ (gate at a fixed bias). That gives the ordinary degenerated-CS result $-g_{m1}r_{O1}r_{O2}/[r_{O1} + r_{O2} + (1 + g_{m1}r_{O1})R_S]$, which misses the boost $(1 + g_{m2}R_S)$ and is much smaller when $g_{m2}R_S \gg 1$.

**Common mistake.** Using the degeneration rule $A_v \approx -R_D/R_S$ (with $R_D \to r_{O2}$ or $R_{out}$). That rule assumes a fixed load; here $M_2$'s current changes with $v_S$, which changes both $G_m$ and $R_{out}$.

**Common mistake.** Writing $M_2$'s current into the output as $+g_{m2}v_S$. Raising the gate of a PMOS whose source is at $V_{DD}$ *reduces* its current, so $M_2$ reinforces $M_1$ and the gain is negative.
