# Detailed solution - A056

Read the drain and source diffusion dimensions from the layout, then evaluate the bottom-plus-sidewall junction capacitance at zero bias, since the transistor is off and the drain, source and substrate are all grounded.

### Step 1 — Area and perimeter of each diffusion

From [Fig. 1] (1 µm grid), the n⁺ active area is 20 µm × 22 µm and the poly gate across it is 2 µm wide. The drain and the source are therefore each

$$
\frac{20\ \mu\mathrm m-2\ \mu\mathrm m}{2}\times22\ \mu\mathrm m=9\ \mu\mathrm m\times22\ \mu\mathrm m,
$$

$$
A=(9\ \mu\mathrm m)(22\ \mu\mathrm m)=198\ \mu\mathrm m^2,\qquad P=2(9\ \mu\mathrm m+22\ \mu\mathrm m)=62\ \mu\mathrm m,
$$

with all four sides, including the gate-side edge, counted in the perimeter as instructed. The layout is symmetric, so $C_{BD}=C_{BS}$.

### Step 2 — Junction capacitance at zero bias

Each n⁺/p-substrate junction has a bottom (area) part and a sidewall (perimeter) part, both of depletion type:

$$
C_{BX}=\frac{\mathrm{CJ}\cdot A}{(1+|V_{BX}|/\mathrm{PB})^{\mathrm{MJ}}}+\frac{\mathrm{CJSW}\cdot P}{(1+|V_{BX}|/\mathrm{PB})^{\mathrm{MJSW}}} .
$$

With drain, source and substrate all at ground, $V_{BD}=V_{BS}=0$; both denominators equal 1, and PB, MJ and MJSW are not needed:

$$
\begin{aligned}
C_{BD}=C_{BS}&=\mathrm{CJ}\cdot A+\mathrm{CJSW}\cdot P\\
&=(770\times10^{-6}\ \mathrm{F/m^2})(198\times10^{-12}\ \mathrm{m^2})+(380\times10^{-12}\ \mathrm{F/m})(62\times10^{-6}\ \mathrm m)\\
&=152.5\ \mathrm{fF}+23.6\ \mathrm{fF}=176\ \mathrm{fF}.
\end{aligned}
$$

For a diffusion this large the bottom term dominates (87% of the total). The cut-off state of the transistor does not change these values: the junction capacitances depend only on the junction bias, which is zero here.
