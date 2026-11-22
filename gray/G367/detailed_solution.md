# Detailed solution - G367

Express the noise figure through the circuit's equivalent noise resistance. Because the equivalent input noise current is negligible at tens of ohms, the excess noise ratio $F-1$ is inversely proportional to $R_S$, so doubling $R_S$ roughly halves it.

### Step 1 — Equivalent input generators of the stage

With $I_{EE}\approx9.3\ \mathrm V/100.25\ \mathrm{k\Omega}=92.8\ \mu$A, each device has $I_C=46.4\ \mu$A, $1/2g_m=280\ \Omega$ and $I_B=0.464\ \mu$A. The pair doubles the per-side voltage noise $4kT(r_b+1/2g_m+R_E)$, and the two 20-kΩ loads, referred through the differential gain $|A_d|=R_C/(1/g_m+R_E)=18.9$, add $4kT(112\ \Omega)$:

$$
\frac{\overline{v_i^2}}{\Delta f}\approx4kT\left[2(200+280+500)+112\right]\ \Omega=4kT(2.07\ \mathrm{k\Omega}),\qquad
\frac{\overline{i_i^2}}{\Delta f}=2qI_B=1.48\times10^{-25}\ \mathrm{A^2/Hz}.
$$

### Step 2 — Noise figure as a function of $R_S$

$$
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}\approx1+\frac{R_{eq}}{R_S},\qquad R_{eq}=\frac{\overline{v_i^2}}{4kT\,\Delta f}=2.07\ \mathrm{k\Omega},
$$

because the current term $\overline{i_i^2}R_S^2$ is equivalent to only $0.02\ \Omega$ at 50 Ω and $0.09\ \Omega$ at 100 Ω. The source's own noise $4kTR_S$ grows in proportion to $R_S$, while the dominant amplifier noise, the voltage generator, does not.

### Step 3 — Numerical comparison

| $R_S$ | $F$ | NF |
|---|---|---|
| 50 Ω | $1+2073/50=42.5$ | 16.3 dB |
| 100 Ω | $1+2073/100=21.7$ | 13.4 dB |

The noise figure decreases, by about 2.9 dB, when $R_S$ is raised from 50 Ω to 100 Ω.

### Step 4 — Relation to the optimum

The noise figure would keep falling as $R_S$ rises toward the optimum

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{\overline{v_i^2}}{\overline{i_i^2}}}=\sqrt{\frac{3.44\times10^{-17}\ \mathrm{V^2/Hz}}{1.48\times10^{-25}\ \mathrm{A^2/Hz}}}\approx15\ \mathrm{k\Omega}
$$

Any increase from 50 Ω in this range therefore lowers $F$. Only above about 15 kΩ would the current generator take over and the noise figure rise again.
