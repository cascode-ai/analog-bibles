# Detailed solution - R345

**Approach.** Represent the noise by an input-referred voltage and current. **Input shorted:** the gate is grounded, so $R_F$ simply loads the output. Compare the short-circuit output noise current with the short-circuit transconductance to get $\overline{V_{n,in}^2}$. **Input open:** no current flows in $R_F$, so the gate follows the output (plus $R_F$'s noise voltage). Compute the output noise and divide by the squared transimpedance to get $\overline{I_{n,in}^2}$.

### Step 1 — Small-signal model

**Nodes:** the input (gate of $M_1$) and the output (drain).

- **$M_1$** (source grounded): current $g_mv_{in}$ from the output to ground, with channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) in parallel ($\lambda = 0$, no body effect).
- **$R_D$**: from the output to $V_{DD}$ (ac ground), with Norton noise current $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$), taken as flowing from $V_{DD}$ into the output.
- **$R_F$**: between the output and the input (gate). Its noise is modelled either as a Norton current $I_{nF}$ ($\overline{I_{nF}^2} = 4kT/R_F$) in parallel, or as a Thevenin voltage $V_{nF}$ ($\overline{V_{nF}^2} = 4kTR_F$) in series, whichever is more convenient.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

<!-- diagram: diagram-01.cir -->

### Step 2 — Input-referred noise voltage (input shorted)

**Why short-circuit currents can be compared.** With the input driven by an ideal voltage source (or shorted), the output sees the same Thevenin/Norton resistance for both signal and noise: $R_{out} = R_D\parallel R_F$ (since $R_F$ goes to the ac-grounded input). If the signal produces a short-circuit output current $G_mv_{in}$ and the noise a short-circuit current $I_{n,sc}$, both are multiplied by the same $R_{out}$. Hence $\overline{V_{n,in}^2} = \overline{I_{n,sc}^2}/G_m^2$.

**Short-circuit transconductance $G_m$.** Short the output to ground and drive the gate with $v_{in}$. $M_1$ pulls $g_mv_{in}$ out of the output node, while $R_F$ pushes $(v_{in} - 0)/R_F$ into it. The net current drawn from the short is

$$i_{sc} = g_mv_{in} - \frac{v_{in}}{R_F} = \left(g_m - \frac{1}{R_F}\right)v_{in}, \qquad G_m = g_m - \frac{1}{R_F}.$$

$R_F$ carries a small feedforward current of the *opposite* sign from the transistor's, which slightly reduces the effective transconductance. (Equivalently, the voltage gain is $A_v = -(g_m - 1/R_F)(R_D\parallel R_F)$.)

**Short-circuit noise current.** With the input shorted, $v_{gs} = 0$, and $R_F$ connects the output to ground. The three noise currents $I_{n1}$, $I_{nD}$ and $I_{nF}$ all flow into the output short. Being uncorrelated:

$$\overline{I_{n,sc}^2} = 4kT\gamma g_m + \frac{4kT}{R_D} + \frac{4kT}{R_F}.$$

**Result for the voltage:**

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n,sc}^2}}{G_m^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_F}\right)}{\left(g_m - \dfrac{1}{R_F}\right)^2}.$$

### Step 3 — Output noise with the input open

With the input **open**, the gate node is connected only to $R_F$ (the gate itself draws no current). So **no current flows through $R_F$**, and there is no drop across the resistor itself. Using the Thevenin model of $R_F$'s noise, the gate voltage is the output voltage plus the noise voltage:

$$v_G = v_{out} + V_{nF}.$$

KCL at the output (current arriving from the $R_D$ branch equals current through $M_1$; $R_F$ carries none):

$$\frac{0 - v_{out}}{R_D} + I_{nD} = g_mv_G + I_{n1} = g_m(v_{out} + V_{nF}) + I_{n1}.$$

Solve for $v_{out}$:

$$
\begin{aligned}
-v_{out}\left(g_m + \frac{1}{R_D}\right) &= g_mV_{nF} + I_{n1} - I_{nD}\\
v_{out} &= -\frac{g_mV_{nF} + I_{n1} - I_{nD}}{g_m + 1/R_D}.
\end{aligned}
$$

The transistor is effectively diode-connected through $R_F$ (gate tied to drain), so the output resistance is $1/g_m\parallel R_D$. The output noise PSD is

