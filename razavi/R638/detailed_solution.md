# Detailed solution - R638

**Approach.** Insert a small voltage source $V_{in}$ in series with the gate bias, write KCL at the source node and at the output (drain) node, and eliminate the source voltage to obtain $V_{out}/V_{in}$. Setting the stimulus to zero returns the gate to AC ground, i.e. restores the original circuit, so the poles of this transfer function are the oscillator's natural frequencies. At $s = j\omega$, the imaginary part of the denominator gives the frequency and the real part the required $g_mR_P$.

### Step 1 — The circuit and its small-signal model

Reading the figure:

- The tank, $L_P$ in parallel with $R_P$, connects $V_{DD}$ (AC ground) to the output node, the drain of $M_1$.
- $C_2$ connects the output node to the source of $M_1$ (node S, voltage $V_S$).
- $C_1$ connects S to ground. The bias current source at S is ideal, i.e. open for small signals.
- The gate is at $V_b$ plus the stimulus $V_{in}$, so the small-signal gate voltage is $V_{in}$ and $V_{GS} = V_{in} - V_S$.

The tank admittance is $Y_T = \dfrac{1}{L_Ps} + \dfrac{1}{R_P}$. $M_1$ is a controlled current $g_m(V_{in} - V_S)$ from the drain to the source.

<!-- diagram: diagram-01.cir -->

### Step 2 — Node equations

**KCL at the source node S.** Currents entering S: from $M_1$, $g_m(V_{in} - V_S)$; from $C_2$, $C_2s(V_{out} - V_S)$. Current leaving through $C_1$: $C_1sV_S$.

$$g_m(V_{in} - V_S) + C_2s(V_{out} - V_S) = C_1sV_S. \tag{1}$$

**KCL at the output node.** Currents leaving: into the tank, $Y_TV_{out}$; through $C_2$, $C_2s(V_{out} - V_S)$; through $M_1$, $g_m(V_{in} - V_S)$.

$$Y_TV_{out} + C_2s(V_{out} - V_S) + g_m(V_{in} - V_S) = 0. \tag{2}$$

### Step 3 — A useful simplification

The last two terms of (2) are exactly the left-hand side of (1). Replace them by $C_1sV_S$:

$$Y_TV_{out} + C_1sV_S = 0 \quad\Longrightarrow\quad V_S = -\frac{Y_T}{C_1s}\,V_{out} .$$

**Meaning.** S has no path to ground other than $C_1$, so the current that leaves the output node through $C_2$ and $M_1$ ends up in $C_1$. The tank current is therefore equal and opposite to the $C_1$ current.

### Step 4 — Solve for $V_{out}/V_{in}$

Rearrange (1), collecting the $V_S$ terms:

$$g_mV_{in} = V_S\left[g_m + (C_1 + C_2)s\right] - C_2sV_{out}.$$

Substitute $V_S$ from Step 3:

$$
\begin{aligned}
g_mV_{in} &= -\frac{Y_T}{C_1s}\left[g_m + (C_1 + C_2)s\right]V_{out} - C_2sV_{out}\\
&= -\frac{Y_T\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}{C_1s}\,V_{out}.
\end{aligned}
$$

Therefore

$$\frac{V_{out}}{V_{in}} = -\frac{g_mC_1s}{Y_T\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}.$$

Multiply numerator and denominator by $R_PL_Ps$, using $R_PL_Ps\,Y_T = R_P + L_Ps$:

$$\frac{V_{out}}{V_{in}} = -\frac{g_mC_1R_PL_Ps^2}{(R_P + L_Ps)\left[g_m + (C_1 + C_2)s\right] + R_PL_PC_1C_2s^3}.$$

Expand and group the denominator by powers of $s$:

$$
\begin{aligned}
(R_P + L_Ps)\left[g_m + (C_1 + C_2)s\right] &= g_mR_P + \left[R_P(C_1 + C_2) + g_mL_P\right]s + L_P(C_1 + C_2)s^2,\\
\frac{V_{out}}{V_{in}} &= \frac{-g_mC_1R_PL_Ps^2}{R_PC_1C_2L_Ps^3 + (C_1 + C_2)L_Ps^2 + \left[g_mL_P + R_P(C_1 + C_2)\right]s + g_mR_P}.
\end{aligned}
$$

This denominator is the same one obtained with a current stimulus at the source node. The natural frequencies belong to the circuit, not to the stimulus, as long as setting the stimulus to zero gives back the original circuit (a zero voltage source in series with the gate is a short, so the gate returns to AC ground).

### Step 5 — Oscillation frequency (imaginary part)

At $s = j\omega$: $s^2 = -\omega^2$, $s^3 = -j\omega^3$. The denominator becomes

