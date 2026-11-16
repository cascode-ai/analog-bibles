# Detailed solution - R554

**Approach.** Break the loop at the op-amp output and apply a small test change $\delta$ to the PMOS gates. Both PMOS currents change by the same amount, so the change at each node is that current times the node's small-signal impedance to ground. Node Y drives the noninverting input, giving the negative-feedback path; node X drives the inverting input, giving the positive-feedback path. The net feedback is negative only if the impedance at Y exceeds the impedance at X. We then interpret this condition for the usual design.

### Step 1 — The two feedback paths

Reading the figure:

- $M_3$ and $M_4$ are identical PMOS current sources with sources at $V_{DD}$ and a common gate driven by the op-amp output.
- $M_3$ feeds node X. From X to ground there are $R_3$ and the emitter of $Q_1$ (a pnp of area $A$ with base and collector grounded, i.e. a diode).
- $M_4$ feeds node Y. From Y to ground there are $R_2$, and $R_1$ in series with the emitter of $Q_2$ (area $nA$, also diode-connected to ground).
- X goes to the inverting (−) input of $A_1$ and Y to the noninverting (+) input.

Suppose the gate voltage rises. Both PMOS currents fall, so both X and Y fall.

- **Through Y** (+ input): $V_Y$ falls, so the op-amp output falls, opposing the original rise. This is **negative feedback**.
- **Through X** (− input): $V_X$ falls, so the op-amp output *rises*, reinforcing the original rise. This is **positive feedback**.

Which one wins depends on how much each node moves.

### Step 2 — Small-signal model

Break the loop at the op-amp output and drive the PMOS gates with a small test voltage $\delta$ (measured from the dc gate voltage).

- **PMOS devices.** A rise $\delta$ of the gate lowers $V_{SG}$ by $\delta$, so each drain current (flowing into its node) changes by $-g_{mP}\delta$, where $g_{mP}$ is the transconductance of $M_3$ and $M_4$ (identical devices at the same current). Their output resistances $r_O$ are neglected for now (see Step 4).
- **Bipolar transistors.** A diode-connected transistor (base and collector at ground) looks like a resistance $1/g_{m}$ from emitter to ground, where $g_m = I_C/V_T$ is its transconductance. So $Q_1$ is $1/g_{m1}$ and $Q_2$ is $1/g_{m2}$.
- **Op amp.** A voltage-controlled voltage source with output $A_1(v_Y - v_X)$.

The equivalent circuit therefore has a controlled current source $-g_{mP}\delta$ into X, which sees $R_3$ in parallel with $1/g_{m1}$ to ground. Another controlled source $-g_{mP}\delta$ flows into Y, which sees $R_2$ in parallel with the series combination $R_1 + 1/g_{m2}$.

<!-- diagram: diagram-01.cir -->

The small-signal impedances from each node to ground are

$$Z_X = R_3 \parallel \frac{1}{g_{m1}}, \qquad Z_Y = R_2 \parallel \left(R_1 + \frac{1}{g_{m2}}\right).$$

### Step 3 — Loop gain

**Ohm's law at each node** (the injected current times the node impedance):

$$v_X = -g_{mP}\,\delta\,Z_X, \qquad v_Y = -g_{mP}\,\delta\,Z_Y .$$

**Op-amp output:**

$$
\begin{aligned}
v_{out} &= A_1(v_Y - v_X)\\
&= A_1\left(-g_{mP}\delta Z_Y + g_{mP}\delta Z_X\right)\\
&= -A_1g_{mP}\left(Z_Y - Z_X\right)\delta .
\end{aligned}
$$

The signal returned to the break point, divided by the test signal, is the loop transmission:

$$\frac{v_{out}}{\delta} = -A_1g_{mP}\left(Z_Y - Z_X\right).$$

It has two parts: $-A_1g_{mP}Z_Y$, the negative-feedback loop through Y, and $+A_1g_{mP}Z_X$, the positive-feedback loop through X.

### Step 4 — Condition for net negative feedback

For the loop to be negative (returned signal opposite in sign to $\delta$) we need $Z_Y - Z_X > 0$:

$$\boxed{R_2 \parallel \left(R_1 + \frac{1}{g_{m2}}\right) > R_3 \parallel \frac{1}{g_{m1}}}$$

**PMOS output resistance.** Including $r_{O3}$ and $r_{O4}$ (equal) puts the same $r_O$ in parallel with both $Z_X$ and $Z_Y$. Since $Z \parallel r_O$ increases with $Z$, the inequality is unchanged.

**Margin.** The strength of the positive loop relative to the negative loop is $Z_X/Z_Y$. A good design keeps $Z_Y$ about **twice** $Z_X$, so that the positive loop is clearly weaker. That gives a well-behaved transient (large-signal) response, not just small-signal stability.

### Step 5 — The usual design: $R_2 = R_3$

In this bandgap the op amp forces $V_X = V_Y$, so the resistors $R_3$ and $R_2$ carry $V_X/R_3$ and $V_Y/R_2$. The PMOS currents are equal, so choosing **$R_2 = R_3$** makes the two collector currents equal, $I_{C1} = I_{C2} = I_C$, and hence

