# Detailed solution - R159

**Approach.** At equilibrium each device carries $I_{SS}/2$, so the square law gives $V_{ov} = \sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$; evaluating it for both aspect ratios shows how the overdrive scales with $W/L$.

### Step 1 — Overdrive at equilibrium

At equilibrium ($V_{in1} = V_{in2}$) the identical devices have equal $V_{GS}$ and $V_{TH}$, and $\lambda = 0$, so $I_{D1} = I_{D2} = I_{SS}/2 = 0.5$ mA. With $\beta = \mu_nC_{ox}W/L$:

$$
\begin{aligned}
\frac{I_{SS}}{2} &= \frac12\,\beta\,V_{ov}^2\\
V_{ov} &= \sqrt{\frac{I_{SS}}{\beta}} .
\end{aligned}
$$

### Step 2 — Numbers for $W/L = 25/0.5$

$$
\begin{aligned}
\frac{W}{L} &= \frac{25}{0.5} = 50,\\
\beta &= (134\ \mu\mathrm{A/V^2})(50) = 6.7\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{1\ \mathrm{mA}}{6.7\ \mathrm{mA/V^2}}} = \sqrt{0.1493\ \mathrm{V^2}} = 0.386\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Comparison with $W/L = 50/0.5$

For $W/L = 100$, $\beta = 13.4\ \mathrm{mA/V^2}$ and

$$V_{ov} = \sqrt{\frac{1\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

At fixed current $V_{ov} \propto 1/\sqrt{W/L}$:

$$\frac{V_{ov}(25/0.5)}{V_{ov}(50/0.5)} = \sqrt{\frac{(W/L)_{50/0.5}}{(W/L)_{25/0.5}}} = \sqrt{\frac{100}{50}} = \sqrt2 = 1.414, \qquad \frac{0.386}{0.273} = 1.414\ \checkmark$$

To carry the same 0.5 mA, the narrower device needs twice the overdrive squared. For the pair this means:

- a lower transconductance: $g_m = 2I_D/V_{ov}$ drops from $2(0.5\ \mathrm{mA})/0.273\ \mathrm{V} = 3.66$ mS to $2(0.5\ \mathrm{mA})/0.386\ \mathrm{V} = 2.59$ mS, i.e. by $\sqrt2$;
- a wider linear input range: full current steering now needs $\sqrt2\,V_{ov} = 0.546$ V instead of 0.386 V.

### Result

$$V_{GS} - V_{TH} = \sqrt{\frac{I_{SS}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(50)}} \approx 0.386\ \mathrm{V},$$

a factor $\sqrt2$ larger than the 0.273 V of the $W/L = 50/0.5$ pair at the same tail current: halving $W/L$ at constant current raises the overdrive by $\sqrt2$.

**Common mistake.** Concluding that a smaller $W/L$ gives a *smaller* overdrive. At a fixed current, a narrower device needs a *larger* $V_{GS} - V_{TH}$.

**Common mistake.** Scaling the overdrive by a factor of 2 (to 0.546 V) instead of $\sqrt2$. Halving $W/L$ multiplies $V_{ov}^2$ by 2 and $V_{ov}$ by $\sqrt2$.
