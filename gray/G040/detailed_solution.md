# Detailed solution - G040

The measured $V_{BE}$ at known $I_C$ gives the saturation current and hence the base Gummel number $Q_B$. The same $Q_B$ sets the active-base sheet resistance, and, by charge neutrality, the collector-side depletion width at which the base becomes fully depleted (punch-through).

### Step 1 — $Q_B$ from $V_{BE}$

For negligible base recombination, $I_C=I_Se^{V_{BE}/V_T}$ with $I_S=qA\bar D_nn_i^2/Q_B$, so

$$
Q_B=\frac{qA\bar D_nn_i^2}{I_C}e^{V_{BE}/V_T},\qquad
\frac{qA\bar D_nn_i^2}{I_C}=\frac{(1.6\times10^{-19}\ \mathrm C)(10^{-4}\ \mathrm{cm^2})(13\ \mathrm{cm^2/s})(2.25\times10^{20}\ \mathrm{cm^{-6}})}{10\ \mu\mathrm A}=4680\ \mathrm{cm^{-2}}.
$$

For the super-β device, $e^{480/26}=e^{18.46}=1.04\times10^8$, so $Q_B=4.88\times10^{11}\ \mathrm{cm^{-2}}$.

### Step 2 — Active-base sheet resistance

The active base conducts by holes, with $Q_B$ acceptors per unit area:

$$
R_\square=\frac1{q\bar\mu_pQ_B}=\frac1{(1.6\times10^{-19}\ \mathrm C)(150\ \mathrm{cm^2/V\,s})(4.88\times10^{11}\ \mathrm{cm^{-2}})}=85\ \mathrm{k\Omega}/\square .
$$

### Step 3 — Punch-through voltage

At punch-through the base is fully depleted, so by charge neutrality the collector depletion region holds $Q_B$ donors per unit area. With collector doping $N_D=10^{15}\ \mathrm{cm^{-3}}$ its width is

$$
x_d=\frac{Q_B}{N_D}=\frac{4.88\times10^{11}\ \mathrm{cm^{-2}}}{10^{15}\ \mathrm{cm^{-3}}}=4.88\ \mu\mathrm m .
$$

For a one-sided junction ($N_A\gg N_D$), $x_d=\sqrt{2\epsilon(\psi_0+V_R)/(qN_D)}$, so

$$
\psi_0+V_R=\frac{qN_Dx_d^2}{2\epsilon}=\frac{(1.6\times10^{-19}\ \mathrm C)(10^{15}\ \mathrm{cm^{-3}})(4.88\times10^{-4}\ \mathrm{cm})^2}{2(1.04\times10^{-12}\ \mathrm{F/cm})}=18.3\ \mathrm V,
\qquad V_R=18.3-0.55=17.7\ \mathrm V .
$$

### Step 4 — Standard device and comparison

The same calculation at $V_{BE}=560$ mV, $e^{21.54}=2.26\times10^9$:

| Device | $V_{BE}$ (mV) | $Q_B$ (cm⁻²) | $R_\square$ (kΩ/□) | $x_d$ at punch-through (µm) | $V_{PT}$ |
|---|---|---|---|---|---|
| Super-β | 480 | $4.88\times10^{11}$ | 85 | 4.9 | ≈ 18 V |
| Standard | 560 | $1.06\times10^{13}$ | 3.9 | 106 | ≈ 8.6 kV |

The super-β transistor gets its high gain from a very thin, lightly charged base, at the price of a punch-through voltage of only about 18 V. For the standard device the required collector depletion width, 106 µm, exceeds the whole epi layer, and the formal 8.6-kV value means punch-through cannot occur; its collector–base breakdown is set by avalanche instead.
