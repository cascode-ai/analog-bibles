# Detailed solution - R691

**Approach.** The circuit is a CMOS inverter: NMOS $M_1$ and PMOS $M_2$ are driven by the same input and share the output node. We derive the transfer curve with the square-law model and KCL at the output ($I_{D1} = I_{D2}$) for general thresholds, then evaluate it for the target thresholds ($V_{THN} = 0.7$ V, $|V_{THP}| = 0.8$ V) and for the native ones ($V_{THN} \approx 0$, $|V_{THP}| \approx 1$ V) that result when the threshold-adjust implant is missing.

### Step 1 — Device equations with general thresholds

Write $V_{TN} = V_{THN}$ and $V_{TP} = |V_{THP}|$. Both bulks are tied to their sources, so there is no body effect.

Terminal voltages: $V_{GS1} = V_{in}$, $V_{DS1} = V_{out}$, $V_{SG2} = 3 - V_{in}$, $V_{SD2} = 3 - V_{out}$.

Square-law currents ($\lambda = 0$):

$$
\begin{aligned}
I_{D1} &= \tfrac12\mu_nC_{ox}(W/L)_1(V_{in} - V_{TN})^2 && \text{sat. if } V_{out} \ge V_{in} - V_{TN},\\
I_{D1} &= \mu_nC_{ox}(W/L)_1\big[(V_{in} - V_{TN})V_{out} - \tfrac12V_{out}^2\big] && \text{triode otherwise},\\
I_{D2} &= \tfrac12\mu_pC_{ox}(W/L)_2(3 - V_{TP} - V_{in})^2 && \text{sat. if } V_{out} \le V_{in} + V_{TP},\\
I_{D2} &= \mu_pC_{ox}(W/L)_2\big[(3 - V_{TP} - V_{in})(3 - V_{out}) - \tfrac12(3 - V_{out})^2\big] && \text{triode otherwise}.
\end{aligned}
$$

Here $V_{in} - V_{TN}$ is the overdrive of $M_1$ and $3 - V_{TP} - V_{in}$ that of $M_2$. Define the strength ratio

$$r = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}} .$$

### Step 2 — End points: where each device turns off

- **$M_1$ off** for $V_{in} \le V_{TN}$. $M_2$ is then on with zero current, i.e. in deep triode with $V_{SD2} = 0$, so $V_{out} = 3$ V.
- **$M_2$ off** for $V_{SG2} \le V_{TP}$, i.e. $V_{in} \ge 3 - V_{TP}$. $M_1$ is then on with zero current, so $V_{out} = 0$.
- **Both on** for $V_{TN} < V_{in} < 3 - V_{TP}$: this window holds the whole transition.

| | Target | No implant |
|---|---|---|
| $M_1$ turns on at | $V_{in} = 0.7$ V | $V_{in} = 0$ |
| $M_2$ turns off at | $V_{in} = 3 - 0.8 = 2.2$ V | $V_{in} = 3 - 1 = 2.0$ V |
| Both-on window | 0.7 – 2.2 V (1.5 V wide) | 0 – 2.0 V (2.0 V wide) |

Without the implant the output begins to fall right at $V_{in} = 0$ and has reached 0 V by $V_{in} = 2.0$ V.

### Step 3 — Switching threshold $V_M$ (both saturated)

At $V_{in} = V_M$ both devices are saturated. Equate the currents:

$$\tfrac12\mu_nC_{ox}(W/L)_1(V_M - V_{TN})^2 = \tfrac12\mu_pC_{ox}(W/L)_2(3 - V_{TP} - V_M)^2 .$$

Divide by $\tfrac12\mu_pC_{ox}(W/L)_2$ and take positive square roots:

$$r(V_M - V_{TN}) = 3 - V_{TP} - V_M .$$

Collect the $V_M$ terms:

$$V_M(1 + r) = 3 - V_{TP} + rV_{TN} \quad\Longrightarrow\quad V_M = \frac{3 - V_{TP} + rV_{TN}}{1 + r}.$$

**Target** ($V_{TN} = 0.7$, $V_{TP} = 0.8$):

