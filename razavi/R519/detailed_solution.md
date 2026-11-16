# Detailed solution - R519

**Approach.** With $W/L$ (and therefore $\beta$) fixed, the device law gives $g_m$ and $I_D$ directly as powers of the overdrive $V_{ov} = V_{GS} - V_{TH}$: $g_m \propto V_{ov}^2$ and $I_D \propto V_{ov}^3$. We find the shape of each curve from its first and second derivatives, tabulate a few points, and compare with the square-law curves of the figure (a line and a parabola).

### Step 1 — The square-law curves in the figure

For the long-channel device, with $\mu_n$ the electron mobility and $C_{ox}$ the oxide capacitance per unit area,

$$g_m = \mu_nC_{ox}\frac WL V_{ov}\quad(\text{straight line}),\qquad I_D = \tfrac12\mu_nC_{ox}\frac WL V_{ov}^2\quad(\text{parabola}).$$

That is what the figure shows: $g_m$ rising linearly from the origin, and $I_D$ (plotted downward) starting flat and curving away ever faster.

### Step 2 — The hypothetical device at constant $W/L$

The given law is $g_m = \beta V_{ov}^2$. Integrating $g_m = dI_D/dV_{GS}$ with $I_D = 0$ at threshold gives $I_D = \beta V_{ov}^3/3$. With $W/L$ fixed, $\beta$ is a constant, so

$$g_m = \beta V_{ov}^2\quad(\text{parabola}),\qquad I_D = \frac{\beta}{3}V_{ov}^3\quad(\text{cubic}).$$

Each curve is one power higher than its square-law counterpart.

### Step 3 — Shape of the $g_m$ curve

**Slope:**

$$\frac{dg_m}{dV_{ov}} = 2\beta V_{ov},$$

which is **zero at the origin** (the curve leaves the origin horizontally) and grows linearly with $V_{ov}$.

**Curvature:**

$$\frac{d^2g_m}{dV_{ov}^2} = 2\beta > 0,$$

so the curve is **convex** (bends upward) everywhere. Doubling the overdrive multiplies $g_m$ by $2^2 = 4$, whereas for the square law it only doubles.

### Step 4 — Shape of the $I_D$ curve

**Slope** (this is just $g_m$):

$$\frac{dI_D}{dV_{ov}} = \beta V_{ov}^2,$$

which is zero at the origin, so the curve is even flatter there than the square-law parabola (it has zero slope *and* zero curvature at $V_{ov} = 0$).

**Curvature:**

$$\frac{d^2I_D}{dV_{ov}^2} = 2\beta V_{ov} \ge 0,$$

so it is convex for all $V_{ov} > 0$, bending away from the axis ever more steeply. Doubling the overdrive multiplies $I_D$ by $2^3 = 8$ (square law: 4).

### Step 5 — Example values for the sketch

Take $\beta = 30\ \mathrm{mA/V^3}$ for illustration:

$$g_m = 30\ \mathrm{mA/V^3}\times V_{ov}^2,\qquad I_D = 10\ \mathrm{mA/V^3}\times V_{ov}^3 .$$

| $V_{ov}$ (V) | 0 | 0.1 | 0.2 | 0.3 | 0.4 |
|---|---|---|---|---|---|
| $g_m$ (mS), plotted upward | 0 | 0.3 | 1.2 | 2.7 | 4.8 |
| $I_D$ (µA), plotted downward | 0 | 10 | 80 | 270 | 640 |
| $g_m/I_D = 3/V_{ov}$ (V⁻¹) | — | 30 | 15 | 10 | 7.5 |

For example, at $V_{ov} = 0.3$ V: $g_m = 30\times0.09 = 2.7$ mS and $I_D = 10\times0.027\ \mathrm{mA} = 270\ \mu\mathrm{A}$.

**The sketch.** On the figure's axes:
- **upper half:** a parabola starting tangent to the horizontal axis at the origin and curving upward (in place of the square law's straight line);
- **lower half:** a cubic, also tangent to the axis at the origin, staying close to the axis for small $V_{ov}$ and then plunging downward faster and faster (in place of the square law's parabola).

### Step 6 — Relation between the two curves

Their ratio is

$$\frac{g_m}{I_D} = \frac{\beta V_{ov}^2}{\beta V_{ov}^3/3} = \frac{3}{V_{ov}},$$

which falls as the overdrive grows (last row of the table). $I_D$ therefore grows faster than $g_m$: raising $V_{ov}$ buys transconductance at an ever higher cost in current. The square law shows the same trend ($g_m/I_D = 2/V_{ov}$), but the hypothetical device has 1.5 times more $g_m$ per unit current at any given overdrive.

### Result

At constant $W/L$:
- $g_m = \beta(V_{GS} - V_{TH})^2$ is a **parabola** that starts at the origin with zero slope and is convex, instead of the square law's straight line;
- $I_D = \beta(V_{GS} - V_{TH})^3/3$ is a **cubic** that starts flat at the origin and rises (plotted downward) ever more steeply, instead of the square law's parabola.

Both curves bend upward (convex). $I_D$ eventually grows faster than $g_m$, since $g_m/I_D = 3/(V_{GS} - V_{TH})$ decreases with the overdrive.

**Common mistake.** Redrawing the square-law plots: a linear $g_m$ and a parabolic $I_D$. The device law is different: $g_m$ itself is quadratic in the overdrive, so $I_D$, its integral, is cubic.

**Common mistake.** Drawing the $g_m$ parabola with a nonzero initial slope (or starting the curves somewhere other than $V_{GS} - V_{TH} = 0$). The slope $dg_m/dV_{ov} = 2\beta V_{ov}$ vanishes at the origin, and both $g_m$ and $I_D$ are zero at threshold.
