# Detailed solution - R330

**Approach.** Model the noise of each gate segment as a series voltage source. With no gate current, each source shifts the gates of *all* unit transistors beyond it by the same amount, so their drain currents add as amplitudes; different segments are independent and add as powers. Summing gives the total drain noise current, which is compared with that of a single lumped gate resistor.

### Step 1 — The model

Let $g_m$ be the transconductance of the whole transistor, so each of the $n$ unit transistors has

$$g_{m,u} = \frac{g_m}{n},$$

and each segment is

$$R_{G1} = R_{G2} = \dots = R_{Gn} = \frac{R_G}{n}.$$

Call the gate tap of unit $k$ node $g_k$. Segment $j$ carries a series noise voltage $V_j$ with

$$\overline{V_j^2} = 4kT\frac{R_G}{n},$$

and, being separate resistors, the $V_j$ are **mutually uncorrelated**: $\overline{V_iV_j} = 0$ for $i \ne j$.

G is driven by an ideal source, so it is an ac ground for noise; with the channel noise ignored, we compute the short-circuit drain noise current (D and S at ac ground). Each unit is then a transconductor $(g_m/n)\,v_{g_k}$ between D and S, controlled by its own tap voltage. The figure shows the case $n = 3$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Gate voltages produced by the segment noise sources

At low frequencies no gate current flows, so there is no $IR$ drop across any segment, and the voltage at each tap is the sum of the noise sources between G and that tap:

$$
\begin{aligned}
v_{g_1} &= V_1,\\
v_{g_2} &= V_1 + V_2,\\
v_{g_3} &= V_1 + V_2 + V_3,\\
&\ \ \vdots\\
v_{g_k} &= \sum_{j=1}^{k}V_j .
\end{aligned}
$$

So $V_j$ appears, with the same value, at the gates of units $j, j+1, \dots, n$: that is $(n - j + 1)$ unit transistors. Segment 1 (nearest G) moves all $n$ gates, while segment $n$ moves only the last.

### Step 3 — Total drain noise current

Summing the unit currents at the common drain:

$$I_D = \sum_{k=1}^{n}\frac{g_m}{n}\,v_{g_k} = \frac{g_m}{n}\sum_{k=1}^{n}\sum_{j=1}^{k}V_j .$$

Exchanging the order of summation, $V_j$ appears once for every $k$ from $j$ to $n$:

$$I_D = \frac{g_m}{n}\sum_{j=1}^{n}(n - j + 1)\,V_j .$$

The $(n - j + 1)$ unit currents caused by $V_j$ are copies of the same waveform, so they are **fully correlated** and add as amplitudes: the power due to segment $j$ goes as $(n-j+1)^2$, not $(n-j+1)$. On squaring and averaging, the cross terms $\overline{V_iV_j}$ with $i\ne j$ vanish:

$$
\begin{aligned}
\overline{I_{n,D}^2} &= \left(\frac{g_m}{n}\right)^2\sum_{j=1}^{n}(n - j + 1)^2\,\overline{V_j^2}\\
&= \frac{g_m^2}{n^2}\cdot\frac{4kTR_G}{n}\sum_{j=1}^{n}(n - j + 1)^2 .
\end{aligned}
$$

With $m = n - j + 1$, which runs from $n$ down to $1$, the sum of squares gives

$$\sum_{j=1}^{n}(n - j + 1)^2 = \sum_{m=1}^{n}m^2 = \frac{n(n+1)(2n+1)}{6},$$

so

$$
\begin{aligned}
\overline{I_{n,D}^2} &= \frac{4kTR_Gg_m^2}{n^3}\cdot\frac{n(n+1)(2n+1)}{6}\\
&= 4kTR_G\,g_m^2\,\frac{(n+1)(2n+1)}{6n^2}.
\end{aligned}
$$

### Step 4 — Equivalent lumped resistance

A single resistor $R_{eq}$ in series with the gate of the whole transistor puts its entire noise voltage, PSD $4kTR_{eq}$, on the gate (again no gate current), so

$$\overline{I_{n,D}^2}\Big|_{lumped} = g_m^2\cdot4kTR_{eq}.$$

Equating this with Step 3:

$$
\begin{aligned}
g_m^2\cdot4kTR_{eq} &= 4kTR_G\,g_m^2\,\frac{(n+1)(2n+1)}{6n^2}\\
R_{eq} &= R_G\,\frac{(n+1)(2n+1)}{6n^2} = R_G\,\frac{2n^2 + 3n + 1}{6n^2}\\
&= R_G\left(\frac13 + \frac{1}{2n} + \frac{1}{6n^2}\right).
\end{aligned}
$$

| $n$ | $R_{eq}/R_G$ |
|---|---|
| 1 | $2\cdot3/6 = 1$ (a single transistor sees all of $R_G$, as it must) |
| 2 | $3\cdot5/24 = 0.625$ |
| 10 | $11\cdot21/600 = 0.385$ |
| 100 | $101\cdot201/60000 = 0.338$ |
| $\infty$ | $1/3$ |

A truly distributed gate is the limit $n \to \infty$, where the terms $1/(2n)$ and $1/(6n^2)$ vanish:

$$R_{eq} = \lim_{n\to\infty}R_G\left(\frac13 + \frac{1}{2n} + \frac{1}{6n^2}\right) = \frac{R_G}{3}. \qquad\blacksquare$$

### Step 5 — Continuous check

Let $x \in [0, 1]$ be the normalized position along the gate, measured from G. A slice $dx$ has resistance $R_G\,dx$ and a noise voltage $dV$ with PSD $4kTR_G\,dx$. It shifts the gate of the fraction $(1 - x)$ of the device beyond it, whose transconductance is $g_m(1 - x)$, producing a drain current $g_m(1 - x)\,dV$. Slices are uncorrelated, so

$$
\begin{aligned}
\overline{I_{n,D}^2} &= \int_0^1 g_m^2(1 - x)^2\,4kTR_G\,dx\\
&= 4kTR_Gg_m^2\left[-\frac{(1 - x)^3}{3}\right]_0^1\\
&= 4kTR_Gg_m^2\cdot\frac13 .
\end{aligned}
$$

The weighting is quadratic, $(1-x)^2$, because the affected current is proportional to $(1-x)$ and noise power goes as current squared; its average is $1/3$, not the $1/2$ of $(1-x)$.

### Result

With $n$ equal segments the total drain noise current is

$$\overline{I_{n,D}^2} = 4kTR_G\,g_m^2\,\frac{(n+1)(2n+1)}{6n^2}\ \xrightarrow{\ n\to\infty\ }\ 4kT\,\frac{R_G}{3}\,g_m^2 ,$$

which is exactly the drain noise of the whole transistor with a single lumped resistor $R_G/3$ in series with its gate. Hence, for gate-noise calculations, the distributed gate resistance can be replaced by **$R_{eq} = R_G/3$**.

**Common mistake.** Adding the contributions of the downstream unit transistors as powers, i.e. using $(n - j + 1)$ instead of $(n - j + 1)^2$. They are all driven by the *same* $V_j$, so their currents must be added as amplitudes before squaring; treating them as uncorrelated gives $\overline{I_{n,D}^2} = 4kTR_Gg_m^2(n+1)/(2n^2)$, which wrongly tends to zero as $n \to \infty$.

**Common mistake.** Concluding $R_{eq} = R_G/2$ because "on average a segment affects half of the device". The drain noise *power* depends on the square of the affected fraction, whose average is $1/3$.
