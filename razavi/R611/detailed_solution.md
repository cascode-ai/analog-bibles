# Detailed solution - R611

**Approach.** Model the CS stage as $y = \alpha_1x + \alpha_2x^2$ with coefficients from the square law, and evaluate the given closed-loop second-harmonic ratio for $\beta = 0.4$ and $\beta = 0.2$. Then compare the ratio of the two results with the $\beta^{-2}$ prediction, valid only when the loop gain $\beta\alpha_1$ is much larger than one.

### Step 1 — Bias and polynomial coefficients of the CS stage

With $W/L = 50/0.5 = 100$, $k = \mu_nC_{ox}(W/L) = 13.4\ \mathrm{mA/V^2}$, and from $I = \tfrac12kV_{ov}^2$:

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{2I}{k}} = \sqrt{\frac{2(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.386\ \mathrm{V},\\
g_m &= \frac{2I}{V_{ov}} = \frac{2\ \mathrm{mA}}{0.386\ \mathrm{V}} = 5.18\ \mathrm{mS}.
\end{aligned}
$$

For a small gate signal $x$, $I_D = \tfrac12k(V_{ov} + x)^2 = I + kV_{ov}x + \tfrac12kx^2$, so the output change (inversion absorbed in the negative-feedback loop) is $y = \alpha_1x + \alpha_2x^2$ with

$$
\begin{aligned}
\alpha_1 &= g_mR_D = (5.18\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 10.35,\\
\alpha_2 &= \tfrac12kR_D = \tfrac12(13.4\ \mathrm{mA/V^2})(2\ \mathrm{k}\Omega) = 13.4\ \mathrm{V^{-1}}.
\end{aligned}
$$

Open-loop second-harmonic ratio for a 10-mV input:

$$\frac{\alpha_2V_m}{2\alpha_1} = \frac{(13.4)(0.01)}{2(10.35)} = 6.47\times10^{-3} = 0.647\ \%\quad\left(= \frac{V_m}{4V_{ov}}\right).$$

The drain sits at $3 - (1\ \mathrm{mA})(2\ \mathrm{k}\Omega) = 1$ V, well above $V_{ov}$, so the device is saturated.

### Step 2 — Closed-loop second-harmonic ratio

With $e = x - \beta y$ and $y = b_1x + b_2x^2 + \dots$, matching coefficients gives $b_1 = \alpha_1/(1 + \beta\alpha_1)$ and $b_2 = \alpha_2/(1 + \beta\alpha_1)^3$, so the fundamental $a = b_1V_m$ and second harmonic $b = \tfrac12b_2V_m^2$ give the stated ratio

$$\frac{b}{a} = \frac{b_2V_m}{2b_1} = \frac{\alpha_2V_m}{2\alpha_1}\cdot\frac{1}{(1 + \beta\alpha_1)^2}.$$

The loop's third harmonic is below $2\times10^{-6}$ of the fundamental here (checked by solving the loop equation numerically), so THD ≈ $b/a$.

### Step 3 — THD with $\beta = 0.4$

$$
\begin{aligned}
\beta\alpha_1 &= 0.4\times10.35 = 4.14,\\
1 + \beta\alpha_1 &= 5.14, \qquad (1 + \beta\alpha_1)^2 = 26.4,\\
\frac{b}{a} &= \frac{6.47\times10^{-3}}{26.4} = 2.45\times10^{-4} = 0.0245\ \%\quad(-72\ \mathrm{dB}).
\end{aligned}
$$

The closed-loop gain is $b_1 = 10.35/5.14 = 2.01$, so the output fundamental is $2.01\times10\ \mathrm{mV} = 20.1$ mV.

### Step 4 — THD with $\beta = 0.2$

$$
\begin{aligned}
\beta\alpha_1 &= 0.2\times10.35 = 2.07,\\
1 + \beta\alpha_1 &= 3.07, \qquad (1 + \beta\alpha_1)^2 = 9.43,\\
\frac{b}{a} &= \frac{6.47\times10^{-3}}{9.43} = 6.9\times10^{-4} = 0.069\ \%\quad(-63\ \mathrm{dB}).
\end{aligned}
$$

The closed-loop gain is $10.35/3.07 = 3.37$, output fundamental 33.7 mV.

### Step 5 — Does the result follow $b/a \propto \beta^{-2}$?

$$\frac{(b/a)_{\beta = 0.2}}{(b/a)_{\beta = 0.4}} = \left(\frac{1 + 0.4\alpha_1}{1 + 0.2\alpha_1}\right)^2 = \left(\frac{5.14}{3.07}\right)^2 = 2.80,$$

not the factor $(0.4/0.2)^2 = 4$ predicted by $b/a \propto \beta^{-2}$ (which would give $0.069\ \%/4 = 0.017\ \%$).

The $\beta^{-2}$ law assumes $1 + \beta\alpha_1 \approx \beta\alpha_1$, i.e. $\beta\alpha_1 \gg 1$. With loop gains of only 2.07 and 4.14, the "1" matters: doubling $\beta$ raises $1 + \beta\alpha_1$ only from 3.07 to 5.14 (a factor of 1.67, not 2), and its square by 2.8. The approximate formula $\alpha_2V_m/(2\beta^2\alpha_1^3)$ would give 0.038 % and 0.15 %, both well off; the law becomes accurate only for loop gains of 10 or more.

The stronger feedback also reduces the closed-loop gain from 3.37 to 2.01, so the output fundamental drops from 33.7 mV to 20.1 mV: distortion is traded for gain.

### Result

With $\alpha_1 = 10.35$ and $\alpha_2 = 13.4\ \mathrm{V^{-1}}$ (open-loop HD2 0.647 % at 10 mV):

- $\beta = 0.4$: $\mathrm{THD} \approx 0.647\ \%/5.14^2 \approx 0.0245\ \%$;
- $\beta = 0.2$: $\mathrm{THD} \approx 0.647\ \%/3.07^2 \approx 0.069\ \%$.

Doubling $\beta$ lowers the distortion by about 2.8 times, not the 4 times that $b/a \propto \beta^{-2}$ predicts, because the loop gain $\beta\alpha_1$ (2.07 → 4.14) is not much larger than one; the $\beta^{-2}$ law holds only in the limit $\beta\alpha_1 \gg 1$. The cost is a lower closed-loop gain (output fundamental 20.1 mV instead of 33.7 mV).

**Common mistake.** Applying the $\beta^{-2}$ law blindly and claiming a 4× reduction (0.017 %). It drops the 1 in $1 + \beta\alpha_1$, valid only for a large loop gain, and overstates the benefit here.

**Common mistake.** Dividing the open-loop distortion by $1 + \beta\alpha_1$ instead of its square (giving 0.13 % and 0.21 %). The amplifier's own input swing shrinks by $1 + \beta\alpha_1$ and the loop suppresses the generated harmonic by another $1 + \beta\alpha_1$.
