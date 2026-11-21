# Detailed solution - G371

At high frequencies the transistor's current gain falls, so the collector shot noise referred to the input as a current grows as $f^2$. Add this term to the low-frequency input noise current of the shunt-feedback stage, and find the frequency where the noise figure has doubled, which is a 3-dB rise.

### Step 1 — Low-frequency noise figure

At $I_C=0.5$ mA, $g_m=19.2$ mS, $I_B=10\ \mu$A and $\overline{v_{ia}^2}/\Delta f=4kT(r_b+1/2g_m)=4kT(126\ \Omega)$. With the feedback resistor's noise current added at the input,

$$
\frac{\overline{i_i^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta_0^2}\right)+\frac{\overline{v_{ia}^2}}{R_F^2\,\Delta f}+\frac{4kT}{R_F}=4.94\times10^{-24}\ \mathrm{A^2/Hz},
$$

and relative to the source noise current $4kT/R_S=1.66\times10^{-24}$ A²/Hz,

$$
F_0=1+\frac{\overline{i_i^2}+\overline{v_{ia}^2}/R_S^2}{(4kT/R_S)\,\Delta f}=3.99\quad(6.0\ \mathrm{dB}).
$$

### Step 2 — Frequency dependence of the referred collector noise

The collector shot noise $2qI_C$ is referred to the input through the current gain. With $C_\mu$ neglected and $C_\pi\approx g_m/(2\pi f_T)$, the current gain is the single-pole function

$$
\beta(jf)=\frac{\beta_0}{1+j\beta_0f/f_T},\qquad
\frac{1}{|\beta(jf)|^2}=\frac{1}{\beta_0^2}+\frac{f^2}{f_T^2}.
$$

The referred collector noise is therefore

$$
\frac{2qI_C}{|\beta(jf)|^2}=\frac{2qI_C}{\beta_0^2}+2qI_C\,\frac{f^2}{f_T^2}.
$$

The first part is already in $F_0$; the second is the excess that rises with frequency. The other generators are frequency independent in this model.

### Step 3 — Condition for a 3-dB rise

A 3-dB increase in NF means $F=2F_0$, so the excess input noise current must equal $F_0$ times the source noise:

$$
2qI_C\,\frac{f^2}{f_T^2}=F_0\,\frac{4kT}{R_S}
\quad\Longrightarrow\quad
\frac{f}{f_T}=\sqrt{\frac{F_0\,(4kT/R_S)}{2qI_C}}=\sqrt{\frac{3.99\,(1.66\times10^{-24}\ \mathrm{A^2/Hz})}{1.6\times10^{-22}\ \mathrm{A^2/Hz}}}=0.203 .
$$

$$
f=0.203\,(500\ \mathrm{MHz})\approx102\ \mathrm{MHz}.
$$

### Step 4 — Check with a full analysis

A nodal noise analysis keeping $r_b$, the noise of $R_F$ and $R_L$, the correlation of the collector shot noise, and the same single-pole transistor model gives $F_0\approx4.2$ (6.2 dB) and a 3-dB point near 101 MHz. Both treatments place the corner at about 100 MHz, roughly $f_T/5$, because the large white input noise (base shot noise plus $R_F$) delays the point where the collector noise takes over.
