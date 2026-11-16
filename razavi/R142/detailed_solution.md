# Detailed solution - R142

**Approach.** Treat the supply as the small-signal input $v_{dd}$, with the fixed bias $V_B$ at ac ground. $M_1$ then reduces to its output resistance, and $M_2$ is a PMOS whose *source* moves with $v_{dd}$ while its gate stays fixed, so it injects a current $g_{m2}v_{dd}$ into the output. One Kirchhoff current law (KCL) equation at the output gives the result.

### Step 1 — Reading the circuit

From the figure:

- $M_2$: PMOS, source connected to the supply $V_{DD}$, gate at $V_B$, drain at $V_{out}$. Its bulk is tied to its source (dashed line).
- $M_1$: NMOS, gate also at $V_B$ (both gates are joined to the $V_B$ node), source at ground, drain at $V_{out}$.
- $V_B$ is a fixed bias voltage that keeps both transistors saturated.

We want the small-signal transfer from a variation $v_{dd}$ of the supply to the output, $v_{out}/v_{dd}$, including channel-length modulation ($r_{O1}$, $r_{O2}$ finite).

### Step 2 — Small-signal model

Ground and $V_B$ are constant, so they are **ac grounds**; the supply node carries the input $v_{dd}$.

- **$M_1$**: gate ($V_B$) and source (ground) are both at ac ground, so $v_{gs1} = 0$ and its controlled source $g_{m1}v_{gs1}$ vanishes. Only $r_{O1}$ remains, from out to ground.
- **$M_2$**: the source is at $v_{dd}$ and the gate at ac ground, so the source–gate voltage is
$$v_{sg2} = v_{dd} - 0 = v_{dd}.$$
The bulk moves with the source, so $v_{sb2} = 0$ and there is **no body-effect current**. $M_2$ therefore contributes a controlled current $g_{m2}v_{sg2} = g_{m2}v_{dd}$ from its source (the supply node) to its drain (out), plus $r_{O2}$ between the supply node and out.

<!-- diagram: diagram-01.cir -->

(Sign check: when the source of a PMOS rises with the gate fixed, $V_{SG}$ increases and the PMOS conducts *more*, pushing current into the output.)

### Step 3 — KCL at the output

The current flowing from the supply node through $M_2$ into the output is the controlled source plus the current in $r_{O2}$ (which carries $v_{sd2}/r_{O2} = (v_{dd} - v_{out})/r_{O2}$):

$$i_2 = g_{m2}v_{dd} + \frac{v_{dd} - v_{out}}{r_{O2}}.$$

The output node is unloaded, so this current must all flow down through $r_{O1}$:

$$g_{m2}v_{dd} + \frac{v_{dd} - v_{out}}{r_{O2}} = \frac{v_{out}}{r_{O1}}.$$

### Step 4 — Solve for $v_{out}/v_{dd}$

Collect the $v_{dd}$ terms on the left and the $v_{out}$ terms on the right:

$$v_{dd}\left(g_{m2} + \frac{1}{r_{O2}}\right) = v_{out}\left(\frac{1}{r_{O1}} + \frac{1}{r_{O2}}\right).$$

Write each bracket over a common denominator:

$$v_{dd}\,\frac{g_{m2}r_{O2} + 1}{r_{O2}} = v_{out}\,\frac{r_{O1} + r_{O2}}{r_{O1}r_{O2}}.$$

Multiply both sides by $r_{O1}r_{O2}$:

$$v_{dd}\,(g_{m2}r_{O2} + 1)\,r_{O1} = v_{out}\,(r_{O1} + r_{O2}).$$

Therefore

$$\frac{v_{out}}{v_{dd}} = \frac{g_{m2}r_{O2} + 1}{r_{O2} + r_{O1}}\,r_{O1},$$

which is the expression to be proved. $\blacksquare$

An equivalent form shows the structure:

$$\frac{v_{out}}{v_{dd}} = \left(g_{m2} + \frac{1}{r_{O2}}\right)(r_{O1}\parallel r_{O2}).$$

The supply drives a current $(g_{m2} + 1/r_{O2})v_{dd}$ into the output node, and that current develops a voltage across the total resistance at the output, $r_{O1}\parallel r_{O2}$.

### Step 5 — Interpretation and remarks

- **Size of the effect.** For $g_{m2}r_{O2} \gg 1$, $v_{out}/v_{dd} \approx g_{m2}(r_{O1}\parallel r_{O2})$, of the order of the intrinsic gain. If $V_B$ were used as the signal input (both gates driven together), the stage's gain would be $-(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})$. So for $g_{m1} \approx g_{m2}$ the supply reaches the output with about half the signal gain: this stage has very poor supply rejection. The reason is that $V_B$ is referenced to ground, so a change in $V_{DD}$ appears directly as a change in $M_2$'s $V_{SG}$.
- **Check of a limit.** If $M_2$ had no transconductance ($g_{m2} = 0$), the result would reduce to $r_{O1}/(r_{O1} + r_{O2})$, a plain resistive divider between $r_{O2}$ and $r_{O1}$, as expected.
- **Body effect.** Because the bulk of $M_2$ is tied to its source, there is no body effect. If the bulk were instead held at a fixed potential, the source would move relative to the bulk and add a current $g_{mb2}v_{dd}$ in the same direction, so $g_{m2}$ would be replaced by $g_{m2} + g_{mb2}$.

### Result

With $V_B$ at ac ground, $M_1$ acts as $r_{O1}$ to ground and $M_2$ sees $v_{sg2} = v_{dd}$, injecting $g_{m2}v_{dd} + (v_{dd} - v_{out})/r_{O2}$ into the output. KCL at the output gives

$$\frac{V_{out}}{V_{DD}} = \frac{g_{m2}r_{O2} + 1}{r_{O2} + r_{O1}}\,r_{O1} = \left(g_{m2} + \frac{1}{r_{O2}}\right)(r_{O1}\parallel r_{O2}) \approx g_{m2}(r_{O1}\parallel r_{O2}).$$

**Common mistake.** Letting the gate of $M_2$ move with $V_{DD}$ (as if $V_B$ were referenced to the supply). Then $v_{sg2} = 0$, the $g_{m2}$ term disappears, and one gets only the divider $r_{O1}/(r_{O1} + r_{O2})$. Here $V_B$ is a fixed voltage with respect to ground, so the whole supply change appears as a change in $M_2$'s source–gate voltage.

**Common mistake.** Giving $M_1$ a controlled current driven by the supply. $M_1$'s gate and source are both fixed ($V_B$ and ground), so $v_{gs1} = 0$; it is just the resistance $r_{O1}$.

**Common mistake.** Sign error in $M_2$'s contribution, e.g. writing the current into the output as $-g_{m2}v_{dd}$. Raising the source of a PMOS with its gate fixed increases $V_{SG}$ and the current, so the controlled current flows from the supply *into* the output and adds to the current through $r_{O2}$.
