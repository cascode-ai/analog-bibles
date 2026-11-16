# Detailed solution - R603

**Approach.** With $I$ and $R_D$ fixed, $W/L$ affects the circuit only through the overdrive $V_{ov}$ and the transconductance $g_m$. We express the distortion (from the square law) and the input-referred thermal noise (from the device and resistor noise sources) in terms of $V_{ov}$ and $g_m$, then substitute their dependence on $W/L$ to get the shape of each curve. Finally we combine the two to expose the trade-off with power.

### Step 1 — How $V_{ov}$ and $g_m$ depend on $W/L$ at constant current

From the square law $I = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, with $V_{ov} = V_{GS} - V_{TH}$ the overdrive voltage:

$$V_{ov} = \sqrt{\frac{2I}{\mu_nC_{ox}W/L}} \;\propto\; (W/L)^{-1/2}.$$

The transconductance $g_m = \partial I_D/\partial V_{GS} = \mu_nC_{ox}(W/L)V_{ov}$ becomes

$$g_m = \sqrt{2\mu_nC_{ox}(W/L)\,I} = \frac{2I}{V_{ov}} \;\propto\; (W/L)^{1/2}.$$

A wider device carries the same current with a smaller overdrive, and so has a larger $g_m$.

**Power.** $P = V_{DD}I$ does not depend on $W/L$. The DC output level $V_{DD} - IR_D$ does not change either.

### Step 2 — Distortion versus $W/L$

With $V_{GS} = V_{GS0} + V_m\cos\omega t$, the drain current is

$$
\begin{aligned}
I_D &= \tfrac12\mu_nC_{ox}\tfrac{W}{L}(V_{ov} + V_m\cos\omega t)^2\\
&= \tfrac12\mu_nC_{ox}\tfrac{W}{L}\left[V_{ov}^2 + 2V_{ov}V_m\cos\omega t + \tfrac12V_m^2 + \tfrac12V_m^2\cos2\omega t\right].
\end{aligned}
$$

The fundamental is $\mu_nC_{ox}(W/L)V_{ov}V_m$ and the second harmonic $\tfrac14\mu_nC_{ox}(W/L)V_m^2$; the square law produces nothing beyond $2\omega$. The output $V_{DD} - R_DI_D$ has the same ratio, so

$$\mathrm{THD} = \mathrm{HD2} = \frac{\tfrac14V_m^2}{V_{ov}V_m} = \frac{V_m}{4V_{ov}} = \frac{V_m}{4}\sqrt{\frac{\mu_nC_{ox}W/L}{2I}} \;\propto\; \sqrt{W/L}.$$

**Curve:** THD rises from the origin as a square root of $W/L$ (concave, rising ever more slowly). Doubling $W/L$ multiplies the distortion by $\sqrt2 = 1.41$. The formula holds while $V_m < V_{ov}$; once the overdrive becomes comparable to $V_m$, the device starts to cut off during part of the cycle.

### Step 3 — Input-referred thermal noise versus $W/L$

**Noise sources** (all at the output node, which sees $R_D$ to AC ground, channel-length modulation neglected):

- channel thermal noise of $M_0$: a current $\overline{I_{n,M}^2} = 4kT\gamma g_m$ from drain to source, with $\gamma = 2/3$ for a long-channel device;
- thermal noise of $R_D$: a current $\overline{I_{n,R}^2} = 4kT/R_D$ in parallel with it.

<!-- diagram: diagram-01.cir -->

Both currents flow through $R_D$ and are uncorrelated, so their powers add:

$$\overline{V_{n,out}^2} = \left(4kT\gamma g_m + \frac{4kT}{R_D}\right)R_D^2.$$

The voltage gain is $|A_v| = g_mR_D$. Dividing by $A_v^2$ refers the noise to the input:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\left(4kT\gamma g_m + 4kT/R_D\right)R_D^2}{g_m^2R_D^2}\\
&= 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right) = 4kT\left(\frac{2}{3g_m} + \frac{1}{g_m^2R_D}\right).
\end{aligned}
$$

**Dependence on $W/L$** ($g_m \propto (W/L)^{1/2}$, $R_D$ fixed):

- transistor term $\dfrac{2}{3g_m} \propto (W/L)^{-1/2}$;
- resistor term $\dfrac{1}{g_m^2R_D} \propto (W/L)^{-1}$.

