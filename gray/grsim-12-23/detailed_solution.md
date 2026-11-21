# Detailed solution - grsim-12-23

Size the two bias devices from current bookkeeping: the PMOS gate line and the tail must balance at the CMFB equilibrium. Then estimate the DM and CM gains from the cascode output resistance and the CMFB loop gain, and find the slew rate and swing from large-signal current and saturation limits. Each mismatch case is analysed by asking how it couples DM to CM. SPICE runs of the full circuit at the offset-corrected operating point give the four gains in each case.

### Step 1 — (a) Widths of $M_{12}$ and $M_{51}$

$M_{11}$ is diode-connected and carries $I_{DC}=100\ \mu$A. Every PMOS on its gate line with the same $96/1.4$ geometry ($M_3$, $M_4$, $M_{26}$, $M_{27}$) therefore carries 100 µA. $M_{12}$ feeds $M_{13}$, so it must carry 20 µA; at the same $L$ the current scales with $W$:

$$
W_{12}=96\ \mu\mathrm m\times\frac{20\ \mu\mathrm A}{100\ \mu\mathrm A}=19.2\ \mu\mathrm m\quad(L=1.4\ \mu\mathrm m).
$$

The tail node collects the currents of both input branches and of $M_{13}$:

$$
I_{tail}=|I_{D3}|+|I_{D4}|+I_{D13}=100+100+20=220\ \mu\mathrm A.
$$

At equilibrium ($V_{oc}=V_{CM}$) each CMFB pair splits its 100 µA equally, so $M_{25}$ carries $50+50=100\ \mu$A and the 1:1 mirror $M_{52}$ carries 100 µA. $M_{51}$ must supply the remaining 120 µA, i.e. 1.2 times $M_{14}$'s 100 µA:

$$
W_{51}=16\ \mu\mathrm m\times1.2=19.2\ \mu\mathrm m\quad(L=0.8\ \mu\mathrm m).
$$

### Step 2 — (b) Hand estimates of the gains

Square law and $\lambda=(dX_d/dV_{DS})/L$: $\lambda_n=0.025$, $\lambda_p(1.4\ \mu\mathrm m)=0.0286$, $\lambda_p(0.8\ \mu\mathrm m)=0.05\ \mathrm{V^{-1}}$.

$$
g_{m1}=\sqrt{2(194\ \mu\mathrm{A/V^2})(80)(100\ \mu\mathrm A)}=1.76\ \mathrm{mA/V},\quad
r_{o1}=\frac{1}{0.025(100\ \mu\mathrm A)}=400\ \mathrm{k\Omega},\quad
r_{o3}=\frac{1}{0.0286(100\ \mu\mathrm A)}=350\ \mathrm{k\Omega}.
$$

- DM: the cascode raises the resistance down from the output to $g_{m1C}r_{o1C}r_{o1}\approx280$ MΩ, so the output resistance is $\approx r_{o3}=350$ kΩ and $a_{dm}\approx-g_{m1}(350\ \mathrm{k\Omega})\approx-616$.
- CM, open loop: the tail resistance is $r_{o51}\parallel r_{o52}=333\parallel400=182$ kΩ, or 364 kΩ per half, so $a_{cm}\approx-350/364\approx-0.96$.
- CMFB loop: with 50 µA in each sense device and 100 µA in $M_{25}$, $g_{m21}=\sqrt{2(64.7\ \mu)(7.5)(50\ \mu)}=0.22$ mA/V and $g_{m25}=g_{m52}=\sqrt{2(194\ \mu)(20)(100\ \mu)}=0.88$ mA/V. A rise $v$ in $V_{oc}$ cuts the currents of $M_{21}$ and $M_{24}$ by $g_{m21}v/2$ each, and that current is steered into $M_{25}$, so $v_{g25}=(g_{m21}/g_{m25})v=0.25v$. Each half of $M_{52}$ adds $g_{m52}v_{g25}/2$ to its branch, which flows into $r_{o3}$: $a_{cmc}\approx-(g_{m52}/2)(350\ \mathrm{k\Omega})\approx-154$. The loop gain is $T\approx0.25\times154=38.5$, and the feedback is negative.

$$
\frac{v_{od}}{v_{id}}\approx-616,\qquad \frac{v_{oc}}{v_{ic}}\approx\frac{-0.96}{1+38.5}\approx-0.024,\qquad \frac{v_{od}}{v_{ic}}=\frac{v_{oc}}{v_{id}}=0\ \ \text{(balanced)}.
$$

### Step 3 — SPICE setup

