# Detailed solution - A209

For a falling output the p-channel follower M1 is driven hard on by a large negative step and discharges $C_L$. The slew rate at $v_{OUT}=0$ is M1's current, minus the part supplied by the 200-µA source, divided by $C_L$.

### Step 1 — Current of M1

A large negative step takes $v_{IN}$ to −2.5 V. With the output still at 0 V, M1's source is at 0 V and its gate and drain at −2.5 V, so $V_{SG1}=V_{SD1}=2.5$ V and M1 is saturated:

$$
I_{D1}=\frac{K'_P}2\frac WL\left(V_{SG1}-|V_T|\right)^2=\frac{50\ \mu\mathrm{A/V^2}}{2}(300)(2.5-0.7)^2=(7.5\ \mathrm{mA/V^2})(1.8\ \mathrm V)^2=24.3\ \mathrm{mA}.
$$

### Step 2 — Capacitor current and slew rate

KCL at the output: M1 sinks 24.3 mA, the source supplies 200 µA, and the resistor carries nothing at $v_{OUT}=0$. The capacitor therefore supplies the rest:

$$
C_L\frac{dv_{OUT}}{dt}=0.2\ \mathrm{mA}-24.3\ \mathrm{mA}=-24.1\ \mathrm{mA},
$$

$$
SR^-=\frac{-24.1\ \mathrm{mA}}{50\ \mathrm{pF}}=-4.82\times10^8\ \mathrm{V/s}=-482\ \mathrm{V/\mu s}.
$$

The negative slew rate is more than a hundred times the positive one (4 V/µs), because M1, a wide device driven with 1.8 V of overdrive, can sink far more current than the 200-µA source can supply.
