# Detailed solution - grsim-04-12

The pnp mirror $Q_3$–$Q_4$ copies $Q_1$'s signal current to the output, where it adds to $Q_2$'s current, so the full differential transconductance $g_m$ drives the output node. The output resistance is $r_{o2}\parallel r_{o4}$. Then simulate the gain and output resistance, the large-signal transfer curve, and the CMRR with a 1-MΩ tail resistance.

### Step 1 — Small-signal parameters

Each side carries half the tail current, $I_C=50\ \mu$A (base currents neglected):

$$
g_m=\frac{I_C}{V_T}=\frac{50\ \mu\mathrm A}{26\ \mathrm{mV}}=1.92\ \mathrm{mA/V},\qquad
r_{o2}=\frac{130\ \mathrm V}{50\ \mu\mathrm A}=2.6\ \mathrm{M\Omega},\qquad
r_{o4}=\frac{50\ \mathrm V}{50\ \mu\mathrm A}=1\ \mathrm{M\Omega}.
$$

### Step 2 — Output resistance and gain

With $v_i$ applied to $Q_1$ and $Q_2$'s base grounded, the emitter node moves by $v_i/2$, so $Q_1$ conducts $+g_mv_i/2$ and $Q_2$ conducts $-g_mv_i/2$. The mirror reproduces $Q_1$'s increase in $Q_4$, which pushes current into the output, while $Q_2$ draws less from it. The short-circuit output current is $g_mv_i$, and the output node sees

$$
R_o=r_{o2}\parallel r_{o4}=2.6\ \mathrm{M\Omega}\parallel1\ \mathrm{M\Omega}=0.72\ \mathrm{M\Omega},
\qquad
\frac{v_o}{v_i}=g_mR_o=(1.92\ \mathrm{mA/V})(0.72\ \mathrm{M\Omega})=+1.39\times10^{3}.
$$

The pnp mirror's current gain is $1/(1+2/\beta_{F,pnp})=0.96$, which reduces only the half of the signal that passes through it: $g_mR_o(1+0.96)/2=1.36\times10^{3}$.

### Step 3 — Large-signal transfer characteristic (expected)

- Systematic offset: the mirror delivers only $I_{C1}/(1+2/\beta_{F,pnp})$, so the output sits in its active range only when $Q_1$ carries 4% more than $Q_2$, i.e. at $V_I\approx V_T\ln(1+2/\beta_{F,pnp})=+1.0$ mV. There $V_O\approx V_{SUP}-|V_{BE}|\approx1.8$ V.
- Width: with a gain of about 1400, the full swing of about 3 V requires only about 2 mV of input.
- Upper limit: for larger $V_I$, the output rises until $Q_4$ saturates, at about $V_{SUP}-V_{CE(\mathrm{sat})}\approx2.4$ V.
- Lower limit: for smaller $V_I$, it falls until $Q_2$ saturates, one $V_{CE(\mathrm{sat})}$ above the emitter node at about $-0.6$ V, i.e. about $-0.5$ V.

### Step 4 — CMRR with $r_{tail}=1$ MΩ (hand)

A CM input changes the tail current by $v_{ic}/r_{tail}$, i.e. $v_{ic}/(2r_{tail})$ per side. With the pair balanced, two imperfections turn this into an output: the mirror's base-current error ($Q_4$ delivers $1/(1+2/\beta)$ of $Q_1$'s change), and the finite output resistance of the input transistors seen by the mirror. The standard result is

$$
\mathrm{CMRR}\approx\frac{1+2g_mr_{tail}}{\dfrac1{1+g_{m(mir)}r_{o(dp)}}+\dfrac1{1+g_{m(mir)}r_{\pi(mir)}/2}}
=\frac{1+2(1.92\ \mathrm{mA/V})(1\ \mathrm{M\Omega})}{\dfrac1{1+5000}+\dfrac1{1+25}}
=\frac{3847}{0.0002+0.0385}=1.0\times10^{5},
$$

i.e. about 100 dB. The pnp base-current term dominates: $|A_{cm}|\approx R_o/(\beta_{F,pnp}r_{tail})=0.0144$.

### Step 5 — SPICE setup

```spice
* grsim-04-12 bipolar pair with pnp mirror load
VP   vp 0 2.5
VN   vn 0 -2.5
VCM  c 0 0
VI   b1 c 0.957m
Q1   d1 b1 e npn
Q2   out c e npn
Q3   d1 d1 vp pnp
Q4   out d1 vp pnp
IT   e vn 100u
RT   e vn 1e15
.model npn npn is=5e-15 bf=200 vaf=130
.model pnp pnp is=2e-15 bf=50 vaf=50
.control
op
tf v(out) VI
print all
dc VI -3m 5m 1u
wrdata tr.txt v(out)
.endc
.end
```

$V_I=0.957$ mV was found from the dc sweep as the input giving $V_O=1.8$ V. For the CMRR, $R_T$ was set to 1 MΩ, and `tf v(out) VCM` gives the CM gain.

### Step 6 — Results: gain, output resistance and transfer curve

| Quantity | Hand | ngspice |
|---|---|---|
| $v_o/v_i$ | $1.36\times10^{3}$ to $1.39\times10^{3}$ | $1.40\times10^{3}$ |
| $R_o$ | 0.72 MΩ | 0.74 MΩ |
| $V_I$ for $V_O=1.8$ V | ≈ +1.0 mV | +0.96 mV |
| Output limits | ≈ 2.4 V / ≈ −0.5 V | 2.42 V / −0.52 V |

![ngspice VO versus VI transfer curve of the actively loaded pair: a millivolt-wide transition near +1 mV between the saturation limits of Q4 and Q2](/q/grsim-04-12/solution-transfer.svg)

The simulated $R_o$ is 3% higher because SPICE's $r_o=(V_A+V_{CE})/I_C$ exceeds $V_A/I_C$. The output crosses 0 V at $V_I=-0.31$ mV and 2 V at $+1.10$ mV: the transition is about 2 mV wide and centred on the systematic offset.

### Step 7 — Results: CMRR

The simulated CM gain depends on how the pair is biased, which is instructive:
- With the inputs balanced ($V_I=0$, $I_{C1}=I_{C2}$) and the output held at 1.8 V by a 1.84-μA trim current source into the output node (which absorbs the mirror's base-current error), ngspice gives $A_{dm}=1.42\times10^{3}$ and $A_{cm}=-1.34\times10^{-2}$, so CMRR $=1.06\times10^{5}$ (100.5 dB), in agreement with Step 4.
- If instead the output is centred by applying the +0.96-mV offset at the input, $I_{C1}/I_{C2}=1+2/\beta_{F,pnp}$. A CM change in tail current then divides in the same ratio, and $Q_1$'s larger share exactly compensates the mirror's base-current loss. The β-error term cancels, $|A_{cm}|$ drops to $8.6\times10^{-5}$, and the CMRR rises to about $1.6\times10^{7}$. This cancellation relies on the offset exactly matching the systematic error; with ordinary device mismatch the first-order figure of about $10^{5}$ is the meaningful one.
