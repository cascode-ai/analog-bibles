# Detailed solution - grsim-05-22

$M_1$ and $M_2$ are complementary source followers biased by the $V_{GS}$ drop across the diode-connected $M_4$ and $M_5$, which carry the 10-µA current of $M_3$; $M_6$ is a common-source driver. Size the output devices from the clipping conditions (where $M_3$ or $M_6$ leaves saturation), size $M_4$, $M_5$ from the 100-µA idling condition with minimum total area, and confirm the design with ngspice. All lengths are the minimum, $L=1$ µm, since area is $WL$ and every device needs only a given $W/L$; $\lambda$ is neglected in the hand design.

### Step 1 — Clipping conditions and the fixed devices

The gates of $M_1$ (node $A$) and $M_2$ (node $B$) are driven by the string $M_3$–$M_4$–$M_5$–$M_6$. $A$ can rise no higher than $V_{DD}-|V_{ov3}|$ before $M_3$ leaves saturation, and $B$ can fall no lower than $-V_{SS}+V_{ov6}$ before $M_6$ does. With $I=10\ \mu$A and $V_{ov}=\sqrt{2I/(k'W/L)}$:

$$
|V_{ov3}|=\sqrt{\frac{2(10\ \mu\mathrm A)}{(57.5\ \mu\mathrm{A/V^2})(50)}}=0.0834\ \mathrm V,\qquad
V_{ov6}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(127\ \mu\mathrm{A/V^2})(25)}}=0.0794\ \mathrm V.
$$

Thus the positive limit is $V_o^+=V_{DD}-|V_{ov3}|-V_{GS1}$ and the negative limit is $V_o^-=-V_{SS}+V_{ov6}+V_{SG2}$, each evaluated at the full 1-mA load current.

### Step 2 — Size $M_1$ for $V_o=+1$ V

At $V_o=+1$ V, $M_1$ supplies $I_{D1}=1$ mA ($M_2$ is off, Step 5). Its body is at $-V_{SS}$, so $V_{SB1}=3.5$ V and

$$
V_{t1}=0.7+0.16\left(\sqrt{0.65+3.5}-\sqrt{0.65}\right)=0.897\ \mathrm V .
$$

The largest available gate drive is $V_{GS1}=(2.5-0.0834)-1=1.4166$ V, so $V_{ov1}=0.5196$ V and

