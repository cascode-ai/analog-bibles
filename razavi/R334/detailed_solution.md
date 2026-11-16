# Detailed solution - R334

**Approach.** The source follower has two noise sources: the channel noise of $M_1$ and the thermal noise of $R_S$. Both are currents injected into the output (source) node. We compute the follower's voltage gain, find the output noise produced by each source, divide by the squared gain, and add the two uncorrelated contributions.

### Step 1 — Small-signal model and voltage gain

**Model in words.** The drain of $M_1$ is at $V_{DD}$, an ac ground. The source is the output node. With $\lambda = 0$ (no $r_O$) and no body effect (no $g_{mb}$), the transistor is a single voltage-controlled current source $g_mv_{gs} = g_m(v_{in} - v_{out})$ flowing from the drain (ac ground) into the output node. $R_S$ connects the output to ground. For noise we add the channel-noise current $I_{n1}$ of $M_1$ (drain to source, i.e. into the output node) and the Norton noise current $I_{nR}$ of $R_S$ (in parallel with $R_S$).

**Gain.** KCL at the output, with the noise sources off (current delivered by the transistor = current in $R_S$):

$$g_m(v_{in} - v_{out}) = \frac{v_{out}}{R_S}.$$

Collect terms:

$$
\begin{aligned}
g_mv_{in} &= v_{out}\left(g_m + \frac{1}{R_S}\right)\\
A_v = \frac{v_{out}}{v_{in}} &= \frac{g_m}{g_m + 1/R_S} = \frac{g_mR_S}{1 + g_mR_S} = g_m\left(R_S\parallel\frac{1}{g_m}\right).
\end{aligned}
$$

The last form shows the structure: the transistor delivers a current $g_mv_{in}$ into a total output resistance $R_S\parallel(1/g_m)$. The $1/g_m$ part is the follower's own output resistance, because a rise in $v_{out}$ reduces $v_{gs}$ and hence the transistor current.

### Step 2 — Output noise due to $M_1$

The channel noise has PSD $\overline{I_{n1}^2} = 4kT\gamma g_m$, where $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

KCL at the output with $v_{in} = 0$ and only $I_{n1}$ on:

$$
\begin{aligned}
g_m(0 - v_{out}) + I_{n1} &= \frac{v_{out}}{R_S}\\
I_{n1} &= v_{out}\left(g_m + \frac{1}{R_S}\right)\\
v_{out} &= I_{n1}\left(R_S\parallel\frac{1}{g_m}\right).
\end{aligned}
$$

So

$$\overline{V_{n,out}^2}\Big|_{M_1} = 4kT\gamma g_m\left(R_S\parallel\frac{1}{g_m}\right)^2 .$$

Divide by $A_v^2 = g_m^2\left(R_S\parallel\frac{1}{g_m}\right)^2$:

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{4kT\gamma g_m\left(R_S\parallel\frac1{g_m}\right)^2}{g_m^2\left(R_S\parallel\frac1{g_m}\right)^2} = \frac{4kT\gamma}{g_m}.$$

This was to be expected: the device current is $g_m v_{gs} + I_{n1} = g_m(v_{gs} + I_{n1}/g_m)$, so the noise current is exactly equivalent to a voltage $I_{n1}/g_m$ in series with the gate.

### Step 3 — Output noise due to $R_S$

The resistor noise has PSD $\overline{I_{nR}^2} = 4kT/R_S$. Let $I_{nR}$ flow from the output node to ground, in parallel with $R_S$. KCL at the output with $v_{in} = 0$:

$$
\begin{aligned}
g_m(0 - v_{out}) &= \frac{v_{out}}{R_S} + I_{nR}\\
-I_{nR} &= v_{out}\left(g_m + \frac{1}{R_S}\right)\\
v_{out} &= -I_{nR}\left(R_S\parallel\frac{1}{g_m}\right).
\end{aligned}
$$

The resistor's noise current does not flow only through $R_S$: it divides between $R_S$ and the follower's output resistance $1/g_m$. Squaring (the sign does not matter for a power):

$$\overline{V_{n,out}^2}\Big|_{R_S} = \frac{4kT}{R_S}\left(R_S\parallel\frac{1}{g_m}\right)^2 .$$

Divide by $A_v^2$:

$$
\begin{aligned}
\overline{V_{n,in}^2}\Big|_{R_S} &= \frac{\dfrac{4kT}{R_S}\left(R_S\parallel\frac1{g_m}\right)^2}{g_m^2\left(R_S\parallel\frac1{g_m}\right)^2} = \frac{4kT}{g_m^2R_S}.
\end{aligned}
$$

**A shortcut that shows why.** Rewrite the output KCL with both the signal and the resistor noise present:

$$g_m(v_{in} - v_{out}) - I_{nR} = \frac{v_{out}}{R_S}\quad\Longleftrightarrow\quad g_m\left(v_{in} - \frac{I_{nR}}{g_m} - v_{out}\right) = \frac{v_{out}}{R_S}.$$

Any current injected into the output node acts exactly like an input voltage equal to that current divided by $g_m$. So $I_{nR}$ refers to the input as $I_{nR}/g_m$, with PSD $(4kT/R_S)/g_m^2$.

### Step 4 — Total input-referred noise

The two sources are uncorrelated, so their powers add:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_S}\\
&= 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_S}\right).
\end{aligned}
$$

**Remarks.**

- This has the same form as for a common-source stage with a resistive load $R_D$, with $R_S$ in place of $R_D$. In both circuits the resistor is the output load and its noise current is converted to an input voltage by dividing by $g_m$.
- A larger $R_S$ reduces the resistor's contribution, because its noise current $\propto 1/R_S$ shrinks. When $g_mR_S \gg 1/\gamma$, the transistor term dominates.
- Unlike the common-source stage, the follower has a gain below one. Referring its output noise to the input divides by $A_v^2 < 1$, so the input-referred noise is even larger than the noise seen at the output, and the follower provides no gain that would make the noise of later stages less important. It buffers, but it does not help the noise of a signal chain.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_S}\right)$$

- $M_1$: $4kT\gamma/g_m$, its drain noise current referred to the gate.
- $R_S$: output noise $\dfrac{4kT}{R_S}\left(R_S\parallel\dfrac{1}{g_m}\right)^2$ divided by $A_v^2 = g_m^2\left(R_S\parallel\dfrac{1}{g_m}\right)^2$, giving $4kT/(g_m^2R_S)$.

**Common mistake.** Writing the resistor term as $4kTR_S$, as in a degenerated common-source stage. There, $R_S$ sits between the source and ground while the output is taken at the drain, so its noise voltage is in series with the input loop. Here the output is taken across $R_S$ itself, so $R_S$ is the load: its noise current is referred to the input by dividing by $g_m^2$.

**Common mistake.** Taking the gain as exactly 1 and claiming that the noise of $R_S$ appears "directly" at the output. The resistor's noise current divides between $R_S$ and $1/g_m$, and the gain $g_mR_S/(1+g_mR_S)$ must be used consistently for both signal and noise; then the factor $(R_S\parallel1/g_m)^2$ cancels and leaves $1/(g_m^2R_S)$.

**Common mistake.** Writing the transistor term as $4kT\gamma g_m$. That is the noise *current* PSD at the drain; referred to the input as a voltage it becomes $4kT\gamma g_m/g_m^2 = 4kT\gamma/g_m$.
