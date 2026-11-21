# Detailed solution - grsim-05-18

Treat the stage as two Darlington paths: $Q_4$–$Q_5$ sources load current on positive swings, driven by the 2-mA current source $Q_3$; $Q_2$–$Q_1$ sinks load current through $D_1$ on negative swings, driven by $V_i$. Each output limit is set by the first device to saturate. The quiescent power follows from the bias current alone, the large-signal powers from class B formulas, and ngspice gives the full dc transfer characteristic.

### Step 1 — Output voltage limits

**Positive limit.** $V_o$ rises while $Q_3$ pushes the base of $Q_4$ up. The highest that node can go is where $Q_3$ saturates, $12-V_{CE(\text{sat})}=11.8$ V, so

$$
V_o^+=11.8\ \mathrm V-V_{BE4}-V_{BE5}=11.8-0.7-0.7=10.4\ \mathrm V.
$$

$Q_3$ can supply the needed base current: the load current is $10.4\ \mathrm V/8\ \Omega=1.3$ A, and the Darlington needs only $1.3\ \mathrm A/101^2\approx0.13$ mA of the 2 mA.

**Negative limit.** $V_o$ falls while $Q_1$ pulls the common collector node (call it $N$) down. $Q_1$ cannot saturate, because its collector-base voltage is held at $V_{CE2}\ge V_{CE(\text{sat})}$ by $Q_2$; the lowest $N$ can reach is with $Q_2$ saturated:

$$
V_N=-12+V_{BE1}+V_{CE2(\text{sat})}=-12+0.7+0.2=-11.1\ \mathrm V,\qquad
V_o^-=V_N+V_{D1}=-11.1+0.7=-10.4\ \mathrm V.
$$

The swing is symmetric, ±10.4 V.

### Step 2 — Power dissipation at $V_o=0$

With no load current, the Darlington $Q_4$–$Q_5$ and $D_1$ are essentially off, and all 2 mA of $Q_3$ flows through $D_3$, $D_2$ and into $Q_1$/$Q_2$ to −12 V. The supplies therefore deliver only the bias current across 24 V:

$$
P=(12\ \mathrm V+12\ \mathrm V)(2\ \mathrm{mA})=48\ \mathrm{mW}.
$$

With $N$ near 0 V, about 24 mW is dissipated in $Q_1$ ($V_{CE1}\approx12$ V), about 21 mW in $Q_3$ ($V_{CE3}\approx10.6$ V) and about 3 mW in $D_2$, $D_3$.

### Step 3 — Maximum output power and efficiency

For a sinusoid of peak $\hat V_o=10.4$ V the load power is

$$
P_L=\frac{\hat V_o^2}{2R_L}=\frac{(10.4\ \mathrm V)^2}{16\ \Omega}=6.76\ \mathrm W.
$$

Each output transistor carries a half-sine of peak $\hat I=\hat V_o/R_L=1.3$ A, whose average is $\hat I/\pi$, drawn from a 12-V supply; the two supplies together deliver

$$
P_{\text{supply}}=\frac{2V_{CC}\hat V_o}{\pi R_L}=\frac{2(12\ \mathrm V)(10.4\ \mathrm V)}{\pi(8\ \Omega)}=9.93\ \mathrm W .
$$

Adding the 48-mW bias power,

$$
\eta=\frac{6.76\ \mathrm W}{9.93\ \mathrm W+0.048\ \mathrm W}=67.7\ \%\approx68\ \%.
$$

### Step 4 — Peak instantaneous dissipation in the output transistors

**$Q_5$** conducts on positive swings with $V_{CE5}=12-V_o$ and $I_{C5}=V_o/R_L$:

$$
P_{Q5}=\frac{(12-V_o)V_o}{R_L},\qquad \frac{dP_{Q5}}{dV_o}=0\Rightarrow V_o=6\ \mathrm V,\qquad P_{Q5,\max}=\frac{(12\ \mathrm V)^2}{4(8\ \Omega)}=4.5\ \mathrm W.
$$

