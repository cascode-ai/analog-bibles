# Detailed solution - G005

For a one-sided abrupt junction the depletion region lies almost entirely in the lightly doped side, so only that doping $N$ enters the plane-junction field. Curvature multiplies the peak field by 1.5, so breakdown occurs when the plane-junction field reaches $\mathcal E_{crit}/1.5$; solve for the doping that makes this happen at 150 V.

### Step 1 — Plane-junction peak field of a one-sided junction

With the heavily doped side's depletion width negligible, Poisson's equation across the uniform charge $qN$ of width $W$ gives $|\mathcal E_{max}|=qNW/\epsilon$ and $V_R=\tfrac12|\mathcal E_{max}|W$ (taking $V_R\gg\psi_0$). Eliminating $W$:

$$
|\mathcal E_{max}|=\sqrt{\frac{2qNV_R}{\epsilon}} .
$$

### Step 2 — Breakdown condition with curvature

The practical junction has a peak field $1.5|\mathcal E_{max}|$, and it breaks down when this equals $\mathcal E_{crit}$:

$$
1.5\sqrt{\frac{2qN\,BV}{\epsilon}}=\mathcal E_{crit}
\quad\Rightarrow\quad
N=\frac{\epsilon\left(\mathcal E_{crit}/1.5\right)^2}{2q\,BV}.
$$

Since the field rather than the voltage is scaled, the voltage at fixed doping falls by $1.5^2=2.25$.

### Step 3 — Required doping

With $\mathcal E_{crit}/1.5=2\times10^5$ V/cm and $BV=150$ V:

$$
N=\frac{(1.04\times10^{-12}\ \mathrm{F/cm})(2\times10^5\ \mathrm{V/cm})^2}{2(1.6\times10^{-19}\ \mathrm C)(150\ \mathrm V)}=\frac{4.16\times10^{-2}\ \mathrm{C/cm^3}}{4.8\times10^{-17}\ \mathrm C}=8.67\times10^{14}\ \mathrm{cm^{-3}}.
$$

This is the doping of the lightly doped side; any lower doping gives a higher breakdown voltage. For comparison, a plane junction with this doping would break down at $2.25\times150\ \mathrm V=337$ V.

Result: $N\approx8.7\times10^{14}$ atoms/cm³ (or less) on the lightly doped side.
