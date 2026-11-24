# Detailed solution - R015

Approach. The gate is driven directly by $V_X$ and the source is grounded, so $V_{GS} = V_X$ throughout. The drain voltage is set by KCL at the drain node, where $I_1$, the $R_1$ current and $I_X$ meet. Find $V_D$ from KCL, use it to decide when $M_1$ leaves saturation, and describe $I_X$ and $g_m$ in each region.

### Step 1 — KCL at the drain

Source and bulk are grounded, so there is no body effect, $V_{TH} = 0.7$ V, and

$$V_{GS} = V_X, \qquad V_{DS} = V_D .$$

At the drain node, $I_1$ and the $R_1$ current $(V_X - V_D)/R_1$ arrive and $I_X$ leaves into $M_1$:

$$I_X = I_1 + \frac{V_X - V_D}{R_1} \quad\Longleftrightarrow\quad V_D = V_X + R_1\,(I_1 - I_X).$$

So $I_X$ can exceed $I_1$: the extra current is supplied by $V_X$ through $R_1$ (then $V_D < V_X$).

### Step 2 — $V_X < 0.7$ V: $M_1$ off

$V_{GS} = V_X < V_{TH}$, so $I_X = 0$ and $g_m = 0$. All of $I_1$ flows through $R_1$ into the $V_X$ source, and

$$V_D = V_X + I_1R_1 ,$$

assuming $V_X + I_1R_1 < V_{DD}$ so that the current source $I_1$ has room to operate.

### Step 3 — Just above 0.7 V: saturation, square-law rise

At first the drain is high ($V_D \approx V_X + I_1R_1$), well above $V_{GS} - V_{TH}$, so $M_1$ is saturated:

$$I_X = \tfrac12\beta\,(V_X - 0.7)^2, \qquad g_m = \beta\,(V_X - 0.7).$$

$I_X$ is a parabola from zero at 0.7 V and $g_m$ a straight line from zero; neither depends on $R_1$ or $I_1$ while $M_1$ stays saturated (assuming $I_1$ remains ideal, i.e. $V_D \le V_{DD}$ if headroom-limited, including at its saturation peak $V_{D,\max} = 0.7\ \mathrm{V} + I_1R_1 + 1/(2\beta R_1)$ where $g_mR_1 = 1$).

### Step 4 — The saturation/triode boundary

Saturation requires $V_{DS} \ge V_{GS} - V_{TH}$; with $V_D$ from Step 1:

$$
\begin{aligned}
V_X + R_1(I_1 - I_X) &\ge V_X - 0.7\\
R_1(I_1 - I_X) &\ge -0.7\\
I_X &\le I_1 + \frac{0.7\ \mathrm{V}}{R_1}.
\end{aligned}
$$

So $M_1$ leaves saturation when its current exceeds $I_1 + V_{TH}/R_1$, with the drain pulled down to $V_D = V_X - V_{TH}$. Setting the square-law current equal to this limit:

$$
\begin{aligned}
\tfrac12\beta\,(V_{X1} - 0.7)^2 &= I_1 + \frac{0.7}{R_1}\\
V_{X1} &= 0.7 + u_B, \qquad u_B = \sqrt{\frac{2\,(I_1 + 0.7/R_1)}{\beta}} ,
\end{aligned}
$$

where $u_B$ is the overdrive at the boundary. If $V_{X1} > 3$ V, the device stays saturated over the whole sweep.

### Step 5 — Above $V_{X1}$: triode

For $V_X > V_{X1}$,

$$I_X = \beta\left[(V_X - 0.7)V_D - \tfrac12V_D^2\right], \qquad I_X = I_1 + \frac{V_X - V_D}{R_1},$$

which together fix $V_D$ (a quadratic). $I_X$ keeps increasing, but no longer quadratically: as $V_D$ settles toward the constant $1/(\beta R_1)$ (shown next), $dV_D/dV_X \to 0$, so the extra current is set by $R_1$ and the slope $dI_X/dV_X$ approaches $1/R_1$.

