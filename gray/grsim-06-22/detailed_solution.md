# Detailed solution - grsim-06-22

The swing specification, together with the 100-mV margin rule, fixes one common overdrive. The given currents then fix every $W/L$, and the bias circuit is built from 25-µA branches at the same current density. The two triode devices are sized by hand and then trimmed in ngspice, which also gives the gain and the effect of the alternative thresholds. With $L=1$ µm drawn, $L_{\text{eff}}=1-2(0.09)=0.82$ µm, $\lambda_n=0.02/0.82=0.0244\ \mathrm{V^{-1}}$ and $\lambda_p=0.04/0.82=0.0488\ \mathrm{V^{-1}}$. All $W/L$ below are effective ratios ($W=0.82\,\mu\mathrm m\times W/L$).

### Step 1 — Overdrive from the output swing

The auxiliary amplifier $A_1$ holds the drain of $M_4$ at $V_{BIAS2}$, which is set so that $V_{SD4}=|V_{ov}|+0.1$ V. The output can therefore rise until $M_{4A}$ reaches the edge of saturation:

$$
V_{o,\max}=V_{DD}-(|V_{ov}|+0.1\ \mathrm V)-|V_{ov}|.
$$

Likewise $A_2$ holds the drain of $M_{12}$ at $V_{ov}+0.1$ V above $-V_{SS}$, so $V_{o,\min}=-V_{SS}+(V_{ov}+0.1)+V_{ov}$. The swing is

$$
3.3\ \mathrm V-4|V_{ov}|-0.2\ \mathrm V\ge2.5\ \mathrm V\;\Rightarrow\;|V_{ov}|\le0.15\ \mathrm V .
$$

Choose $|V_{ov}|=0.15$ V for every device; the output range is then ±1.25 V.

### Step 2 — Device sizes

From $W/L=2I_D/(\mu C_{ox}V_{ov}^2)$, e.g. $2(100\ \mu\mathrm A)/((194\ \mu\mathrm{A/V^2})(0.15\ \mathrm V)^2)=45.8$:

| Type, current | $W/L$ | Devices |
|---|---|---|
| n, 100 µA | 45.8 | $M_{1A}$, $M_{2A}$, $M_{21}$, $M_{22}$, $M_{33}$, $M_{34}$ |
| n, 200 µA | 91.6 | $M_{11}$, $M_{12}$, $M_{25}$ |
| p, 100 µA | 137 | $M_1$–$M_4$, $M_{3A}$, $M_{4A}$, $M_{23}$, $M_{24}$, $M_{31}$, $M_{32}$ |
| p, 200 µA | 275 | $M_5$, $M_{35}$ |
| n, 25 µA (bias) | 11.5 | $M_{101}$–$M_{104}$, $M_{109}$, $M_{110}$, $M_{113}$ |
| p, 25 µA (bias) | 34.3 | $M_{105}$, $M_{107}$, $M_{108}$, $M_{111}$, $M_{112}$ |

The currents follow from the folding: $M_{11}$, $M_{12}$ carry 200 µA, $M_1$, $M_2$ take 100 µA each, so the cascode branches carry 100 µA. Each auxiliary amplifier has a 200-µA tail.

### Step 3 — Bias voltages and the triode devices

In [Fig. 4], stacked diodes at the common current density give $V_{BIAS4}=-V_{SS}+V_{tn}+V_{ov}=-V_{SS}+0.85$ V and $V_{BIAS1}=V_{DD}-0.85$ V. $V_{BIAS2}$ and $V_{BIAS3}$ are the drains of the triode devices $M_{106}$ and $M_{114}$, which must sit 0.25 V from their rails.

$M_{105}$ and $M_{106}$ share a gate and carry the same current. Let $V_{ov}$ be $M_{105}$'s overdrive; $M_{106}$ then has overdrive $V_{ov}+V_{DS}$ with $V_{DS}=0.25$ V. Equating the saturation current of $M_{105}$ with the triode current of $M_{106}$:

$$
\tfrac12\left(\tfrac WL\right)_{105}V_{ov}^2=\left(\tfrac WL\right)_{106}\left[(V_{ov}+V_{DS})V_{DS}-\tfrac12V_{DS}^2\right]
\;\Rightarrow\;\frac{(W/L)_{106}}{(W/L)_{105}}=\frac{0.01125}{0.06875}=0.164 ,
$$

so $(W/L)_{106}\approx5.6$ and similarly $(W/L)_{114}\approx1.9$. Thus

$$
V_{BIAS1}=+0.80\ \mathrm V,\quad V_{BIAS2}=+1.40\ \mathrm V,\quad V_{BIAS3}=-1.40\ \mathrm V,\quad V_{BIAS4}=-0.80\ \mathrm V .
$$

### Step 4 — Gain estimate