$$D(j\omega) = \left[g_mR_P - (C_1 + C_2)L_P\omega^2\right] + j\left\{\left[g_mL_P + R_P(C_1 + C_2)\right]\omega - R_PC_1C_2L_P\omega^3\right\}.$$

For oscillation $D(j\omega_R) = 0$, so both parts vanish. The imaginary part gives (dividing by $\omega \ne 0$)

$$\omega_R^2 = \frac{g_mL_P + R_P(C_1 + C_2)}{R_PL_PC_1C_2}.$$

For a reasonably high-$Q$ tank, $g_mL_P \ll R_P(C_1 + C_2)$ (the ratio is about $1/Q^2$ at start-up), so

$$\omega_R^2 \approx \frac{C_1 + C_2}{L_PC_1C_2} = \frac{1}{L_P\,\dfrac{C_1C_2}{C_1 + C_2}} .$$

The inductor resonates with the series combination of $C_1$ and $C_2$.

### Step 6 — Start-up condition (real part)

The real part gives

$$g_mR_P = (C_1 + C_2)L_P\omega_R^2 .$$

Substitute $L_P\omega_R^2 \approx (C_1 + C_2)/(C_1C_2)$:

$$g_mR_P = \frac{(C_1 + C_2)^2}{C_1C_2} = \frac{C_1}{C_2}\left(1 + \frac{C_2}{C_1}\right)^2 .$$

This is the value at the edge of oscillation (poles exactly on the $j\omega$ axis). For the oscillation to start and grow, the loop must have more gain:

$$g_mR_P \ge \frac{(C_1 + C_2)^2}{C_1C_2} .$$

(Keeping the $g_mL_P$ term, the exact edge condition is $g_mR_P = \dfrac{(C_1 + C_2)^2}{C_1C_2}\Big/\left(1 - \dfrac{1}{Q^2}\right)$ with $Q^2 = R_P^2C_1C_2/[L_P(C_1 + C_2)]$, practically the same for $Q \gg 1$.)

### Step 7 — Ratio $C_1/C_2$ that minimizes the required gain

Let $x = C_1/C_2$. Then

$$\frac{(C_1 + C_2)^2}{C_1C_2} = \frac{C_1^2 + 2C_1C_2 + C_2^2}{C_1C_2} = x + 2 + \frac1x .$$

Its derivative is $1 - 1/x^2$, which vanishes at $x = 1$; the second derivative $2/x^3 > 0$ confirms a minimum. (Equivalently, $x + 1/x \ge 2$, with equality at $x = 1$.) The minimum value is

$$1 + 2 + 1 = 4 .$$

| $C_1/C_2$ | 0.25 | 0.5 | 1 | 2 | 4 |
|---|---|---|---|---|---|
| Required $g_mR_P$ | 6.25 | 4.5 | **4** | 4.5 | 6.25 |

So the Colpitts oscillator needs $g_mR_P \ge 4$ at best, with $C_1 = C_2$. This is much more than the $g_mR_P \ge 1$ of a cross-coupled pair, because the capacitive divider returns only part of the output swing to the transistor's source.

### Result

$$\frac{V_{out}}{V_{in}} = \frac{-g_mC_1R_PL_Ps^2}{R_PC_1C_2L_Ps^3 + (C_1 + C_2)L_Ps^2 + \left[g_mL_P + R_P(C_1 + C_2)\right]s + g_mR_P},$$

with the same denominator as for a current stimulus. At $s = j\omega$:

- **Frequency:** $\omega_R^2 = \dfrac{g_mL_P + R_P(C_1 + C_2)}{R_PL_PC_1C_2} \approx \dfrac{1}{L_P\,C_1C_2/(C_1 + C_2)}$ (for $g_mL_P \ll R_P(C_1 + C_2)$).
- **Start-up:** $g_mR_P \ge \dfrac{(C_1 + C_2)^2}{C_1C_2} = \dfrac{C_1}{C_2}\left(1 + \dfrac{C_2}{C_1}\right)^2$, whose minimum, $g_mR_P = 4$, occurs at $C_1 = C_2$.

**Common mistake.** Taking the frequency as $1/\sqrt{L_P(C_1 + C_2)}$, i.e. treating $C_1$ and $C_2$ as parallel. Through node S they are in series between the output and ground.

**Common mistake.** Using the start-up condition $g_mR_P \ge 1$ of the cross-coupled LC oscillator. In the Colpitts circuit only a fraction of the output voltage reaches the source of $M_1$ through the $C_1$–$C_2$ divider, which raises the requirement to $(C_1 + C_2)^2/(C_1C_2) \ge 4$.

**Common mistake.** Believing that a voltage stimulus at the gate and a current stimulus at the source give different natural frequencies. Both stimuli vanish into the original circuit when set to zero, so the denominators must be identical; only the numerators (the zeros) differ.
