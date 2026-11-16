# Detailed solution - R518

**Approach.** Hold the overdrive $V_{ov} = V_{GS} - V_{TH}$ fixed and write $g_m$ and $I_D$ as functions of $W/L$ through $\beta \propto W/L$. Both turn out proportional to $W/L$, so the sketch is two straight lines through the origin, as in the square-law figure (where $I_D = \tfrac12\mu_nC_{ox}\tfrac WL V_{ov}^2$ and $g_m = \mu_nC_{ox}\tfrac WL V_{ov}$), but with a different ratio between them.

### Step 1 — The hypothetical device's laws in terms of $W/L$

Write $\beta = k\,W/L$, with $k$ (in A/V³) a process constant independent of the geometry. Then

$$g_m = k\,V_{ov}^2\cdot\frac WL,\qquad I_D = \frac{k}{3}\,V_{ov}^3\cdot\frac WL .$$

With $V_{ov}$ constant:
- $g_m$ is **proportional** to $W/L$: a straight line through the origin with slope $kV_{ov}^2$;
- $I_D$ is **proportional** to $W/L$: a straight line through the origin with slope $kV_{ov}^3/3$.

### Step 2 — The ratio between the two lines

$$\frac{g_m}{I_D} = \frac{kV_{ov}^2}{kV_{ov}^3/3} = \frac{3}{V_{ov}} ,$$

independent of $W/L$, against $2/V_{ov}$ for the square law. The only difference from the figure is the relative steepness of the two lines: at the same overdrive, the hypothetical device delivers 1.5 times more $g_m$ per unit current.

### Step 3 — Example values for the sketch

Take $V_{ov} = 0.2$ V and $k = 0.24\ \mathrm{mA/V^3}$. The slopes are

$$
\begin{aligned}
kV_{ov}^2 &= 0.24\ \mathrm{mA/V^3}\times0.04\ \mathrm{V^2} = 9.6\ \mu\mathrm{S}\ \text{per unit } W/L,\\
\frac{k}{3}V_{ov}^3 &= 0.08\ \mathrm{mA/V^3}\times0.008\ \mathrm{V^3} = 0.64\ \mu\mathrm{A}\ \text{per unit } W/L .
\end{aligned}
$$

| $W/L$ | 0 | 25 | 50 | 100 |
|---|---|---|---|---|
| $g_m$ (plotted upward) | 0 | 0.24 mS | 0.48 mS | 0.96 mS |
| $I_D$ (plotted downward) | 0 | 16 µA | 32 µA | 64 µA |
| $g_m/I_D$ | — | 15 V⁻¹ | 15 V⁻¹ | 15 V⁻¹ |

$g_m/I_D = 15\ \mathrm{V^{-1}} = 3/(0.2\ \mathrm{V})$ at every point.

**The sketch.** On the figure's axes, a straight line from the origin rising with slope $kV_{ov}^2$ above the $W/L$ axis ($g_m$), and one falling with slope $kV_{ov}^3/3$ below it ($I_D$). Neither has curvature, offset or saturation; doubling $W/L$ doubles both.

### Step 4 — Why the shapes do not depend on the device law

At a fixed overdrive (and constant $L$), a transistor of width $2W$ is two transistors of width $W$ in parallel. Any law $I_D = (W/L)\,f(V_{ov})$ therefore gives $I_D \propto W/L$ and $g_m = (W/L)\,f'(V_{ov}) \propto W/L$; the law only sets the slopes. Plots at **constant $I_D$** or at **constant $W/L$** would look different, but the figure holds $V_{ov}$ constant.

### Result

With $\beta = kW/L$ and $V_{GS} - V_{TH}$ constant,

$$g_m = k\,(V_{GS} - V_{TH})^2\,\frac WL \propto \frac WL,\qquad I_D = \frac k3\,(V_{GS} - V_{TH})^3\,\frac WL \propto \frac WL .$$

Both plots are **straight lines through the origin**, the same shapes as for the square-law device: $g_m$ rising (upward) and $I_D$ growing (plotted downward), both linearly with $W/L$. Their ratio is fixed at $g_m/I_D = 3/(V_{GS} - V_{TH})$, against $2/(V_{GS} - V_{TH})$ for the square law.

**Common mistake.** Drawing $g_m$ as a nonlinear function of $W/L$, for example $g_m \propto (W/L)^{1/3}$ by misusing $g_m = \sqrt[3]{9\beta I_D^2}$. That form applies at constant current; here the overdrive is constant, so $g_m = \beta V_{ov}^2 \propto W/L$.

**Common mistake.** Drawing $I_D$ as independent of $W/L$. At a fixed overdrive a wider device is more devices in parallel, so its current is proportional to $W/L$.
