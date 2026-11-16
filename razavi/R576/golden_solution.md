# Golden Solution - R576

## Reference answer

For $V_m = 1$ V: $R_{on1} \approx 143.5$ Ω (142.4–144.6 Ω over the ±10 mV swing) and a phase shift of ≈ −5.15° (−5.11° to −5.19°), i.e., a delay of ≈ 143 ps. For $V_m = 10$ mV: 81.5 Ω and −2.93° (81 ps).

- $R_{on1} = 1/[5.36\ \mathrm{mA/V^2} \times (3 - 1 - 0.7)\ \mathrm{V}] = 143.5$ Ω; $\omega R_{on1}C_H = 0.0902$, so $\phi = -\arctan(0.0902) = -5.15°$.
- Raising the input level by 1 V raises $R_{on}$ by ≈ 76% and the phase lag (delay) from 2.9° (81 ps) to 5.2° (143 ps).
- Distortion: for a large input swing, the on-resistance, and with it the delay and the attenuation, changes with the instantaneous input level. The output is then a signal-dependent, time-shifted copy of the input, a nonlinear operation that creates harmonics. Even within ±10 mV around 1 V, the phase varies by about ±0.04°.

## Grading notes

+2: $R_{on1}$ ≈ 143–144 Ω and a phase of ≈ −5.1° to −5.2°, compared with ≈ 81 Ω / −2.9° at $V_m = 10$ mV, plus the explanation that the input-dependent $R_{on}$, and hence phase or delay, produces distortion. +1: numbers right but the comparison or the distortion explanation missing. 0: right method with slips in the numbers. -2 (asserted as fact): $R_{on}$ decreasing as $V_m$ rises, a phase shift claimed to be independent of the input level, or a saturation-region model.
