# Detailed solution - R330

**Approach.** Model the thermal noise of each gate-resistance segment as a series voltage source. Because no gate current flows at low frequencies, each such source shifts the gate voltage of *every* unit transistor beyond it by the same amount, so their drain currents add coherently (as amplitudes). Different segments are independent, so their contributions add as powers. Summing gives the total drain noise current, which we compare with that of a single lumped gate resistor.

### Step 1 — Setting up the model

Let the transistor have total transconductance $g_m$. It is split into $n$ identical unit transistors that share the drain D and the source S, so each unit has transconductance

$$g_{m,u} = \frac{g_m}{n}.$$

The gate line consists of $n$ equal segments,

$$R_{G1} = R_{G2} = \dots = R_{Gn} = \frac{R_G}{n},$$

and the gate of unit $k$ (call this node $g_k$) is tapped right after segment $R_{Gk}$.

**Noise of each segment.** Segment $j$ is a resistor $R_G/n$ at temperature $T$. Its thermal noise is a series voltage source $V_j$ with PSD

$$\overline{V_j^2} = 4kT\frac{R_G}{n},$$

where $k$ is Boltzmann's constant. The $n$ segments are separate pieces of material, so the $V_j$ are **mutually uncorrelated**: $\overline{V_iV_j} = 0$ for $i \ne j$.

**Conditions for the calculation.** The channel noise is ignored, as instructed. The gate terminal G is driven by an ideal voltage source, so for noise it is at AC ground. We compute the **short-circuit drain noise current**: D held at AC ground, S grounded. Then each unit transistor is simply a transconductor whose drain current is $(g_m/n)\,v_{g_k}$, where $v_{g_k}$ is the small-signal voltage at its gate tap.

**Small-signal model in words.** The gate line is a chain: G, then $R_G/n$ in series with $V_1$, node $g_1$, then $R_G/n$ in series with $V_2$, node $g_2$, and so on up to node $g_n$. At every node $g_k$ a voltage-controlled current source $(g_m/n)v_{g_k}$ is connected between D and S. The figure below shows the case $n = 3$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Gate voltages produced by the segment noise sources

At low frequencies the gate draws no current (the gate capacitances are open circuits). Hence **no current flows through any segment**, and there is no $IR$ drop across any $R_{Gj}$. Walking along the line from G (at AC ground), the voltage at each tap is just the sum of the noise sources passed on the way (KVL along the gate line):

$$
\begin{aligned}
v_{g_1} &= V_1,\\
v_{g_2} &= V_1 + V_2,\\
v_{g_3} &= V_1 + V_2 + V_3,\\
&\ \ \vdots\\
v_{g_k} &= \sum_{j=1}^{k}V_j .
\end{aligned}
$$

**Key observation.** The source $V_j$ appears, with the same value, at every tap $g_k$ with $k \ge j$, i.e. at the gates of units $j, j+1, \dots, n$. That is $(n - j + 1)$ unit transistors. Segment 1 (nearest to G) moves all $n$ gates, while segment $n$ (at the far end) moves only the last gate.

### Step 3 — Total drain noise current

The drain current is the sum of the unit currents (KCL at the common drain D):

$$I_D = \sum_{k=1}^{n}\frac{g_m}{n}\,v_{g_k} = \frac{g_m}{n}\sum_{k=1}^{n}\sum_{j=1}^{k}V_j .$$

Exchange the order of summation: $V_j$ appears once for every $k$ from $j$ to $n$, i.e. $(n - j + 1)$ times:

$$I_D = \frac{g_m}{n}\sum_{j=1}^{n}(n - j + 1)\,V_j .$$

**Correlated parts add as amplitudes.** The $(n - j + 1)$ unit currents caused by $V_j$ are copies of the same waveform, so they are **fully correlated** and add as amplitudes: the current due to segment $j$ is $(n-j+1)(g_m/n)V_j$, and its power is proportional to $(n-j+1)^2$, not to $(n-j+1)$.

**Uncorrelated parts add as powers.** When we square $I_D$ and average, the cross terms $\overline{V_iV_j}$ with $i\ne j$ vanish:

$$
\begin{aligned}
\overline{I_{n,D}^2} &= \left(\frac{g_m}{n}\right)^2\sum_{j=1}^{n}(n - j + 1)^2\,\overline{V_j^2}\\
&= \frac{g_m^2}{n^2}\cdot\frac{4kTR_G}{n}\sum_{j=1}^{n}(n - j + 1)^2 .
\end{aligned}
$$

Substitute $m = n - j + 1$, which runs from $n$ (for $j = 1$) down to $1$ (for $j = n$):

$$\sum_{j=1}^{n}(n - j + 1)^2 = \sum_{m=1}^{n}m^2 = \frac{n(n+1)(2n+1)}{6},$$

using the standard formula for the sum of squares. Therefore

