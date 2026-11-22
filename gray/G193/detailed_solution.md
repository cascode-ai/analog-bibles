# Detailed solution - G193

Use the hybrid-π model with the base at ac ground through $r_b$ and the collector shorted ($R_L=0$). Because the input is an ideal current source, KCL at the emitter alone fixes the base-emitter voltage, and the collector current follows from the controlled source. With $R_L=0$, $C_\mu$ cannot form the usual output pole ($1/R_LC_\mu\to\infty$), so $C_\pi$ sets the bandwidth.

### Step 1 — Small-signal parameters

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=5.2\ \mathrm{k\Omega},\qquad
z_\pi=r_\pi\parallel\frac1{sC_\pi}.
$$

### Step 2 — Current gain

Let $v_1=v_{b'}-v_e$. The signal current $i_i$ enters the emitter, and the controlled source $g_mv_1$ also flows into the emitter (from the collector); the sum leaves through $z_\pi$ toward the internal base:

$$
i_i+g_mv_1=\frac{v_e-v_{b'}}{z_\pi}=-\frac{v_1}{z_\pi}
\;\Rightarrow\;
i_i=-v_1\Bigl(g_m+\frac1{z_\pi}\Bigr).
$$

This relation does not involve $r_b$, because all the current in $z_\pi$ must return through the base. The collector delivers $i_o=-g_mv_1$ to the load, so

$$
\frac{i_o}{i_i}=\frac{g_mz_\pi}{1+g_mz_\pi}
=\frac{\beta_0}{\beta_0+1+sr_\pi C_\pi}
=\frac{\beta_0}{\beta_0+1}\cdot\frac1{1+s\dfrac{C_\pi r_\pi}{\beta_0+1}}
\approx\frac{\alpha_0}{1+sC_\pi/g_m}.
$$

### Step 3 — Low-frequency value and −3-dB frequency

The low-frequency gain is $\alpha_0=\beta_0/(\beta_0+1)=100/101=0.990$. The single pole is at

$$
\omega_{-3\text{dB}}=\frac{\beta_0+1}{r_\pi C_\pi}=\frac{g_m+1/r_\pi}{C_\pi}=\frac{19.2\ \mathrm{mA/V}+0.19\ \mathrm{mA/V}}{10\ \mathrm{pF}}=1.94\times10^9\ \mathrm{rad/s},
$$
$$
f_{-3\text{dB}}=\frac{\omega_{-3\text{dB}}}{2\pi}=309\ \mathrm{MHz}
$$

(306 MHz with the approximation $g_m/C_\pi$). The common-base stage reaches about $f_T$, far above $f_\beta=f_T/\beta_0$, because the emitter input sees only the low resistance $1/g_m$ in parallel with $C_\pi$.

### Step 4 — Refinement including the $C_\mu$ path

If the internal base is not taken as a perfect ac ground, $C_\mu$ connects it to the shorted collector, and the current $sC_\mu v_{b'}$ flows into the collector node and subtracts from the load current: $i_o=-g_mv_1-sC_\mu v_{b'}$, with the base node loaded by $r_b\parallel(1/sC_\mu)$. Solving the two node equations numerically gives a −3-dB frequency of about 257 MHz. The simple model of Step 3, about 309 MHz, is the usual answer; the refinement shows that $r_b$ and $C_\mu$ lower it moderately.
