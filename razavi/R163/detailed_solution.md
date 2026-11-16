# Detailed solution - R163

**Approach.** At equilibrium each device carries $I_{SS}/2$, so the square law gives $V_{ov} = \sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$; evaluate it at 2 mA and at 1 mA.

### Step 1 — Overdrive at equilibrium

At equilibrium ($V_{in1} = V_{in2}$) the identical devices have the same $V_{GS}$ and $V_{TH}$, and $\lambda = 0$, so

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2} = \frac{2\ \mathrm{mA}}{2} = 1\ \mathrm{mA}.$$

With $\beta = \mu_nC_{ox}W/L$:

$$
\begin{aligned}
\frac{I_{SS}}{2} &= \frac12\,\beta\,V_{ov}^2\\
V_{ov} &= \sqrt{\frac{I_{SS}}{\beta}} .
\end{aligned}
$$

### Step 2 — Numbers

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})\left(\frac{50}{0.5}\right) = 13.4\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{2\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.1493\ \mathrm{V^2}} = 0.386\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Comparison with a 1-mA tail current

With $I_{SS} = 1$ mA, each device carries 0.5 mA and

$$V_{ov} = \sqrt{\frac{1\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

For a fixed device size $V_{ov} \propto \sqrt{I_{SS}}$:

$$\frac{V_{ov}(2\ \mathrm{mA})}{V_{ov}(1\ \mathrm{mA})} = \sqrt{\frac{2\ \mathrm{mA}}{1\ \mathrm{mA}}} = \sqrt2 = 1.414, \qquad \frac{0.386}{0.273} = 1.414\ \checkmark$$

Consequences for the pair:

- the input range grows: full steering now needs $\sqrt2\,V_{ov} = 0.546$ V instead of 0.386 V;
- the transconductance *also* grows, $g_m = 2I_D/V_{ov} = 2(1\ \mathrm{mA})/0.386\ \mathrm{V} = 5.18$ mS versus 3.66 mS, i.e. by $\sqrt2$, because the current doubles while the overdrive rises only by $\sqrt2$. The price is twice the power.

(The same 0.386 V overdrive is obtained by halving $W/L$ at 1 mA; that route also widens the input range but *lowers* $g_m$.)

### Result

$$V_{GS} - V_{TH} = \sqrt{\frac{I_{SS}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(100)}} \approx 0.386\ \mathrm{V},$$

which is $\sqrt2$ times the 0.273 V obtained with a 1-mA tail current.

**Common mistake.** Putting the whole 2 mA into one device: $\sqrt{2(2\ \mathrm{mA})/13.4\ \mathrm{mA/V^2}} = 0.546$ V. At equilibrium each device carries only 1 mA.

**Common mistake.** Scaling the overdrive in proportion to the current (doubling it to 0.546 V). Doubling the current raises the overdrive by $\sqrt2$, not by 2.
