# Detailed solution - R211

**Approach.** The parasitic $R_P$ connects node A (the drain of $M_1$, i.e. the source of the cascode $M_3$) to the right output Y (the drain of $M_4$). The circuit is no longer symmetric, so write the small-signal equations of the whole circuit. A common-mode input cannot change any current, because the tail is ideal, the pair is matched and $R_P$ sits *above* the pair; the differential case then follows from KCL at the internal nodes.

### Step 1 — The small-signal model

Call the drain of $M_1$ (source of $M_3$) A, the drain of $M_2$ (source of $M_4$) B, the left output (drain of $M_3$) X, the right output (drain of $M_4$) Y and the common source node of $M_1$, $M_2$ P; $V_{out} = V_X - V_Y$. With $V_{DD}$ and $V_{b1}$ at ac ground:

- $M_1$: $i_1 = g_m(v_{in1} - v_P)$ from A to P; $M_2$: $i_2 = g_m(v_{in2} - v_P)$ from B to P.
- $M_3$ (gate at ac ground): $i_3 = g_{m3}(0 - v_A) = -g_{m3}v_A$ from X down to A; $M_4$: $i_4 = -g_{m4}v_B$ from Y down to B.
- $R_P$: $(v_Y - v_A)/R_P$ from Y to A.
- Tail $M_5$ ($\lambda = 0$): no signal current.

(At dc, $R_P$ carries some current from Y to A, so $M_3$ carries slightly less bias current than $M_4$ and $g_{m3} \ne g_{m4}$; the result depends only on $g_{m3}$.)

<!-- diagram: diagram-01.cir -->

### Step 2 — Common-mode input: no current changes

KCL at P with the ideal tail gives $i_1 + i_2 = 0$. For $v_{in1} = v_{in2} = v_c$, the matched devices give $i_1 = g_m(v_c - v_P) = i_2$, so

$$i_1 = i_2 = 0, \qquad v_P = v_c .$$

With $\lambda = 0$ the drain voltages of $M_1$, $M_2$ do not affect their currents, and every other element is driven only through these currents (the cascode gates sit at a fixed bias). The node equations for A, B, X, Y are therefore homogeneous, and their only solution is $v_A = v_B = v_X = v_Y = 0$:

$$A_{CM} = 0, \qquad \mathrm{CMRR} = \infty\quad(\text{within this model}).$$

The defect lies *above* the input pair, where no common-mode signal current ever arrives, so it cannot convert common mode to differential mode.

### Step 3 — Differential input: the input-pair currents

For $v_{in1} = +v_d/2$, $v_{in2} = -v_d/2$: $i_1 + i_2 = g_m(0 - 2v_P) = 0$, so $v_P = 0$ and

$$i_1 = g_m\frac{v_d}{2}, \qquad i_2 = -g_m\frac{v_d}{2} = -i_1 .$$

### Step 4 — KCL at the internal nodes

**Node B:** only $M_4$ and $M_2$ connect here, so $i_4 = i_2$; this fixes $v_B = -i_2/g_{m4}$, which affects nothing else.

**Node A** ($i_3$ and the $R_P$ current arrive, $i_1$ leaves):

$$-g_{m3}v_A + \frac{v_Y - v_A}{R_P} = i_1 . \tag{1}$$

**Output X** (the current down the left $R_D$ is $M_3$'s):

$$-\frac{v_X}{R_D} = i_3 = -g_{m3}v_A\quad\Longrightarrow\quad v_X = g_{m3}R_Dv_A . \tag{2}$$

**Output Y** (the current down the right $R_D$ feeds $M_4$ and $R_P$):

$$-\frac{v_Y}{R_D} = i_4 + \frac{v_Y - v_A}{R_P} = i_2 + \frac{v_Y - v_A}{R_P}. \tag{3}$$

### Step 5 — Solve

From (1), $(v_Y - v_A)/R_P = i_1 + g_{m3}v_A$; substituting into (3) with $i_1 + i_2 = 0$:

$$-\frac{v_Y}{R_D} = i_2 + i_1 + g_{m3}v_A = g_{m3}v_A\quad\Longrightarrow\quad v_Y = -g_{m3}R_Dv_A , \tag{4}$$

so by (2) $v_X = -v_Y$: the output is purely differential. Putting (4) back into (1):

$$
\begin{aligned}
-g_{m3}v_A + \frac{-g_{m3}R_Dv_A - v_A}{R_P} &= i_1\\
-v_A\left[g_{m3}R_P + g_{m3}R_D + 1\right] &= R_Pi_1\\
v_A &= -\frac{R_Pi_1}{1 + g_{m3}(R_D + R_P)} .
\end{aligned}
$$

Then from (2):

$$v_X = g_{m3}R_Dv_A = -\frac{g_{m3}R_DR_P}{1 + g_{m3}(R_D + R_P)}\,i_1 = -\frac12g_mR_D\,\frac{g_{m3}R_P}{1 + g_{m3}(R_D + R_P)}\,v_d .$$

With $v_{out} = v_X - v_Y = 2v_X$:

$$A_{DM} = \frac{v_{out}}{v_d} = -g_mR_D\,\frac{g_{m3}R_P}{1 + g_{m3}(R_D + R_P)} = -g_mR_D\,\frac{R_P}{R_P + R_D + 1/g_{m3}} .$$

For $R_P \to \infty$, $A_{DM} \to -g_mR_D$, the normal cascode differential pair with $\lambda = 0$; a large but finite $R_P$ reduces the gain only by the factor $R_P/(R_P + R_D + 1/g_{m3}) \approx 1$.

*Numerical feel:* $g_m = 1$ mS, $g_{m3} = 1$ mS, $R_D = 5\ \mathrm{k}\Omega$, $R_P = 500\ \mathrm{k}\Omega$:

$$A_{DM} = -5\times\frac{500}{500 + 5 + 1} = -4.94 .$$

### Result

$$A_{DM} = -g_mR_D\,\frac{g_{m3}R_P}{1 + g_{m3}(R_D + R_P)} = -g_mR_D\,\frac{R_P}{R_P + R_D + 1/g_{m3}} \approx -g_mR_D,$$

$$A_{CM} = 0, \qquad \mathrm{CMRR} = \infty\ (\text{within this model}).$$

With $\lambda = 0$ the tail $M_5$ is ideal and $M_1$, $M_2$ are matched, so a common-mode input changes neither drain current ($i_1 = i_2$ and $i_1 + i_2 = 0$). Nothing else in the circuit is driven, since the cascode gates are at a fixed bias, so no output appears: the parasitic resistor sits above the input pair and cannot convert common mode to differential mode.

**Common mistake.** Claiming a nonzero common-mode gain such as $R_D/R_P$, by analogy with a resistor tied to the tail node, which moves with $V_{in,CM}$. Here $R_P$ joins two nodes above the input pair, which no common-mode current reaches.

**Common mistake.** Halving or doubling $A_{DM}$. Both outputs move ($v_X = -v_Y$), so $v_{out} = 2v_X$ while $v_d = 2v_{in}$, and $|A_{DM}| \approx g_mR_D$.

**Common mistake.** Mixing up which node $R_P$ touches. Writing KCL separately at A, B, X and Y, with $R_P$ between A and Y, avoids such slips.
