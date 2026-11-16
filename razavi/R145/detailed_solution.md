# Detailed solution - R145

**Approach.** Replace the stage, at its output, by its Norton equivalent, a current $G_mv_{in}$ in parallel with $R_{out}$, so that $A_v = -G_mR_{out}$. Compute $G_m$ with the output shorted to ac ground and $R_{out}$ with the input at zero, keeping track of the sign convention, and multiply. The transistor model includes $g_m$, $g_{mb}$ and $r_O$.

### Step 1 — Small-signal circuit and the sign convention

$V_{DD}$ is an ac ground and the ideal bias current source is an **open circuit**. The transistor is $g_mv_{gs}$ and $g_{mb}v_{bs}$ (both drain to source) with $r_O$ between drain and source; $R_L$ goes from the output to ground.

In the lemma the Norton source $G_mv_{in}$ **pulls** current out of the output node toward ground, so with the output open $v_{out} = -G_mv_{in}R_{out}$. Accordingly, $G_m = i_{sc}/v_{in}$, where $i_{sc}$ is the current the output short must **supply into** the output node. For a common-source stage this gives $G_m = +g_m$ and $A_v = -g_mR_{out}$, as expected.

### Step 2 — $G_m$: output shorted to ac ground

<!-- diagram: diagram-01.cir -->

With $v_{out} = 0$:

$$v_{gs} = v_{in} - 0 = v_{in},\qquad v_{bs} = 0 - 0 = 0,\qquad v_{ds} = 0 - 0 = 0 ,$$

so the body-effect source and $r_O$ carry nothing, $R_L$ has no voltage across it, and the transistor delivers $g_mv_{in}$ *out of* its source into the short. The short thus supplies $i_{sc} = -g_mv_{in}$ into the output node:

$$G_m = \frac{i_{sc}}{v_{in}} = -g_m .$$

Unlike a CS stage, the follower *pushes* current into its output when the input rises. $g_{mb}$ does **not** appear, since $v_{bs} = 0$ with the source shorted.

### Step 3 — $R_{out}$: input set to zero

<!-- diagram: diagram-02.cir -->

With the gate at ac ground and a test voltage $v_x$ at the output,

$$v_{gs} = 0 - v_x = -v_x,\qquad v_{bs} = 0 - v_x = -v_x,\qquad v_{ds} = 0 - v_x = -v_x ,$$

so the transistor's drain-to-source current is

$$g_mv_{gs} + g_{mb}v_{bs} + \frac{v_{ds}}{r_O} = -\left(g_m + g_{mb} + \frac{1}{r_O}\right)v_x ,$$

i.e. $(g_m + g_{mb} + 1/r_O)v_x$ flows from the output up through the transistor. The test source supplies this plus $v_x/R_L$ (and nothing into the ideal current source):

$$i_x = \left(g_m + g_{mb} + \frac{1}{r_O} + \frac{1}{R_L}\right)v_x ,$$

$$R_{out} = \frac{v_x}{i_x} = \frac{1}{g_m + g_{mb} + \dfrac{1}{r_O} + \dfrac{1}{R_L}} = \frac{1}{g_m}\,\Big\|\,\frac{1}{g_{mb}}\,\Big\|\,r_O\,\Big\|\,R_L .$$

Here the body effect appears: when the source moves with the gate fixed, both $v_{gs}$ and $v_{bs}$ change, so $g_{mb}$ acts as an extra conductance from the source to ac ground.

### Step 4 — The gain

$$A_v = -G_mR_{out} = -(-g_m)\,R_{out} = g_mR_{out},$$

$$A_v = \frac{g_m}{g_m + g_{mb} + \dfrac{1}{r_O} + \dfrac{1}{R_L}} = g_m\left(\frac{1}{g_m}\,\Big\|\,\frac{1}{g_{mb}}\,\Big\|\,r_O\,\Big\|\,R_L\right),$$

**positive** (non-inverting) and **below 1**, since the denominator is $g_m$ plus positive terms.

### Step 5 — Checks

**Direct KCL** at the output (transistor current in = current into $R_L$):

$$g_m(v_{in} - v_{out}) + g_{mb}(0 - v_{out}) + \frac{0 - v_{out}}{r_O} = \frac{v_{out}}{R_L},$$

so $g_mv_{in} = v_{out}(g_m + g_{mb} + 1/r_O + 1/R_L)$, the same result ✓.

**Limits.** For $\lambda = \gamma = 0$, $A_v = g_mR_L/(1 + g_mR_L)$, the textbook follower with load $R_L$. For $R_L, r_O \to \infty$, $A_v \to g_m/(g_m + g_{mb}) = 1/(1 + \eta)$ with $\eta = g_{mb}/g_m$: because of the body effect, even an unloaded follower with grounded bulk has a gain below 1.

### Result

$$G_m = -g_m,\qquad R_{out} = \frac{1}{g_m}\,\Big\|\,\frac{1}{g_{mb}}\,\Big\|\,r_O\,\Big\|\,R_L,$$

$$A_v = -G_mR_{out} = \frac{g_m}{g_m + g_{mb} + 1/r_O + 1/R_L},$$

positive and less than 1 (tending to $g_m/(g_m + g_{mb})$ for $R_L, r_O \to \infty$).

**Common mistake.** Including $g_{mb}$ in $G_m$. With the output shorted, the source and bulk are both at ac ground, so $v_{bs} = 0$; the body effect enters only through $R_{out}$.

**Common mistake.** Taking $R_{out} = R_L$, or $1/g_m$ alone, as exact. Looking into the source one sees $1/g_m$, $1/g_{mb}$ and $r_O$ in parallel, and $R_L$ in parallel with all of them.

**Common mistake.** A negative gain from quoting $G_m = +g_m$ in $A_v = -G_mR_{out}$: a follower pushes current *into* the shorted output, so $G_m = -g_m$ in the lemma's convention. Also, $g_{mb}/g_m$ is $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$, not $\gamma$.
