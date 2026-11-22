# Detailed solution - grsim-08-13

The output voltage is sampled by the 10-kΩ/1-kΩ divider and fed back as a voltage to the base of $Q_2$, which sits in series with the input across the differential pair, so the amplifier is series-shunt (a voltage amplifier). First find the bias point with $|V_{BE}|=0.7$ V. Then build the basic amplifier with the loading of the feedback network, find $a$, $f$ and $T=af$, and obtain the closed-loop gain and impedances, checking them with an exact nodal solution. Finally, ngspice gives the small-signal quantities, the loop gain by double injection, the large-signal transfer characteristic and the harmonic distortion.

### Step 1 — DC operating point

With $v_i=0$ and $V_o\approx0$, the base of $Q_2$ is near ground, so the common emitter node is at $-0.7$ V and

$$
I_{\text{tail}}=\frac{-0.7\ \mathrm{V}-(-6\ \mathrm{V})}{5\ \mathrm{k\Omega}}=1.06\ \mathrm{mA}.
$$

$Q_3$ conducts when the 1.25-kΩ resistor carries $|V_{EB3}|/1.25\ \mathrm{k\Omega}=0.56$ mA. $Q_3$'s collector current feeds the 6-kΩ load to −6 V and the 11-kΩ divider to ground, so at $V_o\approx0$, $I_{C3}=(V_o+6)/6\ \mathrm{k\Omega}+V_o/11\ \mathrm{k\Omega}=1.006$ mA and $I_{B3}=10.1\ \mu$A. Then:

| Quantity | Value |
|---|---|
| $I_{C1}=0.56\ \mathrm{mA}+I_{B3}$ | 0.570 mA |
| $I_{C2}=\alpha(I_{\text{tail}}-I_{E1})$ | 0.485 mA |
| $I_{B2}=I_{C2}/200$ | 2.42 µA |
| $V_o\approx(10\ \mathrm{k\Omega})I_{B2}$ (bases at equal voltage) | +24 mV |

The last line holds because, with equal $V_{BE}$, the base of $Q_2$ must also be at 0 V, and its base current flows from the output through the 10-kΩ resistor. All transistors are in the forward-active region.

### Step 2 — Small-signal parameters

With $g_m=I_C/V_T$ and $r_\pi=\beta/g_m$:

| Device | $g_m$ (mS) | $r_\pi$ (kΩ) |
|---|---|---|
| $Q_1$ | 21.9 | 9.12 |
| $Q_2$ | 18.6 | 10.7 |
| $Q_3$ | 38.7 | 2.58 |

### Step 3 — Feedback network and basic amplifier

The feedback network is the divider, with feedback factor

$$
f=\frac{1\ \mathrm{k\Omega}}{1\ \mathrm{k\Omega}+10\ \mathrm{k\Omega}}=\frac{1}{11}.
$$

Its loading follows the series-shunt rules: at the input side (base of $Q_2$) it appears with the output shorted, $10\ \mathrm{k\Omega}\parallel1\ \mathrm{k\Omega}=909\ \Omega$ to ground; at the output side it appears with the input side open, 11 kΩ to ground.

In the basic amplifier, $v_i$ drives $Q_1$'s base and $Q_2$'s base returns through 909 Ω to ground:

- **Differential pair.** $Q_1$'s emitter resistance is $r_{\pi1}/(\beta+1)=45.4\ \Omega$. Looking into $Q_2$'s emitter gives $(r_{\pi2}+909\ \Omega)/(\beta+1)=57.9\ \Omega$, in parallel with the 5-kΩ tail: 57.2 Ω. Hence
$$
i_{c1}=\alpha\frac{v_i}{45.4\ \Omega+57.2\ \Omega}=(9.70\ \mathrm{mS})\,v_i .
$$
- **Second stage.** $Q_1$'s collector is loaded by $1.25\ \mathrm{k\Omega}\parallel r_{\pi3}=842\ \Omega$, so $v_{c1}=-8.17\,v_i$. $Q_3$ is a common-emitter stage (emitter at ac ground) whose collector current $g_{m3}v_{eb3}=-g_{m3}v_{c1}$ flows into $6\ \mathrm{k\Omega}\parallel11\ \mathrm{k\Omega}=3.88\ \mathrm{k\Omega}$.

$$
a=\frac{v_o}{v_i}=(9.70\ \mathrm{mS})(842\ \Omega)(38.7\ \mathrm{mS})(3.88\ \mathrm{k\Omega})=1227 .
$$

The basic amplifier's input resistance is $z_{ia}=v_i/i_{b1}=(\beta+1)(102.6\ \Omega)=20.6\ \mathrm{k\Omega}$, and its output resistance is $z_{oa}=3.88\ \mathrm{k\Omega}$ (infinite collector resistance since $V_A=\infty$).

### Step 4 — Closed-loop gain, loop gain and impedances

$$
\begin{aligned}
T&=af=\frac{1227}{11}=111.6,\qquad A=\frac{a}{1+T}=\frac{1227}{112.6}=10.90,\\
Z_{\text{in}}&=z_{ia}(1+T)=(20.6\ \mathrm{k\Omega})(112.6)=2.32\ \mathrm{M\Omega},\qquad Z_{\text{out}}=\frac{z_{oa}}{1+T}=\frac{3.88\ \mathrm{k\Omega}}{112.6}=34.5\ \Omega.
\end{aligned}
$$

