# Detailed solution - R158

**Approach.** Derive the equivalent transconductance $G_m$ of the square-law differential pair as a function of the differential input, normalize it to its equilibrium value, and solve $G_m/G_{m0} = 0.9$ and $G_m/G_{m0} = 0.1$. Written with $u = x^2$, where $x$ is the input normalized to the overdrive, each condition becomes a quadratic equation.

### Step 1 — Large-signal characteristic

$M_1$ and $M_2$ are identical saturated NMOS devices ($\lambda = 0$) with sources at node $P$ and an ideal tail current $I_{SS} = 1$ mA. Let $\beta = \mu_nC_{ox}W/L$ and $\Delta V = V_{in1} - V_{in2}$.

- KCL at $P$: $I_{D1} + I_{D2} = I_{SS}$.
- KVL through $P$: $\Delta V = V_{GS1} - V_{GS2} = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$ (the equal thresholds cancel).

Squaring twice and using $(I_{D1} - I_{D2})^2 = I_{SS}^2 - 4I_{D1}I_{D2}$:

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right) \;\Rightarrow\; 4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2,\\
(I_{D1} - I_{D2})^2 &= I_{SS}^2 - \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2 = \frac{\beta^2}{4}\Delta V^2\left(\frac{4I_{SS}}{\beta} - \Delta V^2\right),\\
I_{D1} - I_{D2} &= \frac{\beta}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2}.
\end{aligned}
$$

This holds while both devices conduct, $|\Delta V| \le \sqrt{2I_{SS}/\beta}$.

### Step 2 — Equivalent transconductance and its normalized form

Differentiate with the product rule, writing $K = 4I_{SS}/\beta$:

$$G_m = \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V} = \frac{\beta}{2}\left[\sqrt{K - \Delta V^2} - \frac{\Delta V^2}{\sqrt{K - \Delta V^2}}\right] = \frac{\beta}{2}\,\frac{K - 2\Delta V^2}{\sqrt{K - \Delta V^2}} .$$

Introduce the **equilibrium overdrive** $V_{ov} = \sqrt{I_{SS}/\beta}$ (each device carries $I_{SS}/2 = \tfrac12\beta V_{ov}^2$), so that $K = 4V_{ov}^2$, and the normalized input $x = \Delta V/V_{ov}$:

$$
\begin{aligned}
G_m &= \frac{\beta}{2}\,\frac{4V_{ov}^2 - 2x^2V_{ov}^2}{V_{ov}\sqrt{4 - x^2}} = \beta V_{ov}\,\frac{2 - x^2}{\sqrt{4 - x^2}},\\
G_{m0} &= G_m(x = 0) = \beta V_{ov}\cdot\frac{2}{2} = \beta V_{ov} = \sqrt{\beta I_{SS}},\\
\frac{G_m}{G_{m0}} &= \frac{2 - x^2}{\sqrt{4 - x^2}} .
\end{aligned}
$$

This ratio falls monotonically from 1 at $x = 0$ to 0 at $x = \sqrt2$, where the pair is completely steered. Beyond that point one device is off and $G_m = 0$.

### Step 3 — Numbers for this pair

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{I_{SS}}{\beta}} = \sqrt{\frac{1\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V},\\
G_{m0} &= \beta V_{ov} = (13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V}) = 3.66\ \mathrm{mS},\\
\Delta V_{cut} &= \sqrt2\,V_{ov} = 0.386\ \mathrm{V}\ \ \text{(full steering, } G_m = 0\text{)}.
\end{aligned}
$$

### Step 4 — 10 % drop: $G_m/G_{m0} = 0.9$

Set $u = x^2$ and square the condition. ($2 - u > 0$ in the valid range, so squaring is safe as long as we discard roots with $u > 2$.)

$$
\begin{aligned}
\frac{2 - u}{\sqrt{4 - u}} &= 0.9\\
(2 - u)^2 &= 0.81\,(4 - u)\\
u^2 - 4u + 4 &= 3.24 - 0.81u\\
u^2 - 3.19u + 0.76 &= 0 .
\end{aligned}
$$

