# Detailed solution - R119

**Approach.** The output is the **source** of $M_2$, so $M_2$ is a source follower. Its source load is the NMOS current source $M_1$, and its drain is fed by the PMOS current source $M_3$, so the drain is *not* at ac ground. Both current sources reduce to their output resistances; we then find the single small-signal current through the stack and multiply it by the source resistance.

### Step 1 — Reading the circuit

From the figure:

- $M_3$: PMOS, source at $V_{DD}$, gate at the dc bias $V_{b1}$, drain at the drain of $M_2$ (a node we call $D$).
- $M_2$: NMOS, gate at $V_{in}$, drain at $D$, source at $V_{out}$.
- $M_1$: NMOS, gate at the dc bias $V_{b2}$, source at ground, drain at $V_{out}$.

The output is at the source of $M_2$: a follower with a current-source load.

The problem gives $\gamma = 0$ (no body effect, although $M_2$'s source is not at ground) and $\lambda \neq 0$. Here $g_{mi}$ is the transconductance of $M_i$, $r_{Oi} \approx 1/(\lambda I_D)$ its output resistance due to channel-length modulation, and lower-case symbols are small-signal quantities.

### Step 2 — The current sources become resistors

$V_{b1}$, $V_{b2}$, $V_{DD}$ and ground are constant, i.e. **ac grounds**.

- **$M_1$**: gate and source at ac ground, so $v_{gs1} = 0$ and its controlled source vanishes. It is just $r_{O1}$ from out to ground.
- **$M_3$**: gate and source at ac ground, so $v_{gs3} = 0$. It is just $r_{O3}$ from $D$ to ac ground.

So $g_{m1}$ and $g_{m3}$ will not appear in the answer.

### Step 3 — Small-signal model and the stack current

Unknown node voltages: $v_D$ and $v_{out}$.

- $r_{O3}$ from $D$ to ac ground;
- **$M_2$**: $v_{gs2} = v_{in} - v_{out}$; a current source $g_{m2}(v_{in} - v_{out})$ from $D$ (drain) to out (source), with $r_{O2}$ between $D$ and out;
- $r_{O1}$ from out to ground.

<!-- diagram: diagram-01.cir -->

There is a single path, so the same small-signal current $i$ flows down through $r_{O3}$, $M_2$ and $r_{O1}$. Take $i$ positive downward.

**Output node** (Ohm's law on $r_{O1}$):

$$v_{out} = i\,r_{O1}.$$

**Drain node.** $i$ flows down through $r_{O3}$ from ac ground into $D$, so $i = (0 - v_D)/r_{O3}$:

$$v_D = -i\,r_{O3}.$$

**Transistor $M_2$** (drain-to-source current = controlled source + current in $r_{O2}$):

$$i = g_{m2}(v_{in} - v_{out}) + \frac{v_D - v_{out}}{r_{O2}}.$$

### Step 4 — Solve for the gain

Substitute $v_{out} = ir_{O1}$ and $v_D = -ir_{O3}$:

$$i = g_{m2}v_{in} - g_{m2}r_{O1}\,i + \frac{-ir_{O3} - ir_{O1}}{r_{O2}}.$$

Collect the $i$ terms on the left:

$$i\left(1 + g_{m2}r_{O1} + \frac{r_{O1} + r_{O3}}{r_{O2}}\right) = g_{m2}v_{in}.$$

Multiply by $r_{O2}$:

$$i\,(r_{O2} + g_{m2}r_{O1}r_{O2} + r_{O1} + r_{O3}) = g_{m2}r_{O2}\,v_{in},$$

$$i = \frac{g_{m2}r_{O2}}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}}\,v_{in}.$$

Multiply by $r_{O1}$ to get the output:

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m2}r_{O1}r_{O2}}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}}.$$

The numerator equals one of the denominator terms and the other three are positive, so $0 < A_v < 1$.

### Step 5 — How close to 1, and the role of $r_{O3}$

Divide numerator and denominator by $g_{m2}r_{O1}r_{O2}$:

$$A_v = \frac{1}{1 + \dfrac{1}{g_{m2}r_{O2}} + \dfrac{1}{g_{m2}r_{O1}} + \dfrac{r_{O3}}{g_{m2}r_{O1}r_{O2}}}.$$

Each of the three small terms is of order $1/(g_mr_O) \ll 1$. Using $1/(1 + x) \approx 1 - x$ for $x \ll 1$:

$$A_v \approx 1 - \frac{1}{g_{m2}r_{O2}} - \frac{1}{g_{m2}r_{O1}} - \frac{r_{O3}}{g_{m2}r_{O1}r_{O2}}.$$

So the gain is **slightly below 1**. For example, with $r_{O1} = r_{O2} = r_{O3}$ and $g_{m2}r_{O2} = 50$, $A_v = 50/(3 + 50) \approx 0.94$.

**Comparison with a grounded drain.** If $M_2$'s drain were at ac ground ($r_{O3} \to 0$), the result would be

$$\frac{g_{m2}r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}} = \frac{g_{m2}(r_{O1}\parallel r_{O2})}{1 + g_{m2}(r_{O1}\parallel r_{O2})},$$

the standard follower gain with load $r_{O1}\parallel r_{O2}$ (divide numerator and denominator by $r_{O1} + r_{O2}$ to see this). The extra $r_{O3}$ in the denominator reduces the gain a little more.

**Why $r_{O3}$ matters.** When $v_{in}$ rises, the stack current $i$ increases, so the drain node $D$ *falls* ($v_D = -ir_{O3}$) while the source rises. $v_{DS2}$ therefore shrinks, which reduces the current through $r_{O2}$ and so the current available to raise the output. The effect is small because $r_{O3}$ only enters divided by $g_{m2}r_{O1}r_{O2}$.

### Result

$$A_v = \frac{g_{m2}r_{O1}r_{O2}}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}},$$

a positive gain slightly below 1 (the shortfall is of order $1/(g_mr_O)$).

**Common mistake.** Reading the output at the drain of $M_2$, or giving an inverting gain. The output terminal connects to the source of $M_2$ and the drain of $M_1$, so the stage is a source follower: $v_{out}$ moves with $v_{in}$.

**Common mistake.** Treating the drain of $M_2$ as ac ground without saying so, which drops $r_{O3}$ and gives $g_{m2}r_{O1}r_{O2}/(r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2})$. That is a reasonable *approximation*, but $M_3$ is a current source with finite $r_{O3}$, so the drain node moves and $r_{O3}$ belongs in the exact denominator.

**Common mistake.** Giving a gain of exactly 1 or larger. With finite $r_{O1}$, $r_{O2}$ (and $r_{O3}$), part of $v_{in}$ always appears across $v_{gs2}$ to change the current, so $A_v < 1$.
