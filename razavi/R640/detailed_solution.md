# Detailed solution - R640

**Approach.** Inject a test current into the drain node, write KCL at the gate and drain nodes (the source is ground), and eliminate the gate voltage to obtain the closed-loop transfer function. Its denominator is the same cubic as for the Colpitts oscillator, with $L_1$ in place of $L_P$. Setting $s = j\omega$ gives the frequency (imaginary part) and the oscillation condition (real part), first in the usual high-$Q$ approximation and then exactly.

### Step 1 — The circuit and its small-signal model

Reading the figure:

- The source of $M_1$ is grounded.
- $L_1$ connects the gate (node G) to the drain (node D). Its loss is modelled by $R_P$ in parallel with $L_1$.
- $C_1$ connects G to ground, and $C_2$ connects D to ground.

Small-signal model:

- Between G and D: the admittance $Y(s) = \dfrac{1}{L_1s} + \dfrac{1}{R_P}$.
- $C_1$ from G to ground and $C_2$ from D to ground.
- $M_1$: a controlled current $g_mV_{GS} = g_mV_G$ flowing from D to ground.
- A test current $I_{in}$ injected into D. Setting it to zero restores the original circuit, so the poles of $V_D/I_{in}$ are the circuit's natural frequencies.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the gate node G

The gate draws no current, so the current arriving from D through $Y$ must flow into $C_1$:

$$Y(V_G - V_D) + C_1sV_G = 0 .$$

Solve for $V_G$:

$$V_G\,(Y + C_1s) = Y\,V_D \quad\Longrightarrow\quad V_G = \frac{Y}{Y + C_1s}\,V_D .$$

This is a voltage divider between the inductor branch and $C_1$. Near resonance it *inverts* the signal: the gate swings opposite to the drain, which is what makes the loop regenerative with an inverting common-source transistor.

### Step 3 — KCL at the drain node D

$I_{in}$ leaves D through $Y$ (to G), through $C_2$ (to ground) and through $M_1$ (to ground):

$$I_{in} = Y(V_D - V_G) + C_2sV_D + g_mV_G .$$

Rearrange and substitute $V_G$:

$$
\begin{aligned}
I_{in} &= V_D(Y + C_2s) + (g_m - Y)\,V_G\\
&= V_D\left[(Y + C_2s) + \frac{(g_m - Y)\,Y}{Y + C_1s}\right]\\
&= V_D\,\frac{(Y + C_2s)(Y + C_1s) + g_mY - Y^2}{Y + C_1s}.
\end{aligned}
$$

Expand the numerator. The $Y^2$ terms cancel:

$$(Y + C_2s)(Y + C_1s) + g_mY - Y^2 = Y(C_1 + C_2)s + C_1C_2s^2 + g_mY = Y\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2 .$$

Therefore

$$\frac{V_D}{I_{in}} = \frac{Y + C_1s}{Y\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}.$$

### Step 4 — Transfer function as a ratio of polynomials

Multiply numerator and denominator by $R_PL_1s$, using $R_PL_1s\,Y = R_P + L_1s$:

$$
\begin{aligned}
\text{numerator:}&\quad R_P + L_1s + R_PL_1C_1s^2,\\
\text{denominator:}&\quad (R_P + L_1s)\left[g_m + (C_1 + C_2)s\right] + R_PL_1C_1C_2s^3\\
&\quad = R_PC_1C_2L_1s^3 + (C_1 + C_2)L_1s^2 + \left[g_mL_1 + R_P(C_1 + C_2)\right]s + g_mR_P .
\end{aligned}
$$

So

$$\frac{V_D}{I_{in}} = \frac{R_PL_1C_1s^2 + L_1s + R_P}{R_PC_1C_2L_1s^3 + (C_1 + C_2)L_1s^2 + \left[g_mL_1 + R_P(C_1 + C_2)\right]s + g_mR_P}.$$

### Step 5 — Frequency and condition (high-$Q$ approximation)

At $s = j\omega$ ($s^2 = -\omega^2$, $s^3 = -j\omega^3$) the denominator is

$$D(j\omega) = \left[g_mR_P - (C_1 + C_2)L_1\omega^2\right] + j\omega\left[g_mL_1 + R_P(C_1 + C_2) - R_PC_1C_2L_1\omega^2\right].$$

**Imaginary part = 0:**

$$\omega_{osc}^2 = \frac{g_mL_1 + R_P(C_1 + C_2)}{R_PL_1C_1C_2} \approx \frac{C_1 + C_2}{L_1C_1C_2} = \frac{1}{L_1\,\dfrac{C_1C_2}{C_1 + C_2}},$$

using $g_mL_1 \ll R_P(C_1 + C_2)$, which holds for a reasonably high-$Q$ inductor.

**Real part = 0:**

$$g_mR_P = (C_1 + C_2)L_1\omega_{osc}^2 \approx \frac{(C_1 + C_2)^2}{C_1C_2}.$$

This is the edge of oscillation. For start-up:

