# Detailed solution - G369

With $R_S=200$ kΩ the noise figure is governed by the base current noise of $Q_1$ flowing through the source resistance. Flicker noise raises that current noise as $1/f$ at low frequency. Find the current noise density that makes the spot noise figure 20 dB, then solve for the frequency.

### Step 1 — Generators of the stage

With $I_{EE}\approx9.3\ \mathrm V/100.25\ \mathrm{k\Omega}=92.8\ \mu$A, each transistor has $I_C=46.4\ \mu$A and $I_B=0.464\ \mu$A, so the white base shot noise is $2qI_B=1.48\times10^{-25}$ A²/Hz. The equivalent input noise voltage (both halves with their emitter resistors plus the referred loads) is $\overline{v_i^2}/\Delta f\approx4kT(2.07\ \mathrm{k\Omega})=3.44\times10^{-17}$ V²/Hz. With flicker noise, the input current generator becomes

$$
\frac{\overline{i_i^2}}{\Delta f}=2qI_B\left(1+\frac{f_a}{f}\right),\qquad f_a=10\ \mathrm{kHz}.
$$

The base current noise of $Q_2$ flows only into its grounded base through $r_{b2}$, and the flicker components reaching the output through the emitter-resistor paths are negligible, so only $Q_1$'s base current noise through $R_S$ matters.

### Step 2 — Required current noise for NF = 20 dB

NF = 20 dB means $F=100$. From

$$
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}=100,
$$

$$
\frac{\overline{i_i^2}}{\Delta f}=\frac{99\cdot4kTR_S-\overline{v_i^2}/\Delta f}{R_S^2}
=\frac{99(1.66\times10^{-20}\ \mathrm{V\cdot C})(200\ \mathrm{k\Omega})-3.44\times10^{-17}\ \mathrm{V^2/Hz}}{(200\ \mathrm{k\Omega})^2}
=8.22\times10^{-24}\ \mathrm{A^2/Hz}.
$$

The voltage generator removes only 0.01% of the numerator.

### Step 3 — Frequency

$$
1+\frac{f_a}{f}=\frac{8.22\times10^{-24}\ \mathrm{A^2/Hz}}{1.48\times10^{-25}\ \mathrm{A^2/Hz}}=55.4
\quad\Longrightarrow\quad
f=\frac{10\ \mathrm{kHz}}{54.4}\approx184\ \mathrm{Hz}.
$$

Below about 180 Hz the spot noise figure exceeds 20 dB. For comparison, at frequencies far above $f_a$ the same circuit has $F=2.8$ (4.5 dB) at this source resistance, so the base current flicker noise raises the noise figure by more than 15 dB at 180 Hz.
