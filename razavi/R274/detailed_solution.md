# Detailed solution - R274

**Approach.** Write the small-signal model of the five-transistor amplifier with $R_1$ between the diode node F (drain of $M_1$, gate/drain of $M_3$) and the output. Kirchhoff's current law (KCL) at the three internal nodes, plus one observation (with an ideal tail source, the two PMOS currents must cancel), gives an exact closed-form gain. We then interpret it: through the mirror, $R_1$ loads the output as if it were $R_1/2$ to ground.

### Step 1 — Circuit and notation

From the figure: $M_1$, $M_2$ are the NMOS input pair with common source node P and an ideal tail source $I_{SS}$. $M_3$ (PMOS) is diode-connected at F, the drain of $M_1$. $M_4$ (PMOS, gate at F) is the mirror output device, whose drain is the output (also the drain of $M_2$). The defect $R_1$ connects F and the output.

Notation: $g_N = g_{m1} = g_{m2}$, $r_N = r_{O1} = r_{O2}$, $g_P = g_{m3} = g_{m4}$, $r_P = r_{O3} = r_{O4}$, $v_d = v_1 - v_2$.

**DC remark.** With zero differential input, the defect-free amplifier has $V_F = V_{out}$ (the mirror devices carry equal currents and have equal $V_{SD}$). That state still satisfies all the equations with $R_1$ present, because $R_1$ then carries no current. So $R_1$ causes **no offset**, and the bias point is unchanged.

### Step 2 — Small-signal model and KCL

$V_{DD}$ and ground are ac ground; the ideal tail source is an open circuit; body effect is neglected. Branch currents:

$$
\begin{aligned}
i_1 &= g_N(v_1 - v_P) + (v_F - v_P)/r_N && (M_1:\ \text{F} \to \text{P}),\\
i_2 &= g_N(v_2 - v_P) + (v_{out} - v_P)/r_N && (M_2:\ \text{out} \to \text{P}),\\
i_3 &= (g_P + 1/r_P)\,v_F && (M_3 \text{ diode}:\ \text{F} \to \text{ac ground}),\\
i_4 &= g_Pv_F + v_{out}/r_P && (M_4:\ \text{out} \to \text{ac ground}),\\
i_R &= (v_{out} - v_F)/R_1 && (R_1:\ \text{out} \to \text{F}).
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

KCL (output unloaded):

$$\text{F: } i_1 + i_3 = i_R, \qquad \text{P: } i_1 + i_2 = 0, \qquad \text{out: } i_2 + i_4 + i_R = 0 .$$

### Step 3 — The two PMOS currents cancel: $v_{out}$ in terms of $v_F$

Add the F and out equations: $i_1 + i_2 + i_3 + i_4 = 0$. With P ($i_1 + i_2 = 0$) this leaves $i_3 + i_4 = 0$. Physically, everything that comes down from $V_{DD}$ through $M_3$ and $M_4$ must leave through the tail, whose current is fixed; $R_1$ is an internal branch and cannot change that. So

$$
\begin{aligned}
(g_P + 1/r_P)v_F + g_Pv_F + v_{out}/r_P &= 0\\
v_{out} &= -(1 + 2g_Pr_P)\,v_F \quad\Longrightarrow\quad v_F = -\frac{v_{out}}{1 + 2g_Pr_P}. \tag{1}
\end{aligned}
$$

### Step 4 — The tail node and node F

**Node P.** Write out $i_1 + i_2 = 0$, with $\alpha \equiv g_N + 1/r_N$:

$$g_N(v_1 + v_2) + \frac{v_F + v_{out}}{r_N} = 2\alpha v_P \quad\Longrightarrow\quad \alpha v_P = \frac{g_N(v_1 + v_2)}{2} + \frac{v_F + v_{out}}{2r_N}. \tag{2}$$

**Node F.** Write out $i_1 + i_3 = i_R$:

$$g_Nv_1 - \alpha v_P + \frac{v_F}{r_N} + \left(g_P + \frac{1}{r_P}\right)v_F = \frac{v_{out} - v_F}{R_1}.$$

Substitute (2). The input terms combine as $g_Nv_1 - g_N(v_1 + v_2)/2 = g_Nv_d/2$:

$$\frac{g_Nv_d}{2} = -\left(\frac{1}{2r_N} + g_P + \frac{1}{r_P} + \frac{1}{R_1}\right)v_F + \left(\frac{1}{2r_N} + \frac{1}{R_1}\right)v_{out}. \tag{3}$$

Only $v_d$ appears, so the common-mode gain is zero and the result does not depend on how the input is applied.

### Step 5 — Solving for the gain

Substitute (1) into (3), and use $g_P + 1/r_P = (1 + g_Pr_P)/r_P$:

$$\frac{g_Nv_d}{2} = v_{out}\left[\frac{\frac{1}{2r_N} + \frac{1}{R_1} + \frac{1 + g_Pr_P}{r_P}}{1 + 2g_Pr_P} + \frac{1}{2r_N} + \frac{1}{R_1}\right].$$

Put the bracket over the common denominator $1 + 2g_Pr_P$. The terms $\tfrac{1}{2r_N} + \tfrac{1}{R_1}$ appear with total weight $1 + (1 + 2g_Pr_P) = 2(1 + g_Pr_P)$:

