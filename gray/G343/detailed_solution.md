# Detailed solution - G343

Find the diode bias current, replace the diode by its small-signal resistance $r_d$ in parallel with a shot-noise current source, add the thermal-noise current of the 20-kΩ resistor, and convert the total noise current at the output node into a voltage through the node impedance. The result is white, so the total in 100 kHz is the density times the bandwidth.

### Step 1 — Bias point and small-signal resistance

With the forward drop fixed at 0.7 V, the current through the resistor and diode is

$$
I_D=\frac{10\ \mathrm V-0.7\ \mathrm V}{20\ \mathrm{k\Omega}}=0.465\ \mathrm{mA}.
$$

From the diode law $I_D=I_S\exp(V_D/V_T)$, the incremental resistance is

$$
r_d=\frac{kT/q}{I_D}=\frac{26\ \mathrm{mV}}{0.465\ \mathrm{mA}}=55.9\ \Omega .
$$

### Step 2 — Noise model of the output node

The diode current consists of carriers crossing the junction independently, so it carries shot noise with a current density $\overline{i_d^2}/\Delta f=2qI_D$. This noise source sits in parallel with $r_d$; $r_d$ itself is not a physical resistor and adds no separate thermal noise. The resistor contributes a thermal-noise current $\overline{i_R^2}/\Delta f=4kT/R$ in parallel with $R$. For small signals the +10 V supply is ground, so $R$ and the diode are in parallel between $v_o$ and ground, and both uncorrelated noise currents flow into the same node impedance:

$$
\begin{aligned}
\frac{\overline{i_d^2}}{\Delta f}&=2qI_D=2(1.6\times10^{-19}\ \mathrm C)(0.465\ \mathrm{mA})=1.488\times10^{-22}\ \mathrm{A^2/Hz},\\
\frac{\overline{i_R^2}}{\Delta f}&=\frac{4kT}{R}=\frac{1.66\times10^{-20}\ \mathrm{V\cdot C}}{20\ \mathrm{k\Omega}}=8.3\times10^{-25}\ \mathrm{A^2/Hz},\\
r_d\parallel R&=\frac{(55.9\ \Omega)(20\ \mathrm{k\Omega})}{55.9\ \Omega+20\ \mathrm{k\Omega}}=55.8\ \Omega .
\end{aligned}
$$

The resistor contributes only 0.55% of the total noise current, and its shunting of $r_d$ changes the node impedance by 0.3%.

### Step 3 — Output noise-voltage spectral density

The mean-square noise currents add, and the node impedance converts them to voltage:

$$
\frac{\overline{v_o^2}}{\Delta f}=\left(2qI_D+\frac{4kT}{R}\right)(r_d\parallel R)^2
=(1.496\times10^{-22}\ \mathrm{A^2/Hz})(55.8\ \Omega)^2=4.65\times10^{-19}\ \mathrm{V^2/Hz},
$$

or $0.68\ \mathrm{nV/\sqrt{Hz}}$. Neglecting $R$, the diode alone gives $2qI_Dr_d^2=2kT\,r_d$, half the thermal noise $4kTr_d$ that a physical resistor of value $r_d$ would produce.

### Step 4 — Total noise in 100 kHz

With capacitance and flicker noise neglected, the density is constant with frequency, so

$$
\overline{v_o^2}=(4.65\times10^{-19}\ \mathrm{V^2/Hz})(10^5\ \mathrm{Hz})=4.65\times10^{-14}\ \mathrm{V^2},
\qquad
v_{o,\mathrm{rms}}=\sqrt{4.65\times10^{-14}\ \mathrm{V^2}}=0.216\ \mu\mathrm V .
$$
