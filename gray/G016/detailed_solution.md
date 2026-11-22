# Detailed solution - G016

The Early effect in a uniformly doped base comes from base-width modulation: a larger $|V_{CE}|$ widens the collector–base depletion region, narrows the neutral base, and raises the minority-carrier gradient. Express $\partial I_C/\partial V_{CE}$ through $dW_B/dV_{CE}$, identify the Early voltage, and divide by the current. Magnitudes are used for the $pnp$ quantities.

### Step 1 — Current versus base width

For a uniform base the collector current is a diffusion current with a linear profile:

$$
|I_C|=\frac{qAD_pn_i^2}{N_DW_B}\,e^{|V_{BE}|/V_T}\ \propto\ \frac1{W_B}.
$$

At fixed $V_{BE}$, only $W_B$ changes with $V_{CE}$, so

$$
\frac{\partial|I_C|}{\partial|V_{CE}|}=-\frac{|I_C|}{W_B}\frac{dW_B}{d|V_{CE}|}=\frac{|I_C|}{V_A},\qquad
V_A=\frac{W_B}{\left|dW_B/dV_{CE}\right|}.
$$

The depletion edge moves into the base by 0.11 µm per volt, which is the rate at which the neutral base width shrinks.

### Step 2 — Early voltage and output resistance

$$
V_A=\frac{10\ \mu\mathrm m}{0.11\ \mu\mathrm m/\mathrm V}=90.9\ \mathrm V,\qquad
r_o=\frac{V_A}{|I_C|}=\frac{90.9\ \mathrm V}{0.5\ \mathrm{mA}}=182\ \mathrm{k\Omega}.
$$

The calculation uses the given rate as constant near the bias point; it fixes the small-signal $r_o$ there.

Result: $r_o\approx182$ kΩ, with $V_A\approx91$ V.
