# Detailed solution - grsim-03-17

The signal path is a cascade: common-source $M_1$ → common-base $Q_1$ (with $R_{L1}$ splitting $M_1$'s drain current) → load $R_{L2}$ at $Q_1$'s collector, loaded by → emitter follower $Q_3$. $Q_2$ and $M_2$ form a diode stack that sets $Q_1$'s base voltage. First find a self-consistent operating point (with $V_{I}=V_O$), then multiply the stage gains, and finally check with ngspice, adding source resistors to model velocity saturation.

### Step 1 — Bias of the diode stack ($Q_2$, $M_2$)

The 10-kΩ resistor from 5 V feeds the diode-connected $Q_2$ and $M_2$ (the base current of $Q_1$, about 3 μA, is negligible):

$$
I=\frac{5\ \mathrm V-V_{BE2}-V_{GS,M2}}{10\ \mathrm{k\Omega}},\qquad V_{BE2}=V_T\ln\frac{I}{I_S},\qquad V_{GS,M2}=0.6+\sqrt{\frac{2I}{(200\ \mu\mathrm{A/V^2})(20)}} .
$$

Iterating gives $I=0.325$ mA, $V_{BE2}=0.749$ V and $V_{GS,M2}=1.003$ V, so $Q_1$'s base sits at

$$
V_X=0.749+1.003=1.752\ \mathrm V .
$$

### Step 2 — Self-consistent operating point

With no dc current in the 30-kΩ resistor, $V_{G1}=V_O$ and:
- $M_1$: $I_{D1}=\tfrac12(200\ \mu\mathrm{A/V^2})(300)(V_O-0.6)^2$;
- node $D_1$ (drain of $M_1$, emitter of $Q_1$): $I_{D1}=(5-V_{D1})/R_{L1}+I_{E1}$, with $V_{D1}=V_X-V_{BE1}$;
- $Q_3$: $I_{E3}=V_O/1\ \mathrm{k\Omega}$ and $V_O=V_{C1}-V_{BE3}$, with $V_{C1}=5-10\ \mathrm{k\Omega}\,(I_{C1}+I_{B3})$.

Solving these together:

| $V_O$ | $I_{D1}$ | $V_{D1}$ | $I_{C1}$ | $V_{C1}$ | $I_{C3}$ |
|---|---|---|---|---|---|
| 0.979 V | 4.31 mA | 1.004 V | 0.315 mA | 1.757 V | 0.97 mA |

About 4.0 mA of $M_1$'s current comes through $R_{L1}$ and 0.32 mA through $Q_1$. $V_{C1}-V_X=5$ mV, so $Q_1$ sits right at the edge of saturation ($V_{CB}\approx0$), still forward-active.

### Step 3 — Small-signal parameters

$$
\begin{aligned}
g_{m1}&=\sqrt{2(200\ \mu\mathrm{A/V^2})(300)(4.31\ \mathrm{mA})}=22.8\ \mathrm{mA/V},&
r_{e1}&=\frac{V_T}{I_{E1}}=82\ \Omega,\\
g_{m3}&=\frac{I_{C3}}{V_T}=37.3\ \mathrm{mA/V},&
r_{\pi3}&=\frac{\beta_0}{g_{m3}}=2.68\ \mathrm{k\Omega}.
\end{aligned}
$$

### Step 4 — Gain of the cascade

- $M_1$ converts $v_i$ into a drain current $g_{m1}v_i$. At node $D_1$ this splits between $R_{L1}=1$ kΩ (to ac ground) and the emitter of $Q_1$ ($r_{e1}$); the fraction entering $Q_1$ is $R_{L1}/(R_{L1}+r_{e1})=0.924$.
- $Q_1$ is common base: $\alpha=0.990$ of its emitter current reaches the collector.
- The collector load is $R_{L2}$ in parallel with $Q_3$'s input resistance. With the ideal input source, the 30-kΩ resistor goes from the output to ac ground, so $Q_3$'s emitter load is $R_E=1\ \mathrm{k\Omega}\parallel30\ \mathrm{k\Omega}=968\ \Omega$:

$$
R_{i3}=r_{\pi3}+(\beta_0+1)R_E=2.68\ \mathrm{k\Omega}+101(968\ \Omega)=100.4\ \mathrm{k\Omega},\qquad R_{C1}=10\ \mathrm{k\Omega}\parallel R_{i3}=9.09\ \mathrm{k\Omega}.
$$

- The follower gain is $(\beta_0+1)R_E/R_{i3}=0.973$.

Multiplying:

$$
\frac{v_o}{v_i}=-g_{m1}\cdot0.924\cdot\alpha\cdot R_{C1}\cdot0.973=-(22.8\ \mathrm{mA/V})(0.924)(0.990)(9.09\ \mathrm{k\Omega})(0.973)=-184 .
$$

### Step 5 — SPICE check

The dc sweep of $V_I$ finds the point where $V_O=V_I$; at that input, `.tf` gives the gain. Velocity saturation is modeled by source resistors $R_{SX}=1/(\mathcal E_c\mu_nC_{ox}W)$:

$$
R_{SX1}=\frac1{(1.5\times10^{6}\ \mathrm{V/m})(200\ \mu\mathrm{A/V^2})(300\ \mu\mathrm m)}=11.1\ \Omega,\qquad R_{SX2}=\frac{300}{20}R_{SX1}=167\ \Omega .
$$

```spice
* grsim-03-17 BiCMOS amplifier (velocity saturation: RS1 = 11.11, RS2 = 166.7)
VCC vcc 0 5
VI  vi  0 0.979317
RL1 vcc d1 1k
M1  d1 vi s1 s1 nch W=300u L=1u
RS1 s1 0 1e-6
Q1  c1 x d1 npn
RL2 vcc c1 10k
RB  vcc x 10k
Q2  x x e2 npn
M2  e2 e2 s2 s2 nch W=20u L=1u
RS2 s2 0 1e-6
Q3  vcc c1 o npn
RL3 o 0 1k
RF  vi o 30k
.model nch nmos level=1 kp=200u vto=0.6 lambda=0
.model npn npn is=1e-16 bf=100
.control
op
print v(o) v(x) v(c1) @m1[id] @q1[ic] @q3[ic]
tf v(o) VI
print all
.endc
.end
```

| Quantity | Hand | ngspice | ngspice with $R_{SX}$ |
|---|---|---|---|
| $V_O=V_I$ | 0.979 V | 0.979 V | 1.024 V |
| $V_X$ | 1.752 V | 1.746 V | 1.796 V |
| $V_{C1}$ | 1.757 V | 1.753 V | 1.799 V |
| $I_{D1}$ | 4.31 mA | 4.32 mA | 4.26 mA |
| $I_{C1}$ | 0.315 mA | 0.315 mA | 0.310 mA |
| $I_{C3}$ | 0.97 mA | 0.97 mA | 1.01 mA |
| $v_o/v_i$ | −184 | −183.4 | −145.4 |

### Step 6 — Effect of velocity saturation

$R_{SX1}=11.1\ \Omega$ degenerates $M_1$: its effective transconductance becomes

$$
G_{m1}=\frac{g_{m1}}{1+g_{m1}R_{SX1}}=\frac{22.8\ \mathrm{mA/V}}{1+0.253}=18.2\ \mathrm{mA/V},
$$

which with the same downstream factors gives $-147$, close to the simulated $-145$. $R_{SX2}=167\ \Omega$ only raises $V_{GS,M2}$ by about $(0.32\ \mathrm{mA})(167\ \Omega)\approx50$ mV, shifting the bias point up by about 45 mV without changing the gain appreciably. Velocity saturation therefore reduces the gain by about 20%, almost entirely through the degeneration of the wide, high-current device $M_1$.
