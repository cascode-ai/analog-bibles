# Detailed solution - G186

Set $v_i=0$, drive the collector with a test voltage $v_x$ and find the current $i_x$ it delivers. With $v_i=0$, $R_S+r_b$ is in parallel with $r_\pi$ between the internal base $b'$ and ground, so the input side reduces to one resistance and $C_\pi$; $C_\mu$ connects $b'$ to the collector, where the $g_m$ source also acts. Since $r_o=\infty$ and $C_{cs}=0$, these are the only paths.

### Step 1 — Small-signal parameters

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta}{g_m}=10.4\ \mathrm{k\Omega}.
$$

From $\omega_T=g_m/(C_\pi+C_\mu)$ with $\omega_T=2\pi(500\ \mathrm{MHz})=3.14\times10^9$ rad/s, $C_\pi+C_\mu=6.12$ pF, so $C_\pi=5.82$ pF. The resistance from $b'$ to ground is

$$
R=(R_S+r_b)\parallel r_\pi=5.3\ \mathrm{k\Omega}\parallel10.4\ \mathrm{k\Omega}=3.51\ \mathrm{k\Omega},\qquad g_mR=67.5 .
$$

### Step 2 — Output admittance

Let $Z_1=R\parallel(1/sC_\pi)$ be the impedance from $b'$ to ground. The test current flows through $C_\mu$ into $Z_1$, so $C_\mu$ and $Z_1$ form a divider:

$$
v_1=v_x\frac{Z_1}{Z_1+1/(sC_\mu)}=v_x\frac{sC_\mu Z_1}{1+sC_\mu Z_1}.
$$

The collector current is the $C_\mu$ current $v_1/Z_1$ plus the controlled source $g_mv_1$:

$$
Y_o=\frac{i_x}{v_x}=\frac{sC_\mu(1+g_mZ_1)}{1+sC_\mu Z_1}.
$$

Substituting $Z_1=R/(1+sRC_\pi)$ and inverting:

$$
Z_o(s)=\frac{1+sR(C_\pi+C_\mu)}{sC_\mu\,(1+g_mR+sRC_\pi)} .
$$

### Step 3 — Equivalent circuit

Dividing out the bracket, $Y_o=sC_\mu\bigl[\tfrac{C_\pi}{C_\pi+C_\mu}+\tfrac{1+g_mR-C_\pi/(C_\pi+C_\mu)}{1+sR(C_\pi+C_\mu)}\bigr]$, which is exactly a capacitor $C_\infty$ in parallel with a series $R_x$–$C_x$ branch:

$$
C_\infty=\frac{C_\mu C_\pi}{C_\pi+C_\mu}=0.285\ \mathrm{pF},\qquad
C_x=C_\mu\Bigl[1+g_mR-\frac{C_\pi}{C_\pi+C_\mu}\Bigr]=20.3\ \mathrm{pF},
$$
$$
R_x=\frac{R(C_\pi+C_\mu)}{C_x}\approx\frac{C_\pi+C_\mu}{g_mC_\mu}=1.06\ \mathrm{k\Omega}.
$$

<!-- diagram: diagram-01.cir -->

The circuit is the collector node to ground through $C_\infty$, and in parallel through $R_x$ in series with $C_x$. At low frequency $C_\infty+C_x=C_\mu(1+g_mR)=20.6$ pF, the Miller-multiplied $C_\mu$. The zero of $Z_o$ at $1/[R(C_\pi+C_\mu)]=4.65\times10^7$ rad/s (7.4 MHz) is where $C_x$ becomes a short and $R_x$ takes over; the pole at $(1+g_mR)/(RC_\pi)=3.35\times10^9$ rad/s (534 MHz) is where $C_\infty$ shunts $R_x$, beyond the plotted range.

### Step 4 — Magnitude from 1 kHz to 100 MHz

| $f$ | 1 kHz | 100 kHz | 1 MHz | 10 MHz | 100 MHz |
|---|---|---|---|---|---|
| $\lvert Z_o\rvert$ | 7.74 MΩ | 77.4 kΩ | 7.81 kΩ | 1.30 kΩ | 1.03 kΩ |

For example, at 1 kHz $|Z_o|\approx1/(2\pi fC_\mu(1+g_mR))=1/[2\pi(1\ \mathrm{kHz})(20.6\ \mathrm{pF})]=7.74$ MΩ.

![Output impedance magnitude falling at −20 dB/decade as a 20.6-pF capacitance, breaking at the 7.4-MHz zero and flattening at about 1.06 kΩ](/q/G186/solution-curves.svg)

On log–log axes $|Z_o|$ falls at −20 dB/decade (a capacitance of 20.6 pF) up to the zero near 7.4 MHz, then bends smoothly to the resistive plateau $R_x\approx1.06$ kΩ, which it holds to 100 MHz (1.03 kΩ there, as the 534-MHz pole begins to act).
