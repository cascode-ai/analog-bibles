# Golden Solution - A018

## Reference answer

$\phi_0 \approx 0.917$ V, $x_p \approx -0.869\ \mu$m, $x_n \approx 4.3\times10^{-5}\ \mu$m (≈ 0.04 nm, i.e. essentially zero), $x_d \approx 0.869\ \mu$m, $C_{j0} \approx 21.3$ fF, $C_j(-2\ \mathrm{V}) \approx 11.9$ fF.

- $\phi_0 = \frac{kT}{q}\ln\frac{N_AN_D}{n_i^2} = 0.0259\ln\frac{5\times10^{35}}{2.1\times10^{20}} = 0.917$ V.
- $x_p = -\left[\frac{2\varepsilon_{Si}(\phi_0 - v_D)N_D}{qN_A(N_A+N_D)}\right]^{1/2} \approx -\left[\frac{2(1.036\times10^{-12})(2.917)}{(1.6\times10^{-19})(5\times10^{15})}\right]^{1/2} = -8.69\times10^{-5}$ cm.
- $x_n = |x_p|N_A/N_D = 0.869\ \mu\mathrm{m}\times5\times10^{-5} = 4.3\times10^{-5}\ \mu$m (charge neutrality $N_Dx_n = -N_Ax_p$); the depletion region lies almost entirely in the lightly doped p side, so $x_d = x_n - x_p \approx 0.869\ \mu$m.
- $C_{j0} = A\left[\frac{\varepsilon_{Si}qN_AN_D}{2(N_A+N_D)}\right]^{1/2}\frac{1}{\sqrt{\phi_0}} = (10^{-6}\ \mathrm{cm^2})\sqrt{\frac{(1.036\times10^{-12})(1.6\times10^{-19})(5\times10^{15})}{2(0.917)}} = 21.3$ fF.
- $C_j = C_{j0}/\sqrt{1 - v_D/\phi_0} = 21.3\ \mathrm{fF}/\sqrt{1 + 2/0.917} = 21.3/1.784 = 11.9$ fF.

## Grading notes

+2: $\phi_0$ = 0.91–0.92 V, $|x_p| \approx x_d \approx 0.87\ \mu$m (±3%), $x_n$ of order $4\times10^{-5}\ \mu$m (or stated as ≈ 0, negligible), $C_{j0} \approx 21$ fF and $C_j \approx 11.9$ fF (±5%). The sign of $x_p$ may be given as a magnitude. +1: all values right but one, the wrong one coming from an arithmetic slip, or $C_j$ computed correctly but $C_{j0}$ omitted. 0: correct method for the widths and $\phi_0$ but the capacitances wrong or missing. −2 (asserted as fact): depletion placed mainly on the heavily doped n side, the reverse voltage added with the wrong sign ($\phi_0 - 2$ V), or capacitance increasing under reverse bias. A unit slip with the right formulas, e.g. a value computed correctly in SI units and then mislabelled in the final prefix conversion (2.1×10⁻¹⁴ F written as 21 pF, or 4.3×10⁻⁹ cm written as 0.043 µm), is a computational slip, not −2: each affected value counts as wrong, so one such value gives +1 and two or more give 0.
