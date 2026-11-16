# Detailed solution - R207

**Approach.** The input pair steers the tail current $I_{SS}$ between nodes X and Y, but $R_1$ lets current flow between X and Y. So the currents in the cascodes $M_3$, $M_4$ (and in the diode loads above them) are *not* simply $I_{D1}$ and $I_{D2}$. We write KCL at X and Y and use the square law of the cascodes, whose gates sit at the fixed bias $V_{b1}$, to express $V_X$, $V_Y$ and the outputs through the cascode currents. Then we follow the sweep from balance out to full steering, and finish with a numerical example.

### Step 1 — Reading the circuit and the sweep

From the figure:

- $M_1$, $M_2$: NMOS input pair, sources at node P, tail $M_7$ (gate at $V_b$) carrying $I_{SS}$. The drain of $M_1$ is node X and the drain of $M_2$ is node Y.
- $M_3$, $M_4$: NMOS cascodes with gates at $V_{b1}$ and sources at X and Y. Their drains are the left and right outputs.
- $R_1$ connects X and Y.
- $M_5$, $M_6$: diode-connected PMOS loads from $V_{DD}$ to the outputs.
- $V_{out} = V_{left} - V_{right}$.

The sweep: $V_{in2} = 3\ \mathrm{V} - V_{in1}$, input common mode fixed at 1.5 V, $\Delta V_{in} = 2V_{in1} - 3$ V. We assume the biases keep $M_3$–$M_7$ saturated.

### Step 2 — KCL at X and Y

Let $I_3$ and $I_4$ be the currents flowing down through $M_3$ and $M_4$, and let $(V_X - V_Y)/R_1$ be the current in $R_1$ from X to Y.

- **KCL at X:** $I_3$ arrives, and $I_{D1}$ and the $R_1$ current leave:
$$I_3 = I_{D1} + \frac{V_X - V_Y}{R_1}.$$
- **KCL at Y:** $I_4$ and the $R_1$ current arrive, and $I_{D2}$ leaves:
$$I_4 = I_{D2} - \frac{V_X - V_Y}{R_1}.$$
- **Adding** the two: $I_3 + I_4 = I_{D1} + I_{D2} = I_{SS}$. The cascodes always share exactly $I_{SS}$.

### Step 3 — Node voltages in terms of the cascode currents

With $\beta_3 = \mu_nC_{ox}(W/L)_{3,4}$ and $\beta_5 = \mu_pC_{ox}(W/L)_{5,6}$, the square law gives the following.

**Cascode sources.** The gate is at $V_{b1}$, so

$$V_X = V_{b1} - V_{GS3}(I_3) = V_{b1} - V_{THN} - \sqrt{\frac{2I_3}{\beta_3}}, \qquad V_Y = V_{b1} - V_{THN} - \sqrt{\frac{2I_4}{\beta_3}}.$$

**Outputs (diode loads).** Each diode carries the current of its cascode, so

$$V_{left} = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_3}{\beta_5}}, \qquad V_{right} = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_4}{\beta_5}}.$$

**Differences:**

$$
\begin{aligned}
V_X - V_Y &= \sqrt{\frac{2}{\beta_3}}\left(\sqrt{I_4} - \sqrt{I_3}\right),\\
V_{out} &= \sqrt{\frac{2}{\beta_5}}\left(\sqrt{I_4} - \sqrt{I_3}\right).
\end{aligned}
$$

So the outputs and X, Y respond only through the split of $I_{SS}$ between $I_3$ and $I_4$, which is fixed by KCL together with $R_1$:

$$I_3 - \frac{I_{SS}}{2} = \frac{I_{D1} - I_{D2}}{2} + \frac{V_X - V_Y}{R_1}.$$

$V_X - V_Y$ has the opposite sign to $I_3 - I_4$, so the $R_1$ term always **reduces** the imbalance passed on to the cascodes. Part of the steered current returns through $R_1$ instead of going up through a cascode.

### Step 4 — Balance and the central region

**At balance** ($V_{in1} = V_{in2}$): $I_{D1} = I_{D2} = I_{SS}/2$ and, by symmetry, $V_X = V_Y$. $R_1$ carries no current and $I_3 = I_4 = I_{SS}/2$:

$$V_X = V_Y = V_{b1} - V_{GS3}\!\left(\frac{I_{SS}}{2}\right), \qquad V_{left} = V_{right} = V_{DD} - \left|V_{GS5}\!\left(\frac{I_{SS}}{2}\right)\right|, \qquad V_{out} = 0 .$$

**As $V_{in1}$ rises:** $I_{D1}$ grows, so $I_3$ grows. Then

