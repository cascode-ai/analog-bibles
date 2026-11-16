# Detailed solution - R520

**Approach.** Hold $I_D$ fixed and let $\beta = kW/L$ grow. Solve the current law for the overdrive, which falls as $(W/L)^{-1/3}$. Then use $g_m = 3I_D/(V_{GS} - V_{TH})$, which rises as $(W/L)^{1/3}$. Finally compare both with the square-law exponents ($\mp 1/2$) and add the weak-inversion ceiling that any real MOSFET reaches at very large $W/L$.

### Step 1 — Laws of the hypothetical device

The transconductance is given as $g_m = \beta V_{ov}^2$, with $V_{ov} = V_{GS} - V_{TH}$ the overdrive voltage. Integrating $g_m = dI_D/dV_{GS}$ with $I_D = 0$ at threshold gives the current law

$$I_D = \frac{\beta}{3}V_{ov}^3 .$$

$\beta$ is proportional to the aspect ratio, so write $\beta = k\,W/L$, with $k$ (A/V³) a process constant.

### Step 2 — Overdrive versus $W/L$ at constant $I_D$

Solve the current law for $V_{ov}$:

$$V_{ov}^3 = \frac{3I_D}{\beta} \quad\Longrightarrow\quad V_{ov} = \left(\frac{3I_D}{k\,W/L}\right)^{1/3} \propto \left(\frac WL\right)^{-1/3}.$$

- As $W/L \to 0$, $V_{ov} \to \infty$: a very narrow device needs a huge overdrive to carry $I_D$.
- As $W/L$ grows, $V_{ov}$ decreases toward zero.
- **Rate:** multiplying $W/L$ by 8 halves the overdrive ($8^{-1/3} = 1/2$). For the square law, $V_{ov} = \sqrt{2I_D/(\mu_nC_{ox}W/L)} \propto (W/L)^{-1/2}$, so a factor of 4 suffices. The overdrive of the hypothetical device therefore falls **more slowly** with $W/L$.

### Step 3 — $g_m$ versus $W/L$ at constant $I_D$

Use either form of $g_m$:

$$g_m = \frac{3I_D}{V_{ov}} = 3I_D\left(\frac{k\,W/L}{3I_D}\right)^{1/3} = (3I_D)^{2/3}\left(k\frac WL\right)^{1/3} \propto \left(\frac WL\right)^{1/3}.$$

- $g_m$ starts at zero for $W/L = 0$.
- **Initial slope:** $dg_m/d(W/L) \propto (W/L)^{-2/3} \to \infty$ at the origin, so the curve leaves the origin vertically.
- **Curvature:** the second derivative $\propto -(W/L)^{-5/3} < 0$, so the curve is concave (it bends over).
- **Rate:** doubling $g_m$ requires 8 times the $W/L$. For the square law, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D} \propto (W/L)^{1/2}$, which needs only 4 times. Widening the hypothetical device is therefore a **less effective** way to raise $g_m$ at fixed current.

### Step 4 — The weak-inversion ceiling

Neither formula above can be followed to arbitrarily large $W/L$. As $V_{ov}$ falls toward zero (and below), the transistor leaves strong inversion and enters **weak inversion** (subthreshold). There the current is exponential in $V_{GS}$:

$$I_D \propto \exp\frac{V_{GS}}{\xi V_T} \quad\Longrightarrow\quad g_m = \frac{I_D}{\xi V_T},$$

where $V_T = kT/q \approx 26$ mV is the thermal voltage and $\xi > 1$ (typically about 1.5) is the subthreshold slope factor. This is the largest $g_m$ any MOSFET can have for a given current, so $g_m$ **levels off** at $I_D/(\xi V_T)$, the dashed line in the figure, for both device types.

**Where the model meets the ceiling.** Set $3I_D/V_{ov} = I_D/(\xi V_T)$:

$$V_{ov} = 3\,\xi V_T \approx 3\times1.5\times26\ \mathrm{mV} \approx 0.12\ \mathrm{V}.$$

(For the square law, $2I_D/V_{ov} = I_D/(\xi V_T)$ gives $V_{ov} = 2\xi V_T \approx 0.08$ V.) Around and below this overdrive, the real curve bends over smoothly toward the asymptote instead of following $(W/L)^{1/3}$, and the overdrive approaches zero (eventually becoming slightly negative in deep weak inversion).

### Step 5 — Example values for the sketch

Take $I_D = 100\ \mu\mathrm{A}$ and $k = 0.24\ \mathrm{mA/V^3}$ per unit $W/L$. For $W/L = 10$:

$$
\begin{aligned}
\beta &= 0.24\ \mathrm{mA/V^3}\times10 = 2.4\ \mathrm{mA/V^3},\\
V_{ov} &= \left(\frac{3\times100\ \mu\mathrm{A}}{2.4\ \mathrm{mA/V^3}}\right)^{1/3} = (0.125\ \mathrm{V^3})^{1/3} = 0.50\ \mathrm{V},\\
g_m &= \frac{3\times100\ \mu\mathrm{A}}{0.50\ \mathrm{V}} = 0.60\ \mathrm{mS}.
\end{aligned}
$$

Repeating for larger $W/L$:

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

**Common mistake.** Using the square-law exponents, $g_m \propto \sqrt{W/L}$ and $V_{ov} \propto 1/\sqrt{W/L}$. With $I_D \propto \beta V_{ov}^3$, holding $I_D$ fixed gives $V_{ov} \propto \beta^{-1/3}$, and then $g_m = 3I_D/V_{ov} \propto \beta^{1/3}$.

**Common mistake.** Claiming that $g_m$ grows without bound as the device is widened. The cubic law describes strong inversion only. A real transistor moves into weak inversion as $V_{GS} - V_{TH}$ shrinks, and its transconductance per unit current can never exceed $1/(\xi V_T)$.

**Common mistake.** Drawing the overdrive *increasing* with $W/L$, or $g_m$ decreasing. A wider device needs less overdrive to carry the same current, and with the same current a smaller overdrive means a larger $g_m = 3I_D/V_{ov}$.
