# Detailed solution - R376

**Approach.** The input-referred sources are defined so that the noiseless circuit plus $V_{n,in}$ and $I_{n,in}$ reproduces the noisy circuit for *any* source impedance. It suffices to match the two extreme cases: input shorted (only $V_{n,in}$ acts) and input open (only $I_{n,in}$ acts). For each case we compute the output of the noisy circuit (keeping the noise voltages as signed quantities, not powers), compute the output of the noiseless circuit driven by the input-referred source, and equate the two. Because both results contain the same physical sources, they are correlated; we compute their PSDs and their cross-spectrum.

### Step 1 — The circuit, the conventions and the noiseless amplifier

Reading the figure: $M_1$ (source grounded, drain = $V_{out}$) is loaded by the ideal current source $I_1$, and $R_F$ connects the output to the gate node G. The signal source drives G through $R_S$.

Conventions given in the problem:

- **$M_1$:** its thermal noise is a voltage $V_{n,M1}$ in series with the gate, so its drain current (from the output to ground) is $g_m(V_G + V_{n,M1})$, with $\overline{V_{n,M1}^2} = 4kT\gamma/g_m$.
- **$R_F$:** its noise is a voltage $V_{n,RF}$ in series with it, so the current in $R_F$ from the output to the gate is $(V_{out} - V_G - V_{n,RF})/R_F$, with $\overline{V_{n,RF}^2} = 4kTR_F$.
- **Input-referred sources:** $V_{n,in}$ sits between the $R_S$ side (node A) and G, outside the $R_F$ loop, so $V_G = V_A + V_{n,in}$; $I_{n,in}$ is injected from ground into G.

Here $k$ is Boltzmann's constant, $T$ the temperature, $\gamma$ the channel-noise coefficient and $g_m$ the transconductance. $I_1$ is ideal and $\lambda = 0$, so no other element at the output carries small-signal current.

<!-- diagram: diagram-01.cir -->

**The noiseless amplifier.** With no noise, KCL at the output says that the current through $M_1$ must come entirely through $R_F$:

$$g_mV_G + \frac{V_{out} - V_G}{R_F} = 0 \quad\Longrightarrow\quad V_{out} = (1 - g_mR_F)\,V_G .$$

The same KCL also tells us that the current flowing from G into $R_F$ is $g_mV_G$, i.e. the amplifier's input impedance at G is $1/g_m$.

**Why the two tests are enough.** With the input shorted, node A is grounded and G is pinned at $V_{n,in}$ by an ideal voltage path, so $I_{n,in}$ flows into that path and has no effect. With the input open, $V_{n,in}$ is in series with an open circuit, carries no current and has no effect. So each test isolates one of the two sources.

### Step 2 — $V_{n,in}$ from the input-shorted test

**Noisy circuit, input shorted** ($V_G = 0$). KCL at the output (current leaving through $M_1$ plus current leaving through $R_F$ is zero):

$$
\begin{aligned}
g_m(0 + V_{n,M1}) + \frac{V_{out} - 0 - V_{n,RF}}{R_F} &= 0\\
V_{out} - V_{n,RF} &= -g_mR_FV_{n,M1}\\
V_{out} &= V_{n,RF} - g_mR_FV_{n,M1}.
\end{aligned}
$$

**Noiseless circuit with $V_{n,in}$, input shorted.** Now $V_A = 0$, so $V_G = V_{n,in}$ and, from Step 1,

$$V_{out} = (1 - g_mR_F)\,V_{n,in}.$$

**Equate:**

$$
\begin{aligned}
(1 - g_mR_F)\,V_{n,in} &= V_{n,RF} - g_mR_FV_{n,M1}\\
V_{n,in} &= \frac{V_{n,RF} - g_mR_FV_{n,M1}}{1 - g_mR_F} = \frac{g_mR_FV_{n,M1} - V_{n,RF}}{g_mR_F - 1}.
\end{aligned}
$$

### Step 3 — $I_{n,in}$ from the input-open test

**Noisy circuit, input open.** The gate draws no current and nothing else is connected to G, so **no current flows in $R_F$**:

$$V_{out} - V_G - V_{n,RF} = 0 \quad\Longrightarrow\quad V_{out} = V_G + V_{n,RF}.$$

KCL at the output then says that $M_1$'s current must also be zero:

$$g_m(V_G + V_{n,M1}) = 0 \quad\Longrightarrow\quad V_G = -V_{n,M1}.$$

Therefore

$$V_{out} = V_{n,RF} - V_{n,M1}.$$

**Noiseless circuit with $I_{n,in}$, input open.** The current $I_{n,in}$ injected into G must flow through $R_F$ to the output, so the current from the output to the gate is $-I_{n,in}$:

$$\frac{V_{out} - V_G}{R_F} = -I_{n,in} \quad\Longrightarrow\quad V_G = V_{out} + R_FI_{n,in}.$$

At the output, this current arrives and leaves through $M_1$:

$$
\begin{aligned}
g_mV_G &= I_{n,in}\\
g_m(V_{out} + R_FI_{n,in}) &= I_{n,in}\\
V_{out} &= \frac{1 - g_mR_F}{g_m}\,I_{n,in}.
\end{aligned}
$$

**Equate:**

$$
\begin{aligned}
\frac{1 - g_mR_F}{g_m}\,I_{n,in} &= V_{n,RF} - V_{n,M1}\\
I_{n,in} &= \frac{g_m(V_{n,RF} - V_{n,M1})}{1 - g_mR_F} = \frac{g_m(V_{n,M1} - V_{n,RF})}{g_mR_F - 1}.
\end{aligned}
$$

