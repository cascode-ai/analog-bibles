# Detailed solution - R522

**Approach.** Hold the overdrive $V_{ov} = V_{GS} - V_{TH}$ fixed. Express $g_m$ through $I_D$ using $g_m/I_D = 3/V_{ov}$, then solve $I_D = \beta V_{ov}^3/3$ with $\beta = kW/L$ ($k$ in A/V³, a process constant) for the required $W/L$. Both are proportional to $I_D$, so the sketch is two straight lines through the origin, like the square-law figure.

### Step 1 — $g_m$ versus $I_D$ at constant overdrive

$$\frac{g_m}{I_D} = \frac{\beta V_{ov}^2}{\beta V_{ov}^3/3} = \frac{3}{V_{ov}}
\quad\Longrightarrow\quad
g_m = \frac{3}{V_{ov}}\,I_D .$$

With $V_{ov}$ fixed, **$g_m$ is proportional to $I_D$**: a straight line through the origin with slope $3/V_{ov}$, 1.5 times steeper than the square law's $2/V_{ov}$.

### Step 2 — $W/L$ versus $I_D$ at constant overdrive

$$I_D = \frac{k}{3}\,\frac WL\,V_{ov}^3
\quad\Longrightarrow\quad
\frac WL = \frac{3I_D}{k\,V_{ov}^3} .$$

With $V_{ov}$ fixed, **$W/L$ is proportional to $I_D$**, again a straight line through the origin. For the square law, $W/L = 2I_D/(\mu_nC_{ox}V_{ov}^2)$ is also linear; only the slope differs.

Both are linear whatever the device law: at a fixed overdrive the current per unit width is fixed, so twice the current needs twice the width, i.e. two identical devices in parallel, which also have twice the $g_m$. The law only sets the slopes.

### Step 3 — Example values for the sketch

Take $V_{ov} = 0.2$ V and $k = 0.24\ \mathrm{mA/V^3}$. The two slopes are

$$
\begin{aligned}
\frac{g_m}{I_D} &= \frac{3}{0.2\ \mathrm{V}} = 15\ \mathrm{V^{-1}},\\
\frac{W/L}{I_D} &= \frac{3}{(0.24\ \mathrm{mA/V^3})(0.2\ \mathrm{V})^3} = \frac{3}{1.92\ \mu\mathrm{A}} = 1.5625\ \text{per }\mu\mathrm{A}.
\end{aligned}
$$

| $I_D$ (µA) | 0 | 50 | 100 | 200 | 400 |
|---|---|---|---|---|---|
| $g_m$ (mS), plotted upward | 0 | 0.75 | 1.5 | 3.0 | 6.0 |
| $W/L$, plotted downward | 0 | 78 | 156 | 312 | 625 |

For example, at $I_D = 100\ \mu\mathrm{A}$: $g_m = 15\ \mathrm{V^{-1}}\times100\ \mu\mathrm{A} = 1.5$ mS and $W/L = 1.5625\times100 = 156$.

**The sketch.** On the figure's axes, a straight line from the origin with slope $3/V_{ov}$ in the upper half ($g_m$) and one with slope $3/(kV_{ov}^3)$ in the lower half ($W/L$, plotted downward): the square-law shapes with different slopes.

### Result

At constant $V_{GS} - V_{TH}$:

$$g_m = \frac{3I_D}{V_{GS} - V_{TH}} \propto I_D,\qquad \frac WL = \frac{3I_D}{k\,(V_{GS} - V_{TH})^3} \propto I_D\quad(\beta = kW/L).$$

Both plots are **straight lines through the origin**, the same shapes as for the square law. The $g_m$ slope is $3/(V_{GS} - V_{TH})$ instead of $2/(V_{GS} - V_{TH})$. At constant overdrive the current density is fixed, so the width and $g_m$ both scale with the current.

**Common mistake.** Using $g_m = \sqrt[3]{9\beta I_D^2} \propto I_D^{2/3}$ and drawing a curved $g_m$. That form holds at constant $\beta$ (fixed $W/L$); here $W/L$ grows with $I_D$, and at fixed overdrive $g_m = 3I_D/V_{ov}$ is linear in $I_D$.

**Common mistake.** Drawing $W/L$ as independent of $I_D$. The overdrive fixes the current *per unit width*, so more current requires a proportionally wider device.
