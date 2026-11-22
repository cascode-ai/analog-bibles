# Detailed solution - G187

Derive the output impedance once for a general source resistance, by driving the collector with a test voltage $v_x$ ($v_i=0$), then specialize to $R_S=0$ and $R_S=\infty$. With $v_i=0$, $R_S+r_b$ appears in parallel with $r_\pi$ between the internal base $b'$ and ground; $C_\mu$ connects $b'$ to the collector, where the $g_m$ source also acts. Since $r_o=\infty$ and $C_{cs}=0$, these are the only paths.

### Step 1 — Small-signal parameters

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta}{g_m}=10.4\ \mathrm{k\Omega},
$$

and from $\omega_T=g_m/(C_\pi+C_\mu)=2\pi(500\ \mathrm{MHz})$, $C_\pi+C_\mu=6.12$ pF, so $C_\pi=5.82$ pF.

### Step 2 — General output impedance and equivalent circuit

Let $R=(R_S+r_b)\parallel r_\pi$ and $Z_1=R\parallel(1/sC_\pi)$. The test current flows through $C_\mu$ into $Z_1$, giving $v_1=v_x\,sC_\mu Z_1/(1+sC_\mu Z_1)$ at $b'$; the collector current is $v_1/Z_1+g_mv_1$. Hence

$$
Y_o=\frac{sC_\mu(1+g_mZ_1)}{1+sC_\mu Z_1},\qquad
Z_o(s)=\frac{1+sR(C_\pi+C_\mu)}{sC_\mu\,(1+g_mR+sRC_\pi)} .
$$

Splitting $Y_o=sC_\mu\bigl[\tfrac{C_\pi}{C_\pi+C_\mu}+\tfrac{1+g_mR-C_\pi/(C_\pi+C_\mu)}{1+sR(C_\pi+C_\mu)}\bigr]$ shows that $Z_o$ is exactly a capacitor $C_\infty$ in parallel with a series $R_x$–$C_x$ branch:

$$
C_\infty=\frac{C_\mu C_\pi}{C_\pi+C_\mu}=0.285\ \mathrm{pF},\qquad
C_x=C_\mu\Bigl[1+g_mR-\frac{C_\pi}{C_\pi+C_\mu}\Bigr],\qquad
R_x=\frac{R(C_\pi+C_\mu)}{C_x}.
$$

<!-- diagram: diagram-01.cir -->

The collector node connects to ground through $C_\infty$, and in parallel through $R_x$ in series with $C_x$. At low frequency the total capacitance is $C_\mu(1+g_mR)$ (Miller-multiplied $C_\mu$); the zero of $Z_o$ is at $1/[R(C_\pi+C_\mu)]$, above which $R_x$ dominates; the pole at $(1+g_mR)/(RC_\pi)$ lies above 500 MHz in both cases. Only $R$ changes between the cases.

### Step 3 — Case (1): $R_S=0$

$R=r_b\parallel r_\pi=300\ \Omega\parallel10.4\ \mathrm{k\Omega}=292\ \Omega$ and $g_mR=5.61$:

$$
C_\mu(1+g_mR)=(0.3\ \mathrm{pF})(6.61)=1.98\ \mathrm{pF},\qquad C_x=1.70\ \mathrm{pF},\qquad R_x=1.05\ \mathrm{k\Omega},
$$

zero at $1/[(292\ \Omega)(6.12\ \mathrm{pF})]=5.60\times10^8$ rad/s (89 MHz), pole at $3.9\times10^9$ rad/s (620 MHz).

### Step 4 — Case (2): $R_S=\infty$

$R=r_\pi=10.4$ kΩ and $g_mR=\beta=200$:

$$
C_\mu(1+\beta)=(0.3\ \mathrm{pF})(201)=60.3\ \mathrm{pF},\qquad C_x=60.0\ \mathrm{pF},\qquad R_x=1.06\ \mathrm{k\Omega},
$$

zero at $1/[r_\pi(C_\pi+C_\mu)]=1.57\times10^7$ rad/s (2.5 MHz), pole at $(1+\beta)/(r_\pi C_\pi)=3.3\times10^9$ rad/s (528 MHz).

### Step 5 — Magnitude plots

| $f$ | 1 kHz | 100 kHz | 1 MHz | 10 MHz | 100 MHz |
|---|---|---|---|---|---|
| $\lvert Z_o\rvert$, $R_S=0$ | 80.3 MΩ | 803 kΩ | 80.3 kΩ | 8.08 kΩ | 1.19 kΩ |
| $\lvert Z_o\rvert$, $R_S=\infty$ | 2.64 MΩ | 26.4 kΩ | 2.84 kΩ | 1.09 kΩ | 1.04 kΩ |

For example, at 1 kHz with $R_S=0$, $|Z_o|\approx1/[2\pi(1\ \mathrm{kHz})(1.98\ \mathrm{pF})]=80.3$ MΩ.

![Output impedance magnitudes for RS = 0 and RS = infinity: capacitive lines of 1.98 pF and 60.3 pF breaking at 89 MHz and 2.5 MHz to a common 1.06-kΩ plateau](/q/G187/solution-curves.svg)

Both curves fall at −20 dB/decade at low frequency and approach the same plateau, $R_x\approx(C_\pi+C_\mu)/(g_mC_\mu)\approx1.06$ kΩ, which does not depend on $R_S$. For $R_S=0$ the Miller capacitance is small (1.98 pF), so the curve is 30 times higher and only begins to flatten near 89 MHz (1.19 kΩ at 100 MHz). For $R_S=\infty$ the full $\beta$ multiplies $C_\mu$ (60.3 pF), and the curve reaches the plateau above about 2.5 MHz. With $r_o=\infty$, neither case has a resistive limit at low frequency.
