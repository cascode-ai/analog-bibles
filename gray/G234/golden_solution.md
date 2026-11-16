# Golden Solution - G234

## Reference answer

$t_r \approx 2.2\,T_0 \approx 229$ ns (zero-value $T_0 = 104$ ns, $f_{-3\text{dB}} \approx 1.5$ MHz).

- Gain −39.5. Waveform: $v_o(t) \approx -39.5\ \mathrm{mV}(1 - e^{-t/104\ \mathrm{ns}})$: ≈ −15 mV at 50 ns, −24 mV at 100 ns, −34 mV at 200 ns, ≈ −37 mV at 300 ns. Over the 0–300 ns window the output is still visibly approaching its −39.5 mV final value (it reaches 90% at ≈ 240 ns).

## Grading notes

+2: $t_r$ ≈ 210–250 ns and an inverted exponential with τ ≈ 100 ns, not yet fully settled at 300 ns (≈ −37 mV), final value −39.5 mV. +1: correct $t_r$ but the waveform's 300-ns value or final value missing/slightly off. 0: $t_r$ right, waveform wrong (e.g., settled in 30 ns). −2 (asserted as fact): non-inverting or grossly wrong final value, or $t_r$ taken as $T_0$ without the 2.2 factor.
