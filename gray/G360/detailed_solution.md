# Detailed solution - G360

Represent the transistor by its equivalent input noise voltage and current generators, write the noise figure for a source resistance $R_S$, and minimize it with respect to $R_S$. The standard treatment neglects the correlation between the two generators; the effect of keeping it is checked at the end.

### Step 1 — Equivalent input generators

At low frequency, with flicker noise neglected, the voltage generator contains the thermal noise of $r_b$ and the collector shot noise referred through $g_m$, and the current generator is the base shot noise:

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right)=\frac{4kT}{2g_m}\left(1+2g_mr_b\right),\qquad
\frac{\overline{i_i^2}}{\Delta f}=2qI_B=\frac{2qI_C}{\beta_F}=\frac{4kT}{2}\,\frac{g_m}{\beta_F},
$$

where $2qI_C=2kT\,g_m$ was used.

### Step 2 — Noise figure and its minimum

With uncorrelated generators, the total input noise relative to the source thermal noise $4kTR_S$ gives

$$
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}.
$$

Setting $dF/dR_S=0$ gives $\overline{i_i^2}R_S^2=\overline{v_i^2}$, so

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{\overline{v_i^2}}{\overline{i_i^2}}}=\frac{\sqrt{\beta_F}}{g_m}\sqrt{1+2g_mr_b},\qquad
F_{\mathrm{opt}}=1+\frac{2\sqrt{\overline{v_i^2}\,\overline{i_i^2}}}{4kT\,\Delta f}=1+\sqrt{\frac{1+2g_mr_b}{\beta_F}} .
$$

### Step 3 — Numerical values

At $I_C=2$ mA, $g_m=2\ \mathrm{mA}/26\ \mathrm{mV}=76.9$ mS ($1/g_m=13\ \Omega$), and $2g_mr_b=2(76.9\ \mathrm{mS})(100\ \Omega)=15.4$, so $\sqrt{1+2g_mr_b}=\sqrt{16.4}=4.05$. With $\sqrt{\beta_F}=7.07$:

$$
R_{S(\mathrm{opt})}=7.07\times13\ \Omega\times4.05=372\ \Omega,\qquad
F_{\mathrm{opt}}=1+\frac{4.05}{7.07}=1.572,\qquad
10\log_{10}1.572=1.97\ \mathrm{dB}.
$$

### Step 4 — Effect of correlation

Both generators contain the collector shot noise (as $i_c/g_m$ in $v_i$ and $i_c/\beta_F$ in $i_i$), and in the actual circuit the base current noise flows through $r_b+R_S$ rather than through $R_S$ alone. Computing the noise figure directly from all sources with $R_S$ in place and minimizing numerically gives $R_{S(\mathrm{opt})}\approx385\ \Omega$ and $F_{\mathrm{opt}}\approx1.78$ (2.5 dB). The optimum source resistance is almost unchanged; the minimum noise figure is about 0.5 dB higher than the standard estimate of 2.0 dB because $r_b$ is not small compared with $1/g_m$ at this current.
