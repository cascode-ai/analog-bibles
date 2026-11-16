# Detailed solution - R357

**Approach.** Referred to the input of the degenerated stage, the noise of $M_1$ is $4kT\gamma/g_m$ and that of $R_S$ is $4kTR_S$. Use the square law to turn the linearity condition $I_DR_S = V_{ov}$ into a value of $g_mR_S$, and compare.

### Step 1 — Input-referred noise of $M_1$

With $\overline{I_{n1}^2} = 4kT\gamma g_m$, $\gamma = 2/3$, $\lambda = 0$ and no body effect, the total drain current is

$$i_d = g_mv_{gs} + I_{n1} = g_m\left(v_{gs} + \frac{I_{n1}}{g_m}\right),$$

so the noise current is exactly a voltage $I_{n1}/g_m$ in series with the gate, whatever is connected to the source:

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_m^2} = \frac{4kT\gamma}{g_m}.$$

(Degeneration reduces this noise current and the signal current at the drain by the same factor $1 + g_mR_S$.)

### Step 2 — Input-referred noise of $R_S$

With the noise of $R_S$ as a series voltage $V_{nS}$ ($\overline{V_{nS}^2} = 4kTR_S$), KVL around the input loop gives

$$v_{gs} = v_{in} - i_dR_S - V_{nS}.$$

$V_{nS}$ enters exactly like $-v_{in}$, so it is referred to the input **one-to-one**:

$$\overline{V_{n,in}^2}\Big|_{R_S} = 4kTR_S .$$

### Step 3 — The linearity condition in terms of $g_mR_S$

The requirement is

$$I_DR_S = V_{ov}.$$

With the square-law transconductance

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = \frac{2I_D}{V_{ov}},$$

$$
\begin{aligned}
g_mR_S &= \frac{2I_D}{V_{ov}}R_S = \frac{2\,(I_DR_S)}{V_{ov}} = \frac{2V_{ov}}{V_{ov}} = 2,\\
R_S &= \frac{2}{g_m}.
\end{aligned}
$$

### Step 4 — Comparing the two contributions

With $R_S = 2/g_m$:

$$
\begin{aligned}
\overline{V_{n,in}^2}\Big|_{R_S} &= 4kTR_S = \frac{8kT}{g_m},\\
\overline{V_{n,in}^2}\Big|_{M_1} &= \frac{4kT\gamma}{g_m},
\end{aligned}
$$

$$\frac{\overline{V_{n,in}^2}|_{R_S}}{\overline{V_{n,in}^2}|_{M_1}} = \frac{8kT/g_m}{4kT\gamma/g_m} = \frac{2}{\gamma} = \frac{2}{2/3} = 3 .$$

So **$R_S$ contributes three times as much noise power as $M_1$** (twice as much if $\gamma = 1$), or $\sqrt3 \approx 1.7$ times in rms voltage. Both are input voltages that see the same gain, so the 3:1 ratio holds at the output too. For noise, the transistor acts like a resistor $\gamma/g_m \approx 0.67/g_m$ at its gate, while the linearity condition demands $2/g_m$.

**Numerical illustration** (any $g_m$ gives the same ratio). For $g_m = 5$ mS: $R_S = 2/(5\ \mathrm{mS}) = 400\ \Omega$, while the transistor's equivalent noise resistance is $\gamma/g_m = (2/3)/(5\ \mathrm{mS}) = 133\ \Omega$; $400/133 = 3$.

### Step 5 — Effect on the load-resistor term

The noise of $R_D$ refers to the input as $4kT(1 + g_mR_S)^2/(g_m^2R_D)$, divided by the degenerated gain $g_mR_D/(1 + g_mR_S)$. With $g_mR_S = 2$, $(1 + g_mR_S)^2 = 9$: nine times the load contribution of an undegenerated stage with the same $g_m$. The total is

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_m} + \frac{2}{g_m} + \frac{9}{g_m^2R_D}\right] = 4kT\left[\frac{8/3}{g_m} + \frac{9}{g_m^2R_D}\right].$$

Linearity through degeneration is bought at a considerable noise cost.

### Result

The condition $I_DR_S = V_{ov}$ with $g_m = 2I_D/V_{ov}$ gives $g_mR_S = 2$, i.e. $R_S = 2/g_m$. Then

$$\frac{\overline{V_{n,in}^2}|_{R_S}}{\overline{V_{n,in}^2}|_{M_1}} = \frac{4kTR_S}{4kT\gamma/g_m} = \frac{2}{\gamma},$$

which is **3 for $\gamma = 2/3$** (2 for $\gamma = 1$). The degeneration resistor contributes about three times the noise power of the transistor ($\sqrt3 \approx 1.7$ times in rms voltage), so $R_S$ dominates. In addition, the $R_D$ term is multiplied by $(1 + g_mR_S)^2 = 9$.

**Common mistake.** Concluding that $R_S$ contributes less than $M_1$ by dividing its noise by the gain or by $(1 + g_mR_S)^2$. Its noise voltage lies inside the input loop and is referred one-to-one as $4kTR_S$.

**Common mistake.** Using $g_m = I_D/V_{ov}$ (missing the factor 2), which gives $g_mR_S = 1$ and a ratio of $1/\gamma = 1.5$ instead of $2/\gamma$.

**Common mistake.** Mixing power and voltage ratios: the noise *power* of $R_S$ is 3 times that of $M_1$, the rms *voltage* $\sqrt3 \approx 1.7$ times.