How $V_D$ (and hence $g_m$) moves. Differentiating the combined KCL, $\beta[(V_X - 0.7)V_D - \tfrac12V_D^2] - I_1 - (V_X - V_D)/R_1 = 0$, with respect to $V_X$:

$$
\begin{aligned}
\beta V_D + \beta\,(V_X - 0.7 - V_D)\frac{dV_D}{dV_X} - \frac{1}{R_1} + \frac{1}{R_1}\frac{dV_D}{dV_X} &= 0\\
\frac{dV_D}{dV_X}\left[\frac{1}{R_1} + \beta\,(V_X - 0.7 - V_D)\right] &= \frac{1}{R_1} - \beta V_D\\
\frac{dV_D}{dV_X} &= \frac{1/R_1 - \beta V_D}{1/R_1 + \beta\,(V_X - 0.7 - V_D)} .
\end{aligned}
$$

The denominator is positive (in triode $V_X - 0.7 > V_D$). In triode $g_m = \beta V_{DS} = \beta V_D$, so $V_D$ falls while $\beta V_D > 1/R_1$ and rises while $\beta V_D < 1/R_1$: $g_m = \beta V_D$ moves toward $1/R_1$. At the boundary $V_D = u_B$, so $g_m = \beta u_B$. Hence:

- if $\beta R_1u_B > 1$ (the usual case), $g_m$ peaks at the boundary and then falls toward $1/R_1$;
- if $\beta R_1u_B < 1$, $g_m$ keeps rising, more slowly, toward $1/R_1$.

Also, since $dV_D/dV_X < 1$, $dI_X/dV_X = (1 - dV_D/dV_X)/R_1 > 0$: $I_X$ rises throughout.

### Step 6 — Numerical example

Take $\beta = 1\ \mathrm{mA/V^2}$, $I_1 = 0.5$ mA, $R_1 = 2\ \mathrm{k\Omega}$.

Boundary:

$$
\begin{aligned}
I_1 + \frac{0.7\ \mathrm{V}}{R_1} &= 0.5\ \mathrm{mA} + 0.35\ \mathrm{mA} = 0.85\ \mathrm{mA},\\
u_B &= \sqrt{\frac{2\times0.85\ \mathrm{mA}}{1\ \mathrm{mA/V^2}}} = \sqrt{1.7\ \mathrm{V^2}} = 1.304\ \mathrm{V},\\
V_{X1} &= 0.7 + 1.304 = 2.00\ \mathrm{V},\\
\beta R_1u_B &= (1\ \mathrm{mA/V^2})(2\ \mathrm{k\Omega})(1.304\ \mathrm{V}) = 2.6 > 1 .
\end{aligned}
$$

So $g_m$ peaks at $V_X = 2.0$ V (at $\beta u_B = 1.30$ mS) and then falls toward $1/R_1 = 0.5$ mS.

Triode point, $V_X = 2.5$ V ($V_{ov} = 1.8$ V):

$$(1\ \mathrm{mA/V^2})\left[1.8V_D - \tfrac12V_D^2\right] = 0.5\ \mathrm{mA} + \frac{2.5 - V_D}{2\ \mathrm{k\Omega}} .$$

In mA and V: $1.8V_D - 0.5V_D^2 = 0.5 + 1.25 - 0.5V_D$, i.e. $0.5V_D^2 - 2.3V_D + 1.75 = 0$, so

$$V_D = \frac{2.3 - \sqrt{2.3^2 - 4(0.5)(1.75)}}{2(0.5)} = 2.3 - \sqrt{5.29 - 3.5} = 2.3 - 1.338 = 0.962\ \mathrm{V}$$

(the other root, 3.64 V, is not in triode). Then $I_X = 0.5 + (2.5 - 0.962)/2 = 1.269$ mA and $g_m = (1\ \mathrm{mA/V^2})(0.962\ \mathrm{V}) = 0.96$ mS.

