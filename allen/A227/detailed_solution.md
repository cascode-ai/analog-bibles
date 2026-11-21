# Detailed solution - A227

Class B means the two devices hand over at a single input voltage, with neither conducting at that point. Write the input at which M1 reaches its threshold and the input at which M2 leaves its threshold, both at the crossover output voltage, and set them equal.

### Step 1 — Output voltage at the crossover

At the hand-over neither transistor conducts, so no current flows in $R_L$ and

$$
v_{OUT}=0 .
$$

The thresholds must therefore be evaluated with the sources at 0 V. M1's bulk is at $V_{SS}$ and M2's at $V_{DD}$, so $V_{SB1}=|V_{SS}|$ and $V_{BS2}=V_{DD}$:

$$
V_{T1}=V_{T0N}+\gamma_N\left(\sqrt{2|\phi_{FN}|+|V_{SS}|}-\sqrt{2|\phi_{FN}|}\right)
=0.7+0.4\left(\sqrt{0.7+|V_{SS}|}-\sqrt{0.7}\right)\ \mathrm V,
$$

$$
|V_{T2}|=|V_{T0P}|+\gamma_P\left(\sqrt{2|\phi_{FP}|+V_{DD}}-\sqrt{2|\phi_{FP}|}\right)
=0.7+0.57\left(\sqrt{0.8+V_{DD}}-\sqrt{0.8}\right)\ \mathrm V .
$$

### Step 2 — Turn-on of M1 and turn-off of M2

M1's gate is at $v_{IN}+V_{BIAS}$ and its source at $v_{OUT}=0$, so it starts to conduct when

$$
v_{IN}+V_{BIAS}=V_{T1}\quad\Rightarrow\quad v_{IN}=V_{T1}-V_{BIAS}
$$

M2's gate is at $v_{IN}-V_{BIAS}$; it conducts while $V_{SG2}=0-(v_{IN}-V_{BIAS})>|V_{T2}|$ and stops when

$$
V_{BIAS}-v_{IN}=|V_{T2}|\quad\Rightarrow\quad v_{IN}=V_{BIAS}-|V_{T2}|
$$

### Step 3 — Class B condition

For M1 to start conducting exactly where M2 stops, the two input voltages must coincide:

$$
V_{T1}-V_{BIAS}=V_{BIAS}-|V_{T2}|\quad\Rightarrow\quad
V_{BIAS}=\frac{V_{T1}+|V_{T2}|}{2},
$$

with both thresholds taken from Step 1. The crossover then occurs at $v_{IN}=(V_{T1}-|V_{T2}|)/2$, slightly below 0 because the body effect raises the p-channel threshold more. A smaller $V_{BIAS}$ leaves a dead zone where both are off; a larger one makes both conduct at once (Class AB).

### Step 4 — Numerical examples

| Supplies | $V_{T1}$ (V) | $\lvert V_{T2}\rvert$ (V) | $V_{BIAS}$ (V) |
|---|---|---|---|
| ±2.5 V | 1.08 | 1.23 | 1.15 |
| ±5 V | 1.32 | 1.56 | 1.44 |

For ±2.5 V, for example, $V_{T1}=0.7+0.4(\sqrt{3.2}-\sqrt{0.7})=1.081$ V and $|V_{T2}|=0.7+0.57(\sqrt{3.3}-\sqrt{0.8})=1.226$ V, so $V_{BIAS}=1.153$ V. Ignoring the body effect would give $V_{BIAS}=V_T=0.7$ V. If the two batteries could differ, each would simply equal its own device's threshold, $V_{BIAS1}=V_{T1}$ and $V_{BIAS2}=|V_{T2}|$.
