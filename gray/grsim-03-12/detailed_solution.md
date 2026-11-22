# Detailed solution - grsim-03-12

$M_1$ is a source follower that drives the base of $Q_2$ and $R_B$; its drain and $Q_2$'s collector both pull current from the output node through $R_L$. First solve the bias with $V_O=2$ V (which fixes the total current in $R_L$), including the body effect of $M_1$. Then derive the small-signal gain, repeat it with the added output resistances and base resistance, and check everything, including the dc transfer curve, with ngspice.

### Step 1 — Bias currents

$V_O=2$ V puts $(3-2)\ \mathrm V/1\ \mathrm{k\Omega}=1$ mA through $R_L$, shared by $M_1$ and $Q_2$:

$$
I_{C2}+I_{D1}=1\ \mathrm{mA},\qquad I_{D1}=\frac{V_{BE2}}{R_B}+\frac{I_{C2}}{\beta_F},\qquad V_{BE2}=V_T\ln\frac{I_{C2}}{I_S}.
$$

Solving iteratively (start from $V_{BE2}\approx0.74$ V):

$$
V_{BE2}=0.743\ \mathrm V,\qquad I_{C2}=0.255\ \mathrm{mA},\qquad I_{D1}=0.743\ \mathrm{mA}+2.55\ \mu\mathrm A=0.745\ \mathrm{mA}.
$$

### Step 2 — Required $V_B$ and region check

The source of $M_1$ is at $V_{SB}=V_{BE2}=0.743$ V, so its threshold rises:

$$
V_t=0.6+0.25\left(\sqrt{0.6+0.743}-\sqrt{0.6}\right)=0.696\ \mathrm V .
$$

The overdrive follows from the square law, $V_{ov}=\sqrt{2I_{D1}/[\mu_nC_{ox}(W/L)]}=\sqrt{2(0.745\ \mathrm{mA})/(2\ \mathrm{mA/V^2})}=0.863$ V, so

$$
V_B=V_{BE2}+V_t+V_{ov}=0.743+0.696+0.863=2.30\ \mathrm V .
$$

$V_{DS1}=2-0.743=1.26$ V exceeds $V_{ov}=0.863$ V, so $M_1$ is saturated; $Q_2$ has $V_{CE}=2$ V and is active.

### Step 3 — Small-signal parameters

$$
\begin{aligned}
g_{m1}&=\sqrt{2\mu_nC_{ox}(W/L)I_{D1}}=1.73\ \mathrm{mA/V},&
\chi&=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=0.108,&
g_{mb1}&=\chi g_{m1}=0.186\ \mathrm{mA/V},\\
g_{m2}&=\frac{I_{C2}}{V_T}=9.80\ \mathrm{mA/V},&
r_{\pi2}&=\frac{\beta_0}{g_{m2}}=10.2\ \mathrm{k\Omega},&
R_s&=R_B\parallel r_{\pi2}=911\ \Omega .
\end{aligned}
$$

### Step 4 — Voltage gain with the original data

With $\lambda=0$, $M_1$ is a source follower loaded by $R_s$, and its body (grounded) adds $g_{mb1}$ to the source conductance:

$$
\frac{v_{b2}}{v_i}=\frac{g_{m1}R_s}{1+(g_{m1}+g_{mb1})R_s}=\frac{(1.73)(0.911)}{1+(1.91)(0.911)}=0.574 .
$$

Both currents that leave the output node change: $M_1$'s drain current equals its source current $v_{b2}/R_s$, and $Q_2$'s collector current is $g_{m2}v_{b2}$. Both flow through $R_L$:

$$
\frac{v_o}{v_i}=-R_L\left(\frac1{R_s}+g_{m2}\right)\frac{v_{b2}}{v_i}=-(1\ \mathrm{k\Omega})(1.098+9.80)\ \mathrm{mA/V}\times0.574=-6.25 .
$$

### Step 5 — Gain with $\lambda=0.05\ \mathrm{V^{-1}}$, $r_b=100\ \Omega$, $V_A=20$ V

With $V_O$ held at 2 V the currents are unchanged (the dc drop on $r_b$ is only about 0.3 mV); only $V_B$ falls, to $0.743+0.696+\sqrt{2(0.745\ \mathrm{mA})/[(2\ \mathrm{mA/V^2})(1+\lambda V_{DS1})]}=2.28$ V, because $(1+\lambda V_{DS1})=1.063$ raises $M_1$'s current at a given overdrive. The same $g_m$ values therefore apply, now with

$$
r_{o1}=\frac1{\lambda I_{D1}}=26.8\ \mathrm{k\Omega},\qquad r_{o2}=\frac{V_A}{I_{C2}}=78.5\ \mathrm{k\Omega},\qquad r_b=100\ \Omega .
$$

