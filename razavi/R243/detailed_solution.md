# Detailed solution - R243

**Approach.** $M_2$ is diode-connected, so node X is set by KCL between the resistor current $(V_{DD} - V_X)/R_1$ and the diode's square-law current. $M_1$ has the same gate–source voltage, so if it is saturated it carries the same current through an identical resistor, which makes $V_Y = V_X$. We then check that $M_1$ is indeed saturated and describe the resulting curve.

### Step 1 — The circuit

Reading the figure:

- Left branch: $R_1$ from $V_{DD}$ to node X; $M_2$ from X to ground with its gate tied to X (diode connection).
- Right branch: an identical $R_1$ from $V_{DD}$ to node Y; $M_1$ from Y to ground with its gate tied to X.

So $V_{GS1} = V_{GS2} = V_X$: this is a simple current mirror with resistive loads. Square law with $\lambda = 0$, $\beta = \mu_nC_{ox}W/L$, $V_{TH} = 0.7$ V:

$$I_D = \tfrac{\beta}{2}(V_{GS} - V_{TH})^2\ \text{(saturation)}, \qquad I_D = \beta\left[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2\right]\ \text{(triode)}.$$

### Step 2 — Region $V_{DD} \le V_{TH} = 0.7$ V

The gate voltage $V_X$ can never exceed $V_{DD}$ (current can only flow down through $R_1$). So for $V_{DD} \le 0.7$ V, $V_{GS} = V_X \le 0.7$ V and both transistors are off. With no current, there is no drop across either resistor:

$$V_X = V_Y = V_{DD} \qquad (0 \le V_{DD} \le 0.7\ \mathrm{V}) .$$

Both curves follow the 45° line.

### Step 3 — $V_X$ for $V_{DD} > 0.7$ V

$M_2$ conducts and, being diode-connected ($V_{DS} = V_{GS}$), is saturated. **KCL at X:**

$$\frac{V_{DD} - V_X}{R_1} = \frac{\beta}{2}(V_X - V_{TH})^2 .$$

Let $w = V_X - V_{TH}$ (the overdrive) and $D = V_{DD} - V_{TH}$. Then $V_{DD} - V_X = D - w$ and

$$\frac{D - w}{R_1} = \frac{\beta}{2}w^2 .$$

Multiply by $2R_1$ and rearrange into a quadratic in $w$:

$$\beta R_1w^2 + 2w - 2D = 0 .$$

Take the positive root (the overdrive of a conducting device is positive):

$$w = \frac{-2 + \sqrt{4 + 8\beta R_1D}}{2\beta R_1} = \frac{\sqrt{1 + 2\beta R_1D} - 1}{\beta R_1} .$$

$$\boxed{V_X = V_{TH} + \frac{\sqrt{1 + 2\beta R_1(V_{DD} - V_{TH})} - 1}{\beta R_1}} \qquad (V_{DD} > 0.7\ \mathrm{V}) .$$

**Slope.** Differentiate $w$ with respect to $D$:

$$\frac{dV_X}{dV_{DD}} = \frac{1}{\beta R_1}\cdot\frac{2\beta R_1}{2\sqrt{1 + 2\beta R_1D}} = \frac{1}{\sqrt{1 + 2\beta R_1(V_{DD} - V_{TH})}} .$$

- At $V_{DD} = 0.7^+$ the slope is 1: the curve leaves the 45° line smoothly, without a kink.
- The slope then falls steadily. It equals $1/(1 + g_{m2}R_1)$, the divider between $R_1$ and the diode's small-signal resistance $1/g_{m2}$, which drops as the current grows.
- For large $V_{DD}$, $V_X \approx V_{TH} + \sqrt{2(V_{DD} - V_{TH})/(\beta R_1)}$: a slow, square-root-like rise.

### Step 4 — $V_Y$: $M_1$ copies the current

$M_1$ has $V_{GS1} = V_X$, the same as $M_2$. **Suppose** it is saturated. Then (identical devices, $\lambda = 0$) it carries the same current $I = (V_{DD} - V_X)/R_1$. KCL at Y gives

$$V_Y = V_{DD} - R_1I = V_{DD} - R_1\frac{V_{DD} - V_X}{R_1} = V_X .$$

**Check the assumption.** Then $V_{DS1} = V_Y = V_X = V_{GS1}$, which is certainly $\ge V_{GS1} - V_{TH}$. $M_1$ is saturated, as assumed.

**Uniqueness.** At node Y the resistor current $(V_{DD} - V_Y)/R_1$ decreases as $V_Y$ rises, while the current of $M_1$ (fixed $V_{GS}$) increases with $V_Y$ in triode and is constant in saturation. The two curves can cross only once, so $V_Y = V_X$ is the only solution.

$$V_Y = V_X \qquad\text{for all } V_{DD} .$$

**Intuition.** The right branch is an exact replica of the left one ($R_1$ from $V_{DD}$, a transistor with the same $V_{GS}$). Since $M_2$ has $V_{DS} = V_{GS}$, so does $M_1$, and the replica has the same node voltage.

### Step 5 — Illustrative numbers

For example, with $\beta = 1\ \mathrm{mA/V^2}$ and $R_1 = 10\ \mathrm{k}\Omega$ ($\beta R_1 = 10\ \mathrm{V^{-1}}$):

| $V_{DD}$ (V) | 0.5 | 0.7 | 0.8 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|---|
| $V_X = V_Y$ (V) | 0.50 | 0.70 | 0.77 | 0.86 | 1.01 | 1.12 | 1.21 | 1.29 |
| current (μA) | 0 | 0 | 3 | 14 | 49 | 88 | 129 | 171 |
| slope $dV_X/dV_{DD}$ | 1 | 1 | 0.58 | 0.38 | 0.24 | 0.19 | 0.16 | 0.15 |

A larger $\beta R_1$ (wider device or larger resistor) makes the curve flatten sooner and stay closer to $V_{TH}$; a smaller $\beta R_1$ keeps it near the 45° line for longer.

### Result

**$V_X = V_Y$ for all $V_{DD}$**, and both curves are identical:

- $0 \le V_{DD} \le 0.7$ V: both transistors off, $V_X = V_Y = V_{DD}$ (slope 1).
- $V_{DD} > 0.7$ V: both follow the diode curve
$$V_X = V_Y = V_{TH} + \frac{\sqrt{1 + 2\beta R_1(V_{DD} - V_{TH})} - 1}{\beta R_1},$$
which leaves the 45° line with slope 1 at 0.7 V and then rises ever more slowly (slope $1/\sqrt{1 + 2\beta R_1(V_{DD} - V_{TH})}$, roughly as $\sqrt{V_{DD}}$).

$M_1$ is always saturated ($V_{DS1} = V_{GS1}$) and carries the same current as $M_2$.

**Common mistake.** Claiming that $M_1$ is in triode, or that $V_Y$ falls toward zero as $V_{DD}$ increases. $M_1$ is a replica of $M_2$ with an identical resistor; with $V_Y = V_X$ its $V_{DS}$ equals its $V_{GS}$, so it is saturated and $V_Y$ rises exactly like $V_X$.

**Common mistake.** Clamping $V_X$ at exactly $V_{TH}$ for $V_{DD} > 0.7$ V, or drawing it rising with slope 1 throughout. The diode needs an overdrive that grows with its current, so $V_X$ keeps rising, but sub-linearly.

**Common mistake.** Reading the circuit as a cross-coupled latch. Only $M_2$ is diode-connected and both gates are tied to X; there is no positive feedback, so there is no bistable or bifurcating solution in which one output falls.
