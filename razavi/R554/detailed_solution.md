# Detailed solution - R554

**Approach.** Break the loop at the op-amp output and apply a small test change $\delta$ to the PMOS gates. Both PMOS currents change by the same amount, so each node moves by that current times its small-signal impedance to ground. Y (noninverting input) gives the negative-feedback path and X (inverting input) the positive one, so the net feedback is negative only if the impedance at Y exceeds that at X. Then interpret this condition for the usual design.

### Step 1 — Small-signal model and node impedances

If the gate voltage rises, both PMOS currents fall and both X and Y fall. Through Y (+ input) the op-amp output falls, opposing the rise: **negative feedback**. Through X (− input) the output *rises*, reinforcing it: **positive feedback**. Which wins depends on how far each node moves.

Break the loop at the op-amp output and drive the PMOS gates with a small test voltage $\delta$. A rise $\delta$ lowers $V_{SG}$ of the identical $M_3$, $M_4$ by $\delta$, so each injects $-g_{mP}\delta$ into its node ($r_O$ neglected for now). With $Q_1$, $Q_2$ as $1/g_{m1}$, $1/g_{m2}$ and the op amp as $A_1(v_Y - v_X)$, X sees $R_3$ in parallel with $1/g_{m1}$, and Y sees $R_2$ in parallel with $R_1 + 1/g_{m2}$:

<!-- diagram: diagram-01.cir -->

$$Z_X = R_3 \parallel \frac{1}{g_{m1}}, \qquad Z_Y = R_2 \parallel \left(R_1 + \frac{1}{g_{m2}}\right).$$

### Step 2 — Loop gain and the condition for net negative feedback

$$v_X = -g_{mP}\,\delta\,Z_X, \qquad v_Y = -g_{mP}\,\delta\,Z_Y ,$$

$$
\begin{aligned}
v_{out} &= A_1(v_Y - v_X)\\
&= A_1\left(-g_{mP}\delta Z_Y + g_{mP}\delta Z_X\right)\\
&= -A_1g_{mP}\left(Z_Y - Z_X\right)\delta ,
\end{aligned}
$$

so the loop transmission is

$$\frac{v_{out}}{\delta} = -A_1g_{mP}\left(Z_Y - Z_X\right):$$

$-A_1g_{mP}Z_Y$ is the negative-feedback loop through Y and $+A_1g_{mP}Z_X$ the positive-feedback loop through X. The loop is negative if $Z_Y - Z_X > 0$:

$$\boxed{R_2 \parallel \left(R_1 + \frac{1}{g_{m2}}\right) > R_3 \parallel \frac{1}{g_{m1}}}$$

Including the equal $r_{O3}$, $r_{O4}$ puts the same $r_O$ in parallel with both $Z_X$ and $Z_Y$; since $Z \parallel r_O$ increases with $Z$, the inequality is unchanged.

**Margin.** The positive loop's strength relative to the negative one is $Z_X/Z_Y$. A good design keeps $Z_Y$ about **twice** $Z_X$, which gives a well-behaved transient (large-signal) response, not just small-signal stability.

### Step 3 — The usual design: $R_2 = R_3$

The op amp forces $V_X = V_Y$, so $R_3$ and $R_2$ carry $V_X/R_3$ and $V_Y/R_2$. The PMOS currents are equal, so **$R_2 = R_3$** makes the collector currents equal, $I_{C1} = I_{C2} = I_C$, and

$$g_{m1} = g_{m2} = g_m = \frac{I_C}{V_T}$$

($g_{m2}$ is *not* $n$ times $g_{m1}$: a bipolar $g_m$ depends on the current, not on the emitter area). With $R_2 = R_3 = R$:

$$Z_X = R \parallel \frac{1}{g_m}, \qquad Z_Y = R \parallel \left(R_1 + \frac{1}{g_m}\right).$$

Since $R_1 + 1/g_m > 1/g_m$, $Z_Y > Z_X$ **for any $R_1 > 0$**: the negative loop always wins. For the margin, write out the parallel combinations,

$$Z_Y = \frac{R\,(R_1 + 1/g_m)}{R + R_1 + 1/g_m}, \qquad Z_X = \frac{R\,(1/g_m)}{R + 1/g_m},$$

and divide, multiplying numerator and denominator by $g_m^2$:

$$
\begin{aligned}
\frac{Z_Y}{Z_X} &= \frac{(R_1 + 1/g_m)(R + 1/g_m)}{(1/g_m)(R + R_1 + 1/g_m)}\\
&= \frac{(1 + g_mR_1)(1 + g_mR)}{1 + g_mR_1 + g_mR}.
\end{aligned}
$$

