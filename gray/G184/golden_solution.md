# Golden Solution - G184

## Reference answer

$f_{-3\text{dB}} \approx 71$ MHz ($\omega_{-3\text{dB}} \approx 4.46\times10^8$ rad/s); the low-frequency gain is $-g_mR_L \approx -9.68$.

- $L_{\text{eff}} = 1.6\ \mu$m, $W/L = 62.5$; $g_m = \sqrt{2k_n'(W/L)I_D} = \sqrt{2(60\ \mu)(62.5)(0.5\ \mathrm{m})} = 1.94$ mA/V.
- $C_{gs} = \tfrac23(100)(1.6)(0.7)\ \mathrm{fF} = 74.7$ fF.
- Miller capacitance $C_M = C_{gd}(1 + g_mR_L) = 14\ \mathrm{fF}\times(1 + 9.68) = 150$ fF; total input capacitance $C_t = C_{gs} + C_M = 224$ fF.
- The gate node sees $R_S$ (no $r_\pi$, no $r_b$): $\omega_{-3\text{dB}} = 1/(R_SC_t) = 1/(10\ \mathrm{k\Omega}\times224\ \mathrm{fF}) = 4.46\times10^8$ rad/s → 71.0 MHz.
- (For comparison, the dominant pole including the $R_L/R_S$ term, $1/\{R_S[C_{gs} + C_{gd}(1 + g_mR_L + R_L/R_S)]\}$, gives 68.8 MHz; the exact two-pole response has its −3-dB point at 69.5 MHz.)

## Grading notes

+2: $f_{-3\text{dB}}$ between 66 and 75 MHz with the Miller capacitance $C_{gd}(1 + g_mR_L)$ added to $C_{gs}$ and the gate resistance $R_S$; results from the slightly more exact dominant-pole formula (≈ 69 MHz) are equally correct. +1: correct method with a small slip (e.g., $C_{gs}$ or $g_m$ off by a few percent, frequency within ±15%). 0: right method but a computational error giving a clearly wrong number, or only the angular frequency given with a wrong conversion. −2 (asserted as fact): Miller multiplication omitted ($C_{gd}$ taken alone, giving ≈ 180 MHz), $C_{gd}$ multiplied by $g_mR_L$ but placed at the output only, the pole computed with $R_L$ instead of $R_S$, or a gain/frequency off by a formula error (e.g., $g_m = k'(W/L)I_D$).
