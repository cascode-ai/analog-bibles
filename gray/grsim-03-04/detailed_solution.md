# Detailed solution - grsim-03-04

Write the large-signal transfer characteristic $V_o(V_i)$ of the resistor-loaded common-source stage from the square law, differentiate it for the small-signal gain, and locate the triode edge and the unity-gain point. Then confirm everything with an ngspice dc sweep of the same circuit.

### Step 1 — Transfer characteristic in the active region

With $V_{ov}=V_i-V_t>0$ and $V_o\ge V_{ov}$, the transistor is in the active region and $I_D=\tfrac12k'(W/L)V_{ov}^2$, with $k'(W/L)=(200\ \mu\mathrm{A/V^2})(10)=2\ \mathrm{mA/V^2}$. KVL across $R_D$:

$$
V_o=V_{DD}-I_DR_D=3\ \mathrm V-\tfrac12(2\ \mathrm{mA/V^2})(5\ \mathrm{k\Omega})V_{ov}^2=3\ \mathrm V-(5\ \mathrm{V^{-1}})V_{ov}^2 .
$$

Differentiating, the small-signal gain is

$$
A_v=\frac{dV_o}{dV_i}=-g_mR_D=-k'\frac WL V_{ov}R_D=-(10\ \mathrm{V^{-1}})V_{ov}.
$$

For $V_i<V_t=0.6$ V the device is off, $V_o=3$ V and $A_v=0$.

### Step 2 — Edge of the triode region

The active region ends when $V_o=V_{ov}$:

$$
3-5V_{ov}^2=V_{ov}\;\Rightarrow\;5V_{ov}^2+V_{ov}-3=0\;\Rightarrow\;
V_{ov}=\frac{-1+\sqrt{1+60}}{10}=0.681\ \mathrm V .
$$

So $V_i=0.6+0.681=1.281$ V, $V_o=0.681$ V, and $A_v=-(10\ \mathrm{V^{-1}})(0.681\ \mathrm V)=-6.81$.

### Step 3 — Unity gain in the active region

$|A_v|=1$ requires $(10\ \mathrm{V^{-1}})V_{ov}=1$, i.e. $V_{ov}=0.1$ V:

$$
V_i=0.70\ \mathrm V,\qquad V_o=3-5(0.1)^2=2.95\ \mathrm V .
$$

$V_o=2.95$ V is far above $V_{ov}=0.1$ V, so the device is indeed active.

### Step 4 — Maximum gain

In the active region $|A_v|$ grows linearly with $V_{ov}$. In triode, differentiating $V_o=V_{DD}-R_Dk'(W/L)[V_{ov}V_o-V_o^2/2]$ gives

$$
\frac{dV_o}{dV_i}=-\frac{R_Dk'(W/L)\,V_o}{1+R_Dk'(W/L)(V_{ov}-V_o)},
$$

whose magnitude falls as $V_i$ rises, because $V_o$ falls and $V_{ov}-V_o$ grows. At the edge ($V_{ov}=V_o$) both expressions give $-6.81$, so the maximum gain magnitude is

$$
|A_v|_{\max}=6.81\quad\text{at } V_i=1.281\ \mathrm V,\ V_o=0.681\ \mathrm V .
$$

### Step 5 — SPICE check

The deck sweeps $V_i$ from 0 to 3 V in 1-mV steps with a level-1 model and computes the gain as the numerical derivative of $V_o$:

```spice
* grsim-03-04 common-source amplifier, dc sweep
VDD vdd 0 3
VI  vi  0 0
RD  vdd vo 5k
M1  vo vi 0 0 nch W=10u L=1u
.model nch nmos level=1 kp=200u vto=0.6 lambda=0
.control
dc VI 0 3 1m
let av = deriv(v(vo))
wrdata out.txt v(vo) av
.endc
.end
```

A second sweep with 10-μV steps between 1.27 and 1.29 V resolves the gain peak.

| Point | Hand: $V_i$, $V_o$, $A_v$ | ngspice: $V_i$, $V_o$, $A_v$ |
|---|---|---|
| Unity gain | 0.70 V, 2.95 V, −1 | 0.700 V, 2.950 V, −1.000 |
| Triode edge / maximum gain | 1.281 V, 0.681 V, −6.81 | 1.281 V, 0.681 V, −6.810 |
| $V_i=1.0$ V | 2.20 V, −4.0 | 2.200 V, −4.000 |
| $V_i=1.5$ V (triode) | — | 0.368 V, −0.58 |

![ngspice transfer curve Vo(Vi) and gain magnitude −Av of the common-source stage, with the unity-gain point and the triode edge marked](/q/grsim-03-04/solution-transfer.svg)

The simulated curve is flat at 3 V below $V_i=0.6$ V, falls parabolically with slope −1 at 0.70 V, is steepest at the triode edge ($A_v=-6.81$ at $V_i=1.281$ V, $V_o=0.681$ V), and then flattens in triode. With $\lambda=0$ and the same square-law parameters, simulation and hand analysis agree to within the sweep resolution.
