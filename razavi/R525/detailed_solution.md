# Detailed solution - R525

**Approach.** The gray region contains the $(I_D, g_m)$ points whose ratio $g_m/I_D$ exceeds the largest value any MOSFET can reach, $1/(\xi V_T)$ in weak inversion. Its edge is therefore the line $g_m = I_D/(\xi V_T)$ through the origin, whose slope changes with $\xi$. Strong inversion only affects where a given device's curve leaves that line.

### Step 1 — Why the boundary is a straight line through the origin

Putting $k$ identical devices in parallel at $k$ times the current multiplies both $I_D$ and $g_m$ by $k$ at the same terminal voltages, so any operating point can be moved along a line through the origin (the dotted line in the figure, which takes a point of the device curve out to $(I_{D1}, g_{m1})$). A combination is thus achievable if and only if its ratio $g_m/I_D$ can be reached at *some* bias. That ratio is largest in weak inversion, $g_m/I_D = 1/(\xi V_T)$; in strong inversion it is smaller (e.g. $2/(V_{GS} - V_{TH})$ for the square law, below $1/(\xi V_T)$ once the overdrive exceeds about $2\xi V_T$).

The **gray region** is therefore the wedge between the $g_m$ axis and the line

$$g_m = \frac{I_D}{\xi V_T},$$

i.e. all points with $g_m/I_D > 1/(\xi V_T)$.

### Step 2 — Boundary slope for $\xi = 1.5$ and $\xi = 1.0$

$$\left.\frac{g_m}{I_D}\right|_{max,\ \xi = 1.5} = \frac{1}{1.5\times26\ \mathrm{mV}} = \frac{1}{39\ \mathrm{mV}} = 25.6\ \mathrm{V^{-1}},\qquad
\left.\frac{g_m}{I_D}\right|_{max,\ \xi = 1.0} = \frac{1}{1.0\times26\ \mathrm{mV}} = 38.5\ \mathrm{V^{-1}}.$$

The slope of the boundary rises by the factor

$$\frac{38.5}{25.6} = \frac{1.5}{1.0} = 1.5 .$$

| $I_D$ | max $g_m$, $\xi = 1.5$ | max $g_m$, $\xi = 1.0$ |
|---|---|---|
| 10 µA | 0.26 mS | 0.38 mS |
| 100 µA | 2.56 mS | 3.85 mS |
| 1 mA | 25.6 mS | 38.5 mS |

The boundary line rotates **toward the $g_m$ axis**, so the gray wedge becomes **narrower**: the unachievable region shrinks. All points with $25.6\ \mathrm{V^{-1}} < g_m/I_D < 38.5\ \mathrm{V^{-1}}$ become achievable; a device at 1 mA can now provide up to 38.5 mS instead of 25.6 mS.

### Step 3 — What happens to the device curve itself

Strong inversion is unchanged, so only the weak-inversion segment moves, to the steeper line $g_m = I_D/V_T$, and it meets the strong-inversion curve at a **lower** current and transconductance. For a square-law strong-inversion curve $g_m = \sqrt{2\beta I_D}$ ($\beta = \mu_nC_{ox}W/L$), the corner is at

$$\sqrt{2\beta I_D} = \frac{I_D}{\xi V_T} \quad\Longrightarrow\quad 2\beta I_D = \frac{I_D^2}{(\xi V_T)^2} \quad\Longrightarrow\quad I_{D,c} = 2\beta(\xi V_T)^2 .$$

- Going from $\xi = 1.5$ to $1.0$ multiplies $I_{D,c}$ by $(1.0/1.5)^2 = 4/9 \approx 0.44$.
- The corner transconductance $g_{m,c} = I_{D,c}/(\xi V_T) = 2\beta\xi V_T$ falls by the factor $2/3$.
- The corner overdrive, from $2I_D/V_{ov} = I_D/(\xi V_T)$, is $V_{ov,c} = 2\xi V_T$, which falls from $2\times1.5\times26 = 78$ mV to $2\times26 = 52$ mV.

The curve follows a steeper straight line for a shorter stretch before bending onto the same strong-inversion curve.

### Step 4 — The limit $\xi = 1$

$\xi = 1 + C_{dep}/C_{ox} \ge 1$, and the subthreshold swing is $S = \xi V_T\ln10$:
- $\xi = 1.5$: $S = 1.5\times26\ \mathrm{mV}\times2.303 = 90$ mV/decade;
- $\xi = 1.0$: $S = 60$ mV/decade, the ideal limit at room temperature.

So the gray region cannot shrink further than at $\xi = 1$, where its boundary $g_m/I_D = q/(kT)$ equals that of a bipolar transistor.

### Result

The unachievable (gray) region **shrinks**. Its boundary is the weak-inversion line $g_m = I_D/(\xi V_T)$, the largest $g_m/I_D$ any device can reach (with a large enough $W/L$, deep in weak inversion). With $\xi = 1.0$ the slope of that line rises by 1.5 times, from $1/(1.5\times26\ \mathrm{mV}) \approx 25.6\ \mathrm{V^{-1}}$ to $1/(26\ \mathrm{mV}) \approx 38.5\ \mathrm{V^{-1}}$, so the line rotates toward the $g_m$ axis and the wedge narrows. Points with $g_m/I_D$ between about 26 and 38 V⁻¹ become achievable; at 1 mA the maximum $g_m$ rises from about 26 mS to 38.5 mS.

The strong-inversion part of the curve does not move. For a given device, the steeper weak-inversion segment meets it at a lower current (4/9 of the previous corner current for a square-law device) and a lower overdrive (52 mV instead of 78 mV). $\xi = 1$ (60 mV/decade) is the physical limit, so the region cannot shrink further.

**Common mistake.** Concluding that the gray region grows. A smaller $\xi$ means a *larger* $g_m/I_D = 1/(\xi V_T)$, i.e. a *steeper* boundary, so more combinations become possible.

**Common mistake.** Moving the strong-inversion curve as well. $\xi$ only governs the subthreshold exponential, so only the weak-inversion segment (and with it the gray boundary) changes.

**Common mistake.** Thinking that the boundary depends on the device size. Scaling $W$ and $I_D$ together moves any point along a line through the origin, so the boundary depends on $g_m/I_D$ alone.
