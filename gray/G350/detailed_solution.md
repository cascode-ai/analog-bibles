# Detailed solution - G350

With an ideal voltage source driving the input, the source impedance is zero, so the equivalent input noise current flows into a short and only the equivalent input noise voltage matters. Find that voltage density for the series-resistor circuit, integrate the white density over 20 kHz, and judge the circuit against the alternatives.

### Step 1 — Which generator matters

The circuit's noise is represented by $\overline{v_i^2}$ and $\overline{i_i^2}$ at the source side of the 100-kΩ resistor. The total equivalent input noise voltage seen with a source of resistance $R_S$ is $\overline{v_i^2}+\overline{i_i^2}R_S^2$ plus the source's own noise. For the ideal source here, $R_S=0$, so the total is just $\overline{v_i^2}$; the current generator contributes nothing.

### Step 2 — Spot noise voltage density

At $I_C=0.5$ mA, $g_m=19.2$ mS ($1/2g_m=26\ \Omega$) and $I_B=I_C/\beta=5\ \mu$A. Referring the transistor generators through the series resistor $R=100$ kΩ adds the resistor's thermal noise and the base current noise flowing through $R+r_b$:

$$
\frac{\overline{v_i^2}}{\Delta f}\approx4kT\left(R+r_b+\frac{1}{2g_m}\right)+2qI_B(R+r_b)^2 .
$$

$$
\begin{aligned}
4kT(100.126\ \mathrm{k\Omega})&=1.66\times10^{-15}\ \mathrm{V^2/Hz},\\
2(1.6\times10^{-19}\ \mathrm C)(5\ \mu\mathrm A)(100.1\ \mathrm{k\Omega})^2&=1.60\times10^{-14}\ \mathrm{V^2/Hz},\\
\frac{\overline{v_i^2}}{\Delta f}&\approx1.77\times10^{-14}\ \mathrm{V^2/Hz}.
\end{aligned}
$$

Adding the collector shot noise and the 10-kΩ load noise referred to the input, an exact calculation gives $1.79\times10^{-14}$ V²/Hz. The base shot noise flowing in 100 kΩ supplies about 90% of the total.

### Step 3 — Total noise in dc–20 kHz

With flicker noise and capacitance neglected the density is white, and the sharp cutoff makes the noise bandwidth exactly 20 kHz:

$$
\overline{v_{i,\mathrm{tot}}^2}=(1.79\times10^{-14}\ \mathrm{V^2/Hz})(2\times10^{4}\ \mathrm{Hz})=3.58\times10^{-10}\ \mathrm{V^2},\qquad
v_{i,\mathrm{rms}}=18.9\ \mu\mathrm V .
$$

(The approximate density $1.77\times10^{-14}$ V²/Hz gives 18.8 µV.)

### Step 4 — Suitability for a low-impedance source

The circuit is a poor low-noise amplifier for a low-impedance source. Its noise is set by the 100-kΩ resistor that the circuit itself inserts, and above all by the 5-µA base-current shot noise flowing through that resistor; the 100-kΩ thermal noise alone already corresponds to 5.8 µV rms in 20 kHz. Obtaining the same high input resistance with an unbypassed 1-kΩ emitter resistor, or with a low collector current, gives about 0.6–0.7 µV rms, roughly 30 times lower. A low-impedance source does not need the high input resistance at all, so the series resistor only adds noise.
