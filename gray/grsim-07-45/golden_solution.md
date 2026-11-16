# Golden Solution - grsim-07-45

## Reference answer

$g_m = 1.94$ mA/V, $C_{gs} = 74.7$ fF.

(a) Zero-value: $C_{gs}R_S = 0.747$ ns; $C_{gd}(R_S + R_L + g_mR_LR_S) = 14\ \mathrm{fF}\times111.8\ \mathrm{k\Omega} = 1.565$ ns; $T_0 = 2.31$ ns → $|p_1| \approx 4.3\times10^8$ rad/s (68.8 MHz).
Short-circuit: $C_{gs}$ with $C_{gd}$ shorted sees $R_S\|R_L\|(1/g_m) = 447\ \Omega$ → 33.4 ps; $C_{gd}$ with $C_{gs}$ shorted sees $R_L$ → 70 ps; $|p_2| \approx 2.99\times10^{10} + 1.43\times10^{10} = 4.42\times10^{10}$ rad/s (7.04 GHz).

(b) Simulation: poles at 69.5 MHz and 6.97 GHz (RHP zero at $g_m/C_{gd}$ = 22 GHz); estimates within ≈ 1%.

## Grading notes

Hand part: +2 needs $p_1 \approx 4.3\times10^8$ rad/s (≈ 69 MHz, ±5%) and $p_2 \approx 4.4\times10^{10}$ rad/s (≈ 7 GHz, ±5%). A correct simulation shows ≈ 69.5 MHz and ≈ 7.0 GHz. −2 (asserted as fact): no Miller multiplication in $p_1$, $C_{gs}$'s short-circuit resistance taken as $R_S$ (giving a much lower $p_2$), or the two poles interchanged.