**Curve:** the noise PSD falls monotonically with $W/L$. When the transistor term dominates (i.e. $g_mR_D \gg 3/2$, a gain well above unity), the PSD falls as $(W/L)^{-1/2}$ and the rms noise voltage as $(W/L)^{-1/4}$.

### Step 4 — The two curves side by side

Normalized to a reference design $(W/L)_0$:

| $W/L \,/\, (W/L)_0$ | 0.25 | 0.5 | 1 | 2 | 4 |
|---|---|---|---|---|---|
| THD (∝ $\sqrt{W/L}$) | 0.50 | 0.71 | 1 | 1.41 | 2.0 |
| noise PSD, transistor term (∝ $(W/L)^{-1/2}$) | 2.0 | 1.41 | 1 | 0.71 | 0.50 |
| noise PSD, resistor term (∝ $(W/L)^{-1}$) | 4.0 | 2.0 | 1 | 0.50 | 0.25 |
| power ($V_{DD}I$) | 1 | 1 | 1 | 1 | 1 |

The THD curve rises and the noise curve falls: they move in opposite directions as $W/L$ changes, while the power line is flat.

**At the extremes.** For very large $W/L$ the overdrive shrinks until the device enters weak inversion; there $g_m \to I/(\zeta V_T)$ stops growing and the distortion approaches $V_m/(4\zeta V_T)$ (with $\zeta V_T$ the subthreshold slope factor times the thermal voltage), so both curves flatten. For very small $W/L$ the overdrive becomes large, which eats into the headroom needed to keep the transistor saturated ($V_{DS} \ge V_{ov}$) and pushes the device into velocity-saturation effects that the square law does not describe.

### Step 5 — The trade-off among noise, linearity and power

Multiply the transistor noise term by the distortion:

$$\overline{V_{n,in}^2}\Big|_{M_0}\times\mathrm{HD2} = \frac{4kT\gamma}{g_m}\cdot\frac{V_m}{4V_{ov}} = \frac{kT\gamma V_m}{g_mV_{ov}} = \frac{kT\gamma V_m}{2I} = \frac{kTV_m}{3I}\quad(\gamma = \tfrac23),$$

using $g_mV_{ov} = 2I$. The product **does not depend on $W/L$**:

- at a given current (i.e. at a given power $V_{DD}I$), $W/L$ only moves the design along this curve: a larger $W/L$ (smaller overdrive) gives lower noise but more distortion; a smaller $W/L$ (larger overdrive) gives better linearity but more noise;
- to improve noise and linearity *together*, the product $kTV_m/(3I)$ must be reduced, which requires a larger $I$, i.e. **more power**.

The resistor term adds a further incentive for large $g_m$, but it does not change this conclusion.

### Result

At constant $I$ (and hence constant power), increasing $W/L$ lowers the overdrive $V_{ov} = \sqrt{2I/(\mu_nC_{ox}W/L)}$ and raises $g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$:

- **THD** $= \mathrm{HD2} = V_m/(4V_{ov}) = \tfrac{V_m}{4}\sqrt{\mu_nC_{ox}(W/L)/(2I)}$ **rises as $\sqrt{W/L}$**;
- **input-referred noise** $\overline{V_{n,in}^2} = 4kT\left[2/(3g_m) + 1/(g_m^2R_D)\right]$ **falls**: as $(W/L)^{-1/2}$ for the transistor term (rms $\propto (W/L)^{-1/4}$) and as $(W/L)^{-1}$ for the resistor term.

The trade-off: for a given power, $W/L$ (i.e. the overdrive) trades noise against linearity, because $\overline{V_{n,in}^2}\cdot\mathrm{HD2} = kTV_m/(3I)$ is fixed by the current; reducing both requires more current, hence more power.

**Common mistake.** Concluding that a wider transistor is more linear because it has more gain. At fixed current a wider device has a *smaller* overdrive, so the same input swing is a larger fraction of $V_{ov}$ and the distortion grows.

**Common mistake.** Stating that the noise increases with $W/L$, or that the power changes with $W/L$. With $I$ fixed, $g_m$ grows as $\sqrt{W/L}$ and the input-referred noise falls; the supply current, and therefore the power, is set by $I$ alone.
