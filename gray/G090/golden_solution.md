# Golden Solution - G090

## Reference answer

Optimum: $I_{IN} = V_{CC}I_{OUT}/V_T$, giving $R_1 = V_T/I_{OUT}$ and $R_2 = \dfrac{V_T}{I_{OUT}}\ln\dfrac{V_{CC}}{V_T}$ (with $V_{BE}$ kept: $I_{IN} = (V_{CC}-V_{BE})I_{OUT}/V_T$, $R_2 = (V_T/I_{OUT})\ln[(V_{CC}-V_{BE})/V_T]$). For 30 V and 5 µA: $R_1 = 5.2$ kΩ, $R_2 \approx 36.7$ kΩ (total ≈ 42 kΩ), with $I_{IN} \approx 5.8$ mA. Not practical: the reference branch would draw ≈ 5.6–5.8 mA (≈ 0.17 W from 30 V) to produce 5 µA, a current ratio above 1000, only to save ≈ 15 kΩ of resistance compared with a 30-kΩ/27-kΩ design.

- $R_1 = (V_{CC} - V_{BE})/I_{IN}$, $R_2 = (V_T/I_{OUT})\ln(I_{IN}/I_{OUT})$.
- $R_T = \dfrac{V_{CC}-V_{BE}}{I_{IN}} + \dfrac{V_T}{I_{OUT}}\ln\dfrac{I_{IN}}{I_{OUT}}$; $\dfrac{dR_T}{dI_{IN}} = -\dfrac{V_{CC}-V_{BE}}{I_{IN}^2} + \dfrac{V_T}{I_{OUT}I_{IN}} = 0$ → $I_{IN} = (V_{CC}-V_{BE})I_{OUT}/V_T$ (a minimum, since the second derivative is positive).
- Then $R_1 = V_T/I_{OUT}$ and $R_2 = (V_T/I_{OUT})\ln[(V_{CC}-V_{BE})/V_T] \approx (V_T/I_{OUT})\ln(V_{CC}/V_T)$.
- Numbers: $R_1 = 26\ \mathrm{mV}/5\ \mu\mathrm{A} = 5.2$ kΩ; $R_2 = 5.2\ \mathrm{k}\times\ln(1154) = 36.7$ kΩ (36.5 kΩ with $V_{BE} = 0.7$ V); $I_{IN} = 5.8$ mA (5.6 mA).

## Grading notes

+2: correct expressions with the optimization shown, values ≈ 5.2 kΩ and ≈ 36.5–36.7 kΩ, and the judgement that they are impractical because of the very large input current/power (milliamps, ~0.17 W) relative to the 5-µA output. +1: expressions and values right but the practicality answer vague (no current/power argument), or the $V_{BE}$ handling differs slightly. 0: right expressions with wrong numbers, or right numbers without a valid derivation. -2 (asserted as fact): an optimum such as $R_1 = R_2$, $R_1$ independent of $I_{OUT}$, minimization done with respect to the wrong variable giving a different result, or the values declared practical.
