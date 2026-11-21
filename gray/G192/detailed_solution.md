# Detailed solution - G192

Drive the source terminal with a test voltage $v_x$, with the gate returned to ground through $R_S$ and the drain at ac ground. With $\gamma=0$ there is no $g_{mb}$ generator, so the only elements are $g_m$, $C_{gs}$ and $R_S$. The resulting impedance has one zero and one pole; its magnitude is plotted for an assumed $C_{gs}$ because the value is not given.

### Step 1 — Output impedance

$C_{gs}$ and $R_S$ divide the test voltage, so $v_{gs}=v_g-v_x=-v_x/(1+sR_SC_{gs})$. KCL at the source, with the channel current $g_mv_{gs}$ flowing from drain to source and $sC_{gs}v_{gs}$ flowing from gate to source:

$$
i_x=-(g_m+sC_{gs})v_{gs}=v_x\,\frac{g_m+sC_{gs}}{1+sR_SC_{gs}},
\qquad
z_o(s)=\frac{v_x}{i_x}=\frac1{g_m}\cdot\frac{1+sR_SC_{gs}}{1+sC_{gs}/g_m}.
$$

### Step 2 — Levels, break frequencies and slope

- Low frequency: $z_o=1/g_m=1/(0.3\ \mathrm{mA/V})=3.33$ kΩ (70.5 dBΩ).
- Zero: $\omega_z=1/(R_SC_{gs})$, i.e. $f_z=\dfrac1{2\pi(1\ \mathrm{M\Omega})C_{gs}}=\dfrac{0.159}{C_{gs}[\mathrm{pF}]}$ MHz.
- Pole: $\omega_p=g_m/C_{gs}$ (about $\omega_T$ when $C_{gs}$ dominates), i.e. $f_p=\dfrac{0.3\ \mathrm{mA/V}}{2\pi C_{gs}}=\dfrac{47.7}{C_{gs}[\mathrm{pF}]}$ MHz.
- High frequency: $z_o\to(1/g_m)(R_SC_{gs})/(C_{gs}/g_m)=R_S=1$ MΩ (120 dBΩ).

Since $R_S\gg1/g_m$, the zero lies below the pole by the factor $\omega_p/\omega_z=g_mR_S=300$, so $|z_o|$ rises at +20 dB/decade between them: the impedance is inductive. Splitting the admittance as $Y_o=1/R_S+(g_m-1/R_S)/(1+sR_SC_{gs})$ gives the equivalent circuit $R_2\parallel(R_1+sL)$ with

$$
R_2=R_S=1\ \mathrm{M\Omega},\quad R_1=\frac1{g_m-1/R_S}=3.34\ \mathrm{k\Omega},\quad
L=\frac{R_SC_{gs}}{g_m-1/R_S}=(3.34\times10^{9}\ \Omega^2)\,C_{gs}\approx\frac{R_SC_{gs}}{g_m}.
$$

### Step 3 — Magnitude plot for an example $C_{gs}$

Taking $C_{gs}=0.1$ pF as an example: $f_z=1.6$ MHz, $f_p=477$ MHz and $L=0.33$ mH.

![Output impedance magnitude for an assumed Cgs of 0.1 pF: flat at 3.33 kΩ, rising at +20 dB/decade from 1.6 MHz to 477 MHz, flat at 1 MΩ up to 10 GHz](/q/G192/solution-curves.svg)

$|z_o|$ is flat at 3.33 kΩ up to about 1 MHz, rises at +20 dB/decade between the zero at 1.6 MHz and the pole at 477 MHz (three decades in impedance over the same 2.5 decades in frequency, the factor 300), and is flat at 1 MΩ from about 1 GHz to 10 GHz. Both corners are smooth: at each break the magnitude is $\sqrt2$ (3 dB) away from the asymptotes. For another $C_{gs}$ the whole curve shifts horizontally in proportion to $1/C_{gs}$, while the two levels and the ratio $f_p/f_z=300$ stay the same.
