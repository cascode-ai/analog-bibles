# Detailed solution - R522

**Approach.** Hold the overdrive $V_{ov} = V_{GS} - V_{TH}$ fixed. Express $g_m$ through $I_D$ using $g_m/I_D = 3/V_{ov}$. Then solve the current law for the required $W/L$. Both quantities turn out to be proportional to $I_D$, so the sketch is two straight lines through the origin, like the square-law figure.

### Step 1 — Laws of the hypothetical device

The transconductance is $g_m = \beta V_{ov}^2$. Integrating $g_m = dI_D/dV_{GS}$ with $I_D = 0$ at threshold gives

$$I_D = \frac{\beta}{3}V_{ov}^3 .$$

$\beta$ is proportional to the aspect ratio. Write $\beta = k\,W/L$, where $k$ (A/V³) is a process constant independent of geometry.

### Step 2 — $g_m$ versus $I_D$ at constant overdrive

Divide $g_m$ by $I_D$:

$$\frac{g_m}{I_D} = \frac{\beta V_{ov}^2}{\beta V_{ov}^3/3} = \frac{3}{V_{ov}}
\quad\Longrightarrow\quad
g_m = \frac{3}{V_{ov}}\,I_D .$$

With $V_{ov}$ fixed, the factor $3/V_{ov}$ is a constant: **$g_m$ is proportional to $I_D$**, a straight line through the origin with slope $3/V_{ov}$. The square-law device has slope $2/V_{ov}$, so the line for the hypothetical device is 1.5 times steeper.

### Step 3 — $W/L$ versus $I_D$ at constant overdrive

Substitute $\beta = kW/L$ into the current law and solve for $W/L$:

$$I_D = \frac{k}{3}\,\frac WL\,V_{ov}^3
\quad\Longrightarrow\quad
\frac WL = \frac{3I_D}{k\,V_{ov}^3} .$$

With $V_{ov}$ fixed, $3/(kV_{ov}^3)$ is a constant: **$W/L$ is proportional to $I_D$**, again a straight line through the origin. For the square law, $W/L = 2I_D/(\mu_nC_{ox}V_{ov}^2)$, also linear; only the slope differs. Here $\mu_n$ is the electron mobility and $C_{ox}$ the oxide capacitance per unit area.

### Step 4 — Why both are linear

At a fixed overdrive every unit of width carries the same current, i.e. the **current density** $I_D/W$ is fixed by $V_{ov}$ (for a given $L$). To carry twice the current you need twice the width, which is just two identical devices in parallel. Two devices in parallel also have twice the transconductance. So both $W/L$ and $g_m$ simply scale with $I_D$, whatever the device law; the law only sets the slopes.

### Step 5 — Example values for the sketch

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

**The sketch.** Same axes as the figure:
- **upper half:** a straight line from the origin with slope $3/V_{ov}$ ($g_m$);
- **lower half:** a straight line from the origin with slope $3/(kV_{ov}^3)$ ($W/L$, plotted downward).

The shapes are identical to the square-law plots; only the slopes change.

### Result

At constant $V_{GS} - V_{TH}$:

$$g_m = \frac{3I_D}{V_{GS} - V_{TH}} \propto I_D,\qquad \frac WL = \frac{3I_D}{k\,(V_{GS} - V_{TH})^3} \propto I_D\quad(\beta = kW/L).$$

Both plots are **straight lines through the origin**, the same shapes as for the square law. The $g_m$ slope is $3/(V_{GS} - V_{TH})$ instead of $2/(V_{GS} - V_{TH})$. At constant overdrive the current density is fixed, so the width and $g_m$ both scale with the current.

**Common mistake.** Using $g_m = \sqrt[3]{9\beta I_D^2} \propto I_D^{2/3}$ and drawing a curved $g_m$. That form holds at constant $\beta$ (fixed $W/L$). Here $W/L$ grows together with $I_D$, and the correct relation at fixed overdrive is $g_m = 3I_D/V_{ov}$, linear in $I_D$.

**Common mistake.** Drawing $W/L$ as independent of $I_D$. The overdrive fixes the current *per unit width*, so more current requires a proportionally wider device.
