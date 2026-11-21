# Detailed solution - grsim-05-20

Work outward from the bias mirror: $Q_5$–$Q_6$ fix the current into $Q_1$'s base node, the gate loop through $M_1$, $Q_3$, $M_2$ and $Q_1$ fixes the ratio between the branches, and two KCL equations then give every quiescent current. The output limits follow from which device leaves the active region first. A full-model ngspice run checks the bias point, the class AB transfer curve and the current waveforms.

### Step 1 — Bias mirror and $M_3$

$Q_5$ is held at 100 µA by the current source; $M_3$ closes a loop that supplies the pnp base currents. $Q_6$ has 5 times the area and $R_4=R_3/5$, so it runs at the same current density with the same emitter-resistor drop ($105\ \mu\mathrm A\times500\ \Omega=0.525\ \mathrm{mA}\times100\ \Omega=52.5$ mV, counting base current in the emitter current):

$$
I_{C5}=100\ \mu\mathrm A,\qquad I_{C6}=5I_{C5}=0.5\ \mathrm{mA}.
$$

$M_3$ carries both pnp base currents, $(0.1+0.5)\ \mathrm{mA}/20=30\ \mu$A, at $|V_{ov3}|=\sqrt{2(30\ \mu\mathrm A)/(26\ \mu\mathrm{A/V^2}\cdot1)}=1.52$ V, i.e. $V_{SG3}\approx2.2$ V.

### Step 2 — Gate loop: equal MOS currents

Go from $Q_1$'s base node $B_1$ down to $V_i$ along both paths:

$$
V_{SG}(M_1)+V_{BE3}=V_{BE1}+V_{SG}(M_2).
$$

With all $V_{BE}=0.8$ V, $V_{SG1}=V_{SG2}$, and since $M_1$ and $M_2$ are identical (bodies tied to sources), $I_{D1}=I_{D2}=I_D$. Each MOS current splits into a 10-kΩ resistor and a base:

$$
I_{R1}=I_{R2}=\frac{0.8\ \mathrm V}{10\ \mathrm{k\Omega}}=80\ \mu\mathrm A,\qquad I_D=80\ \mu\mathrm A+I_{B3}=80\ \mu\mathrm A+I_{B2},
$$

so $I_{B2}=I_{B3}$ and $I_{C2}=I_{C3}\equiv I_C$.

### Step 3 — Quiescent currents from KCL

At $V_o=0$ no current flows in $R_L$. KCL at the output gives $I_{E1}=I_{C2}+I_{D2}$; at $B_1$, $I_{C6}=I_{B1}+I_{D1}+I_{C3}$. With $I_D=80\ \mu\mathrm A+I_C/80$ and $I_{B1}=I_{E1}/81$:

$$
0.5\ \mathrm{mA}=\frac{I_C+80\ \mu\mathrm A+I_C/80}{81}+80\ \mu\mathrm A+\frac{I_C}{80}+I_C
\;\Rightarrow\;I_C=0.409\ \mathrm{mA}.
$$

| Device | $Q_5$ | $Q_6$ | $M_3$ | $R_1$, $R_2$ | $M_1$, $M_2$ | $Q_2$, $Q_3$ | $Q_1$ |
|---|---|---|---|---|---|---|---|
| Current | 100 µA | 0.5 mA | 30 µA | 80 µA | 85.1 µA | 0.409 mA | 0.488 mA |

For the MOS devices, $V_{ov}=\sqrt{2(85.1\ \mu\mathrm A)/(26\ \mu\mathrm{A/V^2}\cdot500)}=0.114$ V and $V_{SG}=0.814$ V. Since $V_o-V_i=V_{SG2}$, the input sits at $V_i\approx-0.81$ V for $V_o=0$.

### Step 4 — Output limits and maximum power

**Positive limit.** $Q_1$ follows $B_1$, and $B_1$ can rise only until $Q_6$ saturates. With $V_{CE(\text{sat})}\approx0.2$ V and the 50-mV drop in $R_4$:

$$
V_o^+=5-0.05-0.2-V_{BE1}=3.95\ \mathrm V .
$$

The drive is not the limit: $Q_6$'s 0.5 mA can support $81\times0.5\ \mathrm{mA}\times200\ \Omega=8.1$ V.

**Negative limit.** The load current is sunk by $Q_2$, whose base is driven by $M_2$. Its drain sits at $-5+V_{BE2}$, so the composite saturates when $M_2$ leaves saturation, $V_{SD2}=V_{ov2}$. At $|V_o|\approx4$ V, $I_{C2}\approx20$ mA, $I_{D2}=80\ \mu\mathrm A+20\ \mathrm{mA}/80=0.33$ mA and $V_{ov2}=0.225$ V:

$$
V_o^-=-5+V_{BE2}+V_{ov2}=-5+0.8+0.225=-3.98\ \mathrm V .
$$

Clipping is nearly symmetric at $\hat V_o\approx3.95$ V, so

$$
P_{L,\max}=\frac{\hat V_o^2}{2R_L}=\frac{(3.95\ \mathrm V)^2}{400\ \Omega}=39\ \mathrm{mW}.
$$

### Step 5 — SPICE model

