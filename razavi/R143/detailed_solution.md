# Detailed solution - R143

**Approach.** The gate draws no current, so whatever small-signal current enters the drain leaves through the source, and that single current flows through both $R_D$ and $R_S$. Each output is Ohm's law on its resistor, so the ratio cannot depend on $g_m$, $g_{mb}$ or $r_O$, which only set *how large* the current is. The explicit gain expressions confirm the result.

### Step 1 — The same current flows through $R_D$ and $R_S$

With $V_{DD}$ at ac ground, let $i_d$ be the small-signal current flowing from the drain node down into the transistor.

- **Drain node** ($v_{out1}$): only $R_D$ and the drain connect there (unloaded output), so the current coming down through $R_D$ is $i_d$.
- **Transistor**: with $\lambda, \gamma > 0$ its model contains $g_mv_{gs}$, $g_{mb}v_{bs}$ and $r_O$, all between drain and source; the gate and bulk carry no current. So the current leaving the source is also $i_d$.
- **Source node** ($v_{out2}$): only the source and $R_S$ connect there, so $i_d$ flows down through $R_S$.

This holds for any values of $g_m$, $g_{mb}$ and $r_O$.

### Step 2 — Ohm's law and the ratio

$i_d$ flows down through $R_D$ from ac ground, pulling the drain *below* it, and down through $R_S$ to ground:

$$v_{out1} = 0 - i_dR_D = -i_dR_D ,\qquad v_{out2} = i_dR_S ,$$

$$\frac{v_{out1}}{v_{out2}} = \frac{-i_dR_D}{i_dR_S} = -\frac{R_D}{R_S}.$$

The unknown $i_d$ cancels, so the ratio is independent of $g_m$, $g_{mb}$, $r_O$ and the bias point. $\blacksquare$ Channel-length modulation and body effect change $i_d$, but they change both outputs in the same proportion.

### Step 3 — Check with the explicit gains

With $v_{gs} = v_{in} - v_{out2}$, $v_{bs} = 0 - v_{out2}$ (bulk at ground) and $v_{ds} = v_{out1} - v_{out2}$:

$$i_d = g_m(v_{in} - v_{out2}) + g_{mb}(0 - v_{out2}) + \frac{v_{out1} - v_{out2}}{r_O}.$$

Substituting $v_{out1} = -i_dR_D$ and $v_{out2} = i_dR_S$:

$$i_d = g_mv_{in} - (g_m + g_{mb})R_S\,i_d - \frac{(R_D + R_S)\,i_d}{r_O},$$

$$i_d\left[r_O + (g_m + g_{mb})R_Sr_O + R_D + R_S\right] = g_mr_O\,v_{in}.$$

With $D \equiv R_D + r_O + R_S + (g_m + g_{mb})R_Sr_O$:

$$\frac{v_{out1}}{v_{in}} = -\frac{g_mr_OR_D}{D},\qquad \frac{v_{out2}}{v_{in}} = +\frac{g_mr_OR_S}{D}.$$

The common denominator cancels in the ratio, giving $-R_D/R_S$ ✓. With $R_D = R_S$ (both labelled $R_D$ in the drawing), the outputs are equal and opposite, which is why this circuit serves as a simple phase splitter.

### Result

Because the gate draws no current, the same small-signal current $i_d$ flows through $R_D$ and through $R_S$, whatever the values of $g_m$, $g_{mb}$ and $r_O$. Hence $v_{out1} = -i_dR_D$ and $v_{out2} = i_dR_S$, and

$$\frac{V_{out1}}{V_{out2}} = -\frac{R_D}{R_S},$$

independent of $\lambda$ and $\gamma$.

**Common mistake.** Concluding that the ratio depends on $g_m$, $g_{mb}$ or $r_O$, e.g. by computing $v_{out2}$ with a follower formula whose denominator differs from the one used for $v_{out1}$. Both outputs come from the *same* current.

**Common mistake.** Proving the result only for $\lambda = \gamma = 0$ (e.g. with $-g_mR_D/(1 + g_mR_S)$ and $g_mR_S/(1 + g_mR_S)$). The current-continuity argument covers $\lambda, \gamma > 0$ directly, because $r_O$ and $g_{mb}v_{bs}$ also connect drain and source.

**Common mistake.** Answering $-1$ because both resistors carry the label $R_D$ in the drawing. The lower one is $R_S$; the result reduces to $-1$ only if the two are equal.
