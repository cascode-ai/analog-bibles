# Detailed solution - R117

**Approach.** The output is taken at the **source** of $M_2$, so $M_2$ is a source follower. Its source load is the diode-connected NMOS $M_1$, and its drain sees the diode-connected PMOS $M_3$ (not ac ground). Each diode-connected device is replaced by its small-signal resistance, the single current through the stack is found, and the output voltage is that current times the source resistance.

### Step 1 — Reading the circuit

From the figure:

- $M_3$: PMOS, source at $V_{DD}$, gate tied to its own drain. It is **diode-connected**, and its drain is the drain of $M_2$, a node we call $D$.
- $M_2$: NMOS, gate at $V_{in}$, drain at $D$, source at $V_{out}$.
- $M_1$: NMOS, gate tied to its drain at $V_{out}$, source at ground. It is also **diode-connected**.

So $V_{out}$ is at the source of $M_2$: this is a source follower whose load is $M_1$, with $M_3$ in its drain.

The problem gives $\gamma = 0$ (no body effect, although the source of $M_2$ is not grounded) and $\lambda \neq 0$ (finite output resistances). Here $g_{mi}$ is the transconductance of $M_i$, $r_{Oi} \approx 1/(\lambda I_D)$ its output resistance, and lower-case symbols are small-signal quantities.

### Step 2 — Small-signal resistance of a diode-connected transistor

Apply a test voltage $v_x$ across a diode-connected transistor whose source is at ac ground. With gate and drain tied, $v_{gs} = v_{ds} = v_x$, so the test current is

$$i_x = g_mv_x + \frac{v_x}{r_O}\quad\Longrightarrow\quad \frac{v_x}{i_x} = \frac{1}{g_m + 1/r_O} = \frac{1}{g_m}\,\Big\|\,r_O.$$

The same holds for a PMOS (identical small-signal model). $V_{DD}$ and ground are ac grounds, so:

$$R_S = \frac{1}{g_{m1}}\,\Big\|\,r_{O1} = \frac{r_{O1}}{1 + g_{m1}r_{O1}}\quad(\text{from out to ground}),$$

$$R_D = \frac{1}{g_{m3}}\,\Big\|\,r_{O3} = \frac{r_{O3}}{1 + g_{m3}r_{O3}}\quad(\text{from } D \text{ to ac ground}).$$

### Step 3 — Small-signal model and the stack current

The small-signal circuit has two unknown node voltages, $v_D$ and $v_{out}$:

- $R_D$ from $D$ to ac ground;
- **$M_2$**: $v_{gs2} = v_{in} - v_{out}$; a current source $g_{m2}(v_{in} - v_{out})$ from $D$ (drain) to out (source), with $r_{O2}$ between $D$ and out;
- $R_S$ from out to ground.

<!-- diagram: diagram-01.cir -->

There is only one path for current, so the same small-signal current $i$ flows down through $R_D$, $M_2$ and $R_S$. Take $i$ positive **downward**.

**Output node** (Ohm's law on $R_S$):

$$v_{out} = iR_S.$$

**Drain node.** $i$ flows down through $R_D$ from ac ground to $D$, so $i = (0 - v_D)/R_D$, i.e.

$$v_D = -iR_D.$$

**Transistor $M_2$** (drain-to-source current = controlled source + current in $r_{O2}$):

$$i = g_{m2}(v_{in} - v_{out}) + \frac{v_D - v_{out}}{r_{O2}}.$$

### Step 4 — Solve for the gain

Substitute $v_{out} = iR_S$ and $v_D = -iR_D$ into the transistor equation:

$$i = g_{m2}v_{in} - g_{m2}R_S\,i + \frac{-iR_D - iR_S}{r_{O2}}.$$

Collect the terms in $i$ on the left:

$$i\left(1 + g_{m2}R_S + \frac{R_D + R_S}{r_{O2}}\right) = g_{m2}v_{in}.$$

Multiply by $r_{O2}$:

$$i\,(r_{O2} + R_D + R_S + g_{m2}r_{O2}R_S) = g_{m2}r_{O2}\,v_{in}.$$

Then $v_{out} = iR_S$ gives

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m2}r_{O2}R_S}{r_{O2} + R_D + R_S + g_{m2}r_{O2}R_S},\qquad R_S = \frac{1}{g_{m1}}\,\Big\|\,r_{O1},\quad R_D = \frac{1}{g_{m3}}\,\Big\|\,r_{O3}.$$

The numerator $g_{m2}r_{O2}R_S$ is always smaller than the term $g_{m2}r_{O2}R_S$ in the denominator, and the other denominator terms are positive, so $0 < A_v < 1$, as expected for a follower.