An exact nodal solution of the same small-signal circuit gives $A=11.03$, a return ratio (for $Q_3$'s $g_m$ source) of $T=110.1$, $Z_{\text{in}}=2.30\ \mathrm{M\Omega}$ and $Z_{\text{out}}=34.9\ \Omega$. The gain is slightly above $10.90$ because the tail resistor is grounded, so the input is not exactly in series with the feedback voltage. For large $T$, $i_{c1}\to0$, so $Q_1$'s emitter follows $v_i$; the 5-kΩ tail then draws $v_i/5\ \mathrm{k\Omega}$, which must come from $Q_2$, so $v_{b2}=v_i[1+1/(g_{m2}\cdot5\ \mathrm{k\Omega})]$. The effective ideal gain is therefore $11(1+1/93.2)=11.12$, and $11.12\cdot T/(1+T)=11.02$, in agreement with the exact value.

### Step 5 — SPICE setup

The transistors use the Gummel-Poon defaults with $I_S=10^{-15}$ A, $\beta_F=200$ ($npn$) and 100 ($pnp$), $r_b=0$, $V_A=\infty$, and the temperature is set so that $V_T=26$ mV. This $I_S$ gives $|V_{BE}|\approx0.7$ V near 0.5 mA.

```spice
* grsim-08-13 feedback amplifier
.options temp=28.57 tnom=28.57
.model qn npn is=1e-15 bf=200
.model qp pnp is=1e-15 bf=100
VCC vcc 0 6
VEE vee 0 -6
R1 vcc c1 1.25k
Q1 c1 b1 e qn
Q2 vcc b2 e qn
RE e vee 5k
Q3 o c1 vcc qp
RL o vee 6k
R2 b2 0 1k
R10 o b2 10k
Vi b1 0 dc 0 ac 1 sin(0 0.25 1k)
.op
.ac lin 1 10 10
.dc Vi -1.5 1.5 5m
.tran 1u 5m 0 0.5u
.four 1k v(o)
.end
```

The ac analysis gives $v_o/v_i$ and $Z_{\text{in}}=1/|i(V_i)|$. For $Z_{\text{out}}$, $v_i$ is set to zero and a 1-A ac current is driven into the output. For the loop gain, the loop is broken between the output and the 10-kΩ resistor (node $o$ on the amplifier side, node $f$ on the feedback side). With a series voltage source, $T_v=-v_o/v_f$; with a shunt current source at the break, $T_i=i_a/i_f$, where $i_a$ and $i_f$ are the injected current's shares flowing into the amplifier side and the feedback side. The loop gain is then

$$
T=\frac{T_vT_i-1}{T_v+T_i+2}.
$$

### Step 6 — Small-signal results

The operating point gives $V_o=-39$ mV, $I_{C1}=0.584$ mA, $I_{C2}=0.469$ mA and $I_{C3}=0.990$ mA. The dc output differs from the +24 mV of Step 1 because the exponential model makes $V_{BE1}$ and $V_{BE2}$ differ by $V_T\ln(I_{C1}/I_{C2})=5.7$ mV, which the loop reflects to the output.

| Quantity | Hand (two-port) | Exact nodal | ngspice |
|---|---|---|---|
| $v_o/v_i$ | 10.90 | 11.03 | 11.03 |
| Loop gain $T$ | 111.6 | 110.1 | 108.3 ($T_v=168.2$, $T_i=307.8$) |
| $Z_{\text{in}}$ | 2.32 MΩ | 2.30 MΩ | 2.27 MΩ |
| $Z_{\text{out}}$ | 34.5 Ω | 34.9 Ω | 35.5 Ω |

The small differences between the exact nodal results and ngspice come from the slightly different bias currents ($g_{m1}=22.5$ mS, $g_{m2}=18.1$ mS, $g_{m3}=38.1$ mS in the simulation); with those values the return ratio of the nodal model is 108.3, identical to the injection result.

### Step 7 — Large-signal transfer characteristic

![Output voltage versus input voltage from −1.5 V to 1.5 V: flat at −3.88 V below vi ≈ −0.355 V, linear with slope 11 up to vi ≈ 0.535 V, then flat near 5.95 V](/q/grsim-08-13/solution-transfer.svg)

The characteristic has three regions:

- **Linear region**, $-0.355\ \mathrm{V}\lesssim v_i\lesssim0.535$ V: slope 11.0, the closed-loop gain.
- **Negative limit.** As $v_i$ falls, $Q_1$ takes less current and its collector rises until $Q_3$ cuts off. The output is then set only by the passive divider between 0 V and −6 V: $V_o=-6\ \mathrm{V}\cdot11/(6+11)=-3.88$ V, independent of $v_i$.
- **Positive limit.** As $v_i$ rises, $Q_3$ is driven harder until it saturates, and the output stops just below the +6-V supply, at about 5.95 V ($V_{CE(\text{sat})}$ of the model without collector resistance).

### Step 8 — Harmonic distortion

A 0.5-V peak-to-peak sinusoid ($\pm0.25$ V, dashed lines in the figure) lies well inside the linear region and gives a 2.75-V peak output. The Fourier analysis of the transient output gives

| Harmonic | Amplitude | Relative to fundamental |
|---|---|---|
| Fundamental (1 kHz) | 2.754 V | — |
| Second | 4.17 mV | HD2 = 0.15 % |
| Third | 1.27 mV | HD3 = 0.046 % |

The open-loop nonlinearity comes mainly from $Q_3$, whose collector current swings by about ±0.71 mA around 1.0 mA (the 2.75-V output across 6 kΩ ∥ 11 kΩ). Such a large swing on an exponential characteristic is strongly nonlinear open loop; the feedback reduces this distortion by roughly the factor $1+T\approx110$, to the values above. The even-order term dominates because $Q_3$ is a single-ended stage, whose nonlinearity is asymmetric.
