# Detailed solution - R114

**Approach.** Replace both transistors by their small-signal models ($g_m v_{gs}$ current source in parallel with $r_O$), write Kirchhoff's current law (KCL) at the source node of $M_1$ (called $S$) and at the output, and solve for $v_{out}/v_{in}$. We then check the answer as $A_v = -G_mR_{out}$, which also explains why the gain is high.

### Step 1 — Reading the circuit

From the figure:

- $M_1$ is an NMOS with its gate at $V_{in}$, its drain at $V_{out}$, and its source at a node we call $S$.
- $R_S$ connects $S$ to ground (source degeneration of $M_1$).
- $M_2$ is a PMOS (arrow on its source pointing inward) with its source at $V_{DD}$ and its drain at $V_{out}$. Its **gate is connected to node $S$** (the wire on the right runs from the gate of $M_2$ down to the top of $R_S$).

So $M_2$ is not a fixed current source: its gate follows the voltage across $R_S$, which in turn tracks the current of $M_1$.

The problem gives $\gamma = 0$ (no body effect, even though the source of $M_1$ is not grounded) and $\lambda \neq 0$ (finite $r_O$). Here $g_m$ is the transconductance and $r_O \approx 1/(\lambda I_D)$ is the drain–source resistance due to channel-length modulation.

### Step 2 — Small-signal model

$V_{DD}$ and ground are **ac grounds**. Lower-case symbols denote small-signal quantities. The unknown node voltages are $v_S$ and $v_{out}$.

- **$M_1$**: gate–source voltage $v_{gs1} = v_{in} - v_S$. A controlled current source $g_{m1}(v_{in} - v_S)$ flows from out (drain) to $S$ (source), with $r_{O1}$ between out and $S$.
- **$R_S$**: between $S$ and ground.
- **$M_2$**: the small-signal model of a PMOS is the same as that of an NMOS. Its source is at ac ground and its gate is at $S$, so $v_{gs2} = v_S$. A current source $g_{m2}v_S$ flows from out (drain) to ground (source), with $r_{O2}$ between out and ground.

<!-- diagram: diagram-01.cir -->

Note that no current flows into the gate of $M_2$, so all of $M_1$'s current flows through $R_S$.

### Step 3 — The two KCL equations

**KCL at node $S$.** The current arriving from $M_1$ (controlled source plus $r_{O1}$, which carries $v_{ds1}/r_{O1} = (v_{out} - v_S)/r_{O1}$) equals the current leaving through $R_S$:

$$g_{m1}(v_{in} - v_S) + \frac{v_{out} - v_S}{r_{O1}} = \frac{v_S}{R_S}. \tag{1}$$

**KCL at the output node.** The currents leaving the output through $M_2$ and through $M_1$ must sum to zero (the output is unloaded):

$$\left[g_{m2}v_S + \frac{v_{out}}{r_{O2}}\right] + \left[g_{m1}(v_{in} - v_S) + \frac{v_{out} - v_S}{r_{O1}}\right] = 0.$$

The second bracket is the left-hand side of (1), i.e. it equals $v_S/R_S$. Replacing it:

$$g_{m2}v_S + \frac{v_{out}}{r_{O2}} + \frac{v_S}{R_S} = 0. \tag{2}$$

In words: the signal current $M_1$ draws from the output (which equals the current in $R_S$) must be supplied by $M_2$.

### Step 4 — Solve for the gain

**From (2), express $v_S$ through $v_{out}$:**

$$v_S\left(g_{m2} + \frac{1}{R_S}\right) = -\frac{v_{out}}{r_{O2}}.$$

Since $g_{m2} + 1/R_S = (1 + g_{m2}R_S)/R_S$,

$$v_S = -\frac{R_S}{r_{O2}(1 + g_{m2}R_S)}\,v_{out}. \tag{3}$$

**Rearrange (1).** Expand and move the $v_S$ terms to the right:

