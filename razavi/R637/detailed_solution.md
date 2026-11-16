# Detailed solution - R637

**Approach.** Excite the circuit with a small current $I_{in}$ injected into the source node, write KCL at the drain (output) and source nodes, and eliminate the source voltage to get the closed-loop transfer function, whose denominator is the characteristic equation. At $s = j\omega$, the imaginary part fixes the oscillation frequency and the real part the start-up condition. One approximation, valid for a reasonably high-$Q$ tank, turns the exact frequency into the stated formula.

### Step 1 — Small-signal model

Call the source of $M_1$ node S, with voltage $V_1$. $C_P$ joins $L_P$ and $R_P$ across the tank (output to ac ground), whose admittance is

$$Y_T(s) = \frac{1}{L_Ps} + \frac{1}{R_P} + C_Ps .$$

The gate is at ac ground, so $V_{GS} = -V_1$ and $M_1$ is a controlled current $-g_mV_1$ from the drain (output) to S; the ideal bias source is open. The stimulus $I_{in}$ is injected into S. Setting $I_{in} = 0$ restores the original circuit, so the poles of $V_{out}/I_{in}$ are the circuit's natural frequencies.

<!-- diagram: diagram-01.cir -->

### Step 2 — Node equations

**KCL at the output (drain) node** (currents leaving: tank, $C_2$ to S, $M_1$ to S):

$$Y_TV_{out} + C_2s(V_{out} - V_1) - g_mV_1 = 0. \tag{A}$$

**KCL at the source node S** (currents entering: $I_{in}$, the $C_2$ current, the $M_1$ current; leaving: $C_1sV_1$):

$$I_{in} + C_2s(V_{out} - V_1) - g_mV_1 - C_1sV_1 = 0. \tag{B}$$

### Step 3 — Eliminate $V_1$

From (A):

$$V_{out}(Y_T + C_2s) = V_1(g_m + C_2s) \quad\Longrightarrow\quad V_1 = \frac{Y_T + C_2s}{g_m + C_2s}\,V_{out}.$$

Subtracting (A) from (B), the $C_2$ and $g_m$ terms cancel:

$$I_{in} - Y_TV_{out} - C_1sV_1 = 0 \quad\Longrightarrow\quad I_{in} = Y_TV_{out} + C_1sV_1 .$$

Substituting $V_1$:

$$
\begin{aligned}
I_{in} &= V_{out}\left[Y_T + \frac{C_1s(Y_T + C_2s)}{g_m + C_2s}\right]\\
&= V_{out}\,\frac{Y_T(g_m + C_2s) + C_1sY_T + C_1C_2s^2}{g_m + C_2s}\\
&= V_{out}\,\frac{Y_T\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}{g_m + C_2s}.
\end{aligned}
$$

Hence

$$\frac{V_{out}}{I_{in}} = \frac{g_m + C_2s}{Y_T\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2}.$$

### Step 4 — Characteristic polynomial

Multiplying numerator and denominator by $R_PL_Ps$, with $R_PL_Ps\,Y_T = R_P + L_Ps + R_PL_PC_Ps^2$:

$$\frac{V_{out}}{I_{in}} = \frac{R_PL_Ps\,(g_m + C_2s)}{\left(R_P + L_Ps + R_PL_PC_Ps^2\right)\left[g_m + (C_1 + C_2)s\right] + R_PL_PC_1C_2s^3}.$$

The denominator expands to

$$
\begin{aligned}
&R_Pg_m + R_P(C_1 + C_2)s + L_Pg_ms + L_P(C_1 + C_2)s^2\\
&\quad + R_PL_PC_Pg_ms^2 + R_PL_PC_P(C_1 + C_2)s^3 + R_PL_PC_1C_2s^3 ,
\end{aligned}
$$

and, grouped by powers of $s$,

$$D(s) = R_PL_P\left[C_1C_2 + C_P(C_1 + C_2)\right]s^3 + L_P\left(C_1 + C_2 + g_mR_PC_P\right)s^2 + \left[g_mL_P + R_P(C_1 + C_2)\right]s + g_mR_P .$$

The circuit oscillates at $\omega_R$ if $D(j\omega_R) = 0$.

### Step 5 — Imaginary part: the oscillation frequency

With $s^2 = -\omega^2$ and $s^3 = -j\omega^3$, the odd powers give the imaginary part:

$$\omega\left[g_mL_P + R_P(C_1 + C_2)\right] - \omega^3R_PL_P\left[C_1C_2 + C_P(C_1 + C_2)\right] = 0 ,$$

$$\omega_R^2 = \frac{g_mL_P + R_P(C_1 + C_2)}{R_PL_P\left[C_1C_2 + C_P(C_1 + C_2)\right]} .$$

