# Detailed solution - R610

**Approach.** Describe the CS stage by $y = \alpha_1x + \alpha_2x^2$, with both coefficients computed from the square law at the given bias. Derive the closed-loop second-harmonic ratio for the loop of [Fig. 2], evaluate it for $W/L = 200/0.5$ and for $W/L = 50/0.5$, and then explain the comparison by looking at how $\alpha_1$ and $\alpha_2$ scale with $W/L$.

### Step 1 — Polynomial model of the CS stage

With $k = \mu_nC_{ox}(W/L)$ and overdrive $V_{ov} = V_{GS} - V_{TH} = \sqrt{2I/k}$ at the bias point, a small gate signal $x$ gives

$$I_D = \tfrac12k(V_{ov} + x)^2 = I + kV_{ov}x + \tfrac12kx^2 .$$

The output change is $R_D$ times the current change (the sign inversion is absorbed in the loop, which is arranged for negative feedback):

$$y = \alpha_1x + \alpha_2x^2, \qquad \alpha_1 = g_mR_D = kV_{ov}R_D, \qquad \alpha_2 = \tfrac12kR_D .$$

**Open-loop HD2** for $x = V_m\cos\omega t$ (using $\cos^2\theta = \tfrac12 + \tfrac12\cos2\theta$): $\dfrac{\tfrac12\alpha_2V_m^2}{\alpha_1V_m} = \dfrac{\alpha_2V_m}{2\alpha_1} = \dfrac{V_m}{4V_{ov}}$.

### Step 2 — Closed-loop second-harmonic ratio

In the loop, the amplifier input is $e = x - \beta y$ and $y = \alpha_1e + \alpha_2e^2$. Write $y = b_1x + b_2x^2 + \dots$, so $e = (1 - \beta b_1)x - \beta b_2x^2 + \dots$, and substitute:

$$y = \alpha_1(1 - \beta b_1)x + \left[-\alpha_1\beta b_2 + \alpha_2(1 - \beta b_1)^2\right]x^2 + \dots$$

Matching coefficients:

$$
\begin{aligned}
x:&\quad b_1 = \alpha_1(1 - \beta b_1) \;\Rightarrow\; b_1 = \frac{\alpha_1}{1 + \beta\alpha_1},\quad 1 - \beta b_1 = \frac{1}{1 + \beta\alpha_1},\\
x^2:&\quad b_2(1 + \alpha_1\beta) = \frac{\alpha_2}{(1 + \beta\alpha_1)^2} \;\Rightarrow\; b_2 = \frac{\alpha_2}{(1 + \beta\alpha_1)^3}.
\end{aligned}
$$

For $x = V_m\cos\omega t$ the fundamental is $a = b_1V_m$ and the second harmonic $b = \tfrac12b_2V_m^2$:

$$\frac{b}{a} = \frac{b_2V_m}{2b_1} = \frac{\alpha_2V_m}{2\alpha_1}\cdot\frac{1}{(1 + \beta\alpha_1)^2}.$$

The amplifier is purely quadratic, so the loop generates only a very small third harmonic (about $2\times10^{-6}$ of the fundamental in both designs below, from a direct numerical solution of the loop); THD ≈ $b/a$.

### Step 3 — Design with $W/L = 200/0.5$

