# Golden Solution - alsim-08-4-06

## Reference answer

Hand analysis: $V_{TRP}^+ \approx +0.152$ V, $V_{TRP}^- \approx -0.152$ V.
- Rising input, starting with M2 off: M1 carries all of $i_5$ through M3, and M6 (5× M3) tries to source $i_6 = 5i_3$ into $v_{o2}$, holding it high. The state flips when $i_2$ reaches $i_6$: $i_3 = i_1 = i_5/(1+5) = 8.33\ \mu$A, $i_2 = 41.67\ \mu$A.
- $v_{GS1} = 0.7+\sqrt{2(8.33)/(110\cdot10)} = 0.823$ V, $v_{GS2} = 0.7+\sqrt{2(41.67)/1100} = 0.975$ V (common source node, so the thresholds and body effect cancel in the difference).
- $V_{TRP}^+ = v_{GS2}-v_{GS1} = 0.152$ V; by symmetry (M7 = 5× M4) $V_{TRP}^- = -0.152$ V. Compared with $i_5 = 20\ \mu$A (±0.096 V) the hysteresis grows as $\sqrt{i_5}$.

Expected simulation: a symmetric hysteresis loop of $v_{o2}$ (high ≈ 2.5 V for negative $v_{in}$, low ≈ 0.8 V for positive $v_{in}$) with trip points ≈ ±0.14 V for the LEVEL-1 model (channel-length modulation shifts the M6/M3 current ratio slightly) and ≈ ±0.11 V for the LEVEL-3 model (mobility degradation and short-channel effects).

## Grading notes

A correct answer gives hand trip points ±0.15 V (±0.01 V) from $i_1 = i_5/6$, $i_2 = 5i_5/6$ and $\beta = K'W/L = 1100\ \mu\mathrm{A/V^2}$, and a simulation showing a symmetric hysteresis loop with trip points within ≈ ±0.10–0.16 V depending on the model (LEVEL 1 ≈ ±0.14 V). Values of ±0.215 V come from using $\beta = 550\ \mu\mathrm{A/V^2}$ (half of $K'W/L$) and are a formula error; a loop without hysteresis, or trip points set by the threshold voltages, is wrong.