If $R \gg R_1 + 1/g_m$, the factor $(1 + g_mR)/(1 + g_mR_1 + g_mR) \to 1$ and

$$\frac{Z_Y}{Z_X} \approx 1 + g_mR_1 .$$

### Step 4 — Numbers from the bandgap design equations

**$g_mR_1$.** $V_X = V_Y$ gives $|V_{EB1}| = |V_{EB2}| + I_CR_1$, so $I_CR_1 = V_T\ln n$ (equal currents, area ratio $n$) and

$$g_mR_1 = \frac{I_C}{V_T}R_1 = \ln n .$$

**$g_mR_2$.** Each PMOS carries $V_T\ln n/R_1 + |V_{EB1}|/R_2$. Zero TC with $\partial|V_{EB}|/\partial T \approx -1.5$ mV/K and $k/q \approx 0.087$ mV/K gives $(R_2/R_1)\ln n \approx 17.2$, so

$$g_mR_2 = \frac{R_2}{R_1}\,g_mR_1 = \frac{R_2}{R_1}\ln n \approx 17.2 .$$

**Ratio for $n = 8$** ($\ln 8 = 2.08$):

$$\frac{Z_Y}{Z_X} = \frac{(1 + 2.08)(1 + 17.2)}{1 + 2.08 + 17.2} = \frac{3.08\times18.2}{20.28} = 2.76 \approx 2.8 .$$

**Ratio for $n = 2$** ($\ln 2 = 0.69$):

$$\frac{Z_Y}{Z_X} = \frac{(1.69)(18.2)}{18.89} = 1.63 \approx 1.6 .$$

| $n$ | $\ln n = g_mR_1$ | $Z_Y/Z_X$ |
|---|---|---|
| 2 | 0.69 | 1.63 |
| 3 | 1.10 | 1.98 |
| 4 | 1.39 | 2.22 |
| 8 | 2.08 | 2.76 |

A margin of about 2 therefore requires $\ln n \gtrsim 1.1$, i.e. $n \gtrsim 3$. The design rules:

1. Use $R_2 = R_3$ (or at least do not make $R_3$ larger than $R_2$); a larger $R_3$ raises $Z_X$ and strengthens the positive loop.
2. Make $R_1$ large compared with $1/g_m$, i.e. choose $n$ large enough ($\ln n \gtrsim 1$, typically $n = 8$). $R_1$ is what distinguishes $Z_Y$ from $Z_X$.
3. Keep $R_2 = R_3 \gg R_1 + 1/g_m$, which the zero-TC condition already gives ($g_mR_2 \approx 17$).

### Result

The impedance seen at Y must exceed the impedance seen at X:

$$R_2 \parallel \left(R_1 + \frac{1}{g_{m2}}\right) > R_3 \parallel \frac{1}{g_{m1}},$$

preferably by about a factor of two. A gate change $\delta$ changes both PMOS currents by $g_{mP}\delta$. X moves by $g_{mP}\delta Z_X$, which reaches the inverting input (positive feedback), and Y moves by $g_{mP}\delta Z_Y$, which reaches the noninverting input (negative feedback). The net loop gain is $-A_1g_{mP}(Z_Y - Z_X)$.

With the usual $R_2 = R_3$ (equal collector currents, $g_{m1} = g_{m2} = g_m$), the condition holds for any $R_1 > 0$, with margin

$$\frac{Z_Y}{Z_X} = \frac{(1 + g_mR_1)(1 + g_mR_2)}{1 + g_mR_1 + g_mR_2} \approx 1 + g_mR_1 = 1 + \ln n .$$

This is about 2.8 for $n = 8$ and only about 1.6 for $n = 2$. So choose $n$ (i.e. $R_1$ relative to $1/g_m$) large enough, keep $R_2 = R_3 \gg R_1 + 1/g_m$, and do not make $R_3$ larger than $R_2$.

**Common mistake.** Swapping the roles of the two nodes, i.e. requiring $Z_X > Z_Y$. X drives the *inverting* input, so it is the positive-feedback path; Y must have the larger impedance.

**Common mistake.** Dropping the bipolar resistances, or treating $R_3$ alone as the impedance at X. The $1/g_m$ resistances dominate both node impedances; without them the comparison, and the role of $R_1$, is lost.

**Common mistake.** Assuming $g_{m2} = n\,g_{m1}$ because $Q_2$ is $n$ times larger. A bipolar $g_m = I_C/V_T$ depends only on the collector current, and with $R_2 = R_3$ the two collector currents are equal.
