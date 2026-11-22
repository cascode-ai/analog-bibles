# Detailed solution - alsim-05-5-20

This is an open design task; below is one complete class-A design, its simulations and its score. The 100-Ω load needs ±10 mA at ±1 V, and a MOS follower cannot reach +1 V from a 2-V supply at that current. The output device is therefore the substrate NPN as an emitter follower, with a large NMOS current sink below it. A PMOS source follower in its own well drives the base, so the overall gain is close to +1 and non-inverting. The bias is generated with MOSFETs only.

### Step 1 — Circuit

<!-- diagram: diagram-01.cir -->

- **Output.** Q1, a substrate NPN with its collector at +2 V and its emitter at the output, sources current. M2 sinks current; it is four 100/1 NMOS devices in parallel, about 22.5 mA.
- **Driver.** MP is a PMOS source follower, four 100/1 devices in parallel, with its bulk tied to its source in its own n-well so there is no body effect. Its gate is the input and its source is the base node b. MPS, four 100/1 PMOS, supplies about 0.59 mA to the base node. That current is shared between MP and Q1's base current.
- **Bias.** A PMOS diode MPB (3/1) in series with an NMOS diode MNB (4/1) across the ±2-V supplies sets node nb at −0.33 V, so that MNB carries 0.22 mA. M2 mirrors MNB ×100. MNX (1/1) mirrors it into the 40/1 PMOS diode MPD, which MPS mirrors ×10.

All devices have $L=1$ µm and $1\le W/L\le100$. The only passive parts are $R_L$ and $C_L$.

### Step 2 — Hand design of the swing

At $v_{OUT}=+1$ V the load takes 10 mA and M2 about 22.5 mA, so Q1 must supply about 33 mA:

$$
V_{BE}=V_t\ln\frac{I_C}{I_s}=(25.9\ \mathrm{mV})\ln\frac{33\ \mathrm{mA}}{10\ \mathrm{fA}}=0.75\ \mathrm V,\qquad V_b=1.75\ \mathrm V .
$$

MPS must stay saturated with its source at 2 V. Its overdrive is $\sqrt{2(0.59\ \mathrm{mA})/(50\ \mu\mathrm{A/V^2}\cdot400)}=0.24$ V, so the base can rise to about 1.76 V; this sets the positive limit near +1 V. At $v_{OUT}=-1$ V, M2 ($V_{DS}=1$ V, above its $V_{DSAT}=0.95$ V) sinks its 22.5 mA, the load returns 10 mA, and Q1 still conducts 12.5 mA. The negative limit is therefore lower: M2 has to leave saturation, near −1.5 V.

### Step 3 — Hand estimate of the gain

At the quiescent point, $g_{m,MP}=4.10$ mS. The base node is loaded by $g_{ds,MP}+g_{ds,MPS}=44\ \mu$S and by Q1's input conductance, about $1/[(\beta+1)(r_e+R_L)]=1/[101(1.15+100)\ \Omega]=98\ \mu$S:

$$
A_v\approx\frac{g_{m,MP}}{g_{m,MP}+142\ \mu\mathrm S}\cdot\frac{R_L}{R_L+r_e}=\frac{4.10}{4.24}\cdot\frac{100}{101.15}=0.966\times0.989=0.956 .
$$

The follower's loss is set mostly by Q1's base loading, which is why MP is made wide.

### Step 4 — Simulation setup

```spice
* alsim-05-5-20 output amplifier
VDD vdd 0 DC 2
VSS vss 0 DC -2
MPB nb nb vdd vdd P W=3U L=1U
MNB nb nb vss vss N W=4U L=1U
M2 out nb vss vss N W=100U L=1U M=4
MNX pb nb vss vss N W=1U L=1U
MPD pb pb vdd vdd P W=40U L=1U
MPS b pb vdd vdd P W=100U L=1U M=4
MP vss in b b P W=100U L=1U M=4
Q1 vdd b out QN
VIN in 0 DC -0.14516 SIN(-0.14516 1.051 10K)
RL out 0 100
.MODEL N NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 PHI=0.7 LAMBDA=0.04
.MODEL P PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 PHI=0.8 LAMBDA=0.05
.MODEL QN NPN BF=100 IS=10F
.TRAN 25N 500U
.PRINT TRAN V(OUT) I(VDD) I(VSS)
.END
```

- **Input bias.** The input carries a dc level of −0.145 V that places the quiescent output at 0 V ($v_{IN}=0$ would give +0.14 V because $V_{SG,MP}>V_{BE}$). This centres the swing for the $V_P$ measurement.
- **Gain.** Peak-to-peak output over input, with $R_L=100\ \Omega$, at 0.5-V and 1-V input amplitudes.
- **$V_P$.** Input amplitude raised to 2 V until both half-cycles clip, then the smaller deviation from the quiescent 0 V.
- **Efficiency.** Input amplitude 1.051 V, which gives exactly ±1 V across $R_L$. Load power and total supply power are averaged over whole periods.
- **Slew rate.** $R_L$ replaced by $C_L=1$ nF, input stepping between ±1.6 V, and the time for the output to cross from +1 V to −1 V and back.

### Step 5 — Simulated results

Quiescent: supply current 23.1 mA from each rail, $I_{D,M2}=22.5$ mA, $I_{D,MPS}=0.593$ mA, $I_{D,MP}=0.370$ mA, $V_b=0.735$ V.

![Simulated output into 100 Ω for a 1 V peak output and for a clipping 2 V peak input, with the clipping levels +1.16 V and −1.54 V marked](/q/alsim-05-5-20/solution-sine.svg)

![Simulated falling edge into 1 nF, crossing from +1 V to −1 V in 89 ns](/q/alsim-05-5-20/solution-slew.svg)

| Quantity | Simulation | Score term |
|---|---|---|
| Slew rate (smaller of ±, within ±1 V) | rising ≥ 34 V/µs, falling 22.5 V/µs | $10^{-6}\min(22.5\times10^6,10^7)=10$ |
| $V_P$ (smaller deviation) | +1.16 V / −1.54 V → 1.16 V | $10\min(1.16,1)=10$ |
| Efficiency at ±1 V across 100 Ω | 5.00 mW / 92.4 mW = 5.4% | $0.4(5.4)=2.16$ |
| Gain (pp/pp, 100 Ω) | 0.952 (0.953 at 0.5 V input) | $10/(0.048+1)=9.54$ |

- **Slew rate.** The falling edge is limited by M2's 22.5 mA into 1 nF (22.5 V/µs; the slowest instantaneous rate between ±1 V is 21.6 V/µs). The rising edge is faster because Q1 can source far more current.
- **Peak output.** The positive clip at +1.16 V is where MPS runs out of headroom, as estimated in Step 2. The negative clip at −1.54 V is where M2 leaves saturation.
- **Gain.** The simulated gain agrees with the hand value 0.956.

### Step 6 — Score

$$
\mathrm{SCORE}=10+10+0.4(5.4)+\frac{10}{|0.952-1|+1}=10+10+2.16+9.54=31.7 .
$$

The weak term is efficiency. A class-A stage must carry a standing current at least equal to the peak load current, here more than twice it for slew rate, so η stays near 5%. Raising it toward 25% would need a class-AB output, for example an NPN source with a feedback-controlled NMOS sink, while keeping $V_P\ge1$ V and the gain near 1.
