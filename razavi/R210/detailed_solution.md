# Detailed solution - R210

**Approach.** The parasitic resistor $R_P$ runs from the drain of $M_1$ (node X) to the common source node P. This breaks the symmetry, so we cannot use half circuits. Instead we write the small-signal equations of the whole circuit: the transistor currents, KCL at P (where the ideal tail adds no signal current), and KCL at the two drains. Then we solve once for a general input and read off the differential and common-mode gains.

### Step 1 — Reading the circuit and the small-signal model

From the figure:

- $M_1$, $M_2$: NMOS pair, sources at node P, drains at X (left output) and Y (right output), each loaded by $R_D$ to $V_{DD}$.
- $R_P$ connects X to P.
- $M_3$ is the tail current source.
- $V_{out} = V_X - V_Y$.
- $\lambda = \gamma = 0$.

**Bias.** With equal gate voltages, $M_1$ and $M_2$ have the same $V_{GS}$ and hence the same drain current. $R_P$ only adds an extra DC current from X to P. So both devices have the same $g_m$.

**Small-signal elements** ($V_{DD}$ = AC ground):

- $M_1$: current $i_1 = g_m(v_{in1} - v_P)$ from X to P.
- $M_2$: current $i_2 = g_m(v_{in2} - v_P)$ from Y to P.
- $R_P$: current $i_{RP} = (v_X - v_P)/R_P$ from X to P.
- $M_3$ (λ = 0): an ideal current source, so zero signal current.
- $R_D$: from X to AC ground and from Y to AC ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — The circuit equations

**KCL at P.** Everything that flows into P must leave through $M_3$, which carries no signal current:

$$i_1 + i_2 + i_{RP} = 0 . \tag{1}$$

**KCL at X.** The current coming down through $R_D$, $-v_X/R_D$, feeds $M_1$ and $R_P$:

$$-\frac{v_X}{R_D} = i_1 + i_{RP}\quad\Longrightarrow\quad v_X = -R_D(i_1 + i_{RP}). \tag{2}$$

**KCL at Y:**

$$v_Y = -R_Di_2 . \tag{3}$$

**A useful consequence.** By (1), $i_1 + i_{RP} = -i_2$, so (2) becomes $v_X = +R_Di_2$. Together with (3):

$$v_X = -v_Y = R_Di_2, \qquad v_{out} = v_X - v_Y = 2R_Di_2 .$$

The output is always purely differential, and it is set by $i_2$ alone.

### Step 3 — Solve for $i_2$

Introduce $u_1 = v_{in1} - v_P$ and $u_2 = v_{in2} - v_P$, so $i_1 = g_mu_1$, $i_2 = g_mu_2$, and $u_1 - u_2 = v_{in1} - v_{in2} \equiv v_d$.

Write the $R_P$ current two ways: from its definition, and from (1):

$$\frac{v_X - v_P}{R_P} = -(i_1 + i_2)\quad\Longrightarrow\quad v_X - v_P = -R_Pg_m(u_1 + u_2).$$

Substitute $v_X = R_Dg_mu_2$ and $v_P = v_{in2} - u_2$:

$$
\begin{aligned}
R_Dg_mu_2 - v_{in2} + u_2 &= -R_Pg_m(u_1 + u_2)\\
u_2\left(1 + g_mR_D + g_mR_P\right) + g_mR_Pu_1 &= v_{in2}.
\end{aligned}
$$

Replace $u_1 = u_2 + v_d$:

$$
\begin{aligned}
u_2\left(1 + g_mR_D + 2g_mR_P\right) + g_mR_Pv_d &= v_{in2}\\
u_2 &= \frac{v_{in2} - g_mR_Pv_d}{1 + g_mR_D + 2g_mR_P}.
\end{aligned}
$$

Therefore

$$v_{out} = 2R_Dg_mu_2 = \frac{2g_mR_D\left(v_{in2} - g_mR_Pv_d\right)}{1 + g_mR_D + 2g_mR_P}.$$

### Step 4 — Split into differential and common-mode parts

Write $v_{in1} = v_{CM} + v_d/2$ and $v_{in2} = v_{CM} - v_d/2$. Then $v_{in2} - g_mR_Pv_d = v_{CM} - v_d\left(\tfrac12 + g_mR_P\right)$, and

