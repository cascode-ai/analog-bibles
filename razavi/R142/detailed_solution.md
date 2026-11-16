# Detailed solution - R142

**Approach.** Treat the supply variation as the small-signal input $v_{dd}$, with the fixed bias $V_B$ at ac ground. $M_1$ then reduces to $r_{O1}$, and the PMOS $M_2$, whose *source* moves with $v_{dd}$ while its gate stays fixed, injects $g_{m2}v_{dd}$ into the output. One KCL equation at the output gives the result.

### Step 1 — Small-signal model

- **$M_1$**: gate ($V_B$) and source (ground) are at ac ground, so $v_{gs1} = 0$ and only $r_{O1}$ remains, from out to ground.
- **$M_2$**: source at $v_{dd}$, gate at ac ground, so
$$v_{sg2} = v_{dd} - 0 = v_{dd}.$$
Its bulk moves with its source ($v_{sb2} = 0$), so there is **no body-effect current**. $M_2$ contributes $g_{m2}v_{sg2} = g_{m2}v_{dd}$ from the supply node into out, plus $r_{O2}$ between the supply node and out.

<!-- diagram: diagram-01.cir -->

(When the source of a PMOS rises with its gate fixed, $V_{SG}$ increases and it pushes *more* current into the output.)

### Step 2 — KCL at the output

The current from the supply node through $M_2$ ($r_{O2}$ carries $(v_{dd} - v_{out})/r_{O2}$),

$$i_2 = g_{m2}v_{dd} + \frac{v_{dd} - v_{out}}{r_{O2}},$$

must all flow down through $r_{O1}$, since the output is unloaded:

$$g_{m2}v_{dd} + \frac{v_{dd} - v_{out}}{r_{O2}} = \frac{v_{out}}{r_{O1}}.$$

### Step 3 — Solve for $v_{out}/v_{dd}$

Collecting the $v_{dd}$ and $v_{out}$ terms:

$$v_{dd}\left(g_{m2} + \frac{1}{r_{O2}}\right) = v_{out}\left(\frac{1}{r_{O1}} + \frac{1}{r_{O2}}\right),$$

$$v_{dd}\,\frac{g_{m2}r_{O2} + 1}{r_{O2}} = v_{out}\,\frac{r_{O1} + r_{O2}}{r_{O1}r_{O2}}.$$

Multiplying both sides by $r_{O1}r_{O2}$:

$$v_{dd}\,(g_{m2}r_{O2} + 1)\,r_{O1} = v_{out}\,(r_{O1} + r_{O2}),$$

$$\frac{v_{out}}{v_{dd}} = \frac{g_{m2}r_{O2} + 1}{r_{O2} + r_{O1}}\,r_{O1},$$

which is the expression to be proved. $\blacksquare$ Equivalently,

$$\frac{v_{out}}{v_{dd}} = \left(g_{m2} + \frac{1}{r_{O2}}\right)(r_{O1}\parallel r_{O2}):$$

the supply drives $(g_{m2} + 1/r_{O2})v_{dd}$ into the output, across the total output resistance $r_{O1}\parallel r_{O2}$.

### Step 4 — Interpretation and remarks

- **Size of the effect.** For $g_{m2}r_{O2} \gg 1$, $v_{out}/v_{dd} \approx g_{m2}(r_{O1}\parallel r_{O2})$, of the order of the intrinsic gain. With $V_B$ as the signal input (both gates driven), the gain would be $-(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})$, so for $g_{m1} \approx g_{m2}$ the supply reaches the output with about half the signal gain: very poor supply rejection, because $V_B$ is referenced to ground and every change in $V_{DD}$ appears in $M_2$'s $V_{SG}$.
- **Limit check.** With $g_{m2} = 0$ the result reduces to the resistive divider $r_{O1}/(r_{O1} + r_{O2})$, as expected.
- **Body effect.** With the bulk at a fixed potential instead, the moving source would add $g_{mb2}v_{dd}$ in the same direction, replacing $g_{m2}$ by $g_{m2} + g_{mb2}$.

### Result

With $V_B$ at ac ground, $M_1$ acts as $r_{O1}$ to ground and $M_2$ sees $v_{sg2} = v_{dd}$, injecting $g_{m2}v_{dd} + (v_{dd} - v_{out})/r_{O2}$ into the output. KCL at the output gives

$$\frac{V_{out}}{V_{DD}} = \frac{g_{m2}r_{O2} + 1}{r_{O2} + r_{O1}}\,r_{O1} = \left(g_{m2} + \frac{1}{r_{O2}}\right)(r_{O1}\parallel r_{O2}) \approx g_{m2}(r_{O1}\parallel r_{O2}).$$

**Common mistake.** Letting the gate of $M_2$ move with $V_{DD}$, which gives $v_{sg2} = 0$ and only the divider $r_{O1}/(r_{O1} + r_{O2})$. $V_B$ is fixed with respect to ground, so the whole supply change appears in $M_2$'s source–gate voltage.

**Common mistake.** Giving $M_1$ a controlled current driven by the supply. Its gate and source are both fixed, so it is just $r_{O1}$.

**Common mistake.** Writing $M_2$'s current into the output as $-g_{m2}v_{dd}$. Raising the source of a PMOS with its gate fixed increases its current into the output.
