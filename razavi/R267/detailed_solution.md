# Detailed solution - R267

**Approach.** The reference side ($I_{REF}$ into the diode $M_2$) fixes the common gate voltage of $M_1$ and $M_2$. $M_1$'s source sits on $C_1$, so its current charges the capacitor, the source rises, and the current decays. The same current flows through the cascode $M_3$ and through $R_1$, so $V_Y$ follows from $R_1$, and $V_X$ from $M_3$'s gate–source voltage at that decaying current, including the body effect.

### Step 1 — The gate voltage of $M_1$ is constant

$M_2$ always carries $I_{REF}$ (the gate of $M_1$ draws no current) and its source is grounded, so

$$V_G = V_{GS2} = 0.7 + V_{ov}, \qquad V_{ov} = \sqrt{\frac{2I_{REF}}{\beta}},$$

constant in time. With grounded bulks, $V_{SB1} = V_{C1}$ and $V_{SB3} = V_X$, and $V_{TH}(V_{SB}) = 0.7 + 0.45(\sqrt{0.9 + V_{SB}} - \sqrt{0.9})$ V; $\lambda = 0$, and $M_1$, $M_3$ are saturated (given).

### Step 2 — Initial values at $t = 0^+$

At $t = 0^+$, $V_{C1} = 0$, so $M_1$'s source is at ground like $M_2$'s; with the same gate voltage, $M_1$ copies the reference:

$$I_{D1}(0^+) = I_{REF}.$$

This current flows up through $M_3$ and $R_1$, so

$$V_Y(0^+) = V_{DD} - R_1I_{REF}, \qquad V_X(0^+) = V_b - V_{GS3}(I_{REF}) = V_b - V_{TH3}(V_X) - \sqrt{\frac{2I_{REF}}{\beta}} ,$$

since node X sits one $V_{GS3}$ below $M_3$'s fixed gate.

### Step 3 — $C_1$ charges and $M_1$'s current decays

$M_1$'s source current flows only into $C_1$:

$$C_1\frac{dV_{S1}}{dt} = I_{D1} = \frac{\beta}{2}\left[V_G - V_{S1} - V_{TH1}(V_{S1})\right]^2 .$$

**Without body effect** ($V_{TH1} = 0.7$ V), let $w = V_{ov} - V_{S1}$ be $M_1$'s overdrive, with $w(0) = V_{ov}$ and $dw = -dV_{S1}$:

$$
\begin{aligned}
\frac{dw}{w^2} &= -\frac{\beta}{2C_1}\,dt\\
\frac{1}{w(t)} &= \frac{1}{V_{ov}} + \frac{\beta t}{2C_1}\\
w(t) &= \frac{V_{ov}}{1 + t/\tau}, \qquad \tau = \frac{2C_1}{\beta V_{ov}} = \frac{2C_1}{g_m}, \quad g_m = \sqrt{2\beta I_{REF}},\\
I_{D1}(t) &= \frac{\beta}{2}w^2 = \frac{I_{REF}}{(1 + t/\tau)^2}.
\end{aligned}
$$

The source of $M_1$ climbs toward $V_G - V_{TH1}$ and the current dies out, quickly at first and then with a slow $1/t^2$ tail.

**With body effect**, $dw = -(1 + \eta_1)\,dV_{S1}$ with $\eta_1 = \gamma/(2\sqrt{0.9 + V_{S1}}) \approx 0.22$. The decay is about $1 + \eta_1$ times faster, and the source stops a little lower, where $V_{S1} + V_{TH1}(V_{S1}) = V_G$.

### Step 4 — $V_Y(t)$: rising back to $V_{DD}$

$R_1$ carries $M_3$'s current, which equals $M_1$'s:

$$V_Y(t) = V_{DD} - R_1I_{D1}(t) \approx V_{DD} - \frac{R_1I_{REF}}{(1 + t/\tau)^2} .$$

$V_Y$ starts at $V_{DD} - R_1I_{REF}$ and **rises toward $V_{DD}$**, quickly at first and then slowly.

### Step 5 — $V_X(t)$: rising toward $V_b - V_{TH3}$

$M_3$ is saturated and carries $I_{D1}(t)$:

$$V_X(t) + V_{TH3}\big(V_X(t)\big) = V_b - \sqrt{\frac{2I_{D1}(t)}{\beta}} .$$

As the current decays, $M_3$ needs less overdrive, so its source X **rises**. When the current has died out:

$$V_{X,\infty} = V_b - V_{TH3}(V_{X,\infty}).$$

The total rise is the initial overdrive minus the extra threshold caused by the higher source (body effect):

$$\Delta V_X = V_{X,\infty} - V_X(0^+) = \sqrt{\frac{2I_{REF}}{\beta}} - \left[V_{TH3}(V_{X,\infty}) - V_{TH3}(V_X(0^+))\right].$$

**Shape.** $V_X$ approaches its final value in proportion to $\sqrt{I_{D1}} \propto 1/(1 + t/\tau)$, a $1/t$ tail, slower than $V_Y$'s $1/t^2$ tail.

