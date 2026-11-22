# Detailed solution - A357

With the devices interchanged, the input pair is n-channel and the mirror loads are p-channel. Refer the noise of M1–M4 to the input with the usual first-stage formula, separately for 1/f and thermal noise, using the n-channel constants for the input devices, then find the corner and integrate over the band.

### Step 1 — Input-referred density

The load noise currents flow into the same nodes as the input signal current, so

$$
e_{eq}^2=2e_{n1}^2\Bigl[1+\Bigl(\frac{g_{m3}}{g_{m1}}\Bigr)^2\frac{e_{n3}^2}{e_{n1}^2}\Bigr].
$$

### Step 2 — 1/f noise

Write $e_{ni}^2=B/(fW_iL_i)$ with $B=KF/(2C_{ox}K')$, so $B_N=7.36\times10^{-22}$ and $B_P=2.02\times10^{-22}\ \mathrm{V^2\cdot m^2}$. For the n-channel input ($W_1L_1=100\ \mu\mathrm m^2$):

$$
e_{n1}^2=\frac{7.36\times10^{-22}}{(100\times10^{-12}\ \mathrm{m^2})f}=\frac{7.36\times10^{-12}}f .
$$

Since $g_m^2\propto K'W/L$, the load term is $(K'_PB_P/K'_NB_N)(L_1/L_3)^2=0.125\,(1/20)^2=3.1\times10^{-4}$, so

$$
e_{eq}^2(1/f)=2\,\frac{7.36\times10^{-12}}f(1.0003)=\frac{1.47\times10^{-11}}f\ \mathrm{V^2/Hz}.
$$

The long p-channel loads contribute practically nothing.

### Step 3 — Thermal noise

With $e_{ni}^2=8kT/(3g_{mi})$ the bracket is $1+g_{m3}/g_{m1}$. Using $g_m=\sqrt{2K'(W/L)I_D}$ at 50 µA:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(100)(50\ \mu\mathrm A)}=1.05\ \mathrm{mS},\qquad
g_{m3}=\sqrt{2(50\ \mu\mathrm{A/V^2})(5)(50\ \mu\mathrm A)}=158\ \mu\mathrm S,
$$
$$
e_{eq}^2(\text{th})=2\,\frac{8kT}{3g_{m1}}\Bigl(1+\frac{g_{m3}}{g_{m1}}\Bigr)=2(1.05\times10^{-17})(1.151)=2.42\times10^{-17}\ \mathrm{V^2/Hz}\quad(4.9\ \mathrm{nV/\sqrt{Hz}}).
$$

Here the loads add about 15 % to the thermal noise.

### Step 4 — Corner frequency and rms noise

$$
f_c=\frac{1.47\times10^{-11}}{2.42\times10^{-17}}\approx608\ \mathrm{kHz}.
$$

Over 1 Hz–100 kHz the 1/f part integrates to a logarithm:

$$
v_n^2=(1.47\times10^{-11})\ln(10^5)+(2.42\times10^{-17})(10^5)=1.70\times10^{-10}+2.4\times10^{-12}=1.72\times10^{-10}\ \mathrm{V^2},
$$
$$
v_n=13.1\ \mu\mathrm V\quad(13.0\ \mu\mathrm V\ \text{from 1/f alone}).
$$

| Quantity | Value |
|---|---|
| $e_{eq}^2(1/f)$ | $1.47\times10^{-11}/f$ V²/Hz |
| $e_{eq}^2$(thermal) | $2.42\times10^{-17}$ V²/Hz (4.9 nV/√Hz) |
| $f_c$ | ≈ 608 kHz |
| rms noise, 1 Hz–100 kHz | 13.1 µV |

Compared with the p-channel-input version ($4.1\times10^{-12}/f$, about 7 µV rms), the n-channel input has about 3.6 times the 1/f noise power, the ratio $B_N/B_P$ of the flicker constants.
