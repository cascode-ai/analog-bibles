# Detailed solution - R146

**Approach.** Use the Norton equivalent at the output: $A_v = -G_mR_{out}$. Here $G_m$ is the current the shorted output draws per unit input, and $R_{out}$ is the resistance at the output with the input set to zero. For the common-gate (CG) stage we compute $G_m$ by shorting the drain and solving Kirchhoff's current law (KCL) at the source node, and $R_{out}$ as the degenerated drain resistance in parallel with $R_D$. Then we multiply.

### Step 1 — The circuit and the transistor model

The CG stage consists of:

- NMOS $M_1$ with its gate at a dc bias (ac ground) and its bulk at ground;
- the input $V_{in}$ applied through a source resistance $R_S$ to the source of $M_1$ (node $X$);
- the drain connected to $V_{DD}$ through $R_D$; the output is the drain.

Small-signal model ($V_{DD}$, the gate bias and ground are ac grounds): with the gate and bulk at ac ground,

$$v_{gs} = -v_X,\qquad v_{bs} = -v_X,$$

so the two controlled sources together carry $g_mv_{gs} + g_{mb}v_{bs} = -(g_m + g_{mb})v_X$ from drain to source. The output resistance $r_O$ connects drain and source.

**Sign convention of the lemma.** The output network is replaced by a current $G_mv_{in}$ pulling current *out of* the output node, in parallel with $R_{out}$, so $v_{out} = -G_mv_{in}R_{out}$. Hence $G_m$ is the current that a short from the output to ac ground must *supply into* the output node, divided by $v_{in}$. For a CS stage this gives $G_m = +g_m$.

### Step 2 — $G_m$: drain shorted to ac ground

<!-- diagram: diagram-01.cir -->

With $v_{out} = 0$, $R_D$ carries no signal current. The transistor's drain-to-source current is

$$i_{ds} = -(g_m + g_{mb})v_X + \frac{0 - v_X}{r_O} = -\left(g_m + g_{mb} + \frac{1}{r_O}\right)v_X .$$

**KCL at $X$.** The current arriving through $R_S$ plus the current arriving from the transistor (drain to source, i.e. into $X$) must sum to zero:

$$\frac{v_{in} - v_X}{R_S} + i_{ds} = 0\quad\Longrightarrow\quad \frac{v_{in} - v_X}{R_S} = \left(g_m + g_{mb} + \frac{1}{r_O}\right)v_X .$$

Multiply by $R_S$ and collect the $v_X$ terms:

$$v_{in} = v_X\left[1 + \left(g_m + g_{mb} + \frac{1}{r_O}\right)R_S\right]\quad\Longrightarrow\quad v_X = \frac{v_{in}}{1 + \left(g_m + g_{mb} + \dfrac{1}{r_O}\right)R_S}.$$

**Short-circuit current.** All the current the short supplies into the drain node goes into the transistor, so $i_{sc} = i_{ds}$:

$$G_m = \frac{i_{ds}}{v_{in}} = -\frac{g_m + g_{mb} + 1/r_O}{1 + (g_m + g_{mb} + 1/r_O)R_S}.$$

Multiply numerator and denominator by $r_O$:

$$G_m = -\frac{1 + (g_m + g_{mb})r_O}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S}.$$

$G_m$ is **negative**: raising the source voltage reduces $v_{gs}$ (and $v_{bs}$), so the transistor draws *less* current from the output.

### Step 3 — $R_{out}$: input set to zero

<!-- diagram: diagram-02.cir -->

With $v_{in} = 0$, $R_S$ connects $X$ to ac ground. Apply a test voltage $v_x$ at the drain. The output resistance is $R_D$ in parallel with the resistance $R_x$ looking into the drain of the degenerated transistor.

**Resistance looking into the drain.** The test current $i_x$ flows down through the transistor and then through $R_S$, so $v_X = i_xR_S$. The drain-to-source current is

$$i_x = -(g_m + g_{mb})v_X + \frac{v_x - v_X}{r_O} = -(g_m + g_{mb})R_S\,i_x + \frac{v_x - i_xR_S}{r_O}.$$

Multiply by $r_O$ and collect the $i_x$ terms:

$$
\begin{aligned}
i_xr_O &= -(g_m + g_{mb})r_OR_S\,i_x + v_x - i_xR_S\\
v_x &= i_x\left[r_O + R_S + (g_m + g_{mb})r_OR_S\right]\\
R_x &= \frac{v_x}{i_x} = r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S .
\end{aligned}
$$

So

$$R_{out} = R_D\,\Big\|\,\left\{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S\right\} = \frac{R_D\,R_x}{R_D + R_x}.$$

### Step 4 — The gain

$$A_v = -G_mR_{out} = \frac{1 + (g_m + g_{mb})r_O}{R_x}\cdot\frac{R_DR_x}{R_D + R_x}.$$

The factor $R_x = r_O + [1 + (g_m + g_{mb})r_O]R_S$, the denominator of $|G_m|$, cancels:

$$A_v = \frac{\left[1 + (g_m + g_{mb})r_O\right]R_D}{R_D + R_x} = \frac{\left[1 + (g_m + g_{mb})r_O\right]R_D}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S + R_D}.$$

The gain is **positive**: the CG stage is non-inverting.

### Step 5 — Checks

- **Large $r_O$.** Divide numerator and denominator by $r_O$ and let $r_O \to \infty$:
$$A_v \to \frac{(g_m + g_{mb})R_D}{1 + (g_m + g_{mb})R_S},$$
the familiar CG result: the input current is $v_{in}/[R_S + 1/(g_m + g_{mb})]$, and all of it flows through $R_D$.
- **$R_S = 0$** (ideal voltage drive): $A_v = [1 + (g_m + g_{mb})r_O]R_D/(r_O + R_D)$, the standard CG gain with finite $r_O$.
- **Consistency.** The result can also be written $A_v = R_D/(R_S + R_{in})$ with $R_{in} = (R_D + r_O)/[1 + (g_m + g_{mb})r_O]$: the current entering the source equals the current leaving the drain, because the gate draws none.

### Result

$$G_m = -\frac{1 + (g_m + g_{mb})r_O}{r_O + [1 + (g_m + g_{mb})r_O]R_S},\qquad R_{out} = R_D\,\Big\|\,\{r_O + [1 + (g_m + g_{mb})r_O]R_S\},$$

$$A_v = -G_mR_{out} = \frac{\left[1 + (g_m + g_{mb})r_O\right]R_D}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S + R_D}\quad(\text{non-inverting}),$$

which tends to $(g_m + g_{mb})R_D/[1 + (g_m + g_{mb})R_S]$ for $r_O \to \infty$.

**Common mistake.** Giving the CG stage an inverting gain by taking $G_m = +(g_m + g_{mb})$. The input drives the *source*: raising it reduces $V_{GS}$ and the drain current, so the shorted output receives *less* current from the transistor. $G_m$ is negative in the lemma's convention, and the gain is positive.

**Common mistake.** Asserting $G_m = g_m + g_{mb}$ (ignoring $R_S$ and $r_O$) together with $R_{out} = R_D$ as exact. With a source resistance, only a fraction of $v_{in}$ reaches $X$, and $r_O$ adds a current path. The exact $G_m$ and $R_{out}$ are given above; the simple forms are valid only for $R_S = 0$ and $r_O \to \infty$.

**Common mistake.** Computing $R_{out}$ with the source of $M_1$ grounded ($R_{out} = R_D\parallel r_O$). With the input set to zero, the source is still connected to ground through $R_S$, so the transistor's drain resistance is boosted to $r_O + [1 + (g_m + g_{mb})r_O]R_S$.
