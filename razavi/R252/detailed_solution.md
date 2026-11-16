# Detailed solution - R252

**Approach.** Now $V_1$ drives the **source of $M_1$** (the copy), while the diode $M_2$ keeps its source grounded. Raising $V_1$ reduces $M_1$'s gate–source voltage, and the body effect raises its threshold at the same time, so $M_1$'s current falls quickly and Y rises. Once $M_1$ cuts off, $V_1$ disappears from the node equations and both voltages stay constant: Y becomes the midpoint of an $R_1$–$R_2$ divider between $V_{DD}$ and X. We write the node equations, follow the trend, find the cutoff point and the flat levels, and give an example.

### Step 1 — The circuit and node equations

Reading the figure:

- $I_{REF}$ flows from $V_{DD}$ into X. $M_2$ has its drain and gate at X (diode-connected) and its source grounded.
- $R_2$ connects X and Y; $R_1$ connects $V_{DD}$ to Y.
- $M_1$ has its gate at X, its drain at Y, and its source at the positive terminal of $V_1$ (the negative terminal is grounded).

So $V_{GS2} = V_X$ and $V_{GS1} = V_X - V_1$. The bulks are grounded, so $M_1$ has $V_{SB1} = V_1$ and

$$V_{TH1}(V_1) = 0.7 + 0.45\left(\sqrt{0.9 + V_1} - \sqrt{0.9}\right) .$$

Square law with $\lambda = 0$, $\beta = \mu_nC_{ox}W/L$.

