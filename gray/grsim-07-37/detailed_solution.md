# Detailed solution - grsim-07-37

$M_1$ is a common-source driver whose load is the diode-like source follower $M_2$, so the gain is the ratio of the two transconductances, with $M_2$'s body effect included. Find the bias from $V_O=2.5$ V, compute the capacitances, and sum the zero-value time constants. Then check with a level-1 ngspice model, which also gives the second pole and the bandwidth versus input bias. For part (b), add the short-channel source resistors and repeat.

### Step 1 — (a) Bias and small-signal parameters

$M_2$ has gate and drain at 5 V and source at $V_O=2.5$ V, so $V_{GS2}=2.5$ V and $V_{SB2}=2.5$ V:

$$
V_{t2}=0.7+0.4\left(\sqrt{0.6+2.5}-\sqrt{0.6}\right)=1.094\ \mathrm V,\qquad
I_D=\tfrac12(60\ \mu\mathrm{A/V^2})(4)(2.5-1.094)^2=237\ \mu\mathrm A .
$$

$M_1$ carries the same current: $V_{ov1}=\sqrt{2(237\ \mu\mathrm A)/(60\ \mu\cdot100)}=0.281$ V, so the dc input is $V_{GS1}=0.981$ V. Then

$$
g_{m1}=\frac{2I_D}{V_{ov1}}=1.69\ \mathrm{mA/V},\quad g_{m2}=\frac{2I_D}{1.406\ \mathrm V}=0.337\ \mathrm{mA/V},\quad g_{mb2}=\frac{\gamma\,g_{m2}}{2\sqrt{0.6+2.5}}=0.038\ \mathrm{mA/V}.
$$

### Step 2 — (a) Low-frequency gain

Looking into the source of $M_2$, the resistance is $R_L=1/(g_{m2}+g_{mb2})=2.66\ \mathrm{k\Omega}$, so

$$
A_v=-\frac{g_{m1}}{g_{m2}+g_{mb2}}=-\frac{1.69}{0.375}=-4.49\quad(13.0\ \mathrm{dB}).
$$

Without the body effect the ratio would be $\sqrt{(W/L)_1/(W/L)_2}=5$; $g_{mb2}$ lowers it by 10 %.

### Step 3 — (a) Capacitances and zero-value time constants

With $C_{ox}=1.73\ \mathrm{fF/\mu m^2}$ and the reverse-bias correction $1/\sqrt{1+2.5/0.6}=0.44$:

| Capacitance | Expression | Value |
|---|---|---|
| $C_{gs1}$ | $\tfrac23(100)(1)(1.73)+0.3(100)$ | 145 fF |
| $C_{gd1}$ | $0.3(100)$ | 30 fF |
| $C_{db1}$ at 2.5 V | $80\ \mathrm{fF}\times0.44$ | 35.2 fF |
| $C_{gs2}$ (output to ac ground) | $\tfrac23(4)(1.73)+0.3(4)$ | 5.8 fF |
| $C_{sb2}$ at 2.5 V | $3.2\ \mathrm{fF}\times0.44$ | 1.4 fF |

$C_{gd2}$ is shorted (gate and drain both at $V_{DD}$). The time constants are:

- $C_{gs1}$: $R_S=1\ \mathrm{k\Omega}$ → 0.145 ns.
- $C_{gd1}$: $R_S+R_L+g_{m1}R_LR_S=8.15\ \mathrm{k\Omega}$ → 0.245 ns.
- Output node: $(100+35.2+5.8+1.4)\ \mathrm{fF}\times R_L=142.4\ \mathrm{fF}\times2.66\ \mathrm{k\Omega}=0.379$ ns.

$$
T_0=0.769\ \mathrm{ns},\qquad f_{-3\text{dB}}\approx\frac{1}{2\pi T_0}=207\ \mathrm{MHz}.
$$

### Step 4 — (a) SPICE: bandwidth, second pole and the bias sweep

The level-1 models carry the given $k'$, $V_t$, $\gamma$, $2\phi_f$, $t_{ox}$, overlap capacitances and junction capacitances (zero-bias values of 0.8 fF/µm times the width, $\psi_o=0.6$ V, grading 0.5). $M_1$'s source is grounded, so its $C_{sb}$ plays no role.

