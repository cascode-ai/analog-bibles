# Detailed solution - R161

**Approach.** Differentiate the large-signal characteristic of the square-law pair to get $G_m(\Delta V)$, evaluate it at $\Delta V = 50$ mV for $W/L = 25/0.5$, and repeat for $W/L = 50/0.5$. The equilibrium value is only slightly higher, so the finite-input expression is needed.

### Step 1 — Large-signal characteristic

Both devices are saturated, with $\lambda = 0$. Let $\beta = \mu_nC_{ox}W/L$ and $\Delta V = V_{in1} - V_{in2}$. With $I_{D1} + I_{D2} = I_{SS}$ and $\Delta V = V_{GS1} - V_{GS2} = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$ (the equal thresholds cancel), square, use the sum, square again, and use $(I_{D1} - I_{D2})^2 = I_{SS}^2 - 4I_{D1}I_{D2}$:

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right)\;\Rightarrow\; 4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2,\\
I_{D1} - I_{D2} &= \frac{\beta}{2}\,\Delta V\sqrt{K - \Delta V^2}, \qquad K \equiv \frac{4I_{SS}}{\beta}.
\end{aligned}
$$

### Step 2 — Equivalent transconductance

With the product rule:

$$
\begin{aligned}
G_m = \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V} &= \frac{\beta}{2}\left[\sqrt{K - \Delta V^2} + \Delta V\cdot\frac{-\Delta V}{\sqrt{K - \Delta V^2}}\right]\\
&= \frac{\beta}{2}\,\frac{K - 2\Delta V^2}{\sqrt{K - \Delta V^2}} .
\end{aligned}
$$

At equilibrium this reduces to $G_{m0} = \tfrac{\beta}{2}\sqrt{K} = \sqrt{\beta I_{SS}}$, the $g_m$ of one device at $I_{SS}/2$.

### Step 3 — $W/L = 25/0.5$ at $\Delta V = 50$ mV

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})(50) = 6.7\ \mathrm{mA/V^2}, \qquad \frac{\beta}{2} = 3.35\ \mathrm{mA/V^2},\\
K &= \frac{4(1\ \mathrm{mA})}{6.7\ \mathrm{mA/V^2}} = 0.5970\ \mathrm{V^2},\\
K - 2\Delta V^2 &= 0.5970 - 0.0050 = 0.5920\ \mathrm{V^2},\\
\sqrt{K - \Delta V^2} &= \sqrt{0.5970 - 0.0025}\ \mathrm{V} = \sqrt{0.5945}\ \mathrm{V} = 0.7711\ \mathrm{V},\\
G_m &= (3.35\ \mathrm{mA/V^2})\,\frac{0.5920\ \mathrm{V^2}}{0.7711\ \mathrm{V}} = (3.35\ \mathrm{mA/V^2})(0.7678\ \mathrm{V}) = 2.57\ \mathrm{mS}.
\end{aligned}
$$

The equilibrium value is

$$G_{m0} = \sqrt{\beta I_{SS}} = \sqrt{(6.7\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 2.59\ \mathrm{mS},$$

so $G_m/G_{m0} = 2.572/2.588 = 0.994$, a drop of only 0.6 %.

**Normalized check.** With $V_{ov} = \sqrt{I_{SS}/\beta} = \sqrt{1/6.7}\ \mathrm{V} = 0.386$ V and $x = \Delta V/V_{ov} = 0.05/0.386 = 0.129$, $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2} = (2 - 0.0168)/\sqrt{3.9833} = 1.9833/1.9958 = 0.994$. ✓

### Step 4 — $W/L = 50/0.5$ at $\Delta V = 50$ mV (comparison)

$$
\begin{aligned}
\beta &= 13.4\ \mathrm{mA/V^2}, \qquad K = \frac{4(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.2985\ \mathrm{V^2},\\
G_m &= (6.7\ \mathrm{mA/V^2})\,\frac{0.2985 - 0.0050}{\sqrt{0.2985 - 0.0025}}\ \mathrm{V} = (6.7\ \mathrm{mA/V^2})\,\frac{0.2935}{0.5441}\ \mathrm{V} = 3.61\ \mathrm{mS},\\
G_{m0} &= \sqrt{(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 3.66\ \mathrm{mS}\quad(\text{a drop of }1.3\ \%).
\end{aligned}
$$

### Step 5 — Comparison

| $W/L$ | $V_{ov}$ | $x = \Delta V/V_{ov}$ | $G_{m0}$ | $G_m$ at 50 mV | drop |
|---|---|---|---|---|---|
| 25/0.5 | 0.386 V | 0.129 | 2.59 mS | 2.57 mS | 0.6 % |
| 50/0.5 | 0.273 V | 0.183 | 3.66 mS | 3.61 mS | 1.3 % |

- **Magnitude.** $G_{m0} = \sqrt{\beta I_{SS}}$, so halving $W/L$ divides it by $\sqrt2$: $3.66/2.59 = 1.414$. At 50 mV the ratio is $3.61/2.57 = 1.405 \approx \sqrt2$.
- **Linearity.** The narrower pair has a $\sqrt2$ larger overdrive, so 50 mV is a smaller fraction of its input range ($x = 0.129$ instead of 0.183), and its $G_m$ degrades less: 0.6 % instead of 1.3 %.

Narrowing the devices trades transconductance (gain) for linearity.

### Result

$$G_m(25/0.5,\ 50\ \mathrm{mV}) = \frac{\beta}{2}\,\frac{4I_{SS}/\beta - 2\Delta V^2}{\sqrt{4I_{SS}/\beta - \Delta V^2}} \approx 2.57\ \mathrm{mS}$$

(99.4 % of its equilibrium value 2.59 mS), versus about **3.61 mS** (equilibrium 3.66 mS) for $W/L = 50/0.5$. The narrower pair has about $1/\sqrt2$ the transconductance but degrades less at the same input.

**Common mistake.** Using the $g_m$ of one device carrying the whole 1 mA, $\sqrt{2\beta I_{SS}} = 3.66$ mS for $W/L = 25/0.5$. Near equilibrium each device carries only $I_{SS}/2$, and the pair's $G_m$ is $\sqrt{\beta I_{SS}}$.

**Common mistake.** Claiming that the narrower pair has the *larger* $G_m$ because its overdrive is larger. For a fixed current, $g_m = 2I_D/V_{ov}$ falls as the overdrive rises.