$$
\begin{aligned}
g_{m1}v_{in} - g_{m1}v_S + \frac{v_{out}}{r_{O1}} - \frac{v_S}{r_{O1}} &= \frac{v_S}{R_S}\\
g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} &= v_S\left(g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_S}\right).
\end{aligned}
$$

Put the bracket over a common denominator:

$$g_{m1} + \frac{1}{r_{O1}} + \frac{1}{R_S} = \frac{g_{m1}r_{O1}R_S + R_S + r_{O1}}{r_{O1}R_S}.$$

**Substitute (3):**

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} = -\frac{R_S}{r_{O2}(1 + g_{m2}R_S)}\cdot\frac{r_{O1} + R_S + g_{m1}r_{O1}R_S}{r_{O1}R_S}\,v_{out} = -\frac{r_{O1} + R_S + g_{m1}r_{O1}R_S}{r_{O1}r_{O2}(1 + g_{m2}R_S)}\,v_{out}.$$

Move the $v_{out}/r_{O1}$ term to the right and use the common denominator $r_{O1}r_{O2}(1 + g_{m2}R_S)$:

$$g_{m1}v_{in} = -\frac{r_{O2}(1 + g_{m2}R_S) + r_{O1} + R_S + g_{m1}r_{O1}R_S}{r_{O1}r_{O2}(1 + g_{m2}R_S)}\,v_{out}.$$

Expand the numerator and group the terms containing $R_S$:

$$r_{O2} + g_{m2}r_{O2}R_S + r_{O1} + R_S + g_{m1}r_{O1}R_S = r_{O1} + r_{O2} + R_S(1 + g_{m1}r_{O1} + g_{m2}r_{O2}).$$

**The gain:**

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}r_{O1}r_{O2}\,(1 + g_{m2}R_S)}{r_{O1} + r_{O2} + R_S\,(1 + g_{m1}r_{O1} + g_{m2}r_{O2})}.$$

The gain is negative: the stage is inverting.

### Step 5 — Cross-check as $A_v = -G_mR_{out}$

A linear stage can be replaced by a Norton equivalent at its output: a current $G_mv_{in}$ in parallel with $R_{out}$.

**Short-circuit transconductance** ($v_{out} = 0$). Equation (1) with $v_{out} = 0$:

$$g_{m1}(v_{in} - v_S) - \frac{v_S}{r_{O1}} = \frac{v_S}{R_S}\quad\Longrightarrow\quad v_S = \frac{g_{m1}r_{O1}R_S}{r_{O1} + R_S + g_{m1}r_{O1}R_S}\,v_{in}.$$

The current pulled out of the shorted output is $M_1$'s current ($v_S/R_S$) plus the *reduction* of $M_2$'s current ($g_{m2}v_S$):

$$|G_m| = \frac{(1 + g_{m2}R_S)\,v_S}{R_S\,v_{in}} = \frac{g_{m1}r_{O1}(1 + g_{m2}R_S)}{r_{O1} + R_S + g_{m1}r_{O1}R_S}.$$

**Output resistance** ($v_{in} = 0$, test voltage $v_x$ at the output). Looking down into the drain of the degenerated $M_1$, the resistance is $R_1 = r_{O1} + (1 + g_{m1}r_{O1})R_S$, so $M_1$ draws $v_x/R_1$, which also flows in $R_S$, giving $v_S = R_Sv_x/R_1$. $M_2$ then draws $g_{m2}v_S + v_x/r_{O2}$. The total test current is

$$i_x = \frac{v_x}{R_1}(1 + g_{m2}R_S) + \frac{v_x}{r_{O2}}\quad\Longrightarrow\quad R_{out} = r_{O2}\,\Big\|\,\frac{r_{O1} + R_S + g_{m1}r_{O1}R_S}{1 + g_{m2}R_S}.$$

**Product.** Writing the parallel combination as a single fraction,

$$R_{out} = \frac{r_{O2}\,(r_{O1} + R_S + g_{m1}r_{O1}R_S)}{r_{O2}(1 + g_{m2}R_S) + r_{O1} + R_S + g_{m1}r_{O1}R_S},$$