$$
\left(\frac WL\right)_1=\frac{2I_{D1}}{k_n'V_{ov1}^2}=\frac{2(1\ \mathrm{mA})}{(127\ \mu\mathrm{A/V^2})(0.5196\ \mathrm V)^2}=58.3 .
$$

### Step 3 — Size $M_2$ for $V_o=-1$ V

At $V_o=-1$ V, $M_2$ sinks the 1-mA load current. Its body is at $V_{DD}$, so $V_{BS2}=3.5$ V and

$$
|V_{t2}|=0.7+0.43\left(\sqrt{0.76+3.5}-\sqrt{0.76}\right)=0.7+0.43(2.0640-0.8718)=1.2126\ \mathrm V .
$$

The largest available drive is $V_{SG2}=-1-(-2.5+0.0794)=1.4206$ V, so $|V_{ov2}|=0.2080$ V. $M_1$ still conducts a little at this point (3.3 µA, from the bias string of Step 4), which $M_2$ must also sink:

$$
\left(\frac WL\right)_2=\frac{2(1\ \mathrm{mA}+3.3\ \mu\mathrm A)}{(57.5\ \mu\mathrm{A/V^2})(0.2080\ \mathrm V)^2}=807 .
$$

The large size is forced by the body effect: $|V_t|$ rises by 0.51 V and leaves only 0.21 V of overdrive. Without it, $(W/L)_2$ would come out near 200 and the stage would clip well before −1 V.

### Step 4 — Size $M_4$, $M_5$ for 100-µA idling with minimum area

At $V_o=0$ both output devices carry 100 µA with $V_{SB1}=V_{BS2}=2.5$ V:

$$
V_{GS1}=\underbrace{0.855}_{V_{t1}}+\sqrt{\frac{2(100\ \mu\mathrm A)}{(127\ \mu)(58.3)}}=0.855+0.164=1.019\ \mathrm V,\qquad
V_{SG2}=1.102+0.066=1.167\ \mathrm V .
$$

So the diode pair at 10 µA must drop $V_{GS4}+V_{SG5}=2.186$ V. Their common source $S$ sits at $V_{GS1}-V_{GS4}\approx+0.06$ V, giving $V_{t4}=0.858$ V and $|V_{t5}|=1.094$ V; the overdrives must therefore sum to $C=0.235$ V. Minimizing $(W/L)_4+(W/L)_5=\dfrac{2I}{k_n'V_{ov4}^2}+\dfrac{2I}{k_p'V_{ov5}^2}$ subject to $V_{ov4}+V_{ov5}=C$ (set the derivative with respect to $V_{ov4}$ to zero):

$$
\frac{1}{k_n'V_{ov4}^3}=\frac{1}{k_p'V_{ov5}^3}\;\Rightarrow\;\frac{V_{ov5}}{V_{ov4}}=\left(\frac{k_n'}{k_p'}\right)^{1/3}=1.303 .
$$

This gives $V_{ov4}=0.102$ V, $V_{ov5}=0.133$ V, and

$$
\left(\frac WL\right)_4=15.2,\qquad\left(\frac WL\right)_5=19.8 .
$$

The simple alternative of scaling $M_4$, $M_5$ as $M_1$, $M_2$ divided by 10 (5.8 and 81) would also give 100 µA but needs 87 µm² instead of 35 µm².

| Device | $M_1$ | $M_2$ | $M_3$ | $M_4$ | $M_5$ | $M_6$ |
|---|---|---|---|---|---|---|
| $W/L$ (µm/µm) | 58.3/1 | 807/1 | 50/1 | 15.2/1 | 19.8/1 | 25/1 |

Total gate area is about 975 µm², dominated by $M_2$.

### Step 5 — Checks on the hand design

At $V_o=+1$ V, $A=2.417$ V; working down the string gives $B=0.359$ V, so $V_{SG2}=0.64$ V, 0.33 V below its threshold (0.97 V at $V_{BS2}=1.5$ V): $M_2$ is off. At $V_o=-1$ V, $M_1$ carries only 3.3 µA. Both specifications are therefore met with the load current going entirely through the intended device.

### Step 6 — SPICE verification

The level-1 models carry the given $k'$, $V_{t0}$, $\gamma$, $2\phi_f$ and $\lambda$ (0.08 and 0.04 V⁻¹ at $L=1$ µm), with bodies at the rails. The BIAS voltage, $2.5-0.7-0.0834=1.7166$ V, sets 10 µA in $M_3$.

```spice
* grsim-05-22 CMOS class AB output stage
.model nm nmos level=1 kp=127u  vto=0.7  gamma=0.16 phi=0.65 lambda=0.08
.model pm pmos level=1 kp=57.5u vto=-0.7 gamma=0.43 phi=0.76 lambda=0.04
VDD vdd 0 2.5
VSS vss 0 -2.5
VB  bias 0 1.7166
M3 a bias vdd vdd pm w=50u   l=1u
M4 a a s vss nm      w=15.2u l=1u
M5 b b s vdd pm      w=19.8u l=1u
M6 b vi vss vss nm   w=25u   l=1u
M1 vdd a out vss nm  w=58.3u l=1u
M2 vss b out vdd pm  w=807u  l=1u
RL out 0 1k
Vin vi 0 -1.72
.dc Vin -1.9 -1.5 0.1m
.end
```

![Simulated Vo versus Vi: inverting, steep around Vi = −1.722 V, clipping beyond ±1 V](/q/grsim-05-22/solution-transfer.svg)

| Quantity | Hand | ngspice |
|---|---|---|
| $V_i$ for $V_o=0$ | $-2.5+0.7+0.079=-1.721$ V | −1.7224 V |
| Idling current in $M_1$, $M_2$ | 100 µA | 117 µA |
| Node $S$, node $A$ at $V_o=0$ | 0.060 V, 1.019 V | 0.060 V, 1.018 V |
| Positive limit | +1.0 V | +1.09 V |
| Negative limit | −1.0 V | −1.05 V |
| Gain at $V_o=0$ | — | −180 |

The characteristic is inverting, because $M_6$ is a common-source stage whose load is the high resistance of $M_3$ and $M_6$ ($r_{o3}\parallel r_{o6}\approx0.8\ \mathrm{M\Omega}$, so $g_{m6}(r_{o3}\parallel r_{o6})\approx210$, reduced by the follower gain). It passes smoothly through $V_o=0$, since both followers conduct there (class AB), and flattens just beyond ±1 V where $M_3$ or $M_6$ leaves saturation. With $\lambda=0$ the limits are +1.06 V and −1.06 V: the design meets ±1 V with a small margin, because $M_3$ and $M_6$ still supply some drive just after leaving saturation. Channel-length modulation raises the idling current to 117 µA (by $1+\lambda V_{DS}$ in the output devices) and moves the limits slightly outward.
