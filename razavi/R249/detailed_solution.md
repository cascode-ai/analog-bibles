# Detailed solution - R249

**Approach.** The circuit is the resistor-loaded mirror ($R_1$ in each branch, $M_2$ diode-connected, both gates at X) plus a source follower $M_3$ with its gate at Y, its source at X and its drain at $V_{DD}$. KCL at X and Y shows that $M_3$ could conduct only with a *negative* current, which is impossible. So $M_3$ is off, $V_X = V_Y$, and the curves are those of the plain mirror.

### Step 1 — Node equations

$V_{GS1} = V_{GS2} = V_X$ and $V_{GS3} = V_Y - V_X$. With the bulks grounded and its source at $V_X > 0$, $M_3$ has $V_{TH3} = 0.7 + 0.45(\sqrt{0.9 + V_X} - \sqrt{0.9}) \ge 0.7$ V. Its drain is at $V_{DD}$, so if it conducts its current flows **into** X: $I_{D3} \ge 0$.

KCL at X (inflows from $R_1$ and $M_3$, outflow into $M_2$) and at Y (the gate of $M_3$ draws no current):

$$\frac{V_{DD} - V_X}{R_1} + I_{D3} = I_{D2} , \qquad (1)$$

$$\frac{V_{DD} - V_Y}{R_1} = I_{D1} . \qquad (2)$$

### Step 2 — $M_3$ cannot conduct

**Case A: $M_1$ saturated.** With the same $V_{GS}$ as $M_2$, $I_{D1} = I_{D2}$, and subtracting (1) from (2):

$$\frac{V_{DD} - V_Y}{R_1} - \frac{V_{DD} - V_X}{R_1} - I_{D3} = 0 \quad\Longrightarrow\quad I_{D3} = \frac{V_X - V_Y}{R_1} .$$

$M_3$ conducts only if $V_{GS3} = V_Y - V_X > V_{TH3} > 0$, i.e. $V_Y > V_X$, which would make $I_{D3} < 0$: a contradiction. Hence $I_{D3} = 0$ and $V_Y = V_X$. This is consistent: $V_{GS3} = 0 < V_{TH3}$ ($M_3$ off) and $V_{DS1} = V_X = V_{GS1}$ ($M_1$ saturated).

**Case B: $M_1$ in triode.** This needs $V_Y < V_X - 0.7$ V, so $V_{GS3} < -0.7$ V and $I_{D3} = 0$. Then (1) and (2) give $I_{D2} = (V_{DD} - V_X)/R_1$ and $I_{D1} = (V_{DD} - V_Y)/R_1 > I_{D2}$ (since $V_Y < V_X$), whereas a triode device carries *less* than a saturated one with the same $V_{GS}$. Contradiction, so Case B is impossible.

So $M_3$ is always off and $V_Y = V_X$: the follower would turn on only if Y rose a threshold above X, and the mirror never lets that happen.

### Step 3 — The curves

With $M_3$ off, the circuit is the plain resistor-loaded mirror. For $0 \le V_{DD} \le 0.7$ V, $M_1$ and $M_2$ are off and

$$V_X = V_Y = V_{DD} .$$

For $V_{DD} > 0.7$ V, KCL at X with the diode's square law gives

$$\frac{V_{DD} - V_X}{R_1} = \frac{\beta}{2}(V_X - 0.7)^2 .$$

With $w = V_X - 0.7$ and $D = V_{DD} - 0.7$, multiplying by $2R_1$ gives $\beta R_1w^2 + 2w - 2D = 0$, whose positive root is

$$V_X = V_Y = 0.7 + \frac{\sqrt{1 + 2\beta R_1(V_{DD} - 0.7)} - 1}{\beta R_1} .$$

The slope, $dV_X/dV_{DD} = 1/\sqrt{1 + 2\beta R_1(V_{DD} - 0.7)}$, is 1 at 0.7 V and then falls steadily: a slow, square-root-like rise. With $\beta R_1 = 10\ \mathrm{V^{-1}}$ (e.g. $\beta = 1\ \mathrm{mA/V^2}$, $R_1 = 10\ \mathrm{k}\Omega$):

| $V_{DD}$ (V) | 0.5 | 0.7 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|
| $V_X = V_Y$ (V) | 0.50 | 0.70 | 0.86 | 1.01 | 1.12 | 1.21 | 1.29 |
| $V_{GS3}$ (V) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### Result

**$M_3$ never turns on, and $V_X = V_Y$ for all $V_{DD}$:**

- $0 \le V_{DD} \le 0.7$ V: $V_X = V_Y = V_{DD}$.
- $V_{DD} > 0.7$ V: both follow the diode curve
$$V_X = V_Y = 0.7 + \frac{\sqrt{1 + 2\beta R_1(V_{DD} - 0.7)} - 1}{\beta R_1},$$
leaving the 45° line with slope 1 and rising ever more slowly.

The KCL equations give $I_{D3} = (V_X - V_Y)/R_1$, which would be negative whenever $M_3$ had enough $V_{GS}$ to conduct. So $I_{D3} = 0$, and the circuit behaves as the plain resistor-loaded mirror.

**Common mistake.** Assuming that the follower $M_3$ carries a significant current and pulls X up toward $V_Y - V_{TH}$. It would need $V_Y > V_X + V_{TH3}$, which the KCL equations rule out.

**Common mistake.** Claiming that $M_1$ goes into triode. A triode $M_1$ would carry less current than $M_2$, while its branch would need to carry more.

**Common mistake.** Drawing $V_Y$ slightly different from $V_X$ because $M_3$ "conducts a little". In the square-law model with $\lambda = 0$ the solution is exactly $V_Y = V_X$ with $V_{GS3} = 0$.
