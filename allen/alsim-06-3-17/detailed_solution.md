# Detailed solution - alsim-06-3-17

This is a design with a self-computed score; one complete design follows. The topology is the standard two-stage OTA. A p-channel input pair gives a wide input range towards the negative rail and a small input overdrive for high $g_{m1}$. An n-channel common-source output stage follows, compensated by $C_c$ in series with a MOS nulling resistor that cancels the output pole. The specifications that bind are slew rate and power: $I_7-I_5\ge(10\ \mathrm{V/\mu s})(10\ \mathrm{pF})=100\ \mu$A must fit in a 1-mW budget, while GB ≥ 25 MHz sets $g_{m1}/C_c$.

### Step 1 — Circuit and sizes

<!-- diagram: diagram-01.cir -->

All $L=1$ µm; widths in µm:

| Device | Type | $W$ | Role |
|---|---|---|---|
| M1, M2 | p | 100 | input pair (bulks at $V_{DD}$) |
| M3, M4 | n | 14 | mirror load |
| M5 | p | 25 | tail, 2.5 × $I_{ref}$ |
| M6 | n | 100 | output driver |
| M7 | p | 95 | output load, 9.5 × $I_{ref}$ |
| M8 | p | 10 | bias diode, gate common with M5 and M7 |
| MB1, MB2 | p | 1 | stacked diodes, each bulk tied to its own source |
| MB3 | n | 1 | diode to $V_{SS}$ |
| MZ | n | 1 | nulling resistor, gate at $V_{DD}$ |

$C_c=2.5$ pF connects the drain of MZ to the output. (If the compensation must also be a MOSFET, about ten 100/1 gate-oxide capacitors in parallel give 2.5 pF; a plain capacitor is used here for simplicity.) The non-inverting input (node 1) drives M2, whose drain feeds M6.

### Step 2 — Bias current

The four diodes in series across 5 V carry $I_{ref}$; with no body effect in any of them,

$$
5\ \mathrm V=\left(0.7+\sqrt{\frac{2I_{ref}}{50\ \mu\cdot10}}\right)+2\left(0.7+\sqrt{\frac{2I_{ref}}{50\ \mu\cdot1}}\right)+\left(0.7+\sqrt{\frac{2I_{ref}}{110\ \mu\cdot1}}\right)\;\Rightarrow\;I_{ref}=13.5\ \mu\mathrm A .
$$

Then $I_5=2.5I_{ref}=33.8\ \mu$A, $I_1=I_2=16.9\ \mu$A and $I_6=I_7=9.5I_{ref}=128.5\ \mu$A.

### Step 3 — Hand values

**Gain.**

$$
\begin{aligned}
g_{m1}&=\sqrt{2(50\ \mu)(100)(16.9\ \mu)}=411\ \mu\mathrm S,\qquad g_{m6}=\sqrt{2(110\ \mu)(100)(128.5\ \mu)}=1.68\ \mathrm{mS},\\
A_{vd}&=\frac{g_{m1}}{(\lambda_P+\lambda_N)I_1}\cdot\frac{g_{m6}}{(\lambda_N+\lambda_P)I_6}=(270)(145)=3.9\times10^4\ (91.9\ \mathrm{dB}).
\end{aligned}
$$

**Output swing at ±50 µA.** Sourcing, M6 is cut off and M7 must stay saturated. Sinking, M6 carries $I_7+50\ \mu$A:

$$
V_o(\max)=2.5-\sqrt{\frac{2(128.5\ \mu)}{(50\ \mu)(95)}}=2.27\ \mathrm V,\qquad V_o(\min)=-2.5+\sqrt{\frac{2(178.5\ \mu)}{(110\ \mu)(100)}}=-2.32\ \mathrm V,
$$

so OVSR = 4.59 V. These are saturation edges, a conservative definition.

**Slew rate.** Internally $I_5/C_c=13.5$ V/µs. On a rising output edge, M7 must charge $C_L$ while M6 is off and $C_c$ draws $I_5$:

$$
SR\approx\frac{I_7-I_5}{C_L}=\frac{(128.5-33.8)\ \mu\mathrm A}{10\ \mathrm{pF}}=9.5\ \mathrm{V/\mu s}\ (\lambda\ \text{ignored}).
$$

**Input resistance and ICMR.** $R_{id}$ is that of MOS gates, effectively infinite. The ICMR limits are

$$
V_{in}(\max)=2.5-V_{SD5}(\mathrm{sat})-V_{SG1}=2.5-0.23-0.78=1.49\ \mathrm V,\qquad V_{in}(\min)=-2.5+V_{GS3}-|V_{TP}|=-2.35\ \mathrm V,
$$

so ICMR = 3.84 V.

**CMRR.**

$$
CMRR\approx\frac{g_{m1}}{g_{ds2}+g_{ds4}}\cdot\frac{2g_{m3}}{g_{ds5}}=(270)\frac{2(228\ \mu\mathrm S)}{(0.05)(33.8\ \mu\mathrm A)}=7.3\times10^4\ (97\ \mathrm{dB}).
$$

**Bandwidth, compensation and power.**

$$
GB=\frac{g_{m1}}{C_c}=\frac{411\ \mu\mathrm S}{2.5\ \mathrm{pF}}=26.2\ \mathrm{MHz}.
$$

