# Detailed solution - grsim-06-20

Work from the specifications to the currents, then to the overdrives the voltage limits allow, then to the device sizes. Then design the $V_T$-referenced bias core and its extension. Finally simulate the complete circuit, including the body effect the hand design ignores, and refine two devices. All lengths use $L_{\text{eff}}=1$ µm, the matching minimum, so $L_{\text{drwn}}=L_{\text{eff}}+2L_d=1.18$ µm, $\lambda_n=0.02\ \mathrm{V^{-1}}$ and $\lambda_p=0.04\ \mathrm{V^{-1}}$. All $W/L$ values below are effective ratios ($W$ in µm equals $W/L$).

### Step 1 — Currents from the output-drive specification

The output current is the difference between what the mirror delivers and what $M_{2A}$ sinks. When the input pair is fully steered, it changes by the whole tail current, so $|I_{D5}|\ge100\ \mu$A is needed for ±100 µA. Choose $|I_{D5}|=100\ \mu$A, so $|I_{D1}|=|I_{D2}|=50\ \mu$A.

$M_{11}$, $M_{12}$ must carry more than $|I_{D5}|$, so that $M_{1A}$, $M_{2A}$ never cut off when one input device takes the whole tail. Choose $I_{D11}=I_{D12}=150\ \mu$A. The cascode branches then carry $150-50=100\ \mu$A at balance and never less than 50 µA.

### Step 2 — Overdrives from the voltage specifications

- **Input range to +0.5 V.** With the wells of $M_1$, $M_2$ tied to their common source (no body effect), the top of the range is $V_{DD}-|V_{ov5}|-|V_{tp}|-|V_{ov1}|$. Taking $|V_{ov5}|=|V_{ov1}|=0.1$ V gives exactly $1.5-0.1-0.8-0.1=+0.5$ V.
- **Range to $-V_{SS}$.** $M_1$ stays saturated while its gate is above $V_{D1}-|V_{tp}|$, which is far below $-1.5$ V (Step 4).
- **Swing of 1.5 V p-p with 100-mV margins.** Give the mirror $|V_{ov}|=0.1$ V. Give the n-channel devices 0.15 V (smaller widths). $M_{11}$, $M_{12}$ need $V_{DS}=V_{ov}+0.1=0.25$ V.

