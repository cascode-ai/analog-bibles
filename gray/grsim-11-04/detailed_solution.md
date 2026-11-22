# Detailed solution - grsim-11-04

With $r_b=0$, $r_o=\infty$ and no capacitances, the small-signal circuit has two nodes. At the base node, $R_S$ and $r_\pi$ are in parallel and carry the noise currents of $R_S$ and the base shot noise. At the collector node, $R_L$ carries the collector shot noise and its own thermal noise. Base-node noise reaches the output through $v_{be}$ and the gain $g_mR_L$; collector-node noise appears directly across $R_L$. The uncorrelated contributions add in power. Dividing the output density by the transimpedance squared gives the equivalent input noise current, and integrating over 2 MHz gives the minimum detectable signal.

### Step 1 — Small-signal parameters

$$
g_m=\frac{I_C}{V_T}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mS},\qquad r_\pi=\frac{\beta}{g_m}=1.3\ \mathrm{k\Omega},\qquad I_B=\frac{I_C}{\beta}=20\ \mu\mathrm{A},
$$

$$
R_b=R_S\parallel r_\pi=1\ \mathrm{k\Omega}\parallel1.3\ \mathrm{k\Omega}=565\ \Omega,\qquad g_mR_L=385 .
$$

### Step 2 — Noise from the base node

The thermal noise of $R_S$ and the base shot noise both flow into $R_b$:

$$
\frac{\overline{i_b^2}}{\Delta f}=\frac{4kT}{R_S}+2qI_B=\frac{1.66\times10^{-20}}{1\ \mathrm{k\Omega}}+2(1.6\times10^{-19})(20\ \mu\mathrm{A})=1.66\times10^{-23}+0.64\times10^{-23}=2.30\times10^{-23}\ \mathrm{A^2/Hz}.
$$

The resulting $v_{be}$ is amplified by $g_mR_L$:

$$
\frac{\overline{v_{o1}^2}}{\Delta f}=\frac{\overline{i_b^2}}{\Delta f}R_b^2(g_mR_L)^2=(2.30\times10^{-23})(565\ \Omega)^2(385)^2=1.087\times10^{-12}\ \mathrm{V^2/Hz}.
$$

### Step 3 — Noise from the collector node

The collector shot noise and the thermal noise of $R_L$ flow directly into $R_L$:

$$
\frac{\overline{v_{o2}^2}}{\Delta f}=\left(2qI_C+\frac{4kT}{R_L}\right)R_L^2=(3.2\times10^{-22}+1.66\times10^{-24})(10\ \mathrm{k\Omega})^2=3.22\times10^{-14}\ \mathrm{V^2/Hz}.
$$

### Step 4 — Total output density and noise in 2 MHz

$$
\frac{\overline{v_o^2}}{\Delta f}=1.087\times10^{-12}+0.032\times10^{-12}=1.12\times10^{-12}\ \mathrm{V^2/Hz}\quad(1.06\ \mu\mathrm{V}/\sqrt{\mathrm{Hz}}).
$$

The spectrum is white, so with a sharp 2-MHz cutoff

$$
\overline{v_o^2}=(1.12\times10^{-12}\ \mathrm{V^2/Hz})(2\ \mathrm{MHz})=2.24\times10^{-6}\ \mathrm{V^2},\qquad v_{o,\text{rms}}=1.50\ \mathrm{mV}.
$$

### Step 5 — Minimum detectable signal

The source current divides between $R_S$ and $r_\pi$, so the transimpedance is

$$
\frac{v_o}{i_S}=g_mR_LR_b=(38.5\ \mathrm{mS})(10\ \mathrm{k\Omega})(565\ \Omega)=217\ \mathrm{k\Omega}.
$$

The equivalent input noise current density is $1.12\times10^{-12}/(217\ \mathrm{k\Omega})^2=2.37\times10^{-23}\ \mathrm{A^2/Hz}$. The minimum detectable signal is the rms input current equal to the input-referred noise:

$$
i_{S,\min}=\frac{v_{o,\text{rms}}}{217\ \mathrm{k\Omega}}=\frac{1.50\ \mathrm{mV}}{217\ \mathrm{k\Omega}}=6.9\ \mathrm{nA\ rms}.
$$

Of the input-referred noise, $R_S$ contributes 70 %, base shot noise 27 %, collector shot noise 3 %, and $R_L$ less than 0.1 %.

### Step 6 — SPICE comparison

The bias must not add noise. The base is biased by an ideal (noiseless) 20-µA dc current source, so with $\beta=50$ and no Early effect $I_C=1$ mA exactly. $R_S$ returns to ground through a 1-F capacitor, which blocks its dc current but is a short at the noise frequencies. $R_L$ connects to a 15-V supply, which is an ac ground. The ac input $i_S$ is a separate current source into the base, and the noise analysis uses it as the input reference.

```spice
* grsim-11-04 CE stage noise, noiseless bias
.options temp=28.57 tnom=28.57
.model qn npn is=1e-15 bf=50
VCC vcc 0 15
IB 0 b 20u
Is 0 b dc 0 ac 1
RS b rs 1k
CS rs 0 1
Q1 c b 0 qn
RL vcc c 10k
.noise v(c) Is lin 201 1 2meg
.end
```

| Quantity | Hand | ngspice |
|---|---|---|
| $I_C$, $g_m$ | 1 mA, 38.5 mS | 1.000 mA, 38.46 mS |
| Transimpedance $v_o/i_S$ | 217 kΩ | 217.4 kΩ |
| Output noise density | $1.12\times10^{-12}$ V²/Hz | $1.12\times10^{-12}$ V²/Hz (flat from 1 Hz to 2 MHz) |
| Input noise current density | $2.37\times10^{-23}$ A²/Hz | $2.38\times10^{-23}$ A²/Hz |
| Output noise, 1 Hz–2 MHz | 1.50 mV rms | 1.498 mV rms |
| MDS (input noise, 1 Hz–2 MHz) | 6.9 nA rms | 6.89 nA rms |

The simulation agrees with the hand analysis to within 0.3 %. The tiny difference comes from ngspice using $4kT$ at the temperature chosen for $V_T=26$ mV ($1.667\times10^{-20}$ instead of $1.66\times10^{-20}$ V·C).
