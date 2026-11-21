# Detailed solution - A025

Evaluate the threshold expression term by term: the Fermi potentials of substrate and gate give the work-function difference $\phi_{MS}$; the oxide capacitance converts the depletion and interface charges into voltages; together these give the zero-bias threshold $V_{T0}$, and the body-effect term adds the effect of $V_{SB}=2$ V.

### Step 1 — Fermi potentials and $\phi_{MS}$

$$
\phi_F(\text{substrate})=-(0.0259\ \mathrm V)\ln\frac{3\times10^{16}}{1.45\times10^{10}}=-0.377\ \mathrm V,
\qquad
\phi_F(\text{gate})=(0.0259\ \mathrm V)\ln\frac{4\times10^{19}}{1.45\times10^{10}}=0.563\ \mathrm V,
$$

$$
\phi_{MS}=\phi_F(\text{substrate})-\phi_F(\text{gate})=-0.377\ \mathrm V-0.563\ \mathrm V=-0.940\ \mathrm V .
$$

The surface must be bent by $2|\phi_F|=0.753$ V for strong inversion, so $-2\phi_F=+0.753$ V.

### Step 2 — Oxide capacitance

$$
C_{ox}=\frac{\varepsilon_{ox}}{t_{ox}}=\frac{3.9(8.854\times10^{-14}\ \mathrm{F/cm})}{200\times10^{-8}\ \mathrm{cm}}=1.727\times10^{-7}\ \mathrm{F/cm^2}.
$$

### Step 3 — Charge terms

With $\varepsilon_{Si}=11.7\varepsilon_0=1.036\times10^{-12}$ F/cm, the depletion charge at threshold and zero bias is

$$
Q_{b0}=-\sqrt{2q\varepsilon_{Si}N_A\,2|\phi_F|}
=-\sqrt{2(1.6\times10^{-19}\ \mathrm C)(1.036\times10^{-12}\ \mathrm{F/cm})(3\times10^{16}\ \mathrm{cm^{-3}})(0.753\ \mathrm V)}
=-8.66\times10^{-8}\ \mathrm{C/cm^2},
$$

so $-Q_{b0}/C_{ox}=0.501$ V. The interface charge gives

$$
\frac{Q_{ss}}{C_{ox}}=\frac{(1.6\times10^{-19}\ \mathrm C)(10^{10}\ \mathrm{cm^{-2}})}{1.727\times10^{-7}\ \mathrm{F/cm^2}}=0.0093\ \mathrm V .
$$

### Step 4 — Zero-bias threshold and body-effect coefficient

$$
V_{T0}=\phi_{MS}-2\phi_F-\frac{Q_{b0}}{C_{ox}}-\frac{Q_{ss}}{C_{ox}}
=-0.940+0.753+0.501-0.009=0.306\ \mathrm V,
$$

$$
\gamma=\frac{\sqrt{2q\varepsilon_{Si}N_A}}{C_{ox}}
=\frac{\sqrt{2(1.6\times10^{-19})(1.036\times10^{-12})(3\times10^{16})}\ \mathrm{C\,cm^{-2}V^{-1/2}}}{1.727\times10^{-7}\ \mathrm{F/cm^2}}=0.578\ \mathrm{V^{1/2}}.
$$

### Step 5 — Threshold at $V_{SB}=2$ V

$$
\begin{aligned}
V_T&=V_{T0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right)\\
&=0.306\ \mathrm V+(0.578\ \mathrm{V^{1/2}})\left(\sqrt{2.753\ \mathrm V}-\sqrt{0.753\ \mathrm V}\right)\\
&=0.306+0.578(1.659-0.868)=0.306+0.457=0.763\ \mathrm V .
\end{aligned}
$$

The 2 V reverse source–bulk bias raises the threshold by 0.457 V, from 0.306 V to 0.763 V. The interface charge is a minor term here (9 mV); the work-function difference and the depletion charge dominate.
