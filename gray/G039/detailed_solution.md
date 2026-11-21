# Detailed solution - G039

The substrate $pnp$ has a vertical structure: holes injected from the bottom of the $p$ emitter cross the uniformly doped $n$ epi (the base) to the $p$ substrate (the collector). With a uniform base, $I_S$ and $\tau_F$ follow from the base width, and the zero-bias capacitances from the junction areas times the per-area capacitance of one-sided step junctions.

### Step 1 — Base width and Gummel number

Neglecting depletion widths, the base extends from the 3-µm emitter junction to the epi–substrate junction at 17 µm:

$$
W_B=17\ \mu\mathrm m-3\ \mu\mathrm m=14\ \mu\mathrm m,\qquad
Q_B=N_DW_B=(10^{15}\ \mathrm{cm^{-3}})(14\times10^{-4}\ \mathrm{cm})=1.4\times10^{12}\ \mathrm{cm^{-2}}.
$$

### Step 2 — Saturation current

For a uniformly doped base with vertical flow, $I_S=qAD_pn_i^2/Q_B$. With $A=5100\ \mu\mathrm m^2=5.1\times10^{-5}\ \mathrm{cm^2}$:

$$
I_S=\frac{(1.6\times10^{-19}\ \mathrm C)(5.1\times10^{-5}\ \mathrm{cm^2})(10\ \mathrm{cm^2/s})(2.25\times10^{20}\ \mathrm{cm^{-6}})}{1.4\times10^{12}\ \mathrm{cm^{-2}}}=1.3\times10^{-14}\ \mathrm A .
$$

### Step 3 — Forward transit time

For a linear minority-carrier profile across a uniform base,

$$
\tau_F=\frac{W_B^2}{2D_p}=\frac{(14\times10^{-4}\ \mathrm{cm})^2}{2(10\ \mathrm{cm^2/s})}=9.8\times10^{-8}\ \mathrm s\approx100\ \mathrm{ns}.
$$

The very wide base makes the substrate $pnp$ slow.

### Step 4 — Emitter–base capacitance $C_{je0}$

The $p$ emitter meets the $10^{15}$ epi on its bottom and outer sidewall; the epi is the light side:

$$
\frac{C_{j0}}A=\sqrt{\frac{q\epsilon N_D}{2\psi_0}}=\sqrt{\frac{(1.6\times10^{-19}\ \mathrm C)(1.04\times10^{-12}\ \mathrm{F/cm})(10^{15}\ \mathrm{cm^{-3}})}{2(0.55\ \mathrm V)}}=1.23\times10^{-4}\ \mathrm{pF/\mu m^2}.
$$

- Bottom: $(5100\ \mu\mathrm m^2)(1.23\times10^{-4}\ \mathrm{pF/\mu m^2})=0.63$ pF.
- Outer sidewall: $2(90+75)(3)=990\ \mu$m² as vertical walls, 1555 µm² as quarter-cylinders: 0.12–0.19 pF.

So $C_{je0}\approx0.75$–0.82 pF. The inner edge of the emitter abuts the $n^+$ base-contact diffusion; this $p$–$n^+$ junction has the base diffusion ($\approx10^{17}\ \mathrm{cm^{-3}}$) as its light side, $1.23\times10^{-3}\ \mathrm{pF/\mu m^2}$, over about $170\ \mu\mathrm m\times2.5\ \mu\mathrm m=425\ \mu$m² (670 µm² with the $\pi/2$ factor), adding 0.52–0.82 pF for a total of about 1.3–1.6 pF.

### Step 5 — Base–collector capacitance $C_{\mu0}$

The collector–base junction is the whole epi pocket against the substrate. For the bottom, both sides are lightly doped, $N_{eff}=N_DN_A/(N_D+N_A)=9.1\times10^{14}\ \mathrm{cm^{-3}}$, giving $1.21\times10^{-4}\ \mathrm{pF/\mu m^2}$ at $\psi_0=0.52$ V:

$$
C_{bottom}=(143\times128\ \mu\mathrm m^2)(1.21\times10^{-4}\ \mathrm{pF/\mu m^2})=(18{,}300)(1.21\times10^{-4})\ \mathrm{pF}=2.2\ \mathrm{pF}.
$$

The isolation sidewall, $17\times2(143+128)=9214\ \mu$m² (14,500 µm² with the $\pi/2$ factor), has the epi as its light side, $1.26\times10^{-4}\ \mathrm{pF/\mu m^2}$, and adds 1.2–1.8 pF. Thus $C_{\mu0}\approx2.2$ pF for the bottom alone and 3.4–4.1 pF in total.

### Step 6 — Summary

| Quantity | Value |
|---|---|
| $I_S$ | $1.3\times10^{-14}$ A |
| $\tau_F$ | ≈ 100 ns |
| $C_{je0}$ | 0.63 pF (bottom); 0.75–0.82 pF with outer sidewall; 1.3–1.6 pF including the $n^+$ edge |
| $C_{\mu0}$ | 2.2 pF (bottom); 3.4–4.1 pF with isolation sidewalls |
