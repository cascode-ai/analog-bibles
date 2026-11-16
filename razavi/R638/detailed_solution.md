# Detailed solution - R638

**Approach.** Insert a small voltage source $V_{in}$ in series with the gate bias, write KCL at the source node and at the output (drain) node, and eliminate the source voltage to obtain $V_{out}/V_{in}$. Setting the stimulus to zero returns the gate to ac ground, i.e. restores the original circuit, so the poles of this transfer function are the oscillator's natural frequencies. At $s = j\omega$, the imaginary part of the denominator gives the frequency and the real part the required $g_mR_P$.

### Step 1 — Small-signal model

Call the source of $M_1$ node S, with voltage $V_S$. The tank admittance from the output to ac ground is $Y_T = \dfrac{1}{L_Ps} + \dfrac{1}{R_P}$; the bias source at S is open. The small-signal gate voltage is $V_{in}$, so $M_1$ is a controlled current $g_m(V_{in} - V_S)$ from the drain to S.

<!-- diagram: diagram-01.cir -->

### Step 2 — Node equations

**KCL at S** (entering: $M_1$ and $C_2$ currents; leaving: $C_1sV_S$):

$$g_m(V_{in} - V_S) + C_2s(V_{out} - V_S) = C_1sV_S. \tag{1}$$

**KCL at the output node** (leaving: tank, $C_2$, $M_1$):

$$Y_TV_{out} + C_2s(V_{out} - V_S) + g_m(V_{in} - V_S) = 0. \tag{2}$$

### Step 3 — A useful simplification

The last two terms of (2) are the left-hand side of (1); replacing them by $C_1sV_S$:

$$Y_TV_{out} + C_1sV_S = 0 \quad\Longrightarrow\quad V_S = -\frac{Y_T}{C_1s}\,V_{out} .$$

S has no path to ground other than $C_1$, so the current leaving the output through $C_2$ and $M_1$ ends up in $C_1$, equal and opposite to the tank current.

### Step 4 — Solve for $V_{out}/V_{in}$

Rearranging (1):

$$g_mV_{in} = V_S\left[g_m + (C_1 + C_2)s\right] - C_2sV_{out}.$$

Substituting $V_S$ from Step 3:

$$
\begin{aligned}
g_mV_{in} &= -\frac{Y_T}{C_1s}\left[g_m + (C_1 + C_2)s\right]V_{out} - C_2sV_{out}\\
&= -\frac{Y_T\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}{C_1s}\,V_{out},
\end{aligned}
$$

$$\frac{V_{out}}{V_{in}} = -\frac{g_mC_1s}{Y_T\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}.$$

Multiplying numerator and denominator by $R_PL_Ps$, with $R_PL_Ps\,Y_T = R_P + L_Ps$:

$$\frac{V_{out}}{V_{in}} = -\frac{g_mC_1R_PL_Ps^2}{(R_P + L_Ps)\left[g_m + (C_1 + C_2)s\right] + R_PL_PC_1C_2s^3}.$$

Expanding and grouping by powers of $s$:

$$
\begin{aligned}
(R_P + L_Ps)\left[g_m + (C_1 + C_2)s\right] &= g_mR_P + \left[R_P(C_1 + C_2) + g_mL_P\right]s + L_P(C_1 + C_2)s^2,\\
\frac{V_{out}}{V_{in}} &= \frac{-g_mC_1R_PL_Ps^2}{R_PC_1C_2L_Ps^3 + (C_1 + C_2)L_Ps^2 + \left[g_mL_P + R_P(C_1 + C_2)\right]s + g_mR_P}.
\end{aligned}
$$

This is the same denominator as with a current stimulus at the source node: the natural frequencies belong to the circuit, provided that zeroing the stimulus gives back the original circuit (a zero voltage source in series with the gate is a short).

### Step 5 — Oscillation frequency (imaginary part)

At $s = j\omega$:

$$D(j\omega) = \left[g_mR_P - (C_1 + C_2)L_P\omega^2\right] + j\left\{\left[g_mL_P + R_P(C_1 + C_2)\right]\omega - R_PC_1C_2L_P\omega^3\right\}.$$

Both parts vanish at $\omega_R$. The imaginary part gives

