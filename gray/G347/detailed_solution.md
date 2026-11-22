# Detailed solution - G347

The unbypassed emitter resistor is series feedback. Start from the equivalent input generators of the bare transistor, then add the effect of $R_E$: its own thermal noise, and the voltage that the input current generator develops across it when the input is shorted. Finally estimate the load contribution through the reduced voltage gain.

### Step 1 — Small-signal parameters and input resistance

At $I_C=0.5$ mA,

$$
g_m=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mS},\qquad
\frac{1}{2g_m}=26\ \Omega,\qquad
r_\pi=5.2\ \mathrm{k\Omega},\qquad I_B=5\ \mu\mathrm A,
$$

and the input resistance is $r_b+r_\pi+(\beta+1)R_E\approx0.1+5.2+101\ \mathrm{k\Omega}\approx106\ \mathrm{k\Omega}$, as intended.

### Step 2 — Generators of the transistor alone

For the transistor with its emitter grounded (the small load term set aside),

$$
\frac{\overline{v_{ia}^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right),\qquad
\frac{\overline{i_{ia}^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right)\approx2qI_B .
$$

### Step 3 — Adding the emitter resistor

Place the transistor generators at its base and keep $R_E$ in the emitter with its thermal noise voltage $\overline{v_{RE}^2}=4kTR_E\Delta f$ in series. With the input shorted, the current generator $i_{ia}$ flows out of the base node and returns through $R_E$ (the low-impedance path compared with $r_\pi$ and the large $\beta R_E$ seen at the base), producing a voltage $i_{ia}R_E$ in the base–emitter loop. A source voltage equal to the sum of the transistor voltage generator, $v_{RE}$ and $i_{ia}R_E$ reproduces the same output. With the input open, the current generator is still supplied from the input, so it is unchanged:

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}+R_E\right)+2qI_BR_E^2,\qquad
\frac{\overline{i_i^2}}{\Delta f}\approx2qI_B .
$$

The resistor does not divide the input noise voltage by $1+g_mR_E$: the feedback reduces signal and noise gain alike, so input-referred noise only gains the new terms.

### Step 4 — Numerical values

$$
\begin{aligned}
4kT\left(r_b+\frac{1}{2g_m}+R_E\right)&=(1.66\times10^{-20}\ \mathrm{V\cdot C})(100+26+1000)\ \Omega=1.87\times10^{-17}\ \mathrm{V^2/Hz},\\
2qI_BR_E^2&=2(1.6\times10^{-19}\ \mathrm C)(5\ \mu\mathrm A)(1\ \mathrm{k\Omega})^2=1.6\times10^{-18}\ \mathrm{V^2/Hz},\\
\frac{\overline{v_i^2}}{\Delta f}&\approx2.0\times10^{-17}\ \mathrm{V^2/Hz}\quad(\approx4.5\ \mathrm{nV/\sqrt{Hz}}),\\
\frac{\overline{i_i^2}}{\Delta f}&\approx2(1.6\times10^{-19}\ \mathrm C)(5\ \mu\mathrm A)=1.6\times10^{-24}\ \mathrm{A^2/Hz}.
\end{aligned}
$$

The thermal noise of $R_E$ is the largest single term, about 80% of $\overline{v_i^2}$.

### Step 5 — Load contribution and exact check

The degeneration lowers the voltage gain to $|A_v|\approx R_L/(R_E+1/g_m)=10\ \mathrm{k\Omega}/1.052\ \mathrm{k\Omega}=9.5$, so the 10-kΩ load noise referred to the input is $4kTR_L/A_v^2=4kT(111\ \Omega)=1.8\times10^{-18}$ V²/Hz, about 9% more. Including it gives $\overline{v_i^2}/\Delta f\approx2.2\times10^{-17}$ V²/Hz. Solving the small-signal circuit exactly with every source and the input shorted gives $2.27\times10^{-17}$ V²/Hz; the remaining difference is mainly the correlation between the collector shot noise terms in the two generators. The equivalent input noise voltage is thus about $2.0$–$2.3\times10^{-17}$ V²/Hz, roughly ten times the $4kT(126\ \Omega)=2.1\times10^{-18}$ V²/Hz of the transistor without degeneration, while the noise current stays at the base shot noise.
