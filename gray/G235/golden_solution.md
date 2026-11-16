# Golden Solution - G235

## Reference answer

$t_r \approx 2.2\,T_0 \approx 58$ ns (zero-value $T_0 = 26.2$ ns; an exact calculation gives ≈ 49 ns).

- Gain −39.1. Waveform: $v_o(t) \approx -39.1\ \mathrm{mV}(1 - e^{-t/26\ \mathrm{ns}})$: ≈ −20 mV at 20 ns, −34 mV at 50 ns, −38.6 mV at 100 ns, settled at −39.1 mV by ≈ 150 ns and flat to 300 ns.

## Grading notes

Two parts: rise time and waveform. +2: $t_r$ ≈ 45–65 ns and an inverted exponential settling to ≈ −39 mV by ≈ 100–150 ns. +1: $t_r$ within ±30%, or the final value missing, with everything else right. 0: $t_r$ right but the waveform wrong (e.g., the final level wrong through a unit slip in $g_mR_L$, or a non-inverting output), or the waveform right but $t_r$ wrong. −2 (asserted as fact): both $t_r$ and the waveform wrong through modeling errors (e.g., a non-inverting output or a grossly wrong final value together with a wrong $t_r$), or the CE-stage rise time (≈ 230 ns) claimed for the cascode.
