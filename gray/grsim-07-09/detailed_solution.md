# Detailed solution - grsim-07-09

The lateral pnp has a very low $f_T$, so $C_\pi$ is large and $\beta(s)$ falls early. Write the base-to-emitter impedance as $z_\pi=r_\pi\parallel(1/sC_\pi)$. The emitter follower reflects impedances through the factor $1+g_mz_\pi$: up by it at the input, down by it at the output. Expanding the two expressions gives the $RC$ and $RL$ equivalent networks. The step responses follow from the output impedance and the load, and ngspice confirms both with the linear hybrid-π model ($C_\mu=0$, $r_o=\infty$; the small-signal model is the same for pnp and npn).

### Step 1 — Small-signal parameters

$$
g_m=\frac{|I_C|}{V_T}=\frac{300\ \mu\mathrm A}{26\ \mathrm{mV}}=11.5\ \mathrm{mA/V},\quad r_\pi=\frac{\beta}{g_m}=4.33\ \mathrm{k\Omega},\quad C_\pi=\frac{g_m}{2\pi f_T}=\frac{11.5\ \mathrm{mA/V}}{2\pi(4\ \mathrm{MHz})}=459\ \mathrm{pF}.
$$

The time constant $\tau=r_\pi C_\pi=1.99\ \mu$s sets $\beta(s)=g_mz_\pi=\beta/(1+s\tau)$. The total source resistance at the internal base is $R_S'=R_S+r_b=450\ \Omega$.

### Step 2 — Input impedance

Looking into the base with $R_E$ at the emitter, the base current $i_b$ flows through $r_b$ and $z_\pi$, and $(1+g_mz_\pi)i_b$ flows through $R_E$:

$$
z_i=r_b+z_\pi+(1+g_mz_\pi)R_E=r_b+R_E+z_\pi(1+g_mR_E).
$$

The last term is $r_\pi\parallel C_\pi$ scaled by $1+g_mR_E=47.2$, i.e. a parallel $RC$:

$$
R=r_\pi(1+g_mR_E)=204\ \mathrm{k\Omega},\qquad C=\frac{C_\pi}{1+g_mR_E}=9.74\ \mathrm{pF},
$$

in series with $r_b+R_E=4.2\ \mathrm{k\Omega}$. $|z_i|$ is 208.5 kΩ at low frequency and falls at −20 dB/decade above the pole $1/(2\pi RC)=80$ kHz. It levels off at 4.2 kΩ above about $80\ \mathrm{kHz}\times(208.5/4.2)\approx4$ MHz.

### Step 3 — Output impedance