$$\omega_R^2 = \frac{g_mL_P + R_P(C_1 + C_2)}{R_PL_PC_1C_2}.$$

For a reasonably high-$Q$ tank, $g_mL_P \ll R_P(C_1 + C_2)$ (the ratio is about $1/Q^2$ at start-up), so

$$\omega_R^2 \approx \frac{C_1 + C_2}{L_PC_1C_2} = \frac{1}{L_P\,\dfrac{C_1C_2}{C_1 + C_2}} .$$

The inductor resonates with the series combination of $C_1$ and $C_2$.

### Step 6 — Start-up condition (real part)

The real part gives

$$g_mR_P = (C_1 + C_2)L_P\omega_R^2 ,$$

and with $L_P\omega_R^2 \approx (C_1 + C_2)/(C_1C_2)$,

$$g_mR_P = \frac{(C_1 + C_2)^2}{C_1C_2} = \frac{C_1}{C_2}\left(1 + \frac{C_2}{C_1}\right)^2 .$$

This is the edge of oscillation (poles on the $j\omega$ axis); for the oscillation to start and grow,

$$g_mR_P \ge \frac{(C_1 + C_2)^2}{C_1C_2} .$$

(Keeping the $g_mL_P$ term, the exact edge condition is $g_mR_P = \dfrac{(C_1 + C_2)^2}{C_1C_2}\Big/\left(1 - \dfrac{1}{Q^2}\right)$ with $Q^2 = R_P^2C_1C_2/[L_P(C_1 + C_2)]$, practically the same for $Q \gg 1$.)

### Step 7 — Ratio $C_1/C_2$ that minimizes the required gain

With $x = C_1/C_2$,

$$\frac{(C_1 + C_2)^2}{C_1C_2} = \frac{C_1^2 + 2C_1C_2 + C_2^2}{C_1C_2} = x + 2 + \frac1x ,$$

which is minimal at $x = 1$ (since $x + 1/x \ge 2$, with equality at $x = 1$), with the value

$$1 + 2 + 1 = 4 .$$

| $C_1/C_2$ | 0.25 | 0.5 | 1 | 2 | 4 |
|---|---|---|---|---|---|
| Required $g_mR_P$ | 6.25 | 4.5 | **4** | 4.5 | 6.25 |

So the Colpitts oscillator needs $g_mR_P \ge 4$ at best, with $C_1 = C_2$: much more than the $g_mR_P \ge 1$ of a cross-coupled pair, because the capacitive divider returns only part of the output swing to the source of $M_1$.

### Result

$$\frac{V_{out}}{V_{in}} = \frac{-g_mC_1R_PL_Ps^2}{R_PC_1C_2L_Ps^3 + (C_1 + C_2)L_Ps^2 + \left[g_mL_P + R_P(C_1 + C_2)\right]s + g_mR_P},$$

with the same denominator as for a current stimulus. At $s = j\omega$:

- **Frequency:** $\omega_R^2 = \dfrac{g_mL_P + R_P(C_1 + C_2)}{R_PL_PC_1C_2} \approx \dfrac{1}{L_P\,C_1C_2/(C_1 + C_2)}$ (for $g_mL_P \ll R_P(C_1 + C_2)$).
- **Start-up:** $g_mR_P \ge \dfrac{(C_1 + C_2)^2}{C_1C_2} = \dfrac{C_1}{C_2}\left(1 + \dfrac{C_2}{C_1}\right)^2$, whose minimum, $g_mR_P = 4$, occurs at $C_1 = C_2$.

**Common mistake.** Taking the frequency as $1/\sqrt{L_P(C_1 + C_2)}$. Through node S, $C_1$ and $C_2$ are in series between the output and ground.

**Common mistake.** Using the cross-coupled oscillator's start-up condition $g_mR_P \ge 1$. Only part of the output voltage reaches the source of $M_1$ through the $C_1$–$C_2$ divider, which raises the requirement to $(C_1 + C_2)^2/(C_1C_2) \ge 4$.

**Common mistake.** Believing that a voltage stimulus at the gate and a current stimulus at the source give different natural frequencies. Both vanish into the original circuit when set to zero, so only the numerators (the zeros) differ.
