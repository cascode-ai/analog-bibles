# Detailed solution - alsim-05-3-14

Work through the design relations of [Fig. 1] in the order the specifications impose them. Slew rate and power fix the current; $v_{OUT}(\max)$ sizes the load M3; the gain sizes M1; $v_{OUT}(\min)$ sizes the cascode M2 and its gate bias. Then simulate the circuit and adjust the one value, $V_{GG2}$, that the square-law estimate leaves too tight.

### Step 1 — Current from slew rate and power

On a rising output step M1 turns off and the load current $I$ of M3 charges $C_L$, so

$$
SR=\frac{I}{C_L}>5\ \mathrm{V/\mu s}\;\Rightarrow\;I>(5\ \mathrm{V/\mu s})(5\ \mathrm{pF})=25\ \mu\mathrm A .
$$

Choose $I=30\ \mu$A ($SR=6$ V/µs) and $I_{Bias}=30\ \mu$A in each of the two bias branches. The supply current is then $3(30\ \mu\mathrm A)=90\ \mu$A and $P_{diss}=(5\ \mathrm V)(90\ \mu\mathrm A)=0.45$ mW ≤ 0.5 mW.

### Step 2 — Load M3/M4 from $v_{OUT}(\max)$

M3 must stay saturated up to 3.5 V:

$$
v_{OUT}(\max)=V_{DD}-\sqrt{\frac{2I}{K'_P(W_3/L_3)}}\ge3.5\ \mathrm V\;\Rightarrow\;\frac{W_3}{L_3}\ge\frac{2(30\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(1.5\ \mathrm V)^2}=0.53 .
$$

Take $W_3/L_3=W_4/L_4=1\ \mu\mathrm m/1\ \mu\mathrm m$ (equal, since $I_{Bias}=I$). Then $V_{SD3}(\mathrm{sat})=\sqrt{60/50}=1.10$ V and $v_{OUT}(\max)=3.90$ V.

### Step 3 — Input device M1 from the gain

The cascode makes the resistance looking down from the output much larger than $r_{ds3}$, so

$$
|A_v|\approx\frac{g_{m1}}{g_{ds3}}=\sqrt{\frac{2K'_N(W_1/L_1)}{\lambda_P^2I}}\ge100\;\Rightarrow\;\frac{W_1}{L_1}\ge\frac{(100)^2(0.05)^2(30\ \mu\mathrm A)}{2(110\ \mu\mathrm{A/V^2})}=3.4 .
$$

Take $W_1/L_1=4\ \mu\mathrm m/1\ \mu\mathrm m$, giving $|A_v|\approx108$ ($g_{m1}=162\ \mu$S, $g_{ds3}=1.5\ \mu$S).

### Step 4 — Cascode M2 and its gate bias from $v_{OUT}(\min)$

$$
V_{DS1}(\mathrm{sat})=\sqrt{\frac{2(30\ \mu)}{(110\ \mu)(4)}}=0.37\ \mathrm V,\qquad
V_{DS2}(\mathrm{sat})=\sqrt{\frac{2(30\ \mu)}{(110\ \mu)(1)}}=0.74\ \mathrm V\quad(W_2/L_2=1/1),
$$

so $v_{OUT}(\min)=0.37+0.74=1.11$ V, comfortably below 1.5 V. The relation in [Fig. 1] sets $V_{GG2}=V_{DS1}(\mathrm{sat})+V_{GS2}$. With the body effect on M2 ($V_{SB2}\approx0.37$ V, $V_{T2}\approx0.79$ V) that is about 1.89 V, and M5 with $W_5/L_5=2I_{Bias}/[K'_N(V_{GG2}-V_T)^2]\approx0.38$.

That choice puts M1 exactly at the edge of saturation at the bias point. A first simulation with $W_5/L_5=1/2.6$ confirmed the risk: as $v_{IN}$ rises, $V_{DS1}(\mathrm{sat})$ grows while $V_{DS1}$ stays fixed by M2. M1 then entered triode at $v_{OUT}=2.34$ V, and the gain fell to 91 at $v_{OUT}=1.5$ V. Raising $V_{GG2}$ by about 0.15 V gives M1 a 0.13-V margin and costs only 0.1 V of output swing:

$$
V_{GG2}\approx2.03\ \mathrm V,\qquad \frac{W_5}{L_5}=\frac{2(30\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(2.03-0.7)^2}=0.31\;\to\;1\ \mu\mathrm m/3.3\ \mu\mathrm m .
$$

M5 has $L\ge2$ µm, so it uses λ = 0.01 V⁻¹.

| Device | $W/L$ (µm/µm) | Current |
|---|---|---|
| M1 | 4/1 | 31 µA |
| M2 | 1/1 | 31 µA |
| M3, M4 | 1/1 | 31 µA, 30 µA |
| M5 | 1/3.3 | 30 µA |

### Step 5 — Simulation deck

```spice
* alsim-05-3-14 cascode amplifier
VDD vdd 0 DC 5
IB5 vdd gg DC 30U
M5 gg gg 0 0 N2 W=1U L=3.3U
IB4 g4 0 DC 30U
M4 g4 g4 vdd vdd P W=1U L=1U
M3 out g4 vdd vdd P W=1U L=1U
M2 out gg s1 0 N W=1U L=1U
M1 s1 in 0 0 N W=4U L=1U
VIN in 0 DC 1.0718 AC 1 PULSE(0 2 1U 1N 1N 4U 10U)
CL out 0 5P
.MODEL N NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 PHI=0.7 LAMBDA=0.04
.MODEL N2 NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 PHI=0.7 LAMBDA=0.01
.MODEL P PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 PHI=0.8 LAMBDA=0.05
.OP
.AC DEC 50 1 100MEG
.PRINT AC VM(OUT)
.END
```

The dc level of VIN (1.0718 V) puts the output at 2.5 V, mid-way in the output range. A dc sweep of VIN gives the transfer curve, and `.TRAN 2N 10U` with the 0-to-2-V pulse gives the slew rate.

### Step 6 — Simulated results

Operating point: $V_{GG2}=2.03$ V, $V_{DS1}=0.50$ V ($V_{DSAT1}=0.37$ V), $v_{OUT}=2.51$ V, $I_{D1}=I_{D3}=31.0\ \mu$A (M3 copies M4 with a slightly larger $V_{SD}$), supply current 91.0 µA.

![Simulated output voltage and gain magnitude versus input voltage, with the all-saturated output range 1.23 to 3.95 V marked](/q/alsim-05-3-14/solution-transfer.svg)

![Simulated response to a 0-to-2 V input pulse with 5 pF load, showing a 6.25 V/µs rise and a 9.7 V/µs fall](/q/alsim-05-3-14/solution-transient.svg)

| Specification | Hand design | Simulation | Met? |
|---|---|---|---|
| $P_{diss}\le0.5$ mW | 0.45 mW | 0.455 mW | yes |
| $\lvert A_v\rvert\ge100$ | 108 | 118 at 2.5 V (116–121 over 1.5–3.5 V) | yes |
| $v_{OUT}(\max)\ge3.5$ V | 3.90 V | 3.95 V | yes |
| $v_{OUT}(\min)\le1.5$ V | 1.11 V (1.24 V with the raised $V_{GG2}$) | 1.23 V | yes |
| $SR>5$ V/µs | 6 V/µs | 6.25 V/µs rising, 9.7 V/µs falling | yes |

The −3-dB frequency with 5 pF is 44 kHz, consistent with $g_{ds3}/(2\pi C_L)$. The simulated gain exceeds the hand value because $g_{ds3}=\lambda_PI/(1+\lambda_PV_{SD3})=1.38\ \mu$S rather than $\lambda_PI=1.5\ \mu$S, and because $I$ is 31 µA. All-saturated means $V_{DS}\ge V_{DSAT}$ for M1, M2 and M3 along the dc sweep. That range runs from 1.23 V, where M2 leaves saturation, to 3.95 V, where M3 does, and covers the required 1.5–3.5 V with margin at both ends. Every specification is met.
