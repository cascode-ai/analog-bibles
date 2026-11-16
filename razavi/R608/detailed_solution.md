# Detailed solution - R608

**Approach.** First describe the CS stage by a polynomial $y = \alpha_1x + \alpha_2x^2$ derived from the square law, and compute $\alpha_1$ and $\alpha_2$ from the bias. Then close the loop of [Fig. 2]: expand the closed-loop output as a power series in the input, find how feedback scales the linear and quadratic coefficients, and evaluate the second-harmonic distortion for a 10-mV input.

### Step 1 — Bias point of the CS stage

With $W/L = 50/0.5 = 100$, let $k = \mu_nC_{ox}(W/L) = 134\ \mu\mathrm{A/V^2}\times100 = 13.4\ \mathrm{mA/V^2}$. From the square law $I = \tfrac12kV_{ov}^2$, the overdrive $V_{ov} = V_{GS} - V_{TH}$ is

$$V_{ov} = \sqrt{\frac{2I}{k}} = \sqrt{\frac{2(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.1493}\ \mathrm{V} = 0.386\ \mathrm{V},$$

and the transconductance is

$$g_m = kV_{ov} = \frac{2I}{V_{ov}} = \frac{2(1\ \mathrm{mA})}{0.386\ \mathrm{V}} = 5.18\ \mathrm{mS}.$$

**Saturation check.** The drain sits at $V_{DD} - IR_D = 3 - (1\ \mathrm{mA})(2\ \mathrm{k}\Omega) = 1$ V, well above $V_{GS} - V_{TH} = 0.386$ V (plus the small signal swings), so the device stays saturated.

### Step 2 — Polynomial model of the forward amplifier

Let $x$ be the small gate voltage around the bias. The drain current is

$$I_D = \tfrac12k(V_{ov} + x)^2 = I + kV_{ov}x + \tfrac12kx^2 .$$

The output change is $-R_D$ times the current change. The signal inversion is absorbed in the loop (the polarity is arranged for negative feedback), so the magnitude of the output change is

$$y = g_mR_D\,x + \tfrac12kR_D\,x^2 = \alpha_1x + \alpha_2x^2,$$

with

$$
\begin{aligned}
\alpha_1 &= g_mR_D = (5.18\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 10.35,\\
\alpha_2 &= \tfrac12kR_D = \tfrac12(13.4\ \mathrm{mA/V^2})(2\ \mathrm{k}\Omega) = 13.4\ \mathrm{V^{-1}}.
\end{aligned}
$$

The square law is an exact quadratic, so there is no $x^3$ term in the amplifier itself.

**Open-loop distortion, for reference.** For $x = V_m\cos\omega t$, $\alpha_2x^2 = \tfrac12\alpha_2V_m^2(1 + \cos2\omega t)$, so

$$\mathrm{HD2}_{open} = \frac{\tfrac12\alpha_2V_m^2}{\alpha_1V_m} = \frac{\alpha_2V_m}{2\alpha_1} = \frac{(13.4)(0.01)}{2(10.35)} = 6.47\times10^{-3} = 0.65\ \%,$$

which equals $V_m/(4V_{ov}) = 0.01/(4\times0.386)$, as it should.

### Step 3 — Closing the loop

In [Fig. 2] the amplifier input is the error $e = x - \beta y$ and the output is $y = \alpha_1e + \alpha_2e^2$. Look for the closed-loop characteristic as a power series in the system input $x$:

$$y = b_1x + b_2x^2 + \dots$$

Then

$$e = x - \beta y = (1 - \beta b_1)\,x - \beta b_2\,x^2 + \dots$$

Substitute into $y = \alpha_1e + \alpha_2e^2$ and keep terms up to $x^2$:

$$y = \alpha_1(1 - \beta b_1)\,x - \alpha_1\beta b_2\,x^2 + \alpha_2(1 - \beta b_1)^2x^2 + \dots$$

**Match the $x$ terms:**

$$
\begin{aligned}
b_1 &= \alpha_1(1 - \beta b_1)\\
b_1(1 + \alpha_1\beta) &= \alpha_1\\
b_1 &= \frac{\alpha_1}{1 + \alpha_1\beta}, \qquad 1 - \beta b_1 = \frac{1}{1 + \alpha_1\beta}.
\end{aligned}
$$

**Match the $x^2$ terms:**

$$
\begin{aligned}
b_2 &= -\alpha_1\beta b_2 + \frac{\alpha_2}{(1 + \alpha_1\beta)^2}\\
b_2(1 + \alpha_1\beta) &= \frac{\alpha_2}{(1 + \alpha_1\beta)^2}\\
b_2 &= \frac{\alpha_2}{(1 + \alpha_1\beta)^3}.
\end{aligned}
$$

### Step 4 — Closed-loop second-harmonic distortion

For $x = V_m\cos\omega t$:

$$y = b_1V_m\cos\omega t + \tfrac12b_2V_m^2 + \tfrac12b_2V_m^2\cos2\omega t + \dots$$

$$\mathrm{HD2}_{closed} = \frac{\tfrac12b_2V_m^2}{b_1V_m} = \frac{b_2V_m}{2b_1} = \frac{\alpha_2V_m}{2\alpha_1}\cdot\frac{1}{(1 + \alpha_1\beta)^2}.$$

**Numbers.**

$$
\begin{aligned}
\alpha_1\beta &= 10.35\times0.2 = 2.07\quad\text{(loop gain)},\\
(1 + \alpha_1\beta)^2 &= (3.07)^2 = 9.43,\\
\mathrm{HD2}_{closed} &= \frac{6.47\times10^{-3}}{9.43} = 6.9\times10^{-4} = 0.069\ \%\quad(\approx -63\ \mathrm{dB}).
\end{aligned}
$$

The output fundamental is $b_1V_m = (10.35/3.07)(10\ \mathrm{mV}) = 33.7$ mV.

**Higher harmonics.** Feedback around a quadratic creates a small $x^3$ term in the closed-loop characteristic, but it is of order $\alpha_2^2\beta$ and gives a third harmonic of only about $2\times10^{-6}$ of the fundamental here (a direct numerical solution of the loop equation confirms HD2 = 0.0686 % and HD3 ≈ 0.0002 %). Hence THD ≈ HD2.

### Step 5 — Why the suppression is $(1 + \alpha_1\beta)^2$

Compare with the open-loop stage driven by the same 10-mV input. Two factors of $1 + \alpha_1\beta = 3.07$ appear:

1. **Smaller swing at the amplifier input.** The error signal is only $V_m/(1 + \alpha_1\beta) = 10/3.07 = 3.26$ mV, and the amplifier's own HD2 is proportional to its input amplitude, so it drops by $1 + \alpha_1\beta$.
2. **Loop suppression of the generated harmonic.** The second harmonic created inside the amplifier is fed back and cancelled like any disturbance at the output, by a further factor $1 + \alpha_1\beta$, while the fundamental at the output is the amplifier's normal response to its (already reduced) input.

Together: $0.65\ \% / 9.43 = 0.069\ \%$. The price is the gain, reduced from 10.35 to 3.37 (by the same factor 3.07).

(If channel-length modulation were included with $\lambda = 0.1\ \mathrm{V^{-1}}$, $r_O = 10\ \mathrm{k}\Omega$ would lower $\alpha_1$ to 8.6 and $\alpha_2$ to 11.2 V⁻¹, giving about 0.087 %; the problem neglects it.)

### Result

With $V_{ov} = 0.386$ V and $g_m = 5.18$ mS, the stage is $y = \alpha_1x + \alpha_2x^2$ with $\alpha_1 = g_mR_D = 10.35$ and $\alpha_2 = \tfrac12\mu_nC_{ox}(W/L)R_D = 13.4\ \mathrm{V^{-1}}$. With feedback,

$$\mathrm{THD} \approx \mathrm{HD2} = \frac{\alpha_2V_m}{2\alpha_1}\cdot\frac{1}{(1 + \beta\alpha_1)^2} = \frac{6.47\times10^{-3}}{9.43} \approx 0.069\ \%\ (\approx -63\ \mathrm{dB}),$$

compared with about 0.65 % for the open-loop stage driven by the same 10-mV input. The output fundamental is about 33.7 mV.

**Common mistake.** Dividing the open-loop distortion by $1 + \beta\alpha_1$ only (giving 0.21 %) or by $(1 + \beta\alpha_1)^3$ (giving 0.022 %). The second-harmonic *coefficient* is divided by $(1 + \beta\alpha_1)^3$, but the fundamental is also divided by $1 + \beta\alpha_1$, so the *ratio* HD2 falls by $(1 + \beta\alpha_1)^2$ for the same system input.

**Common mistake.** Taking $\alpha_2 = \mu_nC_{ox}(W/L)R_D$ (missing the $\tfrac12$ of the square law), which doubles the result, or quoting the open-loop 0.65 % as the closed-loop THD. Expect only a tiny third harmonic: the amplifier is purely quadratic, and the cubic term created by the loop is negligible here.
