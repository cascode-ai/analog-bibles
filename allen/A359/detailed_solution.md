# Detailed solution - A359

In a folded cascode, besides the input pair, the current sources M4/M5 and the bottom mirror devices M10/M11 inject their noise currents into the signal path with the same weight as the input signal current. Refer all six devices to the input, using the shortcut that for 1/f noise $g_m^2e^2$ depends only on $KF$, the drain current and $L$, then integrate over 1 Hz–100 kHz.

### Step 1 — Which noise currents reach the output

The drain noise currents of M1 and M2 enter the folding nodes like the signal current. Those of M4 and M5 enter the same folding nodes and pass through the cascodes M6/M7 to the outputs essentially unattenuated. M10's noise current is mirrored to the output by M10–M11, and M11's flows there directly. The cascodes M6–M9 and the tail M3 are neglected as stated (cascodes are source-degenerated; the tail is common-mode). Dividing by $g_{m1}^2$:

$$
e_{eq}^2=2e_{n1}^2\Bigl[1+\frac{g_{m4}^2e_{n4}^2}{g_{m1}^2e_{n1}^2}+\frac{g_{m10}^2e_{n10}^2}{g_{m1}^2e_{n1}^2}\Bigr].
$$

### Step 2 — 1/f noise

With $e^2=KF/(2fC_{ox}WLK')$ and $g_m^2=2K'(W/L)I_D$,

$$
g_m^2e^2=\frac{KF\cdot I_D}{fC_{ox}L^2},
$$

so with equal $L$ the ratios depend only on $KF\cdot I_D$:

$$
\frac{g_{m4}^2e_{n4}^2}{g_{m1}^2e_{n1}^2}=\frac{(0.5)(125)}{(4)(50)}=0.3125,\qquad
\frac{g_{m10}^2e_{n10}^2}{g_{m1}^2e_{n1}^2}=\frac{75}{50}=1.5,
$$

and the bracket is 2.81. For M1 ($W=16.5\ \mu$m, $L=0.5\ \mu$m):

$$
e_{n1}^2=\frac{4\times10^{-28}}{2(24.7\times10^{-4})(16.5\ \mu\mathrm m)(0.5\ \mu\mathrm m)(120\ \mu\mathrm{A/V^2})f}=\frac{8.18\times10^{-11}}f,
$$
$$
e_{eq}^2(1/f)=2\,\frac{8.18\times10^{-11}}f(2.81)=\frac{4.60\times10^{-10}}f\ \mathrm{V^2/Hz}.
$$

### Step 3 — Thermal noise

With $e^2=8kT/(3g_m)$ the ratios become $g_{m4}/g_{m1}$ and $g_{m10}/g_{m1}$. From $g_m=\sqrt{2K'(W/L)I_D}$:

| Device | $K'$ (µA/V²) | W/L | $I_D$ | $g_m$ |
|---|---|---|---|---|
| M1 | 120 | 33 | 50 µA | 629 µS |
| M4 | 25 | 160 | 125 µA | 1000 µS |
| M10 | 120 | 20 | 75 µA | 600 µS |

$$
e_{eq}^2(\text{th})=2\,\frac{8kT}{3g_{m1}}\Bigl(1+\frac{g_{m4}}{g_{m1}}+\frac{g_{m10}}{g_{m1}}\Bigr)=2(1.75\times10^{-17})(3.54)=1.24\times10^{-16}\ \mathrm{V^2/Hz}\quad(11\ \mathrm{nV/\sqrt{Hz}}).
$$

The corner frequency is $4.60\times10^{-10}/1.24\times10^{-16}\approx3.7$ MHz, far above the band.

### Step 4 — rms noise over 1 Hz–100 kHz

$$
v_n^2=(4.60\times10^{-10})\ln(10^5)+(1.24\times10^{-16})(10^5)=5.30\times10^{-9}+1.2\times10^{-11}\ \mathrm{V^2},
$$
$$
v_n\approx73\ \mu\mathrm V\ \mathrm{rms}.
$$

The input pair alone would give 43 µV. The n-channel mirror M10/M11 is the largest load contributor, because it is n-channel (large $KF$) and carries more current than the input devices.
