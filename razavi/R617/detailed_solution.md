# Detailed solution - R617

**Approach.** Find the width from the offset specification and the equilibrium overdrive at the 1-mA tail current. Then expand the pair's large-signal square-law characteristic in a power series and find the harmonics of a sinusoidal input; the pair is symmetric, so the third harmonic sets the THD.

### Step 1 — Device width from the offset specification

With threshold mismatch as the only mismatch, the offset equals the threshold mismatch:

$$V_{OS} = \Delta V_{TH} = \frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} \le 5\ \mathrm{mV}.$$

Solve for the area:

$$
\begin{aligned}
\sqrt{WL} &\ge \frac{9\ \mathrm{mV\cdot\mu m}}{5\ \mathrm{mV}} = 1.8\ \mu\mathrm{m},\\
WL &\ge (1.8\ \mu\mathrm{m})^2 = 3.24\ \mu\mathrm{m}^2,\\
W &\ge \frac{3.24\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 6.48\ \mu\mathrm{m}.
\end{aligned}
$$

The pair uses the minimum width, so $W = 6.48\ \mu$m and

$$\frac{W}{L} = \frac{6.48\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 12.96 .$$

### Step 2 — Bias point: overdrive voltage and transconductance

With $\beta = \mu_nC_{ox}W/L$:

$$\beta = (134\ \mu\mathrm{A/V^2})(12.96) = 1736.6\ \mu\mathrm{A/V^2} = 1.7366\ \mathrm{mA/V^2}.$$

At equilibrium each device carries $I_D = I_{SS}/2 = 0.5$ mA, so from $I_D = \tfrac12\beta V_{ov}^2$:

$$V_{ov} = \sqrt{\frac{2I_D}{\beta}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{1.7366\ \mathrm{mA/V^2}}} = \sqrt{0.5758\ \mathrm{V^2}} = 0.759\ \mathrm{V},$$

$$g_m = \beta V_{ov} = (1.7366\ \mathrm{mA/V^2})(0.759\ \mathrm{V}) = 1.318\ \mathrm{mS}$$

(equivalently $g_m = 2I_D/V_{ov} = 1\ \mathrm{mA}/0.759\ \mathrm{V}$). Since $I_{SS} = 2I_D = \beta V_{ov}^2$, $I_{SS}/\beta = V_{ov}^2$.

### Step 3 — Large-signal characteristic of the differential pair

Let $\Delta V = V_{in1} - V_{in2}$ and $\Delta I = I_{D1} - I_{D2}$, with both devices saturated and $\lambda = 0$. The shared source gives $\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$; squaring twice, with $I_{D1} + I_{D2} = I_{SS}$ and $4I_{D1}I_{D2} = I_{SS}^2 - \Delta I^2$, gives the standard characteristic

$$\Delta I = \frac{\beta}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2}.$$

Substituting $I_{SS}/\beta = V_{ov}^2$ from Step 2:

$$\Delta I = \frac{\beta}{2}\,\Delta V\sqrt{4V_{ov}^2 - \Delta V^2} = \beta V_{ov}\,\Delta V\sqrt{1 - \frac{\Delta V^2}{4V_{ov}^2}} = g_m\,\Delta V\sqrt{1 - \frac{\Delta V^2}{4V_{ov}^2}} .$$

This holds until one transistor turns off, at $|\Delta V| = \sqrt2\,V_{ov} = 1.073$ V; beyond that, $|\Delta I| = I_{SS}$.

### Step 4 — Power series: only odd harmonics

Expand with $\sqrt{1 - u} = 1 - \tfrac{u}{2} - \tfrac{u^2}{8} - \dots$, where $u = \Delta V^2/(4V_{ov}^2)$:

$$\Delta I = g_m\left[\Delta V - \frac{\Delta V^3}{8V_{ov}^2} - \frac{\Delta V^5}{128\,V_{ov}^4} - \dots\right].$$

The characteristic is odd ($\Delta V \to -\Delta V$ swaps the drain currents), so a symmetric pair produces **no even harmonics**. The $\Delta V^3$ term dominates; its coefficient $1/(8V_{ov}^2)$ shows that a larger overdrive makes the pair more linear.

### Step 5 — Harmonics produced by a sinusoidal input

Apply $\Delta V = V_m\cos\omega t$, keep terms up to the cube, and use $\cos^3\omega t = \tfrac34\cos\omega t + \tfrac14\cos3\omega t$:

$$
\begin{aligned}
\Delta I &\approx g_m\left[V_m\cos\omega t - \frac{V_m^3}{8V_{ov}^2}\left(\frac34\cos\omega t + \frac14\cos3\omega t\right)\right]\\
&= g_mV_m\left(1 - \frac{3V_m^2}{32V_{ov}^2}\right)\cos\omega t \;-\; g_m\frac{V_m^3}{32V_{ov}^2}\cos3\omega t .
\end{aligned}
$$

The third-harmonic distortion is

$$\mathrm{HD_3} = \frac{g_mV_m^3/(32V_{ov}^2)}{g_mV_m\left(1 - \dfrac{3V_m^2}{32V_{ov}^2}\right)} \approx \frac{V_m^2}{32V_{ov}^2},$$

neglecting for now the compression term $3V_m^2/(32V_{ov}^2)$. The fifth and higher harmonics are smaller by further factors of order $(V_m/V_{ov})^2$, so

$$\mathrm{THD} = \frac{\sqrt{A_3^2 + A_5^2 + \dots}}{A_1} \approx \mathrm{HD_3}.$$

With resistive loads the differential output voltage $R_D\,\Delta I$ has the same THD as $\Delta I$.

### Step 6 — Amplitude for 1 % THD

Set $\mathrm{HD_3} = 0.01$:

$$
\begin{aligned}
\frac{V_m^2}{32V_{ov}^2} &= 0.01,\\
V_m^2 &= 0.32\,V_{ov}^2,\\
V_m &= \sqrt{0.32}\,V_{ov} = 0.566\,V_{ov}.
\end{aligned}
$$

With $V_{ov} = 0.759$ V:

$$V_m = 0.566\times0.759\ \mathrm{V} = 0.429\ \mathrm{V}.$$

### Step 7 — Refinement with the exact characteristic, and checks

The two neglected effects both slightly *increase* the distortion:

- the fundamental shrinks by the factor $1 - 3V_m^2/(32V_{ov}^2) \approx 0.97$;
- the $\Delta V^5$ term adds a further $\cos3\omega t$ component of the same sign, $5V_m^5/(2048\,V_{ov}^4)$ (relative to $g_m$).

A numerical Fourier analysis of the exact characteristic $\Delta I = g_m\Delta V\sqrt{1 - \Delta V^2/(4V_{ov}^2)}$ gives:

| $V_m/V_{ov}$ | THD, estimate $V_m^2/(32V_{ov}^2)$ | THD, exact |
|---|---|---|
| 0.40 | 0.500 % | 0.514 % |
| 0.50 | 0.781 % | 0.816 % |
| 0.551 | 0.948 % | 1.000 % |
| 0.566 | 1.000 % | 1.060 % |

So the exact 1 % point is at $V_m/V_{ov} = 0.551$:

$$V_m = 0.551\times0.759\ \mathrm{V} = 0.418\ \mathrm{V},$$

and the simple formula is accurate to about 3 %.

**Checks.** $V_m = 0.42$ V is well below $\sqrt2\,V_{ov} = 1.07$ V, so no device turns off and the Step 3 expression holds over the whole cycle. The 5-mV offset would add a tiny even-order component, ignored since the pair is otherwise symmetric.

### Result

With $W = 6.48\ \mu$m ($W/L = 12.96$) and $I_{SS} = 1$ mA, the equilibrium overdrive is $V_{GS} - V_{TH} = \sqrt{I_{SS}/(\mu_nC_{ox}W/L)} = 0.759$ V. Setting

$$\mathrm{THD} \approx \mathrm{HD_3} \approx \frac{V_m^2}{32\,(V_{GS} - V_{TH})^2} = 1\%$$

gives

$$V_m \approx \sqrt{0.32}\times0.759\ \mathrm{V} \approx 0.43\ \mathrm{V}\ \text{peak differential}$$

(about 0.85 V peak-to-peak). The exact square-law characteristic gives 0.418 V, so the answer is **about 0.42–0.43 V peak**.

**Common mistake.** Dropping the factor $\tfrac14$ of $\cos^3\omega t$ and writing $\mathrm{HD_3} = V_m^2/(8V_{ov}^2)$: only a quarter of the cubic term appears at $3\omega$. The wrong formula gives $V_m = \sqrt{0.08}\times0.759 = 0.21$ V, half the correct swing.

**Common mistake.** Using a second-harmonic formula. The symmetric pair's characteristic is odd, so its even harmonics cancel and the third harmonic sets the distortion.

**Common mistake.** Treating THD as a power ratio, $(A_3/A_1)^2 = 0.01$, which gives $A_3/A_1 = 10\%$ and $V_m \approx 1.36$ V. The problem defines THD by *amplitudes*, and 1.36 V exceeds $\sqrt2\,V_{ov} = 1.07$ V, where the pair is already fully switched.
