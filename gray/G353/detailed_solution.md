# Detailed solution - G353

With an ideal voltage source the source impedance is zero, so only the equivalent input noise voltage of the common-source stage matters. Evaluate it from the channel and load noise, integrate the white density over 20 kHz, and judge the result by its equivalent noise resistance.

### Step 1 — Which generator matters

The total equivalent input noise voltage with a source resistance $R_S$ is $4kTR_S+\overline{v_i^2}+\overline{i_i^2}R_S^2$. For the ideal source $R_S=0$, leaving $\overline{v_i^2}$. (For this MOS stage $\overline{i_i^2}=0$ anyway, because the gate draws no current and $C_{gs}$ is neglected.)

### Step 2 — Spot noise voltage density

With the input shorted, the channel noise $4kT\tfrac23g_m$ and the load noise $4kT/R_L$ flow at the drain and are referred to the input by dividing by $g_m^2$:

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\,\frac{2}{3g_m}+\frac{4kT}{g_m^2R_L}
=(1.66\times10^{-20}\ \mathrm{V\cdot C})(667+100)\ \Omega=1.27\times10^{-17}\ \mathrm{V^2/Hz},
$$

about 3.6 nV/√Hz, with $g_m=1$ mA/V and $R_L=10$ kΩ. The transistor alone gives $1.11\times10^{-17}$ V²/Hz.

### Step 3 — Total noise in dc–20 kHz

The density is white over the 20-kHz brick-wall band:

$$
v_{i,\mathrm{rms}}=\sqrt{(1.27\times10^{-17}\ \mathrm{V^2/Hz})(2\times10^{4}\ \mathrm{Hz})}=0.50\ \mu\mathrm V,
$$

or $\sqrt{(1.11\times10^{-17})(2\times10^4)}\ \mathrm V=0.47\ \mu$V from the transistor alone.

### Step 4 — Suitability for a low-impedance source

The very high input resistance and zero input noise current of the MOS gate help only with high-impedance sources. For a low-impedance source only $\overline{v_i^2}$ counts, and it equals the thermal noise of an equivalent resistance

$$
R_{eq}=\frac{2}{3g_m}+\frac{1}{g_m^2R_L}\approx770\ \Omega .
$$

For a source of a few tens of ohms the amplifier noise dominates: the noise factor is $1+R_{eq}/R_S$, about 16 (12 dB) for $R_S=50\ \Omega$. The stage is usable but not noise-matched to a very low source impedance; a larger $g_m$ (wider device, more current) or a bipolar input stage would lower $R_{eq}$. In practice the MOS flicker noise neglected here usually dominates at audio frequencies and makes the stage worse still.
