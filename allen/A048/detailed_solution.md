# Detailed solution - A048

Find the device constant from the given saturated point, write the p-channel square law in both regions with signs kept explicit, and evaluate each curve at its saturation boundary and at a few drain voltages.

### Step 1 — p-channel square law and device constant

For an enhancement p-channel transistor, $v_{GS}$, $v_{DS}$, $V_T$ and $i_D$ (taken as current into the drain) are all negative in normal operation. With $\lambda=0$ the square-law model is

$$
\begin{aligned}
\text{nonsaturation } (v_{DS}\ge v_{GS}-V_T):&\quad i_D=-\frac{K'W}{L}\Big[(v_{GS}-V_T)v_{DS}-\frac{v_{DS}^2}{2}\Big],\\
\text{saturation } (v_{DS}\le v_{GS}-V_T):&\quad i_D=-\frac{K'W}{2L}\,(v_{GS}-V_T)^2,
\end{aligned}
$$

valid for $v_{GS}<V_T$; the device is off for $v_{GS}\ge V_T$. Here $K'=\mu_pC_{ox}$ and both brackets are positive, so $i_D<0$. The given saturated point fixes the product $K'W/L$:

$$
\frac{K'W}{2L}=\frac{500\ \mu\mathrm A}{(-5\ \mathrm V+0.7\ \mathrm V)^2}=\frac{500\ \mu\mathrm A}{18.49\ \mathrm{V^2}}=27.04\ \mu\mathrm{A/V^2},\qquad \frac{K'W}{L}=54.08\ \mu\mathrm{A/V^2}.
$$

### Step 2 — Saturation boundary and saturated current of each curve

Each curve starts at the origin, follows the nonsaturation parabola, and becomes flat (because $\lambda=0$) at $v_{DS}(\text{sat})=v_{GS}-V_T$, where both expressions give the same current with zero slope. Eliminating $v_{GS}-V_T=v_{DS}$ gives the locus of these boundary points, $i_D=-27.04\ \mu\mathrm{A/V^2}\,v_{DS}^2$. For $V_{GS}=-6$ V:

$$
v_{DS}(\text{sat})=-6\ \mathrm V+0.7\ \mathrm V=-5.3\ \mathrm V,\qquad i_D=-27.04\ \mu\mathrm{A/V^2}\,(5.3\ \mathrm V)^2=-759.6\ \mu\mathrm A .
$$

| $V_{GS}$ (V) | $v_{DS}(\text{sat})$ (V) | Saturated $i_D$ (µA) |
|---|---|---|
| −1 | −0.3 | −2.43 |
| −2 | −1.3 | −45.7 |
| −3 | −2.3 | −143.1 |
| −4 | −3.3 | −294.5 |
| −6 | −5.3 | −759.6 |

### Step 3 — Points on the nonsaturation segments

Inside nonsaturation, for $V_{GS}=-6$ V and $v_{DS}=-2$ V:

$$
i_D=-54.08\ \mu\mathrm{A/V^2}\Big[(-5.3\ \mathrm V)(-2\ \mathrm V)-\frac{(-2\ \mathrm V)^2}{2}\Big]=-54.08\ \mu\mathrm{A/V^2}\times8.6\ \mathrm{V^2}=-465.1\ \mu\mathrm A .
$$

Evaluating each curve the same way (saturated values where $|v_{DS}|\ge|v_{DS}(\text{sat})|$):

| $v_{DS}$ (V) | −1 | −2 | −3 | −4 | −5 |
|---|---|---|---|---|---|
| $V_{GS}=-2$ V | −43.3 | −45.7 | −45.7 | −45.7 | −45.7 |
| $V_{GS}=-3$ V | −97.3 | −140.6 | −143.1 | −143.1 | −143.1 |
| $V_{GS}=-4$ V | −151.4 | −248.8 | −292.0 | −294.5 | −294.5 |
| $V_{GS}=-6$ V | −259.6 | −465.1 | −616.5 | −713.9 | −757.2 |

(µA; the $V_{GS}=-1$ V curve is saturated at −2.43 µA for every $|v_{DS}|\ge0.3$ V.)

### Step 4 — The output characteristics to scale

The curves lie in the third quadrant ($v_{DS}<0$, $i_D<0$). The plot shows them as magnitudes, $-i_D$ against $-v_{DS}$, which mirrors the third quadrant into the first:

![PMOS output characteristics as −iD versus −vDS for VGS = −1, −2, −3, −4 and −6 V, flat beyond the dashed saturation boundary](/q/A048/solution-curves.svg)

Each nonsaturation segment leaves the origin with slope $d(-i_D)/d(-v_{DS})=(K'W/L)|v_{GS}-V_T|$ and bends over to meet the flat saturation line tangentially on the dashed boundary. The saturated currents grow as $(|V_{GS}|-0.7\ \mathrm V)^2$, not linearly with $|V_{GS}|$, so the spacing between curves widens. The given point ($-500\ \mu$A at $V_{GS}=-5$ V, saturated for $v_{DS}\le-4.3$ V) would lie between the −4 V and −6 V curves.
