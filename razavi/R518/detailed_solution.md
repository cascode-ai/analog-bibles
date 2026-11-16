# Detailed solution - R518

**Approach.** Hold the overdrive $V_{ov} = V_{GS} - V_{TH}$ fixed and write $g_m$ and $I_D$ explicitly as functions of $W/L$ through $\beta \propto W/L$. Both turn out to be proportional to $W/L$, so the sketch consists of two straight lines through the origin, like the square-law figure but with a different ratio between them.

### Step 1 — Recall the square-law picture in the figure

For a long-channel square-law device in saturation,

$$I_D = \tfrac12\mu_nC_{ox}\frac WL V_{ov}^2,\qquad g_m = \mu_nC_{ox}\frac WL V_{ov},$$

where $\mu_n$ is the electron mobility and $C_{ox}$ the gate-oxide capacitance per unit area. With $V_{ov}$ constant, both are a constant times $W/L$. This is why the figure shows two straight lines through the origin, $g_m$ upward and $I_D$ downward.

### Step 2 — Write the hypothetical device's laws in terms of $W/L$

The transconductance is given as $g_m = \beta V_{ov}^2$, and integrating it with $I_D = 0$ at threshold gives $I_D = \beta V_{ov}^3/3$.

$\beta$ is proportional to the aspect ratio. Write

$$\beta = k\,\frac WL ,$$

where $k$ (in A/V³) is a process constant independent of the geometry. Substituting:

$$g_m = k\,V_{ov}^2\cdot\frac WL,\qquad I_D = \frac{k}{3}\,V_{ov}^3\cdot\frac WL .$$

With $V_{ov}$ held constant, $kV_{ov}^2$ and $kV_{ov}^3/3$ are constants. Therefore:

- $g_m$ is **proportional** to $W/L$: a straight line through the origin with slope $kV_{ov}^2$;
- $I_D$ is **proportional** to $W/L$: a straight line through the origin with slope $kV_{ov}^3/3$.

### Step 3 — The ratio between the two lines

Dividing the two expressions, $W/L$ and $k$ cancel:

$$\frac{g_m}{I_D} = \frac{kV_{ov}^2}{kV_{ov}^3/3} = \frac{3}{V_{ov}} .$$

This ratio is independent of $W/L$. For the square-law device the corresponding ratio is $2/V_{ov}$. So the only difference from the figure is the relative steepness of the two lines: at the same overdrive, the hypothetical device delivers 1.5 times more $g_m$ per unit of current.

### Step 4 — Example values for the sketch

Take, for illustration, $V_{ov} = 0.2$ V and $k = 0.24\ \mathrm{mA/V^3}$. Then the slopes are

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

$g_m/I_D = 15\ \mathrm{V^{-1}} = 3/(0.2\ \mathrm{V})$ at every point, as expected.

**The sketch.** Same axes as the figure:
- above the horizontal $W/L$ axis, a straight line from the origin rising with slope $kV_{ov}^2$ ($g_m$);
- below it, a straight line from the origin falling with slope $kV_{ov}^3/3$ ($I_D$).

There is no curvature, offset or saturation in either line. Doubling $W/L$ doubles both $g_m$ and $I_D$.

### Step 5 — Why the shapes do not depend on the device law

At a fixed overdrive, every gate-length segment of a wide transistor sees the same $V_{GS}$ and $V_{DS}$. A transistor of width $2W$ therefore behaves exactly like two transistors of width $W$ in parallel: it carries twice the current and has twice the transconductance. (A constant $L$ is assumed, so that $W/L$ changes through $W$.) Any law of the form $I_D = (W/L)\,f(V_{ov})$ therefore gives $I_D \propto W/L$ and $g_m = (W/L)\,f'(V_{ov}) \propto W/L$. The particular law ($V_{ov}^2$, $V_{ov}^3$, ...) only sets the slopes of the two lines, not their linear shape.

This is different from plots made at **constant $I_D$** (then $g_m$ grows as a power of $W/L$) or at **constant $W/L$** (then $g_m$ and $I_D$ vary nonlinearly with $V_{ov}$). The figure specifically holds $V_{ov}$ constant.

### Result

With $\beta = kW/L$ and $V_{GS} - V_{TH}$ constant,

$$g_m = k\,(V_{GS} - V_{TH})^2\,\frac WL \propto \frac WL,\qquad I_D = \frac k3\,(V_{GS} - V_{TH})^3\,\frac WL \propto \frac WL .$$

Both plots are **straight lines through the origin**, the same shapes as for the square-law device: $g_m$ rising (upward) and $I_D$ growing (plotted downward), both linearly with $W/L$. Their ratio is fixed at $g_m/I_D = 3/(V_{GS} - V_{TH})$, against $2/(V_{GS} - V_{TH})$ for the square law.

**Common mistake.** Drawing $g_m$ as a nonlinear function of $W/L$, for example $g_m \propto (W/L)^{1/3}$ by misusing $g_m = \sqrt[3]{9\beta I_D^2}$. That expression is useful at constant current. Here the overdrive is held constant, so $I_D$ itself grows with $W/L$, and $g_m = \beta V_{ov}^2$ is simply proportional to $\beta \propto W/L$.

**Common mistake.** Drawing $I_D$ as independent of $W/L$. At a fixed overdrive a wider device is just more devices in parallel, so its current increases in proportion to $W/L$.
