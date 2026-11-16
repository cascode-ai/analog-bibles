# Detailed solution - R117

**Approach.** The output is at the **source** of $M_2$, so $M_2$ is a source follower, loaded by the diode-connected NMOS $M_1$, with the diode-connected PMOS $M_3$ (not ac ground) in its drain. Replace each diode-connected device by its small-signal resistance, find the single current through the stack, and multiply it by the source resistance.

### Step 1 — Small-signal model and the stack current

A diode-connected transistor has $v_{gs} = v_{ds}$, so it is the resistance $\frac{1}{g_m}\parallel r_O$. Calling the drain of $M_2$ node $D$, with $V_{DD}$ at ac ground and $\gamma = 0$:

$$R_S = \frac{1}{g_{m1}}\,\Big\|\,r_{O1} = \frac{r_{O1}}{1 + g_{m1}r_{O1}}\quad(\text{from out to ground}),$$

$$R_D = \frac{1}{g_{m3}}\,\Big\|\,r_{O3} = \frac{r_{O3}}{1 + g_{m3}r_{O3}}\quad(\text{from } D \text{ to ac ground}).$$

$M_2$ has $v_{gs2} = v_{in} - v_{out}$: a controlled source $g_{m2}(v_{in} - v_{out})$ from $D$ (drain) to out (source), with $r_{O2}$ between $D$ and out.

<!-- diagram: diagram-01.cir -->

The same small-signal current $i$ flows down through $R_D$, $M_2$ and $R_S$ (positive **downward**):

$$v_{out} = iR_S, \qquad v_D = -iR_D \quad\big(i = (0 - v_D)/R_D\big),$$

$$i = g_{m2}(v_{in} - v_{out}) + \frac{v_D - v_{out}}{r_{O2}}.$$

### Step 2 — Solve for the gain

Substituting $v_{out} = iR_S$ and $v_D = -iR_D$:

$$i = g_{m2}v_{in} - g_{m2}R_S\,i + \frac{-iR_D - iR_S}{r_{O2}}.$$

Collecting the $i$ terms and multiplying by $r_{O2}$:

$$i\left(1 + g_{m2}R_S + \frac{R_D + R_S}{r_{O2}}\right) = g_{m2}v_{in},$$

$$i\,(r_{O2} + R_D + R_S + g_{m2}r_{O2}R_S) = g_{m2}r_{O2}\,v_{in}.$$

Then $v_{out} = iR_S$ gives

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m2}r_{O2}R_S}{r_{O2} + R_D + R_S + g_{m2}r_{O2}R_S},\qquad R_S = \frac{1}{g_{m1}}\,\Big\|\,r_{O1},\quad R_D = \frac{1}{g_{m3}}\,\Big\|\,r_{O3}.$$

The denominator is the numerator plus positive terms, so $0 < A_v < 1$, as expected for a follower.

**Check.** Without $M_3$ (drain at ac ground, $R_D = 0$), dividing numerator and denominator by $r_{O2} + R_S$,
$$\frac{g_{m2}r_{O2}R_S}{r_{O2} + R_S + g_{m2}r_{O2}R_S} = \frac{g_{m2}(r_{O2}\parallel R_S)}{1 + g_{m2}(r_{O2}\parallel R_S)},$$
the standard source-follower result with load $R_S \parallel r_{O2}$. ✓ The extra $R_D$ lowers the gain slightly: the drain of $M_2$ moves opposite to its source, which reduces $v_{ds2}$ and the current through $r_{O2}$.

### Step 3 — Fully expanded form (optional)

Insert $R_S = r_{O1}/(1 + g_{m1}r_{O1})$ and $R_D = r_{O3}/(1 + g_{m3}r_{O3})$ and multiply numerator and denominator by $(1 + g_{m1}r_{O1})(1 + g_{m3}r_{O3})$. The numerator becomes

$$g_{m2}r_{O2}r_{O1}(1 + g_{m3}r_{O3}),$$

and the denominator

$$
\begin{aligned}
&r_{O2}(1 + g_{m1}r_{O1})(1 + g_{m3}r_{O3}) + r_{O3}(1 + g_{m1}r_{O1}) + r_{O1}(1 + g_{m2}r_{O2})(1 + g_{m3}r_{O3})\\
&= r_{O1} + r_{O2} + r_{O3} + g_{m1}r_{O1}r_{O2} + g_{m1}r_{O1}r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} + g_{m3}r_{O2}r_{O3} + (g_{m1} + g_{m2})g_{m3}r_{O1}r_{O2}r_{O3} \equiv D.
\end{aligned}
$$

So

$$A_v = \frac{g_{m2}r_{O1}r_{O2}(1 + g_{m3}r_{O3})}{D}.$$

$D$ is the same denominator as when the output of this stack is taken at the drain of $M_2$: the stack current is the same, and only the resistance that converts it into the output voltage changes.

### Step 4 — Large-$r_O$ approximation and intuition

For $g_mr_O \gg 1$ in every device, $R_S \approx 1/g_{m1}$ and $R_D \approx 1/g_{m3}$, and $R_D + R_S$ is negligible next to $r_{O2}$. Dividing by $r_{O2}$ and dropping $(R_D + R_S)/r_{O2}$:

$$A_v \approx \frac{g_{m2}R_S}{1 + g_{m2}R_S} \approx \frac{g_{m2}/g_{m1}}{1 + g_{m2}/g_{m1}} = \frac{g_{m2}}{g_{m1} + g_{m2}}.$$

**Intuition.** The input is divided between the resistance $1/g_{m2}$ seen in the source of $M_2$ and the load $1/g_{m1}$:

$$A_v \approx \frac{1/g_{m1}}{1/g_{m1} + 1/g_{m2}} = \frac{g_{m2}}{g_{m1} + g_{m2}},$$

about $1/2$ for $g_{m1} = g_{m2}$. $M_3$ enters only through $r_{O2}$, so to first order it does not matter.

### Result

$$A_v = \frac{g_{m2}r_{O2}R_S}{r_{O2} + R_D + R_S + g_{m2}r_{O2}R_S},\qquad R_S = \frac{1}{g_{m1}}\,\Big\|\,r_{O1},\quad R_D = \frac{1}{g_{m3}}\,\Big\|\,r_{O3},$$

equivalently $A_v = g_{m2}r_{O1}r_{O2}(1 + g_{m3}r_{O3})/D$ with $D$ from Step 3. It is positive and less than 1. For large $r_O$:

$$A_v \approx \frac{g_{m2}}{g_{m1} + g_{m2}}.$$

**Common mistake.** Reading the output at the drain of $M_2$ and giving an inverting gain. The output is the source of $M_2$ (shared with the diode-connected $M_1$), so $v_{out}$ follows $v_{in}$, by less than $v_{in}$.

**Common mistake.** A gain close to (or above) 1, as for a follower with a current-source load. The diode-connected load $1/g_{m1}$ is comparable to $1/g_{m2}$, so a large fraction of the input appears across $v_{gs2}$.

**Common mistake.** Treating the drain of $M_2$ as ac ground without saying so. With $\lambda \neq 0$ it moves ($v_D = -iR_D$), and omitting $R_D$ is acceptable only as an explicitly stated approximation.
