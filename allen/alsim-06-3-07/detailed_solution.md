# Detailed solution - alsim-06-3-07

Find the bias currents from the $R_S$–M8 branch, derive the small-signal parameters of the two stages, and evaluate each specification with the standard two-stage op-amp relations, keeping in mind that the input pair is p-channel. Then size the nulling transistors M9/M10, and simulate the circuit with LEVEL-1 models including device capacitances to obtain the phase margin and settling time. The hand analysis ignores the body effect except for M9.

### Step 1 — Bias currents

M8 is diode connected and in series with $R_S$ across the 5-V supply:

$$
I_8=\frac{V_{DD}-V_{SS}-V_{SG8}}{R_S},\qquad V_{SG8}=0.7+\sqrt{\frac{2I_8}{(50\ \mu\mathrm{A/V^2})(3)}}\;\Rightarrow\;I_8=36.1\ \mu\mathrm A,\ V_{SG8}=1.39\ \mathrm V .
$$

M5 (3/1) and M7 (5/1) share M8's gate, so $I_5=36.1\ \mu$A, $I_1=I_2=18.0\ \mu$A and $I_7=I_6=(5/3)I_8=60.1\ \mu$A.

### Step 2 — Small-signal parameters, gain and output resistance

$$
\begin{aligned}
g_{m1}&=\sqrt{2K'_P(W/L)_1I_1}=\sqrt{2(50\ \mu)(2)(18.0\ \mu)}=60.1\ \mu\mathrm S,\\
g_{m6}&=\sqrt{2K'_N(W/L)_6I_6}=\sqrt{2(110\ \mu)(10)(60.1\ \mu)}=364\ \mu\mathrm S,\\
g_{ds2}+g_{ds4}&=(0.05+0.04)(18.0\ \mu\mathrm A)=1.62\ \mu\mathrm S,\qquad g_{ds6}+g_{ds7}=(0.04+0.05)(60.1\ \mu\mathrm A)=5.41\ \mu\mathrm S .
\end{aligned}
$$

The first stage, with its current-mirror load, has gain $g_{m1}/(g_{ds2}+g_{ds4})$ and the second $g_{m6}/(g_{ds6}+g_{ds7})$:

$$
A_v=\frac{g_{m1}g_{m6}}{(g_{ds2}+g_{ds4})(g_{ds6}+g_{ds7})}=\frac{(60.1\ \mu)(364\ \mu)}{(1.62\ \mu)(5.41\ \mu)}=2.49\times10^3\ (67.9\ \mathrm{dB}),
$$

$$
R_{out}=\frac{1}{g_{ds6}+g_{ds7}}=185\ \mathrm{k\Omega}.
$$

### Step 3 — Power, input common-mode range and output swing

$$
P_{diss}=(5\ \mathrm V)(I_8+I_5+I_7)=(5\ \mathrm V)(132.2\ \mu\mathrm A)=0.66\ \mathrm{mW}.
$$

For a p-channel input pair, the upper limit is set by the tail M5 leaving saturation, and the lower limit by M1 entering triode against the diode M3:

$$
\begin{aligned}
V_{in}(\max)&=V_{DD}-V_{SD5}(\mathrm{sat})-V_{SG1}=2.5-0.693-1.301=0.51\ \mathrm V,\\
V_{in}(\min)&=V_{SS}+V_{GS3}-|V_{TP}|=-2.5+0.986-0.7=-2.21\ \mathrm V .
\end{aligned}
$$

The output swings until M7 or M6 leaves saturation:

$$
V_{out}(\max)=V_{DD}-\sqrt{\frac{2I_7}{K'_P(5)}}=2.5-0.69=1.81\ \mathrm V,\qquad
V_{out}(\min)=V_{SS}+\sqrt{\frac{2I_6}{K'_N(10)}}=-2.5+0.33=-2.17\ \mathrm V .
$$

### Step 4 — Slew rate, bandwidth and poles

The compensation capacitor is charged by the tail current:

$$
SR=\frac{I_5}{C_c}=\frac{36.1\ \mu\mathrm A}{6\ \mathrm{pF}}=6.0\ \mathrm{V/\mu s}.
$$

With $C_L=20$ pF, a rising output edge is limited by M7. At first it supplies $(I_7-I_5)/C_L=1.2$ V/µs to the load, because M7 must also feed $C_c$. Once the first stage saturates the rate approaches $I_7/(C_L+C_c)=2.3$ V/µs.

$$
GB=\frac{g_{m1}}{C_c}=\frac{60.1\ \mu\mathrm S}{6\ \mathrm{pF}}=1.0\times10^7\ \mathrm{rad/s}=1.59\ \mathrm{MHz},\qquad |p_1|=\frac{GB}{A_v}=4.0\times10^3\ \mathrm{rad/s}.
$$

With 20 pF the output pole is $|p_2|=g_{m6}/C_L=1.82\times10^7$ rad/s, which predicts $\Phi_M\approx90^\circ-\arctan(GB/|p_2|)=61^\circ$ once the RHP zero is removed.

### Step 5 — PSRR at dc

The supply gains come from a linearized small-signal analysis of the whole circuit, including the $R_S$–M8 bias branch. A change in $V_{DD}$ changes $I_8$ by $1/(R_S+1/g_{m8})\approx9\ \mu$A/V. M7 and M5 copy this, and M6 largely cancels it, because the mirror node moves with $I_5$. Solving the linearized hand model numerically at 1 Hz gives

$$
A_{dd}^{+}\approx1.0,\qquad A_{dd}^{-}\approx0.26\;\Rightarrow\;PSRR^{+}=\frac{A_v}{A_{dd}^{+}}\approx3.3\times10^3\ (70\ \mathrm{dB}),\qquad PSRR^{-}\approx1.3\times10^4\ (82\ \mathrm{dB}).
$$

### Step 6 — Nulling transistors M9 and M10

Node 7 sits at $V_{SS}+V_{GS6}=-2.5+1.03=-1.47$ V. M9 (gate at $V_{DD}$) has $V_{GS9}=3.97$ V and $V_{SB9}=1.03$ V, so $V_{T9}=0.7+0.4(\sqrt{1.73}-\sqrt{0.7})=0.89$ V. Setting its triode resistance to $1/g_{m6}$:

$$
R_z=\frac{1}{K'_N(W/L)_9(V_{GS9}-V_{T9})}=\frac{1}{g_{m6}}\;\Rightarrow\;\left(\frac WL\right)_9=\frac{364\ \mu\mathrm S}{(110\ \mu\mathrm{A/V^2})(3.08\ \mathrm V)}=1.07\approx1\ \mu\mathrm m/1\ \mu\mathrm m .
$$

M10 (gate at $V_{SS}$, n-well at $V_{DD}$) has $V_{SG10}\approx1.03$ V, below its body-affected threshold of about 1.4 V, so it is off at the operating point. A minimum 1/1 device suffices; it conducts only during large excursions of node 7. With $R_z=1/g_{m6}$ the zero moves to infinity, removing the RHP zero.

### Step 7 — Simulation

The deck uses the node numbers of [Fig. 1]. PMOS bulks are at $V_{DD}$ and NMOS bulks at $V_{SS}$. Gate capacitances come from TOX and the overlap values, and no drain/source areas are specified. The open-loop response is measured with dc feedback through a 1-GH inductor and a 1-F capacitor, which close the loop only at dc.

```spice
* alsim-06-3-07 two-stage op amp, open-loop ac
VDD 1 0 DC 2.5
VSS 10 0 DC -2.5
M8 2 2 1 1 PCH W=3U L=1U
RS 2 10 100K
M5 3 2 1 1 PCH W=3U L=1U
M1 6 4 3 1 PCH W=2U L=1U
M2 7 5 3 1 PCH W=2U L=1U
M3 6 6 10 10 NCH W=4U L=1U
M4 7 6 10 10 NCH W=4U L=1U
M6 8 7 10 10 NCH W=10U L=1U
M7 8 2 1 1 PCH W=5U L=1U
M9 7 1 9 10 NCH W=1U L=1U
M10 7 10 9 1 PCH W=1U L=1U
CC 9 8 6P
CL 8 0 20P
VIN 5 0 DC 0 AC 1
LF 8 4 1G
CF 4 0 1
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
+ CGSO=220P CGDO=220P CGBO=700P CJ=770U CJSW=380P MJ=0.5 MJSW=0.38 TOX=140E-10
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
+ CGSO=220P CGDO=220P CGBO=700P CJ=560U CJSW=350P MJ=0.5 MJSW=0.35 TOX=140E-10
.OP
.AC DEC 100 10 100MEG
.PRINT AC VDB(8) VP(8)
.END
```

The other measurements use variants of the same deck:
- **PSRR:** an ac source on VDD or VSS instead of VIN.
- **Settling and slew rate:** a unity-gain follower (node 8 tied to node 4) with ±50-mV and ±1-V pulses.
- **ICMR:** a dc sweep of the follower input.
- **Output swing:** an open-loop dc sweep with saturation checks on M6 and M7.

### Step 8 — Results

The operating point gives $I_5=35.6\ \mu$A, $I_7=63.6\ \mu$A, a supply current of 135.5 µA and node 7 at −1.476 V. $R_z$ of M9 is $1/(339\ \mu\mathrm S)=2.95$ kΩ against $1/g_{m6}=2.55$ kΩ, and M10 is off.

![Simulated open-loop gain and phase for no load and 20 pF, with GB and phase margins marked](/q/alsim-06-3-07/solution-bode.svg)

![Simulated ±50 mV step response of the unity-gain follower for no load and 20 pF, with the ±1 % band](/q/alsim-06-3-07/solution-step.svg)

| Quantity | Hand | SPICE |
|---|---|---|
| $A_v$ | 2490 (67.9 dB) | 3340 (70.5 dB) |
| $R_{out}$ | 185 kΩ | 194 kΩ |
| $P_{diss}$ | 0.66 mW | 0.68 mW |
| PSRR⁺ / PSRR⁻ (dc) | 70 dB / 82 dB | 70 dB / 81 dB |
| ICMR | −2.21 to +0.51 V | −2.41 to +0.55 V |
| Output swing (saturated) | −2.17 to +1.81 V | −2.15 to +1.83 V |
| Slew rate | 6.0 V/µs | 5.9 V/µs (20 pF: rising 2.45 V/µs) |
| GB | 1.59 MHz | 1.66 MHz (no load), 1.48 MHz (20 pF) |
| Phase margin | 61° (20 pF) | 91° (no load), 66° (20 pF) |
| 1 % settling, ±50 mV | — | 0.45 µs (no load), 0.46 µs (20 pF, 5% overshoot) |

The simulated gain is higher than the hand value because the level-1 model divides $g_{ds}$ by $(1+\lambda V_{DS})$ and the currents are a few percent higher. The ICMR's lower end is extended by the body effect of M1 and M2, whose bulks are at $V_{DD}$. The ICMR limits are taken where the follower error exceeds 10 mV (lower) and where $I_5$ has dropped by 5% (upper).

With 20 pF the phase margin of 66° agrees with the two-pole estimate (61°), since the RHP zero is removed. Without load, $p_2$ is far above GB and the margin is about 90°. In both cases the small-step settling is close to the single-pole value $4.6/GB\approx0.46$ µs. The 20-pF case overshoots by 5% but settles in about the same time.
