# Golden Solution - G200

## Reference answer

$v_o/v_i = -g_mR_L = -9.68$; $T_0 = 1.35\ \mathrm{ns} + (101.8\ \mathrm{k\Omega})\,C_{gd}$, so $f_{-3\text{dB}} = \dfrac{1}{2\pi[1.35\ \mathrm{ns} + 101.8\ \mathrm{k\Omega}\cdot C_{gd}]}$: 118 MHz for $C_{gd} \to 0$, ≈ 85 MHz for $C_{gd} = 5$ fF, ≈ 57 MHz for $C_{gd} = 14$ fF.

- $g_m = \sqrt{2(60\ \mu)(62.5)(0.5\ \mathrm{m})} = 1.94$ mA/V; $C_{gs} + C_{gd} = g_m/(2\pi\cdot3\ \mathrm{GHz}) = 102.7$ fF, so $C_{gs} = 102.7\ \mathrm{fF} - C_{gd}$.
- $C_{db0} = (500\ \mu\mathrm{m^2})(0.4) + (100\ \mu\mathrm{m})(0.4) = 240$ fF; $C_{db} = 240/\sqrt{1 + 7.5/0.6} = 65.3$ fF.
- Zero-value resistances: $R_{gs0} = R_S = 10\ \mathrm{k\Omega}$; $R_{gd0} = R_S + R_L + g_mR_LR_S = 111.8\ \mathrm{k\Omega}$; $R_{db0} = R_L = 5\ \mathrm{k\Omega}$.
- $T_0 = R_S(102.7\ \mathrm{fF} - C_{gd}) + 111.8\ \mathrm{k\Omega}\cdot C_{gd} + 5\ \mathrm{k\Omega}\times65.3\ \mathrm{fF} = 1.027\ \mathrm{ns} + 0.327\ \mathrm{ns} + 101.8\ \mathrm{k\Omega}\cdot C_{gd}$.
- Because $C_{gd}$ is Miller-multiplied ($R_{gd0}/R_S \approx 11$), the bandwidth depends strongly on the unspecified $C_{gd}$.

## Grading notes

+2: gain −9.68 (±3%), $C_{db} \approx 65$ fF, $C_{gs} + C_{gd} \approx 103$ fF from $f_T$, and $T_0$ expressed correctly as a function of $C_{gd}$ (≈ 1.35 ns + 102 kΩ·$C_{gd}$, or equivalent with $C_{gs}$ eliminated); a numerical example with an explicitly assumed $C_{gd}$ is fine. +1: correct structure with one slip (e.g., $C_{db}$ without the bias correction, giving 240 fF, or $C_{gd}$ treated as 0 but stated as an assumption with $f \approx 118$ MHz). 0: correct gain and method but $C_{gd}$ silently dropped, or $C_{gs}$ taken equal to the whole 103 fF while also adding a separate $C_{gd}$. −2 (asserted as fact): a specific $C_{gd}$ value presented as given data, Miller multiplication missing (Cgd seen by $R_S$ only), or a gain of the wrong sign/magnitude from a wrong $g_m$ formula. Typesetting slips in an intermediate expansion that do not affect the values (e.g., $5^3$ written for $5\times10^3$, followed by the correct 111.8 kΩ) are trivial and do not lower +2.