With $W/L=2I_D/(k'V_{ov}^2)$, for example $(W/L)_1=2(50\ \mu\mathrm A)/((64.7\ \mu\mathrm{A/V^2})(0.1\ \mathrm V)^2)=155$:

| Device | $\lvert I_D\rvert$ (µA) | $\lvert V_{ov}\rvert$ (V) | $W/L$ |
|---|---|---|---|
| $M_1$, $M_2$ | 50 | 0.10 | 155 |
| $M_5$ | 100 | 0.10 | 309 |
| $M_3$, $M_4$, $M_{3A}$, $M_{4A}$ | 100 | 0.10 | 309 |
| $M_{11}$, $M_{12}$ | 150 | 0.15 | 68.7 |
| $M_{1A}$, $M_{2A}$ | 100 | 0.15 | 45.8 |

### Step 3 — Bias voltages

$$
V_{BIAS1}=V_{DD}-|V_{tp}|-|V_{ov5}|=+0.6\ \mathrm V,\qquad V_{BIAS3}=-V_{SS}+V_{tn}+V_{ov11}=-0.75\ \mathrm V,
$$

$$
V_{BIAS2}=-V_{SS}+(V_{ov11}+0.1\ \mathrm V)+V_{GS1A}=-1.5+0.25+0.75=-0.5\ \mathrm V,
$$

so the folding nodes sit at −1.25 V and $V_{DS11}=0.25$ V.

### Step 4 — Voltage checks

- **Input range.** Top: +0.5 V (Step 2). Bottom: $V_{D1}-|V_{tp}|=-1.25-0.8=-2.05$ V, below $-V_{SS}$.
- **Output swing.** Low end, $M_{2A}$ at the edge of saturation: $V_{BIAS2}-V_{tn}=-1.1$ V. High end, $M_{4A}$ at the edge: its gate is at the mirror node $V_{DD}-2(0.9\ \mathrm V)=-0.3$ V, so $-0.3+0.8=+0.5$ V. That is 1.6 V p-p.
- **Margins at $V_{IC}=0$**, with the output near the mirror node:

| Device | $M_5$ | $M_{11}$ | $M_{1A}$, $M_{2A}$ | $M_3$, $M_4$, $M_{4A}$ |
|---|---|---|---|---|
| $\lvert V_{DS}\rvert-\lvert V_{ov}\rvert$ (V) | 0.5 | 0.1 | ≈ 0.8 | 0.8 |

### Step 5 — Bias generator

In the $V_T$-referenced core of [Fig. 2], $M_5$–$M_6$ force $I_{IN}=I_{OUT}$, and $M_3$, $M_4$ (equal sizes, cascoded) force equal gate-source voltages. The loop $V_{EB1}=V_{EB2}+I_{OUT}R$ with emitter-area ratio $n$ gives $I_{OUT}=V_T\ln n/R$. Choose $n=8$ and 25 µA:

$$
R=\frac{V_T\ln8}{25\ \mu\mathrm A}=\frac{(25.85\ \mathrm{mV})(2.079)}{25\ \mu\mathrm A}=2.15\ \mathrm{k\Omega}.
$$

The bipolar devices are substrate pnp transistors, so their collectors (and here bases) sit at $-V_{SS}$. The core runs between $V_{DD}$ and $-V_{SS}$.

| Device | Role | $W/L$ |
|---|---|---|
| $M_{3}$, $M_{4}$ and cascodes $M_{3C}$, $M_{4C}$ (n) | equal-$V_{GS}$ pair, 25 µA, $V_{ov}=0.15$ V; $M_3$, $M_{3C}$ diode connected | 11.45 |
| $M_{5}$, $M_{6}$, $M_7$, $M_8$ (p) | mirror and 25-µA copies, $\lvert V_{ov}\rvert=0.1$ V; gate line = $V_{BIAS1}$ | 77.3 |
| $M_{B3}$ (n diode on $M_7$) | $V_{GS}=0.75$ V → $V_{BIAS3}$; $M_{11}$, $M_{12}$ are 6× | 11.45 |
| $M_{B2}$ (n diode on $M_8$) | $V_{GS}\approx1.0$ V → $V_{BIAS2}$ | 1.61 (hand), 1.30 (refined) |

The op-amp $M_5$ is 4× the core $M_6$, so it takes $V_{BIAS1}$ directly from the core gate line. The self-biased core also has a stable zero-current state, so a start-up circuit is required in practice; in simulation a `.nodeset` selects the operating state.

### Step 6 — Gain estimate

$$
G_m=g_{m1}=\frac{2(50\ \mu\mathrm A)}{0.1\ \mathrm V}=1\ \mathrm{mS},
$$

$$
R_{down}\approx g_{m2A}r_{o2A}(r_{o2}\parallel r_{o12})=(1.33\ \mathrm{mS})(500\ \mathrm{k\Omega})(200\ \mathrm{k\Omega})=133\ \mathrm{M\Omega},\qquad
R_{up}\approx g_{m4A}r_{o4A}r_{o4}=(2\ \mathrm{mS})(250\ \mathrm{k\Omega})^2=125\ \mathrm{M\Omega},
$$

$$
A_v=G_m(R_{up}\parallel R_{down})=(1\ \mathrm{mS})(64.5\ \mathrm{M\Omega})\approx6.4\times10^4\ (96\ \mathrm{dB}).
$$

### Step 7 — SPICE verification and refinement

The level-1 models include $\gamma=0.25\ \mathrm{V^{1/2}}$. The n-channel bodies are at $-V_{SS}$, the $M_1$/$M_2$ well is at their common source, and the other p-channel wells are at $V_{DD}$.

```spice
* grsim-06-20 folded-cascode op amp with V_T-referenced bias
.model nm nmos level=1 kp=194u  vto=0.6  gamma=0.25 phi=0.7 lambda=0.02 ld=0.09u
.model pm pmos level=1 kp=64.7u vto=-0.8 gamma=0.25 phi=0.7 lambda=0.04 ld=0.09u
.model qsub pnp is=1e-16 bf=50
VDD vdd 0 1.5
VSS vss 0 -1.5
* bias core (Fig. 2) with cascoded M3/M4
M6b p6 p6 vdd vdd pm w=77.3u  l=1.18u
M5b a5 p6 vdd vdd pm w=77.3u  l=1.18u
M3c a5 a5 a3  vss nm w=11.45u l=1.18u
M3b a3 a3 e1  vss nm w=11.45u l=1.18u
M4c p6 a5 a4  vss nm w=11.45u l=1.18u
M4b a4 a3 r1  vss nm w=11.45u l=1.18u
Rb  r1 e2 2.15k
Q1b vss vss e1 qsub 1
Q2b vss vss e2 qsub 8
* extension: VBIAS3 (b3) and VBIAS2 (b2)
M7b b3 p6 vdd vdd pm w=77.3u  l=1.18u
MB3 b3 b3 vss vss nm w=11.45u l=1.18u
M8b b2 p6 vdd vdd pm w=77.3u  l=1.18u
MB2 b2 b2 vss vss nm w=1.3u   l=1.18u
* op amp (Fig. 1); VBIAS1 = node p6
M5  cs  p6  vdd vdd pm w=334u  l=1.18u
M1  f1  inp cs  cs  pm w=155u  l=1.18u
M2  f2  inm cs  cs  pm w=155u  l=1.18u
M11 f1  b3  vss vss nm w=68.7u l=1.18u
M12 f2  b3  vss vss nm w=68.7u l=1.18u
M1A m   b2  f1  vss nm w=45.8u l=1.18u
M2A out b2  f2  vss nm w=45.8u l=1.18u
M3  g3  g3  vdd vdd pm w=309u  l=1.18u
M3A m   m   g3  vdd pm w=309u  l=1.18u
M4  d4  g3  vdd vdd pm w=309u  l=1.18u
M4A out m   d4  vdd pm w=309u  l=1.18u
.nodeset v(p6)=0.6 v(a5)=0.2
* gain: dc feedback only (open loop at 1 Hz)
Vp  inp 0 dc 0 ac 1
Rf  out inm 1G
Cf  inm 0 1
.ac lin 1 1 1
.end
```

The first run with the hand sizes showed two shortfalls, both corrected:

- **$V_{BIAS2}$.** The body effect raises $V_{t}$ of $M_{1A}$, $M_{2A}$ by 35 mV, which cut the $M_{11}$ margin to 67 mV. Reducing $M_{B2}$ from 1.61 to 1.30 raises $V_{BIAS2}$ to −0.455 V and restores a 109-mV margin.
- **Tail current.** Channel-length modulation ($|V_{DS}|$ of 0.6 V in $M_5$ against 0.9 V in the core) and the core current of 24.5 µA left $|I_{D5}|=96.8\ \mu$A, so the stage could not quite source or sink 100 µA. Widening $M_5$ to 334 gives 104.6 µA at the same overdrive.

Results with the refined design:

| Quantity | Specification / hand | ngspice |
|---|---|---|
| $I_{BIAS}=V_T\ln8/R$ | 25.0 µA | 24.5 µA |
| $\lvert I_{D5}\rvert$, $I_{D11}$, $\lvert I_{D3}\rvert$ | 100, 150, 100 µA | 104.6, 153, 101 µA |
| Smallest $\lvert V_{DS}\rvert-\lvert V_{ov}\rvert$ at $V_{IC}=0$ | ≥ 0.1 V | 0.109 V ($M_{11}$, $M_{12}$); all others ≥ 0.45 V |
| Input common-mode range | −1.5 to +0.5 V | below −1.6 V to +0.51 V ($M_5$ saturated) |
| Linear output range | ≥ 1.5 V p-p | −1.09 to +0.51 V (1.6 V p-p) |
| Output current at $V_o\approx0$ | ±100 µA | ±100 µA delivered (the pair steers 102.3 of 104.6 µA) |
| DC gain | $6.4\times10^4$ | $7.5\times10^4$ (97.5 dB) |
| Supply current | 0.4–0.5 mA | 0.41 mA (1.22 mW) |

The input range was found with the output servoed to 0 V while the common-mode level was swept. $M_5$ leaves saturation at +0.51 V (its 100-mV margin is used up at +0.41 V), and $M_1$ is still 0.54 V into saturation at −1.5 V. The output range is where $M_{2A}$ (bottom) and $M_{4A}$ (top) stay saturated. The design meets every specification. Its final geometries are the tables of Steps 2 and 5 with $(W/L)_5=334$ and $(W/L)_{B2}=1.30$; all drawn lengths are 1.18 µm.
