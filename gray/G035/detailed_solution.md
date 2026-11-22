# Detailed solution - G035

Each element is estimated from the layout dimensions and the vertical profile. Resistances follow the current path: lateral flow in the base layer for $r_b$, vertical flow through the epi plus lateral flow in the buried layer for $r_c$. Capacitances are junction area (bottom plus sidewall) times the zero-bias capacitance per unit area of the relevant junction, each treated as a one-sided step junction. Mask dimensions are enlarged by the lateral diffusion where it matters.

### Step 1 — Zero-bias capacitance per unit area

For a one-sided step junction the depletion region lies in the lightly doped side, of doping $N$:

$$
\frac{C_{j0}}A=\sqrt{\frac{q\epsilon N}{2\psi_0}} .
$$

For the emitter–base junction ($N=10^{17}\ \mathrm{cm^{-3}}$, $\psi_0=0.7$ V):

$$
\frac{C_{j0}}A=\sqrt{\frac{(1.6\times10^{-19}\ \mathrm C)(1.04\times10^{-12}\ \mathrm{F/cm})(10^{17}\ \mathrm{cm^{-3}})}{2(0.7\ \mathrm V)}}=1.09\times10^{-7}\ \mathrm{F/cm^2}=1.09\times10^{-3}\ \mathrm{pF/\mu m^2}.
$$

| Junction | Light side, $N$ (cm⁻³) | $\psi_0$ (V) | $C_{j0}/A$ (pF/µm²) |
|---|---|---|---|
| Emitter–base | base, $10^{17}$ | 0.7 | $1.09\times10^{-3}$ |
| Collector–base | epi, $10^{15}$ | 0.55 | $1.23\times10^{-4}$ |
| Epi–substrate and isolation sidewall | epi, $\approx0.9\times10^{15}$ | 0.52 | $1.21\times10^{-4}$ |
| Buried layer–substrate | substrate, $10^{16}$ | 0.52 | $4.0\times10^{-4}$ |

Rounded values read from the usual nomograph ($10^{-3}$, $10^{-4}$, $10^{-4}$ and $3.3\times10^{-4}$ pF/µm²) give results about 10–20% lower; both are acceptable hand estimates.

### Step 2 — Base resistance $r_b$

Base current flows laterally from the base-contact stripes through the extrinsic base (100 Ω/□) to the emitter edges. Each of the four 42-µm emitter edges faces a base contact about 9 µm away, so each path is $9/42$ of a square:

$$
R_{path}=\left(100\ \Omega/\square\right)\frac{9\ \mu\mathrm m}{42\ \mu\mathrm m}=21.4\ \Omega,\qquad
r_b\approx\frac{21.4\ \Omega}4=5.4\ \Omega .
$$

Using the individual spacings 7.9, 10.7, 9.1 and 8.9 µm gives the same 5.4 Ω. The intrinsic (pinched) base under the emitters adds a further term, but its sheet resistance is not given; at the high currents this device is designed for, current crowding confines the emitter current to the edges and makes the extrinsic value the relevant one.

### Step 3 — Collector resistance $r_c$

Collector current flows down through the lightly doped epi under each emitter ($r_{c1}$), laterally through the buried layer ($r_{c2}$), and up through the epi under the collector contact ($r_{c3}$). A vertical region whose cross-section widens linearly from $W\times L$ at the top to $aW\times bL$ at the bottom over a thickness $T$ has

$$
R=\int_0^T\frac{\rho\,dz}{W(z)L(z)}=\frac{\rho T\ln(a/b)}{WL(a-b)} ,
$$

with the bottom edges taken as the top edges plus $2T$ (45° spreading), or the buried-layer edge where that is closer. The epi resistivity is $\rho=5\ \Omega\,$cm.

- $r_{c1}$: $T=6\ \mu\mathrm m$ minus about 1 µm of zero-bias collector–base depletion, so 5 µm; top 28 × 46 µm (emitter plus 2 µm side diffusion), bottom 38 × 56 µm, $a=1.36$, $b=1.22$:
$$
r_{c1}=\frac{(5\ \Omega\,\mathrm{cm})(5\times10^{-4}\ \mathrm{cm})\ln(1.357/1.217)}{(28\times10^{-4}\ \mathrm{cm})(46\times10^{-4}\ \mathrm{cm})(0.140)}=151\ \Omega
$$
per emitter, so 75 Ω for the two in parallel.
- $r_{c2}$: about $55/131$ of a square of 20 Ω/□, so 8 Ω.
- $r_{c3}$: $T=6.5\ \mu$m, top 141 × 21 µm (contact diffusion plus side diffusion), bottom about 147 × 37 µm (limited by the buried-layer edges except toward the base): 80 Ω.

$$
r_c=r_{c1}+r_{c2}+r_{c3}\approx75+8+80=163\ \Omega\approx165\ \Omega
$$

in the forward-active region. In saturation the epi under the emitters is flooded with carriers and $r_{c1}$ nearly disappears, leaving about 90 Ω.

### Step 4 — Emitter–base and collector–base capacitances

The sidewalls are modelled as quarter-cylinders of radius equal to the junction depth, area $=\text{perimeter}\times x_j\times\pi/2$.

Emitter–base, two emitters, $x_j=2.5\ \mu$m:

$$
A_{EB}=2(24)(42)+2\left[2(24+42)\right](2.5)\frac\pi2=2016+1037=3050\ \mu\mathrm m^2,\qquad
C_{je0}=(3050)(1.09\times10^{-3})\ \mathrm{pF}=3.3\ \mathrm{pF}.
$$

Collector–base, base 137 × 64 µm, $x_j=3\ \mu$m:

$$
A_{CB}=(137)(64)+2(137+64)(3)\frac\pi2=8768+1894=10{,}660\ \mu\mathrm m^2,\qquad
C_{\mu0}=(10{,}660)(1.23\times10^{-4})\ \mathrm{pF}=1.3\ \mathrm{pF}.
$$

With the rounded per-area values these are 3.0 pF and 1.1 pF.

### Step 5 — Collector–substrate capacitance

The collector (the epi pocket and its buried layer) meets the substrate in three places:

| Part | Area (µm²) | $C_{j0}/A$ (pF/µm²) | $C$ (pF) |
|---|---|---|---|
| Isolation sidewall, $17\times2(183+147)\times\pi/2$ | 17,600 | $1.21\times10^{-4}$ | 2.1 |
| Buried layer incl. 8-µm side diffusion, $(131+16)(89+16)$ | 15,400 | $4.0\times10^{-4}$ | 6.2 |
| Remaining epi bottom, $183\times147-15{,}400$ | 11,500 | $1.21\times10^{-4}$ | 1.4 |

$$
C_{cs0}\approx2.1+6.2+1.4=9.7\ \mathrm{pF},
$$

or about 8 pF with the rounded per-area values. The buried layer dominates because the heavier substrate doping, not the epi, sets its depletion width.

### Step 6 — Summary

| Element | Estimate |
|---|---|
| $r_b$ (extrinsic) | ≈ 5 Ω |
| $r_c$ | ≈ 165 Ω (≈ 90 Ω in saturation) |
| $C_{je0}$ | ≈ 3–3.3 pF |
| $C_{\mu0}$ | ≈ 1.1–1.3 pF |
| $C_{cs0}$ | ≈ 8–10 pF |

The large emitter area and the wide base give small series resistances for 20-mA operation, at the cost of large capacitances.
