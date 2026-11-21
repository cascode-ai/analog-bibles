# Detailed solution - grsim-05-25

The design is driven by three budgets: the standby power fixes $I_{\text{BIAS}}$ and the quiescent output current, the gain-error limit fixes $g_m$ of the output devices (with the error-amplifier gain at its maximum of 5), and the current-source headroom fixes the minimum size of $M_{15}$, $M_{16}$. Distortion is minimized by taking the largest quiescent current, the largest allowed $A$ and a generous output-device size. The complementary half is sized by the ratio $k_n'/k_p'$, and a transistor-level ngspice run verifies the result.

### Step 1 — Currents in the error amplifier

With zero offset the tail current splits equally, $I_{D11}=I_{D12}=I_{\text{TAIL}}/2=2.5I_{\text{BIAS}}$. $M_{13}$ and $M_{14}$ mirror $M_{17}$ with ratio 10, so each carries $10I_{\text{BIAS}}$, and the remainder flows in $M_{15}$, $M_{16}$:

$$
|I_{D13}|=|I_{D14}|=10I_{\text{BIAS}},\qquad |I_{D15}|=|I_{D16}|=10I_{\text{BIAS}}-2.5I_{\text{BIAS}}=7.5I_{\text{BIAS}},\qquad |I_{D1}|=100I_{\text{BIAS}}.
$$

### Step 2 — Power budget: $I_{\text{BIAS}}$ and $I_Q$

Each error amplifier draws $I_{\text{BIAS}}$ (through $M_{17}$) plus $|I_{D13}|+|I_{D14}|=20I_{\text{BIAS}}$ from the supplies; the tail and $M_{15}$/$M_{16}$ currents are part of those mirror currents. The output branch carries $I_Q=100I_{\text{BIAS}}$ from $V_{DD}$ to $-V_{SS}$. With $I_{\text{BIASP}}=I_{\text{BIAS}}$:

$$
P=(V_{DD}+V_{SS})(100+21+21)I_{\text{BIAS}}=(5\ \mathrm V)(142\,I_{\text{BIAS}})\le70\ \mathrm{mW}
\;\Rightarrow\;I_{\text{BIAS}}\le98.6\ \mu\mathrm A .
$$

Choose $I_{\text{BIAS}}=I_{\text{BIASP}}=98\ \mu$A, $I_{\text{TAIL}}=I_{\text{TAILP}}=490\ \mu$A and $I_Q=9.8$ mA, giving $P=69.6$ mW. The largest $I_Q$ is chosen because it keeps both output devices conducting over the largest load-current range (Step 6).

### Step 3 — Gain error: size $M_1$ and $M_2$

The closed-loop characteristic is $V_o=V_i/(1+1/(2Ag_mR_L))$, so

$$
\frac{1}{1+2Ag_mR_L}\le0.01\;\Rightarrow\;2Ag_mR_L\ge99\;\Rightarrow\;g_m\ge\frac{99}{2(5)(100\ \Omega)}=0.099\ \mathrm S .
$$

From $g_m=\sqrt{2k'(W/L)I_Q}$, the minimum is $(W/L)_1=g_m^2/(2k_p'I_Q)=8.7\times10^3$. Take $(W/L)_1=10\,000$ for margin and lower distortion:

$$
|V_{ov1}|=\sqrt{\frac{2(9.8\ \mathrm{mA})}{(57.5\ \mu\mathrm{A/V^2})(10^4)}}=0.185\ \mathrm V,\qquad
g_m=\frac{2I_Q}{|V_{ov1}|}=0.106\ \mathrm S .
$$

$M_2$ must have the same $k'W/L$: $(W/L)_2=10^4(57.5/127)=4530$. The mirror ratios of specification (e) then give $(W/L)_{17}=100$, $(W/L)_{13}=(W/L)_{14}=1000$, $(W/L)_{27}=45.3$, $(W/L)_{23}=(W/L)_{24}=453$.

### Step 4 — Headroom: size $M_{15}$, $M_{16}$

$I_{\text{BIAS}}$ sits between node $B$ (gate of $M_{15}$) and $-V_{SS}$, with $V_B=V_{DD}-V_{SG13}-V_{SG15}$. The worst case is $M_{12}$ cut off, so that $M_{15}$ carries the full $10I_{\text{BIAS}}=0.98$ mA. With $V_{SG13}=0.7+\sqrt{2(0.98\ \mathrm{mA})/(57.5\ \mu\cdot1000)}=0.885$ V, the 0.5-V requirement gives

$$
V_{SG15}\le5-0.885-0.5=3.615\ \mathrm V\;\Rightarrow\;|V_{ov15}|\le2.915\ \mathrm V\;\Rightarrow\;\left(\frac WL\right)_{15}\ge\frac{2(0.98\ \mathrm{mA})}{(57.5\ \mu\mathrm{A/V^2})(2.915\ \mathrm V)^2}=4.0 .
$$

Take $(W/L)_{15}=(W/L)_{16}=5$; then $V_{SG15}=0.7+2.61=3.31$ V and the source has $5-0.885-3.31=0.81$ V across it. The tail source sits at $V_i-V_{GS11}+V_{SS}$; for $V_o\ge0$ ($V_i\ge0$) and $V_{GS11}\le0.92$ V even when $M_{11}$ takes the whole tail, that is at least 1.58 V.

### Step 5 — Error-amplifier gain: size $M_{11}$, $M_{12}$

With no body effect, $A=g_{m11}/g_{m16}$:

$$
g_{m16}=\sqrt{2(57.5\ \mu)(5)(735\ \mu\mathrm A)}=0.650\ \mathrm{mS}.
$$

