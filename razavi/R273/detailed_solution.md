# Detailed solution - R273

**Approach.** Write the small-signal model of the five-transistor amplifier with the extra resistor $R_1$ between the diode node F (drain of $M_1$, gate/drain of $M_3$) and the tail node P. Kirchhoff's current law (KCL) at F, P and the output gives three equations. A neat combination of two of them fixes $v_{out}$ in terms of $v_F$, and the remaining two give $v_F$. We then simplify for $g_mr_O \gg 1$ and interpret the result: $R_1$ connects two low-impedance nodes, so it barely changes the gain.

### Step 1 — Circuit and notation

From the figure: $M_1$, $M_2$ form an NMOS differential pair with sources at P and an ideal tail current source $I_{SS}$. $M_3$ (PMOS, diode-connected at F) loads $M_1$. $M_4$ (PMOS, gate at F) mirrors it and loads $M_2$ at the output. The defect $R_1$ connects F to P.

Notation: $g_N = g_{m1} = g_{m2}$, $r_N = r_{O1} = r_{O2}$, $g_P = g_{m3} = g_{m4}$, $r_P = r_{O3} = r_{O4}$. Inputs $v_1$, $v_2$; differential input $v_d = v_1 - v_2$.

### Step 2 — Small-signal model

$V_{DD}$ and ground are ac ground; the ideal tail source is an open circuit. Body effect is neglected. Each transistor is a controlled current $g_mv_{gs}$ (drain to source) in parallel with its $r_O$:

- **$M_1$** (drain F, source P): $i_1 = g_N(v_1 - v_P) + (v_F - v_P)/r_N$, flowing F → P.
- **$M_2$** (drain out, source P): $i_2 = g_N(v_2 - v_P) + (v_{out} - v_P)/r_N$, flowing out → P.
- **$M_3$** (diode at F, source at ac ground): $i_3 = (g_P + 1/r_P)v_F$, flowing F → ac ground.
- **$M_4$** (gate F, drain out): $i_4 = g_Pv_F + v_{out}/r_P$, flowing out → ac ground.
- **$R_1$**: $i_R = (v_F - v_P)/R_1$, flowing F → P.

<!-- diagram: diagram-01.cir -->

**KCL** (output unloaded):

$$
\begin{aligned}
\text{node F:}\quad & i_1 + i_3 + i_R = 0, \\
\text{node P:}\quad & i_1 + i_2 + i_R = 0, \\
\text{node out:}\quad & i_2 + i_4 = 0 .
\end{aligned}
$$

### Step 3 — The output voltage in terms of $v_F$

Subtract the P equation from the F equation: $i_3 - i_2 = 0$, so $i_2 = i_3$. The current of $M_2$ equals the diode current, whatever $R_1$ does, because $R_1$ and $M_1$ return their currents to the same pair of nodes. Then the output KCL gives $i_4 = -i_3$:

$$
\begin{aligned}
g_Pv_F + \frac{v_{out}}{r_P} &= -\left(g_P + \frac{1}{r_P}\right)v_F\\
\frac{v_{out}}{r_P} &= -\left(2g_P + \frac{1}{r_P}\right)v_F\\
v_{out} &= -(1 + 2g_Pr_P)\,v_F . \tag{1}
\end{aligned}
$$

### Step 4 — Solving for $v_F$

**Equation A** ($i_2 = i_3$, with (1) substituted):

$$g_N(v_2 - v_P) + \frac{-(1 + 2g_Pr_P)v_F - v_P}{r_N} = \left(g_P + \frac{1}{r_P}\right)v_F .$$

Collect terms, with $\alpha \equiv g_N + 1/r_N$ and $K_a \equiv g_P + 1/r_P + (1 + 2g_Pr_P)/r_N$:

$$g_Nv_2 - \alpha v_P = K_av_F \quad\Longrightarrow\quad v_P = \frac{g_Nv_2 - K_av_F}{\alpha}. \tag{2}$$

**Equation B** (KCL at F written out):

$$g_N(v_1 - v_P) + \frac{v_F - v_P}{r_N} + \left(g_P + \frac{1}{r_P}\right)v_F + \frac{v_F - v_P}{R_1} = 0,$$

i.e., with $K_b \equiv 1/r_N + g_P + 1/r_P + 1/R_1$,

