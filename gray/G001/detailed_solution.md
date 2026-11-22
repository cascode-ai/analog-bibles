# Detailed solution - G001

Use the depletion approximation for an abrupt junction: the space-charge region is fully depleted, with uniform charge $-qN_A$ on the p side and $+qN_D$ on the n side, and the neutral regions carry no field. Charge neutrality and Poisson's equation then fix the depletion depths and the peak field in terms of the total junction voltage $\psi_0+V_R$.

### Step 1 — Built-in potential

In equilibrium the electrostatic potential difference between the neutral p and n regions follows from the Boltzmann relations for the majority carriers, $p_{p0}=N_A$ and $n_{n0}=N_D$, with $np=n_i^2$:

$$
\psi_0=\frac{kT}{q}\ln\frac{N_AN_D}{n_i^2}.
$$

With the given values,

$$
\frac{N_AN_D}{n_i^2}=\frac{(8\times10^{15})(10^{17})}{(1.5\times10^{10})^2}=3.556\times10^{12},\qquad
\psi_0=(0.026\ \mathrm V)(28.90)=0.751\ \mathrm V.
$$

### Step 2 — Depletion depths at 5 V reverse bias

A reverse bias $V_R$ adds to the built-in potential, so the voltage across the depletion region is $\psi_0+V_R=5.751$ V. Charge neutrality requires equal and opposite depleted charge on the two sides:

$$
N_AW_1=N_DW_2 .
$$

Integrating Poisson's equation $d^2V/dx^2=-\rho/\epsilon$ twice across both regions gives the voltage drop $\psi_0+V_R=\dfrac{qN_AW_1^2}{2\epsilon}+\dfrac{qN_DW_2^2}{2\epsilon}$. Eliminating $W_2$ with the neutrality condition,

$$
W_1=\left[\frac{2\epsilon(\psi_0+V_R)}{qN_A\left(1+N_A/N_D\right)}\right]^{1/2},\qquad W_2=W_1\frac{N_A}{N_D}.
$$

Substituting, with $1+N_A/N_D=1.08$:

$$
\begin{aligned}
W_1&=\left[\frac{2(1.04\times10^{-12}\ \mathrm{F/cm})(5.751\ \mathrm V)}{(1.6\times10^{-19}\ \mathrm C)(8\times10^{15}\ \mathrm{cm^{-3}})(1.08)}\right]^{1/2}
=9.30\times10^{-5}\ \mathrm{cm}=0.930\ \mu\mathrm m,\\
W_2&=(0.930\ \mu\mathrm m)(0.08)=7.44\times10^{-6}\ \mathrm{cm}=0.0744\ \mu\mathrm m .
\end{aligned}
$$

The total depletion width is $W_1+W_2=1.00\ \mu$m. Most of it lies on the lightly doped p side, because the same charge needs a depth inversely proportional to the doping.

### Step 3 — Maximum field

The field grows linearly through each depleted region (Gauss's law with uniform charge) and peaks at the metallurgical junction. Integrating from the p-side edge:

$$
|\mathcal E_{max}|=\frac{qN_AW_1}{\epsilon}=\frac{(1.6\times10^{-19}\ \mathrm C)(8\times10^{15}\ \mathrm{cm^{-3}})(9.30\times10^{-5}\ \mathrm{cm})}{1.04\times10^{-12}\ \mathrm{F/cm}}=1.14\times10^{5}\ \mathrm{V/cm}.
$$

The n side gives the same value, $qN_DW_2/\epsilon$, by charge neutrality. As a check, the triangular field profile gives $\tfrac12|\mathcal E_{max}|(W_1+W_2)=\tfrac12(1.14\times10^5\ \mathrm{V/cm})(1.005\times10^{-4}\ \mathrm{cm})=5.75$ V, the junction voltage.

Results: $\psi_0=0.751$ V, $W_1=0.93\ \mu$m (p side), $W_2=0.074\ \mu$m (n side), and $|\mathcal E_{max}|=1.14\times10^5$ V/cm at the junction.
