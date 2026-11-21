# Detailed solution - G376

With a current-source input only the equivalent input noise current matters. For shunt-shunt feedback it is the first transistor's current generator plus its voltage generator divided by $R_F$, plus the thermal noise current of $R_F$. Here the first transistor's base current carries flicker noise, which integrates to a logarithm over the very wide 0.01 Hz–100 kHz band.

### Step 1 — Generators of the first transistor

At $I_C=1$ mA, $g_m=38.5$ mS ($1/2g_m=13\ \Omega$) and $I_B=I_C/\beta=5\ \mu$A. The current generator is the base current noise including flicker, plus the collector shot noise referred through $\beta$; the voltage generator is the usual white one:

$$
\frac{\overline{i_{ia}^2}}{\Delta f}=2qI_B\left(1+\frac{f_a}{f}\right)+\frac{2qI_C}{\beta^2}=1.6\times10^{-24}\left(1+\frac{5000\ \mathrm{Hz}}{f}\right)+8\times10^{-27}\ \mathrm{A^2/Hz},
$$

$$
\frac{\overline{v_{ia}^2}}{\Delta f}\approx4kT\left(r_b+\frac{1}{2g_m}\right)=4kT(313\ \Omega)=5.20\times10^{-18}\ \mathrm{V^2/Hz}.
$$

The noise of the 5-kΩ load and of the following transistors is referred through the first-stage gain (or through $\beta$ for currents) and is negligible.

### Step 2 — Input noise current density with shunt feedback

$$
\frac{\overline{i_i^2}}{\Delta f}=\frac{\overline{i_{ia}^2}}{\Delta f}+\frac{\overline{v_{ia}^2}}{R_F^2\,\Delta f}+\frac{4kT}{R_F}.
$$

| Term | Density (A²/Hz) |
|---|---|
| Base shot noise $2qI_B$ | $1.6\times10^{-24}$ |
| Collector shot noise $2qI_C/\beta^2$ | $8\times10^{-27}$ |
| $\overline{v_{ia}^2}/R_F^2$ | $5.2\times10^{-26}$ |
| $R_F$ thermal noise $4kT/R_F$ | $1.66\times10^{-24}$ |
| White total | $3.32\times10^{-24}$ |
| Flicker $2qI_Bf_a/f$ | $8.0\times10^{-21}\ \mathrm{A^2}/f$ |

### Step 3 — Integration over 0.01 Hz–100 kHz

$$
\begin{aligned}
\text{white:}\quad &(3.32\times10^{-24}\ \mathrm{A^2/Hz})(10^5\ \mathrm{Hz})=3.32\times10^{-19}\ \mathrm{A^2},\\
\text{flicker:}\quad &(8.0\times10^{-21}\ \mathrm{A^2})\ln\frac{10^5\ \mathrm{Hz}}{0.01\ \mathrm{Hz}}=(8.0\times10^{-21})(16.1)=1.29\times10^{-19}\ \mathrm{A^2},\\
\overline{i_i^2}&=4.61\times10^{-19}\ \mathrm{A^2},\qquad i_{i,\mathrm{rms}}=0.68\ \mathrm{nA}.
\end{aligned}
$$

An exact nodal analysis gives 0.69 nA. The white base shot noise and the feedback resistor's noise contribute about equally and together supply 72% of the total; flicker noise adds the remaining 28%. Compared with the MOS version of this amplifier (about 1.14 nA, dominated by gate-referred flicker noise converted through $R_F$), the bipolar amplifier is quieter over this band despite its base current noise.
