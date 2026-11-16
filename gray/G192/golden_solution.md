# Golden Solution - G192

## Reference answer

$z_o(s) = \dfrac{1}{g_m}\cdot\dfrac{1 + sR_SC_{gs}}{1 + sC_{gs}/g_m}$: an inductive impedance.

- Low frequency: $z_o = 1/g_m = 3.33\ \mathrm{k\Omega}$ (70.5 dBΩ).
- Zero at $\omega_z = 1/(R_SC_{gs})$, i.e. $f_z = 0.159/C_{gs}[\mathrm{pF}]$ MHz; pole at $\omega_p = g_m/C_{gs}$ ($\approx \omega_T$), i.e. $f_p = 47.7/C_{gs}[\mathrm{pF}]$ MHz. Their ratio is $g_mR_S = 300$.
- Between $f_z$ and $f_p$, $|z_o|$ rises at +20 dB/decade (inductor $L \approx R_SC_{gs}/g_m$, e.g. 0.33 mH for $C_{gs} = 0.1$ pF); above $f_p$ it is flat at $R_S = 1$ MΩ (120 dBΩ).
- Model elements: $R_1 = 1/(g_m - 1/R_S) = 3.34\ \mathrm{k\Omega}$, $R_2 = R_S = 1$ MΩ, $L = R_SC_{gs}/(g_m - 1/R_S) = 3.34\times10^{9}\ \mathrm{\Omega\cdot s/F}\times C_{gs}$.
- Example: $C_{gs} = 0.1$ pF gives $f_z = 1.6$ MHz and $f_p = 477$ MHz, so the plot is flat at 3.33 kΩ to ≈ 1 MHz, rises over 1.6–480 MHz, and is flat at 1 MΩ up to 10 GHz.

## Grading notes

+2: correct $z_o(s)$ (or equivalent $R_1$, $R_2$, $L$ model) with low-frequency level $1/g_m = 3.33$ kΩ, high-frequency level $R_S = 1$ MΩ, zero at $1/(R_SC_{gs})$, pole at $g_m/C_{gs}$, and a +20 dB/decade rise between them; a numerical example with an assumed $C_{gs}$ is fine if labeled as such. +1: correct levels and slope but one break frequency wrong by a slip (e.g., missing 2π). 0: correct expression but the plot shape not described or levels only. −2 (asserted as fact): $|z_o|$ decreasing with frequency, the high-frequency level taken as $1/g_m$ or 0, or a specific numerical $C_{gs}$ presented as given. Values in an illustrative table for an assumed $C_{gs}$ that differ from the expression by a few percent (e.g., 20.9 kΩ for 21.2 kΩ) are rounding-level and do not lower +2.
