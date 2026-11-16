# Golden Solution - grsim-05-01

## Reference answer

Bias: $I_Q = I_R = (0 - 0.7 + 15)/5\ \mathrm{k\Omega} = 2.86$ mA (≈ 2.80 mA in simulation with $\beta_F = 100$, because of the mirror's base currents).
(a) $R_L = 2\ \mathrm{k\Omega}$ ($I_QR_L = 5.72\ \mathrm{V} < V_{CC}$): $V_o = V_i - 0.7$ V (slope ≈ 1) for $-5.0\ \mathrm{V} \lesssim V_i \lesssim 15.5$ V; below $V_i \approx -5.0$ V, $Q_1$ cuts off and $V_o$ stays at $-I_QR_L = -5.72$ V ($Q_2$ sinks $I_Q$ from $R_L$); above $V_i \approx 15.5$ V, $Q_1$ saturates and $V_o \approx V_{CC} - V_{CE(\text{sat})} = 14.8$ V (nearly flat).
(b) $R_L = 10\ \mathrm{k\Omega}$ ($I_QR_L = 28.6\ \mathrm{V} > V_{CC}$): same positive limit; the negative limit is $Q_2$ saturation at $V_o = -14.8$ V, reached at $V_i \approx -14.1$ V. Linear (slope ≈ 1) between.
(c) With $V_i = 0.7 + 10\sin\omega t$: for 2 kΩ, $V_o = 10\sin\omega t$ except that the negative half is clipped flat at −5.72 V for about 110° of each cycle (where $\sin\omega t < -0.572$); positive peak 10 V. For 10 kΩ, $V_o$ is an undistorted 10-V-peak sine.
(d) Fourier analysis of the clipped waveform: 2 kΩ: $HD_2 \approx 14\%$, $HD_3 \approx 8\%$ (13.9% and 7.9% with clipping at −5.72 V; ≈14.4% and 8.1% with $I_Q = 2.80$ mA), fundamental ≈ 8.4 V, dc shift ≈ +0.86 V. 10 kΩ: only the exponential $V_{BE}$ variation distorts ($v_i = V_T\ln(1 + v_o/(I_QR_L)) + v_o$): $HD_2 \approx 0.01\%$, $HD_3 \approx 0.001\%$, i.e. negligible.

## Grading notes

A correct simulation shows: (a) unity-slope transfer offset by ≈ 0.7 V with a hard negative clip at ≈ −5.6 to −5.7 V and a positive limit near +14.8 V for 2 kΩ; (b) a symmetric-swing characteristic limited near ±14.8 V for 10 kΩ; (c) a one-sided flat clip of the negative half-cycle for 2 kΩ and a clean sine for 10 kΩ; (d) for 2 kΩ, $HD_2$ ≈ 13–15% and $HD_3$ ≈ 7–9%; for 10 kΩ both below ≈ 0.1%. Tolerances: limits ±0.2 V, distortion ±15% relative for 2 kΩ. +2 for all parts consistent with these; +1 if one part (e.g. the 10 kΩ distortion) is missing or slightly off; 0 if only the transfer characteristics are right; −2 for clipping placed on the wrong half-cycle, a negative limit at −14.8 V for 2 kΩ, or distortion values off by an order of magnitude asserted as results.
