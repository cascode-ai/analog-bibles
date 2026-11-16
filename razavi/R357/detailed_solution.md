# Detailed solution - R357

**Approach.** Refer the noise of $M_1$ and of $R_S$ to the input of the degenerated stage. Each becomes a simple expression: $4kT\gamma/g_m$ and $4kTR_S$. Then use the square law to translate the linearity condition "$I_DR_S = V_{ov}$" into the value of $g_mR_S$, and compare the two contributions.

### Step 1 — Input-referred noise of $M_1$

Model the channel noise as a current $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) in parallel with the channel. Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma = 2/3$ the long-channel noise coefficient. With $\lambda = 0$ and no body effect, the total drain current is

$$i_d = g_mv_{gs} + I_{n1} = g_m\left(v_{gs} + \frac{I_{n1}}{g_m}\right).$$

The noise current is therefore exactly equivalent to a voltage $I_{n1}/g_m$ added to $v_{gs}$, i.e. a voltage in series with the gate, whatever is connected to the source:

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_m^2} = \frac{4kT\gamma}{g_m}.$$

(Degeneration reduces both this noise current and the signal current at the drain by the same factor $1 + g_mR_S$, so it does not change the input-referred value.)

### Step 2 — Input-referred noise of $R_S$

Model the noise of $R_S$ as a voltage $V_{nS}$ ($\overline{V_{nS}^2} = 4kTR_S$) in series with it. KVL around the input loop (gate, source, $R_S$, ground):

$$v_{gs} = v_{in} - i_dR_S - V_{nS}.$$

$V_{nS}$ enters exactly like $-v_{in}$, so it is referred to the input **one-to-one**:

$$\overline{V_{n,in}^2}\Big|_{R_S} = 4kTR_S .$$

### Step 3 — The linearity condition in terms of $g_mR_S$

The requirement is that the dc drop across $R_S$ equal the overdrive voltage $V_{ov} = V_{GS} - V_{TH}$:

$$I_DR_S = V_{ov}.$$

From the square law, $I_D = \tfrac12\mu_nC_{ox}\frac{W}{L}V_{ov}^2$, the transconductance is

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \mu_nC_{ox}\frac{W}{L}V_{ov} = \frac{2I_D}{V_{ov}}.$$

Multiply by $R_S$ and use the linearity condition:

$$
\begin{aligned}
g_mR_S &= \frac{2I_D}{V_{ov}}R_S = \frac{2\,(I_DR_S)}{V_{ov}} = \frac{2V_{ov}}{V_{ov}} = 2,\\
R_S &= \frac{2}{g_m}.
\end{aligned}
$$

### Step 4 — Comparing the two contributions

Substitute $R_S = 2/g_m$:

$$
\begin{aligned}
\overline{V_{n,in}^2}\Big|_{R_S} &= 4kTR_S = \frac{8kT}{g_m},\\
\overline{V_{n,in}^2}\Big|_{M_1} &= \frac{4kT\gamma}{g_m}.
\end{aligned}
$$

The ratio of noise powers:

$$\frac{\overline{V_{n,in}^2}|_{R_S}}{\overline{V_{n,in}^2}|_{M_1}} = \frac{8kT/g_m}{4kT\gamma/g_m} = \frac{2}{\gamma} = \frac{2}{2/3} = 3 .$$

So **$R_S$ contributes three times as much noise power as $M_1$** (twice as much if $\gamma = 1$). In rms voltage, $R_S$'s contribution is $\sqrt3 \approx 1.7$ times that of $M_1$. Both are equivalent input voltages, so they reach the output through the same gain; the same 3:1 ratio holds at the output.

**Physical intuition.** A transistor behaves, for noise, like a resistor of value $\gamma/g_m$ at its gate, which is only $0.67/g_m$. The linearity condition requires a degeneration resistor of $2/g_m$, three times larger, and a resistor's noise grows in proportion to its value.

**Numerical illustration** (any $g_m$ gives the same ratio). For $g_m = 5$ mS: $R_S = 2/(5\ \mathrm{mS}) = 400\ \Omega$, while the transistor's equivalent noise resistance is $\gamma/g_m = (2/3)/(5\ \mathrm{mS}) = 133\ \Omega$; $400/133 = 3$.

### Step 5 — Effect on the load-resistor term

For completeness, the noise of $R_D$ refers to the input as $4kT(1 + g_mR_S)^2/(g_m^2R_D)$, because it appears at the output and must be divided by the degenerated gain $g_mR_D/(1 + g_mR_S)$. With $g_mR_S = 2$ the factor $(1 + g_mR_S)^2 = 9$, so the load's contribution is nine times what it would be in an undegenerated stage with the same $g_m$. The total is

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_m} + \frac{2}{g_m} + \frac{9}{g_m^2R_D}\right] = 4kT\left[\frac{8/3}{g_m} + \frac{9}{g_m^2R_D}\right].$$

Linearity through degeneration is bought at a considerable noise cost.

### Result

The condition $I_DR_S = V_{ov}$ with $g_m = 2I_D/V_{ov}$ gives $g_mR_S = 2$, i.e. $R_S = 2/g_m$. Then

$$\frac{\overline{V_{n,in}^2}|_{R_S}}{\overline{V_{n,in}^2}|_{M_1}} = \frac{4kTR_S}{4kT\gamma/g_m} = \frac{2}{\gamma},$$

which is **3 for $\gamma = 2/3$** (2 for $\gamma = 1$). The degeneration resistor contributes about three times the noise power of the transistor ($\sqrt3 \approx 1.7$ times in rms voltage), so $R_S$ dominates. In addition, the $R_D$ term is multiplied by $(1 + g_mR_S)^2 = 9$.

**Common mistake.** Concluding that $R_S$ contributes less than $M_1$ by dividing its noise by the gain or by $(1 + g_mR_S)^2$. The noise voltage of $R_S$ is in series with the source, inside the input loop, and acts exactly like an input voltage: it is referred one-to-one as $4kTR_S$.

**Common mistake.** Using $g_m = I_D/V_{ov}$ (missing the factor 2), which gives $g_mR_S = 1$ and a ratio of $1/\gamma = 1.5$. The square law gives $g_m = 2I_D/V_{ov}$, hence $g_mR_S = 2$ and a ratio of $2/\gamma$.

**Common mistake.** Mixing power and voltage ratios. The noise *power* of $R_S$ is 3 times that of $M_1$; the rms noise *voltage* is $\sqrt3 \approx 1.7$ times. Either statement is fine as long as it is labelled correctly.