With $g_m=2I_D/V_{ov}$ and $r_o=1/(\lambda I_D)$: $g_{m1}=1.33$ mS; $r_{on}=410\ \mathrm{k\Omega}$ and $r_{op}=205\ \mathrm{k\Omega}$ at 100 µA; $r_{on}=205\ \mathrm{k\Omega}$ at 200 µA. Each auxiliary amplifier is a mirror-loaded pair with gain $A_{1,2}\approx g_m(r_{on}\parallel r_{op})=(1.33\ \mathrm{mS})(137\ \mathrm{k\Omega})=182$. It multiplies the cascode output resistance by $A+1$:

$$
R_{up}\approx(A_1+1)g_{m4A}r_{o4A}r_{o4}=183\times(1.33\ \mathrm{mS})(205\ \mathrm{k\Omega})^2=10\ \mathrm{G\Omega},
$$

$$
R_{down}\approx(A_2+1)g_{m2A}r_{o2A}(r_{o2}\parallel r_{o12})=183\times(1.33\ \mathrm{mS})(410\ \mathrm{k\Omega})(103\ \mathrm{k\Omega})=10\ \mathrm{G\Omega},
$$

$$
A_v\approx g_{m1}(R_{up}\parallel R_{down})=(1.33\ \mathrm{mS})(5\ \mathrm{G\Omega})\approx7\times10^6,
$$

compared with about $4\times10^4$ without the active cascodes.

### Step 5 — The tight spot at the auxiliary-amplifier inputs

The inputs of $A_1$ sit at $V_{BIAS2}=V_{DD}-0.25$ V, while its output (the gate of $M_{4A}$) is one $V_{SG}$ lower, at about $V_{DD}-1.1$ V. The gate-drain voltage of $M_{22}$ is therefore $|V_{tp}|+|V_{ov}|=0.85$ V. Without body effect that exceeds $V_{tn}=0.7$ V and $M_{22}$ would be in triode. With body effect, $M_{22}$'s source is about 2.2 V above $-V_{SS}$ and its threshold rises to about 0.9 V, so it is saturated only by a few tens of millivolts. $M_{32}$ in $A_2$ is in the mirror-image situation.

### Step 6 — SPICE: triode widths, margins, swing and gain

Level-1 models: $V_{t0}=\pm0.7$ V, $\gamma=0.25\ \mathrm{V^{1/2}}$, $2\phi_F=0.66$ V, bodies at the rails. The loop is closed at dc only (1 GΩ, 1 F), and the gain is read at 1 Hz.

```spice
* grsim-06-22 folded cascode with active cascodes (W in um, L = 1 um drawn)
.model nm nmos level=1 kp=194u  vto=0.7  gamma=0.25 phi=0.66 lambda=0.0244 ld=0.09u
.model pm pmos level=1 kp=64.7u vto=-0.7 gamma=0.25 phi=0.66 lambda=0.0488 ld=0.09u
VDD vdd 0 1.65
VSS vss 0 -1.65
IB   vdd  n1   25u
M101 n1   n1   b4   vss nm w=9.39u l=1u
M102 b4   b4   vss  vss nm w=9.39u l=1u
M104 n104 n1   n103 vss nm w=9.39u l=1u
M103 n103 b4   vss  vss nm w=9.39u l=1u
M105 n104 n104 b2   vdd pm w=28.2u l=1u
M106 b2   n104 vdd  vdd pm w=4.08u l=1u
M109 n108 n1   n110 vss nm w=9.39u l=1u
M110 n110 b4   vss  vss nm w=9.39u l=1u
M108 n108 n108 b1   vdd pm w=28.2u l=1u
M107 b1   b1   vdd  vdd pm w=28.2u l=1u
M111 n111 b1   vdd  vdd pm w=28.2u l=1u
M112 n113 n108 n111 vdd pm w=28.2u l=1u
M113 n113 n113 b3   vss nm w=9.39u l=1u
M114 b3   n113 vss  vss nm w=1.36u l=1u
M5  cs  b1  vdd vdd pm w=225.3u l=1u
M1  f1  inp cs  vdd pm w=112.7u l=1u
M2  f2  inm cs  vdd pm w=112.7u l=1u
M11 f1  b4  vss vss nm w=75.1u  l=1u
M12 f2  b4  vss vss nm w=75.1u  l=1u
M1A m   o2a f1  vss nm w=37.6u  l=1u
M2A out o2b f2  vss nm w=37.6u  l=1u
M3  s3  m   vdd vdd pm w=112.7u l=1u
M4  s4  m   vdd vdd pm w=112.7u l=1u
M3A m   o1a s3  vdd pm w=112.7u l=1u
M4A out o1b s4  vdd pm w=112.7u l=1u
.subckt amp1 p n o vdd vss b4
M21 x p  t   vss nm w=37.6u  l=1u
M22 o n  t   vss nm w=37.6u  l=1u
M23 x x  vdd vdd pm w=112.7u l=1u
M24 o x  vdd vdd pm w=112.7u l=1u
M25 t b4 vss vss nm w=75.1u  l=1u
.ends
.subckt amp2 p n o vdd vss b1
M35 t b1 vdd vdd pm w=225.3u l=1u
M31 x p  t   vdd pm w=112.7u l=1u
M32 o n  t   vdd pm w=112.7u l=1u
M33 x x  vss vss nm w=37.6u  l=1u
M34 o x  vss vss nm w=37.6u  l=1u
.ends
XA1a b2 s3 o1a vdd vss b4 amp1
XA1b b2 s4 o1b vdd vss b4 amp1
XA2a b3 f1 o2a vdd vss b1 amp2
XA2b b3 f2 o2b vdd vss b1 amp2
Vp inp 0 dc 0 ac 1
Rf out inm 1G
Cf inm 0 1
.ac lin 1 1 1
.end
```

