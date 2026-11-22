# Detailed solution - G037

The base of the substrate $pnp$ is the uniformly doped epi between the bottom of the emitter and the substrate, so its Gummel number is $Q_B=N_DW_B$. A measured $V_{BE}$ at known $I_C$ fixes $I_S$, hence $Q_B$, hence $W_B$; adding the 3-µm emitter depth gives the epi thickness. The epitaxial pinch resistor conducts through the same slice of epi, so its sheet resistance follows from the same $Q_B$.

### Step 1 — Epi donor concentration

With the given electron mobility,

$$
N_D=\frac1{q\mu_n\rho}=\frac1{(1.6\times10^{-19}\ \mathrm C)(800\ \mathrm{cm^2/V\,s})(2\ \Omega\,\mathrm{cm})}=3.9\times10^{15}\ \mathrm{cm^{-3}}.
$$

### Step 2 — Base charge from $V_{BE}$

For a uniformly doped base with vertical flow and negligible recombination,

$$
I_C=I_Se^{V_{BE}/V_T},\qquad I_S=\frac{qAD_pn_i^2}{Q_B}\quad\Rightarrow\quad Q_B=\frac{qAD_pn_i^2}{I_C}e^{V_{BE}/V_T},
$$

with $Q_B=N_DW_B$ the donors per unit area in the base. With $A=5100\ \mu\mathrm m^2=5.1\times10^{-5}\ \mathrm{cm^2}$:

$$
\frac{qAD_pn_i^2}{I_C}=\frac{(1.6\times10^{-19}\ \mathrm C)(5.1\times10^{-5}\ \mathrm{cm^2})(10\ \mathrm{cm^2/s})(2.25\times10^{20}\ \mathrm{cm^{-6}})}{10\ \mu\mathrm A}=1836\ \mathrm{cm^{-2}}.
$$

At 525 mV, $e^{525/26}=e^{20.19}=5.88\times10^8$ and $Q_B=1.08\times10^{12}\ \mathrm{cm^{-2}}$.

### Step 3 — Base width and epi thickness

$$
W_B=\frac{Q_B}{N_D}=\frac{1.08\times10^{12}\ \mathrm{cm^{-2}}}{3.9\times10^{15}\ \mathrm{cm^{-3}}}=2.76\times10^{-4}\ \mathrm{cm}=2.8\ \mu\mathrm m,\qquad
t_{epi}=W_B+3\ \mu\mathrm m=5.8\ \mu\mathrm m.
$$

| $V_{BE}$ (mV) | $Q_B$ (cm⁻²) | $W_B$ (µm) | $t_{epi}$ (µm) |
|---|---|---|---|
| 525 | $1.08\times10^{12}$ | 2.8 | 5.8 |
| 560 | $4.15\times10^{12}$ | 10.6 | 13.6 |

### Step 4 — Epitaxial pinch-resistor sheet resistance

The pinch resistor conducts by electrons in the epi slice of thickness $W_B$ between the 3-µm cap and the substrate, so

$$
R_\square=\frac\rho{W_B}=\frac1{q\mu_nQ_B}.
$$

At 525 mV: $R_\square=1/[(1.6\times10^{-19}\ \mathrm C)(800\ \mathrm{cm^2/V\,s})(1.08\times10^{12}\ \mathrm{cm^{-2}})]=7.2\ \mathrm{k\Omega}/\square$; at 560 mV: 1.9 kΩ/□.

The epi thickness therefore ranges from about 5.8 µm (wafers at 525 mV) to 13.6 µm (wafers at 560 mV), and the epitaxial pinch-resistor sheet resistance from about 7.2 kΩ/□ (thin epi) down to 1.9 kΩ/□ (thick epi). A higher $V_{BE}$ means a smaller $I_S$, a wider base and a lower pinch sheet resistance.