$$g_mR_P \ge \frac{(C_1 + C_2)^2}{C_1C_2} = \frac{C_1}{C_2} + 2 + \frac{C_2}{C_1} \ge 4,$$

with the minimum value 4 at $C_1 = C_2$.

### Step 6 — Exact threshold (both parts solved together)

Substitute the exact $\omega_{osc}^2$ from the imaginary part into the real part:

$$
\begin{aligned}
g_mR_P &= (C_1 + C_2)\,\frac{g_mL_1 + R_P(C_1 + C_2)}{R_PC_1C_2},\\
g_mR_P^2C_1C_2 &= g_mL_1(C_1 + C_2) + R_P(C_1 + C_2)^2,\\
g_m\left[R_P^2C_1C_2 - L_1(C_1 + C_2)\right] &= R_P(C_1 + C_2)^2,\\
g_m &= \frac{R_P(C_1 + C_2)^2}{R_P^2C_1C_2 - L_1(C_1 + C_2)} .
\end{aligned}
$$

Define $\omega_0^2 = (C_1 + C_2)/(L_1C_1C_2)$ and the inductor quality factor $Q = R_P/(\omega_0L_1)$, so that $Q^2 = R_P^2C_1C_2/[L_1(C_1 + C_2)]$. Multiply both sides by $R_P$, then divide numerator and denominator by $R_P^2C_1C_2$:

$$g_mR_P = \frac{R_P^2(C_1 + C_2)^2}{R_P^2C_1C_2 - L_1(C_1 + C_2)} = \frac{(C_1 + C_2)^2/(C_1C_2)}{1 - 1/Q^2} = \frac{(C_1 + C_2)^2}{C_1C_2}\cdot\frac{Q^2}{Q^2 - 1},$$

and at this threshold $\omega_{osc}^2 = g_mR_P/[(C_1 + C_2)L_1] = \omega_0^2\,Q^2/(Q^2 - 1)$. For $Q = 10$ the correction factor is $100/99 \approx 1.01$, so the high-$Q$ results of Step 5 are accurate.

### Step 7 — Why the result matches the Colpitts oscillator

Compare the network around $M_1$:

| Element | Colpitts (gate = AC ground) | This circuit (source = ground) |
|---|---|---|
| Inductor (with $R_P$) | drain–gate | gate–drain |
| $C_1$ | source–gate | gate–source |
| $C_2$ | drain–source | drain–source |

It is the same three-node network; only the node chosen as AC ground differs. Grounding a different node does not change the network's natural frequencies, so the frequency and the start-up condition are the same.

**Negative-resistance view.** Seen by the inductor (between gate and drain), $M_1$ with $C_1$ and $C_2$ presents

$$Z(j\omega) = \frac{1}{j\omega\,C_1C_2/(C_1 + C_2)} - \frac{g_m}{C_1C_2\omega^2},$$

a series capacitance $C_1C_2/(C_1 + C_2)$ and a negative resistance $-g_m/(C_1C_2\omega^2)$. The inductor resonates with the series capacitance. The parallel loss $R_P$ is equivalent to a series resistance $R_S \approx (\omega L_1)^2/R_P$, and requiring $g_m/(C_1C_2\omega^2) \ge R_S$ gives again $g_mR_P \ge (C_1 + C_2)^2/(C_1C_2)$.

### Result

With the drain stimulus,

$$\frac{V_D}{I_{in}} = \frac{R_PL_1C_1s^2 + L_1s + R_P}{R_PC_1C_2L_1s^3 + (C_1 + C_2)L_1s^2 + \left[g_mL_1 + R_P(C_1 + C_2)\right]s + g_mR_P},$$

and requiring the denominator to vanish at $s = j\omega$ gives:

- **Frequency:** $\omega_{osc}^2 = \dfrac{g_mL_1 + R_P(C_1 + C_2)}{R_PL_1C_1C_2} \approx \dfrac{1}{L_1\,C_1C_2/(C_1 + C_2)}$.
- **Condition:** $g_mR_P \ge \dfrac{(C_1 + C_2)^2}{C_1C_2}$ (at least 4, minimum at $C_1 = C_2$); exactly, $g_mR_P \ge \dfrac{(C_1 + C_2)^2}{C_1C_2}\cdot\dfrac{Q^2}{Q^2 - 1}$.

Both are identical to the Colpitts oscillator.

**Common mistake.** Treating $C_1$ and $C_2$ as being in parallel and writing $\omega_{osc} = 1/\sqrt{L_1(C_1 + C_2)}$. The loop through the inductor passes through $C_1$ and $C_2$ in series (gate–ground–drain), so the resonance capacitance is $C_1C_2/(C_1 + C_2)$.

**Common mistake.** Using $g_mR_P \ge 1$. The $L_1$–$C_1$ divider delivers only part of the drain swing to the gate, which raises the required gain to $(C_1 + C_2)^2/(C_1C_2) \ge 4$.

**Common mistake.** Concluding that the circuit cannot oscillate because a common-source stage inverts. Near resonance the $L_1$–$C_1$ network provides a second inversion (the gate swings opposite to the drain), so the loop phase is 360°.
