# Detailed solution - A356

Refer the noise of the input pair M1–M2 and of the mirror loads M3–M4 to the input, separately for the 1/f and thermal components, then find the corner frequency, integrate the density over 1 Hz–100 kHz, and compare the rms noise with the rms value of the maximum signal. Doing this for both the original and the modified input devices shows how much the change actually helps.

### Step 1 — Input-referred density of the first stage

Each device's gate-referred noise $e_{ni}^2$ produces the drain current $g_{mi}^2e_{ni}^2$. The load currents flow into the same nodes as the input signal current, so dividing by $g_{m1}^2$ refers them to the input; with two identical halves,

$$
e_{eq}^2=2e_{n1}^2\Bigl[1+\Bigl(\frac{g_{m3}}{g_{m1}}\Bigr)^2\frac{e_{n3}^2}{e_{n1}^2}\Bigr].
$$

### Step 2 — 1/f noise

Write the 1/f density as $e_{ni}^2=B/(fW_iL_i)$ with $B=KF/(2C_{ox}K')$:

$$
B_N=\frac{4\times10^{-28}}{2(24.7\times10^{-4})(110\times10^{-6})}=7.36\times10^{-22}\ \mathrm{V^2\cdot m^2},\qquad
B_P=2.02\times10^{-22}\ \mathrm{V^2\cdot m^2}.
$$

Since $g_{m}^2\propto K'W/L$, the bracket becomes $1+(K'_NB_N/K'_PB_P)(L_1/L_3)^2=1+8.02\,(L_1/L_3)^2$. For the modified design ($W_1L_1=500\ \mu\mathrm m\times0.5\ \mu\mathrm m=250\ \mu\mathrm m^2$, $L_3=20\ \mu$m):

$$
e_{n1}^2=\frac{2.02\times10^{-22}}{(250\times10^{-12}\ \mathrm{m^2})f}=\frac{8.10\times10^{-13}}f,\qquad
\text{bracket}=1+8.02(0.025)^2=1.005,
$$
$$
e_{eq}^2(1/f)=2\,\frac{8.10\times10^{-13}}f(1.005)=\frac{1.63\times10^{-12}}f\ \mathrm{V^2/Hz}.
$$

The long loads (L = 20 µm) make their 1/f contribution negligible.

### Step 3 — Thermal noise

With $e_{ni}^2=8kT/(3g_{mi})$ the bracket becomes $1+g_{m3}/g_{m1}$. Using $g_m=\sqrt{2K'(W/L)I_D}$ at 50 µA:

$$
g_{m1}=\sqrt{2(50\ \mu\mathrm{A/V^2})(1000)(50\ \mu\mathrm A)}=2.24\ \mathrm{mS},\qquad g_{m3}=\sqrt{2(110\ \mu\mathrm{A/V^2})(5)(50\ \mu\mathrm A)}=0.235\ \mathrm{mS},
$$
$$
e_{eq}^2(\text{th})=2\,\frac{8kT}{3g_{m1}}\Bigl(1+\frac{g_{m3}}{g_{m1}}\Bigr)=2(4.94\times10^{-18})(1.105)=1.09\times10^{-17}\ \mathrm{V^2/Hz}\quad(3.3\ \mathrm{nV/\sqrt{Hz}}).
$$

### Step 4 — Corner frequency, rms noise and dynamic range

The corner is where the two densities are equal:

$$
f_c=\frac{1.63\times10^{-12}}{1.09\times10^{-17}}\approx149\ \mathrm{kHz}.
$$

Integrating over 1 Hz–100 kHz, the 1/f part gives a logarithm and the thermal part is flat:

$$
v_n^2=(1.63\times10^{-12})\ln(10^5)+(1.09\times10^{-17})(10^5)=1.87\times10^{-11}+1.1\times10^{-12}=1.98\times10^{-11}\ \mathrm{V^2},
$$

so $v_n=4.45\ \mu$V (4.33 µV from the 1/f part alone). A 1-V peak-to-peak sinusoid has an rms value of $0.5/\sqrt2=0.354$ V:

$$
DR=\frac{0.354\ \mathrm V}{4.45\ \mu\mathrm V}=7.9\times10^4\quad(98\ \mathrm{dB}).
$$

### Step 5 — Comparison with the original design

The same formulas for $W_1/L_1=100\ \mu\mathrm m/1\ \mu\mathrm m$:

| Quantity | Original (100/1) | Modified (500/0.5) |
|---|---|---|
| $e_{eq}^2(1/f)$ (V²/Hz) | $4.13\times10^{-12}/f$ | $1.63\times10^{-12}/f$ |
| $e_{eq}^2$(thermal) (V²/Hz) | $4.16\times10^{-17}$ | $1.09\times10^{-17}$ |
| $f_c$ | 99 kHz | 149 kHz |
| rms noise, 1 Hz–100 kHz | 7.2 µV | 4.45 µV |
| Dynamic range | 94 dB | 98 dB |

The modified design lowers the rms noise only by a factor of about 1.6 (2.5 in mean-square power), not by 10. The 1/f density, which dominates the band, depends on the gate area $W_1L_1$, and that grows only from 100 to 250 µm². Reducing the rms noise by 10 would require about 100 times the gate area of the input devices (10 times for a 10-fold reduction in noise power).
