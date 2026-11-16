# Detailed solution - R521

**Approach.** With $W/L$ (hence $\beta$) fixed, invert $I_D = \beta V_{ov}^3/3$ to get $V_{ov} = V_{GS} - V_{TH} \propto I_D^{1/3}$, then substitute into $g_m = \beta V_{ov}^2$ to get $g_m \propto I_D^{2/3}$. Compare the shapes with the square law's $\sqrt{I_D}$ curves in the figure ($V_{ov} = \sqrt{2I_D/(\mu_nC_{ox}W/L)}$ and $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$).

### Step 1 — Overdrive versus $I_D$

$$V_{ov}^3 = \frac{3I_D}{\beta} \quad\Longrightarrow\quad V_{ov} = \left(\frac{3I_D}{\beta}\right)^{1/3} \propto I_D^{1/3}.$$

- At the origin $dV_{ov}/dI_D = \tfrac13(3/\beta)^{1/3}I_D^{-2/3} \to \infty$ (a vertical tangent), and $d^2V_{ov}/dI_D^2 \propto -I_D^{-5/3} < 0$, so the curve is concave and flattens out.
- Doubling the overdrive requires $2^3 = 8$ times the current (square law: $2^2 = 4$ times), so this curve is **flatter** than the square law's: with a cubic law, a large change in current needs only a small change in overdrive.

### Step 2 — $g_m$ versus $I_D$

$$g_m = \beta\left(\frac{3I_D}{\beta}\right)^{2/3} = \beta^{1/3}(3I_D)^{2/3} \propto I_D^{2/3},$$

equivalently $g_m = 3I_D/V_{ov}$.

- At the origin $dg_m/dI_D = \tfrac23\beta^{1/3}3^{2/3}I_D^{-1/3} \to \infty$, again a vertical tangent, and $d^2g_m/dI_D^2 \propto -I_D^{-4/3} < 0$, concave.
- Doubling $I_D$ raises $g_m$ by $2^{2/3} = 1.59$ (square law: $\sqrt2 = 1.41$). Since $2/3 > 1/2$, the $g_m$ curve rises **faster** (is "less bent") than the square law's $\sqrt{I_D}$, though it still bends over.

### Step 3 — Example values for the sketch

Take $\beta = 30\ \mathrm{mA/V^3}$. For $I_D = 80\ \mu\mathrm{A}$:

$$
\begin{aligned}
V_{ov} &= \left(\frac{3\times80\ \mu\mathrm{A}}{30\ \mathrm{mA/V^3}}\right)^{1/3} = (0.008\ \mathrm{V^3})^{1/3} = 0.20\ \mathrm{V},\\
g_m &= \frac{3I_D}{V_{ov}} = \frac{3\times80\ \mu\mathrm{A}}{0.20\ \mathrm{V}} = 1.2\ \mathrm{mS}.
\end{aligned}
$$

| $I_D$ (µA) | 10 | 20 | 40 | 80 | 160 | 320 | 640 |
|---|---|---|---|---|---|---|---|
| $V_{ov}$ (V), plotted downward | 0.100 | 0.126 | 0.159 | 0.200 | 0.252 | 0.318 | 0.400 |
| $g_m$ (mS), plotted upward | 0.30 | 0.48 | 0.76 | 1.20 | 1.90 | 3.02 | 4.80 |

From 10 µA to 80 µA to 640 µA (factors of 8), $V_{ov}$ doubles each time (0.1 → 0.2 → 0.4 V) and $g_m$ quadruples (0.3 → 1.2 → 4.8 mS). Each doubling of $I_D$ multiplies $g_m$ by 1.59 (e.g. 0.30 → 0.48 mS).

**The sketch** (same axes as the figure):
- **upper half:** $g_m$ rising from the origin with a vertical tangent, concave, growing as $I_D^{2/3}$, i.e. less bent and rising faster than the square law's $\sqrt{I_D}$;
- **lower half:** $V_{ov}$ also leaving the origin vertically, concave, growing as $I_D^{1/3}$: it bends over more strongly and becomes flatter than the square law's $\sqrt{I_D}$.

At extremely small currents a real transistor would enter weak inversion ($g_m \approx I_D/(\xi V_T)$), outside the given saturation law; this does not change the shapes over the plotted range.

### Step 4 — Why the exponents differ from the square law

For any law $I_D = c\,V_{ov}^{m}$ at fixed $W/L$:

$$V_{ov} \propto I_D^{1/m},\qquad g_m = \frac{m\,I_D}{V_{ov}} \propto I_D^{1 - 1/m}.$$

The square law ($m = 2$) gives the same exponent $\tfrac12$ for both curves, so they share a shape; here ($m = 3$) the curves **differ**: $g_m$ is closer to linear in $I_D$ and $V_{ov}$ is flatter.

### Result

At constant $W/L$:

$$g_m = \beta^{1/3}(3I_D)^{2/3} \propto I_D^{2/3},\qquad V_{GS} - V_{TH} = \left(\frac{3I_D}{\beta}\right)^{1/3} \propto I_D^{1/3}.$$

- $g_m$ starts at the origin with infinite slope and is concave. It grows faster than the square law's $\sqrt{I_D}$: doubling $I_D$ raises $g_m$ by 1.59 times instead of 1.41.
- $V_{GS} - V_{TH}$ rises steeply at first and then flattens, more strongly than the square law's $\sqrt{I_D}$: 8 times the current doubles the overdrive, instead of 4 times.

**Common mistake.** Keeping the square-law exponent $\tfrac12$ for both curves. That exponent comes from $I_D \propto V_{ov}^2$; for $I_D \propto V_{ov}^3$ the overdrive goes as $I_D^{1/3}$ and $g_m$ as $I_D^{2/3}$.

**Common mistake.** Drawing $g_m$ as linear in $I_D$. That would require a constant $g_m/I_D$ (as in weak inversion); here $g_m/I_D = 3/V_{ov}$ falls as the current and the overdrive increase.
