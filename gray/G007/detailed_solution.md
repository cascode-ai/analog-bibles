# Detailed solution - G007

Find $BV_{CBO}$ from the plane-junction breakdown of the one-sided collector–base junction, then reduce it to the open-base value: avalanche current entering the base is amplified by the transistor, so breakdown in the common-emitter connection occurs at $M\alpha_F=1$.

### Step 1 — $BV_{CBO}$

The base is much more heavily doped, so the depletion region lies in the collector, $N_D=10^{15}\ \mathrm{cm^{-3}}$. The one-sided abrupt-junction peak field is $|\mathcal E_{max}|=\sqrt{2qN_DV_R/\epsilon}$ (Poisson's equation, $V_R\gg\psi_0$). Setting it equal to $\mathcal E_{crit}$:

$$
BV_{CBO}=\frac{\epsilon\,\mathcal E_{crit}^2}{2qN_D}=\frac{(1.04\times10^{-12}\ \mathrm{F/cm})(3\times10^5\ \mathrm{V/cm})^2}{2(1.6\times10^{-19}\ \mathrm C)(10^{15}\ \mathrm{cm^{-3}})}=292.5\ \mathrm V .
$$

### Step 2 — Open-base breakdown condition

With multiplication in the collector–base depletion region, $I_C=M\alpha_FI_E$ and $I_B=I_E-I_C$, so

$$
I_C=\frac{M\alpha_F}{1-M\alpha_F}\,I_B ,
$$

which diverges when $M\alpha_F=1$. Taking $V_{CB}\approx V_{CE}$ (since $V_{BE}\approx0.7$ V is small) and inserting the multiplication law:

$$
1-\left(\frac{BV_{CEO}}{BV_{CBO}}\right)^n=\alpha_F
\quad\Rightarrow\quad
BV_{CEO}=BV_{CBO}(1-\alpha_F)^{1/n}\approx\frac{BV_{CBO}}{\beta_F^{1/n}} .
$$

### Step 3 — Numerical value

With $\beta_F=400$ and $n=4$, $400^{1/4}=4.472$:

$$
BV_{CEO}=\frac{292.5\ \mathrm V}{4.472}=65.4\ \mathrm V .
$$

The exact form $1-\alpha_F=1/401$ gives 65.4 V as well. Compared with a collector doping of $6\times10^{15}\ \mathrm{cm^{-3}}$, the lighter doping raises $BV_{CBO}$ sixfold, while the higher $\beta_F$ takes back part of the gain in $BV_{CEO}$.

Results: $BV_{CBO}=293$ V and $BV_{CEO}\approx65$ V.
