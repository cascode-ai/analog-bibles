# Detailed solution - G004

Avalanche breakdown is taken to occur when the peak field in the depletion region reaches the critical field. Express the peak field of an abrupt junction in terms of the voltage across it using the depletion approximation, then solve for the voltage at which $|\mathcal E_{max}|=\mathcal E_{crit}$.

### Step 1 — Peak field versus junction voltage

With charge neutrality $N_AW_1=N_DW_2$ and Poisson's equation, the voltage across the depletion region is $V_j=\tfrac12|\mathcal E_{max}|(W_1+W_2)$, and the peak field at the junction is $|\mathcal E_{max}|=qN_AW_1/\epsilon=qN_DW_2/\epsilon$. Eliminating the widths:

$$
W_1+W_2=\frac{\epsilon|\mathcal E_{max}|}{q}\left(\frac1{N_A}+\frac1{N_D}\right)
\quad\Rightarrow\quad
|\mathcal E_{max}|=\left[\frac{2qN_AN_DV_j}{\epsilon(N_A+N_D)}\right]^{1/2}.
$$

Here $V_j=\psi_0+V_R$; at breakdown $V_R\gg\psi_0$, so $V_j\approx V_R$.

### Step 2 — Breakdown voltage

Setting $|\mathcal E_{max}|=\mathcal E_{crit}$ and solving for the voltage:

$$
BV=\frac{\epsilon\,\mathcal E_{crit}^2}{2q}\left(\frac1{N_A}+\frac1{N_D}\right).
$$

Substituting:

$$
\begin{aligned}
\frac{\epsilon\,\mathcal E_{crit}^2}{2q}&=\frac{(1.04\times10^{-12}\ \mathrm{F/cm})(4\times10^5\ \mathrm{V/cm})^2}{2(1.6\times10^{-19}\ \mathrm C)}=5.2\times10^{17}\ \mathrm{V\,cm^{-3}},\\
BV&=(5.2\times10^{17}\ \mathrm{V\,cm^{-3}})\left(1.25\times10^{-16}+10^{-17}\right)\mathrm{cm^3}=70.2\ \mathrm V.
\end{aligned}
$$

Strictly this is the total junction voltage $\psi_0+V_R$; subtracting $\psi_0\approx0.75$ V gives an applied reverse voltage of 69.4 V, so $BV\approx70$ V either way.

### Step 3 — Which side controls

The term $1/N_A$ contributes 92.6% of the sum: the lightly doped p side carries most of the depletion width and sets the breakdown. Keeping only $N_A$ (the one-sided approximation) would give $(5.2\times10^{17}\ \mathrm{V\,cm^{-3}})/(8\times10^{15}\ \mathrm{cm^{-3}})=65$ V, about 7% low.

Result: $BV\approx70$ V.
