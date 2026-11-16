# Detailed solution - R156

**Approach.** Combine KVL around the input loop, the square law for each $V_{GS}$ and $I_{D1} + I_{D2} = I_{SS}$ into the large-signal characteristic of the pair, which gives $I_{D1} - I_{D2}$; with the sum known, each current follows.

### Step 1 — The three equations of the pair

Both devices are saturated, $\lambda = 0$, and $\beta = \mu_nC_{ox}W/L$:

$$I_{D1} + I_{D2} = I_{SS}, \qquad \Delta V_{in} \equiv V_{in1} - V_{in2} = V_{GS1} - V_{GS2}, \qquad V_{GS} = V_{TH} + \sqrt{\frac{2I_D}{\beta}} .$$

Both sources are at $P$, so the two devices have the same $V_{TH}$, which cancels:

$$\Delta V_{in} = \sqrt{\frac{2I_{D1}}{\beta}} - \sqrt{\frac{2I_{D2}}{\beta}} .$$

### Step 2 — Derive $I_{D1} - I_{D2}$

Square both sides and use $I_{D1} + I_{D2} = I_{SS}$:

$$\Delta V_{in}^2 = \frac{2}{\beta}\left(I_{D1} + I_{D2} - 2\sqrt{I_{D1}I_{D2}}\right) = \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right).$$

Solve for the square-root term and square again:

$$4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V_{in}^2\right)^2 .$$

With $(I_{D1} - I_{D2})^2 = (I_{D1} + I_{D2})^2 - 4I_{D1}I_{D2}$:

$$
\begin{aligned}
(I_{D1} - I_{D2})^2 &= I_{SS}^2 - \left(I_{SS} - \frac{\beta}{2}\Delta V_{in}^2\right)^2\\
&= I_{SS}^2 - I_{SS}^2 + \beta I_{SS}\Delta V_{in}^2 - \frac{\beta^2}{4}\Delta V_{in}^4\\
&= \frac{\beta^2}{4}\Delta V_{in}^2\left(\frac{4I_{SS}}{\beta} - \Delta V_{in}^2\right).
\end{aligned}
$$

Taking the root with the sign of $\Delta V_{in}$ (the side with the higher gate voltage carries more current):

$$I_{D1} - I_{D2} = \frac12\,\beta\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta} - \Delta V_{in}^2}.$$

This holds while both transistors conduct, $|\Delta V_{in}| \le \sqrt{2I_{SS}/\beta}$; beyond that, one device carries all of $I_{SS}$.

### Step 3 — Numerical values

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}.$$

Validity: $\sqrt{2I_{SS}/\beta} = \sqrt{2(1\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.386$ V $\gg$ 50 mV, so both devices conduct. Then

$$
\begin{aligned}
\frac{4I_{SS}}{\beta} &= \frac{4(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.2985\ \mathrm{V^2},\\
\Delta V_{in}^2 &= (0.05\ \mathrm{V})^2 = 0.0025\ \mathrm{V^2},\\
\sqrt{0.2985 - 0.0025}\ \mathrm{V} &= \sqrt{0.2960}\ \mathrm{V} = 0.5441\ \mathrm{V},\\
\frac12\beta\,\Delta V_{in} &= \frac12(13.4\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.335\ \mathrm{mA/V},\\
I_{D1} - I_{D2} &= (0.335\ \mathrm{mA/V})(0.5441\ \mathrm{V}) = 0.1823\ \mathrm{mA}.
\end{aligned}
$$

### Step 4 — The individual currents

With $I_{D1} + I_{D2} = 1$ mA:

$$
\begin{aligned}
I_{D1} &= \frac{I_{SS} + (I_{D1} - I_{D2})}{2} = \frac{1 + 0.1823}{2}\ \mathrm{mA} = 0.591\ \mathrm{mA},\\
I_{D2} &= \frac{I_{SS} - (I_{D1} - I_{D2})}{2} = \frac{1 - 0.1823}{2}\ \mathrm{mA} = 0.409\ \mathrm{mA}.
\end{aligned}
$$

**Check.** The overdrives are

$$
\begin{aligned}
\sqrt{2I_{D1}/\beta} &= \sqrt{2(0.5911)/13.4}\ \mathrm{V} = 0.2970\ \mathrm{V},\\
\sqrt{2I_{D2}/\beta} &= \sqrt{2(0.4089)/13.4}\ \mathrm{V} = 0.2470\ \mathrm{V},
\end{aligned}
$$

and their difference, $V_{GS1} - V_{GS2} = 0.0500$ V, reproduces the 50-mV input.

### Step 5 — Comparison with the small-signal estimate

With $G_m = \sqrt{\beta I_{SS}} = \sqrt{(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 3.66$ mS, the linear estimate is

$$I_{D1} - I_{D2} \approx G_m\Delta V_{in} = (3.66\ \mathrm{mS})(50\ \mathrm{mV}) = 0.183\ \mathrm{mA},$$

only 0.4 % above the exact 0.1823 mA: 50 mV is small compared with the full-steering input of 0.386 V.

### Result

$$I_{D1} \approx 0.591\ \mathrm{mA}, \qquad I_{D2} \approx 0.409\ \mathrm{mA}\qquad (I_{D1} - I_{D2} \approx 0.182\ \mathrm{mA}),$$

from $I_{D1} - I_{D2} = \tfrac12\beta\Delta V_{in}\sqrt{4I_{SS}/\beta - \Delta V_{in}^2}$ with $\beta = 13.4\ \mathrm{mA/V^2}$. The side with the higher gate voltage ($M_1$) carries the larger current.

**Common mistake.** Assuming that 50 mV "switches" the pair and sends the whole 1 mA to $M_1$. Complete steering requires $|\Delta V_{in}| \ge \sqrt{2I_{SS}/\beta} = 0.386$ V; at 50 mV the imbalance is only about 18 % of $I_{SS}$.

**Common mistake.** Using a wrong relation such as $\Delta I = \beta\Delta V_{in}^2$ (which gives 0.034 mA), or forgetting that the two currents must still add up to $I_{SS} = 1$ mA.
