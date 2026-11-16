# Detailed solution - R619

**Approach.** The offset specification fixes the device width; the width and the 1-mA tail current fix the equilibrium overdrive; the overdrive sets the pair's linearity. Derive the third-harmonic distortion of a symmetric square-law pair, $\mathrm{HD_3} \approx V_m^2/[32(V_{GS} - V_{TH})^2]$, solve for the amplitude giving 1 % THD, and repeat for the 5-mV design to compare.

### Step 1 — Device width for $V_{OS} \le 2$ mV

With threshold mismatch alone, equal drain currents need equal overdrives, so the offset equals the threshold mismatch:

$$V_{OS} = \Delta V_{TH} = \frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} \le 2\ \mathrm{mV}.$$

Solve for the width:

$$
\begin{aligned}
\sqrt{WL} &\ge \frac{9\ \mathrm{mV\cdot\mu m}}{2\ \mathrm{mV}} = 4.5\ \mu\mathrm{m},\\
WL &\ge (4.5\ \mu\mathrm{m})^2 = 20.25\ \mu\mathrm{m}^2,\\
W &\ge \frac{20.25\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 40.5\ \mu\mathrm{m}.
\end{aligned}
$$

The pair uses the minimum width, so $W = 40.5\ \mu$m and $W/L = 81$.

### Step 2 — Bias point: overdrive and transconductance

With $\beta = \mu_nC_{ox}W/L$:

$$\beta = (134\ \mu\mathrm{A/V^2})(81) = 10.854\ \mathrm{mA/V^2}.$$

Each device carries $I_D = I_{SS}/2 = 0.5$ mA at equilibrium, so from $I_D = \tfrac12\beta V_{ov}^2$:

$$V_{ov} = \sqrt{\frac{2I_D}{\beta}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{10.854\ \mathrm{mA/V^2}}} = \sqrt{0.09213\ \mathrm{V^2}} = 0.304\ \mathrm{V},$$

$$g_m = \beta V_{ov} = (10.854\ \mathrm{mA/V^2})(0.304\ \mathrm{V}) = 3.29\ \mathrm{mS}.$$

Note that $I_{SS} = 2I_D = \beta V_{ov}^2$, i.e. $I_{SS}/\beta = V_{ov}^2$.

### Step 3 — Large-signal characteristic and its power series

Let $\Delta V = V_{in1} - V_{in2}$ and $\Delta I = I_{D1} - I_{D2}$, with saturated devices and $\lambda = 0$. The shared source gives $\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$; squaring twice, with $I_{D1} + I_{D2} = I_{SS}$ and $4I_{D1}I_{D2} = I_{SS}^2 - \Delta I^2$, gives the standard characteristic

$$\Delta I = \frac{\beta}{2}\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2}.$$

With $I_{SS}/\beta = V_{ov}^2$ and $g_m = \beta V_{ov}$:

$$\Delta I = g_m\,\Delta V\sqrt{1 - \frac{\Delta V^2}{4V_{ov}^2}} .$$

Expand with $\sqrt{1 - u} = 1 - u/2 - u^2/8 - \dots$, where $u = \Delta V^2/(4V_{ov}^2)$:

$$\Delta I = g_m\left[\Delta V - \frac{\Delta V^3}{8V_{ov}^2} - \frac{\Delta V^5}{128\,V_{ov}^4} - \dots\right].$$

The symmetric pair's characteristic is odd, $\Delta I(-\Delta V) = -\Delta I(\Delta V)$, so **even harmonics cancel** and the third harmonic dominates.

### Step 4 — Third-harmonic distortion for a sinusoid

With $\Delta V = V_m\cos\omega t$ and $\cos^3\omega t = \tfrac34\cos\omega t + \tfrac14\cos3\omega t$:

$$\Delta I \approx g_mV_m\left(1 - \frac{3V_m^2}{32V_{ov}^2}\right)\cos\omega t - g_m\frac{V_m^3}{32V_{ov}^2}\cos3\omega t .$$

Neglecting the small compression of the fundamental, and the fifth harmonic (smaller by another factor of order $(V_m/V_{ov})^2$):

$$\mathrm{THD} \approx \mathrm{HD_3} \approx \frac{V_m^2}{32V_{ov}^2}.$$

Setting $\mathrm{HD_3} = 0.01$:

$$
\begin{aligned}
V_m^2 &= 0.32\,V_{ov}^2,\\
V_m &= \sqrt{0.32}\,V_{ov} = 0.566\,V_{ov}.
\end{aligned}
$$

