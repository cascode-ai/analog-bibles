# Detailed solution - R165

**Approach.** Differentiate the large-signal characteristic of the square-law pair to get $G_m(\Delta V)$, evaluate it at 50 mV with $I_{SS} = 2$ mA, and repeat with 1 mA. The result lies within about 1 % of the equilibrium value, so the finite-$\Delta V$ formula is needed.

### Step 1 — Large-signal characteristic

Both devices are saturated, with $\lambda = 0$. Let $\beta = \mu_nC_{ox}W/L$ and $\Delta V = V_{in1} - V_{in2}$. With $I_{D1} + I_{D2} = I_{SS}$ and $\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$ (KVL with the square law; equal thresholds):

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right) \;\Rightarrow\; 4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2,\\
I_{D1} - I_{D2} &= \sqrt{I_{SS}^2 - 4I_{D1}I_{D2}} = \frac{\beta}{2}\,\Delta V\sqrt{K - \Delta V^2}, \qquad K \equiv \frac{4I_{SS}}{\beta}.
\end{aligned}
$$

### Step 2 — Equivalent transconductance

With the product rule and $\dfrac{d}{d\Delta V}\sqrt{K - \Delta V^2} = -\Delta V/\sqrt{K - \Delta V^2}$:

$$
\begin{aligned}
G_m = \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V} &= \frac{\beta}{2}\left[\sqrt{K - \Delta V^2} - \frac{\Delta V^2}{\sqrt{K - \Delta V^2}}\right]\\
&= \frac{\beta}{2}\,\frac{K - 2\Delta V^2}{\sqrt{K - \Delta V^2}} .
\end{aligned}
$$

At $\Delta V = 0$: $G_{m0} = \tfrac{\beta}{2}\sqrt{K} = \sqrt{\beta I_{SS}}$, the $g_m$ of either device at $I_{SS}/2$.

### Step 3 — $I_{SS} = 2$ mA, $\Delta V = 50$ mV

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}, \qquad \frac{\beta}{2} = 6.7\ \mathrm{mA/V^2},\\
K &= \frac{4(2\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.5970\ \mathrm{V^2},\\
K - 2\Delta V^2 &= 0.5970 - 0.0050 = 0.5920\ \mathrm{V^2},\\
\sqrt{K - \Delta V^2} &= \sqrt{0.5945}\ \mathrm{V} = 0.7711\ \mathrm{V},\\
G_m &= (6.7\ \mathrm{mA/V^2})\,\frac{0.5920\ \mathrm{V^2}}{0.7711\ \mathrm{V}} = (6.7\ \mathrm{mA/V^2})(0.7678\ \mathrm{V}) = 5.14\ \mathrm{mS}.
\end{aligned}
$$

The equilibrium value is

$$G_{m0} = \sqrt{(13.4\ \mathrm{mA/V^2})(2\ \mathrm{mA})} = \sqrt{26.8}\ \mathrm{mS} = 5.18\ \mathrm{mS},$$

so $G_m/G_{m0} = 5.144/5.177 = 0.994$, a drop of 0.6 %.

### Step 4 — $I_{SS} = 1$ mA, $\Delta V = 50$ mV (comparison)

$$
\begin{aligned}
K &= \frac{4(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.2985\ \mathrm{V^2},\\
G_m &= (6.7\ \mathrm{mA/V^2})\,\frac{0.2985 - 0.0050}{\sqrt{0.2985 - 0.0025}}\ \mathrm{V} = (6.7\ \mathrm{mA/V^2})\,\frac{0.2935}{0.5441}\ \mathrm{V} = 3.61\ \mathrm{mS},\\
G_{m0} &= \sqrt{(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 3.66\ \mathrm{mS}\quad(\text{a drop of }1.3\ \%).
\end{aligned}
$$

### Step 5 — Comparison and normalized check

With $V_{ov} = \sqrt{I_{SS}/\beta}$ and $x = \Delta V/V_{ov}$, the formula of Step 2 becomes $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2}$.

| $I_{SS}$ | $V_{ov}$ | $x$ | $G_{m0}$ | $G_m$ at 50 mV | drop |
|---|---|---|---|---|---|
| 2 mA | 0.386 V | 0.129 | 5.18 mS | 5.14 mS | 0.6 % |
| 1 mA | 0.273 V | 0.183 | 3.66 mS | 3.61 mS | 1.3 % |

- $G_m$ scales as $\sqrt{I_{SS}}$: $5.14/3.61 = 1.42 \approx \sqrt2$. Doubling the current raises the transconductance by $\sqrt2$, not by 2, because the overdrive also rises by $\sqrt2$ ($g_m = 2I_D/V_{ov}$).
- The larger overdrive makes the same 50 mV a smaller fraction of the input range, so $G_m$ degrades less (0.6 % instead of 1.3 %).
- The cost is twice the supply current.

### Result

$$G_m(2\ \mathrm{mA},\ 50\ \mathrm{mV}) = \frac{\beta}{2}\,\frac{4I_{SS}/\beta - 2\Delta V^2}{\sqrt{4I_{SS}/\beta - \Delta V^2}} \approx 5.14\ \mathrm{mS}$$

(equilibrium $\sqrt{\beta I_{SS}} = 5.18$ mS, a 0.6 % drop), versus **3.61 mS** (equilibrium 3.66 mS) with a 1-mA tail. The higher current gives $\sqrt2$ more transconductance and less degradation from the 50-mV imbalance, at twice the power.

**Common mistake.** Doubling $G_m$ along with the current (≈ 7.3 mS). $G_m = \sqrt{\beta I_{SS}}$ grows only as the square root of the current.

**Common mistake.** Claiming that $G_m$ decreases at the higher current because the overdrive is larger. For a fixed device size the larger overdrive comes with a larger current, and $g_m = 2I_D/V_{ov} = \sqrt{2\beta I_D}$ still rises.
