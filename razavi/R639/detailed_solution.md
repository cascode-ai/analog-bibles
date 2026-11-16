# Detailed solution - R639

**Approach.** Inject a small test current into the gate node, write KCL at the gate and source nodes, and eliminate the source voltage to get the closed-loop transfer function. Its denominator is the same cubic as for the Colpitts oscillator, with $L_1$ in place of $L_P$; setting $s = j\omega$ gives the frequency and the start-up condition. A negative-resistance argument confirms the result.

### Step 1 — Small-signal model

Call the gate of $M_1$ node G and its source node S. The drain is at ac ground. Then:

- from G to ground: $Y_L(s) = \dfrac{1}{L_1s} + \dfrac{1}{R_P}$;
- $C_1$ between G and S, and $C_2$ from S to ground;
- $M_1$: a controlled current $g_m(V_G - V_S)$ from the drain (ac ground) into S;
- a test current $I_{in}$ injected into G (setting $I_{in} = 0$ restores the original circuit).

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the source node S

$M_1$ and $C_1$ deliver current into S, and $C_2$ carries it to ground:

$$g_m(V_G - V_S) + C_1s(V_G - V_S) = C_2sV_S \quad\Longrightarrow\quad (V_G - V_S)(g_m + C_1s) = C_2sV_S .$$

Expanding, $V_G(g_m + C_1s) = V_S(g_m + C_1s + C_2s)$, so

$$V_S = \frac{g_m + C_1s}{g_m + (C_1 + C_2)s}\,V_G ,$$

and the gate–source voltage, which drives both $M_1$ and $C_1$, is

$$V_G - V_S = V_G\left[1 - \frac{g_m + C_1s}{g_m + (C_1 + C_2)s}\right] = \frac{C_2s}{g_m + (C_1 + C_2)s}\,V_G .$$

### Step 3 — KCL at the gate node G

$I_{in}$ leaves G through $Y_L$ and $C_1$:

$$I_{in} = Y_LV_G + C_1s(V_G - V_S).$$

Substituting $V_G - V_S$:

$$
\begin{aligned}
I_{in} &= V_G\left[Y_L + \frac{C_1C_2s^2}{g_m + (C_1 + C_2)s}\right]\\
&= V_G\,\frac{Y_L\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}{g_m + (C_1 + C_2)s},
\end{aligned}
$$

$$\frac{V_G}{I_{in}} = \frac{g_m + (C_1 + C_2)s}{Y_L\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}.$$

### Step 4 — Closed-loop transfer function as a ratio of polynomials

Multiplying numerator and denominator by $R_PL_1s$, with $R_PL_1s\,Y_L = R_P + L_1s$:

$$\frac{V_G}{I_{in}} = \frac{R_PL_1s\left[g_m + (C_1 + C_2)s\right]}{(R_P + L_1s)\left[g_m + (C_1 + C_2)s\right] + R_PL_1C_1C_2s^3}.$$

With

$$(R_P + L_1s)\left[g_m + (C_1 + C_2)s\right] = g_mR_P + \left[R_P(C_1 + C_2) + g_mL_1\right]s + L_1(C_1 + C_2)s^2 ,$$

$$\frac{V_G}{I_{in}} = \frac{R_PL_1s\left[g_m + (C_1 + C_2)s\right]}{R_PC_1C_2L_1s^3 + (C_1 + C_2)L_1s^2 + \left[g_mL_1 + R_P(C_1 + C_2)\right]s + g_mR_P}.$$

### Step 5 — Frequency of oscillation (imaginary part)

At $s = j\omega$:

$$D(j\omega) = \left[g_mR_P - (C_1 + C_2)L_1\omega^2\right] + j\left\{\left[g_mL_1 + R_P(C_1 + C_2)\right]\omega - R_PC_1C_2L_1\omega^3\right\}.$$

The imaginary part vanishes at

$$\omega_{osc}^2 = \frac{g_mL_1 + R_P(C_1 + C_2)}{R_PL_1C_1C_2} \approx \frac{C_1 + C_2}{L_1C_1C_2} = \frac{1}{L_1\,\dfrac{C_1C_2}{C_1 + C_2}},$$