$A\le5$ requires $g_{m11}\le3.25$ mS, i.e. $(W/L)_{11}\le g_{m11}^2/(2k_n'I_{D11})=170$. Choose $(W/L)_{11}=(W/L)_{12}=165$:

$$
g_{m11}=\sqrt{2(127\ \mu)(165)(245\ \mu\mathrm A)}=3.20\ \mathrm{mS},\qquad A=\frac{3.20}{0.650}=4.92 .
$$

The gain error is then $1/(1+2(4.92)(0.106\ \mathrm S)(100\ \Omega))=0.95\ \%$. The complementary amplifier uses $(W/L)_{25}=(W/L)_{26}=5(57.5/127)=2.27$ and $(W/L)_{21}=(W/L)_{22}=165(127/57.5)=365$, which give the same currents, voltages and $A$.

| Device | 1 | 11, 12 | 13, 14 | 15, 16 | 17 | 2 | 21, 22 | 23, 24 | 25, 26 | 27 |
|---|---|---|---|---|---|---|---|---|---|---|
| $W/L$ ($L=1$ µm) | 10 000 | 165 | 1000 | 5 | 100 | 4530 | 365 | 453 | 2.27 | 45.3 |

### Step 6 — Why this minimizes distortion

Both error amplifiers force their output device to follow the same input, so the gate drives of $M_1$ and $M_2$ move by equal and opposite amounts $\delta$ about $V_{ov}=0.185$ V. With equal $k'W/L$ the square laws give

$$
|I_{D1}|-I_{D2}=\tfrac12k'\tfrac WL\left[(V_{ov}+\delta)^2-(V_{ov}-\delta)^2\right]=2k'\tfrac WL V_{ov}\,\delta ,
$$

which is exactly linear in $\delta$ while both devices conduct, i.e. for $|I_o|<4I_Q=39$ mA, or $|V_o|<3.9$ V. That range exceeds the supply-limited swing, so there is no crossover region at all. The residual nonlinearity comes only from the finite loop gain, kept small by the large $2Ag_mR_L\approx104$; a larger $I_Q$, $A$ or $W/L$ would reduce it further but would break the power, quiescent-current or area constraints.

### Step 7 — SPICE verification

Level-1 models with $\lambda=0$ and no body effect; ideal current sources as allowed.

```spice
* grsim-05-25 class AB output stage with error amplifiers
.model nm nmos level=1 kp=127u  vto=0.7  lambda=0 gamma=0
.model pm pmos level=1 kp=57.5u vto=-0.7 lambda=0 gamma=0
VDD vdd 0 2.5
VSS vss 0 -2.5
* top error amplifier and M1
M17 b  g   vdd vdd pm w=100u   l=1u
IB  b  vss 98u
M13 g  g   vdd vdd pm w=1000u  l=1u
M14 d  g   vdd vdd pm w=1000u  l=1u
M11 d  vi  t   vss nm w=165u   l=1u
M12 g  out t   vss nm w=165u   l=1u
IT  t  vss 490u
M15 vss b  g   vdd pm w=5u     l=1u
M16 vss b  d   vdd pm w=5u     l=1u
M1  out d  vdd vdd pm w=10000u l=1u
* bottom (complementary) error amplifier and M2
M27 bp gp  vss vss nm w=45.3u  l=1u
IBP vdd bp 98u
M23 gp gp  vss vss nm w=453u   l=1u
M24 dp gp  vss vss nm w=453u   l=1u
M21 dp vi  tp  vdd pm w=365u   l=1u
M22 gp out tp  vdd pm w=365u   l=1u
ITP vdd tp 490u
M25 vdd bp gp  vss nm w=2.27u  l=1u
M26 vdd bp dp  vss nm w=2.27u  l=1u
M2  out dp vss vss nm w=4530u  l=1u
RL out 0 100
Vin vi 0 sin(0 2 1k)
.dc Vin -3 3 2m
.tran 1u 3m 1.9m 0.2u
.four 1k v(out)
.end
```

| Quantity | Design | ngspice |
|---|---|---|
| $\lvert I_{D1}\rvert$, $I_{D2}$ at $V_o=0$ | 9.8 mA | 9.800 mA |
| Standby power | 69.6 mW | 69.58 mW |
| Gate of $M_1$; node $B$ at $V_o=0$ | 1.615 V; −1.34 V | 1.615 V; −1.346 V |
| Slope $V_o/V_i$, $\lvert V_i\rvert\le2$ V | 0.9905 | 0.99048–0.99053 |
| Deviation from a straight line, $\lvert V_i\rvert\le2$ V | — | < 15 µV |
| THD for a 2-V-peak input | — | 0.0004 % |
| Voltage across $I_{\text{BIAS}}$, $I_{\text{TAIL}}$ for $0\le V_o\le2$ V | ≥ 0.5 V | ≥ 1.10 V, ≥ 1.65 V |

![Simulated Vo versus Vi: a straight line of slope 0.9905 out to about ±2.2 V](/q/grsim-05-25/solution-transfer.svg)

![Simulated output-device currents versus Vi: 9.8 mA each at zero, both conducting over the linear range](/q/grsim-05-25/solution-currents.svg)

The gain error is 0.95 %, inside the 1 % limit. The characteristic is a straight line through zero with no crossover; for example at $V_o=1$ V the currents are 15.38 mA and 5.47 mA, exactly $9.8\ \mathrm{mA}\,(1\pm0.253)^2$ as Step 6 predicts. The output stays linear to about ±2.2 V, where the output devices enter the triode region ($V_{SD1}$ falls to $|V_{ov1}|\approx0.28$ V at 22 mA), and then clips near ±2.3 V. All specifications are met with 0.4 mW of power margin.
