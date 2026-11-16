# Detailed solution - R606

**Approach.** At fixed $W/L$ and $R_D$, the bias current $I$ (per transistor) sets $V_{ov}$ and $g_m$ of $M_1$, $M_2$. Express the distortion of the symmetric pair (odd harmonics only, the third dominant) through $V_{ov}$, the input-referred noise of the two halves through $g_m$, and the power through the tail current $2I$; their $I$-dependence gives the curves and the trade-offs.

### Step 1 — $V_{ov}$, $g_m$ and power versus $I$

At balance each transistor carries $I$, so from $I = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$:

$$V_{ov} = \sqrt{\frac{2I}{\mu_nC_{ox}W/L}} \;\propto\; I^{1/2}, \qquad g_m = \sqrt{2\mu_nC_{ox}(W/L)\,I} \;\propto\; I^{1/2}.$$

The supply delivers $I_{SS} = 2I$, so $P = 2V_{DD}I \propto I$.

### Step 2 — Distortion versus $I$

With $k = \mu_nC_{ox}W/L$ and $I_{SS} = 2I$ (so $4I_{SS}/k = 4V_{ov}^2$), the square-law pair obeys

$$\Delta I = I_{D1} - I_{D2} = \tfrac12kV_{in}\sqrt{4V_{ov}^2 - V_{in}^2} = kV_{ov}V_{in}\sqrt{1 - \frac{V_{in}^2}{4V_{ov}^2}},$$

an **odd** function of $V_{in}$, so all even harmonics cancel. Expanding $\sqrt{1 - u} \approx 1 - u/2$ with $u = V_{in}^2/(4V_{ov}^2)$:

$$\Delta I \approx kV_{ov}V_{in} - \frac{k}{8V_{ov}}V_{in}^3 .$$

For $V_{in} = V_m\cos\omega t$, $\cos^3\theta = \tfrac34\cos\theta + \tfrac14\cos3\theta$ gives a third harmonic $\dfrac{k}{8V_{ov}}V_m^3\cdot\dfrac14 = \dfrac{kV_m^3}{32V_{ov}}$ against a fundamental $\approx kV_{ov}V_m$:

$$\mathrm{THD} \approx \mathrm{HD3} = \frac{V_m^2}{32V_{ov}^2} = \frac{V_m^2\,\mu_nC_{ox}(W/L)}{64\,I} \;\propto\; \frac{1}{I}.$$

**Curve:** a hyperbola, steep at low current and flat at high current; doubling $I$ halves the THD. At very low current $V_{ov}$ approaches $V_m$, the pair nears full switching, the expansion fails and the distortion rises much faster.

### Step 3 — Input-referred thermal noise versus $I$

Each transistor injects $4kT\gamma g_m$ ($\gamma = 2/3$) and each $R_D$ $4kT/R_D$ into its output node; the tail-source noise is common-mode and cancels differentially. Each half is a CS stage of gain $g_mR_D$:

$$\overline{V_{n,in,half}^2} = \frac{(4kT\gamma g_m + 4kT/R_D)R_D^2}{(g_mR_D)^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right),$$

and the two uncorrelated halves add in power:

$$\overline{V_{n,in}^2} = 8kT\left(\frac{2}{3g_m} + \frac{1}{g_m^2R_D}\right).$$

With $g_m \propto I^{1/2}$, the transistor term falls as $I^{-1/2}$ (rms as $I^{-1/4}$) and the resistor term as $I^{-1}$.

**Curve:** monotonically decreasing, but more slowly than the THD.

### Step 4 — The three curves

Normalized to a starting current $I_0$:

| $I/I_0$ | 0.25 | 0.5 | 1 | 2 | 4 |
|---|---|---|---|---|---|
| THD (∝ $1/I$) | 4.0 | 2.0 | 1 | 0.50 | 0.25 |
| noise PSD, transistor term (∝ $I^{-1/2}$) | 2.0 | 1.41 | 1 | 0.71 | 0.50 |
| noise PSD, resistor term (∝ $I^{-1}$) | 4.0 | 2.0 | 1 | 0.50 | 0.25 |
| power (∝ $I$) | 0.25 | 0.5 | 1 | 2 | 4 |

### Step 5 — Trade-offs

**With power.** Doubling the power (2× $I$) halves HD3, since it depends on $(V_m/V_{ov})^2$ and $V_{ov}^2 \propto I$, but lowers the transistor noise PSD only by $\sqrt2$ (to 0.71×), since $g_m \propto \sqrt I$. With $g_mV_{ov} = 2I$, $(\overline{V_{n,in}^2})^2\cdot\mathrm{HD3} \propto 1/(g_m^2V_{ov}^2) \propto 1/I^2$: the combined figure improves with the square of the power.

**At fixed power.** With $I$ fixed, a larger $W/L$ lowers $V_{ov}$: the noise falls (larger $g_m$) but HD3 rises. Sizing trades noise against linearity, while current improves both.

**Versus a common-source stage.** A single transistor has HD2 $= V_m/(4V_{ov}) \propto I^{-1/2}$. The pair's distortion is much smaller and improves faster with current ($\propto 1/I$), but for the same $g_m$ per device it needs twice the current and has twice the input noise power (two noisy transistors and two resistors).

**Headroom.** With $R_D$ fixed, a larger $I$ lowers the drain bias $V_{DD} - IR_D$ while raising $V_{ov}$, eventually limiting the swing before the transistors leave saturation.

### Result

At fixed $W/L$ and $R_D$, increasing $I$ raises $V_{ov} \propto \sqrt I$ and $g_m \propto \sqrt I$:

- **THD** $\approx \mathrm{HD3} = V_m^2/(32V_{ov}^2) = V_m^2\mu_nC_{ox}(W/L)/(64I)$ **falls as $1/I$** (no even harmonics in the symmetric pair);
- **input-referred noise** $\overline{V_{n,in}^2} = 8kT\left[2/(3g_m) + 1/(g_m^2R_D)\right]$ **falls**, as $I^{-1/2}$ for the transistor term (rms $\propto I^{-1/4}$) and as $I^{-1}$ for the resistor term;
- **power** $P = 2V_{DD}I$ **rises linearly**.

Trade-off: linearity and noise improve only with more power; doubling the power halves HD3 but reduces the transistor noise PSD only by √2. At fixed power, noise and linearity trade against each other through $W/L$ (the overdrive). Compared with a CS stage, the pair offers much lower distortion that improves faster with current, at twice the power and twice the noise power for the same $g_m$.

**Common mistake.** Using the single-transistor law THD $\propto I^{-1/2}$ for the pair. The quadratic terms cancel; the remaining third-order term depends on $(V_m/V_{ov})^2$, so it falls as $1/I$.

**Common mistake.** Claiming that the input-referred noise rises with current because the noise current $4kT\gamma g_m$ grows, or that the pair has a second harmonic. The squared gain grows as $g_m^2$, so the input-referred noise goes as $g_m/g_m^2 = 1/g_m$ and falls, and with perfect symmetry the even harmonics are exactly zero.
