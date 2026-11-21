# Detailed solution - G355

Find each transistor's bias, write the standard input-referred generators of a single bipolar transistor, and then combine the two devices of the differential pair: their independent voltage generators add in mean square into one generator in series with one input, while each base keeps its own current generator.

### Step 1 — Bias of each transistor

By symmetry the tail current splits equally, so each device runs at

$$
I_C=\frac{I_{EE}}{2}=0.5\ \mu\mathrm A,\qquad
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mu\mathrm A}{26\ \mathrm{mV}}=19.2\ \mu\mathrm A/\mathrm V,\qquad
\frac{1}{2g_m}=26\ \mathrm{k\Omega},\qquad
I_B=\frac{I_C}{\beta}=\frac{0.5\ \mu\mathrm A}{5000}=0.1\ \mathrm{nA}.
$$

### Step 2 — Generators of one transistor

For a single transistor with base resistance $r_b$, the thermal noise of $r_b$ and the collector shot noise $2qI_C$ referred through $g_m$ form the voltage generator, and the base shot noise forms the current generator (plus the collector shot noise referred through $\beta$):

$$
\frac{\overline{v_{i1}^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right)=4kT(0.5+26)\ \mathrm{k\Omega},\qquad
\frac{\overline{i_{i1}^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right).
$$

At this very low current the $1/2g_m$ term (26 kΩ) far exceeds $r_b$ (0.5 kΩ).

### Step 3 — Combining the two halves

The differential output responds to $v_{b1}-v_{b2}$. A voltage generator in series with the base of $Q_2$ therefore has the same effect as an equal, inverted generator in series with the base of $Q_1$. The two generators are uncorrelated, so their mean-square values add, giving a single generator in series with the base of $Q_1$:

$$
\frac{\overline{v^2}}{\Delta f}=2\cdot4kT\left(r_b+\frac{1}{2g_m}\right)=4kT(53\ \mathrm{k\Omega})
=(1.66\times10^{-20}\ \mathrm{V\cdot C})(53\ \mathrm{k\Omega})=8.8\times10^{-16}\ \mathrm{V^2/Hz},
$$

about 30 nV/√Hz. The current generators cannot be moved in this way, because their effect depends on the impedance driving each base, so each base keeps its own generator to ground:

$$
\frac{\overline{i^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right)
=2(1.6\times10^{-19}\ \mathrm C)(0.1\ \mathrm{nA}+20\ \mathrm{fA})\approx3.2\times10^{-29}\ \mathrm{A^2/Hz},
$$

about 5.7 fA/√Hz; the $I_C/\beta^2$ term is negligible.

### Step 4 — Interpretation

The super-β devices give an extremely small noise current because the base current is only 0.1 nA, which suits high-impedance sources. The price of the low bias current is a large noise voltage, dominated by the collector shot noise through $1/2g_m=26$ kΩ per device; the two sources balance at $R_S=\sqrt{\overline{v^2}/\overline{i^2}}\approx5$ MΩ.
