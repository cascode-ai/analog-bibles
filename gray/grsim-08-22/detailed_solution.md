# Detailed solution - grsim-08-22

With a current drive, the 30-kΩ resistor from the output back to the gate of $M_1$ senses the output voltage and returns a current to the input node, so the amplifier is shunt-shunt (a transresistance amplifier) with ideal transresistance $-30$ kΩ. First solve the bias, noting that the input node carries no dc current, so $V_{G1}=V_o$. Then form the basic amplifier with the feedback-resistor loading, find $a$, $T$ and the closed-loop transresistance and impedances, and check everything with ngspice, including the large-signal transfer characteristic.

### Step 1 — Bias point

- **Reference chain.** The 10-kΩ resistor feeds the diode-connected $Q_2$ and $M_2$:
$$
I_2=\frac{5-V_{BE2}-V_{GS2}}{10\ \mathrm{k\Omega}},\qquad V_{BE2}=V_T\ln\frac{I_2}{I_S},\qquad V_{GS2}=0.6+\sqrt{\frac{2I_2}{(200\ \mu\mathrm{A/V^2})(20)}} .
$$
Solving gives $I_2=0.325$ mA, $V_{BE2}=0.749$ V, $V_{GS2}=1.003$ V, and the base of $Q_1$ at $V_{B1}=1.752$ V.
- **Drain node of $M_1$.** $Q_1$'s emitter is at $V_{B1}-V_{BE1}=1.004$ V, so $R_{L1}$ carries $(5-1.004)/1\ \mathrm{k\Omega}=4.00$ mA. $Q_1$'s emitter current flows into the same node, so $M_1$ sinks both: $I_{D1}=I_{R_{L1}}+I_{E1}$.
- **Loop through $Q_1$ and $Q_3$.** $Q_1$'s collector current flows in $R_{L2}$, whose bottom is the base of $Q_3$: $I_{C1}=(5-V_o-V_{BE3})/10\ \mathrm{k\Omega}-I_{B3}$, with $I_{C3}\approx V_o/1\ \mathrm{k\Omega}$. $M_1$'s gate is at $V_o$, so $V_o=0.6+\sqrt{2I_{D1}/[(200\ \mu\mathrm{A/V^2})(300)]}$.

Solving these together:

| $I_{C1}$ | $I_{D1}$ | $V_o=V_{GS1}$ | $I_{C3}$ | $V_{C1}$ |
|---|---|---|---|---|
| 0.315 mA | 4.31 mA | 0.979 V | 0.970 mA | 1.757 V |

$Q_1$'s collector (1.757 V) is just above its base (1.752 V), so $Q_1$ is active, though close to saturation.

### Step 2 — Small-signal parameters

| Quantity | Value |
|---|---|
| $g_{m1}=\sqrt{2(60\ \mathrm{mA/V^2})I_{D1}}$ | 22.8 mS |
| $Q_1$: $g_m$, $r_\pi$ | 12.1 mS, 8.26 kΩ |
| $Q_3$: $g_m$, $r_\pi$ | 37.3 mS, 2.68 kΩ |
| Resistance at $Q_1$'s base: $10\ \mathrm{k\Omega}\parallel(1/g_{m,Q2}+1/g_{m,M2})$ | 655 Ω |

### Step 3 — Basic amplifier

For shunt-shunt feedback, $f=-1/R_F=-1/30\ \mathrm{k\Omega}$, and the feedback resistor loads both the input and the output with 30 kΩ to ground. The input node is a MOS gate, so the basic amplifier's input resistance is 30 kΩ, and $v_{g}=(30\ \mathrm{k\Omega})\,i_i$.

- **$M_1$ and the drain node.** $M_1$ draws $g_{m1}v_g$ from node $X$. Node $X$ is fed by $R_{L1}$ and by $Q_1$'s emitter, which presents $(r_{\pi1}+655\ \Omega)/(\beta+1)=88.3\ \Omega$. The fraction entering $Q_1$ is $1\ \mathrm{k\Omega}/(1\ \mathrm{k\Omega}+88.3\ \Omega)=0.919$.
- **$Q_1$'s collector.** $Q_1$ passes $\alpha$ times this current into $R_{L2}$ in parallel with $Q_3$'s input resistance $r_{\pi3}+(\beta+1)(1\ \mathrm{k\Omega}\parallel30\ \mathrm{k\Omega})=100.4\ \mathrm{k\Omega}$, i.e. into 9.09 kΩ. An increase of $v_g$ pulls this node down.
- **Follower $Q_3$.** Gain $(\beta+1)(968\ \Omega)/100.4\ \mathrm{k\Omega}=0.973$.

$$
\frac{v_o}{v_g}=-g_{m1}(0.919)(0.990)(9.09\ \mathrm{k\Omega})(0.973)=-183.2,\qquad a=\frac{v_o}{i_i}=(-183.2)(30\ \mathrm{k\Omega})=-5.50\ \mathrm{M\Omega}.
$$