$$
\begin{aligned}
\overline{I_{n,D}^2} &= \frac{4kTR_Gg_m^2}{n^3}\cdot\frac{n(n+1)(2n+1)}{6}\\
&= 4kTR_G\,g_m^2\,\frac{(n+1)(2n+1)}{6n^2}.
\end{aligned}
$$

### Step 4 — Equivalent lumped resistance

Now consider the whole transistor (transconductance $g_m$) with a single lumped resistor $R_{eq}$ in series with its gate. Its noise voltage, PSD $4kTR_{eq}$, appears entirely at the gate (again no gate current), so the drain noise current is

$$\overline{I_{n,D}^2}\Big|_{lumped} = g_m^2\cdot4kTR_{eq}.$$

Equating this with the result of Step 3:

$$
\begin{aligned}
g_m^2\cdot4kTR_{eq} &= 4kTR_G\,g_m^2\,\frac{(n+1)(2n+1)}{6n^2}\\
R_{eq} &= R_G\,\frac{(n+1)(2n+1)}{6n^2} = R_G\,\frac{2n^2 + 3n + 1}{6n^2}\\
&= R_G\left(\frac13 + \frac{1}{2n} + \frac{1}{6n^2}\right).
\end{aligned}
$$

Sanity checks and values:

| $n$ | $R_{eq}/R_G$ |
|---|---|
| 1 | $2\cdot3/6 = 1$ (a single transistor sees all of $R_G$, as it must) |
| 2 | $3\cdot5/24 = 0.625$ |
| 10 | $11\cdot21/600 = 0.385$ |
| 100 | $101\cdot201/60000 = 0.338$ |
| $\infty$ | $1/3$ |

A truly distributed gate corresponds to $n \to \infty$, where the terms $1/(2n)$ and $1/(6n^2)$ vanish:

$$R_{eq} = \lim_{n\to\infty}R_G\left(\frac13 + \frac{1}{2n} + \frac{1}{6n^2}\right) = \frac{R_G}{3}. \qquad\blacksquare$$

### Step 5 — Continuous check and intuition

The same result follows directly from a continuous gate. Let $x \in [0, 1]$ be the normalized position along the gate, measured from the driven end G. A slice $dx$ has resistance $R_G\,dx$ and a noise voltage $dV$ with PSD $4kTR_G\,dx$. That voltage shifts the gate of the whole portion of the device beyond $x$, a fraction $(1 - x)$ of the width, whose transconductance is $g_m(1 - x)$. So the slice produces a drain current $g_m(1 - x)\,dV$. Different slices are uncorrelated, so their powers add:

$$
\begin{aligned}
\overline{I_{n,D}^2} &= \int_0^1 g_m^2(1 - x)^2\,4kTR_G\,dx\\
&= 4kTR_Gg_m^2\left[-\frac{(1 - x)^3}{3}\right]_0^1\\
&= 4kTR_Gg_m^2\cdot\frac13 .
\end{aligned}
$$

**Intuition.** A segment near the driven end is "seen" by almost the whole transistor, whereas a segment near the far end affects only a sliver of it. The weighting is quadratic, $(1-x)^2$, because the affected current is proportional to $(1-x)$ and noise power goes as current squared. The average of $(1-x)^2$ over the gate is $1/3$, which is why the effective resistance is $R_G/3$ and not $R_G/2$ (the average of $(1-x)$).

### Result

With $n$ equal segments the total drain noise current is

$$\overline{I_{n,D}^2} = 4kTR_G\,g_m^2\,\frac{(n+1)(2n+1)}{6n^2}\ \xrightarrow{\ n\to\infty\ }\ 4kT\,\frac{R_G}{3}\,g_m^2 ,$$

which is exactly the drain noise of the whole transistor with a single lumped resistor $R_G/3$ in series with its gate. Hence, for gate-noise calculations, the distributed gate resistance can be replaced by **$R_{eq} = R_G/3$**.

**Common mistake.** Adding the contributions of the downstream unit transistors as powers, i.e. using $(n - j + 1)$ instead of $(n - j + 1)^2$. Those units are all driven by the *same* noise voltage $V_j$, so their currents are fully correlated and must be added as amplitudes before squaring. Treating them as uncorrelated gives $\overline{I_{n,D}^2} = 4kTR_Gg_m^2(n+1)/(2n^2)$, which wrongly tends to zero as $n \to \infty$.

**Common mistake.** Concluding $R_{eq} = R_G/2$ from the idea that "on average a segment affects half of the device". The drain noise *power* depends on the square of the affected fraction, and the average of $(1-x)^2$ is $1/3$, not $1/2$.

**Common mistake.** Including an $IR$ drop along the gate, or the channel noise. At low frequencies the gate current is zero, so each tap voltage is just the sum of the upstream noise sources; and the problem asks for the gate-resistance noise only, so the channel noise $4kT\gamma g_m$ must not be added.
