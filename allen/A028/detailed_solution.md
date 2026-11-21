# Detailed solution - A028

Only $C_{ox}=\varepsilon_{ox}/t_{ox}$ depends on the oxide thickness; $\phi_{MS}$, $\phi_F$, $Q_{b0}$ and $Q_{ss}$ depend on the dopings and the interface. So compute the thickness-independent terms once, evaluate the two charge terms for each oxide, and confirm the difference with a direct expression.

### Step 1 — Terms independent of $t_{ox}$

$$
\phi_F(\text{substrate})=-(0.0259\ \mathrm V)\ln\frac{3\times10^{16}}{1.45\times10^{10}}=-0.377\ \mathrm V,\qquad
\phi_F(\text{gate})=(0.0259\ \mathrm V)\ln\frac{4\times10^{19}}{1.45\times10^{10}}=0.563\ \mathrm V,
$$

so $\phi_{MS}=-0.940$ V and $-2\phi_F=0.753$ V. With $\varepsilon_{Si}=1.036\times10^{-12}$ F/cm,

$$
Q_{b0}=-\sqrt{2(1.6\times10^{-19}\ \mathrm C)(1.036\times10^{-12}\ \mathrm{F/cm})(3\times10^{16}\ \mathrm{cm^{-3}})(0.753\ \mathrm V)}=-8.66\times10^{-8}\ \mathrm{C/cm^2},
$$

and $Q_{ss}=(1.6\times10^{-19}\ \mathrm C)(10^{10}\ \mathrm{cm^{-2}})=1.6\times10^{-9}\ \mathrm{C/cm^2}$.

### Step 2 — Threshold for each oxide

For $t_{ox}=200$ Å, $C_{ox}=3.9(8.854\times10^{-14}\ \mathrm{F/cm})/(200\times10^{-8}\ \mathrm{cm})=1.727\times10^{-7}\ \mathrm{F/cm^2}$, and

$$
V_{T0}=\phi_{MS}-2\phi_F-\frac{Q_{b0}}{C_{ox}}-\frac{Q_{ss}}{C_{ox}}=-0.940+0.753+0.501-0.0093=0.306\ \mathrm V .
$$

The same steps for the thicker oxide:

| $t_{ox}$ | $C_{ox}$ (F/cm²) | $-Q_{b0}/C_{ox}$ | $Q_{ss}/C_{ox}$ | $V_{T0}$ |
|---|---|---|---|---|
| 200 Å | $1.727\times10^{-7}$ | 0.501 V | 0.0093 V | 0.306 V |
| 210 Å | $1.644\times10^{-7}$ | 0.526 V | 0.0097 V | 0.330 V |

### Step 3 — Difference

Since $1/C_{ox}=t_{ox}/\varepsilon_{ox}$, only the charge terms change, by

$$
\Delta V_{T0}=\left(-Q_{b0}-Q_{ss}\right)\frac{\Delta t_{ox}}{\varepsilon_{ox}}
=\frac{(8.66-0.16)\times10^{-8}\ \mathrm{C/cm^2}\times(10\times10^{-8}\ \mathrm{cm})}{3.453\times10^{-13}\ \mathrm{F/cm}}=0.0246\ \mathrm V .
$$

The 5 % thicker oxide raises the zero-bias threshold by about 25 mV, from 0.306 V to 0.330 V. The increase comes from the net charge $-Q_{b0}-Q_{ss}$ that the gate must balance through a smaller capacitance; the depletion charge dominates, and the positive interface charge slightly offsets it. This sensitivity is one reason oxide-thickness variation shows up as threshold variation between wafers.
