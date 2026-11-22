# Detailed solution - G366

Find the bias, build the equivalent input noise voltage of the differential pair (both halves, their emitter resistors and the referred load noise) and its input noise current, and evaluate the noise figure at $R_S=50\ \Omega$. At such a low source resistance the voltage generator dominates.

### Step 1 — Bias point

Both bases are at 0 V (dc), so the emitters sit near $-0.7$ V. The tail current flows through the 100-kΩ resistor in series with the two 500-Ω resistors in parallel:

$$
I_{EE}\approx\frac{10\ \mathrm V-0.7\ \mathrm V}{100\ \mathrm{k\Omega}+250\ \Omega}=92.8\ \mu\mathrm A,\qquad
I_C=\frac{I_{EE}}{2}=46.4\ \mu\mathrm A .
$$

$$
g_m=\frac{46.4\ \mu\mathrm A}{26\ \mathrm{mV}}=1.78\ \mathrm{mS},\qquad
\frac{1}{2g_m}=280\ \Omega,\qquad
I_B=\frac{I_C}{\beta}=0.464\ \mu\mathrm A .
$$

### Step 2 — Equivalent input noise voltage

Each half is a degenerated common-emitter transistor whose input voltage generator is $4kT(r_b+1/2g_m+R_E)$, plus the negligible $2qI_BR_E^2$. The differential output responds to the difference of the two base voltages, so the uncorrelated generators of $Q_1$ and $Q_2$ add in mean square into one generator at the base of $Q_1$:

$$
2\left(r_b+\frac{1}{2g_m}+R_E\right)=2(200+280+500)\ \Omega=1960\ \Omega .
$$

The two 20-kΩ collector loads produce uncorrelated noise at the differential output; they are referred to the input through the differential voltage gain from the base of $Q_1$,

$$
|A_d|=\frac{2R_C}{2(1/g_m+R_E)}=\frac{20\ \mathrm{k\Omega}}{561\ \Omega+500\ \Omega}=18.9,
\qquad
\frac{2\cdot4kTR_C}{A_d^2}=4kT\,\frac{40\ \mathrm{k\Omega}}{18.9^2}=4kT(112\ \Omega).
$$

The 100-kΩ tail resistor carries only a common-mode noise current, which divides equally between the two sides and cancels in the differential output. Therefore

$$
\frac{\overline{v_i^2}}{\Delta f}\approx4kT(1960+112)\ \Omega=4kT(2.07\ \mathrm{k\Omega})=3.44\times10^{-17}\ \mathrm{V^2/Hz}.
$$

### Step 3 — Equivalent input noise current

The source drives only the base of $Q_1$, so the relevant current generator is that base's shot noise:

$$
\frac{\overline{i_i^2}}{\Delta f}=2qI_B=2(1.6\times10^{-19}\ \mathrm C)(0.464\ \mu\mathrm A)=1.48\times10^{-25}\ \mathrm{A^2/Hz}.
$$

### Step 4 — Noise figure at $R_S=50\ \Omega$

$$
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}
=1+\frac{4kT(2073\ \Omega)+(1.48\times10^{-25})(50\ \Omega)^2}{4kT(50\ \Omega)}
=1+\frac{2073+0.02}{50}=42.5,
$$

$$
\mathrm{NF}=10\log_{10}42.5=16.3\ \mathrm{dB}.
$$

The current generator contributes the equivalent of only 0.02 Ω and is negligible. Without the load term, $F=1+1960/50=40.2$ (16.0 dB). The pair's doubled voltage noise and the 500-Ω emitter resistors make the circuit far noisier than the 50-Ω source.
