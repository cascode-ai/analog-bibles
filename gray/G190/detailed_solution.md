# Detailed solution - G190

Use the hybrid-π model with $C_\mu=0$ and $r_o=\infty$, so the only capacitor is $C_\pi$ and the gain has one pole and one zero. The pnp device has the same small-signal model as an npn with $|I_C|$; the follower's base sees $R_S'=R_S+r_b$ in series with the source.

### Step 1 — Small-signal parameters

$$
g_m=\frac{|I_C|}{V_T}=\frac{0.3\ \mathrm{mA}}{26\ \mathrm{mV}}=11.5\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta}{g_m}=4.33\ \mathrm{k\Omega},
$$
$$
C_\pi=\frac{g_m}{\omega_T}=\frac{11.5\ \mathrm{mA/V}}{2\pi(4\ \mathrm{MHz})}=459\ \mathrm{pF}\quad(C_\mu=0),\qquad R_S'=R_S+r_b=450\ \Omega .
$$

### Step 2 — Transfer function

Let $Z_\pi=r_\pi\parallel(1/sC_\pi)$. The base current $i_b=(v_i-v_o)/(R_S'+Z_\pi)$ produces $v_\pi=i_bZ_\pi$, and KCL at the emitter gives $i_b+g_mv_\pi=v_o/R_E$:

$$
\frac{v_o}{v_i}=\frac{R_E(1+g_mZ_\pi)}{R_S'+Z_\pi+R_E(1+g_mZ_\pi)} .
$$

Substituting $Z_\pi=r_\pi/(1+sr_\pi C_\pi)$ and clearing fractions,

$$
\frac{v_o}{v_i}=\frac{R_E\bigl(1+g_mr_\pi+sr_\pi C_\pi\bigr)}{R_S'+R_E+r_\pi(1+g_mR_E)+s(R_S'+R_E)r_\pi C_\pi}
=A_0\,\frac{1+s/\omega_z}{1+s/\omega_p}.
$$

### Step 3 — Gain, zero and pole

At $s=0$:

$$
A_0=\frac{g_mR_E+R_E/r_\pi}{1+g_mR_E+(R_S'+R_E)/r_\pi}=\frac{46.15+0.92}{1+46.15+1.03}=0.977\quad(-0.20\ \mathrm{dB}).
$$

The zero is where $1+g_mZ_\pi=0$, i.e. the base-emitter impedance carries no net current toward the emitter:

$$
\omega_z=\frac{g_m+1/r_\pi}{C_\pi}=2.56\times10^7\ \mathrm{rad/s}\quad(4.08\ \mathrm{MHz}\approx f_T).
$$

The pole is set by $C_\pi$ and the resistance it sees, $R_1=r_\pi\parallel\dfrac{R_S'+R_E}{1+g_mR_E}=4.33\ \mathrm{k\Omega}\parallel94.4\ \Omega=92.4\ \Omega$:

$$
\omega_p=\frac1{R_1C_\pi}=2.36\times10^7\ \mathrm{rad/s}\quad(3.75\ \mathrm{MHz}).
$$

Hence

$$
\frac{v_o}{v_i}(s)=0.977\,\frac{1+s/(2.56\times10^7\ \mathrm{rad/s})}{1+s/(2.36\times10^7\ \mathrm{rad/s})} .
$$

As $s\to\infty$, $C_\pi$ shorts the base-emitter junction and the gain tends to the resistive divider $A_0\omega_p/\omega_z=R_E/(R_E+R_S+r_b)=0.899$ (−0.93 dB).

### Step 4 — Magnitude from 10 kHz to 20 MHz

| $f$ | 10 kHz | 1 MHz | 3 MHz | 4 MHz | 10 MHz | 20 MHz |
|---|---|---|---|---|---|---|
| $\lvert v_o/v_i\rvert$ (dB) | −0.20 | −0.25 | −0.47 | −0.57 | −0.83 | −0.90 |

![Gain magnitude in dB: flat at −0.20 dB, stepping down by about 0.7 dB between the 3.75-MHz pole and 4.08-MHz zero toward −0.93 dB](/q/G190/solution-curves.svg)

The magnitude is flat at −0.20 dB to about 1 MHz, steps down between roughly 2 and 10 MHz, and reaches −0.90 dB at 20 MHz, approaching −0.93 dB. The whole change is only about 0.7 dB and the phase dips to only about −2.4° near 4 MHz, because the pole and zero nearly coincide. There is no −3-dB frequency in this range: although $f_T$ is only 4 MHz, the follower stays wideband since at high frequency $C_\pi$ simply connects the base to the emitter.
