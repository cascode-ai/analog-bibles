# Detailed solution - R264

**Approach.** Node X holds only $C_1$, the diode-connected $M_2$ and the gate of $M_1$, and there is no current source: $C_1$ discharges through $M_2$, whose current follows the square law in $V_X$. Solve that nonlinear differential equation exactly. $M_1$ has the same gate–source voltage as $M_2$, so it mirrors the decaying discharge current into $R_1$, which gives $V_Y(t)$.

### Step 1 — The trivial case $V_0 \le V_{TH}$

If $V_0 \le V_{TH}$, both transistors are off from the start (square law, no subthreshold current), so nothing discharges $C_1$:

$$V_X(t) = V_0, \qquad V_Y(t) = V_{DD} \quad\text{(no current in } R_1).$$

From here on assume $V_0 > V_{TH}$.

### Step 2 — The discharge equation for $V_X$

The only current leaving the capacitor is $M_2$'s drain current, and the diode-connected $M_2$ is saturated whenever it conducts ($\lambda = 0$, $V_{TH} = 0.7$ V):

$$-C_1\frac{dV_X}{dt} = I_{D2} = \frac{\beta}{2}\left(V_X - V_{TH}\right)^2 .$$

With the overdrive $u = V_X - V_{TH}$, $u(0) = V_0 - V_{TH}$ and $du = dV_X$:

$$\frac{du}{dt} = -\frac{\beta}{2C_1}u^2 .$$

### Step 3 — Solving it

Separating variables and integrating from 0 to $t$:

$$
\begin{aligned}
\frac{du}{u^2} &= -\frac{\beta}{2C_1}\,dt\\
\left[-\frac{1}{u}\right]_{u(0)}^{u(t)} &= -\frac{\beta}{2C_1}\,t\\
\frac{1}{u(t)} &= \frac{1}{V_0 - V_{TH}} + \frac{\beta t}{2C_1}\\
u(t) &= \frac{V_0 - V_{TH}}{1 + \dfrac{\beta(V_0 - V_{TH})}{2C_1}t} .
\end{aligned}
$$

So

$$V_X(t) = V_{TH} + \frac{V_0 - V_{TH}}{1 + t/\tau}, \qquad \tau = \frac{2C_1}{\beta(V_0 - V_{TH})}.$$

**Shape.** $V_X$ starts at $V_0$ and falls fast at first, with initial slope

$$\left.\frac{dV_X}{dt}\right|_{0} = -\frac{V_0 - V_{TH}}{\tau} = -\frac{\beta(V_0 - V_{TH})^2}{2C_1} = -\frac{I_{D2}(0)}{C_1}.$$

It then slows down and approaches **$V_{TH}$, not zero**, as $1/t$, never quite reaching it in the square-law model. The decay is hyperbolic, not exponential, because the discharge conductance $g_m = \beta u$ falls with $u$.

### Step 4 — $M_1$'s current and $V_Y(t)$

$M_1$ has the same gate–source voltage as $M_2$, so while saturated it carries the same current:

$$I_{D1}(t) = \frac{\beta}{2}\left(V_X - V_{TH}\right)^2 = \frac{\beta}{2}\frac{(V_0 - V_{TH})^2}{(1 + t/\tau)^2},$$

$$V_Y(t) = V_{DD} - R_1I_{D1}(t) = V_{DD} - \frac{R_1\beta(V_0 - V_{TH})^2}{2\,(1 + t/\tau)^2}.$$

- **Initial value:** $V_Y(0) = V_{DD} - R_1\tfrac{\beta}{2}(V_0 - V_{TH})^2$, a low value.
- **Then** $V_Y$ **rises toward $V_{DD}$** as the mirrored current dies out, quickly at first and then with a slow $1/t^2$ tail.

**Saturation check for $M_1$.** It needs $V_Y \ge V_X - V_{TH} = u$. If $V_{DD} - R_1\tfrac{\beta}{2}(V_0 - V_{TH})^2 < V_0 - V_{TH}$ (large $R_1$ or large $V_0$), $M_1$ starts in **triode**, and $V_Y$ starts even lower, at the solution of

$$\frac{V_{DD} - V_Y}{R_1} = \beta\left[(V_X - V_{TH})V_Y - \tfrac12V_Y^2\right].$$

As $u$ shrinks, $M_1$ moves back into saturation and the formula above takes over; either way $V_Y$ rises monotonically toward $V_{DD}$. $M_1$ in triode does not affect $V_X$, which depends only on $C_1$ and $M_2$.

