# Golden Solution - G230

## Reference answer

$t_r \approx 2.2\,T_0 \approx 3.0$ ns (an exact multi-pole calculation gives ≈ 2.4 ns).

- Gain −38.7; $T_0 = 1.35$ ns (dominated by $C_{gs1}R_S = 0.75$ ns, with 0.29 ns from $C_{gd1}$, 0.28 ns from $C_{gd2}R_L$, 0.04 ns from $C_{gs2}$).
- Waveform: $v_o(t) \approx -38.7\ \mathrm{mV}(1 - e^{-t/1.35\ \mathrm{ns}})$: the output reaches its final value of −38.7 mV within ≈ 6–7 ns; on a 0–300 ns axis it appears as an almost instantaneous step to −38.7 mV, flat thereafter.

## Grading notes

+2: $t_r$ ≈ 2.4–3.3 ns and an inverted step settling to −38.7 mV within ≈ 10 ns. +1: $t_r$ within ±30% or the final value not stated. 0: $t_r$ right but waveform wrong. −2 (asserted as fact): non-inverting or wrong final value by a large factor, or a rise time comparable to the plain CS stage (≈ 15 ns) presented as the cascode's.