$$g_Nv_1 = \left(\alpha + \frac{1}{R_1}\right)v_P - K_bv_F . \tag{3}$$

Substitute (2) into (3) and multiply by $\alpha$:

$$
\begin{aligned}
\alpha g_Nv_1 &= \left(\alpha + \tfrac{1}{R_1}\right)(g_Nv_2 - K_av_F) - \alpha K_bv_F\\
v_F &= -\,\frac{g_N\left[\alpha v_1 - \left(\alpha + \tfrac{1}{R_1}\right)v_2\right]}{\left(\alpha + \tfrac{1}{R_1}\right)K_a + \alpha K_b}.
\end{aligned}
$$

### Step 5 — Exact gain

Put $v_F$ into (1):

$$v_{out} = \frac{(1 + 2g_Pr_P)\,g_N\left[\alpha v_1 - \left(\alpha + \tfrac{1}{R_1}\right)v_2\right]}{\left(\alpha + \tfrac{1}{R_1}\right)K_a + \alpha K_b}.$$

$v_1$ and $v_2$ enter with **different weights** ($\alpha$ versus $\alpha + 1/R_1$), because $R_1$ breaks the symmetry. The circuit therefore has a common-mode gain, and $V_{out}/(V_{in1} - V_{in2})$ depends on how the input is applied. For the standard **balanced** drive, $v_1 = v_d/2$ and $v_2 = -v_d/2$, the bracket becomes $(2\alpha + 1/R_1)v_d/2$:

$$\boxed{A_v = \frac{v_{out}}{v_d} = \frac{(1 + 2g_Pr_P)\,g_N\left(2\alpha + \tfrac{1}{R_1}\right)}{2\left[\left(\alpha + \tfrac{1}{R_1}\right)K_a + \alpha K_b\right]}}$$

Written out in $r$'s, this is

$$A_v = \frac{g_Nr_Nr_P(1 + 2g_Pr_P)\left[2R_1(1 + g_Nr_N) + r_N\right]}{2\left\{2R_1(r_N + r_P)(1 + g_Nr_N)(1 + g_Pr_P) + r_N\left[r_N(1 + g_Nr_P + g_Pr_P) + 2r_P(1 + g_Pr_P)\right]\right\}} .$$

**Check, $R_1 \to \infty$:** $1/R_1 \to 0$ and $K_a + K_b = 2(1 + g_Pr_P)(1/r_N + 1/r_P)$, so

$$A_v \to \frac{(1 + 2g_Pr_P)g_N}{2(1 + g_Pr_P)(1/r_N + 1/r_P)} = g_N(r_N\|r_P)\frac{1 + 2g_Pr_P}{2(1 + g_Pr_P)} \approx g_{m1}(r_{O2}\|r_{O4}),$$

the familiar defect-free gain. ✓

### Step 6 — Simplified result for $g_mr_O \gg 1$

Use $\alpha \approx g_N$, $1 + 2g_Pr_P \approx 2g_Pr_P$, $K_a \approx g_P(r_N + 2r_P)/r_N$ and $K_b \approx g_P + 1/R_1$, then multiply numerator and denominator by $r_NR_1$:

$$A_v \approx \frac{g_Ng_Pr_Nr_P(1 + 2g_NR_1)}{2g_Ng_PR_1(r_N + r_P) + (g_N + g_P)r_N + 2g_Pr_P} = g_N(r_N\|r_P)\,\frac{1 + \dfrac{1}{2g_NR_1}}{1 + \dfrac{(g_N + g_P)r_N + 2g_Pr_P}{2g_Ng_PR_1(r_N + r_P)}} .$$

For equal $g_m$ and $r_O$ this is $A_v \approx g_m\dfrac{r_O}{2}\cdot\dfrac{1 + 2g_mR_1}{2(1 + g_mR_1)}$. For $g_mR_1 \gg 1$ it becomes (for unequal devices the coefficient of the small correction changes slightly, but it stays of order $1/(g_mR_1)$)

$$A_v \approx g_{m1}(r_{O2}\|r_{O4})\left(1 - \frac{1}{2g_{m3}R_1}\right).$$

