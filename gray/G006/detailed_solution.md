# Detailed solution - G006

First find $BV_{CBO}$ from the plane-junction breakdown of the one-sided collector–base junction. Then use the fact that, with the base open, avalanche-generated holes act as base current and are amplified by the transistor; this regenerative loop sets the breakdown at $M\alpha_F=1$, well below $BV_{CBO}$.

### Step 1 — $BV_{CBO}$ of the collector–base junction

The base is much more heavily doped, so the depletion region lies in the collector, with doping $N_D=6\times10^{15}\ \mathrm{cm^{-3}}$. For a one-sided abrupt junction the peak field is $|\mathcal E_{max}|=\sqrt{2qN_DV_R/\epsilon}$ (Poisson's equation with $V_R\gg\psi_0$). Setting it equal to $\mathcal E_{crit}$:

$$
BV_{CBO}=\frac{\epsilon\,\mathcal E_{crit}^2}{2qN_D}
=\frac{(1.04\times10^{-12}\ \mathrm{F/cm})(3\times10^5\ \mathrm{V/cm})^2}{2(1.6\times10^{-19}\ \mathrm C)(6\times10^{15}\ \mathrm{cm^{-3}})}=48.75\ \mathrm V.
$$

### Step 2 — Breakdown condition in the common-emitter connection

The electron current $\alpha_FI_E$ arriving at the collector is multiplied by $M$ in the collector–base depletion region, so $I_C=M\alpha_FI_E$. The base current is $I_B=I_E-I_C$, and with $I_E=I_C/(M\alpha_F)$:

$$
I_C=\frac{M\alpha_F}{1-M\alpha_F}\,I_B .
$$

With a finite (or zero, open-base) $I_B$, the collector current grows without bound as $M\alpha_F\to1$. That is the definition of $BV_{CEO}$. Since $V_{BE}\approx0.7$ V is small compared with the breakdown voltage, $V_{CB}\approx V_{CE}$, and the multiplication law gives

$$
\frac{\alpha_F}{1-(BV_{CEO}/BV_{CBO})^n}=1
\quad\Rightarrow\quad
BV_{CEO}=BV_{CBO}(1-\alpha_F)^{1/n}\approx\frac{BV_{CBO}}{\beta_F^{1/n}},
$$

using $1-\alpha_F=1/(\beta_F+1)\approx1/\beta_F$.

### Step 3 — Numerical value

With $\beta_F=200$ and $n=4$, $200^{1/4}=3.761$:

$$
BV_{CEO}=\frac{48.75\ \mathrm V}{3.761}=12.96\ \mathrm V\approx13\ \mathrm V.
$$

Using the exact $1-\alpha_F=1/201$ changes this only to 12.95 V. The current gain makes the open-base breakdown about one quarter of $BV_{CBO}$: only a small multiplication, $M=1/\alpha_F=1.005$, is needed.

Results: $BV_{CBO}=48.8$ V and $BV_{CEO}\approx13$ V.