$$\overline{V_{n,out}^2}\Big|_{open} = \frac{g_m^2\cdot4kTR_F + 4kT\gamma g_m + 4kT/R_D}{(g_m + 1/R_D)^2} = \frac{4kT\left(g_m^2R_F + \gamma g_m + 1/R_D\right)}{(g_m + 1/R_D)^2}.$$

### Step 4 — Transimpedance and input-referred noise current

Inject a signal current $i_{in}$ into the gate node (noise off). All of it flows through $R_F$ to the output, so

$$v_G = v_{out} + R_Fi_{in}.$$

KCL at the output (arriving from $R_F$ and from $R_D$ = leaving through $M_1$):

$$
\begin{aligned}
i_{in} - \frac{v_{out}}{R_D} &= g_m(v_{out} + R_Fi_{in})\\
i_{in}(1 - g_mR_F) &= v_{out}\left(g_m + \frac{1}{R_D}\right)\\
R_T = \frac{v_{out}}{i_{in}} &= \frac{1 - g_mR_F}{g_m + 1/R_D} = -\frac{R_D(g_mR_F - 1)}{1 + g_mR_D}.
\end{aligned}
$$

Divide the open-input output noise by $R_T^2$:

$$
\begin{aligned}
\overline{I_{n,in}^2} &= \frac{4kT\left(g_m^2R_F + \gamma g_m + 1/R_D\right)}{(g_m + 1/R_D)^2}\cdot\frac{(g_m + 1/R_D)^2}{(g_mR_F - 1)^2}\\
&= \frac{4kT\left(g_m^2R_F + \gamma g_m + \dfrac{1}{R_D}\right)}{(g_mR_F - 1)^2}.
\end{aligned}
$$

### Step 5 — Checks and interpretation

- **Large loop gain, $g_mR_F \gg 1$:** $\overline{I_{n,in}^2} \approx 4kTg_m^2R_F/(g_mR_F)^2 = 4kT/R_F$. The feedback resistor's own noise current appears directly at the input. This is the familiar limit of shunt-feedback (transimpedance) amplifiers: a large $R_F$ is needed for low input noise current.
- **Current-source load, $R_D \to \infty$:** the results become
$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_m + 4kT/R_F}{(g_m - 1/R_F)^2}, \qquad \overline{I_{n,in}^2} = \frac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2}.$$
- **Dimensions:** $\overline{V_{n,in}^2}$ is $4kT\times$ (siemens)/(siemens)² $= 4kT\times$ ohms (V²/Hz); $\overline{I_{n,in}^2}$ is $4kT\times$ siemens (A²/Hz), since $g_m^2R_F$, $g_m$ and $1/R_D$ are all conductances.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_F}\right)}{\left(g_m - \dfrac{1}{R_F}\right)^2},\qquad \overline{I_{n,in}^2} = \frac{4kT\left(g_m^2R_F + \gamma g_m + \dfrac{1}{R_D}\right)}{(g_mR_F - 1)^2}$$

- Voltage: with the input shorted, $R_F$ loads the output; the noise current $I_{n1} + I_{nD} + I_{nF}$ is divided by $G_m = g_m - 1/R_F$.
- Current: with the input open, $R_F$ carries no current, so $v_G = v_{out} + V_{nF}$; the output noise is divided by the transimpedance $R_D(g_mR_F - 1)/(1 + g_mR_D)$.

**Common mistake.** Using $g_m$ instead of $g_m - 1/R_F$ for the transconductance. With the input driven and the output shorted, $R_F$ injects a current $v_{in}/R_F$ of opposite sign into the output, so the net transconductance is $g_m - 1/R_F$.

**Common mistake.** Setting the input-referred current to $4kT/R_F$ alone. That is only the $g_mR_F \gg 1$ limit. In general the transistor ($\gamma g_m$) and $R_D$ ($1/R_D$) also contribute, and the transimpedance is $(g_mR_F - 1)R_D/(1 + g_mR_D)$, not $R_F$.

**Common mistake.** Treating $R_F$ as a resistor in series with the input, or the circuit as a common-gate stage. $R_F$ connects the drain to the gate (shunt feedback), and the input drives the gate; with the input open, the transistor becomes effectively diode-connected through $R_F$.
