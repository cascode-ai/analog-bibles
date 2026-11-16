# Detailed solution - R132

**Approach.** With its gate at 0 V, the PMOS load has a huge, fixed overdrive. It cannot be saturated at the design point: with $\lambda = 0$ a saturated load would give infinite gain. So $M_2$ operates in the **triode region** and acts as a resistor, whose *small-signal* resistance $(\partial I_D/\partial V_{SD})^{-1}$ must equal $5/g_{m1}$. We combine that requirement with the condition that $M_2$ carries 0.5 mA, solve for $V_{SD2}$, and then obtain $\beta_2$ and $(W/L)_2$.

### Step 1 — The circuit and what sets the gain

From the figure:

- $M_1$: NMOS common-source device, gate at $V_{in}$, source at ground, drain at $V_{out}$.
- $M_2$: PMOS load, source at $V_{DD} = 3$ V, drain at $V_{out}$, gate at $V_b = 0$ V.

The gate and source of $M_2$ are both at constant voltages, so its small-signal $v_{sg}$ is zero: $M_2$ contributes only its drain–source small-signal resistance, which we call $r_2$. With $\lambda = 0$, $r_{O1} = \infty$, so the CS gain is

$$A_v = -g_{m1}r_2 .$$

### Step 2 — Required load resistance

Square-law transconductance of $M_1$, with $(W/L)_1 = 20/0.5 = 40$:

$$g_{m1} = \sqrt{2\mu_nC_{ox}(W/L)_1I_{D1}} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(40)(0.5\ \mathrm{mA})} = \sqrt{5.36\times10^{-6}}\ \mathrm{A/V} = 2.315\ \mathrm{mS}.$$

For $|A_v| = 5$:

$$r_2 = \frac{5}{g_{m1}} = \frac{5}{2.315\ \mathrm{mS}} = 2.160\ \mathrm{k\Omega}.$$

### Step 3 — Region of operation of $M_2$

$M_2$'s source–gate voltage is fixed: $V_{SG2} = V_{DD} - V_b = 3$ V. Its bulk is tied to its source ($V_{DD}$), so there is no body effect and $|V_{THP}| = 0.8$ V. Its overdrive voltage is therefore

$$V_{ov2} = V_{SG2} - |V_{THP}| = 3 - 0.8 = 2.2\ \mathrm{V}.$$

- If $M_2$ were saturated, its small-signal resistance would be $r_{O2} = \infty$ (since $\lambda = 0$) and the gain would be infinite, not 5.
- Hence $M_2$ must be in the **triode region**: $V_{SD2} < V_{ov2} = 2.2$ V.

### Step 4 — Triode equations: large-signal and small-signal

With $\beta_2 = \mu_pC_{ox}(W/L)_2$ (the unknown) and $V_{SD} \equiv V_{SD2}$, the triode-region current is

$$I_D = \beta_2\left[V_{ov2}V_{SD} - \tfrac12V_{SD}^2\right] = \beta_2\left[2.2\,V_{SD} - \tfrac12V_{SD}^2\right]. \tag{1}$$

Its small-signal conductance is the derivative with respect to $V_{SD}$ (the gate and source are fixed):

$$\frac{1}{r_2} = \frac{\partial I_D}{\partial V_{SD}} = \beta_2\,(V_{ov2} - V_{SD}) = \beta_2\,(2.2 - V_{SD}). \tag{2}$$

Note that $r_2$ is **not** $V_{SD}/I_D$: the triode $I$–$V$ curve bends over, so its slope at the operating point is smaller than the slope of the line from the origin.

### Step 5 — Solve for $V_{SD2}$

Two conditions must hold: $I_D = 0.5$ mA and $r_2 = 2.160$ kΩ. Multiply (1) by $r_2$ from (2), which eliminates the unknown $\beta_2$:

$$I_D\,r_2 = \frac{2.2\,V_{SD} - \tfrac12V_{SD}^2}{2.2 - V_{SD}} .$$

The left side is $(0.5\ \mathrm{mA})(2.160\ \mathrm{k\Omega}) = 1.080$ V. Therefore

$$
\begin{aligned}
2.2\,V_{SD} - \tfrac12V_{SD}^2 &= 1.080\,(2.2 - V_{SD}) = 2.376 - 1.080\,V_{SD}\\
-\tfrac12V_{SD}^2 + 3.280\,V_{SD} - 2.376 &= 0\\
V_{SD}^2 - 6.560\,V_{SD} + 4.751 &= 0 .
\end{aligned}
$$

Quadratic formula:

