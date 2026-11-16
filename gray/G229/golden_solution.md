# Golden Solution - G229

## Reference answer

$t_r \approx 2.2\,T_0 \approx 14.5$ ns (equivalently $0.35/f_{-3\text{dB}}$ with $f_{-3\text{dB}} \approx 24$ MHz).

- Gain −38.7; zero-value time constants: $C_{gs}R_S = 0.75$ ns, $C_{gd}(R_S + R_L + g_mR_LR_S) = 5.84$ ns, $T_0 = 6.59$ ns; a single dominant pole with $\tau = T_0$.
- Waveform: $v_o(t) \approx -38.7\ \mathrm{mV}\,(1 - e^{-t/6.6\ \mathrm{ns}})$ — an inverted, first-order exponential: ≈ −21 mV at 5 ns, −30 mV at 10 ns, −37 mV at 20 ns, within 1% of −38.7 mV after ≈ 30 ns, then flat at −38.7 mV out to 300 ns. (The right-half-plane zero at $g_m/C_{gd}$ gives only a negligible initial positive blip.)

## Grading notes

+2: $t_r$ ≈ 13–16 ns and a sketch of an inverted exponential settling to ≈ −38.7 mV within a few tens of ns and flat thereafter. +1: correct rise time with the final value or polarity left unspecified, or a correct waveform with a slightly off $t_r$ (±25%). 0: $t_r$ right but the waveform wrong (e.g., still rising at 300 ns). −2 (asserted as fact): non-inverting final value, final value off by a large factor, or $t_r$ computed as $1/f_{-3\text{dB}}$ or $T_0$ (≈ 6.6 ns) without the 2.2 factor and stated as the 10–90% time.
