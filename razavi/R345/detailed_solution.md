# Detailed solution - R345

**Approach.** With the input shorted, $R_F$ simply loads the output, and the short-circuit output noise current divided by the short-circuit transconductance gives $\overline{V_{n,in}^2}$. With the input open, no current flows in $R_F$, so the gate follows the output (plus $R_F$'s noise voltage); the output noise divided by the squared transimpedance gives $\overline{I_{n,in}^2}$.

### Step 1 — Small-signal model

- **$M_1$:** a current $g_mv_{in}$ from the output to ground, with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) in parallel ($\lambda = 0$, no body effect).
- **$R_D$:** from the output to ac ground, with its Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$) flowing from $V_{DD}$ into the output.
- **$R_F$:** between the output and the gate, with its noise modelled as a Norton current $I_{nF}$ ($\overline{I_{nF}^2} = 4kT/R_F$) or a series Thevenin voltage $V_{nF}$ ($\overline{V_{nF}^2} = 4kTR_F$), whichever is more convenient.

<!-- diagram: diagram-01.cir -->

### Step 2 — Input-referred noise voltage (input shorted)

With the input held by an ideal source, signal and noise see the same output resistance $R_D\parallel R_F$, so $\overline{V_{n,in}^2} = \overline{I_{n,sc}^2}/G_m^2$, the ratio of the short-circuit output noise current to the short-circuit transconductance.

**$G_m$.** With the output shorted, $M_1$ pulls $g_mv_{in}$ out of the output node while $R_F$ pushes $(v_{in} - 0)/R_F$ into it:

$$i_{sc} = g_mv_{in} - \frac{v_{in}}{R_F} = \left(g_m - \frac{1}{R_F}\right)v_{in}, \qquad G_m = g_m - \frac{1}{R_F}.$$

The feedforward current through $R_F$ has the opposite sign and slightly reduces the transconductance (the voltage gain is $A_v = -(g_m - 1/R_F)(R_D\parallel R_F)$).

**Noise.** With the input shorted, $v_{gs} = 0$ and $R_F$ connects the output to ground, so the uncorrelated noise currents $I_{n1}$, $I_{nD}$ and $I_{nF}$ all flow into the output short:

$$\overline{I_{n,sc}^2} = 4kT\gamma g_m + \frac{4kT}{R_D} + \frac{4kT}{R_F},$$

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n,sc}^2}}{G_m^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_F}\right)}{\left(g_m - \dfrac{1}{R_F}\right)^2}.$$

### Step 3 — Output noise with the input open

With the input open, the gate node connects only to $R_F$, so **no current flows through $R_F$**, and with the Thevenin model of its noise,

$$v_G = v_{out} + V_{nF}.$$

KCL at the output ($R_F$ carries no current):

$$\frac{0 - v_{out}}{R_D} + I_{nD} = g_mv_G + I_{n1} = g_m(v_{out} + V_{nF}) + I_{n1},$$

$$
\begin{aligned}
-v_{out}\left(g_m + \frac{1}{R_D}\right) &= g_mV_{nF} + I_{n1} - I_{nD}\\
v_{out} &= -\frac{g_mV_{nF} + I_{n1} - I_{nD}}{g_m + 1/R_D}.
\end{aligned}
$$

The transistor is effectively diode-connected through $R_F$, so the output resistance is $1/g_m\parallel R_D$, and

$$\overline{V_{n,out}^2}\Big|_{open} = \frac{g_m^2\cdot4kTR_F + 4kT\gamma g_m + 4kT/R_D}{(g_m + 1/R_D)^2} = \frac{4kT\left(g_m^2R_F + \gamma g_m + 1/R_D\right)}{(g_m + 1/R_D)^2}.$$

### Step 4 — Transimpedance and input-referred noise current

A signal current $i_{in}$ injected into the gate node (noise off) flows entirely through $R_F$ to the output, so $v_G = v_{out} + R_Fi_{in}$. KCL at the output:

$$
\begin{aligned}
i_{in} - \frac{v_{out}}{R_D} &= g_m(v_{out} + R_Fi_{in})\\
i_{in}(1 - g_mR_F) &= v_{out}\left(g_m + \frac{1}{R_D}\right)\\
R_T = \frac{v_{out}}{i_{in}} &= \frac{1 - g_mR_F}{g_m + 1/R_D} = -\frac{R_D(g_mR_F - 1)}{1 + g_mR_D}.
\end{aligned}
$$

Dividing the open-input output noise by $R_T^2$:

$$
\begin{aligned}
\overline{I_{n,in}^2} &= \frac{4kT\left(g_m^2R_F + \gamma g_m + 1/R_D\right)}{(g_m + 1/R_D)^2}\cdot\frac{(g_m + 1/R_D)^2}{(g_mR_F - 1)^2}\\
&= \frac{4kT\left(g_m^2R_F + \gamma g_m + \dfrac{1}{R_D}\right)}{(g_mR_F - 1)^2}.
\end{aligned}
$$

### Step 5 — Checks

- **$g_mR_F \gg 1$:** $\overline{I_{n,in}^2} \approx 4kTg_m^2R_F/(g_mR_F)^2 = 4kT/R_F$, the familiar shunt-feedback limit: the feedback resistor's noise current appears directly at the input, so low input noise current needs a large $R_F$.
- **$R_D \to \infty$** (current-source load):
$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_m + 4kT/R_F}{(g_m - 1/R_F)^2}, \qquad \overline{I_{n,in}^2} = \frac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2}.$$
- **Dimensions:** $\overline{V_{n,in}^2}$ is $4kT\times$ (siemens)/(siemens)² $= 4kT\times$ ohms (V²/Hz), and $\overline{I_{n,in}^2}$ is $4kT\times$ siemens (A²/Hz), since $g_m^2R_F$, $g_m$ and $1/R_D$ are all conductances.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_F}\right)}{\left(g_m - \dfrac{1}{R_F}\right)^2},\qquad \overline{I_{n,in}^2} = \frac{4kT\left(g_m^2R_F + \gamma g_m + \dfrac{1}{R_D}\right)}{(g_mR_F - 1)^2}$$

- Voltage: with the input shorted, $R_F$ loads the output; the noise current $I_{n1} + I_{nD} + I_{nF}$ is divided by $G_m = g_m - 1/R_F$.
- Current: with the input open, $R_F$ carries no current, so $v_G = v_{out} + V_{nF}$; the output noise is divided by the transimpedance $R_D(g_mR_F - 1)/(1 + g_mR_D)$.

**Common mistake.** Using $g_m$ instead of $g_m - 1/R_F$ for the transconductance. With the output shorted, $R_F$ injects a current $v_{in}/R_F$ of opposite sign into the output.

**Common mistake.** Setting the input-referred current to $4kT/R_F$ alone. That is only the $g_mR_F \gg 1$ limit; in general the transistor ($\gamma g_m$) and $R_D$ ($1/R_D$) also contribute, and the transimpedance is $(g_mR_F - 1)R_D/(1 + g_mR_D)$, not $R_F$.

**Common mistake.** Treating $R_F$ as a resistor in series with the input. It connects the drain to the gate (shunt feedback); with the input open, the transistor becomes effectively diode-connected through $R_F$.