$W/L = 400$, so $k = 134\ \mu\mathrm{A/V^2}\times400 = 53.6\ \mathrm{mA/V^2}$.

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{2(1\ \mathrm{mA})}{53.6\ \mathrm{mA/V^2}}} = \sqrt{0.0373}\ \mathrm{V} = 0.193\ \mathrm{V},\\
g_m &= \frac{2I}{V_{ov}} = \frac{2\ \mathrm{mA}}{0.193\ \mathrm{V}} = 10.35\ \mathrm{mS},\\
\alpha_1 &= g_mR_D = (10.35\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 20.7,\\
\alpha_2 &= \tfrac12kR_D = \tfrac12(53.6\ \mathrm{mA/V^2})(2\ \mathrm{k}\Omega) = 53.6\ \mathrm{V^{-1}}.
\end{aligned}
$$

(The drain sits at $3 - 2 = 1$ V, far above $V_{ov}$, so the device is saturated.)

$$
\begin{aligned}
\frac{\alpha_2V_m}{2\alpha_1} &= \frac{(53.6)(0.01)}{2(20.7)} = 0.0129 = 1.29\ \%\quad(\text{open loop}),\\
1 + \beta\alpha_1 &= 1 + 0.2\times20.7 = 5.14, \qquad (1 + \beta\alpha_1)^2 = 26.4,\\
\frac{b}{a} &= \frac{0.0129}{26.4} = 4.9\times10^{-4} = 0.049\ \%.
\end{aligned}
$$

### Step 4 — Design with $W/L = 50/0.5$, for comparison

$W/L = 100$, $k = 13.4\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{2(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.386\ \mathrm{V}, \qquad g_m = \frac{2\ \mathrm{mA}}{0.386\ \mathrm{V}} = 5.18\ \mathrm{mS},\\
\alpha_1 &= 10.35, \qquad \alpha_2 = \tfrac12(13.4\ \mathrm{mA/V^2})(2\ \mathrm{k}\Omega) = 13.4\ \mathrm{V^{-1}},\\
\frac{\alpha_2V_m}{2\alpha_1} &= \frac{0.134}{20.7} = 0.65\ \%, \qquad (1 + 0.2\times10.35)^2 = 3.07^2 = 9.43,\\
\frac{b}{a} &= \frac{0.0065}{9.43} = 6.9\times10^{-4} = 0.069\ \%.
\end{aligned}
$$

### Step 5 — Comparing the two designs

| | $W/L = 50/0.5$ | $W/L = 200/0.5$ | ratio |
|---|---|---|---|
| $V_{ov}$ | 0.386 V | 0.193 V | ÷2 |
| $\alpha_1 = g_mR_D$ | 10.35 | 20.7 | ×2 |
| $\alpha_2 = \tfrac12kR_D$ | 13.4 V⁻¹ | 53.6 V⁻¹ | ×4 |
| open-loop HD2 $= \alpha_2V_m/(2\alpha_1)$ | 0.65 % | 1.29 % | ×2 |
| $(1 + \beta\alpha_1)^2$ | 9.43 | 26.4 | ×2.8 |
| closed-loop THD | 0.069 % | 0.049 % | ÷1.4 |

Quadrupling $W/L$ doubles the open-loop gain, yet the closed-loop distortion improves only by $2.8/2 = 1.4$, not "sharply".

**Why.** The formula suggests a steep drop with $\alpha_1$ *if the other parameters stay constant*. They do not:

- at fixed current, $\alpha_1 = g_mR_D = \sqrt{2\mu_nC_{ox}(W/L)I}\,R_D \propto \sqrt{W/L}$;
- but $\alpha_2 = \tfrac12\mu_nC_{ox}(W/L)R_D \propto W/L$ grows twice as fast (in exponent).

So the open-loop distortion $\alpha_2V_m/(2\alpha_1) = V_m/(4V_{ov}) \propto \sqrt{W/L}$ *doubles*: the wider device runs at half the overdrive, so the same input swing covers a larger fraction of its square-law curve. The extra loop gain then recovers this and a little more: $(1 + \beta\alpha_1)^2$ grows by 2.8, for a net gain of 1.4.

**Large-loop-gain limit.** For $\beta\alpha_1 \gg 1$,

$$\frac{b}{a} \approx \frac{\alpha_2V_m}{2\beta^2\alpha_1^3} \propto \frac{W/L}{(W/L)^{3/2}} = (W/L)^{-1/2},$$

so even with plenty of loop gain the improvement from widening the device is only a square root of the width increase.

### Result

For $W/L = 200/0.5$: $V_{ov} = 0.193$ V, $\alpha_1 = 20.7$, $\alpha_2 = 53.6\ \mathrm{V^{-1}}$, and

$$\mathrm{THD} \approx \frac{\alpha_2V_m}{2\alpha_1}\cdot\frac{1}{(1 + \beta\alpha_1)^2} = \frac{1.29\ \%}{26.4} \approx 0.049\ \%,$$

compared with about 0.069 % for $W/L = 50/0.5$. Quadrupling $W/L$ doubles the open-loop gain but lowers the distortion only about 1.4 times, because $\alpha_2 \propto W/L$ rises faster than $\alpha_1 \propto \sqrt{W/L}$: the open-loop distortion ($V_m/4V_{ov}$) doubles as the overdrive halves, and the 2.8-times larger $(1 + \beta\alpha_1)^2$ only slightly outweighs that.

**Common mistake.** Keeping $\alpha_2 = 13.4\ \mathrm{V^{-1}}$ while doubling $\alpha_1$, which predicts about 0.012 % (a "sharp" drop). In a real transistor $\alpha_1$ and $\alpha_2$ are not independent; at constant current a wider device has a smaller overdrive, and its nonlinearity coefficient $\alpha_2$ grows in proportion to $W/L$.

**Common mistake.** Concluding that the distortion gets worse with the wider device (true open loop: 0.65 % → 1.29 %), or reporting the open-loop value as the THD at the output. With the feedback loop closed, the larger loop gain more than compensates, and the closed-loop THD falls modestly, from 0.069 % to 0.049 %.
