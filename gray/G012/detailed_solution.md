# Detailed solution - G012

With the output shorted, the hybrid-π model reduces to $r_\pi\parallel(C_\pi+C_\mu)$ at the input driving $g_mv_1$, so the current gain is a single-pole function of frequency. Compute $C_\pi$, $C_\mu$ and $g_m$ at each bias point, find $f_T$ and $f_\beta=f_T/\beta_0$, and draw the single-pole curve on log–log axes.

### Step 1 — Short-circuit current gain

With the collector shorted to the emitter for ac, $C_\mu$ appears from base to ground in parallel with $C_\pi$, and the collector current is $g_mv_1$ (the feedforward current through $C_\mu$ is negligible below $f_T$). Thus

$$
v_1=\frac{i_b\,r_\pi}{1+j\omega r_\pi(C_\pi+C_\mu)},\qquad
\beta(j\omega)=\frac{i_c}{i_b}=\frac{\beta_0}{1+j\omega/\omega_\beta},\qquad
\omega_\beta=\frac1{r_\pi(C_\pi+C_\mu)}.
$$

Well above $\omega_\beta$, $|\beta|\approx\beta_0\omega_\beta/\omega$, which reaches unity at

$$
\omega_T=\beta_0\omega_\beta=\frac{g_m}{C_\pi+C_\mu},\qquad f_T=\frac{g_m}{2\pi(C_\pi+C_\mu)},\qquad f_\beta=\frac{f_T}{\beta_0}.
$$

### Step 2 — Element values at each bias point

$g_m=I_C/V_T$; $C_\pi=\tau_Fg_m+C_{je}$ is the base-charging capacitance plus the emitter–base depletion capacitance $2C_{je0}=40$ fF; $C_\mu=C_{\mu0}/(1+V_{CB}/\psi_0)^{1/2}$. For case 1:

$$
\begin{aligned}
g_m&=\frac{0.2\ \mathrm{mA}}{26\ \mathrm{mV}}=7.69\ \mathrm{mA/V},\qquad
C_\pi=(15\ \mathrm{ps})(7.69\ \mathrm{mA/V})+40\ \mathrm{fF}=0.155\ \mathrm{pF},\\
C_\mu&=\frac{10\ \mathrm{fF}}{\sqrt{1+3\ \mathrm V/0.55\ \mathrm V}}=3.9\ \mathrm{fF},\qquad
f_T=\frac{7.69\ \mathrm{mA/V}}{2\pi(0.159\ \mathrm{pF})}=7.68\ \mathrm{GHz}.
\end{aligned}
$$

| Case | $g_m$ (mA/V) | $C_\pi$ (pF) | $C_\mu$ (fF) | $f_T$ (GHz) | $f_\beta$ (MHz) |
|---|---|---|---|---|---|
| (1) 0.2 mA, 3 V | 7.69 | 0.155 | 3.9 | 7.68 | 76.8 |
| (2) 1 mA, 1 V | 38.5 | 0.617 | 6.0 | 9.83 | 98.3 |

Equivalently, $1/(2\pi f_T)=\tau_F+(C_{je}+C_\mu)/g_m$: $15+5.7=20.7$ ps in case 1 and $15+1.2=16.2$ ps in case 2. At the higher current the depletion-capacitance term shrinks and $\tau_F$ dominates, so $f_T$ is higher.

### Step 3 — The frequency response

$|\beta(jf)|=\beta_0/\sqrt{1+(f/f_\beta)^2}$. Representative values:

| $f$ (MHz) | 0.1–1 | 10 | $f_\beta$ | 100 | 1000 |
|---|---|---|---|---|---|
| Case 1 | 100 | 99.2 | 70.7 | 60.9 | 7.66 |
| Case 2 | 100 | 99.5 | 70.7 | 70.1 | 9.78 |

![Log–log plot of the current-gain magnitude: flat at 100, −3 dB at 77 and 98 MHz, falling at −20 dB/decade to about 7.7 and 9.8 at 1000 MHz](/q/G012/solution-curves.svg)

Both curves are flat at $\beta_0=100$ up to about 10 MHz, pass 70.7 at $f_\beta$, and then fall with slope −1 on the log–log axes (−20 dB/decade). Neither reaches unity within 1000 MHz; extending the −1 slope gives $|\beta|=1$ at $f_T=7.7$ GHz and 9.8 GHz.