**Approximation.** Assume

$$g_mL_P \ll R_P(C_1 + C_2),$$

which holds for a reasonably high-$Q$ tank. With the edge-of-oscillation value $g_mR_P \approx (C_1 + C_2)^2/(C_1C_2) = (C_1 + C_2)/C_{eq}$ (Step 6), where $C_{eq} = C_1C_2/(C_1 + C_2)$, and $L_P \approx 1/[\omega_R^2(C_P + C_{eq})]$:

$$\frac{g_mL_P}{R_P(C_1 + C_2)} = \frac{L_P}{R_P^2C_{eq}} = \frac{1}{\omega_R^2R_P^2C_{eq}(C_P + C_{eq})} = \frac{1}{Q^2}\left(1 + \frac{C_P}{C_{eq}}\right),$$

where $Q = \omega_RR_P(C_P + C_{eq}) = R_P/(\omega_RL_P)$. For $Q$ of 10 or more and $C_P$ not much larger than $C_{eq}$, this ratio is a few percent at most. Then

$$\omega_R^2 \approx \frac{R_P(C_1 + C_2)}{R_PL_P\left[C_1C_2 + C_P(C_1 + C_2)\right]} = \frac{C_1 + C_2}{L_P\left[C_1C_2 + C_P(C_1 + C_2)\right]} ,$$

and dividing numerator and denominator by $C_1 + C_2$,

$$\omega_R^2 = \frac{1}{L_P\left(C_P + \dfrac{C_1C_2}{C_1 + C_2}\right)},$$

which is the required result. $C_P$ sits directly across the inductor, and the series string $C_1$–$C_2$ forms a second path from the output to ground, so the inductor sees $C_P$ and $C_1C_2/(C_1 + C_2)$ in parallel. The transistor shifts the frequency only through the small $g_mL_P$ term.

### Step 6 — Real part: the start-up condition is unchanged

The even powers give

$$g_mR_P - \omega_R^2L_P\left(C_1 + C_2 + g_mR_PC_P\right) = 0 \quad\Longrightarrow\quad g_mR_P\left(1 - L_PC_P\omega_R^2\right) = L_P(C_1 + C_2)\,\omega_R^2 .$$

With $\omega_R^2L_P = 1/(C_P + C_{eq})$:

$$
\begin{aligned}
1 - L_PC_P\omega_R^2 &= 1 - \frac{C_P}{C_P + C_{eq}} = \frac{C_{eq}}{C_P + C_{eq}},\\
g_mR_P\,\frac{C_{eq}}{C_P + C_{eq}} &= \frac{C_1 + C_2}{C_P + C_{eq}},\\
g_mR_P &= \frac{C_1 + C_2}{C_{eq}} = \frac{(C_1 + C_2)^2}{C_1C_2} .
\end{aligned}
$$

So the minimum $g_mR_P$ is the same as without $C_P$, $(C_1 + C_2)^2/(C_1C_2)$, which is at least 4 and equals 4 at $C_1 = C_2$. $C_P$ only lowers the frequency.

### Result

The characteristic equation is

$$Y_T(s)\left[g_m + (C_1 + C_2)s\right] + C_1C_2s^2 = 0, \qquad Y_T = \frac{1}{L_Ps} + \frac{1}{R_P} + C_Ps,$$

whose imaginary part at $s = j\omega_R$ gives

$$\omega_R^2 = \frac{g_mL_P + R_P(C_1 + C_2)}{R_PL_P\left[C_1C_2 + C_P(C_1 + C_2)\right]} \approx \frac{1}{L_P\left(C_P + \dfrac{C_1C_2}{C_1 + C_2}\right)},$$

using the approximation $g_mL_P \ll R_P(C_1 + C_2)$ (a reasonably high-$Q$ tank). $C_P$ simply adds in parallel with the series combination of $C_1$ and $C_2$, and the start-up condition $g_mR_P \ge (C_1 + C_2)^2/(C_1C_2)$ is unchanged.

**Common mistake.** Writing $\omega_R^2 = 1/[L_P(C_P + C_1 + C_2)]$. $C_1$ and $C_2$ are in *series* between the output and ground (through S), so only their series combination appears.

**Common mistake.** Dropping the $g_mL_P$ term without saying so. The stated formula follows only when $g_mL_P \ll R_P(C_1 + C_2)$, a high-$Q$ approximation that should be stated.

**Common mistake.** Asserting that $C_P$ adds in parallel without any derivation. The node analysis, or at least the argument that $C_P$ and the $C_1$–$C_2$ string both sit across the inductor, is what justifies the result.
