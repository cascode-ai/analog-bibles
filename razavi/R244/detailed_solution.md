# Detailed solution - R244

**Approach.** This is the resistor-loaded mirror ($R_1$ in each branch, $M_2$ diode-connected, both gates at X) with an extra resistor $R_2$ between X and Y. Show that the solution has $V_X = V_Y$, so $R_2$ carries no current and the curves are those of the circuit without $R_2$; then find $V_X(V_{DD})$ from KCL at X with the square law.

### Step 1 — Region $V_{DD} \le 0.7$ V

Both transistors have $V_{GS} = V_X$, and no node can rise above $V_{DD}$, so for $V_{DD} \le 0.7$ V both are off. The only remaining path, $R_1$–$R_2$–$R_1$, connects two points at $V_{DD}$, so no current flows:

$$V_X = V_Y = V_{DD} \qquad (0 \le V_{DD} \le 0.7\ \mathrm{V}) .$$

### Step 2 — Showing that $V_X = V_Y$ when the transistors conduct

KCL at X and at Y, with $I_{R2} = (V_X - V_Y)/R_2$ the current in $R_2$ from X to Y:

$$\frac{V_{DD} - V_X}{R_1} = I_{D2} + \frac{V_X - V_Y}{R_2} , \qquad (1)$$

$$\frac{V_{DD} - V_Y}{R_1} + \frac{V_X - V_Y}{R_2} = I_{D1} . \qquad (2)$$

Subtracting (2) from (1):

$$\frac{V_Y - V_X}{R_1} - \frac{2(V_X - V_Y)}{R_2} = I_{D2} - I_{D1} \quad\Longrightarrow\quad (V_Y - V_X)\left(\frac{1}{R_1} + \frac{2}{R_2}\right) = I_{D2} - I_{D1} . \qquad (3)$$

Both devices have $V_{GS} = V_X$, and the diode $M_2$ is saturated.

- **If $M_1$ is saturated** ($V_Y \ge V_X - V_{TH}$), $I_{D1} = I_{D2}$ ($\lambda = 0$), and (3) gives $V_Y - V_X = 0$.
- **If $M_1$ were in triode** ($V_Y < V_X - V_{TH}$, so $V_Y < V_X$), then $I_{D1} < I_{D2}$ and (3) requires $V_Y > V_X$, a contradiction.

So the only solution is

$$V_Y = V_X, \qquad I_{R2} = 0 ,$$

with $V_{DS1} = V_{GS1}$, so $M_1$ is indeed saturated. **$R_2$ connects two nodes that are always at the same voltage, so it carries no current and has no effect.**

### Step 3 — The curve for $V_{DD} > 0.7$ V

With $I_{R2} = 0$, (1) is the same as without $R_2$:

$$\frac{V_{DD} - V_X}{R_1} = \frac{\beta}{2}(V_X - V_{TH})^2 .$$

With $w = V_X - V_{TH}$ and $D = V_{DD} - V_{TH}$, multiplying by $2R_1$ and taking the positive root:

$$\beta R_1w^2 + 2w - 2D = 0 \quad\Longrightarrow\quad w = \frac{\sqrt{1 + 2\beta R_1D} - 1}{\beta R_1} ,$$

$$V_X = V_Y = V_{TH} + \frac{\sqrt{1 + 2\beta R_1(V_{DD} - V_{TH})} - 1}{\beta R_1} .$$

The slope $dV_X/dV_{DD} = 1/\sqrt{1 + 2\beta R_1(V_{DD} - V_{TH})}$ is 1 at $V_{DD} = 0.7$ V (a smooth departure from the 45° line) and falls steadily, so the curve rises ever more slowly, roughly as $V_{TH} + \sqrt{2(V_{DD} - V_{TH})/(\beta R_1)}$ for large $V_{DD}$.

**Example.** With $\beta R_1 = 10\ \mathrm{V^{-1}}$ (e.g. $\beta = 1\ \mathrm{mA/V^2}$, $R_1 = 10\ \mathrm{k}\Omega$), whatever $R_2$ is:

| $V_{DD}$ (V) | 0.5 | 0.7 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|
| $V_X = V_Y$ (V) | 0.50 | 0.70 | 0.86 | 1.01 | 1.12 | 1.21 | 1.29 |

### Result

Identical to the circuit without $R_2$: **$V_X = V_Y$ for all $V_{DD}$, and $R_2$ carries no current.**

- $0 \le V_{DD} \le 0.7$ V: both transistors off, $V_X = V_Y = V_{DD}$.
- $V_{DD} > 0.7$ V: both follow
$$V_X = V_Y = V_{TH} + \frac{\sqrt{1 + 2\beta R_1(V_{DD} - V_{TH})} - 1}{\beta R_1},$$
leaving the 45° line with slope 1 at 0.7 V and then rising ever more slowly.

The result is independent of $R_2$, because $R_2$ connects two nodes at the same potential.

**Common mistake.** Assuming that $R_2$ must carry some current and shift $V_Y$ away from $V_X$. Equation (3) shows that, with $M_1$ saturated, any difference $V_Y - V_X$ must be zero.

**Common mistake.** Claiming that $M_1$ is in triode or that $V_Y$ drops toward zero. $V_Y = V_X$ gives $V_{DS1} = V_{GS1}$, deep in saturation.

**Common mistake.** Treating $R_2$ as a load to ground or to $V_{DD}$. It connects X and Y directly, which is why symmetry makes it irrelevant.
