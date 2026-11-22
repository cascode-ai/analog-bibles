# Detailed solution - G358

Use the MOS pair's equivalent input generators, add the thermal noise of both 100-MΩ source resistors and the gate current noise flowing through them, and refer everything to one voltage in series with $v_s$. Then integrate the white density over 1 kHz.

### Step 1 — Generators of the MOS pair

Each device contributes channel noise $4kT\cdot2/(3g_m)$ referred to its gate; the two combine into one generator in series with the first gate. Each gate keeps the shot noise of its leakage current:

$$
\frac{\overline{v^2}}{\Delta f}=2\cdot4kT\,\frac{2}{3g_m}=4kT(2.67\ \mathrm{k\Omega})=4.4\times10^{-17}\ \mathrm{V^2/Hz},\qquad
\frac{\overline{i^2}}{\Delta f}=2qI_G=3.2\times10^{-35}\ \mathrm{A^2/Hz}.
$$

### Step 2 — Referring all sources to $v_s$

The stage responds to the difference of the gate voltages, so each uncorrelated noise voltage at either gate adds in mean square to the equivalent noise in series with $v_s$. The gates draw essentially no current, so each current generator flows entirely through its own $R_S$:

$$
\frac{\overline{v_{eq}^2}}{\Delta f}=2\cdot4kTR_S+2\,\frac{\overline{i^2}}{\Delta f}R_S^2+\frac{\overline{v^2}}{\Delta f}.
$$

| Contribution | Expression | Value (V²/Hz) |
|---|---|---|
| Source resistors | $2(1.66\times10^{-20}\ \mathrm{V\cdot C})(100\ \mathrm{M\Omega})$ | $3.32\times10^{-12}$ |
| Gate current noise in $R_S$ | $2(3.2\times10^{-35}\ \mathrm{A^2/Hz})(100\ \mathrm{M\Omega})^2$ | $6.4\times10^{-19}$ |
| Stage voltage generator | $\overline{v^2}/\Delta f$ | $4.4\times10^{-17}$ |
| Total | | $3.32\times10^{-12}$ |

### Step 3 — Total noise in 1 kHz

$$
\overline{v_{eq}^2}=(3.32\times10^{-12}\ \mathrm{V^2/Hz})(10^3\ \mathrm{Hz})=3.32\times10^{-9}\ \mathrm{V^2},\qquad
v_{eq,\mathrm{rms}}=57.6\ \mu\mathrm V .
$$

The result is essentially the thermal noise of the two 100-MΩ source resistors; the amplifier adds only 0.0013% in mean square. By comparison, the super-β bipolar pair gives about 63 µV in the same conditions, because its 0.1-nA base current noise flowing in 100 MΩ adds about 16% to the source noise. For very high source impedances the negligible gate current makes the MOS input stage the quieter choice.
