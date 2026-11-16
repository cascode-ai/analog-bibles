# Detailed solution - R263

**Approach.** The reference branch ($I_{REF}$ into the diode $M_2$, source grounded) does not involve $C_1$, so $V_X$ is constant. $M_1$ has the same gate voltage, but its source sits on $C_1$: its drain current charges $C_1$, the source rises, the overdrive and current shrink, and $V_Y = V_{DD} - R_1I_{D1}$ recovers toward $V_{DD}$. We solve the charging equation in closed form (first without, then with body effect) and evaluate an example.

### Step 1 — $V_X$ is constant

The gate of $M_1$ draws no current, so $I_{D2} = I_{REF}$ at all times, and $M_2$ (diode-connected, source grounded) gives

$$V_X = V_{GS2} = 0.7 + \sqrt{\frac{2I_{REF}}{\beta}} = \text{constant}.$$

**$V_X$ is a flat line** for all $t > 0$. With $V_{ov} = \sqrt{2I_{REF}/\beta}$, $V_X = 0.7 + V_{ov}$.

### Step 2 — The start: $t = 0^+$

At $t = 0^+$, $V_{C1} = 0$, so $M_1$'s source is at ground like $M_2$'s; with the same $V_{GS}$, $M_1$ copies the reference current:

$$I_{D1}(0^+) = I_{REF}, \qquad V_Y(0^+) = V_{DD} - R_1I_{REF},$$

assuming $M_1$ is saturated, i.e. $V_{DD} - R_1I_{REF} > \sqrt{2I_{REF}/\beta}$.

### Step 3 — Charging of $C_1$ (without body effect)

All of $M_1$'s drain current flows into $C_1$:

$$C_1\frac{dV_{S1}}{dt} = I_{D1} = \frac{\beta}{2}\left(V_X - V_{S1} - V_{TH}\right)^2 .$$

Ignore the body effect first ($V_{TH} = 0.7$ V), so $V_X - V_{S1} - 0.7 = V_{ov} - V_{S1}$. With $M_1$'s overdrive $w = V_{ov} - V_{S1}$, $dw = -dV_{S1}$ and $w(0) = V_{ov}$:

$$-C_1\frac{dw}{dt} = \frac{\beta}{2}w^2 .$$

Separating the variables and integrating from $0$ to $t$:

$$
\begin{aligned}
\frac{dw}{w^2} &= -\frac{\beta}{2C_1}\,dt\\
\left[-\frac{1}{w}\right]_{V_{ov}}^{w(t)} &= -\frac{\beta}{2C_1}\,t\\
\frac{1}{w(t)} &= \frac{1}{V_{ov}} + \frac{\beta t}{2C_1}\\
w(t) &= \frac{V_{ov}}{1 + \beta V_{ov}t/(2C_1)} = \frac{V_{ov}}{1 + t/\tau}, \qquad \tau = \frac{2C_1}{\beta V_{ov}} = \frac{2C_1}{g_m},
\end{aligned}
$$

with $g_m = \beta V_{ov} = \sqrt{2\beta I_{REF}}$. Then

$$I_{D1}(t) = \frac{\beta}{2}w(t)^2 = \frac{I_{REF}}{(1 + t/\tau)^2}, \qquad V_{S1}(t) = V_{ov} - w(t) = V_{ov}\frac{t/\tau}{1 + t/\tau}.$$

The source climbs toward $V_X - V_{TH}$ (i.e. toward $V_{ov}$) and the current decays toward zero. The tail is algebraic, not exponential: the conductance that charges $C_1$ is $M_1$'s $g_m = \beta w$, which shrinks with the current, so the current falls as $1/t^2$ at long times instead of as $e^{-t/\tau}$.

### Step 4 — Including the body effect

With the bulk grounded, $V_{SB1} = V_{S1}$, and $V_{TH1}$ rises as the source rises, with $\eta = dV_{TH}/dV_{SB} = \gamma/(2\sqrt{0.9 + V_{S1}})$. The overdrive is now $w = V_X - V_{S1} - V_{TH}(V_{S1})$, and $dw = -(1 + \eta)\,dV_{S1}$:

$$\frac{dw}{dt} = -(1 + \eta)\frac{\beta}{2C_1}w^2 \quad\Longrightarrow\quad I_{D1}(t) \approx \frac{I_{REF}}{(1 + t/\tau')^2}, \qquad \tau' = \frac{2C_1}{(1 + \eta)\,g_m}$$

(treating $\eta$ as roughly constant). Two consequences:

- the current decays about 20 % faster ($\eta \approx 0.22$–0.24 here);
- the source **stops a little lower**, at $V_{S1} + V_{TH}(V_{S1}) = V_X$, instead of at $V_X - 0.7$; it never reaches $V_X$.

### Step 5 — $V_Y(t)$

All of $R_1$'s current flows into $M_1$, so

$$V_Y(t) = V_{DD} - R_1I_{D1}(t) \approx V_{DD} - \frac{R_1I_{REF}}{(1 + t/\tau')^2}.$$

$V_Y$ starts at $V_{DD} - R_1I_{REF}$ and **rises toward $V_{DD}$**: steeply at first (initial slope $2R_1I_{REF}/\tau'$), then ever more slowly.

**$M_1$ stays saturated:** its overdrive $w$ shrinks while $V_{DS1} = V_Y - V_{S1}$ grows ($V_Y$ rises much more than $V_{S1}$), so if $V_{DS1} \ge w$ at $t = 0^+$ it remains true afterwards.

### Step 6 — Numerical example

Take $\beta = 2.68\ \mathrm{mA/V^2}$ ($W/L = 10/0.5$), $I_{REF} = 100\ \mu\mathrm{A}$, $R_1 = 10\ \mathrm{k}\Omega$, $C_1 = 10$ pF:

$$
\begin{aligned}
V_{ov} &= \sqrt{2(100\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.273\ \mathrm{V}, \qquad V_X = 0.973\ \mathrm{V},\\
g_m &= \sqrt{2(2.68\ \mathrm{mA/V^2})(100\ \mu\mathrm{A})} = 0.732\ \mathrm{mS},\\
\tau &= \frac{2(10\ \mathrm{pF})}{0.732\ \mathrm{mS}} = 27.3\ \mathrm{ns}, \qquad \tau' \approx \frac{27.3\ \mathrm{ns}}{1.237} = 22\ \mathrm{ns},\\
V_Y(0^+) &= 3 - (10\ \mathrm{k}\Omega)(100\ \mu\mathrm{A}) = 2.0\ \mathrm{V}.
\end{aligned}
$$

Final source voltage with body effect: solving $V_{S1} + 0.7 + 0.45(\sqrt{0.9 + V_{S1}} - 0.949) = 0.973$ gives $V_{S1} = 0.223$ V (without body effect it would be 0.273 V).

Numerical integration of the charging equation (with body effect):

| $t$ | $V_{S1}$ (V) | $I_{D1}$ | $V_Y$ (V) | $V_X$ (V) |
|---|---|---|---|---|
| $0^+$ | 0 | 100 μA | 2.00 | 0.973 |
| 5 ns | 0.041 | 66.5 μA | 2.33 | 0.973 |
| 10 ns | 0.069 | 47.5 μA | 2.53 | 0.973 |
| 27 ns | 0.122 | 20.2 μA | 2.80 | 0.973 |
| 50 ns | 0.154 | 9.5 μA | 2.90 | 0.973 |
| 100 ns | 0.182 | 3.3 μA | 2.97 | 0.973 |
| 500 ns | 0.214 | 0.19 μA | 3.00 | 0.973 |

The approximation $I_{REF}/(1 + t/\tau')^2$ gives 66.5 μA at 5 ns and 20.0 μA at 27 ns, in good agreement.

### Result

- **$V_X$ is constant** at $V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$: $M_2$ and $I_{REF}$ do not see $C_1$.
- **$V_Y$ starts at $V_{DD} - R_1I_{REF}$** ($M_1$ copies $I_{REF}$ while its source is still at 0 V) and **rises back toward $V_{DD}$** as $C_1$ charges and $M_1$'s current dies out, quickly at first and then slowly:
$$V_Y(t) = V_{DD} - R_1I_{D1}(t), \qquad I_{D1}(t) = \frac{I_{REF}}{(1 + t/\tau)^2}, \quad \tau = \frac{2C_1}{g_m}, \quad g_m = \sqrt{2\beta I_{REF}}$$
(without body effect). This is an algebraic ($1/t^2$), not exponential, tail. The body effect shortens the time scale by about $1 + \eta$ and makes $M_1$'s source stop a little lower, at $V_X - V_{TH1}(V_{S1})$.
- $M_1$'s source rises from 0 toward $V_X - V_{TH}$ (0.22 V in the example), never to $V_X$.

**Common mistake.** Drawing $V_Y$ *falling* with time, or constant at $V_{DD} - R_1I_{REF}$. As $C_1$ charges, $M_1$'s source rises while its gate is fixed, so its current and the drop across $R_1$ shrink and $V_Y$ rises.

**Common mistake.** Letting $V_X$ change. $C_1$ is in $M_1$'s source and $M_1$'s gate draws no current, so nothing couples the capacitor back to X in this dc (square-law) analysis.

**Common mistake.** Describing the decay as an RC exponential, or letting $M_1$'s source charge all the way to $V_X$. The charging current is a square-law function of the shrinking overdrive, which gives the $1/(1 + t/\tau)^2$ law, and it vanishes when the source is one threshold below the gate.
