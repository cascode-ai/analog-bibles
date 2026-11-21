# Detailed solution - G346

Start from the standard equivalent input generators of the bare common-emitter transistor at its base, then move them through the series 100-kΩ resistor to its source side, adding that resistor's own thermal noise. A voltage generator passes through a series element unchanged, while a current generator in series with a resistance $R$ produces an extra voltage $i_iR$ when the input is shorted.

### Step 1 — Small-signal parameters

At $I_C=0.5$ mA,

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mS},\qquad
\frac{1}{2g_m}=26\ \Omega,\qquad
r_\pi=\frac{\beta}{g_m}=5.2\ \mathrm{k\Omega},\qquad
I_B=\frac{I_C}{\beta}=5\ \mu\mathrm A .
$$

### Step 2 — Generators of the transistor alone

For a common-emitter transistor with base resistance $r_b$, the input-referred generators at the external base terminal are (with the small load term $4kT/(g_m^2R_L)$ kept aside)

$$
\frac{\overline{v_{i,T}^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right),\qquad
\frac{\overline{i_{i,T}^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right).
$$

The first is the thermal noise of $r_b$ plus the collector shot noise $2qI_C$ referred through $g_m$; the second is the base shot noise plus the collector shot noise referred through $\beta$.

### Step 3 — Referring through the series 100-kΩ resistor

Let $R=100$ kΩ. With the input (source side) shorted, the noise at the transistor base is the series combination of the resistor thermal noise $4kTR$, the transistor voltage generator, and the current generator flowing through $R$ to the shorted input, which develops $i_{i,T}R$. With the input open, the current generator still has to flow through $R$ from the source side, so it is unchanged. Hence

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(R+r_b+\frac{1}{2g_m}\right)+2qI_B(R+r_b)^2,\qquad
\frac{\overline{i_i^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right).
$$

Since $r_b$ also lies in series with the base current, it is grouped with $R$ in the second term. Both generators now contain the same base-current noise, so they are strongly correlated.

### Step 4 — Numerical values

$$
\begin{aligned}
4kT\left(R+r_b+\frac{1}{2g_m}\right)&=(1.66\times10^{-20}\ \mathrm{V\cdot C})(100.126\ \mathrm{k\Omega})=1.66\times10^{-15}\ \mathrm{V^2/Hz},\\
2qI_B(R+r_b)^2&=2(1.6\times10^{-19}\ \mathrm C)(5\ \mu\mathrm A)(100.1\ \mathrm{k\Omega})^2=1.60\times10^{-14}\ \mathrm{V^2/Hz},\\
\frac{\overline{v_i^2}}{\Delta f}&\approx1.77\times10^{-14}\ \mathrm{V^2/Hz}\quad(\approx0.13\ \mu\mathrm V/\sqrt{\mathrm{Hz}}),\\
\frac{\overline{i_i^2}}{\Delta f}&=2(1.6\times10^{-19}\ \mathrm C)(5\ \mu\mathrm A+0.05\ \mu\mathrm A)=1.62\times10^{-24}\ \mathrm{A^2/Hz}\quad(\approx1.3\ \mathrm{pA}/\sqrt{\mathrm{Hz}}).
\end{aligned}
$$

The base shot noise flowing through 100 kΩ supplies about 90% of $\overline{v_i^2}$, and the 100-kΩ thermal noise about 9%; the transistor's own $r_b$ and $1/2g_m$ terms are negligible.

### Step 5 — Smaller terms and exact check

Two terms omitted above become slightly larger because of the large base resistance. The collector shot noise, referred to the source side with input shorted, needs a source voltage $i_c(1/g_m+R/\beta)$ rather than $i_c/g_m$, giving $2qI_C(1/g_m+R/\beta)^2=1.8\times10^{-16}$ V²/Hz $=4kT(10.7\ \mathrm{k\Omega})$. The 10-kΩ load noise is referred through the voltage gain $|A_v|=g_mR_Lr_\pi/(r_\pi+R+r_b)=9.5$, giving $4kTR_L/A_v^2=4kT(111\ \Omega)$. Computing $\overline{v_i^2}$ exactly from all sources with the input shorted gives

$$
\frac{\overline{v_i^2}}{\Delta f}=1.79\times10^{-14}\ \mathrm{V^2/Hz},
$$

within 1% of the expression in Step 3. Placing 100 kΩ in series raises the input resistance but makes the equivalent input noise voltage about ten times that of the 100-kΩ resistor alone, because the base current noise flows through it.
