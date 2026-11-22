# Detailed solution - G357

Write the input-referred generators of one MOS transistor (channel thermal noise referred through $g_m$, gate leakage shot noise as the current generator), then combine the two devices of the differential pair exactly as for the bipolar version: the two voltage generators add in mean square into one generator in series with the first gate, while each gate keeps its own current generator.

### Step 1 — Generators of one MOS transistor

With the input shorted, the channel noise current $4kT\tfrac23g_m$ is referred to the gate by dividing by $g_m^2$:

$$
\frac{\overline{v_{i1}^2}}{\Delta f}=4kT\,\frac{2}{3g_m}=4kT\,\frac{2}{3(0.5\ \mathrm{mA/V})}=4kT(1333\ \Omega).
$$

With the input open, the only noise that requires an input current is the shot noise of the dc gate leakage current flowing into the gate; with $C_{gs}=0$ the channel noise does not couple to the input:

$$
\frac{\overline{i_{i1}^2}}{\Delta f}=2qI_G .
$$

### Step 2 — Combining the two halves

The output responds to the difference of the two gate voltages, so the uncorrelated voltage generators of the two transistors add in mean square and can be lumped in series with the first gate. The current generators depend on the impedance at each gate and stay at their own gates:

$$
\frac{\overline{v^2}}{\Delta f}=2\cdot4kT\,\frac{2}{3g_m}=4kT(2.67\ \mathrm{k\Omega})=(1.66\times10^{-20}\ \mathrm{V\cdot C})(2667\ \Omega)=4.4\times10^{-17}\ \mathrm{V^2/Hz},
$$

about 6.7 nV/√Hz, and

$$
\frac{\overline{i^2}}{\Delta f}=2qI_G=2(1.6\times10^{-19}\ \mathrm C)(0.1\ \mathrm{fA})=3.2\times10^{-35}\ \mathrm{A^2/Hz},
$$

about 5.7 aA/√Hz.

### Step 3 — Comparison with the super-β bipolar pair

The super-β pair at $I_{EE}=1\ \mu$A has $\overline{v^2}/\Delta f=8.8\times10^{-16}$ V²/Hz and $\overline{i^2}/\Delta f=3.2\times10^{-29}$ A²/Hz. The MOS pair has a voltage noise about 20 times lower in mean square, because $g_m=0.5$ mA/V is much larger than the bipolar devices' 19.2 µA/V, and a current noise six orders of magnitude lower, because the gate leakage is $10^6$ times smaller than the 0.1-nA base current.
