# Detailed solution - A358

In a two-stage op amp the input-referred noise is set by the first stage: the n-channel input pair M1–M2 and the p-channel mirror loads M3–M4, whose noise currents flow into the same nodes as the input signal current. Refer their 1/f and thermal noise to the input, then integrate each density over 1 Hz–100 kHz and add the mean-square values.

### Step 1 — Input-referred density

$$
e_{eq}^2=2e_{n1}^2\Bigl[1+\Bigl(\frac{g_{m3}}{g_{m1}}\Bigr)^2\frac{e_{n3}^2}{e_{n1}^2}\Bigr].
$$

The second stage (M6, M7) and the current sources (M5, M8) are neglected as stated; the second stage is divided by the first-stage gain.

### Step 2 — 1/f noise

With $e_{ni}^2=B/(fW_iL_i)$ and $B=KF/(2C_{ox}K')$:

$$
B_N=\frac{4\times10^{-28}}{2(24.7\times10^{-4})(110\times10^{-6})}=7.36\times10^{-22}\ \mathrm{V^2\cdot m^2},\qquad B_P=2.02\times10^{-22}\ \mathrm{V^2\cdot m^2}.
$$

For M1 ($W_1L_1=3\ \mu\mathrm m^2$):

$$
e_{n1}^2=\frac{7.36\times10^{-22}}{(3\times10^{-12}\ \mathrm{m^2})f}=\frac{2.45\times10^{-10}}f .
$$

Because $g_m^2\propto K'W/L$, the load term reduces to

$$
\Bigl(\frac{g_{m3}}{g_{m1}}\Bigr)^2\frac{e_{n3}^2}{e_{n1}^2}=\frac{K'_PB_P}{K'_NB_N}\Bigl(\frac{L_1}{L_3}\Bigr)^2=\frac{(50)(2.02)}{(110)(7.36)}(1)^2=0.125,
$$
$$
e_{eq}^2(1/f)=2\,\frac{2.45\times10^{-10}}f(1.125)=\frac{5.52\times10^{-10}}f\ \mathrm{V^2/Hz}.
$$

### Step 3 — Thermal noise

With $e_{ni}^2=8kT/(3g_{mi})$ the bracket becomes $1+g_{m3}/g_{m1}$. At 15 µA, $g_m=\sqrt{2K'(W/L)I_D}$ gives

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(3)(15\ \mu\mathrm A)}=99.5\ \mu\mathrm S,\qquad
g_{m3}=\sqrt{2(50\ \mu\mathrm{A/V^2})(15)(15\ \mu\mathrm A)}=150\ \mu\mathrm S,
$$
$$
e_{eq}^2(\text{th})=2\,\frac{8kT}{3g_{m1}}\Bigl(1+\frac{g_{m3}}{g_{m1}}\Bigr)=2(1.11\times10^{-16})(2.51)=5.57\times10^{-16}\ \mathrm{V^2/Hz}\quad(23.6\ \mathrm{nV/\sqrt{Hz}}).
$$

The corner frequency $5.52\times10^{-10}/5.57\times10^{-16}\approx1$ MHz lies above the band, so 1/f noise dominates throughout.

### Step 4 — rms noise over 1 Hz–100 kHz

$$
v_n^2=(5.52\times10^{-10})\ln(10^5)+(5.57\times10^{-16})(10^5)=6.36\times10^{-9}+5.6\times10^{-11}=6.41\times10^{-9}\ \mathrm{V^2},
$$
$$
v_n\approx80\ \mu\mathrm V\ \mathrm{rms}.
$$

The 1/f part alone gives 79.7 µV; dropping the M3/M4 1/f term would give 75.3 µV, so the loads contribute about 11 % of the noise power.
