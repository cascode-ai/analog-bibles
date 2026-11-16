# Detailed solution - R520

**Approach.** Hold $I_D$ fixed and let $\beta = kW/L$ grow ($k$ in A/V³, a process constant). Solving $I_D = \beta V_{ov}^3/3$ for the overdrive $V_{ov} = V_{GS} - V_{TH}$ gives $V_{ov} \propto (W/L)^{-1/3}$, and $g_m = 3I_D/V_{ov} \propto (W/L)^{1/3}$. Compare both with the square-law exponents ($\mp 1/2$) and add the weak-inversion ceiling reached at very large $W/L$.

### Step 1 — Overdrive versus $W/L$ at constant $I_D$

$$V_{ov}^3 = \frac{3I_D}{\beta} \quad\Longrightarrow\quad V_{ov} = \left(\frac{3I_D}{k\,W/L}\right)^{1/3} \propto \left(\frac WL\right)^{-1/3}.$$

- As $W/L \to 0$, $V_{ov} \to \infty$; as $W/L$ grows, $V_{ov}$ decreases toward zero.
- Multiplying $W/L$ by 8 halves the overdrive ($8^{-1/3} = 1/2$). For the square law, $V_{ov} = \sqrt{2I_D/(\mu_nC_{ox}W/L)} \propto (W/L)^{-1/2}$, so a factor of 4 suffices: the overdrive here falls **more slowly** with $W/L$.

### Step 2 — $g_m$ versus $W/L$ at constant $I_D$

$$g_m = \frac{3I_D}{V_{ov}} = 3I_D\left(\frac{k\,W/L}{3I_D}\right)^{1/3} = (3I_D)^{2/3}\left(k\frac WL\right)^{1/3} \propto \left(\frac WL\right)^{1/3}.$$

- $g_m$ starts at zero, with $dg_m/d(W/L) \propto (W/L)^{-2/3} \to \infty$ at the origin (a vertical tangent), and is concave (second derivative $\propto -(W/L)^{-5/3} < 0$).
- Doubling $g_m$ requires 8 times the $W/L$; for the square law, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D} \propto (W/L)^{1/2}$ needs only 4 times. Widening this device is a **less effective** way to raise $g_m$ at fixed current.

### Step 3 — The weak-inversion ceiling

As $V_{ov}$ falls toward zero the transistor enters weak inversion, where $g_m = I_D/(\xi V_T)$ ($V_T = kT/q \approx 26$ mV, $\xi$ typically about 1.5), the largest $g_m$ any MOSFET can have for a given current. So $g_m$ **levels off** at $I_D/(\xi V_T)$, the dashed line in the figure, for both device types. The model meets the ceiling where $3I_D/V_{ov} = I_D/(\xi V_T)$:

$$V_{ov} = 3\,\xi V_T \approx 3\times1.5\times26\ \mathrm{mV} \approx 0.12\ \mathrm{V}$$

(square law: $2I_D/V_{ov} = I_D/(\xi V_T)$ gives $V_{ov} = 2\xi V_T \approx 0.08$ V). Around and below this overdrive the real curve bends over smoothly toward the asymptote, and the overdrive approaches zero (slightly negative in deep weak inversion).

### Step 4 — Example values for the sketch

Take $I_D = 100\ \mu\mathrm{A}$ and $k = 0.24\ \mathrm{mA/V^3}$ per unit $W/L$. For $W/L = 10$:

$$
\begin{aligned}
\beta &= 0.24\ \mathrm{mA/V^3}\times10 = 2.4\ \mathrm{mA/V^3},\\
V_{ov} &= \left(\frac{3\times100\ \mu\mathrm{A}}{2.4\ \mathrm{mA/V^3}}\right)^{1/3} = (0.125\ \mathrm{V^3})^{1/3} = 0.50\ \mathrm{V},\\
g_m &= \frac{3\times100\ \mu\mathrm{A}}{0.50\ \mathrm{V}} = 0.60\ \mathrm{mS}.
\end{aligned}
$$

| $W/L$ | 10 | 20 | 40 | 80 | 160 | 320 | 640 |
|---|---|---|---|---|---|---|---|
| $V_{ov}$ (V), plotted downward | 0.50 | 0.40 | 0.315 | 0.25 | 0.198 | 0.157 | 0.125 |
| $g_m$ (mS), plotted upward | 0.60 | 0.76 | 0.95 | 1.20 | 1.51 | 1.90 | 2.40 |

Each factor of 8 in $W/L$ (10 → 80 → 640) halves $V_{ov}$ and doubles $g_m$. The ceiling is $I_D/(\xi V_T) = 100\ \mu\mathrm{A}/(1.5\times26\ \mathrm{mV}) = 2.56$ mS, so near $W/L \approx 640$ (where $V_{ov} \approx 0.12$ V) the real device is already in moderate/weak inversion and $g_m$ flattens out just below 2.56 mS.

**The sketch** (same axes as the figure):
- **upper half:** $g_m$ rising from the origin with a vertical tangent, concave, growing as $(W/L)^{1/3}$, more slowly than the square law's $\sqrt{W/L}$, and finally levelling off below the dashed line $I_D/(\xi V_T)$;
- **lower half:** $V_{ov}$ coming down from very large values at small $W/L$ and decaying as $(W/L)^{-1/3}$, more slowly than the square law's $(W/L)^{-1/2}$, approaching zero at large $W/L$.

### Result

At constant $I_D$, with $\beta \propto W/L$:

$$V_{GS} - V_{TH} = \left(\frac{3I_D}{\beta}\right)^{1/3} \propto \left(\frac WL\right)^{-1/3},\qquad g_m = \frac{3I_D}{V_{GS} - V_{TH}} = (3I_D)^{2/3}\beta^{1/3} \propto \left(\frac WL\right)^{1/3}.$$

- The overdrive decreases, more slowly than for the square law: 8 times the $W/L$ halves it, instead of 4 times.
- $g_m$ rises with infinite initial slope and a concave shape, more slowly than the square law's $\sqrt{W/L}$: doubling $g_m$ takes 8 times the $W/L$.
- At large $W/L$ the device enters weak inversion and $g_m$ levels off at $I_D/(\xi V_T)$, as for the square-law device. The model's $g_m$ reaches this limit near $V_{GS} - V_{TH} \approx 3\xi V_T \approx 0.12$ V.

**Common mistake.** Using the square-law exponents, $g_m \propto \sqrt{W/L}$ and $V_{ov} \propto 1/\sqrt{W/L}$. With $I_D \propto \beta V_{ov}^3$ at fixed $I_D$, $V_{ov} \propto \beta^{-1/3}$ and $g_m = 3I_D/V_{ov} \propto \beta^{1/3}$.

**Common mistake.** Claiming that $g_m$ grows without bound as the device is widened. The cubic law describes strong inversion only; as $V_{GS} - V_{TH}$ shrinks the device enters weak inversion, and $g_m/I_D$ can never exceed $1/(\xi V_T)$.
