# Golden Solution - A358

## Reference answer

≈ 80 µV rms (1/f dominated).

- $B_N = KF_N/(2C_{ox}K'_N) = 7.36\times10^{-22}$ V²·m², $B_P = 2.02\times10^{-22}$ V²·m².
- 1/f: $e_{n1}^2 = B_N/(fW_1L_1) = 7.36\times10^{-22}/(3\ \mu\mathrm{m}^2\cdot f) = 2.45\times10^{-10}/f$. Load term $(g_{m3}/g_{m1})^2(e_{n3}^2/e_{n1}^2) = \dfrac{K'_PB_P}{K'_NB_N}\left(\dfrac{L_1}{L_3}\right)^2 = \dfrac{50\times2.02}{110\times7.36} = 0.125$ → $e_{eq}^2 = 2(2.45\times10^{-10})(1.125)/f = 5.52\times10^{-10}/f$ V²/Hz.
- Thermal: $g_{m1} = \sqrt{2\cdot110\ \mu\cdot3\cdot15\ \mu} = 99.5$ µS, $g_{m3} = \sqrt{2\cdot50\ \mu\cdot15\cdot15\ \mu} = 150$ µS; $e_{eq}^2 = 2\,[8kT/(3g_{m1})](1 + g_{m3}/g_{m1}) = 2(1.11\times10^{-16})(2.51) = 5.56\times10^{-16}$ V²/Hz (23.6 nV/√Hz); the corner is ≈ 1 MHz, above the band.
- rms² = $5.52\times10^{-10}\ln(10^5) + 5.56\times10^{-16}\times10^5 = 6.36\times10^{-9} + 5.6\times10^{-11} = 6.41\times10^{-9}$ V² → 80 µV (79.7 µV from 1/f alone; 75.3 µV if the M3/M4 1/f term is dropped).

## Grading notes

+2: 77–83 µV, 1/f noise integrated as $e^2\ln(f_H/f_L)$, n-channel input constants, load contribution included. +1: 74–77 µV from neglecting the M3/M4 1/f contribution (the book's value 75.5 µV), or a small slip elsewhere. 0: right method with an error over 10 % (e.g. one transistor instead of two). −2 (asserted as fact): only thermal noise considered (≈ 7.5 µV), p-channel constants used for the n-channel input, the 1/f density multiplied by the bandwidth, or a result in nV/√Hz offered as the rms voltage.