**$Q_1$** conducts on negative swings with collector at $V_o-V_{D1}$, so $V_{CE1}=(V_o-0.7)+12=11.3\ \mathrm V-|V_o|$ and $I_{C1}=|V_o|/R_L$. The maximum is at $|V_o|=5.65$ V:

$$
P_{Q1,\max}=\frac{(11.3\ \mathrm V)^2}{4(8\ \Omega)}=3.99\ \mathrm W\approx4.0\ \mathrm W.
$$

### Step 5 — SPICE setup

The large devices ($Q_1$, $Q_5$, $D_1$) use $I_S=10^{-15}$ A, $r_b=1\ \Omega$, $r_c=0.2\ \Omega$, $\beta_F=100$, $V_A=30$ V. The 1/100-size devices ($Q_2$, $Q_4$, $D_2$, $D_3$) have $I_S$ divided by 100 and series resistances multiplied by 100. The BIAS voltage of $Q_3$ is set to 11.275 V, which gives $|I_{C3}|=1.99$ mA at $V_o=0$. $V_i$ is swept finely because the positive half of the characteristic spans only tens of millivolts.

```spice
* grsim-05-18 all-npn Darlington output stage
.model qbig npn is=1e-15 bf=100 rb=1   rc=0.2 vaf=30
.model qsml npn is=1e-17 bf=100 rb=100 rc=20  vaf=30
.model q3   pnp is=1e-15 bf=100 rc=50 vaf=30
.model dbig d is=1e-15 rs=0.2
.model dsml d is=1e-17 rs=20
VCC vcc 0 12
VEE vee 0 -12
VB  bias 0 11.275
Q3 a bias vcc q3
D3 a m dsml
D2 m n dsml
Q4 vcc a  e4  qsml
Q5 vcc e4 out qbig
D1 out n dbig
Q2 n in b1  qsml
Q1 n b1 vee qbig
RL out 0 8
Vi in 0 -10.5
.dc Vi -11 -9.5 0.1m
.end
```

### Step 6 — Simulated transfer characteristic

![Simulated dc transfer characteristic: inverting, very steep for positive output and logarithmic for negative output](/q/grsim-05-18/solution-transfer.svg)

The characteristic is inverting (raising $V_i$ turns $Q_2$–$Q_1$ on harder and pulls $V_o$ down) and centered near $V_i=-12+V_{BE1}+V_{BE2}\approx-10.56$ V. Its two halves are very different:

| $V_o$ (V) | +10 | +5 | 0 | −0.1 | −1 | −5 | −9 |
|---|---|---|---|---|---|---|---|
| $V_i$ (V) | −10.599 | −10.578 | −10.559 | −10.455 | −10.339 | −10.239 | −10.187 |

- **$V_o>0$.** The load current comes from $Q_5$, whose base current is supplied by $Q_3$; $Q_1$'s current changes only from about 2 mA to about 1.3 mA (the 0.13-mA Darlington base current, plus a drop in $|I_{C3}|$ as $Q_3$'s $|V_{CE}|$ shrinks). $V_i$ moves by just 40 mV for the whole positive swing (incremental gain about −250).
- **$V_o<0$.** $Q_1$ must carry the load current itself, up to about 1.2 A, through $D_1$, so $V_i$ follows the logarithm of that current. The gain is much lower, and the curve has an exponential shape.
- **Near $V_o=0$.** Neither path carries much current, so there is a short low-gain (crossover) segment: the first −0.1 V needs about 0.1 V of $V_i$.

The simulated limits are +10.15 V and about −9.7 V, a little inside the hand values of ±10.4 V because the junction drops at 1.2–1.3 A are about 0.9 V rather than 0.7 V, and $r_c$ and the diode resistance add further drops. Past the negative knee $V_o$ creeps further negative only because the ideal source keeps forcing base current into the saturated $Q_2$. The simulated quiescent supply power at $V_o=0$ is 48.2 mW, matching Step 2.