$$
\begin{aligned}
\left[\ \cdot\ \right] &= \frac{2(1 + g_Pr_P)\left(\frac{1}{2r_N} + \frac{1}{R_1}\right) + \frac{1 + g_Pr_P}{r_P}}{1 + 2g_Pr_P}
= \frac{(1 + g_Pr_P)\left(\frac{1}{r_N} + \frac{1}{r_P} + \frac{2}{R_1}\right)}{1 + 2g_Pr_P}.
\end{aligned}
$$

Therefore

$$A_v = \frac{v_{out}}{v_d} = \frac{g_N}{2}\cdot\frac{1 + 2g_Pr_P}{(1 + g_Pr_P)\left(\frac{1}{r_N} + \frac{1}{r_P} + \frac{2}{R_1}\right)} = g_{m1}\left(r_{O2}\,\Big\|\,r_{O4}\,\Big\|\,\frac{R_1}{2}\right)\frac{1 + 2g_{m4}r_{O4}}{2(1 + g_{m4}r_{O4})} .$$

The last factor is the usual small correction of the five-transistor amplifier; it tends to 1 for $g_{m4}r_{O4} \gg 1$:

$$A_v \approx g_{m1}\left(r_{O2}\,\|\,r_{O4}\,\|\,\frac{R_1}{2}\right).$$

As $R_1 \to \infty$ this returns to the defect-free gain $g_{m1}(r_{O2}\|r_{O4})$. ✓

### Step 6 — Why $R_1$ looks like $R_1/2$

Think of the gain as $G_mR_{out}$.

- **$G_m$ is unchanged** ($\approx g_{m1}$). With the output shorted to ac ground, $R_1$ connects F, a low-impedance node ($\approx 1/g_{m3}$), to ground. It diverts only a tiny part of the signal current.
- **$R_{out}$ drops.** Drive the output with a test voltage $v_x$. A current $i \approx v_x/R_1$ flows through $R_1$ into F, where the diode $M_3$ absorbs it. F is low-impedance, so its voltage barely moves, but $M_3$'s current must decrease by $i$. $M_4$ copies that change: its current *out of* $V_{DD}$ into the output also decreases by $i$, which means an extra $i$ effectively drawn from the output. The test source therefore supplies $2i$ for a voltage $v_x$: $R_1$ behaves like a resistance $R_1/2$ from the output to ground. Hence
$$R_{out} \approx r_{O2}\,\|\,r_{O4}\,\|\,\frac{R_1}{2}.$$

### Step 7 — Numerical example

Let $g_{m1} = 2$ mS, $g_{m4} = 1$ mS, $r_{O2} = r_{O4} = 40\ \mathrm{k}\Omega$, $R_1 = 40\ \mathrm{k}\Omega$.

$$
\begin{aligned}
\text{correction factor} &= \frac{1 + 2(1\ \mathrm{mS})(40\ \mathrm{k}\Omega)}{2\left(1 + (1\ \mathrm{mS})(40\ \mathrm{k}\Omega)\right)} = \frac{81}{82} = 0.988,\\
\text{defect-free: } A_v &= (2\ \mathrm{mS})(40\,\|\,40\ \mathrm{k}\Omega)(0.988) = (2\ \mathrm{mS})(20\ \mathrm{k}\Omega)(0.988) = 39.5,\\
\text{with } R_1: \ A_v &= (2\ \mathrm{mS})(40\,\|\,40\,\|\,20\ \mathrm{k}\Omega)(0.988) = (2\ \mathrm{mS})(10\ \mathrm{k}\Omega)(0.988) = 19.8 .
\end{aligned}
$$

The defect halves the gain in this case. Wrongly using $R_1$ instead of $R_1/2$ would give $(2\ \mathrm{mS})(13.3\ \mathrm{k}\Omega)(0.988) = 26.3$.

### Result

$$|A_v| = g_{m1}\left(r_{O2}\,\Big\|\,r_{O4}\,\Big\|\,\frac{R_1}{2}\right)\cdot\frac{2g_{m4}r_{O4} + 1}{2(g_{m4}r_{O4} + 1)} \approx g_{m1}\left(r_{O2}\,\|\,r_{O4}\,\|\,\frac{R_1}{2}\right).$$

$R_1$ loads the output as if it were $R_1/2$ to ground, because the current it injects into the diode node is copied by the mirror to the output. The transconductance is unchanged, and $R_1$ carries no dc current at the balanced bias point (no offset).

**Common mistake.** Concluding that the gain is unchanged because $V_F = V_{out}$ at the bias point. That only says $R_1$ carries no *dc* current. For signals, $v_F$ is tiny while $v_{out}$ is large, so $R_1$ carries a signal current of about $v_{out}/R_1$.

**Common mistake.** Using $r_{O2}\|r_{O4}\|R_1$, i.e. missing the factor 1/2. The current $R_1$ draws from the output is absorbed by the diode $M_3$ and then mirrored by $M_4$, so the output loses twice that current.

**Common mistake.** Placing $R_1$ between F and the tail node, or treating it as a load from the output to $V_{DD}$. The connection is from the diode node to the output, and its effect works through the mirror.
