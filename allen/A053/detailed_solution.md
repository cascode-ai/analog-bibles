# Detailed solution - A053

Read the area and perimeter of one source/drain diffusion from the layout, then evaluate the bottom-plus-sidewall depletion-capacitance model at zero and at 0.75 V reverse bias for each set of junction parameters.

### Step 1 — Geometry of one diffusion

In [Fig. 1] each source/drain active-area rectangle extends 1.6 µm from the gate edge to the edge of the active area, and its height is the transistor width, 2.0 µm (the 0.8 µm dimension is the gate length and is not part of the diffusion). With all four sides counted in the sidewall:

$$
AX=(1.6\ \mu\mathrm m)(2.0\ \mu\mathrm m)=3.2\ \mu\mathrm m^2,\qquad PX=2(1.6\ \mu\mathrm m+2.0\ \mu\mathrm m)=7.2\ \mu\mathrm m .
$$

### Step 2 — Depletion-capacitance model

Let $v_J$ be the forward voltage across the junction (p side minus n side). For reverse bias or weak forward bias, $v_J\le\mathrm{FC}\cdot\mathrm{PB}=0.5$ V, the bottom and sidewall parts each follow the depletion law with their own grading coefficient:

$$
C_{BX}=\frac{\mathrm{CJ}\cdot AX}{\big(1-v_J/\mathrm{PB}\big)^{\mathrm{MJ}}}+\frac{\mathrm{CJSW}\cdot PX}{\big(1-v_J/\mathrm{PB}\big)^{\mathrm{MJSW}}} .
$$

For the n-channel device (p bulk, n⁺ diffusion) a 0.75 V reverse bias is $v_{BX}=-0.75$ V; for the p-channel device (n-well bulk, p⁺ diffusion) it is $v_{BX}=+0.75$ V. In both cases $v_J=-0.75$ V, and the denominator base is

$$
1-\frac{v_J}{\mathrm{PB}}=1+\frac{|V_{BX}|}{\mathrm{PB}}=1+\frac{0.75\ \mathrm V}{1\ \mathrm V}=1.75 ,
$$

so the capacitance decreases with reverse bias.

### Step 3 — n-channel device

Zero-bias components:

$$
\mathrm{CJ}\cdot AX=(770\times10^{-6}\ \mathrm{F/m^2})(3.2\times10^{-12}\ \mathrm{m^2})=2.464\ \mathrm{fF},\qquad
\mathrm{CJSW}\cdot PX=(380\times10^{-12}\ \mathrm{F/m})(7.2\times10^{-6}\ \mathrm m)=2.736\ \mathrm{fF}.
$$

At 0.75 V reverse bias, with $1.75^{0.5}=1.3229$ and $1.75^{0.38}=1.2370$:

$$
C_{BX}=\frac{2.464\ \mathrm{fF}}{1.3229}+\frac{2.736\ \mathrm{fF}}{1.2370}=1.863\ \mathrm{fF}+2.212\ \mathrm{fF}=4.07\ \mathrm{fF}.
$$

### Step 4 — p-channel device and summary

The same steps with the p-channel parameters ($1.75^{0.35}=1.2164$) give:

| Device | Bias | Bottom (fF) | Sidewall (fF) | $C_{BX}$ (fF) |
|---|---|---|---|---|
| n-channel | 0 V | 2.464 | 2.736 | 5.20 |
| n-channel | 0.75 V reverse | 1.863 | 2.212 | 4.07 |
| p-channel | 0 V | 1.792 | 2.520 | 4.31 |
| p-channel | 0.75 V reverse | 1.355 | 2.072 | 3.43 |

For such a small diffusion the sidewall supplies about half of the total. Because $\mathrm{MJSW}<\mathrm{MJ}$ (the sidewall junction is more graded), the sidewall part falls less with reverse bias than the bottom part, so its share grows from 53% to 54% (n-channel) and from 58% to 60% (p-channel).
