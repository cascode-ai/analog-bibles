# Detailed solution - R375

**Approach.** Set the signal source to zero (the gate then sees $R_S$ to ground), keep $M_1$'s channel noise and $R_F$'s noise voltage, and solve with KCL at the output and at the gate plus KVL along $R_F$. The output noise PSD is the sum of the two independent contributions.

### Step 1 — Small-signal noise model

With the input source set to zero (call the gate node G):

- $R_S$: from G to ground (noiseless).
- $M_1$: controlled current $g_mV_G$ from out to ground, in parallel with its noise current $I_{n1}$, $\overline{I_{n1}^2} = 4kT\gamma g_m$ (no $r_O$, since $\lambda = 0$).
- $I_1$: ideal and noiseless, an open circuit for small signals.
- $R_F$: from out to G, with its noise as a series voltage $V_{nF}$, $\overline{V_{nF}^2} = 4kTR_F$. Let $I_F$ be the current in $R_F$ from the output to the gate.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL and the feedback current

Only $M_1$ and $R_F$ can carry small-signal current away from the output, and the gate draws no current, so all of $I_F$ flows through $R_S$:

$$g_mV_G + I_{n1} + I_F = 0, \qquad V_G = R_SI_F .$$

Substituting:

$$
\begin{aligned}
g_mR_SI_F + I_{n1} + I_F &= 0\\
I_F\,(1 + g_mR_S) &= -I_{n1}\\
I_F &= -\frac{I_{n1}}{1 + g_mR_S}.
\end{aligned}
$$

$V_{nF}$ does not appear: **$R_F$'s noise voltage produces no current at all.** With only $V_{nF}$ present, $I_F(1 + g_mR_S) = 0$, so $I_F = 0$ and $V_G = 0$; nothing at the output can absorb a current.

### Step 3 — Output voltage by KVL along $R_F$

From the gate to the output through $R_F$ and its series noise source:

$$
\begin{aligned}
V_{out} &= V_G + R_FI_F + V_{nF}\\
&= R_SI_F + R_FI_F + V_{nF}\\
&= (R_S + R_F)\,I_F + V_{nF}.
\end{aligned}
$$

With $I_F$ from Step 2:

$$V_{out} = V_{nF} - \frac{R_S + R_F}{1 + g_mR_S}\,I_{n1}.$$

- $R_F$'s noise voltage reaches the output with **unity gain**: with $I_F = 0$, the output sits $V_{nF}$ above the unchanged gate voltage.
- $M_1$'s noise current is multiplied by the closed-loop **output impedance** $(R_S + R_F)/(1 + g_mR_S)$: a test current $i_x$ at the output gives $I_F = i_x/(1 + g_mR_S)$ and $V_{out} = (R_S + R_F)I_F$, the same factor.

### Step 4 — Output noise PSD

The two sources are uncorrelated:

$$
\begin{aligned}
\overline{V_{n,out}^2} &= \overline{V_{nF}^2} + \left(\frac{R_S + R_F}{1 + g_mR_S}\right)^2\overline{I_{n1}^2}\\
&= 4kTR_F + 4kT\gamma g_m\frac{(R_S + R_F)^2}{(1 + g_mR_S)^2}.
\end{aligned}
$$

### Step 5 — Checks in the two limits

**$R_S = 0$ (gate at ac ground):**

$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_mR_F^2 = \left(\frac{4kT}{R_F} + 4kT\gamma g_m\right)R_F^2 ,$$

the familiar result: $R_F$ is then a resistor from the output to ground carrying both noise currents.

**$R_S \to \infty$ (input open):**

$$\frac{(R_S + R_F)^2}{(1 + g_mR_S)^2} \to \frac{R_S^2}{g_m^2R_S^2} = \frac{1}{g_m^2}, \qquad \overline{V_{n,out}^2} \to 4kTR_F + \frac{4kT\gamma}{g_m}.$$

With the gate open, $M_1$ acts as a diode-connected device through $R_F$ (output impedance $1/g_m$), and $R_F$'s noise passes straight through. Between the limits, a larger $R_S$ lowers the output impedance from $R_F$ toward $1/g_m$, and with it $M_1$'s contribution.

### Result

$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_m\,\frac{(R_S + R_F)^2}{(1 + g_mR_S)^2}$$

$R_F$'s noise voltage appears at the output with unity gain, and $M_1$'s noise current is multiplied by the closed-loop output impedance $(R_S + R_F)/(1 + g_mR_S)$. For $R_S = 0$ this reduces to $(4kT/R_F + 4kT\gamma g_m)R_F^2$, and for $R_S \to \infty$ to $4kTR_F + 4kT\gamma/g_m$.

**Common mistake.** Assuming the feedback loop suppresses $R_F$'s noise. $V_{nF}$ cannot produce any current in $R_F$, so it appears at the output in full.

**Common mistake.** Multiplying $M_1$'s noise current by $R_F$ for any $R_S$. That holds only for $R_S = 0$; in general the factor is $(R_S + R_F)/(1 + g_mR_S)$, which drops toward $1/g_m$ as $R_S$ grows.

**Common mistake.** Treating $I_1$ as a resistor to $V_{DD}$, or putting $R_S$ in the source of $M_1$. $I_1$ is an ideal source, and $R_S$ is in series with the gate, where it carries only $I_F$.
