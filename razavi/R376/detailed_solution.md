# Detailed solution - R376

**Approach.** Match the noisy circuit to the noiseless circuit plus $V_{n,in}$ and $I_{n,in}$ in the two extreme cases: input shorted (only $V_{n,in}$ acts) and input open (only $I_{n,in}$ acts). In each case equate the two outputs, keeping the noise voltages as signed quantities. Both results contain the same physical sources, so they are correlated; compute their PSDs and cross-spectrum.

### Step 1 — The noiseless amplifier

Call the $R_S$ side of $V_{n,in}$ node A, so $V_G = V_A + V_{n,in}$. $I_1$ is ideal and $\lambda = 0$, so only $M_1$ and $R_F$ carry small-signal current at the output.

<!-- diagram: diagram-01.cir -->

Without noise, the current through $M_1$ must come entirely through $R_F$:

$$g_mV_G + \frac{V_{out} - V_G}{R_F} = 0 \quad\Longrightarrow\quad V_{out} = (1 - g_mR_F)\,V_G .$$

The current flowing from G into $R_F$ is therefore $g_mV_G$: the input impedance at G is $1/g_m$.

With the input shorted, G is pinned at $V_{n,in}$ and $I_{n,in}$ flows into the short; with the input open, $V_{n,in}$ carries no current. So each test isolates one source.

### Step 2 — $V_{n,in}$ from the input-shorted test

**Noisy circuit** ($V_G = 0$). KCL at the output:

$$
\begin{aligned}
g_m(0 + V_{n,M1}) + \frac{V_{out} - 0 - V_{n,RF}}{R_F} &= 0\\
V_{out} - V_{n,RF} &= -g_mR_FV_{n,M1}\\
V_{out} &= V_{n,RF} - g_mR_FV_{n,M1}.
\end{aligned}
$$

**Noiseless circuit with $V_{n,in}$.** $V_A = 0$, so $V_G = V_{n,in}$ and $V_{out} = (1 - g_mR_F)\,V_{n,in}$. Equating:

$$
\begin{aligned}
(1 - g_mR_F)\,V_{n,in} &= V_{n,RF} - g_mR_FV_{n,M1}\\
V_{n,in} &= \frac{V_{n,RF} - g_mR_FV_{n,M1}}{1 - g_mR_F} = \frac{g_mR_FV_{n,M1} - V_{n,RF}}{g_mR_F - 1}.
\end{aligned}
$$

### Step 3 — $I_{n,in}$ from the input-open test

**Noisy circuit.** Nothing but $R_F$ connects to G and the gate draws no current, so **no current flows in $R_F$**:

$$V_{out} - V_G - V_{n,RF} = 0 \quad\Longrightarrow\quad V_{out} = V_G + V_{n,RF}.$$

KCL at the output then forces $M_1$'s current to zero:

$$g_m(V_G + V_{n,M1}) = 0 \quad\Longrightarrow\quad V_G = -V_{n,M1}, \qquad V_{out} = V_{n,RF} - V_{n,M1}.$$

**Noiseless circuit with $I_{n,in}$.** The injected current flows through $R_F$ to the output, so

$$\frac{V_{out} - V_G}{R_F} = -I_{n,in} \quad\Longrightarrow\quad V_G = V_{out} + R_FI_{n,in},$$

and leaves through $M_1$:

$$
\begin{aligned}
g_mV_G &= I_{n,in}\\
g_m(V_{out} + R_FI_{n,in}) &= I_{n,in}\\
V_{out} &= \frac{1 - g_mR_F}{g_m}\,I_{n,in}.
\end{aligned}
$$

Equating:

$$
\begin{aligned}
\frac{1 - g_mR_F}{g_m}\,I_{n,in} &= V_{n,RF} - V_{n,M1}\\
I_{n,in} &= \frac{g_m(V_{n,RF} - V_{n,M1})}{1 - g_mR_F} = \frac{g_m(V_{n,M1} - V_{n,RF})}{g_mR_F - 1}.
\end{aligned}
$$

### Step 4 — Power spectral densities

$V_{n,M1}$ and $V_{n,RF}$ are independent, so cross terms between them vanish.

**Voltage** (last form: divide numerator and denominator by $R_F^2$):

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{g_m^2R_F^2\,\overline{V_{n,M1}^2} + \overline{V_{n,RF}^2}}{(g_mR_F - 1)^2}
= \frac{g_m^2R_F^2\cdot\dfrac{4kT\gamma}{g_m} + 4kTR_F}{(g_mR_F - 1)^2}\\
&= \frac{4kT\gamma g_mR_F^2 + 4kTR_F}{(g_mR_F - 1)^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}.
\end{aligned}
$$

