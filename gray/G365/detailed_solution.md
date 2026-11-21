# Detailed solution - G365

Refer the emitter resistor's thermal noise and the base current noise flowing in it into the equivalent input noise voltage, keep the base shot noise as the current generator, and minimize the noise figure over $R_S$. At this low current the correlation between the generators is small, which is checked at the end.

### Step 1 — Bias and generators

At $I_C=10\ \mu$A, $g_m=10\ \mu\mathrm A/26\ \mathrm{mV}=0.385$ mS ($1/2g_m=1.3$ kΩ) and $I_B=0.1\ \mu$A. With $R_E$ in series feedback,

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}+R_E\right)+2qI_BR_E^2,\qquad
\frac{\overline{i_i^2}}{\Delta f}=2qI_B .
$$

$$
\begin{aligned}
4kT(300+1300+1000)\ \Omega&=(1.66\times10^{-20}\ \mathrm{V\cdot C})(2600\ \Omega)=4.316\times10^{-17}\ \mathrm{V^2/Hz},\\
2qI_BR_E^2&=2(1.6\times10^{-19}\ \mathrm C)(0.1\ \mu\mathrm A)(1\ \mathrm{k\Omega})^2=3.2\times10^{-20}\ \mathrm{V^2/Hz},\\
\frac{\overline{v_i^2}}{\Delta f}&=4.32\times10^{-17}\ \mathrm{V^2/Hz},\qquad
\frac{\overline{i_i^2}}{\Delta f}=3.2\times10^{-26}\ \mathrm{A^2/Hz}.
\end{aligned}
$$

The $2qI_BR_E^2$ term is only 0.07% of $\overline{v_i^2}$ because the base current is so small.

### Step 2 — Minimum noise figure

For uncorrelated generators, $F=1+(\overline{v_i^2}+\overline{i_i^2}R_S^2)/(4kTR_S\Delta f)$ is minimized at $\overline{i_i^2}R_S^2=\overline{v_i^2}$:

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{4.32\times10^{-17}}{3.2\times10^{-26}}}\ \Omega=36.7\ \mathrm{k\Omega},\qquad
F_{\mathrm{opt}}=1+\frac{2\sqrt{(4.32\times10^{-17})(3.2\times10^{-26})}}{1.66\times10^{-20}}=1.142,
$$

$$
\mathrm{NF}_{\mathrm{opt}}=10\log_{10}1.142=0.58\ \mathrm{dB}.
$$

### Step 3 — Correlated check and comparison

Writing the total input noise exactly, with the base current noise flowing through $R_t=R_S+r_b+R_E$ and the collector shot noise referred as $i_c(1/g_m+R_t/\beta_F)$, and minimizing numerically gives $R_{S(\mathrm{opt})}\approx36.7$ kΩ and $F_{\mathrm{opt}}\approx1.158$ (0.64 dB), close to the simple result.

Without $R_E$ the same transistor has $R_{S(\mathrm{opt})}=28.8$ kΩ and 0.46 dB. The 1-kΩ emitter resistor adds its thermal noise to the voltage generator, raising the optimum source resistance and the minimum noise figure. The penalty is small here because $R_E$ is comparable to the existing $r_b+1/2g_m=1.6$ kΩ, in contrast to the 2-mA device, where $R_E$ dwarfs $r_b+1/2g_m=113\ \Omega$.
