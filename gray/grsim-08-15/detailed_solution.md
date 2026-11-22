# Detailed solution - grsim-08-15

Each half of the balanced amplifier is a series-shunt pair: $Q_1$ amplifies, $Q_3$ inverts again, and the 500-Ω resistor from $Q_3$'s collector returns the output to $Q_1$'s emitter, where it is compared with the input through the 50-Ω resistor. First solve the dc bias with $V_{BE}=0.7$ V and large $\beta$. Then, for a differential signal, the two tail nodes (the 78-Ω/50-Ω junction and the emitters of $Q_3$, $Q_4$) are ac grounds, so a half circuit gives the gain, impedances and loop gain. Finally, ngspice checks these, gives the large-signal characteristic, and shows how the gain varies from −55 °C to +125 °C.

### Step 1 — (a) Bias currents

Name the junction of the two 50-Ω resistors and the 78-Ω resistor $M$, and the emitters of $Q_3$, $Q_4$ node $T$; the far ends of the 78-Ω and 280-Ω resistors are at −3 V.

- **Input-pair emitters.** With the bases at 0 V, $V_{E1}=V_{E2}=-0.7$ V. KCL at $M$ (two 50-Ω currents in, one 78-Ω current out):
$$
2\,\frac{-0.7-V_M}{50\ \Omega}=\frac{V_M+3}{78\ \Omega}\ \Rightarrow\ V_M=-1.258\ \mathrm{V},\qquad I_{50}=\frac{-0.7+1.258}{50\ \Omega}=11.17\ \mathrm{mA}.
$$
- **Feedback current and $Q_1$.** Each 50-Ω current is supplied by $Q_1$'s emitter and by the 500-Ω feedback resistor from the output collector: $I_{C1}=I_{50}-(V_{C3}+0.7)/500\ \Omega$. $Q_1$'s collector is at $V_{C1}=3-(500\ \Omega)I_{C1}$, $Q_3$'s emitter at $V_T=V_{C1}-0.7$, and the 280-Ω resistor carries $I_{C3}+I_{C4}=2I_{C3}=(V_T+3)/280\ \Omega$.
- **Output node.** The 200-Ω resistor supplies both $Q_3$ and the feedback resistor: $(3-V_{C3})/200\ \Omega=I_{C3}+(V_{C3}+0.7)/500\ \Omega$.

Solving these together:

| Quantity | Value |
|---|---|
| $I_{C1}=I_{C2}$ | 6.84 mA |
| $I_{C3}=I_{C4}$ | 3.36 mA (280-Ω current 6.72 mA) |
| Feedback current in each 500 Ω | 4.33 mA |
| $V_{C3}=V_{C4}$ | +1.46 V |
| $V_{C1}=V_{C2}$ | −0.42 V |

$Q_1$ and $Q_2$ have $V_{CE}=-0.42-(-0.7)=0.28$ V, and their collector-base junctions are forward-biased by 0.42 V. They are at the edge of saturation even at room temperature; this matters in Step 6.

### Step 2 — (b) Small-signal parameters and half circuit

With $g_m=I_C/V_T$ and $r_\pi=\beta/g_m$ ($\beta=100$):

$$
g_{m1}=\frac{6.84\ \mathrm{mA}}{26\ \mathrm{mV}}=0.263\ \mathrm{S},\quad r_{\pi1}=380\ \Omega,\qquad g_{m3}=\frac{3.36\ \mathrm{mA}}{26\ \mathrm{mV}}=0.129\ \mathrm{S},\quad r_{\pi3}=774\ \Omega.
$$

For a differential input $\pm v_i/2$, nodes $M$ and $T$ stay at ac ground by symmetry. The half circuit is: $v_i/2$ drives $Q_1$'s base through $r_b$; $Q_1$'s emitter has 50 Ω to ground and 500 Ω to the output $v_{o}/2$; $Q_1$'s collector has 500 Ω to ground and drives $Q_3$'s base through $r_b$; $Q_3$'s emitter is grounded and its collector has 200 Ω to ground.

### Step 3 — (b) Two-port analysis of the half circuit

