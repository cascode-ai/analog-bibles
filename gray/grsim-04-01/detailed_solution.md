# Detailed solution - grsim-04-01

All five transistors share one base–emitter voltage, so the collector currents scale with the number of devices: two diode-connected input devices ($Q_1$, $Q_2$) and three output devices ($Q_3$–$Q_5$) give a mirror ratio of 3/2. The Early effect then makes $I_{OUT}$ rise with $V_{OUT}$, and the output resistance is that of the three output transistors in parallel. Base currents are ignored in the hand analysis and included in the simulation.

### Step 1 — Input current

The resistor carries the input current down to the diode-connected pair, whose base–emitter voltage is $V_{BE}=V_T\ln(I_C/I_S)$ at about 0.72 mA per device:

$$
V_{BE}=26\ \mathrm{mV}\,\ln\frac{0.717\ \mathrm{mA}}{5\times10^{-15}\ \mathrm A}=0.668\ \mathrm V,\qquad
I_{IN}=\frac{15\ \mathrm V-0.668\ \mathrm V}{10\ \mathrm{k\Omega}}=1.433\ \mathrm{mA}.
$$

### Step 2 — Mirror ratio and output current

$Q_1$, $Q_2$ each carry $I_{IN}/2$. The output transistors have the same $V_{BE}$, so at $V_{CE}=V_{BE}$ (no Early mismatch) each also carries $I_{IN}/2$, and together

$$
I_{OUT}\big|_{V_{OUT}=V_{BE}}=\frac32I_{IN}=2.150\ \mathrm{mA}.
$$

With the Early effect, $I_C\propto1+V_{CE}/V_A$, the output devices at $V_{CE}=V_{OUT}$ carry more than the input devices at $V_{CE}=V_{BE}$. To first order,

$$
I_{OUT}=2.150\ \mathrm{mA}\left[1+\frac{V_{OUT}-V_{BE}}{V_A}\right].
$$

For example, at $V_{OUT}=5$ V: $2.150\ \mathrm{mA}\,[1+(5-0.668)/130]=2.221$ mA.

### Step 3 — Output resistance

A change in $V_{OUT}$ changes only the three output collectors, each through its own $r_o=V_A/I_C$; in parallel,

$$
R_o=r_{o3}\parallel r_{o4}\parallel r_{o5}=\frac{V_A}{I_{OUT}}=\frac{130\ \mathrm V}{2.15\ \mathrm{mA}}=60.5\ \mathrm{k\Omega}.
$$

### Step 4 — SPICE check

The simulation includes base currents, which the hand analysis ignored. The total base current of the five devices, $5I_C/\beta_F=2.5(2I_C)/\beta_F$, is taken from $I_{IN}$, so every current is lower by the factor $1/(1+2.5/\beta_F)=0.988$.

```spice
* grsim-04-01 bipolar current mirror, ratio 3/2
VCC vcc 0 15
R   vcc b 10k
Q1  b b 0 npn
Q2  b b 0 npn
Q3  out b 0 npn
Q4  out b 0 npn
Q5  out b 0 npn
VOUT out 0 5
.model npn npn is=5e-15 bf=200 vaf=130
.control
dc VOUT 0 30 0.01
let iout = -i(VOUT)
wrdata iout.txt iout
.endc
.end
```

| $V_{OUT}$ | Hand $I_{OUT}$ | Hand × 0.988 | ngspice $I_{OUT}$ |
|---|---|---|---|
| 1 V | 2.155 mA | 2.129 mA | 2.129 mA |
| 5 V | 2.221 mA | 2.194 mA | 2.195 mA |
| 30 V | 2.635 mA | 2.602 mA | 2.603 mA |

The simulated slope between 5 V and 15 V is 16.3 μA/V, i.e. $R_o=61.2$ kΩ, matching the hand value of about 60 kΩ (the value rises slightly with $V_{OUT}$ because $r_o$ depends on the actual current). After the base-current factor is applied, hand analysis and simulation agree to within 0.1%. The small remaining difference comes from SPICE's Early model, $I_C\propto(1+V_{CE}/V_A)$ for both input and output devices, which gives the ratio $(1+V_{OUT}/V_A)/(1+V_{BE}/V_A)$ instead of the linearized $1+(V_{OUT}-V_{BE})/V_A$.
