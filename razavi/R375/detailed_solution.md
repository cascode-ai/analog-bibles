# Detailed solution - R375

**Approach.** Set the signal source to zero (so $V_{in}$ is AC ground and the gate sees $R_S$ to ground), keep the two noise sources ($M_1$'s channel noise and $R_F$'s noise voltage), and solve the small-signal circuit with KCL at the output and at the gate plus KVL along $R_F$. The output noise PSD is then the sum of the two independent contributions.

### Step 1 — The circuit and the small-signal noise model

Reading the figure: the source $V_{in}$ drives the gate node G of $M_1$ through $R_S$. $M_1$ has its source grounded and its drain at $V_{out}$; the load is the ideal current source $I_1$; $R_F$ connects the output back to G.

**Small-signal model in words** (input source set to zero):

- $R_S$: from G to ground (its own noise is neglected).
- $M_1$: controlled current $g_mV_G$ from out to ground, in parallel with its channel-noise current $I_{n1}$, $\overline{I_{n1}^2} = 4kT\gamma g_m$. No $r_O$, since $\lambda = 0$.
- $I_1$: ideal and noiseless, i.e. an open circuit for small signals.
- $R_F$: from out to G, with its thermal noise as a series voltage $V_{nF}$, $\overline{V_{nF}^2} = 4kTR_F$.
- Let $I_F$ be the current flowing in $R_F$ from the output to the gate.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature, $\gamma$ the channel-noise coefficient and $g_m$ the transconductance of $M_1$.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the output and at the gate

**Output node.** The only elements that can carry small-signal current away from the output are $M_1$ and $R_F$ (the current source $I_1$ cannot). So

$$g_mV_G + I_{n1} + I_F = 0 .$$

**Gate node.** The gate draws no current, so all of $I_F$ continues through $R_S$ to ground:

$$V_G = R_SI_F .$$

### Step 3 — Solve for the feedback current

Substitute $V_G = R_SI_F$ into the output KCL:

$$
\begin{aligned}
g_mR_SI_F + I_{n1} + I_F &= 0\\
I_F\,(1 + g_mR_S) &= -I_{n1}\\
I_F &= -\frac{I_{n1}}{1 + g_mR_S}.
\end{aligned}
$$

Notice that $V_{nF}$ does not appear: **$R_F$'s noise voltage produces no current at all.** With only $V_{nF}$ present, the equations give $I_F(1 + g_mR_S) = 0$, so $I_F = 0$ and $V_G = 0$. The drain current of $M_1$ depends only on $V_G$, and nothing else at the output can absorb current, so no current can flow in $R_F$.

### Step 4 — Output voltage by KVL along $R_F$

Going from the gate to the output through $R_F$ and its series noise source:

$$
\begin{aligned}
V_{out} &= V_G + R_FI_F + V_{nF}\\
&= R_SI_F + R_FI_F + V_{nF}\\
&= (R_S + R_F)\,I_F + V_{nF}.
\end{aligned}
$$

Substitute $I_F$ from Step 3:

$$V_{out} = V_{nF} - \frac{R_S + R_F}{1 + g_mR_S}\,I_{n1}.$$

**Interpretation of the two transfers.**

- $R_F$'s noise voltage reaches the output with **unity gain**: since $I_F = 0$, the output just sits $V_{nF}$ above the (unchanged) gate voltage.
- $M_1$'s noise current is multiplied by $(R_S + R_F)/(1 + g_mR_S)$, which is the closed-loop **output impedance** of the amplifier. (A test current $i_x$ injected at the output gives $I_F = i_x/(1 + g_mR_S)$ and $V_{out} = (R_S + R_F)I_F$, the same factor.) A noise current at the output node simply sees the impedance of that node.

### Step 5 — Output noise PSD

The two sources are uncorrelated, so their powers add:

$$
\begin{aligned}
\overline{V_{n,out}^2} &= \overline{V_{nF}^2} + \left(\frac{R_S + R_F}{1 + g_mR_S}\right)^2\overline{I_{n1}^2}\\
&= 4kTR_F + 4kT\gamma g_m\frac{(R_S + R_F)^2}{(1 + g_mR_S)^2}.
\end{aligned}
$$

### Step 6 — Checks in the two limits

**$R_S = 0$ (ideal voltage drive, gate at AC ground):**

$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_mR_F^2 = \left(\frac{4kT}{R_F} + 4kT\gamma g_m\right)R_F^2 .$$

This is the familiar result: with the gate grounded, $R_F$ is simply a resistor from the output to ground, and both noise currents ($4kT/R_F$ and $4kT\gamma g_m$) flow through it.

**$R_S \to \infty$ (input open):**

$$\frac{(R_S + R_F)^2}{(1 + g_mR_S)^2} \to \frac{R_S^2}{g_m^2R_S^2} = \frac{1}{g_m^2}, \qquad \overline{V_{n,out}^2} \to 4kTR_F + \frac{4kT\gamma}{g_m}.$$

With the gate open, $M_1$ behaves like a diode-connected device through $R_F$ (output impedance $1/g_m$), and $R_F$'s noise passes straight through.

Between these limits, increasing $R_S$ lowers $M_1$'s contribution from $\gamma g_mR_F^2$ toward $\gamma/g_m$, because the feedback becomes stronger relative to the source loading and the output impedance falls from $R_F$ toward $1/g_m$.

### Result

$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_m\,\frac{(R_S + R_F)^2}{(1 + g_mR_S)^2}$$

$R_F$'s noise voltage appears at the output with unity gain, and $M_1$'s noise current is multiplied by the closed-loop output impedance $(R_S + R_F)/(1 + g_mR_S)$. For $R_S = 0$ this reduces to $(4kT/R_F + 4kT\gamma g_m)R_F^2$, and for $R_S \to \infty$ to $4kTR_F + 4kT\gamma/g_m$.

**Common mistake.** Assuming the feedback loop suppresses $R_F$'s noise. KCL at the output shows that $V_{nF}$ cannot produce any current in $R_F$ (the ideal current source and the transconductor cannot absorb it), so it appears at the output in full.

**Common mistake.** Multiplying $M_1$'s noise current by $R_F$ for any $R_S$. That is true only when $R_S = 0$; in general the noise current sees the closed-loop output impedance $(R_S + R_F)/(1 + g_mR_S)$, which drops toward $1/g_m$ as $R_S$ grows.

**Common mistake.** Treating $I_1$ as a resistor to $V_{DD}$, or putting $R_S$ in the source of $M_1$. $I_1$ is an ideal (infinite-impedance) source here, and $R_S$ is in series with the gate, where it carries only the feedback current $I_F$.
