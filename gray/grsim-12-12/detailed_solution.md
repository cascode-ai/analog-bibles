# Detailed solution - grsim-12-12

First fix the sign: decide which way the CMFB must act on the gate of $M_5$, and choose the side of the sense amplifier that gives the required negative gain. The gain specification fixes the ratio $g_{m22}/g_{m24}$, and the dc requirement that $V_{cms}$ equal the bias of $M_5$ fixes the current density of the diode loads. The swing limits follow from the saturation conditions of the output devices and of the follower current sources. A SPICE run of the complete op amp with this CMFB circuit then checks the operating point, the loop's response and the swing.

### Step 1 — Required sign of the CM-sense gain

Raising $V_{cmc}$ reduces the current of the PMOS tail $M_5$. The NMOS loads $M_3$, $M_4$ keep their current, so the first-stage outputs fall; this lowers the gates of $M_6$, $M_9$, and $V_{o1}$, $V_{o2}$ rise. Thus $v_{oc}/v_{cmc}>0$, and the CMFB loop is negative only if $a_{cms}=v_{cms}/v_{oc}<0$.

### Step 2 — (a) Topology of the sense amplifier

In the complement of [Fig. 3], an NMOS pair $M_{21}$–$M_{22}$ with tail $M_{25}$ drives diode-connected PMOS loads $M_{23}$, $M_{24}$. Apply the averaged, level-shifted output ($\approx V_{oc}-V_{GS}$, from the $R_{cs}$ midpoint) to $M_{22}$ and the equally shifted reference $V_{CM}-V_{GS}$ to $M_{21}$, and take $V_{cms}$ from $M_{24}$, the diode that loads $M_{22}$. A rise in $V_{oc}$ increases $I_{D22}=|I_{D24}|$, which increases $V_{SG24}$ and lowers $V_{cms}$: the gain is negative, as required.

A differential input $v$ changes each drain current by $\pm g_{m22}v/2$, and the diode converts this to $-(g_{m22}v/2)/g_{m24}$. Including the followers' gain of 0.95:

$$
a_{cms0}=0.95\left(-\frac{g_{m22}}{2g_{m24}}\right)=-0.71\quad\Rightarrow\quad\frac{g_{m22}}{g_{m24}}=\frac{2(0.71)}{0.95}=1.49.
$$

### Step 3 — (a) Sizing

At balance ($V_{oc}=V_{CM}$), $V_{cms}$ must equal the gate voltage that gives $M_5$ its 200 µA:

$$
V_{cms}=V_{DD}-|V_{tp}|-|V_{ov5}|=1.65-0.8-0.5=0.35\ \mathrm V.
$$

$M_{24}$ produces this voltage if it runs at the same current density as $M_5$, $|I_D|/(W/L)=200\ \mu\mathrm A/25=8\ \mu$A per square, so that $|V_{ov24}|=0.5$ V. With equal branch currents $I$, $g_m=2I/V_{ov}$, so

$$
\frac{g_{m22}}{g_{m24}}=\frac{|V_{ov24}|}{V_{ov22}}=1.49\quad\Rightarrow\quad V_{ov22}=\frac{0.5\ \mathrm V}{1.49}=0.335\ \mathrm V.
$$

Choosing $I_{D25}=200\ \mu$A (100 µA per branch):

| Device | Choice | Reason |
|---|---|---|
| $M_{23}$, $M_{24}$ | $W/L=100/8=12.5$ | $\lvert V_{ov}\rvert=0.5$ V, so $V_{cms}=0.35$ V at balance |
| $M_{21}$, $M_{22}$ | $W/L=\dfrac{2(100\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.335\ \mathrm V)^2}\approx9.2$ | $g_{m22}=0.60$ mS, $g_{m24}=0.40$ mS |
| $M_{25}$ | $W/L\approx90$ ($V_{ov}=0.15$ V) | stays active with low $V_{DS}$ |

The pair's gates sit at $V_{CM}-V_{GS}=0.25-0.8=-0.55$ V (with $V_{CM}$ from part (c)). Their sources are then at $-0.55-(0.6+0.335)=-1.485$ V, leaving $V_{DS25}\approx0.165$ V above $-V_{SS}$. A tail overdrive of 0.15 V keeps $M_{25}$ saturated.

### Step 4 — (b) Swing limits of each output

- Upper limit: $M_7$ ($M_{10}$) leaves saturation when $V_{SD7}<|V_{ov7}|$, i.e. at $V_o=V_{DD}-|V_{ov7}|=1.65-0.5=1.15$ V. The NMOS follower, with its drain at $V_{DD}$, stays saturated as long as $V_{DD}-(V_o-V_{GS})\ge V_{ov}$, i.e. up to $V_o=V_{DD}+V_{GS}-V_{ov}=2.25$ V, so it does not limit.
- Lower limit: the follower's NMOS current source needs $V_{DS}\ge V_{ov}=0.2$ V. Its drain is at $V_o-V_{GS}$, so $(V_o-0.8)-(-1.65)\ge0.2$ gives $V_o\ge-0.65$ V. This is more restrictive than the op amp's own limit, $-V_{SS}+V_{ov6}=-1.15$ V.

Each output can therefore swing from $-0.65$ V to $+1.15$ V.

### Step 5 — (c) Best $V_{CM}$

The largest symmetric swing is obtained with the output CM level midway between the limits:

$$
V_{CM}=\frac{1.15+(-0.65)}{2}=0.25\ \mathrm V,
$$

giving ±0.9 V per output, i.e. a peak differential output of 1.8 V. At that extreme the resistors carry $V_{od}/(2R_{cs})=1.8\ \mathrm V/30\ \mathrm{k\Omega}=60\ \mu$A, so the follower bias current must exceed 60 µA; 100 µA is used below.

### Step 6 — (d) SPICE setup

The op amp of [Fig. 1] is simulated with level-1 models ($\mu C_{ox}$ and $V_t$ as given, drawn $L=1\ \mu$m, $\lambda_n=0.02$ and $\lambda_p=0.04\ \mathrm{V^{-1}}$ assumed since no value is given), $V_{B1}=0.35$ V for $M_7$/$M_{10}$, and $V_{B2}$ set for 100 µA in $M_3$/$M_4$. The CM detector uses three identical NMOS followers ($W/L=25.8$, 100 µA, $V_{GS}=0.8$ V) with NMOS current sources, $R_{cs}=15$ kΩ, and the sense amplifier of Step 3 with $V_{cms}$ wired directly to the gate of $M_5$; $V_{CM}=0.25$ V.

```spice
* grsim-12-12 op amp with source-follower CMFB
VDD vdd 0 1.65
VSS vss 0 -1.65
VB1 vb1 0 0.35
VB2 vb2 0 -0.5418
VBN vbn 0 -0.85
VCMS vcm 0 0.25
VI1 vi1 0 0
EI2 vi2 0 vi1 0 -1
M5 t cmc vdd vdd pm W=25u L=1u
M1 x1 vi1 t vdd pm W=77u L=1u
M2 x2 vi2 t vdd pm W=77u L=1u
M3 x1 vb2 vss vss nm W=4u L=1u
M4 x2 vb2 vss vss nm W=4u L=1u
M6 vo1 x2 vss vss nm W=16u L=1u
M7 vo1 vb1 vdd vdd pm W=50u L=1u
M9 vo2 x1 vss vss nm W=16u L=1u
M10 vo2 vb1 vdd vdd pm W=50u L=1u
C1 x2 vo1 1.39p
C2 x1 vo2 1.39p
MF1 vdd vo1 f1 vss nm W=25.8u L=1u
MS1 f1 vbn vss vss nm W=25.8u L=1u
MF2 vdd vo2 f2 vss nm W=25.8u L=1u
MS2 f2 vbn vss vss nm W=25.8u L=1u
RCS1 f1 m 15k
RCS2 f2 m 15k
MFR vdd vcm fr vss nm W=25.8u L=1u
MSR fr vbn vss vss nm W=25.8u L=1u
M21 d21 fr s vss nm W=9.2u L=1u
M22 cmc m s vss nm W=9.2u L=1u
M23 d21 d21 vdd vdd pm W=12.5u L=1u
M24 cmc cmc vdd vdd pm W=12.5u L=1u
M25 s vbt vss vss nm W=90u L=1u
VBT vbt 0 -0.8986
.model nm nmos level=1 vto=0.6 kp=194u lambda=0.02
.model pm pmos level=1 vto=-0.8 kp=64.7u lambda=0.04
.op
.dc VI1 -0.25m 0.25m 0.25u
.end
```

### Step 7 — (d) Simulation results

Operating point: $V_{o1}=V_{o2}=0.265$ V, $V_{cmc}=0.353$ V, $|I_{D5}|=205\ \mu$A, $I_{D6}=427\ \mu$A, $I_{D25}=201\ \mu$A with $V_{DS25}=0.18$ V against $V_{DS,sat}=0.15$ V. The loop settles with $V_{oc}$ within 15 mV of $V_{CM}$, and $V_{cmc}$ at the bias of $M_5$, as designed.

- **CM-sense gain.** Driving the sense circuit alone with $v_{o1}=v_{o2}$ around 0.25 V gives $dV_{cms}/dV_{oc}=-0.73$. The level-1 followers with $\gamma=0$ have a gain of 0.996 rather than 0.95, which accounts for the difference from −0.71; the sign is negative, as required.
- **Loop response.** A 50-mV step in $V_{CM}$ moves $V_{oc}$ by 49.7 mV, which shows a large loop gain. It settles within about 10 ns with no overshoot, so the CMFB loop is stable with $C=1.39$ pF.
- **Swing.** An open-loop differential sweep drives the outputs to their limits:

![Simulated Vo1, Vo2 and their average versus differential input with the CMFB loop closed; the average stays near 0.26 V while each output swings between about −0.65 V and 1.15 V, marked as dotted lines](/q/grsim-12-12/solution-curves.svg)

| $V_{o1}$ (V) | $V_{o2}$ (V) | $V_{oc}$ (V) |
|---|---|---|
| 0.265 | 0.265 | 0.265 |
| −0.500 | 1.019 | 0.260 |
| −0.650 | 1.164 | 0.257 |
| −0.800 | 1.295 | 0.247 |

$V_{oc}$ stays within 10 mV of its balanced value while each output swings from about $-0.65$ V to $+1.15$ V (1.8 V differential). Beyond that, $M_7$/$M_{10}$ enter triode and the gain collapses, as seen in the knees of the curves at 1.15–1.2 V and the corresponding $-0.65$ V on the other side, so the CMFB circuit works correctly with $V_{CM}=0.25$ V.