A numerical Fourier analysis of the exact characteristic (which includes the compression of the fundamental and the $\Delta V^5$ term) gives a slightly smaller ratio, $V_m = 0.551\,V_{ov}$.

### Step 5 — Maximum swing of the 2-mV design

$$V_m = 0.566\,V_{ov} = 0.566\times0.304\ \mathrm{V} = 0.172\ \mathrm{V}.$$

The exact characteristic gives $0.551\times0.304 = 0.167$ V, so the answer is **about 0.17 V peak** (0.34 V peak-to-peak). No device turns off, since $V_m$ is well below $\sqrt2\,V_{ov} = 0.43$ V.

### Step 6 — The same pair designed for $V_{OS} \le 5$ mV

Repeating Steps 1, 2 and 5 with 5 mV:

$$
\begin{aligned}
\sqrt{WL} &\ge 9/5 = 1.8\ \mu\mathrm{m}, \quad WL \ge 3.24\ \mu\mathrm{m}^2, \quad W = 6.48\ \mu\mathrm{m}, \quad W/L = 12.96,\\
\beta &= (134\ \mu\mathrm{A/V^2})(12.96) = 1.7366\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{1\ \mathrm{mA}}{1.7366\ \mathrm{mA/V^2}}} = \sqrt{0.5758\ \mathrm{V^2}} = 0.759\ \mathrm{V},\\
V_m &= 0.566\times0.759\ \mathrm{V} = 0.429\ \mathrm{V}\quad(0.418\ \mathrm{V\ exact}).
\end{aligned}
$$

### Step 7 — Comparison: the offset–linearity trade-off

The ratio of the two swings equals the ratio of the overdrives:

$$\frac{V_m(5\ \mathrm{mV})}{V_m(2\ \mathrm{mV})} = \frac{0.759}{0.304} = \sqrt{\frac{81}{12.96}} = \sqrt{6.25} = 2.5 .$$

At fixed $L$ and tail current, both the offset and the overdrive scale as $1/\sqrt{W}$:

$$V_{OS} = \frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} \propto \frac{1}{\sqrt W}, \qquad V_{ov} = \sqrt{\frac{I_{SS}}{\mu_nC_{ox}W/L}} \propto \frac{1}{\sqrt W}.$$

So **the 1 %-THD swing is proportional to the allowed offset**: $V_m/V_{OS} = 0.172\ \mathrm{V}/2\ \mathrm{mV} = 86$ and $0.429\ \mathrm{V}/5\ \mathrm{mV} = 86$. The wider (6.25 times) low-offset pair has a larger transconductance (3.29 mS versus 1.32 mS) but a smaller overdrive, hence a narrower linear range; only a larger tail current (more power) or a longer channel avoids the trade-off.

| Design | $W$ | $W/L$ | $V_{ov}$ | $g_m$ | $V_m$ for 1 % THD |
|---|---|---|---|---|---|
| $V_{OS} \le 5$ mV | 6.48 µm | 12.96 | 0.759 V | 1.32 mS | 0.43 V (0.418 V exact) |
| $V_{OS} \le 2$ mV | 40.5 µm | 81 | 0.304 V | 3.29 mS | 0.17 V (0.167 V exact) |

### Result

For the 2-mV design ($W = 40.5\ \mu$m, $V_{GS} - V_{TH} = 0.304$ V):

$$V_m \approx \sqrt{0.32}\,(V_{GS} - V_{TH}) \approx 0.17\ \mathrm{V}\ \text{peak differential}\quad (0.167\ \mathrm{V}\ \text{with the exact characteristic}).$$

The 5-mV design allows about 0.43 V (0.418 V exact), so the 2-mV pair's swing is **2.5 times smaller**. Lower offset requires larger devices, which lowers the overdrive at a given current and narrows the linear input range (offset–linearity trade-off).

**Common mistake.** Concluding that the tighter-offset design has a *larger* swing because its transconductance is higher. The linear range is set by the overdrive, which is smaller for the wider devices at the same current.

**Common mistake.** Using $\mathrm{HD_3} = V_m^2/(8V_{ov}^2)$, i.e. omitting the factor $\tfrac14$ of $\cos^3\omega t$. This halves the computed swing (0.086 V instead of 0.17 V).

**Common mistake.** Computing a second harmonic for the symmetric pair. Its odd characteristic produces only odd harmonics; the third harmonic sets the THD.