The output pole $g_{m6}/C_L=26.7$ MHz is almost at GB, so without compensation of that pole the phase margin would be only about 45°. The nulling resistor places the zero on that pole, which requires $R_z=(C_c+C_L)/(g_{m6}C_c)=5/g_{m6}=2.97$ kΩ. MZ (1/1, gate at 2.5 V, source at node a ≈ −1.65 V, $V_T\approx0.86$ V with body effect) gives $R_z=1/[K'_N(4.15-0.86)]=2.77$ kΩ. The remaining nondominant roots (the $R_zC$ pole at node a and the mirror pole) leave an estimated 65–70° once the junction capacitances are included.

$$
P_{diss}=(5\ \mathrm V)(13.5+33.8+128.5)\ \mu\mathrm A=0.88\ \mathrm{mW}.
$$

### Step 4 — SPICE setup

The deck uses LEVEL-1 models with all capacitances (overlaps, TOX, and junctions with AD = AS = W × 10 µm, PD = PS = 2W + 20 µm). The measurements are:
- open-loop ac with dc feedback (1-GH inductor from output to node 2, 1 F to ground) for $A_{vd}$, GB and phase margin;
- the same with a common-mode ac source driving both inputs for CMRR;
- a unity-gain buffer with ±1-V input steps for the slew rate;
- a buffer dc sweep of the input from −2.5 to 2.5 V for the ICMR, with limits where the follower error exceeds 10 mV or $I_5$ falls by 10%;
- open-loop drive with a 50-µA current load at the output, in each direction, for the OVSR.

```spice
* alsim-06-3-17 OTA, open-loop ac (nodes: 1 +in, 2 -in, 3 out, 4 VDD, 5 VSS)
VDD 4 0 DC 2.5
VSS 5 0 DC -2.5
M8 nb nb 4 4 PCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
MB1 x1 x1 nb nb PCH W=1U L=1U AD=10P AS=10P PD=22U PS=22U
MB2 x2 x2 x1 x1 PCH W=1U L=1U AD=10P AS=10P PD=22U PS=22U
MB3 x2 x2 5 5 NCH W=1U L=1U AD=10P AS=10P PD=22U PS=22U
M5 t nb 4 4 PCH W=25U L=1U AD=250P AS=250P PD=70U PS=70U
M1 d1 2 t 4 PCH W=100U L=1U AD=1000P AS=1000P PD=220U PS=220U
M2 a 1 t 4 PCH W=100U L=1U AD=1000P AS=1000P PD=220U PS=220U
M3 d1 d1 5 5 NCH W=14U L=1U AD=140P AS=140P PD=48U PS=48U
M4 a d1 5 5 NCH W=14U L=1U AD=140P AS=140P PD=48U PS=48U
M6 3 a 5 5 NCH W=100U L=1U AD=1000P AS=1000P PD=220U PS=220U
M7 3 nb 4 4 PCH W=95U L=1U AD=950P AS=950P PD=210U PS=210U
MZ a 4 c 5 NCH W=1U L=1U AD=10P AS=10P PD=22U PS=22U
CC c 3 2.5P
CL 3 0 10P
VIN 1 0 DC 0 AC 1
LF 3 2 1G
CF 2 0 1
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
+ CGSO=220P CGDO=220P CGBO=700P CJ=770U CJSW=380P MJ=0.5 MJSW=0.38 TOX=140E-10
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
+ CGSO=220P CGDO=220P CGBO=700P CJ=560U CJSW=350P MJ=0.5 MJSW=0.35 TOX=140E-10
.OP
.AC DEC 100 1 1G
.PRINT AC VDB(3) VP(3)
.END
```

### Step 5 — SPICE results

The operating point gives $I_{ref}=14.4\ \mu$A, $I_5=36.8\ \mu$A, $I_7=146.9\ \mu$A, a supply current of 198.1 µA, $g_{m1}=457\ \mu$S, $g_{m6}=1.89$ mS and $R_z=2.77$ kΩ. The currents are 7–14% above the hand values because of the $(1+\lambda V_{DS})$ factors.

![Simulated open-loop gain and phase with a 10 pF load, showing GB = 25.8 MHz and a 66.1° phase margin](/q/alsim-06-3-17/solution-bode.svg)

![Simulated ±1 V step response of the unity-gain buffer with 10 pF, rising at 10.8 V/µs and falling at 16.6 V/µs](/q/alsim-06-3-17/solution-slew.svg)

| | $A_{vd}$ | OVSR | SR | $R_{id}$ | ICMR | CMRR | GB | $\phi(GB)$ | $P_{diss}$ |
|---|---|---|---|---|---|---|---|---|---|
| Hand values | 3.9 × 10⁴ (91.9 dB) | 4.59 V | 9.5 V/µs | ∞ | 3.84 V | 7.3 × 10⁴ | 26.2 MHz | ≈ 65–70° | 0.88 mW |
| SPICE values | 4.78 × 10⁴ (93.6 dB) | 4.94 V (+2.45/−2.49 V) | 10.8 V/µs | ∞ (MOS gates) | 3.98 V (−2.49 to +1.49 V) | 1.1 × 10⁵ (101 dB) | 25.8 MHz | 66.1° | 0.99 mW |

The differences between the two rows have clear causes.
- **Currents.** The higher simulated currents raise SR, $g_{m1}$ and power.
- **OVSR.** The simulation reports the actual output limits while delivering ±50 µA, with the transistors allowed into triode; the hand values are the saturation edges.
- **ICMR.** The body effect of M1 and M2 (bulks at $V_{DD}$) moves the lower limit to −2.49 V.
- **CMRR.** It is higher because the simulated circuit is perfectly matched.

The hand slew rate (λ ignored) falls just short of 10 V/µs, while the simulated value meets it with 8% margin.

### Step 6 — Score

Using the SPICE values, each term is capped at 5:

$$
\begin{aligned}
\mathrm{Score}&=\min[5,5(4.78)]+\min\!\left[5,5\tfrac{4.94}{4.5}\right]+\min\!\left[5,5\tfrac{10.8}{10}\right]+5+\min\!\left[5,5\tfrac{3.98}{3}\right]+\min[5,5(110)]\\
&\quad+\min\!\left[5,5\tfrac{25.8}{25}\right]+\min\!\left[5,5\tfrac{66.1}{60}\right]+\min\!\left[5,5\tfrac{1}{0.99}\right]+4=45+4=49 .
\end{aligned}
$$

All nine performance terms reach their cap. The simplicity factor is taken as 4: a single standard two-stage topology with a MOS-only bias string and one nulling transistor, but with the output pole cancelled rather than simply pushed away. The tightest items are GB (3% margin), the slew rate (8%) and power (1%). They are coupled: more output current would improve SR and phase margin but exceed 1 mW.
