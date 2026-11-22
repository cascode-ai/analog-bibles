# Detailed solution - grsim-04-36

The PMOS mirror forces equal branch currents, and the loop through the two gates and emitters places the $V_{EB}$ difference of the 1× and 10× transistors across the difference of the two NMOS gate-source voltages. Solving that loop with the square law gives $I_{BIAS}$ and its temperature law; a level-1 ngspice model built from the process data then checks the value and gives the supply sensitivity.

### Step 1 — Loop equation

$M_3$ and $M_4$ have equal $W/L$ and equal $V_{SG}$, so (ignoring channel-length modulation) both branches carry $I=I_{BIAS}$. The gates of $M_1$ and $M_2$ are joined, so KVL from that gate node to ground through each branch gives

$$
V_{EB}(Q_2,1\times)+V_{GS1}=V_{EB}(Q_1,10\times)+V_{GS2}.
$$

With $V_{EB}=V_T\ln(I/I_S)$ and $I_{S1}=10I_{S2}$,

$$
V_{GS2}-V_{GS1}=V_T\ln\frac{I/I_{S2}}{I/(10I_{S2})}=V_T\ln10=(26\ \mathrm{mV})(2.3026)=59.87\ \mathrm{mV}.
$$

$M_2$ (50/1) carries the same current as $M_1$ (100/1) with a larger overdrive, so the sign is consistent and a nonzero solution exists.

### Step 2 — Solve for $I_{BIAS}$

