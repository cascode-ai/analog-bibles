# Detailed solution - R166

**Approach.** Write the equivalent transconductance of a square-law differential pair in normalized form, $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2}$ with $x = \Delta V/V_{ov}$. The 10 % and 90 % points occur at fixed values of $x$; converting them to volts with the overdrive at 2 mA and at 1 mA gives both sets of answers.

### Step 1 — Large-signal characteristic

$M_1$, $M_2$: identical saturated NMOS devices ($\lambda = 0$), sources at node $P$, ideal tail current $I_{SS}$. Let $\beta = \mu_nC_{ox}W/L$ and $\Delta V = V_{in1} - V_{in2}$.

KCL at $P$ gives $I_{D1} + I_{D2} = I_{SS}$. KVL through $P$ and the square law $V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$ (equal thresholds) give $\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$. Squaring twice:

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right) \;\Rightarrow\; 4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2,\\
I_{D1} - I_{D2} &= \sqrt{I_{SS}^2 - 4I_{D1}I_{D2}} = \frac{\beta}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2}.
\end{aligned}
$$

### Step 2 — Normalized transconductance

Differentiating (product rule):

$$G_m = \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V} = \frac{\beta}{2}\,\frac{4I_{SS}/\beta - 2\Delta V^2}{\sqrt{4I_{SS}/\beta - \Delta V^2}} .$$

Let $V_{ov} = \sqrt{I_{SS}/\beta}$ be the equilibrium overdrive (so $4I_{SS}/\beta = 4V_{ov}^2$) and $x = \Delta V/V_{ov}$:

$$G_m = \beta V_{ov}\,\frac{2 - x^2}{\sqrt{4 - x^2}}, \qquad G_{m0} = \beta V_{ov} = \sqrt{\beta I_{SS}}, \qquad \frac{G_m}{G_{m0}} = \frac{2 - x^2}{\sqrt{4 - x^2}} .$$

The ratio depends only on $x$. It falls from 1 at $x = 0$ to 0 at $x = \sqrt2$, where all of $I_{SS}$ flows in one device.

### Step 3 — The 10 % and 90 % points in normalized form

With $u = x^2$ ($u < 2$), square each condition and solve the quadratic.

**10 % drop, $G_m/G_{m0} = 0.9$:**

$$
\begin{aligned}
(2 - u)^2 &= 0.81(4 - u) \;\Rightarrow\; u^2 - 3.19u + 0.76 = 0,\\
u &= \frac{3.19 - \sqrt{3.19^2 - 4(0.76)}}{2} = \frac{3.19 - 2.671}{2} = 0.2593,\qquad x = 0.5092 .
\end{aligned}
$$

**90 % drop, $G_m/G_{m0} = 0.1$:**

$$
\begin{aligned}
(2 - u)^2 &= 0.01(4 - u) \;\Rightarrow\; u^2 - 3.99u + 3.96 = 0,\\
u &= \frac{3.99 - \sqrt{3.99^2 - 4(3.96)}}{2} = \frac{3.99 - 0.283}{2} = 1.8535,\qquad x = 1.3614 .
\end{aligned}
$$

In both cases the "+" root ($u = 2.93$ and $u = 2.14$) exceeds 2, i.e. lies beyond full steering. It was introduced by squaring and is rejected.

### Step 4 — Convert to volts at $I_{SS} = 2$ mA

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{2\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = 0.3863\ \mathrm{V},\\
\Delta V_{10\%} &= (0.5092)(0.3863\ \mathrm{V}) = 0.197\ \mathrm{V},\\
\Delta V_{90\%} &= (1.3614)(0.3863\ \mathrm{V}) = 0.526\ \mathrm{V},\\
\Delta V_{cut} &= \sqrt2\,(0.3863\ \mathrm{V}) = 0.546\ \mathrm{V}.
\end{aligned}
$$

### Step 5 — Comparison with $I_{SS} = 1$ mA

At 1 mA, $V_{ov} = \sqrt{1/13.4}\ \mathrm{V} = 0.2732$ V, so

$$\Delta V_{10\%} = (0.5092)(0.2732\ \mathrm{V}) = 0.139\ \mathrm{V}, \qquad \Delta V_{90\%} = (1.3614)(0.2732\ \mathrm{V}) = 0.372\ \mathrm{V}, \qquad \Delta V_{cut} = 0.386\ \mathrm{V}.$$

| $I_{SS}$ | $V_{ov}$ | $G_{m0}$ | 10 % drop | 90 % drop | cut-off |
|---|---|---|---|---|---|
| 2 mA | 0.386 V | 5.18 mS | 0.197 V | 0.526 V | 0.546 V |
| 1 mA | 0.273 V | 3.66 mS | 0.139 V | 0.372 V | 0.386 V |

- The linear range scales with $V_{ov} = \sqrt{I_{SS}/\beta}$: doubling the current widens it by $\sqrt2$ ($0.197/0.139 = 1.41$).
- At the same time $G_{m0} = \sqrt{\beta I_{SS}}$ also rises by $\sqrt2$. This differs from reducing $W/L$, which widens the range by the same factor but *lowers* $G_m$. Increasing the current improves both, and the price is doubled power.

### Result

With $I_{SS} = 2$ mA, $G_m$ drops by 10 % at $|V_{in1} - V_{in2}| \approx 0.197$ V and by 90 % at $\approx 0.526$ V (cut-off 0.546 V). With 1 mA the values are 0.139 V and 0.372 V, i.e. $1/\sqrt2$ of the 2-mA values. The linear range grows by $\sqrt2$ together with the overdrive, while $G_{m0}$ also rises by $\sqrt2$ (from 3.66 to 5.18 mS), at the cost of twice the power.

**Common mistake.** Concluding that the range gets *narrower* at the higher current because the pair has more gain. The range is set by the overdrive, which grows as $\sqrt{I_{SS}}$.

**Common mistake.** Solving a linearized or otherwise incorrect $G_m$ expression, or keeping the extraneous roots of the squared equations. Those roots lie beyond the cut-off voltage, where one transistor is off and the characteristic no longer applies.
