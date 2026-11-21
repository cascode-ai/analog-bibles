# Detailed solution - G034

The saturation current of a bipolar transistor is inversely proportional to the base Gummel number $Q_B$, so a measured $V_{BE}$ at known $I_C$ determines $Q_B$. The pinch resistor uses the same active-base layer, and its sheet resistance is inversely proportional to the same $Q_B$.

### Step 1 — $Q_B$ from $V_{BE}$

For a base with negligible recombination and constant diffusivity, the collector current is

$$
I_C=I_Se^{V_{BE}/V_T},\qquad I_S=\frac{qA\bar D_nn_i^2}{Q_B},
$$

where $Q_B$ is the number of acceptors per unit area in the base. Solving for $Q_B$:

$$
Q_B=\frac{qA\bar D_nn_i^2}{I_C}\,e^{V_{BE}/V_T}.
$$

With $A=(100\ \mu\mathrm m)^2=10^{-4}\ \mathrm{cm^2}$:

$$
\frac{qA\bar D_nn_i^2}{I_C}=\frac{(1.6\times10^{-19}\ \mathrm C)(10^{-4}\ \mathrm{cm^2})(13\ \mathrm{cm^2/s})(2.25\times10^{20}\ \mathrm{cm^{-6}})}{10\ \mu\mathrm A}=4680\ \mathrm{cm^{-2}}.
$$

At $V_{BE}=520$ mV, $e^{520/26}=e^{20}=4.85\times10^8$, so $Q_B=2.27\times10^{12}\ \mathrm{cm^{-2}}$ ($I_S=2.1\times10^{-14}$ A). At 580 mV, $e^{22.31}=4.88\times10^9$, so $Q_B=2.28\times10^{13}\ \mathrm{cm^{-2}}$ ($I_S=2.1\times10^{-15}$ A).

### Step 2 — Pinch-resistor sheet resistance

The pinch resistor conducts by holes in the same active-base layer, so its sheet conductance is $q\mu_p$ times the acceptor count per unit area:

$$
R_\square=\frac1{q\mu_pQ_B}.
$$

For $Q_B=2.27\times10^{12}\ \mathrm{cm^{-2}}$:

$$
R_\square=\frac1{(1.6\times10^{-19}\ \mathrm C)(150\ \mathrm{cm^2/V\,s})(2.27\times10^{12}\ \mathrm{cm^{-2}})}=18.4\ \mathrm{k\Omega}/\square .
$$

| $V_{BE}$ (mV) | $I_S$ (A) | $Q_B$ (cm⁻²) | Pinch $R_\square$ (kΩ/□) |
|---|---|---|---|
| 520 | $2.1\times10^{-14}$ | $2.27\times10^{12}$ | 18.4 |
| 580 | $2.1\times10^{-15}$ | $2.28\times10^{13}$ | 1.83 |

### Step 3 — Interpretation

A 60-mV spread in $V_{BE}$ is a factor $e^{60/26}=10$ in $I_S$, and therefore a 10:1 spread in $Q_B$ and in the pinch sheet resistance. A higher $V_{BE}$ means a smaller $I_S$, more base charge, and a lower pinch-resistor sheet resistance: from about 18 kΩ/□ on the 520-mV wafers down to about 1.8 kΩ/□ on the 580-mV wafers.