The circuit now has three nodes (output $v_o$, source of $M_1$ $v_s$, internal base $v_b$). KCL gives

$$
\begin{aligned}
&\frac{v_o}{R_L\parallel r_{o2}}+g_{m2}v_b+i_{d1}=0,\qquad
i_{d1}=g_{m1}(v_i-v_s)-g_{mb1}v_s+\frac{v_o-v_s}{r_{o1}},\\
&i_{d1}=\frac{v_s}{R_B}+\frac{v_s-v_b}{r_b},\qquad \frac{v_s-v_b}{r_b}=\frac{v_b}{r_{\pi2}} .
\end{aligned}
$$

Solving numerically:

| Effect included | $v_o/v_i$ |
|---|---|
| none (Step 4) | −6.25 |
| $r_{o1}$ only | −5.45 |
| $r_{o2}$ only | −6.17 |
| $r_b$ only | −6.20 |
| all three | −5.35 |

The gain magnitude drops by about 14%. The main cause is $r_{o1}$: the output swing, about 6 times the input, couples through $r_{o1}$ into the source of $M_1$ and opposes the follower action. $r_{o2}$ in parallel with $R_L$ and the $r_b$–$r_{\pi2}$ divider each remove another 1%.

### Step 6 — SPICE check of bias and gain

$V_B$ is found from a dc sweep (the input at which $V_O=2$ V); the gain comes from `.tf` at that bias:

```spice
* grsim-03-12 BiCMOS Darlington
VCC vcc 0 3
VI  vg  0 2.29614
RL  vcc vo 1k
M1  vo vg b2 0 nch W=10u L=1u
RB  b2 0 1k
Q2  vo b2 0 npn
.model nch nmos level=1 kp=200u vto=0.6 gamma=0.25 phi=0.6 lambda=0
.model npn npn is=1e-16 bf=100
.control
op
print v(vo) v(b2) @q2[ic] @m1[id]
tf v(vo) VI
print all
dc VI 0 3 1m
wrdata tr.txt v(vo)
.endc
.end
```

For the second case the models become `lambda=0.05` and `is=1e-16 bf=100 rb=100 vaf=20`, and $V_B$ is readjusted.

| Quantity | Hand, original | ngspice, original | Hand, new data | ngspice, new data |
|---|---|---|---|---|
| $V_B$ for $V_O=2$ V | 2.30 V | 2.296 V | 2.28 V | 2.268 V |
| $V_{BE2}$ | 0.743 V | 0.739 V | 0.743 V | 0.738 V |
| $I_{C2}$ | 0.255 mA | 0.258 mA | 0.255 mA | 0.260 mA |
| $I_{D1}$ | 0.745 mA | 0.742 mA | 0.745 mA | 0.740 mA |
| $v_o/v_i$ | −6.25 | −6.35 | −5.35 | −5.56 |

The small differences come from SPICE's $V_T=25.9$ mV at 27 °C (higher $g_{m2}$) and, in the second case, from its level-1 definitions $r_{o1}=(1+\lambda V_{DS})/(\lambda I_D)=28.7$ kΩ, $r_{o2}=(V_A+V_{CE})/I_C=84.8$ kΩ and $g_{m1}$ including $(1+\lambda V_{DS})$. Inserting these SPICE values into the nodal equations of Step 5 reproduces −6.35 and −5.56 exactly.

### Step 7 — DC transfer characteristic

![ngspice dc transfer characteristic vo versus gate voltage VI from 0 to 3 V, for the original and the new transistor data](/q/grsim-03-12/solution-transfer.svg)

With the original data the curve has four regions:
- $V_I<0.6$ V: $M_1$ off, no current in $R_L$, $v_o=3$ V.
- $0.6\ \mathrm V<V_I\lesssim2.1$ V: $M_1$ conducts into $R_B$ only ($V_{BE2}$ is still too small for $Q_2$), so $v_o$ falls slowly, with slope −0.35 to −0.65, to about 2.37 V at 2.1 V.
- $V_I\approx2.2$–2.34 V: $Q_2$ turns on and its exponential $g_{m2}$ dominates; $v_o$ drops steeply through 2 V at $V_I=2.296$ V (slope −6.3, the gain of Step 4). The slope peaks at about −13 near 2.33 V.
- $V_I>2.34$ V: $M_1$ enters triode at $V_I=2.335$ V, $v_o=1.63$ V. Its source then follows the output, which caps $V_{BE2}$ near 0.78 V, and the curve flattens to $v_o=1.06$ V at $V_I=3$ V. $Q_2$ never saturates, because $M_1$ keeps the base below the collector ($v_o-v_{b2}=0.29$ V at $V_I=3$ V).

The new data (dashed) shift the steep region slightly to the left and make it a little less steep.
