# Detailed solution - R525

**Approach.** The gray region is the set of $(I_D, g_m)$ points whose ratio $g_m/I_D$ exceeds the largest value any MOSFET can reach. That largest value occurs in weak inversion and equals $1/(\xi V_T)$, so the edge of the gray region is the straight line $g_m = I_D/(\xi V_T)$ through the origin. Changing $\xi$ changes the slope of this line, and the region changes accordingly. Strong inversion only affects where a given device's curve leaves that line.

### Step 1 — Why the boundary is a straight line through the origin

Any operating point of a transistor can be **scaled**. Put $k$ identical devices in parallel (equivalently, multiply $W$ by $k$) and bias them at $k$ times the current: every device keeps its terminal voltages, so both $I_D$ and $g_m$ are multiplied by $k$, and the ratio $g_m/I_D$ stays the same. In the $(I_D, g_m)$ plane, scaling moves a point along a straight line through the origin. This is the dotted line in the figure, which takes a point of the device curve out to $(I_{D1}, g_{m1})$.

Consequently, a combination $(I_D, g_m)$ is achievable if and only if its ratio $g_m/I_D$ can be reached by *some* bias of the device. The "transconductance efficiency" $g_m/I_D$ is largest in weak inversion (subthreshold), where the drain current is exponential in $V_{GS}$:

$$I_D \propto \exp\frac{V_{GS}}{\xi V_T} \quad\Longrightarrow\quad g_m = \frac{\partial I_D}{\partial V_{GS}} = \frac{I_D}{\xi V_T},\qquad \frac{g_m}{I_D} = \frac{1}{\xi V_T}.$$

Here $V_T = kT/q \approx 26$ mV is the thermal voltage and $\xi$ is the subthreshold slope factor. In strong inversion the ratio is smaller (e.g. $2/(V_{GS} - V_{TH})$ for the square law, which falls below $1/(\xi V_T)$ once the overdrive exceeds about $2\xi V_T$).

Therefore the **gray (unachievable) region** is the wedge between the $g_m$ axis and the line

$$g_m = \frac{I_D}{\xi V_T},$$

i.e. all points with $g_m/I_D > 1/(\xi V_T)$.

### Step 2 — Boundary slope for $\xi = 1.5$

$$\left.\frac{g_m}{I_D}\right|_{max} = \frac{1}{\xi V_T} = \frac{1}{1.5\times26\ \mathrm{mV}} = \frac{1}{39\ \mathrm{mV}} = 25.6\ \mathrm{V^{-1}}.$$

At $I_D = 1$ mA, the largest possible transconductance is $25.6\ \mathrm{V^{-1}}\times1\ \mathrm{mA} = 25.6$ mS.

### Step 3 — Boundary slope for $\xi = 1.0$

$$\left.\frac{g_m}{I_D}\right|_{max} = \frac{1}{1.0\times26\ \mathrm{mV}} = 38.5\ \mathrm{V^{-1}}.$$

The slope of the boundary line increases by the factor

$$\frac{38.5}{25.6} = \frac{1.5}{1.0} = 1.5 .$$

| $I_D$ | max $g_m$, $\xi = 1.5$ | max $g_m$, $\xi = 1.0$ |
|---|---|---|
| 10 µA | 0.26 mS | 0.38 mS |
| 100 µA | 2.56 mS | 3.85 mS |
| 1 mA | 25.6 mS | 38.5 mS |

**Effect on the gray region.** The boundary line rotates **toward the $g_m$ axis** (it becomes steeper), so the gray wedge between it and the axis becomes **narrower**: the unachievable region shrinks. All points with $25.6\ \mathrm{V^{-1}} < g_m/I_D < 38.5\ \mathrm{V^{-1}}$, previously impossible, become achievable. For example, a device biased at 1 mA can now provide up to 38.5 mS instead of 25.6 mS.

### Step 4 — What happens to the device curve itself

