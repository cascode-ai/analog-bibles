# Detailed solution - R164

**Approach.** Apply the large-signal characteristic of the square-law differential pair, $I_{D1} - I_{D2} = \tfrac12\beta\Delta V\sqrt{4I_{SS}/\beta - \Delta V^2}$, with $I_{SS} = 2$ mA. Combine it with $I_{D1} + I_{D2} = I_{SS}$ to get each current, then repeat for 1 mA and compare the absolute and relative imbalances.

### Step 1 — Large-signal characteristic

$M_1$, $M_2$: identical saturated NMOS devices ($\lambda = 0$), sources at node $P$, ideal tail current $I_{SS}$. Let $\beta = \mu_nC_{ox}W/L$ and $\Delta V = V_{in1} - V_{in2}$.

- **KCL at $P$:** $I_{D1} + I_{D2} = I_{SS}$.
- **KVL through $P$:** $\Delta V = V_{GS1} - V_{GS2}$.
- **Square law:** $V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$, with equal thresholds (same source node), so $\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$.

Square, insert the sum, isolate the cross term and square again:

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right)\\
4I_{D1}I_{D2} &= \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2\\
(I_{D1} - I_{D2})^2 &= I_{SS}^2 - 4I_{D1}I_{D2} = \beta I_{SS}\Delta V^2 - \frac{\beta^2}{4}\Delta V^4\\
I_{D1} - I_{D2} &= \frac{\beta}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2},
\end{aligned}
$$

valid while both devices conduct, $|\Delta V| \le \sqrt{2I_{SS}/\beta}$.

### Step 2 — Sharing with $I_{SS} = 2$ mA

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2},\\
\sqrt{2I_{SS}/\beta} &= \sqrt{2(2\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.546\ \mathrm{V} \gg 50\ \mathrm{mV}\quad\text{(both on)},\\
\frac{4I_{SS}}{\beta} &= \frac{4(2\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.5970\ \mathrm{V^2},\\
\sqrt{0.5970 - 0.0025}\ \mathrm{V} &= \sqrt{0.5945}\ \mathrm{V} = 0.7711\ \mathrm{V},\\
\frac{\beta}{2}\Delta V &= (6.7\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.335\ \mathrm{mA/V},\\
I_{D1} - I_{D2} &= (0.335\ \mathrm{mA/V})(0.7711\ \mathrm{V}) = 0.2583\ \mathrm{mA}.
\end{aligned}
$$

With $I_{D1} + I_{D2} = 2$ mA:

$$
\begin{aligned}
I_{D1} &= \frac{2 + 0.2583}{2}\ \mathrm{mA} = 1.129\ \mathrm{mA},\\
I_{D2} &= \frac{2 - 0.2583}{2}\ \mathrm{mA} = 0.871\ \mathrm{mA}.
\end{aligned}
$$

**Check.** $\sqrt{2(1.1292)/13.4} - \sqrt{2(0.8708)/13.4} = 0.4105 - 0.3605 = 0.0500$ V. ✓

### Step 3 — Sharing with $I_{SS} = 1$ mA (comparison)

$$
\begin{aligned}
\frac{4I_{SS}}{\beta} &= 0.2985\ \mathrm{V^2}, \qquad \sqrt{0.2985 - 0.0025}\ \mathrm{V} = 0.5441\ \mathrm{V},\\
I_{D1} - I_{D2} &= (0.335\ \mathrm{mA/V})(0.5441\ \mathrm{V}) = 0.1823\ \mathrm{mA},\\
I_{D1} &= 0.591\ \mathrm{mA}, \qquad I_{D2} = 0.409\ \mathrm{mA}.
\end{aligned}
$$

### Step 4 — Comparison

| $I_{SS}$ | $V_{ov}$ | $G_{m0} = \sqrt{\beta I_{SS}}$ | $I_{D1}$ / $I_{D2}$ | $I_{D1} - I_{D2}$ | $\Delta I/I_{SS}$ |
|---|---|---|---|---|---|
| 2 mA | 0.386 V | 5.18 mS | 1.129 / 0.871 mA | 0.258 mA | 12.9 % |
| 1 mA | 0.273 V | 3.66 mS | 0.591 / 0.409 mA | 0.182 mA | 18.2 % |

- **Absolute imbalance** grows by $0.2583/0.1823 = 1.42 \approx \sqrt2$. For small inputs $I_{D1} - I_{D2} \approx G_{m0}\Delta V$ with $G_{m0} = \sqrt{\beta I_{SS}}$, which scales as $\sqrt{I_{SS}}$. Indeed $(5.18\ \mathrm{mS})(50\ \mathrm{mV}) = 0.259$ mA, within 0.3 % of the exact value.
- **Relative imbalance** falls from 18.2 % to 12.9 % of the tail current. Doubling $I_{SS}$ raises the overdrive by $\sqrt2$, so 50 mV is a smaller fraction of the input range. The pair is more linear.

Raising the tail current therefore improves both the transconductance and the linearity, at the cost of twice the power.

### Result

With $I_{SS} = 2$ mA: $I_{D1} \approx 1.129$ mA and $I_{D2} \approx 0.871$ mA ($\Delta I_D \approx 0.258$ mA).

With $I_{SS} = 1$ mA: $I_{D1} \approx 0.591$ mA and $I_{D2} \approx 0.409$ mA ($\Delta I_D \approx 0.182$ mA).

Doubling the tail current increases the absolute current difference by about $\sqrt2$ (higher $G_m$), while the fractional imbalance $\Delta I_D/I_{SS}$ drops from 18 % to 13 % (more linear).

**Common mistake.** Producing currents that do not add up to 2 mA, for example by keeping the 1-mA sharing ratio but adding the same increment to each side. The tail source fixes $I_{D1} + I_{D2} = I_{SS}$; the input only redistributes it.

**Common mistake.** Concluding that the larger tail current gives a *smaller* absolute difference because the pair is "more linear". The relative imbalance falls, but the absolute difference rises with $G_m = \sqrt{\beta I_{SS}}$.
