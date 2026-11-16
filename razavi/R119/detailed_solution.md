# Detailed solution - R119

**Approach.** The output is the **source** of $M_2$, so $M_2$ is a source follower loaded by the NMOS current source $M_1$, with its drain fed by the PMOS current source $M_3$ (so the drain is *not* at ac ground). Reduce both current sources to their output resistances, find the single current through the stack, and multiply it by the source resistance.

### Step 1 — Small-signal model and the stack current

The gates of $M_1$ and $M_3$ sit at dc biases and their sources at supplies, so $v_{gs1} = v_{gs3} = 0$: $M_1$ is just $r_{O1}$ from out to ground, and $M_3$ is just $r_{O3}$ from the drain of $M_2$ (node $D$) to ac ground. $g_{m1}$ and $g_{m3}$ will not appear in the answer. $M_2$ ($\gamma = 0$) has $v_{gs2} = v_{in} - v_{out}$: a controlled source $g_{m2}(v_{in} - v_{out})$ from $D$ to out, with $r_{O2}$ between $D$ and out.

<!-- diagram: diagram-01.cir -->

The same small-signal current $i$ flows down through $r_{O3}$, $M_2$ and $r_{O1}$ (positive downward):

$$v_{out} = i\,r_{O1}, \qquad v_D = -i\,r_{O3}\quad\big(i = (0 - v_D)/r_{O3}\big),$$

$$i = g_{m2}(v_{in} - v_{out}) + \frac{v_D - v_{out}}{r_{O2}}.$$

### Step 2 — Solve for the gain

Substituting $v_{out} = ir_{O1}$ and $v_D = -ir_{O3}$:

$$i = g_{m2}v_{in} - g_{m2}r_{O1}\,i + \frac{-ir_{O3} - ir_{O1}}{r_{O2}}.$$

Collecting the $i$ terms and multiplying by $r_{O2}$:

$$i\left(1 + g_{m2}r_{O1} + \frac{r_{O1} + r_{O3}}{r_{O2}}\right) = g_{m2}v_{in},$$

$$i\,(r_{O2} + g_{m2}r_{O1}r_{O2} + r_{O1} + r_{O3}) = g_{m2}r_{O2}\,v_{in},$$

$$i = \frac{g_{m2}r_{O2}}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}}\,v_{in}.$$

Multiplying by $r_{O1}$:

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m2}r_{O1}r_{O2}}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}}.$$

The denominator is the numerator plus three positive terms, so $0 < A_v < 1$.

### Step 3 — How close to 1, and the role of $r_{O3}$

Dividing numerator and denominator by $g_{m2}r_{O1}r_{O2}$:

$$A_v = \frac{1}{1 + \dfrac{1}{g_{m2}r_{O2}} + \dfrac{1}{g_{m2}r_{O1}} + \dfrac{r_{O3}}{g_{m2}r_{O1}r_{O2}}}.$$

Each small term is of order $1/(g_mr_O) \ll 1$, so

$$A_v \approx 1 - \frac{1}{g_{m2}r_{O2}} - \frac{1}{g_{m2}r_{O1}} - \frac{r_{O3}}{g_{m2}r_{O1}r_{O2}}:$$

**slightly below 1**. For example, with $r_{O1} = r_{O2} = r_{O3}$ and $g_{m2}r_{O2} = 50$, $A_v = 50/(3 + 50) \approx 0.94$.

**Comparison with a grounded drain.** With $r_{O3} \to 0$, dividing numerator and denominator by $r_{O1} + r_{O2}$,

$$\frac{g_{m2}r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}} = \frac{g_{m2}(r_{O1}\parallel r_{O2})}{1 + g_{m2}(r_{O1}\parallel r_{O2})},$$

the standard follower gain with load $r_{O1}\parallel r_{O2}$. The extra $r_{O3}$ reduces the gain a little more: when $v_{in}$ rises, $i$ increases, so $D$ *falls* ($v_D = -ir_{O3}$) while the source rises, which shrinks $v_{DS2}$ and the current through $r_{O2}$. The effect is small because $r_{O3}$ enters only divided by $g_{m2}r_{O1}r_{O2}$.

### Result

$$A_v = \frac{g_{m2}r_{O1}r_{O2}}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}},$$

a positive gain slightly below 1 (the shortfall is of order $1/(g_mr_O)$).

**Common mistake.** Reading the output at the drain of $M_2$, or giving an inverting gain. The output is the source of $M_2$ (and the drain of $M_1$), so $v_{out}$ moves with $v_{in}$.

**Common mistake.** Treating the drain of $M_2$ as ac ground without saying so, which drops $r_{O3}$ and gives $g_{m2}r_{O1}r_{O2}/(r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2})$. That is a reasonable *approximation*, but the drain node moves and $r_{O3}$ belongs in the exact denominator.

**Common mistake.** A gain of exactly 1 or larger. With finite $r_O$'s, part of $v_{in}$ always appears across $v_{gs2}$, so $A_v < 1$.
