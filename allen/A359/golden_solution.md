# Golden Solution - A359

## Reference answer

≈ 73 µV rms (1/f dominated).

- $g_{m1} = \sqrt{2\cdot120\ \mu\cdot33\cdot50\ \mu} = 629$ µS, $g_{m4} = \sqrt{2\cdot25\ \mu\cdot160\cdot125\ \mu} = 1000$ µS, $g_{m10} = \sqrt{2\cdot120\ \mu\cdot20\cdot75\ \mu} = 600$ µS.
- The drain noise currents of M1, M2, M4, M5, M10 and M11 all reach the output essentially unattenuated (M4/M5 through the cascodes, M10 through the M10–M11 mirror), so $e_{eq}^2 = 2e_{n1}^2\left[1 + \dfrac{g_{m4}^2e_{n4}^2}{g_{m1}^2e_{n1}^2} + \dfrac{g_{m10}^2e_{n10}^2}{g_{m1}^2e_{n1}^2}\right]$.
- 1/f: $g_m^2e^2 = KF\cdot I_D/(fC_{ox}L^2)$, so the ratios are $(0.5\times125)/(4\times50) = 0.3125$ for M4/M5 and $75/50 = 1.5$ for M10/M11; bracket 2.81. $e_{n1}^2 = 4\times10^{-28}/(2\cdot24.7\times10^{-4}\cdot16.5\ \mu\cdot0.5\ \mu\cdot120\ \mu\cdot f) = 8.18\times10^{-11}/f$ → $e_{eq}^2 = 4.60\times10^{-10}/f$ V²/Hz.
- Thermal: bracket $1 + g_{m4}/g_{m1} + g_{m10}/g_{m1} = 3.54$, $e_{n1}^2 = 1.75\times10^{-17}$ → $e_{eq}^2 = 1.24\times10^{-16}$ V²/Hz (11 nV/√Hz); corner ≈ 3.7 MHz.
- rms² = $4.60\times10^{-10}\ln(10^5) + 1.24\times10^{-16}\times10^5 = 5.30\times10^{-9} + 1.2\times10^{-11}$ V² → 72.9 µV. The input pair alone would give 43 µV; the n-channel mirror M10/M11 is the largest load contributor.

## Grading notes

+2: 66–80 µV with the input pair, the p-channel current sources and the n-channel mirror bottom devices included, 1/f integrated logarithmically. +1: 60–66 or 80–88 µV from a slip in one contribution, or one of the two load groups weighted incorrectly (but included). 0: only the input pair counted (≈ 43 µV) or one load group omitted. −2 (asserted as fact): thermal noise only (≈ 3.5 µV), 1/f density multiplied by the bandwidth, the cascode devices M6–M9 treated as dominant noise sources, or p-channel constants applied to the n-channel devices so as to change the result by more than 2×.
