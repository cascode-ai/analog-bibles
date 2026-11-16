# Golden Solution - G130

## Reference answer

With $V_o = \hat V\sin\theta$: $I_{c1} = (\hat V/R_L)\sin\theta$ for $0 < \theta < \pi$ and 0 in the other half cycle; $V_{ce1} = V_{CC} - V_o = 15 - \hat V\sin\theta$ over the whole cycle (it rises above 15 V while $Q_2$ conducts); $P_{c1} = (\hat V/R_L)\sin\theta\,(15 - \hat V\sin\theta)$ in the first half cycle, 0 in the second.
- $\hat V = 11.5$ V: $I_{c1}$ half-sine of peak 5.75 mA; $V_{ce1}$ between 3.5 V and 26.5 V. Since $\hat V > V_{CC}/2$, $P_{c1}$ has two humps per conducting half cycle: maxima of $V_{CC}^2/(4R_L) = 28.1$ mW at $\sin\theta = 7.5/11.5$ (θ ≈ 41° and 139°) with a dip to $5.75\ \mathrm{mA} \times 3.5\ \mathrm{V} = 20.1$ mW at θ = 90°. Average ≈ 10.9 mW.
- $\hat V = 6$ V: $I_{c1}$ peak 3 mA; $V_{ce1}$ between 9 V and 21 V; $P_{c1}$ a single hump peaking at θ = 90° with $3\ \mathrm{mA} \times 9\ \mathrm{V} = 27$ mW. Average ≈ 9.8 mW.
- $\hat V = 3$ V: $I_{c1}$ peak 1.5 mA; $V_{ce1}$ between 12 V and 18 V; $P_{c1}$ single hump, peak $1.5\ \mathrm{mA} \times 12\ \mathrm{V} = 18$ mW. Average ≈ 6.0 mW.
- (Average $\bar P_{c1} = \hat V V_{CC}/(\pi R_L) - \hat V^2/(4R_L)$.)

## Grading notes

+2: correct waveform shapes (half-sine current, sinusoidal $V_{ce1}$ about 15 V in antiphase with the output, power zero during the off half cycle) and the key values for all three amplitudes: current peaks 5.75/3/1.5 mA, $V_{ce1}$ ranges, power peaks 28.1 mW (double hump with 20.1 mW dip) / 27 mW / 18 mW, within ±3%. Averages are optional. +1: all right except the double-hump shape at 11.5 V (peak given as 20.1 mW at θ = 90°), or one amplitude's values slipped. 0: shapes right, numbers largely missing. −2 (asserted as fact): $V_{ce1}$ shown constant or $I_{c1}$ flowing during both half cycles, power dissipation nonzero while $Q_1$ is off, or peak dissipation claimed to occur at the output peak for all amplitudes with a wrong value for 11.5 V presented as the maximum.
