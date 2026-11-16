# Detailed solution - R116

**Approach.** $M_2$ is a common-source (CS) stage with the diode-connected PMOS $M_3$ as its drain load and the diode-connected NMOS $M_1$ as its source degeneration. Replace each diode-connected device by its small-signal resistance and solve the degenerated CS stage with finite $r_{O2}$.

### Step 1 — Small-signal model

A diode-connected transistor has $v_{gs} = v_{ds}$, so it is the resistance $\frac{1}{g_m}\parallel r_O$. With $V_{DD}$ at ac ground and $\gamma = 0$:

$$R_D = \frac{1}{g_{m3}}\,\Big\|\,r_{O3} = \frac{r_{O3}}{1 + g_{m3}r_{O3}}\quad(\text{from out to ac ground}),$$

$$R_S = \frac{1}{g_{m1}}\,\Big\|\,r_{O1} = \frac{r_{O1}}{1 + g_{m1}r_{O1}}\quad(\text{from } S \text{ to ground}),$$

where $S$ is the source of $M_2$. $M_2$ has $v_{gs2} = v_{in} - v_S$: a controlled source $g_{m2}(v_{in} - v_S)$ from out (drain) to $S$, with $r_{O2}$ between out and $S$.

<!-- diagram: diagram-01.cir -->

There is only one path, so the same small-signal current $i$ flows **downward** through $R_D$, $M_2$ and $R_S$.

### Step 2 — Equations for the current $i$

**Source node:** $v_S = iR_S$.

**Output node.** $i$ is supplied through $R_D$, whose top is at ac ground:

$$i = -\frac{v_{out}}{R_D}\quad\Longrightarrow\quad v_{out} = -iR_D.$$

**Transistor $M_2$** (controlled source plus the current in $r_{O2}$):

$$i = g_{m2}(v_{in} - v_S) + \frac{v_{out} - v_S}{r_{O2}}.$$

### Step 3 — Solve for the gain

Substituting $v_S = iR_S$ and $v_{out} = -iR_D$:

$$i = g_{m2}v_{in} - g_{m2}R_S\,i + \frac{-iR_D - iR_S}{r_{O2}}.$$

Collecting the $i$ terms and multiplying by $r_{O2}$:

$$i\left(1 + g_{m2}R_S + \frac{R_D + R_S}{r_{O2}}\right) = g_{m2}v_{in},$$

$$i\,(r_{O2} + g_{m2}r_{O2}R_S + R_D + R_S) = g_{m2}r_{O2}\,v_{in},$$

$$i = \frac{g_{m2}r_{O2}}{R_D + r_{O2} + R_S + g_{m2}r_{O2}R_S}\,v_{in}.$$

With $v_{out} = -iR_D$:

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m2}r_{O2}R_D}{R_D + r_{O2} + R_S + g_{m2}r_{O2}R_S},\qquad R_D = \frac{1}{g_{m3}}\,\Big\|\,r_{O3},\quad R_S = \frac{1}{g_{m1}}\,\Big\|\,r_{O1}.$$

**Check.** With $R_S = 0$ this becomes $-g_{m2}r_{O2}R_D/(R_D + r_{O2}) = -g_{m2}(r_{O2}\parallel R_D)$, the plain CS gain. ✓

### Step 4 — Fully expanded form (optional)

Insert $R_D = r_{O3}/(1 + g_{m3}r_{O3})$ and $R_S = r_{O1}/(1 + g_{m1}r_{O1})$ and multiply numerator and denominator by $(1 + g_{m3}r_{O3})(1 + g_{m1}r_{O1})$. The numerator becomes

$$-g_{m2}r_{O2}r_{O3}(1 + g_{m1}r_{O1}),$$

and the denominator, term by term,

$$
\begin{aligned}
R_D(\dots) &\to r_{O3}(1 + g_{m1}r_{O1}) = r_{O3} + g_{m1}r_{O1}r_{O3},\\
r_{O2}(\dots) &\to r_{O2}(1 + g_{m3}r_{O3})(1 + g_{m1}r_{O1}) = r_{O2} + g_{m1}r_{O1}r_{O2} + g_{m3}r_{O2}r_{O3} + g_{m1}g_{m3}r_{O1}r_{O2}r_{O3},\\
R_S(1 + g_{m2}r_{O2})(\dots) &\to r_{O1}(1 + g_{m2}r_{O2})(1 + g_{m3}r_{O3}) = r_{O1} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} + g_{m2}g_{m3}r_{O1}r_{O2}r_{O3}.
\end{aligned}
$$

Summing,

$$A_v = -\frac{g_{m2}r_{O2}r_{O3}(1 + g_{m1}r_{O1})}{D},$$

$$D = r_{O1} + r_{O2} + r_{O3} + g_{m1}r_{O1}r_{O2} + g_{m1}r_{O1}r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} + g_{m3}r_{O2}r_{O3} + (g_{m1} + g_{m2})g_{m3}r_{O1}r_{O2}r_{O3}.$$

### Step 5 — Large-$r_O$ approximation and intuition

For $g_mr_O \gg 1$ in every device, $R_D \approx 1/g_{m3}$ and $R_S \approx 1/g_{m1}$, and $R_D + R_S$ is negligible next to $r_{O2}$. Dividing the Step 3 result by $r_{O2}$ and dropping $(R_D + R_S)/r_{O2}$:

$$A_v \approx -\frac{g_{m2}R_D}{1 + g_{m2}R_S} \approx -\frac{g_{m2}/g_{m3}}{1 + g_{m2}/g_{m1}} = -\frac{g_{m1}g_{m2}}{g_{m3}(g_{m1} + g_{m2})}.$$

**Intuition.** The input sees $1/g_{m2}$ (looking into the source of $M_2$) in series with $1/g_{m1}$, so the signal current is $v_{in}/(1/g_{m2} + 1/g_{m1})$, developed across the load $1/g_{m3}$. The degeneration reduces the diode-loaded gain $-g_{m2}/g_{m3}$ by the factor $1 + g_{m2}/g_{m1}$; for $g_{m1} = g_{m2} = g_{m3}$ the gain is only about $-1/2$.

### Result

$$A_v = -\frac{g_{m2}r_{O2}R_D}{R_D + r_{O2} + R_S + g_{m2}r_{O2}R_S},\qquad R_D = \frac{1}{g_{m3}}\,\Big\|\,r_{O3},\quad R_S = \frac{1}{g_{m1}}\,\Big\|\,r_{O1},$$

equivalently $A_v = -g_{m2}r_{O2}r_{O3}(1 + g_{m1}r_{O1})/D$ with $D$ as in Step 4. For large $r_O$:

$$A_v \approx -\frac{g_{m1}g_{m2}}{g_{m3}(g_{m1} + g_{m2})}.$$

**Common mistake.** Ignoring the degeneration by $M_1$ and writing $A_v \approx -g_{m2}/g_{m3}$. The source of $M_2$ sits on $1/g_{m1}$, comparable to $1/g_{m2}$, which reduces the gain by $1 + g_{m2}/g_{m1}$ (a factor of 2 for equal $g_m$'s).

**Common mistake.** Replacing the diode-connected devices by $r_O$ alone, as if they were current sources. With $v_{gs} = v_{ds}$ each is a low resistance, $\frac{1}{g_m}\parallel r_O$.

**Common mistake.** A positive gain, or taking the output at the source of $M_2$. The output is the drain: a rising $v_{in}$ draws more current through $M_3$, so $v_{out}$ falls.
