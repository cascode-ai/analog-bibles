# Detailed solution - G194

Use the hybrid-π model with $r_b$ from the internal base $b'$ to ac ground, the collector at ac ground ($R_L=0$) and $r_o=\infty$. For the input impedance, drive the emitter with a test source; for the output impedance, drive the collector with the emitter's ideal current source set to zero (open). Each impedance is then rewritten as a simple RLC network.

### Step 1 — Small-signal parameters

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=5.2\ \mathrm{k\Omega},\qquad
z_\pi=\frac{r_\pi}{1+sr_\pi C_\pi}.
$$

### Step 2 — Input impedance at the emitter

Looking into the emitter, the circuit is an emitter follower driven from the source resistance $r_b$. Neglecting $C_\mu$ (it connects $b'$ to the grounded collector and only matters near $1/(r_bC_\mu)$, i.e. GHz), a test current $i_x$ into the emitter flows through $z_\pi$ and $r_b$ while the controlled source adds $g_mv_1$:

$$
z_i=\frac{z_\pi+r_b}{1+g_mz_\pi}
=\frac{r_\pi+r_b+sr_br_\pi C_\pi}{\beta_0+1+sr_\pi C_\pi}.
$$

- Low frequency: $z_i(0)=\dfrac{r_\pi+r_b}{\beta_0+1}=\dfrac{5.4\ \mathrm{k\Omega}}{101}=53.5\ \Omega$.
- High frequency: $z_i(\infty)=r_b=200\ \Omega$.
- Zero: $\dfrac{r_\pi+r_b}{r_br_\pi C_\pi}=5.19\times10^8$ rad/s (82.6 MHz); pole: $\dfrac{\beta_0+1}{r_\pi C_\pi}=1.94\times10^9$ rad/s (309 MHz).

The zero lies below the pole, so $|z_i|$ rises with frequency: the impedance is inductive.

### Step 3 — Input equivalent circuit

Write $Y_i=1/z_i$ and subtract the high-frequency conductance $1/r_b$:

$$
Y_i-\frac1{r_b}=\frac{\beta_0r_b-r_\pi}{r_b\,(r_\pi+r_b+sr_br_\pi C_\pi)}=\frac1{R_1+sL},
$$

so the network is $R_2$ in parallel with the series $R_1$–$L$ branch:

$$
R_2=r_b=200\ \Omega,\qquad
R_1=\frac{r_b(r_\pi+r_b)}{\beta_0r_b-r_\pi}=\frac{(200)(5400)}{14\,800}\ \Omega=73.0\ \Omega,\qquad
L=\frac{r_b^2r_\pi C_\pi}{\beta_0r_b-r_\pi}=141\ \mathrm{nH}.
$$

<!-- diagram: diagram-01.cir -->

The emitter node goes to ground through $R_2$, and in parallel through $R_1$ in series with $L$. Check: $R_1\parallel R_2=53.5\ \Omega=z_i(0)$. (The common approximations $R_1\approx1/g_m+r_b/\beta_0=54\ \Omega$ and $L\approx C_\pi r_\pi r_b/\beta_0=104$ nH assume $r_b\gg R_1$, which is not well satisfied here.)

### Step 4 — Output impedance at the collector

With the emitter driven by an ideal current source that is set to zero, KCL at the emitter gives $g_mv_1+v_1/z_\pi=0$, so $v_1=0$: the $g_m$ generator carries no signal and $z_\pi$ carries no current. A test voltage at the collector then drives current only through $C_\mu$ into $b'$ and through $r_b$ to ground:

$$
z_o=r_b+\frac1{sC_\mu},
$$

a 0.3-pF capacitor in series with 200 Ω, with infinite resistance at dc because $r_o=\infty$.

<!-- diagram: diagram-02.cir -->

The collector connects through $C_\mu$ to the internal base node, which goes to ground through $r_b$.

### Step 5 — Magnitude sketches

| $f$ | 100 kHz | 1 MHz | 10 MHz | 30 MHz | 82.6 MHz | 100 MHz |
|---|---|---|---|---|---|---|
| $\lvert z_i\rvert$ | 53.5 Ω | 53.5 Ω | 53.8 Ω | 56.6 Ω | 73.0 Ω | 79.9 Ω |
| $\lvert z_o\rvert$ | 5.31 MΩ | 531 kΩ | 53.1 kΩ | 17.7 kΩ | 6.42 kΩ | 5.31 kΩ |

For example, $|z_o|$ at 100 kHz is $1/[2\pi(100\ \mathrm{kHz})(0.3\ \mathrm{pF})]=5.31$ MΩ.

![Input impedance magnitude: flat at 53.5 Ω, rising inductively above about 20 MHz to 80 Ω at 100 MHz, toward the 200-Ω limit](/q/G194/solution-curves.svg)

$|z_i|$ is flat at 53.5 Ω (about $1/g_m$) up to roughly 20 MHz, then rises as the inductive branch takes over, reaching about 80 Ω at 100 MHz; it would level off at $r_b=200\ \Omega$ only well above the 309-MHz pole.

![Output impedance magnitude: a −20 dB/decade line from 5.3 MΩ at 100 kHz to 5.3 kΩ at 100 MHz](/q/G194/solution-output.svg)

$|z_o|$ is purely capacitive over the range, falling at −20 dB/decade from 5.3 MΩ to 5.3 kΩ; $r_b$ becomes visible only above $1/(2\pi r_bC_\mu)\approx2.7$ GHz.
