# Detailed solution - grsim-03-18

Find the bias current (the 10-MΩ tail resistor adds a little to the 20-μA source), then use the DM and CM half circuits. For DM signals the emitter node is an ac ground; for CM signals each half sees $2R_{\mathrm{TAIL}}$ in its emitter. Then verify with ngspice ac analyses driven by a pure DM and a pure CM input, first with the ideal model and then with $r_b=200\ \Omega$ and $V_A=130$ V.

### Step 1 — Bias

With the bases at 0 V, the emitters sit at $-V_{BE}$. Using $V_{BE}=V_T\ln(I_C/I_S)$ with $I_C\approx10\ \mu$A:

$$
V_{BE}=26\ \mathrm{mV}\,\ln\frac{10.17\ \mu\mathrm A}{5\times10^{-15}\ \mathrm A}=0.557\ \mathrm V,\qquad
I_{R_{\mathrm{TAIL}}}=\frac{-0.557\ \mathrm V+5\ \mathrm V}{10\ \mathrm{M\Omega}}=0.44\ \mu\mathrm A .
$$

The total emitter current is $20.44\ \mu$A, so $I_E=10.22\ \mu$A and $I_C=\tfrac{200}{201}I_E=10.17\ \mu$A per side. Then

$$
g_m=\frac{I_C}{V_T}=0.391\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta_0}{g_m}=511\ \mathrm{k\Omega}.
$$

The collectors sit at $5-(10.17\ \mu\mathrm A)(100\ \mathrm{k\Omega})=3.98$ V, so both transistors are forward-active.

### Step 2 — Differential mode

In the DM half circuit the emitter node is an ac ground, so each side is a common-emitter stage with load $R_C$ and input $\pm v_{id}/2$:

$$
A_{dm}=\frac{v_{od}}{v_{id}}=-g_mR_C=-(0.391\ \mathrm{mA/V})(100\ \mathrm{k\Omega})=-39.1,
\qquad
R_{id}=\frac{v_{id}}{i_b}=2r_\pi=1.02\ \mathrm{M\Omega}.
$$

### Step 3 — Common mode

In the CM half circuit each transistor has $2R_{\mathrm{TAIL}}=20$ MΩ in its emitter (the ideal current source is an open circuit for ac). With emitter degeneration $R_E$, $G_m=g_m/[1+g_mR_E(1+1/\beta_0)]$:

$$
A_{cm}=\frac{v_{oc}}{v_{ic}}=-\frac{g_mR_C}{1+2g_mR_{\mathrm{TAIL}}(1+1/\beta_0)}
=-\frac{39.1}{1+7863}\approx-\frac{R_C}{2R_{\mathrm{TAIL}}}=-4.97\times10^{-3},
$$

$$
R_{ic}=\frac{v_{ic}}{i_b}=r_\pi+(\beta_0+1)\,2R_{\mathrm{TAIL}}=0.51\ \mathrm{M\Omega}+201(20\ \mathrm{M\Omega})=4.02\ \mathrm{G\Omega}.
$$

### Step 4 — CMRR

$$
\mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|=1+2g_mR_{\mathrm{TAIL}}\left(1+\frac1{\beta_0}\right)=7.86\times10^{3}\quad(77.9\ \mathrm{dB}).
$$

### Step 5 — Effect of $r_b=200\ \Omega$ and $V_A=130$ V (hand)

- $r_b$ adds $2r_b=0.4$ kΩ to $R_{id}$ and $r_b$ to $R_{ic}$, and scales both gains by $r_\pi/(r_\pi+r_b)=0.9996$: negligible, because $r_\pi=511$ kΩ $\gg r_b$ at this low current.
- $V_A=130$ V gives $r_o=V_A/I_C=12.8$ MΩ. In DM, $r_o$ appears in parallel with $R_C$: $A_{dm}=-g_m(R_C\parallel r_o)=-38.8$. In CM, $A_{cm}$ hardly changes ($-4.93\times10^{-3}$), so the CMRR stays about $7.9\times10^{3}$. However, $r_o$ in series with $R_C$ now connects the emitter to ac ground in parallel with $2R_{\mathrm{TAIL}}$ ($20\ \mathrm{M\Omega}\parallel12.9\ \mathrm{M\Omega}\approx7.8$ MΩ), and a nodal solution of the CM half circuit gives $R_{ic}\approx1.56$ GΩ, about 2.5 times lower.

### Step 6 — SPICE check

The deck runs an operating point and two ac analyses: first $v_{i1}=+0.5$, $v_{i2}=-0.5$ (pure DM, $v_{id}=1$), then $v_{i1}=v_{i2}=1$ (pure CM). The gains are read directly as $v_{od}$ and $v_{oc}$, and the input resistances as $1/|i(V_1)|$.

```spice
* grsim-03-18 emitter-coupled pair
VCC vcc 0 5
VEE vee 0 -5
V1  b1 0 dc 0 ac 0.5
V2  b2 0 dc 0 ac -0.5
Q1  o1 b1 e npn
Q2  o2 b2 e npn
RC1 vcc o1 100k
RC2 vcc o2 100k
IT  e vee 20u
RT  e vee 10meg
.model npn npn is=5e-15 bf=200
.control
op
print @q1[ic] v(e) v(o1)
ac lin 1 1 1
print v(o1)-v(o2) i(V1)
alter V1 ac = 1
alter V2 ac = 1
ac lin 1 1 1
print (v(o1)+v(o2))/2 i(V1)
.endc
.end
```

For the second run the model is `is=5e-15 bf=200 rb=200 vaf=130`.

| Quantity | Hand, ideal | ngspice, ideal | Hand, $r_b$ and $V_A$ | ngspice, $r_b$ and $V_A$ |
|---|---|---|---|---|
| $I_C$ | 10.17 μA | 10.17 μA | 10.17 μA | 10.17 μA |
| $A_{dm}$ | −39.1 | −39.3 | −38.8 | −39.0 |
| $A_{cm}$ | $-4.97\times10^{-3}$ | $-4.97\times10^{-3}$ | $-4.93\times10^{-3}$ | $-4.94\times10^{-3}$ |
| CMRR | $7.86\times10^{3}$ | $7.91\times10^{3}$ | $7.87\times10^{3}$ | $7.90\times10^{3}$ |
| $R_{id}$ | 1.02 MΩ | 1.02 MΩ | 1.02 MΩ | 1.05 MΩ |
| $R_{ic}$ | 4.02 GΩ | 4.00 GΩ | 1.56 GΩ | 1.64 GΩ |

With the ideal model the simulation reproduces the hand results; the 0.5% higher $|A_{dm}|$ comes from SPICE's $V_T=25.9$ mV at 27 °C. With $r_b$ and $V_A$ added, $r_b$ has no visible effect, $|A_{dm}|$ drops by about 1%, the CMRR is unchanged, and $R_{ic}$ falls by a factor of about 2.5, as predicted. The 3% rise of $R_{id}$ in the second simulation comes from the Gummel–Poon model: with VAF set, the collector current is multiplied by $(1+V_{CE}/V_A)$ but the base current is not, so the effective $\beta$ (and $r_\pi$) rises by about $4.5\ \mathrm V/130\ \mathrm V=3.5\%$.
