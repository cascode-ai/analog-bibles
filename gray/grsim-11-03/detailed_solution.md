# Detailed solution - grsim-11-03

All noise sources in this circuit are currents in parallel with the output node: the diode's shot and flicker noise, and the thermal noise of the 20-kΩ resistor, whose other end is the ac-grounded supply. They all see the same impedance, $r_d\parallel R\parallel1/(j\omega C)$. The output spectral density is therefore the total noise current density times $|Z|^2$. This gives three regions: a $1/f$ region, a white plateau, and a single-pole roll-off. Find the bias, the corner frequency and the pole, evaluate the spectrum, and compare it with an ngspice noise analysis.

### Step 1 — Bias and small-signal resistance

With about 0.7 V across the diode,

$$
I_D=\frac{10\ \mathrm{V}-0.7\ \mathrm{V}}{20\ \mathrm{k\Omega}}=0.465\ \mathrm{mA},\qquad r_d=\frac{V_T}{I_D}=\frac{26\ \mathrm{mV}}{0.465\ \mathrm{mA}}=55.9\ \Omega,
$$

$$
R_{eq}=r_d\parallel20\ \mathrm{k\Omega}=55.8\ \Omega .
$$

### Step 2 — Noise current densities

$$
\begin{aligned}
2qI_D&=2(1.6\times10^{-19}\ \mathrm{C})(0.465\ \mathrm{mA})=1.488\times10^{-22}\ \mathrm{A^2/Hz},\\
\frac{K_1I_D}{f}&=\frac{(3\times10^{-16}\ \mathrm{A})(0.465\ \mathrm{mA})}{f}=\frac{1.395\times10^{-19}\ \mathrm{A^2}}{f},\\
\frac{4kT}{R}&=\frac{1.66\times10^{-20}\ \mathrm{V\cdot C}}{20\ \mathrm{k\Omega}}=8.3\times10^{-25}\ \mathrm{A^2/Hz}.
\end{aligned}
$$

The resistor's thermal noise is only 0.6 % of the shot noise. The flicker noise equals the shot noise at the corner

$$
f_c=\frac{K_1I_D}{2qI_D}=\frac{K_1}{2q}=\frac{3\times10^{-16}\ \mathrm{A}}{3.2\times10^{-19}\ \mathrm{C}}=938\ \mathrm{Hz},
$$

which is independent of the bias current.

### Step 3 — Output spectral density

$$
S_o(f)=\frac{R_{eq}^2\left[2qI_D\left(1+\dfrac{f_c}{f}\right)+\dfrac{4kT}{R}\right]}{1+(f/f_1)^2},\qquad f_1=\frac{1}{2\pi R_{eq}C}=\frac{1}{2\pi(55.8\ \Omega)(1\ \mathrm{nF})}=2.85\ \mathrm{MHz}.
$$

The pole is set by the diode's small resistance, not by the 20-kΩ resistor. The white level is $R_{eq}^2(2qI_D+4kT/R)=(55.8\ \Omega)^2(1.496\times10^{-22}\ \mathrm{A^2/Hz})=4.65\times10^{-19}\ \mathrm{V^2/Hz}$, so

$$
S_o(f)\approx\frac{4.65\times10^{-19}\left(1+938\ \mathrm{Hz}/f\right)}{1+(f/2.85\ \mathrm{MHz})^2}\ \mathrm{V^2/Hz}.
$$

### Step 4 — SPICE comparison

The deck uses $I_S=10^{-15}$ A, which gives a 0.695-V drop and $I_D=0.4653$ mA, with KF = $3\times10^{-16}$ and AF = 1. The noise analysis reports the output noise referred to $v_o$.

```spice
* grsim-11-03 diode noise with 1000 pF
.model dd d is=1e-15 kf=3e-16 af=1
VCC vcc 0 10 ac 0
R vcc o 20k
D1 o 0 dd
C o 0 1000p
.noise v(o) VCC dec 50 1 10meg
.end
```

| $f$ | Hand (V²/Hz) | ngspice (V²/Hz) |
|---|---|---|
| 1 Hz | $4.34\times10^{-16}$ | $4.29\times10^{-16}$ |
| 100 Hz | $4.80\times10^{-18}$ | $4.75\times10^{-18}$ |
| 938 Hz | $9.19\times10^{-19}$ | $9.10\times10^{-19}$ |
| 10 kHz | $5.09\times10^{-19}$ | $5.04\times10^{-19}$ |
| 100 kHz | $4.69\times10^{-19}$ | $4.65\times10^{-19}$ |
| 1 MHz | $4.15\times10^{-19}$ | $4.11\times10^{-19}$ |
| 2.85 MHz | $2.30\times10^{-19}$ | $2.29\times10^{-19}$ |
| 10 MHz | $3.51\times10^{-20}$ | $3.51\times10^{-20}$ |

![Output noise-voltage spectral density versus frequency on log-log axes from 1 Hz to 10 MHz: slope −1 from 4.3×10⁻¹⁶ V²/Hz at 1 Hz down to the 938-Hz corner, a flat level of 4.65×10⁻¹⁹ V²/Hz, and slope −2 above 2.85 MHz to 3.5×10⁻²⁰ V²/Hz at 10 MHz; the ngspice points lie on the hand curve](/q/grsim-11-03/solution-noise.svg)

The simulation agrees with the hand result within 1 %. The small difference comes from ngspice's $V_T=25.85$ mV at 27 °C, which makes $r_d$ slightly smaller. On log-log axes the spectrum has:

- slope −1 below the 938-Hz flicker corner;
- a flat shot-noise plateau of $4.65\times10^{-19}\ \mathrm{V^2/Hz}$ (0.68 nV/√Hz);
- slope −2 above the 2.85-MHz pole formed by $C$ and $r_d\parallel R$.
