# Detailed solution - A022

In a step junction the field peaks at the metallurgical junction and grows with the square root of the total junction potential. Express that peak field in terms of the reverse voltage, set it equal to the critical field, and solve for the voltage.

### Step 1 — Peak field of a step junction

Under the depletion approximation, Gauss's law gives a field that rises linearly from each depletion edge to the junction, where it peaks at $|E_0|=qN_Ax_p'/\varepsilon_{Si}=qN_Dx_n/\varepsilon_{Si}$ (with $x_p'=|x_p|$). Substituting the depletion edges of the step junction,

$$
|E_0|=\left[\frac{2qN_AN_D}{\varepsilon_{Si}(N_A+N_D)}\right]^{1/2}(\phi_0+v_R)^{1/2},
$$

where $v_R=-v_D>0$ is the reverse bias.

### Step 2 — Breakdown condition

Breakdown occurs when $|E_0|=E_{max}$. Squaring and, as instructed, neglecting $\phi_0$ against $v_R$:

$$
BV\approx\frac{\varepsilon_{Si}(N_A+N_D)}{2qN_AN_D}\,E_{max}^2 .
$$

### Step 3 — Numerical value

With $\varepsilon_{Si}=11.7(8.85\times10^{-14}\ \mathrm{F/cm})=1.035\times10^{-12}$ F/cm and $N_A=N_D=10^{16}\ \mathrm{cm^{-3}}$:

$$
BV\approx\frac{(1.035\times10^{-12}\ \mathrm{F/cm})(2\times10^{16}\ \mathrm{cm^{-3}})(3\times10^{5}\ \mathrm{V/cm})^2}{2(1.6\times10^{-19}\ \mathrm C)(10^{16}\ \mathrm{cm^{-3}})^2}
=58.2\ \mathrm V .
$$

So $BV\approx58$ V. The neglected barrier potential is about 0.70 V for this doping; keeping it would lower the result to $58.2-0.7\approx57.5$ V, a 1 % correction, which justifies the approximation.
