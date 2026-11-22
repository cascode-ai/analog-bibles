# Detailed solution - G003

In the depletion approximation the junction behaves as a parallel-plate capacitor whose plate spacing is the total depletion width, $C_j=\epsilon A/W_{tot}$. Since $W_{tot}\propto\sqrt{\psi_0-V_D}$ for an abrupt junction, the capacitance varies as $(1-V_D/\psi_0)^{-1/2}$, with $V_D$ positive for forward bias.

### Step 1 — Built-in potential

$$
\psi_0=\frac{kT}{q}\ln\frac{N_AN_D}{n_i^2}=(0.026\ \mathrm V)\ln\frac{(8\times10^{15})(10^{17})}{(1.5\times10^{10})^2}=0.751\ \mathrm V .
$$

### Step 2 — Zero-bias capacitance

A small change $dV$ in the junction voltage moves the depleted charge $Q=qAN_AW_1$ at the depletion edges, so $C_j=dQ/dV$. With $W_1=\left[2\epsilon(\psi_0-V_D)/\big(qN_A(1+N_A/N_D)\big)\right]^{1/2}$ from Poisson's equation and charge neutrality,

$$
C_j=A\left[\frac{q\epsilon N_AN_D}{2(N_A+N_D)(\psi_0-V_D)}\right]^{1/2}=\frac{C_{j0}}{\sqrt{1-V_D/\psi_0}},\qquad
C_{j0}=A\left[\frac{q\epsilon N_AN_D}{2(N_A+N_D)\psi_0}\right]^{1/2}.
$$

Substituting, with $N_AN_D/(N_A+N_D)=7.41\times10^{15}\ \mathrm{cm^{-3}}$:

$$
\begin{aligned}
C_{j0}&=(2\times10^{-5}\ \mathrm{cm^2})\left[\frac{(1.6\times10^{-19}\ \mathrm C)(1.04\times10^{-12}\ \mathrm{F/cm})(7.41\times10^{15}\ \mathrm{cm^{-3}})}{2(0.751\ \mathrm V)}\right]^{1/2}\\
&=(2\times10^{-5}\ \mathrm{cm^2})(2.864\times10^{-8}\ \mathrm{F/cm^2})=5.73\times10^{-13}\ \mathrm F=0.573\ \mathrm{pF}.
\end{aligned}
$$

Equivalently, the zero-bias total width is $W_{tot}=0.363\ \mu$m, and $\epsilon A/W_{tot}=(1.04\times10^{-12}\ \mathrm{F/cm})(2\times10^{-5}\ \mathrm{cm^2})/(3.63\times10^{-5}\ \mathrm{cm})=0.573$ pF.

### Step 3 — 5 V reverse and 0.3 V forward bias

For reverse bias $V_D=-5$ V, the junction voltage rises and the depletion region widens:

$$
C_j=\frac{0.573\ \mathrm{pF}}{\sqrt{1+5\ \mathrm V/0.751\ \mathrm V}}=\frac{0.573\ \mathrm{pF}}{\sqrt{7.654}}=0.207\ \mathrm{pF}.
$$

For forward bias $V_D=+0.3$ V, the depletion region narrows:

$$
C_j=\frac{0.573\ \mathrm{pF}}{\sqrt{1-0.3\ \mathrm V/0.751\ \mathrm V}}=\frac{0.573\ \mathrm{pF}}{\sqrt{0.6007}}=0.739\ \mathrm{pF}.
$$

The forward-bias value uses the depletion approximation, which stays reasonable while $V_D$ is well below $\psi_0$ (here $0.3\ \mathrm V<\psi_0/2$). It gives only the depletion capacitance; the diffusion capacitance of the injected minority carriers is a separate term.

Results: $C_{j0}=0.573$ pF, $C_j=0.207$ pF at 5 V reverse bias and $C_j=0.739$ pF at 0.3 V forward bias.
