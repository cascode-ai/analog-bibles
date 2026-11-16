# Detailed solution - R605

**Approach.** With $W/L$ and $R_D$ fixed, the bias current $I$ sets $V_{ov}$ and $g_m$. Write the distortion (square law: second harmonic only) in terms of $V_{ov}$, the input-referred thermal noise in terms of $g_m$, and the power as $V_{DD}I$; their current dependence gives three curves versus $I$, from which the trade-offs follow.

### Step 1 — $V_{ov}$, $g_m$ and power versus $I$

From $I = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$:

$$V_{ov} = \sqrt{\frac{2I}{\mu_nC_{ox}W/L}} \;\propto\; I^{1/2},$$

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = \sqrt{2\mu_nC_{ox}(W/L)\,I} \;\propto\; I^{1/2}.$$

Unlike the case of varying $W/L$, **both** $V_{ov}$ and $g_m$ grow with current. The power $P = V_{DD}I \propto I$ is a straight line through the origin.

### Step 2 — Distortion versus $I$

With $V_{GS} = V_{GS0} + V_m\cos\omega t$ and $\cos^2\theta = \tfrac12(1 + \cos2\theta)$:

$$
\begin{aligned}
I_D &= \tfrac12\mu_nC_{ox}\tfrac{W}{L}(V_{ov} + V_m\cos\omega t)^2\\
&= \tfrac12\mu_nC_{ox}\tfrac{W}{L}\left[V_{ov}^2 + \tfrac12V_m^2 + 2V_{ov}V_m\cos\omega t + \tfrac12V_m^2\cos2\omega t\right].
\end{aligned}
$$

Only a second harmonic appears, and the output $V_{DD} - R_DI_D$ is linear in $I_D$, so

$$\mathrm{THD} = \mathrm{HD2} = \frac{\tfrac12V_m^2}{2V_{ov}V_m} = \frac{V_m}{4V_{ov}} = \frac{V_m}{4}\sqrt{\frac{\mu_nC_{ox}W/L}{2I}} \;\propto\; I^{-1/2}.$$

**Curve:** a decreasing $1/\sqrt I$ curve, steep at low current and flat at high current. Doubling $I$ reduces the THD by $\sqrt2$; halving it needs four times the current. At very low current the overdrive drops toward $V_m$, the device cuts off on the negative peaks, and the formula no longer applies.

### Step 3 — Input-referred thermal noise versus $I$

The output node, with $R_D$ to AC ground, carries two uncorrelated noise currents, $\overline{I_{n,M}^2} = 4kT\gamma g_m$ ($\gamma = 2/3$) from $M_0$ and $\overline{I_{n,R}^2} = 4kT/R_D$ from the resistor:

$$\overline{V_{n,out}^2} = \left(4kT\gamma g_m + \frac{4kT}{R_D}\right)R_D^2 .$$

Dividing by $(g_mR_D)^2$:

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right) = 4kT\left(\frac{2}{3g_m} + \frac{1}{g_m^2R_D}\right).$$

With $g_m \propto I^{1/2}$:

- transistor term $\propto 1/g_m \propto I^{-1/2}$ (rms noise $\propto I^{-1/4}$);
- resistor term $\propto 1/g_m^2 \propto I^{-1}$.

**Curve:** monotonically decreasing, steep at low current and flat at high current.

### Step 4 — The three curves

Normalized to a starting current $I_0$:

| $I/I_0$ | 0.25 | 0.5 | 1 | 2 | 4 |
|---|---|---|---|---|---|
| THD (∝ $I^{-1/2}$) | 2.0 | 1.41 | 1 | 0.71 | 0.50 |
| noise PSD, transistor term (∝ $I^{-1/2}$) | 2.0 | 1.41 | 1 | 0.71 | 0.50 |
| noise PSD, resistor term (∝ $I^{-1}$) | 4.0 | 2.0 | 1 | 0.50 | 0.25 |
| power (∝ $I$) | 0.25 | 0.5 | 1 | 2 | 4 |

THD and noise fall together; power rises linearly.

### Step 5 — Trade-offs

**Noise and linearity versus power.** Both improve only as $I^{-1/2}$: each 2× improvement in HD2 (or in the transistor noise PSD) costs 4× the power. With $g_mV_{ov} = 2I$, their product

$$\overline{V_{n,in}^2}\Big|_{M_0}\times\mathrm{HD2} = \frac{4kT\gamma}{g_m}\cdot\frac{V_m}{4V_{ov}} = \frac{kT\gamma V_m}{2I} = \frac{kTV_m}{3I}$$

falls as $1/I$: improving both *together* is paid for with power.

**At fixed power.** With $I$ fixed, only $W/L$ remains: a larger $W/L$ lowers the noise but raises the distortion, and vice versa, with the product above constant. Power buys both; sizing only trades one against the other.

**Headroom.** With $R_D$ fixed, raising $I$ lowers the drain bias $V_{DD} - IR_D$ while $V_{ov}$ grows, so eventually $V_{DS}$ falls below $V_{ov}$ plus the output swing and the transistor leaves saturation. The gain $g_mR_D \propto \sqrt I$ also grows, enlarging the output swing for the fixed $V_m$ and tightening this limit.

### Result

At fixed $W/L$ and $R_D$, increasing $I$ raises both $V_{ov} \propto \sqrt I$ and $g_m \propto \sqrt I$:

- **THD** $= \mathrm{HD2} = V_m/(4V_{ov}) = \tfrac{V_m}{4}\sqrt{\mu_nC_{ox}(W/L)/(2I)}$ **falls as $I^{-1/2}$**;
- **input-referred noise** $\overline{V_{n,in}^2} = 4kT\left[2/(3g_m) + 1/(g_m^2R_D)\right]$ **falls**: the transistor term as $I^{-1/2}$ (rms $\propto I^{-1/4}$), the resistor term as $I^{-1}$;
- **power** $P = V_{DD}I$ **rises linearly**.

Trade-off: noise and linearity both improve with current, but slowly: halving HD2 or the transistor noise PSD costs four times the power. At fixed power, noise and linearity can only be traded against each other through $W/L$. With $R_D$ fixed, a larger current also lowers the drain voltage and eventually limits the swing before saturation is lost.

**Common mistake.** Saying the THD increases with current ("more gain, more distortion"). At fixed $W/L$, more current means a larger overdrive, so the fixed swing $V_m$ is a smaller fraction of $V_{ov}$ and the distortion falls.

**Common mistake.** Treating the improvements as linear in power. HD2 and the noise PSD fall only as $1/\sqrt I$, so a 2× improvement needs 4× the current.
