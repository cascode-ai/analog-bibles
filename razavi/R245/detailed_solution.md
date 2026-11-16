# Detailed solution - R245

**Approach.** $R_2$ runs from node X (drain and gate of the diode-connected $M_2$, also the gate of $M_1$) to ground, in parallel with the diode, and shunts part of the left-branch current away from $M_2$. Below turn-on, X is set by the $R_1$–$R_2$ divider. Above turn-on, KCL at X fixes $V_X$, and $M_1$ copies only the transistor part of the left-branch current, so the right $R_1$ drops less, giving $V_Y = (1 + R_1/R_2)V_X$.

### Step 1 — Both transistors off: $V_{DD} \le V_{TH}(1 + R_1/R_2)$

Both transistors have $V_{GS} = V_X$. Let $a = 1 + R_1/R_2$. While $V_X < V_{TH}$ neither conducts, so the left branch is the divider $R_1$–$R_2$ and the right branch carries no current:

$$V_X = V_{DD}\frac{R_2}{R_1 + R_2} = \frac{V_{DD}}{a}, \qquad V_Y = V_{DD} .$$

The transistors turn on when $V_X$ reaches $V_{TH}$:

$$\frac{V_{DD}}{a} = V_{TH} \quad\Longrightarrow\quad V_{DD,on} = V_{TH}\left(1 + \frac{R_1}{R_2}\right) = 0.7\left(1 + \frac{R_1}{R_2}\right)\ \mathrm{V} ,$$

*above* 0.7 V, since the gate gets only a fraction of $V_{DD}$. In this region $V_X$ rises with slope $R_2/(R_1 + R_2) = 1/a$ and $V_Y$ with slope 1.

### Step 2 — $V_X$ above turn-on

$M_2$ is diode-connected, hence saturated. KCL at X (current from $R_1$ = current in $R_2$ + diode current):

$$\frac{V_{DD} - V_X}{R_1} = \frac{V_X}{R_2} + \frac{\beta}{2}(V_X - V_{TH})^2 .$$

With $w = V_X - V_{TH}$, multiplying by $R_1$ and collecting terms:

$$V_{DD} - V_{TH} - w = \frac{R_1}{R_2}(V_{TH} + w) + \frac{\beta R_1}{2}w^2 \quad\Longrightarrow\quad \frac{\beta R_1}{2}w^2 + a\,w - \left(V_{DD} - aV_{TH}\right) = 0 .$$

Taking the positive root,

$$w = \frac{-a + \sqrt{a^2 + 2\beta R_1(V_{DD} - aV_{TH})}}{\beta R_1},$$

$$V_X = V_{TH} + \frac{\sqrt{a^2 + 2\beta R_1\left(V_{DD} - aV_{TH}\right)} - a}{\beta R_1}, \qquad V_{DD} \ge aV_{TH} .$$

The slope $dV_X/dV_{DD} = 1/\sqrt{a^2 + 2\beta R_1(V_{DD} - aV_{TH})}$ equals $1/a$ at turn-on, matching the divider slope (no kink), and then decreases: $V_X$ rises slowly from 0.7 V, like a diode voltage.

### Step 3 — $V_Y$ above turn-on

From KCL at X, the transistor current is the left-branch current minus what $R_2$ takes:

$$I_{D2} = \frac{V_{DD} - V_X}{R_1} - \frac{V_X}{R_2} .$$

$M_1$ has the same $V_{GS}$; if it is saturated, $I_{D1} = I_{D2}$, and KCL at Y gives

$$V_Y = V_{DD} - R_1I_{D1} = V_{DD} - R_1\left(\frac{V_{DD} - V_X}{R_1} - \frac{V_X}{R_2}\right) = V_{DD} - V_{DD} + V_X + \frac{R_1}{R_2}V_X ,$$

$$\boxed{V_Y = \left(1 + \frac{R_1}{R_2}\right)V_X}$$

$M_1$ is indeed saturated: $V_{DS1} = V_Y > V_X = V_{GS1} > V_{GS1} - V_{TH}$ ✓.

At turn-on ($V_{DD} = aV_{TH}$, $V_X = V_{TH}$), $V_Y = aV_{TH} = V_{DD}$, matching the off-region value, and its slope $a\cdot(1/a) = 1$ is continuous too. Above turn-on the slope $a/\sqrt{a^2 + 2\beta R_1(V_{DD} - aV_{TH})}$ falls below 1, so $V_Y$ bends away from the 45° line and keeps rising more slowly.

$R_2$ takes part of the left-branch current and the mirror copies only the transistor part, so $M_1$ draws less than the left $R_1$ carries, and $V_Y$ sits above $V_X$ by exactly $(R_1/R_2)V_X$.

### Step 4 — Illustrative numbers

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

**Common mistake.** Concluding $V_Y = V_X$ as in the circuit without $R_2$, or $V_Y < V_X$. $M_1$ copies only $M_2$'s current, which is *less* than the current in the left $R_1$, so the right $R_1$ drops less and $V_Y > V_X$.

**Common mistake.** Placing the turn-on at $V_{DD} = 0.7$ V. The gate sees only $V_{DD}R_2/(R_1 + R_2)$, so $V_{DD}$ must reach $0.7(1 + R_1/R_2)$ V.
