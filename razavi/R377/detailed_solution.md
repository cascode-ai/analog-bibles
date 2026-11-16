# Detailed solution - R377

**Approach.** Replace the noisy amplifier by its noiseless version with the input-referred sources $V_{n,in}$ and $I_{n,in}$ at the gate node, drive it from $R_S$ (signal source set to zero), and solve for $V_{out}$ by KCL, treating $V_{n,in}$ and $I_{n,in}$ as signed signals. Then substitute their expressions in terms of $V_{n,M1}$ and $V_{n,RF}$, square, and compare with a direct analysis of the noisy circuit.

### Step 1 — The noiseless amplifier

Reading the figure: $M_1$ (source grounded, drain = $V_{out}$) is loaded by the ideal current source $I_1$; $R_F$ connects the output to the gate node G; the source drives G through $R_S$.

In the noiseless amplifier, KCL at the output says that the current drawn by $M_1$ must arrive through $R_F$ (the ideal $I_1$ carries no small-signal current and $\lambda = 0$):

$$g_mV_G + \frac{V_{out} - V_G}{R_F} = 0 \quad\Longrightarrow\quad V_{out} = (1 - g_mR_F)\,V_G .$$

The same equation says that the current flowing from G into $R_F$ (toward the output) is

$$\frac{V_G - V_{out}}{R_F} = g_mV_G ,$$

so the amplifier loads the gate node like a resistance $1/g_m$.

### Step 2 — Superposition with the input-referred sources

**Model in words.** The signal source is zero, so the far end of $R_S$ is grounded. Call the node between $R_S$ and $V_{n,in}$ "A". Then:

- $R_S$ connects ground to A;
- $V_{n,in}$ sits between A and G, so $V_G = V_A + V_{n,in}$, i.e. $V_A = V_G - V_{n,in}$;
- $I_{n,in}$ is injected from ground into G;
- the noiseless amplifier draws $g_mV_G$ from G (Step 1).

Here $g_m$ is the transconductance of $M_1$.

<!-- diagram: diagram-01.cir -->

**KCL at G.** The current coming from ground through $R_S$ (and through the series source $V_{n,in}$) is $(0 - V_A)/R_S = -(V_G - V_{n,in})/R_S$. Adding $I_{n,in}$, the total must equal the current $g_mV_G$ that leaves into the amplifier:

$$-\frac{V_G - V_{n,in}}{R_S} + I_{n,in} = g_mV_G .$$

Solve for $V_G$. Multiply by $R_S$:

$$
\begin{aligned}
-V_G + V_{n,in} + R_SI_{n,in} &= g_mR_SV_G\\
V_G\,(1 + g_mR_S) &= V_{n,in} + R_SI_{n,in}\\
V_G &= \frac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S}.
\end{aligned}
$$

**Output:**

$$V_{n,out} = (1 - g_mR_F)\,\frac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S}.$$

The two input-referred sources combine as the *voltage* $V_{n,in} + R_SI_{n,in}$ (the current source acting through $R_S$), and only then is the result squared.

### Step 3 — Substituting the input-referred sources

Use

$$V_{n,in} = \frac{g_mR_FV_{n,M1} - V_{n,RF}}{g_mR_F - 1}, \qquad I_{n,in} = \frac{g_m(V_{n,M1} - V_{n,RF})}{g_mR_F - 1}.$$

First the combination:

$$
\begin{aligned}
V_{n,in} + R_SI_{n,in} &= \frac{g_mR_FV_{n,M1} - V_{n,RF} + g_mR_SV_{n,M1} - g_mR_SV_{n,RF}}{g_mR_F - 1}\\
&= \frac{g_m(R_F + R_S)\,V_{n,M1} - (1 + g_mR_S)\,V_{n,RF}}{g_mR_F - 1}.
\end{aligned}
$$

Now multiply by $(1 - g_mR_F)/(1 + g_mR_S)$. Since $(1 - g_mR_F)/(g_mR_F - 1) = -1$:

$$
\begin{aligned}
V_{n,out} &= -\frac{g_m(R_F + R_S)\,V_{n,M1} - (1 + g_mR_S)\,V_{n,RF}}{1 + g_mR_S}\\
&= V_{n,RF} - \frac{g_m(R_F + R_S)}{1 + g_mR_S}\,V_{n,M1}.
\end{aligned}
$$

### Step 4 — Output noise PSD

