# Detailed solution - G344

Use the same bias point and node impedance as for the shot-noise-only diode, add the flicker term to the diode noise current, and convert the total noise current into an output voltage density. The flicker term equals the shot term at a corner frequency, which organizes the log–log plot into a $1/f$ segment and a flat segment.

### Step 1 — Bias point and node impedance

With a 0.7-V forward drop, the diode current and small-signal resistance are

$$
I_D=\frac{10\ \mathrm V-0.7\ \mathrm V}{20\ \mathrm{k\Omega}}=0.465\ \mathrm{mA},\qquad
r_d=\frac{kT/q}{I_D}=\frac{26\ \mathrm{mV}}{0.465\ \mathrm{mA}}=55.9\ \Omega .
$$

For small signals the +10 V supply is ground, so the 20-kΩ resistor and $r_d$ are in parallel from $v_o$ to ground: $r_d\parallel R=55.8\ \Omega$.

### Step 2 — Output noise spectral density

The diode noise current (shot plus flicker, $a=b=1$) and the resistor thermal-noise current $4kT/R$ are uncorrelated and both flow into $r_d\parallel R$, so their mean-square values add:

$$
S_o(f)=\frac{\overline{v_o^2}}{\Delta f}=(r_d\parallel R)^2\left[2qI_D+\frac{K_1I_D}{f}+\frac{4kT}{R}\right].
$$

Define the flicker corner $f_c$ where the flicker term equals the shot term:

$$
\frac{K_1I_D}{f_c}=2qI_D\quad\Longrightarrow\quad
f_c=\frac{K_1}{2q}=\frac{3\times10^{-16}\ \mathrm A}{2(1.6\times10^{-19}\ \mathrm C)}=937.5\ \mathrm{Hz},
$$

independent of $I_D$ because $a=1$. Then

$$
S_o(f)=(r_d\parallel R)^2\left[2qI_D\left(1+\frac{f_c}{f}\right)+\frac{4kT}{R}\right].
$$

The white part is $(55.8\ \Omega)^2\left(1.488\times10^{-22}+8.3\times10^{-25}\right)\ \mathrm{A^2/Hz}=4.65\times10^{-19}\ \mathrm{V^2/Hz}$, and since $4kT/R$ is only 0.55% of $2qI_D$,

$$
S_o(f)\approx4.65\times10^{-19}\left(1+\frac{938\ \mathrm{Hz}}{f}\right)\ \mathrm{V^2/Hz}.
$$

### Step 3 — Values across the band

At $f=1$ Hz the flicker term dominates: $S_o\approx(55.8\ \Omega)^2(3\times10^{-16}\ \mathrm A)(0.465\ \mathrm{mA})/(1\ \mathrm{Hz})+4.65\times10^{-19}\ \mathrm{V^2/Hz}=4.34\times10^{-16}\ \mathrm{V^2/Hz}$. The other points follow from the same expression:

| $f$ | 1 Hz | 10 Hz | 100 Hz | 938 Hz | 1 kHz | 10 kHz | 100 kHz | 1–10 MHz |
|---|---|---|---|---|---|---|---|---|
| $S_o$ (V²/Hz) | $4.3\times10^{-16}$ | $4.4\times10^{-17}$ | $4.8\times10^{-18}$ | $9.3\times10^{-19}$ | $9.0\times10^{-19}$ | $5.1\times10^{-19}$ | $4.7\times10^{-19}$ | $4.65\times10^{-19}$ |

### Step 4 — Log–log plot

Below $f_c$ the density falls as $1/f$, a straight line of slope $-1$ on log–log axes ($-10$ dB per decade in power). At $f_c\approx938$ Hz it is twice the white level, and above a few kHz it flattens at $4.65\times10^{-19}$ V²/Hz. With capacitive effects neglected there is no high-frequency roll-off, so the curve stays flat to 10 MHz.

![Output noise density on log–log axes: a 1/f line from 4.3e-16 V²/Hz at 1 Hz to the 938-Hz corner, then flat at 4.65e-19 V²/Hz](/q/G344/solution-curves.svg)
