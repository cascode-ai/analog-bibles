# Detailed solution - G373

In the common-base amplifier both base currents are referred to the input with unity current gain, so both devices' base-current flicker noise adds directly to the input noise current. Find the white-noise figure $F_0$, then the frequency at which the flicker excess equals $F_0$ times the source noise, which doubles $F$.

### Step 1 — White-noise figure

At $I_C=1$ mA each transistor has $I_B=10\ \mu$A. As in the flicker-free analysis, the equivalent input noise current at the emitter of $Q_1$ collects $Q_1$'s base shot noise, the 5-kΩ load noise and $Q_2$'s input noise current, all with unity gain:

$$
\frac{\overline{i_i^2}}{\Delta f}=2q(I_{B1}+I_{B2})+2q\,\frac{I_{C1}+I_{C2}}{\beta^2}+\frac{4kT}{5\ \mathrm{k\Omega}}=9.78\times10^{-24}\ \mathrm{A^2/Hz}.
$$

With the source noise $4kT/R_S=3.32\times10^{-24}$ A²/Hz and the negligible voltage-generator term,

$$
F_0=1+\frac{9.79\times10^{-24}}{3.32\times10^{-24}}=3.95\quad(6.0\ \mathrm{dB}).
$$

### Step 2 — Flicker excess

Each base current noise becomes $2qI_B(1+f_a/f)$. Since both base currents reach the input with unity gain, the extra input noise current is

$$
\frac{\Delta\overline{i_i^2}}{\Delta f}=2q(I_{B1}+I_{B2})\frac{f_a}{f}=2(1.6\times10^{-19}\ \mathrm C)(20\ \mu\mathrm A)\frac{10^3\ \mathrm{Hz}}{f}=6.4\times10^{-24}\,\frac{10^3\ \mathrm{Hz}}{f}\ \mathrm{A^2/Hz}.
$$

### Step 3 — Frequency for a 3-dB rise

A 3-dB increase means $F=2F_0$, so the excess must equal $F_0\cdot4kT/R_S$:

$$
6.4\times10^{-24}\,\frac{10^3\ \mathrm{Hz}}{f}=3.95\,(3.32\times10^{-24})=1.31\times10^{-23}
\quad\Longrightarrow\quad
f=\frac{(6.4\times10^{-24})(10^3\ \mathrm{Hz})}{1.31\times10^{-23}}\approx490\ \mathrm{Hz}.
$$

Below about 490 Hz the spot noise figure exceeds 9 dB. The 3-dB point lies below the 1-kHz device corner because the base flicker noise must not just equal the base shot noise but grow comparable to the whole white input noise, which also includes the load and the source.