The feedback network (50 Ω and 500 Ω) samples the output voltage and returns a voltage to $Q_1$'s emitter, in series with the input loop: series-shunt feedback with

$$
f=\frac{50}{50+500}=0.0909,
$$

so the ideal gain is $1/f=11$.

Its loading is $h_{11f}=50\ \Omega\parallel500\ \Omega=45.5\ \Omega$ in $Q_1$'s emitter (output shorted) and 550 Ω at the output (input side open).

- **Input resistance of the basic amplifier.** $z_{ia}=r_b+r_{\pi1}+(\beta+1)h_{11f}=50+380+(101)(45.5)=5.02\ \mathrm{k\Omega}$.
- **First stage.** $i_{c1}=\beta\,v_{i,\text{half}}/z_{ia}$ flows into $500\ \Omega\parallel(r_b+r_{\pi3})=346\ \Omega$; the fraction $r_{\pi3}/(r_b+r_{\pi3})=0.939$ appears across $r_{\pi3}$.
- **Second stage.** $Q_3$'s collector current $g_{m3}v_{\pi3}$ flows into $200\ \Omega\parallel550\ \Omega=146.7\ \Omega$; two inversions make the overall sign positive.

$$
a=\frac{\beta}{z_{ia}}(346\ \Omega)(0.939)\,g_{m3}(146.7\ \Omega)=110.3,\qquad T=af=10.03,\qquad A=\frac{a}{1+T}=10.00.
$$

The differential gain equals the half-circuit gain, $v_o/v_i=10.0$. The differential input and output resistances are twice the half-circuit values:

$$
R_{\text{in}}=2z_{ia}(1+T)=2(5.02\ \mathrm{k\Omega})(11.03)=111\ \mathrm{k\Omega},\qquad R_{\text{out}}=\frac{2(146.7\ \Omega)}{1+T}=26.6\ \Omega.
$$

An exact nodal solution of the half circuit gives the same gain (10.00), $R_{\text{in}}=2(55.5\ \mathrm{k\Omega})=111\ \mathrm{k\Omega}$, $R_{\text{out}}=2(13.3\ \Omega)=26.5\ \Omega$, and a return ratio of 9.8 for $Q_3$'s controlled source.

### Step 4 — (c) SPICE setup and small-signal comparison

The transistors use $I_S=10^{-14}$ A (so $V_{BE}\approx0.71$ V near 6.8 mA), $\beta_F=100$, $r_b=50$ Ω and $V_A=\infty$, at a nominal temperature where $V_T=26$ mV. All resistors carry `tc1=1e-3`. The input is balanced with zero common mode: $V_p$ drives $Q_1$'s base and a VCVS of gain −1 drives $Q_2$'s base.

```spice
* grsim-08-15 balanced series-shunt amplifier
.options temp=28.57 tnom=28.57
.model qn npn is=1e-14 bf=100 rb=50
VCC vcc 0 3
VEE vee 0 -3
RC1 vcc c1 500 tc1=1e-3
RC2 vcc c2 500 tc1=1e-3
Q1 c1 b1 e1 qn
Q2 c2 b2 e2 qn
RE1 e1 m 50 tc1=1e-3
RE2 e2 m 50 tc1=1e-3
RM m vee 78 tc1=1e-3
RT t vee 280 tc1=1e-3
Q3 op c1 t qn
Q4 on c2 t qn
RL3 vcc op 200 tc1=1e-3
RL4 vcc on 200 tc1=1e-3
RF1 e1 op 500 tc1=1e-3
RF2 e2 on 500 tc1=1e-3
Vp b1 0 dc 0 ac 0.5
En b2 0 b1 0 -1
.op
.ac lin 1 100 100
.dc Vp -1 1 2m
.end
```

$R_{\text{in}}=1/|i(V_p)|$ for a 1-V differential input. For $R_{\text{out}}$ the inputs are grounded and a 1-A ac current is driven into $v_{op}$ and out of $v_{on}$.

