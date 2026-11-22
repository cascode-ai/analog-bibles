# Detailed solution - alsim-05-2-25

This is an open design task; below is one complete design, its simulations at 0 °C and 55 °C, and its score. The key choice is to make the gain a ratio of two transconductances rather than $g_m r_{ds}$. A simple differential pair with a current-mirror load would give a gain in the hundreds. Loading its output with a diode-connected PMOS sets the gain near 10, makes it insensitive to temperature, and keeps the output node resistance low enough for a bandwidth of several megahertz with 1 pF per node.

### Step 1 — Topology

<!-- diagram: diagram-01.cir -->

- **Input stage.** An NMOS pair M1–M2 (100/1) with its tail sink M5 (20/1), and a PMOS current-mirror load M3–M4 (50/1). The output is the drain of M2 and M4.
- **Gain-setting load.** At the output, a diode-connected PMOS M6 (2.34/1, source at $V_{DD}$, gate and drain at the output). An NMOS sink M7 (10/1) removes M6's dc current so that the mirror stays balanced.
- **Bias.** Four diode-connected PMOS devices (1/1, each with its well tied to its own source) in series with a diode-connected NMOS M8 (5/1) across the 10-V supply. M8 is mirrored ×4 into M5 and ×2 into M7.

The circuit uses only MOSFETs, and every $W/L$ lies between 1 and 100. The bulks of the n-channel devices are at −5 V.

### Step 2 — Why the gain is about 10 and temperature-stable

At the output, M2's signal current plus the mirrored current of M1 give a short-circuit transconductance of $g_{m1}$. The output node conductance is $g_{m6}$ plus the small output conductances:

$$
A_v=\frac{g_{m1}}{g_{m6}+g_{ds2}+g_{ds4}+g_{ds6}+g_{ds7}}\approx\frac{g_{m1}}{g_{m6}}=\sqrt{\frac{K'_N(W/L)_1I_1}{K'_P(W/L)_6I_6}} .
$$

With $I_6\approx I_1$ (M7 sinks $2I_{REF}$, the same as each half of the tail), the ratio is $\sqrt{(25)(100)/((10)(2.34))}=10.3$. The four $g_{ds}$ terms (about 4% of $g_{m6}$) bring it down to 10.0; $W_6$ was trimmed to 2.34 µm in simulation for that purpose. $K'_N$ and $K'_P$ both scale as $T^{-1.5}$, and the currents track each other, so the ratio barely changes with temperature.

At 27 °C the simulation gives $g_{m1}=346.9\ \mu$S, $g_{m6}=33.46\ \mu$S and $\sum g_{ds}=1.32\ \mu$S, so $A_v=346.9/34.78=9.97$ (simulated 10.00).

### Step 3 — Bandwidth, power and common-mode range by hand

The dominant pole is at the output node, with conductance $g_{m6}+\sum g_{ds}$ and 1 pF:

$$
f_{-3\,\mathrm{dB}}\approx\frac{34.8\ \mu\mathrm S}{2\pi(1\ \mathrm{pF})}=5.5\ \mathrm{MHz}\quad(27\ ^\circ\mathrm C).
$$

The mirror node x ($g_{m3}/2\pi C\approx24$ MHz, with a zero at twice that) lowers this slightly. The supply current is $I_{REF}+I_{SS}+I_7\approx11+45+24=80\ \mu$A, so $P_{diss}\approx0.80$ mW, below the 1-mW floor of the score.

The low end of the common-mode range is reached when the tail device M5 leaves saturation:

$$
V_{IC}(\min)=V_{SS}+V_{DS5}(\mathrm{sat})+V_{GS1}\approx-5+0.42+1.07\approx-3.5\ \mathrm V .
$$

At the high end, M2's drain sits at $V_{DD}-V_{SG6}\approx2.9$ V. With $\gamma=0.8$, M2's threshold rises to about 2.4 V at high common mode, so M2 stays saturated up to $V_{IC}\approx5.3$ V. The range is therefore limited by the 5-V supply.

### Step 4 — Simulation deck

