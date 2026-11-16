# Detailed solution - R243

**Approach.** $M_2$ is diode-connected, so node X is set by KCL between the resistor current $(V_{DD} - V_X)/R_1$ and the diode's square-law current. $M_1$ has the same gate–source voltage, so if it is saturated it carries the same current through an identical resistor, which makes $V_Y = V_X$. Then check that $M_1$ is indeed saturated and describe the curve.

### Step 1 — Region $V_{DD} \le V_{TH} = 0.7$ V

Both gates are at X, so $V_{GS1} = V_{GS2} = V_X$: a current mirror with resistive loads. $V_X$ cannot exceed $V_{DD}$, so for $V_{DD} \le 0.7$ V both transistors are off, no current flows, and

$$V_X = V_Y = V_{DD} \qquad (0 \le V_{DD} \le 0.7\ \mathrm{V}) .$$

Both curves follow the 45° line.

### Step 2 — $V_X$ for $V_{DD} > 0.7$ V

The diode-connected $M_2$ conducts in saturation. KCL at X:

$$\frac{V_{DD} - V_X}{R_1} = \frac{\beta}{2}(V_X - V_{TH})^2 .$$

With $w = V_X - V_{TH}$ (the overdrive) and $D = V_{DD} - V_{TH}$, $V_{DD} - V_X = D - w$ and

$$\frac{D - w}{R_1} = \frac{\beta}{2}w^2 \quad\Longrightarrow\quad \beta R_1w^2 + 2w - 2D = 0 .$$

Taking the positive root,

$$w = \frac{-2 + \sqrt{4 + 8\beta R_1D}}{2\beta R_1} = \frac{\sqrt{1 + 2\beta R_1D} - 1}{\beta R_1} ,$$

$$\boxed{V_X = V_{TH} + \frac{\sqrt{1 + 2\beta R_1(V_{DD} - V_{TH})} - 1}{\beta R_1}} \qquad (V_{DD} > 0.7\ \mathrm{V}) .$$

**Slope.** Differentiating $w$ with respect to $D$:

$$\frac{dV_X}{dV_{DD}} = \frac{1}{\beta R_1}\cdot\frac{2\beta R_1}{2\sqrt{1 + 2\beta R_1D}} = \frac{1}{\sqrt{1 + 2\beta R_1(V_{DD} - V_{TH})}} .$$

At $V_{DD} = 0.7^+$ the slope is 1, so the curve leaves the 45° line without a kink. It then falls steadily: it equals $1/(1 + g_{m2}R_1)$, the divider between $R_1$ and the diode's $1/g_{m2}$, which drops as the current grows. For large $V_{DD}$, $V_X \approx V_{TH} + \sqrt{2(V_{DD} - V_{TH})/(\beta R_1)}$, a slow, square-root-like rise.

### Step 3 — $V_Y$: $M_1$ copies the current

Suppose $M_1$ ($V_{GS1} = V_X$) is saturated. Then it carries the same current $I = (V_{DD} - V_X)/R_1$, and KCL at Y gives

$$V_Y = V_{DD} - R_1I = V_{DD} - R_1\frac{V_{DD} - V_X}{R_1} = V_X .$$

Then $V_{DS1} = V_Y = V_X = V_{GS1} \ge V_{GS1} - V_{TH}$, so $M_1$ is saturated, as assumed. The solution is unique: at Y the resistor current falls as $V_Y$ rises, while the current of $M_1$ (fixed $V_{GS}$) rises in triode and is constant in saturation, so the two curves cross only once. Hence

$$V_Y = V_X \qquad\text{for all } V_{DD} .$$

The right branch is an exact replica of the left one.

### Step 4 — Illustrative numbers

For example, with $\beta = 1\ \mathrm{mA/V^2}$ and $R_1 = 10\ \mathrm{k}\Omega$ ($\beta R_1 = 10\ \mathrm{V^{-1}}$):

| $V_{DD}$ (V) | 0.5 | 0.7 | 0.8 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|---|
| $V_X = V_Y$ (V) | 0.50 | 0.70 | 0.77 | 0.86 | 1.01 | 1.12 | 1.21 | 1.29 |
| current (μA) | 0 | 0 | 3 | 14 | 49 | 88 | 129 | 171 |
| slope $dV_X/dV_{DD}$ | 1 | 1 | 0.58 | 0.38 | 0.24 | 0.19 | 0.16 | 0.15 |

A larger $\beta R_1$ makes the curve flatten sooner and stay closer to $V_{TH}$; a smaller one keeps it near the 45° line for longer.

### Result

**$V_X = V_Y$ for all $V_{DD}$**, and both curves are identical:

- $0 \le V_{DD} \le 0.7$ V: both transistors off, $V_X = V_Y = V_{DD}$ (slope 1).
- $V_{DD} > 0.7$ V: both follow the diode curve
$$V_X = V_Y = V_{TH} + \frac{\sqrt{1 + 2\beta R_1(V_{DD} - V_{TH})} - 1}{\beta R_1},$$
which leaves the 45° line with slope 1 at 0.7 V and then rises ever more slowly (slope $1/\sqrt{1 + 2\beta R_1(V_{DD} - V_{TH})}$, roughly as $\sqrt{V_{DD}}$).

$M_1$ is always saturated ($V_{DS1} = V_{GS1}$) and carries the same current as $M_2$.

**Common mistake.** Claiming that $M_1$ is in triode, or that $V_Y$ falls toward zero as $V_{DD}$ increases. With $V_Y = V_X$ its $V_{DS}$ equals its $V_{GS}$, so it is saturated and $V_Y$ rises exactly like $V_X$.

**Common mistake.** Clamping $V_X$ at exactly $V_{TH}$ for $V_{DD} > 0.7$ V, or drawing it with slope 1 throughout. The diode's overdrive grows with its current, so $V_X$ keeps rising, but sub-linearly.

**Common mistake.** Reading the circuit as a cross-coupled latch. Only $M_2$ is diode-connected and both gates are tied to X, so there is no positive feedback and no bistable solution.
