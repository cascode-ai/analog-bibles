# Detailed solution - R245

**Approach.** Now $R_2$ runs from node X (the drain and gate of the diode-connected $M_2$, also the gate of $M_1$) to ground. It shunts part of the left-branch current away from $M_2$. Below turn-on, X is set by the $R_1$–$R_2$ divider. Above turn-on, KCL at X fixes $V_X$, and $M_1$ copies only the transistor part of the left-branch current. The right branch therefore drops less across its $R_1$, giving $V_Y = (1 + R_1/R_2)V_X$.

### Step 1 — The circuit

Reading the figure:

- Left: $R_1$ from $V_{DD}$ to X; $M_2$ from X to ground, with its gate tied to X (diode-connected); $R_2$ from the gate node, which is X, to ground. So $R_2$ is in parallel with the diode $M_2$.
- Right: $R_1$ from $V_{DD}$ to Y; $M_1$ from Y to ground with its gate tied to X.

Both transistors have $V_{GS} = V_X$. Square law with $\lambda = 0$, $\beta = \mu_nC_{ox}W/L$, $V_{TH} = 0.7$ V. Define $a = 1 + R_1/R_2$ for brevity.

### Step 2 — Both transistors off: $V_{DD} \le V_{TH}(1 + R_1/R_2)$

While $V_X < V_{TH}$ neither transistor conducts. The left branch is then just the divider $R_1$–$R_2$:

$$V_X = V_{DD}\frac{R_2}{R_1 + R_2} = \frac{V_{DD}}{a} .$$

The right branch carries no current, so there is no drop across its $R_1$:

$$V_Y = V_{DD} .$$

**Turn-on point.** $M_2$ (and $M_1$) start to conduct when $V_X$ reaches $V_{TH}$:

$$\frac{V_{DD}}{a} = V_{TH} \quad\Longrightarrow\quad V_{DD,on} = V_{TH}\left(1 + \frac{R_1}{R_2}\right) = 0.7\left(1 + \frac{R_1}{R_2}\right)\ \mathrm{V} .$$

This is *above* 0.7 V: the divider delivers only a fraction of $V_{DD}$ to the gate. In this region $V_X$ rises with slope $R_2/(R_1 + R_2) = 1/a$ and $V_Y$ with slope 1.

### Step 3 — $V_X$ above turn-on

$M_2$ is diode-connected, hence saturated. **KCL at X** (current from $R_1$ = current in $R_2$ + diode current):

$$\frac{V_{DD} - V_X}{R_1} = \frac{V_X}{R_2} + \frac{\beta}{2}(V_X - V_{TH})^2 .$$

Let $w = V_X - V_{TH}$. Multiply by $R_1$:

$$V_{DD} - V_{TH} - w = \frac{R_1}{R_2}(V_{TH} + w) + \frac{\beta R_1}{2}w^2 .$$

Collect terms (using $a = 1 + R_1/R_2$):

$$\frac{\beta R_1}{2}w^2 + a\,w - \left(V_{DD} - aV_{TH}\right) = 0 .$$

Positive root:

$$w = \frac{-a + \sqrt{a^2 + 2\beta R_1(V_{DD} - aV_{TH})}}{\beta R_1},$$

$$V_X = V_{TH} + \frac{\sqrt{a^2 + 2\beta R_1\left(V_{DD} - aV_{TH}\right)} - a}{\beta R_1}, \qquad V_{DD} \ge aV_{TH} .$$

**Slope:** $dV_X/dV_{DD} = 1/\sqrt{a^2 + 2\beta R_1(V_{DD} - aV_{TH})}$. At turn-on this equals $1/a$, the same as the divider slope just below, so the curve has no kink. Above turn-on the slope decreases steadily: $V_X$ rises slowly from 0.7 V, as a diode voltage does.

### Step 4 — $V_Y$ above turn-on

**Current of $M_2$.** From KCL at X, the transistor current is the left-branch current minus what $R_2$ takes:

$$I_{D2} = \frac{V_{DD} - V_X}{R_1} - \frac{V_X}{R_2} .$$

**$M_1$ copies it.** $M_1$ has the same $V_{GS}$. If it is saturated, $I_{D1} = I_{D2}$ (identical devices, $\lambda = 0$).

