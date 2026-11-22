# Detailed solution - A391

First find the quiescent currents from the mirror ratios, since every small-signal parameter depends on them. The gain then follows a single path: the input pair's differential current into the diode M4, whose low resistance clamps the first-stage swing, then the common-source stage M8 loaded by M9. For the slew rates, the input pair is fully switched, which sets M8's current between zero and a 16-fold copy of M4's current.

### Step 1 — Quiescent currents

All mirrors pair devices of equal length, so currents scale with $W$:

| Device | Mirror reference | Ratio | Current |
|---|---|---|---|
| M7 (2/2) | M10 (2/2), 20 µA | 1 | 20 µA (tail) |
| M9 (8/2) | M10 (2/2) | 4 | 80 µA |
| M5, M6 (1/4) | M11 (4/4), 20 µA | 1/4 | 5 µA each |
| M1, M2 | tail split | 1/2 | 10 µA each |
| M3, M4 (diodes) | KCL: $10-5$ | — | 5 µA each |
| M8 (64/2) | M4 (4/2) | 16 | 80 µA |

M5 and M6 inject 5 µA into the drains of M1 and M2, so the diode loads carry only half of the input-device current. M8's 80 µA matches M9's, so the output is balanced at the quiescent point.

### Step 2 — Small-signal parameters

With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$ (neglected for the $L=4\ \mu$m devices M5, M6, M11):

| Parameter | Value |
|---|---|
| $g_{m2}=\sqrt{2(110)(5)(10)}\ \mu\mathrm S$ | 104.9 µS |
| $g_{m4}=\sqrt{2(50)(2)(5)}\ \mu\mathrm S$ | 31.6 µS |
| $g_{ds2}+g_{ds4}=0.01(10+5)\ \mu\mathrm S$ | 0.15 µS |
| $g_{m8}=\sqrt{2(50)(32)(80)}\ \mu\mathrm S$ | 506 µS |
| $g_{ds8}+g_{ds9}=0.01(80+80)\ \mu\mathrm S$ | 1.6 µS |

### Step 3 — Differential gain

For a purely differential input the circuit is symmetric, so the tail node is an ac ground and M2's drain current is $i_{d2}=g_{m2}(v_1-v_2)/2$. It flows into the node at the drains of M2 and M4, whose resistance is dominated by the diode M4:

$$
v_{g8}=-\frac{i_{d2}}{g_{m4}+g_{ds2}+g_{ds4}}=-\frac{g_{m2}}{2(g_{m4}+g_{ds2}+g_{ds4})}(v_1-v_2).
$$

M8 is a common-source amplifier loaded by $r_{ds8}\|r_{ds9}$; a fall of its gate voltage raises its current and the output:

$$
v_{out}=-\frac{g_{m8}}{g_{ds8}+g_{ds9}}\,v_{g8}.
$$

Combining,

$$
\frac{v_{out}}{v_1-v_2}=\frac{g_{m2}}{2(g_{m4}+g_{ds2}+g_{ds4})}\cdot\frac{g_{m8}}{g_{ds8}+g_{ds9}}
=\frac{104.9\ \mu\mathrm S}{2(31.77\ \mu\mathrm S)}\cdot\frac{506\ \mu\mathrm S}{1.6\ \mu\mathrm S}=1.65\times316=522\ \mathrm{V/V}.
$$

Neglecting $g_{ds2}+g_{ds4}$ beside $g_{m4}$ gives 524 V/V. $v_1$ is the noninverting input and $v_2$ the inverting one. The diode load keeps the first-stage gain at only 1.65, which clamps the internal swing and keeps that node fast; nearly all the gain comes from M8.

### Step 4 — Negative slew rate

For $v_1\ll v_2$, M2 is off. M6 alone pulls the M4 node up toward $V_{DD}$ until M4 and then M8 turn off, leaving M9 to discharge the load with its full current:

$$
SR^-=\frac{I_9}{C_L}=\frac{80\ \mu\mathrm A}{5\ \mathrm{pF}}=16\ \mathrm{V/\mu s}.
$$

### Step 5 — Positive slew rate

For $v_1\gg v_2$, M2 carries the whole 20-µA tail current. M6 still supplies 5 µA of it, so the diode M4 carries $20-5=15\ \mu$A and M8 copies it with ratio 16:

$$
I_8=16(15\ \mu\mathrm A)=240\ \mu\mathrm A,\qquad
SR^+=\frac{I_8-I_9}{C_L}=\frac{(240-80)\ \mu\mathrm A}{5\ \mathrm{pF}}=32\ \mathrm{V/\mu s}.
$$

The positive slew rate is higher because M8's current can grow above its quiescent value, while M9 is a fixed 80-µA sink.