$$v_{out} = \frac{2g_mR_D}{1 + g_mR_D + 2g_mR_P}\,v_{CM} - \frac{g_mR_D(1 + 2g_mR_P)}{1 + g_mR_D + 2g_mR_P}\,v_d .$$

**Differential gain:**

$$A_{DM} = \frac{v_{out}}{v_d} = -g_mR_D\,\frac{1 + 2g_mR_P}{1 + g_mR_D + 2g_mR_P} \approx -g_mR_D\quad(\text{for } 2g_mR_P \gg g_mR_D).$$

**Common-mode gain** (common-mode input to differential output):

$$A_{CM} = \frac{v_{out}}{v_{CM}} = \frac{2g_mR_D}{1 + g_mR_D + 2g_mR_P} \approx \frac{R_D}{R_P}\quad(\text{large } R_P).$$

**CMRR:**

$$\mathrm{CMRR} = \left|\frac{A_{DM}}{A_{CM}}\right| = \frac{g_mR_D(1 + 2g_mR_P)}{2g_mR_D} = \frac{1 + 2g_mR_P}{2} \approx g_mR_P .$$

### Step 5 — Physical mechanism (common mode)

With a pure common-mode input, $u_1 = u_2 = u$, so $i_1 = i_2 = g_mu$. KCL at P then forces $i_{RP} = -2g_mu$. To keep the total tail current fixed, the extra current must come back through $R_P$, which is attached to X only.

- Y moves by $v_Y = -R_Dg_mu$.
- X moves by $v_X = -R_D(g_mu - 2g_mu) = +R_Dg_mu$.

So the two outputs move in **opposite** directions and a differential output appears, even though the tail source is ideal. The output common-mode level does not move at all. $R_P$ converts common mode to differential mode because it ties the tail node to one output only.

As $R_P \to \infty$: $A_{CM} \to 0$, $\mathrm{CMRR} \to \infty$, and $A_{DM} \to -g_mR_D$, the defect-free values.

*Numerical feel:* with $g_m = 1$ mS, $R_D = 5\ \mathrm{k}\Omega$ and $R_P = 500\ \mathrm{k}\Omega$:

$$
\begin{aligned}
1 + g_mR_D + 2g_mR_P &= 1 + 5 + 1000 = 1006,\\
A_{DM} &= -5\times\frac{1001}{1006} = -4.98,\\
A_{CM} &= \frac{10}{1006} = 0.0099,\\
\mathrm{CMRR} &= \frac{1001}{2} \approx 500\ (54\ \mathrm{dB}).
\end{aligned}
$$

### Result

$$A_{DM} = -g_mR_D\,\frac{1 + 2g_mR_P}{1 + g_mR_D + 2g_mR_P} \approx -g_mR_D,$$

$$A_{CM} = \frac{V_{out}}{V_{in,CM}} = \frac{2g_mR_D}{1 + g_mR_D + 2g_mR_P} \approx \frac{R_D}{R_P},$$

$$\mathrm{CMRR} = \frac{1 + 2g_mR_P}{2} \approx g_mR_P .$$

$R_P$ ties the tail node to one output. A common-mode input that moves $V_P$ drives a current through $R_P$ that is drawn from one side only, which converts common mode to differential mode even with an ideal tail.

**Common mistake.** Claiming $A_{CM} = 0$ (infinite CMRR) because the tail current source is ideal. An ideal tail fixes only the *sum* of the currents through P. Here $R_P$ is a third path into P, and its current is taken from X only, so a common-mode input does unbalance the two drains.

**Common mistake.** Treating $R_P$ as a load in parallel with $R_D$ (from X to AC ground). Its lower end is node P, which moves with the input, not ground. For differential signals P is nearly fixed, so $R_P$ barely changes the gain ($A_{DM} \approx -g_mR_D$), but for common-mode signals it is exactly what causes the conversion.

**Common mistake.** Halving $A_{DM}$ (for example by taking only one drain's swing). The output is $V_X - V_Y$, and both drains swing, so $A_{DM} \approx -g_mR_D$, not $-g_mR_D/2$.