so the factor $(r_{O1} + R_S + g_{m1}r_{O1}R_S)$ cancels in $-|G_m|R_{out}$, leaving

$$-|G_m|R_{out} = -\frac{g_{m1}r_{O1}r_{O2}(1 + g_{m2}R_S)}{r_{O1} + r_{O2} + R_S(1 + g_{m1}r_{O1} + g_{m2}r_{O2})},$$

identical to Step 4. ✓

**Intuition.** When $v_{in}$ rises, $M_1$ conducts more, so $v_S$ rises. That lifts the gate of the PMOS $M_2$, which then conducts *less*. Both transistors therefore act to pull the output down: $M_2$ is effectively a second, "free" input device driven from $S$. This multiplies the transconductance by $(1 + g_{m2}R_S)$ and is why the gain is far above the plain degenerated value $\approx R_{out}/R_S$.

### Step 6 — Limiting cases

- **$R_S = 0$.** Node $S$ is grounded, $M_2$ becomes an ideal current-source load, and $A_v = -g_{m1}r_{O1}r_{O2}/(r_{O1} + r_{O2}) = -g_{m1}(r_{O1}\parallel r_{O2})$, the standard CS stage with current-source load. ✓
- **Large $r_O$, $g_{m1}R_S \gg 1$.** Then $r_{O1} + r_{O2} + R_S$ is negligible next to $R_S(g_{m1}r_{O1} + g_{m2}r_{O2})$, and
$$A_v \approx -\frac{g_{m1}r_{O1}r_{O2}(1 + g_{m2}R_S)}{R_S(g_{m1}r_{O1} + g_{m2}r_{O2})}.$$
If also $g_{m2}R_S \gg 1$, $(1 + g_{m2}R_S)/R_S \approx g_{m2}$ and
$$A_v \approx -\frac{(g_{m1}r_{O1})(g_{m2}r_{O2})}{g_{m1}r_{O1} + g_{m2}r_{O2}},$$
i.e. about half the intrinsic gain $g_mr_O$ when the two devices have equal intrinsic gains. The degeneration does **not** reduce the gain toward $R_{out}/R_S$, because $M_2$ recovers the signal from $R_S$.

### Result

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}r_{O1}r_{O2}\,(1 + g_{m2}R_S)}{r_{O1} + r_{O2} + R_S\,(1 + g_{m1}r_{O1} + g_{m2}r_{O2})},$$

an inverting gain of the order of the intrinsic gain $g_mr_O$; for large $r_O$ and $g_{m1}R_S \gg 1$ it approaches $-g_{m1}r_{O1}r_{O2}(1 + g_{m2}R_S)/[R_S(g_{m1}r_{O1} + g_{m2}r_{O2})]$.

**Common mistake.** Treating $M_2$ as an ideal current source with resistance $r_{O2}$ (gate at a fixed bias). That drops the $g_{m2}$ terms and gives the ordinary degenerated-CS result $-g_{m1}r_{O1}r_{O2}/[r_{O1} + r_{O2} + (1 + g_{m1}r_{O1})R_S]$, which misses the transconductance boost $(1 + g_{m2}R_S)$ and is much smaller when $g_{m2}R_S \gg 1$. The gate of $M_2$ is wired to $S$, so it carries signal.

**Common mistake.** Using the simple degeneration rule $A_v \approx -R_D/R_S$ (here with $R_D \to r_{O2}$ or $R_{out}$). That rule assumes a fixed load and a large $g_{m1}R_S$; here the load transistor's current changes with $v_S$, which changes both $G_m$ and $R_{out}$.

**Common mistake.** Getting the sign of $M_2$'s contribution wrong, for instance writing the PMOS current into the output as $+g_{m2}v_S$. Raising the gate of a PMOS whose source is fixed at $V_{DD}$ *reduces* its current, so $M_2$ reinforces $M_1$; the gain is negative and larger in magnitude than without the connection.
