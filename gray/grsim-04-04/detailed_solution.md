# Detailed solution - grsim-04-04

Inject a test current $i_t$ into the collector of $Q_2$ and trace where it goes. $Q_2$'s base current returns either through $R_1$ or down the diode stack $Q_4$–$Q_3$; the part that goes down the stack is mirrored by $Q_1$ into $Q_2$'s emitter. This partial feedback sets how much of $Q_2$'s $\beta_0$ boosts $r_{o2}$. Then evaluate the bias with $I_{IN}=0$ and $R_1=10$ kΩ, and check $R_o$, the $\beta_F$ sensitivity and the large-signal curve with ngspice.

### Step 1 — Small-signal model

With $I_{IN}=0$ only $R_1$ remains, from $V_{CC}$ (ac ground) to the base node $n$ of $Q_2$ and $Q_4$. The diode stack from $n$ to ground has small-signal resistance

$$
r_d=\frac1{g_{m4}}+\frac1{g_{m3}}\approx\frac2{g_m}.
$$

$Q_3$–$Q_1$ is a unity mirror: $Q_1$'s collector current equals the current $i_d$ flowing down the stack. Neglect $r_{o1}$ (the node at $Q_2$'s emitter has low resistance) and keep $r_{o2}$.

### Step 2 — Current division at the base node

Let $i_{b2}$ be the small-signal current into $Q_2$'s base. KCL at node $n$ (no other connection):

$$
\frac{v_n}{R_1}+\frac{v_n}{r_d}+i_{b2}=0
\;\Rightarrow\;
i_d=\frac{v_n}{r_d}=-f\,i_{b2},\qquad f=\frac{R_1}{R_1+r_d}.
$$

$Q_1$ sinks $i_d$ from $Q_2$'s emitter, and $Q_2$'s emitter current is $i_t+i_{b2}$:

$$
i_t+i_{b2}=-f\,i_{b2}\;\Rightarrow\;i_{b2}=-\frac{i_t}{1+f},\qquad i_{e2}=\frac{f}{1+f}\,i_t .
$$

### Step 3 — Output resistance

$Q_2$'s base–emitter voltage is $v_{be2}=r_\pi i_{b2}=-r_\pi i_t/(1+f)$. The collector current is $g_{m2}v_{be2}$ plus the current through $r_{o2}$, and the emitter voltage is negligible, so

$$
i_t=g_{m2}v_{be2}+\frac{v_x}{r_{o2}}
\;\Rightarrow\;
R_o=\frac{v_x}{i_t}=r_{o2}\left(1+\frac{\beta_0}{1+f}\right)\approx\frac{\beta_0r_{o2}}{1+f}.
$$

For large $R_1$, $f\to1$: half of the base-current change is mirrored back into the emitter, so only half of $\beta_0$ boosts $r_{o2}$, and $R_o\to\beta_0r_o/2$. For $R_1\to0$, $f\to0$ and $R_o\to\beta_0r_o$.

### Step 4 — Numerical values

The input current is set by $R_1$ across two $V_{BE}$:

$$
V_{BE}=26\ \mathrm{mV}\,\ln\frac{0.37\ \mathrm{mA}}{5\times10^{-15}\ \mathrm A}=0.651\ \mathrm V,\qquad
I_{IN}=\frac{5\ \mathrm V-2(0.651\ \mathrm V)}{10\ \mathrm{k\Omega}}=0.370\ \mathrm{mA}.
$$

For the cascode mirror with finite $\beta_F$,

$$
I_{OUT}=I_{IN}\left[1-\frac{4\beta_F+2}{\beta_F^2+4\beta_F+2}\right]=0.370\ \mathrm{mA}\,(1-0.0197)=0.363\ \mathrm{mA}.
$$

Then $r_{o2}=V_A/I_{OUT}=358$ kΩ, $r_d=2(26\ \mathrm{mV}/0.37\ \mathrm{mA})=140\ \Omega$, $f=10/10.14=0.986$, and

$$
R_o=358\ \mathrm{k\Omega}\left(1+\frac{200}{1.986}\right)=36.4\ \mathrm{M\Omega}\approx\frac{\beta_0r_o}2 .
$$

### Step 5 — Minimum output voltage

$Q_2$'s emitter (the collector of $Q_1$) sits one $V_{BE}$ above ground, because its base is at $2V_{BE}$. $Q_2$ stays active while its $V_{CE}$ exceeds about $V_{CE(\mathrm{sat})}\approx0.2$ V:

$$
V_{OUT(\min)}\approx V_{BE}+V_{CE(\mathrm{sat})}\approx0.65+0.2=0.85\ \mathrm V .
$$

Below this $Q_2$ saturates, its $\beta$ action stops and $R_o$ collapses.

### Step 6 — $\beta_F$ sensitivity

With $\beta_F=100$ the error term becomes $402/10402=3.87\%$, so

$$
I_{OUT}=0.370\ \mathrm{mA}\,(1-0.0387)=0.356\ \mathrm{mA},
$$

1.9% lower than with $\beta_F=200$. $R_o$ also halves (to about 19 MΩ), since $R_o\propto\beta_0$.

### Step 7 — SPICE check

```spice
* grsim-04-04 bipolar cascode current mirror
VCC  vcc 0 5
R1   vcc n 10k
Q4   n n m npn
Q3   m m 0 npn
Q2   out n e npn
Q1   e m 0 npn
VOUT out 0 3
.model npn npn is=5e-15 bf=200 vaf=130
.control
dc VOUT 0 5 1m
let iout = -i(VOUT)
wrdata iv.txt iout
op
tf v(n) VOUT
print all
.endc
.end
```

The `.tf` input resistance seen by VOUT at 3 V is $R_o$. The run was repeated with `bf=100`.

| Quantity | Hand | ngspice |
|---|---|---|
| $I_{OUT}$ at 3 V, $\beta_F=200$ | 0.363 mA | 0.3634 mA |
| $I_{OUT}$ at 3 V, $\beta_F=100$ | 0.356 mA | 0.3564 mA (−1.9%) |
| $R_o$, $\beta_F=200$ | 36.4 MΩ | 36.8 MΩ |
| $R_o$, $\beta_F=100$ | 18.8 MΩ | 19.2 MΩ |
| Knee ($I_{OUT}$ within 0.1% of final) | ≈ 0.85 V | 0.85 V |

![ngspice IOUT versus VOUT of the bipolar cascode mirror for BF = 200 and BF = 100, showing the knee near 0.85 V and the flat region](/q/grsim-04-04/solution-iv.svg)

Above the knee the curve is flat at 0.363 mA, with a slope of $1/(36.8\ \mathrm{M\Omega})\approx0.03\ \mu\mathrm{A/V}$. Below about 0.85 V, $Q_2$ saturates and the current falls steeply, reaching zero at 0.63 V. At still lower $V_{OUT}$, $Q_2$'s base–collector junction is strongly forward biased: the base node is pulled down, and the $R_1$ current (about 0.43 mA) flows out of the output terminal, so $I_{OUT}$ becomes negative ($-0.43$ mA at $V_{OUT}=0$). With $\beta_F=100$ the flat current is 1.9% lower and the slope doubles, as predicted.