Quadratic formula:

$$u = \frac{3.19 \pm \sqrt{3.19^2 - 4(0.76)}}{2} = \frac{3.19 \pm \sqrt{10.176 - 3.04}}{2} = \frac{3.19 \pm 2.671}{2} .$$

The roots are $u = 0.2593$ and $u = 2.931$. The second is larger than 2, i.e. beyond full steering, where the formula no longer applies (it corresponds to $2 - u < 0$, a root introduced by squaring). So

$$
\begin{aligned}
u &= 0.2593, \qquad x = \sqrt{0.2593} = 0.5092,\\
\Delta V_{10\%} &= xV_{ov} = (0.5092)(0.2732\ \mathrm{V}) = 0.139\ \mathrm{V}.
\end{aligned}
$$

Check: $(2 - 0.2593)/\sqrt{4 - 0.2593} = 1.7407/1.9341 = 0.900$. ✓

### Step 5 — 90 % drop: $G_m/G_{m0} = 0.1$

$$
\begin{aligned}
(2 - u)^2 &= 0.01\,(4 - u)\\
u^2 - 4u + 4 &= 0.04 - 0.01u\\
u^2 - 3.99u + 3.96 &= 0,\\
u &= \frac{3.99 \pm \sqrt{3.99^2 - 4(3.96)}}{2} = \frac{3.99 \pm \sqrt{15.920 - 15.840}}{2} = \frac{3.99 \pm 0.2830}{2}.
\end{aligned}
$$

The roots are $u = 1.8535$ and $u = 2.1365$; discard the one above 2. Then

$$
\begin{aligned}
x &= \sqrt{1.8535} = 1.3614,\\
\Delta V_{90\%} &= xV_{ov} = (1.3614)(0.2732\ \mathrm{V}) = 0.372\ \mathrm{V}.
\end{aligned}
$$

Check: $(2 - 1.8535)/\sqrt{4 - 1.8535} = 0.1465/1.4651 = 0.100$. ✓

### Step 6 — Picture of $G_m$ versus the input

| $\Delta V$ (V) | $x = \Delta V/V_{ov}$ | $G_m/G_{m0}$ | $G_m$ (mS) |
|---|---|---|---|
| 0 | 0 | 1.000 | 3.66 |
| 0.050 | 0.183 | 0.987 | 3.61 |
| 0.139 | 0.509 | 0.900 | 3.29 |
| 0.273 | 1.000 | 0.577 | 2.11 |
| 0.372 | 1.361 | 0.100 | 0.37 |
| 0.386 | 1.414 | 0 | 0 |

$G_m$ stays flat near equilibrium (it is an even function of $\Delta V$, with zero slope at the origin), falls more and more steeply, and collapses to zero at full steering. The 90 %-drop point therefore lies only 14 mV below the cut-off.

### Result

$G_m$ drops by **10 % at $|V_{in1} - V_{in2}| \approx 0.139$ V** and by **90 % at $|V_{in1} - V_{in2}| \approx 0.372$ V**, from $G_m/G_{m0} = (2 - x^2)/\sqrt{4 - x^2}$ with $x = \Delta V/V_{ov}$, $V_{ov} = 0.273$ V. The roots are $x = 0.509$ and $x = 1.361$. For comparison, $G_m$ reaches zero at $\sqrt2\,V_{ov} = 0.386$ V.

**Common mistake.** Linearizing the characteristic (for example, using a constant $G_m$ or a first-order expansion), which gives meaningless drop points such as 27 mV for 10 %. The drop must come from the exact large-signal $G_m$ expression.

**Common mistake.** Keeping the extraneous roots of the quadratics ($u = 2.93$ or $u = 2.14$, i.e. $\Delta V = 0.47$ V or $0.40$ V). These lie beyond the full-steering voltage of 0.386 V, where one transistor is off and the formula is not valid; they appear only because the equation was squared.
