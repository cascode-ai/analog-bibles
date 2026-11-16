# Detailed solution - R132

**Approach.** With its gate at 0 V, the PMOS load has a huge, fixed overdrive, and with $\lambda = 0$ a saturated load would give infinite gain. So $M_2$ is in the **triode region** and acts as a resistor whose *small-signal* resistance $(\partial I_D/\partial V_{SD})^{-1}$ must equal $5/g_{m1}$. Combine that with the condition that $M_2$ carries 0.5 mA, solve for $V_{SD2}$, and obtain $\beta_2$ and $(W/L)_2$.

### Step 1 — Required load resistance

The gate and source of $M_2$ are at constant voltages, so it contributes only its drain–source small-signal resistance $r_2$; with $\lambda = 0$, $r_{O1} = \infty$ and $A_v = -g_{m1}r_2$. With $(W/L)_1 = 20/0.5 = 40$:

$$g_{m1} = \sqrt{2\mu_nC_{ox}(W/L)_1I_{D1}} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(40)(0.5\ \mathrm{mA})} = \sqrt{5.36\times10^{-6}}\ \mathrm{A/V} = 2.315\ \mathrm{mS},$$

$$r_2 = \frac{5}{g_{m1}} = \frac{5}{2.315\ \mathrm{mS}} = 2.160\ \mathrm{k\Omega}.$$

### Step 2 — Region of operation of $M_2$

$V_{SG2} = V_{DD} - V_b = 3$ V, and with its bulk at its source there is no body effect, so

$$V_{ov2} = V_{SG2} - |V_{THP}| = 3 - 0.8 = 2.2\ \mathrm{V}.$$

Saturated, $M_2$ would present $r_{O2} = \infty$ and an infinite gain, so it must be in **triode**: $V_{SD2} < 2.2$ V.

### Step 3 — Triode equations: large-signal and small-signal

With the unknown $\beta_2 = \mu_pC_{ox}(W/L)_2$ and $V_{SD} \equiv V_{SD2}$:

$$I_D = \beta_2\left[V_{ov2}V_{SD} - \tfrac12V_{SD}^2\right] = \beta_2\left[2.2\,V_{SD} - \tfrac12V_{SD}^2\right], \tag{1}$$

$$\frac{1}{r_2} = \frac{\partial I_D}{\partial V_{SD}} = \beta_2\,(V_{ov2} - V_{SD}) = \beta_2\,(2.2 - V_{SD}). \tag{2}$$

$r_2$ is **not** $V_{SD}/I_D$: the triode curve bends over, so its slope at the operating point is smaller than that of the line from the origin.

### Step 4 — Solve for $V_{SD2}$

Multiplying (1) by $r_2$ from (2) eliminates $\beta_2$:

$$I_D\,r_2 = \frac{2.2\,V_{SD} - \tfrac12V_{SD}^2}{2.2 - V_{SD}} ,$$

with $I_Dr_2 = (0.5\ \mathrm{mA})(2.160\ \mathrm{k\Omega}) = 1.080$ V. Therefore

$$
\begin{aligned}
2.2\,V_{SD} - \tfrac12V_{SD}^2 &= 1.080\,(2.2 - V_{SD}) = 2.376 - 1.080\,V_{SD}\\
-\tfrac12V_{SD}^2 + 3.280\,V_{SD} - 2.376 &= 0\\
V_{SD}^2 - 6.560\,V_{SD} + 4.751 &= 0 ,
\end{aligned}
$$

$$V_{SD} = \frac{6.560 \pm \sqrt{6.560^2 - 4(4.751)}}{2} = \frac{6.560 \pm \sqrt{24.02}}{2} = \frac{6.560 \pm 4.901}{2}.$$

The "+" root, 5.73 V, exceeds both 2.2 V and $V_{DD}$, so

$$V_{SD2} = 0.829\ \mathrm{V}.$$

### Step 5 — $\beta_2$ and the aspect ratio

From (2):

$$\beta_2 = \frac{1}{r_2\,(2.2 - V_{SD2})} = \frac{1}{(2.160\ \mathrm{k\Omega})(2.2 - 0.829\ \mathrm{V})} = \frac{1}{(2.160\ \mathrm{k\Omega})(1.371\ \mathrm{V})} = 0.338\ \mathrm{mA/V^2},$$

$$\left(\frac{W}{L}\right)_2 = \frac{\beta_2}{\mu_pC_{ox}} = \frac{0.338\ \mathrm{mA/V^2}}{38.4\ \mu\mathrm{A/V^2}} = 8.8 .$$

**Checks.**

- Current from (1): $\beta_2(2.2\times0.829 - \tfrac12\times0.829^2) = (0.338\ \mathrm{mA/V^2})(1.824 - 0.344)\ \mathrm{V^2} = (0.338)(1.480)\ \mathrm{mA} = 0.500$ mA ✓.
- $V_{out} = V_{DD} - V_{SD2} = 3 - 0.829 = 2.171$ V.
- $M_1$: $V_{ov1} = \sqrt{2(0.5\ \mathrm{mA})/(5.36\ \mathrm{mA/V^2})} = 0.432$ V $< V_{DS1} = 2.171$ V, saturated ✓ (input dc level $V_{in} = 0.7 + 0.432 = 1.132$ V).
- $M_2$: $V_{SD2} = 0.829$ V $< 2.2$ V, triode ✓.

### Step 6 — Why the "deep-triode" shortcut fails here

The deep-triode resistance $R_{on} = 1/[\mu_pC_{ox}(W/L)V_{ov}]$ holds only for $V_{SD} \ll 2V_{ov}$. Setting $R_{on2} = 2.16$ kΩ would give

$$\left(\frac{W}{L}\right)_2 = \frac{1}{(38.4\ \mu\mathrm{A/V^2})(2.16\ \mathrm{k\Omega})(2.2\ \mathrm{V})} = 5.48 .$$

But this smaller device needs $V_{SD2} \approx 1.90$ V (from (1)) to carry 0.5 mA, which is not small compared with 2.2 V. Its actual small-signal resistance is then $1/[\beta_2(2.2 - 1.90)] \approx 16$ kΩ, and the gain would be about 37, not 5.

### Result

$$\left(\frac{W}{L}\right)_2 \approx 8.8,$$

with $M_2$ in the triode region at $V_{SD2} \approx 0.83$ V ($V_{out} \approx 2.17$ V), $\beta_2 = 0.338\ \mathrm{mA/V^2}$, and small-signal resistance $r_2 = 2.16$ kΩ $= 5/g_{m1}$ ($g_{m1} = 2.315$ mS).

**Common mistake.** Treating $M_2$ as a saturated current source. With an overdrive of 2.2 V and $\lambda = 0$, that gives an infinite gain; only the triode region provides the finite load resistance a gain of 5 needs.

**Common mistake.** Using the large-signal ratio $V_{SD}/I_D$ as the load resistance, i.e. $V_{SD2} = (0.5\ \mathrm{mA})(2.16\ \mathrm{k\Omega}) = 1.08$ V, which gives $(W/L)_2 \approx 7.3$. The gain depends on the *incremental* resistance, which is larger than $V_{SD}/I_D$ in triode.

**Common mistake.** Using the deep-triode formula (5.48) without checking it: at that size $V_{SD} \approx 1.9$ V and the gain would be about 37. Also use $\mu_pC_{ox}$, not $\mu_nC_{ox}$, for the PMOS.
