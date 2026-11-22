# Detailed solution - grsim-07-39

Solve the self-biased dc point first: the $Q_2$–$M_2$ chain sets the base of $Q_1$, and $M_1$ must carry whatever makes its own $V_{GS}$ equal to $V_O$. Then linearize. $M_1$ converts the input to a current, the common-base $Q_1$ passes it into $R_{L2}$, and $Q_3$ buffers the result. Finally, find the zero-value resistance of every capacitor and group the time constants by circuit section to estimate the two lowest poles, and check them with an ngspice pole-zero analysis.

### Step 1 — DC operating point

With no dc current in the 30-kΩ resistor, $V_G=V_O$.

- **Bias chain.** The current through the 10-kΩ resistor flows through the diode-connected $Q_2$ and $M_2$: $I_{D2}=(5-V_{BE2}-V_{GS2})/10\ \mathrm{k\Omega}$ with $V_{GS2}=0.8+\sqrt{2I_{D2}/(40\ \mu\cdot20)}$. With $V_{BE}=V_T\ln(I_C/I_S)\approx0.81$ V for $I_S=6\times10^{-18}$ A, this gives $I_{D2}=0.256$ mA, $V_{GS2}=1.60$ V and $V_{B1}=2.41$ V.
- **$M_1$ node.** $Q_1$'s emitter (the drain of $M_1$) sits at $V_{B1}-V_{BE1}=1.60$ V. $R_{L1}$ supplies $(5-1.60)/1\ \mathrm{k\Omega}=3.40$ mA and $Q_1$'s emitter adds its current, so $I_{D1}=3.64$ mA and $I_{C1}=0.243$ mA.
- **Output.** $V_O=V_{GS1}=0.8+\sqrt{2(3.64\ \mathrm{mA})/(40\ \mu\cdot300)}=1.58$ V, and $I_{C3}\approx V_O/R_{L3}=1.57$ mA. $Q_1$'s collector is at $5-10\ \mathrm{k\Omega}(I_{C1}+I_{B3})=2.44$ V, just above its base, so $Q_1$ is active.

Small-signal values: $g_{m,M1}=2I_{D1}/V_{ov1}=9.35$ mA/V, $g_{m,M2}=0.64$ mA/V, $g_{m,Q1}=9.39$ mA/V, $g_{m,Q2}=9.9$ mA/V, $g_{m,Q3}=60.5$ mA/V. The bipolar $C_\pi=\tau_Fg_m+2C_{je0}$ is 104 fF ($Q_1$), 108 fF ($Q_2$) and 615 fF ($Q_3$), and the junction values follow from the bias voltages ($C_{\mu1}=4.9$ fF, $C_{cs1}=11.7$ fF, $C_{\mu3}=2.9$ fF).

### Step 2 — Low-frequency gain

$M_1$'s signal current $g_{m,M1}v_i$ divides between $R_{L1}$ and the low resistance ($\approx1/g_{m,Q1}+r_b/\beta\approx110\ \Omega$) looking into $Q_1$'s emitter, so about 90 % enters $Q_1$. $Q_1$ passes it to its collector, where it develops a voltage across $R_{L2}$ loaded by $Q_3$'s input. $Q_3$ follows into $R_{L3}$ (the 30-kΩ resistor goes to the driven gate and only loads lightly). The linearized circuit gives

$$
\frac{v_o}{v_i}\approx-g_{m,M1}(0.90)(R_{L2}\parallel R_{i3})(0.97)\approx-75 .
$$

### Step 3 — Zero-value time constants

For each capacitor, with all others open and the input source shorted, the resistance was found on the linearized circuit by applying a test current:

