# Detailed solution - R211

**Approach.** The parasitic resistor $R_P$ connects node A (the drain of $M_1$, i.e. the source of cascode $M_3$) to the right output Y (the drain of $M_4$). The circuit is no longer symmetric, so we write the small-signal equations of the whole circuit. First we show that a common-mode input cannot change any current: the tail is ideal, the input pair is matched, and $R_P$ sits *above* the pair. Then we solve the differential case with KCL at the four internal nodes.

### Step 1 — Reading the circuit and the small-signal model

From the figure:

- $M_1$, $M_2$: matched NMOS input pair ($g_m$), sources at node P, tail $M_5$.
- $M_3$, $M_4$: NMOS cascodes, gates at the fixed bias $V_{b1}$.
  - $M_3$: source at A (drain of $M_1$), drain at the left output X.
  - $M_4$: source at B (drain of $M_2$), drain at the right output Y.
- $R_D$ from each output to $V_{DD}$.
- $R_P$ between A and Y.
- $V_{out} = V_X - V_Y$; $\lambda = \gamma = 0$.

**Small-signal elements** ($V_{DD}$ and $V_{b1}$ at AC ground):

- $M_1$: $i_1 = g_m(v_{in1} - v_P)$, flowing from A to P.
- $M_2$: $i_2 = g_m(v_{in2} - v_P)$, flowing from B to P.
- $M_3$: gate at AC ground, so $i_3 = g_{m3}(0 - v_A) = -g_{m3}v_A$, flowing from X down to A.
- $M_4$: $i_4 = -g_{m4}v_B$, flowing from Y down to B.
- $R_P$: $(v_Y - v_A)/R_P$ from Y to A.
- Tail $M_5$ (λ = 0): no signal current.

(At DC, $R_P$ carries some current from Y to A, so $M_3$ carries slightly less bias current than $M_4$ and $g_{m3} \ne g_{m4}$. The result below depends only on $g_{m3}$.)

<!-- diagram: diagram-01.cir -->

### Step 2 — Common-mode input: no current changes

KCL at P with the ideal tail:

$$i_1 + i_2 = 0 .$$

For a common-mode input $v_{in1} = v_{in2} = v_c$, matched devices give $i_1 = g_m(v_c - v_P) = i_2$. Combined with $i_1 + i_2 = 0$:

$$i_1 = i_2 = 0, \qquad v_P = v_c .$$

So the input pair passes **no** signal current. With $\lambda = 0$ the drain voltages of $M_1$ and $M_2$ do not affect their currents. Every other element ($M_3$, $M_4$, $R_P$, $R_D$) is driven only through these currents, since the cascode gates sit at a fixed bias. The node equations for A, B, X, Y are therefore homogeneous, with no source term, and their only solution is $v_A = v_B = v_X = v_Y = 0$:

$$A_{CM} = 0, \qquad \mathrm{CMRR} = \infty\quad(\text{within this model}).$$

The defect lies *above* the input pair. It cannot convert common mode to differential mode, because no common-mode signal current ever reaches it.

### Step 3 — Differential input: the input-pair currents

For $v_{in1} = +v_d/2$, $v_{in2} = -v_d/2$: $i_1 + i_2 = g_m(0 - 2v_P) = 0$, so $v_P = 0$, and

$$i_1 = g_m\frac{v_d}{2}, \qquad i_2 = -g_m\frac{v_d}{2} = -i_1 .$$

### Step 4 — KCL at the internal nodes

**Node B.** Only $M_4$ and $M_2$ connect here: $i_4 = i_2$. This fixes $v_B = -i_2/g_{m4}$, but $v_B$ affects nothing else.

**Node A.** Arriving: $i_3$ from $M_3$ and the $R_P$ current from Y. Leaving: $i_1$ into $M_1$:

$$-g_{m3}v_A + \frac{v_Y - v_A}{R_P} = i_1 . \tag{1}$$

**Output X.** The current down through the left $R_D$ is the current of $M_3$:

$$-\frac{v_X}{R_D} = i_3 = -g_{m3}v_A\quad\Longrightarrow\quad v_X = g_{m3}R_Dv_A . \tag{2}$$

**Output Y.** The current down through the right $R_D$ feeds $M_4$ and $R_P$:

$$-\frac{v_Y}{R_D} = i_4 + \frac{v_Y - v_A}{R_P} = i_2 + \frac{v_Y - v_A}{R_P}. \tag{3}$$

### Step 5 — Solve

From (1), $\dfrac{v_Y - v_A}{R_P} = i_1 + g_{m3}v_A$. Substitute into (3) and use $i_1 + i_2 = 0$:

$$-\frac{v_Y}{R_D} = i_2 + i_1 + g_{m3}v_A = g_{m3}v_A\quad\Longrightarrow\quad v_Y = -g_{m3}R_Dv_A . \tag{4}$$

Comparing (2) and (4): $v_X = -v_Y$, so the output is purely differential.

Now put (4) back into (1):

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

**Checks.** For $R_P \to \infty$, $A_{DM} \to -g_mR_D$, the normal cascode differential pair with λ = 0. For a large but finite $R_P$, the gain is reduced only by the factor $R_P/(R_P + R_D + 1/g_{m3}) \approx 1$.

*Numerical feel:* $g_m = 1$ mS, $g_{m3} = 1$ mS, $R_D = 5\ \mathrm{k}\Omega$, $R_P = 500\ \mathrm{k}\Omega$:

$$A_{DM} = -5\times\frac{500}{500 + 5 + 1} = -4.94 .$$

### Result

$$A_{DM} = -g_mR_D\,\frac{g_{m3}R_P}{1 + g_{m3}(R_D + R_P)} = -g_mR_D\,\frac{R_P}{R_P + R_D + 1/g_{m3}} \approx -g_mR_D,$$

$$A_{CM} = 0, \qquad \mathrm{CMRR} = \infty\ (\text{within this model}).$$

With λ = 0 the tail $M_5$ is ideal and $M_1$, $M_2$ are matched, so a common-mode input changes neither drain current ($i_1 = i_2$ and $i_1 + i_2 = 0$). Nothing else in the circuit is driven, since the cascode gates are at a fixed bias, so no output appears. The parasitic resistor sits above the input pair and cannot convert common mode to differential mode.

**Common mistake.** Claiming a nonzero common-mode gain, for example $R_D/R_P$, by analogy with a resistor connected to the tail node. In that case $R_P$ connects to node P, which moves with $V_{in,CM}$. Here $R_P$ connects two nodes above the input pair, and with an ideal tail and a matched pair no common-mode current reaches them.

**Common mistake.** Halving or doubling $A_{DM}$. Both outputs move ($v_X = -v_Y$), so $v_{out} = 2v_X$ while $v_d = 2v_{in}$, and the gain magnitude is $\approx g_mR_D$.

**Common mistake.** Forgetting that no current enters the gate of a MOSFET and mixing up which node $R_P$ touches. Writing KCL separately at A, B, X and Y, with $R_P$ between A and Y, avoids such slips.