Looking into the emitter ($R_E$ excluded) with the source shorted, a test voltage drives $(R_S'+z_\pi)$, and the emitter current is $(1+g_mz_\pi)$ times the base current:

$$
z_o=\frac{R_S'+z_\pi}{1+g_mz_\pi}=\frac{r_\pi+R_S'(1+s\tau)}{(1+\beta)+s\tau}.
$$

At low frequency $z_o=(r_\pi+R_S')/(\beta+1)=94\ \Omega$, and at high frequency $z_o\to R_S'=450\ \Omega$. In between, a zero at $(r_\pi+R_S')/(R_S'\tau)=5.3\times10^6$ rad/s (0.85 MHz) precedes a pole at $(1+\beta)/\tau=2.56\times10^7$ rad/s (4.1 MHz): $z_o$ rises with frequency, so it is inductive. It matches $R_2\parallel(R_1+sL)$ with

$$
R_2=R_S'=450\ \Omega,\qquad R_1\approx\frac1{g_m}+\frac{R_S'}{\beta}=95.7\ \Omega,\qquad L\approx\frac{\tau R_S'}{\beta}=C_\pi r_\pi\frac{R_S'}{\beta}=17.9\ \mu\mathrm H .
$$

Fitting the exact zero and pole instead gives $R_1=118\ \Omega$ and $L=22.2\ \mu$H.

![Simulated magnitudes of the input impedance (from 208 kΩ down to 4.2 kΩ) and the output impedance (from 94 Ω up to 450 Ω)](/q/grsim-07-09/solution-impedance.svg)

| $f$ | 10 kHz | 100 kHz | 1 MHz | 3 MHz | 10 MHz | 20 MHz |
|---|---|---|---|---|---|---|
| $\lvert z_i\rvert$ (ngspice) | 207 kΩ | 130 kΩ | 17.1 kΩ | 6.9 kΩ | 4.5 kΩ | 4.3 kΩ |
| $\lvert z_o\rvert$ (ngspice) | 93.8 Ω | 94.4 Ω | 141 Ω | 279 Ω | 418 Ω | 441 Ω |

### Step 4 — Step response with a 1-kΩ load

With $R_L=1\ \mathrm{k\Omega}$ at the emitter,

$$
\frac{v_o}{v_s}=\frac{R_L(1+g_mz_\pi)}{R_S'+z_\pi+R_L(1+g_mz_\pi)}=0.914\,\frac{1+s/2.56\times10^7}{1+s/1.93\times10^7}.
$$

At $t=0^+$, $C_\pi$ is a short ($z_\pi=0$), so the input feeds straight through to a divider: $v_o=R_L/(R_L+R_S')\times1\ \mathrm{mV}=0.69$ mV. The output then rises exponentially, with $\tau=1/(1.93\times10^7)=52$ ns, to the dc value $R_L/(R_L+z_o(0))\times1\ \mathrm{mV}=0.914$ mV. There is no overshoot.

### Step 5 — Step response with a 400-pF load

With an ideal current-source bias there is no resistive load, so the open-circuit gain is 1 and $v_o/v_s=1/(1+sC_Lz_o)$:

$$
\frac{v_o}{v_s}=\frac{(1+\beta)+s\tau}{s^2C_LR_S'\tau+s\left[\tau+C_L(r_\pi+R_S')\right]+(1+\beta)} .
$$

The poles are at $-5.45\times10^6\pm j1.06\times10^7$ rad/s, so $\omega_n=1.19\times10^7$ rad/s and $\zeta=0.46$, and there is a zero at $-2.56\times10^7$ rad/s. The inductive output impedance forms a series resonance with the load capacitance. The response overshoots (about 20 % from $\zeta$ alone, a little more with the zero) and rings at $2\pi/1.06\times10^7=0.59\ \mu$s before settling to 1 mV.

### Step 6 — SPICE step responses

```spice
* grsim-07-09 step responses, linear hybrid-pi of the pnp
.subckt hp b e
Rb  b  bi 200
Rpi bi e  4333.3
Cpi bi e  459.2p
G   0  e  bi e 11.5385m
.ends
Vs  s 0 pwl(0 0 1p 1m)
RS1 s b1 250
X1  b1 e1 hp
RL  e1 0 1k
RS2 s b2 250
X2  b2 e2 hp
CL  e2 0 400p
.tran 1n 2u 0 1n
.end
```

![Simulated responses to a 1-mV input step: a jump and exponential rise for the 1-kΩ load, damped ringing for the 400-pF load](/q/grsim-07-09/solution-step.svg)

| Load | Initial step | Time constant / rise | Peak | Ringing period | Final |
|---|---|---|---|---|---|
| 1 kΩ | 0.69 mV | τ = 52 ns | none | — | 0.914 mV |
| 400 pF | 0 | 10–90 % in 0.11 µs | 1.23 mV at 0.25 µs (23 %) | 0.59 µs | 1.00 mV |

The resistive load gives a first-order response with an immediate jump, because the large $C_\pi$ feeds the input directly forward at high frequency. The capacitive load gives a lightly damped second-order response. This ringing is the signature of an emitter follower whose output impedance is inductive (it rises with frequency because $\beta$ falls) when it drives a capacitor.
