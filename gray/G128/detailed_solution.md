# Detailed solution - G128

Evaluate the exact slope of the follower's transfer characteristic at the three input values, form the normalized gain errors, and apply the given relations. With $R_L\to\infty$ the current is fixed at $I_Q$, so all the nonlinearity comes from the body effect.

### Step 1 — Transfer characteristic and its slope

$M_1$ is saturated with $I_{d1}=I_Q$, so its overdrive is constant:

$$
V_{ov1}=\sqrt{\frac{2I_Q}{k'(W/L)_1}}=\sqrt{\frac{2(1\ \mathrm{mA})}{(200\ \mu\mathrm{A/V^2})(1000)}}=0.1\ \mathrm V.
$$

With the body at $-V_{DD}$, $V_{SB}=V_o+V_{DD}$, and $V_i=V_o+V_t+V_{ov1}$ gives (numbers in volts)

$$
V_i=V_o+0.8+0.5\left(\sqrt{V_o+3.1}-\sqrt{0.6}\right),\qquad
\frac{dV_o}{dV_i}=\frac1{1+\gamma/\left(2\sqrt{V_o+3.1}\right)}=\frac1{1+0.25/\sqrt{V_o+3.1}}.
$$

### Step 2 — Slopes at the three instants

For each $V_i$, put $x=\sqrt{V_o+3.1}$; the characteristic becomes $x^2+0.5x-(3.1+V_i-0.8+0.5\sqrt{0.6})=0$. For the positive peak, $V_i=0.5$ V:

$$
x^2+0.5x-3.1873=0\ \Rightarrow\ x=1.5527,\quad V_o=-0.689\ \mathrm V,\quad A_v^+=\frac1{1+0.25/1.5527}=0.8613.
$$

The other two follow in the same way:

| Instant | $V_i$ (V) | $V_o$ (V) | $\sqrt{V_o+3.1}$ | Slope |
|---|---|---|---|---|
| Input maximum | +0.5 | −0.689 | 1.5527 | $A_v^+=0.86132$ |
| Quiescent | 0 | −1.117 | 1.4083 | $A_{vQ}=0.84924$ |
| Input minimum | −0.5 | −1.538 | 1.2499 | $A_v^-=0.83333$ |

### Step 3 — Gain errors and distortion

$$
E^+=\frac{0.86132-0.84924}{0.84924}=+0.01423,\qquad E^-=\frac{0.83333-0.84924}{0.84924}=-0.01874 .
$$

$$
HD_2\approx\frac{E^+-E^-}{8}=\frac{0.03296}{8}=0.00412,\qquad
HD_3\approx\frac{E^++E^-}{24}=\frac{-0.00451}{24}=-1.88\times10^{-4}.
$$

### Step 4 — Comparison with the power-series result

| | Slope method | Power series | Difference |
|---|---|---|---|
| $HD_2$ | 0.0041 (0.41%) | 0.0040 | +3% |
| $HD_3$ | $-1.9\times10^{-4}$ | $-1.8\times10^{-4}$ | +4% |

The two methods agree within a few percent. The small differences arise because the exact slopes at $\pm0.5$ V include the effect of all higher-order terms of the characteristic, while the power series is truncated at the cubic term. The gain is larger at the positive peak and smaller at the negative peak, so the second harmonic dominates, as expected for distortion caused by the body effect. The negative $HD_3$ follows from the definition: $E^++E^-<0$, meaning the gain falls slightly more at the negative extreme than it rises at the positive one.