### Step 4 — Loop gain and closed-loop results

$$
T=af=\frac{5.50\ \mathrm{M\Omega}}{30\ \mathrm{k\Omega}}=183.2,\qquad \frac{v_o}{i_i}=\frac{a}{1+T}=\frac{-5.50\ \mathrm{M\Omega}}{184.2}=-29.84\ \mathrm{k\Omega}.
$$

The input resistance is the basic amplifier's 30 kΩ divided by $1+T$:

$$
R_{\text{in}}=\frac{30\ \mathrm{k\Omega}}{184.2}=163\ \Omega .
$$

The basic amplifier's output resistance is that of the follower $Q_3$ driven from $R_{L2}$ (10 kΩ, since $Q_1$'s collector is a high-impedance current source), in parallel with $R_{L3}\parallel R_F$:

$$
z_{oa}=\frac{10\ \mathrm{k\Omega}+r_{\pi3}}{\beta+1}\parallel968\ \Omega=111\ \Omega,\qquad R_{\text{out}}=\frac{z_{oa}}{1+T}=\frac{111\ \Omega}{184.2}=0.60\ \Omega .
$$

### Step 5 — SPICE comparison

The deck uses the given device data with level-1 MOS models and $V_T=26$ mV. An ac current source drives the gate node. $R_{\text{out}}$ is measured with a 1-A ac current into the output. Because the input node is driven by an ideal current source and $M_1$'s gate draws no current, the feedback resistor's far end is an open circuit for the loop. A series voltage injection between the output and the 30-kΩ resistor, $T=-v_o/v_f$, is therefore exact.

```spice
* grsim-08-22 BiCMOS transresistance amplifier
.options temp=28.57 tnom=28.57
.model qn npn is=1e-16 bf=100
.model nm nmos level=1 kp=200u vto=0.6 lambda=0 gamma=0
VDD vdd 0 5
RL1 vdd x 1k
M1 x g 0 0 nm w=300u l=1u
Q1 c1 b1 x qn
RL2 vdd c1 10k
RB vdd b1 10k
Q2 b1 b1 e2 qn
M2 e2 e2 0 0 nm w=20u l=1u
Q3 vdd c1 o qn
RL3 o 0 1k
RF o g 30k
Ii 0 g dc 0 ac 1
.op
.ac lin 1 1k 1k
.dc Ii -200u 100u 0.5u
.end
```

| Quantity | Hand | ngspice |
|---|---|---|
| $V_o$ (dc), $I_{D1}$, $I_{C1}$ | 0.979 V, 4.31 mA, 0.315 mA | 0.979 V, 4.32 mA, 0.315 mA |
| $v_o/i_i$ | −29.84 kΩ | −29.84 kΩ |
| Loop gain $T$ | 183 | 184 |
| $R_{\text{in}}$ | 163 Ω | 163 Ω |
| $R_{\text{out}}$ | 0.60 Ω | 0.60 Ω |

### Step 6 — Large-signal transfer characteristic

![Output voltage versus input current from −200 µA to 100 µA: flat at 3.80 V below −95 µA, a straight line of slope −29.8 kΩ through 0.979 V at zero input, reaching about 0 V at 33 µA, then rising slowly as (1 kΩ)·ii](/q/grsim-08-22/solution-transfer.svg)

- **Linear region**, $-95\ \mu\mathrm{A}\lesssim i_i\lesssim33\ \mu$A: $v_o\approx0.979\ \mathrm{V}-(29.8\ \mathrm{k\Omega})\,i_i$. The loop holds the gate near $V_{GS1}$, and the input current flows through the 30-kΩ resistor.
- **Positive limit.** As $i_i$ rises, $v_o$ falls until $Q_3$ cuts off when $v_o$ reaches about 0 V, at $i_i\approx0.98\ \mathrm{V}/30\ \mathrm{k\Omega}=33\ \mu$A. Beyond this, the input current simply flows through the 30-kΩ resistor and $R_{L3}$ to ground, so $v_o\approx(1\ \mathrm{k\Omega})\,i_i$, only tens of millivolts.
- **Negative limit.** As $i_i$ becomes negative, $v_o$ rises, which requires less current in $Q_1$. Once $Q_1$ cuts off, $M_1$ takes only $R_{L1}$'s current, and $Q_3$ is driven solely through the 10-kΩ resistor. With about 1 kΩ of emitter load, $v_o\approx(5-V_{BE3})(\beta+1)R_{L3}/[R_{L2}+(\beta+1)R_{L3}]\approx3.8$ V (3.80 V in the simulation). This is reached at $i_i\approx-95\ \mu$A, and the output stays there for more negative inputs.