A root search for $V_{SD106}=0.25$ V and $V_{DS114}=0.25$ V gives $W_{106}=4.08$ µm and $W_{114}=1.36$ µm, i.e. $(W/L)_{106}=4.97$ and $(W/L)_{114}=1.66$: 0.145 of $M_{105}$ and $M_{113}$, slightly below the hand ratio of 0.164 because of channel-length modulation. Results at $V_I=0$:

| Quantity | Hand | ngspice |
|---|---|---|
| $V_{BIAS1}$, $V_{BIAS2}$, $V_{BIAS3}$, $V_{BIAS4}$ (V) | 0.80, 1.40, −1.40, −0.80 | 0.803, 1.400, −1.400, −0.802 |
| $\lvert I_{D5}\rvert$, $I_{D11}$, cascode branch | 200, 200, 100 µA | 198.5, 197.1, 97.8 µA |
| Overdrives | 0.15 V | 0.142–0.153 V |
| $\lvert V_{DS}\rvert-\lvert V_{ov}\rvert$, $M_3$, $M_4$, $M_{11}$, $M_{12}$ | 0.10 V | 0.100–0.101 V |
| $\lvert V_{DS}\rvert-\lvert V_{ov}\rvert$, $M_{22}$, $M_{32}$ (each copy) | ≈ 0.07 V with body effect | 0.023–0.026 V |
| Margin of every other active device | ≥ 0.1 V | ≥ 0.30 V |
| Output range with $M_{2A}$, $M_{4A}$ saturated | ±1.25 V | −1.25 to +1.25 V (2.5 V p-p) |
| DC gain | $\approx7\times10^6$ | $1.20\times10^6$ (122 dB) |

All transistors except $M_{106}$ and $M_{114}$ are saturated, with equal overdrives and the required 100-mV margin, except $M_{22}$ and $M_{32}$. These retain only about 25 mV, because the body effect of $M_{3A}$/$M_{4A}$ (and of $M_{1A}$/$M_{2A}$) lowers the auxiliary-amplifier output by a further 30 mV; with this topology and equal overdrives the 100-mV margin cannot be reached for those two devices (Step 5). The simulated gain is of order $10^6$, below the idealized estimate, because the auxiliary amplifiers lose part of their gain with $M_{22}$, $M_{32}$ so close to the triode edge.

### Step 7 — Gain with $V_{t0}=0.6$ V (n) and $-0.8$ V (p)

Changing only the thresholds (same sizes and bias circuit):

| Quantity | $\pm0.7$ V | 0.6 / −0.8 V |
|---|---|---|
| DC gain | $1.20\times10^6$ | $1.23\times10^5$ |
| $M_{22}$ (in $A_1$): $\lvert V_{DS}\rvert$ / $\lvert V_{DS,sat}\rvert$ | 0.175 / 0.152 V (saturated) | 0.061 / 0.22 V (triode) |
| $M_{32}$ (in $A_2$): margin | 0.025 V | 0.216 V |
| $M_3$, $M_4$: $V_{SD}$ | 0.248 V | 0.180 V |

The gain falls by a factor of about 10. With $|V_{tp}|=0.8$ V the gate of $M_{4A}$ drops to $V_{BIAS2}-0.95$ V, so the gate-drain voltage of $M_{22}$ grows to $|V_{tp}|+|V_{ov}|=0.95$ V, while $M_{22}$'s threshold (with body effect) is only about 0.8 V. $M_{21}$/$M_{22}$ are pushed into triode and $A_1$'s gain collapses. $A_1$ can then no longer hold $M_3$, $M_4$ at $V_{BIAS2}$ (their $V_{SD}$ falls to 0.18 V), and the gain boost of $M_{3A}$/$M_{4A}$ is lost. The output resistance looking up drops to roughly a plain cascode, $\approx g_{m4A}r_{o4A}r_{o4}$, so the gain is set by the p-side cascode, of order $10^5$. The $A_2$ side actually improves, since $M_{32}$'s gate-drain voltage falls to $V_{tn}+V_{ov}=0.75$ V, well below its $|V_{tp}|\approx1$ V, but the output resistance is limited by the weaker side.