```spice
* grsim-07-37 (a)
.model n1 nmos level=1 kp=60u vto=0.7 gamma=0.4 phi=0.6 lambda=0 tox=20n
+ cgso=0.3n cgdo=0.3n cbd=80f  cbs=80f  pb=0.6 mj=0.5
.model n2 nmos level=1 kp=60u vto=0.7 gamma=0.4 phi=0.6 lambda=0 tox=20n
+ cgso=0.3n cgdo=0.3n cbd=3.2f cbs=3.2f pb=0.6 mj=0.5
VDD vdd 0 5
Vi  s 0 dc 0.981 ac 1
RS  s g 1k
M1  o   g   0 0 n1 w=100u l=1u
M2  vdd vdd o 0 n2 w=4u   l=1u
CL  o 0 100f
.ac dec 200 1Meg 100G
.pz s 0 o 0 vol pz
.end
```

| Quantity | Hand | ngspice |
|---|---|---|
| $I_D$, $V_O$ | 237 µA, 2.5 V | 236.9 µA, 2.5005 V |
| Gain | −4.49 | 13.04 dB (−4.49) |
| −3-dB bandwidth | 207 MHz (zero-value) | 237 MHz |
| Dominant pole | — | $1.54\times10^9$ rad/s (245 MHz) |
| Second pole | — | $8.32\times10^9$ rad/s (1.32 GHz) |
| Zero | — | $+5.6\times10^{10}$ rad/s (RHP, 8.9 GHz) |

The zero-value estimate is 13 % low, as expected with a second pole only 5.4 times above the first.

![Simulated −3-dB bandwidth versus dc input voltage, rising from turn-on through the saturation range and further in triode](/q/grsim-07-37/solution-bandwidth.svg)

Sweeping the dc input shows:

- **$V_i<0.7$ V.** $M_1$ is off and there is no gain.
- **Saturation, 0.7–1.39 V.** The bandwidth rises roughly as $\sqrt{I_D}$, because both $g_{m2}$ (which sets the output pole) and the current grow. It is about 90 MHz at 0.78 V, 237 MHz at 0.98 V, 306 MHz at 1.15 V and about 350 MHz near 1.39 V. Meanwhile the gain stays at −4.3 to −4.5, since both $g_m$'s scale together.
- **Triode, above 1.39 V.** $V_O$ falls below $V_{GS1}-V_t$ and $M_1$ enters the triode region. The gain magnitude drops (to 3.7 dB at 1.45 V and below 0 dB beyond 1.55 V), while the bandwidth keeps rising because the output resistance falls.

### Step 5 — (b) Short-channel source resistors

$$
R_{SX1}=\frac{1}{\mathcal E_c\mu_nC_{ox}W_1}=\frac{1}{(1.5\times10^6)(60\times10^{-6})(100\times10^{-6})}=111\ \Omega,\qquad R_{SX2}=2.78\ \mathrm{k\Omega}.
$$

With the same bias currents, $M_1$'s effective transconductance drops to $G_{m1}=g_{m1}/(1+g_{m1}R_{SX1})=1.42$ mA/V. The load becomes $R_{SX2}+1/(g_{m2}+g_{mb2})=5.44\ \mathrm{k\Omega}$:

$$
A_v=-G_{m1}(5.44\ \mathrm{k\Omega})=-7.7 .
$$

Time constants (capacitances at the lower ends of the resistors, so they connect to ground and to the output):

- $C_{gs1}$: $R_S$ → 0.145 ns.
- $C_{gd1}$: $R_S+R_L+G_{m1}R_LR_S=14.2\ \mathrm{k\Omega}$ → 0.425 ns.
- Output: $142.4\ \mathrm{fF}\times5.44\ \mathrm{k\Omega}$ → 0.775 ns.

$$
T_0=1.35\ \mathrm{ns},\qquad f_{-3\text{dB}}\approx118\ \mathrm{MHz}.
$$

A linear ngspice model with these elements gives −7.73 (17.8 dB) and 129 MHz. The large $R_{SX2}$ of the small load device more than doubles the load resistance, while $R_{SX1}$ reduces $M_1$'s transconductance by only 16 %. Velocity saturation therefore raises the gain and lowers the bandwidth.
