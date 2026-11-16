# Golden Solution - G356

## Reference answer

≈ 63 µV rms in 1 kHz (spot density ≈ $3.96\times10^{-12}$ V²/Hz).

- Stage generators: $\overline{v^2} = 2\cdot4kT(r_b + 1/2g_m) = 8.8\times10^{-16}$ V²/Hz; $\overline{i^2} = 2qI_B = 3.2\times10^{-29}$ A²/Hz at each base ($I_C = 0.5\ \mu$A, $I_B = 0.1$ nA).
- Total referred to $v_s$: both source resistors' thermal noise, $2\times4kT R_S = 3.32\times10^{-12}$; each base's current noise flowing in its $R_S$, $2\times\overline{i^2}R_S^2 = 2\times3.2\times10^{-13} = 6.4\times10^{-13}$; plus $\overline{v^2} = 8.8\times10^{-16}$ (negligible). Sum $3.96\times10^{-12}$ V²/Hz.
- In 1 kHz: $3.96\times10^{-9}$ V² → 62.9 µV rms. The source resistances' own thermal noise dominates (≈ 84%).

## Grading notes

+2: 60–66 µV rms with both source resistors' thermal noise and the base-current noise in $R_S$ included. +1: only one base's current-noise term (≈ 60 µV) or a minor slip. 0: only one $R_S$'s thermal noise counted (≈ 48 µV) or the current-noise terms left out (≈ 58 µV) with otherwise sound work. −2 (asserted as fact): source-resistor noise excluded and the stage's $\overline{v^2}$ alone reported (≈ 0.9 µV), current noise multiplied by β, or results off by more than a factor of 3.
