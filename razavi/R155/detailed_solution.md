# Detailed solution - R155

**Approach.** At equilibrium each of the two identical devices carries half of the tail current; setting the square-law current equal to $I_{SS}/2$ gives the overdrive.

### Step 1 — Current in each device

At equilibrium ($V_{in1} = V_{in2}$) both devices have the same $V_{GS}$ and, with both sources at $P$, the same $V_{TH}$; with $\lambda = 0$ their drain voltages do not matter. So, with $I_{D1} + I_{D2} = I_{SS}$,

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}.$$

### Step 2 — Solve for the overdrive

With

$$\beta = \mu_nC_{ox}\frac{W}{L} = \left(134\ \mu\mathrm{A/V^2}\right)\left(\frac{50}{0.5}\right) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},$$

setting the saturation current equal to $I_{SS}/2$ gives

$$
\begin{aligned}
\frac{I_{SS}}{2} &= \frac12\,\beta\,V_{ov}^2\\
V_{ov} &= \sqrt{\frac{I_{SS}}{\beta}} .
\end{aligned}
$$

The two factors of $\tfrac12$ cancel. Numerically:

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{1\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}}\\
&= \sqrt{0.07463\ \mathrm{V^2}}\\
&= 0.273\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — What the overdrive sets

- Each device's transconductance at equilibrium is $g_m = 2I_D/V_{ov} = 2(0.5\ \mathrm{mA})/(0.273\ \mathrm{V}) = 3.66$ mS.
- The pair steers *all* of the tail current to one side when $|V_{in1} - V_{in2}| = \sqrt{2}\,V_{ov} = 0.386$ V.

A larger overdrive means a wider linear input range but a lower $g_m$ for the same current.

### Result

$$V_{GS} - V_{TH} = \sqrt{\frac{I_{SS}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(100)}} \approx 0.273\ \mathrm{V},$$

with each transistor carrying $I_{SS}/2 = 0.5$ mA.

**Common mistake.** Putting the full tail current in each device: $\sqrt{2(1\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.386$ V. That is the overdrive of a single device carrying all of $I_{SS}$, which happens only when the pair is completely steered.

**Common mistake.** Dropping the factor $\tfrac12$ of the square law, i.e. writing $I_D = \beta V_{ov}^2$. With $I_D = 0.5$ mA this gives $\sqrt{0.5\ \mathrm{mA}/13.4\ \mathrm{mA/V^2}} = 0.193$ V, too small by a factor of $\sqrt{2}$.