**Check.** If $M_3$ were absent (drain of $M_2$ at ac ground, $R_D = 0$), the gain would be
$$\frac{g_{m2}r_{O2}R_S}{r_{O2} + R_S + g_{m2}r_{O2}R_S} = \frac{g_{m2}(r_{O2}\parallel R_S)}{1 + g_{m2}(r_{O2}\parallel R_S)},$$
the standard source-follower result with load $R_S \parallel r_{O2}$. ✓ (Divide numerator and denominator by $r_{O2} + R_S$ to see this.) The extra $R_D$ in the denominator lowers the gain slightly: the drain of $M_2$ now moves opposite to its source, which reduces $v_{ds2}$ and therefore the current through $r_{O2}$.

### Step 5 — Fully expanded form (optional)

Insert $R_S = r_{O1}/(1 + g_{m1}r_{O1})$ and $R_D = r_{O3}/(1 + g_{m3}r_{O3})$, and multiply numerator and denominator by $(1 + g_{m1}r_{O1})(1 + g_{m3}r_{O3})$.

Numerator:

$$g_{m2}r_{O2}r_{O1}(1 + g_{m3}r_{O3}).$$

Denominator:

$$
\begin{aligned}
&r_{O2}(1 + g_{m1}r_{O1})(1 + g_{m3}r_{O3}) + r_{O3}(1 + g_{m1}r_{O1}) + r_{O1}(1 + g_{m2}r_{O2})(1 + g_{m3}r_{O3})\\
&= r_{O1} + r_{O2} + r_{O3} + g_{m1}r_{O1}r_{O2} + g_{m1}r_{O1}r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} + g_{m3}r_{O2}r_{O3} + (g_{m1} + g_{m2})g_{m3}r_{O1}r_{O2}r_{O3} \equiv D.
\end{aligned}
$$

So

$$A_v = \frac{g_{m2}r_{O1}r_{O2}(1 + g_{m3}r_{O3})}{D}.$$

($D$ is the same denominator as when the output of this stack is taken at the drain of $M_2$, since the stack current is the same; only the resistance that converts it into the output voltage changes.)

### Step 6 — Large-$r_O$ approximation and intuition

For $g_mr_O \gg 1$ for every device:

- $R_S \approx 1/g_{m1}$ and $R_D \approx 1/g_{m3}$;
- $R_D + R_S$ is of order $1/g_m$, negligible next to $r_{O2}$.

Dividing numerator and denominator by $r_{O2}$ and dropping $(R_D + R_S)/r_{O2}$:

$$A_v \approx \frac{g_{m2}R_S}{1 + g_{m2}R_S} \approx \frac{g_{m2}/g_{m1}}{1 + g_{m2}/g_{m1}} = \frac{g_{m2}}{g_{m1} + g_{m2}}.$$

**Intuition.** Looking from the gate of $M_2$ downward, the input voltage is divided between the resistance $1/g_{m2}$ "seen" in the source of $M_2$ and the load $1/g_{m1}$:

$$A_v \approx \frac{1/g_{m1}}{1/g_{m1} + 1/g_{m2}} = \frac{g_{m2}}{g_{m1} + g_{m2}}.$$

A diode-connected load is a low resistance, so the follower gain is well below 1; for $g_{m1} = g_{m2}$ it is about $1/2$. $M_3$ affects the gain only through $r_{O2}$, so to first order it does not matter.

### Result

$$A_v = \frac{g_{m2}r_{O2}R_S}{r_{O2} + R_D + R_S + g_{m2}r_{O2}R_S},\qquad R_S = \frac{1}{g_{m1}}\,\Big\|\,r_{O1},\quad R_D = \frac{1}{g_{m3}}\,\Big\|\,r_{O3},$$

equivalently $A_v = g_{m2}r_{O1}r_{O2}(1 + g_{m3}r_{O3})/D$ with $D$ from Step 5. It is positive and less than 1. For large $r_O$:

$$A_v \approx \frac{g_{m2}}{g_{m1} + g_{m2}}.$$

**Common mistake.** Reading the output at the drain of $M_2$ and giving an inverting gain. The output terminal is the source of $M_2$ (the node shared with the diode-connected $M_1$), so the stage is a follower: $v_{out}$ moves in the same direction as $v_{in}$, by less than $v_{in}$.

**Common mistake.** Writing a gain close to 1 (or above 1) as for a follower with a current-source load. The load here is the diode-connected $M_1$, whose resistance $1/g_{m1}$ is comparable to $1/g_{m2}$, so a large fraction of the input appears across $v_{gs2}$ instead of at the output.

**Common mistake.** Treating the drain of $M_2$ as ac ground without saying so. With $\lambda \neq 0$, the drain node moves ($v_D = -iR_D$) and $R_D$ appears in the exact expression; omitting it is acceptable only as an explicitly stated approximation.
