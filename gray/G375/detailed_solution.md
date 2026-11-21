# Detailed solution - G375

The amplifier is driven by a current source, so only the equivalent input noise current matters. For shunt-shunt feedback, the input noise current is the basic amplifier's current generator plus its voltage generator divided by $R_F$, plus the thermal noise current of $R_F$. Compute the voltage generator (thermal and flicker parts) of the MOS basic amplifier, form the input noise current density, and integrate it over 0.01 Hz–100 kHz.

### Step 1 — Device transconductance

In saturation $g_m=\sqrt{2k'(W/L)I_D}$:

$$
g_m=\sqrt{2(194\ \mu\mathrm A/\mathrm V^2)(100)(100\ \mu\mathrm A)}=1.97\ \mathrm{mS},
$$

so each common-source stage has a gain $g_m(5\ \mathrm{k\Omega})=9.85$.

### Step 2 — Equivalent input noise current for shunt feedback

With a current-source input, the source impedance is infinite and the voltage generator alone produces no input current; it does so only through the feedback resistor connected to the gate. For shunt feedback at the input,

$$
\frac{\overline{i_i^2}}{\Delta f}=\frac{\overline{i_{ia}^2}}{\Delta f}+\frac{\overline{v_{ia}^2}}{R_F^2\,\Delta f}+\frac{4kT}{R_F},
$$

with $\overline{i_{ia}^2}=0$, since the gate draws no current and device capacitances are neglected.

### Step 3 — Basic-amplifier voltage generator

Thermal part, referred to the gate of $M_1$: the channel noise of $M_1$, the 5-kΩ load of the first stage, and the channel noise of $M_2$ referred through the first-stage gain:

$$
\frac{\overline{v_{ia,th}^2}}{\Delta f}=4kT\left[\frac{2}{3g_m}+\frac{1}{g_m^2(5\ \mathrm{k\Omega})}+\frac{2}{3g_m(9.85)^2}\right]=4kT(338+52+3.5)\ \Omega=4kT(394\ \Omega).
$$

Flicker part, from the given gate-referred model:

$$
\frac{\overline{v_{ia,f}^2}}{\Delta f}=\frac{K_f}{WLC_{ox}f}=\frac{3\times10^{-24}\ \mathrm{F\cdot V^2}}{(100\ \mu\mathrm m^2)(4.31\ \mathrm{fF/\mu m^2})f}=\frac{6.96\times10^{-12}\ \mathrm{V^2}}{f},
$$

plus 1% from $M_2$ referred through the gain of 9.85, giving $7.03\times10^{-12}\ \mathrm{V^2}/f$. $M_3$ and later loads are negligible.

### Step 4 — Input noise current density

Dividing by $R_F^2=(10\ \mathrm{k\Omega})^2$ and adding $4kT/R_F=1.66\times10^{-24}$ A²/Hz:

$$
\frac{\overline{i_i^2}}{\Delta f}=1.66\times10^{-24}+6.5\times10^{-26}+\frac{7.03\times10^{-20}\ \mathrm{A^2}}{f}
=1.725\times10^{-24}\ \mathrm{A^2/Hz}+\frac{7.03\times10^{-20}\ \mathrm{A^2}}{f}.
$$

### Step 5 — Integration over 0.01 Hz–100 kHz

The white part integrates to density times bandwidth, the $1/f$ part to a logarithm:

$$
\begin{aligned}
\text{white:}\quad &(1.725\times10^{-24}\ \mathrm{A^2/Hz})(10^5\ \mathrm{Hz})=1.73\times10^{-19}\ \mathrm{A^2},\\
\text{flicker:}\quad &(7.03\times10^{-20}\ \mathrm{A^2})\ln\frac{10^5\ \mathrm{Hz}}{0.01\ \mathrm{Hz}}=(7.03\times10^{-20})(16.1)=1.13\times10^{-18}\ \mathrm{A^2},\\
\overline{i_i^2}&=1.31\times10^{-18}\ \mathrm{A^2},\qquad i_{i,\mathrm{rms}}=1.14\ \mathrm{nA}.
\end{aligned}
$$

About 87% of the total comes from the flicker noise of $M_1$ converted to a current by $R_F$, and most of the rest from the 10-kΩ feedback resistor. If the feedback resistor were taken as noiseless, the total would be 1.07 nA rms.