$$V_{M,\text{target}} = \frac{2.2 + 0.7r}{1 + r}.$$

**No implant** ($V_{TN} = 0$, $V_{TP} = 1$):

$$V_{M,\text{new}} = \frac{2.0}{1 + r}.$$

**Shift to the left:**

$$V_{M,\text{target}} - V_{M,\text{new}} = \frac{2.2 + 0.7r - 2.0}{1 + r} = \frac{0.2 + 0.7r}{1 + r}.$$

Numbers:

| $r$ | $V_{M,\text{target}}$ | $V_{M,\text{new}}$ | shift |
|---|---|---|---|
| 1 | $2.9/2 = 1.45$ V | $2/2 = 1.00$ V | 0.45 V |
| 1.87 (equal $W/L$, $\mu_n/\mu_p \approx 3.5$) | $3.509/2.87 = 1.22$ V | $2/2.87 = 0.70$ V | 0.53 V |

Both changes push the same way: the lower $V_{THN}$ makes the NMOS stronger at a given input, and the larger $|V_{THP}|$ makes the PMOS weaker, so the NMOS wins at a lower input voltage.

**The vertical segment.** With $\lambda = 0$, the current balance at $V_M$ holds for every $V_{out}$ that keeps both saturated, $V_M - V_{TN} \le V_{out} \le V_M + V_{TP}$. Target: from $V_M + 0.8$ down to $V_M - 0.7$. No implant: from $V_M + 1$ down to $V_M$ (for $r = 1$: from 2.0 V to 1.0 V).

### Step 4 — The bends on either side of $V_M$

**Upper bend ($V_{TN} < V_{in} < V_M$): $M_1$ saturated, $M_2$ triode.** Let $x = 3 - V_{out}$. Equate currents and divide by $\tfrac12\mu_pC_{ox}(W/L)_2$:

$$r^2(V_{in} - V_{TN})^2 = 2(3 - V_{TP} - V_{in})x - x^2 .$$

The triode root is the smaller one:

$$x = (3 - V_{TP} - V_{in}) - \sqrt{(3 - V_{TP} - V_{in})^2 - r^2(V_{in} - V_{TN})^2}, \qquad V_{out} = 3 - x .$$

**Lower bend ($V_M < V_{in} < 3 - V_{TP}$): $M_1$ triode, $M_2$ saturated.** Divide by $\tfrac12\mu_nC_{ox}(W/L)_1$:

$$2(V_{in} - V_{TN})V_{out} - V_{out}^2 = \frac{(3 - V_{TP} - V_{in})^2}{r^2},$$

$$V_{out} = (V_{in} - V_{TN}) - \sqrt{(V_{in} - V_{TN})^2 - \frac{(3 - V_{TP} - V_{in})^2}{r^2}} .$$

**Example, no implant, $r = 1$.** At $V_{in} = 0.5$ V (upper bend):

$$x = 1.5 - \sqrt{1.5^2 - 0.5^2} = 1.5 - \sqrt{2.0} = 1.5 - 1.414 = 0.086\ \mathrm{V},\qquad V_{out} = 2.914\ \mathrm{V}.$$

At $V_{in} = 1.5$ V (lower bend):

$$V_{out} = 1.5 - \sqrt{1.5^2 - 0.5^2} = 0.086\ \mathrm{V}.$$

### Step 5 — Side-by-side table ($r = 1$)

| $V_{in}$ (V) | Target $V_{out}$ (V) | No implant $V_{out}$ (V) |
|---|---|---|
| 0 | 3.00 ($M_1$ off) | 3.00 ($M_1$ at threshold) |
| 0.2 | 3.00 | 2.99 |
| 0.5 | 3.00 | 2.91 |
| 0.8 | 3.00 | 2.69 |
| 1.0 | 2.96 | **2.0 → 1.0 (vertical, $V_M$)** |
| 1.2 | 2.87 | 0.31 |
| 1.45 | **2.25 → 0.75 (vertical, $V_M$)** | 0.11 |
| 1.5 | 0.41 | 0.09 |
| 1.7 | 0.13 | 0.03 |
| 2.0 | 0.02 | 0 ($M_2$ off) |
| 2.2 – 3 | 0 ($M_2$ off) | 0 |