**KCL at Y:**

$$V_Y = V_{DD} - R_1I_{D1} = V_{DD} - R_1\left(\frac{V_{DD} - V_X}{R_1} - \frac{V_X}{R_2}\right) = V_{DD} - V_{DD} + V_X + \frac{R_1}{R_2}V_X .$$

$$\boxed{V_Y = \left(1 + \frac{R_1}{R_2}\right)V_X}$$

**Check that $M_1$ is saturated:** $V_{DS1} = V_Y > V_X = V_{GS1} > V_{GS1} - V_{TH}$ ✓.

**Continuity at turn-on:** at $V_{DD} = aV_{TH}$, $V_X = V_{TH}$, so $V_Y = aV_{TH} = V_{DD}$, matching the off-region value. The slope of $V_Y$ is $a\cdot(1/a) = 1$ there, also continuous. Above turn-on the slope $a/\sqrt{a^2 + 2\beta R_1(V_{DD} - aV_{TH})}$ falls below 1, so $V_Y$ bends away from the 45° line and keeps rising more slowly.

**Intuition.** $R_2$ steals part of the current that would otherwise flow in $M_2$. The mirror copies only the transistor current, so $M_1$ draws *less* than the left $R_1$ carries. The right $R_1$ therefore drops less voltage than the left one, and $V_Y$ sits above $V_X$, by exactly $(R_1/R_2)V_X$.

### Step 5 — Illustrative numbers

For example, $\beta = 1\ \mathrm{mA/V^2}$, $R_1 = 10\ \mathrm{k}\Omega$, $R_2 = 20\ \mathrm{k}\Omega$ ($a = 1.5$, turn-on at $1.5\times0.7 = 1.05$ V):

| $V_{DD}$ (V) | 0.5 | 1.0 | 1.05 | 1.2 | 1.5 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|---|
| $V_X$ (V) | 0.33 | 0.67 | 0.70 | 0.78 | 0.89 | 1.01 | 1.11 | 1.19 |
| $V_Y$ (V) | 0.50 | 1.00 | 1.05 | 1.17 | 1.33 | 1.52 | 1.66 | 1.79 |
| $I_{D1} = I_{D2}$ (μA) | 0 | 0 | 0 | 3 | 17 | 48 | 84 | 121 |

### Result

- **$V_{DD} < V_{TH}(1 + R_1/R_2)$:** both transistors off. $V_X = V_{DD}R_2/(R_1 + R_2)$ (divider, slope $R_2/(R_1 + R_2)$) and $V_Y = V_{DD}$ (slope 1).
- **At $V_{DD} = V_{TH}(1 + R_1/R_2)$:** $V_X$ reaches 0.7 V and the transistors turn on.
- **Above:** $V_X$ rises slowly from 0.7 V, the solution of $\dfrac{V_{DD} - V_X}{R_1} = \dfrac{V_X}{R_2} + \dfrac{\beta}{2}(V_X - V_{TH})^2$, i.e.
$$V_X = V_{TH} + \frac{\sqrt{a^2 + 2\beta R_1(V_{DD} - aV_{TH})} - a}{\beta R_1}, \qquad a = 1 + \frac{R_1}{R_2},$$
and $V_Y = (1 + R_1/R_2)V_X$. $V_Y$ is continuous at the turn-on point, bends over there and keeps rising, more slowly than before, always $(1 + R_1/R_2)$ times $V_X$.

**Common mistake.** Concluding $V_Y = V_X$ as in the circuit without $R_2$, or $V_Y < V_X$. $M_1$ copies only $M_2$'s current, which is *less* than the current in the left $R_1$ (part of that goes into $R_2$). So the right $R_1$ drops less voltage and $V_Y > V_X$.

**Common mistake.** Placing the turn-on at $V_{DD} = 0.7$ V. The gate sees only the divided voltage $V_{DD}R_2/(R_1 + R_2)$, so $V_{DD}$ must reach $0.7(1 + R_1/R_2)$ V before $V_X$ reaches the threshold.

**Common mistake.** Misreading where $R_2$ connects (to $V_{DD}$, or to Y). In the figure it hangs from the gate node, which is X because $M_2$ is diode-connected, down to ground.