The bipolar parameters are scaled by area (×25: $I_S\times25$, resistances ÷25, capacitances ×25, via the device area factor). The pMOS model uses level 1 with $k'=26\ \mu\mathrm{A/V^2}$, $V_t=-0.7$ V and $L_d=0.18$ µm; $\lambda=(dX_d/dV_{DS})/L_{\text{eff}}=0.04/0.64=0.0625\ \mathrm{V^{-1}}$ for $L=1$ µm and 0.024 V⁻¹ for $M_3$ ($L=2$ µm).

```spice
* grsim-05-20 BiCMOS class AB output stage
.model npn1 npn is=6e-18 bf=80 br=2 vaf=35 rb=400 rc=100 re=40 tf=10p cje=5f cjc=5f cjs=20f
.model pnp1 pnp is=6e-18 bf=20 br=3 vaf=30 rb=200 rc=20 re=10 tf=650p cje=14f cjc=15f
.model pm  pmos level=1 vto=-0.7 kp=26u tox=15n ld=0.18u lambda=0.0625 cj=0.30m cjsw=2.2n cgso=0.18n cgdo=0.18n
.model pm3 pmos level=1 vto=-0.7 kp=26u tox=15n ld=0.18u lambda=0.0244 cj=0.30m cjsw=2.2n cgso=0.18n cgdo=0.18n
VCC vcc 0 5
VEE vee 0 -5
R3 vcc e5 500
R4 vcc e6 100
Q5 c5 p e5 pnp1 1
Q6 b1 p e6 pnp1 5
M3 0 c5 p p pm3 w=2u l=2u
I100 c5 0 100u
M1 x x b1 b1 pm w=500u l=1u
R1 x vi 10k
Q3 b1 x vi npn1 25
Q1 vcc b1 out npn1 25
M2 y vi out out pm w=500u l=1u
R2 y vee 10k
Q2 out y vee npn1 25
RL out 0 200
Vin vi 0 dc -0.779 sin(-0.779 2.06 10k)
.dc Vin -6 6 5m
.tran 0.1u 300u 200u
.end
```

### Step 6 — Simulated bias point

At $V_o=0$ ($V_i=-0.779$ V):

| Device | $Q_5$ | $Q_6$ | $M_3$ | $M_1$ | $M_2$ | $Q_3$ | $Q_2$ | $Q_1$ |
|---|---|---|---|---|---|---|---|---|
| Hand | 100 µA | 0.5 mA | 30 µA | 85 µA | 85 µA | 0.41 mA | 0.41 mA | 0.49 mA |
| SPICE | 100 µA | 0.508 mA | 27.5 µA | 79.3 µA | 80.4 µA | 0.422 mA | 0.530 mA | 0.604 mA |

The mirror and the MOS currents agree closely. The output-pair current differs by up to 25 % because it is set by a small difference: $I_{B2}=I_{D2}-V_{BE2}/R_2$ is only about 6 µA, and the ×25 devices run at $V_{BE}\approx0.745$ V (so $I_{R}\approx74.5\ \mu$A) with an effective $\beta$ near 90 once the Early effect is included. A few millivolts of $V_{BE}$ difference between $Q_2$ and $Q_3$ shifts this current noticeably, so a quiescent current of 0.4–0.6 mA is what this topology gives. $V_{SG}$ is 0.78–0.79 V, slightly below the hand value because $L_d$ raises $W/L_{\text{eff}}$.

### Step 7 — Transfer characteristic and current waveforms

![Simulated dc transfer characteristic: unity-like slope, smooth through zero, clipping near ±4 V](/q/grsim-05-20/solution-transfer.svg)

$V_o\approx V_i+0.78$ V with slope 0.966–0.976, smooth through zero because both $Q_1$ and $Q_2$ conduct at the crossover (class AB, no dead band). The limits are +4.03 V ($Q_6$ saturated; hand 3.95 V) and about −4.1 V, reached gradually as $M_2$ leaves saturation (hand −3.98 V).

For the waveforms, $V_i$ is a 10-kHz sine around −0.779 V with amplitude $2\ \mathrm V/0.97$ or $4\ \mathrm V/0.97$:

| Output peak | $I_{c1}$ peak / minimum | $I_{c2}$ peak / minimum | $I_{d2}$ peak / at zero crossings |
|---|---|---|---|
| 2 V (+1.96 / −2.01 V) | 9.70 mA / 89 µA | 9.93 mA / ≈ 0 | 0.201 mA / ≈ 80 µA |
| 4 V (+3.96 / −4.01 V) | 19.6 mA / 8 µA | 19.7 mA / ≈ 0 | 0.334 mA / ≈ 80 µA |

![Simulated Ic1, Ic2 and Id2 for a 2-V-peak output](/q/grsim-05-20/solution-currents-2v.svg)

![Simulated Ic1, Ic2 and Id2 for a 4-V-peak output](/q/grsim-05-20/solution-currents-4v.svg)

$Q_1$ and $Q_2$ conduct on complementary half-cycles, each about $\hat V_o/R_L$ at its peak, and hand over smoothly at the zero crossings. $I_{d2}$ tracks $I_{c2}$ as $80\ \mu\mathrm A+I_{c2}/\beta$: about 80 µA at the crossings, 0.2 mA at the negative peak for 2 V and 0.33 mA for 4 V, and nearly zero on the positive half, when $Q_2$ is off. At 4 V the output just reaches the clipping region and the peaks begin to flatten.
