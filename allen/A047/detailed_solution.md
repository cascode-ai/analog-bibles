# Detailed solution - A047

Use the one given bias point to find the device constant of the saturation square law, then evaluate the law at the requested gate voltages and draw the curve to scale.

### Step 1 — Device constant from the given point

With $\lambda=0$, the square-law drain current of an n-channel transistor in saturation ($v_{GS}>V_T$, $v_{DS}\ge v_{GS}-V_T$) is

$$
i_D=\frac{K'W}{2L}\,(v_{GS}-V_T)^2,
$$

where $K'=\mu_nC_{ox}$ (A/V²) and $W/L$ is the aspect ratio. Neither is given separately, but their product follows from $I_D=500\ \mu\mathrm A$ at $V_{GS}=5$ V:

$$
\frac{K'W}{2L}=\frac{500\ \mu\mathrm A}{(5\ \mathrm V-0.7\ \mathrm V)^2}=\frac{500\ \mu\mathrm A}{18.49\ \mathrm{V^2}}=27.04\ \mu\mathrm{A/V^2},
\qquad \frac{K'W}{L}=54.08\ \mu\mathrm{A/V^2}.
$$

For $v_{GS}\le V_T=0.7$ V the transistor is off and $i_D=0$ (subthreshold current is outside the square-law model).

### Step 2 — Current at the requested gate voltages

Representative substitution at $V_{GS}=3$ V:

$$
i_D=27.04\ \mu\mathrm{A/V^2}\,(3\ \mathrm V-0.7\ \mathrm V)^2=27.04\ \mu\mathrm{A/V^2}\times5.29\ \mathrm{V^2}=143.1\ \mu\mathrm A .
$$

The slope of the characteristic is the transconductance $g_m=\partial i_D/\partial v_{GS}=2(27.04\ \mu\mathrm{A/V^2})(v_{GS}-0.7\ \mathrm V)$. The same formulas give:

| $V_{GS}$ (V) | $V_{GS}-V_T$ (V) | $i_D$ (µA) | $g_m$ (µA/V) |
|---|---|---|---|
| 1 | 0.3 | 2.43 | 16.2 |
| 2 | 1.3 | 45.7 | 70.3 |
| 3 | 2.3 | 143.1 | 124 |
| 4 | 3.3 | 294.5 | 178 |
| 5 | 4.3 | 500 | 233 |

### Step 3 — The characteristic to scale

![Transfer characteristic iD versus vGS in saturation: zero up to 0.7 V, then a parabola through 2.4, 45.7, 143, 294 and 500 µA at 1 to 5 V](/q/A047/solution-curves.svg)

The curve is zero up to $V_T=0.7$ V and then rises as a parabola. It leaves the axis with zero slope at 0.7 V (because $g_m\propto v_{GS}-V_T$), and it is convex for $v_{GS}>V_T$, since its second derivative $d^2i_D/dv_{GS}^2=2(27.04\ \mu\mathrm{A/V^2})$ is positive and constant: the slope grows linearly from 16 µA/V at 1 V to 233 µA/V at 5 V. Equivalently, $\sqrt{i_D}=\sqrt{27.04\ \mu\mathrm{A/V^2}}\,(v_{GS}-0.7\ \mathrm V)$ is a straight line whose intercept on the $v_{GS}$ axis is $V_T=0.7$ V. Each point assumes the drain voltage keeps the device saturated, $v_{DS}\ge v_{GS}-0.7$ V.