where $g_mL_1 \ll R_P(C_1 + C_2)$ for a reasonably high-$Q$ inductor (the neglected ratio is about $1/Q^2$ at start-up).

### Step 6 — Oscillation condition (real part)

The real part vanishes when

$$g_mR_P = (C_1 + C_2)L_1\omega_{osc}^2 ,$$

and with $L_1\omega_{osc}^2 \approx (C_1 + C_2)/(C_1C_2)$,

$$g_mR_P = \frac{(C_1 + C_2)^2}{C_1C_2}$$

at the edge of oscillation. For the oscillation to start and grow:

$$g_mR_P \ge \frac{(C_1 + C_2)^2}{C_1C_2} = \frac{C_1}{C_2} + 2 + \frac{C_2}{C_1} \ge 4,$$

with the minimum 4 at $C_1 = C_2$ (since $x + 1/x \ge 2$ for $x > 0$).

### Step 7 — Why the result is identical to the Colpitts oscillator

| Element | Colpitts (drain = output, gate = ac ground) | This circuit (drain = ac ground) |
|---|---|---|
| Inductor (with $R_P$) | between drain and gate | between gate and drain |
| $C_1$ | between source and gate | between gate and source |
| $C_2$ | between drain and source | between source and drain |

It is the **same network** around $M_1$; only the node chosen as ac ground differs, which does not change the natural frequencies, the oscillation frequency or the start-up condition.

**Negative-resistance check.** Looking into the gate of $M_1$ with $C_1$ and $C_2$ attached,

$$Z_{in}(s) = \frac{1}{C_1s} + \frac{1}{C_2s} + \frac{g_m}{C_1C_2s^2}\quad\xrightarrow{\ s = j\omega\ }\quad \frac{1}{j\omega\,C_1C_2/(C_1 + C_2)} - \frac{g_m}{C_1C_2\omega^2},$$

the series capacitance $C_1C_2/(C_1 + C_2)$, with which the inductor resonates (the same $\omega_{osc}$), in series with a negative resistance $-g_m/(C_1C_2\omega^2)$. For a high-$Q$ inductor the parallel loss $R_P$ is equivalent to a series resistance $R_S \approx (\omega L_1)^2/R_P$, and oscillation requires the negative resistance to cancel it:

$$
\begin{aligned}
\frac{g_m}{C_1C_2\omega^2} &\ge \frac{\omega^2L_1^2}{R_P},\\
g_mR_P &\ge C_1C_2\,\omega^4L_1^2 = C_1C_2\left(\frac{C_1 + C_2}{C_1C_2}\right)^2 = \frac{(C_1 + C_2)^2}{C_1C_2},
\end{aligned}
$$

the same condition.

### Result

The closed-loop transfer function (current $I_{in}$ into the gate node) is

$$\frac{V_G}{I_{in}} = \frac{R_PL_1s\left[g_m + (C_1 + C_2)s\right]}{R_PC_1C_2L_1s^3 + (C_1 + C_2)L_1s^2 + \left[g_mL_1 + R_P(C_1 + C_2)\right]s + g_mR_P},$$

and requiring the denominator to vanish at $s = j\omega$ gives:

- **Frequency:** $\omega_{osc}^2 = \dfrac{g_mL_1 + R_P(C_1 + C_2)}{R_PL_1C_1C_2} \approx \dfrac{1}{L_1\,C_1C_2/(C_1 + C_2)}$.
- **Condition:** $g_mR_P \ge \dfrac{(C_1 + C_2)^2}{C_1C_2}$ (at least 4, minimum at $C_1 = C_2$).

These are identical to the Colpitts oscillator, because the circuit is the same network around $M_1$ with a different node grounded.

**Common mistake.** Taking the frequency as $1/\sqrt{L_1(C_1 + C_2)}$. As seen from the inductor, $C_1$ and $C_2$ are in series.

**Common mistake.** Using the condition $g_mR_P \ge 1$. The capacitive divider feeds back only part of the voltage, so the requirement is $(C_1 + C_2)^2/(C_1C_2) \ge 4$.

**Common mistake.** Misreading the topology, e.g. placing $C_1$ from gate to ground or $C_2$ across gate and drain. $C_1$ is between gate and source and $C_2$ between source and ground, which is exactly what makes the circuit equivalent to the Colpitts oscillator.