| $V_X$ (V) | Region | $V_D$ (V) | $I_X$ (mA) | $g_m$ (mS) |
|---|---|---|---|---|
| 0 – 0.7 | off | $V_X + 1$ | 0 | 0 |
| 1.0 | sat. | 1.91 | 0.045 | 0.30 |
| 1.5 | sat. | 1.86 | 0.320 | 0.80 |
| 2.00 ($V_{X1}$) | boundary | 1.30 | 0.85 | 1.30 |
| 2.25 | triode | 1.07 | 1.09 | 1.07 |
| 2.5 | triode | 0.96 | 1.27 | 0.96 |
| 3.0 | triode | 0.84 | 1.58 | 0.84 |

Sample saturation line, $V_X = 1.5$ V: $I_X = \tfrac12(1\ \mathrm{mA/V^2})(0.8\ \mathrm{V})^2 = 0.32$ mA, $V_D = 1.5 + 2(0.5 - 0.32) = 1.86$ V $> V_{ov} = 0.8$ V ✓. $I_X$ exceeds $I_1 = 0.5$ mA from about $V_X = 1.7$ V on; the excess flows from $V_X$ through $R_1$.

Opposite case ($\beta R_1u_B < 1$): for $\beta = 1\ \mathrm{mA/V^2}$, $I_1 = 0.1$ mA, $R_1 = 500\ \Omega$, $u_B = \sqrt{2(0.1 + 1.4)} = 1.73$ V, $V_{X1} = 2.43$ V, and $\beta R_1u_B = 0.87 < 1$. Here $g_m$ rises from 1.73 mS at the boundary to about 1.79 mS at $V_X = 3$ V, approaching $1/R_1 = 2$ mS.

### Result

$V_{GS} = V_X$ and KCL at the drain gives $V_D = V_X + R_1(I_1 - I_X)$.

- $V_X < 0.7$ V: $M_1$ off, $I_X = 0$, $g_m = 0$; $I_1$ flows through $R_1$ into the $V_X$ source.
- $0.7\ \mathrm{V} < V_X < V_{X1}$: saturation, $I_X = \tfrac12\beta(V_X - 0.7)^2$ (square-law rise), $g_m = \beta(V_X - 0.7)$ (linear rise).
- Boundary: $M_1$ enters triode when $I_X$ exceeds $I_1 + V_{TH}/R_1$ (equivalently $V_D < V_X - V_{TH}$), at $V_{X1} = 0.7 + u_B$ with $u_B = \sqrt{2(I_1 + 0.7/R_1)/\beta}$.
- $V_X > V_{X1}$: triode. $I_X = I_1 + (V_X - V_D)/R_1$ keeps rising, more gently, with slope approaching $1/R_1$. $g_m = \beta V_D$ moves toward $1/R_1$: usually ($\beta R_1u_B > 1$) it peaks at the boundary and falls, and if $\beta R_1u_B < 1$ it keeps rising slowly toward $1/R_1$.

Common mistake. Capping $I_X$ at $I_1$. $R_1$ connects the drain to $V_X$, so once $V_D$ falls below $V_X$, current flows from $V_X$ through $R_1$ into the drain and $I_X$ exceeds $I_1$.

Common mistake. Extending the square law all the way to 3 V. As $I_X$ grows, the drain is pulled down and eventually drops below $V_X - V_{TH}$; from then on the triode equation and $g_m = \beta V_D$ apply.

Common mistake. Taking $V_{GS}$ as anything other than $V_X$ (for example subtracting the drop across $R_1$). The gate is tied straight to $V_X$ and the source is grounded; $R_1$ affects only the drain voltage.

![Illustrative answer curve](/q/R015/solution-r015.svg)

![Illustrative transistor transconductance g_m versus V_X](/q/R015/solution-r015-gm.svg)

Plots use I_1 = 0.2 mA, R_1 = 1 kOhm, beta = 2 mA/V^2, assuming sufficient current-source compliance.

