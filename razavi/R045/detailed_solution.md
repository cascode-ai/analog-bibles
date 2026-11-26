# Detailed solution - R045

Approach: Solve the square-law saturation current for $W/L$ at fixed $I_D$. The result is an inverse-square law; describe the curve (asymptotes, slope, scaling) and tabulate it for a typical set of numbers.

![R045 constant-$I_D$ $W/L$ curve](/q/R045/solution-wl.svg)

### Step 1 — Solve for $W/L$ at constant $I_D$

With $V_{ov} = V_{GS} - V_{TH}$ and channel-length modulation neglected, $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, so

$$\frac{W}{L} = \frac{2I_D}{\mu_nC_{ox}\,(V_{GS} - V_{TH})^2} \propto \frac{1}{(V_{GS} - V_{TH})^2},$$

since $2I_D/(\mu_nC_{ox})$ is a constant (unit V²). Because the current depends on the *square* of the overdrive, halving the overdrive cuts the current per unit width by four, so the width must grow by four.

### Step 2 — Shape of the curve

With $W/L$ on the vertical axis and $V_{ov}$ on the horizontal axis:

- Small overdrive. As $V_{ov} \to 0$, $W/L \to \infty$: the vertical axis is an asymptote.
- Large overdrive. As $V_{ov} \to \infty$, $W/L \to 0$: the horizontal axis is an asymptote.
- Monotonic and convex. The curve always falls, steeply at first and then more and more slowly. Its slope is
$$\frac{d(W/L)}{dV_{ov}} = -\frac{4I_D}{\mu_nC_{ox}V_{ov}^3} = -2\,\frac{W/L}{V_{ov}},$$
so $\Delta(W/L)/(W/L) = -2\,\Delta V_{ov}/V_{ov}$: a 1 % increase in overdrive reduces $W/L$ by 2 %.
- Scaling rule. Halving $V_{ov}$ multiplies $W/L$ by 4; doubling it divides $W/L$ by 4.
- Log–log plot. $\log(W/L) = \log[2I_D/(\mu_nC_{ox})] - 2\log V_{ov}$: a straight line of slope $-2$.

The curve has the same form for every $I_D$; a larger current scales it up in proportion to $I_D$.

### Step 3 — Numerical example

Take, for illustration, $I_D = 0.5$ mA and $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$:

$$\frac{2I_D}{\mu_nC_{ox}} = \frac{2\times0.5\times10^{-3}\ \mathrm{A}}{134\times10^{-6}\ \mathrm{A/V^2}} = 7.46\ \mathrm{V^2}, \qquad \frac{W}{L} = \frac{7.46\ \mathrm{V^2}}{V_{ov}^2} .$$

For example, at $V_{ov} = 0.2$ V:

$$\frac{W}{L} = \frac{7.46\ \mathrm{V^2}}{(0.2\ \mathrm{V})^2} = \frac{7.46}{0.04} = 186.6 .$$

Repeating for other overdrives:

| $V_{GS} - V_{TH}$ (V) | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.8 | 1.0 |
|---|---|---|---|---|---|---|---|---|
| $W/L$ | 746 | 186.6 | 82.9 | 46.6 | 29.9 | 20.7 | 11.7 | 7.5 |

From 0.2 V to 0.4 V, $W/L$ drops from 186.6 to 46.6, a factor of 4.

### Step 4 — Practical limits of the curve

The square law is only valid over a middle range of overdrives:

- Below roughly 50–100 mV the device enters weak inversion, where the current is exponential in $V_{GS}$. The real $W/L$ then grows more slowly than $1/V_{ov}^2$ and stays finite, so the vertical asymptote is a feature of the model only.
- At large $V_{ov}$, velocity saturation and mobility degradation reduce the current below the square-law value, so a somewhat larger $W/L$ is needed than the curve predicts.

Design meaning. A small overdrive gives a small $V_{DS,min} = V_{ov}$ (good for headroom) and a large $g_m/I_D = 2/V_{ov}$, but costs area and capacitance, since $W$ grows as $1/V_{ov}^2$.

### Result

$$\frac{W}{L} = \frac{2I_D}{\mu_nC_{ox}\,(V_{GS} - V_{TH})^2} \propto \frac{1}{(V_{GS} - V_{TH})^2}$$

The plot is a decreasing, convex, hyperbola-like curve. It rises without bound as $V_{GS} - V_{TH} \to 0$, approaches zero for large overdrive, and is a straight line of slope $-2$ on log–log axes. Halving the overdrive quadruples $W/L$. Example ($I_D = 0.5$ mA, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$): $W/L \approx 186$, 46.6 and 7.5 at $V_{GS} - V_{TH} = 0.2$, 0.4 and 1 V.

**Common mistake:** Drawing $W/L \propto 1/(V_{GS} - V_{TH})$, which is the constant-$g_m$ curve. With $I_D$ fixed the current depends on the square of the overdrive, so the exponent is $-2$.

**Common mistake:** Drawing $W/L$ increasing with overdrive, or as a straight line. A larger overdrive makes each micrometre of width carry more current, so *less* width is needed, and the dependence is strongly nonlinear.