$V_{n,RF}$ and $V_{n,M1}$ are independent physical sources, so now (and only now) the powers add. Using $\overline{V_{n,RF}^2} = 4kTR_F$ and $g_m^2\overline{V_{n,M1}^2} = \overline{I_{n,M1}^2} = 4kT\gamma g_m$ ($k$ = Boltzmann's constant, $T$ = temperature, $\gamma$ = channel-noise coefficient):

$$
\begin{aligned}
\overline{V_{n,out}^2} &= \overline{V_{n,RF}^2} + \frac{(R_F + R_S)^2}{(1 + g_mR_S)^2}\,g_m^2\overline{V_{n,M1}^2}\\
&= 4kTR_F + 4kT\gamma g_m\,\frac{(R_F + R_S)^2}{(1 + g_mR_S)^2}.
\end{aligned}
$$

### Step 5 — Direct analysis of the noisy circuit

Now analyse the original circuit with its own noise sources and the signal source set to zero. Let $I_F = (V_{out} - V_G - V_{n,RF})/R_F$ be the current in $R_F$ from the output to the gate.

**KCL at the output** ($M_1$'s drain current is $g_m(V_G + V_{n,M1})$; nothing else carries current):

$$g_m(V_G + V_{n,M1}) + I_F = 0 .$$

**Gate node.** The gate draws no current, so $I_F$ flows through $R_S$ to ground: $V_G = R_SI_F$.

**Solve:**

$$
\begin{aligned}
g_mR_SI_F + g_mV_{n,M1} + I_F &= 0\\
I_F &= -\frac{g_mV_{n,M1}}{1 + g_mR_S}.
\end{aligned}
$$

**KVL along $R_F$:**

$$V_{out} = V_G + R_FI_F + V_{n,RF} = (R_S + R_F)\,I_F + V_{n,RF} = V_{n,RF} - \frac{g_m(R_S + R_F)}{1 + g_mR_S}\,V_{n,M1}.$$

This is **identical** to Step 3, term by term, so the PSD is also identical. With $I_{n,M1} = g_mV_{n,M1}$ it reads $V_{out} = V_{n,RF} - (R_S + R_F)I_{n,M1}/(1 + g_mR_S)$: $R_F$'s noise appears with unity gain and $M_1$'s noise current sees the closed-loop output impedance.

### Step 6 — Why the correlation matters

$V_{n,in}$ and $I_{n,in}$ are built from the same two sources, so they are correlated. Had we squared them separately and added the powers,

$$\overline{V_{n,out}^2} \stackrel{?}{=} \frac{(1 - g_mR_F)^2}{(1 + g_mR_S)^2}\left(\overline{V_{n,in}^2} + R_S^2\overline{I_{n,in}^2}\right),$$

we would have dropped the cross term $2R_S\,\overline{V_{n,in}I_{n,in}^*}$, with $\overline{V_{n,in}I_{n,in}^*} = 4kTg_mR_F(1 + \gamma)/(g_mR_F - 1)^2 > 0$. Numerical example ($g_mR_F = 10$, $g_mR_S = 1$, $\gamma = 2/3$, in units of $4kT/g_m$): the correct result is $10 + \tfrac23\cdot\tfrac{121}{4} = 30.2$, whereas the uncorrelated sum gives $20.25\times(0.947 + 0.132) = 21.8$, about 28 % too low. Superposing voltages and currents *before* squaring, as in Step 2, keeps the correlation automatically.

### Result

$$V_{n,out} = (1 - g_mR_F)\,\frac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S} = V_{n,RF} - \frac{g_m(R_F + R_S)}{1 + g_mR_S}\,V_{n,M1},$$

$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_m\,\frac{(R_F + R_S)^2}{(1 + g_mR_S)^2}.$$

**Yes**, this is exactly the output noise obtained by analysing the noisy circuit directly, provided the correlated input-referred sources are superposed as signals rather than as powers.

**Common mistake.** Adding $\overline{V_{n,in}^2}$ and $R_S^2\overline{I_{n,in}^2}$ as if they were uncorrelated. Both contain $V_{n,M1}$ and $V_{n,RF}$; the cross term is positive here, so ignoring it underestimates the noise and seems to show (wrongly) that the input-referred model disagrees with the direct analysis.

**Common mistake.** Forgetting that the amplifier itself loads the gate node. The noiseless amplifier draws $g_mV_G$ from G, so $V_G = (V_{n,in} + R_SI_{n,in})/(1 + g_mR_S)$, not simply $V_{n,in} + R_SI_{n,in}$.

**Common mistake.** Using the gain $-g_mR_F$ instead of $1 - g_mR_F$. The feedforward current through $R_F$ adds the "1"; dropping it breaks the exact cancellation $(1 - g_mR_F)/(g_mR_F - 1) = -1$ in Step 3.
