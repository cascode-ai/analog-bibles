# Detailed solution - G354

Add a $1/f$ component to the drain noise current, scaled so that it equals the channel thermal noise at 100 kHz, refer the drain and load noise to the input through $g_m$, and integrate the resulting density between the band edges. The flicker term integrates to a logarithm, which is why the lower band edge matters.

### Step 1 — Drain noise with flicker component

Flicker noise has a density proportional to $1/f$. Requiring it to equal the thermal term $4kT\tfrac23g_m$ at $f_c=100$ kHz gives the total drain noise current

$$
\frac{\overline{i_d^2}}{\Delta f}=4kT\,\frac23g_m\left(1+\frac{f_c}{f}\right),\qquad f_c=10^5\ \mathrm{Hz}.
$$

The 10-kΩ load adds $4kT/R_L$ at the same node.

### Step 2 — Equivalent input noise generators

With the input shorted, the output noise currents are referred to the input by dividing by $g_m^2$:

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\,\frac{2}{3g_m}\left(1+\frac{f_c}{f}\right)+\frac{4kT}{g_m^2R_L}
=1.107\times10^{-17}\left(1+\frac{10^5\ \mathrm{Hz}}{f}\right)\ \mathrm{V^2/Hz}+1.66\times10^{-18}\ \mathrm{V^2/Hz},
$$

using $4kT\cdot2/(3g_m)=(1.66\times10^{-20}\ \mathrm{V\cdot C})(667\ \Omega)$ and $4kT/(g_m^2R_L)=(1.66\times10^{-20}\ \mathrm{V\cdot C})(100\ \Omega)$.

With the input open, no gate current flows and $C_{gs}=0$, so no input current can affect the output, and the output noise is the same as with the input shorted:

$$
\frac{\overline{i_i^2}}{\Delta f}=0 .
$$

### Step 3 — Integrating over 1 Hz–20 kHz

With sharp cutoffs at $f_L=1$ Hz and $f_H=20$ kHz,

$$
\int_{f_L}^{f_H}\left(1+\frac{f_c}{f}\right)df=(f_H-f_L)+f_c\ln\frac{f_H}{f_L}
=2\times10^4\ \mathrm{Hz}+(10^5\ \mathrm{Hz})\ln(2\times10^4)=2\times10^4+9.90\times10^5=1.01\times10^6\ \mathrm{Hz}.
$$

The total mean-square input noise is

$$
\overline{v_i^2}=(1.107\times10^{-17}\ \mathrm{V^2/Hz})(1.01\times10^6\ \mathrm{Hz})+(1.66\times10^{-18}\ \mathrm{V^2/Hz})(2\times10^4\ \mathrm{Hz})
=1.118\times10^{-11}+3.3\times10^{-14}=1.12\times10^{-11}\ \mathrm{V^2},
$$

so

$$
v_{i,\mathrm{rms}}=\sqrt{1.12\times10^{-11}\ \mathrm{V^2}}=3.35\ \mu\mathrm V .
$$

### Step 4 — Interpretation

The flicker term supplies about 98% of the total. Without it the same band would give only $\sqrt{(1.107\times10^{-17})(2\times10^4)}\ \mathrm V=0.47\ \mu$V, so a 100-kHz flicker corner raises the audio-band noise about sevenfold. Because the flicker contribution grows as $\ln(f_H/f_L)$, each decade of extra low-frequency bandwidth adds $f_c\ln10=2.3\times10^5$ Hz of equivalent bandwidth.
