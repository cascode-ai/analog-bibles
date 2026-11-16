# Detailed solution - R519

**Approach.** With $W/L$ (and therefore $\beta$) fixed, $g_m = \beta V_{ov}^2$ and $I_D = \beta V_{ov}^3/3$ are pure powers of the overdrive $V_{ov} = V_{GS} - V_{TH}$, each one power higher than the square law's straight line and parabola. Find each curve's shape from its derivatives, tabulate a few points, and compare.

### Step 1 — Shape of the $g_m$ curve

$$\frac{dg_m}{dV_{ov}} = 2\beta V_{ov},\qquad \frac{d^2g_m}{dV_{ov}^2} = 2\beta > 0 .$$

The slope is **zero at the origin** (the curve leaves it horizontally) and the curve is **convex** everywhere: a parabola. Doubling the overdrive multiplies $g_m$ by $2^2 = 4$; for the square law it only doubles.

### Step 2 — Shape of the $I_D$ curve

$$\frac{dI_D}{dV_{ov}} = \beta V_{ov}^2 = g_m,\qquad \frac{d^2I_D}{dV_{ov}^2} = 2\beta V_{ov} \ge 0 .$$

Slope *and* curvature are zero at the origin, so the cubic is even flatter there than the square-law parabola, and it is convex for all $V_{ov} > 0$. Doubling the overdrive multiplies $I_D$ by $2^3 = 8$ (square law: 4).

### Step 3 — Example values for the sketch

Take $\beta = 30\ \mathrm{mA/V^3}$:

$$g_m = 30\ \mathrm{mA/V^3}\times V_{ov}^2,\qquad I_D = 10\ \mathrm{mA/V^3}\times V_{ov}^3 .$$

| $V_{ov}$ (V) | 0 | 0.1 | 0.2 | 0.3 | 0.4 |
|---|---|---|---|---|---|
| $g_m$ (mS), plotted upward | 0 | 0.3 | 1.2 | 2.7 | 4.8 |
| $I_D$ (µA), plotted downward | 0 | 10 | 80 | 270 | 640 |
| $g_m/I_D = 3/V_{ov}$ (V⁻¹) | — | 30 | 15 | 10 | 7.5 |

For example, at $V_{ov} = 0.3$ V: $g_m = 30\times0.09 = 2.7$ mS and $I_D = 10\times0.027\ \mathrm{mA} = 270\ \mu\mathrm{A}$.

**The sketch.** On the figure's axes:
- **upper half:** a parabola tangent to the horizontal axis at the origin and curving upward (in place of the square law's straight line);
- **lower half:** a cubic, also tangent to the axis at the origin, staying close to it for small $V_{ov}$ and then plunging downward ever faster (in place of the square law's parabola).

### Step 4 — Relation between the two curves

$$\frac{g_m}{I_D} = \frac{\beta V_{ov}^2}{\beta V_{ov}^3/3} = \frac{3}{V_{ov}},$$

which falls as the overdrive grows (last row of the table): $I_D$ grows faster than $g_m$, so extra overdrive buys transconductance at an ever higher cost in current. The square law shows the same trend ($2/V_{ov}$), but this device has 1.5 times more $g_m$ per unit current at any overdrive.

### Result

At constant $W/L$:
- $g_m = \beta(V_{GS} - V_{TH})^2$ is a **parabola** that starts at the origin with zero slope and is convex, instead of the square law's straight line;
- $I_D = \beta(V_{GS} - V_{TH})^3/3$ is a **cubic** that starts flat at the origin and rises (plotted downward) ever more steeply, instead of the square law's parabola.

Both curves bend upward (convex). $I_D$ eventually grows faster than $g_m$, since $g_m/I_D = 3/(V_{GS} - V_{TH})$ decreases with the overdrive.

**Common mistake.** Redrawing the square-law plots, a linear $g_m$ and a parabolic $I_D$. Here $g_m$ itself is quadratic in the overdrive, so $I_D$, its integral, is cubic.

**Common mistake.** Drawing the $g_m$ parabola with a nonzero initial slope, or starting the curves anywhere other than $V_{GS} - V_{TH} = 0$. $dg_m/dV_{ov} = 2\beta V_{ov}$ vanishes at the origin, and both $g_m$ and $I_D$ are zero at threshold.
