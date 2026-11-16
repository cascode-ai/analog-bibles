# Detailed solution - R604

**Approach.** At fixed bias current, $W/L$ changes only the overdrive $V_{ov}$ and the transconductance $g_m$ of $M_1$ and $M_2$. We express the distortion of the symmetric pair (only odd harmonics; the third dominates) in terms of $V_{ov}$, and the input-referred noise (two transistors and two resistors) in terms of $g_m$. Substituting their $W/L$ dependence gives the two curves; combining them reveals the trade-off with power.

### Step 1 — $V_{ov}$ and $g_m$ versus $W/L$ at constant current

Each transistor carries $I$ at balance. From the square law $I = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$:

$$V_{ov} = \sqrt{\frac{2I}{\mu_nC_{ox}W/L}} \propto (W/L)^{-1/2}, \qquad g_m = \sqrt{2\mu_nC_{ox}(W/L)I} = \frac{2I}{V_{ov}} \propto (W/L)^{1/2}.$$

**Power:** the supply delivers the tail current $I_{SS} = 2I$, so $P = 2IV_{DD}$, independent of $W/L$.

### Step 2 — Distortion of the symmetric pair

The square-law pair has the large-signal characteristic (with $k = \mu_nC_{ox}W/L$ and $I_{SS} = 2I$, so that $4I_{SS}/k = 4V_{ov}^2$)

$$\Delta I = I_{D1} - I_{D2} = \tfrac12kV_{in}\sqrt{4V_{ov}^2 - V_{in}^2} = kV_{ov}V_{in}\sqrt{1 - \frac{V_{in}^2}{4V_{ov}^2}}.$$

It is **odd** in $V_{in}$ ($\Delta I(-V_{in}) = -\Delta I(V_{in})$), so it contains only odd powers of $V_{in}$ and a symmetric pair produces **no even harmonics**. Expanding with $\sqrt{1 - u} \approx 1 - u/2$:

$$\Delta I \approx kV_{ov}V_{in} - \frac{k}{8V_{ov}}V_{in}^3 .$$

For $V_{in} = V_m\cos\omega t$, use $\cos^3\theta = \tfrac34\cos\theta + \tfrac14\cos3\theta$. The third-harmonic amplitude is $\tfrac14\cdot\dfrac{k}{8V_{ov}}V_m^3 = \dfrac{kV_m^3}{32V_{ov}}$ and the fundamental is $\approx kV_{ov}V_m$, so

$$\mathrm{THD} \approx \mathrm{HD3} = \frac{kV_m^3/(32V_{ov})}{kV_{ov}V_m} = \frac{V_m^2}{32V_{ov}^2}.$$

Substituting $V_{ov}^2 = 2I/(\mu_nC_{ox}W/L)$:

$$\mathrm{THD} \approx \frac{V_m^2\,\mu_nC_{ox}(W/L)}{64\,I} \;\propto\; W/L .$$

**Curve:** a straight line through the origin; doubling $W/L$ doubles the THD. (Higher odd harmonics are much smaller, of order $(V_m/V_{ov})^4$.)

### Step 3 — Input-referred thermal noise

**Noise sources.** Each transistor has channel noise $\overline{I_{n,M}^2} = 4kT\gamma g_m$ ($\gamma = 2/3$), and each load resistor has $\overline{I_{n,R}^2} = 4kT/R_D$. The tail current source's noise splits equally between the two sides and is common-mode, so it does not appear in the differential output of a symmetric circuit.

**One half circuit.** For differential signals the common-source node is an AC ground, so each side behaves as a common-source stage with gain $g_mR_D$. Its noise currents flow through $R_D$; dividing the output noise by $(g_mR_D)^2$:

$$\overline{V_{n,in,half}^2} = \frac{\left(4kT\gamma g_m + 4kT/R_D\right)R_D^2}{g_m^2R_D^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right).$$

**Both halves.** The two sides contribute independent, equal noise, so their powers add:

$$\overline{V_{n,in}^2} = 2\times4kT\left(\frac{2}{3g_m} + \frac{1}{g_m^2R_D}\right) = 8kT\left(\frac{2}{3g_m} + \frac{1}{g_m^2R_D}\right).$$

**Dependence on $W/L$:** the transistor term $\propto 1/g_m \propto (W/L)^{-1/2}$ and the resistor term $\propto 1/g_m^2 \propto (W/L)^{-1}$.

