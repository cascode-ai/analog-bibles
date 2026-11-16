# Detailed solution - R602

**Approach.** Use the square-law large-signal characteristic of the differential pair, $I_{D1} - I_{D2}$ versus the differential input. It is odd in $V_{in}$, so the even harmonics vanish. Expanding it to third order and substituting $V_{in} = V_m\cos\omega t$ gives HD3 in terms of $V_m$ and the equilibrium overdrive, evaluated for the three designs.

### Step 1 — Equilibrium overdrive

At balance each transistor carries $I = I_{SS}/2 = 0.5$ mA. With $k = \mu_nC_{ox}(W/L) = 134\ \mu\mathrm{A/V^2}\times40 = 5.36\ \mathrm{mA/V^2}$ and $I = \tfrac12kV_{ov}^2$:

$$V_{ov} = \sqrt{\frac{2I}{k}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.1866}\ \mathrm{V} = 0.432\ \mathrm{V}.$$

### Step 2 — Large-signal characteristic of the pair

With $V_{in} = V_{in1} - V_{in2} = V_{GS1} - V_{GS2}$, the square law gives $\sqrt{I_{D1}} - \sqrt{I_{D2}} = \sqrt{k/2}\,V_{in}$; squaring and using $I_{D1} + I_{D2} = I_{SS}$ gives the standard characteristic

$$\Delta I = I_{D1} - I_{D2} = \tfrac12k\,V_{in}\sqrt{\frac{4I_{SS}}{k} - V_{in}^2}.$$

With $I_{SS} = 2I$ and $I = \tfrac12kV_{ov}^2$, $4I_{SS}/k = 8I/k = 4V_{ov}^2$, so

$$\Delta I = \tfrac12kV_{in}\sqrt{4V_{ov}^2 - V_{in}^2} = kV_{ov}V_{in}\sqrt{1 - \frac{V_{in}^2}{4V_{ov}^2}}.$$

$\Delta I(-V_{in}) = -\Delta I(V_{in})$: an odd function has only odd powers of $V_{in}$, so a sinusoidal input produces **no even harmonics** (no HD2). Since $I_{D1} + I_{D2} = I_{SS}$ is constant, each drain current is $I \pm \Delta I/2$, so even the single-ended currents are free of even harmonics in this ideal, symmetric circuit.

### Step 3 — Third-order expansion

For $V_{in} \ll 2V_{ov}$, $\sqrt{1 - u} \approx 1 - u/2$ with $u = V_{in}^2/(4V_{ov}^2)$:

$$\Delta I \approx kV_{ov}V_{in}\left(1 - \frac{V_{in}^2}{8V_{ov}^2}\right) = kV_{ov}V_{in} - \frac{k}{8V_{ov}}V_{in}^3 .$$

The first term is $g_mV_{in}$ with $g_m = kV_{ov}$; the cubic term compresses the output.

### Step 4 — Harmonics for $V_{in} = V_m\cos\omega t$

With $\cos^3\theta = \tfrac34\cos\theta + \tfrac14\cos3\theta$:

$$
\begin{aligned}
\Delta I &\approx kV_{ov}V_m\cos\omega t - \frac{k}{8V_{ov}}V_m^3\left(\tfrac34\cos\omega t + \tfrac14\cos3\omega t\right)\\
&= kV_{ov}V_m\left(1 - \frac{3V_m^2}{32V_{ov}^2}\right)\cos\omega t - \frac{kV_m^3}{32V_{ov}}\cos3\omega t .
\end{aligned}
$$

Neglecting the small reduction of the fundamental,

$$\mathrm{HD3} \approx \frac{kV_m^3/(32V_{ov})}{kV_{ov}V_m} = \frac{V_m^2}{32\,V_{ov}^2}.$$

The differential output $V_{out} = -R_D\,\Delta I$ is linear in $\Delta I$, so it has the same HD3.

### Step 5 — Numbers for the given design

$V_m = 100$ mV is the peak of the *differential* input (±50 mV per gate if driven symmetrically):

$$
\begin{aligned}
V_m^2 &= (0.1\ \mathrm{V})^2 = 0.01\ \mathrm{V^2},\\
32V_{ov}^2 &= 32\times0.1866\ \mathrm{V^2} = 5.97\ \mathrm{V^2},\\
\mathrm{HD3} &\approx \frac{0.01}{5.97} = 1.68\times10^{-3} = 0.17\ \%.
\end{aligned}
$$

The exact square-law characteristic, evaluated numerically, gives 0.169 %, and the fifth harmonic is only about $10^{-6}$ of the fundamental. HD2 = 0, so THD ≈ HD3 ≈ 0.17 %.

### Step 6 — Doubling $W/L$ or $I$

Since $V_{ov}^2 = 2I/(\mu_nC_{ox}W/L)$,

$$\mathrm{HD3} \approx \frac{V_m^2}{32V_{ov}^2} = \frac{V_m^2\,\mu_nC_{ox}(W/L)}{64\,I} \propto \frac{W/L}{I}.$$

**Doubling $W/L$** (80, $I = 0.5$ mA): $V_{ov} = \sqrt{2(0.5\ \mathrm{mA})/(10.72\ \mathrm{mA/V^2})} = 0.305$ V, $V_{ov}^2 = 0.0933\ \mathrm{V^2}$:

$$\mathrm{HD3} \approx \frac{0.01}{32\times0.0933} = 0.335\ \%\quad(\text{doubles; } 0.34\ \%\ \text{exact}).$$

**Doubling $I$** (1 mA per device, $I_{SS} = 2$ mA): $V_{ov} = \sqrt{2(1\ \mathrm{mA})/(5.36\ \mathrm{mA/V^2})} = 0.611$ V, $V_{ov}^2 = 0.373\ \mathrm{V^2}$:

$$\mathrm{HD3} \approx \frac{0.01}{32\times0.373} = 0.084\ \%\quad(\text{halves}).$$

| case | $V_{ov}$ | HD2 | HD3 |
|---|---|---|---|
| $W/L = 40$, $I = 0.5$ mA | 0.432 V | 0 | 0.17 % |
| $2\times W/L$ | 0.305 V | 0 | 0.34 % |
| $2\times I$ | 0.611 V | 0 | 0.084 % |

A common-source stage with the same device and current, driven by 100 mV, has HD2 $= V_m/(4V_{ov}) \approx 5.8\ \%$. The pair is far more linear because symmetry cancels the quadratic terms, leaving a third-order error that scales with the *square* of $V_m/V_{ov}$.

### Result

The symmetric pair has an odd characteristic, so there are **no even harmonics**; the third harmonic dominates:

$$\mathrm{HD3} \approx \frac{V_m^2}{32\,(V_{GS} - V_{TH})^2} = \frac{0.01}{32\times0.1866} \approx 0.17\ \%,$$

with $V_{GS} - V_{TH} = 0.432$ V at equilibrium. Doubling $W/L$ doubles HD3 (≈ 0.34 %); doubling $I$ (and $I_{SS}$) halves it (≈ 0.084 %), since $\mathrm{HD3} \propto (W/L)/I$.

**Common mistake.** Reporting a second harmonic by analogy with a single square-law transistor. The quadratic terms of $M_1$ and $M_2$ cancel in $I_{D1} - I_{D2}$ (and the constant tail current cancels them even in each single-ended current), so with perfect symmetry HD2 is zero.

**Common mistake.** Using the wrong coefficient (e.g. $V_m^2/(8V_{ov}^2)$, which forgets the $\tfrac14$ from $\cos^3\theta$), or applying 100 mV to each gate (200 mV differential), which gives four times the distortion (0.67 %).