| Capacitor | $C$ (fF) | $R$ | $RC$ (ns) |
|---|---|---|---|
| $C_{gs2}$ (bias node $M_2$/$Q_2$) | 200 | 1.34 kΩ | 0.268 |
| $C_{db2}$ (same node) | 200 | 1.34 kΩ | 0.268 |
| $C_{\mu1}$ | 4.9 | 25.9 kΩ | 0.128 |
| $C_{cs1}$ | 11.7 | 9.23 kΩ | 0.108 |
| $C_{\pi3}$ | 615 | 174 Ω | 0.107 |
| $C_{\pi1}$ | 104 | 266 Ω | 0.028 |
| $C_{\mu3}$ | 2.9 | 9.57 kΩ | 0.028 |
| $C_{db1}$ | 200 | 108 Ω | 0.022 |
| $C_{cs2}$, $C_{\pi2}$, $C_{gd1}$, $C_{\mu2}$ | — | — | 0.040 total |
| Sum $T_0$ | | | 0.994 |

The 1.34 kΩ at the bias node is $1/g_{m,M2}=1.56\ \mathrm{k\Omega}$ in parallel with the 10-kΩ resistor. $C_{\mu1}$ sees $Q_1$'s collector node (about 9.2 kΩ) plus the coupling to its base. A single dominant pole would be at

$$
f_{p1}\approx\frac{1}{2\pi T_0}=\frac{1}{2\pi(0.994\ \mathrm{ns})}=160\ \mathrm{MHz}.
$$

The time constants, however, fall into two groups that interact only weakly:

$$
\text{bias node: }0.566\ \mathrm{ns}\Rightarrow\approx280\ \mathrm{MHz},\qquad \text{signal path: }0.431\ \mathrm{ns}\Rightarrow\approx370\ \mathrm{MHz}.
$$

This suggests two poles of the same order, a few hundred megahertz each, rather than one dominant pole at 160 MHz.

### Step 4 — SPICE check

The bipolar model uses the given parameters ($C_{je}$ entered as a constant $2C_{je0}=10$ fF). The MOS capacitances are explicit capacitors with the given bias-point values. The gate source carries the self-biased dc level, 1.579 V.

```spice
* grsim-07-39 BiCMOS stage
.model nm nmos level=1 kp=40u vto=0.8 lambda=0 gamma=0
.model qn npn is=6e-18 bf=120 tf=10p rb=400 cje=10f mje=0
+ cjc=5f vjc=0.6 mjc=0.33 cjs=20f vjs=0.6 mjs=0.33
VDD vdd 0 5
Vi  g 0 dc 1.579149 ac 1
M1  d1 g 0 0 nm w=300u l=1u
Cgs1 g 0 200f
Cgd1 g d1 90f
Cdb1 d1 0 200f
RL1 vdd d1 1k
Q1  c1 b1 d1 0 qn
RL2 vdd c1 10k
Rb1 vdd b1 10k
Q2  b1 b1 e2 0 qn
M2  e2 e2 0 0 nm w=20u l=1u
Cgs2 e2 0 200f
Cdb2 e2 0 200f
Q3  vdd c1 o 0 qn
RL3 o 0 1k
R30 o g 30k
.ac dec 200 1Meg 100G
.pz g 0 o 0 vol pz
.end
```

| Quantity | Hand | ngspice |
|---|---|---|
| $V_O$, $I_{D1}$, $I_{D2}$ | 1.58 V, 3.64 mA, 0.256 mA | 1.579 V, 3.64 mA, 0.257 mA |
| Gain | ≈ −75 | 37.5 dB (−74.9) |
| Lowest pole | 160 MHz (single-pole sum); ≈ 280 MHz (bias group) | 254 MHz, with a zero at 283 MHz |
| Second pole | ≈ 370 MHz (signal group) | 569 MHz |
| −3-dB bandwidth | — | 471 MHz |

The simulation confirms two poles a few hundred megahertz apart. The lowest pole (254 MHz) belongs to the bias node that feeds $Q_1$'s base, which is only weakly in the signal path, and it is almost cancelled by a zero at 283 MHz. This pole-zero doublet barely affects the response, so the −3-dB bandwidth (471 MHz) is set mainly by the 569-MHz signal-path pole. The zero-value sum is therefore quite pessimistic here: it adds up the time constants of a node that hardly matters to the gain.
