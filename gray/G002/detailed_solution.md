# Detailed solution - G002

Apply the depletion approximation to the abrupt junction. The built-in potential depends only on the dopings; an applied bias $V_D$ (positive for forward bias) changes the voltage across the depletion region from $\psi_0$ to $\psi_0-V_D$, and the depths and peak field follow from charge neutrality and Poisson's equation.

### Step 1 — Built-in potential

From the Boltzmann relations for the majority carriers, $p_{p0}=N_A$ and $n_{n0}=N_D$:

$$
\psi_0=\frac{kT}{q}\ln\frac{N_AN_D}{n_i^2}=(0.026\ \mathrm V)\ln\frac{(8\times10^{15})(10^{17})}{(1.5\times10^{10})^2}=(0.026\ \mathrm V)(28.90)=0.751\ \mathrm V .
$$

It is the same in both cases, since bias does not change the dopings.

### Step 2 — Depletion-region formulas

Charge neutrality gives $N_AW_1=N_DW_2$. Integrating Poisson's equation across the uniformly charged regions gives the voltage across them, $\psi_0-V_D=q(N_AW_1^2+N_DW_2^2)/(2\epsilon)$. Eliminating $W_2$:

$$
W_1=\left[\frac{2\epsilon(\psi_0-V_D)}{qN_A\left(1+N_A/N_D\right)}\right]^{1/2},\qquad
W_2=W_1\frac{N_A}{N_D},\qquad
|\mathcal E_{max}|=\frac{qN_AW_1}{\epsilon}.
$$

The peak field, at the metallurgical junction, follows from Gauss's law integrated across the p-side charge. All three quantities scale as $\sqrt{\psi_0-V_D}$.

### Step 3 — Zero bias

With $V_D=0$ the junction voltage is $\psi_0=0.751$ V and $1+N_A/N_D=1.08$:

$$
\begin{aligned}
W_1&=\left[\frac{2(1.04\times10^{-12}\ \mathrm{F/cm})(0.751\ \mathrm V)}{(1.6\times10^{-19}\ \mathrm C)(8\times10^{15}\ \mathrm{cm^{-3}})(1.08)}\right]^{1/2}=3.36\times10^{-5}\ \mathrm{cm}=0.336\ \mu\mathrm m,\\
W_2&=(0.336\ \mu\mathrm m)(0.08)=0.0269\ \mu\mathrm m,\\
|\mathcal E_{max}|&=\frac{(1.6\times10^{-19}\ \mathrm C)(8\times10^{15}\ \mathrm{cm^{-3}})(3.36\times10^{-5}\ \mathrm{cm})}{1.04\times10^{-12}\ \mathrm{F/cm}}=4.14\times10^4\ \mathrm{V/cm}.
\end{aligned}
$$

### Step 4 — 0.3 V forward bias

A forward bias opposes the built-in potential, so the junction voltage drops to $\psi_0-V_D=0.751\ \mathrm V-0.3\ \mathrm V=0.451$ V. Scaling the zero-bias results by $\sqrt{0.451/0.751}=0.775$:

| Quantity | Zero bias | 0.3 V forward |
|---|---|---|
| Junction voltage $\psi_0-V_D$ (V) | 0.751 | 0.451 |
| $W_1$ (µm, p side) | 0.336 | 0.261 |
| $W_2$ (µm, n side) | 0.0269 | 0.0208 |
| $\lvert\mathcal E_{max}\rvert$ (V/cm) | $4.14\times10^4$ | $3.21\times10^4$ |

Forward bias narrows the depletion region and lowers the field. In both cases most of the depletion region lies on the lightly doped p side, $W_1/W_2=N_D/N_A=12.5$.