(The target entries come from the same formulas with $V_{TN} = 0.7$, $V_{TP} = 0.8$.)

**Sketch.** Both curves have the inverter shape. The no-implant curve leaves 3 V immediately at $V_{in} = 0$, switches at 1.0 V instead of 1.45 V, and is at 0 V from 2.0 V on instead of 2.2 V. It is shifted to the left, and its transition region (where both devices conduct) is wider: 2.0 V instead of 1.5 V.

### Step 6 — Consequences

- **Asymmetric noise margins.** The switching point moves well below $V_{DD}/2 = 1.5$ V, so the low-side noise margin shrinks: a "low" input only slightly above ground already disturbs the output.
- **Leakage at $V_{in} = 0$.** The NMOS sits right at its threshold when its input is low, so in reality a subthreshold current flows through the inverter in the "off" state, and the high output level is slightly degraded.
- **Larger crowbar current.** At $V_M$ both devices conduct the same current. The NMOS overdrive there is
$$V_M - V_{TN} = \frac{2.2 + 0.7r}{1 + r} - 0.7 = \frac{1.5}{1 + r}\ \ \text{(target)}, \qquad V_M - 0 = \frac{2.0}{1 + r}\ \ \text{(no implant)},$$
so
$$\frac{I_{peak,\text{new}}}{I_{peak,\text{target}}} = \left(\frac{2.0}{1.5}\right)^2 = 1.78 .$$
- **Gain at $V_M$ (with channel-length modulation, optional).** In the transition, the small-signal gain is $-(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})$. Using $g_m = 2I_D/V_{ov}$ and $r_{O1}\parallel r_{O2} = 1/[(\lambda_n + \lambda_p)I_D]$:
$$|A_v| = \frac{2}{\lambda_n + \lambda_p}\left(\frac{1}{V_{ov1}} + \frac{1}{V_{ov2}}\right).$$
At $V_M$ the overdrives are $V_{ov1} = S/(1 + r)$ and $V_{ov2} = rS/(1 + r)$, where $S = V_{ov1} + V_{ov2} = 3 - V_{TP} - V_{TN}$ is 1.5 V (target) or 2.0 V (no implant). Then $1/V_{ov1} + 1/V_{ov2} = (1 + r)^2/(rS)$, so $|A_v| \propto 1/S$ and the gain drops to $1.5/2.0 = 0.75$ of its target value.

### Result

Without the threshold-adjust implant, with $r = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$:

- The output starts falling at $V_{in} \approx 0$ (instead of 0.7 V) and reaches 0 at $V_{in} = V_{DD} - |V_{THP}| = 2.0$ V (instead of 2.2 V); both devices conduct over 0–2.0 V instead of 0.7–2.2 V.
- The switching threshold drops from $V_M = (2.2 + 0.7r)/(1 + r)$ to $V_M = 2.0/(1 + r)$, a left shift of $(0.2 + 0.7r)/(1 + r)$: 1.45 V → 1.00 V for $r = 1$, 1.22 V → 0.70 V for equal $W/L$ ($r = 1.87$).
- The curve is shifted left with a wider transition; the crowbar current at $V_M$ is about 1.8 times larger, the NMOS leaks at $V_{in} = 0$, and (with $\lambda$) the gain at $V_M$ is about 0.75 of its target value.

**Common mistake.** Considering only the NMOS threshold. The missing implant also raises $|V_{THP}|$ to 1 V, which moves the point where $M_2$ turns off from 2.2 V to 2.0 V and weakens the PMOS; leaving it out gives $V_M = (2.2)/(1 + r)$ and the wrong right-hand break point.

**Common mistake.** Moving $V_M$ to the right. A lower $V_{THN}$ strengthens the pull-down device and a higher $|V_{THP}|$ weakens the pull-up device; both make the NMOS take over at a lower input, so $V_M$ decreases.

**Common mistake.** Assuming the curve keeps the same shape and merely translates. The width of the both-on window is $V_{DD} - V_{TN} - V_{TP}$, which grows from 1.5 V to 2.0 V, so the transition also widens and the peak current rises.