### Step 4 — Power spectral densities

$V_{n,M1}$ and $V_{n,RF}$ are independent, so in each mean square the cross term between them vanishes.

**Voltage:**

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{g_m^2R_F^2\,\overline{V_{n,M1}^2} + \overline{V_{n,RF}^2}}{(g_mR_F - 1)^2}
= \frac{g_m^2R_F^2\cdot\dfrac{4kT\gamma}{g_m} + 4kTR_F}{(g_mR_F - 1)^2}\\
&= \frac{4kT\gamma g_mR_F^2 + 4kTR_F}{(g_mR_F - 1)^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2},
\end{aligned}
$$

where the last form follows by dividing numerator and denominator by $R_F^2$.

**Current:**

$$\overline{I_{n,in}^2} = \frac{g_m^2\left(\overline{V_{n,M1}^2} + \overline{V_{n,RF}^2}\right)}{(g_mR_F - 1)^2} = \frac{g_m^2\left(\dfrac{4kT\gamma}{g_m} + 4kTR_F\right)}{(g_mR_F - 1)^2} = \frac{4kT\gamma g_m + 4kTR_Fg_m^2}{(g_mR_F - 1)^2}.$$

### Step 5 — Correlation between $V_{n,in}$ and $I_{n,in}$

Both expressions are built from the *same* two sources, so $V_{n,in}$ and $I_{n,in}$ are **correlated**. Their cross-spectrum (only the $|V_{n,M1}|^2$ and $|V_{n,RF}|^2$ products survive):

$$
\begin{aligned}
\overline{V_{n,in}I_{n,in}^*} &= \frac{g_m\left[g_mR_F\,\overline{V_{n,M1}^2} + \overline{V_{n,RF}^2}\right]}{(g_mR_F - 1)^2}
= \frac{g_m\left[g_mR_F\cdot\dfrac{4kT\gamma}{g_m} + 4kTR_F\right]}{(g_mR_F - 1)^2}\\
&= \frac{4kTg_mR_F\,(1 + \gamma)}{(g_mR_F - 1)^2}.
\end{aligned}
$$

For example, with $g_mR_F = 10$ and $\gamma = 2/3$ the correlation coefficient $\overline{V_{n,in}I_{n,in}^*}/\sqrt{\overline{V_{n,in}^2}\,\overline{I_{n,in}^2}}$ is $\sqrt{10}(1.667)/\sqrt{(7.667)(10.667)} \approx 0.58$: far from zero.

**Check with a source resistance.** Drive the noiseless amplifier (input impedance $1/g_m$) from $R_S$ with both input-referred sources. KCL at G gives $V_G = (V_{n,in} + R_SI_{n,in})/(1 + g_mR_S)$. Substituting Steps 2 and 3:

$$V_{n,in} + R_SI_{n,in} = \frac{g_m(R_F + R_S)V_{n,M1} - (1 + g_mR_S)V_{n,RF}}{g_mR_F - 1},$$

$$V_{out} = (1 - g_mR_F)V_G = V_{n,RF} - \frac{g_m(R_S + R_F)}{1 + g_mR_S}V_{n,M1},$$

which is exactly the output noise obtained by analysing the noisy circuit directly (with $g_mV_{n,M1}$ = $M_1$'s noise current). If the correlation were ignored, i.e. the powers $\overline{V_{n,in}^2} + R_S^2\overline{I_{n,in}^2}$ were added without the cross term $2R_S\overline{V_{n,in}I_{n,in}^*}$, the noise would be underestimated (by about 28 % in power for $g_mR_F = 10$, $g_mR_S = 1$).

### Result

$$V_{n,in} = \frac{g_mR_FV_{n,M1} - V_{n,RF}}{g_mR_F - 1}, \qquad I_{n,in} = \frac{g_m(V_{n,M1} - V_{n,RF})}{g_mR_F - 1}.$$

Both contain $V_{n,M1}$ and $V_{n,RF}$, so they are **strongly correlated**, not independent. Their PSDs:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_mR_F^2 + 4kTR_F}{(g_mR_F - 1)^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}, \qquad \overline{I_{n,in}^2} = \frac{4kT\gamma g_m + 4kTR_Fg_m^2}{(g_mR_F - 1)^2},$$

with cross-spectrum $\overline{V_{n,in}I_{n,in}^*} = 4kTg_mR_F(1 + \gamma)/(g_mR_F - 1)^2$.

**Common mistake.** Treating $V_{n,in}$ and $I_{n,in}$ as independent. They are two different linear combinations of the same two noise voltages; for a finite source resistance the cross term $2R_S\overline{V_{n,in}I_{n,in}^*}$ must be included, otherwise the output noise comes out wrong.

**Common mistake.** Dropping the $-1$ in $g_mR_F - 1$. It comes from the feedforward current through $R_F$ (the noiseless gain is $1 - g_mR_F$, not $-g_mR_F$), and it matters when $g_mR_F$ is not large.

**Common mistake.** Placing $V_{n,in}$ at the MOS gate inside the $R_F$ loop. That is a different two-port representation and gives a different pair ($V_{n,in} = V_{n,M1} - V_{n,RF}/(g_mR_F)$, $I_{n,in} = -V_{n,RF}/R_F$). With the placement specified here, between $R_S$ and the gate node, the expressions above are the correct ones. Also keep the signs consistent between the two results: flipping the sign of only one of them changes the cross-spectrum.