**Curve:** monotonically falling; as $(W/L)^{-1/2}$ when the transistors dominate ($g_mR_D \gg 3/2$), so the rms noise voltage falls as $(W/L)^{-1/4}$.

### Step 4 — The curves side by side

Normalized to a reference design $(W/L)_0$:

| $W/L\,/\,(W/L)_0$ | 0.25 | 0.5 | 1 | 2 | 4 |
|---|---|---|---|---|---|
| THD (∝ $W/L$) | 0.25 | 0.5 | 1 | 2 | 4 |
| noise PSD, transistor term (∝ $(W/L)^{-1/2}$) | 2.0 | 1.41 | 1 | 0.71 | 0.50 |
| noise PSD, resistor term (∝ $(W/L)^{-1}$) | 4.0 | 2.0 | 1 | 0.50 | 0.25 |
| power ($2IV_{DD}$) | 1 | 1 | 1 | 1 | 1 |

THD rises linearly, noise falls, power stays flat. (Very large $W/L$ eventually drives the pair into weak inversion, where $g_m$ saturates at about $I/(\zeta V_T)$ and both curves level off; very small $W/L$ needs a large overdrive and eats into the saturation headroom.)

### Step 5 — Trade-offs

**Noise versus linearity at fixed power.** Widening the devices lowers the overdrive: the input noise falls, but the same $V_m$ now covers a larger fraction of the pair's linear range ($\approx \sqrt2V_{ov}$), so HD3 rises. Quantitatively, with the transistor term of the noise:

$$
\begin{aligned}
\left(\overline{V_{n,in}^2}\right)^2\cdot\mathrm{HD3} &= \left(\frac{16kT}{3g_m}\right)^2\cdot\frac{V_m^2}{32V_{ov}^2} = \frac{256\,k^2T^2}{9}\cdot\frac{V_m^2}{32\,(g_mV_{ov})^2}\\
&= \frac{8\,k^2T^2V_m^2}{9\,(2I)^2} = \frac{2\,k^2T^2V_m^2}{9\,I^2},
\end{aligned}
$$

using $g_mV_{ov} = 2I$. This combination **does not depend on $W/L$**: $W/L$ only slides the design along a fixed noise–linearity curve.

**Role of power.** The combination falls as $1/I^2$, so improving noise and linearity together requires more current, i.e. more power.

**Comparison with a single common-source stage** using the same device and bias current $I$:

- distortion: the CS stage has HD2 $= V_m/(4V_{ov})$, first order in $V_m/V_{ov}$; the pair cancels even harmonics, leaving HD3 $= V_m^2/(32V_{ov}^2)$, second order and therefore far smaller (for example 0.17 % versus 5.8 % at $V_m = 0.1$ V, $V_{ov} = 0.43$ V);
- noise: the pair has two noisy devices and two resistors in the signal path, so twice the input noise power;
- power: the pair draws $2I$, twice the CS stage.

### Result

At constant $I$ (constant power $2IV_{DD}$), increasing $W/L$ lowers $V_{ov} = \sqrt{2I/(\mu_nC_{ox}W/L)}$ and raises $g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$:

- **THD** $\approx \mathrm{HD3} = V_m^2/(32V_{ov}^2) = V_m^2\mu_nC_{ox}(W/L)/(64I)$ **rises linearly with $W/L$** (no even harmonics in the symmetric pair);
- **input-referred noise** $\overline{V_{n,in}^2} = 8kT\left[2/(3g_m) + 1/(g_m^2R_D)\right]$ **falls**, as $(W/L)^{-1/2}$ for the transistor term and $(W/L)^{-1}$ for the resistor term.

Trade-off: at a given power, lower noise (larger $W/L$, smaller overdrive) costs linearity and vice versa, since $(\overline{V_{n,in}^2})^2\cdot\mathrm{HD3} \propto 1/I^2$ is independent of $W/L$; only more current (more power) improves both. Compared with a CS stage of the same device and current, the pair is much more linear but costs twice the power and twice the noise power.

**Common mistake.** Claiming that the THD falls with $W/L$, or carrying over the $\sqrt{W/L}$ law of a single transistor. The pair's distortion is third order, $\propto 1/V_{ov}^2$, so it grows in direct proportion to $W/L$ at constant current.

**Common mistake.** Predicting a dominant second harmonic, or forgetting that the differential noise comes from *both* halves. Symmetry cancels the even-order terms, and the two sides' independent noise powers add, giving the factor $8kT$ rather than $4kT$.
