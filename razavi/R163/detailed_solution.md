# Detailed solution - R163

**Approach.** At equilibrium each of the two identical input devices carries half the tail current. Equating the square-law current to $I_{SS}/2$ gives $V_{ov} = \sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$. Evaluate this at 2 mA and at 1 mA to see how the overdrive scales with the current.

### Step 1 — Current per device at equilibrium

$M_1$ and $M_2$ are identical NMOS devices with their sources joined at node $P$, and an ideal current source draws $I_{SS} = 2$ mA from $P$. By KCL at $P$,

$$I_{D1} + I_{D2} = I_{SS}.$$

At equilibrium ($V_{in1} = V_{in2}$), both devices have the same $V_{GS}$ (equal gate voltages, common source node), the same threshold and the same size, and $\lambda = 0$. Their currents are therefore equal:

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2} = \frac{2\ \mathrm{mA}}{2} = 1\ \mathrm{mA}.$$

### Step 2 — Overdrive from the square law

The saturation current is $I_D = \tfrac12\beta V_{ov}^2$, with $\beta = \mu_nC_{ox}W/L$ and $V_{ov} = V_{GS} - V_{TH}$ the overdrive voltage. With $I_D = I_{SS}/2$:

$$
\begin{aligned}
\frac{I_{SS}}{2} &= \frac12\,\beta\,V_{ov}^2\\
V_{ov} &= \sqrt{\frac{I_{SS}}{\beta}} .
\end{aligned}
$$

### Step 3 — Numbers

$$
\begin{aligned}
\beta &= (134\ \mu\mathrm{A/V^2})\left(\frac{50}{0.5}\right) = 13.4\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{2\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.1493\ \mathrm{V^2}} = 0.386\ \mathrm{V}.
\end{aligned}
$$

### Step 4 — Comparison with a 1-mA tail current

With $I_{SS} = 1$ mA, each device carries 0.5 mA and

$$V_{ov} = \sqrt{\frac{1\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

Since $V_{ov} \propto \sqrt{I_{SS}}$ for a fixed device size,

$$\frac{V_{ov}(2\ \mathrm{mA})}{V_{ov}(1\ \mathrm{mA})} = \sqrt{\frac{2\ \mathrm{mA}}{1\ \mathrm{mA}}} = \sqrt2 = 1.414, \qquad \frac{0.386}{0.273} = 1.414\ \checkmark$$

**Interpretation.** To carry twice the current, the same device needs twice the *square* of the overdrive, so the overdrive grows by $\sqrt2$. Two consequences:

- the pair's input range grows: full steering now needs $\sqrt2\,V_{ov} = 0.546$ V instead of 0.386 V;
- the transconductance *also* grows, $g_m = 2I_D/V_{ov} = 2(1\ \mathrm{mA})/0.386\ \mathrm{V} = 5.18$ mS versus 3.66 mS, i.e. by $\sqrt2$, because the current doubles while the overdrive rises only by $\sqrt2$. The price is twice the power.

(The same 0.386 V overdrive is obtained by halving $W/L$ at 1 mA. That route also widens the input range but *lowers* $g_m$.)

### Result

$$V_{GS} - V_{TH} = \sqrt{\frac{I_{SS}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(100)}} \approx 0.386\ \mathrm{V},$$

which is $\sqrt2$ times the 0.273 V obtained with a 1-mA tail current.

**Common mistake.** Putting the whole 2 mA into one device: $\sqrt{2(2\ \mathrm{mA})/13.4\ \mathrm{mA/V^2}} = 0.546$ V. At equilibrium the tail current divides equally, so each device carries only 1 mA.

**Common mistake.** Scaling the overdrive in proportion to the current (doubling it to 0.546 V). In the square law the current grows with the *square* of the overdrive, so doubling the current raises the overdrive by $\sqrt2$, not by 2.
