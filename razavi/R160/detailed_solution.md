# Detailed solution - R160

**Approach.** Use the large-signal characteristic of the square-law pair, $I_{D1} - I_{D2} = \tfrac12\beta\Delta V\sqrt{4I_{SS}/\beta - \Delta V^2}$, with $I_{D1} + I_{D2} = I_{SS}$, for $W/L = 25/0.5$; then repeat for $W/L = 50/0.5$ and compare.

### Step 1 — Large-signal characteristic

Both devices are saturated, with $\lambda = 0$. Let $\beta = \mu_nC_{ox}W/L$ and $\Delta V = V_{in1} - V_{in2}$. With $I_{D1} + I_{D2} = I_{SS}$, $\Delta V = V_{GS1} - V_{GS2}$ and $V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$ (same $V_{TH}$ for both devices), $\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$. Square, substitute the sum, isolate $\sqrt{I_{D1}I_{D2}}$ and square again:

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right)\\
4I_{D1}I_{D2} &= \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2\\
(I_{D1} - I_{D2})^2 &= I_{SS}^2 - 4I_{D1}I_{D2} = \beta I_{SS}\Delta V^2 - \frac{\beta^2}{4}\Delta V^4\\
I_{D1} - I_{D2} &= \frac{\beta}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2} ,
\end{aligned}
$$

valid while both devices conduct, $|\Delta V| \le \sqrt{2I_{SS}/\beta}$.

### Step 2 — Sharing for $W/L = 25/0.5$

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})\left(\frac{25}{0.5}\right) = (134\ \mu\mathrm{A/V^2})(50) = 6.7\ \mathrm{mA/V^2},\\
\sqrt{2I_{SS}/\beta} &= \sqrt{2(1\ \mathrm{mA})/(6.7\ \mathrm{mA/V^2})} = 0.546\ \mathrm{V} \gg 50\ \mathrm{mV}\quad\text{(both devices on)},\\
\frac{4I_{SS}}{\beta} &= \frac{4(1\ \mathrm{mA})}{6.7\ \mathrm{mA/V^2}} = 0.5970\ \mathrm{V^2},\\
\sqrt{0.5970 - 0.0025}\ \mathrm{V} &= \sqrt{0.5945}\ \mathrm{V} = 0.7711\ \mathrm{V},\\
\frac{\beta}{2}\Delta V &= (3.35\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.1675\ \mathrm{mA/V},\\
I_{D1} - I_{D2} &= (0.1675\ \mathrm{mA/V})(0.7711\ \mathrm{V}) = 0.1292\ \mathrm{mA}.
\end{aligned}
$$

With $I_{D1} + I_{D2} = 1$ mA:

$$
\begin{aligned}
I_{D1} &= \frac{1 + 0.1292}{2}\ \mathrm{mA} = 0.565\ \mathrm{mA},\\
I_{D2} &= \frac{1 - 0.1292}{2}\ \mathrm{mA} = 0.435\ \mathrm{mA}.
\end{aligned}
$$

**Check.** $\sqrt{2(0.5646)/6.7} - \sqrt{2(0.4354)/6.7} = 0.4105 - 0.3605 = 0.0500$ V, which reproduces the input.

### Step 3 — Sharing for $W/L = 50/0.5$ (for comparison)

$$
\begin{aligned}
\beta &= 13.4\ \mathrm{mA/V^2}, \qquad \frac{4I_{SS}}{\beta} = 0.2985\ \mathrm{V^2},\\
\sqrt{0.2985 - 0.0025}\ \mathrm{V} &= 0.5441\ \mathrm{V},\\
I_{D1} - I_{D2} &= (6.7\ \mathrm{mA/V^2})(0.05\ \mathrm{V})(0.5441\ \mathrm{V}) = 0.1823\ \mathrm{mA},\\
I_{D1} &= 0.591\ \mathrm{mA}, \qquad I_{D2} = 0.409\ \mathrm{mA}.
\end{aligned}
$$

### Step 4 — Comparison

| $W/L$ | $\beta$ | $V_{ov}$ at equilibrium | $I_{D1}$ / $I_{D2}$ | $I_{D1} - I_{D2}$ | imbalance $\Delta I/I_{SS}$ |
|---|---|---|---|---|---|
| 25/0.5 | 6.7 mA/V² | 0.386 V | 0.565 / 0.435 mA | 0.129 mA | 12.9 % |
| 50/0.5 | 13.4 mA/V² | 0.273 V | 0.591 / 0.409 mA | 0.182 mA | 18.2 % |

The ratio of the current differences is

$$\frac{0.1292}{0.1823} = 0.709 \approx \frac{1}{\sqrt2},$$

as expected from $I_{D1} - I_{D2} \approx G_m\Delta V$ with $G_m = \sqrt{\beta I_{SS}}$: halving $\beta$ divides $G_m$ by $\sqrt2$. Numerically, $G_m = \sqrt{(6.7\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 2.59$ mS gives $(2.59\ \mathrm{mS})(50\ \mathrm{mV}) = 0.129$ mA, within 0.3 % of the exact value.

So the narrower pair is **less sensitive** (lower $G_m$) but **more linear**: its overdrive is $\sqrt2$ larger, so 50 mV is a smaller fraction of its input range (full steering at 0.546 V instead of 0.386 V).

### Result

For $W/L = 25/0.5$: $I_{D1} \approx 0.565$ mA and $I_{D2} \approx 0.435$ mA ($I_{D1} - I_{D2} \approx 0.129$ mA).

For $W/L = 50/0.5$: $I_{D1} \approx 0.591$ mA and $I_{D2} \approx 0.409$ mA ($0.182$ mA).

The narrower devices steer about $1/\sqrt2$ as much current: lower $G_m$, but a more linear pair.

**Common mistake.** Concluding that the narrower pair gives the *larger* imbalance because "its devices are weaker". The imbalance is $\approx\sqrt{\beta I_{SS}}\,\Delta V$, which shrinks with $\beta$.

**Common mistake.** Producing currents that do not add up to $I_{SS} = 1$ mA, for example by applying the square law to each device with a fixed $V_P$. The tail source fixes the sum, and $V_P$ adjusts.
