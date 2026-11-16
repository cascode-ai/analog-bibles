# Detailed solution - R523

**Approach.** Hold $I_D$ fixed and treat the overdrive $V_{ov} = V_{GS} - V_{TH}$ as the variable. $g_m = 3I_D/V_{ov}$ gives a hyperbola. The current law solved for $W/L$ gives $W/L \propto V_{ov}^{-3}$. Compare with the square law ($2I_D/V_{ov}$ and $V_{ov}^{-2}$) and add the weak-inversion cap on $g_m$ at small overdrive.

### Step 1 — Laws of the hypothetical device

The transconductance is $g_m = \beta V_{ov}^2$. Integrating $g_m = dI_D/dV_{GS}$ with $I_D = 0$ at threshold gives

$$I_D = \frac{\beta}{3}V_{ov}^3,\qquad \beta = k\,\frac WL ,$$

where $k$ (A/V³) is a process constant.

For reference, the square-law device in the figure has $g_m = 2I_D/V_{ov}$ and $W/L = 2I_D/(\mu_nC_{ox}V_{ov}^2)$, with $\mu_n$ the electron mobility and $C_{ox}$ the oxide capacitance per unit area.

### Step 2 — $g_m$ versus overdrive at constant $I_D$

From $g_m/I_D = \beta V_{ov}^2/(\beta V_{ov}^3/3) = 3/V_{ov}$:

$$g_m = \frac{3I_D}{V_{ov}} \propto \frac{1}{V_{ov}} .$$

With $I_D$ fixed this is a **decreasing hyperbola**. Halving the overdrive doubles $g_m$, and at every overdrive the value is 1.5 times the square-law value $2I_D/V_{ov}$.

**Why it decreases.** At a fixed current, a smaller overdrive means a wider device. The same current is then controlled by a smaller gate-voltage swing, so the device is more sensitive to $V_{GS}$, i.e. it has a larger $g_m$.

### Step 3 — The weak-inversion cap at small overdrive

The hyperbola would diverge as $V_{ov} \to 0$, which is impossible. At small overdrive the device enters weak inversion, where $I_D \propto \exp[V_{GS}/(\xi V_T)]$ and

$$g_m = \frac{I_D}{\xi V_T}$$

is the maximum attainable transconductance for the given current. Here $V_T = kT/q \approx 26$ mV is the thermal voltage and $\xi > 1$ (about 1.5) is the subthreshold slope factor.

The strong-inversion formula reaches this cap where

$$\frac{3I_D}{V_{ov}} = \frac{I_D}{\xi V_T}\quad\Longrightarrow\quad V_{ov} = 3\xi V_T \approx 3\times1.5\times26\ \mathrm{mV} \approx 0.12\ \mathrm{V}.$$

Below roughly this overdrive, the real curve bends over and flattens toward $I_D/(\xi V_T)$, the dotted part in the figure. For the square law the crossover is at $2\xi V_T \approx 0.08$ V.

### Step 4 — $W/L$ versus overdrive at constant $I_D$

Solve the current law for $W/L$:

$$I_D = \frac{k}{3}\frac WL V_{ov}^3 \quad\Longrightarrow\quad \frac WL = \frac{3I_D}{k\,V_{ov}^3} \propto V_{ov}^{-3}.$$

- This is a **decreasing** curve that blows up as $V_{ov} \to 0$ and falls very steeply.
- **Rate:** halving the overdrive requires $2^3 = 8$ times the $W/L$, whereas the square law's $W/L \propto V_{ov}^{-2}$ needs only 4 times.

Because the current depends on the cube of the overdrive, a small reduction in $V_{ov}$ must be compensated by a large increase in width.

### Step 5 — Example values for the sketch

Take $I_D = 100\ \mu\mathrm{A}$ and $k = 0.24\ \mathrm{mA/V^3}$. At $V_{ov} = 0.2$ V:

$$
\begin{aligned}
g_m &= \frac{3\times100\ \mu\mathrm{A}}{0.2\ \mathrm{V}} = 1.5\ \mathrm{mS},\\
\frac WL &= \frac{3\times100\ \mu\mathrm{A}}{(0.24\ \mathrm{mA/V^3})(0.2\ \mathrm{V})^3} = \frac{300\ \mu\mathrm{A}}{1.92\ \mu\mathrm{A}} = 156 .
\end{aligned}
$$

| $V_{ov}$ (V) | 0.1 | 0.15 | 0.2 | 0.3 | 0.4 | 0.5 |
|---|---|---|---|---|---|---|
| $g_m = 3I_D/V_{ov}$ (mS) | (3.0)* | 2.0 | 1.5 | 1.0 | 0.75 | 0.60 |
| $W/L$ | 1250 | 370 | 156 | 46 | 19.5 | 10 |

*At 0.1 V the formula gives 3.0 mS, more than the weak-inversion cap $I_D/(\xi V_T) = 100\ \mu\mathrm{A}/39\ \mathrm{mV} = 2.56$ mS. The real device is in moderate/weak inversion there, and its $g_m$ stays below 2.56 mS.

Notice in the $W/L$ row that going from 0.4 V to 0.2 V multiplies $W/L$ by 8 (19.5 → 156), and going from 0.2 V to 0.1 V multiplies it by 8 again.

**The sketch** (same axes as the figure):
- **upper half:** $g_m$ falling as $3I_D/V_{ov}$ for larger overdrives (a hyperbola, 1.5 times the square-law curve), and flattening toward the level $I_D/(\xi V_T)$ as $V_{ov}$ drops below about 0.12 V;
- **lower half:** $W/L$ (plotted downward) huge at small overdrive and collapsing as $V_{ov}^{-3}$, more steeply than the square law's $V_{ov}^{-2}$, approaching the axis at large overdrive.

### Result

At constant $I_D$, with $\beta = kW/L$:

$$g_m = \frac{3I_D}{V_{GS} - V_{TH}} \propto \frac{1}{V_{GS} - V_{TH}},\qquad \frac WL = \frac{3I_D}{k\,(V_{GS} - V_{TH})^3} \propto (V_{GS} - V_{TH})^{-3}.$$

- $g_m$ is a decreasing hyperbola ($3I_D/V_{ov}$ instead of the square law's $2I_D/V_{ov}$). At small overdrive it cannot exceed the weak-inversion limit $I_D/(\xi V_T)$, so it flattens out below about $3\xi V_T \approx 0.12$ V.
- $W/L$ falls much more steeply than the square law's $(V_{GS} - V_{TH})^{-2}$: halving the overdrive needs 8 times the $W/L$, instead of 4 times.

**Common mistake.** Using the square-law dependence $W/L \propto V_{ov}^{-2}$. Holding $I_D = \tfrac{k}{3}(W/L)V_{ov}^3$ constant forces $W/L \propto V_{ov}^{-3}$.

**Common mistake.** Writing $g_m = 2I_D/V_{ov}$ for this device, or drawing $g_m$ increasing with overdrive. The ratio $g_m/I_D$ equals the exponent of the current law divided by $V_{ov}$, here $3/V_{ov}$. At fixed current it falls as the overdrive rises.

**Common mistake.** Letting the $g_m$ hyperbola grow without limit at small overdrive. Strong-inversion formulas stop applying near threshold, and no MOSFET can exceed $g_m = I_D/(\xi V_T)$.
