# Golden Solution - G226

## Reference answer

$v_o/v_i = -g_mR_L = -1.94\ \mathrm{mA/V}\times20\ \mathrm{k\Omega} = -38.7$, with $g_m = \sqrt{2k_n'(W/L)I_D} = \sqrt{2(60\ \mu)(62.5)(0.5\ \mathrm{m})} = 1.94$ mA/V. No current flows in $R_S$ at low frequency.

## Grading notes

+2: −38.7 (±3%). +1: $g_m$ slightly off (e.g., $L_{\text{drwn}}$-type slip) with the correct formula. 0: correct formula with an arithmetic error giving a clearly wrong value. −2 (asserted as fact): $R_S$ forming a divider with a finite gate resistance, a non-inverting gain, or $g_m = k'(W/L)I_D$.
