# Detailed solution - A029

Evaluate the given threshold expression term by term: Fermi potentials and the work-function difference from the dopings, the oxide capacitance from the thickness, the depletion and interface charges converted to voltages through $C_{ox}$, and finally the body factor from the substrate doping and $C_{ox}$.

### Step 1 — Fermi potentials and $\phi_{MS}$

$$
\phi_F(\text{substrate})=-(0.0259\ \mathrm V)\ln\frac{7\times10^{16}}{1.45\times10^{10}}=-0.399\ \mathrm V,
\qquad
\phi_F(\text{gate})=(0.0259\ \mathrm V)\ln\frac{10^{19}}{1.45\times10^{10}}=0.527\ \mathrm V,
$$

$$
\phi_{MS}=-0.399\ \mathrm V-0.527\ \mathrm V=-0.926\ \mathrm V,\qquad -2\phi_F=0.797\ \mathrm V .
$$

### Step 2 — Oxide capacitance

$$
C_{ox}=\frac{3.9(8.854\times10^{-14}\ \mathrm{F/cm})}{200\times10^{-8}\ \mathrm{cm}}=1.727\times10^{-7}\ \mathrm{F/cm^2}.
$$

### Step 3 — Charge terms

With $\varepsilon_{Si}=11.7\varepsilon_0=1.036\times10^{-12}$ F/cm,

$$
Q_{b0}=-\sqrt{2q\varepsilon_{Si}N_A\,2|\phi_F|}
=-\sqrt{2(1.6\times10^{-19}\ \mathrm C)(1.036\times10^{-12}\ \mathrm{F/cm})(7\times10^{16}\ \mathrm{cm^{-3}})(0.797\ \mathrm V)}
=-1.36\times10^{-7}\ \mathrm{C/cm^2},
$$

so $-Q_{b0}/C_{ox}=0.788$ V. The interface charge $Q_{ss}=1.6\times10^{-9}\ \mathrm{C/cm^2}$ gives $Q_{ss}/C_{ox}=0.0093$ V.

### Step 4 — Zero-bias threshold

$$
V_{T0}=\phi_{MS}-2\phi_F-\frac{Q_{b0}}{C_{ox}}-\frac{Q_{ss}}{C_{ox}}
=-0.926+0.797+0.788-0.009=0.650\ \mathrm V .
$$

### Step 5 — Body factor

$$
\gamma=\frac{\sqrt{2q\varepsilon_{Si}N_A}}{C_{ox}}
=\frac{\sqrt{2(1.6\times10^{-19})(1.036\times10^{-12})(7\times10^{16})}\ \mathrm{C\,cm^{-2}V^{-1/2}}}{1.727\times10^{-7}\ \mathrm{F/cm^2}}
=\frac{1.523\times10^{-7}}{1.727\times10^{-7}}\ \mathrm{V^{1/2}}=0.882\ \mathrm{V^{1/2}}.
$$

Compared with a substrate doping of $3\times10^{16}\ \mathrm{cm^{-3}}$ (for which $V_{T0}\approx0.31$ V, $\gamma\approx0.58\ \mathrm{V^{1/2}}$ with the same oxide), the heavier doping raises both: the depletion charge grows roughly as $\sqrt{N_A}$, and $\gamma$ scales exactly as $\sqrt{N_A}$.
