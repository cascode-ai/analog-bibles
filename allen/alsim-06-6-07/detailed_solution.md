# Detailed solution - alsim-06-6-07

PSRR is the ratio of the differential gain to the gain from a supply to the output, $\mathrm{PSRR}^+=A_v/A_{dd}$ and $\mathrm{PSRR}^-=A_v/A_{ss}$. Two identical op amps, driven by the same ac source, produce the numerator and the denominator as two node voltages, and postprocessing takes their ratio. Both op amps are held at their linear operating point by the same dc-only feedback network. The method is demonstrated on a two-stage op amp with a 20-pF load.

### Step 1 — Op amp 1: differential gain

The ac source $v$ (1 V) drives the non-inverting input, and the supplies are quiet. The inverting input goes to ground through a very large $C_F$, and a very large $L_F$ from the output to the inverting input closes the loop at dc only. At the analysis frequencies the inverting input is an ac ground, so

$$
v_{o1}=A_v(j\omega)\,v .
$$

### Step 2 — Op amp 2: supply gain

An identical op amp with the same load and the same $L_F$/$C_F$ network has both inputs at ac ground. The same source $v$ is placed in series with its $V_{DD}$ (for PSRR⁺), or with its $V_{SS}$ (for PSRR⁻):

$$
v_{o2}=A_{dd}(j\omega)\,v\quad\text{or}\quad v_{o2}=A_{ss}(j\omega)\,v .
$$

The two dc-stabilizing networks must be identical so that they cancel in the comparison, and both op amps must sit in the linear region.

### Step 3 — Ratio

$$
\frac{v_{o1}}{v_{o2}}=\frac{A_v(j\omega)}{A_{dd}(j\omega)}=\mathrm{PSRR}^+(j\omega)\qquad\left(\text{or }\frac{A_v}{A_{ss}}=\mathrm{PSRR}^-\right).
$$

Plotting `V(o1)/V(o2)`, or `VDB(o1) - VDB(o2)`, gives a quantity proportional to the PSRR (equal for $v=1$ V). The deck below builds both versions at once with a third op amp, and adds the usual direct (follower) configurations for comparison.

```spice
* alsim-06-6-07 PSRR as a ratio of two outputs
.include opamp.sub
VDD vdd 0 DC 2.5
VSS vss 0 DC -2.5
VS s 0 DC 0 AC 1
* op amp 1: differential gain, quiet supplies
X1 s n1 o1 vdd vss OPAMP
LF1 o1 n1 1G
CF1 n1 0 1
CL1 o1 0 20P
* op amp 2: inputs at ac ground, ripple v in series with its VDD (PSRR+)
VR2 vdd2 vdd DC 0 AC 1
X2 0 n2 o2 vdd2 vss OPAMP
LF2 o2 n2 1G
CF2 n2 0 1
CL2 o2 0 20P
* op amp 3: same with the ripple in series with VSS (PSRR-)
VR3 vss3 vss DC 0 AC 1
X3 0 n3 o3 vdd vss3 OPAMP
LF3 o3 n3 1G
CF3 n3 0 1
CL3 o3 0 20P
* direct (follower) references
X4 0 o4 o4 vdd2 vss OPAMP
CL4 o4 0 20P
X5 0 o5 o5 vdd vss3 OPAMP
CL5 o5 0 20P
.control
ac dec 20 1 100meg
let psrrp = db(v(o1))-db(v(o2))
let psrrm = db(v(o1))-db(v(o3))
let dirp = -db(v(o4))
let dirm = -db(v(o5))
.endc
.END
```

`opamp.sub` defines this two-stage op amp as subcircuit `OPAMP` (pins: non-inverting input, inverting input, output, $V_{DD}$, $V_{SS}$). In this deck the ac sources VS, VR2 and VR3 all have amplitude 1. Each op amp sees only its own source, so the ratios are formed from a single analysis.

### Step 4 — Results

![PSRR+ and PSRR− versus frequency from the ratio method and from the reciprocal of the direct follower configuration](/q/alsim-06-6-07/solution-psrr.svg)

| Frequency | 10 Hz | 1 kHz | 10 kHz | 100 kHz | 1 MHz | 10 MHz |
|---|---|---|---|---|---|---|
| PSRR⁺, ratio (dB) | 69.9 | 69.9 | 67.4 | 51.0 | 31.1 | 11.2 |
| PSRR⁺, 1/direct (dB) | 69.9 | 69.9 | 67.4 | 51.0 | 31.2 | 36.7 |
| PSRR⁻, ratio (dB) | 81.4 | 64.7 | 44.8 | 24.8 | 4.8 | −15.1 |
| PSRR⁻, 1/direct (dB) | 81.4 | 64.7 | 44.8 | 24.8 | 5.0 | 10.5 |

The ratio method reproduces the reciprocal of the direct measurement to within 0.2 dB up to about 1 MHz. The dc values, 69.9 dB and 81.4 dB, agree with the hand-calculated dc PSRR of this op amp (about 70 dB and 82 dB). Above the op amp's GB (≈ 1.5 MHz) the direct follower result is no longer $1/\mathrm{PSRR}$, because it assumes $|A_v|\gg1$, and it turns upward. The ratio method stays valid.

The frequency dependence follows from the circuit. This op amp has an n-channel second stage referenced to $V_{SS}$. Once $C_c$ becomes effective, above the dominant pole of a few hundred hertz, it ties the gate of M6 to its drain, so M6 behaves like a diode to $V_{SS}$ and the output follows $V_{SS}$. PSRR⁻ therefore starts falling at about 160 Hz and drops by 20 dB/decade. PSRR⁺ stays flat to about 12 kHz. These roles are the mirror image of the usual n-channel-input op amp with a p-channel second stage, where PSRR⁺ is the one that degrades early.
