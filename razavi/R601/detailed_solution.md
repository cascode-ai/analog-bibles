# Detailed solution - R601

**Approach.** Write the drain current with the square law, $I_D = \tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2$, with the gate voltage equal to the bias plus a sinusoid. Expanding the square shows a fundamental and a second harmonic only; their ratio is the harmonic distortion. The output voltage $V_{DD} - R_DI_D$ is a linear function of $I_D$, so it has the same distortion. Finally, we see how the overdrive, and hence the distortion, scales with $W/L$ and $I$.

### Step 1 — Bias point: the overdrive voltage

Let $k = \mu_nC_{ox}(W/L)$ and $V_{ov} = V_{GS} - V_{TH}$ (the overdrive voltage at the bias point). With $W/L = 20/0.5 = 40$:

$$k = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2}.$$

The bias current is $I = \tfrac12kV_{ov}^2$, so

$$V_{ov} = \sqrt{\frac{2I}{k}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.1866}\ \mathrm{V} = 0.432\ \mathrm{V}.$$

### Step 2 — Drain current with a sinusoidal input

The gate–source voltage is the bias plus the signal, $V_{GS} = V_{GS0} + V_m\cos\omega t$ with $V_m = 100$ mV, so the instantaneous overdrive is $V_{ov} + V_m\cos\omega t$. It stays between $0.432 - 0.1 = 0.332$ V and $0.532$ V, so the device remains on, and it is given to stay in saturation. Then

$$
\begin{aligned}
I_D &= \tfrac12k\,(V_{ov} + V_m\cos\omega t)^2\\
&= \tfrac12kV_{ov}^2 + kV_{ov}V_m\cos\omega t + \tfrac12kV_m^2\cos^2\omega t\\
&= \tfrac12kV_{ov}^2 + kV_{ov}V_m\cos\omega t + \tfrac14kV_m^2\,(1 + \cos2\omega t)\qquad\left(\cos^2\theta = \tfrac12 + \tfrac12\cos2\theta\right)\\
&= \underbrace{I + \tfrac14kV_m^2}_{\text{DC}} + \underbrace{kV_{ov}V_m}_{\text{fundamental}}\cos\omega t + \underbrace{\tfrac14kV_m^2}_{\text{2nd harmonic}}\cos2\omega t .
\end{aligned}
$$

The square law is an exact quadratic, so **there is no third or higher harmonic** (channel-length modulation is neglected, and the device stays saturated). The fundamental amplitude is $g_mV_m$, with $g_m = kV_{ov}$ the small-signal transconductance.

### Step 3 — Second-harmonic distortion

$$\mathrm{HD2} = \frac{\text{2nd-harmonic amplitude}}{\text{fundamental amplitude}} = \frac{\tfrac14kV_m^2}{kV_{ov}V_m} = \frac{V_m}{4V_{ov}}.$$

Since $V_{out} = V_{DD} - R_DI_D$, every AC component of the current is multiplied by the same $-R_D$, and the output voltage has the same HD2. With only one harmonic present, the THD equals HD2.

**Numbers.**

$$
\begin{aligned}
g_m &= kV_{ov} = (5.36\ \mathrm{mA/V^2})(0.432\ \mathrm{V}) = 2.32\ \mathrm{mS},\\
\text{fundamental} &= g_mV_m = (2.32\ \mathrm{mS})(0.1\ \mathrm{V}) = 232\ \mu\mathrm{A},\\
\text{2nd harmonic} &= \tfrac14kV_m^2 = \tfrac14(5.36\ \mathrm{mA/V^2})(0.01\ \mathrm{V^2}) = 13.4\ \mu\mathrm{A},\\
\mathrm{HD2} &= \frac{13.4}{232} = \frac{0.1\ \mathrm{V}}{4\times0.432\ \mathrm{V}} = 0.0579 = 5.8\ \%\quad(-24.7\ \mathrm{dB}).
\end{aligned}
$$

(As a power ratio this is $0.0579^2 = 3.4\times10^{-3}$.)

**Intuition.** HD2 compares the signal swing with the overdrive. The square law curves noticeably only when the gate swing is a significant fraction of $V_{ov}$; a larger overdrive makes the same 100-mV swing a smaller relative excursion along the parabola.

### Step 4 — Doubling $W/L$

With $W/L = 80$, $k = 10.72\ \mathrm{mA/V^2}$ and the same current:

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{10.72\ \mathrm{mA/V^2}}} = \sqrt{0.0933}\ \mathrm{V} = 0.305\ \mathrm{V},\\
\mathrm{HD2} &= \frac{0.1}{4\times0.305} = 0.0819 = 8.2\ \%.
\end{aligned}
$$

The overdrive falls by $\sqrt2$, so the distortion **rises** by $\sqrt2$.

### Step 5 — Doubling $I$

With $I = 1$ mA and $W/L = 40$:

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{2(1\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.373}\ \mathrm{V} = 0.611\ \mathrm{V},\\
\mathrm{HD2} &= \frac{0.1}{4\times0.611} = 0.0409 = 4.1\ \%.
\end{aligned}
$$

The overdrive rises by $\sqrt2$, so the distortion **falls** by $\sqrt2$.

### Step 6 — Summary of the scaling

| case | $W/L$ | $I$ | $V_{ov}$ | $g_m$ | HD2 |
|---|---|---|---|---|---|
| given | 40 | 0.5 mA | 0.432 V | 2.32 mS | 5.8 % |
| $2\times W/L$ | 80 | 0.5 mA | 0.305 V | 3.27 mS | 8.2 % |
| $2\times I$ | 40 | 1 mA | 0.611 V | 3.27 mS | 4.1 % |

Since $V_{ov} = \sqrt{2I/(\mu_nC_{ox}W/L)}$,

$$\mathrm{HD2} = \frac{V_m}{4V_{ov}} \propto \sqrt{\frac{W/L}{I}}.$$

Interestingly, both changes raise $g_m$ by the same factor $\sqrt2$ (and hence the small-signal gain), but only the current increase improves linearity; widening the device trades linearity for gain at constant power.

### Result

The square-law drain current contains only a second harmonic:

$$\mathrm{HD2} = \frac{V_m}{4\,(V_{GS} - V_{TH})} = \frac{0.1\ \mathrm{V}}{4\times0.432\ \mathrm{V}} \approx 5.8\ \%$$

(with $V_{GS} - V_{TH} = 0.432$ V), and the output voltage has the same distortion. Doubling $W/L$ lowers the overdrive to 0.305 V and **raises** HD2 to about 8.2 % (×√2); doubling $I$ raises the overdrive to 0.611 V and **lowers** HD2 to about 4.1 % (÷√2).

**Common mistake.** Getting the factor in the formula wrong, e.g. $V_m/(2V_{ov})$ (11.6 %). The fundamental is $kV_{ov}V_m$ while the second harmonic is $\tfrac12kV_m^2$ multiplied by the $\tfrac12$ from $\cos^2\theta = \tfrac12(1 + \cos2\theta)$, giving $\tfrac14kV_m^2$. Claiming a third harmonic is also wrong within the square-law model, which is an exact parabola.

**Common mistake.** Thinking that a wider transistor is "more linear" because it has more gain. For a fixed current, a larger $W/L$ means a smaller overdrive, so the same input swing covers a larger fraction of the parabola and the distortion increases. Only a larger overdrive (more current or a narrower device) reduces HD2.