Level-1 models use the given $k'$ and $V_t$, and three $\lambda$ values: NMOS 0.025, PMOS at $L=1.4\ \mu$m 0.0286, PMOS at $L=0.8\ \mu$m 0.05 $\mathrm{V^{-1}}$. $I_{DC}$ is the 100-µA source between the diodes $M_{11}$ and $M_{14}$. Both inputs sit at $V_{ic}=V_{CM}=-0.65$ V plus $\pm v_{id}/2$ from a single differential source. In every case a dc sweep first finds the input offset, i.e. the $V_{id}$ at which $V_{od}=0$; the operating point and the two ac runs (DM and CM) are then taken there.

```spice
* grsim-12-23 balanced case (edit W of M1, M2, M3, M4 for (e), (f))
VDD vdd 0 1.65
VSS vss 0 -1.65
IDC p p14 100u
M11 p p vdd vdd p14 W=96u L=1.4u
M12 g13 p vdd vdd p14 W=19.2u L=1.4u
M3 vo1 p vdd vdd p14 W=96u L=1.4u
M4 vo2 p vdd vdd p14 W=96u L=1.4u
M26 s1 p vdd vdd p14 W=96u L=1.4u
M27 s2 p vdd vdd p14 W=96u L=1.4u
M1C vo1 g13 a1 vss n08 W=64u L=0.8u
M2C vo2 g13 a2 vss n08 W=64u L=0.8u
M1 a1 vi1 t vss n08 W=64u L=0.8u
M2 a2 vi2 t vss n08 W=64u L=0.8u
M13 g13 g13 t vss n08 W=1.4u L=0.8u
M14 p14 p14 vss vss n08 W=16u L=0.8u
M51 t p14 vss vss n08 W=19.2u L=0.8u
M52 t g25 vss vss n08 W=16u L=0.8u
M21 vss vo2 s1 vdd p08 W=6u L=0.8u
M22 g25 vcm s1 vdd p08 W=6u L=0.8u
M23 g25 vcm s2 vdd p08 W=6u L=0.8u
M24 vss vo1 s2 vdd p08 W=6u L=0.8u
M25 g25 g25 vss vss n08 W=16u L=0.8u
VCMS vcm 0 -0.65
VID vid 0 dc 0 ac 1
VIC vic 0 dc -0.65 ac 0
EP vi1 vic vid 0 0.5
EN vi2 vic vid 0 -0.5
.model n08 nmos level=1 vto=0.6 kp=194u lambda=0.025
.model p14 pmos level=1 vto=-0.8 kp=64.7u lambda=0.028571
.model p08 pmos level=1 vto=-0.8 kp=64.7u lambda=0.05
.ac lin 1 10 10
.end
```

In the balanced circuit: $I_{D1}=103\ \mu$A, $I_{D13}=20.6\ \mu$A, $I_{D51}=118\ \mu$A, $I_{D52}=109\ \mu$A, $V_{tail}=-1.365$ V, $V_{G1C}=-0.421$ V, and $V_{o1}=V_{o2}=-0.596$ V. $V_{oc}$ sits 54 mV above $V_{CM}$ because the loop gain is finite and $\lambda$ shifts the mirror ratios.

### Step 4 — (b), (e), (f) Simulated gains

| Case | $V_{OS}$ | $v_{od}/v_{id}$ | $v_{oc}/v_{ic}$ | $v_{od}/v_{ic}$ | $v_{oc}/v_{id}$ |
|---|---|---|---|---|---|
| (b) balanced | 0 | −645 | −0.0270 | $\approx10^{-13}$ (0) | $\approx10^{-12}$ (0) |
| (e) $W_1=63$, $W_2=65\ \mu$m | 1.80 mV | −645 | −0.0270 | $+5.1\times10^{-4}$ | $+1.07\times10^{-4}$ |
| (f) $W_3=95$, $W_4=97\ \mu$m | −1.20 mV | −645 | −0.0270 | $-3.5\times10^{-4}$ | $-0.081$ |

In (b), the simulated −645 and −0.027 are within 5% and 11% of the hand values −616 and −0.024. The cross gains are zero to numerical precision.

### Step 5 — (e) Input-pair mismatch

The offset is the gate voltage needed to equalize the currents of devices with different $W$. For the square law,

$$
V_{OS}\approx\frac{V_{ov1}}{2}\frac{\Delta W}{W}=\frac{0.114\ \mathrm V}{2}\cdot\frac{2}{64}=1.8\ \mathrm{mV},
$$

matching the simulated 1.80 mV. At the corrected operating point the main gains are unchanged, and two small cross gains appear, with $\Delta g_m/g_m=\Delta W/2W=-1/64$:

- CM to DM: the CMFB lets only a tiny CM current flow per side, $i_{cm}=-v_{oc}/r_{o3}$. The two devices share it in proportion to their $g_m$, so $v_{od}=(\Delta g_m/g_m)v_{oc}=(-1/64)(-0.027)v_{ic}\approx+4\times10^{-4}v_{ic}$.
- DM to CM: a DM input produces unequal currents $\pm g_{m1,2}v_{id}/2$. Their sum moves the tail node, and the resulting tail-current change gives an open-loop CM output of about $(\Delta g_m/g_m)\,r_{o3}/(8R_{tail})\,v_{id}=(1/64)(350/1456)v_{id}=3.8\times10^{-3}v_{id}$. The CMFB divides this by $1+T\approx40$, giving $\approx1\times10^{-4}$.

Both agree in sign and order with the simulated values; the cross gains remain tiny because the CMFB suppresses them.

### Step 6 — (f) Load mismatch

The loads deliver currents in proportion to $W$, so $\Delta I=(2/96)(100\ \mu\mathrm A)=2.1\ \mu$A must be supplied by the input pair:

$$
V_{OS}\approx\frac{\Delta I}{g_{m1}}=\frac{2.1\ \mu\mathrm A}{1.76\ \mathrm{mA/V}}=1.2\ \mathrm{mV}
$$

in magnitude, as simulated. At the corrected point the two loads carry slightly different currents, so their output resistances differ: $r_{o3}=353.7$ kΩ and $r_{o4}=346.4$ kΩ. A DM signal current $\pm g_{m1}v_{id}/2$ then produces unequal output swings, and their average is a CM output:

$$
v_{oc,\text{open}}=\frac{g_{m1}v_{id}}{2}\cdot\frac{r_{o4}-r_{o3}}{2}=\frac{1.76\ \mathrm{mA/V}}{2}\cdot\frac{-7.3\ \mathrm{k\Omega}}{2}v_{id}=-3.2\,v_{id},
\qquad
\frac{v_{oc}}{v_{id}}\approx\frac{-3.2}{1+T}\approx-0.08.
$$

This is the simulated −0.081, much larger than in (e), because here the mismatch acts on the full DM gain. The same resistance difference converts the small CM current into $v_{od}=v_{oc}(r_{o3}-r_{o4})/r_o$, of order $10^{-4}v_{ic}$, as simulated. $v_{od}/v_{id}$ and $v_{oc}/v_{ic}$ are unchanged.

### Step 7 — (c) Slew rate

For a large DM step, one input device turns off. The tail current of 220 µA (120 µA + 100 µA) minus the 20 µA of $M_{13}$ flows through the other cascode branch: 200 µA against its 100-µA load. That output is discharged by $200-100=100\ \mu$A. On the other side the input device is off, so its load charges the output with 100 µA. With 4 pF on each output:

$$
\left|\frac{dV_{o1}}{dt}\right|=\left|\frac{dV_{o2}}{dt}\right|=\frac{100\ \mu\mathrm A}{4\ \mathrm{pF}}=25\ \mathrm{V/\mu s},\qquad
\left|\frac{dV_{od}}{dt}\right|=50\ \mathrm{V/\mu s}.
$$

### Step 8 — (d) Differential output swing

With $V_{ic}=V_{CM}=-0.65$ V and the CMFB holding $V_{OC}=-0.65$ V:

- Lower limit (cascode): $V_{GS1}=0.6+0.114=0.714$ V puts the tail at $-1.364$ V. $M_{13}$ at 20 µA has $V_{GS13}=0.6+\sqrt{2(20\ \mu)/(194\ \mu\cdot1.75)}=0.943$ V, so $V_{G1C}=-0.421$ V. $M_{1C}$ leaves saturation when $V_o<V_{G1C}-V_{tn}=-1.02$ V. The devices below it are not the limit: $M_1$ has $V_{DS1}=V_{GS13}-V_{GS1C}=0.23$ V $>V_{ov1}$, and $M_{51}$ has $V_{DS}=0.29$ V $>V_{ov51}=0.23$ V.
- Upper limits: $M_3$ leaves saturation at $V_{DD}-|V_{ov3}|=1.65-0.21=1.44$ V. The CMFB pairs ($|V_{ov21}|=0.454$ V) switch fully when $|V_o-V_{CM}|>\sqrt2(0.454)=0.64$ V, i.e. above $-0.01$ V.

The binding limit is the lower one, $-0.65-(-1.02)=0.37$ V below $V_{OC}$, so each output swings between about $-1.02$ and $-0.28$ V:

$$
|V_{od}|_{\max}\approx2(0.37\ \mathrm V)=0.74\ \mathrm V\ \text{peak}\quad(1.48\ \mathrm V\ \text{peak-to-peak}).
$$

A dc sweep of the simulated circuit confirms this. $V_{oc}$ stays within about 20 mV of its quiescent value up to $V_{od}\approx0.75$ V; there the low output reaches −0.95 V. Beyond about 0.8 V the low output stops near −1.03 V at the cascode limit, and the CMFB can no longer hold $V_{oc}$, which rises to −0.53 V at $V_{od}=1$ V.