**Why the gain hardly changes.** $R_1$ connects two **low-impedance** nodes: F, which looks like $\approx 1/g_{m3}$ (the diode), and P, which looks like $\approx 1/(2g_{m1})$ (the two sources). With a balanced input, $v_F \approx -(g_{m1}v_d/2)/g_{m3}$ and $v_P$ is small, so $R_1$ carries only $i_R \approx v_F/R_1$. That is a fraction of about $1/(2g_{m3}R_1)$ of the signal current, so it diverts very little. The short-circuit transconductance becomes $G_m \approx g_{m1}(1 - 1/(2g_{m3}R_1))$, while the output resistance stays $\approx r_{O2}\|r_{O4}$.

**Other drives.** With the same approximation, $v_{out} \approx 2g_Ng_Pr_Nr_P[g_NR_1v_1 - (1 + g_NR_1)v_2]/D$, where $D$ is the denominator above. For equal devices this gives, relative to $g_mr_O/2$, a factor $g_mR_1/(1 + g_mR_1)$ when only $V_{in1}$ is driven and a factor 1 when only $V_{in2}$ is driven. All the cases tend to $g_{m1}(r_{O2}\|r_{O4})$ when $R_1$ is large.

### Step 7 — Numerical example

Let $g_N = g_P = 1$ mS, $r_N = r_P = 100\ \mathrm{k}\Omega$, $R_1 = 10\ \mathrm{k}\Omega$:

$$
\begin{aligned}
\alpha &= 1 + 0.01 = 1.01\ \mathrm{mS}, \qquad \alpha + 1/R_1 = 1.11\ \mathrm{mS},\\
K_a &= 1 + 0.01 + 0.01(1 + 200) = 3.02\ \mathrm{mS}, \qquad K_b = 0.01 + 1 + 0.01 + 0.1 = 1.12\ \mathrm{mS},\\
A_v &= \frac{201\times(1\ \mathrm{mS})\times(2.02 + 0.1)\ \mathrm{mS}}{2\left[(1.11)(3.02) + (1.01)(1.12)\right]\ \mathrm{mS^2}} = \frac{426.1}{2\times4.483} = 47.5 .
\end{aligned}
$$

Without the defect the gain is $50\times201/202 = 49.75$. The approximate formula gives $50\times21/22 = 47.7$, and $1 - 1/(2g_mR_1) = 0.95$. The defect costs only about 4.5 %.

### Result

For a balanced input,

$$A_v = \frac{(1 + 2g_{m3}r_{O3})\,g_{m1}\left(2\alpha + 1/R_1\right)}{2\left[(\alpha + 1/R_1)K_a + \alpha K_b\right]},\quad \alpha = g_{m1} + \frac{1}{r_{O1}},\ K_a = g_{m3} + \frac{1}{r_{O3}} + \frac{1 + 2g_{m3}r_{O3}}{r_{O1}},\ K_b = \frac{1}{r_{O1}} + g_{m3} + \frac{1}{r_{O3}} + \frac{1}{R_1},$$

which for $g_mr_O \gg 1$ and $g_mR_1 \gg 1$ is

$$|A_v| \approx g_{m1}(r_{O2}\|r_{O4})\left(1 - \frac{1}{2g_{m3}R_1}\right).$$

The gain is **essentially unchanged** from the defect-free value $g_{m1}(r_{O2}\|r_{O4})$, because $R_1$ connects two low-impedance nodes ($\approx 1/g_{m3}$ and $\approx 1/(2g_{m1})$) and diverts only a small part of the signal current. Because $R_1$ breaks the symmetry, the circuit also acquires a small common-mode gain. (At dc, $R_1$ carries a bias current that the mirror copies, which causes a systematic offset; the result assumes all devices stay saturated.)

**Common mistake.** Concluding that $R_1$ destroys the gain, for example that it becomes $g_mR_1$ or $g_m(r_O\|R_1)$. $R_1$ is not connected to the high-impedance output node. It sits between the diode node and the tail node, both of which have impedances of order $1/g_m \ll R_1$.

**Common mistake.** Treating $R_1$ as appearing in parallel with $r_{O1}$ and therefore changing the gain through $r_{O1}$. $r_{O1}$ does not appear in the defect-free gain to first order (the diode node is low-impedance), and neither does $R_1$, apart from the small $1/(g_mR_1)$ correction.

**Common mistake.** Doubling the gain or reversing its sign. $R_1$ does not add a second signal path to the output. The output current is still $i_1 - i_2$ copied by the mirror, minus the small part diverted through $R_1$.