In saturation $V_{GS}=V_{tn}+\sqrt{2I/(k'_n W/L)}$, and $V_{tn}$ cancels in the difference (body effect neglected):

$$
\sqrt{\frac{2I}{k'_n}}\left(\frac1{\sqrt{50}}-\frac1{\sqrt{100}}\right)=V_T\ln10
\;\Rightarrow\;
\sqrt{\frac{2I}{k'_n}}=\frac{59.87\ \mathrm{mV}}{0.041421}=1.4453\ \mathrm V.
$$

$$
I_{BIAS}=\frac{k'_n}{2}(1.4453\ \mathrm V)^2=\frac{194\ \mu\mathrm{A/V^2}}{2}(2.0890\ \mathrm{V^2})=202.6\ \mu\mathrm A\approx0.20\ \mathrm{mA}.
$$

The overdrives are $V_{ov1}=1.4453/\sqrt{100}=0.145$ V, $V_{ov2}=1.4453/\sqrt{50}=0.204$ V and $|V_{ov3,4}|=\sqrt{2(202.6\ \mu\mathrm A)/(64.7\ \mu\mathrm{A/V^2}\cdot50)}=0.354$ V. With $V_{EB}\approx0.7$ V, $M_2$'s drain sits at $3-0.8-0.354\approx1.85$ V and $M_1$ is diode connected, so all four MOSFETs are saturated with the 3-V supply.

### Step 3 — Temperature dependence

Squaring the loop equation,

$$
I_{BIAS}=\frac{\mu_nC_{ox}\,(V_T\ln10)^2}{2\left(1/\sqrt{50}-1/\sqrt{100}\right)^2}\propto\mu_nT^2\propto T^{-1.5}T^{2}=T^{0.5}.
$$

So $I_{BIAS}$ rises slowly with temperature:

$$
TC_F=\frac1I\frac{dI}{dT}=\frac{0.5}{T}=\frac{0.5}{300\ \mathrm K}\approx+1700\ \mathrm{ppm/°C}.
$$

The PTAT voltage alone would give $T^2$; the falling mobility removes most of it.

### Step 4 — SPICE model and setup

A level-1 model is built from the process data: `uo` and `tox` reproduce $k'_n=194\ \mu\mathrm{A/V^2}$ and $k'_p=64.7\ \mu\mathrm{A/V^2}$, `nsub` gives the body-effect coefficients ($\gamma_n\approx0.094\ \mathrm{V^{1/2}}$), and `lambda` is taken at $L=1\ \mu$m. ngspice's level-1 mobility already scales as $T^{-1.5}$. The pnp transistors are vertical substrate devices (base and collector at ground) with area ratio 10. A `.nodeset` steers the solution away from the zero-current state, which a real design would avoid with a start-up circuit. A 0-V source in the $M_2$ drain measures $I_{BIAS}$; `.temp 27` makes $V_T=25.9$ mV, close to the 26 mV used above.

```spice
* grsim-04-36 bias circuit
.model nch nmos level=1 vto=0.6  uo=450 tox=8e-9 nsub=5e15 lambda=0.02
.model pch pmos level=1 vto=-0.8 uo=150 tox=8e-9 nsub=4e16 lambda=0.04
.model sp pnp is=1e-16 bf=100
VDD vdd 0 3
M3 x  y vdd vdd pch w=50u  l=1u
M4 y  y vdd vdd pch w=50u  l=1u
M1 x  x e2  0   nch w=100u l=1u
M2 y2 x e1  0   nch w=50u  l=1u
Vsen y y2 0
Q2 0 0 e2 sp 1
Q1 0 0 e1 sp 10
.nodeset v(x)=1.6 v(y)=1.8
.options temp=27 tnom=27
.op
.dc VDD 2 4 0.1
.end
```

### Step 5 — Simulated current and its deviations

At $V_{DD}=3$ V the full model gives $I_{BIAS}=235.0\ \mu$A, with $V_{GS2}-V_{GS1}=59.86$ mV. Switching the second-order effects off one at a time identifies the gap to hand analysis:

| Model | $I_{BIAS}$ at 3 V (µA) | $dI_{BIAS}/dV_{DD}$ (µA/V) |
|---|---|---|
| $\gamma=0$, $\lambda=0$ | 200.8 | 0 |
| $\gamma=0$, $\lambda$ on | 219.2 | 40.6 |
| body effect on, $\lambda=0$ | 217.3 | 0 |
| full model | 235.0 | 43.3 |

The idealized model reproduces the hand result (202.6 µA scaled by $(25.87/26)^2$ gives 200.6 µA). The body effect adds about 8 %: $M_1$'s source is 60 mV higher than $M_2$'s, so $V_{t1}$ exceeds $V_{t2}$ by about 2.5 mV, which adds to the 60-mV difference that sets the current ($I\propto(\Delta V)^2$). Channel-length modulation adds about 9 %, because $M_2$ and $M_3$ have larger $|V_{DS}|$ than their partners. Altogether the simulation is about 16 % above the 202.6 µA hand value, a level-1 model's second-order effects on top of a correct first-order design.

A temperature sweep confirms Step 3. Over −25 to 100 °C the idealized model's current rises from 182.7 to 223.9 µA, a ratio of 1.225 against $(373/248)^{0.5}=1.226$, and its slope at 25 °C is +1680 ppm/°C. The full model gives +2140 ppm/°C; the extra comes from the temperature dependence of the second-order terms.

### Step 6 — Supply sensitivity

The DC sweep gives $dI_{BIAS}/dV_{DD}=43\ \mu\mathrm A/\mathrm V$ at 3 V, so

$$
S_{V_{DD}}^{I_{BIAS}}=\frac{V_{DD}}{I_{BIAS}}\frac{\partial I_{BIAS}}{\partial V_{DD}}=\frac{3\ \mathrm V}{235\ \mu\mathrm A}\left(43.3\ \frac{\mu\mathrm A}{\mathrm V}\right)=0.55 .
$$

With $\lambda=0$ it is zero, since the two diode-connected devices fix every node relative to its rail. With $\lambda\ne0$, a rise $\delta$ in $V_{DD}$ appears entirely across $M_3$ ($V_{SD3}$) and $M_2$ ($V_{DS2}$). Linearizing the loop equation with $a=\lambda_n/(1+\lambda_nV_{DS2})\approx0.0196\ \mathrm{V^{-1}}$ and $b=\lambda_p/(1+\lambda_pV_{SD3})\approx0.0378\ \mathrm{V^{-1}}$:

$$
\frac{dI}{2I}\left(V_{ov2}-V_{ov1}\right)=\delta\left(\frac{aV_{ov2}}2+\frac{bV_{ov1}}2+bV_T\right)
\;\Rightarrow\;
\frac1I\frac{dI}{dV_{DD}}=\frac{2(0.00572\ \mathrm V)}{0.0599\ \mathrm V}\,\mathrm{V^{-1}}=0.19\ \mathrm{V^{-1}},
$$

that is, about 45 µA/V, in line with the simulation. The circuit is only moderately supply-insensitive: the stabilizing quantity, a 60-mV difference amplified by $V_{ov}$'s of only 0.15–0.2 V, is small compared with the channel-length-modulation shifts.