$$V_{SD} = \frac{6.560 \pm \sqrt{6.560^2 - 4(4.751)}}{2} = \frac{6.560 \pm \sqrt{24.02}}{2} = \frac{6.560 \pm 4.901}{2}.$$

The "+" root, 5.73 V, exceeds both 2.2 V (it would not be triode) and $V_{DD}$, so we take the "−" root:

$$V_{SD2} = 0.829\ \mathrm{V}.$$

### Step 6 — $\beta_2$ and the aspect ratio

From (2):

$$\beta_2 = \frac{1}{r_2\,(2.2 - V_{SD2})} = \frac{1}{(2.160\ \mathrm{k\Omega})(2.2 - 0.829\ \mathrm{V})} = \frac{1}{(2.160\ \mathrm{k\Omega})(1.371\ \mathrm{V})} = 0.338\ \mathrm{mA/V^2}.$$

$$\left(\frac{W}{L}\right)_2 = \frac{\beta_2}{\mu_pC_{ox}} = \frac{0.338\ \mathrm{mA/V^2}}{38.4\ \mu\mathrm{A/V^2}} = 8.8 .$$

**Checks.**

- Current from (1): $\beta_2(2.2\times0.829 - \tfrac12\times0.829^2) = (0.338\ \mathrm{mA/V^2})(1.824 - 0.344)\ \mathrm{V^2} = (0.338)(1.480)\ \mathrm{mA} = 0.500$ mA ✓.
- Output dc level: $V_{out} = V_{DD} - V_{SD2} = 3 - 0.829 = 2.171$ V.
- $M_1$ saturated? Its overdrive is $V_{ov1} = \sqrt{2(0.5\ \mathrm{mA})/(5.36\ \mathrm{mA/V^2})} = 0.432$ V, and $V_{DS1} = 2.171$ V $> 0.432$ V ✓. (The input dc level is $V_{in} = 0.7 + 0.432 = 1.132$ V.)
- $M_2$ in triode? $V_{SD2} = 0.829$ V $< 2.2$ V ✓.

### Step 7 — Why the "deep-triode" shortcut fails here

A common shortcut models a triode device by its deep-triode resistance $R_{on} = 1/[\mu_pC_{ox}(W/L)V_{ov}]$, valid only for $V_{SD} \ll 2V_{ov}$. Setting $R_{on2} = 2.16$ kΩ gives

$$\left(\frac{W}{L}\right)_2 = \frac{1}{(38.4\ \mu\mathrm{A/V^2})(2.16\ \mathrm{k\Omega})(2.2\ \mathrm{V})} = 5.48 .$$

But with this smaller device, carrying 0.5 mA requires $V_{SD2} \approx 1.90$ V (from (1)), which is not small compared with 2.2 V. The actual small-signal resistance is then $1/[\beta_2(2.2 - 1.90)] \approx 16$ kΩ and the gain would be about 37, not 5. The deep-triode assumption is violated, so the operating point must be handled with the full triode equations, as above.

### Result

$$\left(\frac{W}{L}\right)_2 \approx 8.8,$$

with $M_2$ in the triode region at $V_{SD2} \approx 0.83$ V ($V_{out} \approx 2.17$ V), $\beta_2 = 0.338\ \mathrm{mA/V^2}$, and small-signal resistance $r_2 = 2.16$ kΩ $= 5/g_{m1}$ ($g_{m1} = 2.315$ mS).

**Common mistake.** Treating $M_2$ as a saturated current source. With its gate at 0 V, its overdrive is 2.2 V, and with $\lambda = 0$ a saturated load would give an infinite gain. A finite gain of 5 requires a finite load resistance, which this device provides only in the triode region.

**Common mistake.** Using the large-signal ratio $V_{SD}/I_D$ as the load resistance, i.e. setting $V_{SD2} = (0.5\ \mathrm{mA})(2.16\ \mathrm{k\Omega}) = 1.08$ V, which gives $(W/L)_2 \approx 7.3$. The gain depends on the *incremental* resistance $\partial V_{SD}/\partial I_D$, which is larger than $V_{SD}/I_D$ in triode because the curve flattens.

**Common mistake.** Using the deep-triode formula $R_{on} = 1/[\mu_pC_{ox}(W/L)(V_{SG} - |V_{THP}|)]$, which gives 5.48, without checking it. At that size the device is far from deep triode ($V_{SD} \approx 1.9$ V) and the gain would be about 37. Also, be sure to use $\mu_pC_{ox}$ (not $\mu_nC_{ox}$) for the PMOS.