- $V_X = V_{b1} - V_{GS3}(I_3)$ **falls**;
- the left output $V_{DD} - |V_{GS5}(I_3)|$ **falls**;
- on the right, $I_4$ shrinks, so $V_Y$ **rises** and the right output rises.

So $V_{out}$ is **inverting**, $V_X$ falls and $V_Y$ rises, as mirror images about the balance point.

**Central slope (small signal).** In the differential half circuit the midpoint of $R_1$ is a virtual ground, so X sees $R_1/2$ to ground. $M_1$'s signal current $g_{m1}v_d/2$ divides between $R_1/2$ and the source of $M_3$, whose input resistance is $1/g_{m3}$. Only the part through $M_3$ reaches the diode $1/g_{m5}$:

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})}\bigg|_0 = -\frac{g_{m1}}{g_{m5}}\cdot\frac{R_1/2}{R_1/2 + 1/g_{m3}} = -\frac{g_{m1}}{g_{m5}}\cdot\frac{g_{m3}R_1/2}{1 + g_{m3}R_1/2}.$$

### Step 5 — Full steering: the end levels

All three curves change only while the pair steers current, $|\Delta V_{in}| < \sqrt{2I_{SS}/\beta_n}$ with $\beta_n = \mu_nC_{ox}(W/L)_{1,2}$, and they are flat outside that window. (The conducting input device may enter triode at the extremes, but the tail still forces $I_{SS}$ through it.)

**Low $V_{in1}$:** $M_1$ is off ($I_{D1} = 0$) and $I_{D2} = I_{SS}$. KCL at X becomes

$$I_3 = \frac{V_X - V_Y}{R_1}.$$

$M_3$ still conducts: the current it carries flows from X through $R_1$ into Y, where $M_2$ sinks it together with $M_4$'s current $I_4 = I_{SS} - I_3$. Using Step 3, $I_3$ is fixed by

$$I_3R_1 = V_X - V_Y = \sqrt{\frac{2}{\beta_3}}\left(\sqrt{I_{SS} - I_3} - \sqrt{I_3}\right),$$

and then

$$V_{out} = \sqrt{\frac{2}{\beta_5}}\left(\sqrt{I_{SS} - I_3} - \sqrt{I_3}\right) > 0, \qquad V_X - V_Y = I_3R_1 > 0 .$$

At high $V_{in1}$ the values are mirrored: $V_{out}$ changes sign and X and Y swap.

**Dependence on $R_1$:**

- **Large $R_1$:** $I_3 \to 0$, so $|V_{out}| \to \sqrt{2I_{SS}/\beta_5}$ (the full swing of a diode-loaded pair) and $|V_X - V_Y| \to \sqrt{2I_{SS}/\beta_3}$.
- **Small $R_1$:** X and Y are nearly shorted, the cascodes share the current almost equally, and $V_{out}$ and $V_X - V_Y$ shrink toward zero.

### Step 6 — Numerical example

Take $\beta_n = \beta_3 = 2\ \mathrm{mA/V^2}$, $\beta_5 = 1\ \mathrm{mA/V^2}$, $I_{SS} = 200\ \mu$A, $V_{b1} = 2.0$ V and $R_1 = 5\ \mathrm{k}\Omega$ (example values).

**Balance:**