Strong inversion is unchanged (as stated), so the upper, bending part of the curve stays where it is. Only the weak-inversion segment changes: it is now the steeper line $g_m = I_D/V_T$. It therefore meets the unchanged strong-inversion curve at a **lower** current and transconductance.

For a quantitative picture, take a square-law strong-inversion curve $g_m = \sqrt{2\beta I_D}$, with $\beta = \mu_nC_{ox}W/L$ ($\mu_n$ the electron mobility, $C_{ox}$ the oxide capacitance per unit area). The corner where the two laws meet:

$$\sqrt{2\beta I_D} = \frac{I_D}{\xi V_T} \quad\Longrightarrow\quad 2\beta I_D = \frac{I_D^2}{(\xi V_T)^2} \quad\Longrightarrow\quad I_{D,c} = 2\beta(\xi V_T)^2 .$$

- Going from $\xi = 1.5$ to $1.0$ multiplies $I_{D,c}$ by $(1.0/1.5)^2 = 4/9 \approx 0.44$.
- The corner transconductance $g_{m,c} = I_{D,c}/(\xi V_T) = 2\beta\xi V_T$ falls by the factor $2/3$.
- The overdrive at the corner, from $2I_D/V_{ov} = I_D/(\xi V_T)$, is $V_{ov,c} = 2\xi V_T$, which falls from $2\times1.5\times26 = 78$ mV to $2\times26 = 52$ mV.

So the device's curve hugs a steeper straight line for a shorter stretch before bending over onto the same strong-inversion curve.

### Step 5 — Physical meaning of $\xi$ and its limit

In weak inversion the gate controls the surface potential through a capacitive divider between the oxide capacitance $C_{ox}$ and the depletion capacitance $C_{dep}$, so $\xi = 1 + C_{dep}/C_{ox} \ge 1$. The subthreshold swing is $S = \xi V_T\ln10$:
- $\xi = 1.5$: $S = 1.5\times26\ \mathrm{mV}\times2.303 = 90$ mV/decade;
- $\xi = 1.0$: $S = 60$ mV/decade, the ideal limit at room temperature (perfect gate control of the surface potential).

Thus $\xi = 1$ is the best a conventional MOSFET can do: the gray region cannot shrink any further. Its boundary $g_m/I_D = q/(kT)$ is the same as for a bipolar transistor.

### Result

The unachievable (gray) region **shrinks**. Its boundary is the weak-inversion line $g_m = I_D/(\xi V_T)$, the largest $g_m/I_D$ any device can reach (with a large enough $W/L$, deep in weak inversion). With $\xi = 1.0$ the slope of that line rises by 1.5 times, from $1/(1.5\times26\ \mathrm{mV}) \approx 25.6\ \mathrm{V^{-1}}$ to $1/(26\ \mathrm{mV}) \approx 38.5\ \mathrm{V^{-1}}$, so the line rotates toward the $g_m$ axis and the wedge narrows. Points with $g_m/I_D$ between about 26 and 38 V⁻¹ become achievable; at 1 mA the maximum $g_m$ rises from about 26 mS to 38.5 mS.

The strong-inversion part of the curve does not move. For a given device, the steeper weak-inversion segment meets it at a lower current (4/9 of the previous corner current for a square-law device) and a lower overdrive (52 mV instead of 78 mV). $\xi = 1$ (60 mV/decade) is the physical limit, so the region cannot shrink further.

**Common mistake.** Concluding that the gray region grows. A smaller $\xi$ means a *larger* $g_m/I_D = 1/(\xi V_T)$, i.e. a *steeper* boundary line. More combinations become possible, not fewer.

**Common mistake.** Moving the strong-inversion curve as well. The problem states that strong-inversion behaviour is unchanged. $\xi$ only governs the subthreshold exponential, so only the weak-inversion straight segment (and with it the gray boundary) changes.

**Common mistake.** Thinking that the boundary depends on the particular device size. Because any point can be scaled along a line through the origin by changing $W$ and $I_D$ together, the boundary is set by the *ratio* $g_m/I_D$ alone, and it is the same straight line for every device.
