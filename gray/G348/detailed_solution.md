# Detailed solution - G348

Here the high input resistance comes from $r_\pi$ itself at a very low collector current, with no added resistors in the signal path. The equivalent input generators are therefore those of a plain common-emitter stage; evaluate them at $I_C=13\ \mu$A, where the low $g_m$ makes the $1/2g_m$ term and the load term large.

### Step 1 — Small-signal parameters

$$
g_m=\frac{I_C}{V_T}=\frac{13\ \mu\mathrm A}{26\ \mathrm{mV}}=0.5\ \mathrm{mS},\qquad
\frac{1}{2g_m}=1\ \mathrm{k\Omega},\qquad
r_\pi=\frac{\beta}{g_m}=\frac{50}{0.5\ \mathrm{mS}}=100\ \mathrm{k\Omega},\qquad
I_B=\frac{I_C}{\beta}=0.26\ \mu\mathrm A .
$$

The input resistance $r_b+r_\pi\approx100$ kΩ is set by $r_\pi$, and the voltage gain is only $g_mR_L=(0.5\ \mathrm{mS})(10\ \mathrm{k\Omega})=5$.

### Step 2 — Equivalent input noise voltage

Short the input. The base shot noise is then shorted through $r_b\ll r_\pi$ and contributes negligibly. The thermal noise of $r_b$ appears directly in series with the input. The collector shot noise $2qI_C$ and the load thermal noise current $4kT/R_L$ both flow at the output node and are referred to the input by dividing by $g_m^2$:

$$
\frac{\overline{v_i^2}}{\Delta f}=4kTr_b+\frac{2qI_C}{g_m^2}+\frac{4kT}{g_m^2R_L}
=4kT\left(r_b+\frac{1}{2g_m}+\frac{1}{g_m^2R_L}\right),
$$

using $2qI_C/g_m^2=2kT/g_m$. With $1/(g_m^2R_L)=1/[(0.5\ \mathrm{mS})^2(10\ \mathrm{k\Omega})]=400\ \Omega$,

$$
\frac{\overline{v_i^2}}{\Delta f}=(1.66\times10^{-20}\ \mathrm{V\cdot C})(100+1000+400)\ \Omega=2.49\times10^{-17}\ \mathrm{V^2/Hz}
\quad(\approx5.0\ \mathrm{nV/\sqrt{Hz}}).
$$

The collector shot noise term $1/2g_m=1$ kΩ dominates. Without the load term the result is $4kT(1100\ \Omega)=1.83\times10^{-17}$ V²/Hz; the load matters here because the gain is only 5.

### Step 3 — Equivalent input noise current

Open the input. The base shot noise flows into $r_\pi$ and appears directly as input current, while the output sources are referred through the current gain $\beta$:

$$
\frac{\overline{i_i^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right)+\frac{4kT}{\beta^2R_L}
=2(1.6\times10^{-19}\ \mathrm C)(0.26\ \mu\mathrm A+5.2\ \mathrm{nA})+6.6\times10^{-28}\ \mathrm{A^2/Hz}
=8.5\times10^{-26}\ \mathrm{A^2/Hz},
$$

about $0.29\ \mathrm{pA/\sqrt{Hz}}$. The base shot noise $2qI_B=8.3\times10^{-26}$ A²/Hz accounts for 98% of it, and the load term is negligible.

### Step 4 — Comparison

Compared with obtaining the same input resistance by a 100-kΩ series base resistor or by emitter degeneration at $I_C=0.5$ mA, the low-current stage has a much smaller noise current (its base current is only 0.26 µA instead of 5 µA), at the cost of a noise voltage of about $2.5\times10^{-17}$ V²/Hz dominated by the large $1/2g_m$.
