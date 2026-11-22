# Detailed solution - alsim-06-6-06

CMRR is the ratio $A_v/A_c$. Instead of measuring its reciprocal, let one op amp amplify an ac signal differentially and an identical op amp amplify the same signal in common mode. The ratio of their outputs is then the CMRR itself. Both op amps need a defined dc operating point, provided by a feedback path that is closed at dc and open at the analysis frequencies. Postprocessing forms the ratio. The method is checked here with the two-stage op amp of alsim-06-3-07 (load 20 pF).

### Step 1 — Op amp 1: differential gain

Drive the non-inverting input with the ac source $v$ (1 V). Return the inverting input to ground through a very large capacitor $C_F$, and close a dc feedback path from the output to the inverting input through a very large inductor $L_F$ (or a very large resistor with the capacitor). At dc the op amp is a follower, so its output sits mid-range. At any analysis frequency $L_F$ is open and $C_F$ is a short, so the inverting input is at ac ground and

$$
v_{o1}=A_v(j\omega)\,v .
$$

### Step 2 — Op amp 2: common-mode gain

Use an identical op amp with the same load and the same dc stabilization, but return $C_F$ to the source $v$ instead of to ground. At the analysis frequencies both inputs then carry the same signal $v$, and

$$
v_{o2}=A_c(j\omega)\,v .
$$

Making the two stabilizing networks identical ensures that they do not bias the comparison.

### Step 3 — Ratio

With the same source driving both op amps,

$$
\frac{v_{o1}}{v_{o2}}=\frac{A_v(j\omega)}{A_c(j\omega)}=\mathrm{CMRR}(j\omega),
$$

so the postprocessed quantity `V(o1)/V(o2)`, or `VDB(o1) - VDB(o2)` in decibels, is proportional to the CMRR (equal to it for $v=1$ V), including its phase and frequency dependence. A behavioural source computing $v_{o1}/v_{o2}$ would give the same result as a node voltage. Placing a 1/CMRR network inside the feedback loop of a second identical op amp is less useful: the loop gain would be only about $A_v/\mathrm{CMRR}=|A_c|$, too small to force an accurate result.

### Step 4 — Deck

```spice
* alsim-06-6-06 CMRR as a ratio of two outputs
.include opamp.sub
VDD vdd 0 DC 2.5
VSS vss 0 DC -2.5
VS s 0 DC 0 AC 1
* op amp 1: differential gain, dc-stabilized by LF1/CF1
X1 s n1 o1 vdd vss OPAMP
LF1 o1 n1 1G
CF1 n1 0 1
CL1 o1 0 20P
* op amp 2: common-mode gain, same stabilization, CF2 returned to the source
X2 s n2 o2 vdd vss OPAMP
LF2 o2 n2 1G
CF2 n2 s 1
CL2 o2 0 20P
* reference: direct configuration (follower with Vcm in series with both inputs)
X3 s n3 o3 vdd vss OPAMP
VC3 n3 o3 DC 0 AC 1
CL3 o3 0 20P
.control
ac dec 20 1 100meg
let cmrr = db(v(o1))-db(v(o2))
let direct = -db(v(o3))
.endc
.END
```

`opamp.sub` holds the op amp of alsim-06-3-07 as subcircuit `OPAMP` (pins: non-inverting input, inverting input, output, $V_{DD}$, $V_{SS}$). The third op amp is the usual direct configuration, kept for comparison.

### Step 5 — Results

At low frequency $A_v=70.47$ dB and $A_c=-13.32$ dB, so the ratio method gives

$$
\mathrm{CMRR}=70.47\ \mathrm{dB}-(-13.32\ \mathrm{dB})=83.8\ \mathrm{dB}\;(1.55\times10^4).
$$

![CMRR versus frequency from the ratio method and from the reciprocal of the direct configuration, for the op amp of alsim-06-3-07 with 20 pF load](/q/alsim-06-6-06/solution-cmrr.svg)

| Frequency | 10 Hz | 10 kHz | 100 kHz | 1 MHz | 10 MHz |
|---|---|---|---|---|---|
| Ratio method (dB) | 83.78 | 83.78 | 83.77 | 82.70 | 61.33 |
| 1/(direct result) (dB) | 83.79 | 83.78 | 83.75 | 81.01 | 77.20 |

Up to a few hundred kilohertz the two methods agree to within 0.02 dB, so the ratio is indeed the reciprocal of the direct measurement. The CMRR of this op amp is flat at 83.8 dB and falls 3 dB at about 1.8 MHz. Above the op amp's GB (≈ 1.5 MHz with 20 pF) the direct method fails. It assumes $v_{out}/v_{cm}=A_c/(1+A_v)\approx A_c/A_v$, which needs $|A_v|\gg1$, so it reports a CMRR that levels off near 77 dB. The ratio method keeps measuring $A_v/A_c$ correctly at all frequencies.