**KCL at X** ($I_{REF}$ and the $R_2$ current from Y flow in; $M_2$'s current flows out):

$$I_{REF} + \frac{V_Y - V_X}{R_2} = \frac{\beta}{2}(V_X - 0.7)^2 . \qquad (1)$$

**KCL at Y** ($R_1$ current in; $R_2$ current and $M_1$'s current out):

$$\frac{V_{DD} - V_Y}{R_1} = \frac{V_Y - V_X}{R_2} + I_{D1}, \qquad I_{D1} = \frac{\beta}{2}\left(V_X - V_1 - V_{TH1}(V_1)\right)^2\ \text{(if saturated)} . \qquad (2)$$

### Step 2 — Starting point, $V_1 = 0$

With $V_1 = 0$ both sources are grounded and the circuit is a resistor-loaded mirror with $R_2$ between X and Y. Typically $R_1$ pulls Y above X, so some current flows from Y into X and $M_2$ carries a bit more than $I_{REF}$. $V_X$ is then slightly above $V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$.

### Step 3 — Raising $V_1$: $M_1$ weakens, $V_Y$ rises

$M_1$'s overdrive is $V_X - V_1 - V_{TH1}(V_1)$. As $V_1$ increases:

- $V_1$ itself is subtracted, and
- $V_{TH1}$ grows through the body effect,

while $V_X$ hardly moves (it is a diode voltage). The overdrive therefore shrinks by *more* than the rise of $V_1$, and $I_{D1}$ drops quickly. With less current pulled out of Y, the drop across $R_1$ falls and **$V_Y$ rises**.

**Effect on $V_X$.** As $V_Y$ rises above $V_X$, more current flows from Y through $R_2$ into X. By (1) this adds to $M_2$'s current, so **$V_X$ rises a little** (a diode needs a slightly larger voltage for a larger current).

### Step 4 — Cutoff of $M_1$

$M_1$ turns off when its overdrive reaches zero:

$$V_X - V_1 = V_{TH1}(V_1) \qquad\Longleftrightarrow\qquad V_1 + V_{TH1}(V_1) = V_X .$$

Since $V_X$ is only a little above $V_{GS}(I_{REF})$, this happens at $V_1 \approx V_X - V_{TH1}$, a few hundred millivolts, roughly the overdrive of $M_2$ (slightly less, because of the body effect).

### Step 5 — The flat region ($M_1$ off)

With $I_{D1} = 0$, the current entering Y from $R_1$ all continues through $R_2$ into X. $R_1$ and $R_2$ form a series path from $V_{DD}$ to X carrying

$$I_R = \frac{V_{DD} - V_X}{R_1 + R_2} .$$

**$V_Y$** is the divider point on this path:

$$V_Y = V_X + (V_{DD} - V_X)\frac{R_2}{R_1 + R_2} .$$

**$V_X$** follows from (1): $M_2$ carries $I_{REF} + I_R$,

$$\frac{\beta}{2}(V_X - 0.7)^2 = I_{REF} + \frac{V_{DD} - V_X}{R_1 + R_2} .$$

**Neither equation contains $V_1$**, so both voltages stay **constant** from the cutoff point up to $V_1 = V_{DD}$. Raising $V_1$ further only makes $M_1$ "more off". Once $V_1 > V_Y$ the source and drain of $M_1$ swap roles, but its gate (at $V_X$) is then below both channel terminals, so it still cannot conduct.

### Step 6 — Numerical example

$I_{REF} = 100\ \mu$A, $W/L = 10/0.5$ ($\beta = 2.68\ \mathrm{mA/V^2}$), $R_1 = R_2 = 10\ \mathrm{k}\Omega$, $V_{DD} = 3$ V.

**Flat levels.** With $u = V_X - 0.7$, the $V_X$ equation becomes

$$1.34\ \mathrm{mA/V^2}\cdot u^2 = 0.1\ \mathrm{mA} + \frac{2.3\ \mathrm{V} - u}{20\ \mathrm{k}\Omega} \;\Longrightarrow\; 1.34u^2 + 0.05u - 0.215 = 0\ \ (u\ \text{in V}),$$

$$u = \frac{-0.05 + \sqrt{0.0025 + 1.1524}}{2.68} = 0.382\ \mathrm{V}, \qquad V_X = 1.082\ \mathrm{V},$$

$$V_Y = 1.082 + (3 - 1.082)\times\tfrac12 = 2.041\ \mathrm{V} .$$

**Cutoff.** $V_1 + V_{TH1}(V_1) = 1.082$ V. At $V_1 = 0.31$ V, $V_{TH1} = 0.7 + 0.45(\sqrt{1.21} - 0.9487) = 0.7 + 0.45(1.1000 - 0.9487) = 0.768$ V, and the sum is 1.078 V, just short. At $V_1 = 0.315$ V the sum is 1.084 V. So $M_1$ turns off at about $V_1 \approx 0.31$ V.

**Full solution** of (1) and (2):

| $V_1$ (V) | 0 | 0.05 | 0.10 | 0.15 | 0.20 | 0.25 | ≥ 0.31 |
|---|---|---|---|---|---|---|---|
| $V_X$ (V) | 1.015 | 1.033 | 1.049 | 1.062 | 1.072 | 1.079 | 1.082 |
| $V_Y$ (V) | 1.343 | 1.522 | 1.682 | 1.819 | 1.928 | 2.004 | 2.041 |
| $I_{D1}$ (μA) | 133 | 99 | 68 | 42 | 22 | 7 | 0 |
| $I_{D2}$ (μA) | 133 | 149 | 163 | 176 | 186 | 193 | 196 |

$V_Y$ climbs steeply (from 1.34 V to 2.04 V within 0.3 V of $V_1$), and $V_X$ creeps up by 67 mV.

### Result

- **As $V_1$ rises from 0:** $M_1$'s gate–source voltage $V_X - V_1$ shrinks and its threshold grows (body effect, $V_{SB1} = V_1$), so $I_{D1} = \frac{\beta}{2}(V_X - V_1 - V_{TH1})^2$ falls quickly and **$V_Y$ rises**. **$V_X$ rises slightly**, because current from Y through $R_2$ adds to $M_2$'s current.
- **$M_1$ cuts off** once $V_1 + V_{TH1}(V_1) = V_X$, i.e. at a few hundred millivolts (about the overdrive of $M_2$; 0.31 V in the example).
- **Beyond that both voltages are constant:** $V_Y = V_X + (V_{DD} - V_X)\dfrac{R_2}{R_1 + R_2}$, and $V_X$ is slightly above $V_{GS}(I_{REF})$, fixed by $\frac{\beta}{2}(V_X - 0.7)^2 = I_{REF} + \frac{V_{DD} - V_X}{R_1 + R_2}$. In the example, starting from $V_X \approx 1.02$ V and $V_Y \approx 1.34$ V at $V_1 = 0$, the flat levels are $V_X \approx 1.08$ V and $V_Y \approx 2.04$ V.

**Common mistake.** Keeping $M_1$ on up to large $V_1$. $M_1$'s gate is held near $V_{GS}(I_{REF})$ by the diode, so once its source rises by roughly one overdrive, there is no gate drive left. With the body effect this happens even a little sooner.

**Common mistake.** Placing the flat $V_Y$ at $V_{DD}$ (forgetting $R_2$) or at $V_X$. With $M_1$ off, $R_1$ and $R_2$ still conduct from $V_{DD}$ into X, and Y sits at their divider point.

**Common mistake.** Drawing $V_Y$ decreasing, or letting $V_X$ follow $V_1$. Raising the source of $M_1$ *removes* current from Y, so Y rises; X is a diode node referred to ground and changes only slightly.