**Saturation checks.** $V_{DS1} = V_X - V_{S1}$ stays almost constant (both nodes rise by similar amounts) while $M_1$'s overdrive shrinks, and $V_{DS3} = V_Y - V_X$ grows ($V_Y$ rises by about $R_1I_{REF}$, much more than $V_X$), so both stay saturated if they start so.

### Step 6 — Numerical example

Take $\beta = 2.68\ \mathrm{mA/V^2}$ ($W/L = 10/0.5$), $I_{REF} = 100\ \mu\mathrm{A}$, $R_1 = 10\ \mathrm{k}\Omega$, $C_1 = 10$ pF, $V_b = 2$ V.

$$
\begin{aligned}
V_{ov} &= \sqrt{2(100\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.273\ \mathrm{V}, \qquad V_G = 0.973\ \mathrm{V},\\
g_m &= \sqrt{2(2.68\ \mathrm{mA/V^2})(100\ \mu\mathrm{A})} = 0.732\ \mathrm{mS}, \qquad \tau = \frac{2(10\ \mathrm{pF})}{0.732\ \mathrm{mS}} = 27.3\ \mathrm{ns},\\
V_Y(0^+) &= 3 - (10\ \mathrm{k}\Omega)(100\ \mu\mathrm{A}) = 2.00\ \mathrm{V}.
\end{aligned}
$$

**$V_X(0^+)$:** solve $V_X + 0.7 + 0.45(\sqrt{0.9 + V_X} - 0.949) = 2 - 0.273 = 1.727$ V. Try $V_X = 0.857$ V: $V_{TH3} = 0.7 + 0.45(\sqrt{1.757} - 0.949) = 0.870$ V, and $0.857 + 0.870 = 1.727$ ✓.

**$V_{X,\infty}$:** solve $V_X + V_{TH3}(V_X) = 2$ V. Try $V_X = 1.092$ V: $V_{TH3} = 0.7 + 0.45(\sqrt{1.992} - 0.949) = 0.908$ V, and $1.092 + 0.908 = 2.000$ ✓.

So $\Delta V_X = 1.092 - 0.857 = 0.235$ V $= 0.273 - (0.908 - 0.870)$ ✓, and $M_1$'s source ends at about 0.22 V (where $V_{S1} + V_{TH1}(V_{S1}) = 0.973$ V).

Numerical integration (with body effect in $M_1$ and $M_3$):

| $t$ | $V_{C1}$ (V) | $I_{D1}$ | $V_X$ (V) | $V_Y$ (V) |
|---|---|---|---|---|
| $0^+$ | 0 | 100 μA | 0.857 | 2.00 |
| 5 ns | 0.041 | 66.5 μA | 0.900 | 2.33 |
| 10 ns | 0.069 | 47.5 μA | 0.930 | 2.53 |
| 27 ns | 0.122 | 20.2 μA | 0.986 | 2.80 |
| 50 ns | 0.154 | 9.5 μA | 1.019 | 2.90 |
| 100 ns | 0.182 | 3.3 μA | 1.049 | 2.97 |
| 500 ns | 0.214 | 0.19 μA | 1.082 | 3.00 |
| $\infty$ | 0.223 | 0 | 1.092 | 3.00 |

### Result

- **At $t = 0^+$**, $M_1$ (source at 0 V) copies $I_{REF}$: $V_X = V_b - V_{GS3}(I_{REF})$ and $V_Y = V_{DD} - R_1I_{REF}$.
- **Then** the current charges $C_1$, $M_1$'s source rises toward $V_{GS2} - V_{TH1}$, and the current dies out, $I_{D1} \approx I_{REF}/(1 + t/\tau)^2$ with $\tau = 2C_1/\sqrt{2\beta I_{REF}}$ (ignoring body effect; the body effect makes it somewhat faster and makes the source stop a little lower).
- **$V_Y$ rises back toward $V_{DD}$**, as $V_{DD} - R_1I_{D1}(t)$.
- **$V_X$ rises toward $V_b - V_{TH3}(V_X)$**, by $\Delta V_X = \sqrt{2I_{REF}/\beta} - [V_{TH3}(V_{X,\infty}) - V_{TH3}(V_{X,0})]$, slightly less than the initial overdrive because the higher $V_X$ raises $V_{TH3}$.
- Both rise quickly at first and then slowly. The current never stays at $I_{REF}$.

**Common mistake.** Assuming the circuit keeps copying $I_{REF}$ indefinitely, as an ordinary cascode mirror would. $M_1$'s source sits on a capacitor, which integrates the current; once the source has risen by about one overdrive, $M_1$ turns off.

**Common mistake.** Keeping $V_X$ constant. $V_X$ is set by the cascode $M_3$, whose $V_{GS}$ shrinks from $V_{TH3} + V_{ov}$ to $V_{TH3}$ as the current decays, so X rises by almost $V_{ov}$.

**Common mistake.** Letting $V_Y$ fall, or $V_X$ fall to 0. The current through $R_1$ and $M_3$ only *decreases* with time, so the drop across $R_1$ shrinks ($V_Y$ up) and $M_3$ needs less gate–source voltage ($V_X$ up).
