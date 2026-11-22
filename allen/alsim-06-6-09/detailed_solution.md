# Detailed solution - alsim-06-6-09

Choose the four bias voltages from the given currents so that the current sources sit just above the edge of saturation. Then simulate the folded cascode of [Fig. 1] with a 20-pF load: open-loop ac for the frequency response, follower sweeps and steps for the ICMR, slew rate and settling, and an open-loop dc sweep for the output range. Hand estimates with the same model set the expected values. Because $C_L$ is twice the 10 pF of the original design, GB and slew rate should come out at about half the original 10 MHz and 10 V/µs.

### Step 1 — Bias voltages

Each bias voltage follows from the square law at the given current and size. Two pairs of devices are biased at the edge of saturation.

**M3** (15/1, 100 µA, source at ground):
$$
V_{ov3}=\sqrt{\frac{2(100\ \mu)}{(110\ \mu)(15)}}=0.348\ \mathrm V\;\Rightarrow\;V_{NB1}=0.7+0.348=1.048\ \mathrm V .
$$

**M4, M5** (160/1, 125 µA):
$$
V_{ov4}=\sqrt{\frac{2(125\ \mu)}{(50\ \mu)(160)}}=0.177\ \mathrm V\;\Rightarrow\;V_{PB1}=2.5-0.877=1.623\ \mathrm V .
$$

**M6, M7** (160/1, 75 µA). Their sources sit at $2.5-0.177=2.323$ V when M4 and M5 are at the edge of saturation. With the body effect ($V_{SB}=0.177$ V, $|V_T|=0.754$ V) and $V_{ov6}=\sqrt{150/(50\cdot160)}=0.137$ V, $V_{SG6}=0.89$ V. The edge value is $V_{PB2}=1.43$ V; use $V_{PB2}=1.40$ V for about 30 mV of margin.

**M10, M11** (20/1, 75 µA). $V_{ov10}=\sqrt{150/(110\cdot20)}=0.261$ V, and the low-voltage cascode mirror sets their gates at $V_{GS10}=0.96$ V. For $V_{DS10}=0.261$ V, M8 has $V_{SB}=0.261$ V, $V_{T8}=0.757$ V and $V_{GS8}=1.018$ V. The edge value is $V_{NB2}=1.28$ V; use $V_{NB2}=1.30$ V.

### Step 2 — Hand estimates

$$
\begin{aligned}
g_{m1}&=\sqrt{2(110\ \mu)(33)(50\ \mu)}=603\ \mu\mathrm S,\qquad GB=\frac{g_{m1}}{C_L}=\frac{603\ \mu\mathrm S}{20\ \mathrm{pF}}=30\ \mathrm{Mrad/s}=4.8\ \mathrm{MHz},\\
SR&=\frac{I_3}{C_L}=\frac{100\ \mu\mathrm A}{20\ \mathrm{pF}}=5\ \mathrm{V/\mu s},\qquad P_{diss}=(2.5\ \mathrm V)(I_4+I_5)=(2.5\ \mathrm V)(250\ \mu\mathrm A)=0.63\ \mathrm{mW}.
\end{aligned}
$$

At the output, the n-channel cascode gives $R_{dn}=g_{m9}r_{ds9}r_{ds11}=(574\ \mu\mathrm S)(333\ \mathrm{k\Omega})^2=64$ MΩ. The p-channel cascode, looking up through M7 into $r_{ds2}\|r_{ds5}$, gives $R_{up}=g_{m7}r_{ds7}(r_{ds2}\|r_{ds5})=35$ MΩ. So

$$
R_{out}=R_{dn}\|R_{up}=23\ \mathrm{M\Omega},\qquad A_v=g_{m1}R_{out}=1.4\times10^4\ (82.7\ \mathrm{dB}),\qquad f_{p1}=\frac{1}{2\pi R_{out}C_L}=350\ \mathrm{Hz}.
$$

The nondominant poles at the folding and mirror nodes lie at hundreds of Mrad/s, so the phase margin should be close to 90°. The ICMR runs from $V_{DS3}(\mathrm{sat})+V_{GS1}\approx0.35+0.87=1.2$ V (about 1.3 V with the body effect) up to the rail. The output range is bounded by two n-channel saturation voltages at the bottom, $V_{NB2}-V_{T9}\approx0.54$ V, and by the p-channel cascode at the top, $V_{PB2}+|V_{T7}|\approx2.15$ V. Linear settling has a time constant $1/(2\pi GB)\approx33$ ns, so 1% takes about $4.6\times33$ ns ≈ 0.15 µs.