| Quantity | Hand | ngspice |
|---|---|---|
| $I_{C1}=I_{C2}$ | 6.84 mA | 6.72 mA |
| $I_{C3}=I_{C4}$ | 3.36 mA | 3.42 mA |
| $V_{CE1}$ | 0.28 V | 0.34 V |
| $v_o/v_i$ | 10.00 | 10.01 |
| $R_{\text{in}}$ (differential) | 111 kΩ | 106 kΩ |
| $R_{\text{out}}$ (differential) | 26.6 Ω | 26.3 Ω |

The simulated $V_{BE}$ (0.71 V) and finite $\beta$ shift the bias slightly; the small-signal results agree within about 5 %.

### Step 5 — Large-signal transfer characteristic

![Differential output versus differential input from −2 V to 2 V: linear with slope 10 for |vi| below about 0.1 V, a sharp knee at |vo| ≈ 1 V, a peak of 1.70 V at vi ≈ 0.59 V and then about 1.5 V](/q/grsim-08-15/solution-transfer.svg)

The characteristic is odd-symmetric. It is linear with slope 10 for $|v_i|\lesssim0.1$ V ($|v_o|\lesssim1$ V). At the knee, the differential output has steered the 6.7-mA tail current of $Q_3$–$Q_4$ entirely to one side; at $v_i=0.2$ V, for example, $I_{C3}\approx0$ and $I_{C4}=7.8$ mA. With one output transistor off, the loop around that half is open, and the $Q_1$ on that side saturates ($V_{CE1}=0.08$ V at $v_i=0.2$ V). Beyond the knee the output rises only slowly (slope ≈ 1.5) through the remaining passive paths, peaks at 1.70 V near $v_i=0.59$ V, and settles near 1.5 V.

### Step 6 — Temperature coefficient of the gain

The ideal gain $1+500/50=11$ depends only on a resistor ratio, so a common +1000 ppm/°C TC cancels in it. What remains is the finite-loop-gain error $1/(1+T)\approx9\%$, which changes as $g_m$ and the bias change with temperature. The simulation (gain at each temperature, resistors and transistors both at that temperature) gives:

![Small-signal differential gain versus temperature: 10.20 at −55 °C, 10.02 at 27 °C, then a collapse above about 50 °C to 5.6 at 75 °C and 0.34 at 125 °C](/q/grsim-08-15/solution-gain-temperature.svg)

| Temperature | −55 °C | 0 °C | 27 °C | 50 °C | 75 °C | 100 °C | 125 °C |
|---|---|---|---|---|---|---|---|
| Gain | 10.20 | 10.08 | 10.02 | 9.76 | 5.59 | 2.05 | 0.34 |
| $V_{CE1}$ | 0.81 V | — | 0.34 V | 0.21 V | 0.13 V | — | 0.09 V |

From −55 °C to 27 °C the gain falls from 10.20 to 10.02:

$$
TC\approx\frac{10.02-10.20}{10.11\cdot82\ ^\circ\mathrm{C}}=-230\ \mathrm{ppm/^\circ C},
$$

a small negative value, far below the resistors' +1000 ppm/°C, as expected for a gain set by a resistor ratio.

Above about 50 °C, however, the bias of Step 1 fails. $V_{BE}$ falls by about 2 mV/°C, which raises the current through the 50-Ω resistors, and the collector resistors grow with temperature, so the drop across $Q_1$'s 500-Ω load rises while $Q_1$'s emitter moves up. $V_{CE1}$, only 0.34 V at 27 °C, shrinks to about 0.1 V and $Q_1$, $Q_2$ saturate. Their base current rises sharply (×2.6 at 75 °C), the loop gain collapses, and the gain drops to 5.6 at 75 °C and 0.34 at 125 °C. The same behaviour appears for $I_S$ between $10^{-15}$ and $10^{-13}$ A; only the temperature of the collapse moves (near 100 °C for $10^{-15}$ A, already near room temperature for $10^{-13}$ A). Over the full −55 °C to +125 °C range the circuit therefore has no single gain TC: the gain is stable to about −230 ppm/°C only as long as $Q_1$ and $Q_2$ stay out of saturation.
