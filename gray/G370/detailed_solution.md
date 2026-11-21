# Detailed solution - G370

The source is a current source with a shunt resistance, so the natural description is a noise current at the input node. Start from the transistor's equivalent input generators, move the feedback resistor's noise to the input (shunt feedback adds its thermal noise current there), and compute the noise figure relative to the source resistor's noise current $4kT/R_S$.

### Step 1 — Transistor generators

At $I_C=0.5$ mA, $g_m=19.2$ mS ($1/2g_m=26\ \Omega$) and $I_B=I_C/\beta=10\ \mu$A:

$$
\frac{\overline{v_{ia}^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right)=4kT(126\ \Omega)=2.09\times10^{-18}\ \mathrm{V^2/Hz},
$$

$$
\frac{\overline{i_{ia}^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right)=3.2\times10^{-24}+6.4\times10^{-26}=3.26\times10^{-24}\ \mathrm{A^2/Hz}.
$$

### Step 2 — Generators of the feedback amplifier

The feedback resistor $R_F$ connects the input node to the collector. With the input open, its thermal noise current $4kT/R_F$ flows into the input node, and the transistor's voltage generator drives a current $v_{ia}/R_F$ through $R_F$ into that node. With the input shorted, $R_F$ only loads the output, so the voltage generator is essentially unchanged. For shunt feedback at the input:

$$
\frac{\overline{i_i^2}}{\Delta f}=\frac{\overline{i_{ia}^2}}{\Delta f}+\frac{\overline{v_{ia}^2}}{R_F^2\,\Delta f}+\frac{4kT}{R_F}
=3.26\times10^{-24}+2.1\times10^{-26}+1.66\times10^{-24}=4.94\times10^{-24}\ \mathrm{A^2/Hz},
$$

and $\overline{v_i^2}\approx\overline{v_{ia}^2}$. The 10-kΩ collector load, referred to the input through the large transresistance, is negligible.

### Step 3 — Noise figure at $R_S=10$ kΩ

For a current source with shunt resistance $R_S$, the source noise is the current $4kT/R_S$, and the amplifier's voltage generator drives a current $v_i/R_S$ through $R_S$. Neglecting correlation,

$$
F=1+\frac{\overline{i_i^2}+\overline{v_i^2}/R_S^2}{4kT/R_S\cdot\Delta f}
=1+\frac{4.94\times10^{-24}+2.1\times10^{-26}}{1.66\times10^{-24}}=3.99,
$$

$$
\mathrm{NF}=10\log_{10}3.99=6.0\ \mathrm{dB}.
$$

### Step 4 — Dominant contributions

The base current shot noise ($3.2\times10^{-24}$ A²/Hz, about twice the source noise) and the feedback resistor's thermal noise ($1.66\times10^{-24}$ A²/Hz, equal to the source noise since $R_F=R_S$) dominate; the voltage generator is negligible at a 10-kΩ source resistance. An exact nodal analysis that keeps the correlation between the generators gives about 6.2 dB.
