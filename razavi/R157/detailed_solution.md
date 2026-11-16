# Detailed solution - R157

**Approach.** Differentiate the large-signal characteristic $I_{D1} - I_{D2} = f(V_{in1} - V_{in2})$ of the square-law pair to get $G_m$, and evaluate it at 50 mV. The two devices' transconductances in series confirm the number.

### Step 1 — Large-signal characteristic of the pair

Both devices are saturated, with $\lambda = 0$. Let $\beta = \mu_nC_{ox}W/L$ and $\Delta V \equiv V_{in1} - V_{in2}$. With $I_{D1} + I_{D2} = I_{SS}$, $\Delta V = V_{GS1} - V_{GS2}$ and $V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$ (same $V_{TH}$ for both devices), $\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$. Square, use the sum, isolate the cross term and square again:

$$
\begin{aligned}
\Delta V^2 &= \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right)\\
4I_{D1}I_{D2} &= \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2\\
(I_{D1} - I_{D2})^2 &= (I_{D1} + I_{D2})^2 - 4I_{D1}I_{D2} = I_{SS}^2 - \left(I_{SS} - \frac{\beta}{2}\Delta V^2\right)^2\\
&= \beta I_{SS}\Delta V^2 - \frac{\beta^2}{4}\Delta V^4 .
\end{aligned}
$$

Taking the root with the sign of $\Delta V$:

$$\Delta I \equiv I_{D1} - I_{D2} = \frac{\beta}{2}\,\Delta V\sqrt{K - \Delta V^2}, \qquad K \equiv \frac{4I_{SS}}{\beta},$$

valid while both devices conduct, $|\Delta V| \le \sqrt{2I_{SS}/\beta}$.

### Step 2 — Differentiate to obtain $G_m$

With the product rule and $\dfrac{d}{d\Delta V}\sqrt{K - \Delta V^2} = \dfrac{-\Delta V}{\sqrt{K - \Delta V^2}}$:

$$
\begin{aligned}
G_m &= \frac{\beta}{2}\left[\sqrt{K - \Delta V^2} + \Delta V\cdot\frac{-\Delta V}{\sqrt{K - \Delta V^2}}\right]\\
&= \frac{\beta}{2}\cdot\frac{(K - \Delta V^2) - \Delta V^2}{\sqrt{K - \Delta V^2}}\\
&= \frac{\beta}{2}\cdot\frac{K - 2\Delta V^2}{\sqrt{K - \Delta V^2}} .
\end{aligned}
$$

At equilibrium ($\Delta V = 0$), $G_{m0} = \dfrac{\beta}{2}\sqrt{K} = \dfrac{\beta}{2}\cdot 2\sqrt{\dfrac{I_{SS}}{\beta}} = \sqrt{\beta I_{SS}}$, the $g_m$ of either device at $I_{SS}/2$, since $g_m = \sqrt{2\beta(I_{SS}/2)} = \sqrt{\beta I_{SS}}$.

### Step 3 — Numerical evaluation at $\Delta V = 50$ mV

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})\left(\frac{50}{0.5}\right) = 13.4\ \mathrm{mA/V^2}, \qquad \frac{\beta}{2} = 6.7\ \mathrm{mA/V^2},\\
K &= \frac{4I_{SS}}{\beta} = \frac{4(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.2985\ \mathrm{V^2},\\
K - 2\Delta V^2 &= 0.2985 - 2(0.0025) = 0.2935\ \mathrm{V^2},\\
\sqrt{K - \Delta V^2} &= \sqrt{0.2985 - 0.0025}\ \mathrm{V} = \sqrt{0.2960}\ \mathrm{V} = 0.5441\ \mathrm{V},\\
G_m &= (6.7\ \mathrm{mA/V^2})\,\frac{0.2935\ \mathrm{V^2}}{0.5441\ \mathrm{V}} = (6.7\ \mathrm{mA/V^2})(0.5395\ \mathrm{V}) = 3.61\ \mathrm{mS}.
\end{aligned}
$$

For comparison,

$$G_{m0} = \sqrt{\beta I_{SS}} = \sqrt{(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 3.66\ \mathrm{mS},$$

so $G_m/G_{m0} = 3.614/3.661 = 0.987$: a drop of about 1.3 %.

### Step 4 — Normalized form

With the equilibrium overdrive $V_{ov} = \sqrt{I_{SS}/\beta}$ (so $K = 4V_{ov}^2$ and $G_{m0} = \beta V_{ov}$) and $x = \Delta V/V_{ov}$:

$$\frac{G_m}{G_{m0}} = \frac{(\beta/2)V_{ov}(4 - 2x^2)/\sqrt{4 - x^2}}{\beta V_{ov}} = \frac{2 - x^2}{\sqrt{4 - x^2}} .$$

Here $V_{ov} = \sqrt{1\ \mathrm{mA}/13.4\ \mathrm{mA/V^2}} = 0.273$ V and $x = 0.05/0.273 = 0.183$:

$$\frac{G_m}{G_{m0}} = \frac{2 - 0.0335}{\sqrt{4 - 0.0335}} = \frac{1.9665}{1.9916} = 0.987 ,$$

in agreement with Step 3.

### Step 5 — Cross-check: the two transconductances in series

At 50 mV the currents are $I_{D1} = 0.591$ mA and $I_{D2} = 0.409$ mA (from $\Delta I = 0.182$ mA and $I_{D1} + I_{D2} = 1$ mA), so

$$g_{m1} = \sqrt{2\beta I_{D1}} = \sqrt{2(13.4)(0.591)}\ \mathrm{mS} = 3.98\ \mathrm{mS}, \qquad g_{m2} = \sqrt{2\beta I_{D2}} = 3.31\ \mathrm{mS}.$$

The tail current is constant, so $\delta I_{D1} = -\delta I_{D2} = i$, and the input divides across the two gate–source voltages, $\delta V_{in1} - \delta V_{in2} = i/g_{m1} + i/g_{m2}$:

$$
\begin{aligned}
\delta(I_{D1} - I_{D2}) &= 2i = \frac{2}{1/g_{m1} + 1/g_{m2}}\,\delta\Delta V,\\
G_m &= \frac{2g_{m1}g_{m2}}{g_{m1} + g_{m2}} = \frac{2(3.98)(3.31)}{3.98 + 3.31}\ \mathrm{mS} = 3.61\ \mathrm{mS}.
\end{aligned}
$$

This also shows *why* $G_m$ drops: the harmonic mean of $g_{m1}$ and $g_{m2}$ is pulled down by the device losing current more than it is raised by the one gaining current.

### Result

$$G_m = \frac{\beta}{2}\,\frac{4I_{SS}/\beta - 2\Delta V^2}{\sqrt{4I_{SS}/\beta - \Delta V^2}} \approx 3.61\ \mathrm{mS}\quad\text{at } \Delta V = 50\ \mathrm{mV},$$

about 1.3 % below the equilibrium value $\sqrt{\mu_nC_{ox}(W/L)I_{SS}} = 3.66$ mS.

**Common mistake.** Using the $g_m$ of a single device carrying the full tail current, $\sqrt{2\beta I_{SS}} = 5.18$ mS. Near equilibrium each device carries about $I_{SS}/2$, and the pair's $G_m$ is $\sqrt{\beta I_{SS}}$.

**Common mistake.** Claiming that $G_m$ *increases* with the imbalance because $M_1$ now carries more current, or predicting a large drop. As a harmonic mean, $G_m$ decreases, and only slightly (1.3 %) for an input small compared with the 0.386-V full-steering voltage.
