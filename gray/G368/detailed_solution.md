# Detailed solution - G368

Use the stage's equivalent input generators to write the noise figure as a function of $R_S$. At 50 Ω the voltage generator dominates; at 200 kΩ, which lies above the optimum source resistance, the base current noise dominates. Compare the two values directly.

### Step 1 — Equivalent input generators

With $I_{EE}\approx9.3\ \mathrm V/100.25\ \mathrm{k\Omega}=92.8\ \mu$A, each transistor has $I_C=46.4\ \mu$A, $1/2g_m=280\ \Omega$ and $I_B=0.464\ \mu$A. Doubling the per-side voltage noise $4kT(r_b+1/2g_m+R_E)$ and adding the referred load noise $4kT(112\ \Omega)$,

$$
\frac{\overline{v_i^2}}{\Delta f}\approx4kT(2.07\ \mathrm{k\Omega})=3.44\times10^{-17}\ \mathrm{V^2/Hz},\qquad
\frac{\overline{i_i^2}}{\Delta f}=2qI_B=1.48\times10^{-25}\ \mathrm{A^2/Hz}.
$$

### Step 2 — Noise figure versus source resistance

$$
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}
=1+\frac{\overline{v_i^2}}{4kTR_S\,\Delta f}+\frac{\overline{i_i^2}R_S}{4kT\,\Delta f}.
$$

The voltage term falls as $1/R_S$ and the current term grows as $R_S$; they are equal at the optimum

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{\overline{v_i^2}}{\overline{i_i^2}}}\approx15\ \mathrm{k\Omega},\qquad
F_{\mathrm{opt}}=1+\frac{2\sqrt{\overline{v_i^2}\,\overline{i_i^2}}}{4kT\,\Delta f}=1.27\ (1.0\ \mathrm{dB}).
$$

### Step 3 — Values at 50 Ω and 200 kΩ

At $R_S=50\ \Omega$ the voltage term dominates: $F=1+2073/50=42.5$, or 16.3 dB.

At $R_S=200$ kΩ:

$$
F=1+\frac{2073\ \Omega}{200\ \mathrm{k\Omega}}+\frac{(1.48\times10^{-25}\ \mathrm{A^2/Hz})(200\ \mathrm{k\Omega})}{1.66\times10^{-20}\ \mathrm{V\cdot C}}
=1+0.0104+1.79=2.80,\qquad \mathrm{NF}=4.5\ \mathrm{dB}.
$$

### Step 4 — Conclusion

The noise figure decreases, from about 16.3 dB at 50 Ω to about 4.5 dB at 200 kΩ. At 200 kΩ the source resistance is beyond the 15-kΩ optimum, so the base current shot noise flowing through $R_S$ now dominates and $F$ has begun to rise again from its 1.0-dB minimum, but it remains far below the 50-Ω value, where the amplifier's voltage noise was 40 times the source noise.