**Current:**

$$\overline{I_{n,in}^2} = \frac{g_m^2\left(\overline{V_{n,M1}^2} + \overline{V_{n,RF}^2}\right)}{(g_mR_F - 1)^2} = \frac{g_m^2\left(\dfrac{4kT\gamma}{g_m} + 4kTR_F\right)}{(g_mR_F - 1)^2} = \frac{4kT\gamma g_m + 4kTR_Fg_m^2}{(g_mR_F - 1)^2}.$$

### Step 5 — Correlation between $V_{n,in}$ and $I_{n,in}$

Both are built from the *same* two sources, so they are **correlated**. In the cross-spectrum only the $|V_{n,M1}|^2$ and $|V_{n,RF}|^2$ products survive:

$$
\begin{aligned}
\overline{V_{n,in}I_{n,in}^*} &= \frac{g_m\left[g_mR_F\,\overline{V_{n,M1}^2} + \overline{V_{n,RF}^2}\right]}{(g_mR_F - 1)^2}
= \frac{g_m\left[g_mR_F\cdot\dfrac{4kT\gamma}{g_m} + 4kTR_F\right]}{(g_mR_F - 1)^2}\\
&= \frac{4kTg_mR_F\,(1 + \gamma)}{(g_mR_F - 1)^2}.
\end{aligned}
$$

For example, with $g_mR_F = 10$ and $\gamma = 2/3$ the correlation coefficient $\overline{V_{n,in}I_{n,in}^*}/\sqrt{\overline{V_{n,in}^2}\,\overline{I_{n,in}^2}}$ is $\sqrt{10}(1.667)/\sqrt{(7.667)(10.667)} \approx 0.58$: far from zero.

**Check with a source resistance.** Driving the noiseless amplifier (input impedance $1/g_m$) from $R_S$ with both sources, KCL at G gives $V_G = (V_{n,in} + R_SI_{n,in})/(1 + g_mR_S)$. With Steps 2 and 3:

$$V_{n,in} + R_SI_{n,in} = \frac{g_m(R_F + R_S)V_{n,M1} - (1 + g_mR_S)V_{n,RF}}{g_mR_F - 1},$$

$$V_{out} = (1 - g_mR_F)V_G = V_{n,RF} - \frac{g_m(R_S + R_F)}{1 + g_mR_S}V_{n,M1},$$

exactly the output noise of the noisy circuit analysed directly (with $g_mV_{n,M1}$ as $M_1$'s noise current). Adding $\overline{V_{n,in}^2} + R_S^2\overline{I_{n,in}^2}$ without the cross term $2R_S\overline{V_{n,in}I_{n,in}^*}$ would underestimate the noise (by about 28 % in power for $g_mR_F = 10$, $g_mR_S = 1$).

### Result

$$V_{n,in} = \frac{g_mR_FV_{n,M1} - V_{n,RF}}{g_mR_F - 1}, \qquad I_{n,in} = \frac{g_m(V_{n,M1} - V_{n,RF})}{g_mR_F - 1}.$$

Both contain $V_{n,M1}$ and $V_{n,RF}$, so they are **strongly correlated**, not independent. Their PSDs:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_mR_F^2 + 4kTR_F}{(g_mR_F - 1)^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}, \qquad \overline{I_{n,in}^2} = \frac{4kT\gamma g_m + 4kTR_Fg_m^2}{(g_mR_F - 1)^2},$$

with cross-spectrum $\overline{V_{n,in}I_{n,in}^*} = 4kTg_mR_F(1 + \gamma)/(g_mR_F - 1)^2$.

**Common mistake.** Treating $V_{n,in}$ and $I_{n,in}$ as independent. With a finite source resistance the cross term $2R_S\overline{V_{n,in}I_{n,in}^*}$ must be included.

**Common mistake.** Dropping the $-1$ in $g_mR_F - 1$. It comes from the feedforward current through $R_F$ (the noiseless gain is $1 - g_mR_F$, not $-g_mR_F$) and matters when $g_mR_F$ is not large.

**Common mistake.** Placing $V_{n,in}$ at the MOS gate inside the $R_F$ loop, which is a different representation with a different pair ($V_{n,in} = V_{n,M1} - V_{n,RF}/(g_mR_F)$, $I_{n,in} = -V_{n,RF}/R_F$). Also, flipping the sign of only one of the two results changes the cross-spectrum.
