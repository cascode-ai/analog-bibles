# Detailed solution - R377

**Approach.** Drive the noiseless amplifier, with $V_{n,in}$ and $I_{n,in}$ at the gate node, from $R_S$ (signal source zeroed) and solve for $V_{out}$ by KCL, treating the input-referred sources as signed signals. Then substitute their expressions in $V_{n,M1}$ and $V_{n,RF}$, square, and compare with a direct analysis of the noisy circuit.

### Step 1 — The noiseless amplifier

The ideal $I_1$ carries no small-signal current and $\lambda = 0$, so the current drawn by $M_1$ must arrive through $R_F$:

$$g_mV_G + \frac{V_{out} - V_G}{R_F} = 0 \quad\Longrightarrow\quad V_{out} = (1 - g_mR_F)\,V_G .$$

The current flowing from G into $R_F$ is therefore

$$\frac{V_G - V_{out}}{R_F} = g_mV_G ,$$

so the amplifier loads the gate node like a resistance $1/g_m$.

### Step 2 — Superposition with the input-referred sources

Call the node between $R_S$ and $V_{n,in}$ A. $R_S$ connects ground to A, $V_{n,in}$ sits between A and G ($V_A = V_G - V_{n,in}$), $I_{n,in}$ is injected from ground into G, and the amplifier draws $g_mV_G$ from G.

<!-- diagram: diagram-01.cir -->

**KCL at G.** The current arriving through $R_S$, $(0 - V_A)/R_S = -(V_G - V_{n,in})/R_S$, plus $I_{n,in}$ equals $g_mV_G$:

$$-\frac{V_G - V_{n,in}}{R_S} + I_{n,in} = g_mV_G .$$

$$
\begin{aligned}
-V_G + V_{n,in} + R_SI_{n,in} &= g_mR_SV_G\\
V_G\,(1 + g_mR_S) &= V_{n,in} + R_SI_{n,in}\\
V_G &= \frac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S}.
\end{aligned}
$$

**Output:**

$$V_{n,out} = (1 - g_mR_F)\,\frac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S}.$$

The two sources combine as the *voltage* $V_{n,in} + R_SI_{n,in}$, and only then is the result squared.

### Step 3 — Substituting the input-referred sources

With the given $V_{n,in}$ and $I_{n,in}$:

$$
\begin{aligned}
V_{n,in} + R_SI_{n,in} &= \frac{g_mR_FV_{n,M1} - V_{n,RF} + g_mR_SV_{n,M1} - g_mR_SV_{n,RF}}{g_mR_F - 1}\\
&= \frac{g_m(R_F + R_S)\,V_{n,M1} - (1 + g_mR_S)\,V_{n,RF}}{g_mR_F - 1}.
\end{aligned}
$$

Multiplying by $(1 - g_mR_F)/(1 + g_mR_S)$, with $(1 - g_mR_F)/(g_mR_F - 1) = -1$:

$$
\begin{aligned}
V_{n,out} &= -\frac{g_m(R_F + R_S)\,V_{n,M1} - (1 + g_mR_S)\,V_{n,RF}}{1 + g_mR_S}\\
&= V_{n,RF} - \frac{g_m(R_F + R_S)}{1 + g_mR_S}\,V_{n,M1}.
\end{aligned}
$$

### Step 4 — Output noise PSD

$V_{n,RF}$ and $V_{n,M1}$ are independent physical sources, so now (and only now) the powers add. With $\overline{V_{n,RF}^2} = 4kTR_F$ and $g_m^2\overline{V_{n,M1}^2} = \overline{I_{n,M1}^2} = 4kT\gamma g_m$:

$$
\begin{aligned}
\overline{V_{n,out}^2} &= \overline{V_{n,RF}^2} + \frac{(R_F + R_S)^2}{(1 + g_mR_S)^2}\,g_m^2\overline{V_{n,M1}^2}\\
&= 4kTR_F + 4kT\gamma g_m\,\frac{(R_F + R_S)^2}{(1 + g_mR_S)^2}.
\end{aligned}
$$

### Step 5 — Direct analysis of the noisy circuit

With the signal source zeroed, let $I_F = (V_{out} - V_G - V_{n,RF})/R_F$ be the current in $R_F$ from the output to the gate. KCL at the output, and the gate node (no gate current, so $I_F$ flows through $R_S$):

$$g_m(V_G + V_{n,M1}) + I_F = 0, \qquad V_G = R_SI_F .$$

$$
\begin{aligned}
g_mR_SI_F + g_mV_{n,M1} + I_F &= 0\\
I_F &= -\frac{g_mV_{n,M1}}{1 + g_mR_S}.
\end{aligned}
$$

KVL along $R_F$:

$$V_{out} = V_G + R_FI_F + V_{n,RF} = (R_S + R_F)\,I_F + V_{n,RF} = V_{n,RF} - \frac{g_m(R_S + R_F)}{1 + g_mR_S}\,V_{n,M1}.$$

This is **identical** to Step 3, term by term, so the PSD is identical too. With $I_{n,M1} = g_mV_{n,M1}$: $R_F$'s noise appears with unity gain and $M_1$'s noise current sees the closed-loop output impedance $(R_S + R_F)/(1 + g_mR_S)$.

### Step 6 — Why the correlation matters

$V_{n,in}$ and $I_{n,in}$ are built from the same two sources. Squaring them separately and adding,

$$\overline{V_{n,out}^2} \stackrel{?}{=} \frac{(1 - g_mR_F)^2}{(1 + g_mR_S)^2}\left(\overline{V_{n,in}^2} + R_S^2\overline{I_{n,in}^2}\right),$$

drops the cross term $2R_S\,\overline{V_{n,in}I_{n,in}^*}$, with $\overline{V_{n,in}I_{n,in}^*} = 4kTg_mR_F(1 + \gamma)/(g_mR_F - 1)^2 > 0$. For $g_mR_F = 10$, $g_mR_S = 1$, $\gamma = 2/3$, in units of $4kT/g_m$: the correct result is $10 + \tfrac23\cdot\tfrac{121}{4} = 30.2$, whereas the uncorrelated sum gives $20.25\times(0.947 + 0.132) = 21.8$, about 28 % too low. Superposing before squaring, as in Step 2, keeps the correlation automatically.

### Result

$$V_{n,out} = (1 - g_mR_F)\,\frac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S} = V_{n,RF} - \frac{g_m(R_F + R_S)}{1 + g_mR_S}\,V_{n,M1},$$

$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_m\,\frac{(R_F + R_S)^2}{(1 + g_mR_S)^2}.$$

**Yes**, this is exactly the output noise obtained by analysing the noisy circuit directly, provided the correlated input-referred sources are superposed as signals rather than as powers.

**Common mistake.** Adding $\overline{V_{n,in}^2}$ and $R_S^2\overline{I_{n,in}^2}$ as if uncorrelated. The cross term is positive here, so ignoring it underestimates the noise and seems (wrongly) to show that the input-referred model disagrees with the direct analysis.

**Common mistake.** Forgetting that the amplifier loads the gate node: it draws $g_mV_G$, so $V_G = (V_{n,in} + R_SI_{n,in})/(1 + g_mR_S)$, not $V_{n,in} + R_SI_{n,in}$.

**Common mistake.** Using the gain $-g_mR_F$ instead of $1 - g_mR_F$. Dropping the feedforward "1" breaks the exact cancellation $(1 - g_mR_F)/(g_mR_F - 1) = -1$ in Step 3.