```spice
* alsim-05-2-25 differential gain block (run with .TEMP 0 and .TEMP 55)
VDD vdd 0 DC 5
VSS vss 0 DC -5
MB1 b1 b1 vdd vdd P W=1U L=1U
MB2 b2 b2 b1 b1 P W=1U L=1U
MB3 b3 b3 b2 b2 P W=1U L=1U
MB4 nb nb b3 b3 P W=1U L=1U
M8 nb nb vss vss N W=5U L=1U
M1 x inp t vss N W=100U L=1U
M2 out inn t vss N W=100U L=1U
M5 t nb vss vss N W=20U L=1U
M3 x x vdd vdd P W=50U L=1U
M4 out x vdd vdd P W=50U L=1U
M6 out out vdd vdd P W=2.34U L=1U
M7 out nb vss vss N W=10U L=1U
C1 b1 0 1P
C2 b2 0 1P
C3 b3 0 1P
C4 nb 0 1P
C5 x 0 1P
C6 t 0 1P
C7 out 0 1P
C8 inp 0 1P
C9 inn 0 1P
C10 vdd 0 1P
C11 vss 0 1P
VIC cm 0 DC 0
EP inp cm vd 0 0.5
EN inn cm vd 0 -0.5
VD vd 0 DC 0 AC 1
.MODEL N NMOS LEVEL=1 KP=25U VTO=0.75 LAMBDA=0.01 GAMMA=0.8 PHI=0.6
.MODEL P PMOS LEVEL=1 KP=10U VTO=-0.75 LAMBDA=0.02 GAMMA=0.4 PHI=0.6
.OPTIONS TNOM=27
.TEMP 0
.OP
.AC DEC 200 1K 1G
.PRINT AC VDB(OUT)
* common-mode sweep (separate runs, VD DC = +0.5M and -0.5M):
* .DC VIC -5 5 5M
* .PRINT DC V(OUT)
.END
```

- **Capacitances.** The level-1 cards have no TOX and no junction or overlap parameters, so SPICE adds no device capacitances. The 1-pF capacitors on every node are the only ones.
- **Inputs.** The two controlled sources apply $\pm v_d/2$ around the common-mode source VIC.
- **Differential gain.** The ac analysis with VD = 1 gives the differential gain directly.
- **Common-mode range.** VIC is swept twice, with VD = +0.5 mV and −0.5 mV. The difference of the two outputs divided by 1 mV is the dc gain at each common-mode level.
- **Range criterion.** $V_{IC}$ limits are taken where any of M1, M2, M4, M5 leaves saturation ($V_{DS}<V_{DSAT}$).

### Step 5 — Simulated results

| | 0 °C | 55 °C |
|---|---|---|
| $V_{IC}(\max)$ | 5.00 V (supply; all devices saturated) | 5.00 V |
| $V_{IC}(\min)$ (M5 leaves saturation) | −3.490 V | −3.535 V |
| Minimum ICMR | 5.00 − (−3.490) = 8.49 V | |
| Voltage gain | 10.009 | 9.996 |
| Maximum gain deviation | 0.009 | |
| $f_{-3\,\mathrm{dB}}$ | 5.90 MHz | 4.89 MHz |
| Minimum $f_{-3\,\mathrm{dB}}$ | 4.89 MHz | |
| Supply current, $P_{diss}$ | 84.9 µA, 0.849 mW | 76.2 µA, 0.762 mW |

![Simulated differential gain versus input common-mode voltage at 0 °C and 55 °C, with VIC(min) = −3.49 V marked](/q/alsim-05-2-25/solution-icmr.svg)

![Simulated magnitude of the differential gain from 1 kHz to 1 GHz at 0 °C and 55 °C, with the −3 dB points marked](/q/alsim-05-2-25/solution-frequency.svg)

The gain stays at 10.00 ± 0.01 over the whole common-mode range above −3.5 V and collapses below it as the tail device enters triode. The bandwidth falls by 17% from 0 to 55 °C because all bias currents, and hence $g_{m6}$, drop with mobility. The gain does not, since it is a $g_m$ ratio. The hand estimates (gain 9.97, 5.5 MHz, 0.80 mW and −3.5 V at 27 °C) agree with the simulation.

### Step 6 — Score

$$
\begin{aligned}
\mathrm{SCORE}&=\min(8.49,10)+\frac{10}{0.009+1}+\min\!\left(\frac{4.89\ \mathrm{MHz}}{1\ \mathrm{MHz}},10\right)+\frac{10}{\max(0.849\ \mathrm{mW},1\ \mathrm{mW})}\\
&=8.49+9.91+4.89+10=33.3 .
\end{aligned}
$$

The bandwidth term is the one with room left. Raising it requires more $g_{m6}$, i.e. more current, at a fixed gain. Doubling all currents would roughly double $f_{-3\,\mathrm{dB}}$ (+5 points) but push $P_{diss}$ to about 1.7 mW (−4 points), a net gain of under 1 point, so the design is close to the best this topology offers.
