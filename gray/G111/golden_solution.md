# Golden Solution - G111

## Reference answer

$I_Q = 2.86$ mA.
- $R_L = 2\ \mathrm{k\Omega}$: $I_QR_L = 5.72\ \mathrm{V} < V_{CC}$, so clipping starts on the negative swing when $Q_1$ cuts off: $\hat V_{om} = 5.72$ V, $P_L = \hat V_{om}^2/(2R_L) = 8.18$ mW. Waveforms ($s = \sin\omega t$): $I_{c1} = 2.86(1+s)$ mA (0 to 5.72 mA), $V_{ce1} = 15 - 5.72s$ V (9.28 to 20.72 V, in antiphase), $P_{c1} = 2.86(1+s)(15 - 5.72s)$ mW: 42.9 mW at the zero crossings, 0 at the negative output peak, a maximum of 53.7 mW at $s \approx 0.81$ (53.1 mW at the positive peak, so a slight dip there); average 34.7 mW.
- $R_L = 10\ \mathrm{k\Omega}$: $I_QR_L = 28.6\ \mathrm{V} > V_{CC}$, clipping is symmetrical at $Q_1$/$Q_2$ saturation: $\hat V_{om} = 14.8$ V, $P_L = 14.8^2/20\ \mathrm{k\Omega} = 10.95$ mW. $I_{c1} = 2.86 + 1.48s$ mA (1.38 to 4.34 mA), $V_{ce1} = 15 - 14.8s$ V (0.2 to 29.8 V), $P_{c1} = 42.9 - 20.1s - 21.9s^2$ mW: 0.87 mW at the positive peak, 41.1 mW at the negative peak, maximum 47.5 mW at $s \approx -0.46$; average 31.9 mW.

## Grading notes

+2: both powers within ±3% (8.18 mW with the negative-swing limit $I_QR_L$, 10.95 mW with $V_{CC} - V_{CE(\text{sat})}$) and waveform sketches with the correct ranges and phases ($I_{c1}$ and $V_{ce1}$ in antiphase, $P_{c1}$ at twice-frequency-like shape with the right extreme values approximately). +1: both powers right, waveforms only qualitative or with one range wrong. 0: one of the two powers right, or powers right with no waveforms. −2 (asserted as fact): $\hat V_{om} = 14.8$ V used for 2 kΩ (missing the $I_QR_L$ clipping), $P_L$ computed with the peak instead of the average ($\hat V^2/R_L$), or $I_{c1}$ shown constant.
