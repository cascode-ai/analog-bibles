# Golden Solution - G096

## Reference answer

$S \approx 0.042$ (with $I_{C1} \approx 1.36$ mA, $I_{OUT} \approx 0.68$ mA).

- $Q_1$'s base-emitter junction is across $R_2$, so $I_{OUT} \approx V_{BE1}/R_2$ with $V_{BE1} = V_T\ln(I_{C1}/I_S)$; $I_{C1} = (V_{CC} - V_{BE1} - V_{BE2})/R_1$ flows in $R_1$ ($Q_2$ supplies $R_2$).
- Operating point: $I_{C1} \approx 1.365$ mA, $V_{BE1} \approx 0.685$ V, $I_{OUT} \approx 0.685$ mA, $V_{BE2} \approx 0.667$ V.
- $\dfrac{\partial I_{OUT}}{\partial V_{CC}} = \dfrac{1}{R_2}\dfrac{V_T}{I_{C1}}\dfrac{\partial I_{C1}}{\partial V_{CC}} \approx \dfrac{V_T}{R_2I_{C1}R_1}$, so $S = \dfrac{V_T}{V_{BE1}}\cdot\dfrac{V_{CC}}{V_{CC} - V_{BE1} - V_{BE2}} = \dfrac{0.026}{0.685}\cdot\dfrac{15}{13.65} \approx 0.042$.
- The output is referenced to $V_{BE}$, which varies only logarithmically with the supply-derived current, hence $S \ll 1$ (a simple resistor-fed mirror would have $S \approx 1$).

## Grading notes

+2: $S$ in 0.038–0.045 with the $V_{BE}$-reference reasoning. +1: $S \approx V_T/V_{BE} \approx 0.038$ with the factor $V_{CC}/(V_{CC} - 2V_{BE})$ dropped and the approximation stated, or a small slip. 0: correct structure (I_OUT ≈ V_BE/R_2) with the derivative not completed. -2 (asserted as fact): $S \approx 1$ (treating it as a simple mirror), $I_{OUT}$ taken as $(V_{CC} - 2V_{BE})/R_1$, or $S$ off by orders of magnitude from a formula error.
