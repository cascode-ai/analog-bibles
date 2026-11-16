# Detailed solution - R605

**Approach.** With $W/L$ and $R_D$ fixed, the bias current $I$ sets the overdrive $V_{ov}$ and the transconductance $g_m$. We write the distortion (square law: second harmonic only) as a function of $V_{ov}$, the input-referred thermal noise as a function of $g_m$, and the power as $V_{DD}I$. Substituting the current dependence of $V_{ov}$ and $g_m$ gives three curves versus $I$, from which the trade-offs follow.

### Step 1 — $V_{ov}$, $g_m$ and power versus $I$

From the square law $I = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, with $V_{ov} = V_{GS} - V_{TH}$:

$$V_{ov} = \sqrt{\frac{2I}{\mu_nC_{ox}W/L}} \;\propto\; I^{1/2},$$

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = \sqrt{2\mu_nC_{ox}(W/L)\,I} \;\propto\; I^{1/2}.$$

Unlike the case of varying $W/L$, here **both** $V_{ov}$ and $g_m$ grow with current.

**Power:** $P = V_{DD}I \propto I$ (a straight line through the origin).

### Step 2 — Distortion versus $I$

With $V_{GS} = V_{GS0} + V_m\cos\omega t$:

$$
\begin{aligned}
I_D &= \tfrac12\mu_nC_{ox}\tfrac{W}{L}(V_{ov} + V_m\cos\omega t)^2\\
&= \tfrac12\mu_nC_{ox}\tfrac{W}{L}\left[V_{ov}^2 + \tfrac12V_m^2 + 2V_{ov}V_m\cos\omega t + \tfrac12V_m^2\cos2\omega t\right],
\end{aligned}
$$

using $\cos^2\theta = \tfrac12(1 + \cos2\theta)$. Only a second harmonic appears. The output voltage $V_{DD} - R_DI_D$ is linear in $I_D$, so

$$\mathrm{THD} = \mathrm{HD2} = \frac{\tfrac12V_m^2}{2V_{ov}V_m} = \frac{V_m}{4V_{ov}} = \frac{V_m}{4}\sqrt{\frac{\mu_nC_{ox}W/L}{2I}} \;\propto\; I^{-1/2}.$$

**Curve:** a decreasing $1/\sqrt I$ curve: it falls steeply at low current and flattens at high current. Doubling $I$ reduces the THD by $\sqrt2$; to halve it, the current must be quadrupled. (At very low current the overdrive drops toward $V_m$, the device begins to cut off on the negative peaks, and the square-law formula no longer applies.)

### Step 3 — Input-referred thermal noise versus $I$

The output node sees $R_D$ to AC ground (channel-length modulation neglected). Two uncorrelated noise currents flow there: the channel noise of $M_0$, $\overline{I_{n,M}^2} = 4kT\gamma g_m$ with $\gamma = 2/3$, and the noise of the resistor, $\overline{I_{n,R}^2} = 4kT/R_D$. Their powers add, and the output noise is

$$\overline{V_{n,out}^2} = \left(4kT\gamma g_m + \frac{4kT}{R_D}\right)R_D^2 .$$

Dividing by the squared gain $(g_mR_D)^2$:

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right) = 4kT\left(\frac{2}{3g_m} + \frac{1}{g_m^2R_D}\right).$$

With $g_m \propto I^{1/2}$:

- transistor term $\propto 1/g_m \propto I^{-1/2}$ (rms noise voltage $\propto I^{-1/4}$);
- resistor term $\propto 1/g_m^2 \propto I^{-1}$.

**Curve:** monotonically decreasing, again steep at low current and flattening at high current.

### Step 4 — The three curves

Normalized to a reference current $I_0$:

| $I/I_0$ | 0.25 | 0.5 | 1 | 2 | 4 |
|---|---|---|---|---|---|
| THD (∝ $I^{-1/2}$) | 2.0 | 1.41 | 1 | 0.71 | 0.50 |
| noise PSD, transistor term (∝ $I^{-1/2}$) | 2.0 | 1.41 | 1 | 0.71 | 0.50 |
| noise PSD, resistor term (∝ $I^{-1}$) | 4.0 | 2.0 | 1 | 0.50 | 0.25 |
| power (∝ $I$) | 0.25 | 0.5 | 1 | 2 | 4 |

THD and noise fall together; power rises linearly.

### Step 5 — Trade-offs

**Noise and linearity versus power.** Both improve with current, but only as $I^{-1/2}$: each 2× improvement in HD2 (or in the transistor's noise PSD) costs 4× the power. Their product, using $g_mV_{ov} = 2I$,

$$\overline{V_{n,in}^2}\Big|_{M_0}\times\mathrm{HD2} = \frac{4kT\gamma}{g_m}\cdot\frac{V_m}{4V_{ov}} = \frac{kT\gamma V_m}{2I} = \frac{kTV_m}{3I},$$

falls as $1/I$: improving noise and linearity *together* is paid for with power.

**At fixed power.** If $I$ is fixed, the only remaining knob is $W/L$, which moves the overdrive: a larger $W/L$ lowers the noise but raises the distortion, and vice versa (the product above stays constant). So power buys both, while device sizing only trades one against the other.

**Headroom.** With $R_D$ fixed, raising $I$ lowers the drain bias $V_{DD} - IR_D$ while $V_{ov}$ grows; eventually $V_{DS} = V_{DD} - IR_D$ falls below $V_{ov}$ plus the output swing and the transistor leaves saturation. The gain $g_mR_D \propto \sqrt I$ also grows, so the output swing for the fixed $V_m$ increases, which tightens this limit further.

### Result

At fixed $W/L$ and $R_D$, increasing $I$ raises both $V_{ov} \propto \sqrt I$ and $g_m \propto \sqrt I$:

- **THD** $= \mathrm{HD2} = V_m/(4V_{ov}) = \tfrac{V_m}{4}\sqrt{\mu_nC_{ox}(W/L)/(2I)}$ **falls as $I^{-1/2}$**;
- **input-referred noise** $\overline{V_{n,in}^2} = 4kT\left[2/(3g_m) + 1/(g_m^2R_D)\right]$ **falls**: the transistor term as $I^{-1/2}$ (rms $\propto I^{-1/4}$), the resistor term as $I^{-1}$;
- **power** $P = V_{DD}I$ **rises linearly**.

Trade-off: noise and linearity both improve with current, but slowly: halving HD2 or the transistor noise PSD costs four times the power. At fixed power, noise and linearity can only be traded against each other through $W/L$. With $R_D$ fixed, a larger current also lowers the drain voltage and eventually limits the swing before saturation is lost.

**Common mistake.** Saying the THD increases with current, perhaps by analogy with "more gain, more distortion". At fixed $W/L$, more current means a larger overdrive, so the fixed input swing $V_m$ is a smaller fraction of $V_{ov}$ and the distortion falls.

**Common mistake.** Treating the improvements as linear in power. Both HD2 and the noise PSD fall only as $1/\sqrt I$, so the cost of better performance grows quadratically: a 2× improvement needs 4× the current.
