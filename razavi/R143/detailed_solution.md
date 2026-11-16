# Detailed solution - R143

**Approach.** The key fact is that the gate of a MOSFET draws no current, so whatever small-signal current enters the drain must leave through the source. That single current flows through both $R_D$ and $R_S$. Each output voltage is then just Ohm's law on its resistor, and the ratio of the two cannot depend on $g_m$, $g_{mb}$ or $r_O$. Those parameters only set *how large* the current is. We then confirm the result with the explicit gain expressions.

### Step 1 — The circuit

From the figure (with the lower resistor called $R_S$, as stated):

- $R_D$ connects $V_{DD}$ to the drain of $M_1$; the drain node is $V_{out1}$.
- $M_1$ has its gate at $V_{in}$ and its bulk at ground.
- $R_S$ connects the source of $M_1$ to ground; the source node is $V_{out2}$.

So the circuit is a degenerated common-source stage with two outputs: the drain (inverting) and the source (a follower-like output).

$\lambda > 0$ and $\gamma > 0$, so the transistor's small-signal model includes $g_mv_{gs}$, the body-effect source $g_{mb}v_{bs}$ and the output resistance $r_O$, all between drain and source.

### Step 2 — The same current flows through $R_D$ and $R_S$

In the small-signal circuit, $V_{DD}$ and ground are ac grounds. Let $i_d$ be the small-signal current flowing from the drain node down into the transistor.

- **KCL at the drain node** ($v_{out1}$): only $R_D$ and the transistor's drain connect there, and the output is unloaded. So the current coming down through $R_D$ equals $i_d$.
- **Inside the transistor**: every element of the model ($g_mv_{gs}$, $g_{mb}v_{bs}$, $r_O$) connects drain and source. The gate is an open circuit (no gate current), and the body-effect source also flows between drain and source (the bulk terminal carries no current in this model). So the current leaving the source equals the current entering the drain, $i_d$.
- **KCL at the source node** ($v_{out2}$): only the transistor's source and $R_S$ connect there, so $i_d$ flows down through $R_S$.

This holds for any values of $g_m$, $g_{mb}$ and $r_O$, and in particular for $\lambda, \gamma > 0$.

### Step 3 — Ohm's law on each resistor

**Drain.** $i_d$ flows down through $R_D$ from ac ground to the drain node, so the node is pulled *below* ac ground:

$$v_{out1} = 0 - i_dR_D = -i_dR_D .$$

**Source.** $i_d$ flows down through $R_S$ from the source node to ground:

$$v_{out2} = i_dR_S .$$

### Step 4 — The ratio

$$\frac{v_{out1}}{v_{out2}} = \frac{-i_dR_D}{i_dR_S} = -\frac{R_D}{R_S}.$$

The unknown current $i_d$ cancels, so the ratio is independent of $g_m$, $g_{mb}$, $r_O$ and of the bias point. $\blacksquare$

Note: for this conclusion it does not matter how $i_d$ depends on $v_{in}$. Channel-length modulation and body effect change $i_d$, but they change both output voltages in the same proportion.

### Step 5 — Check with the explicit gains

For completeness, compute $i_d$. The transistor's drain-to-source current is

$$i_d = g_m(v_{in} - v_{out2}) + g_{mb}(0 - v_{out2}) + \frac{v_{out1} - v_{out2}}{r_O},$$

where $v_{gs} = v_{in} - v_{out2}$, $v_{bs} = 0 - v_{out2}$ (bulk at ground) and $v_{ds} = v_{out1} - v_{out2}$. Substituting $v_{out1} = -i_dR_D$ and $v_{out2} = i_dR_S$:

$$i_d = g_mv_{in} - (g_m + g_{mb})R_S\,i_d - \frac{(R_D + R_S)\,i_d}{r_O}.$$

Collect the terms in $i_d$ and multiply by $r_O$:

$$i_d\left[r_O + (g_m + g_{mb})R_Sr_O + R_D + R_S\right] = g_mr_O\,v_{in}.$$

With $D \equiv R_D + r_O + R_S + (g_m + g_{mb})R_Sr_O$:

$$\frac{v_{out1}}{v_{in}} = -\frac{g_mr_OR_D}{D},\qquad \frac{v_{out2}}{v_{in}} = +\frac{g_mr_OR_S}{D}.$$

The two gains share the same denominator, so their ratio is $-R_D/R_S$ ✓. For example, with $R_D = R_S$ (both labelled $R_D$ in the drawing), the two outputs would be equal in magnitude and opposite in phase, which is why this circuit is used as a simple phase splitter.

### Result

Because the gate draws no current, the same small-signal current $i_d$ flows through $R_D$ and through $R_S$, whatever the values of $g_m$, $g_{mb}$ and $r_O$. Hence $v_{out1} = -i_dR_D$ and $v_{out2} = i_dR_S$, and

$$\frac{V_{out1}}{V_{out2}} = -\frac{R_D}{R_S},$$

independent of $\lambda$ and $\gamma$.

**Common mistake.** Concluding that the ratio depends on $g_m$, $g_{mb}$ or $r_O$, for example by computing $v_{out2}$ with a follower formula that has a different denominator than the one used for $v_{out1}$. Both outputs are produced by the *same* current, so all transistor parameters cancel in the ratio.

**Common mistake.** Proving the result only for $\lambda = \gamma = 0$ (e.g. with $v_{out1}/v_{in} = -g_mR_D/(1 + g_mR_S)$ and $v_{out2}/v_{in} = g_mR_S/(1 + g_mR_S)$). The problem explicitly asks for $\lambda, \gamma > 0$. The current-continuity argument covers that case directly, because $r_O$ and $g_{mb}v_{bs}$ also connect drain and source.

**Common mistake.** Answering $-1$ because both resistors carry the label $R_D$ in the drawing. The problem states that the lower resistor is $R_S$; the general result is $-R_D/R_S$, which reduces to $-1$ only if the two resistors are equal.