### Step 3 — Simulation deck

```spice
* alsim-06-6-09 folded-cascode op amp, open-loop ac
VDD vdd 0 DC 2.5
VPB1 pb1 0 DC 1.623
VPB2 pb2 0 DC 1.40
VNB1 nb1 0 DC 1.048
VNB2 nb2 0 DC 1.30
M3 t nb1 0 0 NCH W=15U L=1U
M1 ra inp t 0 NCH W=33U L=1U
M2 rb inn t 0 NCH W=33U L=1U
M4 ra pb1 vdd vdd PCH W=160U L=1U
M5 rb pb1 vdd vdd PCH W=160U L=1U
M6 g pb2 ra vdd PCH W=160U L=1U
M7 out pb2 rb vdd PCH W=160U L=1U
M8 g nb2 s8 0 NCH W=20U L=1U
M9 out nb2 s9 0 NCH W=20U L=1U
M10 s8 g 0 0 NCH W=20U L=1U
M11 s9 g 0 0 NCH W=20U L=1U
CL out 0 20P
VIN inp 0 DC 1.75 AC 1
LF out inn 1G
CF inn 0 1
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
.OP
.AC DEC 50 1 1G
.PRINT AC VDB(OUT) VP(OUT)
.END
```

The input common-mode level is 1.75 V. The inductor/capacitor pair closes the loop at dc only, so the ac analysis is open loop. The other measurements use the same circuit:
- a unity-gain follower (out tied to inn) with 1.4↔2.1 V steps for the slew rate and with 1.7↔1.8 V steps for small-signal settling;
- a follower dc sweep of the input for the ICMR, monitoring $I_3$;
- an open-loop dc sweep with saturation checks on M5, M7, M9 and M11 for the output range.

The given model cards have no capacitance parameters, so $C_L$ is the only capacitance.

### Step 4 — Results

The operating point has $I_3=102.9\ \mu$A, $I_4=126.6\ \mu$A, $I_6=I_7=75.2\ \mu$A and nodes RA/RB at 2.294/2.296 V ($V_{SD4}=0.206$ V, just above $V_{ov4}=0.177$ V).

![Simulated open-loop gain and phase of the folded-cascode op amp with 20 pF](/q/alsim-06-6-09/solution-bode.svg)

![Simulated large-step response of the follower with 20 pF, slewing at 5.15 V/µs in both directions](/q/alsim-06-6-09/solution-step.svg)

| Quantity | Hand | SPICE |
|---|---|---|
| dc gain | 1.4 × 10⁴ (82.7 dB) | 1.9 × 10⁴ (85.7 dB) |
| Dominant pole | 350 Hz | 259 Hz |
| GB | 4.8 MHz | 4.98 MHz |
| Phase margin | ≈ 90° | 90.0° |
| $P_{diss}$ | 0.63 mW | 0.63 mW (253 µA) |
| ICMR | 1.2–1.3 V to $V_{DD}$ | 1.21 V ($I_3$ −5%) to $V_{DD}$ |
| Output range | 0.54–2.15 V | 0.55–2.16 V |
| Slew rate | 5 V/µs | +5.15 / −5.15 V/µs |
| 1 % settling | ≈ 0.15 µs (small step) | 148 ns (±0.1 V), 208 ns (±0.7 V, incl. slewing) |

- **Gain and pole.** The gain is 3 dB above the hand value, and the pole correspondingly lower, because the level-1 output conductances are $\lambda I_D/(1+\lambda V_{DS})$ rather than $\lambda I_D$. GB depends only on $g_{m1}/C_L$ and agrees.
- **Phase margin.** It is a full 90° here because the models contain no device capacitances. With realistic junction and gate capacitances it would drop, but it would stay well above 75°, because the folding-node poles are far above 5 MHz.
- **ICMR.** In the follower sweep the input stage works up to the 2.5-V rail ($I_3$ constant). The follower's output tracks the input only up to the output limit of 2.15 V, so above that the output range, not the ICMR, sets the limit.

As expected, GB (4.98 MHz) and SR (5.15 V/µs) are about half the 10-MHz and 10-V/µs targets of the original design, because both are inversely proportional to the 20-pF load. All other properties are essentially independent of $C_L$.
