# Detailed solution - R162

**Approach.** Express the equivalent transconductance of a square-law differential pair in normalized form, $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2}$ with $x = \Delta V/V_{ov}$. Solve for the values of $x$ that give 0.9 and 0.1; these do not depend on the device size. Then convert $x$ to volts using the overdrive of each design.

### Step 1 — Large-signal characteristic

$M_1$, $M_2$: identical saturated NMOS devices ($\lambda = 0$), sources at node $P$, ideal tail current $I_{SS} = 1$ mA. Let $\beta = \mu_nC_{ox}W/L$ and $\Delta V = V_{in1} - V_{in2}$.

From KCL at $P$ ($I_{D1} + I_{D2} = I_{SS}$), KVL through $P$ ($\Delta V = V_{GS1} - V_{GS2}$) and the square law ($V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$, same $V_{TH}$ for both):

$$
\begin{aligned}
\Delta V &= \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta},\\
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right)\;\Rightarrow\; 4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2,\\
I_{D1} - I_{D2} &= \sqrt{I_{SS}^2 - 4I_{D1}I_{D2}} = \frac{\beta}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2}.
\end{aligned}
$$

### Step 2 — Normalized $G_m$

Differentiating (product rule) gives

$$G_m = \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V} = \frac{\beta}{2}\,\frac{4I_{SS}/\beta - 2\Delta V^2}{\sqrt{4I_{SS}/\beta - \Delta V^2}} .$$

With the equilibrium overdrive $V_{ov} = \sqrt{I_{SS}/\beta}$ (so $4I_{SS}/\beta = 4V_{ov}^2$) and $x = \Delta V/V_{ov}$:

$$
\begin{aligned}
G_m &= \frac{\beta}{2}\,\frac{V_{ov}^2(4 - 2x^2)}{V_{ov}\sqrt{4 - x^2}} = \beta V_{ov}\,\frac{2 - x^2}{\sqrt{4 - x^2}},\\
G_{m0} &= \beta V_{ov} = \sqrt{\beta I_{SS}},\\
\frac{G_m}{G_{m0}} &= \frac{2 - x^2}{\sqrt{4 - x^2}} .
\end{aligned}
$$

The ratio depends only on $x$. It falls from 1 at $x = 0$ to 0 at $x = \sqrt2$ (full steering).

### Step 3 — Solve for the 10 % and 90 % points (in $x$)

Let $u = x^2$ (with $u < 2$ in the valid range) and square each condition.

**$G_m/G_{m0} = 0.9$:**

$$
\begin{aligned}
(2 - u)^2 &= 0.81(4 - u)\\
u^2 - 4u + 4 &= 3.24 - 0.81u\\
u^2 - 3.19u + 0.76 &= 0\\
u &= \frac{3.19 \pm \sqrt{10.176 - 3.04}}{2} = \frac{3.19 \pm 2.671}{2} = 0.2593\ \ (\text{or } 2.93,\ \text{rejected since } u > 2),\\
x &= \sqrt{0.2593} = 0.5092 .
\end{aligned}
$$

**$G_m/G_{m0} = 0.1$:**

$$
\begin{aligned}
(2 - u)^2 &= 0.01(4 - u)\\
u^2 - 3.99u + 3.96 &= 0\\
u &= \frac{3.99 \pm \sqrt{15.920 - 15.840}}{2} = \frac{3.99 \pm 0.283}{2} = 1.8535\ \ (\text{or } 2.137,\ \text{rejected}),\\
x &= \sqrt{1.8535} = 1.3614 .
\end{aligned}
$$

The rejected roots appear only because the equation was squared; they correspond to $2 - u < 0$, beyond full steering.

### Step 4 — Convert to volts for $W/L = 25/0.5$

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})(25/0.5) = 6.7\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{1\ \mathrm{mA}}{6.7\ \mathrm{mA/V^2}}} = 0.3863\ \mathrm{V},\\
\Delta V_{10\%} &= (0.5092)(0.3863\ \mathrm{V}) = 0.197\ \mathrm{V},\\
\Delta V_{90\%} &= (1.3614)(0.3863\ \mathrm{V}) = 0.526\ \mathrm{V},\\
\Delta V_{cut} &= \sqrt2\,(0.3863\ \mathrm{V}) = 0.546\ \mathrm{V}\ \ (G_m = 0).
\end{aligned}
$$

### Step 5 — Comparison with $W/L = 50/0.5$

For $W/L = 50/0.5$: $\beta = 13.4\ \mathrm{mA/V^2}$ and $V_{ov} = \sqrt{1/13.4}\ \mathrm{V} = 0.2732$ V, so

$$\Delta V_{10\%} = (0.5092)(0.2732\ \mathrm{V}) = 0.139\ \mathrm{V}, \qquad \Delta V_{90\%} = (1.3614)(0.2732\ \mathrm{V}) = 0.372\ \mathrm{V}, \qquad \Delta V_{cut} = 0.386\ \mathrm{V}.$$

| $W/L$ | $V_{ov}$ | $G_{m0}$ | 10 % drop at | 90 % drop at | $G_m = 0$ at |
|---|---|---|---|---|---|
| 25/0.5 | 0.386 V | 2.59 mS | 0.197 V | 0.526 V | 0.546 V |
| 50/0.5 | 0.273 V | 3.66 mS | 0.139 V | 0.372 V | 0.386 V |

Every voltage in the narrower pair is larger by $V_{ov}(25/0.5)/V_{ov}(50/0.5) = \sqrt{100/50} = \sqrt2$: $0.197/0.139 = 1.41$ and $0.526/0.372 = 1.41$. The input range scales with the overdrive. Halving $W/L$ at constant current makes the pair $\sqrt2$ times more linear, at the cost of a $\sqrt2$ lower $G_{m0}$ (and thus lower gain).

### Result

For $W/L = 25/0.5$, $G_m$ falls by 10 % at $|V_{in1} - V_{in2}| \approx 0.197$ V and by 90 % at $\approx 0.526$ V (cut-off at 0.546 V). For $W/L = 50/0.5$ the values are 0.139 V and 0.372 V. The narrower pair's input range is $\sqrt2$ wider (more linear) but its transconductance is $\sqrt2$ lower.

**Common mistake.** Concluding that the narrower devices give a *narrower* input range. The range scales with the overdrive $\sqrt{I_{SS}/\beta}$, which grows when $W/L$ shrinks.

**Common mistake.** Using a linearized or otherwise wrong $G_m$ expression, or keeping the extraneous roots of the squared equations (which fall beyond the cut-off voltage, where one device is off). The normalized relation $(2 - x^2)/\sqrt{4 - x^2}$ must be solved exactly.
