# Detailed solution - A059

List every capacitance with one terminal on node $v_x$: the drain junctions and gate–drain overlaps of the driving inverter (M1, M2) and the gate capacitances of the driven inverter (M3, M4). Evaluate each at the dc operating point read from the layout and the marked voltages, sum them, and form $|p|=1/(R\sum C)$.

### Step 1 — Device dimensions and operating region

From the layout (1 µm grid):

| Device | Type | $W/L$ | Drain diffusion at $v_x$ | $A$ | $P$ |
|---|---|---|---|---|---|
| M1, M3 | n-channel in p-well | 10 µm/2 µm | n⁺, 10 µm × 6 µm | 60 µm² | 32 µm |
| M2, M4 | p-channel in n-substrate | 20 µm/2 µm | p⁺, 20 µm × 6 µm | 120 µm² | 52 µm |

All dc nodes are at 2.5 V. For M1 (source and p-well at ground) $V_{GS}=V_{DS}=2.5$ V, so $V_{GS}-V_T=1.8\ \mathrm V<V_{DS}$; for M2 (source and substrate at 5 V) $|V_{GS}|=|V_{DS}|=2.5$ V, so $|V_{GS}|-|V_T|=1.8\ \mathrm V<|V_{DS}|$. The same holds for M3 and M4, so every transistor is saturated, and no device has a source–bulk voltage, so there is no body effect.

### Step 2 — Drain junctions of M1 and M2

The n⁺ drain of M1 sits in a p-well at 0 V and the p⁺ drain of M2 in the n-substrate at 5 V, so each junction is reverse biased by 2.5 V and $1+|V_{BD}|/\mathrm{PB}=3.5$. With the depletion model $C_{BD}=\mathrm{CJ}\,A/(1+|V_{BD}|/\mathrm{PB})^{\mathrm{MJ}}+\mathrm{CJSW}\,P/(1+|V_{BD}|/\mathrm{PB})^{\mathrm{MJSW}}$:

$$
\begin{aligned}
C_{BD1}&=\frac{(770\ \mu\mathrm{F/m^2})(60\ \mu\mathrm m^2)}{3.5^{0.5}}+\frac{(380\ \mathrm{pF/m})(32\ \mu\mathrm m)}{3.5^{0.38}}=\frac{46.2\ \mathrm{fF}}{1.871}+\frac{12.16\ \mathrm{fF}}{1.610}=24.7+7.6=32.2\ \mathrm{fF},\\
C_{BD2}&=\frac{(560\ \mu\mathrm{F/m^2})(120\ \mu\mathrm m^2)}{3.5^{0.5}}+\frac{(350\ \mathrm{pF/m})(52\ \mu\mathrm m)}{3.5^{0.35}}=\frac{67.2\ \mathrm{fF}}{1.871}+\frac{18.2\ \mathrm{fF}}{1.550}=35.9+11.7=47.7\ \mathrm{fF}.
\end{aligned}
$$

### Step 3 — Overlaps of the driver and gate capacitance of the load

M1 and M2 are saturated, so their drains connect to their gates only through the overlaps:

$$
C_{GD1}+C_{GD2}=(220\ \mathrm{pF/m})(10\ \mu\mathrm m+20\ \mu\mathrm m)=6.6\ \mathrm{fF}.
$$

The gates of M3 and M4 are on $v_x$. In saturation each gate carries $C_{GS}=\mathrm{CGSO}\cdot W+\tfrac23C_{ox}WL$, $C_{GD}=\mathrm{CGDO}\cdot W$ and $C_{GB}=\mathrm{CGBO}\cdot L$. With $C_{ox}WL=49.4$ fF (M3) and 98.8 fF (M4), and $\mathrm{CGBO}\cdot L=(700\ \mathrm{pF/m})(2\ \mu\mathrm m)=1.4$ fF:

| Load device | $C_{GS}$ (fF) | $C_{GD}$ (fF) | $C_{GB}$ (fF) | Sum (fF) |
|---|---|---|---|---|
| M3 | $2.2+\tfrac23(49.4)=35.1$ | 2.2 | 1.4 | 38.7 |
| M4 | $4.4+\tfrac23(98.8)=70.3$ | 4.4 | 1.4 | 76.1 |

The other plates of these capacitors (ground, 5 V and $v_{out}$) are taken as ac ground, as the given definition of the pole implies; $C_{GD3}$ and $C_{GD4}$ are therefore counted once, without Miller multiplication.

### Step 4 — Total capacitance and pole

$$
\sum C=32.2+47.7+6.6+38.7+76.1=201.3\ \mathrm{fF}.
$$

The pole magnitude defined in the problem is

$$
|p|=\frac{1}{R\sum C}=\frac{1}{(1\ \mathrm{M\Omega})(201.3\ \mathrm{fF})}=4.97\times10^{6}\ \mathrm{rad/s},
\qquad
f_p=\frac{|p|}{2\pi}=790\ \mathrm{kHz}\approx0.79\ \mathrm{MHz}.
$$

(Using 0.67 instead of $\tfrac23$ gives 201.8 fF and 789 kHz.) The reverse bias matters: with the junctions at zero bias they would be 58.4 fF and 85.4 fF, the total 266 fF and the pole about 600 kHz.