$$g_{m1} = g_{m2} = g_m = \frac{I_C}{V_T}.$$

(Note that $g_{m2}$ is *not* $n$ times $g_{m1}$: a bipolar $g_m$ depends on the current, not on the emitter area.)

With $R_2 = R_3 = R$:

$$Z_X = R \parallel \frac{1}{g_m}, \qquad Z_Y = R \parallel \left(R_1 + \frac{1}{g_m}\right).$$

Since $R_1 + 1/g_m > 1/g_m$ and a parallel combination with $R$ grows with the other resistance, $Z_Y > Z_X$ **for any $R_1 > 0$**. The negative loop always wins.

**How much margin?** Write out the parallel combinations:

$$Z_Y = \frac{R\,(R_1 + 1/g_m)}{R + R_1 + 1/g_m}, \qquad Z_X = \frac{R\,(1/g_m)}{R + 1/g_m}.$$

Divide, then multiply numerator and denominator by $g_m^2$:

$$
\begin{aligned}
\frac{Z_Y}{Z_X} &= \frac{(R_1 + 1/g_m)(R + 1/g_m)}{(1/g_m)(R + R_1 + 1/g_m)}\\
&= \frac{(1 + g_mR_1)(1 + g_mR)}{1 + g_mR_1 + g_mR}.
\end{aligned}
$$

If $R \gg R_1 + 1/g_m$, the factor $(1 + g_mR)/(1 + g_mR_1 + g_mR) \to 1$ and

$$\frac{Z_Y}{Z_X} \approx 1 + g_mR_1 .$$

### Step 6 — Numbers from the bandgap design equations

**$g_mR_1$.** $V_X = V_Y$ gives, by KVL, $|V_{EB1}| = |V_{EB2}| + I_CR_1$, so $I_CR_1 = V_T\ln n$ (equal currents, area ratio $n$). Therefore

$$g_mR_1 = \frac{I_C}{V_T}R_1 = \ln n .$$

**$g_mR_2$.** Each PMOS carries $V_T\ln n/R_1 + |V_{EB1}|/R_2$, a PTAT term plus a $V_{EB}$ term. For zero TC with $\partial|V_{EB}|/\partial T \approx -1.5$ mV/K and $k/q \approx 0.087$ mV/K, $(R_2/R_1)\ln n \approx 17.2$. Hence

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

A margin of about 2 therefore requires $\ln n \gtrsim 1.1$, i.e. $n \gtrsim 3$.

**Design rules that follow:**

1. Use $R_2 = R_3$ (or at least do not make $R_3$ larger than $R_2$). A larger $R_3$ raises $Z_X$ and strengthens the positive loop.
2. Make $R_1$ large compared with $1/g_m$, i.e. choose $n$ large enough ($\ln n \gtrsim 1$, typically $n = 8$). $R_1$ is what distinguishes $Z_Y$ from $Z_X$.
3. Keep $R_2 = R_3 \gg R_1 + 1/g_m$, which the zero-TC condition already gives ($g_mR_2 \approx 17$).

### Result

The impedance seen at Y must exceed the impedance seen at X:

$$R_2 \parallel \left(R_1 + \frac{1}{g_{m2}}\right) > R_3 \parallel \frac{1}{g_{m1}},$$

preferably by about a factor of two. A gate change $\delta$ changes both PMOS currents by $g_{mP}\delta$. X moves by $g_{mP}\delta Z_X$, which reaches the inverting input (positive feedback), and Y moves by $g_{mP}\delta Z_Y$, which reaches the noninverting input (negative feedback). The net loop gain is $-A_1g_{mP}(Z_Y - Z_X)$.

With the usual $R_2 = R_3$ (equal collector currents, $g_{m1} = g_{m2} = g_m$), the condition holds for any $R_1 > 0$, with margin

$$\frac{Z_Y}{Z_X} = \frac{(1 + g_mR_1)(1 + g_mR_2)}{1 + g_mR_1 + g_mR_2} \approx 1 + g_mR_1 = 1 + \ln n .$$

This is about 2.8 for $n = 8$ and only about 1.6 for $n = 2$. So choose $n$ (i.e. $R_1$ relative to $1/g_m$) large enough, keep $R_2 = R_3 \gg R_1 + 1/g_m$, and do not make $R_3$ larger than $R_2$.

**Common mistake.** Swapping the roles of the two nodes, i.e. requiring $Z_X > Z_Y$. X drives the *inverting* input, so a fall at X *raises* the op-amp output and reinforces the disturbance: it is the positive-feedback path. The negative path goes through Y, so Y must have the larger impedance.

**Common mistake.** Dropping the bipolar resistances and treating X as a node held fixed by $Q_1$, or treating $R_3$ alone as the impedance at X. The diode-connected transistors are small-signal resistances $1/g_m$ that dominate both node impedances. Without them, the comparison (and the role of $R_1$) is lost.

**Common mistake.** Assuming $g_{m2} = n\,g_{m1}$ because $Q_2$ is $n$ times larger. For a bipolar transistor $g_m = I_C/V_T$ depends only on the collector current, and with $R_2 = R_3$ the two collector currents are equal.
