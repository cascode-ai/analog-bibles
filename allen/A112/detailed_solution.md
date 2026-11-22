# Detailed solution - A112

The resistor imposes a straight load line on the $i_D$–$v_{DS}$ plane of M1. For each input voltage, the intersection of that line with the M1 characteristic for $v_{GS}=v_{IN}$ gives one point $(v_{IN},v_{OUT})$ of the transfer curve. Draw the construction, then compute the intersections region by region: cutoff, saturation and triode.

### Step 1 — Load line and device curves

KVL from $V_{DD}$ through the resistor to the drain gives the load line

$$
i_D=\frac{V_{DD}-v_{OUT}}{R}=\frac{5\ \mathrm V-v_{OUT}}{10\ \mathrm{k\Omega}},
$$

a straight line from $(v_{DS},i_D)=(5\ \mathrm V,0)$ to $(0,0.5\ \mathrm{mA})$. With $K'W/L=(110\ \mu\mathrm{A/V^2})(2)=220\ \mu\mathrm{A/V^2}$, the device curves are

$$
i_D=110\ \mu\mathrm{A/V^2}\,(v_{GS}-0.7\ \mathrm V)^2\ \ (v_{DS}\ge v_{GS}-V_T),\qquad
i_D=220\ \mu\mathrm{A/V^2}\left[(v_{GS}-0.7\ \mathrm V)v_{DS}-\frac{v_{DS}^2}{2}\right]\ \ (v_{DS}<v_{GS}-V_T),
$$

with $\lambda$ neglected at first. The saturation boundary $v_{DS}=v_{GS}-V_T$ is the parabola $i_D=(110\ \mu\mathrm{A/V^2})v_{DS}^2$.

![M1 output characteristics for vGS from 1.5 to 5 V with the 10 kΩ load line and its intersections](/q/A112/solution-loadline.svg)

Reading the intersections from left to right along the load line as $v_{IN}$ falls traces the transfer curve.

### Step 2 — Cutoff: maximum output

For $v_{IN}\le V_T=0.7$ V, M1 is off and $i_D=0$. The intersection is the end of the load line at $i_D=0$, so

$$
v_{OUT}=V_{DD}=5\ \mathrm V .
$$

A resistor, unlike a diode-connected PMOS load, has no threshold drop, so $v_{OUT}(\max)=5$ V.

### Step 3 — Saturation region

Just above threshold, $v_{OUT}$ is large and M1 is saturated. Equating the saturation current to the load line:

$$
v_{OUT}=V_{DD}-R\,\frac{K'W}{2L}(v_{IN}-V_T)^2=5\ \mathrm V-(1.1\ \mathrm{V^{-1}})(v_{IN}-0.7\ \mathrm V)^2 .
$$

At $v_{IN}=2$ V: $v_{OUT}=5-1.1(1.3)^2=3.14$ V. M1 leaves saturation when $v_{OUT}=v_{IN}-V_T$; with $x=v_{IN}-V_T$ this is $5-1.1x^2=x$, so $x=1.725$ V:

$$
v_{IN}=2.43\ \mathrm V,\qquad v_{OUT}=1.73\ \mathrm V,\qquad
\frac{dv_{OUT}}{dv_{IN}}=-2(1.1\ \mathrm{V^{-1}})(1.725\ \mathrm V)=-3.8\ \mathrm{V/V}.
$$

This is the steepest point of the curve.

### Step 4 — Triode region: minimum output

For $v_{IN}>2.43$ V the intersection lies left of the parabola, and

$$
220\ \mu\mathrm{A/V^2}\left[(v_{IN}-0.7)v_{OUT}-\frac{v_{OUT}^2}{2}\right]=\frac{5-v_{OUT}}{10\ \mathrm{k\Omega}} .
$$

At $v_{IN}=5$ V this becomes $1.1v_{OUT}^2-10.46v_{OUT}+5=0$ (voltages in V), whose root below $v_{IN}-V_T$ is

$$
v_{OUT}=\frac{10.46-\sqrt{10.46^2-4(1.1)(5)}}{2(1.1)}=0.505\ \mathrm V .
$$

The intersections for the plotted gate voltages:

| $v_{IN}$ (V) | 0–0.7 | 1.5 | 2 | 2.43 | 2.5 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|---|---|
| $v_{OUT}$ (V) | 5 | 4.30 | 3.14 | 1.73 | 1.52 | 1.01 | 0.664 | 0.505 |
| Region | off | sat | sat | edge | triode | triode | triode | triode |

### Step 5 — Transfer curve and output range

![Voltage-transfer curve of M1 with a 10 kΩ load, from 5 V down to 0.505 V](/q/A112/solution-curves.svg)

The output stays at 5 V up to $v_{IN}=0.7$ V, falls quadratically while M1 is saturated, reaches its steepest slope of about $-3.8$ V/V at the saturation–triode edge (2.43 V, 1.73 V), and then flattens in the triode region. For $0\le v_{IN}\le5$ V:

$$
v_{OUT}(\max)=5\ \mathrm V,\qquad v_{OUT}(\min)\approx0.5\ \mathrm V .
$$

Including the factor $(1+\lambda v_{DS})$ with $\lambda=0.04\ \mathrm{V^{-1}}$ raises the saturation current slightly and moves the saturated points down (2.92 V instead of 3.14 V at $v_{IN}=2$ V). The triode expression has no $\lambda$ term, so $v_{OUT}(\min)$ remains about 0.5 V.