$$
\begin{aligned}
V_X = V_Y &= 2.0 - 0.7 - \sqrt{\frac{2(100\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 1.3 - 0.316 = 0.984\ \mathrm{V},\\
V_{left} = V_{right} &= 3 - 0.8 - \sqrt{\frac{2(100\ \mu\mathrm{A})}{1\ \mathrm{mA/V^2}}} = 2.2 - 0.447 = 1.753\ \mathrm{V}.
\end{aligned}
$$

**Full steering.** Try $I_3 = 40\ \mu$A:

$$
\begin{aligned}
\sqrt{\frac{2}{2\ \mathrm{mA/V^2}}}\left(\sqrt{160\ \mu\mathrm{A}} - \sqrt{40\ \mu\mathrm{A}}\right) &= (31.6\ \mathrm{V}/\sqrt{\mathrm{A}})(12.65 - 6.32)\times10^{-3}\ \sqrt{\mathrm{A}} = 0.200\ \mathrm{V},\\
I_3R_1 &= (40\ \mu\mathrm{A})(5\ \mathrm{k}\Omega) = 0.200\ \mathrm{V}.\ \checkmark
\end{aligned}
$$

So $I_3 = 40\ \mu$A and $I_4 = 160\ \mu$A, giving

$$
\begin{aligned}
V_X &= 1.3 - \sqrt{\frac{2(40\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 1.3 - 0.2 = 1.10\ \mathrm{V}, \qquad V_Y = 1.3 - \sqrt{\frac{2(160\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 1.3 - 0.4 = 0.90\ \mathrm{V},\\
V_{out} &= \sqrt{\frac{2}{1\ \mathrm{mA/V^2}}}\left(\sqrt{160\ \mu\mathrm{A}} - \sqrt{40\ \mu\mathrm{A}}\right) = 0.283\ \mathrm{V}.
\end{aligned}
$$

Without $R_1$ (open) the end level would be $\sqrt{2(200\ \mu\mathrm{A})/(1\ \mathrm{mA/V^2})} = 0.632$ V. Sharing through $R_1$ cuts it to 0.283 V.

**Central slope:**

$$
\begin{aligned}
g_{m1} &= g_{m3} = \sqrt{2(2\ \mathrm{mA/V^2})(100\ \mu\mathrm{A})} = 0.632\ \mathrm{mS}, \qquad g_{m5} = \sqrt{2(1\ \mathrm{mA/V^2})(100\ \mu\mathrm{A})} = 0.447\ \mathrm{mS},\\
\frac{g_{m3}R_1}{2} &= (0.632\ \mathrm{mS})(2.5\ \mathrm{k}\Omega) = 1.58,\\
\text{slope} &= -\frac{0.632}{0.447}\cdot\frac{1.58}{2.58} = -0.87\ \text{per volt of } \Delta V_{in}.
\end{aligned}
$$

**Steering window:** $\sqrt{2I_{SS}/\beta_n} = 0.447$ V, i.e. $1.276\ \mathrm{V} < V_{in1} < 1.724$ V.

| $V_{in1}$ (V) | $V_X$ (V) | $V_Y$ (V) | $V_{out}$ (V) |
|---|---|---|---|
| 0 to 1.276 | 1.100 | 0.900 | +0.283 |
| 1.35 | 1.077 | 0.912 | +0.233 |
| 1.40 | 1.048 | 0.931 | +0.166 |
| 1.45 | 1.016 | 0.955 | +0.086 |
| 1.50 | 0.984 | 0.984 | 0 |
| 1.55 | 0.955 | 1.016 | −0.086 |
| 1.60 | 0.931 | 1.048 | −0.166 |
| 1.65 | 0.912 | 1.077 | −0.233 |
| 1.724 to 3 | 0.900 | 1.100 | −0.283 |

(The interior points come from solving the KCL equations of Step 2 together with the steering law of the input pair.)

### Result

All three curves change only in the window where the pair steers its current ($|V_{in1} - V_{in2}| < \sqrt{2I_{SS}/\beta_n}$ around $V_{in1} = 1.5$ V) and are flat outside it.

- **$V_{out}$** is an **inverting S-curve**, zero at balance.
  - Central slope: $-(g_{m1}/g_{m5})\cdot\dfrac{g_{m3}R_1/2}{1 + g_{m3}R_1/2}$.
  - End levels: $\pm\sqrt{2/\beta_5}\,(\sqrt{I_{SS} - I_3} - \sqrt{I_3})$, positive for low $V_{in1}$, where $I_3$ satisfies $V_{GS4}(I_{SS} - I_3) - V_{GS3}(I_3) = I_3R_1$.
- **$V_X$ falls and $V_Y$ rises**, as mirror images. They are equal at balance, at $V_{b1} - V_{GS3}(I_{SS}/2)$, and differ by $\pm I_3R_1$ at the ends.
- **The swings are limited** because $R_1$ lets part of the current of the "off" side flow through the other cascode. They approach the plain diode-load values as $R_1 \to \infty$ and shrink to zero as $R_1 \to 0$.

**Common mistake.** Letting $V_X$ and $V_Y$ swing widely, even rail to rail, or move in the same direction. X and Y are the sources of cascodes with a fixed gate voltage, so they only shift by the change in $V_{GS}$ of the cascodes, a few hundred millivolts, and in opposite directions.

**Common mistake.** Giving the end levels of a plain diode-loaded pair, $\pm\sqrt{2I_{SS}/\beta_5}$, without the sharing through $R_1$. Even with $M_1$ off, $M_3$ keeps conducting the current that returns from X to Y through $R_1$, which reduces the output difference.

**Common mistake.** Treating $R_1$ as a load that sets the gain to $g_{m1}R_1$. $R_1$ is a shunt path at the cascode sources. It *steals* signal current from the cascodes, so the gain is the diode-load gain $g_{m1}/g_{m5}$ reduced by the current-division factor.
