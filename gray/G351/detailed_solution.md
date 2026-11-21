# Detailed solution - G351

With an ideal voltage source driving the input, only the equivalent input noise voltage matters. Use the generator of the emitter-degenerated stage, integrate it over 20 kHz, and judge the circuit by its equivalent noise resistance compared with a low source resistance.

### Step 1 — Which generator matters

For a source resistance $R_S$ the total equivalent input noise voltage is $4kTR_S+\overline{v_i^2}+\overline{i_i^2}R_S^2$. The ideal source has $R_S=0$, so the source noise and the current generator drop out and the total is $\overline{v_i^2}$.

### Step 2 — Spot noise voltage density

At $I_C=0.5$ mA, $g_m=19.2$ mS ($1/2g_m=26\ \Omega$) and $I_B=5\ \mu$A. The unbypassed emitter resistor $R_E$ adds its thermal noise and the drop of the base current noise across it to the transistor's own voltage generator:

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}+R_E\right)+2qI_BR_E^2
=(1.66\times10^{-20}\ \mathrm{V\cdot C})(1126\ \Omega)+1.6\times10^{-18}\ \mathrm{V^2/Hz}=2.03\times10^{-17}\ \mathrm{V^2/Hz}.
$$

The 10-kΩ load referred through the voltage gain $|A_v|\approx R_L/(R_E+1/g_m)=9.5$ adds $4kT(111\ \Omega)$; with it and the correlation between the generators, an exact calculation gives $2.27\times10^{-17}$ V²/Hz.

### Step 3 — Total noise in dc–20 kHz

The density is white, and the sharp cutoff gives a 20-kHz noise bandwidth:

$$
v_{i,\mathrm{rms}}=\sqrt{(2.03\times10^{-17}\ \mathrm{V^2/Hz})(2\times10^{4}\ \mathrm{Hz})}=0.64\ \mu\mathrm V,
$$

or $\sqrt{(2.27\times10^{-17})(2\times10^4)}\ \mathrm V=0.67\ \mu$V with the load included, i.e. about 4.5–4.8 nV/√Hz.

### Step 4 — Suitability for a low-impedance source

The thermal noise of the 1-kΩ emitter resistor dominates (about 80% of the density), and the whole amplifier behaves like a noise resistance of $\overline{v_i^2}/(4kT)\approx1.2$–$1.4$ kΩ. This is some 30 times quieter than placing 100 kΩ in series with the base, and reasonable among ways of obtaining a high input resistance.

For a genuinely low-impedance source, however, the amplifier noise still dominates. Using the noise figure $\mathrm{NF}=10\log_{10}\left[1+\overline{v_i^2}/(4kTR_S)\right]$ with $\overline{v_i^2}/\Delta f=2.03$–$2.27\times10^{-17}$ V²/Hz:

| $R_S$ | 50 Ω | 600 Ω |
|---|---|---|
| NF | 14.1–14.5 dB | 4.8–5.2 dB |

A low-impedance source does not need the high input resistance. The same stage without $R_E$ has a noise resistance of only $r_b+1/2g_m=126\ \Omega$ (about 1.45 nV/√Hz, 0.20 µV rms in 20 kHz), roughly 10 dB quieter. So the circuit is acceptable, but degeneration is not the best choice when the source impedance is low.
