# Detailed solution - R210

**Approach.** The parasitic $R_P$ runs from the drain of $M_1$ (node X) to the common source node P, which breaks the symmetry, so half circuits cannot be used. Write the small-signal equations of the whole circuit (transistor currents, KCL at P, where the ideal tail adds no signal current, and KCL at the two drains), solve once for a general input, and read off the differential and common-mode gains.

### Step 1 — The small-signal model

Call the drain of $M_1$ X, the drain of $M_2$ Y and the common source node P, so $V_{out} = V_X - V_Y$. With equal gate voltages $M_1$ and $M_2$ have the same $V_{GS}$ and drain current ($R_P$ only adds an extra dc current from X to P), so both have the same $g_m$. With $V_{DD}$ at ac ground:

- $M_1$: $i_1 = g_m(v_{in1} - v_P)$ from X to P;
- $M_2$: $i_2 = g_m(v_{in2} - v_P)$ from Y to P;
- $R_P$: $i_{RP} = (v_X - v_P)/R_P$ from X to P;
- $M_3$ ($\lambda = 0$): an ideal current source, zero signal current;
- $R_D$ from X and from Y to ac ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — The circuit equations

KCL at P (nothing leaves through $M_3$), at X and at Y:

$$i_1 + i_2 + i_{RP} = 0 , \tag{1}$$

$$-\frac{v_X}{R_D} = i_1 + i_{RP}\quad\Longrightarrow\quad v_X = -R_D(i_1 + i_{RP}), \tag{2}$$

$$v_Y = -R_Di_2 . \tag{3}$$

By (1), $i_1 + i_{RP} = -i_2$, so (2) becomes $v_X = +R_Di_2$, and with (3)

$$v_X = -v_Y = R_Di_2, \qquad v_{out} = v_X - v_Y = 2R_Di_2 :$$

the output is always purely differential and set by $i_2$ alone.

### Step 3 — Solve for $i_2$

Let $u_1 = v_{in1} - v_P$ and $u_2 = v_{in2} - v_P$, so $i_1 = g_mu_1$, $i_2 = g_mu_2$ and $u_1 - u_2 = v_{in1} - v_{in2} \equiv v_d$. Writing the $R_P$ current from its definition and from (1):

$$\frac{v_X - v_P}{R_P} = -(i_1 + i_2)\quad\Longrightarrow\quad v_X - v_P = -R_Pg_m(u_1 + u_2).$$

Substituting $v_X = R_Dg_mu_2$ and $v_P = v_{in2} - u_2$:

$$
\begin{aligned}
R_Dg_mu_2 - v_{in2} + u_2 &= -R_Pg_m(u_1 + u_2)\\
u_2\left(1 + g_mR_D + g_mR_P\right) + g_mR_Pu_1 &= v_{in2}.
\end{aligned}
$$

With $u_1 = u_2 + v_d$:

$$
\begin{aligned}
u_2\left(1 + g_mR_D + 2g_mR_P\right) + g_mR_Pv_d &= v_{in2}\\
u_2 &= \frac{v_{in2} - g_mR_Pv_d}{1 + g_mR_D + 2g_mR_P},
\end{aligned}
$$

so

$$v_{out} = 2R_Dg_mu_2 = \frac{2g_mR_D\left(v_{in2} - g_mR_Pv_d\right)}{1 + g_mR_D + 2g_mR_P}.$$

### Step 4 — Split into differential and common-mode parts

With $v_{in1} = v_{CM} + v_d/2$ and $v_{in2} = v_{CM} - v_d/2$, $v_{in2} - g_mR_Pv_d = v_{CM} - v_d\left(\tfrac12 + g_mR_P\right)$, and

$$v_{out} = \frac{2g_mR_D}{1 + g_mR_D + 2g_mR_P}\,v_{CM} - \frac{g_mR_D(1 + 2g_mR_P)}{1 + g_mR_D + 2g_mR_P}\,v_d .$$

**Differential gain:**

$$A_{DM} = \frac{v_{out}}{v_d} = -g_mR_D\,\frac{1 + 2g_mR_P}{1 + g_mR_D + 2g_mR_P} \approx -g_mR_D\quad(\text{for } 2g_mR_P \gg g_mR_D).$$

**Common-mode gain** (common-mode input to differential output):

$$A_{CM} = \frac{v_{out}}{v_{CM}} = \frac{2g_mR_D}{1 + g_mR_D + 2g_mR_P} \approx \frac{R_D}{R_P}\quad(\text{large } R_P).$$

**CMRR:**

$$\mathrm{CMRR} = \left|\frac{A_{DM}}{A_{CM}}\right| = \frac{g_mR_D(1 + 2g_mR_P)}{2g_mR_D} = \frac{1 + 2g_mR_P}{2} \approx g_mR_P .$$

### Step 5 — Physical mechanism (common mode)

With a pure common-mode input, $u_1 = u_2 = u$ and $i_1 = i_2 = g_mu$, so KCL at P forces $i_{RP} = -2g_mu$: to keep the total tail current fixed, the extra current must return through $R_P$, which is attached to X only. Then $v_Y = -R_Dg_mu$ and $v_X = -R_D(g_mu - 2g_mu) = +R_Dg_mu$: the outputs move in **opposite** directions, a differential output appears even with an ideal tail, and the output common-mode level does not move. As $R_P \to \infty$, $A_{CM} \to 0$, $\mathrm{CMRR} \to \infty$ and $A_{DM} \to -g_mR_D$, the defect-free values.

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

$R_P$ ties the tail node to one output: a common-mode input that moves $V_P$ drives a current through $R_P$ drawn from one side only, which converts common mode to differential mode even with an ideal tail.

**Common mistake.** Claiming $A_{CM} = 0$ because the tail source is ideal. An ideal tail fixes only the *sum* of the currents into P; $R_P$ is a third path whose current is taken from X only.

**Common mistake.** Treating $R_P$ as a load in parallel with $R_D$. Its lower end is P, which moves with the input: for differential signals P is nearly fixed, so $R_P$ barely changes the gain, but for common-mode signals it causes the conversion.

**Common mistake.** Halving $A_{DM}$ by taking only one drain's swing. Both drains swing, so $A_{DM} \approx -g_mR_D$, not $-g_mR_D/2$.
