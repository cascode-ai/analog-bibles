# Detailed solution - R145

**Approach.** Any linear stage can be replaced, at its output, by a Norton equivalent: a current $G_mv_{in}$ in parallel with a resistance $R_{out}$. This gives $A_v = -G_mR_{out}$. We compute $G_m$ with the output shorted to ac ground and $R_{out}$ with the input set to zero, keeping track of the sign convention, and multiply. The transistor model includes $g_m$, the body-effect transconductance $g_{mb}$ and $r_O$.

### Step 1 — The circuit

The source follower consists of:

- $M_1$: NMOS with its drain at $V_{DD}$, its gate at the input $V_{in}$, its source at the output $V_{out}$, and its bulk at ground;
- an ideal current source from the output to ground (biasing $M_1$);
- a load resistance $R_L$ from the output to ground.

In the small-signal circuit, $V_{DD}$ and ground are ac grounds, and the **ideal current source is an open circuit** (its current does not change). With $\lambda, \gamma > 0$, the transistor is modelled by $g_mv_{gs}$, $g_{mb}v_{bs}$ (both from drain to source) and $r_O$ (drain to source).

### Step 2 — The lemma and its sign convention

Replace everything connected to the output by a current source $G_mv_{in}$ that **pulls** current out of the output node toward ground, in parallel with $R_{out}$. With the output open,

$$v_{out} = -G_mv_{in}R_{out}\quad\Longrightarrow\quad A_v = -G_mR_{out}.$$

Consequently, $G_m$ is measured as follows: short the output to ac ground and measure the current that the short must **supply into** the output node, $i_{sc}$; then $G_m = i_{sc}/v_{in}$. For a common-source stage this gives $G_m = +g_m$ (the drain pulls $g_mv_{in}$ from the short) and $A_v = -g_mR_{out}$, as expected.

### Step 3 — $G_m$: output shorted to ac ground

<!-- diagram: diagram-01.cir -->

With $v_{out} = 0$:

$$v_{gs} = v_{in} - 0 = v_{in},\qquad v_{bs} = 0 - 0 = 0,\qquad v_{ds} = 0 - 0 = 0 .$$

So the body-effect source and $r_O$ carry nothing, and the transistor's drain-to-source current is just $g_mv_{in}$. It flows *out of* the source terminal into the short. $R_L$ has zero voltage across it, and the current source is open, so neither carries any signal current. The short therefore *receives* $g_mv_{in}$ from the circuit, i.e. it supplies $i_{sc} = -g_mv_{in}$ into the output node:

$$G_m = \frac{i_{sc}}{v_{in}} = -g_m .$$

The negative sign says that, unlike a CS stage, the follower *pushes* current into its output when the input rises. Note that $g_{mb}$ does **not** appear in $G_m$: with the output (source) shorted, $v_{bs} = 0$.

### Step 4 — $R_{out}$: input set to zero

<!-- diagram: diagram-02.cir -->

Set $v_{in} = 0$ (gate at ac ground) and apply a test voltage $v_x$ at the output. Now

$$v_{gs} = 0 - v_x = -v_x,\qquad v_{bs} = 0 - v_x = -v_x,\qquad v_{ds} = 0 - v_x = -v_x .$$

The transistor's drain-to-source current is

$$g_mv_{gs} + g_{mb}v_{bs} + \frac{v_{ds}}{r_O} = -\left(g_m + g_{mb} + \frac{1}{r_O}\right)v_x .$$

A negative drain-to-source current means that a current $(g_m + g_{mb} + 1/r_O)v_x$ flows from the output (source) up through the transistor to the drain at ac ground. The test source must supply this current, plus $v_x/R_L$ into the load, plus nothing into the ideal current source:

$$i_x = \left(g_m + g_{mb} + \frac{1}{r_O} + \frac{1}{R_L}\right)v_x .$$

Therefore

$$R_{out} = \frac{v_x}{i_x} = \frac{1}{g_m + g_{mb} + \dfrac{1}{r_O} + \dfrac{1}{R_L}} = \frac{1}{g_m}\,\Big\|\,\frac{1}{g_{mb}}\,\Big\|\,r_O\,\Big\|\,R_L .$$

Here the body effect does appear: when the source moves with the gate fixed, both $v_{gs}$ and $v_{bs}$ change, so $g_{mb}$ acts like an extra conductance $g_{mb}$ from the source to ac ground.

### Step 5 — The gain

$$A_v = -G_mR_{out} = -(-g_m)\,R_{out} = g_mR_{out},$$

$$A_v = \frac{g_m}{g_m + g_{mb} + \dfrac{1}{r_O} + \dfrac{1}{R_L}} = g_m\left(\frac{1}{g_m}\,\Big\|\,\frac{1}{g_{mb}}\,\Big\|\,r_O\,\Big\|\,R_L\right).$$

The gain is **positive** (non-inverting) and **below 1**, since the denominator contains $g_m$ plus positive terms.

### Step 6 — Checks

**Direct KCL.** At the output, the transistor's current into the node equals the current into $R_L$:

$$g_m(v_{in} - v_{out}) + g_{mb}(0 - v_{out}) + \frac{0 - v_{out}}{r_O} = \frac{v_{out}}{R_L}.$$

Collect terms: $g_mv_{in} = v_{out}(g_m + g_{mb} + 1/r_O + 1/R_L)$, which is the same result ✓.

**Limits.**

- For $\lambda = \gamma = 0$: $A_v = g_mR_L/(1 + g_mR_L)$, the textbook follower with load $R_L$.
- For $R_L, r_O \to \infty$: $A_v \to g_m/(g_m + g_{mb}) = 1/(1 + \eta)$, with $\eta = g_{mb}/g_m$. Even an unloaded follower with grounded bulk has a gain below 1, because of the body effect.

### Result

$$G_m = -g_m,\qquad R_{out} = \frac{1}{g_m}\,\Big\|\,\frac{1}{g_{mb}}\,\Big\|\,r_O\,\Big\|\,R_L,$$

$$A_v = -G_mR_{out} = \frac{g_m}{g_m + g_{mb} + 1/r_O + 1/R_L},$$

positive and less than 1 (tending to $g_m/(g_m + g_{mb})$ for $R_L, r_O \to \infty$).

**Common mistake.** Including $g_{mb}$ in $G_m$. With the output shorted, the source is at ac ground together with the bulk, so $v_{bs} = 0$ and only $g_mv_{in}$ flows. The body effect enters only through $R_{out}$.

**Common mistake.** Taking $R_{out} = R_L$, or $1/g_m$ alone, as exact. Looking into the source of the follower one sees $1/g_m$, $1/g_{mb}$ and $r_O$ in parallel, and $R_L$ is in parallel with all of them.

**Common mistake.** Getting a negative gain by quoting $G_m = +g_m$ and then applying $A_v = -G_mR_{out}$. In the lemma's convention $G_m$ is the current drawn *from* the shorted output; a follower pushes current *into* it, so $G_m = -g_m$ and the gain is positive. Also, do not write $g_{mb} = \gamma g_m$: the ratio is $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$, not $\gamma$.
