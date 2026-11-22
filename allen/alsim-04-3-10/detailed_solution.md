# Detailed solution - alsim-04-3-10

There is no unique answer; this is one complete design with its simulations and score. The two terms of the score pull in different directions. $V_{MIN}$ is set by the output transistor alone, so a single wide NMOS output device is used. $\Delta I_o$ is set mainly by how much the reference current moves between the HIGH and LOW corners. The design therefore concentrates on a MOSFET-only reference whose current is nearly the same at both corners, and then mirrors it into a 100/1 output device.

### Step 1 — Limits on $V_{MIN}$ and on the reference spread

A saturated NMOS output with $W/L\le100$ carrying 100 µA needs at least

$$
V_{ON}=\sqrt{\frac{2I_o}{K'(W/L)}}=\sqrt{\frac{2(100\ \mu\mathrm A)}{(21.6\ \mu\mathrm{A/V^2})(100)}}=0.30\ \mathrm V\ (\text{LOW}),\qquad 0.275\ \mathrm V\ (\text{HIGH}),
$$

so $V_{MIN}$ near 0.25–0.3 V is the practical floor for this term (about 17–20 points). A cascode would make the curve flatter but would double $V_{MIN}$; with λ ≈ 0.01 V⁻¹ the simple output only drifts by about 1 µA/V, so the single device is the better trade.

The reference must be built from MOSFETs and the 5-V supply only. A self-biased β-multiplier with $(W/L)_2=4(W/L)_1$ and a source resistor $R$ gives

$$
I_{REF}=\frac{2}{K'(W/L)_1R^2}\left(1-\frac{1}{\sqrt4}\right)^2=\frac{1}{2K'(W/L)_1R^2}.
$$

If $R$ is an NMOS in deep triode with gate voltage $V_G$, then $R\approx1/[K'(W/L)_R(V_G-V_T)]$ and

$$
I_{REF}\approx\frac{K'(W/L)_R^2}{2(W/L)_1}\,(V_G-V_T)^2 .
$$

With the gate simply tied to 5 V, the HIGH corner raises $K'$ by 22% and $(V_G-V_T)^2$ by 7%, so the current changes by about 31% between corners. A first simulation of that version gave 148 µA (HIGH) against 107 µA (LOW). Scaled to a 100-µA centre, that is a corner spread of about 32 µA, or $\Delta I_o\approx37$ µA with the output slope, worth only about 13.5 points.

### Step 2 — Making the triode resistor track the threshold

The HIGH corner has the larger $K'$ and the smaller $V_T$. The current can be held constant if $V_G-V_T$ shrinks at the HIGH corner by about $1/\sqrt{1.22}$. Drive the gate of MR with two stacked diode-connected NMOS devices (MG1, MG2, 1/1) fed by a PMOS copy MP6 of the reference current:

$$
V_G=2(V_T+V_{ov,G}),\qquad V_G-V_T=V_T+2V_{ov,G},\qquad V_{ov,G}=\sqrt{\frac{2I_{P6}}{K'}} .
$$

Now $V_G-V_T$ rises with $V_T$, which favours the LOW corner, while $K'$ favours the HIGH corner; $V_{ov,G}$ shrinks as $K'$ grows, which adds to the compensation. The width of MP6 sets $V_{ov,G}$ and hence the balance. A sweep of $W_{P6}$ gave a HIGH/LOW current ratio of 0.986, 0.992, 0.999 and 1.006 for $W_{P6}$ = 4.2, 4.4, 4.6 and 4.8 µm, so $W_{P6}=4.6$ µm was chosen.

### Step 3 — The circuit

<!-- diagram: diagram-01.cir -->

In words: the PMOS mirror MP4 (diode) and MP3 feed the NMOS pair MN1 (20/1, diode) and MN2 (80/1). MR (1/1) sits between the source of MN2 (node s) and ground, with its gate at node g, the top of the diode stack MG1–MG2 fed by MP6. The start-up circuit is MS1–MS5. The output branch is MP5, mirrored from MP4, feeding the diode MD (100/1), which drives the output device MO (100/1). All $L=1$ µm and all bulks are at the sources or rails; bulk effects are ignored as instructed.

| Device | Type | $W/L$ | Role |
|---|---|---|---|
| MP3, MP4 | p | 2/1 | 1:1 mirror of the β-multiplier |
| MN1 / MN2 | n | 20/1 / 80/1 | β-multiplier pair, ratio 4 |
| MR | n | 1/1 | triode "resistor" |
| MP6 | p | 4.6/1 | feeds the gate stack (2.3 × $I_{REF}$) |
| MG1, MG2 | n | 1/1 | stacked diodes, $V_G=2V_{GS}$ |
| MS1 / MS3 / MS2, MS4, MS5 | n / n / p | 1/1 / 100/1 / 1/1 | start-up |
| MP5 | p | 45.4/1 | output copy, ≈ 22.7 × $I_{REF}$ |
| MD, MO | n | 100/1 | output mirror |

```spice
* alsim-04-3-10 current sink (HIGH corner shown)
VDD vdd 0 DC 5
MP4 vp vp vdd vdd P W=2U L=1U
MP3 n vp vdd vdd P W=2U L=1U
MN1 n n 0 0 N W=20U L=1U
MN2 vp n s 0 N W=80U L=1U
MR  s g 0 0 N W=1U L=1U
MP6 g vp vdd vdd P W=4.6U L=1U
MG1 g g g2 0 N W=1U L=1U
MG2 g2 g2 0 0 N W=1U L=1U
MS5 x2 x2 vdd vdd P W=1U L=1U
MS4 x1 x1 x2 x2 P W=1U L=1U
MS2 st st x1 x1 P W=1U L=1U
MS3 st n 0 0 N W=100U L=1U
MS1 vp st n 0 N W=1U L=1U
MP5 d vp vdd vdd P W=45.4U L=1U
MD  d d 0 0 N W=100U L=1U
MO  out d 0 0 N W=100U L=1U
VOUT out 0 DC 2.5
.MODEL N NMOS LEVEL=1 KP=26.4U VTO=0.675 LAMBDA=0.011
.MODEL P PMOS LEVEL=1 KP=8.8U VTO=-0.675 LAMBDA=0.022
* LOW: N KP=21.6U VTO=0.825 LAMBDA=0.009; P KP=7.2U VTO=-0.875 LAMBDA=0.018
.DC VOUT 0 5 1M
.PRINT DC I(VOUT)
.END
```

$i_{OUT}=-I(\mathrm{VOUT})$.

### Step 4 — Start-up

A β-multiplier also has a stable zero-current state. With no current, node n is at 0 and MS3 is off, so the three PMOS diodes pull node st up to about $5-3|V_{TP}|$, 2.4–3.0 V. MS1 then conducts from vp into n and starts the loop. Once the reference runs, MS3 (100/1, gate at n) pulls st down to 0.01 V, and MS1 is cut off ($V_{GS1}=V_{st}-V_n<0$; its current is $4\times10^{-12}$ A). A transient run with VDD ramped from 0 to 5 V in 10 µs, starting from all nodes at zero, settles at 100.6 µA at both corners.

### Step 5 — Simulated operating points

At $v_{OUT}=2.5$ V:

| Quantity | HIGH | LOW |
|---|---|---|
| $I_{D,MN1}$ ($I_{REF}$) | 4.37 µA | 4.39 µA |
| Gate of MR, $V_G$ | 3.04 V | 3.53 V |
| $V_G-V_T$ | 2.37 V | 2.70 V |
| $I_{D,MP5}=I_{D,MD}$ | 98.9 µA | 99.4 µA |
| $i_{OUT}$ | 100.56 µA | 100.64 µA |
| Supply current | 121 µA | 120 µA |

$V_G-V_T$ is 14% larger at the LOW corner. Together with the smaller effects of λ and of the drain voltage of MR, this offsets the 18% lower $K'$ there, so the reference current differs by only 0.5% between corners. The two output curves cross each other near 3 V.

![Simulated iOUT versus vOUT at the HIGH and LOW corners with the line AB at 96.75 µA and VMIN = 0.26 V](/q/alsim-04-3-10/solution-iout.svg)

![Enlarged view of the two curves between 94 and 106 µA, showing the band from 96.75 to 103.25 µA centred on 100 µA](/q/alsim-04-3-10/solution-band.svg)

| $v_{OUT}$ (V) | 0.2 | 0.26 | 0.3 | 0.5 | 1 | 2.5 | 5 |
|---|---|---|---|---|---|---|---|
| HIGH (µA) | 91.2 | 97.9 | 98.2 | 98.4 | 98.9 | 100.6 | 103.3 |
| LOW (µA) | 87.4 | 96.8 | 98.7 | 98.9 | 99.3 | 100.6 | 102.9 |

### Step 6 — $V_{MIN}$, $\Delta I_o$ and the score

The band must be centred on 100 µA. Its top is the highest current from $V_{MIN}$ to 5 V, the HIGH curve at 5 V, 103.25 µA. So the line AB lies at $200-103.25=96.75$ µA, and $\Delta I_o=103.25-96.75=6.5$ µA. The right-most curve (LOW) reaches 96.75 µA at

$$
V_{MIN}=0.26\ \mathrm V,
$$

just below its saturation knee (the LOW output device needs $V_{ON}\approx0.30$ V, and at 0.26 V it is barely in triode while carrying 97% of the current). Above $V_{MIN}$ both curves stay inside the band. Almost all of $\Delta I_o$ is the λ slope of the single output device (about 1 µA/V over 5 V); the corner spread is under 1 µA.

$$
\mathrm{SCORE}=\min\!\left(\frac{5\ \mathrm V}{0.26\ \mathrm V},25\right)+\min\!\left(\frac{500\ \mu\mathrm A}{6.5\ \mu\mathrm A},25\right)=19.2+25=44.2 .
$$

The second term is capped, so a cascode output would not raise it and would lower the first term. Three caveats apply.
- The compensation relies on $K'$ and $V_T$ moving together as in the HIGH and LOW model sets. Independent corners, such as high $K'$ with high $V_T$, would not be cancelled.
- The self-biased loop has a gain close to 1, so the current is sensitive to device ratios: changing $W_{P6}$ by 4% moves $I_{REF}$ by about 9%. Mismatch between MP6 and MP4 would therefore show up amplified.
- The uncompensated version of Step 1 (gate of MR at 5 V) would score about 17 + 13.5 ≈ 30, in the usual range for this problem.
