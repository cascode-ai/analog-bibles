# Detailed solution - R334

**Approach.** The channel noise of $M_1$ and the noise of $R_S$ are both currents at the output (source) node. Find the follower's gain and the output noise of each source, divide by the squared gain, and add the two uncorrelated contributions.

### Step 1 — Small-signal model and voltage gain

With the drain at ac ground, $\lambda = 0$ and no body effect, $M_1$ is a single current source $g_m(v_{in} - v_{out})$ from the drain into the output node, and $R_S$ connects the output to ground. The noise sources are the channel-noise current $I_{n1}$ (drain to source, i.e. into the output node) and the Norton current $I_{nR}$ in parallel with $R_S$.

With the noise sources off, KCL at the output gives

$$g_m(v_{in} - v_{out}) = \frac{v_{out}}{R_S},$$

$$
\begin{aligned}
g_mv_{in} &= v_{out}\left(g_m + \frac{1}{R_S}\right)\\
A_v = \frac{v_{out}}{v_{in}} &= \frac{g_m}{g_m + 1/R_S} = \frac{g_mR_S}{1 + g_mR_S} = g_m\left(R_S\parallel\frac{1}{g_m}\right).
\end{aligned}
$$

The transistor delivers $g_mv_{in}$ into the total output resistance $R_S\parallel(1/g_m)$, where $1/g_m$ is the follower's own output resistance.

### Step 2 — Output noise due to $M_1$

With $\overline{I_{n1}^2} = 4kT\gamma g_m$, $v_{in} = 0$ and only $I_{n1}$ on, KCL at the output gives

$$
\begin{aligned}
g_m(0 - v_{out}) + I_{n1} &= \frac{v_{out}}{R_S}\\
I_{n1} &= v_{out}\left(g_m + \frac{1}{R_S}\right)\\
v_{out} &= I_{n1}\left(R_S\parallel\frac{1}{g_m}\right),
\end{aligned}
$$

so

$$\overline{V_{n,out}^2}\Big|_{M_1} = 4kT\gamma g_m\left(R_S\parallel\frac{1}{g_m}\right)^2 .$$

Dividing by $A_v^2 = g_m^2\left(R_S\parallel\frac{1}{g_m}\right)^2$:

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{4kT\gamma g_m\left(R_S\parallel\frac1{g_m}\right)^2}{g_m^2\left(R_S\parallel\frac1{g_m}\right)^2} = \frac{4kT\gamma}{g_m},$$

as expected, since the device current $g_m(v_{gs} + I_{n1}/g_m)$ makes $I_{n1}$ equivalent to a gate voltage $I_{n1}/g_m$.

### Step 3 — Output noise due to $R_S$

Let $I_{nR}$, $\overline{I_{nR}^2} = 4kT/R_S$, flow from the output node to ground. KCL at the output with $v_{in} = 0$:

$$
\begin{aligned}
g_m(0 - v_{out}) &= \frac{v_{out}}{R_S} + I_{nR}\\
-I_{nR} &= v_{out}\left(g_m + \frac{1}{R_S}\right)\\
v_{out} &= -I_{nR}\left(R_S\parallel\frac{1}{g_m}\right).
\end{aligned}
$$

The resistor's noise current divides between $R_S$ and the follower's output resistance $1/g_m$. Squaring (the sign does not matter for a power):

$$\overline{V_{n,out}^2}\Big|_{R_S} = \frac{4kT}{R_S}\left(R_S\parallel\frac{1}{g_m}\right)^2 ,$$

$$\overline{V_{n,in}^2}\Big|_{R_S} = \frac{\dfrac{4kT}{R_S}\left(R_S\parallel\frac1{g_m}\right)^2}{g_m^2\left(R_S\parallel\frac1{g_m}\right)^2} = \frac{4kT}{g_m^2R_S}.$$

The output KCL with both signal and resistor noise shows why:

$$g_m(v_{in} - v_{out}) - I_{nR} = \frac{v_{out}}{R_S}\quad\Longleftrightarrow\quad g_m\left(v_{in} - \frac{I_{nR}}{g_m} - v_{out}\right) = \frac{v_{out}}{R_S},$$

so a current injected into the output node acts exactly like an input voltage equal to that current divided by $g_m$, here with PSD $(4kT/R_S)/g_m^2$.

### Step 4 — Total input-referred noise

The two sources are uncorrelated, so their powers add:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_S}\\
&= 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_S}\right).
\end{aligned}
$$

This has the same form as a common-source stage with load $R_D$, with $R_S$ in its place: in both, the resistor is the output load. A larger $R_S$ shrinks its contribution, and the transistor term dominates once $g_mR_S \gg 1/\gamma$. Since the follower's gain is below one, the input-referred noise even exceeds the output noise.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_S}\right)$$

- $M_1$: $4kT\gamma/g_m$, its drain noise current referred to the gate.
- $R_S$: output noise $\dfrac{4kT}{R_S}\left(R_S\parallel\dfrac{1}{g_m}\right)^2$ divided by $A_v^2 = g_m^2\left(R_S\parallel\dfrac{1}{g_m}\right)^2$, giving $4kT/(g_m^2R_S)$.

**Common mistake.** Writing the resistor term as $4kTR_S$, as in a degenerated common-source stage. There the output is taken at the drain and $R_S$'s noise voltage sits in the input loop; here the output is taken across $R_S$, so $R_S$ is the load and its noise current is divided by $g_m^2$.

**Common mistake.** Taking the gain as exactly 1 and letting the noise of $R_S$ appear "directly" at the output. Its noise current divides between $R_S$ and $1/g_m$, and with the gain $g_mR_S/(1+g_mR_S)$ used for both signal and noise, the factor $(R_S\parallel1/g_m)^2$ cancels and leaves $1/(g_m^2R_S)$.

**Common mistake.** Writing the transistor term as $4kT\gamma g_m$, the drain noise *current* PSD; referred to the input it is $4kT\gamma g_m/g_m^2 = 4kT\gamma/g_m$.