### Step 5 — Numerical example

Take $\beta = 2.68\ \mathrm{mA/V^2}$ ($W/L = 10/0.5$, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$), $C_1 = 10$ pF, $V_0 = 1.5$ V and $R_1 = 2\ \mathrm{k}\Omega$:

$$
\begin{aligned}
V_0 - V_{TH} &= 0.8\ \mathrm{V},\\
\tau &= \frac{2(10\ \mathrm{pF})}{(2.68\ \mathrm{mA/V^2})(0.8\ \mathrm{V})} = \frac{20\times10^{-12}}{2.144\times10^{-3}}\ \mathrm{s} = 9.33\ \mathrm{ns},\\
I_{D1}(0) &= \tfrac12(2.68\ \mathrm{mA/V^2})(0.8\ \mathrm{V})^2 = 0.858\ \mathrm{mA},\\
V_Y(0) &= 3 - (2\ \mathrm{k}\Omega)(0.858\ \mathrm{mA}) = 1.28\ \mathrm{V} \ \ (> 0.8\ \mathrm{V}, \text{ so } M_1 \text{ is saturated}).
\end{aligned}
$$

| $t$ | $1 + t/\tau$ | $V_X$ (V) | $I_{D1}$ | $V_Y$ (V) |
|---|---|---|---|---|
| 0 | 1 | 1.500 | 858 μA | 1.28 |
| 4.7 ns ($\tau/2$) | 1.5 | 1.233 | 381 μA | 2.24 |
| 9.3 ns ($\tau$) | 2 | 1.100 | 214 μA | 2.57 |
| 18.7 ns ($2\tau$) | 3 | 0.967 | 95 μA | 2.81 |
| 47 ns ($5\tau$) | 6 | 0.833 | 24 μA | 2.95 |
| 93 ns ($10\tau$) | 11 | 0.773 | 7.1 μA | 2.99 |

For example, at $t = \tau$: $V_X = 0.7 + 0.8/2 = 1.1$ V, $I_{D1} = 858\ \mu\mathrm{A}/2^2 = 214\ \mu\mathrm{A}$, and $V_Y = 3 - (2\ \mathrm{k}\Omega)(214\ \mu\mathrm{A}) = 2.57$ V.

With $R_1 = 10\ \mathrm{k}\Omega$ instead, $M_1$ would start in triode at $V_Y(0) \approx 0.15$ V and return to saturation when $u = 0.437$ V, i.e. at $1 + t/\tau = 0.8/0.437 = 1.83$, about $0.8\tau$; after that it follows the same kind of rising curve.

### Result

For $V_0 > V_{TH}$:

$$V_X(t) = V_{TH} + \frac{V_0 - V_{TH}}{1 + t/\tau}, \qquad \tau = \frac{2C_1}{\beta(V_0 - V_{TH})},$$

- **$V_X$** starts at $V_0$ and decays toward $V_{TH} = 0.7$ V (not toward 0) as the diode-connected $M_2$ discharges $C_1$: fast at first, then slowly, never quite reaching $V_{TH}$ in the square-law model.
- **$V_Y$** starts low, at $V_{DD} - R_1\tfrac{\beta}{2}(V_0 - V_{TH})^2$ (or lower, with $M_1$ in triode, if that value would be below $V_0 - V_{TH}$), and rises toward $V_{DD}$ as $M_1$'s mirrored current $\tfrac{\beta}{2}(V_X - V_{TH})^2 = \tfrac{\beta}{2}(V_0 - V_{TH})^2/(1 + t/\tau)^2$ dies out.

If $V_0 \le V_{TH}$, nothing happens: $V_X = V_0$ and $V_Y = V_{DD}$ for all $t$.

**Common mistake.** Letting $V_X$ decay to 0 V. The discharge path is the diode-connected $M_2$, which stops conducting at $V_X = V_{TH}$, so the capacitor creeps toward about 0.7 V ever more slowly.

**Common mistake.** Calling the decay exponential with an RC time constant. $M_2$'s current is proportional to $(V_X - V_{TH})^2$, which gives the hyperbolic $1/(1 + t/\tau)$ law, with a characteristic time that itself depends on the initial overdrive.

**Common mistake.** Drawing $V_Y$ falling with time. $M_1$ copies $M_2$'s current, which is largest at $t = 0$ and then decays, so $V_Y$ *rises* back to $V_{DD}$.
