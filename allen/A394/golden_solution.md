# Golden Solution - A394

## Reference answer

$R_2 = R_1 = 100$ kΩ and $V_{REF} = 0$ V.
- Noninverting input: $v_+ = \dfrac{R_1v_{OUT}+R_2V_{REF}}{R_1+R_2}$; the output switches when $v_{IN} = v_+$.
- $V_{TRP}^+ = \dfrac{R_1}{R_1+R_2}V_{OH}+\dfrac{R_2}{R_1+R_2}V_{REF}$ (output high, input rising), $V_{TRP}^- = \dfrac{R_1}{R_1+R_2}V_{OL}+\dfrac{R_2}{R_1+R_2}V_{REF}$.
- Width: $\dfrac{R_1}{R_1+R_2}(V_{OH}-V_{OL}) = 1$ V → $R_1 = R_2$, so $R_2 = 100$ kΩ.
- $V_{TRP}^- = 0 + 0.5V_{REF} = 0$ → $V_{REF} = 0$; check $V_{TRP}^+ = 0.5\times2 = 1$ V.

## Grading notes

+2: $R_2$ = 100 kΩ and $V_{REF}$ = 0 V with correct trip-point equations. +1: one value right, the other off by a slip. 0: correct equations, both values wrong by slips. −2 (asserted as fact): noninverting formulas used (giving 200 kΩ and 2/3 V), or a nonzero $V_{REF}$ claimed necessary.
