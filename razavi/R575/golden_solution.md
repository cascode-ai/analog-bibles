# Golden Solution - R575

## Reference answer

$R_{on1} \approx 81.5$ Ω (81.1–81.8 Ω over the 0–20 mV input range). The phase shift is ≈ −2.9° (the output lags; a delay of ≈ 81 ps); the amplitude is attenuated by only 0.13%.

- Deep triode with $V_{in} \approx V_{out}$: $R_{on1} = 1/[\mu_nC_{ox}(W/L)(V_{DD} - V_{in} - V_{TH})] = 1/[5.36\ \mathrm{mA/V^2} \times (3 - 0.01 - 0.7)\ \mathrm{V}] = 81.5$ Ω.
- $V_{out}/V_{in} = 1/(1 + j\omega R_{on1}C_H)$ with $\omega R_{on1}C_H = 2\pi(10^8)(81.5)(10^{-12}) = 0.0512$, so $\phi = -\arctan(0.0512) = -2.93°$.

## Grading notes

+2: $R_{on1}$ ≈ 81 Ω (±3%) and a phase of ≈ −2.9° (±0.2°), output lagging. +1: right values with the sign or direction of the phase not stated, or the phase given only as the equivalent delay (≈ 81 ps). 0: the right triode formula and operating point ($V_{GS} \approx 2.99$ V, $V_{ov} \approx 2.29$ V) with an arithmetic or unit slip in $R_{on1}$ (e.g., 81.5 kΩ instead of 81.5 Ω) and the phase then computed consistently from that value; $R_{on1}$ right and the phase wrong through a slip, including $\omega RC$ in radians reported as degrees (≈ 0.05°). -2 (asserted as fact): a saturation-region formula for $R_{on}$, a phase lead, or a wrong formula or operating point that puts $R_{on}$ off by a factor of 2 or more.
