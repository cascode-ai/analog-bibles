# Detailed solution - G352

With an ideal voltage source, only the equivalent input noise voltage of the low-current stage matters. Evaluate it, integrate over 20 kHz, and judge the circuit by its equivalent noise resistance.

### Step 1 — Which generator matters

For a source resistance $R_S$, the total equivalent input noise voltage is $4kTR_S+\overline{v_i^2}+\overline{i_i^2}R_S^2$. With the ideal source, $R_S=0$, so only $\overline{v_i^2}$ remains; the small noise current of this stage brings no benefit here.

### Step 2 — Spot noise voltage density

At $I_C=13\ \mu$A, $g_m=I_C/V_T=0.5$ mS, so $1/2g_m=1$ kΩ and the voltage gain is only $g_mR_L=5$. The input voltage generator collects the thermal noise of $r_b$, the collector shot noise referred through $g_m$, and the load thermal noise referred through $g_m$:

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right)+\frac{4kT}{g_m^2R_L}
=(1.66\times10^{-20}\ \mathrm{V\cdot C})(100+1000+400)\ \Omega=2.49\times10^{-17}\ \mathrm{V^2/Hz},
$$

where $1/(g_m^2R_L)=1/[(0.5\ \mathrm{mS})^2(10\ \mathrm{k\Omega})]=400\ \Omega$. Without the load term the density is $4kT(1100\ \Omega)=1.83\times10^{-17}$ V²/Hz.

### Step 3 — Total noise in dc–20 kHz

The density is white over the 20-kHz brick-wall band:

$$
v_{i,\mathrm{rms}}=\sqrt{(2.49\times10^{-17}\ \mathrm{V^2/Hz})(2\times10^{4}\ \mathrm{Hz})}=0.71\ \mu\mathrm V,
$$

or $\sqrt{(1.83\times10^{-17})(2\times10^4)}\ \mathrm V=0.61\ \mu$V for the transistor alone.

### Step 4 — Suitability for a low-impedance source

The equivalent noise resistance is $r_b+1/2g_m$ plus the load term, about 1.1–1.5 kΩ. It is set mainly by the collector shot noise at the low bias current ($1/2g_m=1$ kΩ), and the low gain lets the load add noticeably. This is comparable to the emitter-degenerated stage (about 0.65 µV) and some 30 times better than the 100-kΩ series-resistor circuit, so the stage is usable.

It is not well optimized for a low-impedance source, though. Lowering $I_C$ reduces the base current and hence the noise current $\overline{i_i^2}\approx2qI_B$, which only helps when $R_S$ is large. For $R_S\to0$ the relevant term $1/2g_m$ grows as $I_C$ falls. A low-impedance source does not need the 100-kΩ input resistance, and the same transistor at $I_C=0.5$ mA without degeneration has a noise resistance of $4kT(126\ \Omega)$, about 0.20 µV rms in 20 kHz, roughly three times quieter.
