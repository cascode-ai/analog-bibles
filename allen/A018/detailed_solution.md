# Detailed solution - A018

Use the depletion approximation for an abrupt (step) junction: the depletion region is fully ionized with charge densities $-qN_A$ on the p side and $+qN_D$ on the n side, and neutral outside. The barrier potential follows from the doping; Poisson's equation and charge neutrality then give the depletion edges, and the capacitance is that of a parallel-plate capacitor of the depletion width.

### Step 1 — Barrier potential

$$
\phi_0=\frac{kT}{q}\ln\frac{N_AN_D}{n_i^2}
=(0.0259\ \mathrm V)\ln\frac{(5\times10^{15})(10^{20})\ \mathrm{cm^{-6}}}{(1.45\times10^{10}\ \mathrm{cm^{-3}})^2}
=(0.0259\ \mathrm V)\ln(2.378\times10^{15})=0.917\ \mathrm V .
$$

With $v_D=-2$ V the total potential across the depletion region is $\phi_0-v_D=2.917$ V.

### Step 2 — Depletion edges

Integrating Poisson's equation across the two charge layers and requiring the potential drop to equal $\phi_0-v_D$ gives, for the p-side edge,

$$
x_p=-\left[\frac{2\varepsilon_{Si}(\phi_0-v_D)N_D}{qN_A(N_A+N_D)}\right]^{1/2}.
$$

With $\varepsilon_{Si}=11.7(8.85\times10^{-14}\ \mathrm{F/cm})=1.035\times10^{-12}$ F/cm and $N_D/(N_A+N_D)=0.99995\approx1$:

$$
x_p\approx-\left[\frac{2(1.035\times10^{-12}\ \mathrm{F/cm})(2.917\ \mathrm V)}{(1.6\times10^{-19}\ \mathrm C)(5\times10^{15}\ \mathrm{cm^{-3}})}\right]^{1/2}
=-8.69\times10^{-5}\ \mathrm{cm}=-0.869\ \mu\mathrm m .
$$

Charge neutrality, $N_Dx_n=-N_Ax_p$, gives the n-side edge:

$$
x_n=|x_p|\frac{N_A}{N_D}=(0.869\ \mu\mathrm m)(5\times10^{-5})=4.3\times10^{-5}\ \mu\mathrm m\approx0.04\ \mathrm{nm}.
$$

Because the n side is $2\times10^4$ times more heavily doped, the depletion region lies almost entirely in the p side:

$$
x_d=x_n-x_p=0.869\ \mu\mathrm m .
$$

### Step 3 — Zero-bias depletion capacitance

For a step junction of area $A$,

$$
C_{j0}=A\left[\frac{\varepsilon_{Si}qN_AN_D}{2(N_A+N_D)}\right]^{1/2}\frac{1}{\sqrt{\phi_0}} .
$$

With $A=(10\ \mu\mathrm m)^2=10^{-6}\ \mathrm{cm^2}$ and $N_AN_D/(N_A+N_D)\approx N_A$:

$$
C_{j0}=(10^{-6}\ \mathrm{cm^2})\sqrt{\frac{(1.035\times10^{-12}\ \mathrm{F/cm})(1.6\times10^{-19}\ \mathrm C)(5\times10^{15}\ \mathrm{cm^{-3}})}{2(0.917\ \mathrm V)}}=21.3\ \mathrm{fF}.
$$

### Step 4 — Depletion capacitance at $v_D=-2$ V

The depletion charge grows as $\sqrt{\phi_0-v_D}$, so the incremental capacitance falls as its inverse:

$$
C_j=\frac{C_{j0}}{\sqrt{1-v_D/\phi_0}}=\frac{21.3\ \mathrm{fF}}{\sqrt{1+2/0.917}}=\frac{21.3\ \mathrm{fF}}{1.784}=11.9\ \mathrm{fF}.
$$

As a check, the parallel-plate form gives the same value: $\varepsilon_{Si}A/x_d=(1.035\times10^{-12}\ \mathrm{F/cm})(10^{-6}\ \mathrm{cm^2})/(8.69\times10^{-5}\ \mathrm{cm})=11.9$ fF.

| Quantity | Value |
|---|---|
| $\phi_0$ | 0.917 V |
| $x_p$ | −0.869 µm |
| $x_n$ | $4.3\times10^{-5}$ µm |
| $x_d$ | 0.869 µm |
| $C_{j0}$ | 21.3 fF |
| $C_j(-2\ \mathrm V)$ | 11.9 fF |
