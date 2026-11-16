# Detailed solution - R156

**Approach.** Use the large-signal characteristic of the square-law differential pair. KVL around the input loop gives $V_{in1} - V_{in2} = V_{GS1} - V_{GS2}$; the square law expresses each $V_{GS}$ through its current; and KCL at the tail node fixes $I_{D1} + I_{D2} = I_{SS}$. Solving these gives $I_{D1} - I_{D2}$, and with the sum known, each current.

### Step 1 — The three equations of the pair

$M_1$ and $M_2$ are identical NMOS transistors whose sources meet at node $P$; an ideal current source $I_{SS} = 1$ mA pulls the tail current out of $P$. Both devices are saturated, and $\lambda = 0$.

**KCL at node $P$:**
$$I_{D1} + I_{D2} = I_{SS}.$$

**KVL from gate 1 to gate 2 through node $P$:** $V_P = V_{in1} - V_{GS1} = V_{in2} - V_{GS2}$, so
$$\Delta V_{in} \equiv V_{in1} - V_{in2} = V_{GS1} - V_{GS2}.$$

**Square law**, solved for $V_{GS}$, with $\beta = \mu_nC_{ox}W/L$:
$$I_D = \tfrac12\beta(V_{GS} - V_{TH})^2 \quad\Longrightarrow\quad V_{GS} = V_{TH} + \sqrt{\frac{2I_D}{\beta}} .$$

Both sources are at $P$, so both devices have the same source–bulk voltage and the same $V_{TH}$, which cancels:

$$\Delta V_{in} = \sqrt{\frac{2I_{D1}}{\beta}} - \sqrt{\frac{2I_{D2}}{\beta}} .$$

### Step 2 — Derive $I_{D1} - I_{D2}$

Square both sides:

$$\Delta V_{in}^2 = \frac{2}{\beta}\left(I_{D1} + I_{D2} - 2\sqrt{I_{D1}I_{D2}}\right) = \frac{2}{\beta}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right).$$

Solve for the square-root term:

$$2\sqrt{I_{D1}I_{D2}} = I_{SS} - \frac{\beta}{2}\Delta V_{in}^2 .$$

Square again:

$$4I_{D1}I_{D2} = \left(I_{SS} - \frac{\beta}{2}\Delta V_{in}^2\right)^2 .$$

Now use the identity $(I_{D1} - I_{D2})^2 = (I_{D1} + I_{D2})^2 - 4I_{D1}I_{D2}$:

$$
\begin{aligned}
(I_{D1} - I_{D2})^2 &= I_{SS}^2 - \left(I_{SS} - \frac{\beta}{2}\Delta V_{in}^2\right)^2\\
&= I_{SS}^2 - I_{SS}^2 + \beta I_{SS}\Delta V_{in}^2 - \frac{\beta^2}{4}\Delta V_{in}^4\\
&= \frac{\beta^2}{4}\Delta V_{in}^2\left(\frac{4I_{SS}}{\beta} - \Delta V_{in}^2\right).
\end{aligned}
$$

Take the square root, keeping the sign of $\Delta V_{in}$ (the side with the higher gate voltage carries more current):

$$I_{D1} - I_{D2} = \frac12\,\beta\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta} - \Delta V_{in}^2}.$$

This holds while both transistors conduct, i.e. for $|\Delta V_{in}| \le \sqrt{2I_{SS}/\beta}$. Beyond that, one device is off and the other carries all of $I_{SS}$.

### Step 3 — Numerical values

Device constant:

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}.$$

Validity check: $\sqrt{2I_{SS}/\beta} = \sqrt{2(1\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.386$ V, much larger than 50 mV, so both devices conduct.

Quantities under the square root:

$$
\begin{aligned}
\frac{4I_{SS}}{\beta} &= \frac{4(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}} = 0.2985\ \mathrm{V^2},\\
\Delta V_{in}^2 &= (0.05\ \mathrm{V})^2 = 0.0025\ \mathrm{V^2},\\
\sqrt{0.2985 - 0.0025}\ \mathrm{V} &= \sqrt{0.2960}\ \mathrm{V} = 0.5441\ \mathrm{V}.
\end{aligned}
$$

Prefactor:

$$\frac12\beta\,\Delta V_{in} = \frac12(13.4\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.335\ \mathrm{mA/V}.$$

Current difference:

$$I_{D1} - I_{D2} = (0.335\ \mathrm{mA/V})(0.5441\ \mathrm{V}) = 0.1823\ \mathrm{mA}.$$

### Step 4 — The individual currents

Combine the difference with the sum $I_{D1} + I_{D2} = 1$ mA:

$$
\begin{aligned}
I_{D1} &= \frac{I_{SS} + (I_{D1} - I_{D2})}{2} = \frac{1 + 0.1823}{2}\ \mathrm{mA} = 0.591\ \mathrm{mA},\\
I_{D2} &= \frac{I_{SS} - (I_{D1} - I_{D2})}{2} = \frac{1 - 0.1823}{2}\ \mathrm{mA} = 0.409\ \mathrm{mA}.
\end{aligned}
$$

**Check with the square law directly.** The overdrives are

$$
\begin{aligned}
\sqrt{2I_{D1}/\beta} &= \sqrt{2(0.5911)/13.4}\ \mathrm{V} = 0.2970\ \mathrm{V},\\
\sqrt{2I_{D2}/\beta} &= \sqrt{2(0.4089)/13.4}\ \mathrm{V} = 0.2470\ \mathrm{V},
\end{aligned}
$$

and their difference, $V_{GS1} - V_{GS2} = 0.0500$ V, reproduces the 50-mV input.

### Step 5 — Comparison with the small-signal estimate

For small inputs the pair behaves linearly, with transconductance $G_m = \sqrt{\beta I_{SS}} = \sqrt{(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 3.66$ mS. The linear estimate is

$$I_{D1} - I_{D2} \approx G_m\Delta V_{in} = (3.66\ \mathrm{mS})(50\ \mathrm{mV}) = 0.183\ \mathrm{mA},$$

only 0.4 % above the exact 0.1823 mA. 50 mV is small compared with the full-steering input of 0.386 V, so the pair is still nearly linear.

### Result

$$I_{D1} \approx 0.591\ \mathrm{mA}, \qquad I_{D2} \approx 0.409\ \mathrm{mA}\qquad (I_{D1} - I_{D2} \approx 0.182\ \mathrm{mA}),$$

from $I_{D1} - I_{D2} = \tfrac12\beta\Delta V_{in}\sqrt{4I_{SS}/\beta - \Delta V_{in}^2}$ with $\beta = 13.4\ \mathrm{mA/V^2}$. The side with the higher gate voltage ($M_1$) carries the larger current.

**Common mistake.** Assuming that 50 mV "switches" the pair and sends the whole 1 mA to $M_1$. Complete steering requires $|\Delta V_{in}| \ge \sqrt{2I_{SS}/\beta} = 0.386$ V. At 50 mV the imbalance is only about 18 % of $I_{SS}$.

**Common mistake.** Using a wrong relation such as $\Delta I = \beta\Delta V_{in}^2$ (which gives 0.034 mA), or forgetting that the two currents must still add up to $I_{SS} = 1$ mA. The tail source fixes the sum; the input only redistributes it.
