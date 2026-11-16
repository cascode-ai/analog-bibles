# Golden Solution - A286

## Reference answer

$V_{Bias} = V_T + 2V_{DS}(\mathrm{sat}) \approx 1.30$ V; $R = V_{SD}(\mathrm{sat})/I = 12.65$ kΩ; $v_{o1}/v_{in} = g_{m1}\left[(g_{mC2}r_{dsC2}r_{ds2})\,\|\,(g_{mC4}r_{dsC4}r_{ds4})\right] \approx 6.4\times10^3$.

- $V_{DS}(\mathrm{sat})$ of the n-channel devices: $\sqrt{2(50\,\mu)/(110\,\mu\cdot10)} = 0.302$ V. The battery sits between the common-source node and the MC1/MC2 gates, so $V_{Bias} = V_{DS1} + V_{GS,C1} = 0.302 + (0.7 + 0.302) = 1.30$ V.
- p-channel: $V_{SD}(\mathrm{sat}) = \sqrt{2(50\,\mu)/(50\,\mu\cdot5)} = 0.632$ V. With M3's gate at the top of R and MC3's gate at the bottom, $V_{SG,C3} = V_{SG3} - V_{SD3} + IR$; equal devices at equal current have $V_{SG,C3} = V_{SG3}$, so $V_{SD3} = IR$ → $R = 0.632/50\ \mu\mathrm{A} = 12.65$ kΩ.
- Gain: $v_{in}$ produces $\pm g_{m1}v_{in}/2$ in the two halves; the mirror adds them at $v_{o1}$, so $v_{o1}/v_{in} = g_{m1}R_{out}$ with $R_{out}$ the parallel combination of the n- and p-channel cascodes. Numbers: $g_{m1} = g_{mC2} = 331.7\ \mu$S, $g_{mC4} = 158\ \mu$S, $r_{dsN} = 0.5$ MΩ, $r_{dsP} = 0.4$ MΩ: $R_{out} = 82.9\ \mathrm{M\Omega}\,\|\,25.3\ \mathrm{M\Omega} = 19.4$ MΩ → gain ≈ 6.4×10³ (≈ 6.6×10³ if the $r_{ds}$ terms added to $g_mr_{ds}^2$ are kept). With the input polarity of the figure the output is in phase with $v_{in}$.

## Grading notes

Three parts, about one third each. +2: $V_{Bias}$ = 1.30 V (±0.02 V), R ≈ 12.6–12.7 kΩ, and the gain expression $g_{m1}R_{out}$ with both cascode resistances (a numerical value is not required; if given, 6.0–6.8×10³ in magnitude; the sign depends on the input convention). +1: two parts right and the third with a minor slip. 0: about half right. −2 (asserted as fact): $V_{Bias} = V_T + V_{DS}(\mathrm{sat})$ or $V_{Bias} = V_{DS}(\mathrm{sat})$, R from $V_{SG}/I$ or $V_T/I$, or a gain using a single $r_{ds}$ as the output resistance.
